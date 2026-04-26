"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["180435"], {
340757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_mass_point_map_mass_point_md_25d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-mass-point-map-mass-point-md-25d.json
var site_docs_map_kit_guide_map_drawing_map_mass_point_map_mass_point_md_25d_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-mass-point/map-mass-point","title":"海量点图层","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-mass-point/map-mass-point.md","sourceDirName":"map-kit-guide/map-drawing/map-mass-point","slug":"/map-kit-guide/map-drawing/map-mass-point/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mass-point/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"海量点图层","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-mass-point","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"流场图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-flow-field/"},"next":{"title":"POI搜索","permalink":"/harmonyos-docs-site/map-kit-guide/map-location-services/map-site-search/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-mass-point/map-mass-point.md


const frontMatter = {
	title: '海量点图层',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-mass-point',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '海量点图层';

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
  "value": "添加海量点图层",
  "id": "添加海量点图层",
  "level": 3
}, {
  "value": "海量点点击事件",
  "id": "海量点点击事件",
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
        id: "海量点图层",
        children: "海量点图层"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增海量点图层，用于批量展示坐标点数据。海量点图层支持处理的点数量级跨度较大，从几十个点至十万个点都可以应用海量点图层进行处理，本章节将向您介绍如何在地图上绘制海量点图层。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持海量点图层功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714900)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["海量点图层功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#masspointoverlayparams",
        children: "MassPointOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmasspointoverlay",
        children: "addMassPointOverlay"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay",
        children: "MassPointOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#masspointoverlayparams",
              children: "MassPointOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "海量点参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmasspointoverlay",
              children: "addMassPointOverlay"
            }), "(params: mapCommon.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#masspointoverlayparams",
              children: "MassPointOverlayParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay",
              children: "MassPointOverlay"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增海量点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay",
              children: "MassPointOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "海量点管理对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加海量点图层",
      children: "添加海量点图层"
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
          children: "绘制海量点图层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MassPointOverlayDemo {\n  private TAG = 'OHMapSDK_MassPointOverlayDemo';\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private massPointOverlay?: map.MassPointOverlay;\n  @State currentTimestamp: number = 0;\n  @State mapHeight: string = '65%'\n  @State mapWidth: string = '100%'\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 32.11111,\n          longitude: 118.11111\n        },\n        zoom: 9\n      },\n      scaleControlsEnabled: true\n    }\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let items: mapCommon.MassPointItem[] = [];\n        for (let i = 0; i < 1000; i++) {\n          // 将海量点存入items\n          items.push({\n            itemId: 'test' + i,\n            position: {\n              longitude: 118.11111 + Math.random() * 1 - 0.5,\n              latitude: 32.11111 + Math.random() * 1 - 0.5\n            },\n            snippet: 'test' + i,\n            title: 'test' + i\n          })\n        }\n        let params: mapCommon.MassPointOverlayParams = {\n          id: 'test',\n          items: items,\n          // 图标存放在resources/rawfile，icon参数传入rawfile文件夹下的相对路径\n          icon: 'icon/maps_blue_dot.png'\n        }\n        try {\n          this.massPointOverlay = await this.mapController?.addMassPointOverlay(params);\n        } catch (e) {\n          console.error(this.TAG, `code:${e.code}, message:${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback, })\n          .width(this.mapWidth)\n          .height(this.mapHeight);\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "海量点点击事件",
      children: "海量点点击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 初始化地图组件的监听事件管理接口\nlet mapEventManager = this.mapController?.getEventManager();\nlet massCallback: map.MassPointOverlayCallback = (overlay, item) => {\n  console.info(`overlayId:${overlay.getId()},item :${JSON.stringify(item)}`);\n}\n// 启动海量点点击事件监听\nmapEventManager.on('massPointOverlayClick', massCallback);\n// 停止海量点点击事件监听,传入指定callback\nmapEventManager.off('massPointOverlayClick', massCallback);\n// 停止所有海量点点击事件监听，无需传入callback\nmapEventManager.off('massPointOverlayClick');\n"
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
714900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959046-e9aa33b75365f224b003957c7c4942cb.jpg");

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