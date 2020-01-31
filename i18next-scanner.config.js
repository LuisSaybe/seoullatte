const fs = require("fs");
const path = require("path");
const typescript = require("typescript");

module.exports = {
  options: {
    debug: true,
    func: {
      list: ["t"],
      extensions: [".ts", ".tsx"],
    },
    lngs: ["fr"],
    defaultValue: "",
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    trans: {
      component: "Trans",
      defaultsKey: "defaults",
      extensions: [".tsx"],
      fallbackKey: (_, value) => value,
    },
    resource: {
      loadPath: "i18n/{{lng}}/{{ns}}.json",
      savePath: "i18n/{{lng}}/{{ns}}.json",
    },
  },
  transform: function(file, enc, done) {
    const extension = path.extname(file.path);
    let content = fs.readFileSync(file.path, enc);

    if (extension === ".ts" || extension === ".tsx") {
      content = typescript.transpileModule(content, {
        compilerOptions: {
          target: "es5",
          sourceMap: true,
          inlineSources: true,
          sourceRoot: "/",
          jsx: "preserve",
          baseUrl: ".",
          lib: ["dom", "esnext"],
          module: "esnext",
          moduleResolution: "node",
          paths: {
            settings: ["settings"],
          },
          resolveJsonModule: true,
          allowSyntheticDefaultImports: true,
          types: ["react", "react-css-modules"],
          typeRoots: ["node_modules/@types"],
          plugins: [{ name: "typescript-tslint-plugin" }],
        },
        exclude: ["node_modules"],
      }).outputText;
    }

    this.parser.parseTransFromString(content);

    done();
  },
};
