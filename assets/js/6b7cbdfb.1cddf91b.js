"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672880"], {
310738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_struct_ent_native_xcomponent_oh_nativexcomponent_callback_ent_native_xcomponent_oh_nativexcomponent_callback_md_6b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-struct-ent-native-xcomponent-oh-nativexcomponent-callback-ent-native-xcomponent-oh-nativexcomponent-callback-md-6b7.json
var site_docs_ref_arkui_api_arkui_c_arkui_struct_ent_native_xcomponent_oh_nativexcomponent_callback_ent_native_xcomponent_oh_nativexcomponent_callback_md_6b7_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback","title":"OH_NativeXComponent_Callback","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback.md","sourceDirName":"arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback","slug":"/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":56,"frontMatter":{"title":"OH_NativeXComponent_Callback","sidebar_position":56,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ent-native-xcomponent-oh-nativexcomponent-callback","kit":"应用框架","last_updated":"2026-04-22","slug":"ent-native-xcomponent-oh-nativexcomponent-callback"},"sidebar":"ref","previous":{"title":"OH_NativeXComponent_MouseEvent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-mouseevent/t-native-xcomponent-oh-nativexcomponent-mouseevent"},"next":{"title":"OH_NativeXComponent_MouseEvent_Callback","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-mouseevent-callback/xcomponent-oh-nativexcomponent-mouseevent-callback"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback.md


const frontMatter = {
	title: 'OH_NativeXComponent_Callback',
	sidebar_position: 56,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ent-native-xcomponent-oh-nativexcomponent-callback',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ent-native-xcomponent-oh-nativexcomponent-callback'
};
const contentTitle = 'OH_NativeXComponent_Callback';

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
  "value": "成员函数",
  "id": "成员函数",
  "level": 3
}, {
  "value": "成员函数说明",
  "id": "成员函数说明",
  "level": 2
}, {
  "value": "OnSurfaceCreated()",
  "id": "onsurfacecreated",
  "level": 3
}, {
  "value": "OnSurfaceChanged()",
  "id": "onsurfacechanged",
  "level": 3
}, {
  "value": "OnSurfaceDestroyed()",
  "id": "onsurfacedestroyed",
  "level": 3
}, {
  "value": "DispatchTouchEvent()",
  "id": "dispatchtouchevent",
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
        id: "oh_nativexcomponent_callback",
        children: "OH_NativeXComponent_Callback"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_NativeXComponent_Callback {...} OH_NativeXComponent_Callback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册Surface生命周期和触摸事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h",
        children: "native_interface_xcomponent.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#onsurfacecreated",
              children: "void (*OnSurfaceCreated)(OH_NativeXComponent* component, void* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Surface时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onsurfacechanged",
              children: "void (*OnSurfaceChanged)(OH_NativeXComponent* component, void* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Surface改变时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onsurfacedestroyed",
              children: "void (*OnSurfaceDestroyed)(OH_NativeXComponent* component, void* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Surface被销毁时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dispatchtouchevent",
              children: "void (*DispatchTouchEvent)(OH_NativeXComponent* component, void* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当触摸事件被触发时调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsurfacecreated",
      children: "OnSurfaceCreated()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*OnSurfaceCreated)(OH_NativeXComponent* component, void* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Surface时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。  通过XComponent生命周期获取的NativeWindow本身由系统侧持有了一次引用计数，并会在OnSurfaceDestroyed回调触发之后将引用计数减一，引用计数归零后NativeWindow将被释放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsurfacechanged",
      children: "OnSurfaceChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*OnSurfaceChanged)(OH_NativeXComponent* component, void* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Surface改变时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsurfacedestroyed",
      children: "OnSurfaceDestroyed()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*OnSurfaceDestroyed)(OH_NativeXComponent* component, void* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Surface被销毁时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispatchtouchevent",
      children: "DispatchTouchEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*DispatchTouchEvent)(OH_NativeXComponent* component, void* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触摸事件被触发时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
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