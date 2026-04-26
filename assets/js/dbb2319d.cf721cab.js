"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["373175"], {
869995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_application_component_configuration_stage_application_component_configuration_stage_md_dbb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-application-component-configuration-stage-application-component-configuration-stage-md-dbb.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_application_component_configuration_stage_application_component_configuration_stage_md_dbb_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/application-component-configuration-stage","title":"应用/组件级配置","description":"在开发应用时，需要配置应用的一些标签，例如应用的包名、图标等标识特征的属性。本文描述了在开发应用需要配置的一些关键标签。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/application-component-configuration-stage.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage","slug":"/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用/组件级配置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-component-configuration-stage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Stage模型开发概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-development-overview/"},"next":{"title":"UIAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/application-component-configuration-stage.md


const frontMatter = {
	title: '应用/组件级配置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-component-configuration-stage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用/组件级配置';

const assets = {

};



const toc = [{
  "value": "应用包名配置",
  "id": "应用包名配置",
  "level": 2
}, {
  "value": "应用图标和名称配置",
  "id": "应用图标和名称配置",
  "level": 2
}, {
  "value": "应用版本声明配置",
  "id": "应用版本声明配置",
  "level": 2
}, {
  "value": "Module支持的设备类型配置",
  "id": "module支持的设备类型配置",
  "level": 2
}, {
  "value": "Module权限配置",
  "id": "module权限配置",
  "level": 2
}, {
  "value": "应用启动模式配置",
  "id": "应用启动模式配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用组件级配置",
        children: "应用/组件级配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发应用时，需要配置应用的一些标签，例如应用的包名、图标等标识特征的属性。本文描述了在开发应用需要配置的一些关键标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用包名配置",
      children: "应用包名配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要在工程的AppScope目录下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5配置文件"
      }), "中配置bundleName标签，该标签用于标识应用的唯一性。推荐采用反域名形式命名（如com.example.demo，建议第一级为域名后缀com，第二级为厂商/个人名，第三级为应用名，也可以多级）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用图标和名称配置",
      children: "应用图标和名称配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用图标和名称配置通常一起配置，对应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5配置文件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中的icon和label。在DevEco Studio 5.0.3.800版本及之后，module.json5配置文件中的icon和label不再强制要求配置，而app.json5配置文件中的icon和label仍然是必选参数。因此，module.json5配置文件中的icon和label可以省略。app.json5配置文件和module.json5配置文件中的icon和label存在优先级和生效策略，详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-typical-scenarios/layered-image#%E9%85%8D%E7%BD%AE%E4%BC%98%E5%85%88%E7%BA%A7%E5%92%8C%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5",
        children: "配置优先级和生成策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用版本声明配置",
      children: "应用版本声明配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用版本声明需要在工程的AppScope目录下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5配置文件"
      }), "中配置versionCode标签和versionName标签。versionCode用于标识应用的版本号，该标签值为32位非负整数。此数字仅用于确定某个版本是否比另一个版本更新，数值越大表示版本越新。versionName标签标识版本号的文字描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module支持的设备类型配置",
      children: "Module支持的设备类型配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Module支持的设备类型需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "deviceTypes标签"
      }), "，如果deviceTypes标签中添加了某种设备，则表明当前的Module支持在该设备上运行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "module权限配置",
      children: "Module权限配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Module访问系统或其他应用受保护部分所需的权限信息需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "requestPermissions标签"
      }), "。该标签用于声明需要申请权限的名称、申请权限的原因以及权限使用的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用启动模式配置",
      children: "应用启动模式配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持应用配置startMode字段，设置不同的启动模式，且仅在launchType为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type#singleton%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
        children: "单实例模式"
      }), "时生效，用于一个应用存在多个UIAbility的场景。需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "app.json5配置文件"
      }), "中配置startMode标签。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值为\"mainTask\"，表现为点击图标总是启动应用主UIAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可选值\"recentTask\"，表现为点击图标打开最近使用的UIAbility。"
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