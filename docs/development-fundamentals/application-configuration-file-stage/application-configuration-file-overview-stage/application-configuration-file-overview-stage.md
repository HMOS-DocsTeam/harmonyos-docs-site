---
title: "应用配置文件概述（Stage模型）"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-configuration-file-overview-stage
kit: getting-started
last_updated: "2026-04-22"
---

# 应用配置文件概述（Stage模型）

每个应用项目的代码目录下必须包含应用配置文件，这些配置文件会向编译工具、操作系统和应用市场提供应用的基本信息。

在基于Stage模型开发的应用项目代码下，都存在一个app.json5配置文件、以及一个或多个module.json5配置文件。

![](../../../images/9edd7d27/note_3.0-zh-cn.png) 

编译后，单个模块的编译产物中，app.json5和module.json5的内容会合并到一个module.json文件中，详情参考[编译态包结构](/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage#编译态包结构)的编译打包后的视图。

[app.json5配置文件](/development-fundamentals/application-configuration-file-stage/app-configuration-file)包含以下内容：

- 应用的全局配置信息，包含应用的Bundle名称、开发厂商、版本号等基本信息。
- 特定设备类型的配置信息。

[module.json5配置文件](/development-fundamentals/application-configuration-file-stage/module-configuration-file)包含以下内容：

- [Module](/development-fundamentals/application-package-fundamentals/application-package-overview#module类型)的基本配置信息，包含Module名称、类型、描述、支持的设备类型等基本信息。
- 应用组件信息，包含[UIAbility组件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities标签)和[ExtensionAbility组件](/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities标签)的描述信息。
- 应用运行过程中需要的权限信息。
