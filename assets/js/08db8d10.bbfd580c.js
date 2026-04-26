"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378647"], {
874938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_preparations_store_iap_preparations_md_08d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-preparations-store-iap-preparations-md-08d.json
var site_docs_store_kit_guide_store_iap_store_iap_preparations_store_iap_preparations_md_08d_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-preparations/store-iap-preparations","title":"接入流程","description":"1. *启用数字商品服务*","source":"@site/docs/store-kit-guide/store-iap/store-iap-preparations/store-iap-preparations.md","sourceDirName":"store-kit-guide/store-iap/store-iap-preparations","slug":"/store-kit-guide/store-iap/store-iap-preparations/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"接入流程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-preparations","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-introduction/"},"next":{"title":"开通相关服务和配置参数","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-enabling/store-iap-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-preparations/store-iap-preparations.md


const frontMatter = {
	title: '接入流程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-preparations',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接入流程';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入流程",
        children: "接入流程"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "启用数字商品服务"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请先参考“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/application-dev-overview",
            children: "应用开发准备"
          }), "”完成基本准备工作及指纹配置，再继续进行后续开发活动。在启动开发之前，需先", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-enabling/store-iap-config-agc",
            children: "启用数字商品服务"
          }), " ，打开相关服务API开关和配置服务参数，才能对数字商品相关的API进行调用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "配置数字商品"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者需要提前录入商品信息（包括商品ID、商品类型、不同国家的商品价格、商品名称等），在客户端调用购买接口时，只需传入已配置的商品ID和商品类型。当前支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc",
            children: "通过AppGallery Connect配置商品信息"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server",
            children: "通过Server API配置数字商品"
          }), " 。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用内分发数字商品"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前支持在开发者的应用内展示和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-query",
            children: "分发数字商品"
          }), "，在完成数字商品配置和接入数字商品购买能力后，当用户在开发者的应用内发起购买时，应用需要调用相关接口来拉起订单页面，展示商品名称、商品价格等信息，用户可在确认交易订单后完成商品购买。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "测试数字商品服务"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前支持开发者使用沙盒测试，在接入数字商品服务的调测过程中无需真实付款即可完成数字商品的购买等相关测试。在进行测试前，需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/",
            children: "AppGallery Connect"
          }), "中的“用户与访问”中添加测试账号，这些测试账号都是真实的华为账号。开发者接入IAP沙盒测试时，需要在测试设备上登录已配置的测试账号。具体请参考“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-sandbox",
            children: "测试数字商品服务"
          }), "”章节。"]
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