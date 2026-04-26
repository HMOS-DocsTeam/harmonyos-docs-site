"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["585096"], {
53052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_common_basic_c_common_basic_struct_capi_jsvm_jsvm_propertydescriptor_capi_jsvm_jsvm_propertydescriptor_md_7d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-common-basic-c-common-basic-struct-capi-jsvm-jsvm-propertydescriptor-capi-jsvm-jsvm-propertydescriptor-md-7d8.json
var site_docs_ref_common_basic_c_common_basic_struct_capi_jsvm_jsvm_propertydescriptor_capi_jsvm_jsvm_propertydescriptor_md_7d8_namespaceObject = JSON.parse('{"id":"common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor","title":"JSVM_PropertyDescriptor","description":"概述","source":"@site/docs-ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor.md","sourceDirName":"common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor","slug":"/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"JSVM_PropertyDescriptor","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertydescriptor","kit":"公共基础能力","last_updated":"2026-04-22","slug":"capi-jsvm-jsvm-propertydescriptor"},"sidebar":"ref","previous":{"title":"JSVM_VMInfo","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-vminfo/capi-jsvm-jsvm-vminfo"},"next":{"title":"JSVM_ExtendedErrorInfo","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-extendederrorinfo/capi-jsvm-jsvm-extendederrorinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor.md


const frontMatter = {
	title: 'JSVM_PropertyDescriptor',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertydescriptor',
	kit: '公共基础能力',
	last_updated: '2026-04-22',
	slug: 'capi-jsvm-jsvm-propertydescriptor'
};
const contentTitle = 'JSVM_PropertyDescriptor';

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
        id: "jsvm_propertydescriptor",
        children: "JSVM_PropertyDescriptor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {...} JSVM_PropertyDescriptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm",
        children: "JSVM"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h",
        children: "jsvm_types.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* utf8name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述属性键值的可选字符串，UTF-8编码。必须为属性提供utf8name或name之一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h",
              children: "JSVM_Value"
            }), " name"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选的JSVM_Value，指向用作属性键的JavaScript字符串或符号。必须为属性提供utf8name或name之一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h",
              children: "JSVM_Callback"
            }), " method"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置此项使属性描述符对象的value属性成为method表示的JavaScript函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h",
              children: "JSVM_Callback"
            }), " getter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行对属性的获取访问时调用的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h",
              children: "JSVM_Callback"
            }), " setter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行属性的设置访问时调用的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h",
              children: "JSVM_Value"
            }), " value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果属性是数据属性，则通过属性的get访问检索到的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h#jsvm_propertyattributes",
              children: "JSVM_PropertyAttributes"
            }), " attributes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与特定属性关联的属性。"
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