---
title: "系统公共事件定义(待停用)"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/commonevent-definitions
kit: 系统
last_updated: "2026-04-22"
slug: commonevent-definitions
---

# 系统公共事件定义(待停用)

本文档提供系统所定义的公共事件类型的索引。

公共事件类型定义在[ohos.commonEvent模块的Support枚举](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-arkts-dep/js-apis-commonevent/js-apis-commonevent#support)中。

****系统能力：**** SystemCapability.Notification.CommonEvent

- COMMON\_EVENT\_BOOT\_COMPLETED(deprecated) 提示用户已完成引导并加载系统。

  ![](../../../../../images/a3bf4542/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用COMMON\_EVENT\_BOOT\_COMPLETED替代。

  - 值：usual.event.BOOT\_COMPLETED
  - 订阅者所需权限：ohos.permission.RECEIVER\_STARTUP\_COMPLETED（该权限仅系统应用可申请）
- COMMON\_EVENT\_LOCKED\_BOOT\_COMPLETED(deprecated) （预留事件，暂未支持）提示用户已完成引导，系统已加载，但屏幕仍锁定。

  ![](../../../../../images/fe24d955/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_LOCKED\_BOOT\_COMPLETED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_locked_boot_completed)替代。

  - 值：usual.event.LOCKED\_BOOT\_COMPLETED
  - 订阅者所需权限：无
- COMMON\_EVENT\_SHUTDOWN(deprecated) 提示设备正在关闭并将继续直至最终关闭。

  ![](../../../../../images/fb284a3c/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_SHUTDOWN](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_shutdown)替代。

  - 值：usual.event.SHUTDOWN
  - 订阅者所需权限：无
- COMMON\_EVENT\_BATTERY\_CHANGED(deprecated) 提示电池充电状态、电量和其他信息发生变化。

  ![](../../../../../images/833dc719/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BATTERY\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_battery_changed)替代。

  - 值：usual.event.BATTERY\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_BATTERY\_LOW(deprecated) 提示电池电量低。

  ![](../../../../../images/7053cca4/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BATTERY\_LOW](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_battery_low)替代。

  - 值：usual.event.BATTERY\_LOW
  - 订阅者所需权限：无
- COMMON\_EVENT\_BATTERY\_OKAY(deprecated) 提示电池退出低电量状态。

  ![](../../../../../images/fe7476ad/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BATTERY\_OKAY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_battery_okay)替代。

  - 值：usual.event.BATTERY\_OKAY
  - 订阅者所需权限：无
- COMMON\_EVENT\_POWER\_CONNECTED(deprecated) 提示设备连接到外部电源。

  ![](../../../../../images/a1bd27f3/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_POWER\_CONNECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_power_connected)替代。

  - 值：usual.event.POWER\_CONNECTED
  - 订阅者所需权限：无
- COMMON\_EVENT\_POWER\_DISCONNECTED(deprecated) 提示设备与外部电源断开。

  ![](../../../../../images/6f6415fc/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_POWER\_DISCONNECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_power_disconnected)替代。

  - 值：usual.event.POWER\_DISCONNECTED
  - 订阅者所需权限：无
- COMMON\_EVENT\_SCREEN\_OFF(deprecated) 提示设备屏幕关闭且设备处于睡眠状态。

  ![](../../../../../images/04651b68/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_SCREEN\_OFF](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_screen_off)替代。

  - 值：usual.event.SCREEN\_OFF
  - 订阅者所需权限：无
- COMMON\_EVENT\_SCREEN\_ON(deprecated) 提示设备屏幕打开且设备处于交互状态。

  ![](../../../../../images/20f67cdb/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_SCREEN\_ON](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_screen_on)替代。

  - 值：usual.event.SCREEN\_ON
  - 订阅者所需权限：无
- COMMON\_EVENT\_THERMAL\_LEVEL\_CHANGED(deprecated) 提示设备热状态（温度等级）发生变化。

  ![](../../../../../images/a8c4b53c/note_3.0-zh-cn.png) 

  从API version 8 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_THERMAL\_LEVEL\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_thermal_level_changed)替代。

  - 值：usual.event.THERMAL\_LEVEL\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_PRESENT(deprecated) （预留事件，暂未支持）提示用户解锁了设备。

  ![](../../../../../images/b03638e1/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_PRESENT](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_presentdeprecated)替代。

  - 值：usual.event.USER\_PRESENT
  - 订阅者所需权限：无
- COMMON\_EVENT\_TIME\_TICK(deprecated) 提示系统时间发生更改（指时间正常流逝）。

  ![](../../../../../images/5229d4ee/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_TIME\_TICK](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_time_tick)替代。

  - 值：usual.event.TIME\_TICK
  - 订阅者所需权限：无
- COMMON\_EVENT\_TIME\_CHANGED(deprecated) 提示系统时间被重新设置。

  ![](../../../../../images/5640d207/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_TIME\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_time_changed)替代。

  - 值：usual.event.TIME\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_DATE\_CHANGED(deprecated) （预留事件，暂未支持）提示系统日期已更改。

  ![](../../../../../images/4f69e3c9/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_date_changed)替代。

  - 值：usual.event.DATE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_TIMEZONE\_CHANGED(deprecated) 提示系统时区发生变更。

  ![](../../../../../images/9ec04a93/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_TIMEZONE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_timezone_changed)替代。

  - 值：usual.event.TIMEZONE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_CLOSE\_SYSTEM\_DIALOGS(deprecated) （预留事件，暂未支持）提示用户关闭临时系统对话框。

  ![](../../../../../images/2ffe74b9/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_CLOSE\_SYSTEM\_DIALOGS](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_close_system_dialogs)替代。

  - 值：usual.event.CLOSE\_SYSTEM\_DIALOGS
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_ADDED(deprecated) 提示设备上已安装新应用程序包。

  ![](../../../../../images/9c8a68c3/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_ADDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_added)替代。

  - 值：usual.event.PACKAGE\_ADDED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_REPLACED(deprecated) （预留事件，暂未支持）提示设备上已安装的旧版本应用程序已被新版本所替换。

  ![](../../../../../images/37740ba7/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_REPLACED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_replaced)替代。

  - 值：usual.event.PACKAGE\_REPLACED
  - 订阅者所需权限：无
- COMMON\_EVENT\_MY\_PACKAGE\_REPLACED(deprecated) （预留事件，暂未支持）提示应用程序包的新版本已取代前一个版本。

  ![](../../../../../images/88ebfc85/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_MY\_PACKAGE\_REPLACED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_my_package_replaced)替代。

  - 值：usual.event.MY\_PACKAGE\_REPLACED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_REMOVED(deprecated) 提示已安装的应用程序已从设备卸载，但应用程序数据得到保留的。

  ![](../../../../../images/6d61747b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_removed)替代。

  - 值：usual.event.PACKAGE\_REMOVED
  - 订阅者所需权限：无
- COMMON\_EVENT\_BUNDLE\_REMOVED(deprecated) （预留事件，暂未支持）提示已从设备中卸载已安装应用程序的附加包，但应用程序数据得到保留。

  ![](../../../../../images/9388da98/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BUNDLE\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bundle_removed)替代。

  - 值：usual.event.BUNDLE\_REMOVED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_FULLY\_REMOVED(deprecated) （预留事件，暂未支持）提示已从设备中完全卸载已安装的应用程序（包括应用程序数据和代码）。

  ![](../../../../../images/c2de0c4b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_FULLY\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_fully_removed)替代。

  - 值：usual.event.PACKAGE\_FULLY\_REMOVED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_CHANGED(deprecated) 提示应用程序包已发生更改（例如，包中的组件已启用或禁用）。

  ![](../../../../../images/a7ab2354/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_changed)替代。

  - 值：usual.event.PACKAGE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_RESTARTED(deprecated) 提示用户终止了应用程序的所有进程并重启应用程序。

  ![](../../../../../images/4e17b70b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_RESTARTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_restarted)替代。

  - 值：usual.event.PACKAGE\_RESTARTED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_DATA\_CLEARED(deprecated) 提示用户清除了应用包数据。

  ![](../../../../../images/7d378881/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_DATA\_CLEARED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_data_cleared)替代。

  - 值：usual.event.PACKAGE\_DATA\_CLEARED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGES\_SUSPENDED(deprecated) （预留事件，暂未支持）提示应用程序已挂起。

  ![](../../../../../images/8cfd1b54/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGES\_SUSPENDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_packages_suspended)替代。

  - 值：usual.event.PACKAGES\_SUSPENDED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGES\_UNSUSPENDED(deprecated) （预留事件，暂未支持）提示应用HAP包未挂起（从挂起状态恢复）。

  ![](../../../../../images/89349b06/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGES\_UNSUSPENDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_packages_unsuspended)替代。

  - 值：usual.event.PACKAGES\_UNSUSPENDED
  - 订阅者所需权限：无
- COMMON\_EVENT\_MY\_PACKAGE\_SUSPENDED(deprecated) 提示应用HAP包被挂起的。

  ![](../../../../../images/ed610565/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_MY\_PACKAGE\_SUSPENDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_my_package_suspended)替代。

  - 值：usual.event.MY\_PACKAGE\_SUSPENDED
  - 订阅者所需权限：无
- COMMON\_EVENT\_MY\_PACKAGE\_UNSUSPENDED(deprecated) 提示应用包未挂起。

  ![](../../../../../images/0d29756b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_MY\_PACKAGE\_UNSUSPENDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_my_package_unsuspended)替代。

  - 值：usual.event.MY\_PACKAGE\_UNSUSPENDED
  - 订阅者所需权限：无
- COMMON\_EVENT\_UID\_REMOVED(deprecated) （预留事件，暂未支持）提示用户ID已从系统中删除。

  ![](../../../../../images/46aae967/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_UID\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_uid_removed)替代。

  - 值：usual.event.UID\_REMOVED
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_FIRST\_LAUNCH(deprecated) （预留事件，暂未支持）提示首次启动已安装的应用程序。

  ![](../../../../../images/12120c02/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_FIRST\_LAUNCH](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_first_launch)替代。

  - 值：usual.event.PACKAGE\_FIRST\_LAUNCH
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_NEEDS\_VERIFICATION(deprecated) （预留事件，暂未支持）提示应用需要系统校验。

  ![](../../../../../images/d013244f/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_NEEDS\_VERIFICATION](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_needs_verification)替代。

  - 值：usual.event.PACKAGE\_NEEDS\_VERIFICATION
  - 订阅者所需权限：无
- COMMON\_EVENT\_PACKAGE\_VERIFIED(deprecated) （预留事件，暂未支持）提示应用已被系统校验。

  ![](../../../../../images/ba861328/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_PACKAGE\_VERIFIED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_verified)替代。

  - 值：usual.event.PACKAGE\_VERIFIED
  - 订阅者所需权限：无
- COMMON\_EVENT\_EXTERNAL\_APPLICATIONS\_AVAILABLE(deprecated) （预留事件，暂未支持）提示安装在外部存储上的应用程序对系统可用。

  ![](../../../../../images/90207650/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_EXTERNAL\_APPLICATIONS\_AVAILABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_external_applications_available)替代。

  - 值：usual.event.EXTERNAL\_APPLICATIONS\_AVAILABLE
  - 订阅者所需权限：无
- COMMON\_EVENT\_EXTERNAL\_APPLICATIONS\_UNAVAILABLE(deprecated) （预留事件，暂未支持）提示安装在外部存储上的应用程序对系统不可用。

  ![](../../../../../images/a639a9cf/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_EXTERNAL\_APPLICATIONS\_UNAVAILABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_external_applications_unavailable)替代。

  - 值：usual.event.EXTERNAL\_APPLICATIONS\_UNAVAILABLE
  - 订阅者所需权限：无
- COMMON\_EVENT\_CONFIGURATION\_CHANGED(deprecated) （预留事件，暂未支持）提示设备状态（例如，方向、区域设置等）已更改。

  ![](../../../../../images/55af9ad4/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_CONFIGURATION\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_configuration_changed)替代。

  - 值：usual.event.CONFIGURATION\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_LOCALE\_CHANGED(deprecated) （预留事件，暂未支持）提示设备区域设置已更改。

  ![](../../../../../images/8e76bdc0/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_LOCALE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_locale_changed)替代。

  - 值：usual.event.LOCALE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_MANAGE\_PACKAGE\_STORAGE(deprecated) （预留事件，暂未支持）提示设备存储空间不足。

  ![](../../../../../images/8671858b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_MANAGE\_PACKAGE\_STORAGE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_manage_package_storage)替代。

  - 值：usual.event.MANAGE\_PACKAGE\_STORAGE
  - 订阅者所需权限：无
- COMMON\_EVENT\_DRIVE\_MODE(deprecated) （预留事件，暂未支持）提示系统处于驾驶模式。

  ![](../../../../../images/d204fb25/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DRIVE\_MODE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_drive_mode)替代。

  - 值：common.event.DRIVE\_MODE
  - 订阅者所需权限：无
- COMMON\_EVENT\_HOME\_MODE(deprecated) （预留事件，暂未支持）提示系统处于HOME模式。

  ![](../../../../../images/f68a018a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_HOME\_MODE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_home_mode)替代。

  - 值：common.event.HOME\_MODE
  - 订阅者所需权限：无
- COMMON\_EVENT\_OFFICE\_MODE(deprecated) （预留事件，暂未支持）提示系统处于办公模式。

  ![](../../../../../images/e315cb66/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_OFFICE\_MODE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_office_mode)替代。

  - 值：common.event.OFFICE\_MODE
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_STARTED(deprecated) （预留事件，暂未支持）提示用户已启动。

  ![](../../../../../images/f9228aef/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_STARTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_started)替代。

  - 值：usual.event.USER\_STARTED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_BACKGROUND(deprecated) （预留事件，暂未支持）提示用户已被带到后台。

  ![](../../../../../images/abdc5562/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_BACKGROUND](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_background)替代。

  - 值：usual.event.USER\_BACKGROUND
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_FOREGROUND(deprecated) （预留事件，暂未支持）提示用户已被带到前台。

  ![](../../../../../images/b9df53c8/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_FOREGROUND](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_foreground)替代。

  - 值：usual.event.USER\_FOREGROUND
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_SWITCHED(deprecated) 提示用户正在切换。

  ![](../../../../../images/150dad82/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用COMMON\_EVENT\_USER\_SWITCHED替代。

  - 值：usual.event.USER\_SWITCHED
  - 订阅者所需权限：ohos.permission.MANAGE\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_USER\_STARTING(deprecated) （预留事件，暂未支持）提示用户正在启动。

  ![](../../../../../images/3d3905b8/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_STARTING](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_starting)替代。

  - 值：usual.event.USER\_STARTING
  - 订阅者所需权限：ohos.permission.INTERACT\_ACROSS\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_USER\_UNLOCKED(deprecated) （预留事件，暂未支持）在重启后解锁时，提示当前用户的凭据加密存储已解锁。

  ![](../../../../../images/b3bc33dc/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_UNLOCKED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_unlocked)替代。

  - 值：usual.event.USER\_UNLOCKED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_STOPPING(deprecated) （预留事件，暂未支持）提示要停止用户。

  ![](../../../../../images/8a8be9d1/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_STOPPING](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_stopping)替代。

  - 值：usual.event.USER\_STOPPING
  - 订阅者所需权限：ohos.permission.INTERACT\_ACROSS\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_USER\_STOPPED(deprecated) （预留事件，暂未支持）提示用户已停止。

  ![](../../../../../images/3bab74e0/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USER\_STOPPED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_stopped)替代。

  - 值：usual.event.USER\_STOPPED
  - 订阅者所需权限：无
- COMMON\_EVENT\_WIFI\_POWER\_STATE(deprecated) 提示Wi-Fi功能状态的变更，如启用或禁用。

  ![](../../../../../images/14fbdbcd/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_POWER\_STATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_power_state)替代。

  - 值：usual.event.wifi.POWER\_STATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_WIFI\_SCAN\_FINISHED(deprecated) 提示Wi-Fi接入点已被扫描并证明可用。

  ![](../../../../../images/2ab9ab69/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_SCAN\_FINISHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_scan_finished)替代。

  - 值：usual.event.wifi.SCAN\_FINISHED
  - 订阅者所需权限：ohos.permission.LOCATION
- COMMON\_EVENT\_WIFI\_RSSI\_VALUE(deprecated) 提示Wi-Fi信号强度（RSSI）改变。

  ![](../../../../../images/41d1af6d/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_RSSI\_VALUE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_rssi_value)替代。

  - 值：usual.event.wifi.RSSI\_VALUE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_CONN\_STATE(deprecated) 提示Wi-Fi连接状态发生改变。

  ![](../../../../../images/3e805c1a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_CONN\_STATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_conn_state)替代。

  - 值：usual.event.wifi.CONN\_STATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_WIFI\_HOTSPOT\_STATE(deprecated) 提示Wi-Fi热点功能状态的变更，如启用或禁用。

  ![](../../../../../images/0ebc2727/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_HOTSPOT\_STATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_hotspot_state)替代。

  - 值：usual.event.wifi.HOTSPOT\_STATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_WIFI\_AP\_STA\_JOIN(deprecated) 提示有客户端加入当前设备Wi-Fi热点。

  ![](../../../../../images/92c6dbbe/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_AP\_STA\_JOIN](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_ap_sta_join)替代。

  - 值：usual.event.wifi.WIFI\_HS\_STA\_JOIN
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_AP\_STA\_LEAVE(deprecated) 提示客户端已断开与当前设备Wi-Fi热点的连接。

  ![](../../../../../images/a45f7a3a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_AP\_STA\_LEAVE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_ap_sta_leave)替代。

  - 值：usual.event.wifi.WIFI\_HS\_STA\_LEAVE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_MPLINK\_STATE\_CHANGE(deprecated) 提示MPLink（增强Wi-Fi功能）状态已更改（暂不支持）。

  ![](../../../../../images/d639f4e5/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_MPLINK\_STATE\_CHANGE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_mplink_state_change)替代。

  - 值：usual.event.wifi.mplink.STATE\_CHANGE
  - 订阅者所需权限：无
- COMMON\_EVENT\_WIFI\_P2P\_CONN\_STATE(deprecated) 提示Wi-Fi P2P连接状态改变。

  ![](../../../../../images/69890f7f/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_CONN\_STATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_conn_state)替代。

  - 值：usual.event.wifi.p2p.CONN\_STATE\_CHANGE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO and ohos.permission.LOCATION
- COMMON\_EVENT\_WIFI\_P2P\_STATE\_CHANGED(deprecated) 提示Wi-Fi P2P状态发生变更，如启用和禁用。

  ![](../../../../../images/d76cfd70/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_state_changed)替代。

  - 值：usual.event.wifi.p2p.STATE\_CHANGE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_P2P\_PEERS\_STATE\_CHANGED(deprecated) 提示Wi-Fi P2P对等体状态变化。

  ![](../../../../../images/88f249af/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_PEERS\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_peers_state_changed)替代。

  - 值：usual.event.wifi.p2p.DEVICES\_CHANGE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_P2P\_PEERS\_DISCOVERY\_STATE\_CHANGED(deprecated) 提示Wi-Fi P2P发现状态变化。

  ![](../../../../../images/9409e18f/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_PEERS\_DISCOVERY\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_peers_discovery_state_changed)替代。

  - 值：usual.event.wifi.p2p.PEER\_DISCOVERY\_STATE\_CHANGE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_P2P\_CURRENT\_DEVICE\_STATE\_CHANGED(deprecated) 提示Wi-Fi P2P当前设备状态变化。

  ![](../../../../../images/b40f06a2/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_CURRENT\_DEVICE\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_current_device_state_changed)替代。

  - 值：usual.event.wifi.p2p.CURRENT\_DEVICE\_CHANGE
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_WIFI\_P2P\_GROUP\_STATE\_CHANGED(deprecated) 提示Wi-Fi P2P群组信息已更改。

  ![](../../../../../images/9aa42979/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_WIFI\_P2P\_GROUP\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_wifi_p2p_group_state_changed)替代。

  - 值：usual.event.wifi.p2p.GROUP\_STATE\_CHANGED
  - 订阅者所需权限：ohos.permission.GET\_WIFI\_INFO
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_CONNECT\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙免提通信连接状态。

  ![](../../../../../images/45c474dc/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_CONNECT\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfree_ag_connect_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfree.ag.CONNECT\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_CURRENT\_DEVICE\_UPDATE(deprecated) （预留事件，暂未支持）提示连接到具有蓝牙免提功能的设备处于活动状态。

  ![](../../../../../images/16282cbe/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_CURRENT\_DEVICE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfree_ag_current_device_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfree.ag.CURRENT\_DEVICE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_AUDIO\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP连接状态已更改。

  ![](../../../../../images/8481c26b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREE\_AG\_AUDIO\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfree_ag_audio_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfree.ag.AUDIO\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CONNECT\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP连接状态。

  ![](../../../../../images/47c18e6a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CONNECT\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsource_connect_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsource.CONNECT\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CURRENT\_DEVICE\_UPDATE(deprecated) （预留事件，暂未支持）提示使用蓝牙A2DP连接的设备处于活动状态。

  ![](../../../../../images/1e72d77e/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CURRENT\_DEVICE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsource_current_device_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsource.CURRENT\_DEVICE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_PLAYING\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP播放状态发生改变。

  ![](../../../../../images/d06c1887/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_PLAYING\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsource_playing_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsource.PLAYING\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_AVRCP\_CONNECT\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP的AVRCP连接状态已更改。

  ![](../../../../../images/ebdec3e8/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_AVRCP\_CONNECT\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsource_avrcp_connect_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsource.AVRCP\_CONNECT\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CODEC\_VALUE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP音频编解码状态更改。

  ![](../../../../../images/98f7aa42/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSOURCE\_CODEC\_VALUE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsource_codec_value_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsource.CODEC\_VALUE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_DISCOVERED(deprecated) （预留事件，暂未支持）提示发现远程蓝牙设备。

  ![](../../../../../images/27ac03f7/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_DISCOVERED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_discovereddeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.DISCOVERED
  - 订阅者所需权限：ohos.permission.LOCATION and ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CLASS\_VALUE\_UPDATE(deprecated) （预留事件，暂未支持）提示远程蓝牙设备的蓝牙类别已更改。

  ![](../../../../../images/fd17c8d5/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CLASS\_VALUE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_class_value_updatedeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.CLASS\_VALUE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_ACL\_CONNECTED(deprecated) （预留事件，暂未支持）提示已与远程蓝牙设备建立低级别（ACL）连接。

  ![](../../../../../images/33272117/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_ACL\_CONNECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_acl_connecteddeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.ACL\_CONNECTED
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_ACL\_DISCONNECTED(deprecated) （预留事件，暂未支持）提示低级别（ACL）连接已从远程蓝牙设备断开。

  ![](../../../../../images/6ce62376/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_ACL\_DISCONNECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_acl_disconnecteddeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.ACL\_DISCONNECTED
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_NAME\_UPDATE(deprecated) （预留事件，暂未支持）提示远程蓝牙设备的友好名称首次被检索或自上次检索以来被更改。

  ![](../../../../../images/8ee7181a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_NAME\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_name_updatedeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.NAME\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIR\_STATE(deprecated) （预留事件，暂未支持）提示远程蓝牙设备连接状态更改。

  ![](../../../../../images/addd4fd6/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIR\_STATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_pair_statedeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.PAIR\_STATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_BATTERY\_VALUE\_UPDATE(deprecated) （预留事件，暂未支持）提示远程蓝牙设备的电池电量首次被检索或自上次检索以来被更改。

  ![](../../../../../images/cf83d945/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_BATTERY\_VALUE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_battery_value_updatedeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.BATTERY\_VALUE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_SDP\_RESULT(deprecated) （预留事件，暂未支持）提示远程蓝牙设备SDP状态。

  ![](../../../../../images/8a9d71ca/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_SDP\_RESULT](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_sdp_resultdeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.SDP\_RESULT
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_UUID\_VALUE(deprecated) （预留事件，暂未支持）提示远程蓝牙设备UUID连接状态。

  ![](../../../../../images/be7c6963/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_UUID\_VALUE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_uuid_valuedeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.UUID\_VALUE
  - 订阅者所需权限：ohos.permission.DISCOVER\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIRING\_REQ(deprecated) （预留事件，暂未支持）提示远程蓝牙设备配对请求。

  ![](../../../../../images/b894034b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIRING\_REQ](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_pairing_reqdeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.PAIRING\_REQ
  - 订阅者所需权限：ohos.permission.DISCOVER\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIRING\_CANCEL(deprecated) （预留事件，暂未支持）提示取消蓝牙配对。

  ![](../../../../../images/a2056998/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_PAIRING\_CANCEL](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_pairing_canceldeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.PAIRING\_CANCEL
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_REQ(deprecated) （预留事件，暂未支持）提示远程蓝牙设备连接请求。

  ![](../../../../../images/6e64e485/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_REQ](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_connect_reqdeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.CONNECT\_REQ
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_REPLY(deprecated) （预留事件，暂未支持）提示远程蓝牙设备连接请求响应。

  ![](../../../../../images/6c2fb36c/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_REPLY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_connect_replydeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.CONNECT\_REPLY
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_CANCEL(deprecated) （预留事件，暂未支持）提示取消与远程蓝牙设备的连接。

  ![](../../../../../images/fdc58ea0/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_REMOTEDEVICE\_CONNECT\_CANCEL](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_remotedevice_connect_canceldeprecated)替代。

  - 值：usual.event.bluetooth.remotedevice.CONNECT\_CANCEL
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_CONNECT\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙免提连接状态已更改。

  ![](../../../../../images/049134ce/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_CONNECT\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfreeunit_connect_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfreeunit.CONNECT\_STATE\_UPDATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AUDIO\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙免提音频状态已更改。

  ![](../../../../../images/68ff1955/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AUDIO\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfreeunit_audio_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfreeunit.AUDIO\_STATE\_UPDATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AG\_COMMON\_EVENT(deprecated) （预留事件，暂未支持）提示蓝牙免提音频网关状态已更改。

  ![](../../../../../images/a8d831e2/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AG\_COMMON\_EVENT](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfreeunit_ag_common_eventdeprecated)替代。

  - 值：usual.event.bluetooth.handsfreeunit.AG\_COMMON\_EVENT
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AG\_CALL\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙免提呼叫状态已更改。

  ![](../../../../../images/115c6127/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HANDSFREEUNIT\_AG\_CALL\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_handsfreeunit_ag_call_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.handsfreeunit.AG\_CALL\_STATE\_UPDATE
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HOST\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙适配器状态已更改，例如蓝牙已打开或关闭。

  ![](../../../../../images/cfd1e77e/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.host.STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_DISCOVERABLE(deprecated) （预留事件，暂未支持）提示用户允许扫描蓝牙请求。

  ![](../../../../../images/88443005/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_DISCOVERABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_req_discoverabledeprecated)替代。

  - 值：usual.event.bluetooth.host.REQ\_DISCOVERABLE
  - 订阅者所需权限：无
- COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_ENABLE(deprecated) （预留事件，暂未支持）提示用户打开蓝牙请求。

  ![](../../../../../images/b9a82c7d/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_ENABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_req_enabledeprecated)替代。

  - 值：usual.event.bluetooth.host.REQ\_ENABLE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_DISABLE(deprecated) （预留事件，暂未支持）提示用户关闭蓝牙请求。

  ![](../../../../../images/53debcae/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_REQ\_DISABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_req_disabledeprecated)替代。

  - 值：usual.event.bluetooth.host.REQ\_DISABLE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_SCAN\_MODE\_UPDATE(deprecated) （预留事件，暂未支持）提示设备蓝牙扫描模式更改。

  ![](../../../../../images/150fd60d/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_SCAN\_MODE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_scan_mode_updatedeprecated)替代。

  - 值：usual.event.bluetooth.host.SCAN\_MODE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_DISCOVERY\_STARTED(deprecated) （预留事件，暂未支持）提示设备上已启动蓝牙扫描。

  ![](../../../../../images/9d56ce30/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_DISCOVERY\_STARTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_discovery_starteddeprecated)替代。

  - 值：usual.event.bluetooth.host.DISCOVERY\_STARTED
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_DISCOVERY\_FINISHED(deprecated) （预留事件，暂未支持）提示设备上蓝牙扫描完成。

  ![](../../../../../images/42bd7fce/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_DISCOVERY\_FINISHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_discovery_finisheddeprecated)替代。

  - 值：usual.event.bluetooth.host.DISCOVERY\_FINISHED
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_HOST\_NAME\_UPDATE(deprecated) （预留事件，暂未支持）提示设备蓝牙适配器名称已更改。

  ![](../../../../../images/f3859c2b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_HOST\_NAME\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_host_name_updatedeprecated)替代。

  - 值：usual.event.bluetooth.host.NAME\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_CONNECT\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP宿的连接状态已更改。

  ![](../../../../../images/344e0abf/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_CONNECT\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsink_connect_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsink.CONNECT\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_PLAYING\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP宿的播放状态发生改变。

  ![](../../../../../images/74dbb577/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_PLAYING\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsink_playing_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsink.PLAYING\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_AUDIO\_STATE\_UPDATE(deprecated) （预留事件，暂未支持）提示蓝牙A2DP宿的音频状态已更改。

  ![](../../../../../images/715ee3b8/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_BLUETOOTH\_A2DPSINK\_AUDIO\_STATE\_UPDATE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bluetooth_a2dpsink_audio_state_updatedeprecated)替代。

  - 值：usual.event.bluetooth.a2dpsink.AUDIO\_STATE\_UPDATE
  - 订阅者所需权限：ohos.permission.USE\_BLUETOOTH
- COMMON\_EVENT\_NFC\_ACTION\_ADAPTER\_STATE\_CHANGED(deprecated) （预留事件，暂未支持）提示设备NFC适配器状态已更改。

  ![](../../../../../images/ef7cc2da/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_NFC\_ACTION\_ADAPTER\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_nfc_action_adapter_state_changed)替代。

  - 值：usual.event.nfc.action.ADAPTER\_STATE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_NFC\_ACTION\_RF\_FIELD\_ON\_DETECTED(deprecated) （预留事件，暂未支持）提示检测到NFC设备RF字段处于使能状态。

  ![](../../../../../images/c5df64c5/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_NFC\_ACTION\_RF\_FIELD\_ON\_DETECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_nfc_action_rf_field_on_detected)替代。

  - 值：usual.event.nfc.action.RF\_FIELD\_ON\_DETECTED
  - 订阅者所需权限：ohos.permission.MANAGE\_SECURE\_SETTINGS（该权限仅系统应用可申请）
- COMMON\_EVENT\_NFC\_ACTION\_RF\_FIELD\_OFF\_DETECTED(deprecated) （预留事件，暂未支持）提示检测到NFC设备RF字段处于关闭状态。

  ![](../../../../../images/8767d1a8/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_NFC\_ACTION\_RF\_FIELD\_OFF\_DETECTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_nfc_action_rf_field_off_detected)替代。

  - 值：usual.event.nfc.action.RF\_FIELD\_OFF\_DETECTED
  - 订阅者所需权限：ohos.permission.MANAGE\_SECURE\_SETTINGS（该权限仅系统应用可申请）
- COMMON\_EVENT\_DISCHARGING(deprecated) 提示系统停止为电池充电。

  ![](../../../../../images/9603087e/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISCHARGING](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_discharging)替代。

  - 值：usual.event.DISCHARGING
  - 订阅者所需权限：无
- COMMON\_EVENT\_CHARGING(deprecated) 提示系统开始为电池充电。

  ![](../../../../../images/1464ea06/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_CHARGING](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_charging)替代。

  - 值：usual.event.CHARGING
  - 订阅者所需权限：无
- COMMON\_EVENT\_DEVICE\_IDLE\_MODE\_CHANGED(deprecated) （预留事件，暂未支持）提示系统空闲模式已更改。

  ![](../../../../../images/d497f97c/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DEVICE\_IDLE\_MODE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_device_idle_mode_changed)替代。

  - 值：usual.event.DEVICE\_IDLE\_MODE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_POWER\_SAVE\_MODE\_CHANGED(deprecated) 提示系统节能模式更改。

  ![](../../../../../images/f59abe30/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_POWER\_SAVE\_MODE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_power_save_mode_changed)替代。

  - 值：usual.event.POWER\_SAVE\_MODE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USER\_ADDED(deprecated) 提示用户已添加到系统中。

  ![](../../../../../images/e462ae22/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用COMMON\_EVENT\_USER\_ADDED替代。

  - 值：usual.event.USER\_ADDED
  - 订阅者所需权限：ohos.permission.MANAGE\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_USER\_REMOVED(deprecated) 提示用户已从系统中删除。

  ![](../../../../../images/49c786ad/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用COMMON\_EVENT\_USER\_REMOVED替代。

  - 值：usual.event.USER\_REMOVED
  - 订阅者所需权限：ohos.permission.MANAGE\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_ABILITY\_ADDED(deprecated) （预留事件，暂未支持）提示有某个能力已被添加。

  ![](../../../../../images/c5f324e3/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_ABILITY\_ADDED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ability_added)替代。

  - 值：usual.event.ABILITY\_ADDED
  - 订阅者所需权限：ohos.permission.LISTEN\_BUNDLE\_CHANGE
- COMMON\_EVENT\_ABILITY\_REMOVED(deprecated) （预留事件，暂未支持）提示已删除某个能力。

  ![](../../../../../images/7ee30034/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_ABILITY\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ability_removed)替代。

  - 值：usual.event.ABILITY\_REMOVED
  - 订阅者所需权限：ohos.permission.LISTEN\_BUNDLE\_CHANGE
- COMMON\_EVENT\_ABILITY\_UPDATED(deprecated) （预留事件，暂未支持）提示能力已更新。

  ![](../../../../../images/22916a25/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_ABILITY\_UPDATED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ability_updated)替代。

  - 值：usual.event.ABILITY\_UPDATED
  - 订阅者所需权限：ohos.permission.LISTEN\_BUNDLE\_CHANGE
- COMMON\_EVENT\_LOCATION\_MODE\_STATE\_CHANGED(deprecated) （预留事件，暂未支持）提示系统定位模式已更改。

  ![](../../../../../images/4c7c398d/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_LOCATION\_MODE\_STATE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_location_mode_state_changed)替代。

  - 值：usual.event.location.MODE\_STATE\_CHANGED
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_SLEEP(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统正在休眠。

  ![](../../../../../images/62bad4b9/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_SLEEP](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_sleep)替代。

  - 值：common.event.IVI\_SLEEP
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_PAUSE(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统已休眠，并通知应用程序停止播放。

  ![](../../../../../images/a39dc555/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_PAUSE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_pause)替代。

  - 值：common.event.IVI\_PAUSE
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_STANDBY(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统中的第三方应用暂停当前工作。

  ![](../../../../../images/b3fdcc3a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_STANDBY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_standby)替代。

  - 值：common.event.IVI\_STANDBY
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_LASTMODE\_SAVE(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统中的第三方应用保存其最后一个模式。

  ![](../../../../../images/dd28f221/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_LASTMODE\_SAVE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_lastmode_save)替代。

  - 值：common.event.IVI\_LASTMODE\_SAVE
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_VOLTAGE\_ABNORMAL(deprecated) （预留事件，暂未支持）提示车辆电源系统电压异常。

  ![](../../../../../images/c8a7835b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_VOLTAGE\_ABNORMAL](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_voltage_abnormal)替代。

  - 值：common.event.IVI\_VOLTAGE\_ABNORMAL
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_HIGH\_TEMPERATURE(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统温度过高。

  ![](../../../../../images/683d3e6d/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_HIGH\_TEMPERATURE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_high_temperature)替代。

  - 值：common.event.IVI\_HIGH\_TEMPERATURE
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_EXTREME\_TEMPERATURE(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统温度极高。

  ![](../../../../../images/a02ba1fe/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_EXTREME\_TEMPERATURE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_extreme_temperature)替代。

  - 值：common.event.IVI\_EXTREME\_TEMPERATURE
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_TEMPERATURE\_ABNORMAL(deprecated) （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统具有极端温度。

  ![](../../../../../images/e5148b11/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_TEMPERATURE\_ABNORMAL](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_temperature_abnormal)替代。

  - 值：common.event.IVI\_TEMPERATURE\_ABNORMAL
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_VOLTAGE\_RECOVERY(deprecated) （预留事件，暂未支持）提示车辆电源系统电压恢复正常。

  ![](../../../../../images/51221c64/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_VOLTAGE\_RECOVERY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_voltage_recovery)替代。

  - 值：common.event.IVI\_VOLTAGE\_RECOVERY
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_TEMPERATURE\_RECOVERY(deprecated) （预留事件，暂未支持）提示车载系统温度恢复正常。

  ![](../../../../../images/740d38bb/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_TEMPERATURE\_RECOVERY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_temperature_recovery)替代。

  - 值：common.event.IVI\_TEMPERATURE\_RECOVERY
  - 订阅者所需权限：无
- COMMON\_EVENT\_IVI\_ACTIVE(deprecated) （预留事件，暂未支持）提示车载系统电池服务处于活动状态。

  ![](../../../../../images/c4878ff1/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_IVI\_ACTIVE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_ivi_active)替代。

  - 值：common.event.IVI\_ACTIVE
  - 订阅者所需权限：无
- COMMON\_EVENT\_USB\_DEVICE\_ATTACHED(deprecated) 当用户设备作为USB主机时，提示USB设备已挂载。

  ![](../../../../../images/aa507c6a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USB\_DEVICE\_ATTACHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_usb_device_attached)替代。

  - 值：usual.event.hardware.usb.action.USB\_DEVICE\_ATTACHED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USB\_DEVICE\_DETACHED(deprecated) 当用户设备作为USB主机时，提示USB设备被卸载。

  ![](../../../../../images/492f45be/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USB\_DEVICE\_DETACHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_usb_device_detached)替代。

  - 值：usual.event.hardware.usb.action.USB\_DEVICE\_DETACHED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USB\_ACCESSORY\_ATTACHED(deprecated) （预留事件，暂未支持）提示已连接USB附件。

  ![](../../../../../images/99818bfc/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USB\_ACCESSORY\_ATTACHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_usb_accessory_attached)替代。

  - 值：usual.event.hardware.usb.action.USB\_ACCESSORY\_ATTACHED
  - 订阅者所需权限：无
- COMMON\_EVENT\_USB\_ACCESSORY\_DETACHED(deprecated) （预留事件，暂未支持）提示USB附件被卸载。

  ![](../../../../../images/788e8e31/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_USB\_ACCESSORY\_DETACHED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_usb_accessory_detached)替代。

  - 值：usual.event.hardware.usb.action.USB\_ACCESSORY\_DETACHED
  - 订阅者所需权限：无
- COMMON\_EVENT\_DISK\_REMOVED(deprecated) （预留事件，暂未支持）提示外部存储设备状态变更为移除。

  ![](../../../../../images/3bf2e92e/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_REMOVED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_removed)替代。

  - 值：usual.event.data.DISK\_REMOVED
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_DISK\_UNMOUNTED(deprecated) （预留事件，暂未支持）提示外部存储设备状态变更为卸载。

  ![](../../../../../images/0aed040c/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_UNMOUNTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_unmounted)替代。

  - 值：usual.event.data.DISK\_UNMOUNTED
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_DISK\_MOUNTED(deprecated) （预留事件，暂未支持）提示外部存储设备状态变更为挂载。

  ![](../../../../../images/25fb8b5a/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_MOUNTED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_mounted)替代。

  - 值：usual.event.data.DISK\_MOUNTED
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_DISK\_BAD\_REMOVAL(deprecated) （预留事件，暂未支持）提示外部存储设备在挂载状态下被移除。

  ![](../../../../../images/545cb3c3/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_BAD\_REMOVAL](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_bad_removal)替代。

  - 值：usual.event.data.DISK\_BAD\_REMOVAL
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_DISK\_UNMOUNTABLE(deprecated) （预留事件，暂未支持）提示外部存储设备在插卡情况下无法挂载。

  ![](../../../../../images/d5b3d205/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_UNMOUNTABLE](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_unmountable)替代。

  - 值：usual.event.data.DISK\_UNMOUNTABLE
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_DISK\_EJECT(deprecated) （预留事件，暂未支持）提示用户已作出弹出外部存储介质的操作（系统软件层面的交互操作，非直接物理弹出）。

  ![](../../../../../images/71658592/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_DISK\_EJECT](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_disk_eject)替代。

  - 值：usual.event.data.DISK\_EJECT
  - 订阅者所需权限：ohos.permission.STORAGE\_MANAGER，该权限仅系统应用可申请。
- COMMON\_EVENT\_VISIBLE\_ACCOUNTS\_UPDATED(deprecated) （预留事件，暂未支持）提示账户发生可见性的更改。

  ![](../../../../../images/b704ef01/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_VISIBLE\_ACCOUNTS\_UPDATED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_visible_accounts_updated)替代。

  - 值：usual.event.data.VISIBLE\_ACCOUNTS\_UPDATED
  - 订阅者所需权限：ohos.permission.GET\_APP\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_ACCOUNT\_DELETED(deprecated) （预留事件，暂未支持）提示有账户被删除。

  ![](../../../../../images/41e14a18/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_ACCOUNT\_DELETED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_account_deleted)替代。

  - 值：usual.event.data.ACCOUNT\_DELETED
  - 订阅者所需权限：ohos.permission.INTERACT\_ACROSS\_LOCAL\_ACCOUNTS，该权限仅系统应用可申请。
- COMMON\_EVENT\_FOUNDATION\_READY(deprecated) （预留事件，暂未支持）提示foundation已准备好。

  ![](../../../../../images/028ccafe/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_FOUNDATION\_READY](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_foundation_ready)替代。

  - 值：usual.event.data.FOUNDATION\_READY
  - 订阅者所需权限：ohos.permission.RECEIVER\_STARTUP\_COMPLETED（该权限仅系统应用可申请）
- COMMON\_EVENT\_AIRPLANE\_MODE\_CHANGED(deprecated) 提示设备飞行模式发生了切换。

  ![](../../../../../images/fb8b615b/note_3.0-zh-cn.png) 

  从API version 7 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_AIRPLANE\_MODE\_CHANGED](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_airplane_mode_changed10)替代。

  - 值：usual.event.AIRPLANE\_MODE
  - 订阅者所需权限：无
- COMMON\_EVENT\_SPLIT\_SCREEN(deprecated) 提示分屏。

  ![](../../../../../images/0d6160bf/note_3.0-zh-cn.png) 

  从API version 8 开始支持，从API version 9 开始废弃，建议使用[COMMON\_EVENT\_SPLIT\_SCREEN](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_split_screen)替代。
