const yargs = require("yargs");
const xlsx = require("xlsx");
const request = require("request-promise-native");
const jsdom = require("jsdom");
const fs = require("fs");

const SEARCH_URL = "https://krdict.korean.go.kr/api/search";
const VIEW_URL = "https://krdict.korean.go.kr/api/view";

const workbook = xlsx.readFile(yargs.argv.file);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const range = xlsx.utils.decode_range(sheet["!ref"]);
const regex = new RegExp("[0-9 ]", "g");
const timeout = 5000;
const batchSize = 8;
const start = yargs.argv.start || 0;
const end = Number(yargs.argv.end) || range.e.r;

const get = (uri, qs) =>
  request({
    qs: {
      key: yargs.argv.key,
      ...qs,
    },
    timeout,
    uri,
  });

const ADDITIONAL_WORDS = [
  "이다",
  "받침",
  "동",
  "거북",
  "망토",
  "합쇼체",
  "해요체",
  "해체",
  "해라체",
  "피다",
  "습니다",
  "습니까",
  "십시오",
  "읍시다",
  "요",
  "는다",
  "는",
  "에",
  "겨울",
  "존댓말",
  "반말",
  "이쁘다",
  "고프다",
  "고양이",
  "가",
  "치즈",
  "아르바이트",
  "는데",
  "훈민정음",
  "을",
  "조선",
  "것",
  "학교",
  "어요",
  "아요",
  "를",
];

const arrayToGroups = (array, size) => {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const subject = array[index];

    if (index % size === 0) {
      result.push([subject]);
    } else {
      result[result.length - 1].push(subject);
    }
  }

  return result;
};

const getWordsWithScore = () => {
  const result = [];

  for (let r = range.s.r + 1; r <= range.e.r; r++) {
    const textCell = sheet[xlsx.utils.encode_cell({ r, c: 1 })];
    const rankCell = sheet[xlsx.utils.encode_cell({ r, c: 4 })];

    result.push({
      rank: Number(rankCell.v.charCodeAt(0)),
      text: textCell.v.replace(regex, ""),
    });
  }

  result.sort((first, second) => {
    const rank = first.rank - second.rank;
    return rank === 0 ? first.text.localeCompare(second.text) : rank;
  });

  return result;
};

const getTargetCodes = async (q) => {
  const codes = {};
  const searchRequest = get(SEARCH_URL, q);

  let body;

  try {
    body = await searchRequest;
  } catch {
    return;
  }

  const element = new jsdom.JSDOM(body);
  const requestsAndCodes = Array.from(
    element.window.document.querySelectorAll("target_code"),
  ).map(({ innerHTML }) => ({
    code: innerHTML,
    request: get(VIEW_URL, {
      method: "target_code",
      q: innerHTML,
      trans_lang: yargs.argv.trans_lang,
      translated: "y",
    }),
  }));

  for (const requestAndCode of requestsAndCodes) {
    let viewBody;

    try {
      viewBody = await requestAndCode.request;
    } catch {
      continue;
    }

    codes[requestAndCode.code] = viewBody;
  }

  return codes;
};

const getWords = async (start, end) => {
  const targetCodes = {};
  const wordsAndScore = [
    ...ADDITIONAL_WORDS.map((text) => ({ text })),
    ...getWordsWithScore().slice(start, end),
  ];

  let index = 0;
  const wordAndScoreGroups = arrayToGroups(wordsAndScore, batchSize);

  for (const group of wordAndScoreGroups) {
    const promises = group.map(({ text }) => getTargetCodes(text));
    const maps = await Promise.all(promises);
    Object.assign(targetCodes, ...maps);
    console.log(
      `collecting group ${index} / ${wordAndScoreGroups.length} of size ${batchSize}`,
    );

    index++;
  }

  return targetCodes;
};

const startTime = new Date();

getWords(start, end).then((codes) => {
  fs.writeFileSync(
    `${yargs.argv.trans_lang}-${start}-${end}.json`,
    JSON.stringify(codes),
  );

  const endTime = new Date();

  console.log(
    `total duration = ${(endTime.getTime() - startTime.getTime()) /
      1000} seconds`,
  );
});
