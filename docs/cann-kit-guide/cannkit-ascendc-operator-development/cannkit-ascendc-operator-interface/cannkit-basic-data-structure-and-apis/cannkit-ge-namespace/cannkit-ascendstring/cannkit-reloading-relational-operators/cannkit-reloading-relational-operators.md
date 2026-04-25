---
title: "关系符重载"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-reloading-relational-operators
kit: ai
last_updated: "2026-04-22"
---

# 关系符重载

对于AscendString对象大小比较的使用场景（例如map数据结构的key进行排序），通过重载以下关系符实现。

```
  bool operator<(const AscendString& d) const;
  bool operator>(const AscendString& d) const;
  bool operator<=(const AscendString& d) const;
  bool operator>=(const AscendString& d) const;
  bool operator==(const AscendString& d) const;
  bool operator!=(const AscendString& d) const;
```
