"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["539393"], {
594297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_navi_hop_car_navi_hop_md_5b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-implement-navi-hop-car-navi-hop-car-navi-hop-md-5b2.json
var site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_navi_hop_car_navi_hop_md_5b2_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/car-navi-hop","title":"导航流转至车机","description":"场景介绍","source":"@site/docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/car-navi-hop.md","sourceDirName":"system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop","slug":"/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"导航流转至车机","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-navi-hop","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-preparations/"},"next":{"title":"地址流转至车机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/car-navi-hop.md


const frontMatter = {
	title: '导航流转至车机',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-navi-hop',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '导航流转至车机';

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
  "value": "SmartMobilityEvent事件名说明",
  "id": "smartmobilityevent事件名说明",
  "level": 3
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
    h3: "h3",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "导航流转至车机",
        children: "导航流转至车机"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航流转至车机包含如下几个常见使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "碰一碰导航流转：用户在手机地图的指定页面中（地图选点页面、规划路线页面、驾车导航页面），与车机中控屏指定区域碰一碰后，将手机上的导航数据流转至车机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(485506)/* ["default"] */.A) + "",
            width: "775",
            height: "204"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上车导航自动流转：用户使用手机地图应用发起驾车导航后上车，手机上的导航数据会自动流转至车机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(801995)/* ["default"] */.A) + "",
            width: "777",
            height: "172"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "车内导航自动流转：用户在车内，使用手机地图应用发起驾车导航，手机上的导航数据会自动流转至车机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(124045)/* ["default"] */.A) + "",
            width: "775",
            height: "174"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航流转至车机使用接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-hardware-api/car-api/car-api-references/car-smartmobilitycommon/car-smartmobilitycommon#onsmartmobilityevent",
              children: "on('smartMobilityEvent')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册智慧出行业务的事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-navigationinfomgr/car-navigationinfomgr#updatenavigationstatus",
              children: "updateNavigationStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置导航状态，包含地图状态、导航类型、导航目的地、导航途经点、路线和主题等。"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-smartmobilitycommon/car-smartmobilitycommon#offsmartmobilityevent",
              children: "off('smartMobilityEvent')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册智慧出行业务的事件监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smartmobilityevent事件名说明",
      children: "SmartMobilityEvent事件名说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartMobilityEvent事件名（eventName）取值如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "事件名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hopSucceeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流转成功事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782942)/* ["default"] */.A) + "",
        width: "747",
        height: "659"
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
          }), "进行配置。导航流转至车机场景下，metadata的name取值为carHopCapability。对应的value值根据不同的使用场景取值如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["碰一碰导航流转场景下，value取值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "carHopNavi"
              })
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["上车导航自动流转场景下，value取值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "getOnCarNavi"
              })
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["车内导航自动流转场景下，value取值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "insideCarNavi"
              })
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { navigationInfoMgr, smartMobilityCommon } from '@kit.CarKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听系统导航信息和指令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从5.1.0(18)开始，新增searchPOI指令，用于搜索POI信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在打开地图应用时，地图应用需要注册监听系统导航信息和指令，方便地图接收系统指令（如：停止导航）用于对应的业务逻辑处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 实现SystemNavigationListener接口\nclass Listener implements navigationInfoMgr.SystemNavigationListener {\n  // 实现onQueryNavigationInfo方法\n  onQueryNavigationInfo(query: navigationInfoMgr.QueryType, args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {\n    // 返回导航信息给系统\n    return new Promise(resolve => {\n      let ret: navigationInfoMgr.ResultData = {\n        code: 1001,\n        message: 'message test1',\n        data: args\n      }\n      resolve(ret);\n    })\n  }\n\n  // 实现onReceiveNavigationCmd方法\n  onReceiveNavigationCmd(command: navigationInfoMgr.CommandType, args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {\n    // 接收并处理系统导航指令\n    return new Promise(resolve => {\n      let ret: navigationInfoMgr.ResultData = {\n        code: 1002,\n        message: 'message test2',\n        data: args\n      }\n      resolve(ret);\n    })\n  }\n}\n\ntry {\n  // 获取NavigationController实例\n  let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();\n  // 注册监听系统导航信息和指令\n  navInfoController.registerSystemNavigationListener(new Listener());\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `register system navigation listener error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）监听智慧出行业务事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "地图应用在监听系统导航信息和指令的同时，还可以注册智慧出行业务的事件监听，方便地图应用接收智慧出行业务发送的事件通知（如：流转成功事件），用于对应的业务逻辑处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 智慧出行业务的事件回调函数\nconst callBack = (event: smartMobilityCommon.SmartMobilityEvent) => {\n  hilog.info(0x0000, 'testTag', 'Received smart mobility event: ', JSON.stringify(event));\n  if (event.eventName === 'hopSucceeded' && event.type === smartMobilityCommon.SmartMobilityType.CAR_HOP) {\n    // 地图应用处理流转成功事件（如退出导航等）\n    // ...\n  }\n};\n\ntry {\n  // 业务类型\n  let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.CAR_HOP];\n  // 获取SmartMobilityAwareness实例\n  let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();\n  // 注册智慧出行业务的事件监听\n  awareness.on('smartMobilityEvent', types, callBack);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `register smart mobility event listener error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置系统导航状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在地图上每次选择目的地、途经点或者变更导航信息时，地图应用都需要设置导航状态，将当前最新的导航状态保存到Car Kit中，系统会将最新的导航状态数据流转到车机上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置目的地\nlet location: navigationInfoMgr.Location = {\n  name: 'location',\n  coordType: navigationInfoMgr.LocationCoordType.GCJ02,\n  longitude: 0.000000000000001,\n  latitude: 1.000000000000001,\n  altitude: 2.000000000000001,\n};\n// 设置途经点（可选）\nlet passPoint0: navigationInfoMgr.Location = {\n  name: 'passPoint0',\n  coordType: navigationInfoMgr.LocationCoordType.GCJ02,\n  longitude: 29.53851890563965,\n  latitude: 16.50643920898438,\n  altitude: 3.00015949516846,\n};\nlet passPoint1: navigationInfoMgr.Location = {\n  name: 'passPoint1',\n  coordType: navigationInfoMgr.LocationCoordType.WGS84,\n  longitude: 4.4445874651238,\n  latitude: 5.55565329843751,\n  altitude: 6.66641578943265,\n};\n// 设置导航状态属性\nlet navigationStatus: navigationInfoMgr.NavigationStatus = {\n  status: navigationInfoMgr.MapStatus.NAVIGATION,\n  naviType: navigationInfoMgr.NaviType.DRIVING,\n  destLocation: location,\n  passPoint: [passPoint0, passPoint1],\n  routeIndex: 101,\n  customData: \"customData\",\n  routePreference: [\n    navigationInfoMgr.RoutePreference.TIME_FIRST,\n    navigationInfoMgr.RoutePreference.MAIN_ROAD_FIRST\n  ],\n  theme: navigationInfoMgr.ThemeType.LIGHT\n};\n\ntry {\n  // 获取 NavigationController\n  let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();\n  navInfoController.updateNavigationStatus(navigationStatus);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `update navigation status error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在地图应用退出时，需要取消之前注册的监听，减少系统不必要的资源消耗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消注册监听系统导航信息和指令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 获取NavigationController实例\n  let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();\n  // 取消注册监听系统导航信息和指令\n  navInfoController.unregisterSystemNavigationListener();\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `unregister system navigation listener error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消注册智慧出行业务的事件监听，可以选择下面2种方法中的一种："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法1"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "不传入callback（可选参数），会取消该type下的所有监听。"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 业务类型\n  let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.CAR_HOP];\n  // 获取SmartMobilityAwareness实例\n  let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();\n  // 解注册智慧出行业务的事件监听\n  awareness.off('smartMobilityEvent', types);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `unregister smart mobility event listener error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法2：传入callback（可选参数），会取消指定的监听。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 业务类型\n  let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.CAR_HOP];\n  // 获取SmartMobilityAwareness实例\n  let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();\n  // 解注册智慧出行业务的事件监听，callback为步骤4中定义的callback\n  awareness.off('smartMobilityEvent', types, callBack);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `unregister smart mobility event listener error, error code: ${e?.code}`);\n}\n"
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
485506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478467-2c64dc71d6b9a37c46eed3179f119a5d.png");

},
124045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438513-99f6b643f511905b6c228d2220d386ab.png");

},
801995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798818-07ad8449fcbee8391832e8efea2b608b.png");

},
782942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958468-c960ab6f4986b8585dc97d65c538bbd5.png");

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