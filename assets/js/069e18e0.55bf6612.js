"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769308"], {
362070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_sensorservice_kit_intro_sensorservice_kit_intro_md_069_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-sensorservice-kit-intro-sensorservice-kit-intro-md-069.json
var site_docs_system_hardware_sensor_service_kit_sensorservice_kit_intro_sensorservice_kit_intro_md_069_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/sensorservice-kit-intro/sensorservice-kit-intro","title":"Sensor Service Kit开发简介","description":"使用场景","source":"@site/docs/system-hardware/sensor-service-kit/sensorservice-kit-intro/sensorservice-kit-intro.md","sourceDirName":"system-hardware/sensor-service-kit/sensorservice-kit-intro","slug":"/system-hardware/sensor-service-kit/sensorservice-kit-intro/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensorservice-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Sensor Service Kit开发简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensorservice-kit-intro","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"为什么一笔成形识别不出来？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-8/"},"next":{"title":"传感器开发概述","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/sensorservice-kit-intro/sensorservice-kit-intro.md


const frontMatter = {
	title: 'Sensor Service Kit开发简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensorservice-kit-intro',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sensor Service Kit开发简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "Sensor",
  "id": "sensor",
  "level": 3
}, {
  "value": "Vibrator",
  "id": "vibrator",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "sensor-service-kit开发简介",
        children: "Sensor Service Kit开发简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sensor Service Kit（传感器服务）使应用程序能够从传感器获取原始数据，并提供振感控制能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sensor（传感器）模块是应用访问底层硬件传感器的一种设备抽象概念。开发者可根据传感器提供的相关接口订阅传感器数据，并根据传感器数据定制相应的算法开发各类应用，比如指南针、运动健康、游戏等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本地传感器: 设备内置的传感器，常用的包括加速度传感器、陀螺仪、温度传感器等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态传感器: 指外置的动态传感器，模块能力可以更细化的控制每个动态传感器。为了管理这些动态接入的设备，应使用 sensor.on('sensorStatusChange', callback) 来监听设备上下线事件。在收到下线通知时，务必调用 sensor.off(...) 来释放之前监听的动态传感器资源，避免内存泄漏或异常调用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vibrator（振动）模块最大化开放马达器件能力，通过拓展马达服务实现振动与交互融合设计，打造细腻精致的一体化振动体验和差异化体验，提升用户交互效率和易用性、提升用户体验、增强品牌竞争力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本地马达: 设备内置的马达，常用的包括转子马达、线性马达等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态马达: 设备外置的多个马达支持独立控制，且可以根据设备的连接、马达的状态等信息进行灵活的管理。动态马达广泛应用于外接设备，包括手柄、遥控器、外接振动器等, 为了管理这些动态接入的设备，应使用 vibrator.on('vibratorStateChange', callback) 来监听设备上下线事件。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor",
      children: "Sensor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "要使用传感器的功能，设备必须具有对应的传感器器件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对某些传感器，开发者需要请求相应的权限，才能获取到相应传感器的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传感器数据订阅和取消订阅接口成对调用，当不再需要订阅传感器数据时，开发者需要调用取消订阅接口停止数据上报。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态传感器断开后应用需要主动解除订阅操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vibrator",
      children: "Vibrator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "要使用振动的功能，设备必须具有对应的器件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对马达，开发者需要请求相应的权限才能使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个振动器的控制：当存在多个可控振动设备时，应用需要通过 getVibratorInfoSync() 查询可用的马达列表，并在调用 startVibration 或 stopVibration 时，传入 deviceId 和 vibratorId 等参数来精确控制目标马达。"
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