"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["694601"], {
455980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_print_printextensionabilityguide_printextensionabilityguide_md_79f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-print-printextensionabilityguide-printextensionabilityguide-md-79f.json
var site_docs_system_basicfun_basic_services_kit_print_printextensionabilityguide_printextensionabilityguide_md_79f_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/print/printextensionabilityguide/printextensionabilityguide","title":"打印扩展能力","description":"概述","source":"@site/docs/system-basicfun/basic-services-kit/print/printextensionabilityguide/printextensionabilityguide.md","sourceDirName":"system-basicfun/basic-services-kit/print/printextensionabilityguide","slug":"/system-basicfun/basic-services-kit/print/printextensionabilityguide/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/print/printextensionabilityguide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"打印扩展能力","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/printextensionabilityguide","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文件打印（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/print/native-print-file/"},"next":{"title":"DeskTop Extension Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/print/printextensionabilityguide/printextensionabilityguide.md


const frontMatter = {
	title: '打印扩展能力',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/printextensionabilityguide',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '打印扩展能力';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "回调说明",
  "id": "回调说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "实现打印扩展能力",
  "id": "实现打印扩展能力",
  "level": 3
}, {
  "value": "功能验证",
  "id": "功能验证",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "打印扩展能力",
        children: "打印扩展能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打印扩展能力从API version 14开始支持。打印扩展能力是对系统打印功能的扩展，允许开发者以软件的方式模拟打印机行为，实现与上层应用的打印交互。通过该扩展能力，开发者可以实现特殊场景下的定制化打印逻辑，在统一框架下灵活开发差异化功能，提升解决方案的适应性与可维护性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回调说明",
      children: "回调说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回调名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "回调描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#oncreate",
              children: "onCreate(want: Want): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化打印机能力"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#ondestroy",
              children: "onDestroy(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束打印扩展"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#onstartdiscoverprinter",
              children: "onStartDiscoverPrinter(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始发现打印机"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#onstopdiscoverprinter",
              children: "onStopDiscoverPrinter(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止发现打印机"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#onconnectprinter",
              children: "onConnectPrinter(printerId: number): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接打印机"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-app-ability-printextensionability/js-apis-app-ability-printextensionability#ondisconnectprinter",
              children: "onDisconnectPrinter(printerId: number): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断开与打印机的连接"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现打印扩展能力",
      children: "实现打印扩展能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建工程目录"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程entry Module对应的ets目录 (./entry/src/main/ets)下，新建目录及ArkTs文件。例如新建一个目录并命名为PrintExtensionAbility，在PrintExtensionAbility目录下，新建一个ArkTs文件并命名为MyPrintExtension.ets，用以实现打印扩展能力接口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开MyPrintExtension.ets文件，导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PrintExtensionAbility } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现PrintExtensionAbility提供的接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PrintExtensionAbility } from '@kit.BasicServicesKit';\nimport { Want } from '@kit.AbilityKit';\n\n// 创建打印扩展能力类，继承PrintExtensionAbility，并实现打印扩展功能。\nexport default class MyPrintExtension extends PrintExtensionAbility {\n    // 系统首次连接打印扩展时调用。\n    onCreate(want: Want): void {\n        console.info('onCreate');\n        // 初始化扩展能力，可以在此注册事件。\n    }\n\n    // 结束打印扩展时调用。\n    onDestroy(): void {\n        console.info('onDestroy');\n        // 注销事件。\n    }\n\n    // 开始发现打印机时调用。\n    onStartDiscoverPrinter(): void {\n        console.info('onStartDiscoverPrinter enter');\n        // 实现发现打印机的逻辑。\n    }\n\n    // 停止发现打印机时调用。\n    onStopDiscoverPrinter(): void {\n        console.info('onStopDiscoverPrinter enter');\n        // 实现停止发现打印机的逻辑。\n    }\n\n    // 连接某台打印机时调用。\n    onConnectPrinter(printerId: number): void {\n        console.info('onConnectPrinter enter');\n        // 实现连接打印机逻辑。可以通过打印机ID连接指定的打印机、查询打印机能力等。\n    }\n\n    // 断开与某台打印机的连接时调用。\n    onDisconnectPrinter(printerId: number): void {\n        console.info('onDisconnectPrinter enter');\n        // 实现断开打印机连接逻辑。可以通过打印机ID断开与指定打印机的连接。\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程entry Module目录下的module.json5配置文件中(./entry/src/main/module.json5)注册PrintExtensionAbility并设置如下标签："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "type标签设置为\"print\"；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "srcEntry标签设置为当前ExtensionAbility组件所对应的代码路径。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例如下："
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"module\": {\n        \"extensionAbilities\": [\n            {\n                \"name\": \"MyPrintExtension\",\n                \"srcEntry\": \"./ets/PrintExtensionAbility/MyPrintExtension.ets\",\n                \"type\": \"print\"\n            }\n        ]\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能验证",
      children: "功能验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认打印扩展能力PrintExtensionAbility中的回调方法实现是否正确、是否可以成功回调。在成功推送HAP包到设备后，可以在设置-打印机和扫描仪-添加打印机和扫描仪，拉起打印扩展能力，执行相应的动作触发回调时机后，通过查找对应接口实现中的日志(由开发者实现的业务逻辑决定)来判断是否成功回调。"
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