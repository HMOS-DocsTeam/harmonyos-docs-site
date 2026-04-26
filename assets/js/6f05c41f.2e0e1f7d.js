"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["302667"], {
811758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_aggregate_map_aggregate_md_6f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-aggregate-map-aggregate-md-6f0.json
var site_docs_map_kit_guide_map_drawing_map_aggregate_map_aggregate_md_6f0_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-aggregate/map-aggregate","title":"点聚合","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-aggregate/map-aggregate.md","sourceDirName":"map-kit-guide/map-drawing/map-aggregate","slug":"/map-kit-guide/map-drawing/map-aggregate/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-aggregate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"点聚合","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-aggregate","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"气泡","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-bubble/"},"next":{"title":"覆盖物","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-coverings/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-aggregate/map-aggregate.md


const frontMatter = {
	title: '点聚合',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-aggregate',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '点聚合';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "点聚合",
        children: "点聚合"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将详细介绍如何基于地图数据实现点聚合功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以通过比例尺缩放自适应聚合效果，聚合图标可点击。聚合支持功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持按距离聚合", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-common/map-common#clusteritem",
          children: "ClusterItem"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持绘制聚合覆盖物的默认图标。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持绘制聚合覆盖物的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-common/map-common#getcustomicon",
          children: "自定义图标"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持监听聚合覆盖物的点击事件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持添加单个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-common/map-common#clusteritem",
          children: "ClusterItem"
        }), "到聚合覆盖物中。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持删除聚合覆盖物。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持移动地图时重绘聚合覆盖物。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.0.3(15)开始，支持聚合标记点击事件监听功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(649908)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["聚合功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#clusteroverlayparams",
        children: "ClusterOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addclusteroverlay",
        children: "addClusterOverlay"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay",
        children: "ClusterOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#clusteroverlayparams",
              children: "ClusterOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点聚合参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addclusteroverlay",
              children: "addClusterOverlay"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#clusteroverlayparams",
              children: "mapCommon.ClusterOverlayParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay",
              children: "ClusterOverlay"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聚合接口，支持节点聚合能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay",
              children: "ClusterOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点聚合，支持更新和查询相关属性。"
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
          children: "新增聚合图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ClusterOverlayDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.98,\n          longitude: 118.7\n        },\n        zoom: 7\n      }\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        // 生成待聚合点\n        let clusterItem1: mapCommon.ClusterItem = {\n          position: {\n            latitude: 31.98,\n            longitude: 118.7\n          }\n        };\n        let clusterItem2: mapCommon.ClusterItem = {\n          position: {\n            latitude: 32.99,\n            longitude: 118.9\n          }\n        };\n        let clusterItem3: mapCommon.ClusterItem = {\n          position: {\n            latitude: 31.5,\n            longitude: 118.7\n          }\n        };\n        let clusterItem4: mapCommon.ClusterItem = {\n          position: {\n            latitude: 30,\n            longitude: 118.7\n          }\n        };\n        let clusterItem5: mapCommon.ClusterItem = {\n          position: {\n            latitude: 29.98,\n            longitude: 117.7\n          }\n        };\n        let clusterItem6: mapCommon.ClusterItem = {\n          position: {\n            latitude: 31.98,\n            longitude: 120.7\n          }\n        };\n        let clusterItem7: mapCommon.ClusterItem = {\n          position: {\n            latitude: 25.98,\n            longitude: 119.7\n          }\n        };\n        let clusterItem8: mapCommon.ClusterItem = {\n          position: {\n            latitude: 30.98,\n            longitude: 110.7\n          }\n        };\n        let clusterItem9: mapCommon.ClusterItem = {\n          position: {\n            latitude: 30.98,\n            longitude: 115.7\n          }\n        };\n        let clusterItem10: mapCommon.ClusterItem = {\n          position: {\n            latitude: 28.98,\n            longitude: 122.7\n          }\n        };\n        let array: Array<mapCommon.ClusterItem> = [\n          clusterItem1,\n          clusterItem2,\n          clusterItem3,\n          clusterItem4,\n          clusterItem5,\n          clusterItem6,\n          clusterItem7,\n          clusterItem8,\n          clusterItem9,\n          clusterItem10\n        ]\n        for(let index = 0; index < 100; index++){\n          array.push(clusterItem1)\n        }\n        for(let index = 0; index < 10; index++){\n          array.push(clusterItem2)\n        }\n        // 生成聚合图层的入参 聚合distance设置为100vp\n        let clusterOverlayParams: mapCommon.ClusterOverlayParams = {\n          distance: 100,\n          clusterItems: array\n        };\n        try {\n          // 调用addClusterOverlay生成聚合图层\n          await this.mapController.addClusterOverlay(clusterOverlayParams);\n        } catch (e) {\n          console.error(`code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "聚合标记点击事件监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback1 = (markerClusterInfo: map.MarkerClusterInfo) => {\n  console.info(\"markerClusterClick\", `callback1 markerClusterInfo`);\n};\n// 添加监听\nclusterOverlay.on(\"markerClusterClick\", callback1);\n// 取消监听\nclusterOverlay.off(\"markerClusterClick\", callback1);\n"
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
649908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439087-d50722be318a106d8602ad97ef576009.jpg");

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