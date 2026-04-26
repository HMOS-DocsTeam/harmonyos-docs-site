"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["635552"], {
92092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_sensor_web_sensor_md_426_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-sensor-web-sensor-md-426.json
var site_docs_arkweb_web_set_attributes_events_web_sensor_web_sensor_md_426_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-sensor/web-sensor","title":"使用运动和方向传感器监测设备状态","description":"概述","source":"@site/docs/arkweb/web-set-attributes-events/web-sensor/web-sensor.md","sourceDirName":"arkweb/web-set-attributes-events/web-sensor","slug":"/arkweb/web-set-attributes-events/web-sensor/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-sensor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用运动和方向传感器监测设备状态","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-sensor","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用隐私模式","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-incognito-mode/"},"next":{"title":"Web组件渲染模式","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-render-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-sensor/web-sensor.md


const frontMatter = {
	title: '使用运动和方向传感器监测设备状态',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-sensor',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用运动和方向传感器监测设备状态';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "需要权限",
  "id": "需要权限",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用运动和方向传感器监测设备状态",
        children: "使用运动和方向传感器监测设备状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运动和方向传感器，如加速度计、陀螺仪等，能够监测设备的运动状态和方向变化，例如设备的旋转、倾斜等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过W3C标准协议接口，Web组件能够访问这些传感器的数据，进而实现更加丰富的用户交互功能。例如，开发者在网页应用中可以利用加速度计识别运动模式，指导用户进行健身运动，利用陀螺仪捕获玩家手中设备的倾斜和旋转动作，实现无按钮操控的游戏体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在JavaScript中调用以下支持的W3C标准协议接口，可以访问运动和方向传感器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerometer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加速度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可获取设备X、Y、Z轴方向的加速度数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gyroscope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "陀螺仪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可获取设备X、Y、Z轴方向的角速度数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AbsoluteOrientationSensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对定向"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可获取表示设备绝对定位方向的四元数，包含X、Y、Z和W分量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RelativeOrientationSensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对定向"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可获取表示设备相对定位方向的四元数，包含X、Y、Z和W分量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceMotionEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备运动事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过监听该事件，可获取设备在X、Y、Z轴方向上的加速度数据，设备在X、Y、Z轴方向上包含重力的加速度数据，以及设备在alpha、beta、gamma轴方向上旋转的速率数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceOrientationEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备方向事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过监听该事件，可获取设备绕X、Y、Z轴的角度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用加速度、陀螺仪及设备运动事件接口时，需在配置文件module.json5中声明相应的传感器权限。具体配置方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    \"requestPermissions\":[\n      {\n        \"name\" : \"ohos.permission.ACCELEROMETER\" // 加速度权限\n      },\n      {\n        \"name\" : \"ohos.permission.GYROSCOPE\"     // 陀螺仪权限\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件在对接运动和方向传感器时，需配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpermissionrequest9",
        children: "onPermissionRequest"
      }), "接口，通过该接口接收权限请求通知。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用侧代码中，Web组件配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpermissionrequest9",
            children: "onPermissionRequest"
          }), "接口，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-permissionrequest/arkts-basic-components-web-permissionrequest",
            children: "PermissionRequest"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-permissionrequest/arkts-basic-components-web-permissionrequest#getaccessibleresource9",
            children: "getAccessibleResource"
          }), "接口获取请求权限的资源类型，当资源类型为TYPE_SENSOR时，进行传感器授权处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIContext } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\nimport { abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear() {\n    // 配置Web开启调试模式\n    webview.WebviewController.setWebDebuggingAccess(true);\n    // 访问控制管理, 获取访问控制模块对象。\n    let atManager = abilityAccessCtrl.createAtManager();\n    try {\n      atManager.requestPermissionsFromUser(this.uiContext.getHostContext(), ['ohos.permission.ACCELEROMETER', 'ohos.permission.GYROSCOPE']\n        , (err: BusinessError, data: PermissionRequestResult) => {\n        if (err) {\n          console.error(`requestPermissionsFromUser fail, err->${JSON.stringify(err)}`);\n        } else {\n          console.info('data permissions:' + data.permissions);\n          console.info('data authResults:' + data.authResults);\n        }\n      })\n    } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPermissionRequest((event) => {\n          if (event) {\n             this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.request.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.request.grant(event.request.getAccessibleResource());\n                }\n              },\n              autoCancel: false,\n              cancel: () => {\n                event.request.deny();\n              }\n            })\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在前端页面代码中，利用JavaScript调用传感器相关的W3C标准协议接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE HTML>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n    <meta name=\"msapplication-tap-highlight\" content=\"no\" />\n    <meta name=\"HandheldFriendly\" content=\"true\" />\n    <meta name=\"MobileOptimized\" content=\"320\" />\n    <title>运动和方向传感器</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n        }\n    </style>\n    <script type=\"text/javascript\">\n        // 访问设备的加速度计传感器，并获取其数据。\n        function getAccelerometer() {\n            var acc = new Accelerometer({frequency: 60});\n            acc.addEventListener('activate', () => console.info('Ready to measure.'));\n            acc.addEventListener('error', error => console.info('Error type: ' + error.type + ', error: ' + error.error ));\n            acc.addEventListener('reading', () => {\n                console.info(`Accelerometer ${acc.timestamp}, ${acc.x}, ${acc.y}, ${acc.z}.`);\n            });\n            acc.start();\n        }\n\n        // 访问设备的陀螺仪传感器，并获取其数据。\n        function getGyroscope() {\n            var gyr = new Gyroscope({frequency: 60});\n            gyr.addEventListener('activate', () => console.info('Ready to measure.'));\n            gyr.addEventListener('error', error => console.info('Error type: ' + error.type + ', error: ' + error.error ));\n            gyr.addEventListener('reading', () => {\n                console.info(`Gyroscope ${gyr.timestamp}, ${gyr.x}, ${gyr.y}, ${gyr.z}.`);\n            });\n            gyr.start();\n        }\n\n        // 访问设备的方向传感器，并获取其数据。\n        function getAbsoluteOrientationSensor() {\n            var aos = new AbsoluteOrientationSensor({frequency: 60});\n            aos.addEventListener('activate', () => console.info('Ready to measure.'));\n            aos.addEventListener('error', error => console.info('Error type: ' + error.type + ', error: ' + error.error ));\n            aos.addEventListener('reading', () => {\n                console.info(`AbsoluteOrientationSensor data: ${aos.timestamp}, ${aos.quaternion}`);\n            });\n            aos.start();\n        }\n\n        // 监听设备的运动事件，并执行相应的处理逻辑。\n        function listenDeviceMotionEvent() {\n            removeDeviceMotionEvent();\n            if ('DeviceMotionEvent' in window) {\n                window.addEventListener('devicemotion', handleMotionEvent, false);\n            } else {\n              console.info('不支持DeviceMotionEvent');\n            }\n        }\n\n        // 移除之前添加的设备运动事件监听器。\n        function removeDeviceMotionEvent() {\n            if ('DeviceMotionEvent' in window) {\n              window.removeEventListener('devicemotion', handleMotionEvent, false);\n            } else {\n              console.info('不支持DeviceMotionEvent');\n            }\n        }\n\n        // 处理运动事件。\n        function handleMotionEvent(event) {\n            const x = event.accelerationIncludingGravity.x;\n            const y = event.accelerationIncludingGravity.y;\n            const z = event.accelerationIncludingGravity.z;\n            console.info(`DeviceMotionEvent data: ${event.timeStamp}, ${x}, ${y}, ${z}`);\n        }\n\n        // 监听设备方向的变化，并执行相应的处理逻辑。\n        function listenDeviceOrientationEvent() {\n            removeDeviceOrientationEvent();\n            if ('DeviceOrientationEvent' in window) {\n                window.addEventListener('deviceorientation', handleOrientationEvent, false);\n            } else {\n                console.info('不支持DeviceOrientationEvent');\n            }\n        }\n\n        // 移除之前添加的设备方向事件监听器。\n        function removeDeviceOrientationEvent() {\n            if ('DeviceOrientationEvent' in window) {\n              window.removeEventListener('deviceorientation', handleOrientationEvent, false);\n            } else {\n              console.info('不支持DeviceOrientationEvent');\n            }\n        }\n\n        // 监听设备方向的变化，并执行相应的处理逻辑。\n        function listenDeviceOrientationEvent2() {\n            removeDeviceOrientationEvent2();\n            if ('DeviceOrientationEvent' in window) {\n                window.addEventListener('deviceorientationabsolute', handleOrientationEvent, false);\n            } else {\n                console.info('不支持DeviceOrientationEvent');\n            }\n        }\n\n        // 移除之前添加的设备方向事件监听器。\n        function removeDeviceOrientationEvent2() {\n            if ('DeviceOrientationEvent' in window) {\n              window.removeEventListener('deviceorientationabsolute', handleOrientationEvent, false);\n            } else {\n              console.info('不支持DeviceOrientationEvent');\n            }\n        }\n\n        // 处理方向事件。\n        function handleOrientationEvent(event) {\n            console.info(`DeviceOrientationEvent data: ${event.timeStamp}, ${event.absolute}, ${event.alpha}, ${event.beta}, ${event.gamma}`);\n        }\n    </script>\n</head>\n<body>\n<div id=\"dcontent\" class=\"dcontent\">\n    <h3>运动和方向:</h3>\n    <ul class=\"dlist\">\n        <li><button type=\"button\" onclick=\"getAccelerometer()\">加速度</button></li>\n        <li><button type=\"button\" onclick=\"getGyroscope()\">陀螺仪</button></li>\n        <li><button type=\"button\" onclick=\"getAbsoluteOrientationSensor()\">设备方向(绝对定位)</button></li>\n        <li><button type=\"button\" onclick=\"listenDeviceMotionEvent()\">设备运动事件</button></li>\n        <li><button type=\"button\" onclick=\"listenDeviceOrientationEvent()\">设备方向事件</button></li>\n        <li><button type=\"button\" onclick=\"listenDeviceOrientationEvent2()\">设备方向事件(绝对定位)</button></li>\n    </ul>\n</div>\n</body>\n</html>\n"
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