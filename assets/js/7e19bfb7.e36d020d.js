"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["395689"], {
193267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_introduction_account_get_risklevel_introduction_md_7e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-get-user-info-account-get-risklevel-account-get-risklevel-introduction-account-get-risklevel-introduction-md-7e1.json
var site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_introduction_account_get_risklevel_introduction_md_7e1_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/account-get-risklevel-introduction","title":"概述","description":"当应用需要获取用户风险等级时，可使用Account Kit提供的获取用户风险等级能力，用于以下恶意场景识别：","source":"@site/docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/account-get-risklevel-introduction.md","sourceDirName":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction","slug":"/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取发票抬头","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-select-invoice-title/"},"next":{"title":"通过华为账号一键登录获取用户风险等级","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/account-get-risklevel-introduction.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要获取用户风险等级时，可使用Account Kit提供的获取用户风险等级能力，用于以下恶意场景识别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用登录风控场景：应用使用华为账号关联登录时，获取华为账号风险等级，对高风险等级账号进行风控，提升应用的安全等级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "营销活动反作弊场景：应用营销活动期间，如进行商户补贴、优惠券发放等商业营销活动时获取华为账号风险等级，协助开发者有效识别“薅羊毛”风险；保护营销资源合理使用，降低业务安全问题给营销方带来的损失，为相关活动保驾护航。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account Kit提供的风险等级如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "风险等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议处置方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未发现显著风险项。例如通过合法途径注册，正常使用华为手机，无批量操作、使用自动机、养号等异常行为。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议确认无风险后放通。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低风险。发现风险因素，结合总体评分后风险较低。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议进行简单验证（如验证码、短信等），或人工审核。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中风险。发现风险因素，结合总体评分后风险中等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议根据业务场景采取一定措施规避伤害。例如，营销活动可降低高等级奖励的概率、打榜类活动对此类投票降低权重、登录注册要求二次验证等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高风险。发现风险因素，结合总体评分后风险较高。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议业务逻辑直接拦截。例如，红包类活动返回不中奖或最小额红包、打榜类活动不计算票数、登录/注册操作要求二次验证、高危业务可选择限制本次操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "风险未知。暂无明确风险等级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议结合账号历史行为及业务场景做出最终决策。"
          })]
        })]
      })]
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