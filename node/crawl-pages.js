const puppeteer = require("puppeteer");
const url = require("url");
const fs = require("fs");

const getContentAndURL = async (browser, language, target) => {
  const visitedPathnames = new Set();
  const toVisit = [target];
  const result = [];
  const host = url.parse(target).host;

  while (toVisit.length > 0) {
    const next = toVisit.pop();
    const nextParsed = url.parse(next);
    visitedPathnames.add(nextParsed.pathname);
    const page = await browser.newPage();
    await page.goto(next, { waitUntil: "networkidle0" });
    const html = await page.content();
    const hrefs = (
      await page.$$eval("a", (links) => links.map((el) => el.href))
    ).filter((href) => {
      const parts = url.parse(href);
      return (
        !visitedPathnames.has(parts.pathname) &&
        parts.host === host &&
        !toVisit.includes(href)
      );
    });

    page.close();
    toVisit.push(...hrefs);
    result.push({ pathname: nextParsed.pathname, html });
  }

  return result;
};

const run = async () => {
  for (const language of ["fr", "en"]) {
    console.log(`Writing files for language ${language}`);

    const browser = await new Promise((resolve, reject) => {
      puppeteer
        .launch({
          headless: true,
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            `--lang=${language}`,
          ],
        })
        .then(resolve, reject);
    });

    const results = await getContentAndURL(
      browser,
      language,
      process.env.ORIGIN,
    );

    for (const { pathname, html } of results) {
      const name =
        pathname === "/" ? `dist/index` : `dist/${pathname.substring(1)}`;
      const suffix = `-${language}`;
      const fileName = `${name}${suffix}.html`;
      fs.writeFileSync(fileName, html);

      console.log(`Wrote ${fileName}`);
    }

    browser.close();
  }

  // github action will hang if this is line is not here
  // should research why this happens, node programs should end after nothing is in the event loop
  process.exit(0);
};

run();
