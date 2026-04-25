---
title: "概述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-overview
kit: devtools/setup
last_updated: "2026-04-24"
---

# 概述

ohpm-repo是一个搭建轻量级的ohpm私仓服务的工具。它与ohpm包管理器兼容，并按需缓存所有依赖项，加速私有网络中的安装。

## 私有性

所发布的三方库都是私有的，只能根据配置进行访问。

## 缓存

ohpm-repo根据需要缓存所有依赖项，加快私有网络的安装速度。

## 部署

ohpm-repo支持单点部署和多实例部署。

![](../../../../images/26dc8c42/note_3.0-zh-cn.png) 

- 单点部署：ohpm-repo仅部署在一台机器上使用。
- 多实例部署：ohpm-repo会部署到多台机器中，具有相同的配置内容，并且共享数据存储空间。
- 单点部署的数据如果需要迁移至多实例部署，请参考[数据迁移指导](/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-data-migration)。
