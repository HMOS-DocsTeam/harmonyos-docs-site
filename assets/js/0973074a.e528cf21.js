"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86819"], {
381518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_target_application_share_launch_param_share_launch_param_md_097_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-target-application-share-launch-param-share-launch-param-md-097.json
var site_docs_share_kit_guide_system_share_share_target_application_share_launch_param_share_launch_param_md_097_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-target-application/share-launch-param/share-launch-param","title":"判断应用是否被系统分享拉起","description":"从5.1.0(18)版本开始，支持应用判断是否被系统分享拉起。","source":"@site/docs/share-kit-guide/system-share/share-target-application/share-launch-param/share-launch-param.md","sourceDirName":"share-kit-guide/system-share/share-target-application/share-launch-param","slug":"/share-kit-guide/system-share/share-target-application/share-launch-param/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-launch-param/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"判断应用是否被系统分享拉起","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-launch-param","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分享详情页关闭分享面板","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel-back/"},"next":{"title":"共享联系人信息到分享推荐区","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-intents-share/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-target-application/share-launch-param/share-launch-param.md


const frontMatter = {
	title: '判断应用是否被系统分享拉起',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-launch-param',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '判断应用是否被系统分享拉起';

const assets = {

};



const toc = [{
  "value": "示例代码",
  "id": "示例代码",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "判断应用是否被系统分享拉起",
        children: "判断应用是否被系统分享拉起"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)版本开始，支持应用判断是否被系统分享拉起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为目标应用接入系统分享时，当应用被拉起，需要判断本次启动原因是被系统分享拉起的，以便处理对应的分享业务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
          children: "UIAbility"
        }), "处理分享内容时，可使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
          children: "onCreate"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
          children: "onNewWant"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#launchparam",
          children: "LaunchParam.launchReasonMessage"
        }), "字段是否为'ReasonMessage_SystemShare'判断。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
          children: "UIExtensionAbility"
        }), "处理分享内容时，可使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#oncreate",
          children: "onCreate"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#launchparam",
          children: "LaunchParam.launchReasonMessage"
        }), "字段是否为'ReasonMessage_SystemShare'判断。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "处理分享内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class ShareUIAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    if (launchParam.launchReasonMessage === 'ReasonMessage_SystemShare') {\n      // 识别为被系统分享拉起\n      console.info('被拉起原因：系统分享');\n    }\n  }\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    if (launchParam.launchReasonMessage === 'ReasonMessage_SystemShare') {\n      // 识别为被系统分享拉起\n      console.info('被拉起原因：系统分享');\n    }\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/ShareUIPage'); // 此路径仅为示例 请替换实际路径\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
            children: "UIExtensionAbility"
          }), "处理分享内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, ShareExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';\n\nexport default class ShareExtAbility extends ShareExtensionAbility {\n  onCreate(launchParam: AbilityConstant.LaunchParam): void {\n    if (launchParam.launchReasonMessage === 'ReasonMessage_SystemShare') {\n      // 识别为被系统分享拉起\n      console.info('被拉起原因：系统分享');\n    }\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    session.loadContent('pages/ShareExtDialog'); // 此路径仅为示例 请替换实际路径\n  }\n}\n"
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