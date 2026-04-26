"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["870437"], {
573748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_component_migrate_web_component_migrate_md_9df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-component-migrate-web-component-migrate-md-9df.json
var site_docs_arkweb_web_manage_loading_browsing_web_component_migrate_web_component_migrate_md_9df_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-component-migrate/web-component-migrate","title":"Web组件在不同的窗口间迁移","description":"Web组件能够实现在不同窗口的组件树上进行挂载或移除操作，这一能力使得开发者可以将同一个Web组件在不同窗口间迁移。例如，将浏览器的Tab页拖出成独立窗口，或拖入浏览器的另一个窗口。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-component-migrate/web-component-migrate.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-component-migrate","slug":"/arkweb/web-manage-loading-browsing/web-component-migrate/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-component-migrate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Web组件在不同的窗口间迁移","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-component-migrate","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置Web组件前进后退缓存","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/"},"next":{"title":"使用Web组件上传文件","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-file-upload/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-component-migrate/web-component-migrate.md


const frontMatter = {
	title: 'Web组件在不同的窗口间迁移',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-component-migrate',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件在不同的窗口间迁移';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "web组件在不同的窗口间迁移",
        children: "Web组件在不同的窗口间迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件能够实现在不同窗口的组件树上进行挂载或移除操作，这一能力使得开发者可以将同一个Web组件在不同窗口间迁移。例如，将浏览器的Tab页拖出成独立窗口，或拖入浏览器的另一个窗口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件在不同窗口间迁移，是基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node",
        children: "自定义节点"
      }), "能力实现的。实现的基本原理是：通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
        children: "BuilderNode"
      }), "，开发者可创建Web组件的离线节点，并结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder",
        children: "自定义占位节点"
      }), "控制Web节点的挂载与移除。当从一个窗口上移除Web节点，并挂载到另一个窗口中，即完成Web组件在窗口间的迁移。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，主窗Ability启动时，通过命令式的方式创建了一个Web组件。开发者可以利用common.ets中提供的方法和类，实现Web组件的挂载和移除。Index.ets则提供了一种挂载和移除Web组件的实现方法。通过这种方式，开发者能够实现Web组件在不同窗口中页面的挂载与移除，即实现了Web组件在不同窗口间的迁移。下图是展示了这一迁移过程的示意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(794678)/* ["default"] */.A) + "",
        width: "714",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188419)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不要将一个Web组件同时挂载在两个父节点下，这会导致非预期行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 主窗口Ability\nimport { createNWeb, defaultUrl } from '../pages/common';\n\n// ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err && err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      // 创建Web动态组件（需传入UIContext），loadContent之后的任意时机均可创建，应用仅创建一个Web组件\n      createNWeb(defaultUrl, windowStage.getMainWindowSync().getUIContext());\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 提供动态挂载Web组件能力\n// pages/common.ets\nimport { UIContext, NodeController, BuilderNode, FrameNode } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport const defaultUrl : string = 'https://www.example.com';\n\n// Data为入参封装类\nclass Data{\n  public url: string = '';\n  public webController: webview.WebviewController | null = null;\n\n  constructor(url: string, webController: webview.WebviewController) {\n    this.url = url;\n    this.webController = webController;\n  }\n}\n\n// @Builder中为动态组件的具体组件内容\n@Builder\nfunction webBuilder(data:Data) {\n  Web({ src: data.url, controller: data.webController })\n    .width('100%')\n    .height('100%')\n    .borderStyle(BorderStyle.Dashed)\n    .borderWidth(2)\n}\n\nlet wrap = wrapBuilder<[Data]>(webBuilder);\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用\nexport class MyNodeController extends NodeController {\n  private builderNode: BuilderNode<[Data]> | null | undefined = null;\n  private webController : webview.WebviewController | null | undefined = null;\n  private rootNode : FrameNode | null = null;\n\n  constructor(builderNode : BuilderNode<[Data]> | undefined, webController : webview.WebviewController | undefined) {\n    super();\n    this.builderNode = builderNode;\n    this.webController = webController;\n  }\n\n  // 必须要重写的方法，用于构建节点树、返回节点挂载在对应NodeContainer中\n  // 在对应NodeContainer创建的时候调用或者通过rebuild方法调用刷新\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // 该节点会被挂载在NodeContainer的父节点下\n    return this.rootNode;\n  }\n\n  // 挂载Webview\n  attachWeb() : void {\n    if (this.builderNode) {\n      let frameNode : FrameNode | null = this.builderNode.getFrameNode();\n      if (frameNode?.getParent() != null) {\n        // 挂载自定义节点前判断该节点是否已经被挂载\n        hilog.error(0x0000, 'testTag', '%{public}s', 'The frameNode is already attached');\n        return;\n      }\n      this.rootNode = this.builderNode.getFrameNode();\n    }\n  }\n\n  // 卸载Webview\n  detachWeb() : void {\n    this.rootNode = null;\n  }\n\n  getWebController() : webview.WebviewController | null | undefined {\n    return this.webController;\n  }\n}\n\n// 创建Map保存所需要的BuilderNode\nlet builderNodeMap : Map<string, BuilderNode<[Data]> | undefined> = new Map();\n// 创建Map保存所需要的webview.WebviewController\nlet webControllerMap : Map<string, webview.WebviewController | undefined> = new Map();\n\n// 初始化需要UIContext对象，UIContext对象可通过窗口或自定义组件的getUIContext方法获取\nexport const createNWeb = (url: string, uiContext: UIContext) => {\n  // 创建WebviewController\n  let webController = new webview.WebviewController();\n  // 创建BuilderNode\n  let builderNode : BuilderNode<[Data]> = new BuilderNode(uiContext);\n  // 创建动态Web组件\n  builderNode.build(wrap, new Data(url, webController));\n\n  // 保存BuilderNode\n  builderNodeMap.set(url, builderNode);\n  // 保存WebviewController\n  webControllerMap.set(url, webController);\n}\n\n// 自定义获取BuilderNode的接口\nexport const getBuilderNode = (url: string) : BuilderNode<[Data]> | undefined => {\n  return builderNodeMap.get(url);\n}\n// 自定义获取WebviewController的接口\nexport const getWebviewController = (url : string) : webview.WebviewController | undefined => {\n  return webControllerMap.get(url);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用NodeController的Page页\n// pages/Index.ets\nimport { getBuilderNode, MyNodeController, defaultUrl, getWebviewController } from \"./common\"\n\n@Entry\n@Component\nstruct Index {\n  private nodeController : MyNodeController =\n    new MyNodeController(getBuilderNode(defaultUrl), getWebviewController(defaultUrl));\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Attach Webview\")\n          .onClick(() => {\n            // 注意不要将同一个节点同时挂载在不同的页面上！\n            this.nodeController.attachWeb();\n            this.nodeController.rebuild();\n          })\n        Button(\"Detach Webview\")\n          .onClick(() => {\n            this.nodeController.detachWeb();\n            this.nodeController.rebuild();\n          })\n        // NodeContainer用于与NodeController节点绑定，rebuild会触发makeNode\n        // Page页通过NodeContainer接口绑定NodeController，实现动态组件页面显示\n        NodeContainer(this.nodeController)\n          .height('80%')\n          .width('80%')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
188419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
794678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438273-9644b0b0e1736fe88dc67fbc95938210.png");

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