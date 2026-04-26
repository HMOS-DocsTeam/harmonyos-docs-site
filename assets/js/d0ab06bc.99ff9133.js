"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["808674"], {
113805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_tile_map_tile_md_d0a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-tile-map-tile-md-d0a.json
var site_docs_map_kit_guide_map_drawing_map_tile_map_tile_md_d0a_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-tile/map-tile","title":"瓦片图层","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-tile/map-tile.md","sourceDirName":"map-kit-guide/map-drawing/map-tile","slug":"/map-kit-guide/map-drawing/map-tile/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-tile/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"瓦片图层","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-tile","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置地图元素压盖顺序","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-display-order/"},"next":{"title":"热力图","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-heat/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-tile/map-tile.md


const frontMatter = {
	title: '瓦片图层',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-tile',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '瓦片图层';

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
}, {
  "value": "支持瓦片数据缓存",
  "id": "支持瓦片数据缓存",
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
        id: "瓦片图层",
        children: "瓦片图层"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增瓦片图层（TileOverlay）, 该图层支持添加自有瓦片数据，包括在线下载和本地加载两种方式。该图层可随地图的平移、缩放、旋转等操作做相应的变换，它仅位于底图之上（即瓦片图层将会遮挡底图，不遮挡其他图层），瓦片图层的添加顺序不会影响其他图层的叠加关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过瓦片图层可对基础底层地图添加额外的特性，如：某个商场的室内信息、某个景区的详情等等。适用于开发者拥有某一区域的地图，并希望使用此区域地图覆盖相应位置的华为地图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.0.3(15)开始，支持瓦片图层功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持瓦片数据缓存功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(377309)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["瓦片图层功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayparams",
        children: "TileOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayoptions",
        children: "TileOverlayOptions"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addtileoverlay",
        children: "addTileOverlay"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-tileoverlay/map-map-tileoverlay",
        children: "TileOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-tileoverlay/map-map-tileoverlay",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayparams",
              children: "TileOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瓦片图层参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayoptions",
              children: "TileOverlayOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瓦片图层参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addtileoverlay",
              children: "addTileOverlay"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayparams",
              children: "mapCommon.TileOverlayParams"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#tileoverlayoptions",
              children: "mapCommon.TileOverlayOptions"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-tileoverlay/map-map-tileoverlay",
              children: "TileOverlay"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-tileoverlay/map-map-tileoverlay",
              children: "TileOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瓦片图层，支持更新和查询相关属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瓦片图层的绘制方式提供两种方式：在线下载和本地加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在线下载",
      children: "在线下载"
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
          children: "增加瓦片图层，在线下载方式需要设置在线瓦片的URL地址。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TileOverlayDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private tileOverlay?: map.TileOverlay;\n\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.98,\n          longitude: 118.7\n        },\n        zoom: 7\n      }\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let params: mapCommon.TileOverlayOptions = {\n          // 设置地图瓦片图层的地址，必须是以http或者https开头的URL且包含占位符{x}、{y}和{z}\n          // 需要替换为开发者自己的在线地址\n          tileUrl: \"https://xxx/xxx?x={x}&y={y}&z={z}\",\n          // 透明度\n          transparency: 0.5,\n          // 开启瓦片图层淡入\n          fadeIn: true\n        };\n        try {\n          this.tileOverlay = this.mapController?.addTileOverlay(params);\n        } catch (e) {\n          console.error(`code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n          .width('100%')\n          .height('100%')\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
          children: "增加本地瓦片图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TileOverlayDemo {\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private tileOverlay?: map.TileOverlay;\n\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 31.98,\n          longitude: 118.7\n        },\n        zoom: 7\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let tileOverlayOption: mapCommon.TileOverlayOptions = {\n          // 根据瓦片坐标获取瓦片，本地获取瓦片方式需开发者自行实现tileProvider方法\n          tileProvider: this.tileProviderMethod,\n          // 淡入淡出效果 true: 开启, false: 关闭\n          fadeIn: true,\n          // 透明度, 取值范围 0-1\n          transparency: 0.5,\n          // 可见性, true: 可见 false: 不可见\n          visible: true\n        }\n        if (this.mapController !== undefined) {\n          try {\n            this.tileOverlay = this.mapController.addTileOverlay(tileOverlayOption);\n          } catch (e) {\n            console.error(`code:${e.code}, message:${e.message}`);\n          }\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  // 需要开发者自实现tileProviderMethod方法，负责加载本地项目中的瓦片图资源\n  private tileProviderMethod(x: number, y: number, z: number): Promise<ArrayBuffer> {\n    return new Promise((resolve, reject) => {});\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持瓦片数据缓存",
      children: "支持瓦片数据缓存"
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
          children: "增加瓦片图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TileOverlayDemo {\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private tileOverlay?: map.TileOverlay;\n\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 48.87278,\n          longitude: 2.33016\n        },\n        zoom: 4\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let options: mapCommon.TileOverlayOptions = {\n          // 设置地图瓦片图层的地址，必须是以http或者https开头的URL且包含占位符{x}、{y}和{z}\n          // 需要替换为开发者自己的在线地址\n          tileUrl: \"https://xxx/xxx?x={x}&y={y}&z={z}\",\n          // 是否开启磁盘缓存 true: 开启, false: 关闭\n          diskCacheEnabled: true,\n          // 磁盘缓存大小 默认大小 20480KB, 单位KB\n          diskCacheSize: 20480,\n          // 存放磁盘缓存的沙箱路径\n          diskCachePath: this.getUIContext().getHostContext()?.databaseDir\n        };\n        if (this.mapController !== undefined) {\n          try {\n            this.tileOverlay = this.mapController.addTileOverlay(options);\n          } catch (e) {\n            console.error(`code:${e.code}, message:${e.message}`);\n          }\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  aboutToDisappear(): void {\n    if (this.tileOverlay) {\n      this.tileOverlay.remove();\n      // 清除内存缓存\n      this.tileOverlay.clearTileCache();\n      // 清除磁盘和内存缓存\n      this.tileOverlay.clearDiskCache();\n   }\n }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
377309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959044-b452e4af20fee3e28d792ddb31722b8d.jpg");

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