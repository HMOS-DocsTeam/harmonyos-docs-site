"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["555362"], {
826959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_dataaugmentation_localchatmodel_dataaugmentation_localchatmodel_md_406_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-dataaugmentation-localchatmodel-dataaugmentation-localchatmodel-md-406.json
var site_docs_data_augmentation_kit_guide_dataaugmentation_localchatmodel_dataaugmentation_localchatmodel_md_406_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/dataaugmentation-localchatmodel/dataaugmentation-localchatmodel","title":"端侧问答模型","description":"概述","source":"@site/docs/data-augmentation-kit-guide/dataaugmentation-localchatmodel/dataaugmentation-localchatmodel.md","sourceDirName":"data-augmentation-kit-guide/dataaugmentation-localchatmodel","slug":"/data-augmentation-kit-guide/dataaugmentation-localchatmodel/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-localchatmodel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"端侧问答模型","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataaugmentation-localchatmodel","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"智慧化数据检索-C++","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-retrieval-c/"},"next":{"title":"Form Kit简介","permalink":"/harmonyos-docs-site/form-kit/formkit-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/dataaugmentation-localchatmodel/dataaugmentation-localchatmodel.md


const frontMatter = {
	title: '端侧问答模型',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataaugmentation-localchatmodel',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '端侧问答模型';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "白名单申请",
  "id": "白名单申请",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "完整示例代码",
  "id": "完整示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "端侧问答模型",
        children: "端侧问答模型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用通过RAG接口进行知识问答时，系统会经过以下处理流程：问题分解、查询改写、知识检索和检索生成，该流程需要与大语言模型（LLM）进行多次交互。应用可选择两种部署方案："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用自建的云端大模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "采用Kit提供的端侧问答模型能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择端侧问答模型方案具有以下优势："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "免除云端大模型的运维成本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "增强用户数据安全性（数据在端侧处理）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要申请接口调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端侧问答模型关键接口如下表所示，具体API说明详见API参考。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "init(): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化端侧问答模型，负责拉起模型管理应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chat(info: QuestionInfo, config: Config, callback: AsyncCallback<Answer>): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与端侧模型进行交互，实现端侧模型的问答功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(933455)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型资源来自", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.openharmony.cn/#/model/main",
        children: "Matrix"
      }), "模型库，chat接口默认调用模型为Qwen25-7B-Instruct。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "白名单申请",
      children: "白名单申请"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打开华为开发者联盟的“", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
        children: "在线提单"
      }), "”页面，填写“概述”，端侧模型问答接口调用申请，问题分类选择“HarmonyOS NEXT > 系统 > Data Augmentation Kit”，描述问题详情并单击“提交问题”。提交问题后，有时需要您进一步澄清问题，请及时关注进展并予以回复，以便更好地解决问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513000)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.当前端侧模型问答仅支持PC/2in1设备类型，其它设备类型（Phone、Tablet等）无法使用此能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.为了提供优质的开发体验，当前端侧模型问答接口需要申请，优先处理华为开放生态团队对接的企业方应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321357)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请接口调用信息模板："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用名称：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bundleName：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppID：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持PC/2in1设备类型：是或否。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为开放生态团队对接的企业方应用：是或否。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前鸿蒙化进展：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前已经支持的AI能力：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前行业与用户影响力：xxx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内容信息介绍：xxx。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "问答过程中，端侧模型与LLM通过http请求交互，因此需要为应用申请网络权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// module.json5中配置\"requestPermissions\"字段\n\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用init接口，拉起本地AI模型管理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地AI模型管理首次拉起，弹出隐私声明界面，同意后下载默认模型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地AI模型管理非首次拉起，打开设置>系统>本地AI模型管理，下载默认模型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "等待模型下载完成后，调用chat接口，开始进行端侧问答。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例代码",
      children: "完整示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from \"@kit.BasicServicesKit\";\nimport { localChatModel } from '@kit.DataAugmentationKit'\n\ntype MessageRole = 'system' | 'user' | 'assistant';\n\ninterface ChatMessage {\n  role: MessageRole;\n  content: string;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State title: string = '端侧大模型问答助手';\n  @State isStreamMode: boolean = true;\n  @State messages: ChatMessage[] = [];\n  @State inputText: string = '';\n  @State initFlag: boolean = false;\n  @State isProcessing: boolean = false;\n  @State assistantContent: string = '';\n  @State chatCounter: number = 0;\n\n  // 页面加载时，拉起模型管理应用\n  onPageShow() {\n    console.info('modelChat onPageShow');\n    this.initModel();\n  }\n\n  private scroller: Scroller = new Scroller();\n\n  private scrollToBottom() {\n    setTimeout(() => {\n      this.scroller.scrollEdge(Edge.Bottom);\n    }, 50);\n  }\n\n  private addMessage(role: MessageRole, content: string): void {\n    const newMessage: ChatMessage = {\n      role: role,\n      content: content,\n    };\n    this.messages = [...this.messages, newMessage];\n  }\n\n  private async initModel(): Promise<void> {\n    try {\n      await localChatModel.init();\n      this.initFlag = true;\n      this.addMessage('system', '模型初始化完成！');\n    } catch (err) {\n      const error = err as BusinessError;\n      this.initFlag = false;\n      this.addMessage('system', `模型初始化出错: ${error.message}`);\n    }\n  }\n\n  private async DoChat(questionId: number): Promise<void> {\n    if (!this.inputText.trim() || this.isProcessing) {\n      return;\n    }\n    const userQuestion = this.inputText.trim();\n    if (!userQuestion) {\n      return;\n    }\n    this.inputText = '';\n    this.addMessage('user', userQuestion);\n    this.assistantContent = \"思考中...\";\n    this.isProcessing = true;\n\n    const questionInfo: localChatModel.QuestionInfo = {\n      questionId: questionId,\n      content: userQuestion\n    };\n\n    const localConfig: localChatModel.Config = {\n      isStream: this.isStreamMode\n    };\n\n    const localChatCallback = async (err: BusinessError, ans: localChatModel.Answer): Promise<void> => {\n      this.scrollToBottom();\n      if (err) {\n        if (this.assistantContent == \"思考中...\") {\n          this.assistantContent = \"\";\n          this.isProcessing = false;\n        }\n        // 模型运行相关错误码\n        console.error('modelChat Callback failed:', err.message);\n        this.addMessage('system', `localChatCallback: error code is ${err.code},  ${err.message}`);\n        this.scrollToBottom();\n      }\n      if (ans.content && ans.content.trim() !== '') {\n        if (this.assistantContent == \"思考中...\") {\n          this.assistantContent = \"\";\n        }\n        this.assistantContent += ans.content;\n        this.scrollToBottom();\n      }\n      this.scrollToBottom();\n      if (ans.isFinished) {\n        console.log('modelChat finished');\n        this.addMessage('assistant', this.assistantContent);\n        this.isProcessing = false;\n      }\n\n    };\n    try {\n      console.log('modelChat Starting chat...');\n      localChatModel.chat(questionInfo, localConfig, localChatCallback);\n    } catch (err) {\n      // 入参相关错误码\n      const error = err as BusinessError;\n      console.error('modelChat Chat failed:', error.message);\n      this.addMessage('system', `chat: error code is ${error.code},  ${error.message}`);\n      this.isProcessing = false;\n    }\n  }\n\n  private clearChat(): void {\n    this.messages = [];\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.Top }) {\n      Column() {\n        Row() {\n          Text(this.title)\n            .fontSize(20)\n            .fontWeight(FontWeight.Bold)\n            .fontColor('#1a73e8')\n            .margin({ left: 12 })\n\n          Circle()\n            .width(10)\n            .height(10)\n            .margin({ left: 12 })\n            .fill(this.initFlag ? '#0f0' : '#f00')\n            .opacity(0.8)\n\n          Text(this.initFlag ? '已就绪' : '未就绪')\n            .margin({ left: 6 })\n            .fontSize(12)\n            .fontColor('#666')\n\n          Blank()\n\n          Row() {\n            Button(this.isStreamMode ? '流式' : '非流式')\n              .width(70)\n              .height(25)\n              .fontSize(12)\n              .margin({ right: 20 })\n              .backgroundColor(Color.Gray)\n              .fontColor(Color.White)\n              .borderRadius(12.5)\n              .onClick(() => {\n                this.isStreamMode = !this.isStreamMode;\n                this.addMessage('system', `已切换至 ${this.isStreamMode ? '流式问答' : '非流式问答'} 模式`);\n              })\n          }\n          .margin({ right: 12 })\n        }\n        .width('100%')\n        .height(50)\n        .backgroundColor(Color.White)\n        .borderRadius(16)\n        .shadow({\n          radius: 4,\n          color: '#1a73e888',\n          offsetX: 0,\n          offsetY: 2\n        })\n        .margin({ bottom: 12 })\n\n        // 聊天区域\n        Scroll(this.scroller) {\n          Column() {\n            ForEach(this.messages, (msg: ChatMessage, index: number) => {\n              if (msg.role === 'system') {\n                Row() {\n                  Text(msg.content)\n                    .fontSize(14)\n                    .fontColor('#666')\n                    .textAlign(TextAlign.Center)\n                    .padding(8)\n                }\n                .width('100%')\n                .justifyContent(FlexAlign.Center)\n                .margin({ top: index === 0 ? 0 : 12 })\n              } else if (msg.role === 'user') {\n                Row() {\n                  Blank()\n                  Text(msg.content)\n                    .fontSize(16)\n                    .fontColor(Color.White)\n                    .padding(10)\n                    .backgroundColor('#1a73e8')\n                    .borderRadius(12)\n                }\n                .width('100%')\n                .margin({ top: 12 })\n                .justifyContent(FlexAlign.End)\n              } else if (msg.role === 'assistant') {\n                Row() {\n                  Column() {\n                    Text(msg.content)\n                      .fontSize(16)\n                      .fontColor('#333')\n                      .lineHeight(20)\n                      .padding(10)\n                      .backgroundColor(Color.White)\n                      .borderRadius(12)\n                  }\n                  .borderRadius(12)\n                  .margin({ left: 8 })\n\n                  Blank()\n                }\n                .width('100%')\n                .margin({ top: 12 })\n                .justifyContent(FlexAlign.Start)\n              }\n            }, (msg: ChatMessage) => msg.toString())\n\n            // 加载指示器\n            if (this.isProcessing) {\n              Row() {\n                Column() {\n                  Text(this.assistantContent)\n                    .fontSize(16)\n                    .fontColor('#333')\n                    .lineHeight(20)\n                    .padding(10)\n                    .backgroundColor(Color.White)\n                    .borderRadius(12)\n                }\n                .borderRadius(12)\n                .margin({ left: 8 })\n\n                Blank()\n              }\n              .width('100%')\n              .margin({ top: 12 })\n            }\n          }\n          .padding(12)\n          .width('100%')\n        }\n        .width('100%')\n        .layoutWeight(1)\n        .margin({ bottom: 12 })\n\n        // 输入区域\n        Column() {\n          Row() {\n            TextInput({ text: this.inputText, placeholder: '请输入您的问题...' })\n              .flexGrow(1)\n              .height(42)\n              .fontSize(16)\n              .padding(8)\n              .backgroundColor(Color.White)\n              .borderRadius(21)\n              .width('85%')\n              .onChange((value: string) => {\n                this.inputText = value;\n              })\n              .onSubmit(() => {\n                if (!this.isProcessing && this.inputText.trim() !== '') {\n                  const chatId = this.chatCounter++;\n                  this.DoChat(chatId);\n                }\n              })\n\n            Button('发送')\n              .width(72)\n              .height(42)\n              .fontSize(16)\n              .margin({ left: 8 })\n              .backgroundColor('#1a73e8')\n              .fontColor(Color.White)\n              .borderRadius(21)\n              .onClick(() => {\n                if (!this.isProcessing && this.inputText.trim() !== '') {\n                  const chatId = this.chatCounter++;\n                  this.DoChat(chatId);\n                }\n              })\n              .opacity(this.isProcessing || this.inputText.trim() === '' ? 0.6 : 1)\n\n            Button(\"清空\")\n              .width(72)\n              .height(42)\n              .fontSize(16)\n              .margin({ left: 8 })\n              .fontColor('#fff')\n              .backgroundColor('#ea4335')\n              .borderRadius(18)\n              .onClick(() => {\n                this.clearChat();\n              })\n          }\n          .width('100%')\n          .justifyContent(FlexAlign.SpaceBetween)\n          .alignItems(VerticalAlign.Center)\n        }\n        .width('100%')\n        .padding(8)\n        .backgroundColor(Color.White)\n        .borderRadius(16)\n        .shadow({\n          radius: 4,\n          color: '#1a73e888',\n          offsetX: 0,\n          offsetY: 2\n        })\n      }\n      .width('100%')\n      .height('100%')\n      .padding(12)\n      .backgroundColor('#f0f5ff')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
933455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
321357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
513000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);