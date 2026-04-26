"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["887926"], {
983505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_c_networkboost_qoscallback_c_networkboost_qoscallback_c_md_47f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-boost-kit-guide-networkboost-netqualityguide-c-networkboost-qoscallback-c-networkboost-qoscallback-c-md-47f.json
var site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_c_networkboost_qoscallback_c_networkboost_qoscallback_c_md_47f_namespaceObject = JSON.parse('{"id":"system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c/networkboost-qoscallback-c","title":"网络质量评估 (C/C++)","description":"场景介绍","source":"@site/docs/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c/networkboost-qoscallback-c.md","sourceDirName":"system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c","slug":"/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c/","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"网络质量评估 (C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-qoscallback-c","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多网发起和释放","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-request-release/"},"next":{"title":"网络场景识别 (C/C++)","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-scenecallback-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-qoscallback-c/networkboost-qoscallback-c.md


const frontMatter = {
	title: '网络质量评估 (C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-qoscallback-c',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '网络质量评估 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
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
        id: "网络质量评估-cc",
        children: "网络质量评估 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在订阅网络质量Qos评估后，系统按照一定的周期或Qos变化后回调给应用。回调的Qos信息包括数据传输的链路类型、上下行空口实时带宽、上下行空口实时速率、RTT时延等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t HMS_NetworkBoost_RegisterNetQosCallback(HMS_NetworkBoost_NetQosChange callback, uint32_t* callbackId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Qos信息状态变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t HMS_NetworkBoost_UnregisterNetQosCallback(uint32_t callbackId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Qos信息状态变化回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Network Boost Kit模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"NetworkBoostKit/network_boost_quality.h\"\n#include <cstdio>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib，具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/network-boost-kit-guide/networkboost-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libnetwork_boost.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册回调的方式监听网络质量评估信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t callbackId = 0;\nvoid onNetworkQoSChanged(NetworkBoost_NetworkQosArray *msg)\n{\n    for (int32_t i = 0; i < msg->pathNum; i++) {\n        // 回调信息处理\n        printf(\"数据链路类型: %d\\n\", msg->networkQos[i].pathType);\n        printf(\"该数据链路类型的上行带宽: %ld\\n\", msg->networkQos[i].linkUpBandwidth);\n        printf(\"该数据链路类型的下行带宽: %ld\\n\", msg->networkQos[i].linkDownBandwidth);\n        // 单位为bps，若需转化为B/s，数值需要除以8\n        printf(\"该数据链路类型的上行速率: %ld\\n\", msg->networkQos[i].linkUpRate);\n        // 单位为bps，若需转化为B/s，数值需要除以8\n        printf(\"该数据链路类型的下行速率: %ld\\n\", msg->networkQos[i].linkDownRate);\n        // 实时速率为上行速率和下行速率之和\n        printf(\"该数据链路类型的实时速率(B/s): %ld\\n\", (msg->networkQos[i].linkUpRate + msg->networkQos[i].linkDownRate) / 8);\n        printf(\"该数据链路类型的RTT时延: %d\\n\", msg->networkQos[i].rttMs);\n        printf(\"该数据链路类型的上行发送空口缓冲时延: %d\\n\", msg->networkQos[i].linkUpBufferDelayMs);\n    }\n}\n\nint32_t RegisterNetQualityCallback()\n{\n    HMS_NetworkBoost_NetQosChange callback;\n    callback = onNetworkQoSChanged;\n    // 注册回调，获取回调Id\n    int32_t ret = HMS_NetworkBoost_RegisterNetQosCallback(callback, &callbackId);\n    printf(\"注册网络质量结果: %d, Id：%d\\n\", ret, callbackId);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用业务流程结束，通过取消注册的方式取消监听网络质量评估信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t UnregisterNetQualityCallback()\n{\n    // 使用注册时获取的回调Id取消注册\n    int32_t ret = HMS_NetworkBoost_UnregisterNetQosCallback(callbackId);\n    printf(\"取消注册网络质量结果: %d\\n\", ret);\n    return ret;\n}\n"
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