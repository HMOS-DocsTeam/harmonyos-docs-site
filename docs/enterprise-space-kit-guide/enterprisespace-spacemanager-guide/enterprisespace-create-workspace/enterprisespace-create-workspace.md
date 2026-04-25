---
title: "创建工作空间"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-create-workspace
kit: app-services
last_updated: "2026-04-22"
---

# 创建工作空间

## 场景介绍

Enterprise Space Kit为应用提供创建工作空间的能力。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#createworkspace)。

| 接口名 | 描述 |
| --- | --- |
| [createWorkspace](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#createworkspace)(localName: string, workspaceType: [WorkspaceType](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#workspacetype), params?: [CreateWorkspaceParams](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#createworkspaceparams)): Promise&lt;[WorkspaceInfo](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#workspaceinfo)&gt; | 创建工作空间并返回结果。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[createWorkspace](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#createworkspace)接口，创建工作空间，并且查看打印信息。

   ```
   const localName: string = '111111';
   const workspaceType: spaceManager.WorkspaceType = spaceManager.WorkspaceType.ADMIN;
   const params: spaceManager.CreateWorkspaceParams = {
     shortName: 'test'
   };
   try {
     const workspaceInfo: spaceManager.WorkspaceInfo = await spaceManager.createWorkspace(localName, workspaceType, params);
     console.info(`Succeeded in creating workspace, workspaceInfo:` + JSON.stringify(workspaceInfo));
   } catch (err) {
     console.error(`Failed to create workspace. Code: ${err.code}, message: ${err.message}`);
   }
   ```
