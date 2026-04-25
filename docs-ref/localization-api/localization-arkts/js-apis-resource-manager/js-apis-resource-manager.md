---
title: "@ohos.resourceManager (资源管理)"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-resource-manager
---

# @ohos.resourceManager (资源管理)

本模块提供资源获取能力。根据当前的[Configuration](#configuration)配置，获取最匹配的应用资源或系统资源。具体匹配规则参考[资源匹配](/resource-categories-and-access#资源匹配)。

Configuration配置包括语言、区域、横竖屏、Mcc（移动国家码）和Mnc（移动网络码）、Device capability（设备类型）、Density（分辨率）。

![](../../../images/0f761827/note_3.0-zh-cn.png) 

本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { resourceManager } from '@kit.LocalizationKit';
```

## 使用说明

从API version 9开始，Stage模型支持通过Context获取资源管理resourceManager对象，无需再导入模块。

FA模型仍需要先导入模块，再调用[getResourceManager](#resourcemanagergetresourcemanager)接口获取资源管理对象。

Stage模型下Context的引用方法请参考[Stage模型的Context详细介绍](/ability-kit/stage-model-development/stage-model-application-components/application-context-stage)。

```
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let context = this.context;
    let resourceManager = context.resourceManager;
  }
}
```

## resourceManager.getResourceManager

getResourceManager(callback: AsyncCallback&lt;ResourceManager&gt;): void

获取当前应用的资源管理对象，使用callback异步回调。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在FA模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [AsyncCallback](#asynccallbackdeprecated)<[ResourceManager](#resourcemanager)> | 是 | 回调函数，返回资源管理ResourceManager对象。 |

****示例：****

```
import resourceManager from '@ohos.resourceManager';
// FA模型请使用上述方式导入模块

export default {
    onCreate() {
        resourceManager.getResourceManager((error, mgr) => {
            if (error != null) {
                console.error("error is " + error);
                return;
            }
            // 'test'仅作示例，请替换为实际使用的资源名称
            mgr.getStringByName('test', (error, value) => {
                if (error) {
                    console.error("error is " + JSON.stringify(error));
                } else {
                    console.info("success is " + value);
                }

            });
        });
    }
};
```

## resourceManager.getResourceManager

getResourceManager(bundleName: string, callback: AsyncCallback&lt;ResourceManager&gt;): void

获取指定应用的资源管理对象，使用callback异步回调。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在FA模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用包名。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<[ResourceManager](#resourcemanager)> | 是 | 回调函数，返回应用包名对应的资源管理ResourceManager对象。 |

****示例：****

```
import resourceManager from '@ohos.resourceManager';
// FA模型请使用上述方式导入模块

// 'com.example.testapp'仅作示例，请替换为实际应用包名
const BUNDLE_NAME = 'com.example.testapp';

export default {
    onCreate() {
        resourceManager.getResourceManager(BUNDLE_NAME, (error, mgr) => {
            if (error != null) {
                console.error("getResourceManager error is " + error);
                return;
            }
            // 'test'仅作示例，请替换为实际使用的资源名称
            mgr.getStringByName('test', (error, value) => {
                if (error) {
                    console.error("getResourceManager error is " + JSON.stringify(error));
                } else {
                    console.info("getResourceManager success is " + value);
                }
            });
        });
    }
};
```

## resourceManager.getResourceManager

getResourceManager(): Promise&lt;ResourceManager&gt;

获取当前应用的资源管理对象，使用Promise异步回调。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在FA模型下使用。

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[ResourceManager](#resourcemanager)&gt; | Promise对象，返回资源管理ResourceManager对象。 |

****示例：****

```
import resourceManager from '@ohos.resourceManager';
// FA模型请使用上述方式导入模块

export default {
    onCreate() {
        resourceManager.getResourceManager().then(resMgr => {
            try {
                // 'test'仅作示例，请替换为实际使用的资源名称
                let testStr = resMgr.getStringByNameSync('test')
                console.info("getResourceManager success is " + testStr);
            } catch (error) {
                console.error("getResourceManager error is " + JSON.stringify(error));
            }
        }).catch(error => {
            console.error("getResourceManager error is " + error);
        });
    }
};
```

## resourceManager.getResourceManager

getResourceManager(bundleName: string): Promise&lt;ResourceManager&gt;

获取指定应用的资源管理对象，使用Promise异步回调。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在FA模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用包名。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[ResourceManager](#resourcemanager)&gt; | Promise对象，返回应用包名对应的资源管理ResourceManager对象。 |

****示例：****

```
import resourceManager from '@ohos.resourceManager';
// FA模型请使用上述方式导入模块

// 'com.example.testapp'仅作示例，请替换为实际应用包名
const BUNDLE_NAME = 'com.example.testapp';

export default {
    onCreate() {
        resourceManager.getResourceManager(BUNDLE_NAME).then(resMgr => {
            try {
                // 'test'仅作示例，请替换为实际使用的资源名称
                let testStr = resMgr.getStringByNameSync('test')
                console.info("getResourceManager success is " + testStr);
            } catch (error) {
                console.error("getResourceManager error is " + JSON.stringify(error));
            }
        }).catch(error => {
            console.error("getResourceManager error is " + error);
        });
    }
};
```

## resourceManager.getSysResourceManager20+

getSysResourceManager(): ResourceManager

获取系统资源管理对象。

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [ResourceManager](#resourcemanager) | 系统资源管理对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001009 | Failed to access the system resource. which is not mapped to application sandbox, This error code will be thrown. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let systemResourceManager = resourceManager.getSysResourceManager();
  // 'sys.string.ohos_lab_vibrate'仅作示例，请替换为实际使用的资源
  systemResourceManager.getStringValue($r('sys.string.ohos_lab_vibrate').id).then((value: string) => {
    let str = value;
  }).catch((error: BusinessError) => {
    console.error(`systemResourceManager getStringValue promise error: ${error}`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSysResourceManager failed, error code: ${code}, message: ${message}.`);
}
```

## Direction

用于表示设备屏幕方向。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DIRECTION\_VERTICAL | 0 | 竖屏。 |
| DIRECTION\_HORIZONTAL | 1 | 横屏。 |

## DeviceType

用于表示当前设备类型。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DEVICE\_TYPE\_PHONE | 0x00 | 手机。 |
| DEVICE\_TYPE\_TABLET | 0x01 | 平板。 |
| DEVICE\_TYPE\_CAR | 0x02 | 汽车。 |
| DEVICE\_TYPE\_PC | 0x03 | 电脑。 |
| DEVICE\_TYPE\_TV | 0x04 | 电视。 |
| DEVICE\_TYPE\_WEARABLE | 0x06 | 穿戴。 |
| DEVICE\_TYPE\_2IN111+ | 0x07 | 2IN1。 |

## ScreenDensity

用于表示当前设备屏幕密度。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SCREEN\_SDPI | 120 | 低屏幕密度。 |
| SCREEN\_MDPI | 160 | 中屏幕密度。 |
| SCREEN\_LDPI | 240 | 高屏幕密度。 |
| SCREEN\_XLDPI | 320 | 特高屏幕密度。 |
| SCREEN\_XXLDPI | 480 | 超高屏幕密度。 |
| SCREEN\_XXXLDPI | 640 | 超特高屏幕密度。 |

## ColorMode12+

用于表示当前设备颜色模式。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DARK | 0 | 深色模式。 |
| LIGHT | 1 | 浅色模式。 |

## Configuration

表示当前设备的状态。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| direction | [Direction](#direction) | 否 | 否 | 屏幕方向。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| locale | string | 否 | 否 | 语言文字国家地区。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| deviceType12+ | [DeviceType](#devicetype) | 否 | 否 | 设备类型。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| screenDensity12+ | [ScreenDensity](#screendensity) | 否 | 否 | 屏幕密度。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| colorMode12+ | [ColorMode](#colormode12) | 否 | 否 | 颜色模式。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| mcc12+ | number | 否 | 否 | 移动国家码。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |
| mnc12+ | number | 否 | 否 | 移动网络码。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |

## DeviceCapability

表示设备支持的能力。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| screenDensity | [ScreenDensity](#screendensity) | 否 | 否 | 当前设备屏幕密度。 |
| deviceType | [DeviceType](#devicetype) | 否 | 否 | 当前设备类型。 |

## RawFileDescriptor9+

type RawFileDescriptor = \_RawFileDescriptor

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 类型 | 说明 |
| --- | --- |
| [\_RawFileDescriptor](/ref/localization-api/localization-arkts/localization-global-arkts/js-apis-rawfiledescriptor/js-apis-rawfiledescriptor#rawfiledescriptor-1) | 表示rawfile文件所在HAP的文件描述符（fd）。 |

## Resource9+

type Resource = \_Resource

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

| 类型 | 说明 |
| --- | --- |
| [\_Resource](/ref/localization-api/localization-arkts/localization-global-arkts/js-apis-resource/js-apis-resource#resource-1) | 表示资源信息，包含资源ID值、应用包名、模块名称等信息，一般可使用$r方式获取。 |

## ResourceManager

提供访问应用资源和系统资源的能力。

![](../../../images/7093281d/note_3.0-zh-cn.png) 

- ResourceManager涉及到的方法，仅限基于TS扩展的声明式开发范式使用。
- 资源文件在工程的resources目录中定义，通过resName、resId、Resource对象等可以获取对应的字符串、字符串数组、颜色等资源值，resName为资源名称，resId可通过$r(资源地址).id的方式获取，例如$r('app.string.test').id。
- 单HAP包获取自身资源、跨HAP/HSP包获取资源，由于入参为Resource的接口相比于入参为resName、resId的接口耗时更长，因此更推荐使用参数为resName或resId的接口。跨HAP/HSP包获取资源，****需要先使用[createModuleContext](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationcreatemodulecontext)创建对应module的context****，再调用参数为resName或resId的接口。更多请参考[资源访问](/resource-categories-and-access#资源访问)。
- 在API version 22及之前版本，中间码HAR、字节码HAR通过资源ID相关接口访问资源时，因ID无效会抛出异常；从API version 23开始，中间码HAR、字节码HAR通过资源ID相关接口可以正常访问资源，更多请参考[资源访问](/resource-categories-and-access#资源访问)。
- 示例代码中test文件的具体内容请参考[附录](#附录)。

### getStringSync9+

getStringSync(resId: number): string

获取指定资源ID对应的字符串，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源ID值对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.string.test'仅作示例，请替换为实际使用的资源
            let testStr = this.context.resourceManager.getStringSync($r('app.string.test').id);
            console.info(`getStringSync, result: ${testStr}`);
            // 打印输出结果: getStringSync, result: I'm a test string resource.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringSync10+

getStringSync(resId: number, ...args: Array&lt;string | number&gt;): string

获取指定资源ID对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源ID值对应的格式化字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.string.test'仅作示例，请替换为实际使用的资源
            let testStr = this.context.resourceManager.getStringSync($r('app.string.test').id, "format string", 10, 98.78);
            console.info(`getStringSync, result: ${testStr}`);
            // 打印输出结果: getStringSync, result: I'm a format string, format int: 10, format float: 98.78.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringByNameSync9+

getStringByNameSync(resName: string): string

获取指定资源名称对应的字符串，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源名称对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            let testStr = this.context.resourceManager.getStringByNameSync("test");
            console.info(`getStringByNameSync, result: ${testStr}`);
            // 打印输出结果: getStringByNameSync, result: I'm a test string resource.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringByNameSync10+

getStringByNameSync(resName: string, ...args: Array&lt;string | number&gt;): string

获取指定资源名称对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源名称对应的格式化字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource Name. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            let testStr = this.context.resourceManager.getStringByNameSync("test", "format string", 10, 98.78);
            console.info(`getStringByNameSync, result: ${testStr}`);
            // 打印输出结果: getStringByNameSync, result: I'm a format string, format int: 10, format float: 98.78.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringValue9+

getStringValue(resId: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源ID对应的字符串，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回获取的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例Stage：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.string.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringValue($r('app.string.test').id, (error: BusinessError, value: string) => {
            if (error != null) {
                console.error(`callback getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getStringValue, result: ${value}`);
                // 打印输出结果: getStringValue, result: I'm a test string resource.
            }
        });
    }
}
```

