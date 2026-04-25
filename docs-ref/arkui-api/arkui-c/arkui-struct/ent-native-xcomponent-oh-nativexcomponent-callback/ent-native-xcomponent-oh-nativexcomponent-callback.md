---
title: "OH_NativeXComponent_Callback"
sidebar_position: 56
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ent-native-xcomponent-oh-nativexcomponent-callback
kit: 应用框架
last_updated: "2026-04-22"
slug: ent-native-xcomponent-oh-nativexcomponent-callback
---

# OH\_NativeXComponent\_Callback

```
typedef struct OH_NativeXComponent_Callback {...} OH_NativeXComponent_Callback
```

## 概述

注册Surface生命周期和触摸事件回调。

****起始版本：**** 8

****相关模块：**** [OH\_NativeXComponent Native XComponent](/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent)

****所在头文件：**** [native\_interface\_xcomponent.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void (\*OnSurfaceCreated)(OH\_NativeXComponent\* component, void\* window)](#onsurfacecreated) | 创建Surface时调用。 |
| [void (\*OnSurfaceChanged)(OH\_NativeXComponent\* component, void\* window)](#onsurfacechanged) | 当Surface改变时调用。 |
| [void (\*OnSurfaceDestroyed)(OH\_NativeXComponent\* component, void\* window)](#onsurfacedestroyed) | 当Surface被销毁时调用。 |
| [void (\*DispatchTouchEvent)(OH\_NativeXComponent\* component, void\* window)](#dispatchtouchevent) | 当触摸事件被触发时调用。 |

## 成员函数说明

### OnSurfaceCreated()

```
void (*OnSurfaceCreated)(OH_NativeXComponent* component, void* window)
```

****描述：****

创建Surface时调用。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void\* window | 表示NativeWindow句柄。  通过XComponent生命周期获取的NativeWindow本身由系统侧持有了一次引用计数，并会在OnSurfaceDestroyed回调触发之后将引用计数减一，引用计数归零后NativeWindow将被释放。 |

### OnSurfaceChanged()

```
void (*OnSurfaceChanged)(OH_NativeXComponent* component, void* window)
```

****描述：****

当Surface改变时调用。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void\* window | 表示NativeWindow句柄。 |

### OnSurfaceDestroyed()

```
void (*OnSurfaceDestroyed)(OH_NativeXComponent* component, void* window)
```

****描述：****

当Surface被销毁时调用。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void\* window | 表示NativeWindow句柄。 |

### DispatchTouchEvent()

```
void (*DispatchTouchEvent)(OH_NativeXComponent* component, void* window)
```

****描述：****

当触摸事件被触发时调用。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)\* component | 表示指向[OH\_NativeXComponent](/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void\* window | 表示NativeWindow句柄。 |
