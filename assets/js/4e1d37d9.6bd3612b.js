"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["176475"], {
467631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_faq_cloudfoundation_faq_prefetch_cloudfoundation_faq_3_cloudfoundation_faq_3_md_4e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-faq-cloudfoundation-faq-prefetch-cloudfoundation-faq-3-cloudfoundation-faq-3-md-4e1.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_faq_cloudfoundation_faq_prefetch_cloudfoundation_faq_3_cloudfoundation_faq_3_md_4e1_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/cloudfoundation-faq-3","title":"运行应用时提示“appid **** is not in white list, to skip”","description":"*问题现象*","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/cloudfoundation-faq-3.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3","slug":"/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"运行应用时提示“appid **** is not in white list, to skip”","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何通过应用侧日志定位预加载问题","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/"},"next":{"title":"运行应用时报“XXX Read timed out”异常","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/cloudfoundation-faq-3.md


const frontMatter = {
	title: '运行应用时提示“appid **** is not in white list, to skip”',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '运行应用时提示“appid **** is not in white list, to skip”';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "运行应用时提示appid--is-not-in-white-list-to-skip",
        children: "运行应用时提示“appid **** is not in white list, to skip”"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行应用时提示“appid **** is not in white list, to skip”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263449)/* ["default"] */.A) + "",
        width: "1226",
        height: "70"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出现此错误，是因为手机白名单中未包含当前应用。可按照如下步骤排查和解决："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认云侧是否已开通云函数和预加载服务。须确保已成功开通。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["确认日志中提示的APP ID前缀与云侧创建应用的实际APP ID是否一致。若两者不一致，可能使用了错误的签名方式。请更改为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section20943184413328",
          children: "关联注册应用进行自动签名"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "手动签名"
        }), "方式。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机端进入“设置->系统->日期和时间”，关闭“自动设置”开关，将“日期”往后加1天，然后卸载应用重新安装，应用会自动更新白名单。"
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
263449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438927-621f9ceea331fd75db7f5b0892bbb255.png");

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