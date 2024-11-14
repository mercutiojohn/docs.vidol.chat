const { defineConfig } = require("@lobehub/i18n-cli");

module.exports = defineConfig({
  temperature: 0,
  modelName: "gpt-4o-mini",
  splitToken: 2048,
  experimental: {
    jsonMode: true,
  },
  // 后续说明文档、技术文档等所需的国际化配置（暂时不需要）
  markdown: {
    entry: [
      "./dance-manual/**/*.mdx",
      "./role-manual/**/*.mdx",
      "./usage/**/*.mdx",
    ],
    entryLocale: "zh-CN",
    outputLocales: ["en-US"],
    exclude: [],
    includeMatter: true,
    outputExtensions: (locale, { filePath }) => {
      if (filePath.includes(".mdx")) {
        if (locale === "en-US") return ".mdx";
        return `.${locale}.mdx`;
      } else {
        if (locale === "en-US") return ".md";
        return `.${locale}.md`;
      }
    },
  },
});
