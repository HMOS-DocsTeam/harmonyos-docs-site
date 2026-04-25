---
title: "CustomizeData"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundle-customizedata
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundle-customizedata
---

# CustomizeData

自定义元数据。

![](../../../../../images/f539ab0d/note_3.0-zh-cn.png) 

本模块首批接口从API version 7 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

从API version 9开始，该模块不再维护，建议使用[Metadata](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata)替代。

## CustomizeData(deprecated)

![](../../../../../images/072259dc/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[Metadata](/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata#metadata-1)替代。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 否 | 否 | 标识自定义数据项的键名称。 |
| value | string | 否 | 否 | 标识自定义数据项的值名称。 |
| extra8+ | string | 否 | 否 | 标识用户自定义数据格式，标签值为标识该数据的资源的索引值。 |
