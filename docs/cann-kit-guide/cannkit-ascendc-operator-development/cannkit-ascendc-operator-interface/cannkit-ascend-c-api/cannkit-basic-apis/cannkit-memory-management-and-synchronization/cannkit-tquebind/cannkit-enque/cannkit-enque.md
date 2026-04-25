---
title: "EnQue"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-enque
kit: ai
last_updated: "2026-04-22"
---

# EnQue

## 功能说明

将Tensor push到队列。

## 函数原型

```
template <typename T> 
__aicore__ inline bool EnQue(const LocalTensor<T>& tensor)
```

## 参数说明

****表1**** bool EnQue(LocalTensor&lt;T&gt;& tensor)原型定义参数说明

| 参数名称 | 输入/输出 | 含义 |
| --- | --- | --- |
| tensor | 输入 | 指定的Tensor。 |

****图1**** 将LocalTensor通过EnQue放入A1/B1的Queue中

![](../../../../../../../../images/ee5d3c60/zh-cn_image_0000002552959284.png)

## 支持的型号

Kirin9020系列处理器

KirinX90系列处理器

## 注意事项

无

## 返回值

- true：表示Tensor加入Queue成功。
- false：表示Queue已满，入队失败。

## 调用示例

```
// 接口: EnQue Tensor
AscendC::TPipe pipe;
AscendC::TQueBind<AscendC::TPosition::VECOUT, AscendC::TPosition::GM, 4> que;
int num = 4;
int len = 1024;
pipe.InitBuffer(que, num, len);
AscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();
que.EnQue(tensor1);// 将tensor加入VECOUT的Queue中
```
