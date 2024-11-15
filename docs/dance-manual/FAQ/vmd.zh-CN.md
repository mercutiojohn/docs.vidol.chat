```markdown
---
title: VMD 文件格式详解
description: VMD（Vocaloid Motion Data）文件是 MikuMikuDance (MMD) 中用于存储动画数据的重要文件格式
keywords: VMD, Vocaloid Motion Data, MikuMikuDance, MMD, 动画数据, 文件格式
icon: file-video
---

VMD 文件主要用于记录角色的动作、相机轨迹以及其他动画信息。本文将详细介绍 VMD 文件的结构和使用方法。

## 文件结构

VMD 文件是一个二进制流文件，包含多个部分：

<AccordionGroup>
  <Accordion title="头部信息">
    - 前30个字节为版本描述：
      - v1 版本标识为 "Vocaloid Motion Data file"
      - v2 版本标识为 "Vocaloid Motion Data 0002"
    - 模型名称（编码为 ShiftJIS）：
      - v1 中为10个字节
      - v2 中为20个字节
  </Accordion>

  <Accordion title="关键帧数据">
    每个部分开头都有一个 `uint32_t` 类型的值，表示该部分的关键帧数量。包含以下记录：
    - 骨骼关键帧（Bone KeyFrame）
    - 形态关键帧（Morph KeyFrame）
    - 相机关键帧（Camera KeyFrame）
    - 光源关键帧（Light KeyFrame）
  </Accordion>
</AccordionGroup>

## 关键帧记录详情

### 骨骼关键帧记录

<CodeGroup>
  ```cpp
  // Bone KeyFrame
  struct BoneKeyFrame {
    char BoneName[15];     // 骨骼名称 (ShiftJIS编码)
    uint32_t FrameTime;    // 关键帧时间
    float Translation[3];  // 位置坐标 (X, Y, Z)
    float Rotation[4];     // 旋转四元数 (X, Y, Z, W)
    uint8_t Curve[64];     // X, Y, Z 方向的曲线数据 (各16字节)
  };
  ```
</CodeGroup>

### 形态关键帧记录

<CodeGroup>
  ```cpp
  // Morph KeyFrame
  struct MorphKeyFrame {
    char MorphName[15];    // 形态名称 (ShiftJIS编码)
    uint32_t FrameTime;    // 关键帧时间
    float Weight;          // 权重值
  };
  ```
</CodeGroup>

<Note>
  相机和光源关键帧的结构类似，但包含各自特定的参数。
</Note>

## 使用与兼容性

VMD 文件通常与 MikuMikuDance 软件配合使用，支持在不同模型之间导入和导出动作数据。

<Warning>
  由于不同模型可能会有不同的骨骼结构，在使用 VMD 文件时需要确保模型与动作数据的兼容性，以避免出现不自然的动画效果。
</Warning>

## 总结

VMD 文件格式是 MMD 动画制作中不可或缺的一部分。通过精确记录动画中的各种参数，使得用户能够创建出流畅而富有表现力的动画。理解其结构和使用方法对于制作高质量的 MMD 动画至关重要。

<Card title="了解更多" icon="book-open" href="https://mikumikudance.fandom.com/wiki/VMD_file_format">
  访问 MMD Wiki 了解更多关于 VMD 文件格式的信息
</Card>
```

