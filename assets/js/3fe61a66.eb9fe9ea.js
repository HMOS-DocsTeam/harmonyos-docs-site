"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["199312"], {
653335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_create_serviceability_create_serviceability_md_3fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-serviceability-create-serviceability-create-serviceability-md-3fe.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_create_serviceability_create_serviceability_md_3fe_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/create-serviceability","title":"创建ServiceAbility","description":"1. 创建ServiceAbility。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/create-serviceability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability","slug":"/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"创建ServiceAbility","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-serviceability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ServiceAbility的生命周期","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/"},"next":{"title":"启动ServiceAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/create-serviceability.md


const frontMatter = {
	title: '创建ServiceAbility',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-serviceability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建ServiceAbility';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建serviceability",
        children: "创建ServiceAbility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ServiceAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过DevEco Studio开发平台创建ServiceAbility时，DevEco Studio会默认生成onStart、onStop、onCommand方法，其他方法需要开发者自行实现，接口说明参见前述章节。开发者也可以添加其他Ability请求与ServiceAbility交互时的处理方法，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nclass FirstServiceAbilityStub extends rpc.RemoteObject {\n  constructor(des: Object) {\n    if (typeof des === 'string') {\n      super(des);\n    } else {\n      return;\n    }\n  }\n\n  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence, option: rpc.MessageOption): boolean {\n    hilog.info(domain, TAG, 'ServiceAbility onRemoteRequest called');\n    if (code === 1) {\n      let string = data.readString();\n      hilog.info(domain, TAG, `ServiceAbility string=${string}`);\n      let result = Array.from(string).sort().join('');\n      hilog.info(domain, TAG, `ServiceAbility result=${result}`);\n      reply.writeString(result);\n    } else {\n      hilog.info(domain, TAG, 'ServiceAbility unknown request code');\n    }\n    return true;\n  }\n}\n\nclass ServiceAbility {\n  onStart(): void {\n    hilog.info(domain, TAG, 'ServiceAbility onStart');\n  }\n\n  onStop(): void {\n    hilog.info(domain, TAG, 'ServiceAbility onStop');\n  }\n\n  onCommand(want: Want, startId: number): void {\n    hilog.info(domain, TAG, 'ServiceAbility onCommand');\n  }\n\n  onConnect(want: Want): rpc.RemoteObject {\n    hilog.info(domain, TAG, 'ServiceAbility onConnect' + want);\n    return new FirstServiceAbilityStub('test');\n  }\n\n  onDisconnect(want: Want): void {\n    hilog.info(domain, TAG, 'ServiceAbility onDisconnect' + want);\n  }\n}\n\nexport default new ServiceAbility();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册ServiceAbility。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ServiceAbility需要在应用配置文件config.json中进行注册，注册类型type需要设置为service。\"visible\"属性表示ServiceAbility是否可以被其他应用调用，true表示可以被其他应用调用，false表示不能被其他应用调用（仅应用内可以调用）。若ServiceAbility需要被其他应用调用，注册ServiceAbility时需要设置\"visible\"为true，同时需要设置支持关联启动。ServiceAbility的启动规则详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/fa-model-development/fa-model-application-components/component-startup-rules-fa",
            children: "FA模型组件启动规则"
          }), "章节。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  // ...\n  \"module\": {\n    // ...\n    \"abilities\": [\n      // ...\n      {\n        \"name\": \".ServiceAbility\",\n        \"srcLanguage\": \"ets\",\n        \"srcPath\": \"ServiceAbility\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"$string:ServiceAbility_desc\",\n        \"type\": \"service\",\n        \"visible\": true\n      },\n      // ...\n    ]\n    // ...\n  }\n}\n"
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