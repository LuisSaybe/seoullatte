const yargs = require("yargs");
const request = require("request-promise-native");
const fs = require("fs");
const glob = require("glob");

const LOADED_WORDS_URL =
  "https://luissaybe.nyc3.digitaloceanspaces.com/seoul-latte/words/1.json.gz";
const VIEW_URL = "https://krdict.korean.go.kr/api/view";
const timeout = 10000;

const get = (uri, qs) =>
  request({
    qs: {
      key: yargs.argv.key,
      ...qs,
    },
    timeout,
    uri,
  });

const getDefinition = async (q) => {
  return get(VIEW_URL, {
    method: "target_code",
    q,
    trans_lang: yargs.argv.trans_lang,
    translated: "y",
  });
};

const getTargetCodes = () => {
  return new Promise((resolve, reject) => {
    glob("**/*.tsx", null, (er, files) => {
      if (er) {
        reject(er);
      } else {
        const codes = files
          .map((file) => fs.readFileSync(file, "utf8"))
          .join()
          .match(new RegExp('q="[0-9]+', "g"))
          .map((content) => content.match(new RegExp("[0-9]+", "g"))[0]);

        resolve([...new Set(codes)]);
      }
    });
  });
};

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

const getWords = async () => {
  const targetCodes = JSON.parse(
    await request({
      uri: LOADED_WORDS_URL,
      gzip: true,
    }),
  );
  const codesToWrite = (await getTargetCodes()).filter(
    (code) => !targetCodes.hasOwnProperty(code),
  );
  const groups = arrayToGroups(codesToWrite, 10);

  console.log("fetching", codesToWrite.length);

  for (let index = 0; index < groups.length; index++) {
    console.log(`${index} / ${groups.length}`);
    const group = groups[index];
    const promises = group.map((code) =>
      getDefinition(code).then((body) => {
        targetCodes[code] = body;
      }),
    );

    await Promise.all(promises);
  }

  console.log("writing", Object.keys(targetCodes).length, "codes");

  fs.writeFileSync(
    `${yargs.argv.trans_lang}.json`,
    JSON.stringify(targetCodes),
  );
};

getWords();
