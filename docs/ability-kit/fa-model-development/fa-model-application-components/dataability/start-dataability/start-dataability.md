---
title: "启动DataAbility"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-dataability
kit: application-framework
last_updated: "2026-04-22"
---

# 启动DataAbility

启动DataAbility会获取一个工具接口类对象（DataAbilityHelper）。启动DataAbility的示例代码如下：

```
import featureAbility from '@ohos.ability.featureAbility';
import ability from '@ohos.ability.ability';

let uri: string = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';
let DAHelper: ability.DataAbilityHelper = featureAbility.acquireDataAbilityHelper(uri);
```
