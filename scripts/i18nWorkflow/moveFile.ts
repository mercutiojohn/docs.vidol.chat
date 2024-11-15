import consola from "consola";
import fs from "fs";
import path from "path";
import pkg from "../../package.json";

const localeMap = {
  "en-US": "en",
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
    consola.info(`Walking ${dir} with locale ${locale}`);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath, locale);
      } else if (file.endsWith(`.${locale}.md`)) {
        const relativePath = path.relative("docs", dir);
        const targetDir = path.join(localeMap[locale], relativePath);
        const newFileName = file.replace(`.${locale}.md`, ".mdx");
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
  Object.keys(localeMap).forEach((locale: string) => {
    walkDir("docs", locale as Locale);
  });
};

/**
 * 将 docs 目录下的中文文件移动到 cn 目录
 */
const moveChineseFiles = () => {
  consola.info("Moving Chinese files...");

  const walkDir = (dir: string) => {
    const files = fs.readdirSync(dir);
    consola.info(`Walking ${dir} for Chinese files`);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (
        file.endsWith(".mdx") &&
        !file.includes(".en-US.") &&
        !file.includes(".ja-JP.") &&
        !file.includes(".fr-FR.")
      ) {
        // 不包含语言后缀的文件视为中文文件
        const relativePath = path.relative("docs", dir);
        const targetDir = path.join("cn", relativePath);
        const targetPath = path.join(targetDir, file);

        // 创建目标目录
        fs.mkdirSync(targetDir, { recursive: true });

        // 复制文件
        fs.copyFileSync(filePath, targetPath);
      }
    });
  };

  walkDir("docs");
};

// 先移动中文文件,再移动其他语言文件
moveChineseFiles();

moveFiles();
