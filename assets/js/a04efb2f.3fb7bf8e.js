"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["998598"], {
161115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_share_faq_share_faq_2_share_faq_2_md_a04_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-share-faq-share-faq-2-share-faq-2-md-a04.json
var site_docs_share_kit_guide_share_faq_share_faq_2_share_faq_2_md_a04_namespaceObject = JSON.parse('{"id":"share-kit-guide/share-faq/share-faq-2/share-faq-2","title":"分享数据类型不支持","description":"*现象描述：*","source":"@site/docs/share-kit-guide/share-faq/share-faq-2/share-faq-2.md","sourceDirName":"share-kit-guide/share-faq/share-faq-2","slug":"/share-kit-guide/share-faq/share-faq-2/","permalink":"/harmonyos-docs-site/share-kit-guide/share-faq/share-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"分享数据类型不支持","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-faq-2","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起系统分享框失败","permalink":"/harmonyos-docs-site/share-kit-guide/share-faq/share-faq-1/"},"next":{"title":"分享时提示“您选择的文件不支持分享”","permalink":"/harmonyos-docs-site/share-kit-guide/share-faq/share-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/share-faq/share-faq-2/share-faq-2.md


const frontMatter = {
	title: '分享数据类型不支持',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-faq-2',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享数据类型不支持';

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
        id: "分享数据类型不支持",
        children: "分享数据类型不支持"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据在分享过程中被丢弃或者提示无效的数据类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未知的文件类型，无法分享到其他应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分享数据不支持文件类型与纯文本类型混合分享；分享数据不支持多条纯文本类型分享。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非预置的文件类型，无法匹配到目标应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改分享的内容，符合规范要求。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用类型可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
          children: "在线提单"
        }), "的方式，提供数据类型信息加入预置类型；或可通过自定义类型的方式注册utd类型，参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors#%E5%BA%94%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
          children: "应用自定义数据类型"
        }), "。"]
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