"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["297994"], {
520148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_common_basic_c_common_basic_struct_capi_jsvm_jsvm_propertyhandlerconfigurationstruct_capi_jsvm_jsvm_propertyhandlerconfigurationstruct_md_88f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-common-basic-c-common-basic-struct-capi-jsvm-jsvm-propertyhandlerconfigurationstruct-capi-jsvm-jsvm-propertyhandlerconfigurationstruct-md-88f.json
var site_docs_ref_common_basic_c_common_basic_struct_capi_jsvm_jsvm_propertyhandlerconfigurationstruct_capi_jsvm_jsvm_propertyhandlerconfigurationstruct_md_88f_namespaceObject = JSON.parse('{"id":"common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct","title":"JSVM_PropertyHandlerConfigurationStruct","description":"概述","source":"@site/docs-ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct.md","sourceDirName":"common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct","slug":"/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"JSVM_PropertyHandlerConfigurationStruct","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertyhandlerconfigurationstruct","kit":"公共基础能力","last_updated":"2026-04-22","slug":"capi-jsvm-jsvm-propertyhandlerconfigurationstruct"},"sidebar":"ref","previous":{"title":"JSVM_TypeTag","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-typetag/capi-jsvm-jsvm-typetag"},"next":{"title":"JSVM_ScriptOrigin","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-scriptorigin/capi-jsvm-jsvm-scriptorigin"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct.md


const frontMatter = {
	title: 'JSVM_PropertyHandlerConfigurationStruct',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertyhandlerconfigurationstruct',
	kit: '公共基础能力',
	last_updated: '2026-04-22',
	slug: 'capi-jsvm-jsvm-propertyhandlerconfigurationstruct'
};
const contentTitle = 'JSVM_PropertyHandlerConfigurationStruct';

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
}, {
  "value": "成员函数",
  "id": "成员函数",
  "level": 3
}, {
  "value": "成员函数说明",
  "id": "成员函数说明",
  "level": 2
}, {
  "value": "genericNamedPropertyGetterCallback()",
  "id": "genericnamedpropertygettercallback",
  "level": 3
}, {
  "value": "genericNamedPropertySetterCallback()",
  "id": "genericnamedpropertysettercallback",
  "level": 3
}, {
  "value": "genericNamedPropertyDeleterCallback()",
  "id": "genericnamedpropertydeletercallback",
  "level": 3
}, {
  "value": "genericNamedPropertyEnumeratorCallback()",
  "id": "genericnamedpropertyenumeratorcallback",
  "level": 3
}, {
  "value": "genericIndexedPropertyGetterCallback()",
  "id": "genericindexedpropertygettercallback",
  "level": 3
}, {
  "value": "genericIndexedPropertySetterCallback()",
  "id": "genericindexedpropertysettercallback",
  "level": 3
}, {
  "value": "genericIndexedPropertyDeleterCallback()",
  "id": "genericindexedpropertydeletercallback",
  "level": 3
}, {
  "value": "genericIndexedPropertyEnumeratorCallback()",
  "id": "genericindexedpropertyenumeratorcallback",
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
        id: "jsvm_propertyhandlerconfigurationstruct",
        children: "JSVM_PropertyHandlerConfigurationStruct"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {...} JSVM_PropertyHandlerConfigurationStruct\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当执行对象的getter、setter、deleter和enumerator操作时，该结构体中对应的函数回调将会触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h",
              children: "JSVM_Value"
            }), " namedPropertyData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命名属性回调使用的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h",
              children: "JSVM_Value"
            }), " indexedPropertyData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "索引属性回调使用的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#genericnamedpropertygettercallback",
              children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyGetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过获取实例对象的命名属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericnamedpropertysettercallback",
              children: "JSVM_Value (JSVM_CDECL* genericNamedPropertySetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value property,JSVM_Value thisArg,JSVM_Value namedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置实例对象的命名属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericnamedpropertydeletercallback",
              children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过删除实例对象的命名属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericnamedpropertyenumeratorcallback",
              children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value namedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过获取对象上的所有命名属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericindexedpropertygettercallback",
              children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyGetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过获取实例对象的索引属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericindexedpropertysettercallback",
              children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertySetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value property,JSVM_Value thisArg,JSVM_Value indexedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置实例对象的索引属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericindexedpropertydeletercallback",
              children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过删除实例对象的索引属性而触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#genericindexedpropertyenumeratorcallback",
              children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value indexedPropertyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过获取对象上的所有索引属性而触发的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericnamedpropertygettercallback",
      children: "genericNamedPropertyGetterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyGetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过获取实例对象的命名属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericnamedpropertysettercallback",
      children: "genericNamedPropertySetterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericNamedPropertySetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value property,JSVM_Value thisArg,JSVM_Value namedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置实例对象的命名属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericnamedpropertydeletercallback",
      children: "genericNamedPropertyDeleterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过删除实例对象的命名属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericnamedpropertyenumeratorcallback",
      children: "genericNamedPropertyEnumeratorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericNamedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value namedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过获取对象上的所有命名属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericindexedpropertygettercallback",
      children: "genericIndexedPropertyGetterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyGetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过获取实例对象的索引属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericindexedpropertysettercallback",
      children: "genericIndexedPropertySetterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertySetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value property,JSVM_Value thisArg,JSVM_Value indexedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置实例对象的索引属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericindexedpropertydeletercallback",
      children: "genericIndexedPropertyDeleterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过删除实例对象的索引属性而触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericindexedpropertyenumeratorcallback",
      children: "genericIndexedPropertyEnumeratorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value (JSVM_CDECL* genericIndexedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value indexedPropertyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过获取对象上的所有索引属性而触发的回调函数。"
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