### getStringValue9+

getStringValue(resId: number): Promise&lt;string&gt;

获取指定资源ID对应的字符串，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.string.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringValue($r('app.string.test').id).then((value: string) => {
            console.info(`getStringValue, result: ${value}`);
            // 打印输出结果: getStringValue, result: I'm a test string resource.
        }).catch((error: BusinessError) => {
            console.error(`promise getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
        });
    }
}
```

### getStringByName9+

getStringByName(resName: string, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源名称对应的字符串，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 返回获取的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringByName("test", (error: BusinessError, value: string) => {
            if (error != null) {
                console.error(`callback getStringByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getStringByName, result: ${value}`);
                // 打印输出结果: getStringByName, result: I'm a test string resource.
            }
        });
    }
}
```

### getStringByName9+

getStringByName(resName: string): Promise&lt;string&gt;

获取指定资源名称对应的字符串，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源名称对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringByName("test").then((value: string) => {
            console.info(`getStringByName, result: ${value}`);
            // 打印输出结果: getStringByName, result: I'm a test string resource.
        }).catch((error: BusinessError) => {
            console.error(`promise getStringByName failed, error code: ${error.code}, message: ${error.message}.`);
        });
    }
}
```

### getStringArrayValueSync10+

getStringArrayValueSync(resId: number): Array&lt;string&gt;

获取指定资源ID对应的字符串数组，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 资源ID值对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.strarray.test'仅作示例，请替换为实际使用的资源
            let strArray: Array<string> = this.context.resourceManager.getStringArrayValueSync($r('app.strarray.test').id);
            console.info(`getStringArrayValueSync, result: ${strArray[0]}`);
            // 打印输出结果: getStringArrayValueSync, result: I'm one of the array's values.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringArrayValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringArrayByNameSync10+

getStringArrayByNameSync(resName: string): Array&lt;string&gt;

获取指定资源名称对应的字符串数组，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 对应资源名称的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            let strArray: Array<string> = this.context.resourceManager.getStringArrayByNameSync("test");
            console.info(`getStringArrayByNameSync, result: ${strArray[0]}`);
            // 打印输出结果: getStringArrayByNameSync, result: I'm one of the array's values.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getStringArrayByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getStringArrayValue9+

getStringArrayValue(resId: number, callback: \_AsyncCallback&lt;Array&lt;string&gt;>): void

获取指定资源ID对应的字符串数组，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)&lt;Array&lt;string&gt;&gt; | 是 | 回调函数，返回资源ID值对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.strarray.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringArrayValue($r('app.strarray.test').id,
            (error: BusinessError, value: Array<string>) => {
                if (error != null) {
                    console.error(`callback getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    console.info(`getStringArrayValue, result: ${value[0]}`);
                    // 打印输出结果: getStringArrayValue, result: I'm one of the array's values.
                }
            });
    }
}
```

### getStringArrayValue9+

getStringArrayValue(resId: number): Promise&lt;Array&lt;string&gt;>

获取指定资源ID对应的字符串数组，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise对象，返回资源ID值对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.strarray.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringArrayValue($r('app.strarray.test').id)
            .then((value: Array<string>) => {
                console.info(`getStringArrayValue, result: ${value[0]}`);
                // 打印输出结果: getStringArrayValue, result: I'm one of the array's values.
            })
            .catch((error: BusinessError) => {
                console.error(`promise getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}
```

### getStringArrayByName9+

getStringArrayByName(resName: string, callback: \_AsyncCallback&lt;Array&lt;string&gt;>): void

获取指定资源名称对应的字符串数组，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)&lt;Array&lt;string&gt;&gt; | 是 | 回调函数，返回资源名称对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringArrayByName("test", (error: BusinessError, value: Array<string>) => {
            if (error != null) {
                console.error(`callback getStringArrayByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                let strArray = value;
                console.info(`getStringArrayByName, result: ${value[0]}`);
                // 打印输出结果: getStringArrayByName, result: I'm one of the array's values.
            }
        });
    }
}
```

### getStringArrayByName9+

getStringArrayByName(resName: string): Promise&lt;Array&lt;string&gt;>

获取指定资源名称对应的字符串数组，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise对象，返回资源名称对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getStringArrayByName("test")
            .then((value: Array<string>) => {
                console.info(`getStringArrayByName, result: ${value[0]}`);
                // 打印输出结果: getStringArrayByName, result: I'm one of the array's values.
            })
            .catch((error: BusinessError) => {
                console.error(`promise getStringArrayByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}
```

### getIntPluralStringValueSync18+

getIntPluralStringValueSync(resId: number, num: number, ...args: Array&lt;string | number&gt;): string

获取指定资源ID对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/7824905f/note_3.0-zh-cn.png) 

- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
- 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值（整数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源ID值对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
            // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
            // 'app.plural.format_test'仅作示例，请替换为实际使用的资源
            let pluralStr = this.context.resourceManager.getIntPluralStringValueSync($r('app.plural.format_test').id, 1, 1, "basket", 0.3);
            console.info(`getIntPluralStringValueSync, result: ${pluralStr}`);
            // 打印输出结果: getIntPluralStringValueSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getIntPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getIntPluralStringByNameSync18+

getIntPluralStringByNameSync(resName: string, num: number, ...args: Array&lt;string | number&gt;): string

获取指定资源名称对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/525eb09d/note_3.0-zh-cn.png) 

- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
- 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| num | number | 是 | 数量值（整数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源名称对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
            // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
            // "format_test"仅作示例，请替换为实际使用的资源
            let pluralStr = this.context.resourceManager.getIntPluralStringByNameSync("format_test", 1, 1, "basket", 0.3);
            console.info(`getIntPluralStringByNameSync, result: ${pluralStr}`);
            // 打印输出结果: getIntPluralStringByNameSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getIntPluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getDoublePluralStringValueSync18+

getDoublePluralStringValueSync(resId: number, num: number, ...args: Array&lt;string | number&gt;): string

获取指定资源ID对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/9072a3df/note_3.0-zh-cn.png) 

- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
- 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值（浮点数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源ID值对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 根据语言单复数规则，参数num取值为2.1，英文环境下对应单复数类别为other
            // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为other的字符串
            // 'app.plural.format_test'仅作示例，请替换为实际使用的资源
            let pluralStr = this.context.resourceManager.getDoublePluralStringValueSync($r('app.plural.format_test').id, 2.1, 2, "basket", 0.6);
            console.info(`getDoublePluralStringValueSync, result: ${pluralStr}`);
            // 打印输出结果: getDoublePluralStringValueSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDoublePluralStringValueSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getDoublePluralStringByNameSync18+

getDoublePluralStringByNameSync(resName: string, num: number, ...args: Array&lt;string | number&gt;): string

获取指定资源名称对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/44bd1d8a/note_3.0-zh-cn.png) 

- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
- 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| num | number | 是 | 数量值（浮点数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源名称对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |
| 9001008 | Failed to format the resource obtained based on the resource name. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 根据语言单复数规则，参数num取值为2.1，英文环境下对应单复数类别为other
            // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为other的字符串
            // "format_test"仅作示例，请替换为实际使用的资源
            let pluralStr = this.context.resourceManager.getDoublePluralStringByNameSync("format_test", 2.1, 2, "basket", 0.6);
            console.info(`getDoublePluralStringByNameSync, result: ${pluralStr}`);
            // 打印输出结果: getDoublePluralStringByNameSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDoublePluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentSync10+

getMediaContentSync(resId: number, density?: number): Uint8Array

获取指定资源ID对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 资源ID对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentSync($r('app.media.test').id); // 默认屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentSync($r('app.media.test').id, 120); // 指定屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaByNameSync10+

getMediaByNameSync(resName: string, density?: number): Uint8Array

获取指定资源名称对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 资源名称对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByNameSync("test"); // 默认屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaByNameSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByNameSync("test", 120); // 指定屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContent9+

getMediaContent(resId: number, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定资源ID对应的媒体文件内容，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回资源ID对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContent($r('app.media.test').id,
                (error: BusinessError, value: Uint8Array) => {
                    if (error != null) {
                        console.error("error is " + error);
                    } else {
                        let media = value;
                    }
                });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContent10+

getMediaContent(resId: number, density: number, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定资源ID对应的指定屏幕密度媒体文件内容，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回资源ID对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContent($r('app.media.test').id, 120, (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error(`callback getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContent9+

getMediaContent(resId: number): Promise&lt;Uint8Array&gt;

获取指定资源ID对应的媒体文件内容，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回资源ID值对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContent($r('app.media.test').id).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaContent promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContent10+

getMediaContent(resId: number, density: number): Promise&lt;Uint8Array&gt;

获取指定资源ID对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回资源ID值对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContent($r('app.media.test').id, 120).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaByName9+

getMediaByName(resName: string, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定资源名称对应的媒体文件内容，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回资源名称对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByName("test", (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaByName10+

getMediaByName(resName: string, density: number, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定资源名称对应的指定屏幕密度媒体文件内容，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回资源名称对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByName("test", 120, (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error(`callback getMediaByName failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaByName9+

getMediaByName(resName: string): Promise&lt;Uint8Array&gt;

获取指定资源名称对应的媒体文件内容，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回资源名称对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByName("test").then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaByName promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaByName10+

getMediaByName(resName: string, density: number): Promise&lt;Uint8Array&gt;

获取指定资源名称对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回资源名称对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaByName("test", 120).then((value: Uint8Array) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentBase64Sync10+

getMediaContentBase64Sync(resId: number, density?: number): string

获取指定资源ID对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源ID对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64Sync($r('app.media.test').id); // 默认屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64Sync($r('app.media.test').id, 120); // 指定屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaBase64ByNameSync10+

getMediaBase64ByNameSync(resName: string, density?: number): string

获取指定资源名称对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 资源名称对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByNameSync("test"); // 默认屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaBase64ByNameSync failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByNameSync("test", 120); // 指定屏幕密度
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getMediaBase64ByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentBase649+

getMediaContentBase64(resId: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentBase6410+

getMediaContentBase64(resId: number, density: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, 120, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error(`callback getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentBase649+

getMediaContentBase64(resId: number): Promise&lt;string&gt;

获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaContentBase64 promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaContentBase6410+

getMediaContentBase64(resId: number, density: number): Promise&lt;string&gt;

获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.test'仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaContentBase64($r('app.media.test').id, 120).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaBase64ByName9+

getMediaBase64ByName(resName: string, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源名称对应的图片资源Base64编码，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源名称的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByName("test", (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaBase64ByName10+

getMediaBase64ByName(resName: string, density: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

![](../../../images/ff85a5e6/note_3.0-zh-cn.png) 

推荐使用[getMediaBase64ByName](#getmediacontentbase6410)或[getMediaContentBase64](#getmediacontentbase6410)接口，具体请参考[ResourceManager](#resourcemanager)的说明。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源名称的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByName("test", 120, (error: BusinessError, value: string) => {
                if (error != null) {
                    console.error(`callback getMediaBase64ByName failed, error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let media = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaBase64ByName9+

getMediaBase64ByName(resName: string): Promise&lt;string&gt;

获取指定资源名称对应的图片资源Base64编码，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源名称对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByName("test").then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error("getMediaBase64ByName promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getMediaBase64ByName10+

getMediaBase64ByName(resName: string, density: number): Promise&lt;string&gt;

获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源名称对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getMediaBase64ByName("test", 120).then((value: string) => {
                let media = value;
            }).catch((error: BusinessError) => {
                console.error(`promise getMediaBase64ByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getMediaBase64ByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getDrawableDescriptor10+

getDrawableDescriptor(resId: number, density?: number, type?: number): DrawableDescriptor

获取指定资源ID对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type11+ | number | 否 | - 1表示获取主题资源包中应用的分层图标资源。  - 0或缺省表示获取应用自身图标资源。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [DrawableDescriptor](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor) | 资源ID值对应的DrawableDescriptor对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.media.icon'仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // 'app.media.icon'仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id, 120);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // 'app.media.icon'仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor($r('app.media.icon').id, 0, 1);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getDrawableDescriptorByName10+

getDrawableDescriptorByName(resName: string, density?: number, type?: number): DrawableDescriptor

获取指定资源名称对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type11+ | number | 否 | - 1表示获取主题资源包中应用的分层图标资源。  - 0或缺省表示获取应用自身图标资源。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [DrawableDescriptor](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor) | 资源名称对应的DrawableDescriptor对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "icon"仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon');
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // "icon"仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon', 120);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
        try {
            // "icon"仅作示例，请替换为实际使用的资源
            let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptorByName('icon', 0, 1);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getDrawableDescriptorByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getBoolean9+

getBoolean(resId: number): boolean

获取指定资源ID值对应的布尔值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 资源ID值对应的布尔值。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.boolean.boolean_test'仅作示例，请替换为实际使用的资源
            let boolTest = this.context.resourceManager.getBoolean($r('app.boolean.boolean_test').id);
            console.info(`getBoolean, result: ${boolTest}`);
            // 打印输出结果: getBoolean, result: true
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getBoolean failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getBooleanByName9+

getBooleanByName(resName: string): boolean

获取指定资源名称对应的布尔值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 资源名称对应的布尔值。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "boolean_test"仅作示例，请替换为实际使用的资源
            let boolTest = this.context.resourceManager.getBooleanByName("boolean_test");
            console.info(`getBooleanByName, result: ${boolTest}`);
            // 打印输出结果: getBooleanByName, result: true
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getBooleanByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getNumber9+

getNumber(resId: number): number

获取指定资源ID对应的integer数值或者float数值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源ID值对应的数值。  integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值，具体参考示例代码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}
```

```
// 资源文件路径: src/main/resources/base/element/float.json
{
  "float": [
    {
      "name": "float_test",
      "value": "30.6vp"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // integer对应返回的是原数值
            // 'app.integer.integer_test'仅作示例，请替换为实际使用的资源
            let intValue = this.context.resourceManager.getNumber($r('app.integer.integer_test').id);
            console.info(`getNumber, int value: ${intValue}`);
            // 打印输出结果: getNumber, int value: 100
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // float对应返回的是真实像素点值，带"vp","fp"单位的像素值 = 原数值 * densityPixels
            // 'app.float.float_test'仅作示例，请替换为实际使用的资源
            let floatValue = this.context.resourceManager.getNumber($r('app.float.float_test').id);
            console.info(`getNumber, densityPixels: ${display.getDefaultDisplaySync().densityPixels}, float value: ${floatValue}`);
            // 打印输出结果: getNumber, densityPixels: 3.25, float value: 99.45000457763672
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getNumberByName9+

getNumberByName(resName: string): number

获取指定资源名称对应的integer数值或者float数值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源名称对应的数值。  integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}
```

```
// 资源文件路径: src/main/resources/base/element/float.json
{
  "float": [
    {
      "name": "float_test",
      "value": "30.6vp"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // integer对应返回的是原数值
            // "integer_test"仅作示例，请替换为实际使用的资源
            let intValue = this.context.resourceManager.getNumberByName("integer_test");
            console.info(`getNumberByName, int value: ${intValue}`);
            // 打印输出结果: getNumberByName, int value: 100
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumberByName failed, error code: ${code}, message: ${message}.`);
        }

        try {
            // float对应返回的是真实像素点值，带"vp","fp"单位的像素值 = 原数值 * densityPixels
            // "float_test"仅作示例，请替换为实际使用的资源
            let floatValue = this.context.resourceManager.getNumberByName("float_test");
            console.info(`getNumberByName, densityPixels: ${display.getDefaultDisplaySync().densityPixels}, float value: ${floatValue}`);
            // 打印输出结果: getNumberByName, densityPixels: 3.25, float value: 99.45000457763672
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getNumberByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getColorSync10+

getColorSync(resId: number) : number

获取指定资源ID对应的颜色值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源ID值对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'app.color.test'仅作示例，请替换为实际使用的资源
            let colorValue = this.context.resourceManager.getColorSync($r('app.color.test').id);
            console.info(`getColorSync, result: ${colorValue}`);
            // 打印输出结果: getColorSync, result: 4294967295
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getColorByNameSync10+

getColorByNameSync(resName: string) : number

获取指定资源名称对应的颜色值，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源名称对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test"仅作示例，请替换为实际使用的资源
            let colorValue = this.context.resourceManager.getColorByNameSync("test");
            console.info(`getColorByNameSync, result: ${colorValue}`);
            // 打印输出结果: getColorByNameSync, result: 4294967295
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getColorByNameSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getColor10+

getColor(resId: number, callback: \_AsyncCallback&lt;number&gt;): void

获取指定资源ID对应的颜色值，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<number> | 是 | 回调函数，返回资源ID值对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例Stage：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.color.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getColor($r('app.color.test').id, (error: BusinessError, value: number) => {
            if (error != null) {
                console.error(`callback getColor failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getColor, result: ${value}`);
                // 打印输出结果: getColor, result: 4294967295
            }
        });
    }
}
```

### getColor10+

getColor(resId: number): Promise&lt;number&gt;

获取指定资源ID对应的颜色值，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象，返回资源ID值对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 'app.color.test'仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getColor($r('app.color.test').id)
            .then((value: number) => {
                console.info(`getColor, result: ${value}`);
                // 打印输出结果: getColor, result: 4294967295
            })
            .catch((error: BusinessError) => {
                console.error(`promise getColor failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}
```

### getColorByName10+

getColorByName(resName: string, callback: \_AsyncCallback&lt;number&gt;): void

获取指定资源名称对应的颜色值，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<number> | 是 | 回调函数，返回资源名称对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getColorByName("test", (error: BusinessError, value: number) => {
            if (error != null) {
                console.error(`callback getColorByName failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getColorByName, result: ${value}`);
                // 打印输出结果: getColorByName, result: 4294967295
            }
        });
    }
}
```

### getColorByName10+

getColorByName(resName: string): Promise&lt;number&gt;

获取指定资源名称对应的颜色值，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象，返回资源名称对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "test"仅作示例，请替换为实际使用的资源
        this.context.resourceManager.getColorByName("test")
            .then((value: number) => {
                console.info(`getColorByName, result: ${value}`);
                // 打印输出结果: getColorByName, result: 4294967295
            })
            .catch((error: BusinessError) => {
                console.error(`promise getColorByName failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}
```

### getRawFileContentSync10+

getRawFileContentSync(path: string): Uint8Array

获取resources/rawfile目录下对应的rawfile文件内容，使用同步形式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回获取的rawfile文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFileContentSync("test.txt");
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFileContentSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFileContent9+

getRawFileContent(path: string, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回获取的rawfile文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFileContent("test.txt", (error: BusinessError, value: Uint8Array) => {
                if (error != null) {
                    console.error("error is " + error);
                } else {
                    let rawFile = value;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getRawFileContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFileContent9+

getRawFileContent(path: string): Promise&lt;Uint8Array&gt;

获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回获取的rawfile文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFileContent("test.txt").then((value: Uint8Array) => {
                let rawFile = value;
            }).catch((error: BusinessError) => {
                console.error("getRawFileContent promise error is " + error);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getRawFileContent failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFileListSync10+

getRawFileListSync(path: string): Array&lt;string&gt;

获取resources/rawfile目录下文件夹及文件列表，使用同步形式返回。

![](../../../images/edf91216/note_3.0-zh-cn.png) 

若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件夹路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | rawfile文件目录下的文件夹及文件列表。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 传入""表示获取rawfile根目录下的文件列表，假设rawfile根目录下存在test.txt文件
            // 传入""仅作示例，请替换为rawfile目录下实际的文件路径
            let fileList: Array<string> = this.context.resourceManager.getRawFileListSync("");
            console.info(`getRawFileListSync, result: ${JSON.stringify(fileList)}`);
            // 打印输出结果: getRawFileListSync, result: ["test.txt"]
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFileListSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFileList10+

getRawFileList(path: string, callback: \_AsyncCallback&lt;Array&lt;string&gt;>): void

获取resources/rawfile目录下文件夹及文件列表，使用callback异步回调。

![](../../../images/84235b73/note_3.0-zh-cn.png) 

若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件夹路径。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)&lt;Array&lt;string&gt;&gt; | 是 | 回调函数，返回rawfile文件目录下的文件夹及文件列表。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 传入""表示获取rawfile根目录下的文件列表，假设rawfile根目录下存在test.txt文件
        // 传入""仅作示例，请替换为rawfile目录下实际的文件路径
        this.context.resourceManager.getRawFileList("", (error: BusinessError, value: Array<string>) => {
            if (error != null) {
                console.error(`callback getRawFileList failed, error code: ${error.code}, message: ${error.message}.`);
            } else {
                console.info(`getRawFileList, result: ${JSON.stringify(value)}`);
                // 打印输出结果: getRawFileList, result: ["test.txt"]
            }
        });
    }
}
```

### getRawFileList10+

getRawFileList(path: string): Promise&lt;Array&lt;string&gt;>

获取resources/rawfile目录下文件夹及文件列表，使用Promise异步回调。

![](../../../images/98ec9203/note_3.0-zh-cn.png) 

若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件夹路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise对象，返回rawfile文件目录下的文件夹及文件列表。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // 传入""表示获取rawfile根目录下的文件列表，假设rawfile根目录下存在test.txt文件
        // 传入""仅作示例，请替换为rawfile目录下实际的文件路径
        this.context.resourceManager.getRawFileList("")
            .then((value: Array<string>) => {
                console.info(`getRawFileList, result: ${JSON.stringify(value)}`);
                // 打印输出结果: getRawFileList, result: ["test.txt"]
            })
            .catch((error: BusinessError) => {
                console.error(`promise getRawFileList failed, error code: ${error.code}, message: ${error.message}.`);
            });
    }
}
```

### getRawFdSync10+

getRawFdSync(path: string): RawFileDescriptor

获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。

![](../../../images/c252ce7e/note_3.0-zh-cn.png) 

文件描述符（fd）使用完毕后需调用[closeRawFdSync](#closerawfdsync10)或[closeRawFd](#closerawfd9)关闭fd，避免资源泄露。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [RawFileDescriptor](#rawfiledescriptor9) | rawfile文件所在HAP的文件描述符（fd）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFdSync("test.txt");
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getRawFdSync failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFd9+

getRawFd(path: string, callback: \_AsyncCallback&lt;RawFileDescriptor&gt;): void

获取resources/rawfile目录下对应rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。

![](../../../images/55bba49a/note_3.0-zh-cn.png) 

文件描述符（fd）使用完毕后需调用[closeRawFdSync](#closerawfdsync10)或[closeRawFd](#closerawfd9)关闭fd，避免资源泄露。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<[RawFileDescriptor](#rawfiledescriptor9)> | 是 | 回调函数，返回的rawfile文件所在HAP的文件描述符（fd）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFd("test.txt", (error: BusinessError, value: resourceManager.RawFileDescriptor) => {
                if (error != null) {
                    console.error(`callback getRawFd failed error code: ${error.code}, message: ${error.message}.`);
                } else {
                    let fd = value.fd;
                    let offset = value.offset;
                    let length = value.length;
                }
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`callback getRawFd failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getRawFd9+

getRawFd(path: string): Promise&lt;RawFileDescriptor&gt;

获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。

![](../../../images/e9c359ea/note_3.0-zh-cn.png) 

文件描述符（fd）使用完毕后需调用[closeRawFdSync](#closerawfdsync10)或[closeRawFd](#closerawfd9)关闭fd，避免资源泄露。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[RawFileDescriptor](#rawfiledescriptor9)&gt; | Promise对象，返回rawfile文件所在HAP的文件描述符（fd）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "test.txt"仅作示例，请替换为实际使用的资源
            this.context.resourceManager.getRawFd("test.txt").then((value: resourceManager.RawFileDescriptor) => {
                let fd = value.fd;
                let offset = value.offset;
                let length = value.length;
            }).catch((error: BusinessError) => {
                console.error(`promise getRawFd error error code: ${error.code}, message: ${error.message}.`);
            });
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`promise getRawFd failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### closeRawFdSync10+

closeRawFdSync(path: string): void

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径 。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // "test.txt"仅作示例，请替换为实际使用的资源
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // 根据实际业务场景，使用rawfile资源

      this.context.resourceManager.closeRawFdSync("test.txt");
      console.info(`closeRawFdSync test success.`);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`closeRawFdSync test failed, error code: ${code}, message: ${message}.`);
    }
  }
}
```

### closeRawFd9+

closeRawFd(path: string, callback: \_AsyncCallback&lt;void&gt;): void

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<void> | 是 | 回调函数。当关闭rawfile所在HAP的文件描述符（fd）成功，err为undefined，否则为错误对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // "test.txt"仅作示例，请替换为实际使用的资源
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // 根据实际业务场景，使用rawfile资源
      this.context.resourceManager.closeRawFd("test.txt", (error: BusinessError) => {
        if (error != null) {
          console.error("error is " + error);
          return;
        }
        console.info('closeRawFd success.');
      });
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`callback closeRawFd failed, error code: ${code}, message: ${message}.`);
    }
  }
}
```

### closeRawFd9+

closeRawFd(path: string): Promise&lt;void&gt;

关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      // "test.txt"仅作示例，请替换为实际使用的资源
      let rawfile = this.context.resourceManager.getRawFdSync("test.txt");
      // 根据实际业务场景，使用rawfile资源
      this.context.resourceManager.closeRawFd("test.txt");
      console.info(`closeRawFd test success.`);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`promise closeRawFd failed, error code: ${code}, message: ${message}.`);
    }
  }
}
```

### getConfigurationSync10+

getConfigurationSync(): Configuration

获取设备的Configuration，使用同步形式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [Configuration](#configuration) | 设备的Configuration。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let value = this.context.resourceManager.getConfigurationSync();
            let direction = value.direction;
            let locale = value.locale;
        } catch (error) {
            console.error("getConfigurationSync error is " + error);
        }
    }
}
```

### getConfiguration

getConfiguration(callback: \_AsyncCallback&lt;Configuration&gt;): void

获取设备的Configuration，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<[Configuration](#configuration)> | 是 | 回调函数，返回设备的Configuration。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getConfiguration((error: BusinessError, value: resourceManager.Configuration) => {
                if (error != null) {
                    console.error("getConfiguration callback error is " + error);
                } else {
                    let direction = value.direction;
                    let locale = value.locale;
                }
            });
        } catch (error) {
            console.error("getConfiguration callback error is " + error);
        }
    }
}
```

### getConfiguration

getConfiguration(): Promise&lt;Configuration&gt;

获取设备的Configuration，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Configuration](#configuration)&gt; | Promise对象，返回设备的Configuration。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getConfiguration().then((value: resourceManager.Configuration) => {
                let direction = value.direction;
                let locale = value.locale;
            }).catch((error: BusinessError) => {
                console.error("getConfiguration promise error is " + error);
            });
        } catch (error) {
            console.error("getConfiguration promise error is " + error);
        }
    }
}
```

### getDeviceCapabilitySync10+

getDeviceCapabilitySync(): DeviceCapability

获取设备的DeviceCapability，使用同步形式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [DeviceCapability](#devicecapability) | 设备的DeviceCapability。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let value = this.context.resourceManager.getDeviceCapabilitySync();
            let screenDensity = value.screenDensity;
            let deviceType = value.deviceType;
        } catch (error) {
            console.error("getDeviceCapabilitySync error is " + error);
        }
    }
}
```

### getDeviceCapability

getDeviceCapability(callback: \_AsyncCallback&lt;DeviceCapability&gt;): void

获取设备的DeviceCapability，使用callback异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<[DeviceCapability](#devicecapability)> | 是 | 回调函数，返回设备的DeviceCapability。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getDeviceCapability((error: BusinessError, value: resourceManager.DeviceCapability) => {
                if (error != null) {
                    console.error("getDeviceCapability callback error is " + error);
                } else {
                    let screenDensity = value.screenDensity;
                    let deviceType = value.deviceType;
                }
            });
        } catch (error) {
            console.error("getDeviceCapability callback error is " + error);
        }
    }
}
```

### getDeviceCapability

getDeviceCapability(): Promise&lt;DeviceCapability&gt;

获取设备的DeviceCapability，使用Promise异步回调。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[DeviceCapability](#devicecapability)&gt; | Promise对象，返回设备的DeviceCapability。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getDeviceCapability().then((value: resourceManager.DeviceCapability) => {
                let screenDensity = value.screenDensity;
                let deviceType = value.deviceType;
            }).catch((error: BusinessError) => {
                console.error("getDeviceCapability promise error is " + error);
            });
        } catch (error) {
            console.error("getDeviceCapability promise error is " + error);
        }
    }
}
```

### addResource10+

addResource(path: string): void

应用运行时加载指定的资源路径，实现资源覆盖。

![](../../../images/c902b8f6/note_3.0-zh-cn.png) 

rawfile和resfile目录不支持资源覆盖。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 资源路径。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001010 | Invalid overlay path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "/library1-default-signed.hsp"仅作示例，请替换为实际的文件路径
        let path = this.context.bundleCodeDir + "/library1-default-signed.hsp";
        try {
            this.context.resourceManager.addResource(path);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`addResource failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### removeResource10+

removeResource(path: string): void

应用运行时移除指定的资源路径，还原被覆盖前的资源。

![](../../../images/28faed72/note_3.0-zh-cn.png) 

rawfile和resfile目录不支持资源覆盖。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 资源路径。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001010 | Invalid overlay path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        // "/library1-default-signed.hsp"仅作示例，请替换为实际的文件路径
        let path = this.context.bundleCodeDir + "/library1-default-signed.hsp";
        try {
            this.context.resourceManager.removeResource(path);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`removeResource failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getLocales11+

getLocales(includeSystem?: boolean): Array&lt;string&gt;

获取应用的语言列表。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| includeSystem | boolean | 否 | 是否包含系统资源，默认值为false。  - false：表示仅获取应用资源的语言列表。  - true：表示获取系统资源和应用资源的语言列表。  当使用系统资源管理对象获取语言列表时，includeSystem值无效，始终返回系统资源语言列表。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 返回获取的语言列表，列表中的字符串由语言、脚本（可选）、地区（可选），按照顺序使用中划线“-”连接组成。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            this.context.resourceManager.getLocales(); // 仅获取应用资源语言列表
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }

        try {
            resourceManager.getSysResourceManager().getLocales(); // 仅获取系统资源语言列表
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }

        try {
            this.context.resourceManager.getLocales(true); // 获取应用资源和系统资源语言列表
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getLocales failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getSymbol11+

getSymbol(resId: number): number

获取指定资源ID对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源ID值对应的Symbol字符Unicode码（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 'sys.symbol.message'仅作示例，请替换为实际使用的资源
            let symbolValue = this.context.resourceManager.getSymbol($r('sys.symbol.message').id);
            console.info(`getSymbol, result: ${symbolValue}`);
            // 打印输出结果: getSymbol, result: 983183
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getSymbol failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getSymbolByName11+

getSymbolByName(resName: string): number

获取指定资源名称对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | 资源名称对应的Symbol字符Unicode码（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // "message"仅作示例，请替换为实际使用的资源
            let symbolValue = this.context.resourceManager.getSymbolByName("message");
            console.info(`getSymbolByName, result: ${symbolValue}`);
            // 打印输出结果: getSymbolByName, result: 983183
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getSymbolByName failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### isRawDir12+

isRawDir(path: string): boolean

判断指定路径是否为rawfile下的目录，使用同步方式返回。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 是否为rawfile下的目录。  - true：表示是rawfile下的目录。  - false：表示非rawfile下的目录。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001005 | Invalid relative path. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            // 假设rawfile根目录下存在非空文件夹sub，则isRawDir返回结果为true
            // "sub"仅作示例，请替换为实际使用的目录名称
            let isRawDir = this.context.resourceManager.isRawDir("sub");
            // 打印输出结果: sub isRawDir, result: true
            console.info(`sub isRawDir, result: ${isRawDir}`);

            // 假设rawfile根目录下存在test.txt文件，则isRawDir返回结果为false
            // "test.txt"仅作示例，请替换为实际使用的资源
            isRawDir = this.context.resourceManager.isRawDir("test.txt");
            // 打印输出结果: test.txt isRawDir, result: false
            console.info(`test.txt isRawDir, result: ${isRawDir}`);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`isRawDir failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getOverrideResourceManager12+

getOverrideResourceManager(configuration?: Configuration): ResourceManager

获取可以加载差异化资源的资源管理对象，使用同步方式返回。

普通的资源管理对象获取的资源的配置（语言、深浅色、分辨率、横竖屏等）是由系统决定的，而通过该接口返回的对象，应用可以获取符合指定配置的资源，即差异化资源，比如在浅色模式时可以获取深色资源。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configuration | [Configuration](#configuration) | 否 | 指定想要获取的资源配置。  通过[getOverrideConfiguration](#getoverrideconfiguration12)获取差异化配置后，根据需求修改配置项，再作为参数传入该函数。  若缺省则表示使用当前系统的configuration。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| ResourceManager | 可以加载差异化资源的资源管理对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.getOverrideResourceManager(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getOverrideResourceManager failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### getOverrideConfiguration12+

getOverrideConfiguration(): Configuration

获取差异化资源的配置，使用同步方式返回。普通资源管理对象与通过它的[getOverrideResourceManager](#getoverrideresourcemanager12)接口获取的差异化资源管理对象调用该方法可获得相同的返回值。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [Configuration](#configuration) | 差异化资源的配置。 |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.getOverrideResourceManager(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`getOverrideResourceManager failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### updateOverrideConfiguration12+

updateOverrideConfiguration(configuration: Configuration): void

更新差异化资源配置。普通资源管理对象与通过它的[getOverrideResourceManager](#getoverrideresourcemanager12)接口获取的差异化资源管理对象调用该方法均可更新差异化资源管理对象的配置。

****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configuration | [Configuration](#configuration) | 是 | 指定差异化资源的配置。通过[getOverrideConfiguration](#getoverrideconfiguration12)获取差异化配置后，根据需求修改配置项，再作为参数传入。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |

****示例：****

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        try {
            let resMgr = this.context.resourceManager;
            let overrideConfig = resMgr.getOverrideConfiguration();
            overrideConfig.colorMode = resourceManager.ColorMode.DARK;
            let overrideResMgr = resMgr.updateOverrideConfiguration(overrideConfig);
        } catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            console.error(`updateOverrideConfiguration failed, error code: ${code}, message: ${message}.`);
        }
    }
}
```

### release(deprecated)

release()

释放创建的resourceManager, 此接口暂不支持。

![](../../../images/ed586a0a/note_3.0-zh-cn.png) 

从API version 7开始支持，从API version 12开始废弃。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****示例：****

```
try {
  this.context.resourceManager.release();
} catch (error) {
  console.error("release error is " + error);
}
```

### getString(deprecated)

getString(resId: number, callback: AsyncCallback&lt;string&gt;): void

获取指定资源ID对应的字符串，使用callback异步回调。

![](../../../images/a5cb758f/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getStringValue](#getstringvalue9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<string> | 是 | 回调函数，返回资源ID值对应的字符串。 |

****示例：****

```
resourceManager.getResourceManager((error, mgr) => {
    mgr.getString($r('app.string.test').id, (error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let str = value;
        }
    });
});
```

### getString(deprecated)

getString(resId: number): Promise&lt;string&gt;

获取指定资源ID对应的字符串，使用Promise异步回调。

![](../../../images/b80ef9ec/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getStringValue](#getstringvalue9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的字符串。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getString($r('app.string.test').id).then((value: string) => {
        let str = value;
    }).catch((error: BusinessError) => {
        console.error("getstring promise error is " + error);
    });
});
```

### getStringSync(deprecated)

getStringSync(resource: Resource): string

获取指定resource对象对应的字符串，使用同步方式返回。

![](../../../images/f89a8799/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getStringByNameSync](#getstringbynamesync9)或[getStringSync](#getstringsync9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | resource对象对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
try {
  let testStr = this.context.resourceManager.getStringSync(resource);
  console.info(`getStringSync, result: ${testStr}`);
  // 打印输出结果: getStringSync, result: I'm a test string resource.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
}
```

### getStringSync(deprecated)

getStringSync(resource: Resource, ...args: Array&lt;string | number&gt;): string

获取指定resource对象对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/c4319e1e/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getStringByNameSync](#getstringbynamesync10)或[getStringSync](#getstringsync10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | resource对象对应的格式化字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
try {
  let testStr = this.context.resourceManager.getStringSync(resource, "format string", 10, 98.78);
  console.info(`getStringSync, result: ${testStr}`);
  // 打印输出结果: getStringSync, result: I'm a format string, format int: 10, format float: 98.78.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringSync failed, error code: ${code}, message: ${message}.`);
}
```

### getStringValue(deprecated)

getStringValue(resource: Resource, callback: \_AsyncCallback&lt;string&gt;): void

获取指定resource对象对应的字符串，使用callback异步回调。

![](../../../images/bb2e6928/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getStringByName](#getstringbyname9)或[getStringValue](#getstringvalue9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回resource对象对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
this.context.resourceManager.getStringValue(resource, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringValue, result: ${value}`);
    // 打印输出结果: getStringValue, result: I'm a test string resource.
  }
});
```

### getStringValue(deprecated)

getStringValue(resource: Resource): Promise&lt;string&gt;

获取指定resource对象对应的字符串，使用Promise异步回调。

![](../../../images/20a0c23e/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getStringByName](#getstringbyname9-1)或[getStringValue](#getstringvalue9-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回resource对象对应的字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.string.test').id
};
this.context.resourceManager.getStringValue(resource, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringValue, result: ${value}`);
    // 打印输出结果: getStringValue, result: I'm a test string resource.
  }
});
```

### getStringArray(deprecated)

getStringArray(resId: number, callback: AsyncCallback&lt;Array&lt;string&gt;>): void

获取指定资源ID对应的字符串数组，使用callback异步回调。

![](../../../images/03c76a24/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getStringArrayValue](#getstringarrayvalue9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)&lt;Array&lt;string&gt;&gt; | 是 | 回调函数，返回资源ID值对应的字符串数组。 |

****示例：****

```
resourceManager.getResourceManager((error, mgr) => {
    mgr.getStringArray($r('app.strarray.test').id, (error: Error, value: Array<string>) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let strArray = value;
        }
    });
});
```

### getStringArray(deprecated)

getStringArray(resId: number): Promise&lt;Array&lt;string&gt;>

获取指定资源ID对应的字符串数组，使用Promise异步回调。

![](../../../images/10295d63/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getStringArrayValue](#getstringarrayvalue9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise对象，返回资源ID值对应的字符串数组。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
      mgr.getStringArray($r('app.strarray.test').id).then((value: Array<string>) => {
        let strArray = value;
    }).catch((error: BusinessError) => {
        console.error("getStringArray promise error is " + error);
    });
});
```

