"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["373833"], {
117827(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_development_data_augmentation_rag_development_md_6c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-dataaugmentation-rag-data-augmentation-rag-development-data-augmentation-rag-development-md-6c3.json
var site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_development_data_augmentation_rag_development_md_6c3_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/data-augmentation-rag-development","title":"知识问答","description":"知识问答是通过检索增强生成（RAG）技术，从数据源中精准提取信息并生成答案的智能交互方式。可用于企业客服、医疗辅助、IT支持等领域。","source":"@site/docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/data-augmentation-rag-development.md","sourceDirName":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development","slug":"/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"知识问答","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"RAG概述","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/"},"next":{"title":"完整示例代码","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/data-augmentation-rag-development.md


const frontMatter = {
	title: '知识问答',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '知识问答';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "流式问答调用流程图",
  "id": "流式问答调用流程图",
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
        id: "知识问答",
        children: "知识问答"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识问答是通过检索增强生成（RAG）技术，从数据源中精准提取信息并生成答案的智能交互方式。可用于企业客服、医疗辅助、IT支持等领域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["知识问答需要先对数据源库进行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
          children: "知识加工"
        }), "生成知识库，否则无法问答。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户问答时，RAG可使用的历史记录范围为最近1次问答内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG不提供敏感词风控检测能力，开发者需要自行对用户输入内容和RAG返回内容进行敏感词风控检测。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者应选择上下文长度至少应该为30k Tokens的LLM，如Qwen2.5-7B-32K、Mistral-7B-Instruct-v0.2、Llama-3.1-8B等。否则可能会因大模型上下文长度超限而导致知识问答失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM由开发者自行选择，问答支持的语言受选择的LLM影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254710)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口需在页面或自定义组件生命周期内调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RAG关键接口如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97",
        children: "API参考"
      }), "。除接口外，还可以通过配置文件进行深度定制RAG，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-config-prompt-template",
        children: "RAG配置"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["abstract ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
              children: "streamChat"
            }), "(query: string, callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#llmstreamanswer",
              children: "LLMStreamAnswer"
            }), ">): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#llmrequestinfo",
              children: "LLMRequestInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "继承ChatLLM类实现大模型客户端时需要实现的函数。RAG在检索前的问题预处理、检索后的回答生成时，会调用这个函数与大语言模型交互。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#createragsession",
              children: "createRagSession"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", config: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
              children: "Config"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
              children: "RagSession"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得一个会话用于进行知识问答。不支持多线程调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
              children: "streamRun"
            }), "(question: string, config: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#runconfig",
              children: "RunConfig"
            }), ", callback: AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#stream",
              children: "Stream"
            }), ">): Promise<number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识问答接口，传入问题以及问答配置项。当RAG生成问题结果时，触发callback回调函数来流式传递数据。支持的长度为1000个字符内（UTF-8下一个汉字占3个字符）。不支持多线程调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请网络权限。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
            children: "streamChat"
          }), "中需要开发者实现与LLM交互的功能，因此需要为应用申请网络权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// module.json5中配置\"requestPermissions\"字段\n// src/main/module.json5\n\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成知识加工配置。请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
            children: "知识加工"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面仅对关键步骤关键代码进行片段式说明，省略了很多非核心代码，如果需要查看完整功能示例代码，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo",
        children: "示例代码"
      }), "。应用的一次流式问答过程，和RagSession、ChatLLM、知识库的交互流程，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B5%81%E5%BC%8F%E9%97%AE%E7%AD%94%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B%E5%9B%BE",
        children: "流式问答调用流程图"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入@kit.DataAugmentationKit模块，其余依赖需要开发者按需添加。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rag } from '@kit.DataAugmentationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建http工具类，用以和大模型交互，用户也可选择webSocket（可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/network-api-arkts",
            children: "Network Kit"
          }), "）或者其他方式与大模型交互。本示例选用了", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://console.huaweicloud.com/modelarts",
            children: "ModelArts平台"
          }), "的qwen3-235b-a22b模型作为示例，开发者使用时需根据实际情况选择合适大模型。示例代码包括如下三个环节："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "拼装和大模型交互的请求报文，推荐为流式交互，以获得更好用户体验。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "注册大模型的数据接收及输出结束的回调函数，以达到流式访问大模型的效果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "初始化大模型以及向大模型发送请求。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { http } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'HttpUtils';\n\nclass HttpUtils {\n  httpRequest?: http.HttpRequest;\n  url: string = 'https://api.modelarts-maas.com/v1/chat/completions'; // 开发者需要根据选择的大模型对应修改url以及下面的model\n  isFinished: boolean = false;\n\n  initOption(question: string) {\n    let option: http.HttpRequestOptions = {\n      // 请求方式\n      method: http.RequestMethod.POST,\n      // 请求头\n      header: {\n        'Content-Type': 'application/json',\n        // API-KEY from Model\n        'Authorization': `Bearer ****replace your API key in here****`\n      },\n      // 请求体\n      extraData: {\n        'stream': true,\n        'temperature': 0.1,\n        'max_tokens': 1000,\n        'frequency_penalty': 1,\n        'model': 'qwen3-32b',\n        'top_p': 0.1,\n        'presence_penalty': -1,\n        'messages': JSON.parse(question),\n        \"chat_template_kwargs\": {\n          // 关闭思考中数据\n          \"enable_thinking\": false\n        }\n      }\n    };\n    return option;\n  }\n\n  async requestInStream(question: string) { // 拼装流式请求的option并发起流式请求\n    if (!this.httpRequest) {\n      this.httpRequest = http.createHttp();\n    }\n    this.httpRequest?.requestInStream(this.url, this.initOption(question)).catch((err: BusinessError) => {\n      hilog.error(0, TAG, 'Failed to request. Cause: %{public}s', JSON.stringify(err));\n    });\n    this.isFinished = false;\n  }\n\n  on(callback: Callback<ArrayBuffer>) { // 注册数据接受、数据结束的监听\n    if (!this.httpRequest) {\n      this.httpRequest = http.createHttp();\n    }\n    this.httpRequest.on('dataReceive', callback);\n  }\n\n  cancel() {\n    this.httpRequest?.off('dataReceive');\n    this.httpRequest?.destroy();\n    this.httpRequest = undefined;\n  }\n}\n\nexport default new HttpUtils;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["继承实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#chatllm",
            children: "ChatLLM"
          }), "类，在此函数中与大模型进行交互，并将大模型返回结果通过callback函数返回给RagSession。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rag } from '@kit.DataAugmentationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { JSON, util } from '@kit.ArkTS';\nimport HttpUtils from './HttpUtils'; // HttpUtils为上一步骤中，在文件HttpUtils.ets文件中实现的HTTP访问工具类\n\nconst TAG = \"MyChatLLM\";\n\nexport default class MyChatLLM extends rag.ChatLLM {\n  async streamChat(query: string, callback: Callback<rag.LLMStreamAnswer>): Promise<rag.LLMRequestInfo> {\n    let ret: rag.LLMRequestStatus = rag.LLMRequestStatus.LLM_SUCCESS;\n    try {\n      let dataCallback = async (data: ArrayBuffer) => { // 收到数据时的回调函数，解析数据并组装LLMStreamAnswer，通过callback回调\n        hilog.debug(0, TAG, 'on callback enter. data length: %{public}d', data.byteLength);\n        // 解析大模型返回报文，逻辑因选择模型而异，此处省略具体解析代码，示例参见完整示例代码\n        const answer = parseLLMResponse(data);\n        if (!answer) {\n          return;\n        }\n        HttpUtils.isFinished = answer.isFinished;\n        callback(answer);\n        hilog.debug(0, 'MyChatLLM', 'Request LLM success. isFinished: %{public}s, data: %{public}s',\n          Number(answer.isFinished).toString(), answer.chunk);\n      };\n\n      HttpUtils.on(dataCallback);\n      HttpUtils.requestInStream(query);\n    } catch (err) {\n      hilog.error(0, TAG, `Request LLM failed, error code: ${err.code}, error message: ${err.message}`);\n      ret = rag.LLMRequestStatus.LLM_REQUEST_ERROR; // 开发者可判断错误码从而返回其他LLM错误码\n    }\n    return {\n      chatId: 0,\n      status: ret,\n    };\n  }\n  cancel(chatId: number): void {\n    hilog.info(0, TAG, `The request for the large model has been canceled. chatId: ${chatId}`);\n    HttpUtils.cancel();\n  }\n}\nfunction parseLLMResponse(data: ArrayBuffer): rag.LLMStreamAnswer {\n  throw new Error('Function not implemented.'); // 待实现大模型报文解析流程\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
            children: "Config"
          }), "配置中的属性。下面简要介绍几个主要属性，有关全量配置字段的详细含义，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/data-augmentation-kit-guide/dataaugmentation-retrieval",
            children: "智慧化数据检索"
          }), "中的说明。开发者可以根据自身需求进行选择性配置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api#retrievalconfig",
                children: "RetrievalConfig"
              }), "主要配置知识库的数据库配置。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
                children: "知识加工"
              }), "将会生成向量及倒排两种知识库表。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { common, UIAbility } from '@kit.AbilityKit';\nimport { rag, retrieval } from '@kit.DataAugmentationKit';\nimport { relationalStore } from '@kit.ArkData';\n\nlet storeConfigVector: relationalStore.StoreConfig = {\n  name: 'testmail_store_vector.db', // 知识加工后向量数据库文件名，在原数据库名基础上加_vector后缀\n  securityLevel: relationalStore.SecurityLevel.S3,\n  vector: true  // 向量数据库应设置该项为true\n};\nlet storeConfigInvIdx: relationalStore.StoreConfig = {\n  name: 'testmail_store.db', // 知识加工后，倒排数据库即原数据库\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\nlet context = AppStorage.get<common.UIAbilityContext>('Context') as common.UIAbilityContext;\nlet channelConfigVector: retrieval.ChannelConfig = {\n  channelType: retrieval.ChannelType.VECTOR_DATABASE,\n  context: context,\n  dbConfig: storeConfigVector\n};\nlet channelConfigInvIdx: retrieval.ChannelConfig = {\n  channelType: retrieval.ChannelType.INVERTED_INDEX_DATABASE,\n  context: context,\n  dbConfig: storeConfigInvIdx\n};\n// 最终创建成功的RetrievalConfig数据\nlet retrievalConfig: retrieval.RetrievalConfig = {\n  channelConfigs: [channelConfigInvIdx, channelConfigVector]\n};\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api#retrievalcondition",
                children: "RetrievalCondition"
              }), "主要配置检索条件及多路召回之后的排序配置。其中fromClause为查询目标索引名，可按照如下示例代码配置为业务数据库表及知识加工产生的数据库表联合形成的虚拟表；responseColumns为召回的字段集合，范围为fromClause配置的数据库表中的列。关于知识库的数据库表结构可参见：", (0,jsx_runtime.jsx)(_components.a, {
                href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
                children: "知识加工"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { retrieval } from '@kit.DataAugmentationKit';\n\nlet recallConditionInvIdx: retrieval.InvertedIndexRecallCondition = {\n  ftsTableName: 'email_inverted',\n  fromClause: 'email_inverted',\n  primaryKey: ['chunk_id'],\n  // 配置范围为fromClause配置的数据库表中的列，超出范围会导致检索失败。\n  responseColumns: ['reference_id', 'chunk_id', 'chunk_source', 'chunk_text'],\n  deepSize: 500,\n  recallName: 'invertedvectorRecall',\n};\nlet floatArray = new Float32Array(128).fill(0.1);\nlet vectorQuery: retrieval.VectorQuery = {\n  column: 'repr',\n  value: floatArray,\n  similarityThreshold: 0.1\n};\nlet recallConditionVector: retrieval.VectorRecallCondition = {\n  vectorQuery: vectorQuery,\n  // 只配置知识库的向量表作为查询目标\n  fromClause: 'email_vector',\n  primaryKey: ['id'],\n  // 配置知识库的向量表中的列作为召回列\n  responseColumns: ['reference_id', 'chunk_id', 'chunk_source', 'repr'],\n  recallName: 'vectorRecall',\n  deepSize: 500\n};\nlet rerankMethod: retrieval.RerankMethod = {\n  rerankType: retrieval.RerankType.RRF,\n  isSoftmaxNormalized: true,\n};\n// 最终创建成功的RetrievalCondition数据\nlet retrievalCondition: retrieval.RetrievalCondition = {\n  rerankMethod: rerankMethod,\n  recallConditions: [recallConditionInvIdx, recallConditionVector],\n  resultCount: 5\n};\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["完成Config数据的构造。", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#chatllm",
                children: "ChatLLM"
              }), "参数则使用步骤3继承实现的ChatLLM的自定义的类的实例。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { rag } from \"@kit.DataAugmentationKit\";\nimport MyChatLLM from \"./MyChatLlm\"; // 来源参考步骤3示例代码\n\nlet config: rag.Config = {\n  llm: new MyChatLLM(), // 来源参考步骤3示例代码\n  retrievalConfig: retrievalConfig, // 来源参考当前步骤RetrievalConfig代码示例\n  retrievalCondition: retrievalCondition  // 来源参考当前步骤RetrievalCondition代码示例\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建RagSession。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { rag } from '@kit.DataAugmentationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建RagSession并存入APP上下文中\nrag.createRagSession(this.context, config).then((data) => {  // config来源参考步骤4代码示例\n  AppStorage.setOrCreate<rag.RagSession>('RagSessionObject', data);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `createRagSession failed, code is ${err.code},message is ${err.message}.`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用步骤5创建的RagSession的streamRun()函数进行问答。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["answerTypes属性用来指定流式输出的数据类型（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamtype",
              children: "StreamType"
            }), "），当前示例代码配置了三种数据类型，所以最终streamRun()函数的callback回调函数将会输出这三种类型的数据。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "streamRun()函数以增量流式的方式输出数据，所以需要开发者自行对结果进行拼接。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { rag } from '@kit.DataAugmentationKit';\nimport hilog from '@ohos.hilog';\n\n// 获取创建的RagSession\nlet session: rag.RagSession = AppStorage.get<rag.RagSession>('RagSessionObject') as rag.RagSession;\nlet config: rag.RunConfig = {\n  // 指定流式输出的输出类型\n  answerTypes: [rag.StreamType.THOUGHT, rag.StreamType.ANSWER]\n};\nlet thoughtStr = '';\nlet answerStr = '';\nlet inputStr = '';\n// 发起提问\nsession.streamRun(inputStr, config, ((err: BusinessError, stream: rag.Stream) => {\n  // 接收答案的callback回调，处理答案信息\n  if (err) {\n    answerStr = `streamRun inner failed. code is ${err.code}, message is ${err.message}`;\n  } else {\n    // 根据不同的数据类型，选择不同的处理方式\n    switch (stream.type) {\n      case rag.StreamType.THOUGHT:\n        thoughtStr += stream.answer.chunk;\n        break;\n      case rag.StreamType.ANSWER:\n        answerStr += stream.answer.chunk;\n        break;\n      case rag.StreamType.REFERENCE:\n      default:\n        hilog.info(0, 'Index', `streamRun msg: ${JSON.stringify(stream)}`);\n    }\n  }\n})).catch((e: BusinessError) => {\n  answerStr = `streamRun failed. code is ${e.code}, message is ${e.message}`;\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流式问答调用流程图",
      children: "流式问答调用流程图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707605)/* ["default"] */.A) + "",
        width: "815",
        height: "1124"
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
707605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438327-242d616c009433d689fb420b1d5fb6fe.png");

},
254710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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