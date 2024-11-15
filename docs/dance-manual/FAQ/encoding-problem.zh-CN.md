---
title: 解压缩日文乱码问题
description: 如何解决下载外文网站 zip 包时出现的乱码问题
keywords: 解压缩, 乱码, 日文, zip, 压缩包
icon: question
---

## 问题描述

在下载外文网站的 zip 包时，常常会遇到解压后文件名出现乱码的问题。这通常是由于系统语言与压缩文件创建时使用的语言不一致所导致的。

<Frame caption="解压后出现乱码的示例">
  ![解压缩乱码问题](https://oss.vidol.chat/compression-problem.png)
</Frame>

<Note>
  这个问题在下载日文网站（如 Neconeco）的 MMD zip 包时尤为常见。
</Note>

## 解决方案

可以使用 Bandzip 软件的默认代码页语言转换功能来解决这个问题。

<Steps>
  <Step title="打开 Bandzip">
    启动 Bandzip 软件。
  </Step>
  <Step title="设置默认代码页">
    在 Bandzip 的设置中找到默认代码页选项。
  </Step>
  <Step title="选择正确的语言">
    将默认代码页设置为日语（或其他相应的语言）。
  </Step>
</Steps>

<Frame caption="Bandzip 设置界面">
  ![Bandzip 设置](https://oss.vidol.chat/bandzip.png)
</Frame>

## 效果展示

正确设置后，解压缩的效果应该如下图所示：

<Frame caption="正确解压后的文件名">
  ![正常解压效果](https://oss.vidol.chat/compression-normal.png)
</Frame>

<Tip>
  如果你经常下载不同语言的压缩包，可以考虑使用支持多语言编码的解压软件，如 7-Zip 或 WinRAR。
</Tip>

