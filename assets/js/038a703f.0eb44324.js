"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["328980"], {
938170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_personal_data_push_personal_data_md_038_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-personal-data-push-personal-data-md-038.json
var site_docs_push_kit_guide_push_personal_data_push_personal_data_md_038_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-personal-data/push-personal-data","title":"个人数据处理说明","description":"本章针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括：","source":"@site/docs/push-kit-guide/push-personal-data/push-personal-data.md","sourceDirName":"push-kit-guide/push-personal-data","slug":"/push-kit-guide/push-personal-data/","permalink":"/harmonyos-docs-site/push-kit-guide/push-personal-data/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"个人数据处理说明","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-personal-data","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何更换回执服务器证书的问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-12/"},"next":{"title":"通知内容管理细则","permalink":"/harmonyos-docs-site/push-kit-guide/push-appendix/push-detail-rules/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-personal-data/push-personal-data.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-personal-data',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '个人数据处理说明';

const assets = {

};



const toc = [{
  "value": "Push Kit处理的个人数据清单",
  "id": "push-kit处理的个人数据清单",
  "level": 2
}, {
  "value": "指导开发者如何帮助最终用户实现对数据的控制",
  "id": "指导开发者如何帮助最终用户实现对数据的控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "个人数据处理说明",
        children: "个人数据处理说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Kit处理的个人数据清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-kit处理的个人数据清单",
      children: "Push Kit处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2024/06/03"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "个人数据清单"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用目的"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存留期"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备标识符（Push Token）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将应用消息推送到目标设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备标识符在服务器最多存储15天"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用基本信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将应用消息推送到目标设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用基本信息在服务器最多存储6个月"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAID（应用匿名标识符）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于申请Push Token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不存储"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设备离线，应用消息无法到达端侧时的缓存重发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用消息在服务器最多存储15天"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上存储的个人数据将会通过安全传输通道上传至华为服务器处理。请您在用户同意应用的隐私声明后，再调用Push Kit的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何清除最终用户的数据"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备标识符最多存储15天，应用基本信息最多存储6个月，时间到达后自动删除服务器数据。"
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