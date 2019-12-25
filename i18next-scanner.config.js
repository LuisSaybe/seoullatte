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
      extensions: [".ts", ".tsx"],
      fallbackKey: (_, value) => value,
    },
    resource: {
      loadPath: "common/i18n/{{lng}}/{{ns}}.json",
      savePath: "common/i18n/{{lng}}/{{ns}}.json",
    },
  },
};
