"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691570"], {
753169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_9_account_faq_9_md_cfa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-9-account-faq-9-md-cfa.json
var site_docs_account_kit_guide_account_faq_account_faq_9_account_faq_9_md_cfa_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-9/account-faq-9","title":"OpenID和UnionID的格式说明","description":"长度","source":"@site/docs/account-kit-guide/account-faq/account-faq-9/account-faq-9.md","sourceDirName":"account-kit-guide/account-faq/account-faq-9","slug":"/account-kit-guide/account-faq/account-faq-9/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-9/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"OpenID和UnionID的格式说明","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-9","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"无法获取到头像昵称如何解决","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-8/"},"next":{"title":"Access Token和Refresh Token的有效时长是多久","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-10/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-9/account-faq-9.md


const frontMatter = {
	title: 'OpenID和UnionID的格式说明',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-9',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'OpenID和UnionID的格式说明';

const assets = {

};



const toc = [{
  "value": "长度",
  "id": "长度",
  "level": 2
}, {
  "value": "唯一性标识",
  "id": "唯一性标识",
  "level": 2
}, {
  "value": "数据类型",
  "id": "数据类型",
  "level": 2
}, {
  "value": "大小写敏感",
  "id": "大小写敏感",
  "level": 2
}, {
  "value": "实际应用中的注意事项",
  "id": "实际应用中的注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "openid和unionid的格式说明",
        children: "OpenID和UnionID的格式说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "长度",
      children: "长度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为减少开发者接入和迁移成本，Account Kit在2023年09月21日对OpenID、UnionID的长度做出了如下调整："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenID"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用创建时间晚于（含）2023年09月21日 23:00:00，OpenID固定28位。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用创建时间早于2023年09月21日 23:00:00，OpenID长度不固定，限制在1-256位。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UnionID"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者账号注册时间晚于（含）2023年09月21日 23:00:00，UnionID固定29位。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者账号注册时间早于2023年09月21日 23:00:00，UnionID长度不固定，限制在1-92位。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "唯一性标识",
      children: "唯一性标识"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者账号下管理了多个应用时，针对同一个华为账号，不同的应用返回的OpenID值不同，但返回的UnionID相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者账号下管理了多个应用，并且这些应用需要共享同一个华为账号的用户信息，可以使用UnionID作为用户标识。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据类型",
      children: "数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenID和UnionID均是字符串类型的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "大小写敏感",
      children: "大小写敏感"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenID和UnionID严格区分大小写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实际应用中的注意事项",
      children: "实际应用中的注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在存储、查询、比较OpenID或UnionID时，请务必保持其原始的大小写格式。"
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