### getStringArrayValueSync(deprecated)

getStringArrayValueSync(resource: Resource): Array&lt;string&gt;

获取指定resource对象对应的字符串数组，使用同步方式返回。

![](../../../images/f06c8fb3/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getStringArrayByNameSync](#getstringarraybynamesync10)或[getStringArrayValueSync](#getstringarrayvaluesync10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | resource对象对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
try {
  let strArray: Array<string> = this.context.resourceManager.getStringArrayValueSync(resource);
  console.info(`getStringArrayValueSync, result: ${strArray[0]}`);
  // 打印输出结果: getStringArrayValueSync, result: I'm one of the array's values.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getStringArrayValueSync failed, error code: ${code}, message: ${message}.`);
}
```

### getStringArrayValue(deprecated)

getStringArrayValue(resource: Resource, callback: \_AsyncCallback&lt;Array&lt;string&gt;>): void

获取指定resource对象对应的字符串数组，使用callback异步回调。

![](../../../images/5f330a75/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getStringArrayByName](#getstringarraybyname9)或[getStringArrayValue](#getstringarrayvalue9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)&lt;Array&lt;string&gt;&gt; | 是 | 回调函数，返回resource对象对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
this.context.resourceManager.getStringArrayValue(resource, (error: BusinessError, value: Array<string>) => {
  if (error != null) {
    console.error(`callback getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getStringArrayValue, result: ${value[0]}`);
    // 打印输出结果: getStringArrayValue, result: I'm one of the array's values.
  }
});
```

### getStringArrayValue(deprecated)

getStringArrayValue(resource: Resource): Promise&lt;Array&lt;string&gt;>

获取指定resource对象对应的字符串数组，使用Promise异步回调。

![](../../../images/38362ef0/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getStringArrayByName](#getstringarraybyname9-1)或[getStringArrayValue](#getstringarrayvalue9-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise对象，返回resource对象对应的字符串数组。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/strarray.json
{
  "strarray": [
    {
      "name": "test",
      "value": [
        {
          "value": "I'm one of the array's values."
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.strarray.test').id
};
this.context.resourceManager.getStringArrayValue(resource)
  .then((value: Array<string>) => {
    console.info(`getStringArrayValue, result: ${value[0]}`);
    // 打印输出结果: getStringArrayValue, result: I'm one of the array's values.
  })
  .catch((error: BusinessError) => {
    console.error(`promise getStringArrayValue failed, error code: ${error.code}, message: ${error.message}.`);
  });
```

### getMedia(deprecated)

getMedia(resId: number, callback: AsyncCallback&lt;Uint8Array&gt;): void

获取指定资源ID对应的媒体文件内容，使用callback异步回调。

![](../../../images/17a74cdc/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getMediaContent](#getmediacontent9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<Uint8Array> | 是 | 回调函数，返回资源ID值对应的媒体文件内容。 |

****示例：****

```
resourceManager.getResourceManager((error, mgr) => {
    mgr.getMedia($r('app.media.test').id, (error: Error, value: Uint8Array) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let media = value;
        }
    });
});
```

### getMedia(deprecated)

getMedia(resId: number): Promise&lt;Uint8Array&gt;

获取指定资源ID对应的媒体文件内容，使用Promise异步回调。

![](../../../images/8b5981f0/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getMediaContent](#getmediacontent9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回资源ID值对应的媒体文件内容。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getMedia($r('app.media.test').id).then((value: Uint8Array) => {
        let media = value;
    }).catch((error: BusinessError) => {
        console.error("getMedia promise error is " + error);
    });
});
```

### getMediaContentSync(deprecated)

getMediaContentSync(resource: Resource, density?: number): Uint8Array

获取指定resource对象对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。

![](../../../images/e0ac00d5/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaByNameSync](#getmediabynamesync10)或[getMediaContentSync](#getmediacontentsync10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Uint8Array | resource对象对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentSync(resource); // 默认屏幕密度
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
}

try {
  this.context.resourceManager.getMediaContentSync(resource, 120); // 指定屏幕密度
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentSync failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContent(deprecated)

getMediaContent(resource: Resource, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定resource对象对应的媒体文件内容，使用callback异步回调。

![](../../../images/9fd6fd91/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getMediaByName](#getmediabyname9)或[getMediaContent](#getmediacontent9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回resource对象对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, (error: BusinessError, value: Uint8Array) => {
    if (error != null) {
      console.error("error is " + error);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContent(deprecated)

getMediaContent(resource: Resource, density: number, callback: \_AsyncCallback&lt;Uint8Array&gt;): void

获取指定resource对象对应的指定屏幕密度媒体文件内容，使用callback异步回调。

![](../../../images/4d7331ef/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaByName](#getmediabyname10)或[getMediaContent](#getmediacontent10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<Uint8Array> | 是 | 回调函数，返回resource对象对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, 120, (error: BusinessError, value: Uint8Array) => {
    if (error != null) {
      console.error(`callback getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContent failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContent(deprecated)

getMediaContent(resource: Resource): Promise&lt;Uint8Array&gt;

获取指定resource对象对应的媒体文件内容，使用Promise异步回调。

![](../../../images/cbcc340d/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getMediaByName](#getmediabyname9-1)或[getMediaContent](#getmediacontent9-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回resource对象对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource).then((value: Uint8Array) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error("getMediaContent promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContent(deprecated)

getMediaContent(resource: Resource, density: number): Promise&lt;Uint8Array&gt;

获取指定resource对象对应的指定屏幕密度媒体文件内容，使用Promise异步回调。

![](../../../images/05d5903d/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaByName](#getmediabyname10-1)或[getMediaContent](#getmediacontent10-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回resource对象对应的媒体文件内容。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContent(resource, 120).then((value: Uint8Array) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error(`promise getMediaContent failed, error code: ${error.code}, message: ${error.message}.`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContent failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaBase64(deprecated)

getMediaBase64(resId: number, callback: AsyncCallback&lt;string&gt;): void

获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。

![](../../../images/b50f8a44/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getMediaContentBase64](#getmediacontentbase649)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<string> | 是 | 回调函数，返回资源ID值对应的图片资源Base64编码。 |

****示例：****

```
resourceManager.getResourceManager((error, mgr) => {
    mgr.getMediaBase64($r('app.media.test').id, ((error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let media = value;
        }
    });
});
```

### getMediaBase64(deprecated)

getMediaBase64(resId: number): Promise&lt;string&gt;

获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。

![](../../../images/cdf66712/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[getMediaContentBase64](#getmediacontentbase649-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的图片资源Base64编码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getMediaBase64($r('app.media.test').id).then((value: string) => {
        let media = value;
    }).catch((error: BusinessError) => {
        console.error("getMediaBase64 promise error is " + error);
    });
});
```

### getMediaContentBase64Sync(deprecated)

getMediaContentBase64Sync(resource: Resource, density?: number): string

获取指定resource对象对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。

![](../../../images/46630671/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaBase64ByNameSync](#getmediabase64bynamesync10)或[getMediaContentBase64Sync](#getmediacontentbase64sync10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | resource对象对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64Sync(resource); // 默认屏幕密度
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
}

try {
  this.context.resourceManager.getMediaContentBase64Sync(resource, 120); // 指定屏幕密度
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getMediaContentBase64Sync failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContentBase64(deprecated)

getMediaContentBase64(resource: Resource, callback: \_AsyncCallback&lt;string&gt;): void

获取指定resource对象对应的图片资源Base64编码，使用callback异步回调。

![](../../../images/82292882/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getMediaBase64ByName](#getmediabase64byname9)或[getMediaContentBase64](#getmediacontentbase649)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回resource对象对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, (error: BusinessError, value: string) => {
    if (error != null) {
      console.error("error is " + error);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContentBase64(deprecated)

getMediaContentBase64(resource: Resource, density: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。

![](../../../images/0d6a6e0d/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaBase64ByName](#getmediabase64byname10)或[getMediaContentBase64](#getmediacontentbase6410)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回resource对象对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, 120, (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      let media = value;
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContentBase64(deprecated)

getMediaContentBase64(resource: Resource): Promise&lt;string&gt;

获取指定resource对象对应的图片资源Base64编码，使用Promise异步回调。

![](../../../images/70e95d05/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getMediaBase64ByName](#getmediabase64byname9-1)或[getMediaContentBase64](#getmediacontentbase649-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回resource对象对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource).then((value: string) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error("getMediaContentBase64 promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}
```

### getMediaContentBase64(deprecated)

getMediaContentBase64(resource: Resource, density: number): Promise&lt;string&gt;

获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。

![](../../../images/4c2f943b/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getMediaBase64ByName](#getmediabase64byname10-1)或[getMediaContentBase64](#getmediacontentbase6410-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 是 | 资源获取需要的屏幕密度，0表示默认屏幕密度。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回resource对象对应的图片资源Base64编码。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.test').id
};
try {
  this.context.resourceManager.getMediaContentBase64(resource, 120).then((value: string) => {
    let media = value;
  }).catch((error: BusinessError) => {
    console.error(`promise getMediaContentBase64 failed, error code: ${error.code}, message: ${error.message}.`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`promise getMediaContentBase64 failed, error code: ${code}, message: ${message}.`);
}
```

### getDrawableDescriptor(deprecated)

getDrawableDescriptor(resource: Resource, density?: number, type?: number): DrawableDescriptor

获取指定resource对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。

![](../../../images/96058609/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getDrawableDescriptorByName](#getdrawabledescriptorbyname10)或[getDrawableDescriptor](#getdrawabledescriptor10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| [density](#screendensity) | number | 否 | 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。 |
| type11+ | number | 否 | - 1表示获取主题资源包中应用的分层图标资源。  - 0或缺省表示获取应用自身图标资源。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [DrawableDescriptor](/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor) | 资源ID值对应的DrawableDescriptor对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { DrawableDescriptor } from '@kit.ArkUI';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.media.icon').id
};
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource, 120);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}
try {
  let drawableDescriptor:DrawableDescriptor = this.context.resourceManager.getDrawableDescriptor(resource, 0, 1);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDrawableDescriptor failed, error code: ${code}, message: ${message}.`);
}
```

### getIntPluralStringValueSync(deprecated)

getIntPluralStringValueSync(resource: Resource, num: number, ...args: Array&lt;string | number&gt;): string

获取指定resource对象对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/467f2e40/note_3.0-zh-cn.png) 

- 从API version 18开始支持，从API version 20开始废弃，建议使用[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)或[getIntPluralStringValueSync](#getintpluralstringvaluesync18)替代。
- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| num | number | 是 | 数量值（整数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | resource对象对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.format_test').id
};

try {
  // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
  // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
  let pluralStr = this.context.resourceManager.getIntPluralStringValueSync(resource, 1, 1, "basket", 0.3);
  console.info(`getIntPluralStringValueSync, result: ${pluralStr}`);
  // 打印输出结果: getIntPluralStringValueSync, result: There is 1 apple in the basket, the total amount is 0.3 kg.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getIntPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}
```

### getDoublePluralStringValueSync(deprecated)

getDoublePluralStringValueSync(resource: Resource, num: number, ...args: Array&lt;string | number&gt;): string

获取指定resource对象对应的[单复数](/localization-kit/l10n/l10n-translation/l10n-singular-plural)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。

![](../../../images/c41670dd/note_3.0-zh-cn.png) 

- 从API version 18开始支持，从API version 20开始废弃，建议使用[getDoublePluralStringByNameSync](#getdoublepluralstringbynamesync18)或[getDoublePluralStringValueSync](#getdoublepluralstringvaluesync18)替代。
- 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

****元服务API：**** 从API version 18开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| num | number | 是 | 数量值（浮点数）。根据当前语言的[单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。 |
| ...args | Array&lt;string | number> | 否 | 格式化字符串资源参数。  支持参数类型：%d、%f、%s、%%、%数字$d、%数字$f、%数字$s。  说明：%%转义为%; %数字$d中的数字表示使用args中的第几个参数。  举例：%%d格式化后为%d字符串; %1$d表示使用第一个参数。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | resource对象对应的格式化单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |
| 9001007 | Failed to format the resource obtained based on the resource ID. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "format_test",
      "value": [
        {
          "quantity": "one",
          "value": "There is %d apple in the %s, the total amount is %f kg."
        },
        {
          "quantity": "other",
          "value": "There are %d apples in the %s, the total amount is %f kg."
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.format_test').id
};

try {
  // 根据语言单复数规则，参数num取值为2.1，英文环境下对应单复数类别为other
  // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为other的字符串
  let pluralStr = this.context.resourceManager.getDoublePluralStringValueSync(resource, 2.1, 2, "basket", 0.6);
  console.info(`getDoublePluralStringValueSync, result: ${pluralStr}`);
  // 打印输出结果: getIntPluralStringValueSync, result: There are 2 apples in the basket, the total amount is 0.6 kg.
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getDoublePluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}
```

### getPluralStringValueSync(deprecated)

getPluralStringValueSync(resId: number, num: number): string

获取指定资源ID，指定资源数量的单复数字符串，使用同步方式返回。

![](../../../images/2a301a4d/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 10开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 根据指定数量获取指定ID字符串表示的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
  // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
  let pluralValue = this.context.resourceManager.getPluralStringValueSync($r('app.plural.test').id, 1);
  console.info(`getPluralStringValueSync, result: ${pluralValue}`);
  // 打印输出结果: getPluralStringValueSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}
```

### getPluralStringValueSync(deprecated)

getPluralStringValueSync(resource: Resource, num: number): string

获取指定资源信息，指定资源数量的单复数字符串，使用同步方式返回。

![](../../../images/3720d0dd/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 10开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)或[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 根据指定数量获取指定resource对象表示的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
try {
  // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
  // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
  let pluralValue = this.context.resourceManager.getPluralStringValueSync(resource, 1);
  console.info(`getPluralStringValueSync, result: ${pluralValue}`);
  // 打印输出结果: getPluralStringValueSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringValueSync failed, error code: ${code}, message: ${message}.`);
}
```

### getPluralStringByNameSync(deprecated)

getPluralStringByNameSync(resName: string, num: number): string

获取指定资源名称，指定资源数量的单复数字符串，使用同步方式返回。

![](../../../images/7b741cfd/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 10开始支持，从API version 18开始废弃，建议使用[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 根据指定数量获取指定资源名称表示的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
  // 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
  let pluralValue = this.context.resourceManager.getPluralStringByNameSync("test", 1);
  console.info(`getPluralStringByNameSync, result: ${pluralValue}`);
  // 打印输出结果: getPluralStringByNameSync, result: 1 apple
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getPluralStringByNameSync failed, error code: ${code}, message: ${message}.`);
}
```

### getPluralStringValue(deprecated)

getPluralStringValue(resId: number, num: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。

![](../../../images/21a1ec2e/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源ID值对应的指定数量的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringValue($r("app.plural.test").id, 1,
  (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      console.info(`getPluralStringValue, result: ${value}`);
      // 打印输出结果: getPluralStringValue, result: 1 apple
    }
  });
```

### getPluralStringValue(deprecated)

getPluralStringValue(resId: number, num: number): Promise&lt;string&gt;

获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。

![](../../../images/4cb53e49/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的指定数量的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringValue($r("app.plural.test").id, 1)
  .then((value: string) => {
    console.info(`getPluralStringValue, result: ${value}`);
    // 打印输出结果: getPluralStringValue, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  });
```

### getPluralStringValue(deprecated)

getPluralStringValue(resource: Resource, num: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源信息，指定资源数量的单复数字符串，使用callback异步回调。

![](../../../images/b46b8f97/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)或[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回resource对象对应的指定数量的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringValue(resource, 1,
  (error: BusinessError, value: string) => {
    if (error != null) {
      console.error(`callback getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
    } else {
      console.info(`getPluralStringValue, result: ${value}`);
      // 打印输出结果: getPluralStringValue, result: 1 apple
    }
  });
```

### getPluralStringValue(deprecated)

getPluralStringValue(resource: Resource, num: number): Promise&lt;string&gt;

获取指定资源信息，指定资源数量的单复数字符串，使用Promise异步回调。

![](../../../images/4061b244/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringValueSync](#getintpluralstringvaluesync18)或[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回resource对象对应的指定数量的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.plural.test').id
};
// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringValue(resource, 1)
  .then((value: string) => {
    console.info(`getPluralStringValue, result: ${value}`);
    // 打印输出结果: getPluralStringValue, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringValue failed, error code: ${error.code}, message: ${error.message}.`);
  });
```

### getPluralStringByName(deprecated)

getPluralStringByName(resName: string, num: number, callback: \_AsyncCallback&lt;string&gt;): void

获取指定资源名称，指定资源数量的单复数字符串，使用callback异步回调。

![](../../../images/67ff4196/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<string> | 是 | 回调函数，返回资源名称对应的指定数量的单复数字符串。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringByName("test", 1, (error: BusinessError, value: string) => {
  if (error != null) {
    console.error(`callback getPluralStringByName failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getPluralStringByName, result: ${value}`);
    // 打印输出结果: getPluralStringByName, result: 1 apple
  }
});
```

### getPluralStringByName(deprecated)

getPluralStringByName(resName: string, num: number): Promise&lt;string&gt;

获取指定资源名称，指定资源数量的单复数字符串，使用Promise异步回调。

![](../../../images/a9c98b7b/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 9开始支持，从API version 18开始废弃，建议使用[getIntPluralStringByNameSync](#getintpluralstringbynamesync18)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resName | string | 是 | 资源名称。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | 根据传入的数量值，获取资源名称对应的字符串资源。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001003 | Invalid resource name. |
| 9001004 | No matching resource is found based on the resource name. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/plural.json
{
  "plural": [
    {
      "name": "test",
      "value": [
        {
          "quantity": "one",
          "value": "%d apple"
        },
        {
          "quantity": "other",
          "value": "%d apples"
        }
      ]
    }
  ]
}
```

```
import { BusinessError } from '@kit.BasicServicesKit';

// 根据语言单复数规则，参数num取值为1，英文环境下对应单复数类别为one
// 在资源文件中用quantity字段表示单复数类别，因此会获取quantity为one的字符串
this.context.resourceManager.getPluralStringByName("test", 1)
  .then((value: string) => {
    console.info(`getPluralStringByName, result: ${value}`);
    // 打印输出结果: getPluralStringByName, result: 1 apple
  })
  .catch((error: BusinessError) => {
    console.error(`promise getPluralStringByName failed, error code: ${error.code}, message: ${error.message}.`);
  });
```

### getPluralString(deprecated)

getPluralString(resId: number, num: number): Promise&lt;string&gt;

获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。

![](../../../images/5fc1a304/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 6开始支持，从API version 9开始废弃，建议使用[getPluralStringValue](#getpluralstringvaluedeprecated-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象，返回资源ID值对应的指定数量的单复数字符串。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getPluralString($r("app.plural.test").id, 1).then((value: string) => {
        let str = value;
    }).catch((error: BusinessError) => {
        console.error("getPluralString promise error is " + error);
    });
});
```

### getPluralString(deprecated)

getPluralString(resId: number, num: number, callback: AsyncCallback&lt;string&gt;): void

获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。

![](../../../images/0db1b379/note_3.0-zh-cn.png) 

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

从API version 6开始支持，从API version 9开始废弃，建议使用[getPluralStringValue](#getpluralstringvaluedeprecated)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resId | number | 是 | 资源ID值。 |
| num | number | 是 | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<string> | 是 | 回调函数，返回资源ID值对应的指定数量的单复数字符串。 |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getPluralString($r("app.plural.test").id, 1, (error: Error, value: string) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let str = value;
        }
    });
});
```

### getBoolean(deprecated)

getBoolean(resource: Resource): boolean

获取指定resource对象对应的布尔值，使用同步方式返回。

![](../../../images/f6208e6d/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getBooleanByName](#getbooleanbyname9)或[getBoolean](#getboolean9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | resource对象对应的布尔值。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/boolean.json
{
  "boolean": [
    {
      "name": "boolean_test",
      "value": true
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.boolean.boolean_test').id
};
try {
  let boolTest = this.context.resourceManager.getBoolean(resource);
  console.info(`getBoolean, result: ${boolTest}`);
  // 打印输出结果: getBoolean, result: true
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getBoolean failed, error code: ${code}, message: ${message}.`);
}
```

### getNumber(deprecated)

getNumber(resource: Resource): number

获取指定resource对象对应的integer数值或者float数值，使用同步方式返回。

![](../../../images/80bb23d1/note_3.0-zh-cn.png) 

从API version 9开始支持，从API version 20开始废弃，建议使用[getNumberByName](#getnumberbyname9)或[getNumber](#getnumber9)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | resource对象对应的数值。  integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/integer.json
{
  "integer": [
    {
      "name": "integer_test",
      "value": 100
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.integer.integer_test').id
};

try {
  let intValue = this.context.resourceManager.getNumber(resource);
  console.info(`getNumber, int value: ${intValue}`);
  // 打印输出结果: getNumber, int value: 100
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getNumber failed, error code: ${code}, message: ${message}.`);
}
```

### getColorSync(deprecated)

getColorSync(resource: Resource): number

获取指定resource对象对应的颜色值，使用同步方式返回。

![](../../../images/0338747e/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getColorByNameSync](#getcolorbynamesync10)或[getColorSync](#getcolorsync10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | resource对象对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
try {
  let colorValue = this.context.resourceManager.getColorSync(resource);
  console.info(`getColorSync, result: ${colorValue}`);
  // 打印输出结果: getColorSync, result: 4294967295
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
}
```

### getColor(deprecated)

getColor(resource: Resource, callback: \_AsyncCallback&lt;number&gt;): void

获取指定resource对象对应的颜色值，使用callback异步回调。

![](../../../images/03a398fc/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getColorByName](#getcolorbyname10)或[getColor](#getcolor10)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |
| callback | [\_AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)<number> | 是 | 回调函数，返回resource对象对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
this.context.resourceManager.getColor(resource, (error: BusinessError, value: number) => {
  if (error != null) {
    console.error(`callback getColor failed, error code: ${error.code}, message: ${error.message}.`);
  } else {
    console.info(`getColor, result: ${value}`);
    // 打印输出结果: getColor, result: 4294967295
  }
});
```

### getColor(deprecated)

getColor(resource: Resource): Promise&lt;number&gt;

获取指定resource对象对应的颜色值，使用Promise异步回调。

![](../../../images/e8b9c88e/note_3.0-zh-cn.png) 

从API version 10开始支持，从API version 20开始废弃，建议使用[getColorByName](#getcolorbyname10-1)或[getColor](#getcolor10-1)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象，返回resource对象对应的颜色值（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
// 资源文件路径: src/main/resources/base/element/color.json
{
  "color": [
    {
      "name": "test",
      "value": "#FFFFFF"
    }
  ]
}
```

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('app.color.test').id
};
this.context.resourceManager.getColor(resource)
  .then((value: number) => {
    console.info(`getColor, result: ${value}`);
    // 打印输出结果: getColor, result: 4294967295
  })
  .catch((error: BusinessError) => {
    console.error(`promise getColor failed, error code: ${error.code}, message: ${error.message}.`);
  });
```

### getSymbol(deprecated)

getSymbol(resource: Resource): number

获取指定resource对象对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。

![](../../../images/b48dcd0f/note_3.0-zh-cn.png) 

从API version 11开始支持，从API version 20开始废弃，建议使用[getSymbolByName](#getsymbolbyname11)或[getSymbol](#getsymbol11)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****模型约束：**** 此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | [Resource](#resource9) | 是 | 资源信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| number | resource对象对应的Symbol字符Unicode码（十进制）。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: Incorrect parameter types. |
| 9001001 | Invalid resource ID. |
| 9001002 | No matching resource is found based on the resource ID. |
| 9001006 | The resource is referenced cyclically. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let resource: resourceManager.Resource = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  id: $r('sys.symbol.message').id
};
try {
  let symbolValue = this.context.resourceManager.getSymbol(resource);
  console.info(`getSymbol, result: ${symbolValue}`);
  // 打印输出结果: getSymbol, result: 983183
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSymbol failed, error code: ${code}, message: ${message}.`);
}
```

### getRawFile(deprecated)

getRawFile(path: string, callback: AsyncCallback&lt;Uint8Array&gt;): void

获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。

![](../../../images/23014e42/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getRawFileContent](#getrawfilecontent9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<Uint8Array> | 是 | 回调函数，返回rawfile文件内容。 |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFile("test.txt", (error: Error, value: Uint8Array) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let rawFile = value;
        }
    });
});
```

### getRawFile(deprecated)

getRawFile(path: string): Promise&lt;Uint8Array&gt;

获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。

![](../../../images/67dccb3c/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getRawFileContent](#getrawfilecontent9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise对象，返回rawfile文件内容。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFile("test.txt").then((value: Uint8Array) => {
        let rawFile = value;
    }).catch((error: BusinessError) => {
        console.error("getRawFile promise error is " + error);
    });
});
```

### getRawFileDescriptor(deprecated)

getRawFileDescriptor(path: string, callback: AsyncCallback&lt;RawFileDescriptor&gt;): void

获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用callback异步回调。

![](../../../images/98a135c5/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getRawFd](#getrawfd9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<[RawFileDescriptor](#rawfiledescriptor9)> | 是 | 回调函数，返回rawfile文件的文件描述符（fd）。 |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFileDescriptor("test.txt", (error: Error, value: resourceManager.RawFileDescriptor) => {
        if (error != null) {
            console.error("error is " + error);
        } else {
            let fd = value.fd;
            let offset = value.offset;
            let length = value.length;
        }
    });
});
```

