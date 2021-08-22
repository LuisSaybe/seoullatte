const fs = require("fs");
const path = require("path");
const typescript = require("typescript");
const tsOptions = require("./tsconfig.json");

module.exports = {
  options: {
    debug: true,
    func: {
      list: ["t"],
      extensions: [".js", ".jsx"],
    },
    lngs: ["fr"],
    defaultValue: "",
    nsSeparator: "::",
    keySeparator: false,
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    trans: {
      component: "Trans",
      defaultsKey: "defaults",
      extensions: [".jsx"],
      fallbackKey: (_, value) => value,
    },
    resource: {
      loadPath: "web/i18n/{{lng}}/{{ns}}.json",
      savePath: "web/i18n/{{lng}}/{{ns}}.json",
    },
  },
  transform: function (file, enc, done) {
    const extension = path.extname(file.path);
    let content = fs.readFileSync(file.path, enc);

    if (extension === ".ts" || extension === ".tsx") {
      content = typescript.transpileModule(content, tsOptions).outputText;
    }

    this.parser.parseTransFromString(content);

    done();
  },
};
