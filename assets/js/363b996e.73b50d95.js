"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["905475"], {
755721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_predictor_web_predictor_md_363_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-predictor-web-predictor-md-363.json
var site_docs_arkweb_web_manage_loading_browsing_web_predictor_web_predictor_md_363_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-predictor/web-predictor","title":"加速Web页面的访问","description":"当Web页面加载缓慢时，可以使用预连接、预加载和预获取POST请求的能力加速Web页面的访问。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-predictor/web-predictor.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-predictor","slug":"/arkweb/web-manage-loading-browsing/web-predictor/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-predictor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"加速Web页面的访问","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-predictor","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义页面请求响应","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/"},"next":{"title":"设置Web组件前进后退缓存","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-predictor/web-predictor.md


const frontMatter = {
	title: '加速Web页面的访问',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-predictor',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '加速Web页面的访问';

const assets = {

};



const toc = [{
  "value": "预解析和预连接",
  "id": "预解析和预连接",
  "level": 2
}, {
  "value": "预加载",
  "id": "预加载",
  "level": 2
}, {
  "value": "预获取POST请求",
  "id": "预获取post请求",
  "level": 2
}, {
  "value": "预编译生成编译缓存",
  "id": "预编译生成编译缓存",
  "level": 2
}, {
  "value": "离线资源免拦截注入",
  "id": "离线资源免拦截注入",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "加速web页面的访问",
        children: "加速Web页面的访问"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web页面加载缓慢时，可以使用预连接、预加载和预获取POST请求的能力加速Web页面的访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对Web页面加载性能优化的详细内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization#section128761465256",
        children: "Web页面加载优化性能指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预解析和预连接",
      children: "预解析和预连接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此方法可以针对域名级进行优化，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prepareforpageload10",
        children: "prepareForPageLoad()"
      }), "来预解析或者预连接将要加载的页面。该方式仅对url进行DNS解析以及建立tcp连接，但不会获取主资源子资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，在Web组件的onAppear中对要加载的页面进行预连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n// ...\n\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('loadData')\n        .onClick(() => {\n          if (this.webviewController.accessBackward()) {\n            this.webviewController.backward();\n          }\n        })\n      Web({ src: 'https://www.example.com/', controller: this.webviewController })\n        .onAppear(() => {\n          // 指定第二个参数为true，代表要进行预连接，如果为false该接口只会对网址进行dns预解析\n          // 第三个参数为要预连接socket的个数。最多允许6个。\n          webview.WebviewController.prepareForPageLoad('https://www.example.com/', true, 2);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#initializewebengine",
        children: "initializeWebEngine()"
      }), "来提前初始化内核，然后在初始化内核后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prepareforpageload10",
        children: "prepareForPageLoad()"
      }), "对即将要加载的页面进行预解析、预连接。这种方式适合提前对首页进行预解析、预连接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，Ability的onCreate中提前初始化Web内核并对首页进行预连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    console.info(\"EntryAbility onCreate\");\n    webview.WebviewController.initializeWebEngine();\n    // 预连接时，需要将'`https://www.example.com'替换成真实要访问的网站地址`。\n    webview.WebviewController.prepareForPageLoad(\"https://www.example.com/\", true, 2);\n    AppStorage.setOrCreate(\"abilityWant\", want);\n    console.info(\"EntryAbility onCreate done\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预加载",
      children: "预加载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此方法可针对资源级进行优化。如果能够预测到Web组件将要加载的页面或者即将要跳转的页面。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prefetchpage10",
        children: "prefetchPage()"
      }), "来预加载即将要加载的页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预加载会提前下载页面所需的资源，包括主资源子资源，避免阻塞页面渲染。但不会执行网页JavaScript代码。预加载是WebviewController的实例方法，需要一个已经关联好Web组件的WebviewController实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，在onPageEnd的时候触发下一个要访问的页面的预加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n// ...\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com/', controller: this.webviewController })\n        .onPageEnd(() => {\n          // 预加载`https://www.iana.org/help/example-domains`。\n          this.webviewController.prefetchPage('https://www.iana.org/help/example-domains');\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预获取post请求",
      children: "预获取POST请求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此方法可以针对请求级进行优化。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prefetchresource12",
        children: "prefetchResource()"
      }), "预获取将要加载页面中的POST请求。在页面加载结束时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#clearprefetchedresource12",
        children: "clearPrefetchedResource()"
      }), "清除后续不再使用的预获取资源缓存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例，在Web组件onAppear中，对要加载页面中的POST请求进行预获取。在onPageEnd中，可以清除预获取的POST请求缓存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n// ...\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com/', controller: this.webviewController })\n        .onAppear(() => {\n          // 预获取时，需要将'`https://www.example1.com/post?e=f&g=h'替换成真实要访问的网站地址`。\n          webview.WebviewController.prefetchResource(\n            {\n              url: 'https://www.example1.com/post?e=f&g=h',\n              method: 'POST',\n              formData: 'a=x&b=y',\n            },\n            [{\n              headerKey: 'c',\n              headerValue: 'z',\n            },],\n            'KeyX', 500);\n        })\n        .onPageEnd(() => {\n          // 清除后续不再使用的预获取资源缓存。\n          webview.WebviewController.clearPrefetchedResource(['KeyX',]);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果能够预测到Web组件将要加载页面或者即将要跳转页面中的POST请求。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prefetchresource12",
        children: "prefetchResource()"
      }), "预获取即将要加载页面的POST请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例，在onPageEnd中，触发预获取一个要访问页面的POST请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n// ...\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com/', controller: this.webviewController })\n        .onPageEnd(() => {\n          // 预获取时，需要将'`https://www.example1.com/post?e=f&g=h'替换成真实要访问的网站地址`。\n          webview.WebviewController.prefetchResource(\n            {\n              url: 'https://www.example1.com/post?e=f&g=h',\n              method: 'POST',\n              formData: 'a=x&b=y',\n            },\n            [{\n              headerKey: 'c',\n              headerValue: 'z',\n            },],\n            'KeyX', 500);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#initializewebengine",
        children: "initializeWebEngine()"
      }), "提前初始化内核，然后在初始化内核后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#prefetchresource12",
        children: "prefetchResource()"
      }), "预获取将要加载页面中的POST请求。这种方式适合提前预获取首页的POST请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例，在Ability的onCreate中，提前初始化Web内核并预获取首页的POST请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    console.info(\"EntryAbility onCreate\");\n    webview.WebviewController.initializeWebEngine();\n    // 预获取时，需要将\"`https://www.example1.com/post?e=f&g=h\"替换成真实要访问的网站地址`。\n    webview.WebviewController.prefetchResource(\n      {\n        url: \"https://www.example1.com/post?e=f&g=h\",\n        method: \"POST\",\n        formData: \"a=x&b=y\",\n      },\n      [{\n        headerKey: \"c\",\n        headerValue: \"z\",\n      },],\n      \"KeyX\", 500);\n    AppStorage.setOrCreate(\"abilityWant\", want);\n    console.info(\"EntryAbility onCreate done\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预编译生成编译缓存",
      children: "预编译生成编译缓存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#precompilejavascript12",
        children: "precompileJavaScript()"
      }), "在页面加载前提前生成脚本文件的编译缓存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐配合动态组件使用，使用离线的Web组件用于生成字节码缓存，并在适当的时机加载业务用Web组件使用这些字节码缓存。下方是代码示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，在EntryAbility中将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "存到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "localStorage"
          }), "中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nconst localStorage: LocalStorage = new LocalStorage('uiContext');\n\nexport default class EntryAbility extends UIAbility {\n  storage: LocalStorage = localStorage;\n\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', this.storage, (err, data) => {\n      if (err.code) {\n        return;\n      }\n\n      this.storage.setOrCreate<UIContext>(\"uiContext\", windowStage.getMainWindowSync().getUIContext());\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写动态组件所需基础代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\nexport interface BuilderData {\n  url: string;\n  controller: WebviewController;\n  context: UIContext;\n}\n\nlet storage : LocalStorage | undefined = undefined;\n\nexport class NodeControllerImpl extends NodeController {\n  private rootNode: BuilderNode<BuilderData[]> | null = null;\n  private wrappedBuilder: WrappedBuilder<BuilderData[]> | null = null;\n\n  constructor(wrappedBuilder: WrappedBuilder<BuilderData[]>, context: UIContext) {\n    storage = context.getSharedLocalStorage();\n    super();\n    this.wrappedBuilder = wrappedBuilder;\n  }\n\n  makeNode(): FrameNode | null {\n    if (this.rootNode != null) {\n      return this.rootNode.getFrameNode();\n    }\n    return null;\n  }\n\n  initWeb(url: string, controller: WebviewController) {\n    if(this.rootNode != null) {\n      return;\n    }\n\n    const uiContext: UIContext = storage!.get<UIContext>('uiContext') as UIContext;\n    if (!uiContext) {\n      return;\n    }\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrappedBuilder, { url: url, controller: controller });\n  }\n}\n\nexport const createNode = (wrappedBuilder: WrappedBuilder<BuilderData[]>, data: BuilderData) => {\n  const baseNode = new NodeControllerImpl(wrappedBuilder, data.context);\n  baseNode.initWeb(data.url, data.controller);\n  return baseNode;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写用于生成字节码缓存的组件，本例中的本地JavaScript资源内容通过文件读取接口读取rawfile目录下的本地文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BuilderData } from './DynamicComponent';\nimport { Config, configs } from './PrecompileConfig';\n\n@Builder\nfunction webBuilder(data: BuilderData) {\n  Web({ src: data.url, controller: data.controller })\n    .onControllerAttached(() => {\n      precompile(data.controller, configs, data.context);\n    })\n    .fileAccess(true)\n}\n\nexport const precompileWebview = wrapBuilder<BuilderData[]>(webBuilder);\n\nexport const precompile = async (controller: WebviewController, configs: Array<Config>, context: UIContext) => {\n  for (const config of configs) {\n    let content = await readRawFile(config.localPath, context);\n\n    try {\n      controller.precompileJavaScript(config.url, content, config.options)\n        .then(errCode => {\n          console.error('precompile successfully! ' + errCode);\n        }).catch((errCode: number) => {\n          console.error('precompile failed. ' + errCode);\n      });\n    } catch (err) {\n      console.error('precompile failed. ' + err.code + ' ' + err.message);\n    }\n  }\n}\n\nasync function readRawFile(path: string, context: UIContext) {\n  try {\n    return await context.getHostContext()!.resourceManager.getRawFileContent(path);\n  } catch (err) {\n    return new Uint8Array(0);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JavaScript资源的获取方式也可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http",
            children: "网络请求"
          }), "的方式获取，但此方法获取到的HTTP响应头非标准HTTP响应头格式，需额外将响应头转换成标准HTTP响应头格式后使用。如通过网络请求获取到的响应头是e-tag，则需要将其转换成E-Tag后使用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写业务用组件代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BuilderData } from './DynamicComponent';\n\n@Builder\nfunction webBuilder(data: BuilderData) {\n  // 此处组件可根据业务需要自行扩展\n  Web({ src: data.url, controller: data.controller })\n    .cacheMode(CacheMode.Default)\n}\n\nexport const businessWebview = wrapBuilder<BuilderData[]>(webBuilder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写资源配置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb'\n\nexport interface Config {\n  url:  string,\n  localPath: string, // 本地资源路径\n  options: webview.CacheOptions\n}\n\nexport let configs: Config[] = [\n  {\n    url: 'https://www.example.com/example.js',\n    localPath: 'example.js',\n    options: {\n      responseHeaders: [\n        { headerKey: 'E-Tag', headerValue: 'aWO42N9P9dG/5xqYQCxsx+vDOoU='},\n        { headerKey: 'Last-Modified', headerValue: 'Wed, 21 Mar 2025 10:38:41 GMT'}\n      ]\n    }\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面中使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { NodeController } from '@kit.ArkUI';\nimport { createNode } from './DynamicComponent';\nimport { precompileWebview } from './PrecompileWebview';\nimport { businessWebview } from './BusinessWebview';\n\n@Entry\n@Component\nstruct Index {\n  @State precompileNode: NodeController | undefined = undefined;\n  precompileController: webview.WebviewController = new webview.WebviewController();\n\n  @State businessNode: NodeController | undefined = undefined;\n  businessController: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear(): void {\n    // 初始化用于注入本地资源的Web组件\n    this.precompileNode = createNode(precompileWebview,\n      { url: 'https://www.example.com/empty.html', controller: this.precompileController, context: this.getUIContext()});\n  }\n\n  build() {\n    Column() {\n      // 在适当的时机加载业务用Web组件，本例以Button点击触发为例\n      Button('加载页面')\n        .onClick(() => {\n          this.businessNode = createNode(businessWebview, {\n            url: 'https://www.example.com/business.html',\n            controller: this.businessController,\n            context: this.getUIContext()\n          });\n        })\n      // 用于业务的Web组件\n      NodeContainer(this.businessNode);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要更新本地已经生成的编译字节码时，修改cacheOptions参数中responseHeaders中的E-Tag或Last-Modified响应头对应的值，再次调用接口即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线资源免拦截注入",
      children: "离线资源免拦截注入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#injectofflineresources12",
        children: "injectOfflineResources()"
      }), "在页面加载前提前将图片、样式表或脚本资源注入到应用的内存缓存中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐配合动态组件使用，使用离线的Web组件用于将资源注入到内核的内存缓存中，并在适当的时机加载业务用Web组件使用这些资源。下方是代码示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，在EntryAbility中将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "存到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "localStorage"
          }), "中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nconst localStorage: LocalStorage = new LocalStorage('uiContext');\n\nexport default class EntryAbility extends UIAbility {\n  storage: LocalStorage = localStorage;\n\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', this.storage, (err, data) => {\n      if (err.code) {\n        return;\n      }\n\n      this.storage.setOrCreate<UIContext>(\"uiContext\", windowStage.getMainWindowSync().getUIContext());\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写动态组件所需基础代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\nexport interface BuilderData {\n  url: string;\n  controller: WebviewController;\n  context: UIContext;\n}\n\nlet storage : LocalStorage | undefined = undefined;\n\nexport class NodeControllerImpl extends NodeController {\n  private rootNode: BuilderNode<BuilderData[]> | null = null;\n  private wrappedBuilder: WrappedBuilder<BuilderData[]> | null = null;\n\n  constructor(wrappedBuilder: WrappedBuilder<BuilderData[]>,  context: UIContext) {\n  storage = context.getSharedLocalStorage();\n    super();\n    this.wrappedBuilder = wrappedBuilder;\n  }\n\n  makeNode(): FrameNode | null {\n    if (this.rootNode != null) {\n      return this.rootNode.getFrameNode();\n    }\n    return null;\n  }\n\n  initWeb(url: string, controller: WebviewController) {\n    if(this.rootNode != null) {\n      return;\n    }\n\n    const uiContext: UIContext = storage!.get<UIContext>('uiContext') as UIContext;\n    if (!uiContext) {\n      return;\n    }\n    this.rootNode = new BuilderNode(uiContext);\n    this.rootNode.build(this.wrappedBuilder, { url: url, controller: controller });\n  }\n}\n\nexport const createNode = (wrappedBuilder: WrappedBuilder<BuilderData[]>, data: BuilderData) => {\n  const baseNode = new NodeControllerImpl(wrappedBuilder, data.context);\n  baseNode.initWeb(data.url, data.controller);\n  return baseNode;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写用于注入资源的组件代码，本例中的本地资源内容通过文件读取接口读取rawfile目录下的本地文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { resourceConfigs } from './Resource';\nimport { BuilderData } from './DynamicComponent';\n\n@Builder\nfunction webBuilder(data: BuilderData) {\n  Web({ src: data.url, controller: data.controller })\n    .onControllerAttached(async () => {\n      try {\n        data.controller.injectOfflineResources(await getData (data.context));\n      } catch (err) {\n        console.error('error: ' + err.code + ' ' + err.message);\n      }\n    })\n    .fileAccess(true)\n}\n\nexport const injectWebview = wrapBuilder<BuilderData[]>(webBuilder);\n\nexport async function getData(context: UIContext) {\n  const resourceMapArr: webview.OfflineResourceMap[] = [];\n\n  // 读取配置，从rawfile目录中读取文件内容\n  for (let config of resourceConfigs) {\n    let buf: Uint8Array = new Uint8Array(0);\n    if (config.localPath) {\n      buf = await readRawFile(config.localPath, context);\n    }\n\n    resourceMapArr.push({\n      urlList: config.urlList,\n      resource: buf,\n      responseHeaders: config.responseHeaders,\n      type: config.type,\n    })\n  }\n\n  return resourceMapArr;\n}\n\nexport async function readRawFile(url: string, context: UIContext) {\n  try {\n    return await context.getHostContext()!.resourceManager.getRawFileContent(url);\n  } catch (err) {\n    return new Uint8Array(0);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写业务用组件代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BuilderData } from './DynamicComponent';\n\n@Builder\nfunction webBuilder(data: BuilderData) {\n  // 此处组件可根据业务需要自行扩展\n  Web({ src: data.url, controller: data.controller })\n    .cacheMode(CacheMode.Default)\n}\n\nexport const businessWebview = wrapBuilder<BuilderData[]>(webBuilder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写资源配置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\nexport interface ResourceConfig {\n  urlList: Array<string>,\n  type: webview.OfflineResourceType,\n  responseHeaders: Array<Header>,\n  localPath: string, // 本地资源存放在rawfile目录下的路径\n}\n\nexport const resourceConfigs: ResourceConfig[] = [\n  {\n    localPath: 'example.png',\n    urlList: [\n      'https://www.example.com/',\n      'https://www.example.com/path1/example.png',\n      'https://www.example.com/path2/example.png',\n    ],\n    type: webview.OfflineResourceType.IMAGE,\n    responseHeaders: [\n      { headerKey: 'Cache-Control', headerValue: 'max-age=1000' },\n      { headerKey: 'Content-Type', headerValue: 'image/png' },\n    ]\n  },\n  {\n    localPath: 'example.js',\n    urlList: [ // 仅提供一个url，这个url既作为资源的源，也作为资源的网络请求地址\n      'https://www.example.com/example.js',\n    ],\n    type: webview.OfflineResourceType.CLASSIC_JS,\n    responseHeaders: [\n      // 以<script crossorigin='anonymous' />方式使用，提供额外的响应头\n      { headerKey: 'Cross-Origin', headerValue:'anonymous' }\n    ]\n  },\n];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面中使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { NodeController } from '@kit.ArkUI';\nimport { createNode } from './DynamicComponent';\nimport { injectWebview } from './InjectWebview';\nimport { businessWebview } from './BusinessWebview';\n\n@Entry\n@Component\nstruct Index {\n  @State injectNode: NodeController | undefined = undefined;\n  injectController: webview.WebviewController = new webview.WebviewController();\n\n  @State businessNode: NodeController | undefined = undefined;\n  businessController: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear(): void {\n    // 初始化用于注入本地资源的Web组件, 提供一个空的html页面作为url即可\n    this.injectNode = createNode(injectWebview,\n      { url: 'https://www.example.com/empty.html', controller: this.injectController, context: this.getUIContext()});\n  }\n\n  build() {\n    Column() {\n      // 在适当的时机加载业务用Web组件，本例以Button点击触发为例\n      Button('加载页面')\n        .onClick(() => {\n          this.businessNode = createNode(businessWebview, {\n            url: 'https://www.example.com/business.html',\n            controller: this.businessController,\n            context: this.getUIContext()\n          });\n        })\n      // 用于业务的Web组件\n      NodeContainer(this.businessNode);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的HTML网页示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head></head>\n<body>\n  <img src=\"https://www.example.com/path1/request.png\" />\n  <img src=\"https://www.example.com/path2/request.png\" />\n  <script src=\"https://www.example.com/example.js\" crossorigin=\"anonymous\"></script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
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