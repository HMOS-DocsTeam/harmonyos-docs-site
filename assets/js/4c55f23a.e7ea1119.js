"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["620027"], {
32096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_location_guidelines_index_location_guidelines_location_guidelines_md_4c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-location-guidelines-index-location-guidelines-location-guidelines-md-4c5.json
var site_docs_location_kit_location_guidelines_index_location_guidelines_location_guidelines_md_4c5_namespaceObject = JSON.parse('{"id":"location-kit/location-guidelines-index/location-guidelines/location-guidelines","title":"获取设备的位置信息开发指导(ArkTS)","description":"场景概述","source":"@site/docs/location-kit/location-guidelines-index/location-guidelines/location-guidelines.md","sourceDirName":"location-kit/location-guidelines-index/location-guidelines","slug":"/location-kit/location-guidelines-index/location-guidelines/","permalink":"/harmonyos-docs-site/location-kit/location-guidelines-index/location-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"获取设备的位置信息开发指导(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-guidelines","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"申请开放能力权限指导","permalink":"/harmonyos-docs-site/location-kit/location-preparation/location-apply-open-capability/"},"next":{"title":"获取设备的位置信息开发指导(C/C++)","permalink":"/harmonyos-docs-site/location-kit/location-guidelines-index/location-guidelines-capi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/location-guidelines-index/location-guidelines/location-guidelines.md


const frontMatter = {
	title: '获取设备的位置信息开发指导(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-guidelines',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取设备的位置信息开发指导(ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景概述",
  "id": "场景概述",
  "level": 2
}, {
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取设备的位置信息开发指导arkts",
        children: "获取设备的位置信息开发指导(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景概述",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用HarmonyOS位置相关接口，获取设备实时位置，或者最近的历史位置，以及监听设备的位置变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于位置敏感的应用业务，建议获取设备实时位置信息。如果不需要设备实时位置信息，并且希望尽可能的节省耗电，开发者可以考虑获取最近的历史位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取设备的位置信息所使用的接口如下，详细说明参见Location Kit API参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager",
        children: "@ohos.geoLocationManager (位置服务)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块能力仅支持WGS-84坐标系。如需转换成其他坐标系，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-calculation-tool/map-convert-coordinate",
        children: "坐标转换工具"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanageronlocationchange",
              children: "geoLocationManager.on('locationChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启位置变化订阅，并发起定位请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagerofflocationchange",
              children: "geoLocationManager.off('locationChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭位置变化订阅，并删除对应的定位请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetcurrentlocation",
              children: "geoLocationManager.getCurrentLocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前位置，使用callback回调异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetcurrentlocation-2",
              children: "geoLocationManager.getCurrentLocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前位置，使用Promise方式异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetlastlocation",
              children: "geoLocationManager.getLastLocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最近一次定位结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagerislocationenabled",
              children: "geoLocationManager.isLocationEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断位置服务是否已经开启。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取设备的位置信息，需要有位置权限，位置权限申请的方法和步骤见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/location-kit/location-preparation/location-permission-guidelines",
            children: "申请位置权限开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入geoLocationManager模块，所有与基础定位能力相关的功能API，都是通过该模块提供的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { geoLocationManager } from '@kit.LocationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用获取位置接口之前需要先判断位置开关是否打开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询当前位置开关状态，返回结果为布尔值，true代表位置开关开启，false代表位置开关关闭，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { geoLocationManager } from '@kit.LocationKit';\ntry {\n    let locationEnabled = geoLocationManager.isLocationEnabled();\n} catch (err) {\n    console.error(\"errCode:\" + err.code + \", message:\"  + err.message);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果位置开关未开启，可以拉起全局开关设置弹框，引导用户打开位置开关，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestglobalswitch12",
            children: "requestGlobalSwitch"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单次获取当前设备位置。多用于查看当前位置、签到打卡、服务推荐等场景。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式一：获取系统缓存的最新位置。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果系统当前没有缓存位置会返回错误码。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "推荐优先使用该接口获取位置，可以减少系统功耗。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果对位置的新鲜度比较敏感，可以先获取缓存位置，将位置中的时间戳与当前时间对比，若新鲜度不满足预期可以使用方式二获取位置。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { geoLocationManager } from '@kit.LocationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\ntry {\n    let location = geoLocationManager.getLastLocation();\n} catch (err) {\n    console.error(\"errCode:\" + JSON.stringify(err));\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式二：获取当前位置。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["首先要实例化", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#singlelocationrequest12",
                children: "SingleLocationRequest"
              }), "对象，用于告知系统该向应用提供何种类型的位置服务，以及单次定位超时时间。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "设置LocatingPriority："
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果对位置的返回精度要求较高，建议LocatingPriority参数优先选择PRIORITY_ACCURACY，会将一段时间内精度较好的结果返回给应用。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果对定位速度要求较高，建议LocatingPriority参数选择PRIORITY_LOCATING_SPEED，会将最先拿到的定位结果返回给应用。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "两种定位策略均会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以获取到位置结果，对设备的硬件资源消耗较大，功耗也较大。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "设置locatingTimeoutMs："
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "因为设备环境、设备所处状态、系统功耗管控策略等的影响，定位返回的时延会有较大波动，建议把单次定位超时时间设置为10秒。"
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以快速定位策略(PRIORITY_LOCATING_SPEED)为例，调用方式如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { geoLocationManager } from '@kit.LocationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nlet request: geoLocationManager.SingleLocationRequest = {\n   'locatingPriority': geoLocationManager.LocatingPriority.PRIORITY_LOCATING_SPEED,\n   'locatingTimeoutMs': 10000\n}\ntry {\n   geoLocationManager.getCurrentLocation(request).then((result) => { // 调用getCurrentLocation获取当前设备位置，通过promise接收上报的位置\n      console.info('current location: ' + JSON.stringify(result));\n   })\n   .catch((error:BusinessError) => { // 接收上报的错误码\n      console.error('promise, getCurrentLocation: error=' + JSON.stringify(error));\n   });\n } catch (err) {\n   console.error(\"errCode:\" + JSON.stringify(err));\n }\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过本模块获取到的坐标均为WGS-84坐标系坐标点，如需使用其它坐标系类型的坐标点，请进行坐标系转换后再使用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可参考Map Kit提供的地图计算工具进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-calculation-tool/map-convert-coordinate",
            children: "坐标转换"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "持续定位。多用于导航、运动轨迹、出行等场景。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先要实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#continuouslocationrequest12",
            children: "ContinuousLocationRequest"
          }), "对象，用于告知系统该向应用提供何种类型的位置服务，以及位置结果上报的频率。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置locationScenario："
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["建议locationScenario参数优先根据应用的使用场景进行设置，该参数枚举值定义参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#useractivityscenario12",
                children: "UserActivityScenario"
              }), "，例如地图在导航时使用NAVIGATION参数，可以持续在室内和室外场景获取位置用于导航。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置interval："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "表示上报位置信息的时间间隔，单位是秒，默认值为1秒。如果对位置上报时间间隔无特殊要求，可以不填写该字段。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以地图导航场景为例，调用方式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { geoLocationManager } from '@kit.LocationKit';\nlet request: geoLocationManager.ContinuousLocationRequest= {\n   'interval': 1,\n   'locationScenario': geoLocationManager.UserActivityScenario.NAVIGATION\n}\nlet locationCallback = (location:geoLocationManager.Location):void => {\n   console.info('locationCallback: data: ' + JSON.stringify(location));\n};\ntry {\n   geoLocationManager.on('locationChange', request, locationCallback);\n} catch (err) {\n   console.error(\"errCode:\" + JSON.stringify(err));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果不主动结束定位可能导致设备功耗高，耗电快；建议在不需要获取定位信息时及时结束定位。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 该回调函数需要与on接口传入的回调函数保持一致。\ngeoLocationManager.off('locationChange', locationCallback);\n"
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