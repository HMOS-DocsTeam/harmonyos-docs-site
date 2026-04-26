"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885062"], {
539637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_3_dbuilding_map_3_dbuilding_md_2ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-3-dbuilding-map-3-dbuilding-md-2ae.json
var site_docs_map_kit_guide_map_drawing_map_3_dbuilding_map_3_dbuilding_md_2ae_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-3dbuilding/map-3dbuilding","title":"3D建筑","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-3dbuilding/map-3dbuilding.md","sourceDirName":"map-kit-guide/map-drawing/map-3dbuilding","slug":"/map-kit-guide/map-drawing/map-3dbuilding/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-3dbuilding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"3D建筑","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-3dbuilding","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"覆盖物","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-coverings/"},"next":{"title":"动态轨迹","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-dyntrajectories/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-3dbuilding/map-3dbuilding.md


const frontMatter = {
	title: '3D建筑',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-3dbuilding',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '3D建筑';

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
  "value": "添加3D建筑",
  "id": "添加3d建筑",
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
        id: "3d建筑",
        children: "3D建筑"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何在地图上绘制3D建筑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980688)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加3D建筑功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#buildingoverlayparams",
        children: "BuildingOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addbuildingoverlay",
        children: "addBuildingOverlay"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay",
        children: "BuildingOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#buildingoverlayparams",
              children: "BuildingOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D建筑参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addbuildingoverlay",
              children: "addBuildingOverlay"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#buildingoverlayparams",
              children: "mapCommon.BuildingOverlayParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay",
              children: "BuildingOverlay"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在地图上添加3D建筑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay",
              children: "BuildingOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D建筑，支持更新和查询相关属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加3d建筑",
      children: "添加3D建筑"
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
          children: "添加3D建筑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct BuildingOverlayDemo {\n  private TAG = \"OHMapSDK_BuildingOverlayDemo\";\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private buildingOverlay?: map.BuildingOverlay;\n\n  aboutToAppear(): void {\n    // 初始化地图参数\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.984794,\n          longitude: 118.765865\n        },\n        zoom: 18\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      console.info(this.TAG, \"addBuildingOverlay\");\n      if (!err) {\n        this.mapController = mapController;\n        let points: Array<mapCommon.LatLng> = [\n          {\n            latitude: 31.984794,\n            longitude: 118.765865\n          },\n          {\n            latitude: 31.98468,\n            longitude: 118.766076\n          },\n          {\n            latitude: 31.98472,\n            longitude: 118.766116\n          },\n          {\n            latitude: 31.98463,\n            longitude: 118.766292\n          },\n          {\n            latitude: 31.984586,\n            longitude: 118.766251\n          },\n          {\n            latitude: 31.984536,\n            longitude: 118.766344\n          },\n          {\n            latitude: 31.984633,\n            longitude: 118.766446\n          },\n          {\n            latitude: 31.9848,\n            longitude: 118.766285\n          },\n          {\n            latitude: 31.984925,\n            longitude: 118.766312\n          },\n          {\n            latitude: 31.985282,\n            longitude: 118.766661\n          },\n          {\n            latitude: 31.985438,\n            longitude: 118.766419\n          },\n          {\n            latitude: 31.985801,\n            longitude: 118.766755\n          },\n          {\n            latitude: 31.985856,\n            longitude: 118.766504\n          },\n          {\n            latitude: 31.985785,\n            longitude: 118.766434\n          },\n          {\n            latitude: 31.985821,\n            longitude: 118.766278\n          },\n          {\n            latitude: 31.985897,\n            longitude: 118.766311\n          },\n          {\n            latitude: 31.985944,\n            longitude: 118.766095\n          },\n          {\n            latitude: 31.985909,\n            longitude: 118.766069\n          },\n          {\n            latitude: 31.985794,\n            longitude: 118.765989\n          },\n          {\n            latitude: 31.9857,\n            longitude: 118.766029\n          },\n          {\n            latitude: 31.985658,\n            longitude: 118.766164\n          },\n          {\n            latitude: 31.985647,\n            longitude: 118.766271\n          },\n          {\n            latitude: 31.985574,\n            longitude: 118.766297\n          },\n          {\n            latitude: 31.985458,\n            longitude: 118.766285\n          },\n          {\n            latitude: 31.985271,\n            longitude: 118.766002\n          },\n          {\n            latitude: 31.985219,\n            longitude: 118.766002\n          },\n          {\n            latitude: 31.985135,\n            longitude: 118.766029\n          },\n          {\n            latitude: 31.985093,\n            longitude: 118.766083\n          },\n          {\n            latitude: 31.985019,\n            longitude: 118.766109\n          },\n          {\n            latitude: 31.984978,\n            longitude: 118.766083\n          },\n          {\n            latitude: 31.984794,\n            longitude: 118.765865\n          }\n        ];\n        points.reverse();\n        // 3D建筑参数\n        let buildingOverlayOptions: mapCommon.BuildingOverlayParams =\n          {\n            // 3D建筑的范围参数（点为顺时针绘制）\n            points: points,\n            // 3D建筑的高度\n            totalHeight: 51,\n            // 3D建筑的选中楼层高度\n            floorBottomHeight: 33,\n            // 3D建筑的顶部颜色\n            topFaceColor: 0xffa4b8f7,\n            // 3D建筑的侧面颜色\n            sideFaceColor: 0x44a4b8f7,\n            // 3D建筑的选中楼层颜色\n            floorColor: 0xff000000,\n            // 3D建筑的展示层级\n            showLevel: 14,\n            // 3D建筑选中楼层从底部升起的动画时长\n            animationDuration: 5000,\n            // 3D建筑侧面的纹理，需要替换您自己的资源图片，存放在resources/base/media目录下\n            sideTexture: { image: $r(\"app.media.side_tex\"), height: 3, width: 3 },\n            // 3D建筑选中楼层的纹理，需要替换您自己的资源图片，存放在resources/base/media目录下\n            floorTexture: { image: $r(\"app.media.floor_tex\"), height: 3, width: 3 }\n          };\n        let cameraUpdate = map.newCameraPosition({\n          target: {\n            latitude: 31.984794,\n            longitude: 118.765865\n          },\n          zoom: 18,\n          tilt: 70\n        });\n        // 将地图镜头移动到3D建筑区域\n        this.mapController?.moveCamera(cameraUpdate);\n        // 新建3D建筑\n        try {\n          this.buildingOverlay = await this.mapController?.addBuildingOverlay(buildingOverlayOptions);\n        } catch (e) {\n          console.error(`Failed to create the buildingOverlay, code is：${e.code}, message is ${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({\n          mapOptions: this.mapOptions,\n          mapCallback: this.callback,\n        }).width('100%').height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
980688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479043-39260f8f2aad127edcdbc1d575d8019b.gif");

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