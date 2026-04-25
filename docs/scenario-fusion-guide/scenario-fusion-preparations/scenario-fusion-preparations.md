---
title: "开发准备"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-preparations
kit: app-services
last_updated: "2026-04-22"
---

# 开发准备

请先参考“[应用开发准备](/application-dev-overview)”完成基本准备工作及指纹配置，再继续进行以下开发活动。

## 申请权限

开发者需要根据实际场景申请对应权限，请保证符合[权限使用的基本原则](/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[声明权限](/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)声明对应权限。

| 权限 | 使用场景 |
| --- | --- |
| ohos.permission.GET\_WIFI\_INFO | 使用场景化API获取Wi-Fi信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |
| ohos.permission.ACCESS\_BLUETOOTH | 使用场景化API获取蓝牙信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |

![](../../images/a91e59b6/note_3.0-zh-cn.png) 

获取用户程序访问控制权限可参考[程序访问控制管理](/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9)。
