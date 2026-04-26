"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["151970"], {
199707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_polyline_map_polyline_md_972_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-polyline-map-polyline-md-972.json
var site_docs_map_kit_guide_map_drawing_map_polyline_map_polyline_md_972_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-polyline/map-polyline","title":"折线","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-polyline/map-polyline.md","sourceDirName":"map-kit-guide/map-drawing/map-polyline","slug":"/map-kit-guide/map-drawing/map-polyline/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-polyline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"折线","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-polyline","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标记","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-marker/"},"next":{"title":"弧线","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-arc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-polyline/map-polyline.md


const frontMatter = {
	title: '折线',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-polyline',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '折线';

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
  "value": "添加折线",
  "id": "添加折线",
  "level": 3
}, {
  "value": "设置折线分段颜色",
  "id": "设置折线分段颜色",
  "level": 3
}, {
  "value": "设置折线可渐变",
  "id": "设置折线可渐变",
  "level": 3
}, {
  "value": "绘制纹理",
  "id": "绘制纹理",
  "level": 3
}, {
  "value": "折线设置分段纹理",
  "id": "折线设置分段纹理",
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
        id: "折线",
        children: "折线"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何在地图上绘制折线、设置折线分段颜色、设置折线可渐变、绘制纹理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.0.3(15)开始，支持折线绘制纹理功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983742)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加折线功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
        children: "MapPolylineOptions"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addpolyline",
        children: "addPolyline"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
        children: "MapPolyline"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
              children: "MapPolylineOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折线参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addpolyline",
              children: "addPolyline"
            }), "(options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
              children: "mapCommon.MapPolylineOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
              children: "MapPolyline"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在地图上添加一条折线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
              children: "MapPolyline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折线，支持更新和查询相关属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加折线",
      children: "添加折线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MapComponent, mapCommon, map } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加折线，在callback方法中创建初始化参数并新建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
            children: "MapPolyline"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MapPolylineDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapPolyline?: map.MapPolyline;\n\n  aboutToAppear(): void {\n    // 地图初始化参数\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.98,\n          longitude: 118.78\n        },\n        zoom: 14\n      }\n    };\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n\n        // polyline初始化参数\n        let polylineOption: mapCommon.MapPolylineOptions = {\n          points: [\n            { longitude: 118.78, latitude: 31.975 },\n            { longitude: 118.78, latitude: 31.982 },\n            { longitude: 118.79, latitude: 31.985 }\n          ],\n          clickable: true,\n          startCap: mapCommon.CapStyle.BUTT,\n          endCap: mapCommon.CapStyle.BUTT,\n          geodesic: false,\n          jointType: mapCommon.JointType.BEVEL,\n          visible: true,\n          width: 10,\n          zIndex: 10,\n          gradient: false\n        }\n        // 创建polyline\n        try {\n          this.mapPolyline = await this.mapController.addPolyline(polylineOption);\n        } catch (e) {\n          console.error(`Failed to create the mapPolyline, code is：${e.code}, message is ${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    };\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(87597)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置折线分段颜色",
      children: "设置折线分段颜色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一：新建折线时在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
        children: "MapPolylineOptions"
      }), "的colors属性中设置折线分段颜色值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let polylineOption: mapCommon.MapPolylineOptions = {\n  points: [\n    { longitude:118.78, latitude:31.975 },\n    { longitude:118.78, latitude:31.982 },\n    { longitude:118.79, latitude:31.985 }\n  ],\n  clickable: true,\n  startCap: mapCommon.CapStyle.BUTT,\n  endCap: mapCommon.CapStyle.BUTT,\n  geodesic: false,\n  jointType: mapCommon.JointType.BEVEL,\n  visible: true,\n  width: 10,\n  zIndex: 10,\n  // 设置颜色\n  colors: [0xffffff00, 0xff000000],\n  gradient: false\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二：调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
        children: "MapPolyline"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline#setcolors",
        children: "setColors"
      }), "()方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let colors = [0xffffff00, 0xff000000];\nthis.mapPolyline.setColors(colors);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(943706)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置折线可渐变",
      children: "设置折线可渐变"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
        children: "MapPolylineOptions"
      }), "的gradient属性设置为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let polylineOption: mapCommon.MapPolylineOptions = {\n  points: [\n    { longitude:118.78, latitude:31.975 },\n    { longitude:118.78, latitude:31.982 },\n    { longitude:118.79, latitude:31.985 }\n  ],\n  clickable: true,\n  startCap: mapCommon.CapStyle.BUTT,\n  endCap: mapCommon.CapStyle.BUTT,\n  geodesic: false,\n  jointType: mapCommon.JointType.BEVEL,\n  visible: true,\n  width: 10,\n  zIndex: 10,\n  colors: [0xffffff00, 0xff000000],\n  // 设置颜色折线可渐变\n  gradient: true\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二：调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
        children: "MapPolyline"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline#setgradient",
        children: "setGradient"
      }), "()方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapPolyline.setGradient(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619035)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绘制纹理",
      children: "绘制纹理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一：新建折线时在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
        children: "MapPolylineOptions"
      }), "的customTexture属性设置折线纹理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let polylineOption: mapCommon.MapPolylineOptions = {\n  points: [\n    { latitude: 32.220750, longitude: 118.788765 },\n    { latitude: 32.120750, longitude: 118.788765 },\n    { latitude: 32.020750, longitude: 118.788765 },\n    { latitude: 31.920750, longitude: 118.788765 },\n    { latitude: 31.820750, longitude: 118.788765 }\n  ],\n  clickable: true,\n  jointType: mapCommon.JointType.DEFAULT,\n  width: 20,\n  // 图标需存放在resources/rawfile目录下\n  customTexture: \"icon/naviline_arrow.png\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二：调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline",
        children: "MapPolyline"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline#setcustomtexture",
        children: "setCustomTexture"
      }), "方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "await this.mapPolyline.setCustomTexture(\"icon/naviline_arrow.png\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863568)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "折线设置分段纹理",
      children: "折线设置分段纹理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["新建折线时利用在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mappolylineoptions",
        children: "MapPolylineOptions"
      }), "的customTextures和customTextureIndexes属性设置折线分段纹理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\n// 数组存放图片内容\nlet customTextures: Array<ResourceStr | image.PixelMap> = new Array();\n// 图标存放在resources/rawfile，'icon/img.png'参数值传入rawfile文件夹下的相对路径\ncustomTextures.push('icon/img.png');\ncustomTextures.push('icon/img_1.png');\nlet cusIndexNumber: Array<number> = new Array();\n// cusIndexNumber数组长度与折线点数量必须相同，数组元素内容与customTextures下标相对应，图片从数组第二个元素开始选择\ncusIndexNumber.push(0, 0, 1);\n// polyline初始化参数\nlet polylineOption: mapCommon.MapPolylineOptions = {\n  points: [\n    { longitude: 118.78, latitude: 31.975 },\n    { longitude: 118.78, latitude: 31.982 },\n    { longitude: 118.79, latitude: 31.985 }\n  ],\n  clickable: true,\n  startCap: mapCommon.CapStyle.BUTT,\n  endCap: mapCommon.CapStyle.BUTT,\n  jointType: mapCommon.JointType.BEVEL,\n  width: 30,\n  // 图标需存放在resources/rawfile目录下\n  customTextures: customTextures,\n  customTextureIndexes: cusIndexNumber\n};\nlet mapPolyline = await this.mapController.addPolyline(polylineOption);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10306)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
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
943706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439079-52b3cc34d54f62cc503afa93ccd202c8.jpg");

},
87597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799384-5fc7df7de61bb182c05676d032eb9301.jpg");

},
619035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959034-8f3fbacd1491ee427e11fc3ce85ef6a3.jpg");

},
10306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799386-4f5d1bd0a15c68a98f3335e23b4d017a.jpg");

},
863568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479035-f8eaf9a17c274573dc5e98552138c3ef.jpg");

},
983742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479033-5fc7df7de61bb182c05676d032eb9301.jpg");

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