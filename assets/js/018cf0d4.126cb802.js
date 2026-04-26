"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["776864"], {
961437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_demo_data_augmentation_rag_demo_md_018_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-dataaugmentation-rag-data-augmentation-rag-demo-data-augmentation-rag-demo-md-018.json
var site_docs_data_augmentation_kit_guide_dataaugmentation_rag_data_augmentation_rag_demo_data_augmentation_rag_demo_md_018_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/data-augmentation-rag-demo","title":"完整示例代码","description":"需要完成网络权限的申请，参见：开发准备。","source":"@site/docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/data-augmentation-rag-demo.md","sourceDirName":"data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo","slug":"/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"完整示例代码","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-demo","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"知识问答","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development/"},"next":{"title":"知识加工","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/data-augmentation-knowledge-processing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/data-augmentation-rag-demo.md


const frontMatter = {
	title: '完整示例代码',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-rag-demo',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '完整示例代码';

const assets = {

};



const toc = [{
  "value": "EntryAbility.ets",
  "id": "entryabilityets",
  "level": 2
}, {
  "value": "SetUp.ets",
  "id": "setupets",
  "level": 2
}, {
  "value": "HttpUtils.ets",
  "id": "httputilsets",
  "level": 2
}, {
  "value": "MyChatLlm.ets",
  "id": "mychatllmets",
  "level": 2
}, {
  "value": "Config.ets",
  "id": "configets",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
  "level": 2
}, {
  "value": "knowledge_schema.json",
  "id": "knowledge_schemajson",
  "level": 2
}, {
  "value": "sourceData.json",
  "id": "sourcedatajson",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "完整示例代码",
        children: "完整示例代码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(996075)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要完成网络权限的申请，参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development#%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
        children: "开发准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entryabilityets",
      children: "EntryAbility.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的生命周期实现在这个文件中，主要在应用启动时进行RagSession、数据库连接的创建，应用关闭时进行RagSession、数据库连接的释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want, common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport SetUp from '../entryability/SetUp';\nimport Config from '../entryability/Config';\nimport { rag } from '@kit.DataAugmentationKit';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    });\n\n    AppStorage.setOrCreate<common.UIAbilityContext>('Context', this.context);\n\n    let setUp: SetUp = new SetUp();\n    setUp.initTable().then(() => {\n      setUp.insertData();\n      AppStorage.setOrCreate<SetUp>('SetUpObject', setUp);\n    });\n\n    let config: Config = new Config();\n    rag.createRagSession(this.context, config.getRAGConfig()).then((data) => {\n      AppStorage.setOrCreate<rag.RagSession>('RagSessionObject', data);\n    }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN, 'testTag', `createRagSession failed, code is ${err.code},message is ${err.message}.`);\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n    const session = AppStorage.get<rag.RagSession>('RagSessionObject') as rag.RagSession;\n    session?.close().catch(() => {\n      hilog.error(DOMAIN, 'testTag', 'close rag session failed');\n    });\n    const setup = AppStorage.get<SetUp>('SetUpObject') as SetUp;\n    setup?.closeStore();\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setupets",
      children: "SetUp.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SetUp.ets负责数据源的构造，目前实现是从一个自带的Json文件读取数据，并且插入一个开启知识加工开关的数据库中。数据更新成功后，将会自动触发知识加工，形成知识库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/entryability/SetUp.ets\nimport { UIAbility, common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\nimport { buffer } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'SetUp';\n\nexport default class SetUp extends UIAbility {\n  storeName: string = 'testmail_store.db';  // 与knowledge_schema.json文件中数据库名保持一致\n  storeConfig: relationalStore.StoreConfig = {\n    name: this.storeName,\n    securityLevel: relationalStore.SecurityLevel.S3,\n    enableSemanticIndex: true,  // 源数据库需配置该项为true才会触发知识加工\n    tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n  };\n  store?: relationalStore.RdbStore;\n\n  async getStore() {\n    try {\n      if (!this.store) {\n        let context = AppStorage.get<common.UIAbilityContext>('Context') as common.UIAbilityContext; // 获取全局context\n        this.store = await relationalStore.getRdbStore(context, this.storeConfig);\n      }\n    } catch (err) {\n      hilog.error(0, TAG, `Init DB failed, code is ${err.code},message is ${err.message}.`);\n    }\n    return this.store;\n  }\n\n  async initTable() {\n    try {\n      const tmpStore = await this.getStore();\n      const createTableSql = 'CREATE TABLE IF NOT EXISTS email(id integer primary key, subject text, content text, ' +\n        'image_text text, attachment_names text, inline_files text, sender text, receivers text, received_date text);';\n      await tmpStore?.execute(createTableSql, 0, undefined);\n      hilog.info(0, TAG, 'InitTable success');\n    } catch (err) {\n      hilog.error(0, TAG, `Init DB failed, code is ${err.code},message is ${err.message}.`);\n    }\n  }\n\n  async insertData() {\n    try {\n      let context = AppStorage.get<common.UIAbilityContext>('Context') as common.UIAbilityContext; // 获取全局context\n      const fileList = context.resourceManager.getRawFileListSync('');\n      let dataIndex = 0;\n      for (let file of fileList) {  // 从json文件中解析数据到数据库中\n        if (!file.startsWith('sourceData') || !file.endsWith('.json')) {\n          hilog.info(0, TAG, `file ${file} skip`);\n          continue;\n        }\n        hilog.info(0, TAG, `file ${file} start`);\n        try {\n          const rawFileData = await context.resourceManager.getRawFileContent(file);\n          const fileData: string = buffer.from(rawFileData).toString();\n          const resultObjArr = JSON.parse(fileData) as Array<object>;\n          let jsonObj: object | undefined;\n          for (let i = 0; i < resultObjArr.length; i++) {\n            try {\n              jsonObj = resultObjArr[i];\n              let sender: string = jsonObj?.['sender_name'];\n              if (!sender || sender.length == 0) {\n                sender = 'undefined';\n              }\n              const receiverStr: string = JSON.stringify(jsonObj['to']);\n              const formattedDateStr: string = jsonObj?.['received_time']?.replace(' ', 'T');\n              let received_date = Date.parse(formattedDateStr);\n              if (!received_date || Number.isNaN(received_date)) {\n                received_date = 0;\n              }\n              let subject: string = jsonObj?.['subject']?.replace(/'/g, '');\n              let doc: string = jsonObj?.['body']?.replace(/'/g, '');\n              let sql = `insert or replace into email VALUES(${dataIndex}, '${subject}', '${doc}', '',` +\n                ` '', '', '${sender}', '${receiverStr}', '${received_date}');`\n              const tmpStore = await this.getStore();\n              await tmpStore?.executeSql(sql);\n              dataIndex++;\n            } catch (e) {\n              hilog.error(0, TAG, `Insert failed, code is ${e.code},message is ${e.message}, jsonObj: ${jsonObj}`);\n            }\n          }\n        } catch (e) {\n          hilog.error(0, TAG, `Load file failed, code is ${e.code},message is ${e.message}`);\n        }\n        hilog.info(0, TAG, `file ${file} end`);\n      }\n      hilog.info(0, TAG, 'insertData end');\n    } catch (err) {\n      hilog.error(0, TAG, `Init DB failed, code is ${err.code},message is ${err.message}.`);\n    }\n  }\n\n  async closeStore() {\n    try {\n      await this.store?.close();\n    } catch (e) {\n      hilog.error(0, TAG, `Close store failed, code is ${e.code},message is ${e.message}.`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "httputilsets",
      children: "HttpUtils.ets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HttpUtils.ets是与大模型交互的Http工具类，主要负责发往大模型的报文拼装、流式Http消息接收回调的注册等。开发者需根据自身资源，选用合适的大模型。示例代码使用的是", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.huaweicloud.com/modelarts",
        children: "ModelArts"
      }), "，需要把其中的\"****replace your API key in here****\"替换为真实的API Key。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/entryability/HttpUtils.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { http } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'HttpUtils';\n\nclass HttpUtils {\n  httpRequest?: http.HttpRequest;\n  url: string = 'https://api.modelarts-maas.com/v1/chat/completions'; // 开发者需要根据选择的大模型对应修改url以及下面的model\n  isFinished: boolean = false;\n\n  initOption(question: string) {\n    let option: http.HttpRequestOptions = {\n      // 请求方式\n      method: http.RequestMethod.POST,\n      // 请求头\n      header: {\n        'Content-Type': 'application/json',\n        // API-KEY from Model\n        'Authorization': `Bearer ****replace your API key in here****`\n      },\n      // 请求体\n      extraData: {\n        'stream': true,\n        'temperature': 0.1,\n        'max_tokens': 1000,\n        'frequency_penalty': 1,\n        'model': 'qwen3-32b',\n        'top_p': 0.1,\n        'presence_penalty': -1,\n        'messages': JSON.parse(question),\n        \"chat_template_kwargs\": {\n          // 关闭思考中数据\n          \"enable_thinking\": false\n        }\n      }\n    };\n    return option;\n  }\n\n  async requestInStream(question: string) { // 拼装流式请求的option并发起流式请求\n    if (!this.httpRequest) {\n      this.httpRequest = http.createHttp();\n    }\n    this.httpRequest?.requestInStream(this.url, this.initOption(question)).catch((err: BusinessError) => {\n      hilog.error(0, TAG, 'Failed to request. Cause: %{public}s', JSON.stringify(err));\n    });\n    this.isFinished = false;\n  }\n\n  on(callback: Callback<ArrayBuffer>) { // 注册数据接受、数据结束的监听\n    if (!this.httpRequest) {\n      this.httpRequest = http.createHttp();\n    }\n    this.httpRequest.on('dataReceive', callback);\n  }\n\n  end() { // 取消注册数据接受、数据结束的监听，释放httpRequest\n    this.httpRequest?.off('dataReceive');\n    this.httpRequest?.destroy();\n    this.httpRequest = undefined;\n  }\n\n  cancel() {\n    this.httpRequest?.off('dataReceive');\n    this.httpRequest?.destroy();\n    this.httpRequest = undefined;\n  }\n}\n\nexport default new HttpUtils;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mychatllmets",
      children: "MyChatLlm.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用继承实现ChatLLM类，相当于应用侧实现的大模型客户端，将在创建RagSession的时候把这个大模型客户端作为入参传入RagSession中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/entryability/MyChatLlm.ets\nimport { rag } from '@kit.DataAugmentationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { JSON, util } from '@kit.ArkTS';\nimport HttpUtils from './HttpUtils';\n\nconst TAG = \"MyChatLLM\";\n\nfunction parseLLMResponse(data: ArrayBuffer): rag.LLMStreamAnswer | undefined {\n  try {\n    let decoder = util.TextDecoder.create(`\"utf-8\"`);\n    let str = decoder.decodeToString(new Uint8Array(data));\n    hilog.info(0, TAG, str);\n    let chunk = '';\n    let isFinished: boolean = (str.length < 20);\n    for (let resultStr of str.split('data:')) {\n      if (resultStr.trim() == ('[DONE]')) {\n        isFinished = true;\n        break;\n      }\n      if (resultStr.trim().length == 0) {\n        continue;\n      }\n      try {\n        let obj = JSON.parse(resultStr.trim());\n        if ((obj as object)?.['choices'].length === 0) {\n          continue;\n        }\n        if ((obj as object)?.['choices'][0]?.['delta']?.['reasoning_content']) {\n          chunk += (obj as object)?.['choices'][0]['delta']['reasoning_content'];\n        } else if ((obj as object)?.['choices'][0]?.['delta']?.['content']) {\n          chunk += (obj as object)?.['choices'][0]['delta']['content'];\n        }\n      } catch (err) {\n        hilog.error(0, TAG, `Parse LLM response failed, resultStr: ${resultStr}`);\n      }\n    }\n    let answer: rag.LLMStreamAnswer = {\n      isFinished: isFinished,\n      chunk: chunk\n    };\n    return answer;\n  } catch (err) {\n    hilog.error(0, TAG, `Parse LLM response failed, error code: ${err.code}, error message: ${err.message}`);\n  }\n  return undefined;\n}\n\nexport default class MyChatLLM extends rag.ChatLLM {\n  async streamChat(query: string, callback: Callback<rag.LLMStreamAnswer>): Promise<rag.LLMRequestInfo> {\n    let ret: rag.LLMRequestStatus = rag.LLMRequestStatus.LLM_SUCCESS;\n    try {\n      let dataCallback = async (data: ArrayBuffer) => { // 收到数据时的回调函数，解析数据并组装LLMStreamAnswer，通过callback回调\n        hilog.debug(0, TAG, 'on callback enter. data length: %{public}d', data.byteLength);\n        // 解析大模型返回报文，逻辑因选择模型而异\n        const answer = parseLLMResponse(data);\n        if (!answer) {\n          return;\n        }\n        HttpUtils.isFinished = answer.isFinished;\n        callback(answer);\n        hilog.debug(0, 'MyChatLLM', 'Request LLM success. isFinished: %{public}s, data: %{public}s',\n          Number(answer.isFinished).toString(), answer.chunk);\n      };\n\n      HttpUtils.on(dataCallback);\n      HttpUtils.requestInStream(query);\n    } catch (err) {\n      hilog.error(0, TAG, `Request LLM failed, error code: ${err.code}, error message: ${err.message}`);\n      ret = rag.LLMRequestStatus.LLM_REQUEST_ERROR; // 开发者可判断错误码从而返回其他LLM错误码\n    }\n    return {\n      chatId: 0,\n      status: ret,\n    };\n  }\n  cancel(chatId: number): void {\n    hilog.info(0, TAG, `The request for the large model has been canceled. chatId: ${chatId}`);\n    HttpUtils.cancel();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configets",
      children: "Config.ets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Config.ets主要负责RagSession创建时入参的组装。详细配置方法及含义可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/data-augmentation-kit-guide/dataaugmentation-retrieval",
        children: "智慧化数据检索"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/entryability/Config.ets\nimport { common, UIAbility } from '@kit.AbilityKit';\nimport { rag, retrieval } from '@kit.DataAugmentationKit';\nimport { relationalStore } from '@kit.ArkData';\nimport MyChatLlm from './MyChatLlm';\n\nexport default class Config extends UIAbility {\n  getRetrievalConfig() {\n    let storeConfigVector: relationalStore.StoreConfig = {\n      name: 'testmail_store_vector.db', // 知识加工后向量数据库文件名，在原数据库名基础上加_vector后缀\n      securityLevel: relationalStore.SecurityLevel.S3,\n      vector: true  // 向量数据库应设置该项为true\n    };\n\n    let storeConfigInvIdx: relationalStore.StoreConfig = {\n      name: 'testmail_store.db', // 知识加工后，倒排数据库即原数据库\n      securityLevel: relationalStore.SecurityLevel.S3,\n      tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n    };\n\n    let context = AppStorage.get<common.UIAbilityContext>('Context') as common.UIAbilityContext;\n    let channelConfigVector: retrieval.ChannelConfig = {\n      channelType: retrieval.ChannelType.VECTOR_DATABASE,\n      context: context,\n      dbConfig: storeConfigVector\n    };\n    let channelConfigInvIdx: retrieval.ChannelConfig = {\n      channelType: retrieval.ChannelType.INVERTED_INDEX_DATABASE,\n      context: context,\n      dbConfig: storeConfigInvIdx\n    };\n    let retrievalConfig: retrieval.RetrievalConfig = {\n      channelConfigs: [channelConfigInvIdx, channelConfigVector]\n    };\n    return retrievalConfig;\n  }\n\n  getRetrivalCondition() {\n    let recallConditionInvIdx: retrieval.InvertedIndexRecallCondition = {\n      ftsTableName: 'email_inverted',\n      fromClause: 'email_inverted',\n      primaryKey: ['chunk_id'],\n      responseColumns: ['reference_id', 'chunk_id', 'chunk_source', 'chunk_text'],\n      deepSize: 500,\n      recallName: 'invertedvectorRecall',\n    };\n    let floatArray = new Float32Array(128).fill(0.1);\n    let vectorQuery: retrieval.VectorQuery = {\n      column: 'repr',\n      value: floatArray,\n      similarityThreshold: 0.1\n    };\n    let recallConditionVector: retrieval.VectorRecallCondition = {\n      vectorQuery: vectorQuery,\n      fromClause: 'email_vector',\n      primaryKey: ['id'],\n      responseColumns: ['reference_id', 'chunk_id', 'chunk_source', 'repr'],\n      recallName: 'vectorRecall',\n      deepSize: 500\n    };\n    let rerankMethod: retrieval.RerankMethod = {\n      rerankType: retrieval.RerankType.RRF,\n      isSoftmaxNormalized: true,\n    };\n    let retrievalCondition: retrieval.RetrievalCondition = {\n      rerankMethod: rerankMethod,\n      recallConditions: [recallConditionInvIdx, recallConditionVector],\n      resultCount: 5\n    };\n    return retrievalCondition;\n  }\n\n  getRAGConfig() {\n    let retrievalConfig: retrieval.RetrievalConfig = this.getRetrievalConfig();\n    let retrievalCondition: retrieval.RetrievalCondition = this.getRetrivalCondition();\n    let config: rag.Config = {\n      llm: new MyChatLlm(),\n      retrievalConfig: retrievalConfig,\n      retrievalCondition: retrievalCondition\n    };\n    return config;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用界面功能的实现包含：输入问 入框、开始问答的按钮、答案输出的输出框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/Index.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { rag } from '@kit.DataAugmentationKit';\nimport hilog from '@ohos.hilog';\n\n@Entry\n@Component\nstruct Index {\n  @State inputStr: string = '知识问答开发指南完整示例代码';\n  @State answerStr: string = '';\n  @State thoughtStr: string = '';\n\n  build() {\n    Column() {\n      Row({ space: 8 }) {\n        TextArea({ text: this.inputStr, placeholder: 'Input question here!' })\n          .margin({ top: 8 })\n          .borderStyle(BorderStyle.Dotted)\n          .onChange((newValue) => {\n            this.inputStr = newValue;\n          })\n          .width('95%')\n          .height('15%')\n          .fontWeight(FontWeight.Bold)\n      }\n\n      Button('streamRun')\n        .onClick(async () => {\n          // 获取创建的RagSession\n          let session: rag.RagSession = AppStorage.get<rag.RagSession>('RagSessionObject') as rag.RagSession;\n          let config: rag.RunConfig = {\n            // 指定流式输出的输出类型\n            answerTypes: [rag.StreamType.THOUGHT, rag.StreamType.ANSWER]\n          };\n          this.thoughtStr = '';\n          this.answerStr = '';\n          // 发起提问\n          session.streamRun(this.inputStr, config, ((err: BusinessError, stream: rag.Stream) => {\n            // 接收答案的callback回调，处理答案信息\n            if (err) {\n              this.answerStr = `streamRun inner failed. code is ${err.code}, message is ${err.message}`;\n            } else {\n              // 根据不同的数据类型，选择不同的处理方式\n              switch (stream.type) {\n                case rag.StreamType.THOUGHT:\n                  this.thoughtStr += stream.answer.chunk;\n                  break;\n                case rag.StreamType.ANSWER:\n                  this.answerStr += stream.answer.chunk;\n                  break;\n                case rag.StreamType.REFERENCE:\n                default:\n                  hilog.info(0, 'Index', `streamRun msg: ${JSON.stringify(stream)}`);\n              }\n            }\n          })).catch((e: BusinessError) => {\n            this.answerStr = `streamRun failed. code is ${e.code}, message is ${e.message}`;\n          });\n        })\n        .width('30%')\n        .height('5%')\n      Column({ space: 2 }) {\n        Text(this.thoughtStr)\n          .fontSize(12)\n          .fontColor(Color.Gray)\n          .padding(8)\n          .width('95%')\n          .height('auto')\n        Text(this.answerStr)\n          .padding(8)\n          .width('95%')\n          .height('auto')\n      }\n      .backgroundColor(0xF5DEB3)\n      .width('95%')\n      .height('75%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge_schemajson",
      children: "knowledge_schema.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工的schema文件用来定义知识加工时对于源数据库的处理逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/resources/rawfile/arkdata/knowledge/knowledge_schema.json ------ 实际使用时请删除本行注释\n{\n  \"knowledgeSource\": [{\n    \"version\": 1,\n    \"dbName\": \"testmail_store.db\",\n    \"tables\": [{\n      \"tableName\": \"email\",\n      \"referenceFields\": [\"id\"],\n      \"knowledgeFields\": [{\n        \"columnName\": \"subject\",\n        \"type\": [\"Text\"]\n      },\n      {\n        \"columnName\": \"content\",\n        \"type\": [\"Text\"]\n      },\n      {\n        \"columnName\": \"image_text\",\n        \"type\": [\"Text\"]\n      },\n      {\n        \"columnName\": \"attachment_names\",\n        \"type\": [\"Text\"]\n      },\n      {\n    \"columnName\": \"inline_files\",\n    \"type\": [\"Json\"],\n    \"parser\": [\n      {\n        \"type\": \"File\",\n        \"path\": \"$[*].uri\"\n      }\n    ]\n      },\n      {\n        \"columnName\": \"sender\",\n        \"type\": [\"Scalar\"],\n        \"description\": \"sender\"\n      },\n      {\n        \"columnName\": \"receivers\",\n        \"type\": [\"Scalar\"],\n        \"description\": \"receivers\"\n      },\n      {\n        \"columnName\": \"received_date\",\n        \"type\": [\"Scalar\"],\n        \"description\": \"received_date\"\n      }]\n    }]\n  }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sourcedatajson",
      children: "sourceData.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sourceData.json文件中的内容为模拟数据源，作为输入插入应用数据库表。真实情况应用数据输入途径应该是界面输入、服务器获取等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/resources/rawfile/sourceData.json ------ 仅用于测试数据插入，请开发者根据业务需要预置数据库数据\n[{\n  \"subject\": \"【请阅】手机优惠政策\",\n  \"sender_name\": \"test1\",\n  \"sender_email\": \"test1@example.com\",\n  \"received_time\": \"2025-05-15 15:49:04.135\",\n  \"recipients\": [\n    {\n      \"Address\": \"test2@example.com\",\n      \"name\": \"test2\",\n      \"Type\": 1\n    },\n    {\n      \"Address\": \"test3@example.com\",\n      \"name\": \"test3\",\n      \"Type\": 2\n    },\n    {\n      \"Address\": \"test4@example.com\",\n      \"name\": \"test4\",\n      \"Type\": 3\n    }\n  ],\n  \"to\": [\n    \"lisi\"\n  ],\n  \"cc\": [\n    \"wangwu\"\n  ],\n  \"bcc\": [\n    \"zhaoliu\"\n  ],\n  \"attachment\": [],\n  \"body\": \"优惠政策：\\r\\n旗舰系列优惠10%！！ 非旗舰系列优惠20%！！。\",\n  \"unread\": false\n}]\n"
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
996075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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