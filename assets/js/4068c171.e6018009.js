"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["72426"], {
532695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_faq_iap_faq_23_iap_faq_23_md_406_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-faq-iap-faq-23-iap-faq-23-md-406.json
var site_docs_iap_kit_guide_iap_faq_iap_faq_23_iap_faq_23_md_406_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-faq/iap-faq-23/iap-faq-23","title":"自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成","description":"订阅在发生切换且立即生效时，原订阅的剩余权益价值会自动按照比例，折算并叠加至新订阅。所以，切换后订阅有效期的组成 = 原订阅剩余权益的折算时间 + 新订阅原本的周期时间。","source":"@site/docs/iap-kit-guide/iap-faq/iap-faq-23/iap-faq-23.md","sourceDirName":"iap-kit-guide/iap-faq/iap-faq-23","slug":"/iap-kit-guide/iap-faq/iap-faq-23/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-23/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-23","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用迁移后，JWT密钥验签错误自查方法","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-22/"},"next":{"title":"华为IAP范围覆盖","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-appendix/iap-appendix-coverage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-faq/iap-faq-23/iap-faq-23.md


const frontMatter = {
	title: '自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-faq-23',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自动续期订阅商品a切换b且立即生效时新订阅有效期的组成",
        children: "自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅在发生切换且立即生效时，原订阅的剩余权益价值会自动按照比例，折算并叠加至新订阅。所以，切换后订阅有效期的组成 = 原订阅剩余权益的折算时间 + 新订阅原本的周期时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如，某个用户首先购买了订阅A（普通会员，20元/30天），使用了15天后，切换成同订阅组下的订阅B（高级会员，60元/30天）。切换时，A订阅剩余权益自动按比例折算，折算至B订阅的时间为5天。则切换后，B订阅有效期的天数 = 5天 + 30天 = 35天。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间轴（MM/dd）如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841983)/* ["default"] */.A) + "",
        width: "1252",
        height: "98"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于沙盒环境，按照生产1天 = 沙盒10s换算，等效时间轴（hh:mm:ss）如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(746274)/* ["default"] */.A) + "",
        width: "1267",
        height: "95"
      })
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
746274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478949-8c08214612b8f5eb3e38912b910fa0b6.png");

},
841983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958948-64ba4a7320fa643391aeea470f3d21a8.png");

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