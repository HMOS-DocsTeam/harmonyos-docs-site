"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["889432"], {
33992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_navi_map_navi_routes_map_navi_routes_md_bf5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-navi-map-navi-routes-map-navi-routes-md-bf5.json
var site_docs_map_kit_guide_map_navi_map_navi_routes_map_navi_routes_md_bf5_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-navi/map-navi-routes/map-navi-routes","title":"出行路线规划","description":"场景介绍","source":"@site/docs/map-kit-guide/map-navi/map-navi-routes/map-navi-routes.md","sourceDirName":"map-kit-guide/map-navi/map-navi-routes","slug":"/map-kit-guide/map-navi/map-navi-routes/","permalink":"/harmonyos-docs-site/map-kit-guide/map-navi/map-navi-routes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"出行路线规划","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-navi-routes","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地理编码","permalink":"/harmonyos-docs-site/map-kit-guide/map-location-services/map-site-geocode/"},"next":{"title":"批量算路","permalink":"/harmonyos-docs-site/map-kit-guide/map-navi/map-navi-matrix/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-navi/map-navi-routes/map-navi-routes.md


const frontMatter = {
	title: '出行路线规划',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-navi-routes',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '出行路线规划';

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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "驾车路径规划",
  "id": "驾车路径规划",
  "level": 3
}, {
  "value": "步行路径规划",
  "id": "步行路径规划",
  "level": 3
}, {
  "value": "骑行路径规划",
  "id": "骑行路径规划",
  "level": 3
}, {
  "value": "公共交通规划",
  "id": "公共交通规划",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
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
        id: "出行路线规划",
        children: "出行路线规划"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.1(19)开始，支持公共交通规划功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供两点之间驾车、步行、骑行和公共交通的路径规划能力。其中驾车路径规划支持添加途经点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是路径规划功能相关接口，主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api",
        children: "navi"
      }), "命名空间下的方法提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getdrivingroutes",
              children: "getDrivingRoutes"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#drivingrouteparams",
              children: "DrivingRouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "驾车路径规划。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getdrivingroutes-1",
              children: "getDrivingRoutes"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#drivingrouteparams",
              children: "DrivingRouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "驾车路径规划。支持传入Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getwalkingroutes",
              children: "getWalkingRoutes"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeparams",
              children: "RouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "步行路径规划。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getwalkingroutes-1",
              children: "getWalkingRoutes"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeparams",
              children: "RouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "步行路径规划。支持传入Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getcyclingroutes",
              children: "getCyclingRoutes"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeparams",
              children: "RouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑行路径规划。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#getcyclingroutes-1",
              children: "getCyclingRoutes"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeparams",
              children: "RouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑行路径规划。支持传入Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#gettransitroutes",
              children: "getTransitRoutes"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#transitrouteparams",
              children: "TransitRouteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#transitrouteresult",
              children: "TransitRouteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公共交通规划。支持传入Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#drivingrouteparams",
              children: "DrivingRouteParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "驾车路径规划的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeparams",
              children: "RouteParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "步行、骑行路径规划的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#transitrouteparams",
              children: "TransitRouteParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公共交通规划的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#routeresult",
              children: "RouteResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径规划的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-navi-api/map-navi-api#transitrouteresult",
              children: "TransitRouteResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公共交通规划的结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { navi } from '@kit.MapKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "驾车路径规划",
      children: "驾车路径规划"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据起终点坐标检索符合条件的驾车路径规划方案。支持以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持一次请求返回多条路线，最多支持3条路线。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最多支持5个途经点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持未来出行规划。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持根据实时路况进行合理路线规划。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持多种路线偏好选择，如时间最短、避免经过收费的公路、避开高速公路、距离优先等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async testDrivingRoutes() {\n  let params: navi.DrivingRouteParams = {\n    // 起点的经纬度\n    origins: [{\n      latitude: 31.982129213545843,\n      longitude: 120.27745557768591\n    }],\n    // 终点的经纬度\n    destination: {\n      latitude: 31.986129213545843,\n      longitude: 120.32745557768591\n    },\n    // 路径的途经点\n    waypoints: [{\n      latitude: 31.967236140819114,\n      longitude: 120.27142088866847\n    }, {\n      latitude: 31.972868002238872,\n      longitude: 120.2943211817165\n    }, {\n      latitude: 31.98469327973332,\n      longitude: 120.29101107384068\n    }],\n    language: 'zh_CN'\n  };\n  try {\n    const result = await navi.getDrivingRoutes(params);\n    console.info(`Succeeded in getting driving routes. result is ${JSON.stringify(result)}`);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed in getting driving routes. Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步行路径规划",
      children: "步行路径规划"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据起终点坐标检索符合条件的步行路径规划方案。支持以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持直线距离150km以内的步行路径规划能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "融入出行策略（时间最短、避免轮渡）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async testWalkingRoutes() {\n  let params: navi.RouteParams = {\n    // 起点的经纬度\n    origins: [{\n      latitude: 39.992281,\n      longitude: 116.31088\n    }, {\n      latitude: 39.996,\n      longitude: 116.311\n    }],\n    // 终点的经纬度\n    destination: {\n      latitude: 39.94,\n      longitude: 116.311\n    },\n    language: 'zh_CN'\n  };\n  try {\n    const result = await navi.getWalkingRoutes(params);\n    console.info(`Succeeded in getting walking routes. result is ${JSON.stringify(result)}`);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed in getting walking routes. Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "骑行路径规划",
      children: "骑行路径规划"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据起终点坐标检索符合条件的骑行路径规划方案。支持以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持直线距离500km以内的骑行路径规划能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "融入出行策略（时间最短、避免轮渡）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async testCyclingRoutes() {\n  let params: navi.RouteParams = {\n    // 起点的经纬度\n    origins: [{\n      latitude: 31.9844102,\n      longitude: 118.7662537\n    }],\n    // 终点的经纬度\n    destination: {\n      latitude: 31.9874102,\n      longitude: 118.7362537\n    },\n    language: 'zh_CN'\n  };\n  try {\n    const result = await navi.getCyclingRoutes(params);\n    console.info(`Succeeded in getting cycling routes. result is ${JSON.stringify(result)}`);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed in getting cycling routes. Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公共交通规划",
      children: "公共交通规划"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据起点终点坐标规划道路，从而返回两地之间的多种公共交通中转路线，仅支持中国大陆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async testGetTransitRoutes() {\n  let params: navi.TransitRouteParams = {\n    // 起点经纬度\n    origin: {\n      latitude: 39.921619,\n      longitude: 116.356587\n    },\n    // 终点经纬度\n    destination: {\n      latitude: 39.94161,\n      longitude: 116.353621\n    },\n    // 设置出发时间为当前时间（单位s）\n    departureTime: new Date().getTime() / 1000\n  };\n  try {\n    const result = await navi.getTransitRoutes(this.getUIContext().getHostContext(), params);\n    console.info(`Succeeded in getting transit routes. result is ${JSON.stringify(result)}`);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed in getting transit routes. Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
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