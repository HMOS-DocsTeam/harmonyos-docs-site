---
title: "数据类型转换说明"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arraybuffer-info
kit: graphics
last_updated: "2026-04-22"
---

# 数据类型转换说明

在开发AR应用时，部分数据类型需要转换才能使用，以下进行汇总及示例。

## ArrayBuffer

在一些不支持接收ArrayBuffer数据类型的方法中，需要将其反序列化为int32或者float32类型，涉及转换的接口列表如下：

| 接口名 | 描述 |
| --- | --- |
| [ImageComponent](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#imagecomponent) | 参数buffer为ArrayBuffer类型，可转换为int32。 |
| [ARPlane.getPolygonXZ](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplanegetpolygonxz) | 返回值为ArrayBuffer类型，可转换为float32。 |
| [ARSceneMesh.getVertices](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertices) | 返回值为ArrayBuffer类型，可转换为float32。 |
| [ARSceneMesh.getVertexNormals](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertexnormals) | 返回值为ArrayBuffer类型，可转换为float32。 |
| [ARSceneMesh.getTriangleIndices](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgettriangleindices) | 返回值为ArrayBuffer类型，可转换为int32。 |
| [ARSemanticDensePointData](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata) | 参数id为ArrayBuffer类型，可转换为int32。 |
| [ARSemanticDensePointData](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata) | 参数position为ArrayBuffer类型，可转换为float32。 |
| [ARSemanticDensePointData](/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata) | 参数color为ArrayBuffer类型，可转换为int32。 |

转换的示例如下：

```
// ArrayBuffer转float32
function arrayBufferFloat32ToNumber(buffer: ArrayBuffer): number[] {
  let view: Float32Array = new Float32Array(buffer);
  let numberArray: number[] = Array.from(view);
  return numberArray;
}

// ArrayBuffer转int32
function arrayBufferInt32ToNumber(buffer: ArrayBuffer): number[] {
  let view: Int32Array = new Int32Array(buffer);
  let numberArray: number[] = Array.from(view);
  return numberArray;
}
```
