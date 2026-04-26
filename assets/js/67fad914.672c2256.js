"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["525996"], {
910118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_mdm_kit_mdm_kit_intro_mdm_kit_intro_md_67f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-mdm-kit-mdm-kit-intro-mdm-kit-intro-md-67f.json
var site_docs_system_basicfun_mdm_kit_mdm_kit_intro_mdm_kit_intro_md_67f_namespaceObject = JSON.parse('{"id":"system-basicfun/mdm-kit/mdm-kit-intro/mdm-kit-intro","title":"MDM Kit简介","description":"业务介绍","source":"@site/docs/system-basicfun/mdm-kit/mdm-kit-intro/mdm-kit-intro.md","sourceDirName":"system-basicfun/mdm-kit/mdm-kit-intro","slug":"/system-basicfun/mdm-kit/mdm-kit-intro/","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"MDM Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-intro","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"事件拦截开发指导（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/interceptor-guidelines/"},"next":{"title":"MDM Kit开发指南","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/mdm-kit/mdm-kit-intro/mdm-kit-intro.md


const frontMatter = {
	title: 'MDM Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-intro',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'MDM Kit简介';

const assets = {

};



const toc = [{
  "value": "业务介绍",
  "id": "业务介绍",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mdm-kit简介",
        children: "MDM Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务介绍",
      children: "业务介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MDM Kit（企业设备管理服务）为企业MDM（Mobile Device Management）应用提供设备管理API，用于管理并保护公司设备上的数据和应用程序。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#mdm%E5%BA%94%E7%94%A8%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E5%BA%94%E7%94%A8",
        children: "MDM应用"
      }), "可以通过集中管理、远程配置和监控来保障设备和数据的安全性和稳定性。它广泛应用于企业和政府机构，以确保员工和客户使用的设备和数据受到保护，实现企业高效管理、安全使用设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "企业派发设备场景（COPE）：指企业统一购买笔记本电脑、平板电脑、智能手机等设备，并将这些设备分发给企业员工使用，这类设备的所属权属于企业，企业对这类设备进行统一管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自带设备办公场景（BYOD）：指一些企业允许员工携带自己的平板或智能手机到公司，并将这些设备接入办公环境，用于企业办公或者外来访客携带设备访问工厂、实验室等场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["框架层和服务层提供了enterprise_device_management部件和enterprise_device_management_ext部件，enterprise_device_management部件提供了设备管理应用程序框架和基本设备管理能力，enterprise_device_management_ext部件为HarmonyOS NEXT设备提供扩展的企业设备管理能力。设备管理应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-admin",
        children: "EnterpriseAdminExtensionAbility"
      }), "来调用MDM Kit中的接口，实现管理设备的意图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99591)/* ["default"] */.A) + "",
        width: "480",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDK版本为5.0.0（API 12）及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持Stage模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持HarmonyOS NEXT设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
        children: "模拟器与真机的差异"
      }), "”。"]
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
99591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958460-0100c8a886fc99d3f19588fbcd1ed94d.png");

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