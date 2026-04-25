---
title: "EnterpriseAdminExtensionContext"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/s-apis-application-enterpriseadminextensioncontext
kit: 系统
last_updated: "2026-04-22"
slug: s-apis-application-enterpriseadminextensioncontext
---

# EnterpriseAdminExtensionContext

EnterpriseAdminExtensionContext是[EnterpriseAdminExtensionAbility](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability)的上下文环境，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

每个EnterpriseAdminExtensionAbility组件实例化时，系统都会自动创建对应的EnterpriseAdminExtensionContext。开发者可以通过EnterpriseAdminExtensionContext获取应用的沙箱路径、启动其他的组件。该上下文环境只能在当前EnterpriseAdminExtensionAbility中使用，不能传递到其他组件中使用。

![](../../../../../images/42e7ac41/note_3.0-zh-cn.png) 

本模块首批接口从API version 23 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](/system-basicfun/mdm-kit/mdm-kit-guide)。

## 导入模块

```
import { common } from '@kit.MDMKit';
```

## EnterpriseAdminExtensionContext

[EnterpriseAdminExtensionAbility](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability)的上下文，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。

### startAbilityByAdmin

startAbilityByAdmin(admin: Want, want: Want): Promise&lt;void&gt;

在[EnterpriseAdminExtensionAbility](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability)组件中直接启动另外一个组件（页面没有弹窗提醒），目前支持[UIAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability)，[AppServiceExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability)。使用Promise异步回调。

![](../../../../../images/fb798598/note_3.0-zh-cn.png) 

仅支持启动三方应用组件，不支持系统应用组件。

被启动的组件需要对外可见，即module.json5中的exported字段需要为true。

不支持[隐式Want启动](/ability-kit/ability-terminology#隐式want启动)。

如果被启动的UIAbility有权限保护，需要额外申请对应的权限。

****需要权限****：ohos.permission.ENTERPRISE\_START\_ABILITIES

****系统能力****：SystemCapability.Customization.EnterpriseDeviceManager

****模型约束****：此接口仅可在Stage模型下使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | [Want](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want) | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| want | [Want](/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want) | 是 | 启动组件的必要信息，Want中必须包含被启动组件的abilityName和所在应用的bundleName。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | 无返回结果的Promise对象。当启动组件失败时，会抛出错误对象。 |

****错误码****：

以下错误码的详细介绍请参见[企业设备管理错误码](/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager)和[通用错误码](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200014 | Failed to start the ability. |
| 9200015 | The ability does not exist. |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call the API due to limited device capabilities. |

****示例：****

被启动组件在module.json5中配置信息。

```
"abilities": [
    {
        "name": "MainAbility",
        "srcEntry": "./ets/MainAbility/MainAbility.ts",
        "description": "$string:MainAbility_desc",
        "icon": "$media:icon",
        "label": "$string:MainAbility_label",
        "startWindowIcon": "$media:icon",
        "startWindowBackground": "$color:white",
        "exported": true,
        // 可选字段
        "permissions": [
            // 需根据实际情况进行替换或者不填
            "ohos.permission.START_UI_Ability"
        ]
    }
]
```

调用方应用需要在module.json5中申请对应的权限。

```
"requestPermissions": [
    {
        // 启动其他应用中的组件时，调用方应用必须获取该组件所要求的权限。
        "name": "ohos.permission.START_UI_ABILITY"
    },
    {
        "name": "ohos.permission.ENTERPRISE_START_ABILITIES"
    }
]
```

```
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';
import { preferences } from '@kit.ArkData';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

/**
 * 企业设备管理扩展能力组件
 */
export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
    onAdminEnabled() {
        // 需根据实际情况进行替换
        let admin: Want = {
            bundleName: 'com.example.myapplication',
            abilityName: 'EnterpriseAdminAbility',
        };
        // 需根据实际情况进行替换
        let want: Want = {
            bundleName: 'com.example.myotherapplication',
            abilityName: 'MainAbility'
        };
        this.context.startAbilityByAdmin(admin, want).catch((err: BusinessError) => {
            console.error(`Failed to start an ability. Code: ${err.code}, message: ${err.message}`);
        });
    
        // 通过context获取到应用文件路径
        let preferencesDir = this.context.preferencesDir;
        console.info(`preferencesDir: ` + preferencesDir);
    
        // 通过context获取到preferences数据
        let options: preferences.Options = {
        // 需根据实际情况进行替换
            name: "key",
        };
        try {
        let preference = preferences.getPreferencesSync(this.context, options);
        // 需根据实际情况进行替换
        preference.putSync("key", "value");
        preference.flushSync();
    
        // 需根据实际情况进行替换
        let value: string = preference.getSync('key', 'default') as string;
            console.info(`get preferences value: ${value}`);
        } catch (error) {
            console.error('get preference fail');
        }
    }
}
```
