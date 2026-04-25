---
title: "意图装饰器生成和小艺智能体创建"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-intent2
kit: devtools/ai-coding
last_updated: "2026-04-24"
---

# 意图装饰器生成和小艺智能体创建

通过装饰类或方法可以将应用的功能定义为"意图"，然后将应用功能以"意图"形式集成至系统入口。用户通过系统入口（如语音助手、智能推荐卡片）触发意图执行，即可便捷使用应用提供的功能。

从DevEco Studio 6.0.0 Beta2开始，CodeGenie新增通过装饰器开发意图的功能，支持生成五类意图装饰器。同时，DevEco Studio新增Application Agent入口，通过该入口可完成意图插件注册、智能体创建等，提升开发效率。

## 使用约束

- 使用API 20及以上版本。
- 仅支持使用团队账号登录时，添加意图插件。个人加入目标团队方式具体可参考[添加成员](https://developer.huawei.com/consumer/cn/doc/app/agc-help-manageaccount-0000002306610129#section151241455193313)。
- 应用在AGC已注册，具体可参考[创建HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1772711713288)。
- 生成意图装饰器时使用HarmonyOS Ask智能体。

## 意图装饰器分类

CodeGenie提供了几类意图装饰器，开发者可根据业务场景进行选择，具体请参考[意图装饰器定义](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator)：

- @InsightIntentLink装饰器：在class头部或内部位置唤起意图装饰器，在class上方插入生成的代码。
- @InsightIntentPage装饰器：在@Component头部/struct结构体内部/选中整个结构体区域唤起意图装饰器，在@Entry上方插入生成的代码。
- @InsightIntentFunction装饰器：在类中静态方法区域唤起意图装饰器，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。
- @InsightIntentForm装饰器：在继承FormExtensionAbility的class头部或内部唤起意图装饰器，在class上方插入生成的代码。
- @InsightIntentEntry装饰器：在直接继承InsightIntentEntryExecutor的class头部或内部唤起意图装饰器，在class上方插入生成的代码。

### @InsightIntentLink装饰器

1. 打开module.json5文件，配置****abilities > skills > uris****字段。uri格式要求请参考[应用链接说明](/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config)。

   ![](../images/a2ad9723/zh-cn_image_0000002530913144.png "点击放大")
2. 在class头部或内部位置，右键选择 ****CodeGenie > Insight Intent > Link Insight Intent****。

   ![](../images/e74c072d/zh-cn_image_0000002561753097.png)
3. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](../images/d28c2f81/zh-cn_image_0000002561753095.png)
4. 生成结果后，点击对话框中生成代码块右上方的****插入****按钮，在class上方插入生成的代码。开发者可基于结果微调，实现意图调用。

   ![](../images/949d830d/zh-cn_image_0000002530913156.png)

### @InsightIntentPage装饰器

基于组件导航（Navigation）的子页面使用，@Component和struct需成对出现。

1. 在@Component头部\struct结构体内部\选中整个结构体区域，点击****右键 > CodeGenie > Insight Intent > Page Insight Intent****。

   ![](../images/63d17fa7/zh-cn_image_0000002561753099.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](../images/dd9299e5/zh-cn_image_0000002561833081.png)
3. 生成结果后，点击对话框中生成代码块右上方的****插入****按钮，在@Entry上方插入生成的代码。开发者可基于结果微调，实现意图调用。

   ![](../images/adca7086/zh-cn_image_0000002530753160.png)

### @InsightIntentFunction装饰器

1. 在类中静态方法区域，右键选择 ****CodeGenie > Insight Intent > Function Insight Intent****。

   ![](../images/983525d8/zh-cn_image_0000002530753166.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](../images/e90dc820/zh-cn_image_0000002561833085.png)
3. 生成结果后，点击对话框中生成代码块右上方的****插入****按钮，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。开发者可基于结果微调，实现意图调用。

   ![](../images/37e48169/zh-cn_image_0000002561833083.png)

### @InsightIntentForm装饰器

1. 基于FormExtensionAbility使用，在继承FormExtensionAbility的class头部或内部，右键选择****CodeGenie > Insight Intent > Form Insight Intent****。

   ![](../images/2775851a/zh-cn_image_0000002561833069.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](../images/17cc9c5a/zh-cn_image_0000002561833067.png)
3. 生成结果后，点击对话框中生成代码块右上方的****插入****按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。

   ![](../images/f73a2b80/zh-cn_image_0000002561753107.png)

### @InsightIntentEntry装饰器

1. 基于InsightIntentEntryExecutor使用，在直接继承InsightIntentEntryExecutor的class头部或内部，右键选择****CodeGenie > Insight Intent > Entry Insight Intent****。

   ![](../images/e686759c/zh-cn_image_0000002530913148.png)
2. 意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。

   ![](../images/acf0ced7/zh-cn_image_0000002561833075.png)
3. 生成结果后，点击对话框中生成代码块右上方的****插入****按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。

   ![](../images/f00eef0f/zh-cn_image_0000002530753154.png)

## 生成意图插件和创建小艺智能体

1. 点击DevEco Studio右上角![](../images/9b3dcac8/zh-cn_image_0000002561753085.png)图标登录个人账号，再切换至个人所在的团队账号。

   ![](../images/73f653f0/note_3.0-zh-cn.png) 

   - 个人账号需要完成实名认证，具体请参考[实名认证](https://developer.huawei.com/consumer/cn/doc/start/rna-0000001062530373)。
   - 如下企业开发者账号为某团队账号名称，仅供参考。

   ![](../images/29307d5a/zh-cn_image_0000002530913162.png)
2. 在意图注解代码块内部任意位置，右键选择****CodeGenie > Add Intent Plugin****，生成的意图注解插件将注册到小艺智能平台中。

   ![](../images/2c9b6d6e/zh-cn_image_0000002561833073.png)
3. 在DevEco Studio菜单栏点击****View > Tool Windows > Application Agent**** ，打开内嵌的小艺智能平台新建智能体和添加插件。小艺智能平台更多具体操作可参考[鸿蒙智能体](https://developer.huawei.com/consumer/cn/doc/service/developer-guide-0000002469667881)。
