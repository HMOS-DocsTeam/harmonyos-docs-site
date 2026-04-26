"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["908781"], {
203416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_faq_appgallery_faq_32_appgallery_faq_32_md_176_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-faq-appgallery-faq-32-appgallery-faq-32-md-176.json
var site_docs_store_kit_guide_store_faq_appgallery_faq_32_appgallery_faq_32_md_176_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-faq/appgallery-faq-32/appgallery-faq-32","title":"应用内快捷方式加桌返回401错误码","description":"*问题现象*","source":"@site/docs/store-kit-guide/store-faq/appgallery-faq-32/appgallery-faq-32.md","sourceDirName":"store-kit-guide/store-faq/appgallery-faq-32","slug":"/store-kit-guide/store-faq/appgallery-faq-32/","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/appgallery-faq-32/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"应用内快捷方式加桌返回401错误码","sidebar_position":30,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-faq-32","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何过滤应用内快捷方式加桌的日志？","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-31/"},"next":{"title":"标准化事件及应用归因签名","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-faq/appgallery-faq-32/appgallery-faq-32.md


const frontMatter = {
	title: '应用内快捷方式加桌返回401错误码',
	sidebar_position: 30,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-faq-32',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内快捷方式加桌返回401错误码';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内快捷方式加桌返回401错误码",
        children: "应用内快捷方式加桌返回401错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用应用内快捷方式接口加桌时，返回401错误码，参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagercheckpinshortcutpermitted",
            children: "checkPinShortcutPermitted"
          }), "校验快捷方式是否允许加桌接口："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上下文context为空。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "快捷方式shortcutId长度超过63字节。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "快捷方式目标want中参数parameters非基本字符串类型或键值长度超过1024个字符。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "静态快捷方式名称资源索引labelResName为空或对应的资源不存在。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "静态快捷方式图标资源索引iconResName为空或对应的资源不存在。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自定义快捷方式名称文本label为空或者长度超过255个字符。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自定义快捷方式图标路径foregroundIcon无权限访问或文件不存在。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自定义快捷方式图标格式非png或者webp格式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自定义快捷方式图标大小超过100KB。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持为其他应用添加快捷方式。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-productviewmanager/store-productviewmanager#productviewmanagerrequestnewpinshortcut",
            children: "requestNewPinShortcut"
          }), "创建快捷方式加桌接口："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上下文context为空。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "快捷方式校验结果tid为空。"
          }), "\n"]
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