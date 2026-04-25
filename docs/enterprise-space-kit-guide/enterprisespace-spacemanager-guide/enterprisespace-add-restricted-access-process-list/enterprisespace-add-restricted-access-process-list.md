---
title: "新增系统服务进程不可访问后台用户数据路径列表"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-add-restricted-access-process-list
kit: app-services
last_updated: "2026-04-22"
---

# 新增系统服务进程不可访问后台用户数据路径列表

## 场景介绍

从6.0.1(21)开始，支持新增系统服务进程不可访问后台用户数据路径列表的能力。

Enterprise Space Kit为应用提供新增系统服务进程不可访问后台用户数据路径列表的功能。用于应用新增管控系统服务进程时的场景。

## 接口说明

详细接口说明可参考[接口文档](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#addrestrictedaccessbackgrounduserdataprocesslist)。

| 接口名 | 描述 |
| --- | --- |
| [addRestrictedAccessBackgroundUserdataProcessList](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#addrestrictedaccessbackgrounduserdataprocesslist)(userData: [UserDataEnum](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#userdataenum), processName: string, disallowPaths?: string[]): Promise&lt;void&gt; | 新增系统服务进程不可访问后台用户数据路径列表。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[addRestrictedAccessBackgroundUserdataProcessList](/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#addrestrictedaccessbackgrounduserdataprocesslist)，新增系统服务进程不可访问后台用户数据路径列表，并且查看打印信息。

   ```
   const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
   const processName: string = 'testSa';
   const disallowPaths: string[] = ['/data/service', '/data/app'];
   try {
     await spaceManager.addRestrictedAccessBackgroundUserdataProcessList(userData, processName, disallowPaths);
     console.info(`Succeeded in adding restricted access background user data process list`);
   } catch (err) {
     console.error(`Failed to add restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
   }
   ```
