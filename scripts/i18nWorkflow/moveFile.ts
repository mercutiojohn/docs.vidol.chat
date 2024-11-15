import consola from "consola";
import fs from "fs";
import path from "path";
import pkg from "../../package.json";

const localeMap = {
  "en-US": "en",
  "zh-CN": "cn",
  "ja-JP": "jp",
  "fr-FR": "fr",
};

type Locale = keyof typeof localeMap;

/**
 * 将 docs 目录下的对应语言文件移动到各自的语言文档目录
 */
export const moveFiles = () => {
  consola.info("Moving files...");
  // 递归遍历 cn 目录
  const walkDir = (dir: string, locale: Locale) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath, locale);
      } else if (file.endsWith(`.${locale}.mdx`)) {
        const relativePath = path.relative(localeMap[locale], dir);
        const targetDir = path.join(localeMap[locale], relativePath);
        const newFileName = file.replace(`.${locale}.mdx`, ".mdx");
        const targetPath = path.join(targetDir, newFileName);

        // 创建目标目录
        fs.mkdirSync(targetDir, { recursive: true });

        // 复制文件
        fs.copyFileSync(filePath, targetPath);

        // 无需删除原文件
        // fs.unlinkSync(filePath);
      }
    });
  };

  // 从 i.18n 的 outputLocales 目录分别遍历
  pkg.i18n.markdown.outputLocales.forEach((locale: string) => {
    walkDir("docs", locale as Locale);
  });
};

moveFiles();
