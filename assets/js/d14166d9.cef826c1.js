"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["782575"], {
238319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_petalmaps_map_petalmaps_md_d14_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-petalmaps-map-petalmaps-md-d14.json
var site_docs_map_kit_guide_map_petalmaps_map_petalmaps_md_d14_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-petalmaps/map-petalmaps","title":"通过地图应用实现导航等能力","description":"场景介绍","source":"@site/docs/map-kit-guide/map-petalmaps/map-petalmaps.md","sourceDirName":"map-kit-guide/map-petalmaps","slug":"/map-kit-guide/map-petalmaps/","permalink":"/harmonyos-docs-site/map-kit-guide/map-petalmaps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"通过地图应用实现导航等能力","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-petalmaps","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"区划选择","permalink":"/harmonyos-docs-site/map-kit-guide/map-advanced-controls/map-location-division/"},"next":{"title":"坐标纠偏","permalink":"/harmonyos-docs-site/map-kit-guide/map-calculation-tool/map-convert-coordinate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-petalmaps/map-petalmaps.md


const frontMatter = {
	title: '通过地图应用实现导航等能力',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-petalmaps',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过地图应用实现导航等能力';

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
  "value": "地图应用使用的坐标类型",
  "id": "地图应用使用的坐标类型",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "打开地图应用首页",
  "id": "打开地图应用首页",
  "level": 3
}, {
  "value": "打开地图应用进行地点搜索",
  "id": "打开地图应用进行地点搜索",
  "level": 3
}, {
  "value": "打开地图应用查看地点详情",
  "id": "打开地图应用查看地点详情",
  "level": 3
}, {
  "value": "打开地图应用规划路线",
  "id": "打开地图应用规划路线",
  "level": 3
}, {
  "value": "打开地图应用进行导航",
  "id": "打开地图应用进行导航",
  "level": 3
}, {
  "value": "打开地图应用打车页面",
  "id": "打开地图应用打车页面",
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
    img: "img",
    li: "li",
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
        id: "通过地图应用实现导航等能力",
        children: "通过地图应用实现导航等能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3(15)开始，支持地图应用首页、搜索地点、查看地点详情、规划路线和进行导航功能；从6.0.1(21)开始，支持地图应用发起打车功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何打开地图应用实现如下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用首页"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用搜索地点"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用查看地点详情"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用规划路线"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用进行导航"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开地图应用发起打车"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用地图应用的功能主要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps",
        children: "petalMaps"
      }), "命名空间下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaphomepage",
        children: "openMapHomePage"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptextsearch",
        children: "openMapTextSearch"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmappoidetail",
        children: "openMapPoiDetail"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaprouteplan",
        children: "openMapRoutePlan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmapnavi",
        children: "openMapNavi"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptaxi",
        children: "openMapTaxi"
      }), "等接口实现，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#textsearchparams",
              children: "TextSearchParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本搜索的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#poidetailparams",
              children: "PoiDetailParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POI详情的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#routeplanparams",
              children: "RoutePlanParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路线规划的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#naviparams",
              children: "NaviParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#taxiparams",
              children: "TaxiParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打车的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaphomepage",
              children: "openMapHomePage"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用首页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptextsearch",
              children: "openMapTextSearch"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", textSearchParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#textsearchparams",
              children: "TextSearchParams"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用搜索地点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmappoidetail",
              children: "openMapPoiDetail"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", poiDetailParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#poidetailparams",
              children: "PoiDetailParams"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用查看地点详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaprouteplan",
              children: "openMapRoutePlan"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", routePlanParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#routeplanparams",
              children: "RoutePlanParams"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用规划路线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmapnavi",
              children: "openMapNavi"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", naviParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#naviparams",
              children: "NaviParams"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用进行导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptaxi",
              children: "openMapTaxi"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", taxiParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#taxiparams",
              children: "TaxiParams"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开地图应用打车页面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "地图应用使用的坐标类型",
      children: "地图应用使用的坐标类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在国内站点，中国大陆使用GCJ02坐标系，中国台湾使用WGS84坐标系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在海外站点，统一使用WGS84坐标系。坐标系转换参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-calculation-tool/map-convert-coordinate",
        children: "坐标纠偏"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { petalMaps } from '@kit.MapKit'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用首页",
      children: "打开地图应用首页"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaphomepage",
        children: "openMapHomePage"
      }), "，打开地图应用首页。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  await petalMaps.openMapHomePage(this.getUIContext().getHostContext());\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 打开地图应用首页"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675905)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用进行地点搜索",
      children: "打开地图应用进行地点搜索"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptextsearch",
        children: "openMapTextSearch"
      }), "，传入搜索目标名称，打开地图应用进行地点搜索。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let params: petalMaps.TextSearchParams = {\n    destinationName: '云谷'\n  };\n  await petalMaps.openMapTextSearch(this.getUIContext().getHostContext(), params);\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 打开地图应用进行地点搜索"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(929587)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用查看地点详情",
      children: "打开地图应用查看地点详情"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmappoidetail",
        children: "openMapPoiDetail"
      }), "，传入地点的经纬度，打开地图应用查看地点详情。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let params: petalMaps.PoiDetailParams = {\n    destinationPosition: {\n      latitude: 32.02065982629459,\n      longitude: 118.788899213002\n    },\n    destinationPoiId: '563233191438217472'\n  };\n  await petalMaps.openMapPoiDetail(this.getUIContext().getHostContext(), params);\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 打开地图应用查看地点详情"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545952)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用规划路线",
      children: "打开地图应用规划路线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaprouteplan",
        children: "openMapRoutePlan"
      }), "，传入终点经纬度，打开地图应用规划路线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let params: petalMaps.RoutePlanParams = {\n    destinationPosition: {\n      latitude: 31.983015468224288,\n      longitude: 118.78058590757131\n    }\n  };\n  await petalMaps.openMapRoutePlan(this.getUIContext().getHostContext(), params);\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 打开地图应用规划路线"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710912)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用进行导航",
      children: "打开地图应用进行导航"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmapnavi",
        children: "openMapNavi"
      }), "，传入终点经纬度，打开地图应用发起导航。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let params: petalMaps.NaviParams = {\n    destinationPosition: {\n      latitude: 31.983015468224288,\n      longitude: 118.78058590757131\n    }\n  };\n  await petalMaps.openMapNavi(this.getUIContext().getHostContext(), params);\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 打开地图应用进行导航"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392241)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开地图应用打车页面",
      children: "打开地图应用打车页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-petal-maps/map-petal-maps#openmaptaxi",
        children: "openMapTaxi"
      }), "，传入终点经纬度，打开地图应用发起打车。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let params: petalMaps.TaxiParams = {\n    destinationPosition: {\n      latitude: 31.983015468224288,\n      longitude: 118.78058590757131\n    }\n  };\n  await petalMaps.openMapTaxi(this.getUIContext().getHostContext(), params);\n} catch (e) {\n  console.error(`code:${e.code}, message:${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 打开地图应用进行打车"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459750)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
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
545952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959052-0a16fc427cc6f44bce7fb271ec166811.jpg");

},
675905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799402-ccccdaa599e524e2dfcc6f912646ced1.jpg");

},
929587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439097-2e2bbc9bdfb78f67be5ed90157be2956.jpg");

},
392241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799404-95b10d8770264848efc0f9ddeaab9fbc.jpg");

},
459750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439099-0e11866ff03b0e5e8ceda9c53ade032d.jpg");

},
710912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479053-efa3492d00555047290b74b70797d754.jpg");

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