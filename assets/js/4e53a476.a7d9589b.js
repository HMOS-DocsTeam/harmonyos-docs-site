"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161179"], {
631032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_c_arkweb_struct_capi_web_arkweb_webmessageportapi_capi_web_arkweb_webmessageportapi_md_4e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-c-arkweb-struct-capi-web-arkweb-webmessageportapi-capi-web-arkweb-webmessageportapi-md-4e5.json
var site_docs_ref_arkweb_api_arkweb_c_arkweb_struct_capi_web_arkweb_webmessageportapi_capi_web_arkweb_webmessageportapi_md_4e5_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi","title":"ArkWeb_WebMessagePortAPI","description":"概述","source":"@site/docs-ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi.md","sourceDirName":"arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi","slug":"/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"ArkWeb_WebMessagePortAPI","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageportapi","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-web-arkweb-webmessageportapi"},"sidebar":"ref","previous":{"title":"ArkWeb_ComponentAPI","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi"},"next":{"title":"ArkWeb_WebMessageAPI","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageapi/capi-web-arkweb-webmessageapi"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi.md


const frontMatter = {
	title: 'ArkWeb_WebMessagePortAPI',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageportapi',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-web-arkweb-webmessageportapi'
};
const contentTitle = 'ArkWeb_WebMessagePortAPI';

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
  "value": "postMessage()",
  "id": "postmessage",
  "level": 3
}, {
  "value": "close()",
  "id": "close",
  "level": 3
}, {
  "value": "setMessageEventHandler()",
  "id": "setmessageeventhandler",
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
        id: "arkweb_webmessageportapi",
        children: "ArkWeb_WebMessagePortAPI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {...} ArkWeb_WebMessagePortAPI\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Post Message相关的Native API结构体。在调用接口前建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89",
        children: "ARKWEB_MEMBER_MISSING"
      }), "校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessagePort相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。"]
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
        href: "/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web",
        children: "Web"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h",
        children: "arkweb_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结构体的大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#postmessage",
              children: "ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送消息到HTML。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#close",
              children: "void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭消息端口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#setmessageeventhandler",
              children: "void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置接收HTML消息的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postmessage",
      children: "postMessage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送消息到HTML。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h",
              children: "ArkWeb_WebMessagePortPtr"
            }), " webMessagePort"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message端口结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h",
              children: "ArkWeb_WebMessagePtr"
            }), " webMessage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要发送的消息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ArkWeb_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_SUCCESS"
            }), " 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_INVALID_PARAM"
            }), " 参数无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_INIT_ERROR"
            }), " 初始化失败，没有找到与webTag绑定的Web组件。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close",
      children: "close()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭消息端口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h",
              children: "ArkWeb_WebMessagePortPtr"
            }), " webMessagePort"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message端口结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setmessageeventhandler",
      children: "setMessageEventHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag,\n        ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置接收HTML消息的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h",
              children: "ArkWeb_WebMessagePortPtr"
            }), " webMessagePort"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message端口结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#arkweb_onmessageeventhandler",
              children: "ArkWeb_OnMessageEventHandler"
            }), " messageEventHandler"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理消息的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
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