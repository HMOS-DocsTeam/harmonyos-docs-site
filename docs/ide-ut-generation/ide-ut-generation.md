---
title: "单元测试用例生成"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ut-generation
kit: devtools/ai-coding
last_updated: "2026-04-24"
---

# 单元测试用例生成

根据选中的ArkTS方法名称，CodeGenie支持自动生成对应单元测试用例，提升测试覆盖率。

## 使用约束

- 该功能最多支持解读30000字符以内的代码片段。
- ArkUI代码、生命周期函数、@Extend/@Styles/@Builder修饰的函数、private修饰的私有函数不支持生成单元测试用例。
- 单元测试用例生成时使用HarmonyOS Ask智能体。

## 操作步骤

1. 点击页面右侧菜单栏CodeGenie图标，完成登录后，在ArkTS文档中，光标放置于方法名称上或框选完整的待测试方法代码块，右键选择****CodeGenie > Generate UT****，开始生成单元测试用例。

   ![](../images/5cc763da/zh-cn_image_0000002561752715.png)
2. 在问答对话区生成单元测试用例后，点击Code Genie问答区中![](../images/b5c20ee7/zh-cn_image_0000002530912774.png)可复制生成的代码，点击![](../images/863291d1/zh-cn_image_0000002530752776.png)将生成的代码插入到代码文件，点击![](../images/9193272f/zh-cn_image_0000002530912778.png)弹出文件另存为框，填写文件名称后点击****OK****按钮保存。

   ![](../images/db9dc7a0/zh-cn_image_0000002561752719.png)
3. 生成的单元测试用例文件被保存在待测函数所在模块下的****ohosTest/ets/test****目录，目录结构和待测函数保持一致。

   ![](../images/292393c3/zh-cn_image_0000002561832699.png)
4. 运行单元测试用例，具体请参考[运行测试用例](/ide-app-test/ide-test/ide-code-test/ide-instrument-test#section14415226122419)。
