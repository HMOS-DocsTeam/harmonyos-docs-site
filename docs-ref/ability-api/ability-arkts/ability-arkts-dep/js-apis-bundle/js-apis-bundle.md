---
title: "@ohos.bundle (Bundle模块)"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundle
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-bundle
---

# @ohos.bundle (Bundle模块)

本模块提供应用信息查询能力，支持[包信息](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)、[应用信息](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)、[Ability组件信息](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)等信息的查询，以及应用禁用状态的查询、设置等。

![](../../../../images/dfa30225/note_3.0-zh-cn.png) 

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

从API version 9开始，该模块不再维护，建议使用[@ohos.bundle.bundleManager](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager)替代。

## 导入模块

```
import bundle from '@ohos.bundle';
```

## 权限列表

| 权限 | 权限等级 | 描述 |
| --- | --- | --- |
| ohos.permission.GET\_BUNDLE\_INFO | normal | 查询指定应用信息。 |
| ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED | system\_basic | 可查询所有应用信息。 |

权限等级参考[权限APL等级说明](/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限机制中的基本概念)。

## bundle.getApplicationInfodeprecated

![](../../../../images/6de34ef8/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number): Promise&lt;ApplicationInfo&gt;

根据给定的Bundle名称获取ApplicationInfo。使用Promise异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围请参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| userId | number | 否 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt; | Promise形式返回应用程序信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 0;
let userId: number = 100;

