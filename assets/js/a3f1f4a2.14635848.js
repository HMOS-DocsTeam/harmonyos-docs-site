"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["859968"], {
333100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_introduction_car_introduction_md_a3f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-introduction-car-introduction-md-a3f.json
var site_docs_system_hardware_car_kit_guide_car_introduction_car_introduction_md_a3f_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-introduction/car-introduction","title":"Car Kit简介","description":"Car Kit（车服务）为开发者提供一套便捷接入出行服务的能力，开发者通过集成Car Kit，可以轻松实现在手机与鸿蒙智行车机之间无缝传递导航信息、通过超级桌面在鸿蒙智行车机上使用手机上的应用、通过HiCar在认证车机上使用手机上的应用等功能，为用户提供更加良好的出行体验。","source":"@site/docs/system-hardware/car-kit-guide/car-introduction/car-introduction.md","sourceDirName":"system-hardware/car-kit-guide/car-introduction","slug":"/system-hardware/car-kit-guide/car-introduction/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Car Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-introduction","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MDM Kit术语","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-term/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-introduction/car-introduction.md


const frontMatter = {
	title: 'Car Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-introduction',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Car Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "驾驶鸿蒙智行车辆的出行场景",
  "id": "驾驶鸿蒙智行车辆的出行场景",
  "level": 3
}, {
  "value": "驾驶HiCar认证车辆的出行场景",
  "id": "驾驶hicar认证车辆的出行场景",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "car-kit简介",
        children: "Car Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Car Kit（车服务）为开发者提供一套便捷接入出行服务的能力，开发者通过集成Car Kit，可以轻松实现在手机与鸿蒙智行车机之间无缝传递导航信息、通过超级桌面在鸿蒙智行车机上使用手机上的应用、通过HiCar在认证车机上使用手机上的应用等功能，为用户提供更加良好的出行体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147305)/* ["default"] */.A) + "",
        width: "727",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Car Kit为华为手机用户提供驾驶鸿蒙智行车辆的出行场景和驾驶HiCar认证车辆的出行场景两类解决方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "驾驶鸿蒙智行车辆的出行场景",
      children: "驾驶鸿蒙智行车辆的出行场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果用户驾驶鸿蒙智行车辆（包括仪表/HUD显示）出行，华为提供了导航流转和超级桌面解决方案："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航流转："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是华为为用户提供的手机与车机之间无缝传递导航信息的解决方案，涵盖多种使用场景，如导航信息流转至车机、地址流转至车机，以及下车后地图导航自动流转回手机，实现步行导航接续等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过接入 Car Kit 的导航类接口，提供导航信息，响应系统流转事件，从而完成手机与车机之间的导航流转业务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超级桌面："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是华为为用户提供手机应用在鸿蒙座舱车机操作系统上使用，丰富鸿蒙智行生态的解决方案。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用接入Car Kit出行互联类接口，可根据超级桌面连接状态，获取车机的屏幕信息用于UI呈现，或使用车机摄像头优化业务交互等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "驾驶hicar认证车辆的出行场景",
      children: "驾驶HiCar认证车辆的出行场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果用户驾驶HUAWEI HiCar（以下简称HiCar ）认证车辆出行，华为提供了HiCar互联解决方案："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HiCar将移动设备和HiCar认证车辆连接起来，利用车辆和移动设备各自的软硬件以及多设备互联能力，给用户创造智慧出行体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用接入Car Kit出行互联类接口，可根据HiCar连接状态，获取HiCar认证车辆的屏幕信息用于用户UI呈现，或使用HiCar认证车辆摄像头优化业务交互等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959125)/* ["default"] */.A) + "",
        width: "875",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Car Kit处于HarmonyOS的框架层，作为生态应用和系统应用之间的桥梁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统应用向Car Kit订阅导航数据的变化：当生态应用导航数据发生变化时通知到Car Kit，Car Kit会将导航数据的变化转发给系统应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生态应用向Car Kit订阅系统事件：当系统应用希望生态应用执行任务时通知到Car Kit，Car Kit会将系统事件转发给生态应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生态应用向Car Kit订阅智慧出行连接状态的变化：当智慧出行连接状态发生变化时，Car Kit会将当前智慧出行连接状态转发给生态应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit从4.1.0(11)开始支持Phone设备，并且从6.1.0(23)版本开始，新增支持Tablet设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
147305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478465-1027d883ea40678fada7ff3caa03c561.png");

},
959125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798816-6b91de76cda6e939c5f09a68d126de7d.png");

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