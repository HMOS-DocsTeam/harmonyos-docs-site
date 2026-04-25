---
title: "部署云对象"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-deploycloudobj
kit: devtools/setup
last_updated: "2026-04-24"
---

# 部署云对象

完成云对象代码开发后，您可将云对象部署到AGC云端，支持单个部署和批量部署。

单个部署仅部署选中的云对象，批量部署则会将整个“cloudfunctions”目录下的所有云对象同时部署到AGC云端。

下文以部署单个云对象“my-cloud-object”为例，介绍如何部署云对象。

1. 右击“my-cloud-object”云对象目录，选择“Deploy 'my-cloud-object'”。

   ![](../../../../../../../images/4e634fe7/note_3.0-zh-cn.png) 

   如需批量部署多个云对象，右击“cloudfunctions”目录，选择“Deploy Cloud Functions”即可部署该目录下所有云对象。如“cloudfunctions”目录下同时存在云函数和云对象，云函数和云对象将会被一起部署到AGC云端。

   ![](../../../../../../../images/d2f4896c/zh-cn_image_0000002179338528.png)
2. 您可在底部状态栏右侧查看云对象打包与部署进度。

   请您耐心等待，直至出现“Deploy successfully”消息，表示当前云对象已成功部署。

   ![](../../../../../../../images/4fcb6d69/zh-cn_image_0000002214704473.png)
3. 在菜单栏选择“Tools > CloudDev”。

   ![](../../../../../../../images/ec538af9/zh-cn_image_0000002179498224.png)
4. 在打开的CloudDev面板中，点击“Serverless > Cloud Functions”下的“Go to console”，进入当前项目的云函数服务页面。

   ![](../../../../../../../images/06b8aed8/zh-cn_image_0000002214858857.png)
5. 查看到“my-cloud-object”云对象已成功部署至AGC云端，云对象名称与本地工程的云对象目录名相同。

   部署成功后，您便可以从端侧调用云对象了，具体请参见[在端侧调用云对象](/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj)。

   ![](../../../../../../../images/a6399110/zh-cn_image_0000002179338540.png)
