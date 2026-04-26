"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["489889"], {
374172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_module_capi_inputmethod_capi_inputmethod_md_d03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-module-capi-inputmethod-capi-inputmethod-md-d03.json
var site_docs_ref_ime_api_ime_c_ime_module_capi_inputmethod_capi_inputmethod_md_d03_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod","title":"InputMethod","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod.md","sourceDirName":"ime-api/ime-c/ime-module/capi-inputmethod","slug":"/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"InputMethod","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod"},"sidebar":"ref","previous":{"title":"@ohos.inputMethod.ExtraConfig (输入法扩展信息)","permalink":"/harmonyos-docs-site/ref/ime-api/ime-arkts/js-apis-inputmethod-extraconfig/js-apis-inputmethod-extraconfig"},"next":{"title":"inputmethod_attach_options_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-attach-options-capi-h/capi-inputmethod-attach-options-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod.md


const frontMatter = {
	title: 'InputMethod',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod'
};
const contentTitle = 'InputMethod';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "inputmethod",
        children: "InputMethod"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "InputMethod模块提供方法来使用输入法和开发输入法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-attach-options-capi-h/capi-inputmethod-attach-options-capi-h",
              children: "inputmethod_attach_options_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供输入法绑定选项对象的创建、销毁与读写方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h",
              children: "inputmethod_controller_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供绑定、解绑输入法的方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-cursor-info-capi-h/capi-inputmethod-cursor-info-capi-h",
              children: "inputmethod_cursor_info_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供光标信息对象的创建、销毁与读写方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h",
              children: "inputmethod_inputmethod_proxy_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供使用输入法的方法，可以向输入法应用发送请求和通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h",
              children: "inputmethod_private_command_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供私有数据对象的创建、销毁与读写方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h",
              children: "inputmethod_text_avoid_info_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供输入框避让信息对象的创建、销毁与读写方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-config-capi-h/capi-inputmethod-text-config-capi-h",
              children: "inputmethod_text_config_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供输入框配置信息对象的创建、销毁与读写方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h",
              children: "inputmethod_text_editor_proxy_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供一套方法支持应用开发的自绘输入框获取来自输入法应用的通知和请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h",
              children: "inputmethod_types_capi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供了输入法相关的类型定义。"
          })]
        })]
      })]
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