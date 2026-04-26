"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["122292"], {
83732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_geofence_guidelines_index_geofence_guidelines_geofence_guidelines_md_e90_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-geofence-guidelines-index-geofence-guidelines-geofence-guidelines-md-e90.json
var site_docs_location_kit_geofence_guidelines_index_geofence_guidelines_geofence_guidelines_md_e90_namespaceObject = JSON.parse('{"id":"location-kit/geofence-guidelines-index/geofence-guidelines/geofence-guidelines","title":"端侧GNSS围栏开发指导","description":"目前端侧仅支持构建圆形围栏，并且依赖GNSS芯片的地理围栏功能，仅在室外开阔区域才能准确识别用户进出围栏事件。","source":"@site/docs/location-kit/geofence-guidelines-index/geofence-guidelines/geofence-guidelines.md","sourceDirName":"location-kit/geofence-guidelines-index/geofence-guidelines","slug":"/location-kit/geofence-guidelines-index/geofence-guidelines/","permalink":"/harmonyos-docs-site/location-kit/geofence-guidelines-index/geofence-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"端侧GNSS围栏开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geofence-guidelines","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地理围栏简介","permalink":"/harmonyos-docs-site/location-kit/geofence-guidelines-index/geofence-intro/"},"next":{"title":"云侧围栏开发指导","permalink":"/harmonyos-docs-site/location-kit/geofence-guidelines-index/fenceextensionability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/geofence-guidelines-index/geofence-guidelines/geofence-guidelines.md


const frontMatter = {
	title: '端侧GNSS围栏开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geofence-guidelines',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '端侧GNSS围栏开发指导';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
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
        id: "端侧gnss围栏开发指导",
        children: "端侧GNSS围栏开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前端侧仅支持构建圆形围栏，并且依赖GNSS芯片的地理围栏功能，仅在室外开阔区域才能准确识别用户进出围栏事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用场景举例：开发者可以使用地理围栏技术，在企业周围创建一个区域围栏，当用户进入这个区域，在移动设备上进行有针对性的提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["地理围栏所使用的接口如下，详细说明参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager",
        children: "Location Kit"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanageraddgnssgeofence12",
              children: "addGnssGeofence(fenceRequest: GnssGeofenceRequest): Promise<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个GNSS地理围栏，并订阅地理围栏事件。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagerremovegnssgeofence12",
              children: "removeGnssGeofence(geofenceId: number): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除一个GNSS地理围栏，并取消订阅该地理围栏事件。使用Promise异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用地理围栏功能，需要有权限ohos.permission.APPROXIMATELY_LOCATION，位置权限申请的方法和步骤见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/location-kit/location-preparation/location-permission-guidelines",
            children: "申请位置权限开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入geoLocationManager模块、wantAgent模块和BusinessError模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { geoLocationManager } from '@kit.LocationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { notificationManager } from '@kit.NotificationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建围栏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过WantAgentInfo的operationType设置动作类型\nlet geofence: geoLocationManager.Geofence = {\n    \"latitude\": 34.12, \"longitude\": 124.11, \"radius\": 10000.0, \"expiration\": 10000.0\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定APP需要监听的地理围栏事件类型，这里表示需要监听进入围栏和退出围栏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let transitionStatusList: Array<geoLocationManager.GeofenceTransitionEvent> = [\n    geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_ENTER,\n    geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_EXIT,\n];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建GEOFENCE_TRANSITION_EVENT_ENTER、GEOFENCE_TRANSITION_EVENT_EXIT事件对应的通知对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GEOFENCE_TRANSITION_EVENT_ENTER事件\nlet notificationRequest1: notificationManager.NotificationRequest = {\n    id: 1,\n    content: {\n      notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,\n      normal: {\n      title: \"围栏通知\",\n        text: \"围栏进入\",\n        additionalText: \"\"\n      }\n     }\n};\n// 创建GEOFENCE_TRANSITION_EVENT_EXIT事件对应的通知对象\nlet notificationRequest2: notificationManager.NotificationRequest = {\n  id: 2,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,\n    normal: {\n      title: '围栏通知',\n      text: '围栏退出',\n      additionalText: \"\"\n    }\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加围栏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 把创建的通知对象存入Array中，存入顺序与transitionStatusList一致\nlet notificationRequestList: Array<notificationManager.NotificationRequest> =\n  [notificationRequest1, notificationRequest2];\n// 构造GNSS地理围栏请求对象gnssGeofenceRequest\nlet gnssGeofenceRequest: geoLocationManager.GnssGeofenceRequest = {\n  // 围栏属性，包含圆心和半径等信息\n  geofence: geofence,\n  // 指定APP需要监听的地理围栏事件类型\n  monitorTransitionEvents: transitionStatusList,\n  // 地理围栏事件对应的通知对象，该参数为可选\n  notifications: notificationRequestList,\n  // 用于监听围栏事件的callback\n  geofenceTransitionCallback: (err : BusinessError, transition : geoLocationManager.GeofenceTransition) => {\n    if (err) {\n      console.error('geofenceTransitionCallback: err=' + JSON.stringify(err));\n    }\n    if (transition) {\n      console.info(\"GeofenceTransition: %{public}s\", JSON.stringify(transition));\n  }\n  }\n}\ntry {\n  // 添加围栏\n  geoLocationManager.addGnssGeofence(gnssGeofenceRequest).then((id) => {\n    // 围栏添加成功后返回围栏ID\n    console.info(\"addGnssGeofence success, fence id: \" + id);\n    let fenceId = id;\n  }).catch((err: BusinessError) => {\n    console.error(\"addGnssGeofence failed, promise errCode:\" + (err as BusinessError).code +\n      \",errMessage:\" + (err as BusinessError).message);\n  });\n} catch(error) {\n    console.error(\"addGnssGeofence failed, err:\" + JSON.stringify(error));\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除围栏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// fenceId是在geoLocationManager.addGnssGeofence执行成功后获取的\nlet fenceId = 1;\ntry {\n  geoLocationManager.removeGnssGeofence(fenceId).then(() => {\n    console.info(\"removeGnssGeofence success fenceId:\" + fenceId);\n  }).catch((error : BusinessError) => {\n    console.error(\"removeGnssGeofence: error=\" + JSON.stringify(error));\n  });\n} catch(error) {\n  console.error(\"removeGnssGeofence: error=\" + JSON.stringify(error));\n}\n"
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