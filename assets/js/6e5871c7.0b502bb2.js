"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["285914"], {
784896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_walk_navi_hop_car_walk_navi_hop_md_6e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-implement-navi-hop-car-walk-navi-hop-car-walk-navi-hop-md-6e5.json
var site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_walk_navi_hop_car_walk_navi_hop_md_6e5_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/car-walk-navi-hop","title":"下车步行导航流转","description":"支持将车机指定的地图应用的步行导航数据流转至手机。","source":"@site/docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/car-walk-navi-hop.md","sourceDirName":"system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop","slug":"/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"下车步行导航流转","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-walk-navi-hop","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地址流转至车机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/"},"next":{"title":"主动获取HiCar的连接状态","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-get-connect-status/car-check-application-start/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/car-walk-navi-hop.md


const frontMatter = {
	title: '下车步行导航流转',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-walk-navi-hop',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '下车步行导航流转';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "下车步行导航流转",
        children: "下车步行导航流转"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持将车机指定的地图应用的步行导航数据流转至手机。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下车步行导航流转：用户下车前，车机地图应用导航还未结束，下车后可将车机上的导航数据流转至手机，发起步行导航。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(730710)/* ["default"] */.A) + "",
        width: "789",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-navigationinfomgr/car-navigationinfomgr#registersystemnavigationlistener",
              children: "registerSystemNavigationListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册监听系统导航信息和指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-navigationinfomgr/car-navigationinfomgr#unregistersystemnavigationlistener",
              children: "unregisterSystemNavigationListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册监听系统导航信息和指令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962630)/* ["default"] */.A) + "",
        width: "767",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "能力配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/car-kit-guide/car-preparations#%E9%85%8D%E7%BD%AE%E8%83%BD%E5%8A%9B",
            children: "配置能力"
          }), "进行配置。下车步行导航流转场景下，metadata的name取值为carHopCapability，value取值应为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "getOffCarNavi"
            })
          }), "。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"metadata\": [\n  {\n    \"name\": \"carHopCapability\",\n    \"value\": \"getOffCarNavi\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { navigationInfoMgr } from '@kit.CarKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听系统导航信息和指令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "地图应用需要注册监听系统导航信息和指令，方便地图应用接收系统指令。用户下车后，系统会给地图应用发送START_NAVIGATION指令，地图应用在收到指令后即可开启步行导航任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 实现SystemNavigationListener接口\nclass Listener implements navigationInfoMgr.SystemNavigationListener {\n  // 实现onQueryNavigationInfo方法\n  onQueryNavigationInfo(query: navigationInfoMgr.QueryType, args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {\n    // 返回导航信息给系统\n    return new Promise(resolve => {\n      let ret: navigationInfoMgr.ResultData = {\n        code: 1001,\n        message: 'message test1',\n        data: args\n      }\n      resolve(ret);\n    })\n  }\n\n  // 实现onReceiveNavigationCmd方法\n  onReceiveNavigationCmd(command: navigationInfoMgr.CommandType, args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {\n    if (command == navigationInfoMgr.CommandType.START_NAVIGATION) {\n      // 地图应用处理下车后自动开启步行导航的逻辑\n      if (args !== undefined && args !== null) {\n        // 获取导航类型\n        let naviType: navigationInfoMgr.NaviType = args['naviType'] as navigationInfoMgr.NaviType;\n        // 如果是步行导航\n        if (naviType === navigationInfoMgr.NaviType.WALKING) {\n          let destPoi: string = args['destPoi'] as string;\n          // 获取目的地名\n          let destLocationName: string = args['destName'] as string;\n          // 获取目的地纬度\n          let destLatitude: string = destPoi?.split(',')[0].toString();\n          // 获取目的地经度\n          let destLongitude: string = destPoi?.split(',')[1].toString();\n          // 开发者根据destLocationName、destLatitude、destLongitude发起步行导航\n          // ...\n        }\n      }\n    }\n    return new Promise(resolve => {\n      let ret: navigationInfoMgr.ResultData = {\n        code: 1002,\n        message: 'message test2',\n        data: args\n      }\n      resolve(ret);\n    })\n  }\n}\n\ntry {\n  // 获取NavigationController实例\n  let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();\n  // 注册监听系统导航信息和指令\n  navInfoController.registerSystemNavigationListener(new Listener());\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `register system navigation listener, error code: ${e?.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在地图应用退出时，需要取消之前注册的监听，减少手机系统不必要的资源消耗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 获取NavigationController实例\n  let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();\n  // 取消注册监听系统导航信息和指令\n  navInfoController.unregisterSystemNavigationListener();\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `unregister system navigation listener error, error code: ${e?.code}`);\n}\n"
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
962630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438515-0541835531e76849490d2216bacfbcb0.png");

},
730710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798820-9051a4cdf4f4d7b52b01d64493f867dd.png");

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