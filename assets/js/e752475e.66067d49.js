"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["565220"], {
488338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_struct_network_boost_c_struct_multipath_statechange_network_boost_c_struct_multipath_statechange_md_e75_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-boost-api-networkboost-c-network-boost-c-struct-network-boost-c-struct-multipath-statechange-network-boost-c-struct-multipath-statechange-md-e75.json
var site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_struct_network_boost_c_struct_multipath_statechange_network_boost_c_struct_multipath_statechange_md_e75_namespaceObject = JSON.parse('{"id":"system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange","title":"NetworkBoost_MultiPathStateChange","description":"概述","source":"@site/docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange.md","sourceDirName":"system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange","slug":"/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"NetworkBoost_MultiPathStateChange","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-multipath_statechange","kit":"系统","last_updated":"2026-04-22","slug":"network-boost-c-struct-multipath_statechange"},"sidebar":"ref","previous":{"title":"NetworkBoost_MultiPathRequestResult","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result"},"next":{"title":"NetworkBoost_SceneDesc","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-scene_desc/network-boost-c-struct-scene_desc"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange.md


const frontMatter = {
	title: 'NetworkBoost_MultiPathStateChange',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-multipath_statechange',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'network-boost-c-struct-multipath_statechange'
};
const contentTitle = 'NetworkBoost_MultiPathStateChange';

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
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "multiPathState",
  "id": "multipathstate",
  "level": 2
}, {
  "value": "changeCause",
  "id": "changecause",
  "level": 2
}, {
  "value": "netHandle",
  "id": "nethandle",
  "level": 2
}, {
  "value": "pathState",
  "id": "pathstate",
  "level": 2
}, {
  "value": "pathType",
  "id": "pathtype",
  "level": 2
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
        id: "networkboost_multipathstatechange",
        children: "NetworkBoost_MultiPathStateChange"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网状态信息，用于注册多网状态变化事件回调后，系统多网状态发生变化的事件通知。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview",
        children: "NetworkBoost"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover",
        children: "network_boost_handover.h"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathstate",
              children: "NetworkBoost_MultiPathState"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#multipathstate",
              children: "multiPathState"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathchangecause",
              children: "NetworkBoost_MultiPathChangeCause"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#changecause",
              children: "changeCause"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态变化原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_nethandle",
              children: "NetworkBoost_NetHandle"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#nethandle",
              children: "netHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路的netHandle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathstate",
              children: "NetworkBoost_PathState"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pathstate",
              children: "pathState"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype",
              children: "NetworkBoost_PathType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pathtype",
              children: "pathType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multipathstate",
      children: "multiPathState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NetworkBoost_MultiPathState NetworkBoost_MultiPathStateChange::multiPathState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网状态，可以通过该信息获取当前多网所处状态，包含空闲态、建立中、已建立和释放中四种状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changecause",
      children: "changeCause"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NetworkBoost_MultiPathChangeCause NetworkBoost_MultiPathStateChange::changeCause\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网状态变化原因，在多网状态发生变化时，通过该信息可以获取发生多网状态发生变化的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nethandle",
      children: "netHandle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NetworkBoost_NetHandle NetworkBoost_MultiPathStateChange::netHandle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网链路的netHandle。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pathstate",
      children: "pathState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NetworkBoost_PathState NetworkBoost_MultiPathStateChange::pathState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网链路状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pathtype",
      children: "pathType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NetworkBoost_PathType NetworkBoost_MultiPathStateChange::pathType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网链路类型。"
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