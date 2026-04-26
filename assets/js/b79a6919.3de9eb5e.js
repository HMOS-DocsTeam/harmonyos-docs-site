"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["100102"], {
534708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_struct_capi_hukstypeapi_oh_huks_keymaterialrsa_capi_hukstypeapi_oh_huks_keymaterialrsa_md_b79_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-universal-keystore-api-universal-keystore-c-universal-keystore-struct-capi-hukstypeapi-oh-huks-keymaterialrsa-capi-hukstypeapi-oh-huks-keymaterialrsa-md-b79.json
var site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_struct_capi_hukstypeapi_oh_huks_keymaterialrsa_capi_hukstypeapi_oh_huks_keymaterialrsa_md_b79_namespaceObject = JSON.parse('{"id":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa","title":"OH_Huks_KeyMaterialRsa","description":"概述","source":"@site/docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa.md","sourceDirName":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa","slug":"/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"OH_Huks_KeyMaterialRsa","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialrsa","kit":"系统","last_updated":"2026-04-22","slug":"capi-hukstypeapi-oh-huks-keymaterialrsa"},"sidebar":"ref","previous":{"title":"OH_Huks_PubKeyInfo","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-pubkeyinfo/capi-hukstypeapi-oh-huks-pubkeyinfo"},"next":{"title":"OH_Huks_KeyMaterialEcc","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialecc/capi-hukstypeapi-oh-huks-keymaterialecc"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa.md


const frontMatter = {
	title: 'OH_Huks_KeyMaterialRsa',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialrsa',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hukstypeapi-oh-huks-keymaterialrsa'
};
const contentTitle = 'OH_Huks_KeyMaterialRsa';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
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
        id: "oh_huks_keymaterialrsa",
        children: "OH_Huks_KeyMaterialRsa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_KeyMaterialRsa {...}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Rsa密钥的结构体类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi",
        children: "HuksTypeApi"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h",
        children: "native_huks_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyalg",
              children: "OH_Huks_KeyAlg"
            }), " keyAlg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥的算法类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t keySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t nSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n值的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t eSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e值的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t dSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d值的长度。"
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