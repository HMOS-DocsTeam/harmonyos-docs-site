---
title: "设置工作空间资料照片"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-set-workspace-profile-photo
kit: app-services
last_updated: "2026-04-22"
---

# 设置工作空间资料照片

## 场景介绍

Enterprise Space Kit为应用提供设置工作空间资料照片的能力。所有工作空间都可以设置资料照片。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceprofilephoto)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspaceProfilePhoto](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceprofilephoto)(workspaceId: number, photo: string): Promise&lt;void&gt; | 设置工作空间资料照片。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[setWorkspaceProfilePhoto](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#setworkspaceprofilephoto)接口，设置工作空间资料照片，并且查看打印信息。

   ```
   const workspaceId: number = 100;
   const photo: string = '{"type":0,"defaultImg":"data:image/png;base64,iVBO******Jggg==}';
   try {
     await spaceManager.setWorkspaceProfilePhoto(workspaceId, photo);
     console.info('Succeeded in setting workspace profile photo');
   } catch (err) {
     console.error(`Failed to set workspace profile photo. Code: ${err.code}, message: ${err.message}`);
   }
   ```
