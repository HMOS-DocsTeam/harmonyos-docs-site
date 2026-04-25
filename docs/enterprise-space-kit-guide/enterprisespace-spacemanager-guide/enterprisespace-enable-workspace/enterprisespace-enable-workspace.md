---
title: "使能工作空间"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-enable-workspace
kit: app-services
last_updated: "2026-04-22"
---

# 使能工作空间

## 场景介绍

Enterprise Space Kit为应用提供使能双空间的能力。需要先使能工作空间才可以创建个人空间。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#enableworkspace)。

| 接口名 | 描述 |
| --- | --- |
| [enableWorkspace](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#enableworkspace)(enable: boolean): Promise&lt;void&gt; | 使能工作空间。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[enableWorkspace](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#enableworkspace)接口，使能工作空间，并且查看打印信息。

   ```
   const enable: boolean = true;
   try {
     await spaceManager.enableWorkspace(enable);
     console.info('Succeeded in enabling workspace');
   } catch (err) {
     console.error(`Failed to enable workspace. Code: ${err.code}, message: ${err.message}`);
   }
   ```
