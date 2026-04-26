"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["561227"], {
750790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_display_order_map_display_order_md_106_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-display-order-map-display-order-md-106.json
var site_docs_map_kit_guide_map_drawing_map_display_order_map_display_order_md_106_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-display-order/map-display-order","title":"设置地图元素压盖顺序","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-display-order/map-display-order.md","sourceDirName":"map-kit-guide/map-drawing/map-display-order","slug":"/map-kit-guide/map-drawing/map-display-order/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-display-order/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"设置地图元素压盖顺序","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-display-order","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态轨迹","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-dyntrajectories/"},"next":{"title":"瓦片图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-tile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-display-order/map-display-order.md


const frontMatter = {
	title: '设置地图元素压盖顺序',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-display-order',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '设置地图元素压盖顺序';

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
        id: "设置地图元素压盖顺序",
        children: "设置地图元素压盖顺序"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何设置地图元素的层级压盖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置地图元素的显示顺序，按照从低到高排列，即后面的地图元素会压盖前面的地图元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39898)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 地图元素类型压盖顺序"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OVERLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["覆盖物，包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcircle/map-map-mapcircle",
              children: "MapCircle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mappolygon/map-map-mappolygon",
              children: "MapPolygon"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
              children: "MapPolyline"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-maparc/map-map-maparc",
              children: "MapArc"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-imageoverlay/map-map-imageoverlay",
              children: "ImageOverlay"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay",
              children: "TraceOverlay"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["底图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#poi",
              children: "Poi"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUSTOM_POI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持碰撞的覆盖物，包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
              children: "PointAnnotation"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-bubble/map-map-bubble",
              children: "Bubble"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MARKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay",
              children: "ClusterOverlay"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置层级压盖关系功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mapelementtype",
        children: "MapElementType"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setdisplayorder",
        children: "setDisplayOrder"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setdisplayorder",
        children: "接口文档"
      }), "。"]
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
              href: "/ref/map-api/map-arkts/map-common/map-common#mapelementtype",
              children: "mapCommon.MapElementType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图元素类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setdisplayorder",
              children: "setDisplayOrder"
            }), "(types: Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mapelementtype",
              children: "mapCommon.MapElementType"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图元素的显示顺序。"
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
            children: "import { mapCommon, map, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置地图元素层级压盖关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MarkerDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapEventManager?: map.MapEventManager;\n  private marker?: map.Marker;\n  private bubble?: map.Bubble;\n\n  aboutToAppear(): void {\n    // 地图初始化参数\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.984410259206815,\n          longitude: 118.26625379397866\n        },\n        zoom: 10\n      }\n    };\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        // Marker初始化参数\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 31.984410259206815,\n            longitude: 118.26625379397866\n          },\n          rotation: 0,\n          visible: true,\n          zIndex: 0,\n          alpha: 1,\n          anchorU: 0.5,\n          anchorV: 1,\n          clickable: true,\n          draggable: true,\n          flat: false\n        };\n        // 创建Marker\n        try {\n          this.marker = await this.mapController.addMarker(markerOptions);\n        } catch (e) {\n          console.error(`Failed to create the marker, code is：${e.code}, message is ${e.message}`);\n        }\n        let bubbleOptions: mapCommon.BubbleParams = {\n          // 气泡位置\n          positions: [[{\n            latitude: 32.384410259206815,\n            longitude: 118.26625379397866\n          }]],\n          // 设置图标，必须提供4个方向的图标，图标存放在resources/rawfile\n          icons: [\n            'speed_limit_10.png',\n            'speed_limit_20.png',\n            'speed_limit_30.png',\n            'speed_limit_40.png'\n          ],\n          // 定义气泡的显示属性，为true时，在被碰撞后仍能显示\n          forceVisible: true,\n          // 定义气泡碰撞优先级，数值越大，优先级越低\n          priority: 3,\n          // 定义气泡展示的最小层级\n          minZoom: 2,\n          // 定义气泡展示的最大层级\n          maxZoom: 20,\n          // 定义气泡是否可见\n          visible: true,\n          // 定义气泡叠加层级属性\n          zIndex: 1\n        }\n        // 添加气泡\n        try {\n          this.bubble = await this.mapController.addBubble(bubbleOptions);\n        } catch (e) {\n          console.error(`Failed to create the bubble, code is：${e.code}, message is ${e.message}`);\n        }\n        let imageOverlayParams: mapCommon.ImageOverlayParams = {\n          // 覆盖物范围\n          bounds: {\n            southwest: {\n              latitude: 32,\n              longitude: 118\n            },\n            northeast: {\n              latitude: 32.4,\n              longitude: 118.4\n            }\n          },\n          // 覆盖物图片\n          image: 'icon/icon.png',\n          transparency: 0.3,\n          zIndex: 101,\n          anchorU: 0.5,\n          anchorV: 0.5,\n          clickable: true,\n          visible: true,\n          bearing: 0\n        };\n        // 添加覆盖物\n        try {\n          await this.mapController?.addImageOverlay(imageOverlayParams);\n        } catch (e) {\n          console.error(`Failed to create the imageOverlay, code is：${e.code}, message is ${e.message}`);\n        }\n\n        // 设置压盖顺序，最底层的是覆盖物，后面依次是POI、支持碰撞的覆盖物和Marker，Marker在最表面一层\n        let mapElementTypeArr: Array<mapCommon.MapElementType> = [\n          mapCommon.MapElementType.OVERLAY,\n          mapCommon.MapElementType.POI,\n          mapCommon.MapElementType.CUSTOM_POI,\n          mapCommon.MapElementType.MARKER];\n        this.mapController.setDisplayOrder(mapElementTypeArr);\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
39898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439089-7f264338475044e619a8040c9a8de50e.jpg");

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