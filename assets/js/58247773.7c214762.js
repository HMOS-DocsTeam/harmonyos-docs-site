"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["214391"], {
599399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_map_api_map_arkts_map_map_map_map_traceoverlay_map_map_traceoverlay_md_582_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-map-api-map-arkts-map-map-map-map-traceoverlay-map-map-traceoverlay-md-582.json
var site_docs_ref_map_api_map_arkts_map_map_map_map_traceoverlay_map_map_traceoverlay_md_582_namespaceObject = JSON.parse('{"id":"map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay","title":"TraceOverlay","description":"导入模块","source":"@site/docs-ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay.md","sourceDirName":"map-api/map-arkts/map-map/map-map-traceoverlay","slug":"/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"title":"TraceOverlay","sidebar_position":25,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-traceoverlay","kit":"应用服务","last_updated":"2026-04-22","slug":"map-map-traceoverlay"},"sidebar":"ref","previous":{"title":"BuildingOverlay","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay"},"next":{"title":"MapArc","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-map/map-map-maparc/map-map-maparc"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay.md


const frontMatter = {
	title: 'TraceOverlay',
	sidebar_position: 25,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-traceoverlay',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'map-map-traceoverlay'
};
const contentTitle = 'TraceOverlay';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "TraceOverlay",
  "id": "traceoverlay-1",
  "level": 2
}, {
  "value": "getId",
  "id": "getid",
  "level": 3
}, {
  "value": "remove",
  "id": "remove",
  "level": 3
}, {
  "value": "pause",
  "id": "pause",
  "level": 3
}, {
  "value": "resume",
  "id": "resume",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "traceoverlay",
        children: "TraceOverlay"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { map, mapCommon } from '@kit.MapKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "traceoverlay-1",
      children: "TraceOverlay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态轨迹。"
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
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
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
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// marker1的参数\nlet markerOptions1: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.99227173519985,\n    longitude: 118.7622219990476\n  },\n  // 图标需存放在resources/base/media目录下\n  icon: $r(\"app.media.track_setting_sport_map_marker_22\"),\n  anchorU: 0.5,\n  anchorV: 1,\n  visible: true\n};\n// 新增marker1\nlet markerBoy1 = await this.mapController.addMarker(markerOptions1);\nlet boyImages1: map.PlayImageAnimation = new map.PlayImageAnimation();\nboyImages1.setDuration(1000);\nlet resourceArray: Array<Resource> = new Array();\nresourceArray.push($r(\"app.media.side_0\"));\nresourceArray.push($r(\"app.media.side_1\"));\nresourceArray.push($r(\"app.media.side_2\"));\nresourceArray.push($r(\"app.media.side_3\"));\nresourceArray.push($r(\"app.media.side_4\"));\nresourceArray.push($r(\"app.media.side_5\"));\nresourceArray.push($r(\"app.media.side_6\"));\nresourceArray.push($r(\"app.media.side_7\"));\nresourceArray.push($r(\"app.media.side_8\"));\nresourceArray.push($r(\"app.media.side_9\"));\nresourceArray.push($r(\"app.media.side_10\"));\nresourceArray.push($r(\"app.media.side_11\"));\nresourceArray.push($r(\"app.media.side_12\"));\nresourceArray.push($r(\"app.media.side_13\"));\nresourceArray.push($r(\"app.media.side_14\"));\nresourceArray.push($r(\"app.media.side_15\"));\nresourceArray.push($r(\"app.media.side_16\"));\nresourceArray.push($r(\"app.media.side_17\"));\nresourceArray.push($r(\"app.media.side_18\"));\nresourceArray.push($r(\"app.media.side_19\"));\nresourceArray.push($r(\"app.media.side_20\"));\nawait boyImages1.addImages(resourceArray);\nboyImages1.setRepeatCount(-1);\n\n// marker1添加动画\nmarkerBoy1.setAnimation(boyImages1);\nmarkerBoy1.startAnimation();\n\n// marker2的参数\nlet markerOptions2: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.99227173519985,\n    longitude: 118.7622219990476\n  },\n  // 图标需存放在resources/base/media目录下\n  icon: $r(\"app.media.track_setting_sport_map_marker_22\"),\n  anchorU: 0.5,\n  anchorV: 1,\n  visible: false\n};\n// 新增marker2\nlet markerBoy2 = await this.mapController.addMarker(markerOptions2);\nlet boyImages2: map.PlayImageAnimation = new map.PlayImageAnimation();\nboyImages2.setDuration(1000);\nlet resourceArray2: Array<Resource> = new Array();\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_000\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_001\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_002\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_003\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_004\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_005\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_006\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_007\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_008\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_009\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_010\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_011\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_012\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_013\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_014\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_015\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_016\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_017\"));\nresourceArray2.push($r(\"app.media.behavior_front_cycling_boy_018\"));\nawait boyImages2.addImages(resourceArray2);\nboyImages2.setRepeatCount(-1);\n// marker2添加动画\nmarkerBoy2.setAnimation(boyImages2);\nmarkerBoy2.startAnimation();\n\nlet points: Array<mapCommon.LatLng> = new Array();\npoints.push({ latitude: 31.99685233070878, longitude: 118.75846023442728 });\npoints.push({ latitude: 31.99671325810786, longitude: 118.75846738985165 });\npoints.push({ latitude: 31.99659191076709, longitude: 118.7585347621686 });\npoints.push({ latitude: 31.99648202537233, longitude: 118.7586266510386 });\npoints.push({ latitude: 31.99637707201552, longitude: 118.75872004590596 });\npoints.push({ latitude: 31.996278207010903, longitude: 118.75880449946251 });\npoints.push({ latitude: 31.996187481969695, longitude: 118.7588781960278 });\npoints.push({ latitude: 31.996092248919354, longitude: 118.75895330554488 });\npoints.push({ latitude: 31.995962740450565, longitude: 118.75904721407304 });\npoints.push({ latitude: 31.995792921394, longitude: 118.75916904998051 });\npoints.push({ latitude: 31.995601885713416, longitude: 118.7593235241019 });\npoints.push({ latitude: 31.995398221178277, longitude: 118.75949998588176 });\npoints.push({ latitude: 31.995185902197715, longitude: 118.7596871082939 });\npoints.push({ latitude: 31.994983473052656, longitude: 118.75987334062296 });\npoints.push({ latitude: 31.99482433699269, longitude: 118.76002095184032 });\npoints.push({ latitude: 31.994709073721708, longitude: 118.76012902920532 });\npoints.push({ latitude: 31.99460732100702, longitude: 118.76023892576234 });\npoints.push({ latitude: 31.99449284962087, longitude: 118.7603694232856 });\npoints.push({ latitude: 31.99435358179254, longitude: 118.76053622438056 });\npoints.push({ latitude: 31.99420771148339, longitude: 118.76072790126692 });\npoints.push({ latitude: 31.994075194901523, longitude: 118.7609100960977 });\npoints.push({ latitude: 31.993952686158877, longitude: 118.7610741329013 });\npoints.push({ latitude: 31.993840180644217, longitude: 118.7612193418965 });\npoints.push({ latitude: 31.993733787150244, longitude: 118.76135383115654 });\npoints.push({ latitude: 31.993617206525155, longitude: 118.76150529647698 });\n\n// 动态轨迹的入参\nlet traceOptions: mapCommon.TraceOverlayParams = {\n  // 轨迹点\n  points: points,\n  // 轨迹的动画时长\n  animationDuration: 5000,\n  // 相机是否跟随动画移动\n  isMapMoving: true,\n  // 轨迹的颜色\n  color: 0xAAFFAA00,\n  // 轨迹的宽度\n  width: 20,\n  // 轨迹的动画回调（回调轨迹点的index）\n  animationCallback: (pointIndex) => {\n    // 换成骑行\n    if (pointIndex === 10) {\n      markerBoy1.setVisible(false);\n      markerBoy2.setVisible(true);\n    }\n  }\n};\nlet markers: Array<map.Marker> = new Array();\nmarkers.push(markerBoy1, markerBoy2);\n// 新增轨迹点动画\nlet traceOverlay: map.TraceOverlay = await this.mapController.addTraceOverlay(traceOptions, markers);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getid",
      children: "getId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getId(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回动态轨迹的ID。"
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
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
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
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回动态轨迹的ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let id: string = traceOverlay.getId();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove",
      children: "remove"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "remove(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除动态轨迹。"
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
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
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
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "traceOverlay.remove();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pause",
      children: "pause"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pause(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停动态轨迹回放。"
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
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
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
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "traceOverlay.pause();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume",
      children: "resume"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resume(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复动态轨迹回放。"
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
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
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
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "traceOverlay.resume();\n"
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