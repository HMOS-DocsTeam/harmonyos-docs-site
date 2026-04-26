"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["178681"], {
588215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_button_scenario_fusion_button_get_risklevel_scenario_fusion_button_get_risklevel_md_d24_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-button-scenario-fusion-button-get-risklevel-scenario-fusion-button-get-risklevel-md-d24.json
var site_docs_scenario_fusion_guide_scenario_fusion_button_scenario_fusion_button_get_risklevel_scenario_fusion_button_get_risklevel_md_d24_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/scenario-fusion-button-get-risklevel","title":"获取手机号和风险等级Button","description":"场景介绍","source":"@site/docs/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/scenario-fusion-button-get-risklevel.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel","slug":"/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"获取手机号和风险等级Button","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-button-get-risklevel","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"权限设置Button","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-permissiononsetting/"},"next":{"title":"省市区选择器Input","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/scenario-fusion-button-get-risklevel.md


const frontMatter = {
	title: '获取手机号和风险等级Button',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-button-get-risklevel',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取手机号和风险等级Button';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
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
    img: "img",
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
        id: "获取手机号和风险等级button",
        children: "获取手机号和风险等级Button"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.2(22)开始，支持获取手机号和风险等级Button功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可通过“获取手机号和风险等级Button”获取授权码（Authorization Code），进而获取用户的手机号和风险等级信息，用于对恶意账号进行风险控制，进一步增强应用的安全性。风险等级完整场景详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition",
        children: "获取风险等级"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要完成手机号的scope权限申请和【获取风险等级】权限申请，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-preparations/account-config-permissions",
        children: "申请账号权限"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
        children: "开发前提"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Scenario Fusion Kit模块以及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在容器中声明FunctionalButton，指定Button的openType，并设置对应的回调函数，代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // 构建FunctionalButton组件实例。\n        FunctionalButton({\n          params: {\n            // OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL表示该按钮用于获取手机号和风险等级。\n            openType: functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL,\n            label: '获取手机号和风险等级',\n            // 调整按钮样式。\n            styleOption: {\n              styleConfig: new functionalButtonComponentManager.ButtonConfig()\n                .fontSize(20)\n            },\n          },\n          // 当OpenType为GET_PHONE_NUMBER_AND_RISK_LEVEL时，回调必须为onGetPhoneNumberAndRiskLevel。\n          controller: new functionalButtonComponentManager.FunctionalButtonController()\n            .onGetPhoneNumberAndRiskLevel((data) => {\n              if (data?.errCode) {\n                // 错误日志处理。\n                hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", data?.errCode, data?.errMsg);\n                return;\n              }\n              // 成功日志处理。\n              hilog.info(0x0000, \"testTag\", \"succeeded in authentication\");\n              // 授权码处理。\n              let authorizationCode = data?.code;\n            })\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(582982)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "openType参数填写\"functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL\"指定Button为获取手机号和风险等级类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "controller参数必须对应填写\"new functionalButtonComponentManager.FunctionalButtonController().onGetPhoneNumberAndRiskLevel\"。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若成功调用，可通过回调函数中的授权码（Authorization Code）获取用户的手机号和风险等级。风险等级完整场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition",
              children: "获取风险等级"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其他参数请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton",
            children: "FunctionalButton（Button组件）"
          }), "。"]
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
582982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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