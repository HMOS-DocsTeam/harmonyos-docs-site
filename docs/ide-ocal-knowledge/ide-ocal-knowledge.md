---
title: "本地知识库配置"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ocal-knowledge
kit: devtools/ai-coding
last_updated: "2026-04-24"
---

# 本地知识库配置

从DevEco Studio 6.0.0 Beta5开始，CodeGenie允许用户导入设计文档和代码等文件形成文档集，多个文档集组合成本地知识库。智能问答时，根据用户输入内容检索本地知识库以提升AI生成的能力。

1. 点击****File > Settings****（macOS为****DevEco Studio > Preferences/Settings****） ****> CodeGenie********> Knowledge >**** ****Docs****，或在DevEco Studio右侧边栏点击****CodeGenie****（或输入快捷键****Alt/Option+U****） ****>**** ****@********Add Context**** ****> Docs > Set Local Knowledge Base****，进入配置页面。

   ![](../images/699239a0/zh-cn_image_0000002561833287.png)
2. 首次打开时，点击![](../images/3da2d2ca/zh-cn_image_0000002530913360.png "点击放大")按钮，填写相关信息，创建文档集。
   - ****Knowledge Base Path****：知识库保存路径。在同一个路径下保存的文档集，会形成一个知识库。
   - ****Document set name****：文档集名称。
   - ****Description****：可选，文档集描述。

   ![](../images/b2cc72f7/zh-cn_image_0000002561833291.png)
3. 点击![](../images/6f4ceb75/zh-cn_image_0000002561753303.png "点击放大")按钮，添加文档集中的文件，添加成功的文件在下方展示。

   ![](../images/b85fdc8a/note_3.0-zh-cn.png) 

   1. 支持的文件格式：txt、md、json、html、cpp、ets、ts、js。
   2. 单个文档集中文件个数：不超过1000个。
   3. 单个文件大小：不超过10M。
   4. 单个知识库中文档集个数：不超过20个。
   5. 单个知识库大小：不超过50M。

   ![](../images/a189fbd6/zh-cn_image_0000002530913362.png)
4. 点击“****OK****”，完成本地知识库配置和同步，在DevEco Studio页面下方****Storing document set****可查看同步进度。

   ![](../images/a8bb4789/zh-cn_image_0000002561753309.png "点击放大")
5. 同步完成后，在对话框中输入****@****符号选择****Docs**** ，或点击上方****@********Add Context**** ****> Docs**** ，选择需要的文档集。

   ![](../images/686a1c72/zh-cn_image_0000002561833283.png)
6. 选择代码文件进行问答，具体请参考[智能问答](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-harmonyos-ask)
