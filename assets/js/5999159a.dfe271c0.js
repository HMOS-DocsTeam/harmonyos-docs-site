"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["902492"], {
919241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_language_user_preferences_i_18_n_user_preferences_i_18_n_user_preferences_md_599_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-language-user-preferences-i-18-n-user-preferences-i-18-n-user-preferences-md-599.json
var site_docs_localization_kit_i_18_n_i_18_n_language_user_preferences_i_18_n_user_preferences_i_18_n_user_preferences_md_599_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/i18n-user-preferences","title":"用户偏好","description":"使用场景","source":"@site/docs/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/i18n-user-preferences.md","sourceDirName":"localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences","slug":"/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"用户偏好","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-user-preferences","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用偏好语言","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-preferred-language/"},"next":{"title":"时间日期国际化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-date/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/i18n-user-preferences.md


const frontMatter = {
	title: '用户偏好',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-user-preferences',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '用户偏好';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
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
        id: "用户偏好",
        children: "用户偏好"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除区域设置和应用偏好语言设置外，系统还可以设置用户偏好，当前支持本地数字和时制两种偏好。用户偏好设置会保存到系统区域及应用偏好语言中，最终体现在用户界面的国际化特性上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口具体使用方法和说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#system9",
        children: "System"
      }), "的API接口文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\nimport { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取用户偏好。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 判断系统当前是否使用本地数字\nlet usingLocalDigit: boolean = i18n.System.getUsingLocalDigit();\n\n// 判断系统当前是否使用24小时制\nlet is24HourClock: boolean = i18n.System.is24HourClock();\n\n// 通过监听公共事件COMMON_EVENT_TIME_CHANGED可以感知系统时制变化\nlet timeSubscriber: commonEventManager.CommonEventSubscriber; // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\nlet timeSubscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n  events: [commonEventManager.Support.COMMON_EVENT_TIME_CHANGED]\n};\n// 创建订阅者\ncommonEventManager.createSubscriber(timeSubscribeInfo)\n  .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {\n    console.info('CreateSubscriber');\n    timeSubscriber = commonEventSubscriber;\n    commonEventManager.subscribe(timeSubscriber, (err, data) => {\n      if (err) {\n        console.error(`Failed to subscribe common event. error code: ${err.code}, message: ${err.message}.`);\n        return;\n      }\n      // 用于区分系统时间和系统时制变化\n      if (data.data != undefined && data.data == '24HourChange') {\n        console.info('The subscribed event has occurred.'); // 系统时制变化时执行\n      }\n    })\n  })\n  .catch((err: BusinessError) => {\n    console.error(`CreateSubscriber failed, code is ${err.code}, message is ${err.message}`);\n  });\n"
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