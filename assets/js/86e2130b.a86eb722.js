"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["993727"], {
286455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_offline_mode_web_offline_mode_md_86e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-offline-mode-web-offline-mode-md-86e.json
var site_docs_arkweb_web_offline_mode_web_offline_mode_md_86e_namespaceObject = JSON.parse('{"id":"arkweb/web-offline-mode/web-offline-mode","title":"使用离线Web组件","description":"Web组件能够实现在不同窗口的组件树上进行挂载或移除操作，这一能力使得开发者可以预先创建Web组件，从而实现性能优化。例如，Tab页为Web组件时，页面预先渲染，便于即时显示。","source":"@site/docs/arkweb/web-offline-mode/web-offline-mode.md","sourceDirName":"arkweb/web-offline-mode","slug":"/arkweb/web-offline-mode/","permalink":"/harmonyos-docs-site/arkweb/web-offline-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"使用离线Web组件","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-offline-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同层渲染","permalink":"/harmonyos-docs-site/arkweb/web-same-layer/"},"next":{"title":"使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景","permalink":"/harmonyos-docs-site/arkweb/web-native-messaging/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-offline-mode/web-offline-mode.md


const frontMatter = {
	title: '使用离线Web组件',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-offline-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用离线Web组件';

const assets = {

};



const toc = [{
  "value": "整体架构",
  "id": "整体架构",
  "level": 2
}, {
  "value": "创建离线Web组件",
  "id": "创建离线web组件",
  "level": 2
}, {
  "value": "预启动渲染进程",
  "id": "预启动渲染进程",
  "level": 2
}, {
  "value": "预渲染Web页面",
  "id": "预渲染web页面",
  "level": 2
}, {
  "value": "复用和释放离线Web组件",
  "id": "复用和释放离线web组件",
  "level": 2
}, {
  "value": "复用离线Web组件",
  "id": "复用离线web组件",
  "level": 3
}, {
  "value": "释放离线Web组件",
  "id": "释放离线web组件",
  "level": 3
}, {
  "value": "复用和释放离线Web组件完整示例",
  "id": "复用和释放离线web组件完整示例",
  "level": 3
}, {
  "value": "常见白屏问题排查",
  "id": "常见白屏问题排查",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用离线web组件",
        children: "使用离线Web组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件能够实现在不同窗口的组件树上进行挂载或移除操作，这一能力使得开发者可以预先创建Web组件，从而实现性能优化。例如，Tab页为Web组件时，页面预先渲染，便于即时显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["离线Web组件基于自定义占位组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "实现。基本原理是构建支持命令式创建的Web组件，此类组件创建后不会立即挂载到组件树中，状态为Hidden和Inactive，因此不会立即对用户呈现。开发者可以在后续使用中按需动态挂载这些组件，以实现更灵活的使用方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用离线Web组件可以预启动渲染进程和预渲染Web页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预启动渲染进程：在未进入Web页面时，提前创建空Web组件，启动Web的渲染进程，为后续使用做好准备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预渲染Web页面：在Web页面启动或跳转的场景下，预先在后台创建Web组件，加载数据并完成渲染，从而在Web页面启动或跳转时实现快速显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "整体架构",
      children: "整体架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下图所示，在需要离屏创建Web组件时，定义一个自定义组件以封装Web组件，此Web组件在离线状态下被创建，封装于无状态的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "节点中，并与相应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "组件绑定。Web组件在后台预渲染完毕后，当需要展示时，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "将其挂载到ViewTree的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "中，即与对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "组件绑定，即可挂载上树并显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59887)/* ["default"] */.A) + "",
        width: "775",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建离线web组件",
      children: "创建离线Web组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示了如何预先创建离线Web组件，并在需要的时候进行挂载和显示。在后续内容中，预启动渲染进程和预渲染Web页面作为性能优化措施，均利用离线Web组件实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844285)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Web组件将占用内存（每个Web组件大约200MB）和计算资源，建议避免一次性创建大量离线Web组件，以减少资源消耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWindowStageCreate(windowStage: window.WindowStage): void {\n  windowStage.loadContent('pages/Index', (err, data) => {\n    // 创建Web动态组件（需传入UIContext），loadContent之后的任意时机均可创建\n    createNWeb('www.example.com', windowStage.getMainWindowSync().getUIContext());\n    if (err.code) {\n      return;\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建NodeController\n// Common.ets\nimport { UIContext, NodeController, BuilderNode, Size, FrameNode } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\n// @Builder中为动态组件的具体组件内容\n// Data为入参封装类\nclass Data {\n  public url: ResourceStr = 'www.example.com';\n  public controller: WebviewController = new webview.WebviewController();\n}\n\n@Builder\nfunction webBuilder(data: Data) {\n  Column() {\n    Web({ src: data.url, controller: data.controller })\n      .width('100%')\n      .height('100%')\n  }\n}\n\nlet wrap = wrapBuilder<Data[]>(webBuilder);\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用\nexport class MyNodeController extends NodeController {\n  private rootNode: BuilderNode<Data[]> | null = null;\n\n  // 必须要重写的方法，用于构建节点数、返回节点挂载在对应NodeContainer中\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新\n  makeNode(uiContext: UIContext): FrameNode | null {\n    console.info('uicontext is undefined : ' + (uiContext === undefined));\n    if (this.rootNode !== null) {\n      // 返回FrameNode节点\n      return this.rootNode.getFrameNode();\n    }\n    // 返回null控制动态组件脱离绑定节点\n    return null;\n  }\n\n  // 当布局大小发生变化时进行回调\n  aboutToResize(size: Size) {\n    console.info('aboutToResize width : ' + size.width + ' height : ' + size.height);\n  }\n\n  // 当controller对应的NodeContainer在Appear的时候进行回调\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  // 当controller对应的NodeContainer在Disappear的时候进行回调\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n\n  // 此函数为自定义函数，可作为初始化函数使用\n  // 通过UIContext初始化BuilderNode，再通过BuilderNode中的build接口初始化@Builder中的内容\n  initWeb(url: ResourceStr, uiContext: UIContext, control: WebviewController) {\n    if (this.rootNode !== null) {\n      return;\n    }\n    // 创建节点，需要uiContext\n    this.rootNode = new BuilderNode(uiContext);\n    // 创建动态Web组件\n    this.rootNode.build(wrap, { url: url, controller: control });\n  }\n}\n\n// 创建Map保存所需要的NodeController\nlet nodeMap: Map<ResourceStr, MyNodeController | undefined> = new Map();\n// 创建Map保存所需要的WebViewController\nlet controllerMap: Map<ResourceStr, WebviewController | undefined> = new Map();\n\n// 初始化需要UIContext 需在Ability获取\nexport const createNWeb = (url: ResourceStr, uiContext: UIContext) => {\n  // 创建NodeController\n  let baseNode = new MyNodeController();\n  let controller = new webview.WebviewController();\n  // 初始化自定义Web组件\n  baseNode.initWeb(url, uiContext, controller);\n  controllerMap.set(url, controller);\n  nodeMap.set(url, baseNode);\n}\n\n// 自定义获取NodeController接口\nexport const getNWeb = (url: ResourceStr): MyNodeController | undefined => {\n  return nodeMap.get(url);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { getNWeb } from './Common'\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // NodeContainer用于与NodeController节点绑定，rebuild会触发makeNode\n        // Page页通过NodeContainer接口绑定NodeController，实现动态组件页面显示\n        NodeContainer(getNWeb('www.example.com'))\n          .height('90%')\n          .width('100%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预启动渲染进程",
      children: "预启动渲染进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在后台预先创建一个Web组件，以启动用于渲染的Web渲染进程，这样可以节省后续Web组件加载时启动Web渲染进程所需的时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470264)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅在采用单渲染进程模式的应用中，即全局共享一个Web渲染进程时，优化效果显著。Web渲染进程仅在所有Web组件都被销毁后才会终止。因此，建议应用至少保持一个Web组件处于活动状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建额外的Web组件会产生内存开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例在onWindowStageCreate时预创建Web组件加载blank页面，提前启动Render进程，从index跳转到index2时，优化了Web渲染进程启动和初始化的耗时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { createNWeb } from '../pages/Common';\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err && err.code) {\n        console.info('loadContent failed. errorCode: ' + err.code);\n        return;\n      }\n      let windowClass: window.Window = windowStage.getMainWindowSync(); // Obtain the main window of the application.\n      if (!windowClass) {\n        console.info('windowClass is null');\n        return;\n      }\n      // 创建空的Web动态组件（需传入UIContext），loadContent之后的任意时机均可创建\n      createNWeb('about:blank', windowClass.getUIContext());\n    });\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建NodeController\n// Common.ets\nimport { UIContext, NodeController, BuilderNode, Size, FrameNode } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\n// @Builder中为动态组件的具体组件内容\n// Data为入参封装类\nclass Data {\n  public url: ResourceStr = 'www.example.com';\n  public controller: WebviewController = new webview.WebviewController();\n}\n\n@Builder\nfunction webBuilder(data: Data) {\n  Column() {\n    Web({ src: data.url, controller: data.controller })\n      .width('100%')\n      .height('100%')\n  }\n}\n\nlet wrap = wrapBuilder<Data[]>(webBuilder);\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用\nexport class MyNodeController extends NodeController {\n  private rootNode: BuilderNode<Data[]> | null = null;\n\n  // 必须要重写的方法，用于构建节点数、返回节点挂载在对应NodeContainer中\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新\n  makeNode(uiContext: UIContext): FrameNode | null {\n    console.info('uicontext is undefined : ' + (uiContext === undefined));\n    if (this.rootNode !== null) {\n      // 返回FrameNode节点\n      return this.rootNode.getFrameNode();\n    }\n    // 返回null控制动态组件脱离绑定节点\n    return null;\n  }\n\n  // 当布局大小发生变化时进行回调\n  aboutToResize(size: Size) {\n    console.info('aboutToResize width : ' + size.width + ' height : ' + size.height);\n  }\n\n  // 当controller对应的NodeContainer在Appear的时候进行回调\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  // 当controller对应的NodeContainer在Disappear的时候进行回调\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n\n  // 此函数为自定义函数，可作为初始化函数使用\n  // 通过UIContext初始化BuilderNode，再通过BuilderNode中的build接口初始化@Builder中的内容\n  initWeb(url: ResourceStr, uiContext: UIContext, control: WebviewController) {\n    if (this.rootNode !== null) {\n      return;\n    }\n    // 创建节点，需要uiContext\n    this.rootNode = new BuilderNode(uiContext);\n    // 创建动态Web组件\n    this.rootNode.build(wrap, { url: url, controller: control });\n  }\n}\n\n// 创建Map保存所需要的NodeController\nlet nodeMap: Map<ResourceStr, MyNodeController | undefined> = new Map();\n// 创建Map保存所需要的WebViewController\nlet controllerMap: Map<ResourceStr, WebviewController | undefined> = new Map();\n\n// 初始化需要UIContext 需在Ability获取\nexport const createNWeb = (url: ResourceStr, uiContext: UIContext) => {\n  // 创建NodeController\n  let baseNode = new MyNodeController();\n  let controller = new webview.WebviewController();\n  // 初始化自定义Web组件\n  baseNode.initWeb(url, uiContext, controller);\n  controllerMap.set(url, controller);\n  nodeMap.set(url, baseNode);\n}\n\n// 自定义获取NodeController接口\nexport const getNWeb = (url: ResourceStr): MyNodeController | undefined => {\n  return nodeMap.get(url);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport { webview } from '@kit.ArkWeb';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index1 {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('Jump to web page').onClick(()=> {\n        this.getUIContext().getRouter().pushUrl({ url: 'pages/Index2' }).catch((error: BusinessError) => {\n          hilog.info(0x0000, 'testTag', 'pushUrl error, %{public}s', error);\n        })\n      }).width('100%').height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index2 {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Row() {\n      Column() {\n        Web({src: $r('app.string.ExampleUrl'), controller: this.webviewController})\n          .width('100%')\n          .height('100%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预渲染web页面",
      children: "预渲染Web页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预渲染Web页面优化方案适用于Web页面启动和跳转场景，例如，进入首页后，跳转到其他子页。建议在高命中率的页面使用该方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预渲染Web页面的实现是提前创建离线Web组件，设置Web为Active状态来开启渲染引擎，进行后台渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155994)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预渲染Web页面时，需要明确加载的资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于该方案会将不可见的后台Web设置为Active状态，建议不要预渲染包含自动播放音视频的页面。应用开发者请自行检查和管理页面行为。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["预渲染的网页会在后台不断进行渲染，建议在预渲染完成后立即停止渲染，以防止发热和功耗问题。可以参考以下示例，使用 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfirstmeaningfulpaint12",
          children: "onFirstMeaningfulPaint"
        }), " 来确定停止时机，该接口适用于http和https网页。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWindowStageCreate(windowStage: window.WindowStage): void {\n  windowStage.loadContent('pages/Index', (err, data) => {\n    // 创建Web动态组件（需传入UIContext），loadContent之后的任意时机均可创建\n    createNWeb('www.example.com', windowStage.getMainWindowSync().getUIContext());\n    if (err.code) {\n      return;\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建NodeController\n// Common.ets\nimport { UIContext } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\nimport { NodeController, BuilderNode, Size, FrameNode } from '@kit.ArkUI';\n\n// @Builder中为动态组件的具体组件内容\n// Data为入参封装类\nclass Data {\n  public url: string = 'www.example.com';\n  public controller: WebviewController = new webview.WebviewController();\n}\n\n// 通过布尔变量shouldInactive控制网页在后台完成预渲染后停止渲染\nlet shouldInactive: boolean = true;\n\n@Builder\nfunction webBuilder(data: Data) {\n  Column() {\n    Web({ src: data.url, controller: data.controller })\n      .onPageBegin(() => {\n        // 调用onActive，开启渲染\n        data.controller.onActive();\n      })\n      .onFirstMeaningfulPaint(() => {\n        if (!shouldInactive) {\n          return;\n        }\n        // 在预渲染完成时触发，停止渲染\n        data.controller.onInactive();\n        shouldInactive = false;\n      })\n      .width('100%')\n      .height('100%')\n  }\n}\n\nlet wrap = wrapBuilder<Data[]>(webBuilder);\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用\nexport class MyNodeController extends NodeController {\n  private rootNode: BuilderNode<Data[]> | null = null;\n\n  // 必须要重写的方法，用于构建节点数、返回节点挂载在对应NodeContainer中\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新\n  makeNode(uiContext: UIContext): FrameNode | null {\n    console.info('uiContext is undefined : ' + (uiContext === undefined));\n    if (this.rootNode !== null) {\n      // 返回FrameNode节点\n      return this.rootNode.getFrameNode();\n    }\n    // 返回null控制动态组件脱离绑定节点\n    return null;\n  }\n\n  // 当布局大小发生变化时进行回调\n  aboutToResize(size: Size) {\n    console.info('aboutToResize width : ' + size.width + ' height : ' + size.height);\n  }\n\n  // 当controller对应的NodeContainer在Appear的时候进行回调\n  aboutToAppear() {\n    console.info('aboutToAppear');\n    // 切换到前台后，不需要停止渲染\n    shouldInactive = false;\n  }\n\n  // 当controller对应的NodeContainer在Disappear的时候进行回调\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n\n  // 此函数为自定义函数，可作为初始化函数使用\n  // 通过UIContext初始化BuilderNode，再通过BuilderNode中的build接口初始化@Builder中的内容\n  initWeb(url: string, uiContext: UIContext, control: WebviewController) {\n    if (this.rootNode !== null) {\n      return;\n    }\n    // 创建节点，需要uiContext\n    this.rootNode = new BuilderNode(uiContext);\n    // 创建动态Web组件\n    this.rootNode.build(wrap, { url: url, controller: control });\n  }\n}\n\n// 创建Map保存所需要的NodeController\nlet nodeMap: Map<string, MyNodeController | undefined> = new Map();\n// 创建Map保存所需要的WebViewController\nlet controllerMap: Map<string, WebviewController | undefined> = new Map();\n\n// 初始化需要UIContext 需在Ability获取\nexport const createNWeb = (url: string, uiContext: UIContext) => {\n  // 创建NodeController\n  let baseNode = new MyNodeController();\n  let controller = new webview.WebviewController();\n  // 初始化自定义Web组件\n  baseNode.initWeb(url, uiContext, controller);\n  controllerMap.set(url, controller)\n  nodeMap.set(url, baseNode);\n}\n\n// 自定义获取NodeController接口\nexport const getNWeb = (url: string): MyNodeController | undefined => {\n  return nodeMap.get(url);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { getNWeb } from './Common'\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // NodeContainer用于与NodeController节点绑定，rebuild会触发makeNode\n        // Page页通过NodeContainer接口绑定NodeController，实现动态组件页面显示\n        NodeContainer(getNWeb('www.example.com'))\n          .height('90%')\n          .width('100%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复用和释放离线web组件",
      children: "复用和释放离线Web组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过复用和释放离线Web组件，可以优化内存占用，降低应用因内存占用过高被系统终止的概率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331608)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个窗口推荐只使用一个Web组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议复用离线Web组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议释放不需要的离线Web组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "复用离线web组件",
      children: "复用离线Web组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用有多个UI页面都需要显示Web内容时，建议复用离线Web组件，减少组件创建和销毁的性能消耗以及创建多个Web组件的内存占用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "复用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线Web组件不再被使用时，调用WebController的loadUrl方法加载about:blank空页面，为下次其他UI页面复用这个离线Web组件做准备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新UI页面复用这个离线Web组件时，再调用WebController的loadUrl方法加载需要的Web页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "释放离线web组件",
      children: "释放离线Web组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退至后台，或者明确在特定时间段内不再需要使用离线Web组件时，建议释放该组件以减少应用的内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459216)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅当离线Web组件未绑定到UI页面时，才能释放该组件，否则可能导致NodeContainer组件显示空白。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以通过NodeController的onBind和onUnbind回调来跟踪离线Web组件的绑定状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码实现："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建Map保存所需要的NodeController\nlet nodeMap: Map<ResourceStr, MyNodeController | undefined> = new Map();\n\n// 创建保存uiContext的全局变量\nlet globalUiContext: UIContext | undefined = undefined;\n\n// 创建Set保存已释放的离线组件url信息\nlet recycledNWebs: Set<ResourceStr> = new Set()\n\n// 初始化需要UIContext 需在Ability获取\nexport const createNWeb = (url: ResourceStr, uiContext: UIContext) => {\n  // 创建NodeController\n  console.info('createNWeb, url = ' + url);\n  if (!globalUiContext) {\n    globalUiContext = uiContext;\n  }\n  if (getNWeb(url)) {\n    console.info('createNWeb, already exit this node, url:' + url);\n    return;\n  }\n\n  let baseNode = new MyNodeController();\n  // 初始化自定义Web组件\n  baseNode.initWeb(url, uiContext);\n  nodeMap.set(url, baseNode);\n  recycledNWebs.delete(url);\n}\n\n// 自定义释放/回收离线Web组件的接口，可作为释放离线Web组件函数使用，释放成功返回true\n// 当离线组件没有被NodeContainer绑定时，允许安全释放，否则节点在不重绘时会显示空白\nexport const recycleNWeb = (url: ResourceStr, force: boolean = false): boolean => {\n  console.info('recycleNWeb, url = ' + url);\n  let baseNode = nodeMap.get(url);\n  if (!baseNode) {\n    console.info('no such node, url = ' + url);\n    return false;\n  }\n  if (!force && baseNode.isBound()) {\n    console.info('the node is in bound and not force, can not delete');\n    return false;\n  }\n  baseNode.rootNode?.dispose();\n  baseNode.rebuild();\n  nodeMap.delete(url);\n  recycledNWebs.add(url);\n  return true;\n}\n\n// 自定义释放所有离线Web组件的接口\nexport const recycleNWebs = (force: boolean = false) => {\n  nodeMap.forEach((_node: MyNodeController | undefined, url: ResourceStr) => {\n    recycleNWeb(url, force);\n  });\n}\n\n// 自定义恢复之前释放离线Web组件的接口\nexport const restoreNWebs = (uiContext: UIContext | undefined = undefined) => {\n  if (!uiContext) {\n    uiContext = globalUiContext;\n  }\n  for (let url of recycledNWebs) {\n    if (uiContext) {\n      createNWeb(url, uiContext);\n    }\n  }\n  recycledNWebs.clear()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "复用和释放离线web组件完整示例",
      children: "复用和释放离线Web组件完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例功能说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例演示了如何复用和释放离线Web组件，以及如何执行预渲染。需要注意的是，示例中使用了多个离线Web组件，这仅用于完整演示相关功能和离线Web组件的使用方法，原则上每个窗口推荐只使用一个Web组件。示例主要演示了以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对比离线Web组件执行预渲染和不执行预渲染的效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用退后台时，释放离线Web组件的具体实现步骤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复用离线Web组件的具体实现步骤。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例演示了如何让应用退后台释放离线Web组件以及切前台恢复离线Web组件，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "的onBackground和onForeground回调中分别进行了离线Web组件的释放和恢复。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onForeground(): void {\n  // Ability has brought to foreground\n  hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  restoreNWebs()\n}\n\nonBackground(): void {\n  // Ability has back to background\n  hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  recycleNWebs()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI页面功能说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例包括Index页面、Home页面、Page1页面和Page2页面4个UI页面，其中每个UI页面的核心功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index页面作为入口页面，演示页面跳转、离线Web组件的回收，恢复及统计信息展示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用于跳转至Home页面的按钮；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "回收离线Web组件按钮（仅回收没有被绑定的离线Web组件）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "强制回收离线Web组件按钮（演示强制回收所有离线Web组件，包括已绑定和未绑定的组件，会导致对应的NodeContainer白屏）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "恢复离线Web组件按钮。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "显示离线Web组件的数量、状态及URL等详细信息。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Home页面为UI主页，演示离线Web组件的创建，预渲染的执行方法和时机："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "页面在创建时会创建3个离线组件，其中一个加载指定网页并进行预渲染，另外两个为空白离线Web组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "页面提供导航按钮用于跳转至Page1或Page2页面。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Page1页面同时显示了两个Web页面，每个页面使用了一个离线Web组件，加载并显示相同URL的内容。该页面用于演示预渲染与不预渲染的效果对比，以及如何复用离线组件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第一个离线Web组件执行了预渲染，可以直接显示页面内容，比第二个离线Web组件更快。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第二个离线Web组件是复用空闲的离线Web组件，其在UI页面的aboutToAppear的生命周期中动态加载这个url。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(894096)/* ["default"] */.A) + "",
            width: "383",
            height: "795"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Page2页面显示单个Web页面，使用复用空闲离线Web组件的方式加载指定url。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Page2页面可以通过传入参数加载指定url，并允许用户在加载后跳转到其他url。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Page2会在NavDestination的onWillHide回调中，让当前Web组件加载空白页并取消与当前UI的关联，为下次复用做准备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Page2页面支持嵌套，即使有多层UI页面嵌套，由于采用复用离线Web组件的方式，Web组件数量不会增加。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885793)/* ["default"] */.A) + "",
        width: "383",
        height: "795"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkWeb/UseOfflineWebComp/entry3",
        children: "复用和释放离线Web组件示例代码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见白屏问题排查",
      children: "常见白屏问题排查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.排查应用上网权限配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查是否已在module.json5中添加网络权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n  {\n    \"name\" : \"ohos.permission.INTERNET\"\n  }\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.排查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "与节点绑定的逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查节点是否已上组件树，建议在已有的Web组件上方加上Text（请参考以下例子），如果白屏的时候没有出现Text，建议检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "与节点绑定的情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction WebBuilder(data:Data) {\n  Column() {\n    Text('test')\n    Web({ src: data.url, controller: data.controller })\n      .width(\"100%\")\n      .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.排查Web可见性状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果整个节点已上树，可通过日志", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
        children: "WebPattern::OnVisibleAreaChange"
      }), "查看Web组件可见性状态是否正确，不可见的Web组件可能会造成白屏。"]
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
470264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
331608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
885793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798598-8db4c3e7ee1de21b7653b1746d14d7b1.gif");

},
894096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478247-08fd268669908047b2f501472e83e1fc.gif");

},
459216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
59887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958246-7b3022e691f535c782eeca70cb6d95d1.png");

},
155994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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