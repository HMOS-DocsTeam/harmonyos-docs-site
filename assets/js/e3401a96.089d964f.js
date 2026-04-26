"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483869"], {
713583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_c_networkboost_appreportqoe_c_networkboost_appreportqoe_c_md_e34_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-boost-kit-guide-networkboost-netqualityguide-c-networkboost-appreportqoe-c-networkboost-appreportqoe-c-md-e34.json
var site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_c_networkboost_appreportqoe_c_networkboost_appreportqoe_c_md_e34_namespaceObject = JSON.parse('{"id":"system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c/networkboost-appreportqoe-c","title":"应用传输体验反馈 (C/C++)","description":"场景介绍","source":"@site/docs/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c/networkboost-appreportqoe-c.md","sourceDirName":"system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c","slug":"/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c/","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用传输体验反馈 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-appreportqoe-c","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网络场景识别 (C/C++)","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-scenecallback-c/"},"next":{"title":"弱网感知判决 (C/C++)","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-weaksignaljudge-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-boost-kit-guide/networkboost-netqualityguide-c/networkboost-appreportqoe-c/networkboost-appreportqoe-c.md


const frontMatter = {
	title: '应用传输体验反馈 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-appreportqoe-c',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '应用传输体验反馈 (C/C++)';

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
        id: "应用传输体验反馈-cc",
        children: "应用传输体验反馈 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用传输体验发生变化时，应用将传输体验和传输的业务类型信息通过实时反馈接口传输给系统网络业务模块，系统网络业务模块进行精细化调度，实现网络加速。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：视频类App播放过程中卡顿，将卡顿信息上报后，Network Boost Kit将信息反馈给系统网络加速模块，该模块会记录播放卡顿信息，并根据当前网络情况，启用网络加速能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t HMS_NetworkBoost_ReportQoe(NetworkBoost_ServiceType serviceType, NetworkBoost_QoeType qoeType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用反馈传输体验信息。"
          })]
        })
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
          children: "调用ReportQoe接口将应用传输体验信息通知给系统。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ReportQoe()\n{\n    NetworkBoost_ServiceType serviceType = NB_SERVICE_SHORT_VIDEO;\n    NetworkBoost_QoeType qoeType = NB_QOE_BAD_SERVER_ERROR;\n    int32_t ret = HMS_NetworkBoost_ReportQoe(serviceType, qoeType);\n    printf(\"传输体验反馈结果: %d\\n\", ret);\n    return ret;\n}\n"
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