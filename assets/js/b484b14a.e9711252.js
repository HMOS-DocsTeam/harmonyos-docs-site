"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["113736"], {
904838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_mvt_overlay_map_mvt_overlay_md_b48_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-mvt-overlay-map-mvt-overlay-md-b48.json
var site_docs_map_kit_guide_map_drawing_map_mvt_overlay_map_mvt_overlay_md_b48_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-mvt-overlay/map-mvt-overlay","title":"矢量图层","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-mvt-overlay/map-mvt-overlay.md","sourceDirName":"map-kit-guide/map-drawing/map-mvt-overlay","slug":"/map-kit-guide/map-drawing/map-mvt-overlay/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mvt-overlay/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"矢量图层","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-mvt-overlay","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"热力图","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-heat/"},"next":{"title":"流场图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-flow-field/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-mvt-overlay/map-mvt-overlay.md


const frontMatter = {
	title: '矢量图层',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-mvt-overlay',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '矢量图层';

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
  "value": "在线下载",
  "id": "在线下载",
  "level": 3
}, {
  "value": "本地加载",
  "id": "本地加载",
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
        id: "矢量图层",
        children: "矢量图层"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增矢量图层，用于在基础地图之上叠加矢量数据。通过矢量图层可对基础底层地图添加额外的特性，如：实时展示全球或区域的天气状况等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持矢量图层功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912917)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "852",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["矢量图层功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mvtoverlayparams",
        children: "MvtOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmvtoverlay",
        children: "addMvtOverlay"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mvtoverlay/map-map-mvtoverlay",
        children: "MvtOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mvtoverlay/map-map-mvtoverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#mvtoverlayparams",
              children: "MvtOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矢量图层的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmvtoverlay",
              children: "addMvtOverlay"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mvtoverlayparams",
              children: "mapCommon.MvtOverlayParams"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mvtoverlay/map-map-mvtoverlay",
              children: "MvtOverlay"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加矢量图层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mvtoverlay/map-map-mvtoverlay",
              children: "MvtOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矢量图层管理对象，支持添加和删除图层。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矢量图层的绘制方式提供两种方式：在线下载和本地加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在线下载",
      children: "在线下载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用在线下载绘制矢量图层之前，请在应用的module.json5文件中配置访问网络的权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\" : {\n    // ...\n    \"requestPermissions\":[\n      {\n        // 允许应用使用Internet网络。\n        \"name\": \"ohos.permission.INTERNET\",\n        \"usedScene\": {\n          \"when\": \"always\"\n        }\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { mapCommon, map, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制矢量图层。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["矢量图层支持的数据源类型为通用矢量瓦片格式（PBF/MVT）。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-common/map-common#mvtoverlayparams",
            children: "MvtOverlayParams"
          }), "类中的layers参数，其中sourceLayer、fillColor/fillOpacity默认值从矢量数据里获取，也可自己设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MvtOverlayDemo {\n  private TAG = 'OHMapSDK_MvtOverlayDemo';\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 35.899780,\n          longitude: 107.766172\n        },\n        zoom: 6\n      },\n      scaleControlsEnabled: true\n    }\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let params: mapCommon.MvtOverlayParams = {\n          source: {\n            // 设置矢量图层的地址,必须是以http或者https开头的URL且包含占位符{x}、{y}和{z}\n            tileUrl: 'http://xxx/tiles/{z}/{x}/{y}.pbf',\n            minZoom: 2,\n            maxZoom: 15\n          },\n          layers: [{\n            id: 'layer-map',\n            type: mapCommon.MvtLayerType.FILL,\n            // 对应矢量图层数据中图层的name字段\n            sourceLayer: 'XX',\n            paint: {\n              fillColor: {\n                operator: mapCommon.Operator.GET,\n                args: 'fill'\n              },\n              fillOpacity: {\n                operator: mapCommon.Operator.GET,\n                args: 'fill-opacity'\n              }\n            }\n          }]\n        }\n        try {\n          this.mapController?.addMvtOverlay(params);\n        } catch (e) {\n          console.error(this.TAG, `code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%')\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "本地加载",
      children: "本地加载"
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
          children: "增加本地矢量图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MvtOverlayDemo {\n  private TAG = 'OHMapSDK_MvtOverlayDemo';\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 35.899780,\n          longitude: 107.766172\n        },\n        zoom: 6\n      },\n      scaleControlsEnabled: true\n    }\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let params: mapCommon.MvtOverlayParams = {\n          source: {\n            // 根据矢量坐标获取矢量图层，本地获取矢量图层方式需开发者自行实现tileProvider方法\n            tileProvider: this.tileProviderMethod,\n            minZoom: 2,\n            maxZoom: 15\n          },\n          layers: [{\n            id: 'layer-map',\n            type: mapCommon.MvtLayerType.FILL,\n            // 对应矢量图层数据中图层的name字段\n            sourceLayer: 'XX',\n            paint: {\n              fillColor: {\n                operator: mapCommon.Operator.GET,\n                args: 'fill'\n              },\n              fillOpacity: {\n                operator: mapCommon.Operator.GET,\n                args: 'fill-opacity'\n              }\n            }\n          }]\n        }\n        try {\n          this.mapController?.addMvtOverlay(params);\n        } catch (e) {\n          console.error(this.TAG, `code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  // 需要开发者自行实现tileProviderMethod方法，负责加载本地项目中的矢量图层资源\n  private tileProviderMethod(x: number, y: number, z: number): Promise<ArrayBuffer> {\n    return new Promise((resolve, reject) => {});\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%')\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
912917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799396-9cbf47bfba09d244a12ac3760ee4df29.gif");

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