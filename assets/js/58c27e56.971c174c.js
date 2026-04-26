"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["845331"], {
890031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_language_user_preferences_i_18_n_system_language_region_i_18_n_system_language_region_md_58c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-language-user-preferences-i-18-n-system-language-region-i-18-n-system-language-region-md-58c.json
var site_docs_localization_kit_i_18_n_i_18_n_language_user_preferences_i_18_n_system_language_region_i_18_n_system_language_region_md_58c_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/i18n-system-language-region","title":"系统语言与区域","description":"实现原理","source":"@site/docs/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/i18n-system-language-region.md","sourceDirName":"localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region","slug":"/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"系统语言与区域","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-system-language-region","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"区域ID与文化习惯划分","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-locale-culture/"},"next":{"title":"应用偏好语言","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-preferred-language/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/i18n-system-language-region.md


const frontMatter = {
	title: '系统语言与区域',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-system-language-region',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '系统语言与区域';

const assets = {

};



const toc = [{
  "value": "实现原理",
  "id": "实现原理",
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
        id: "系统语言与区域",
        children: "系统语言与区域"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设置的“语言和地区”中可以添加多种语言，多种语言形成的列表称为语言列表，列表中的第一个语言称为系统语言。系统区域是依据区域ID划分的特定地区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置/切换系统语言时，系统会检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/i18n/i18n-locale-culture",
        children: "扩展参数"
      }), "与系统语言是否匹配，若不匹配，则删除扩展参数。例如，当前系统语言设置为阿拉伯语“ar”时，使用本地数字为“arab”。当系统语言切换为马来西亚语“my”时，本地数字参数更改为马来西亚的本地数字“mymr”。当切换为中文时，因中文不支持设置本地数字，采用阿拉伯数字，因此本地数字的扩展参数会被移除。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，开发者可以在开发者模式下通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/param-tool#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E5%8F%82%E6%95%B0%E7%9A%84%E5%80%BC",
        children: "param工具"
      }), "的“param get persist.global.language”命令获取系统语言。"]
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
          children: "获取系统语言、系统地区、系统区域。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取系统语言\nlet systemLanguage = i18n.System.getSystemLanguage();  // systemLanguage为当前系统语言\n\n// 获取系统地区\nlet systemRegion = i18n.System.getSystemRegion();  // systemRegion为当前系统地区\n\n// 获取系统区域\nlet systemLocale: Intl.Locale = i18n.System.getSystemLocaleInstance();  // systemLocale为当前系统区域\n\n// 通过监听公共事件COMMON_EVENT_LOCALE_CHANGED可以感知系统语言、系统地区或系统区域变化\nlet subscriber: commonEventManager.CommonEventSubscriber; // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\nlet subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n  events: [commonEventManager.Support.COMMON_EVENT_LOCALE_CHANGED]\n};\n// 创建订阅者\ncommonEventManager.createSubscriber(subscribeInfo)\n  .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {\n    console.info('CreateSubscriber');\n    subscriber = commonEventSubscriber;\n    commonEventManager.subscribe(subscriber, (err, data) => {\n      if (err) {\n        console.error(`Failed to subscribe common event. error code: ${err.code}, message: ${err.message}.`);\n        return;\n      }\n      console.info('The subscribed event has occurred.'); // 系统语言、系统地区或系统区域变化时执行\n    })\n  })\n  .catch((err: BusinessError) => {\n    console.error(`CreateSubscriber failed, code is ${err.code}, message is ${err.message}`);\n  });\n"
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