"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["412253"], {
629173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_harmony_agent_framework_kit_guide_hmaf_function_hmaf_function_md_0fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-harmony-agent-framework-kit-guide-hmaf-function-hmaf-function-md-0fb.json
var site_docs_harmony_agent_framework_kit_guide_hmaf_function_hmaf_function_md_0fb_namespaceObject = JSON.parse('{"id":"harmony-agent-framework-kit-guide/hmaf-function/hmaf-function","title":"通过Function组件拉起智能体","description":"场景介绍","source":"@site/docs/harmony-agent-framework-kit-guide/hmaf-function/hmaf-function.md","sourceDirName":"harmony-agent-framework-kit-guide/hmaf-function","slug":"/harmony-agent-framework-kit-guide/hmaf-function/","permalink":"/harmonyos-docs-site/harmony-agent-framework-kit-guide/hmaf-function/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过Function组件拉起智能体","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hmaf-function","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Agent Framework Kit简介","permalink":"/harmonyos-docs-site/harmony-agent-framework-kit-guide/hmaf-introduction/"},"next":{"title":"CANN Kit简介","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/harmony-agent-framework-kit-guide/hmaf-function/hmaf-function.md


const frontMatter = {
	title: '通过Function组件拉起智能体',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hmaf-function',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '通过Function组件拉起智能体';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发前准备",
  "id": "开发前准备",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过function组件拉起智能体",
        children: "通过Function组件拉起智能体"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Function组件分为图标组件和按钮组件，无标题时默认显示图标组件，有标题时默认显示按钮组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(50476)/* ["default"] */.A) + "",
            width: "935",
            height: "242"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Function图标组件效果：综合型入口。不带用户意图，可作为应用内智能体主入口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(482427)/* ["default"] */.A) + "",
            width: "929",
            height: "698"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Function按钮组件：允许应用自定义功能描述的组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(607045)/* ["default"] */.A) + "",
            width: "937",
            height: "692"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前准备",
      children: "开发前准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建智能体，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/service/quick-start-0000002469548009",
          children: "快速创建智能体"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["关联应用，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/service/related-applications-0000002437785706",
          children: "关联应用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保已在终端设备上登录华为账号，并且处于联网状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从项目根目录进入/src/main/ets/pages/Index.ets文件，将FunctionComponent及相关其它类引入到工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { FunctionComponent, FunctionController } from '@kit.AgentFrameworkKit';\nimport { BusinessError } from \"@kit.BasicServicesKit\";\nimport { hilog } from \"@kit.PerformanceAnalysisKit\";\nimport { common } from '@kit.AbilityKit'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）可以在组件加载前通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/harmony-agent-framework-api/hmaf-arkts/hmaf-function-component/hmaf-function-component#isagentsupport",
            children: "isAgentSupport"
          }), "来判断当前的AgentId是否可用，若agentId有效且Agent功能支持时再加载组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  @State isAgentSupport: boolean = false;\n  \n  aboutToAppear() {\n     this.checkAgentSupport()\n  }\n  async checkAgentSupport() {\n    try {\n      let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n      this.isAgentSupport = await this.controller.isAgentSupport(context, this.agentId)\n    } catch (err) {\n      hilog.error(0x0001, 'AgentExample', `err code: ${err.code}, message: ${err.message}`)\n    }\n  }\n\n  build() {\n    Column() {\n      if (this.isAgentSupport) {\n        FunctionComponent({\n          agentId: this.agentId,\n          onError: (err: BusinessError) => {\n            hilog.error(0x0001, 'AgentExample', `err: ${JSON.stringify(err)}, message: ${err.message}`)\n          },\n          options: {\n              title: '智能创建',\n              queryText: '创建一个新的模式'\n          }\n        })\n      }\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建一个简单配置的页面，在页面中引入FunctionComponent组件，并传入对应的参数。其中agentId、onError是必填参数。其他可选参数可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/harmony-agent-framework-api/hmaf-arkts/hmaf-function-component/hmaf-function-component",
            children: "FunctionComponent（功能组件）"
          }), "。Function组件布局可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development",
            children: "组件布局"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct AgentExample {\n  private controller: FunctionController = new FunctionController();\n  private agentId: string = 'agentproxy65481da1fa2293a8482d45'; // 智能体对应的agentid，由小艺智能体平台在创建智能体时指定\n  build() {\n    Column() {\n      FunctionComponent({\n        agentId: this.agentId,\n        onError: (err: BusinessError) => {\n          hilog.error(0x0001, 'AgentExample', `err: ${JSON.stringify(err)}, message: ${err.message}`)\n        },\n        options: {\n          title: '',\n          queryText: ''\n        },\n        controller: this.controller\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加订阅事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  aboutToAppear() {\n     this.initListeners()\n  }\n  initListeners() {\n    this.controller?.on('agentDialogOpened', this.onAgentOpenedCallback)\n    this.controller?.on('agentDialogClosed', this.onAgentClosedCallback)\n  }\n  onAgentOpenedCallback = () => {\n    hilog.info(0x0001, 'AgentExample', 'agent dialog opened callback')\n  }\n  onAgentClosedCallback = () => {\n    hilog.info(0x0001, 'AgentExample', 'agent dialog closed callback')\n  }\n  aboutToDisappear() {\n    this.controller?.off('agentDialogOpened')\n    this.controller?.off('agentDialogClosed')\n  }\n  \n  build() {\n    Column() {\n      FunctionComponent({\n        agentId: this.agentId,\n        onError: (err: BusinessError) => {\n          hilog.error(0x0001, 'AgentExample', `err: ${JSON.stringify(err)}, message: ${err.message}`)\n        },\n        controller: this.controller\n      })\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮，打开智能体对话框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from \"@kit.BasicServicesKit\";\nimport { hilog } from \"@kit.PerformanceAnalysisKit\";\n\nimport {\n  FunctionComponent,\n  FunctionController\n} from \"@kit.AgentFrameworkKit\";\n\n@Entry\n@Component\nexport struct AgentExample {\n  private controller: FunctionController = new FunctionController();\n  private agentId: string = 'agentproxy65481da1fa2293a8482d45';\n\n  aboutToAppear() {\n    this.initListeners()\n  }\n  initListeners() {\n    this.controller?.on('agentDialogOpened', this.onAgentOpenedCallback)\n    this.controller?.on('agentDialogClosed', this.onAgentClosedCallback)\n  }\n  onAgentOpenedCallback = () => {\n    hilog.info(0x0001, 'AgentExample', 'agent dialog opened callback')\n  }\n  onAgentClosedCallback = () => {\n    hilog.info(0x0001, 'AgentExample', 'agent dialog closed callback')\n  }\n  aboutToDisappear() {\n    this.controller?.off('agentDialogOpened')\n    this.controller?.off('agentDialogClosed')\n  }\n  \n  build() {\n    Column() {\n      FunctionComponent({\n        agentId: this.agentId,\n        onError: (err: BusinessError) => {\n          hilog.error(0x0001, 'AgentExample', `err: ${JSON.stringify(err)}, message: ${err.message}`)\n        },\n        options: {\n          title: '智能创建',\n          queryText: '创建一个新的情景',\n          isShowShadow: true\n        },\n        controller: this.controller\n      })\n    }\n  }\n}\n"
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
50476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439253-a82f9bfb0d721f1dc8f888e2ec0e29c8.png");

},
607045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479209-234b785ebb317f5ce104b3d3f395705d.png");

},
482427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959208-59b0af74b05f5b05b40eeb5d17263ed1.png");

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