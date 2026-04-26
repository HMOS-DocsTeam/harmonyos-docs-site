"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367127"], {
499889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_distribute_store_iap_distribute_delivering_store_iap_distribute_delivering_md_0f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-distribute-store-iap-distribute-delivering-store-iap-distribute-delivering-md-0f9.json
var site_docs_store_kit_guide_store_iap_store_iap_distribute_store_iap_distribute_delivering_store_iap_distribute_delivering_md_0f9_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/store-iap-distribute-delivering","title":"发放数字商品权益","description":"场景介绍","source":"@site/docs/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/store-iap-distribute-delivering.md","sourceDirName":"store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering","slug":"/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"发放数字商品权益","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-distribute-delivering","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"购买数字商品","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/"},"next":{"title":"测试数字商品服务","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-sandbox/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/store-iap-distribute-delivering.md


const frontMatter = {
	title: '发放数字商品权益',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-distribute-delivering',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '发放数字商品权益';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程及开发步骤",
  "id": "业务流程及开发步骤",
  "level": 2
}, {
  "value": "消耗型/非消耗型商品",
  "id": "消耗型非消耗型商品",
  "level": 3
}, {
  "value": "自动续期订阅商品",
  "id": "自动续期订阅商品",
  "level": 3
}, {
  "value": "非续期订阅商品",
  "id": "非续期订阅商品",
  "level": 3
}, {
  "value": "单机应用权益发放",
  "id": "单机应用权益发放",
  "level": 2
}, {
  "value": "非消耗型商品",
  "id": "非消耗型商品",
  "level": 3
}, {
  "value": "自动续期订阅商品",
  "id": "自动续期订阅商品-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "发放数字商品权益",
        children: "发放数字商品权益"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "消耗型商品"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用提供消耗型商品，需要按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B6%88%E8%80%97%E5%9E%8B%E9%9D%9E%E6%B6%88%E8%80%97%E5%9E%8B%E5%95%86%E5%93%81",
            children: "确保权益发放处理"
          }), "消耗型商品的权益发放。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非消耗型商品"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用提供非消耗型商品，且为单机应用，则需要按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%8D%95%E6%9C%BA%E5%BA%94%E7%94%A8%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
            children: "单机应用权益发放"
          }), "（非消耗型商品）处理非消耗型商品的权益发放。其他场景建议按照消耗型/非消耗型商品的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B6%88%E8%80%97%E5%9E%8B%E9%9D%9E%E6%B6%88%E8%80%97%E5%9E%8B%E5%95%86%E5%93%81",
            children: "确保权益发放处理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自动续期订阅商品"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用为非单机应用，则建议按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F%E8%AE%A2%E9%98%85%E5%95%86%E5%93%81",
            children: "确保权益发放处理"
          }), "自动续期订阅商品的权益发放。若为单机应用，则需要按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%8D%95%E6%9C%BA%E5%BA%94%E7%94%A8%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
            children: "单机应用权益发放"
          }), "（自动续期订阅商品）处理自动续期订阅商品的权益发放。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非续期订阅商品"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用提供非续期订阅商品，需要按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%9D%9E%E7%BB%AD%E6%9C%9F%E8%AE%A2%E9%98%85%E5%95%86%E5%93%81",
            children: "确保权益发放处理"
          }), "非续期订阅商品的权益发放。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程及开发步骤",
      children: "业务流程及开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "消耗型非消耗型商品",
      children: "消耗型/非消耗型商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products",
        children: "消耗型/非消耗型商品权益发放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动续期订阅商品",
      children: "自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions",
        children: "自动续期订阅商品权益发放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非续期订阅商品",
      children: "非续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-delivering-nonrenewable",
        children: "非续期订阅商品权益发放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单机应用权益发放",
      children: "单机应用权益发放"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非消耗型商品",
      children: "非消耗型商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products#%E5%8D%95%E6%9C%BA%E5%BA%94%E7%94%A8%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE%E9%9D%9E%E6%B6%88%E8%80%97%E5%9E%8B%E5%95%86%E5%93%81",
        children: "单机应用权益发放"
      }), "（非消耗型）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动续期订阅商品-1",
      children: "自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions#%E5%AF%B9%E7%94%9F%E6%95%88%E4%B8%AD%E7%9A%84%E8%AE%A2%E9%98%85%E5%8F%91%E6%94%BE%E6%9D%83%E7%9B%8A",
        children: "单机应用权益发放"
      }), "（自动续期订阅型）。"]
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