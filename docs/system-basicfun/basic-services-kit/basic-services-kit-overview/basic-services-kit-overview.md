---
title: "Basic Services Kit简介"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/basic-services-kit-overview
kit: system/basic-services
last_updated: "2026-04-22"
---

# Basic Services Kit简介

Basic Services Kit（基础服务）作为基础服务套件，为应用开发者提供常用的基础能力。比如常用的剪贴板读写、文件上传下载、文件压缩、文件打印、进程间/线程间通信、设备管理、应用账号管理等能力都由本Kit提供。

## 使用场景

Basic Services Kit为开发者提供了多种基础能力，满足开发者不同场景的开发需求。

典型使用场景举例：

- 剪贴板读写：

  - 本地复制粘贴：比如在A应用中复制一段文字，粘贴到其他应用中。
  - 跨设备复制粘贴：比如在A设备浏览器复制一段文本，粘贴到B设备的备忘录中。
- 文件上传下载：

  - 小文件前台上传下载：发布社交动态（图片、短视频等）、发送文件给好友、保存图片到本地等，通常数据量较小，要给用户即时反馈。
  - 大文件后台上传下载：云盘数据同步、下载电影，通常数据量较大，可后台执行，支持断点续传。
- 进程间/线程间通信：

  - 进程间通信：比如ExtensionAbility发送事件给主进程。
  - 线程间通信：比如worker线程处理完网络请求后将事件传递回UI主线程。

## 能力范围

根据不同使用场景分类，本Kit主要包含如下能力：

- 数据文件处理：

  - [剪贴板](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard)：提供内容复制粘贴能力，支持多种数据类型包括文本、HTML数据、URI、PixelMap等。
  - [压缩](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib)：提供文件压缩解压缩的能力。
  - [打印](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-print/js-apis-print)：提供基础文件打印的能力，比如传入文件进行打印、设置打印参数等。
  - [上传下载](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request)：提供文件上传下载、后台传输代理的基础能力。
- 进程间/线程间通信：

  - [公共事件](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager)：提供进程间通信的能力，包括订阅、发布、退订公共事件等，相关开发指南请参考[公共事件简介](/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview)。
  - [Emitter](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter)：提供线程内通信的能力，包括订阅、发布、退订自定义事件等，相关开发指南请参考[使用Emitter进行线程间通信](/system-basicfun/basic-services-kit/app-events/itc-with-emitter)。
- 设备管理：

  - [设备信息](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info)：提供查询产品信息的能力，比如查询设备类型、设备品牌名称、产品系列、产品版本号等。
  - [设置数据项](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings)：提供查询系统设置数据项的能力，比如查询是否启用飞行模式、是否启用触摸浏览等。
  - [电量信息查询](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-battery-info/js-apis-battery-info)：提供查询电量信息的能力。
  - [系统电源管理](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-power/js-apis-power)：提供系统电源管理相关的能力，比如查询屏幕状态能力等。
  - [RunningLock锁操作](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-runninglock/js-apis-runninglock)：提供RunningLock锁相关操作的能力，包括创建、查询、持锁、释放锁等操作。
  - [热管理](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-thermal/js-apis-thermal)：提供热管理相关的能力，比如热档位查询等。
  - [USB管理](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager)：提供USB设备管理相关的能力，比如查询USB设备列表、批量数据传输、控制命令传输、权限控制等，相关开发指南请参考[USB服务开发概述](/system-basicfun/basic-services-kit/usb/usb-dev/usbhost-overview)。
- 其他：

  - [应用账号管理](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount)：提供应用账号的期管理以及数据管理的能力，相关开发指南请参考[管理应用账号](/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account)。
  - [公共回调](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base)：定义了HarmonyOS ArkTS接口的公共回调类型，包括接口调用时出现的公共回调和公共错误信息。
  - [时间时区](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-date-time/js-apis-date-time)：提供获取系统时间以及系统时区的能力。

## 与其他kit的关系

- [ArkTS Kit](/arkts/arkts-overview)：ArkTS Kit中的[多线程并发(Worker和Taskpool)](/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview)需要使用本Kit中的Emitter进行线程间通信。
- [Ability Kit](/ability-kit/abilitykit-overview)：Ability Kit中的进程间通信需要使用本Kit中的公共事件。
- [Core File Kit](/core-file-kit/core-file-kit-intro)：与Core File Kit的使用场景不同，Core File Kit主要提供访问和管理文件的能力，开发者可以在应用文件访问和文件分享、应用数据备份恢复等场景使用Core File Kit进行开发，而涉及到文件压缩、文件上传下载、文件打印等场景时需要使用本Kit进行开发。

## 模拟器支持情况

本Kit支持模拟器。

模拟器与真机存在通用差异，详情请参见“[模拟器与真机的差异](/ide-run-emulator/ide-emulator-overview/ide-emulator-specification)”。
