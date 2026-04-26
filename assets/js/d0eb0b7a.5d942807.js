"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["955001"], {
253715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_heat_map_heat_md_d0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-heat-map-heat-md-d0e.json
var site_docs_map_kit_guide_map_drawing_map_heat_map_heat_md_d0e_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-heat/map-heat","title":"热力图","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-heat/map-heat.md","sourceDirName":"map-kit-guide/map-drawing/map-heat","slug":"/map-kit-guide/map-drawing/map-heat/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-heat/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"热力图","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-heat","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"瓦片图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-tile/"},"next":{"title":"矢量图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mvt-overlay/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-heat/map-heat.md


const frontMatter = {
	title: '热力图',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-heat',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '热力图';

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
        id: "热力图",
        children: "热力图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增热力图层，用于展示数据的分布情况。通过热力图功能，将数据用不同颜色的区块在地图上展示，可以直观地描述在地图上某个区域内人群或车辆的密度和分布情况。热力图适用于大数据密度可视化场景，如人流分布，热点区域等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持热力图功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729367)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["热力图功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#heatmapparams",
        children: "HeatmapParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addheatmap",
        children: "addHeatmap"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-heatmap/map-map-heatmap",
        children: "Heatmap"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-heatmap/map-map-heatmap",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-common/map-common#heatmapparams",
              children: "HeatmapParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热力图参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addheatmap",
              children: "addHeatmap"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#heatmapparams",
              children: "mapCommon.HeatmapParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-heatmap/map-map-heatmap",
              children: "Heatmap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增热力图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-heatmap/map-map-heatmap",
              children: "Heatmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热力图，支持修改和删除热力图，例如：支持设置颜色、设置透明度等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { map, mapCommon, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "增加热力图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct HeatMapDemo {\n  private TAG = \"OHMapSDK_HeatMapDemo\";\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 31.000000,\n          longitude: 118.000000\n        },\n        zoom: 11\n      }\n    }\n    this.callback = async (err, mapController) => {\n      console.info(this.TAG, \"mapCallback err=\" + JSON.stringify(err) +\n        \"; mapController=\" + JSON.stringify(mapController));\n      if (!err) {\n        this.mapController = mapController;\n        let data: mapCommon.WeightedLatLng[] = [];\n        // 生成500个随机坐标点，用于热力图数据\n        for (let i = 0; i < 500; i++) {\n          data.push({\n            point: {\n              longitude: 118.000000 + Math.random() * 1 - 0.25,\n              latitude: 31.000000 + Math.random() * 1 - 0.25\n            },\n            intensity: 1\n          });\n        }\n        let heatMapOptions: mapCommon.HeatmapParams = {\n          id: 'heatmap0001',\n          data:data,\n          radius:20,\n          intensity: {\n            2: 1,\n            5: 5,\n            8: 10\n          }\n        }\n        try {\n          // 添加热力图\n          await this.mapController?.addHeatmap(heatMapOptions);\n        } catch (e) {\n          console.error(this.TAG, `code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
729367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479045-d1ba879e3ca48697b19161b21f1c9fde.jpg");

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