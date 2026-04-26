"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290642"], {
280079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_target_application_share_sec_panel_back_share_sec_panel_back_md_97f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-target-application-share-sec-panel-back-share-sec-panel-back-md-97f.json
var site_docs_share_kit_guide_system_share_share_target_application_share_sec_panel_back_share_sec_panel_back_md_97f_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-target-application/share-sec-panel-back/share-sec-panel-back","title":"分享详情页关闭分享面板","description":"从分享详情页返回分享面板时，可通过设置resultCode值为特定的ShareAbilityResultCode，以告知分享面板做出不同的处理，具体处理方式如下：","source":"@site/docs/share-kit-guide/system-share/share-target-application/share-sec-panel-back/share-sec-panel-back.md","sourceDirName":"share-kit-guide/system-share/share-target-application/share-sec-panel-back","slug":"/share-kit-guide/system-share/share-target-application/share-sec-panel-back/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel-back/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"分享详情页关闭分享面板","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-sec-panel-back","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分享详情页处理分享内容","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel/"},"next":{"title":"判断应用是否被系统分享拉起","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-launch-param/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-target-application/share-sec-panel-back/share-sec-panel-back.md


const frontMatter = {
	title: '分享详情页关闭分享面板',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-sec-panel-back',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享详情页关闭分享面板';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分享详情页关闭分享面板",
        children: "分享详情页关闭分享面板"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从分享详情页返回分享面板时，可通过设置resultCode值为特定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-system-share/share-system-share#shareabilityresultcode",
        children: "ShareAbilityResultCode"
      }), "，以告知分享面板做出不同的处理，具体处理方式如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ERROR：返回分享面板，并提示用户发生错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BACK：正常返回分享面板。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOSE：关闭分享面板。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ShareExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { systemShare } from '@kit.ShareKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标应用可以通过terminateSelfWithResult接口，设置resultCode值为systemShare.ShareAbilityResultCode.CLOSE，以关闭分享面板。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class TestShareAbility extends ShareExtensionAbility {\n  async onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    session.terminateSelfWithResult({\n      resultCode: systemShare.ShareAbilityResultCode.CLOSE\n    });\n  }\n}\n"
          })
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