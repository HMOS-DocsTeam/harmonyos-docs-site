---
title: "hidebug_type.h"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-type-h
---

# hidebug\_type.h

## 概述

HiDebug模块代码结构体定义。

****引用文件：**** &lt;hidebug/hidebug\_type.h&gt;

****库：**** libohhidebug.so

****系统能力：**** SystemCapability.HiviewDFX.HiProfiler.HiDebug

****起始版本：**** 12

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [HiDebug\_ThreadCpuUsage](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-threadcpuusage/capi-hidebug-hidebug-threadcpuusage) | HiDebug\_ThreadCpuUsage | 应用程序所有线程的CPU使用率结构体定义。 |
| [HiDebug\_SystemMemInfo](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-systemmeminfo/capi-hidebug-hidebug-systemmeminfo) | HiDebug\_SystemMemInfo | 系统内存信息结构类型定义。 |
| [HiDebug\_NativeMemInfo](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativememinfo/capi-hidebug-hidebug-nativememinfo) | HiDebug\_NativeMemInfo | 应用程序进程本机内存信息结构类型定义。 |
| [HiDebug\_MemoryLimit](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-memorylimit/capi-hidebug-hidebug-memorylimit) | HiDebug\_MemoryLimit | 应用程序进程内存限制结构类型定义。 |
| [HiDebug\_JsStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-jsstackframe/capi-hidebug-hidebug-jsstackframe) | HiDebug\_JsStackFrame | js栈帧内容的定义。 |
| [HiDebug\_NativeStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativestackframe/capi-hidebug-hidebug-nativestackframe) | HiDebug\_NativeStackFrame | native栈帧内容的定义。 |
| [HiDebug\_StackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-stackframe/capi-hidebug-hidebug-stackframe) | HiDebug\_StackFrame | 栈帧内容的定义。 |
| [HiDebug\_MallocDispatch](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch) | HiDebug\_MallocDispatch | 应用程序进程可替换/恢复的HiDebug\_MallocDispatch表结构类型定义。 |
| [HiDebug\_GraphicsMemorySummary](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-graphicsmemorysummary/capi-hidebug-hidebug-graphicsmemorysummary) | HiDebug\_GraphicsMemorySummary | 应用图形显存占用详情的结构定义。 |
| [HiDebug\_ProcessSamplerConfig](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-processsamplerconfig/capi-hidebug-hidebug-processsamplerconfig) | HiDebug\_ProcessSamplerConfig | 采样配置的结构定义。 |
| [HiDebug\_Backtrace\_Object\_\_\*](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-backtrace-object--8h/capi-hidebug-hidebug-backtrace-object--8h) | HiDebug\_Backtrace\_Object | 用于栈回溯及栈解析的对象。 |
| [HiDebug\_ThreadCpuUsage\*](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-threadcpuusage/capi-hidebug-hidebug-threadcpuusage) | HiDebug\_ThreadCpuUsagePtr | HiDebug\_ThreadCpuUsage指针定义。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [HiDebug\_ErrorCode](#hidebug_errorcode) | HiDebug\_ErrorCode | 错误码定义。 |
| [HiDebug\_TraceFlag](#hidebug_traceflag) | HiDebug\_TraceFlag | 采集trace线程的类型。 |
| [HiDebug\_StackFrameType](#hidebug_stackframetype) | HiDebug\_StackFrameType | 栈帧类型的枚举值定义。 |
| [HiDebug\_CrashObjType](#hidebug_crashobjtype) | HiDebug\_CrashObjType | 维测信息数据类型的枚举。 |

### 宏定义

| 名称 | 描述 |
| --- | --- |
| [HIDEBUG\_TRACE\_TAG\_FFRT](#hidebug_trace_tag_ffrt) (1ULL << 13) | FFRT任务标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_COMMON\_LIBRARY](#hidebug_trace_tag_common_library) (1ULL << 16) | 公共库子系统标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_HDF](#hidebug_trace_tag_hdf) (1ULL << 18) | HDF子系统标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_NET](#hidebug_trace_tag_net) (1ULL << 23) | 网络标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_NWEB](#hidebug_trace_tag_nweb) (1ULL << 24) | NWeb标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_AUDIO](#hidebug_trace_tag_distributed_audio) (1ULL << 27) | 分布式音频标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_FILE\_MANAGEMENT](#hidebug_trace_tag_file_management) (1ULL << 29) | 文件管理标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_OHOS](#hidebug_trace_tag_ohos) (1ULL << 30) | OHOS通用标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_ABILITY\_MANAGER](#hidebug_trace_tag_ability_manager) (1ULL << 31) | Ability Manager标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_CAMERA](#hidebug_trace_tag_camera) (1ULL << 32) | 相机模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_MEDIA](#hidebug_trace_tag_media) (1ULL << 33) | 媒体模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_IMAGE](#hidebug_trace_tag_image) (1ULL << 34) | 图像模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_AUDIO](#hidebug_trace_tag_audio) (1ULL << 35) | 音频模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_DATA](#hidebug_trace_tag_distributed_data) (1ULL << 36) | 分布式数据管理器模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_GRAPHICS](#hidebug_trace_tag_graphics) (1ULL << 38) | 图形模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_ARKUI](#hidebug_trace_tag_arkui) (1ULL << 39) | ArkUI开发框架标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_NOTIFICATION](#hidebug_trace_tag_notification) (1ULL << 40) | 通知模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_MISC](#hidebug_trace_tag_misc) (1ULL << 41) | MISC模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_MULTIMODAL\_INPUT](#hidebug_trace_tag_multimodal_input) (1ULL << 42) | 多模态输入模块标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_RPC](#hidebug_trace_tag_rpc) (1ULL << 46) | RPC标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_ARK](#hidebug_trace_tag_ark) (1ULL << 47) | JSVM虚拟机标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_WINDOW\_MANAGER](#hidebug_trace_tag_window_manager) (1ULL << 48) | 窗口管理器标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_SCREEN](#hidebug_trace_tag_distributed_screen) (1ULL << 50) | 分布式屏幕标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_CAMERA](#hidebug_trace_tag_distributed_camera) (1ULL << 51) | 分布式相机标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_HARDWARE\_FRAMEWORK](#hidebug_trace_tag_distributed_hardware_framework) (1ULL << 52) | 分布式硬件框架标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_GLOBAL\_RESOURCE\_MANAGER](#hidebug_trace_tag_global_resource_manager) (1ULL << 53) | 全局资源管理器标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_HARDWARE\_DEVICE\_MANAGER](#hidebug_trace_tag_distributed_hardware_device_manager) (1ULL << 54) | 分布式硬件设备管理器标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_SAMGR](#hidebug_trace_tag_samgr) (1ULL << 55) | SA标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_POWER\_MANAGER](#hidebug_trace_tag_power_manager) (1ULL << 56) | 电源管理器标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_SCHEDULER](#hidebug_trace_tag_distributed_scheduler) (1ULL << 57) | 分布式调度程序标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_INPUT](#hidebug_trace_tag_distributed_input) (1ULL << 59) | 分布式输入标签。  ****起始版本：**** 12 |
| [HIDEBUG\_TRACE\_TAG\_BLUETOOTH](#hidebug_trace_tag_bluetooth) (1ULL << 60) | 蓝牙标签。  ****起始版本：**** 12 |

## 枚举类型说明

### HiDebug\_ErrorCode

```
enum HiDebug_ErrorCode
```

****描述****

错误码定义。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| HIDEBUG\_SUCCESS = 0 | 成功。 |
| HIDEBUG\_INVALID\_ARGUMENT = 401 | 无效参数，可能的原因： 1.参数传值问题；2.参数类型问题。 |
| HIDEBUG\_TRACE\_CAPTURED\_ALREADY = 11400102 | 重复采集。 |
| HIDEBUG\_NO\_PERMISSION = 11400103 | 没有写文件的权限。 |
| HIDEBUG\_TRACE\_ABNORMAL = 11400104 | 系统内部错误。 |
| HIDEBUG\_NO\_TRACE\_RUNNING = 11400105 | 当前没有trace正在运行。 |
| HIDEBUG\_INVALID\_SYMBOLIC\_PC\_ADDRESS = 11400200 | 传入符号解析函数的pc地址是无效的。  ****起始版本：**** 20。 |
| HIDEBUG\_NOT\_SUPPORTED = 11400300 | 当前设备不支持。  ****起始版本：**** 22 |
| HIDEBUG\_UNDER\_SAMPLING = 11400301 | 当前进程正在采样。  ****起始版本：**** 22 |
| HIDEBUG\_RESOURCE\_UNAVAILABLE = 11400302 | 采样资源不可用。  ****起始版本：**** 22 |

### HiDebug\_TraceFlag

```
enum HiDebug_TraceFlag
```

****描述****

采集trace线程的类型。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| HIDEBUG\_TRACE\_FLAG\_MAIN\_THREAD = 1 | 只采集当前应用主线程。 |
| HIDEBUG\_TRACE\_FLAG\_ALL\_THREADS = 2 | 采集当前应用下所有线程。 |

### HiDebug\_StackFrameType

```
enum HiDebug_StackFrameType
```

****描述****

栈帧类型的枚举值定义。

****起始版本：**** 20

| 枚举项 | 描述 |
| --- | --- |
| HIDEBUG\_STACK\_FRAME\_TYPE\_JS = 1 | js类型栈帧。 |
| HIDEBUG\_STACK\_FRAME\_TYPE\_NATIVE = 2 | native类型栈帧。 |

### HiDebug\_CrashObjType

```
enum HiDebug_CrashObjType
```

****描述****

维测信息数据类型的枚举。

****起始版本：**** 23

| 枚举项 | 描述 |
| --- | --- |
| HIDEBUG\_CRASHOBJ\_STRING = 0 | 字符串 |
| HIDEBUG\_CRASHOBJ\_MEMORY\_64B = 1 | 64字节内存块 |
| HIDEBUG\_CRASHOBJ\_MEMORY\_256B = 2 | 256字节内存块 |
| HIDEBUG\_CRASHOBJ\_MEMORY\_1024B = 3 | 1024字节内存块 |
| HIDEBUG\_CRASHOBJ\_MEMORY\_2048B = 4 | 2048字节内存块 |
| HIDEBUG\_CRASHOBJ\_MEMORY\_4096B = 5 | 4096字节内存块 |

## 宏定义说明

### HIDEBUG\_TRACE\_TAG\_FFRT

```
#define HIDEBUG_TRACE_TAG_FFRT (1ULL << 13)
```

****描述****

FFRT任务标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_COMMON\_LIBRARY

```
#define HIDEBUG_TRACE_TAG_COMMON_LIBRARY (1ULL << 16)
```

****描述****

公共库子系统标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_HDF

```
#define HIDEBUG_TRACE_TAG_HDF (1ULL << 18)
```

****描述****

HDF子系统标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_NET

```
#define HIDEBUG_TRACE_TAG_NET (1ULL << 23)
```

****描述****

网络标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_NWEB

```
#define HIDEBUG_TRACE_TAG_NWEB (1ULL << 24)
```

****描述****

NWeb标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_AUDIO

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO (1ULL << 27)
```

****描述****

分布式音频标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_FILE\_MANAGEMENT

```
#define HIDEBUG_TRACE_TAG_FILE_MANAGEMENT (1ULL << 29)
```

****描述****

文件管理标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_OHOS

```
#define HIDEBUG_TRACE_TAG_OHOS (1ULL << 30)
```

****描述****

OHOS通用标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_ABILITY\_MANAGER

```
#define HIDEBUG_TRACE_TAG_ABILITY_MANAGER (1ULL << 31)
```

****描述****

Ability Manager标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_CAMERA

```
#define HIDEBUG_TRACE_TAG_CAMERA (1ULL << 32)
```

****描述****

相机模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_MEDIA

```
#define HIDEBUG_TRACE_TAG_MEDIA (1ULL << 33)
```

****描述****

媒体模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_IMAGE

```
#define HIDEBUG_TRACE_TAG_IMAGE (1ULL << 34)
```

****描述****

图像模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_AUDIO

```
#define HIDEBUG_TRACE_TAG_AUDIO (1ULL << 35)
```

****描述****

音频模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_DATA

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA (1ULL << 36)
```

****描述****

分布式数据管理器模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_GRAPHICS

```
#define HIDEBUG_TRACE_TAG_GRAPHICS (1ULL << 38)
```

****描述****

图形模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_ARKUI

```
#define HIDEBUG_TRACE_TAG_ARKUI (1ULL << 39)
```

****描述****

ArkUI开发框架标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_NOTIFICATION

```
#define HIDEBUG_TRACE_TAG_NOTIFICATION (1ULL << 40)
```

****描述****

通知模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_MISC

```
#define HIDEBUG_TRACE_TAG_MISC (1ULL << 41)
```

****描述****

MISC模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_MULTIMODAL\_INPUT

```
#define HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT (1ULL << 42)
```

****描述****

多模态输入模块标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_RPC

```
#define HIDEBUG_TRACE_TAG_RPC (1ULL << 46)
```

****描述****

RPC标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_ARK

```
#define HIDEBUG_TRACE_TAG_ARK (1ULL << 47)
```

****描述****

JSVM虚拟机标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_WINDOW\_MANAGER

```
#define HIDEBUG_TRACE_TAG_WINDOW_MANAGER (1ULL << 48)
```

****描述****

窗口管理器标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_SCREEN

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN (1ULL << 50)
```

****描述****

分布式屏幕标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_CAMERA

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA (1ULL << 51)
```

****描述****

分布式相机标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_HARDWARE\_FRAMEWORK

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK (1ULL << 52)
```

****描述****

分布式硬件框架标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_GLOBAL\_RESOURCE\_MANAGER

```
#define HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER (1ULL << 53)
```

****描述****

全局资源管理器标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_HARDWARE\_DEVICE\_MANAGER

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER (1ULL << 54)
```

****描述****

分布式硬件设备管理器标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_SAMGR

```
#define HIDEBUG_TRACE_TAG_SAMGR (1ULL << 55)
```

****描述****

SA标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_POWER\_MANAGER

```
#define HIDEBUG_TRACE_TAG_POWER_MANAGER (1ULL << 56)
```

****描述****

电源管理器标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_SCHEDULER

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER (1ULL << 57)
```

****描述****

分布式调度程序标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_DISTRIBUTED\_INPUT

```
#define HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT (1ULL << 59)
```

****描述****

分布式输入标签。

****起始版本：**** 12

### HIDEBUG\_TRACE\_TAG\_BLUETOOTH

```
#define HIDEBUG_TRACE_TAG_BLUETOOTH (1ULL << 60)
```

****描述****

蓝牙标签。

****起始版本：**** 12
