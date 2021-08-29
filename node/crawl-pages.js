const puppeteer = require("puppeteer");
const url = require("url");
const fs = require("fs");

const getContentAndURL = async (browser, target) => {
  const visitedPathnames = new Set();
  const toVisit = [target];
  const result = [];
  const host = new URL(target).host;

  while (toVisit.length > 0) {
    const next = toVisit.pop();
    const nextParsed = new URL(next);
    visitedPathnames.add(nextParsed.pathname);
    const page = await browser.newPage();
    await page.goto(next, { waitUntil: "networkidle0" });
    const html = await page.content();
    const hrefs = (
      await page.$$eval("a", (links) => links.map((el) => el.href))
    ).filter((href) => {
      const parts = new URL(href);
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
    console.log(`Launching pupeteer in language: ${language}`);

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

    console.log("Begin crawling", process.env.ORIGIN);

    const results = await getContentAndURL(browser, process.env.ORIGIN);

    for (const { pathname, html } of results) {
      const name =
        pathname === "/" ? `dist/index` : `dist/${pathname.substring(1)}`;
      const fileName = `${name}-${language}.html`;
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
