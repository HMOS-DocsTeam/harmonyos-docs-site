---
title: "查询深度冻结豁免名单"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-get-lockdown-exemption-apps
kit: app-services
last_updated: "2026-04-22"
---

# 查询深度冻结豁免名单

## 场景介绍

从6.0.2(22)开始，支持查询深度冻结豁免名单的能力。

Enterprise Space Kit为应用提供查询深度冻结豁免名单的能力。当设置深度冻结豁免名单后，可使用该接口查询深度冻结豁免名单。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#getlockdownexemptionapps)。

| 接口名 | 描述 |
| --- | --- |
| [getLockdownExemptionApps](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#getlockdownexemptionapps)(workspaceId?: number): Promise&lt;string[]&gt; | 查询深度冻结豁免名单。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块和相关依赖模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[getLockdownExemptionApps](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#getlockdownexemptionapps)，查询深度冻结豁免名单，并且查看打印信息。

```
  const workspaceId: number = 100;
  try {
    const apps: string[] = await spaceManager.getLockdownExemptionApps(workspaceId);
    console.info(`Succeeded in getting lockdown exemption apps. apps:` + JSON.stringify(apps));
  } catch (err) {
    console.error(`Failed to get lockdown exemption apps. Code: ${err.code}, message: ${err.message}`);
  }
```
