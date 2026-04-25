---
title: "ohpm-repo restart"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-restart
kit: devtools/setup
last_updated: "2026-04-24"
---

# ohpm-repo restart

重新启动ohpm-repo服务。

## 前提条件

已成功执行[install命令](/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-install)，并按要求刷新环境变量。

## 命令格式

```
ohpm-repo restart
```

## 功能描述

停止当前ohpm-repo服务，重新启动一个新的ohpm-repo服务。

![](../../../../../images/e59377ef/note_3.0-zh-cn.png) 

启动时将ohpm-repo服务的pid存放到&lt;deploy\_root&gt;/runtime/.pid文件，其中&lt;deploy\_root&gt;为[ohpm-repo私仓部署目录](/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)。

## 示例

执行以下命令：

```
ohpm-repo restart
```

结果示例：

![](../../../../../images/749ea923/zh-cn_image_0000002561751491.png "点击放大")
