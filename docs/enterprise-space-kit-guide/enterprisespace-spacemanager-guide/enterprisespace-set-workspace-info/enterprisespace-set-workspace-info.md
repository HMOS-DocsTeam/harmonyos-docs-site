---
title: "设置工作空间信息"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-set-workspace-info
kit: app-services
last_updated: "2026-04-22"
---

# 设置工作空间信息

## 场景介绍

Enterprise Space Kit为应用提供设置工作空间信息的能力。在企业初始化阶段，设置工作空间信息，方便企业绑定域账号。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceinfo)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspaceInfo](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceinfo)(workspaceId: number, domainInfo: [WorkspaceDomainInfo](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#workspacedomaininfo)): Promise&lt;void&gt; | 设置工作空间信息。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[setWorkspaceInfo](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceinfo)接口，设置工作空间信息，并且查看打印信息。

   ```
   const workspaceId: number = 100;
   const domainInfo: spaceManager.WorkspaceDomainInfo = {
     domain: 'test1',
     workspaceName: 'test2',
     accountId: 'test3',
     isAuthenticated: false,
     serverConfigId: 'test4',
     enterpriseWorkspaceName: 'default'
   };

   try {
     await spaceManager.setWorkspaceInfo(workspaceId, domainInfo);
     console.info('Succeeded in setting workspace info');
   } catch (err) {
     console.error(`Failed to set workspace info. Code: ${err.code}, message: ${err.message}`);
   }
   ```
