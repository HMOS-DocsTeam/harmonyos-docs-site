"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["879824"], {
904519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_networkboost_weaksignaljudge_networkboost_weaksignaljudge_md_acd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-boost-kit-guide-networkboost-netqualityguide-networkboost-weaksignaljudge-networkboost-weaksignaljudge-md-acd.json
var site_docs_system_network_network_boost_kit_guide_networkboost_netqualityguide_networkboost_weaksignaljudge_networkboost_weaksignaljudge_md_acd_namespaceObject = JSON.parse('{"id":"system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge/networkboost-weaksignaljudge","title":"弱网感知判决","description":"通过网络质量评估和网络场景识别章节，弱网感知判决可归纳为3种方式获取：","source":"@site/docs/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge/networkboost-weaksignaljudge.md","sourceDirName":"system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge","slug":"/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge/","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"弱网感知判决","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-weaksignaljudge","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用传输体验反馈","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-appreportqoe/"},"next":{"title":"连接迁移通知","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-nethandoverguide/networkboost-nethandovercallback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-weaksignaljudge/networkboost-weaksignaljudge.md


const frontMatter = {
	title: '弱网感知判决',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-weaksignaljudge',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '弱网感知判决';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弱网感知判决",
        children: "弱网感知判决"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-qoscallback",
        children: "网络质量评估"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-scenecallback",
        children: "网络场景识别"
      }), "章节，弱网感知判决可归纳为3种方式获取："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "监听系统实时判决"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据网络场景识别信息，如NetworkScene.scene(weakSignal/congestion)，系统直接判决为弱网。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "监听系统预测判决："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据网络场景识别中的弱信号预测信息，如NetworkScene.weakSignalPrediction，系统预测即将进入弱网区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用自定义判决："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据网络质量评估信息，如NetworkQos(linkUpBandwidth/linkDownBandwidth/rttMs/linkUpBufferDelayMs/linkUpBufferCongestionPercent)，应用自定义门限来判决为弱网。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可根据自身业务特点，选择其中一种或多种使用。"
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