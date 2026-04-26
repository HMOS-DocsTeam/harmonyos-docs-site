"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["522580"], {
619733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_start_serviceability_start_serviceability_md_965_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-serviceability-start-serviceability-start-serviceability-md-965.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_start_serviceability_start_serviceability_md_965_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/start-serviceability","title":"启动ServiceAbility","description":"ServiceAbility的启动与其他Ability并无区别，应用开发者可以在PageAbility中通过featureAbility的startAbility接口拉起ServiceAbility，在ServiceAbility中通过particleAbility的startAbility接口拉起ServiceAbility。ServiceAbility的启动规则详见FA模型组件启动规则章节。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/start-serviceability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability","slug":"/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"启动ServiceAbility","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-serviceability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建ServiceAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/"},"next":{"title":"连接ServiceAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/start-serviceability.md


const frontMatter = {
	title: '启动ServiceAbility',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-serviceability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '启动ServiceAbility';

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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动serviceability",
        children: "启动ServiceAbility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ServiceAbility的启动与其他Ability并无区别，应用开发者可以在PageAbility中通过featureAbility的startAbility接口拉起ServiceAbility，在ServiceAbility中通过particleAbility的startAbility接口拉起ServiceAbility。ServiceAbility的启动规则详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/component-startup-rules-fa",
        children: "FA模型组件启动规则"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下示例展示了在PageAbility中通过startAbility启动bundleName为\"com.example.myapplication\"，abilityName为\"ServiceAbility\"的ServiceAbility的方法。启动", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#fa%E6%A8%A1%E5%9E%8B",
        children: "FA模型"
      }), "的ServiceAbility时，需要在abilityName前拼接bundleName字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport Want from '@ohos.app.ability.Want';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageServiceAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageServiceAbility {\n  async startServiceAbility(): Promise<void> {\n    try {\n      hilog.info(domain, TAG, 'Begin to start ability');\n      let want: Want = {\n        bundleName: 'com.samples.famodelabilitydevelop',\n        abilityName: 'com.samples.famodelabilitydevelop.ServiceAbility'\n      };\n      await featureAbility.startAbility({ want });\n      promptAction.showToast({\n        message: 'start_service_success_toast'\n      });\n      hilog.info(domain, TAG, `Start ability succeed`);\n    } catch (error) {\n      hilog.error(domain, TAG, 'Start ability failed with ' + error);\n    }\n  }\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行上述代码后，Ability将通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability#featureabilitystartability",
        children: "startAbility()"
      }), "方法来启动ServiceAbility。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果ServiceAbility尚未运行，则系统会先调用onStart()来初始化ServiceAbility，再回调Service的onCommand()方法来启动ServiceAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果ServiceAbility正在运行，则系统会直接回调ServiceAbility的onCommand()方法来启动ServiceAbility。"
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