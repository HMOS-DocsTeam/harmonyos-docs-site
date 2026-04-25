---
title: "区划选择"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-division
kit: app-services
last_updated: "2026-04-22"
---

# 区划选择

## 场景介绍

本章节将介绍如何集成区划选择控件。该控件不支持在智能表设备中调用。

区划选择控件可加载全球或指定国家的区划信息，支持以树状结构化选择，支持功能：

- 支持查看选中区划的下级区划。
- 支持推荐热门区划。
- 支持子窗拉起区划控件，适合宽屏设备使用。

****图1**** 选择国家

![](../../../images/095d989b/zh-cn_image_0000002552799400.jpg "点击放大")

****图2**** 选择省市

![](../../../images/f3d4fc73/zh-cn_image_0000002583439095.jpg "点击放大")

****图3**** 搜索地区

![](../../../images/eb28edf3/zh-cn_image_0000002552959050.jpg "点击放大")

****图4**** 子窗拉起区划控件

![](../../../images/fd5cee7d/zh-cn_image_0000002583479051.jpg "点击放大")

## 约束与限制

使用该功能需满足以下条件：

- 仅支持手机、平板和2in1设备。

## 接口说明

区划选择控件功能主要由[sceneMap](/ref/map-api/map-arkts/map-scenemap/map-scenemap)命名空间下的[selectDistrict](/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict)方法提供，更多接口及使用方法请参见[接口文档](/ref/map-api/map-arkts/map-scenemap/map-scenemap)。

| 接口名 | 描述 |
| --- | --- |
| [DistrictSelectOptions](/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectoptions) | 区划选择页面初始选项。 |
| [selectDistrict](/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict)(context: [common.Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context), options: [DistrictSelectOptions](/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectoptions)): Promise&lt;[DistrictSelectResult](/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectresult)&gt; | 调出区划选择页面。 |
| [DistrictSelectResult](/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectresult) | 区划选择结果。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { sceneMap } from '@kit.MapKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 创建区划选择请求参数，调用[selectDistrict](/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict)方法拉起区划选择页。

   ```
   let districtSelectOptions: sceneMap.DistrictSelectOptions = {
     countryCode: "CN",
     // 使用子窗拉起方式
     subWindowEnabled: true
   };
   // 拉起区划选择页
   sceneMap.selectDistrict(this.getUIContext().getHostContext(), districtSelectOptions).then((data) => {
     console.info("SelectDistrict", "Succeeded in selecting district.");
   }).catch((err: BusinessError) => {
     console.error("SelectDistrict", `Failed to select district, code: ${err.code}, message: ${err.message}`);
   });
   ```