### getRawFileDescriptor(deprecated)

getRawFileDescriptor(path: string): Promise&lt;RawFileDescriptor&gt;

获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用Promise异步回调。

![](../../../images/897231e2/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[getRawFd](#getrawfd9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[RawFileDescriptor](#rawfiledescriptor9)&gt; | Promise对象，返回rawfile文件的文件描述符（fd）。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.getRawFileDescriptor("test.txt").then((value: resourceManager.RawFileDescriptor) => {
        let fd = value.fd;
        let offset = value.offset;
        let length = value.length;
    }).catch((error: BusinessError) => {
        console.error("getRawFileDescriptor promise error is " + error);
    });
});
```

### closeRawFileDescriptor(deprecated)

closeRawFileDescriptor(path: string, callback: AsyncCallback&lt;void&gt;): void

关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用callback异步回调。

![](../../../images/dd742758/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[closeRawFd](#closerawfd9)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |
| callback | [AsyncCallback](#asynccallbackdeprecated)<void> | 是 | 回调函数。当关闭rawfile文件的文件描述符（fd）成功，err为undefined，否则为错误对象。 |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.closeRawFileDescriptor("test.txt", (error: Error) => {
        if (error != null) {
            console.error("error is " + error);
        }
    });
});
```

### closeRawFileDescriptor(deprecated)

