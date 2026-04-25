---
title: "DataAbilityOperation"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-ability-dataabilityoperation
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-inner-ability-dataabilityoperation
---

# DataAbilityOperation

定义DataAbility数据操作方式，可以作为[executeBatch](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper#dataabilityhelperexecutebatch)的入参，操作数据库的信息。

![](../../../../../images/44385653/note_3.0-zh-cn.png) 

本接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

此接口仅可在FA模型下使用。

## 导入模块

```
import ability from '@ohos.ability.ability';
```

## 属性

****系统能力****：SystemCapability.Ability.AbilityRuntime.FAModel

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| uri | string | 否 | 否 | 指示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。 |
| type | [featureAbility.DataAbilityOperationType](/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability#dataabilityoperationtype7) | 否 | 否 | 指示数据操作类型。 |
| valuesBucket | [rdb.ValuesBucket](/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket) | 否 | 是 | 指示要操作的数据值。 |
| valueBackReferences | [rdb.ValuesBucket](/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket) | 否 | 是 | 指示包含一组键值对的valuesBucket对象。 |
| predicates | [dataAbility.DataAbilityPredicates](/ref/arkdata-api/arkdata-arkts/js-apis-data-ability/js-apis-data-ability#dataabilitypredicates) | 否 | 是 | 指示要设置的筛选条件。如果此参数为空，则操作所有数据记录。 |
| predicatesBackReferences | Map&lt;number, number&gt; | 否 | 是 | 指示用作谓词中筛选条件的反向引用。 |
| interrupted | boolean | 否 | 是 | 指示是否可以中断批处理操作。true表示可以中断批处理操作，false表示不可中断批处理操作。 |
| expectedCount | number | 否 | 是 | 指示要更新或删除的预期行数。 |
