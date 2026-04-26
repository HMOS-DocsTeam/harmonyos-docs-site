"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["882084"], {
638911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_flow_field_map_flow_field_md_57d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-flow-field-map-flow-field-md-57d.json
var site_docs_map_kit_guide_map_drawing_map_flow_field_map_flow_field_md_57d_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-flow-field/map-flow-field","title":"流场图层","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-flow-field/map-flow-field.md","sourceDirName":"map-kit-guide/map-drawing/map-flow-field","slug":"/map-kit-guide/map-drawing/map-flow-field/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-flow-field/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"流场图层","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-flow-field","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"矢量图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mvt-overlay/"},"next":{"title":"海量点图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mass-point/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-flow-field/map-flow-field.md


const frontMatter = {
	title: '流场图层',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-flow-field',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '流场图层';

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
  "value": "添加流场图层",
  "id": "添加流场图层",
  "level": 3
}, {
  "value": "流场数据格式参考",
  "id": "流场数据格式参考",
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
        id: "流场图层",
        children: "流场图层"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增流场图层，用于在基础地图之上叠加数据。通常用于实时展示天气风场、洋流等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持流场图层功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(864967)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["流场图层功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#flowfieldoverlayparams",
        children: "FlowFieldOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addflowfieldoverlay",
        children: "addFlowFieldOverlay"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-flowfieldoverlay/map-map-flowfieldoverlay",
        children: "FlowFieldOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-flowfieldoverlay/map-map-flowfieldoverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#flowfieldoverlayparams",
              children: "FlowFieldOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流场覆盖物参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addflowfieldoverlay",
              children: "addFlowFieldOverlay"
            }), "(params: mapCommon.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#flowfieldoverlayparams",
              children: "FlowFieldOverlayParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-flowfieldoverlay/map-map-flowfieldoverlay",
              children: "FlowFieldOverlay"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增流场覆盖物。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-flowfieldoverlay/map-map-flowfieldoverlay",
              children: "FlowFieldOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流场覆盖物管理对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加流场图层",
      children: "添加流场图层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { mapCommon, map, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制流场图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MapFlowFieldOverlayDemo {\n  private TAG = \"OHMapSDK_MapFlowFieldOverlayDemo\";\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private fieldOverlay?: map.FlowFieldOverlay;\n\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 31.984410259206815,\n          longitude: 118.76625379397866\n        },\n        zoom: 4\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let params: mapCommon.FlowFieldOverlayParams = {\n          // data为GRIB2规范的json数据，需开发者自行传输，可参考流场数据格式\n          data:\n          `[{\n            \"header\": {\n              \"parameterUnit\": \"m.s-1\",\n              \"parameterNumber\": 2,\n              \"dx\": 10,\n              \"dy\": 20,\n              \"parameterNumberName\": \"U-component-wind\",\n              \"la2\": -90,\n              \"la1\": 90,\n              \"parameterCategory\": 2,\n              \"lo1\": 0,\n              \"lo2\": 359.75,\n              \"ny\": 4,\n              \"nx\": 4,\n              \"numberPoints\": 16\n            },\n            \"data\": [2, 2, 2, 2, 2, 2, 2, 2, -10, -10, -1, -1, -1, -1, -3, 2]\n          }, {\n            \"header\": {\n              \"parameterUnit\": \"m.s-1\",\n              \"parameterNumber\": 3,\n              \"dx\": 4,\n              \"dy\": 4,\n              \"parameterNumberName\": \"U-component-wind\",\n              \"la2\": -90,\n              \"la1\": 90,\n              \"parameterCategory\": 2,\n              \"lo1\": 0,\n              \"lo2\": 359.75,\n              \"ny\": 4,\n              \"nx\": 4,\n              \"numberPoints\": 16\n            },\n            \"data\": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -2, -3, -1]\n          }]`,\n          style: {\n            count: 10000,\n            color: 0xff0000ff,\n            maxSpeed: 100,\n            speedFactor: 1\n          }\n        };\n\n        try {\n          // 添加流场图层\n          this.fieldOverlay = await this.mapController?.addFlowFieldOverlay(params);\n        } catch (e) {\n          console.error(this.TAG, `code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "流场数据格式参考",
      children: "流场数据格式参考"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#flowfieldoverlayparams",
        children: "FlowFieldOverlayParams"
      }), "类的data参数格式为GRIB2规范的json数据。GRIB2是一种由世界气象组织（WMO）定义的二进制数据格式，主要用于存储和传输气象和气候数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  // header表示数据的整体信息，data表示横向速度\n  {\"header\":{},\"data\":[]},\n  // header表示数据的整体信息，data表示纵向速度\n  {\"header\":{},\"data\":[]}\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是风场数据的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[{\n  \"header\": {\n    \"parameterUnit\": \"m.s-1\",   // 风速单位\n    \"parameterNumber\": 2,       // 风速方向，2为U方向（横向），3为V方向（纵向）\n    \"dx\": 10,                   // 横向步长，即每个格子占用的经度值，类型为整数\n    \"dy\": 20,                   // 纵向步长，即每个格子占用的纬度值，类型为整数\n    \"parameterNumberName\": \"U-component-wind\",   // 风速方向名称，U方向\n    \"la2\": -90,                 // 纬度范围，la2需要小于la1\n    \"la1\": 90,                  // 纬度范围，la2需要小于la1\n    \"parameterCategory\": 2,     // 数据类别\n    \"lo1\": 0,                   // 经度范围，lo1需要小于lo2\n    \"lo2\": 359.75,              // 经度范围，lo1需要小于lo2\n    \"nx\": 4,                    // 横向格子数量，类型为整数\n    \"ny\": 4,                    // 纵向格子数量，类型为整数\n    \"numberPoints\": 16          // 表示风速的点数量，即单个data中的数据量\n  },\n  // 横向速度，数据量需等于numberPoints\n  \"data\": [2, 2, 2, 2, 2, 2, 2, 2, -10, -10, -1, -1, -1, -1, -3, 2]\n}, {\n  \"header\": {\n    \"parameterUnit\": \"m.s-1\",   // 风速单位\n    \"parameterNumber\": 3,       // 风速方向，2为U方向（横向），3为V方向（纵向）\n    \"dx\": 4,                    // 横向步长，即每个格子占用的经度值，类型为整数\n    \"dy\": 4,                    // 纵向步长，即每个格子占用的纬度值，类型为整数\n    \"parameterNumberName\": \"V-component-wind\",   // 风速方向名称，V方向\n    \"la2\": -90,                 // 纬度范围，la2需要小于la1\n    \"la1\": 90,                  // 纬度范围，la2需要小于la1\n    \"parameterCategory\": 2,     // 数据类别\n    \"lo1\": 0,                   // 经度范围，lo1需要小于lo2\n    \"lo2\": 359.75,              // 经度范围，lo1需要小于lo2\n    \"nx\": 4,                    // 横向格子数量，类型为整数\n    \"ny\": 4,                    // 纵向格子数量，类型为整数\n    \"numberPoints\": 16          // 表示风速的点数量，即单个data中的数据量\n  },\n  // 横向速度，数据量需等于numberPoints\n  \"data\": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -2, -3, -1]\n}]\n"
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
864967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439091-e6be8067749d3c26f2dc1b54dbbd6f2f.gif");

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