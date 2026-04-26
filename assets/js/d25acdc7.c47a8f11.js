"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["775945"], {
238754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_map_api_map_arkts_map_appendix_api_map_poi_map_poi_md_d25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-map-api-map-arkts-map-appendix-api-map-poi-map-poi-md-d25.json
var site_docs_ref_map_api_map_arkts_map_appendix_api_map_poi_map_poi_md_d25_namespaceObject = JSON.parse('{"id":"map-api/map-arkts/map-appendix-api/map-poi/map-poi","title":"POI类型值","description":"HwLocationType","source":"@site/docs-ref/map-api/map-arkts/map-appendix-api/map-poi/map-poi.md","sourceDirName":"map-api/map-arkts/map-appendix-api/map-poi","slug":"/map-api/map-arkts/map-appendix-api/map-poi/map-poi","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-appendix-api/map-poi/map-poi","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"POI类型值","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-poi","kit":"应用服务","last_updated":"2026-04-22","slug":"map-poi"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/errorcode-map/errorcode-map"},"next":{"title":"城市码及区划代码表","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-appendix-api/map-citycode/map-citycode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/map-api/map-arkts/map-appendix-api/map-poi/map-poi.md


const frontMatter = {
	title: 'POI类型值',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-poi',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'map-poi'
};
const contentTitle = 'POI类型值';

const assets = {

};



const toc = [{
  "value": "HwLocationType",
  "id": "hwlocationtype",
  "level": 2
}, {
  "value": "EATING_DRINKING",
  "id": "eating_drinking",
  "level": 3
}, {
  "value": "SHOPPING",
  "id": "shopping",
  "level": 3
}, {
  "value": "LEISURE",
  "id": "leisure",
  "level": 3
}, {
  "value": "SPORT_FITNESS",
  "id": "sport_fitness",
  "level": 3
}, {
  "value": "TOURISM",
  "id": "tourism",
  "level": 3
}, {
  "value": "HEALTH_CARE",
  "id": "health_care",
  "level": 3
}, {
  "value": "ACCOMMODATION",
  "id": "accommodation",
  "level": 3
}, {
  "value": "TRANSPORT",
  "id": "transport",
  "level": 3
}, {
  "value": "GOVERNMENT_PUBLIC_SERVICE",
  "id": "government_public_service",
  "level": 3
}, {
  "value": "BUSINESS",
  "id": "business",
  "level": 3
}, {
  "value": "AUTOMOTIVE",
  "id": "automotive",
  "level": 3
}, {
  "value": "MISCELLANEOUS",
  "id": "miscellaneous",
  "level": 3
}, {
  "value": "CITY_WALK",
  "id": "city_walk",
  "level": 3
}, {
  "value": "OTHERS",
  "id": "others",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "poi类型值",
        children: "POI类型值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hwlocationtype",
      children: "HwLocationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为地点类型的枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Map.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eating_drinking",
      children: "EATING_DRINKING"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CALIFORNIAN_RESTAURANT  加州餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREOLE_CAJUN_RESTAURANT  克里奥-卡津餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUL_FOOD_RESTAURANT  美国黑人料理店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTHWESTERN  美国西南菜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTHERN  美国南方菜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFRICAN_RESTAURANT  非洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVE_AMERICAN  印第安风味餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUSTRIAN_RESTAURANT  奥地利式餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BARBECUE_RESTAURANT  烧烤店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BELGIAN_RESTAURANT  比利时餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BISTRO  小酒馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRITISH_RESTAURANT  英式餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SINGAPOREAN_RESTAURANT  新加坡餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANADIAN_RESTAURANT  加拿大餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARIBBEAN_RESTAURANT  加勒比餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUNAN_RESTAURANT  湘菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHANDONG_RESTAURANT  鲁菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANTONESE_RESTAURANT  粤菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHANGHAI_RESTAURANT  本帮菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SZECHUAN_RESTAURANT  川菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTHEASTERN_RESTAURANT  东北菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAIWANESE_RESTAURANT  台湾餐馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIBETAN_RESTAURANT  蔵菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEIJING_RESTAURANT  北京菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUBEI_RESTAURANT  湖北菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JIANGSU_ZHEJIANG_RESTAURANT  江浙菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUANGXI_RESTAURANT  广西菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER_MONGOLIAN_RESTAURANT  内蒙古菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUNNAN_GUIZHOU_RESTAURANT  云贵菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JIANGXI_RESTAURANT  江西菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONGEE_RESTAURANT  粥店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISLAMIC_RESTAURANT  伊斯兰餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOT_POT_RESTAURANT  火锅店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANHUI_RESTAURANT  徽菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DUMPLING  饺子"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUJIAN_RESTAURANT  闽菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAINAN_RESTAURANT  海南菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HENAN_RESTAURANT  河南菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUAIYANG_RESTAURANT  淮扬菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHANXI_RESTAURANT  山西菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHAANXI_RESTAURANT  陕西菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIANJIN_RESTAURANT  天津菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAKKA_RESTAURANT  客家菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DIM_SUM  早茶"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTHERN_JIANGSU_RESTAURANT  苏北菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XINJIANG_RESTAURANT  新疆菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEBEI_RESTAURANT  河北菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUZHOU_RESTAURANT  衢州菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUNNAN_RESTAURANT  云南菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUIZHOU_RESTAURANT  贵州菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_RESTAURANT  中餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTHWEST_RESTAURANT  西北菜馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRêPERIE  可丽饼店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DUTCH_RESTAURANT  荷兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAST_FOOD_RESTAURANT  快餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILIPINO_RESTAURANT  菲律宾餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BASQUE_RESTAURANT  巴斯克餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROVENçAL_RESTAURANT  普罗旺斯餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALSATIAN_RESTAURANT  阿尔萨斯餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUVERGNATE_RESTAURANT  奥弗涅餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CORSICAN_RESTAURANT  科西嘉餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LYONNAISE_RESTAURANT  里昂餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRENCH_RESTAURANT  法国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUD_OUEST_RESTAURANT  西南餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GERMAN_RESTAURANT  德国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GREEK_RESTAURANT  希腊餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRILL  烤肉餐馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YEMENI_RESTAURANT  也门餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUNGARIAN_RESTAURANT  匈牙利餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TANDOORI_RESTAURANT  唐杜里餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUNJABI_RESTAURANT  旁遮普餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAJASTHANI_RESTAURANT  拉贾斯坦餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUGHLAI_RESTAURANT  莫卧儿餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BENGALI_RESTAURANT  孟加拉国餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOAN_RESTAURANT  果阿餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAIN_RESTAURANT  耆那餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KONKANI_RESTAURANT  康卡尼餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUJARATI_RESTAURANT  古吉拉特餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARSI_RESTAURANT  帕西餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_INDIAN_RESTAURANT  南印度餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAHARASHTRIAN_RESTAURANT  马哈拉施特拉餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_INDIAN_RESTAURANT  北印度餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MALVANI_RESTAURANT  马尔瓦尼餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HYDERABADI_RESTAURANT  海得拉巴餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWADHI_RESTAURANT  阿瓦德风味餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESTAURANT  印度餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSLIM_RESTAURANT  穆斯林餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDONESIAN_RESTAURANT  印度尼西亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ITALIAN_RESTAURANT  意大利餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAPANESE_RESTAURANT  日本料理店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUSHI_RESTAURANT  寿司店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KOSHER_RESTAURANT  犹太洁食餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KOREAN_RESTAURANT  韩国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LATIN_AMERICAN_RESTAURANT  拉美餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEBANESE_RESTAURANT  黎巴嫩餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MALTESE_RESTAURANT  马耳他餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDITERRANEAN_RESTAURANT  地中海餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEXICAN_RESTAURANT  墨西哥餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUCATECA_RESTAURANT  尤卡坦餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEXICAN_RESTAURANT  墨西哥餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAXAQUENA_RESTAURANT  瓦哈卡餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEXICAN_RESTAURANT  墨西哥餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VERACRUZANA_RESTAURANT  韦拉克鲁斯餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEXICAN_RESTAURANT  墨西哥餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POBLANA_RESTAURANT  波布拉诺餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_EASTERN_RESTAURANT  中东餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORIENTAL_RESTAURANT  东方餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIZZA_RESTAURANT  披萨店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POLISH_RESTAURANT  波兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PORTUGUESE_RESTAURANT  葡萄牙餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GASTROPUB  英式酒吧餐馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUSSIAN_RESTAURANT  俄罗斯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROADSIDE_RESTAURANT  路边餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SANDWICH_RESTAURANT  三明治餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEAFOOD_RESTAURANT  海鲜餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPANISH_RESTAURANT  西班牙餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAPAS_RESTAURANT  塔帕斯餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STEAK_HOUSE  牛排屋"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SURINAMESE_RESTAURANT  苏里南餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWISS_RESTAURANT  瑞士餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THAI_RESTAURANT  泰国餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TURKISH_RESTAURANT  土耳其餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KEBAB_RESTAURANT  烤肉串餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VEGETARIAN_RESTAURANT  素食餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VIETNAMESE_RESTAURANT  越南餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRI_LANKAN_RESTAURANT  斯里兰卡餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUROPEAN_RESTAURANT  欧洲餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LUNCH  午餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EASTERN_EUROPEAN_RESTAURANT  东欧餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BALTIC_RESTAURANT  波罗的海餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BELARUSIAN_RESTAURANT  白俄罗斯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKRAINIAN_RESTAURANT  乌克兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOHEMIAN_RESTAURANT  波希米亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WESTERN_RESTAURANT  西餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERUVIAN_RESTAURANT  秘鲁餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASIAN_RESTAURANT  亚洲风味餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRUNEIAN_RESTAURANT  文莱餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZERBAIJANI_RESTAURANT  阿塞拜疆餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRISH_RESTAURANT  爱尔兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAMAICAN_RESTAURANT  牙买加餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MALAYSIAN_RESTAURANT  马来西亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CZECH_RESTAURANT  捷克餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BURGER_RESTAURANT  汉堡店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHICKEN_RESTAURANT  鸡肉店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUSION_RESTAURANT  无国界料理店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRAZILIAN_RESTAURANT  巴西餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAIANA_RESTAURANT  巴伊亚餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRAZILIAN_RESTAURANT  巴西餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPIXABA_RESTAURANT  卡比沙巴餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRAZILIAN_RESTAURANT  巴西餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINEIRA_RESTAURANT  米纳斯吉拉斯餐厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRAZILIAN_RESTAURANT  巴西餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAKERY_RESTAURANT  烘焙简餐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNATIONAL_HOTEL  国际饭店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOROCCAN_RESTAURANT  摩洛哥餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIC_RESTAURANT  有机食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTHEAST_ASIAN_RESTAURANT  东南亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICE_CREAM_PARLOR  冷饮店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOUGHNUT_SHOP  甜甜圈店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLOVAK_RESTAURANT  斯洛伐克餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AFGHAN_RESTAURANT  阿富汗餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALGERIAN_RESTAURANT  阿尔及利亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARABIAN_RESTAURANT  阿拉伯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARGENTINEAN_RESTAURANT  阿根廷餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARMENIAN_RESTAURANT  亚美尼亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUSTRALIAN_RESTAURANT  澳大利亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BALKAN_RESTAURANT  巴尔干餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOLIVIAN_RESTAURANT  玻利维亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOSNIAN_RESTAURANT  波斯尼亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BULGARIAN_RESTAURANT  保加利亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BURMESE_RESTAURANT  缅甸餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMBODIAN_RESTAURANT  柬埔寨餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHILEAN_RESTAURANT  智利餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COLOMBIAN_RESTAURANT  哥伦比亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DINNER  晚餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUBAN_RESTAURANT  古巴餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYPRIOT_RESTAURANT  塞浦路斯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DANISH_RESTAURANT  丹麦餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOMINICAN_RESTAURANT  多米尼加餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EGYPTIAN_RESTAURANT  埃及餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENGLISH_RESTAURANT  英格兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETHIOPIAN_RESTAURANT  埃塞俄比亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINNISH_RESTAURANT  芬兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRANIAN_RESTAURANT  伊朗餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISRAELI_RESTAURANT  以色列餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LUXEMBOURGIAN_RESTAURANT  卢森堡餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAGHRIB_RESTAURANT  马格里布餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAURITIAN_RESTAURANT  模里西斯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MONGOLIAN_RESTAURANT  蒙古餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEPALESE_RESTAURANT  尼泊尔餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORWEGIAN_RESTAURANT  挪威餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAVOYAN_RESTAURANT  萨伏依餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCANDINAVIAN_RESTAURANT  斯堪的纳维亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCOTTISH_RESTAURANT  苏格兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SICILIAN_RESTAURANT  西西里餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLAVIC_RESTAURANT  斯拉夫餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUDANESE_RESTAURANT  苏丹餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWEDISH_RESTAURANT  瑞典餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYRIAN_RESTAURANT  叙利亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEPPANYAKI_RESTAURANT  铁板烧餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAUCASIAN_RESTAURANT  高加索餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TUNISIAN_RESTAURANT  突尼斯餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URUGUAYAN_RESTAURANT  乌拉圭餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VENEZUELAN_RESTAURANT  委内瑞拉餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WELSH_RESTAURANT  威尔士餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAKISTANI_RESTAURANT  巴基斯坦餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POLYNESIAN_RESTAURANT  波利尼西亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEYCHELLOIS_RESTAURANT  塞舌尔餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROMANIAN_RESTAURANT  罗马尼亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EROTIC_RESTAURANT  情色餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXOTIC_RESTAURANT  异国情调餐馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FONDUE_RESTAURANT  芝士火锅店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MACROBIOTIC_RESTAURANT  养生餐馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSSEL_RESTAURANT  蛤贝店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNACKS_BEVERAGES  小食&酒水"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUP_RESTAURANT  汤羹店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFFET_RESTAURANT  自助餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SALAD_BAR  沙拉店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAKEAWAY_RESTAURANT  快餐店（仅外送）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BANQUET_HALL  宴会厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAFETERIA  简餐馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HALAL  清真"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUICE_BAR  果汁店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CASUAL_DINING  休闲用餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINE_DINING  高档餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_MARKET_STALL  食品市场摊位"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_AMERICAN_RESTAURANT  北美餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_AMERICAN_RESTAURANT  南美餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_AFRICAN_RESTAURANT  南非餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_AFRICAN_RESTAURANT  北非餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCEANIC_RESTAURANT  海洋餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOT_DOGS  热狗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASTRIES  糕点类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BREWPUB  精酿啤酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATURAL_HEALTHY  天然&健康"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOODLES  面食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BREAKFAST  早餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRUNCH  早午餐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_ASIA_RESTAURANT  南亚餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW_ZEALAND_RESTAURANT  新西兰餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANTEEN  食堂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NYONYA_RESTAURANT  娘惹餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNACK  小吃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEA_RESTAURANT  茶餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RICE_NOODLE  米线店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT  餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AQUATIC_SEAFOOD_RESTAURANT  水产海鲜餐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAFé  咖啡馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB  英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNET_CAFé  网咖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEA_HOUSE  茶馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COFFEE_TEA  咖啡&茶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUB_CAFé  咖啡馆和英式酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MICROBREWERY_BEER_GARDEN  露天酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT_AREA  餐饮区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_COURT  美食广场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTAURANT_AREA  餐饮区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAWKER_CENTRE  小贩中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING_ANCILLARY_FACILITY  美食附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EATING_DRINKING  饮食"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEVERAGE_SHOP  饮品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shopping",
      children: "SHOPPING"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPARTMENT_STORE  百货公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING_CENTER  购物中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARKET  市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFORMAL_MARKET  集市"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARKET  市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_MARKET  露天市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARKET  市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FARMER_S_MARKET  农贸市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARKET  市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUPERMARKET  超市"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARKET  市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_MARKET  菜市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONVENIENCE_STORE  便利店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROCERY  杂货店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GREENGROCERY  蔬菜水果店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONVENIENCE_STORE  便利店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROCERY  杂货店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRUITS_SHOP  水果店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOOKSTORE  书店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD,_DVD,_GAME_VIDEO_STORE  CD/DVD/游戏/影音商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_VIDEO_RENTALS  CD/DVD/游戏/影音租赁商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEN_S_APPAREL  男士服装"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WOMEN_S_APPAREL  女士服装"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHILDREN_S_APPAREL  儿童服装"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOE_STORE  鞋店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALTY_CLOTHING_STORE  专业服装店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLOTHING_ACCESSORIES_STORE  服饰店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LINGERIE_STORE  女性内衣店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRY_CLEANERS  干洗店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOGRAPHIC_EQUIPMENT_STORE  摄影器材店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONSUMER_ELECTRONICS_STORE  家用电子产品商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_STORE  计算机店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFFICE_EQUIPMENT_STORE  办公设备店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOBILE_SERVICE_CENTER  运营商服务中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARINE_ELECTRONIC_EQUIPMENT_STORE  船用电子设备店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_STORE  电器城"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOBILE_PHONE_STORE  手机店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTLET  奥特莱斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACTORY_OUTLETS  工厂直销"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTLET  奥特莱斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RETAIL_OUTLETS  零售网点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLORIST  花店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAKERY  面包店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUTCHERY  肉店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FISH_STORE  鱼店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINE_SPIRITS_STORE  葡萄酒和烈酒商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELICATESSEN  熟食店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALTY_FOOD_STORE  特色食品商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWEET_SHOP  糖果店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAIRY_GOODS  乳制品"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASTRY_SHOP  糕点店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_DRINK_SHOP  食品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AQUATIC_SEAFOOD_SHOP  水产海鲜店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIFT_STORE  礼品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAIR_SALON_BARBERSHOP  美发店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARPET_STORE  地毯/地板商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CURTAIN_TEXTILE_STORE  窗帘/纺织品商店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DIY_CENTER  DIY中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FURNITURE_AND_ACCESSORIES_STORE  家具配件店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GARDENING_SERVICES  园艺服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KITCHEN_AND_SANITATION_STORE  厨房及清洁用品店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIGHTING_STORE  灯饰店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAINTING_DECORATING_STORE  油漆及装饰材料店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLASS_WINDOW_STORE  玻璃及窗具店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FURNITURE_STORE  家具店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POWER_EQUIPMENT_DEALER  电力设备经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOME_SPECIALTY_STORE  家居专卖店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LUMBER  木材店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOORING_STORE  地板店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KITCHEN_STORE  厨房用品店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BATHROOM_STORE  卫浴专卖店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_GARDEN  家装&园艺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCKSMITH  锁匠"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JEWELRY_WATCH_STORE  珠宝钟表店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JEWELRY_STORE  珠宝店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JEWELRY_WATCH_STORE  珠宝钟表店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATCH_STORE  钟表店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEWSAGENTS_TOBACCONISTS  报摊和烟草店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEWSAGENTS  报刊亭"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPTICIANS  眼镜店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_STORE  体育用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_STORE  玩具游戏店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAVEL_AGENCY  旅行社"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTRUCTION_MATERIALS_EQUIPMENT_STORE  建材行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_SUPPLIES_EQUIPMENT_STORE  医疗用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAUNDRY  洗衣店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOGRAPHY_STUDIO  照相馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOCOPY_SHOP  影印店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_STORE  宠物店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANIMAL_SERVICES  动物服务店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_STORE  宠物店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_SUPPLY_STORE  宠物用品店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_STORE  宠物店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KENNELS  养狗场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_STORE  宠物店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_BOARDING  宠物寄宿服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ART_AND_ANTIQUES_STORE  古玩店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAKEUP_AND_COSMETICS_STORE  美妆店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARTS_AND_CRAFTS_SUPPLIES  工艺美术用品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOBBY_SHOP  发烧友集散地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADULT_SHOP  成人商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLASSWARE_CERAMIC_SHOP  玻璃瓷器店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_SPECIALTY_STORE  特产店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SECOND_HAND_STORE  二手店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAGS_LEATHERWEAR_SHOP  皮具店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSICAL_INSTRUMENT_STORE  乐器行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING_SERVICE_CENTER  购物服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAREHOUSE_SUPERMARKET  仓储超市"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEAUTY_SALON  美容院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAKE_UP_ARTIST  彩妆大师"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEAUTY_SALON  美容院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIN_CARE_SERVICE  护肤服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAIL_SALON  美甲店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HARDWARE_STORE  五金店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAWN_SHOP  当铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOTTERY_SHOP  彩票店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON_STORE_RETAILERS  非商店零售商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AGRICULTURAL_SUPPLIES  农业用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STAMP_SHOP  集邮店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRIVE_THROUGH_BOTTLE_SHOP  免下车酒行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAILORS  裁缝店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_SUPPLIES_STORE  安防用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_STORE  杂货铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOLIDAY_STORE  节庆用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOATING_EQUIPMENT_STORE  水上用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALTY_STORE  专卖店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFFICE_SUPPLIES_SERVICES  办公用品专卖店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISCOUNT_STORE  折扣店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_AND_BICYCLE_ACCESSORIES_SHOP  自行车及自行车配件店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUNTING_FISHING_SHOP  狩猎渔捕用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING_WALKING_EQUIPMENT_STORE  跑步竞走用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKATE_SHOP  滑板店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKI_SHOP  滑雪用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNOWBOARD_SHOP  单板滑雪用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SURF_SHOP  冲浪用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BMX_SHOP  自行车越野用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMPING_HIKING_SUPPLIES  野营及徒步用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANOE_KAYAK_STORE  皮划艇用品商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TACK_SHOP  马具店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DUTY_FREE_STORE  免税店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BABY_STORE  婴儿用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOLLAR_STORE  一元店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS_HALL  营业厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATIONERY_STORE  文具店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VARIETY_STORE  百货商店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUN_SHOP  枪支专卖店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERFUME_SHOP  香水专卖店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AROMATHERAPY_SUPPLY_STORE  香熏用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_BEAUTY_SUPPLY_STORE  健康美容用品店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOBACCO_ALCOHOL_STORE  烟酒店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_SERVICE_AND_MAINTENANCE  自行车维修与保养"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOP  店铺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E_CIGARETTE  电子烟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING_ANCILLARY_FACILITY  购物附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING  购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL_PEDESTRIAN_STREET  商业步行街"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leisure",
      children: "LEISURE"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENTERTAINMENT_PLAZA  娱乐场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMUSEMENT_PARK  游乐园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMUSEMENT_ARCADE  游戏机厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMUSEMENT_PARK  游乐园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMUSEMENT_CENTER  大型游乐场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMUSEMENT_PARK  游乐园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIDS_PLAYGROUND  儿童游乐场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK  公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECREATIONAL_AREA  休闲区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BATTLEFIELD_SITE  战场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEMETERY  公墓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MILITARY_CEMETERY  军人墓地"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HISTORIC_SITE  遗址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HISTORICAL_PARK  历史遗迹公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAKESIDE  湖滨"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEMORIAL  纪念馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVENUE_BOULEVARD  林荫大道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRESERVED_AREA  自然保护区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEASHORE  海滨"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WILDERNESS_AREA  荒野保护区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREST_AREA  林区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FISHING_HUNTING_AREA  渔猎区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAIRGROUND  露天游乐场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINTER_SPORT_AREA  冬季运动场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKI_RESORT  滑雪胜地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDOOR_SKI_SLOPE  室内滑雪场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOAT_LAUNCHING_RAMP  船舶下水滑道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PICNIC_AREA  野餐区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCENIC_RIVER_AREA  河流风景区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROTECTED_AREA  保护区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATER_PARK  水上乐园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOG_PARK  狗狗乐园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLAYGROUND  游乐场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIDS_PLAYGROUND  儿童游乐场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GO_KARTTRACK  卡丁车赛道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RECREATION_AREA  公园及休憩用地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATIONAL_PARK  国家公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO_BOTANICAL_GARDEN  动植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARBORETA_BOTANICAL_GARDEN  植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO_BOTANICAL_GARDEN  动植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO  动物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO_BOTANICAL_GARDEN  动植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AQUATIC_ZOO_MARINE_PARK  水族馆和海洋公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO_BOTANICAL_GARDEN  动植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WILDLIFE_PARK  野生动物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZOO_BOTANICAL_GARDEN  动植物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PETTING_ZOO  宠物动物园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE_CENTER  休闲中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAUNA,_SOLARIUM_MASSAGE_CENTER  桑拿，日光浴室和按摩中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAUNA  桑拿"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE_CENTER  休闲中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAUNA,_SOLARIUM_MASSAGE_CENTER  桑拿，日光浴室和按摩中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MASSAGE  按摩"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE_CENTER  休闲中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POOL_HALL  台球馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE_CENTER  休闲中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPA  水疗馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE_CENTER  休闲中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLYING_CLUB  航空俱乐部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHT_CLUB  夜总会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIVATE_CLUB  私人俱乐部"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHT_CLUB  夜总会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAZZ_CLUB  爵士俱乐部"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHT_CLUB  夜总会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMEDY_CLUB  喜剧俱乐部"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHT_CLUB  夜总会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KARAOKE_CLUB  KTV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAR  酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COCKTAIL_BAR  鸡尾酒吧"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAR  酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINE_BAR  红酒吧"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAR  酒吧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_BAR  体育酒吧"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIVE_ENTERTAINMENT_CABARET  现场表演"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISCOTHEQUE  迪斯科舞厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIVE_ENTERTAINMENT_CABARET  现场表演"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DANCING_CLUB  舞蹈俱乐部"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIVE_ENTERTAINMENT_CABARET  现场表演"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_ARCADE_GAMING_ROOM  游戏厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIGHTLIFE  夜生活场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADULT_ENTERTAINMENT  成人娱乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSEUM  博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCIENCE_MUSEUM  科学博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSEUM  博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHILDREN_S_MUSEUM  儿童博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSEUM  博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HISTORY_MUSEUM  历史博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSEUM  博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ART_MUSEUM  艺术博物馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIBRARY  图书馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER  剧院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONCERT_HALL  音乐厅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSIC_VENUE  音乐中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPERA  歌剧院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERFORMING_ARTS  表演艺术"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMPHITHEATER  圆形剧场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DINNER_THEATER  晚宴剧场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CULTURAL_CENTER  文化中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEATER,_MUSIC_CULTURE  戏剧，音乐和文化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GALLERY  美术馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CINEMA  电影院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRIVE_IN_CINEMA  汽车影院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAMBLING,_LOTTERY_BETTING  博彩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CASINO  赌场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLUB_ASSOCIATION  俱乐部协会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEACH_CLUB  沙滩俱乐部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLUB_ASSOCIATION  俱乐部协会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOCKEY_CLUB  曲棍球俱乐部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLUB_ASSOCIATION  俱乐部协会"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_CLUB  汽车俱乐部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOUNTAIN_BIKE_TRAIL  山地车道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADVENTURE_VEHICLE_TRAIL  越野车道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIKING_TRAIL  登山道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HORSE_RIDING_TRAIL  马术公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROCK_CLIMBING_TRAIL  攀岩公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKI_LIFT  滑雪缆车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFF_ROAD_TRAILHEAD  越野步道口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTDOOR_SERVICE  户外服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANGER_STATION  护林站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIL_SYSTEM  步道系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOTPATH  走道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNITY_CENTER  小区中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COLLECTIVE_COMMUNITY  集体小区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARINA  码头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YACHT_BASIN  游艇泊区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WINERY  酒庄"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOUNTAIN  喷泉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIER  栈桥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIVING_SERVICE_ANCILLARY_FACILITY  生活服务附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMOKING_AREA  吸烟区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_VENUE  活动场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OUTWARD_BOUND  拓展培训"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PICKING_GARDEN  采摘园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEISURE  休闲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESCAPE_ROOM_CENTER  密室逃脱中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sport_fitness",
      children: "SPORT_FITNESS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FITNESS_CLUB_CENTER  健身俱乐部"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HORSE_RIDING_STABLE  骑马场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THEMED_SPORTS_HALL  主题运动馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQUASH_COURT  壁球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOWLING_ALLEY  保龄球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOOTING_RANGE  射击场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDOOR_SPORTS  室内运动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_CENTER  体育中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADVENTURE_SPORTS_VENUE  极限运动馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATHLETICS FIELD  田径运动场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRICKET_GROUND  板球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOCCER_FIELD  英式足球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HORSE_RACING_TRACK  赛马场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MULTIPURPOSE_STADIUM  多用途体育场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUGBY_GROUND  英式橄榄球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICE_HOCKEY_RINK  冰球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BASEBALL_FIELD  棒球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTORSPORT_VENUE  赛车场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BASKETBALL_COURT  篮球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RACE_TRACK  赛道"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NETBALL_COURT  篮网球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOCKEY_FIELD  曲棍球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BADMINTON_COURT  羽毛球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STADIUM  体育场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TABLE_TENNIS_HALL  乒乓球场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOLF_COURSE  高尔夫球场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOLF_DRIVING_RANGE  高尔夫练习场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICE_SKATING_RINK  室内溜冰场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWIMMING_POOL  游泳馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TENNIS_COURT  网球场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATER_SPORTS_CENTER  水上运动中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DIVING_CENTER  潜水中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARTIAL_ARTS  武术"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS  体育运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORT_FITNESS_ANCILLARY_FACILITY  体育运动附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tourism",
      children: "TOURISM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_INFORMATION_OFFICE  旅客问讯处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUILDING  建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MONUMENT  纪念碑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATURAL_ATTRACTION  自然景观"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OBSERVATORY  天文台"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLANETARIUM  天文馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAM  大坝"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TUNNEL  隧道"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOWER  塔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRIDGE  桥"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAUSOLEUM_GRAVE  陵墓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARCH  拱门"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATUE  雕像"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATER_HOLE  水洞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LANDMARK  地标景点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAMED_INTERSECTION_CHOWK  有命名路口广场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BREWERY  啤酒厂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BULLRING  斗牛场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURIST_ATTRACTION  旅游景点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CASTLE  城堡"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHURCH  教堂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOSQUE  清真寺"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SYNAGOGUE  犹太教堂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEMPLE  寺庙"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GURDWARA  锡克教谒师所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASHRAM  印度教静修所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAGODA  佛塔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHINTO_SHRINE  神道教建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HINDU_TEMPLE  印度教建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUDDHIST_TEMPLE  佛教建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAIN_TEMPLE  耆那教建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MORMON_CHURCH  摩门教建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHARMA_TEMPLE  达摩建筑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MONASTERY  修道院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CATHEDRAL  大教堂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLACE_OF_WORSHIP  宗教场所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRAYER_ROOM  祈祷室"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEACH  沙滩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIVATE_BEACH  私人海滩"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEACH  沙滩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_BEACH  公共海滩"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEACH  沙滩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEASIDE_RESORT  海滨浴场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADVENTURE_SPORTS_VENUE  极限运动馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OBSERVATION_DECK  观景台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TICKET_OFFICE  售票处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM_ANCILLARY_FACILITY  旅游附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXHIBITION_HALL  展厅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOURISM  旅游"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUNCHING_POINT  打卡点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health_care",
      children: "HEALTH_CARE"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_HOSPITAL  综合医院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALIZED_HOSPITAL  专科医院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHINESE_MEDICINE_HOSPITAL  中医院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_FOR_WOMEN_AND_CHILDREN  妇幼保健院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANDROLOGY_HOSPITAL  男科"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNITY_HOSPITAL  小区医院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_CLINIC  医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSPITAL_DEPARTMENT  医院科室"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSONAL_SERVICE_CENTER  个人服务中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSONAL_CARE_INSTITUTION  个人护理机构"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLOOD_BANK  血库"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMBULANCE_UNIT  救护单位"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NURSING_HOME  疗养院"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_PRACTICE  家庭医生"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSYCHIATRIC_INSTITUTE  精神病学研究所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPTICAL  眼科诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTHCARE_SERVICE_CENTER  医疗保健服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THERAPIST  心理诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHARMACY  药店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DENTAL_CLINIC  牙医诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ROOM  急症室"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHYSIOTHERAPY_CLINIC  理疗诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_CLINIC  全科诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALIST_CLINIC  专科诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PODIATRIST  足科医生"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NUTRITIONIST  营养师"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AESTHETICS_CLINIC  美容诊所"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_CLINIC  医疗诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REHABILITY_CENTER  康复中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VETERINARY_CLINIC  兽医诊所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_RESORT  疗养胜地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KIDS_HEALTH_RESORT  儿童疗养胜地"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE_ANCILLARY_FACILITY  医疗保健附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_CARE  医疗保健"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PET_HOSPITAL  宠物医院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accommodation",
      children: "ACCOMMODATION"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ESTATE  居民小区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APARTMENT_COMPLEX  公寓大楼"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOWNHOUSE_COMPLEX  联排别墅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RETIREMENT_COMMUNITY  老年中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONDOMINIUM_COMPLEX  公寓群"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOLIDAY_PARK  假日公园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MULTI_FLAT_BUILDING  多层建筑"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESIDENTIAL_ACCOMMODATION  住宅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DETACHED_HOUSE  独栋别墅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BED_BREAKFAST_GUEST_HOUSE  家庭旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BED_BREAKFAST  住宿加早餐型酒店"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BED_BREAKFAST_GUEST_HOUSE  家庭旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUEST_HOUSE  宾馆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL  酒店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOSTEL  旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESORT  度假村"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTEL  汽车旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CABIN_LODGE  小木屋"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_CAMPS  帐篷营地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOVE_HOTEL  情侣酒店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOAT_HOTEL  船旅店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APARTHOTEL  公寓式酒店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOUTH_HOSTEL  青年旅社"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAVERN  客栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOTEL_MOTEL  酒店旅馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIAL_ACCOMMODATION  特色住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COTTAGE  村舍"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VILLA  度假别墅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUNGALOW  平房"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHALET  小木屋（瑞士风格）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APARTMENT  套间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FARMSTAY  农家乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACATION_RENTAL  房屋租赁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOMESTAY  民宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMPING_GROUND  露营地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECREATIONAL_SITE  休闲露营地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMPING_GROUND  露营地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARAVAN_SITE  房车露营地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION  住宿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOMMODATION_ANCILLARY_FACILITY  住宿附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transport",
      children: "TRANSPORT"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AUTHORITY  民用机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIVATE_AUTHORITY  私人机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MILITARY_AUTHORITY  军用机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRFIELD  飞行区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_TERMINAL  航站楼"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_SPORTS_AIRPORT  公共体育机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT  机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HELIPORT  直升机场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNATIONAL_RAILWAY_STATION  国际火车站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATIONAL_RAILWAY_STATION  火车站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERCITY_RAILWAY_STATION  城际轨道站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBWAY  地铁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_SIDING  铁路侧线"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIGHT_RAIL  轻轨列车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MONORAIL  单轨列车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INCLINED_RAIL  摆式列车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERIC_NODE  通用节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION  铁路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FREIGHT_RAILWAY_STATION  货运火车站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_STATION  公交站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAXI_STAND  出租车停靠点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAM_STOP  有轨电车站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COACH_STATION  客运站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CABLE_TRAM  缆道电车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AERIAL_LIFT  空中升降机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUNICULAR  缆车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSIT_ACCESS  公共交通通道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORTATION_SERVICE  运输服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_TRANSIT  本地公交"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOLL_GATE  收费站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AERIAL_TRAMWAY  空中缆车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_RAPID_TRANSIT  快速公交"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSPORT_STOP  公共交通站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_DEPOT  公交总站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FERRY_TERMINAL  渡轮码头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FERRY  渡轮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FERRY_TERMINAL  渡轮码头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIN_FERRY  铁路渡轮"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FERRY_TERMINAL  渡轮码头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOCK  船坞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FERRY_TERMINAL  渡轮码头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATER_TRANSIT  水上运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PORT_WAREHOUSE  港口仓库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HELIPAD  直升机停机坪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRLINE_ACCESS  航空通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATION_ACCESS  陆路通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITY_GATE  检查点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_EXIT  高速出口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELIVERY_ENTRANCE  货运通道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_ENTRANCE  高速入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECKPOINT  检查站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENTRANCE_EXIT  出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBWAY_ENTRANCE  地铁站出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_ENTRANCE_EXIT  停车场出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_EXIT  停车场出口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_ENTRANCE_EXIT  停车场出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_ENTRANCE  停车场入口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GATE  门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATION_ENTRANCE_EXIT  车站出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATION_ENTRANCE  进站口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATION_ENTRANCE_EXIT  车站出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STATION_EXIT  出站口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_ENTRANCE_EXIT  机场出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_ENTRANCE  机场入口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_ENTRANCE_EXIT  机场出入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_EXIT  机场出口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESS_GATEWAY  通关口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BORDER_CROSSING_STATION  过境口岸"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BORDER_POST  边防"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOUNTAIN_PASS  山关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAIL_YARD  铁路站场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_CARGO  机场货运中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COURIERS  快递"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_TRANSPORTATION  货物运输"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOADING_DOCK  装卸码头"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT_CENTER  交通运输中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CARGO_CENTER  货运中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOADING_ZONE  卸货区"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA  服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE_REST_AREA  完备的服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA  服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA_(PARKING_AND_RESTROOM_ONLY)  仅有停车场和洗手间的服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA  服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA_(PARKING_ONLY)  仅有停车场的服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA  服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTORWAY_SERVICE_REST_AREA  高速公路服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST_AREA  服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCENIC_OVERLOOK_REST_AREA  风景优美的服务区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERSECTION  路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDINARY_INTERSECTION  普通路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON_HIGHWAY_ORDINARY_INTERSECTION  非高速普通路口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERSECTION  路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDINARY_INTERSECTION  普通路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON_HIGHWAY_COMPREHENSIVE_INTERSECTION  非高速综合路口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERSECTION  路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_INTERSECTION  高速公路路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_EXIT_ACCESS  高速进入退出路口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERSECTION  路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_INTERSECTION  高速公路路口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHWAY_INTERCHANGE  高速公路交汇处"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC  交通"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC_LIGHT  红绿灯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC  交通"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC_SIGN  交通标志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC  交通"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROUNDABOUT  环岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC  交通"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OVERPASS  立交桥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC  交通"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDINARY_BRIDGE  桥梁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAREHOUSE  仓库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAILWAY_STATION_ANCILLARY_FACILITY  火车站附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_ANCILLARY_FACILITY  机场附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPORT_LOUNGE  机场休息室"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OTHER_TRANSPORT_ANCILLARY_FACILITY  其他交通附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSIT_ROUTE  公共交通线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAIL_TRANSIT_ROUTE  轨道交通线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSIT_ROUTE  公共交通线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_ROUTE  公交车线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_TRANSIT_ROUTE  公共交通线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_RAPID_TRANSIT_ROUTE  快速公交线路"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORT  交通运输"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH_SPEED_PARKING_AREA  高速停车区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "government_public_service",
      children: "GOVERNMENT_PUBLIC_SERVICE"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATIONAL_ORGANIZATION  国家机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNATIONAL_ORGANIZATION  国际组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CITY_HALL  市政府"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNTY_COUNCIL  县政府"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIVIC_COMMUNITY_CENTER  市政厅/小区活动中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OFFICE  政府机关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOWN_GOVERNMENT  乡镇政府"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIRE_STATION  消防站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POLICE_STATION  警察局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST_OFFICE  邮局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_POST_OFFICE  邮政总局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST_OFFICE  邮局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_POST_OFFICE  地方邮局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST_OFFICE  邮局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST_BOX  邮政信箱"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COURTHOUSE  法院"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMBASSY  大使馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC_CONTROL_DEPARTMENT  交通管制部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAFFIC_MANAGEMENT_BUREAU  交通管理局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MILITARY_BASE  军事基地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COLLEGE_UNIVERSITY  大学"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIVERSITY_DEPARTMENT  大学院系"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUNIOR_COLLEGE_COMMUNITY_COLLEGE  专科院校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHILD_CARE_FACILITY  托儿所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRESCHOOL  学前班"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY_SCHOOL  小学"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH_SCHOOL  中学"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SENIOR_HIGH_SCHOOL  高级中学"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOCATIONAL_TRAINING_SCHOOL  职业培训学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TECHNICAL_SCHOOL  技术院校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LANGUAGE_SCHOOL  语言学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_SCHOOL  体育院校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ART_SCHOOL  艺术院校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIAL_SCHOOL  特殊教育学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_SCHOOL  初中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CULINARY_SCHOOL  烹饪学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRIVING_SCHOOL  驾校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DANCE_STUDIO_SCHOOL  舞蹈学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCHOOL  学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_FACILITY  教育设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAINING_AND_DEVELOPMENT  培训与发展"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COACHING_INSTITUTE  培训机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMP  营队活动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSIC_SCHOOL  音乐学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HORSE_RIDING_SCHOOL  马术学校"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION  教育机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KINDERGARTEN  幼儿园"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSENGER_TRANSPORT_TICKET_OFFICE  客运票务处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEDESTRIAN_SUBWAY  行人隧道"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_CALL_BOX  公用电话亭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOILET  卫生间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROAD_RESCUE_POINT  道路救援点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_OR_COMMUNITY_FACILITY  政府或小区设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_RESTROOM  公厕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REGISTRATION_OFFICE  登记处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREET_OR_SQUARE  街道或广场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WI_FI_HOTSPOT  Wi-Fi 接入点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRINKING_WATER_FOUNTAIN  直饮水器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFANT_ROOM  母婴室"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STAIRS  楼梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_AMENITY  公共便利设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELEVATOR  电梯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION  组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WELFARE_ORGANIZATION  福利组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION  组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON_GOVERNMENTAL_ORGANIZATION  非政府组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION  组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHARITY_ORGANIZATION  慈善组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION  组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RELIGIOUS_ORGANIZATION  宗教组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDIAN_RESERVATION  原住民保留地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRISON  监狱"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ASSEMBLY_POINT  紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TSUNAMI_ASSEMBLY_POINT  海啸紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ASSEMBLY_POINT  紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIRE_ASSEMBLY_POINT  消防紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ASSEMBLY_POINT  紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EARTHQUAKE_ASSEMBLY_POINT  地震紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ASSEMBLY_POINT  紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOLCANIC_ERUPTION_ASSEMBLY_POINT  火山爆发紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_ASSEMBLY_POINT  紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOOD_ASSEMBLY_POINT  水灾紧急集合点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDUCATIONAL_INSTITUTION_ANCILLARY_FACILITY  教育附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TELEVISION_TOWER  电视塔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIGHTHOUSE  灯塔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CELL_TOWER  基站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RADIO_TOWER  无线电塔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOTARY  公证人"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN_CONSULATE  外国领事馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN_EMBASSY_AND_CONSULATE  外国使领馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN_ORGANIZATION_RELATED  外国机构相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARCHIVES_HALL  档案馆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_SECURITY_BUREAU  公安局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL_POLICE_STATION  派出所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOVERNMENT_PUBLIC_SERVICE  政府公共服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUNICIPAL_ADMINISTRATIVE_SERVICE_CENTER  市政务服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "business",
      children: "BUSINESS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BANK  银行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATM  自动取款机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL_BUILDING  商业大厦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS_PARK  商务园区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXHIBITION_CONVENTION_CENTER  会展中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INDUSTRIAL_BUILDING  工业厂房"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANUFACTURING_FACTORY  制造工厂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_COMPANY  媒体公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNICATION_MEDIA  传播媒体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESEARCH_INSTITUTE  研究机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXCHANGE  交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STOCK_EXCHANGE  证券交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXCHANGE  交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOLD_EXCHANGE  黄金交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXCHANGE  交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CURRENCY_EXCHANGE  外币兑换处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXCHANGE  交易所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MONEY_TRANSFERRING_SERVICE  汇款服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COURIER_DROP_BOX  快递柜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AGRICULTURAL_BUSINESS  农业经营公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HORTICULTURE_COMPANY  园艺公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AGRICULTURAL_BUSINESS  农业经营公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRODUCE_COMPANY  生产企业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AGRICULTURAL_BUSINESS  农业经营公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FARM  农场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMERGENCY_MEDICAL_SERVICE_CENTER  急救医疗服务点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERVICE_COMPANY  服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADVERTISING_AND_MARKETING_COMPANY  广告营销"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_AND_DATA_SERVICES_CORPORATION  计算机和数据服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_SOFTWARE_COMPANY  计算机软件公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DIVERSIFIED_FINANCIAL_SERVICE_COMPANY  多元金融服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSURANCE_COMPANY  保险公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHIPPING_SERVICE  物流公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSTAL_LOCKER  智能快递柜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL_ESTATE_AGENCY  房产中介"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAVINGS_INSTITUTION  储蓄机构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANUFACTURING_COMPANY  制造公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AGRICULTURAL_TECHNOLOGY_COMPANY  农业技术公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOBILE_COMPANY  汽车公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHEMICAL_COMPANY  化学品公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRONICS_COMPANY  电子产品公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MECHANICAL_ENGINEERING_COMPANY  机械工程公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLIC_HEALTH_TECHNOLOGY_COMPANY  公共卫生技术公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHARMACEUTICAL_COMPANY  医药公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHING_TECHNOLOGY_COMPANY  出版社"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TELECOMMUNICATIONS_COMPANY  电信公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OEM  代工厂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAX_SERVICES  税务服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEGAL_SERVICES  法律服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPORTATION_COMPANY  交通运输公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_CHARTER_RENTAL_COMPANY  巴士租赁公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAXI,_LIMOUSINE_SHUTTLE_SERVICE_COMPANY  出租车、豪华轿车及穿梭巴士服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_COMPANY  公交公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCHOOL_BUS_SERVICE_COMPANY  校车服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLEANING_SERVICE_COMPANY  清洁服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OIL_NATURAL_GAS_COMPANY  石油天然气公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINERAL_COMPANY  矿产公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTRUCTION_COMPANY  建筑公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOVING_STORAGE_COMPANY  搬运仓储公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIRLINE  航空公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRIDGE_TUNNEL_ENGINEERING_COMPANY  桥梁隧道工程公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUNERAL_SERVICES  殡葬服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVESTMENT_CONSULTING_FIRM  投资顾问公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EQUIPMENT_RENTAL_COMPANY  设备租赁公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS_SERVICES_COMPANY  商业服务公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CABLE_TELEPHONE_COMPANY  有线通信公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOBILE_MANUFACTURER  汽车制造公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMPORT_AND_EXPORT_COMPANY  进出口分销公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CATERERS  餐饮公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOME_APPLIANCE_REPAIR_COMPANY  家电维修"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANIMAL_SHELTER  动物收容所"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WEDDING_SERVICES  婚庆服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUSTOMER_SERVICE_CENTER  客户服务中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENGINEERING_AND_SCIENTIFIC_SERVICES  工程与科学服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOOD_PRODUCTION  食品生产"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUMAN_RESOURCES_AND_RECRUITING_SERVICES  人力资源与招聘服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVESTIGATION_SERVICES  调查服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT_AND_OFFICE_EQUIPMENT_SERVICES  IT和办公设备服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LANDSCAPING_SERVICES  园林绿化服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCKSMITHS_AND_SECURITY_SYSTEM_SERVICES  锁匠和安全系统服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGEMENT_AND_CONSULTING_SERVICES  管理和咨询服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MODELING_AGENCIES  模特经纪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPECIALTY_TRADE_CONTRACTORS  专业贸易承包商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOWING_SERVICE  拖车服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSLATION_AND_INTERPRETATION_SERVICES  翻译服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTERIOR_AND_EXTERIOR_DESIGN  室内外设计"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROPERTY_MANAGEMENT  物业管理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POLICE_SERVICES_SECURITY  安保服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOGRAPHY  摄影"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOCIAL_SERVICES  社会服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTILITIES  公共事业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHARED_UMBRELLA  共享雨伞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WASTE_AND_SANITARY  垃圾处理与保洁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_SERVICE_AND_MAINTENANCE  自行车维修与保养"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BILL_PAYMENT_SERVICE  账单支付服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BODY_PIERCING_AND_TATTOOS  身体穿刺和纹身"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KINDERGARTEN_AND_CHILDCARE  幼儿园与育儿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAID_SERVICES  女佣服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARRIAGE_AND_MATCHMAKING_SERVICES  婚介服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WELLNESS_CENTER_AND_SERVICES  健康中心和服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TANNING_SALON  美黑沙龙"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLUMBING  水暖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDICAL_LABORATORY  医学实验室"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E_COMMERCE_SERVICE  电商服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOUSE_CLEANING_SERVICE  家政服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COWORKING_SPACE  联合办公区域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POWER_STATION  发电站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONTRACTOR  承包商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOUNTANT  会计师"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEWAGE_TREATMENT_PLANT  污水处理厂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GARBAGE_DUMP  垃圾场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECYCLING_CENTER  废品回收站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HANDYMAN  勤杂工"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPHOLSTERY_SERVICE  室内装潢服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAWN_CARE_SERVICE  草坪护理服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEST_CONTROL_SERVICE  害虫防治服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECORD_COMPANY  唱片公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRAPHIC_DESIGNER  平面设计师"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_PLANNER  活动策划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATER_REFILLING_STATION  补水站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SECURITIES_COMPANY  证券公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHEMICAL_AND_METALLURGY  冶金化工"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPANY  公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL_TRADE  商业贸易"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BANK_ANCILLARY_FACILITY  银行附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS_ANCILLARY_FACILITY  商业附属设施"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAGGAGE_SERVICE  行李寄存服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXPRESS_STORAGE  快递存放点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUSINESS  商业"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFFICE_BUILDING  写字楼"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automotive",
      children: "AUTOMOTIVE"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PETROL_STATION  加油站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRIC_VEHICLE_CHARGING_STATION  电动汽车充电站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HYDROGEN_FUELING_STATION  加氢站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WEIGH_STATION  秤车站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WEIGH_SCALES  磅秤处"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMISSION_TESTING  尾气检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COACH_PARKING_AREA  班车停车场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUCK_PARKING_AREA  货车停车场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_GARAGE  停车楼"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARK_RIDE  停车换乘点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_SHARING_LOCATION  共享单车点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_PARKING_PLACE  自行车停放处"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARKING_LOT  停车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAILHEAD  步道口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_WASH  洗车场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUCK_WASH  卡车清洗处"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_RENTAL_COMPANY  汽车租赁公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_RENTAL  汽车租赁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_RENTAL_COMPANY  汽车租赁公司"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PICKUP_AND_RETURNS_POINT  取车还车点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_DEALER  轿车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTORCYCLE_DEALER  摩托车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOAT_DEALER  船艇经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RECREATIONAL_VEHICLE_DEALER  休旅车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUCK_DEALER  卡车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAN_DEALER  面包车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_DEALER  巴士经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATV_SNOWMOBILE_DEALER  全地形车/雪地车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_DEALER  汽车经销商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USED_CAR_DEALER  二手车经销商"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BODYSHOP  车身修理厂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE_GLASS_REPLACEMENT_SHOP  挡风玻璃维修点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_AUTO_REPAIR_SERVICE_CENTER  通用汽修服务中心"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOBILE_ACCESSORIES_SHOP  汽车配件销售点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TIRE_REPAIR_SHOP  轮胎维修点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTORCYCLE_REPAIR_SHOP  摩托车维修点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUCK_REPAIR_SHOP  卡车维修点"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAN_REPAIR  货车修理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROAD_ASSISTANCE  道路援助"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_REPAIR  自行车维修"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE REPAIR_SHOP  汽车维修点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OIL_CHANGE_SERVICE  换油服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUCK_STOP  卡车停靠站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTORING_ORGANIZATION_OFFICE  汽车保险救援组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_MOTORCYCLE_RENTAL  自行车/摩托车出租"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCOOTER_RENTAL  滑板车出租"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAS_FILLING_STATION  加气站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_INSPECTION  车辆检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_RELATED_SERVICE  汽车相关服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_SHARING_LOCATION  共享单车点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BICYCLE_PARKING_PLACE  自行车停放处"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOMOTIVE  汽车"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELECTRIC_BICYCLE_CHARGING_STATION  电动自行车充电站"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "miscellaneous",
      children: "MISCELLANEOUS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOUNTAIN_PEAK  山峰"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAVE  山洞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIDGE  山脊"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DUNE  沙丘"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VALLEY  山谷"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLAIN_FLATLAND  平原"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLATEAU  高原"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRY_LAKE  旱湖"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WELL  井"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OASIS  绿洲"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROCKS  岩石"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESERVOIR  水库"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REEF  珊瑚礁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAPIDS  湍流"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAY  港湾"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COVE  小湾"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HARBOR  港口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAGOON  泻湖"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPE  海角"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MINERAL_HOT_SPRINGS  温泉"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISLAND  海岛"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MARSH_SWAMP_VLEI  沼泽"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIVER_CROSSING  渡河"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HILL  丘陵"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUARRY  采石场"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANAL  运河"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WATERFALL  瀑布"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BODY_OF_WATER  水体"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAKE  湖"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNDERSEA_FEATURE  海底地形"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POND  池塘"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIVER  河流"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GULF_AND_STRAIT  海湾海峡"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOUNTAINOUS_REGION  山地"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLACIER  冰川"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BASIN  盆地"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DESERT  沙漠"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANYON  峡谷"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCEANIC_TRENCH  海沟"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PENINSULA  半岛"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCEAN  海洋"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELTA  三角洲"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEOGRAPHIC_FEATURE  地理特征"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOUNTAIN_RANGE  山脉"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CONTINENT  大陆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNTRY  国家"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPITAL  首都"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPITAL_CITY  省会城市"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_CITY  一般城市"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNTY  县"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOWN  镇"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAMLET  村庄"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEIGHBORHOOD  Neighborhood"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSTAL_CODE  邮政编码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREET  道路"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREET_ADDRESS  街道地址"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOCALITY  Locality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBLOCALITY_LEVEL1  Sublocality Level1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBLOCALITY_LEVEL2  Sublocality Level2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_FEATURE  行政区划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OTHER_PLACE  Other Place"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN  未知"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARCHITECTURE  建筑物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MISCELLANEOUS  其他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMERCIAL_DISTRICT  商圈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "city_walk",
      children: "CITY_WALK"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "CITY_WALK  城市漫步"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "others",
      children: "OTHERS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Level 1"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMINISTRATIVE_AREA_LEVEL_1  一级行政区域"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMINISTRATIVE_AREA_LEVEL_2  二级行政区域"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMINISTRATIVE_AREA_LEVEL_3  三级行政区域"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMINISTRATIVE_AREA_LEVEL_4  四级行政区域"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "ADMINISTRATIVE_AREA_LEVEL_5  五级行政区域"
          })
        })]
      })]
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