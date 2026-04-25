---
title: "@ohos.app.form.LiveFormExtensionAbility (LiveFormExtensionAbility)"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-liveformextensionability
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-app-form-liveformextensionability
---

# @ohos.app.form.LiveFormExtensionAbility (LiveFormExtensionAbility)

LiveFormExtensionAbility模块提供互动卡片功能，包括创建、销毁互动卡片等，继承自[ExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability)。

![](../../../images/cb458187/note_3.0-zh-cn.png) 

本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

本模块设置了不允许调用的API名单，调用名单中的API将导致功能异常，详情请参见[附录](/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability#附录)。

## 导入模块

```
import { LiveFormExtensionAbility } from '@kit.FormKit';
```

## LiveFormExtensionAbility

互动卡片扩展类。包含互动卡片提供方接收创建和销毁互动卡片的通知接口。

### 属性

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Ability.Form

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [LiveFormExtensionContext](/ref/form-api/form-arkts/form-arkts-application/js-apis-application-liveformextensioncontext/js-apis-application-liveformextensioncontext) | 否 | 否 | LiveFormExtensionAbility的上下文环境，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。 |

### onLiveFormCreate

onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession): void

LiveFormExtensionAbility界面内容对象创建后调用。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Ability.Form

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| liveFormInfo | [LiveFormInfo](#liveforminfo) | 是 | 互动卡片信息，包括卡片id等信息。 |
| session | [UIExtensionContentSession](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession) | 是 | LiveFormExtensionAbility界面内容相关信息。 |

****示例：****

```
import { UIExtensionContentSession } from '@kit.AbilityKit';
import { LiveFormExtensionAbility, LiveFormInfo } from '@kit.FormKit';

const TAG: string = '[testTag] LiveFormExtAbility';

export default class LiveFormExtAbility extends LiveFormExtensionAbility {
  onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession) {
    console.info(TAG, `onLiveFormCreate, formId: ${liveFormInfo.formId}`);
  }
}
```

### onLiveFormDestroy

onLiveFormDestroy(liveFormInfo: LiveFormInfo): void

LiveFormExtensionAbility生命周期回调，在销毁时回调，执行资源清理等操作。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Ability.Form

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| liveFormInfo | [LiveFormInfo](#liveforminfo) | 是 | 互动卡片信息，包括卡片id等信息。 |

****示例：****

```
import { LiveFormExtensionAbility, LiveFormInfo } from '@kit.FormKit';

const TAG: string = '[testTag] LiveFormExtAbility';

export default class LiveFormExtAbility extends LiveFormExtensionAbility {
  onLiveFormDestroy(liveFormInfo: LiveFormInfo) {
    console.info(TAG, `onLiveFormDestroy, liveFormInfo: ${liveFormInfo.formId}`);
  }
}
```

### LiveFormInfo

互动卡片信息。

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Ability.Form

****元服务API：**** 从API version 20开始，该接口支持在元服务中使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| formId | string | 否 | 否 | 卡片id。 |
| rect | [formInfo.Rect](/ref/form-api/form-arkts/js-apis-app-form-forminfo/js-apis-app-form-forminfo#rect20) | 否 | 否 | 卡片位置和大小信息。 |
| borderRadius | number | 否 | 否 | 卡片圆角半径信息。取值大于0，单位vp。 |

## 附录

本模块不允许调用的API名单如下。

| Kit名称 | 模块名称 |
| --- | --- |
| AbilityKit | [@ohos.ability.featureAbility (FeatureAbility模块)](/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability)  [@ohos.ability.particleAbility (ParticleAbility模块)](/ref/ability-api/ability-arkts/fa-model/js-apis-ability-particleability/js-apis-ability-particleability)  [@ohos.bundle.launcherBundleManager (launcherBundleManager模块)](/ref/ability-api/ability-arkts/both-models/js-apis-launcherbundlemanager/js-apis-launcherbundlemanager)  [@ohos.continuation.continuationManager (流转/协同管理)](/ref/ability-api/ability-arkts/stage-model/js-apis-continuation-continuationmanager/js-apis-continuation-continuationmanager) |
| BasicServicesKit | [@ohos.account.appAccount (应用账号管理)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount)  [@ohos.account.distributedAccount (分布式账号管理)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-distributed-account/js-apis-distributed-account)  [@ohos.account.osAccount (系统账号管理)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-osaccount/js-apis-osaccount)  [@ohos.pasteboard (剪贴板)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard)  [@ohos.request (上传下载)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request)  [@ohos.wallpaper (壁纸)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-wallpaper/js-apis-wallpaper) |
| BackgroundTasksKit | [@ohos.backgroundTaskManager (后台任务管理)](/ref/background-tasks-api/background-tasks-arkts/background-tasks-arkts-dep/js-apis-backgroundtaskmanager/js-apis-backgroundtaskmanager)  [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)](/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager)  [@ohos.reminderAgent (后台代理提醒)](/ref/background-tasks-api/background-tasks-arkts/background-tasks-arkts-dep/js-apis-reminderagent/js-apis-reminderagent)  [@ohos.reminderAgentManager (后台代理提醒)](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager) |
| CalendarKit | [@ohos.calendarManager (日程管理能力)](/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager) |
| ConnectivityKit | [@ohos.connectedTag (有源标签)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-connectedtag/js-apis-connectedtag)  [@ohos.nfc.cardEmulation (标准NFC-cardEmulation)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation)  [@ohos.nfc.controller (标准NFC)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfccontroller/js-apis-nfccontroller)  [@ohos.nfc.tag (标准NFC-Tag)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag)  [nfctech (标准NFC-Tag Nfc 技术)](/ref/system-network-api/connectivity-api/connectivity-arkts/connectivity-nfc-tag-arkts/js-apis-nfctech/js-apis-nfctech)  [tagSession (标准NFC-Tag TagSession)](/ref/system-network-api/connectivity-api/connectivity-arkts/connectivity-nfc-tag-arkts/js-apis-tagsession/js-apis-tagsession) |
| ContactsKit | [@ohos.contact (联系人)](/ref/contacts-api/contacts-arkts/js-apis-contact/js-apis-contact) |
| ArkData | [@ohos.data.distributedData (分布式数据管理)](/ref/arkdata-api/arkdata-arkts/arkdata-arkts-dep/js-apis-distributed-data/js-apis-distributed-data)  [@ohos.data.distributedDataObject (分布式数据对象)](/ref/arkdata-api/arkdata-arkts/js-apis-data-distributedobject/js-apis-data-distributedobject)  [@ohos.data.distributedKVStore (分布式键值数据库)](/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore) |
| MDMKit | [@ohos.enterprise.adminManager (admin权限管理)](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager)  [@ohos.enterprise.deviceInfo（设备信息管理）](/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-deviceinfo/js-apis-enterprise-deviceinfo) |
| CoreFileKit | [@ohos.file.picker (选择器)](/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker) |
| MediaLibraryKit | [@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)](/ref/media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper)  [@ohos.file.AlbumPickerComponent (Album Picker组件)](/ref/media-library-api/media-library-comp/ohos-file-albumpickercomponent/ohos-file-albumpickercomponent)  [@ohos.file.PhotoPickerComponent (PhotoPicker组件)](/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent)  [@ohos.file.RecentPhotoComponent (最近图片组件)](/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent)  [@ohos.multimedia.movingphotoview (动态照片)](/ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview) |
| PerformanceAnalysisKit | [@ohos.hidebug (Debug调试)](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug) |
| AudioKit | [@ohos.multimedia.audio (音频管理)](/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio/arkts-apis-audio) |
| CameraKit | [@ohos.multimedia.cameraPicker (相机选择器)](/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker)  [@ohos.multimedia.camera (相机管理)](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera) |
| AVSessionKit | [@ohos.multimedia.avCastPicker (投播组件)](/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker)  [@ohos.multimedia.avsession (媒体会话管理)](/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession/arkts-apis-avsession) |
| MediaKit | [@ohos.multimedia.media (媒体服务)](/ref/media-api/media-arkts/js-apis-media/arkts-apis-media/arkts-apis-media) |
| NotificationKit | [@ohos.notification (Notification模块)](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification)  [@ohos.notificationManager (NotificationManager模块)](/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager) |
| TelephonyKit | [@ohos.telephony.call (拨打电话)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call)  [@ohos.telephony.data (蜂窝数据)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data)  [@ohos.telephony.observer (observer)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-observer/js-apis-observer)  [@ohos.telephony.radio (网络搜索)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio)  [@ohos.telephony.sim (SIM卡管理)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim)  [@ohos.telephony.sms (短信服务)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sms/js-apis-sms) |
| UserAuthenticationKit | [@ohos.userIAM.userAuth (用户认证)](/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth) |
| ArkUI | [@ohos.window (窗口)](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window) |
| MapKit | [sceneMap（场景化控件）](/ref/map-api/map-arkts/map-scenemap/map-scenemap) |
| PaymentKit | [paymentService (鸿蒙支付服务)](/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice) |
| ServiceCollaborationKit | [devicePicker (设备选择控制器)](/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker)  [CollaborationDevicePicker (流转控件)](/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker) |
| ShareKit | [systemShare（分享）](/ref/share-api/share-arkts/share-system-share/share-system-share)  [harmonyShare（华为分享）](/ref/share-api/share-arkts/share-harmony-share/share-harmony-share) |
| VisionKit | [CardRecognition（卡证识别控件）](/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition#section143611912403)  [DocumentScanner（文档扫描控件）](/ref/vision-api/vision-component/vision-document-scanner/vision-document-scanner#section143611912403) |
| ScanKit | [Scan Kit（统一扫码服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-api) |