closeRawFileDescriptor(path: string): Promise&lt;void&gt;

关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用Promise异步回调。

![](../../../images/3a91ab82/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[closeRawFd](#closerawfd9-1)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | rawfile文件路径。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';

resourceManager.getResourceManager((error, mgr) => {
    mgr.closeRawFileDescriptor("test.txt");
});
```

## resourceManager.getSystemResourceManager(deprecated)

getSystemResourceManager(): ResourceManager

获取系统资源管理ResourceManager对象。

![](../../../images/4e926aac/note_3.0-zh-cn.png) 

当前接口获取到的系统资源管理ResourceManager对象中的Configuration为默认值。默认值如下：

\{"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0\}。

从API version 10开始支持，从API version 20开始废弃，建议使用[resourceManager.getSysResourceManager](#resourcemanagergetsysresourcemanager20)替代。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.Global.ResourceManager

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [ResourceManager](#resourcemanager) | 系统资源管理对象。 |

****错误码：****

以下错误码的详细介绍请参见[资源管理错误码](/ref/localization-api/localization-arkts-errcode/errorcode-resource-manager/errorcode-resource-manager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9001009 | Failed to access the system resource. which is not mapped to application sandbox, This error code will be thrown. |

****示例：****

```
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let systemResourceManager = resourceManager.getSystemResourceManager();
  systemResourceManager.getStringValue($r('sys.string.ohos_lab_vibrate').id).then((value: string) => {
    let str = value;
  }).catch((error: BusinessError) => {
    console.error("systemResourceManager getStringValue promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSystemResourceManager failed, error code: ${code}, message: ${message}.`);
}
```

## AsyncCallback(deprecated)

![](../../../images/f71e608c/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)替代。

### (err: Error, data: T)(deprecated)

(err: Error, data: T): void;

异步回调函数，携带错误参数和异步返回值。

![](../../../images/d5630118/note_3.0-zh-cn.png) 

从API version 6开始支持，从API version 9开始废弃，建议使用[AsyncCallback](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback)替代。

****系统能力：**** SystemCapability.Global.ResourceManager

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| err | Error | 是 | 接口调用失败的错误信息。 |
| data | T | 是 | 接口调用时的回调信息。 |

## 附录

- 示例代码中用到的'app.string.test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/string.json
  {
    "string": [
      {
        "name": "test",
        "value": "I'm a test string resource."
      }
    ]
  }
  ```

  ```
  // 资源文件路径: src/main/resources/base/element/string.json
  {
    "string": [
      {
        "name": "test",
        "value": "I'm a %1$s, format int: %2$d, format float: %3$f."
      }
    ]
  }
  ```
- 示例代码中用到的'app.strarray.test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/strarray.json
  {
    "strarray": [
      {
        "name": "test",
        "value": [
          {
            "value": "I'm one of the array's values."
          }
        ]
      }
    ]
  }
  ```
- 示例代码中用到的'app.plural.test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/plural.json
  {
    "plural": [
      {
        "name": "test",
        "value": [
          {
            "quantity": "one",
            "value": "%d apple"
          },
          {
            "quantity": "other",
            "value": "%d apples"
          }
        ]
      }
    ]
  }
  ```
- 示例代码中用到的'app.plural.format\_test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/plural.json
  {
    "plural": [
      {
        "name": "format_test",
        "value": [
          {
            "quantity": "one",
            "value": "There is %d apple in the %s, the total amount is %f kg."
          },
          {
            "quantity": "other",
            "value": "There are %d apples in the %s, the total amount is %f kg."
          }
        ]
      }
    ]
  }
  ```
- 示例代码中用到的'app.boolean.boolean\_test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/boolean.json
  {
    "boolean": [
      {
        "name": "boolean_test",
        "value": true
      }
    ]
  }
  ```
- 示例代码中用到的"integer\_test"和"float\_test"文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/integer.json
  {
    "integer": [
      {
        "name": "integer_test",
        "value": 100
      }
    ]
  }
  ```

  ```
  // 资源文件路径: src/main/resources/base/element/float.json
  {
    "float": [
      {
        "name": "float_test",
        "value": "30.6vp"
      }
    ]
  }
  ```
- 示例代码中用到的'app.color.test'文件内容如下：

  ```
  // 资源文件路径: src/main/resources/base/element/color.json
  {
    "color": [
      {
        "name": "test",
        "value": "#FFFFFF"
      }
    ]
  }
  ```