bundle.getApplicationInfo(bundleName, bundleFlags, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getApplicationInfodeprecated

![](../../../../images/fcd1620d/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getApplicationInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback&lt;ApplicationInfo&gt;): void

根据给定的Bundle名称获取指定用户下的ApplicationInfo，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| userId | number | 是 | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回应用程序信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 0;
let userId: number = 100;

bundle.getApplicationInfo(bundleName, bundleFlags, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getApplicationInfodeprecated

![](../../../../images/028ae690/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getApplicationInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback&lt;ApplicationInfo&gt;): void

根据给定的Bundle名称获取ApplicationInfo，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| callback | AsyncCallback&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回应用程序信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 0;

bundle.getApplicationInfo(bundleName, bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAllBundleInfodeprecated

![](../../../../images/0554b60d/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllBundleInfo(bundleFlag: BundleFlag, userId?: number): Promise&lt;Array&lt;BundleInfo&gt;>

获取指定用户所有的BundleInfo，使用Promise形式异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | 用于指定返回的包信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| userId | number | 否 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt;&gt; | Promise形式返回所有可用的BundleInfo |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleFlag: number = 0;
let userId: number = 100;

bundle.getAllBundleInfo(bundleFlag, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getAllBundleInfodeprecated

![](../../../../images/ffd80ad6/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllBundleInfo(bundleFlag: BundleFlag, callback: AsyncCallback&lt;Array&lt;BundleInfo&gt;>): void

获取当前用户所有的BundleInfo，使用callback异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回所有可用的BundleInfo。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleFlag: number = 0;

bundle.getAllBundleInfo(bundleFlag, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAllBundleInfodeprecated

![](../../../../images/f78af6d5/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllBundleInfo(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback&lt;Array&lt;BundleInfo&gt;>): void

获取系统中指定用户下所有的BundleInfo，使用callback异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| userId | number | 是 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回指定用户下所有包的BundleInfo。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleFlag: number = 0;
let userId: number = 100;

bundle.getAllBundleInfo(bundleFlag, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getBundleInfodeprecated

![](../../../../images/a14898f9/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[getBundleInfo](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfo14-2)替代。

getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise&lt;BundleInfo&gt;

根据给定的Bundle名称获取BundleInfo，使用Promise异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| options | [BundleOptions](#bundleoptionsdeprecated) | 否 | 包含userid的查询选项。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt; | Promise对象，获取成功时返回包信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 1;
let options: bundle.BundleOptions = {
  "userId": 100
};

bundle.getBundleInfo(bundleName, bundleFlags, options)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getBundleInfodeprecated

![](../../../../images/8782250f/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[getBundleInfo](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfo14-1)替代。

getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback&lt;BundleInfo&gt;): void

根据给定的Bundle名称获取BundleInfo，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 需要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| callback | AsyncCallback&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回包信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 1;

bundle.getBundleInfo(bundleName, bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getBundleInfodeprecated

![](../../../../images/d62773b7/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[getBundleInfo](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfo14)替代。

getBundleInfo(bundleName: string, bundleFlags: number, options: BundleOptions, callback: AsyncCallback&lt;BundleInfo&gt;): void

根据给定的Bundle名称获取BundleInfo，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| options | [BundleOptions](#bundleoptionsdeprecated) | 是 | 包含userid。 |
| callback | AsyncCallback&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回包信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let bundleFlags: number = 1;
let options: bundle.BundleOptions = {
  "userId": 100
};

bundle.getBundleInfo(bundleName, bundleFlags, options, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAllApplicationInfodeprecated

![](../../../../images/802be704/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllApplicationInfo(bundleFlags: number, userId?: number): Promise&lt;Array&lt;ApplicationInfo&gt;>

获取指定用户下所有已安装的应用信息，使用promise异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| userId | number | 否 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt;&gt; | Promise对象，获取成功时返回应用信息列表。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleFlags: number = 8;
let userId: number = 100;

bundle.getAllApplicationInfo(bundleFlags, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getAllApplicationInfodeprecated

![](../../../../images/250919d6/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllApplicationInfo(bundleFlags: number, userId: number, callback: AsyncCallback&lt;Array&lt;ApplicationInfo&gt;>): void

获取指定用户下所有已安装的应用信息，使用callback异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| userId | number | 是 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回应用信息列表。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleFlags: number = bundle.BundleFlag.GET_APPLICATION_INFO_WITH_PERMISSION;
let userId: number = 100;

bundle.getAllApplicationInfo(bundleFlags, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAllApplicationInfodeprecated

![](../../../../images/42a749a6/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback&lt;Array&lt;ApplicationInfo&gt;>): void

获取调用方所在用户下已安装的应用信息，使用callback异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | 用于指定返回的应用信息对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中应用信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;[ApplicationInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-applicationinfo/js-apis-bundle-applicationinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回应用信息列表。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleFlags: number = bundle.BundleFlag.GET_APPLICATION_INFO_WITH_PERMISSION;

bundle.getAllApplicationInfo(bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getBundleArchiveInfodeprecated

![](../../../../images/e54c6e17/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getBundleArchiveInfo(hapFilePath: string, bundleFlags: number) : Promise&lt;BundleInfo&gt;

获取有关HAP中包含的应用程序包的信息，使用Promise异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hapFilePath | string | 是 | HAP存放路径。支持当前应用程序的绝对路径和数据目录沙箱路径。 |
| bundleFlags | number | 是 | 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt; | 返回值为Promise对象，Promise中包含有关HAP中包含的应用程序的信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let hapFilePath: string = "/data/storage/el2/base/test.hap";
let bundleFlags: number = 0;

bundle.getBundleArchiveInfo(hapFilePath, bundleFlags)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getBundleArchiveInfodeprecated

![](../../../../images/fab52d7c/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback&lt;BundleInfo&gt;) : void

获取有关HAP中包含的应用程序包的信息，使用callback异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hapFilePath | string | 是 | HAP存放路径，支持当前应用程序的绝对路径和数据目录沙箱路径。 |
| bundleFlags | number | 是 | 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中包信息相关flag。 |
| callback | AsyncCallback&lt;[BundleInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-bundleinfo/js-apis-bundle-bundleinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回HAP中包含的应用程序包的信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let hapFilePath: string = "/data/storage/el2/base/test.hap";
let bundleFlags: number = 0;

bundle.getBundleArchiveInfo(hapFilePath, bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAbilityInfodeprecated

![](../../../../images/8a651b92/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAbilityInfo(bundleName: string, abilityName: string): Promise&lt;AbilityInfo&gt;

通过Bundle名称和组件名获取Ability组件信息，使用Promise形式异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| abilityName | string | 是 | Ability组件名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt; | Promise形式返回Ability信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityInfo(bundleName, abilityName)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getAbilityInfodeprecated

![](../../../../images/fdc8fa03/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAbilityInfo(bundleName: string, abilityName: string, callback: AsyncCallback&lt;AbilityInfo&gt;): void

通过Bundle名称和组件名获取Ability组件信息，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| abilityName | string | 是 | Ability名称。 |
| callback | AsyncCallback&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt; | 是 | 程序启动作为入参的回调函数，返回Ability信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityInfo(bundleName, abilityName, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAbilityLabel8+ deprecated

![](../../../../images/bb59adb8/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAbilityLabel(bundleName: string, abilityName: string): Promise&lt;string&gt;

通过Bundle名称和ability名称获取应用名称，使用Promise异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| abilityName | string | 是 | Ability名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise形式返回应用名称信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityLabel(bundleName, abilityName)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getAbilityLabel8+ deprecated

![](../../../../images/795e4ff1/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getAbilityLabel(bundleName: string, abilityName: string, callback : AsyncCallback&lt;string&gt;): void

通过Bundle名称和Ability组件名获取应用名称，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| abilityName | string | 是 | Ability名称。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 程序启动作为入参的回调函数，返回应用名称信息。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityLabel(bundleName, abilityName, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.isAbilityEnabled8+ deprecated

![](../../../../images/03456195/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

isAbilityEnabled(info: AbilityInfo): Promise&lt;boolean&gt;

根据给定的AbilityInfo查询ability是否已经启用，使用Promise异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | [AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo) | 是 | Ability的配置信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise形式返回boolean代表是否启用。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityInfo(bundleName, abilityName).then((abilityInfo) => {
  bundle.isAbilityEnabled(abilityInfo).then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
})
```

## bundle.isAbilityEnabled8+ deprecated

![](../../../../images/ede7cbee/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

isAbilityEnabled(info : AbilityInfo, callback : AsyncCallback&lt;boolean&gt;): void

根据给定的AbilityInfo查询ability是否已经启用，使用callback异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | [AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo) | 是 | Ability的配置信息。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数，返回boolean代表是否启用。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityInfo(bundleName, abilityName).then((abilityInfo) => {
  bundle.isAbilityEnabled(abilityInfo, (err, data) => {
    if (err) {
      console.error('Operation failed. Cause: ' + JSON.stringify(err));
      return;
    }
    console.info('Operation successful. Data:' + JSON.stringify(data));
  })
})
```

## bundle.isApplicationEnabled8+ deprecated

![](../../../../images/b9f8dd1e/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

isApplicationEnabled(bundleName: string): Promise&lt;boolean&gt;

根据给定的bundleName查询指定应用程序是否已经启用，使用Promise异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise形式返回boolean代表是否启用。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";

bundle.isApplicationEnabled(bundleName)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.isApplicationEnabled8+ deprecated

![](../../../../images/b95cf7e8/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

isApplicationEnabled(bundleName: string, callback : AsyncCallback&lt;boolean&gt;): void

根据给定的bundleName查询指定应用程序是否已经启用，使用callback异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数，返回boolean代表是否启用。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";

bundle.isApplicationEnabled(bundleName, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.queryAbilityByWantdeprecated

![](../../../../images/1ec1dd05/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

queryAbilityByWant(want: Want, bundleFlags: number, userId?: number): Promise&lt;Array&lt;AbilityInfo&gt;>

根据给定的意图获取Ability组件信息，使用Promise异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want) | 是 | 包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | 是 | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中Ability信息相关flag。 |
| userId | number | 否 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt;&gt; | Promise形式返回Ability信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';
import Want from '@ohos.app.ability.Want';

let bundleFlags: number = 0;
let userId: number = 100;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

bundle.queryAbilityByWant(want, bundleFlags, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.queryAbilityByWantdeprecated

![](../../../../images/dcc0b413/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

queryAbilityByWant(want: Want, bundleFlags: number, userId: number, callback: AsyncCallback&lt;Array&lt;AbilityInfo&gt;>): void

根据给定的意图获取指定用户下Ability信息，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want) | 是 | 指示包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | 是 | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中Ability信息相关flag。 |
| userId | number | 是 | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回Ability信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import Want from '@ohos.app.ability.Want';

let bundleFlags: number = 0;
let userId: number = 100;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

bundle.queryAbilityByWant(want, bundleFlags, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.queryAbilityByWantdeprecated

![](../../../../images/69abd40b/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback&lt;Array&lt;AbilityInfo&gt;>): void

根据给定的意图获取Ability信息，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want) | 是 | 指示包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | 是 | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明](#bundleflagdeprecated)中Ability信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;[AbilityInfo](/ref/ability-api/ability-arkts/ability-arkts-dep/bundle/js-apis-bundle-abilityinfo/js-apis-bundle-abilityinfo)&gt;&gt; | 是 | 程序启动作为入参的回调函数，返回Ability信息。 |

****示例：****

```
import bundle from '@ohos.bundle';
import Want from '@ohos.app.ability.Want';

let bundleFlags: number = 0;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

bundle.queryAbilityByWant(want, bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getLaunchWantForBundledeprecated

![](../../../../images/938ae07a/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getLaunchWantForBundle(bundleName: string): Promise&lt;Want&gt;

查询拉起指定应用的want对象，使用Promise异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Want](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want)&gt; | 返回值为Promise对象，Promise中包含拉起指定应用的Want对象。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";

bundle.getLaunchWantForBundle(bundleName)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getLaunchWantForBundledeprecated

![](../../../../images/ffba7f95/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，替代接口仅向系统应用开放。

getLaunchWantForBundle(bundleName: string, callback: AsyncCallback&lt;Want&gt;): void

查询拉起指定应用的want对象，使用callback异步回调。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| callback | AsyncCallback&lt;[Want](/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want)&gt; | 是 | 程序启动作为入参的回调函数，返回拉起指定应用的want对象。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";

bundle.getLaunchWantForBundle(bundleName, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getNameForUid8+ deprecated

![](../../../../images/80d16cfb/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getBundleNameByUid](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundlenamebyuid14-1)替代。

getNameForUid(uid: number): Promise&lt;string&gt;

通过uid获取对应的Bundle名称，使用Promise异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | 要查询的uid。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | 返回值为Promise对象，Promise中包含指定uid的Bundle名称。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let uid: number = 20010005;

bundle.getNameForUid(uid)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.8+ deprecated

![](../../../../images/f778f634/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getBundleNameByUid](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundlenamebyuid14)替代。

getNameForUid(uid: number, callback: AsyncCallback&lt;string&gt;) : void

通过uid获取对应的Bundle名称，使用callback异步回调。

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | 要查询的uid。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 程序启动作为入参的回调函数，返回指定uid的Bundle名称。 |

****示例：****

```
import bundle from '@ohos.bundle';

let uid: number = 20010005;

bundle.getNameForUid(uid, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## bundle.getAbilityIcon8+ deprecated

![](../../../../images/6bc4c9bf/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[resourceManager.getMediaContent](/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getmediacontent9)替代。

getAbilityIcon(bundleName: string, abilityName: string): Promise&lt;image.PixelMap&gt;

通过bundleName和abilityName获取对应Icon的[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)，使用Promise异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| abilityName | string | 是 | 要查询的Ability组件名。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | 返回值为[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)。 |

****示例：****

```
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityIcon(bundleName, abilityName)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })
```

## bundle.getAbilityIcon8+ deprecated

![](../../../../images/c086bdcc/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[resourceManager.getMediaContent](/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getmediacontent9)替代。

getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback&lt;image.PixelMap&gt;): void

通过bundleName和abilityName获取对应Icon的[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)，使用callback异步回调。

获取调用方自己的信息时不需要权限。

****需要权限：****

ohos.permission.GET\_BUNDLE\_INFO\_PRIVILEGED 或 ohos.permission.GET\_BUNDLE\_INFO

****系统能力：****

SystemCapability.BundleManager.BundleFramework

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 要查询的应用Bundle名称。 |
| abilityName | string | 是 | 要查询的Ability组件名。 |
| callback | AsyncCallback&lt;image.PixelMap&gt; | 是 | 程序启动作为入参的回调函数，返回指定[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)。 |

****示例：****

```
import bundle from '@ohos.bundle';

let bundleName: string = "com.example.myapplication";
let abilityName: string = "EntryAbility";

bundle.getAbilityIcon(bundleName, abilityName, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})
```

## InstallErrorCodedeprecated

![](../../../../images/62b25a90/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[包管理子系统通用错误码](/ref/ability-api/ability-arkts-errcode/errorcode-bundle/errorcode-bundle)替代。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SUCCESS | 0 | 安装成功。 |
| STATUS\_INSTALL\_FAILURE | 1 | 安装失败（不存在安装的应用）。 |
| STATUS\_INSTALL\_FAILURE\_ABORTED | 2 | 安装中止。 |
| STATUS\_INSTALL\_FAILURE\_INVALID | 3 | 安装参数无效。 |
| STATUS\_INSTALL\_FAILURE\_CONFLICT | 4 | 安装冲突 （常见于升级和已有应用基本信息不一致）。 |
| STATUS\_INSTALL\_FAILURE\_STORAGE | 5 | 存储包信息失败。 |
| STATUS\_INSTALL\_FAILURE\_INCOMPATIBLE | 6 | 安装不兼容（常见于版本降级安装或者签名信息错误）。 |
| STATUS\_UNINSTALL\_FAILURE | 7 | 卸载失败 （不存在卸载的应用）。 |
| STATUS\_UNINSTALL\_FAILURE\_BLOCKED | 8 | 卸载中止 （没有使用）。 |
| STATUS\_UNINSTALL\_FAILURE\_ABORTED | 9 | 卸载中止 （参数无效导致）。 |
| STATUS\_UNINSTALL\_FAILURE\_CONFLICT | 10 | 卸载冲突 （卸载系统应用失败， 结束应用进程失败）。 |
| STATUS\_INSTALL\_FAILURE\_DOWNLOAD\_TIMEOUT | 0x0B | 安装失败 （下载超时）。 |
| STATUS\_INSTALL\_FAILURE\_DOWNLOAD\_FAILED | 0x0C | 安装失败 （下载失败）。 |
| STATUS\_RECOVER\_FAILURE\_INVALID8+ | 0x0D | 恢复预置应用失败。 |
| STATUS\_ABILITY\_NOT\_FOUND | 0x40 | Ability未找到。 |
| STATUS\_BMS\_SERVICE\_ERROR | 0x41 | BMS服务错误。 |
| STATUS\_FAILED\_NO\_SPACE\_LEFT8+ | 0x42 | 设备空间不足。 |
| STATUS\_GRANT\_REQUEST\_PERMISSIONS\_FAILED8+ | 0x43 | 应用授权失败。 |
| STATUS\_INSTALL\_PERMISSION\_DENIED8+ | 0x44 | 缺少安装权限。 |
| STATUS\_UNINSTALL\_PERMISSION\_DENIED8+ | 0x45 | 缺少卸载权限。 |

## BundleFlagdeprecated

![](../../../../images/0cd21089/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager.BundleFlag](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundleflag)替代。

包信息标志，指示需要获取的包信息的内容。

当接口与标志不匹配时，该标志会被忽略，例如获取application时使用GET\_ABILITY\_INFO\_WITH\_PERMISSION对结果不会产生影响。

标志可以叠加使用，例如使用GET\_APPLICATION\_INFO\_WITH\_PERMISSION + GET\_APPLICATION\_INFO\_WITH\_DISABLE可以使结果同时包含应用权限信息和被禁用的应用信息。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| GET\_BUNDLE\_DEFAULT | 0x00000000 | 获取默认的应用信息。 |
| GET\_BUNDLE\_WITH\_ABILITIES | 0x00000001 | 获取包括Ability信息的包信息。 |
| GET\_ABILITY\_INFO\_WITH\_PERMISSION | 0x00000002 | 获取包括权限的Ability信息。 |
| GET\_ABILITY\_INFO\_WITH\_APPLICATION | 0x00000004 | 获取包括Application的ability信息。 |
| GET\_APPLICATION\_INFO\_WITH\_PERMISSION | 0x00000008 | 获取包括权限的应用信息。 |
| GET\_BUNDLE\_WITH\_REQUESTED\_PERMISSION | 0x00000010 | 获取包括所需权限的包信息。 |
| GET\_ABILITY\_INFO\_WITH\_METADATA8+ | 0x00000020 | 获取ability的元数据信息。 |
| GET\_APPLICATION\_INFO\_WITH\_METADATA8+ | 0x00000040 | 获取应用的元数据信息。 |
| GET\_ABILITY\_INFO\_SYSTEMAPP\_ONLY8+ | 0x00000080 | 获取仅包括系统应用的ability信息。 |
| GET\_ABILITY\_INFO\_WITH\_DISABLE8+ | 0x00000100 | 获取包括被禁用的ability信息。 |
| GET\_APPLICATION\_INFO\_WITH\_DISABLE8+ | 0x00000200 | 获取包括被禁用的应用信息。 |
| GET\_ALL\_APPLICATION\_INFO | 0xFFFF0000 | 获取应用所有的信息。 |

## BundleOptionsdeprecated

![](../../../../images/4771f01d/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，暂无替代接口。

查询选项，包含userId。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| userId | number | 否 | 是 | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

## AbilityTypedeprecated

![](../../../../images/3f3932d4/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager.AbilityType](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#abilitytype)替代。

Ability组件类型。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UNKNOWN | 无 | 未知Ability类型。 |
| PAGE | 无 | 表示基于Page模板开发的FA，用于提供与用户交互的能力。 |
| SERVICE | 无 | 表示基于Service模板开发的PA，用于提供后台运行任务的能力。 |
| DATA | 无 | 表示基于Data模板开发的PA，用于对外部提供统一的数据访问对象。 |

## DisplayOrientationdeprecated

![](../../../../images/1bacb580/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager.DisplayOrientation](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#displayorientation)替代。

屏幕显示方向。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UNSPECIFIED | 无 | 屏幕方向--不指定。 |
| LANDSCAPE | 无 | 屏幕方向--横屏。 |
| PORTRAIT | 无 | 屏幕方向--竖屏。 |
| FOLLOW\_RECENT | 无 | 屏幕方向--紧跟上一个组件。 |

## LaunchModedeprecated

![](../../../../images/8b041188/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager.LaunchType](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#launchtype)替代。

Ability组件的启动模式。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SINGLETON | 0 | Ability只有一个实例。 |
| STANDARD | 1 | Ability有多个实例。 |

## AbilitySubTypedeprecated

![](../../../../images/d16165d3/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，暂无替代接口。

Ability组件的子类型。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UNSPECIFIED | 0 | 未定义Ability子类型。 |
| CA | 1 | Ability子类型是带有 UI 的服务。 |

## ColorModedeprecated

![](../../../../images/1d1c8dea/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，暂无替代接口。

应用、卡片等的颜色模式。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| AUTO\_MODE | -1 | 自动模式。 |
| DARK\_MODE | 0 | 黑色模式。 |
| LIGHT\_MODE | 1 | 亮度模式。 |

## GrantStatusdeprecated

![](../../../../images/ea609b2c/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager.PermissionGrantState](/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#permissiongrantstate)替代。

权限授予状态。

****系统能力：**** SystemCapability.BundleManager.BundleFramework

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PERMISSION\_DENIED | -1 | 拒绝授予权限。 |
| PERMISSION\_GRANTED | 0 | 授予权限。 |
