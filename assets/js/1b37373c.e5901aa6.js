"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["60157"], {
951853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_overview_vibrator_overview_md_1b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-vibrator-vibrator-overview-vibrator-overview-md-1b3.json
var site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_overview_vibrator_overview_md_1b3_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/vibrator/vibrator-overview/vibrator-overview","title":"振动开发概述","description":"通过最大化开放马达器件能力，振动器模块服务拓展了马达服务，实现了振动与交互融合设计，从而打造出细腻精致的一体化振动体验和差异化体验，提升用户交互效率、易用性以及用户体验，并增强品牌竞争力。","source":"@site/docs/system-hardware/sensor-service-kit/vibrator/vibrator-overview/vibrator-overview.md","sourceDirName":"system-hardware/sensor-service-kit/vibrator/vibrator-overview","slug":"/system-hardware/sensor-service-kit/vibrator/vibrator-overview/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"振动开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-overview","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"传感器开发指导(C/C++)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/"},"next":{"title":"振动开发指导(ArkTS)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/vibrator/vibrator-overview/vibrator-overview.md


const frontMatter = {
	title: '振动开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-overview',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '振动开发概述';

const assets = {

};



const toc = [{
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "振动开发概述",
        children: "振动开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过最大化开放马达器件能力，振动器模块服务拓展了马达服务，实现了振动与交互融合设计，从而打造出细腻精致的一体化振动体验和差异化体验，提升用户交互效率、易用性以及用户体验，并增强品牌竞争力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vibrator属于控制类小器件，主要包含以下四个模块：Vibrator API，Vibrator Framework，Vibrator Service和HDF层。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 控制类小器件中的Vibrator"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767441)/* ["default"] */.A) + "",
        width: "497",
        height: "563"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vibrator API：提供振动器基础的API，主要包含振动器的列表查询、振动效果查询、触发/关闭等接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vibrator Framework：实现振动器的框架层管理，实现与控制类小器件Service的通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "控制类小器件 Service：实现控制器的服务管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HDF层：适配不同设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用振动器时，开发者需要配置请求振动器的权限ohos.permission.VIBRATE，才能控制振动器振动。"
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
767441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438527-b28cac334a2b65dc5c83900de58e1c7b.png");

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