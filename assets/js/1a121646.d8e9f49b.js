"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["958980"], {
151896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_metadatabinding_guidelines_metadatabinding_guidelines_md_1a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-metadatabinding-guidelines-metadatabinding-guidelines-md-1a1.json
var site_docs_system_hardware_multimodal_awareness_kit_metadatabinding_guidelines_metadatabinding_guidelines_md_1a1_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/metadatabinding-guidelines","title":"记忆链接开发指导","description":"概述","source":"@site/docs/system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/metadatabinding-guidelines.md","sourceDirName":"system-hardware/multimodal-awareness-kit/metadatabinding-guidelines","slug":"/system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"记忆链接开发指导","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/metadatabinding-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户状态感知开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/userstatus-guidelines/"},"next":{"title":"Pen Kit简介","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/metadatabinding-guidelines.md


const frontMatter = {
	title: '记忆链接开发指导',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/metadatabinding-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '记忆链接开发指导';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "演示示例",
  "id": "演示示例",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "记忆链接开发指导",
        children: "记忆链接开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MetadataBinding（记忆链接）指由第三方应用提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/app-linking-kit-guide/applinking-introduction",
        children: "鸿蒙App Linking链接"
      }), "，系统将当前用户浏览的内容与鸿蒙App Linking链接进行关联并保存的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-metadatabinding/js-apis-awareness-metadatabinding",
        children: "@ohos.multimodalAwareness.metadataBinding (记忆链接)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第三方应用可使用记忆链接功能，将鸿蒙App Linking链接映射到调用接口的系统应用或服务。例如，用户在【电商应用】中浏览某个商品时，截图保存了该商品的图片，系统将记录图片与【电商应用】提供的鸿蒙App Linking链接的映射关系。当用户再次浏览该图片时，系统会提醒用户是否需要返回【电商应用】查看商品详情。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "演示示例",
      children: "演示示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78274)/* ["default"] */.A) + "",
        width: "116",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 18开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块支持记忆链接的功能。"
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-metadatabinding/js-apis-awareness-metadatabinding#metadatabindingsubmitmetadata",
              children: "submitMetadata"
            }), "(metadata: string): void;"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方应用将待编码的鸿蒙App Linking链接传递给多模态融合感知服务，该服务决定适当时机将内容传递给调用编码接口的系统应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-metadatabinding/js-apis-awareness-metadatabinding#metadatabindingonoperationsubmitmetadata",
              children: "on"
            }), "(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<number>): void;"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅系统事件以获取编码内容，应用注册回调，事件发生时回传编码内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-metadatabinding/js-apis-awareness-metadatabinding#metadatabindingoffoperationsubmitmetadata",
              children: "off"
            }), "(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<number>): void;"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅系统获取编码内容的事件。取消注册回调接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "鸿蒙App Linking链接的最大字节数为128。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { metadataBinding } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Callback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义记忆服务回调及包名, 函数接收回传编码的内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback : Callback<number> = (event: number) => {};\nlet bundleName: string = '';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅记忆服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   metadataBinding.on('operationSubmitMetadata', bundleName, callback);\n   console.info(\"on succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Register event error and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供鸿蒙App Linking链接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 应用先开通applink服务，然后获取applink，最后提供给记忆链接服务接口，submitMetadata接口applink长度限制为非空且小于128字符.\nlet applink: string = \"https://example.com/product/12345\";\ntry {\n   metadataBinding.submitMetadata(applink);\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Submit metadata error and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅记忆服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  metadataBinding.off('operationSubmitMetadata', bundleName, callback);\n  console.info(\"off succeeded\");\n} catch (err) {\n  let error = err as BusinessError;\n  console.error(\"Unregister event error and err code is \" + error.code);\n}\n"
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
78274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958474-f4cdf057614c41676fe686aac8100c99.gif");

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