---
title: "打开文件"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-openfile
kit: system/security
last_updated: "2026-04-22"
---

# 打开文件

## 场景介绍

普通应用无法直接访问公共路径下的文件，Enterprise Data Guard Kit为应用提供相关接口以获取文件描述符（fd）。

## 接口说明

详细接口说明可参考[接口文档](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard)。

| 接口名 | 描述 |
| --- | --- |
| [openFile](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#openfile)(path: string, callback: AsyncCallback&lt;number&gt;): void | 通过Callback方式获取指定路径下文件的文件描述符（fd）。 |
| [openFile](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#openfile-1)(path: string): Promise&lt;number&gt; | 使用Promise方式获取指定路径下文件的文件描述符（fd）。 |
| [openFileWrite](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#openfilewrite)(path: string, callback: AsyncCallback&lt;number&gt;): void | 在只写模式下，通过Callback方式获取指定路径下文件的文件描述符（fd）。 |
| [openFileWrite](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#openfilewrite-1)(path: string): Promise&lt;number&gt; | 在只写模式下，使用Promise方式获取指定路径下文件的文件描述符（fd）。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 初始化[FileGuard](/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#fileguard)对象guard，调用接口openFile或者openFileWrite，并且可选择以下一种方式获取指定目录文件fd。

   - 通过回调函数方式，获取文件fd。

     ```
     function openFileCallback() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       guard.openFile(path, (err: BusinessError, fd: number) => {
         if (err) {
           console.error(`Failed to open file. Code: ${err.code}, message: ${err.message}.`);
           return;
         }
         console.info(`Succeeded in opening file. path: ${path}, fd: ${fd}.`);
       });
     }
     ```
   - 通过Promise方式，获取文件fd。

     ```
     function openFilePromise() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       guard.openFile(path).then((fd: number) => {
         console.info(`Succeeded in opening file. path: ${path} , fd: ${fd}.`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to open file. Code: ${err.code}, message: ${err.message}.`);
       });
     }
     ```
