---
title: 文件审核与合并
description: 了解舞蹈文件上传后的审核和合并流程
keywords: 舞蹈文件, 审核, 合并, 流程
icon: user-magnifying-glass
---

# 文件审核与合并流程

本文将介绍舞蹈文件上传后的审核和合并过程，包括 GitHub Issue 创建、自动检查、PR 生成以及最终的舞蹈市场列表更新。

## GitHub Issue 创建与检查

<Steps>
  <Step title="自动创建 Issue">
    舞蹈文件上传完成后，系统会自动在 [lobe-vidol-market](https://github.com/lobehub/lobe-vidol-market) 仓库创建一个新的 Issue，包含当前舞蹈文件的信息。
  </Step>
  <Step title="添加标签">
    新创建的 Issue 会被自动添加 `💃 Dance PR` 标签。
  </Step>
  <Step title="自动检查">
    系统会自动检查 Issue 内容是否符合参数规范。
  </Step>
  <Step title="检查结果">
    - 如果检查通过，Issue 会被添加 `✅ Auto Check Pass` 标签。
    - 如果检查失败，`💃 Dance PR` 标签会被移除。您需要根据错误提示修改 Issue 内容，然后手动重新添加 `💃 Dance PR` 标签以触发重新检查。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-github-issue.png" alt="GitHub Issue 示例" />
</Frame>

## GitHub PR 生成与合并

<Steps>
  <Step title="PR 生成">
    Issue 检查通过后，系统会根据 Issue 内容自动生成一个 Pull Request (PR)。
  </Step>
  <Step title="审核等待">
    PR 生成后，请耐心等待管理员进行审核和合并。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-pr.png" alt="GitHub PR 示例" />
</Frame>

## 舞蹈市场列表更新

<Steps>
  <Step title="自动构建">
    PR 合并后，系统会自动运行构建指令，生成更新后的 [舞蹈列表](https://vidol-market.lobehub.com/dances/index.json) 静态数据。
  </Step>
  <Step title="市场更新">
    LobeVidol 会读取最新的舞蹈列表数据，并在舞蹈市场中展示更新后的内容。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-list.png" alt="舞蹈市场列表示例" />
</Frame>

