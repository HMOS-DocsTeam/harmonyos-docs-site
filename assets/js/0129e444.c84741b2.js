"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["388059"], {
669140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_superlauncher_camera_distributed_car_superlauncher_camera_distributed_md_012_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-superlauncher-camera-distributed-car-superlauncher-camera-distributed-md-012.json
var site_docs_system_hardware_car_kit_guide_car_superlauncher_camera_distributed_car_superlauncher_camera_distributed_md_012_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-superlauncher-camera-distributed/car-superlauncher-camera-distributed","title":"超级桌面应用接入分布式相机","description":"场景介绍","source":"@site/docs/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/car-superlauncher-camera-distributed.md","sourceDirName":"system-hardware/car-kit-guide/car-superlauncher-camera-distributed","slug":"/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"超级桌面应用接入分布式相机","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-superlauncher-camera-distributed","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听HiCar的连接状态","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/"},"next":{"title":"Driver Development Kit简介","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/driverdevelopment-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/car-superlauncher-camera-distributed.md


const frontMatter = {
	title: '超级桌面应用接入分布式相机',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-superlauncher-camera-distributed',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '超级桌面应用接入分布式相机';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "超级桌面应用接入分布式相机",
        children: "超级桌面应用接入分布式相机"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超级桌面是一种手机、车机互联的特性，车主可以通过超级桌面，将华为手机上的应用共享至中控屏，在中控屏上使用丰富的手机应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机和车机通过超级桌面连接后，当在车机上使用超级桌面应用需要调用车机摄像头（例如视频通话/会议场景）时，可选择接入远端分布式相机能力，在本端设备（手机）获取并展示远端设备（车机）相机画面，最终共享在车机中控屏上显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机和车机之间需要超级桌面建连成功并且待接入分布式相机的应用在超级桌面已打开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用如需在超级桌面场景中使用车机摄像头实现视频通话/会议等功能，详细开发指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit",
        children: "相机服务"
      }), "。"]
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