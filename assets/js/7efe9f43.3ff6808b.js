"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["987775"], {
360769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_map_creation_share_mobilephone_app_share_share_mobilephone_app_share_md_7ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-map-creation-share-mobilephone-app-share-share-mobilephone-app-share-md-7ef.json
var site_docs_share_kit_guide_system_share_share_map_creation_share_mobilephone_app_share_share_mobilephone_app_share_md_7ef_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share/share-mobilephone-app-share","title":"通过分享面板发起分享","description":"接口说明","source":"@site/docs/share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share/share-mobilephone-app-share.md","sourceDirName":"share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share","slug":"/share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过分享面板发起分享","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-mobilephone-app-share","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"宿主应用接入模式","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-access-mode/"},"next":{"title":"配置目标应用名单（仅对企业应用开放）","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-app-sharing-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share/share-mobilephone-app-share.md


const frontMatter = {
	title: '通过分享面板发起分享',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-mobilephone-app-share',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过分享面板发起分享';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过分享面板发起分享",
        children: "通过分享面板发起分享"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 宿主应用发起分享接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#constructor",
              children: "constructor"
            }), "(record: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#sharedrecord",
              children: "SharedRecord"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedData构造函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#addrecord",
              children: "addRecord"
            }), "(record: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#sharedrecord",
              children: "SharedRecord"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加分享记录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getrecords",
              children: "getRecords"
            }), "(): Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#sharedrecord",
              children: "SharedRecord"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取分享记录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShareController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#constructor-1",
              children: "constructor"
            }), "(data: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#shareddata",
              children: "SharedData"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ShareController构造函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShareController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#show",
              children: "show"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            }), ", options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#sharecontrolleroptions",
              children: "ShareControllerOptions"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示分享面板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShareController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#ondismiss",
              children: "on"
            }), "(event: 'dismiss', callback: () => void): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册分享面板关闭事件监听"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ShareController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#offdismiss",
              children: "off"
            }), "(event: 'dismiss', callback: () => void): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消分享面板关闭事件监听"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据不同的分享场景，参考下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分享场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参考链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分享App Linking直达应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-service-scenarios/share-utd-link#%E5%88%86%E4%BA%ABapp-linking%E7%9B%B4%E8%BE%BE%E5%BA%94%E7%94%A8",
              children: "分享App Linking直达应用"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分享图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-service-scenarios/share-utd-image",
              children: "分享图片"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分享视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-service-scenarios/share-utd-video",
              children: "分享视频"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分享普通链接直达浏览器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-service-scenarios/share-utd-link#%E5%88%86%E4%BA%AB%E6%99%AE%E9%80%9A%E9%93%BE%E6%8E%A5%E7%9B%B4%E8%BE%BE%E6%B5%8F%E8%A7%88%E5%99%A8",
              children: "分享普通链接直达浏览器"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分享文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-service-scenarios/share-utd-text",
              children: "分享文本"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2in1设备可通过配置的方式决定分享面板的显示位置。"
        })
      }), " 参考如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { systemShare } from '@kit.ShareKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造分享数据，可添加多条分享记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造ShareData，需配置一条有效数据信息\nlet data: systemShare.SharedData = new systemShare.SharedData({\n  utd: utd.UniformDataType.PLAIN_TEXT,\n  content: 'Hello HarmonyOS'\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动分享面板时，配置分享面板显示的位置信息或关联的组件ID，面板将以Popup形式展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建ShareController\nlet controller: systemShare.ShareController = new systemShare.ShareController(data);\n// 获取UIAbility上下文对象\nlet uiContext: UIContext = this.getUIContext();\nlet context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n// 注册分享面板关闭监听\ncontroller.on('dismiss', () => {\n  console.info('Share panel closed');\n  // 分享结束，可处理其他业务。\n});\n\n// 进行分享面板显示\n// 方法一：配置分享面板关联的控件ID\ncontroller.show(context, {\n  anchor: 'shareButtonId'\n});\n// 方法二：配置分享面板显示的坐标\ncontroller.show(context, {\n  anchor: {\n    // 必选 相对锚点的窗体偏移值\n    windowOffset: { x: 100, y: 100 },\n    // 可选 组件的宽高 配置后会综合计算组件的大小\n    size: { width: 0, height: 0 }\n  }\n});\n"
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