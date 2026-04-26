"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["336708"], {
871904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_call_cloudfoundation_prefetch_add_dependency_class_cloudfoundation_prefetch_implementation_class_cloudfoundation_prefetch_implementation_class_md_c2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-prefetch-service-cloudfoundation-prefetch-call-cloudfoundation-prefetch-add-dependency-class-cloudfoundation-prefetch-implementation-class-cloudfoundation-prefetch-implementation-class-md-c2f.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_call_cloudfoundation_prefetch_add_dependency_class_cloudfoundation_prefetch_implementation_class_cloudfoundation_prefetch_implementation_class_md_c2f_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/cloudfoundation-prefetch-implementation-class","title":"预加载实现类","description":"在“entry/src/main/ets/prefetchUtil”目录下新增PrefetchUtil.ets和PrefetchWrapper.ets。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/cloudfoundation-prefetch-implementation-class.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class","slug":"/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"预加载实现类","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-implementation-class","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预加载工具类","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/"},"next":{"title":"调用安装预加载","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-call-installprefetch/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/cloudfoundation-prefetch-implementation-class.md


const frontMatter = {
	title: '预加载实现类',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-implementation-class',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '预加载实现类';

const assets = {

};



const toc = [{
  "value": "PrefetchUtil",
  "id": "prefetchutil",
  "level": 2
}, {
  "value": "PrefetchWrapper",
  "id": "prefetchwrapper",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "预加载实现类",
        children: "预加载实现类"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“entry/src/main/ets/prefetchUtil”目录下新增PrefetchUtil.ets和PrefetchWrapper.ets。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PrefetchUtil和PrefetchWrapper实现类功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PrefetchUtil：预加载API的封装类，为PrefetchWrapper提供预加载API封装接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供安装预加载的数据获取接口"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供周期性预加载的任务注册接口和数据获取接口"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供周期性预加载是否已拉取数据的判断接口"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PrefetchWrapper：预加载包装类，为页面提供预加载封装接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供安装预加载数据获取和渲染接口"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供周期性预加载数据获取和渲染接口"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供安装预加载和周期性预加载数据获取和渲染接口"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prefetchutil",
      children: "PrefetchUtil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "周期性预加载任务注册间隔需要大于12小时，建议按照如下示例取值为24小时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cloudResPrefetch } from '@kit.CloudFoundationKit'\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { PreferenceUtil } from '../common/PreferenceUtil';\nimport { GlobalContext } from '../common/GlobalContext';\n\nconst PREFERENCES_PREFETCH_STORE_NAME = 'defaultStore';\nconst PREFERENCES_PREFETCH_FIRST_REGISTER_TIME = 'prefetchTaskFirstRegisterTime'; // 首次注册时间\nconst PREFERENCES_PREFETCH_TASK_EXPIRE_TIME = 'prefetchTaskExpireTime'; // 任务过期时间\nconst PREFETCH_TASK_REGISTER_INTERVAL = 24 * 60 * 60 * 1000; // 24小时 < 72小时\nconst PREFETCH_DATA_UPDATE_INTERVAL = 12 * 60 * 60 * 1000; // 12小时\nconst HILOG_DOMAIN = 0x0000;\nconst TAG = 'Prefetch';\n\nexport class PrefetchUtil {\n  private static timeoutId: number = (0 - Number.MAX_VALUE);\n  private static hasPrefetchedData: boolean = false;\n  private static isPrefetchTaskRegistered: boolean = false;\n  private static now: number = (0 - Number.MAX_VALUE);\n\n  private constructor() {\n  }\n\n  /**\n   * 预加载数据获取\n   * @param type 安装预加载/周期预加载数据\n   * @throws 预加载getPrefetchResult API异常\n   * @returns PrefetchResult\n   */\n  public static async getPrefetchResult(type: cloudResPrefetch.PrefetchMode) {\n    return cloudResPrefetch.getPrefetchResult(type);\n  }\n\n  /**\n   * 周期性预加载应用注册任务，间隔24小时\n   * @param token 应用/用户级token，可以为空\n   * @param params 自定义筛选参数，定义为JSON格式，可以为空\n   * @param forceRegister 是否强制注册\n   */\n  public static async registerPrefetchTask(token: string, params: string | object,\n    forceRegister: boolean = false) {\n    await PrefetchUtil.updatePrefetchTaskInfo();\n    if (!forceRegister) {\n      await PrefetchUtil.registerPrefetchTaskNotForced(token, params);\n      return;\n    }\n    await PrefetchUtil.registerPrefetchTaskForced(token, params);\n  }\n\n  /**\n   * 是否有周期性预加载数据：如果是首次注册，12小时后才有周期性预加载数据\n   * @returns boolean\n   */\n  public static hasPrefetchTaskData() : boolean {\n    return PrefetchUtil.hasPrefetchedData;\n  }\n\n  private static async updatePrefetchTaskInfo() {\n    PrefetchUtil.now = Date.now();\n    if (PrefetchUtil.timeoutId != 0 - Number.MAX_VALUE) {\n      clearTimeout(PrefetchUtil.timeoutId);\n    }\n    let firstRegisterTime = await PreferenceUtil.getValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME,\n      PREFERENCES_PREFETCH_FIRST_REGISTER_TIME) as number;\n    if (firstRegisterTime) {\n      PrefetchUtil.isPrefetchTaskRegistered = true;\n      // 判断任务是否已获取数据(首次注册后12小时，之后数据每隔12小时更新一次)\n      if (PrefetchUtil.now - firstRegisterTime >= PREFETCH_DATA_UPDATE_INTERVAL) {\n        PrefetchUtil.hasPrefetchedData = true;\n      }\n    }\n    if (!PrefetchUtil.isPrefetchTaskRegistered) {\n      hilog.info(HILOG_DOMAIN, TAG, `first register time: ${PrefetchUtil.now}`);\n      await PreferenceUtil.setValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME,\n        PREFERENCES_PREFETCH_FIRST_REGISTER_TIME, PrefetchUtil.now);\n    }\n  }\n\n  private static async registerPrefetchTaskForced(token: string, params: string | object) {\n    // 过期或强制更新任务注册\n    let expireTime = PrefetchUtil.now + PREFETCH_TASK_REGISTER_INTERVAL;\n    hilog.info(HILOG_DOMAIN, TAG, `new expireTime: ${expireTime}`);\n    await PreferenceUtil.setValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME,\n      PREFERENCES_PREFETCH_TASK_EXPIRE_TIME, expireTime);\n    // 更新任务注册和定时器\n    PrefetchUtil.registerPrefetchTaskWithApi(token, params);\n    PrefetchUtil.updateTaskTimer(PREFETCH_TASK_REGISTER_INTERVAL);\n  }\n\n  private static async registerPrefetchTaskNotForced(token: string, params: string | object) {\n    // 判断任务到期，重新注册\n    let expireTime = await PreferenceUtil.getValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME,\n      PREFERENCES_PREFETCH_TASK_EXPIRE_TIME) as number;\n    if (expireTime && (PrefetchUtil.now < expireTime)) {\n      // 任务没有过期：只更新定时器\n      let delay = expireTime - PrefetchUtil.now;\n      hilog.info(HILOG_DOMAIN, TAG, `not expire, delay:${delay}`);\n      PrefetchUtil.updateTaskTimer(delay);\n      return;\n    }\n    await PrefetchUtil.registerPrefetchTaskForced(token, params);\n  }\n\n  private static registerPrefetchTaskWithApi(token: string, params: string | object) {\n    try {\n      cloudResPrefetch.registerPrefetchTask({\n        token: token,\n        params: params\n      });\n      hilog.info(HILOG_DOMAIN, TAG, `register success`);\n    } catch (error) {\n      hilog.error(HILOG_DOMAIN, TAG, `register catch = ${error.message}`);\n    }\n  }\n\n  private static updateTaskTimer(delay: number) {\n    PrefetchUtil.timeoutId = setTimeout(() => {\n      if (PrefetchUtil.timeoutId != (0 - Number.MAX_VALUE)) {\n        clearInterval(PrefetchUtil.timeoutId)\n        PrefetchUtil.timeoutId = (0 - Number.MAX_VALUE);\n      }\n    }, delay);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prefetchwrapper",
      children: "PrefetchWrapper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预加载数据获取成功时，需要增加页面的渲染逻辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预加载数据获取失败时，需要做数据降级处理。如下示例代码以cloudFunctionCall接口触发云函数为例获取数据，请根据实际业务实现进行修改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意以下两点："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用cloudFunctionCall接口之前，请先", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function#%E8%AE%BE%E7%BD%AE%E4%BA%91%E5%87%BD%E6%95%B0%E9%85%8D%E7%BD%AE%E9%A1%B9",
                children: "设置云函数配置项"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "测试周期性预加载时，需要将下文示例代码periodicPrefetch方法中的如下代码块注释。若不注释，则需等待12h才能获取周期性预加载数据。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "if (!PrefetchUtil.hasPrefetchTaskData()) { // 是否有周期性预加载数据：如果是首次注册，12小时后才有周期性预加载数据\n  hilog.info(HILOG_DOMAIN, TAG, 'not has prefetch data');\n  this.cloudFunctionCall(); // 使用普通方式获取应用数据\n  return;\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "测试完成后，取消上述代码块注释即可。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { cloudFunction, cloudResPrefetch } from '@kit.CloudFoundationKit';\nimport { PrefetchUtil } from './PrefetchUtil';\nimport { PreferenceUtil } from '../common/PreferenceUtil';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { GlobalContext } from '../common/GlobalContext';\nimport { deferredLink } from '@kit.AppLinkingKit';\n\nconst HILOG_DOMAIN = 0x0000;\nconst TAG = 'PrefetchWrapper';\nconst PREFETCH_MODE = \"prefetchMode\";\nconst PREFETCH_LINK_MODE = \"prefetchLinkMode\";\nconst PREFERENCES_PREFETCH_STORE_NAME = 'defaultStore';\n\nexport class PrefetchWrapper {\n  private static instance: PrefetchWrapper;\n  private prefetchMode: number = 0;\n  private linkPrefetchMode: number = 0;\n\n  private constructor() {\n  }\n\n  public static getInstance(): PrefetchWrapper {\n    if (!PrefetchWrapper.instance) {\n      PrefetchWrapper.instance = new PrefetchWrapper();\n    }\n    return PrefetchWrapper.instance;\n  }\n\n  // 支持所有预加载类型\n  public async doPrefetch() {\n    // 应用安装后首次打开：优先使用跳链安装预加载\n    await this.doLinkPrefetch();\n    // 初始化prefetchMode\n    this.initPrefetchMode();\n    if (!this.prefetchMode) {\n      // 应用安装后首次打开：使用安装预加载\n      hilog.info(HILOG_DOMAIN, TAG, 'installPrefetch');\n      this.installPrefetch();\n      this.setPrefetchMode(cloudResPrefetch.PrefetchMode.PERIODIC_PREFETCH);\n    } else {\n      // 应用安装后非首次打开：使用周期性预加载\n      hilog.info(HILOG_DOMAIN, TAG, 'periodicPrefetch: %{public}d', this.prefetchMode);\n      this.periodicPrefetch();\n    }\n  }\n\n  // 仅支持安装预加载\n  public doInstallPrefetch() {\n    // 初始化prefetchMode\n    this.initPrefetchMode();\n    if (!this.prefetchMode) {\n      // 应用安装后首次打开：使用安装预加载\n      hilog.info(HILOG_DOMAIN, TAG, 'installPrefetch');\n      this.installPrefetch();\n      this.setPrefetchMode(cloudResPrefetch.PrefetchMode.PERIODIC_PREFETCH);\n    }\n  }\n\n  // 仅支持周期性预加载\n  public doPeriodicPrefetch() {\n    // 初始化prefetchMode\n    this.initPrefetchMode();\n    if (!this.prefetchMode) {\n      this.setPrefetchMode(cloudResPrefetch.PrefetchMode.PERIODIC_PREFETCH);\n    } else {\n      // 应用安装后非首次打开：使用周期性预加载\n      hilog.info(HILOG_DOMAIN, TAG, 'periodicPrefetch: %{public}d', this.prefetchMode);\n      this.periodicPrefetch();\n    }\n  }\n\n  // 支持跳链安装预加载：应用安装后10分钟内有效\n  public async doLinkPrefetch(): Promise<boolean> {\n    try {\n      let link = await this.popPrefetchLink();\n      if (link.length < 1) {\n        hilog.error(HILOG_DOMAIN, TAG, `get install link null`);\n        return Promise.resolve(false);\n      }\n      let params: cloudResPrefetch.PrefetchParams = {\n        link: link\n      }\n      let dataResult = await cloudResPrefetch.getPrefetchResult(cloudResPrefetch.PrefetchMode.LINK_PREFETCH, params);\n      // todo 处理dataResult，跳转应用详情页并渲染\n      hilog.info(HILOG_DOMAIN, TAG, 'get install link prefetch dataResult: %{public}s', JSON.stringify(dataResult));\n      return Promise.resolve(true);\n    } catch (err) {\n      return Promise.resolve(false);\n    }\n  }\n\n  private installPrefetch() {\n    PrefetchUtil.getPrefetchResult(cloudResPrefetch.PrefetchMode.INSTALL_PREFETCH)\n      .then((data: cloudResPrefetch.PrefetchResult) => { // 接口调用成功，处理缓存的应用数据\n        hilog.info(HILOG_DOMAIN, TAG, 'get install prefetch cache successfully');\n        let dataResult = data.result; // data.result即是缓存的应用数据\n        // todo 处理dataResult\n        hilog.info(HILOG_DOMAIN, TAG, 'get install prefetch dataResult: %{public}s', JSON.stringify(dataResult));\n      })\n      .catch((err: BusinessError) => {\n        hilog.error(HILOG_DOMAIN, TAG, `get install prefetch cache failed: ${err.message}, ${err.code}`);\n        this.cloudFunctionCall(); // 应用走原有逻辑获取数据，示例使用云函数获取\n      })\n  }\n\n  private initPrefetchMode() {\n    if (!this.prefetchMode) {\n      let context = GlobalContext.getContext();\n      this.prefetchMode =\n        PreferenceUtil.getValueSync(context, PREFERENCES_PREFETCH_STORE_NAME, PREFETCH_MODE) as number;\n    }\n  }\n\n  private setPrefetchMode(mode: number) {\n    PreferenceUtil.setValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME, PREFETCH_MODE, mode);\n  }\n\n  private initLinkPrefetchMode() {\n    if (!this.linkPrefetchMode) {\n      let context = GlobalContext.getContext();\n      this.linkPrefetchMode =\n        PreferenceUtil.getValueSync(context, PREFERENCES_PREFETCH_STORE_NAME, PREFETCH_LINK_MODE) as number;\n    }\n  }\n\n  private setLinkPrefetchMode(mode: number) {\n    PreferenceUtil.setValue(GlobalContext.getContext(), PREFERENCES_PREFETCH_STORE_NAME, PREFETCH_LINK_MODE, mode);\n  }\n\n  private initPeriodPrefetch() {\n    let token = ''; // 应用自定义token参数，通常作为鉴权参数使用。在开发云侧云函数时，可以提取鉴权信息，也可以不进行鉴权。如果不需要鉴权，该参数可以为空\n    let params = ''; // 应用自定义params参数，通常作为筛选参数使用，可以定义为JSON格式。在开发云侧云函数时，可以提取该参数进行筛选。如果不需要筛选，该参数可以为空\n    PrefetchUtil.registerPrefetchTask(token, params);\n  }\n\n  private periodicPrefetch() {\n    this.initPeriodPrefetch();\n    if (!PrefetchUtil.hasPrefetchTaskData()) { // 是否有周期性预加载数据：如果是首次注册，12小时后才有周期性预加载数据\n      hilog.info(HILOG_DOMAIN, TAG, 'not has prefetch data');\n      this.cloudFunctionCall(); // 使用普通方式获取应用数据\n      return;\n    }\n    PrefetchUtil.getPrefetchResult(cloudResPrefetch.PrefetchMode.PERIODIC_PREFETCH)\n      .then((data: cloudResPrefetch.PrefetchResult) => { // 接口调用成功，处理缓存的应用数据\n        hilog.info(HILOG_DOMAIN, TAG, 'get periodic prefetch cache successfully');\n        let dataResult = data.result; // data.result即是缓存的应用数据\n        let timestamp = data.timestamp; // data.timestamp即是缓存拉取时间\n        let token = data.token; // data.token即是注册任务token\n        // todo 处理dataResult\n        hilog.info(HILOG_DOMAIN, TAG, 'get periodic prefetch dataResult: %{public}s', JSON.stringify(dataResult));\n        hilog.info(HILOG_DOMAIN, TAG, 'get periodic prefetch timestamp: %{public}s', timestamp.toString());\n        hilog.info(HILOG_DOMAIN, TAG, 'get periodic prefetch token: %{public}s', token)\n      })\n      .catch((err: BusinessError) => {\n        hilog.error(HILOG_DOMAIN, TAG, `get periodic prefetch cache failed: ${err.message}, ${err.code}`);\n        this.cloudFunctionCall(); // 应用走原有逻辑获取数据，示例使用云函数获取\n      })\n  }\n\n  // 获取跳链安装预加载的链接信息\n  private async popPrefetchLink(): Promise<string> {\n    this.initLinkPrefetchMode();\n    if (this.linkPrefetchMode) {\n      return Promise.resolve(\"\");\n    }\n    this.setLinkPrefetchMode(cloudResPrefetch.PrefetchMode.PERIODIC_PREFETCH);\n    try {\n      let link = await deferredLink.popDeferredLink();\n      return Promise.resolve(link);\n    } catch (err) {\n      return Promise.resolve(\"\");\n    }\n  }\n\n  private cloudFunctionCall() {\n    hilog.info(HILOG_DOMAIN, TAG, 'cloudFunctionCall start');\n    cloudFunction.call({\n      name: \"function_name\", // 需修改为实际的云函数名称\n      timeout: 5 * 1000\n    }).then((data: cloudFunction.FunctionResult) => {\n      hilog.info(HILOG_DOMAIN, TAG, 'call function successfully');\n      let dataResult = data.result; // data.result即是缓存的应用数据\n      // todo 处理dataResult\n      hilog.info(HILOG_DOMAIN, TAG, 'call function get: %{public}s', JSON.stringify(dataResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(HILOG_DOMAIN, TAG, 'call function failed: %{public}s', err.message);\n    })\n  }\n}\n"
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