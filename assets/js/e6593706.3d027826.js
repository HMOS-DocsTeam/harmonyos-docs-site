"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67717"], {
976850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_dyntrajectories_map_dyntrajectories_md_e65_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-dyntrajectories-map-dyntrajectories-md-e65.json
var site_docs_map_kit_guide_map_drawing_map_dyntrajectories_map_dyntrajectories_md_e65_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-dyntrajectories/map-dyntrajectories","title":"动态轨迹","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-dyntrajectories/map-dyntrajectories.md","sourceDirName":"map-kit-guide/map-drawing/map-dyntrajectories","slug":"/map-kit-guide/map-drawing/map-dyntrajectories/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-dyntrajectories/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"动态轨迹","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-dyntrajectories","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"3D建筑","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-3dbuilding/"},"next":{"title":"设置地图元素压盖顺序","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-display-order/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-dyntrajectories/map-dyntrajectories.md


const frontMatter = {
	title: '动态轨迹',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-dyntrajectories',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '动态轨迹';

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
        id: "动态轨迹",
        children: "动态轨迹"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何在地图上绘制动态轨迹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417567)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绘制动态轨迹功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#traceoverlayparams",
        children: "TraceOverlayParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addtraceoverlay",
        children: "addTraceOverlay"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
        children: "Marker"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay",
        children: "TraceOverlay"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#traceoverlayparams",
              children: "TraceOverlayParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态轨迹参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addtraceoverlay",
              children: "addTraceOverlay"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#traceoverlayparams",
              children: "mapCommon.TraceOverlayParams"
            }), ", markers?: Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            }), ">): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay",
              children: "TraceOverlay"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制动态轨迹。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态轨迹的一组标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay",
              children: "TraceOverlay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态轨迹，支持暂停和删除等功能。"
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
          children: "绘制动态轨迹。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TraceOverlayDemo {\n  private TAG = \"OHMapSDK_TraceOverlayDemo\";\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    // 初始化地图参数\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.99227173519985,\n          longitude: 118.7622219990476\n        },\n        zoom: 16\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      console.info(this.TAG, \"mapCallback err=\" + JSON.stringify(err) +\n        \"; mapController=\" + JSON.stringify(mapController));\n      if (!err) {\n        this.mapController = mapController;\n        // marker1的参数\n        let markerOptions1: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 31.99227173519985,\n            longitude: 118.7622219990476\n          },\n          icon: $r(\"app.media.track_setting_sport_map_marker_22\"),\n          anchorU: 0.5,\n          anchorV: 1,\n          visible: true\n        };\n        // 新增marker1\n        let markerBoy1 = await this.mapController.addMarker(markerOptions1);\n        let boyImages1: map.PlayImageAnimation = new map.PlayImageAnimation();\n        boyImages1.setDuration(1000);\n        let resourceArray: Array<Resource> = new Array();\n        // 需要替换您自己的资源图片，存放在resources/base/media目录下\n        resourceArray.push($r(\"app.media.side_0\"));\n        resourceArray.push($r(\"app.media.side_1\"));\n        resourceArray.push($r(\"app.media.side_2\"));\n        resourceArray.push($r(\"app.media.side_3\"));\n        resourceArray.push($r(\"app.media.side_4\"));\n        resourceArray.push($r(\"app.media.side_5\"));\n        resourceArray.push($r(\"app.media.side_6\"));\n        resourceArray.push($r(\"app.media.side_7\"));\n        resourceArray.push($r(\"app.media.side_8\"));\n        resourceArray.push($r(\"app.media.side_9\"));\n        resourceArray.push($r(\"app.media.side_10\"));\n        resourceArray.push($r(\"app.media.side_11\"));\n        resourceArray.push($r(\"app.media.side_12\"));\n        resourceArray.push($r(\"app.media.side_13\"));\n        resourceArray.push($r(\"app.media.side_14\"));\n        resourceArray.push($r(\"app.media.side_15\"));\n        resourceArray.push($r(\"app.media.side_16\"));\n        resourceArray.push($r(\"app.media.side_17\"));\n        resourceArray.push($r(\"app.media.side_18\"));\n        resourceArray.push($r(\"app.media.side_19\"));\n        resourceArray.push($r(\"app.media.side_20\"));\n        await boyImages1.addImages(resourceArray);\n        boyImages1.setRepeatCount(-1);\n\n        // marker1添加动画\n        markerBoy1.setAnimation(boyImages1);\n        markerBoy1.startAnimation();\n\n        // marker2的参数\n        let markerOptions2: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 31.99227173519985,\n            longitude: 118.7622219990476\n          },\n          icon: $r(\"app.media.track_setting_sport_map_marker_22\"),\n          anchorU: 0.5,\n          anchorV: 1,\n          visible: false\n        };\n        // 新增marker2\n        let markerBoy2 = await this.mapController.addMarker(markerOptions2);\n        let boyImages2: map.PlayImageAnimation = new map.PlayImageAnimation();\n        boyImages2.setDuration(1000);\n        let resourceArray2: Array<Resource> = new Array();\n        // 需要替换您自己的资源图片，存放在resources/base/media目录下\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_000\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_001\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_002\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_003\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_004\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_005\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_006\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_007\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_008\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_009\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_010\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_011\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_012\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_013\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_014\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_015\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_016\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_017\"));\n        resourceArray2.push($r(\"app.media.behavior_front_cycling_boy_018\"));\n        await boyImages2.addImages(resourceArray2);\n        boyImages2.setRepeatCount(-1);\n        // marker2添加动画\n        markerBoy2.setAnimation(boyImages2);\n        markerBoy2.startAnimation();\n\n        let points: Array<mapCommon.LatLng> = new Array();\n        points.push({ latitude: 31.99685233070878, longitude: 118.75846023442728 });\n        points.push({ latitude: 31.99671325810786, longitude: 118.75846738985165 });\n        points.push({ latitude: 31.99659191076709, longitude: 118.7585347621686 });\n        points.push({ latitude: 31.99648202537233, longitude: 118.7586266510386 });\n        points.push({ latitude: 31.99637707201552, longitude: 118.75872004590596 });\n        points.push({ latitude: 31.996278207010903, longitude: 118.75880449946251 });\n        points.push({ latitude: 31.996187481969695, longitude: 118.7588781960278 });\n        points.push({ latitude: 31.996092248919354, longitude: 118.75895330554488 });\n        points.push({ latitude: 31.995962740450565, longitude: 118.75904721407304 });\n        points.push({ latitude: 31.995792921394, longitude: 118.75916904998051 });\n        points.push({ latitude: 31.995601885713416, longitude: 118.7593235241019 });\n        points.push({ latitude: 31.995398221178277, longitude: 118.75949998588176 });\n        points.push({ latitude: 31.995185902197715, longitude: 118.7596871082939 });\n        points.push({ latitude: 31.994983473052656, longitude: 118.75987334062296 });\n        points.push({ latitude: 31.99482433699269, longitude: 118.76002095184032 });\n        points.push({ latitude: 31.994709073721708, longitude: 118.76012902920532 });\n        points.push({ latitude: 31.99460732100702, longitude: 118.76023892576234 });\n        points.push({ latitude: 31.99449284962087, longitude: 118.7603694232856 });\n        points.push({ latitude: 31.99435358179254, longitude: 118.76053622438056 });\n        points.push({ latitude: 31.99420771148339, longitude: 118.76072790126692 });\n        points.push({ latitude: 31.994075194901523, longitude: 118.7609100960977 });\n        points.push({ latitude: 31.993952686158877, longitude: 118.7610741329013 });\n        points.push({ latitude: 31.993840180644217, longitude: 118.7612193418965 });\n        points.push({ latitude: 31.993733787150244, longitude: 118.76135383115654 });\n        points.push({ latitude: 31.993617206525155, longitude: 118.76150529647698 });\n\n        // 动态轨迹的入参\n        let traceOptions: mapCommon.TraceOverlayParams = {\n          // 轨迹点\n          points: points,\n          // 轨迹的动画时长\n          animationDuration: 5000,\n          // 相机是否跟随动画移动\n          isMapMoving: true,\n          // 轨迹的颜色\n          color: 0xAAFFAA00,\n          // 轨迹的宽度\n          width: 20,\n          // 轨迹的动画回调（回调轨迹点的index）\n          animationCallback: (pointIndex) => {\n            // 换成骑行\n            if (pointIndex === 10) {\n              markerBoy1.setVisible(false);\n              markerBoy2.setVisible(true);\n            }\n          }\n        }\n        let markers: Array<map.Marker> = new Array();\n        markers.push(markerBoy1, markerBoy2);\n        // 新增轨迹点动画\n        try {\n          let traceOverlay = await this.mapController.addTraceOverlay(traceOptions, markers);\n        } catch (e) {\n          console.error(`Failed to create the traceOverlay, code is：${e.code}, message is ${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({\n          mapOptions: this.mapOptions,\n          mapCallback: this.callback,\n        }).width('100%').height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
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
417567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799394-94ca24ccd854261fa18dbdd89cb2cb74.gif");

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