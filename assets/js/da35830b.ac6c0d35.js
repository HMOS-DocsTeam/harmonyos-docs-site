"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["392576"], {
999808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_mdm_kit_mdm_kit_term_mdm_kit_term_md_da3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-mdm-kit-mdm-kit-term-mdm-kit-term-md-da3.json
var site_docs_system_basicfun_mdm_kit_mdm_kit_term_mdm_kit_term_md_da3_namespaceObject = JSON.parse('{"id":"system-basicfun/mdm-kit/mdm-kit-term/mdm-kit-term","title":"MDM Kit术语","description":"EDM","source":"@site/docs/system-basicfun/mdm-kit/mdm-kit-term/mdm-kit-term.md","sourceDirName":"system-basicfun/mdm-kit/mdm-kit-term","slug":"/system-basicfun/mdm-kit/mdm-kit-term/","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-term/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"MDM Kit术语","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-term","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"EnterpriseAdminExtensionAbility开发指南","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-admin/"},"next":{"title":"Car Kit简介","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/mdm-kit/mdm-kit-term/mdm-kit-term.md


const frontMatter = {
	title: 'MDM Kit术语',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-term',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'MDM Kit术语';

const assets = {

};



const toc = [{
  "value": "EDM",
  "id": "edm",
  "level": 2
}, {
  "value": "BYOD",
  "id": "byod",
  "level": 2
}, {
  "value": "Admin角色",
  "id": "admin角色",
  "level": 2
}, {
  "value": "SDA",
  "id": "sda",
  "level": 3
}, {
  "value": "DA",
  "id": "da",
  "level": 3
}, {
  "value": "BDA",
  "id": "bda",
  "level": 3
}, {
  "value": "MDM应用（设备管理应用）",
  "id": "mdm应用设备管理应用",
  "level": 2
}, {
  "value": "企业设备管理扩展能力",
  "id": "企业设备管理扩展能力",
  "level": 2
}, {
  "value": "EMM厂商",
  "id": "emm厂商",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mdm-kit术语",
        children: "MDM Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edm",
      children: "EDM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise device manager 企业设备管理, EDM服务是企业设备管理框架中的核心底座。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "byod",
      children: "BYOD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bring Your Own Device，自带设备办公。指一些企业允许员工携带自己平板或智能手机到公司，并使用这些设备接入办公环境，用户企业办公或者外来访客携带设备访问工厂、实验室等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admin角色",
      children: "Admin角色"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sda",
      children: "SDA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Super Device Admin，超级设备管理员。激活为SDA的Admin组件，可以对设备进行管控以及管理其他的DA应用（包括激活、解除激活DA应用），适用于企业设备办公。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "da",
      children: "DA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device Admin，普通设备管理员。激活为DA的Admin组件，可以对设备进行管控，适用于企业设备办公。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bda",
      children: "BDA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Byod Device Admin，BYOD设备管理员。激活为BDA的组件，可以对设备进行一些如禁用拍照、录音等简单管控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mdm应用设备管理应用",
      children: "MDM应用（设备管理应用）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "又称企业MDM应用，指集成了MDM（Mobile Device Management，移动设备管理）管理功能的应用，能够集中管理、监控和保护企业内的移动设备（如智能手机、平板电脑、笔记本电脑等）。它允许IT管理员远程配置设备、强制执行安全策略、部署应用程序，并确保企业数据的安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "企业设备管理扩展能力",
      children: "企业设备管理扩展能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业设备管理扩展能力（EnterpriseAdminExtensionAbility）组件是MDM应用必备组件。开发者为企业开发MDM应用时，需继承EnterpriseAdminExtensionAbility，在EnterpriseAdminExtensionAbility实例中实现MDM业务逻辑，EnterpriseAdminExtensionAbility实现了系统管理状态变化通知功能，并定义了管理应用激活、去激活、应用安装、卸载事件等回调接口。当MDM应用的企业设备管理扩展能力被激活后，此企业设备管理扩展能力会被保活，当重启、切换用户后会自动启动。企业设备管理扩展能力激活后的MDM应用无法被卸载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "emm厂商",
      children: "EMM厂商"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EMM厂商是指为其他企业提供企业移动管理全套软件、解决方案和服务的公司。"
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