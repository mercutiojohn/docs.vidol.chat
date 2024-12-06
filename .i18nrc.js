const { defineConfig } = require("@lobehub/i18n-cli");

module.exports = defineConfig({
  temperature: 0,
  splitToken: 2048,
  modelName: "gpt-4o-mini",
  experimental: {
    jsonMode: true,
  },
  reference:
    "You need to maintain the component format of MDX, and the output text does not need to be wrapped in any code block syntax at the outermost level.",
  markdown: {
    entry: ["./docs/**/*.zh-CN.mdx"],
    entryLocale: "zh-CN",
    outputLocales: ["en-US", "ja-JP", "fr-FR"],
    exclude: [],
    includeMatter: true,
    outputExtensions: (locale) => {
      return `.${locale}.mdx`;
    },
  },
});
