---
title: "（可选）同步云端代码至DevEco Studio工程"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-sync
kit: devtools/setup
last_updated: "2026-04-24"
---

# （可选）同步云端代码至DevEco Studio工程

DevEco Studio还支持您将AGC云端当前项目下的代码同步至本地工程，包括之前从本地部署到AGC云端的代码、以及在AGC云端编写的代码，以保证云端和本地的版本一致性，方便您的日常开发。

云端代码同步目前支持以下模式：[仅同步云函数/云对象](#section588213529814)、[仅同步云数据库](#section474014335350)、[一键同步云侧代码](#section1198316575339)。

## 同步云函数/云对象

![](../../../../../images/0d6b0e5c/note_3.0-zh-cn.png) 

对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。

### 同步单个云函数/云对象

云函数/云对象部署到AGC云端后，如在云端又进行了新改动，您可再将云端的云函数/云对象同步到本地工程。云函数/云对象的同步方式一致，下文以云对象为例进行说明。

1. 右击云对象目录，选择“Sync '**云对象名**'”。下文以云对象“id-generator”为例。

   ![](../../../../../images/78cba50c/zh-cn_image_0000002214704461.png)
2. 在确认弹框中点击“Overwrite”，AGC云端的云对象“id-generator”将覆盖更新本地云对象“id-generator”。

   ![](../../../../../images/6e48015d/zh-cn_image_0000002214704477.png)
3. 等待同步完成，“cloudfunctions”目录下将生成从云端同步下来的云对象“id-generator”，同时将本地原云对象“id-generator”备份在同路径下。

   ![](../../../../../images/d06354b2/note_3.0-zh-cn.png) 

   后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   ![](../../../../../images/71665dc4/zh-cn_image_0000002179498228.png)

### 批量同步云函数/云对象

批量同步云函数/云对象即将AGC云端当前项目下的所有云函数/云对象同步至本地工程。

1. 右击“cloudfunctions”目录，选择“Sync Cloud Functions”。

   ![](../../../../../images/8fc78c4c/zh-cn_image_0000002179338512.png)
2. 弹窗提示您本地工程下存在同名云函数/云对象。
   - 选择“Skip”，同步时将跳过本地同名云函数/云对象。
   - 选择“Overwrite”，AGC云端的云函数/云对象将覆盖更新本地同名云函数/云对象。

   ![](../../../../../images/297b0686/zh-cn_image_0000002214704441.png)
3. 如选择“Skip”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的不同步。

   如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，上图中本地已存在的云函数/云对象未被覆盖更新。

   ![](../../../../../images/b44eea92/zh-cn_image_0000002214704485.png)
4. 如选择“Overwrite”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象；本地同名云函数/云对象也被覆盖更新，同时更新前的原云函数/云对象会备份在同路径下。

   如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，本地已存在的几个云函数/云对象也被覆盖更新，并且均生成了备份文件“xxxx-**备份时间**.backup”。

   ![](../../../../../images/ec5a89cc/note_3.0-zh-cn.png) 

   后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   ![](../../../../../images/5385dddc/zh-cn_image_0000002179338508.png)

## 同步云数据库

![](../../../../../images/4b1e0454/note_3.0-zh-cn.png) 

目前仅支持同步对象类型。

### 同步单个对象类型

对象类型部署到AGC云端后，如又发生了新改动，您可再将云端的对象类型同步到本地。

1. 右击对象类型JSON文件（以“objecttype1.json”为例），选择“Sync 'objecttype1.json'”。

   ![](../../../../../images/ec2e4baf/zh-cn_image_0000002179498216.png)
2. 在确认弹框中点击“Overwrite”，AGC云端的对象类型“objecttype1.json”将覆盖更新本地对象类型“objecttype1.json”。

   ![](../../../../../images/73ff83d2/zh-cn_image_0000002214704465.png)
3. 等待同步完成，“objecttype”目录下将生成从云端同步下来的对象类型“objecttype1.json”。
   - 如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
   - 如果云端和本地的同名对象类型内容完全一致，则不生成备份。

   ![](../../../../../images/24cd78f4/note_3.0-zh-cn.png) 

   后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   ![](../../../../../images/cc903342/zh-cn_image_0000002214704445.png)

### 批量同步对象类型

您可以将AGC云端当前项目下所有的对象类型一键同步至本地。

1. 右击“objecttype”目录，选择“Sync Object Type”。

   ![](../../../../../images/a3e2debe/zh-cn_image_0000002179338532.png)

2. 弹窗提示您本地工程下已存在同名对象类型，如下图“Post.json”与“objecttype1.json”。
   - 选择“Skip”，同步时将跳过本地同名对象类型。
   - 选择“Overwrite”，AGC云端的对象类型将覆盖更新本地同名对象类型。

   ![](../../../../../images/c2ea2e6c/zh-cn_image_0000002179498208.png)
3. 如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，本地已存在的不同步。

   如下图，“objecttype”目录下新增了云端同步下来的“test\_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。

   ![](../../../../../images/670fd021/zh-cn_image_0000002179498196.png)
4. 如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的所有对象类型，本地已存在的对象类型也被覆盖更新。
   - 如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
   - 如果云端和本地的同名对象类型内容完全一致，则不生成备份。

   如下图，“objecttype”目录下生成了“test\_object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test\_object.json”为从云端新同步下来的对象类型；“objecttype1.json”本地已存在且与云端内容一致，不生成备份；“Post.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“Post.json”备份为“Post.json-**备份时间**.backup”。

   ![](../../../../../images/f45af9b0/note_3.0-zh-cn.png) 

   后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   ![](../../../../../images/265bb69c/zh-cn_image_0000002214704489.png)

## 一键同步云侧代码

![](../../../../../images/ed944717/note_3.0-zh-cn.png) 

对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。

1. 右击云开发工程（“CloudProgram”），选择“Sync Cloud Program”。

   ![](../../../../../images/ca66ca1c/zh-cn_image_0000002214858849.png)
2. 弹窗提示您本地工程下已存在同名对象类型/云函数/云对象。
   - 选择“Skip”，同步时将跳过本地同名对象类型/云函数/云对象。
   - 选择“Overwrite”，AGC云端的对象类型/云函数/云对象将覆盖更新本地同名对象类型/云函数/云对象。

   ![](../../../../../images/0809fb2a/zh-cn_image_0000002214858861.png)
3. 如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型均不同步。

   如下图：

   - “objecttype”目录下新增了云端同步下来的“test\_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。
   - “cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”未被覆盖更新。

   ![](../../../../../images/e59c372a/zh-cn_image_0000002179498236.png)
4. 如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型也被覆盖更新。
   - 如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。
   - 如果云端和本地的同名对象类型内容完全一致，则不生成备份。
   - 无论云端和本地的同名云函数/云对象代码是否一致，均会将本地原云函数/云对象备份在同路径下。

   如下图：

   - “objecttype”目录下生成了“test \_object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test \_object.json”为从云端新同步下来的对象类型；“Post.json”本地已存在且与云端内容一致，不生成备份；“objecttype1.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“objecttype1.json”备份为“objecttype1.json-**备份时间**.backup”。
   - “cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”也被覆盖更新，并且均生成了备份文件“xxxx-**备份时间**.backup”。

     ![](../../../../../images/60f79ab3/note_3.0-zh-cn.png) 

     后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。

   ![](../../../../../images/53745d86/zh-cn_image_0000002179338516.png)
