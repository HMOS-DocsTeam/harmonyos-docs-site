---
title: "简介"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-introduction
kit: ai
last_updated: "2026-04-22"
---

# 简介

Shape结构体用于描述一个tensor的shape，包含两个信息：

```
size_t dim_num_;
int64_t dims_[kMaxDimNum];
```

其中，dim\_num\_表示shape的维数，dims\_数组表示tensor具体的shape。
