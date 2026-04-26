"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["147297"], {
824218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_creation_map_presenting_map_presenting_md_318_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-creation-map-presenting-map-presenting-md-318.json
var site_docs_map_kit_guide_map_creation_map_presenting_map_presenting_md_318_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-creation/map-presenting/map-presenting","title":"显示地图","description":"场景介绍","source":"@site/docs/map-kit-guide/map-creation/map-presenting/map-presenting.md","sourceDirName":"map-kit-guide/map-creation/map-presenting","slug":"/map-kit-guide/map-creation/map-presenting/","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-presenting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"显示地图","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-presenting","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/map-kit-guide/map-config-agc/"},"next":{"title":"切换地图类型","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-creation/map-presenting/map-presenting.md


const frontMatter = {
	title: '显示地图',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-presenting',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '显示地图';

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
  "value": "地图显示",
  "id": "地图显示",
  "level": 3
}, {
  "value": "设置地图属性",
  "id": "设置地图属性",
  "level": 3
}, {
  "value": "开启3D建筑图层",
  "id": "开启3d建筑图层",
  "level": 3
}, {
  "value": "地图前后台切换",
  "id": "地图前后台切换",
  "level": 3
}, {
  "value": "深色模式",
  "id": "深色模式",
  "level": 3
}, {
  "value": "室内图",
  "id": "室内图",
  "level": 3
}, {
  "value": "Logo缩放比例",
  "id": "logo缩放比例",
  "level": 3
}, {
  "value": "开启3D地球",
  "id": "开启3d地球",
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
        id: "显示地图",
        children: "显示地图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3(15)开始，支持Logo缩放功能和3D地球功能；从5.1.1(19)开始，支持室内图功能和设置比例尺单位功能；从6.0.0(20)开始，支持设置地图语言功能；从6.1.0(23)开始，支持设置3D地图城市灯光效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节将向您介绍如何使用地图组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts-component/map-mapcomponent/map-mapcomponent#mapcomponent",
        children: "MapComponent"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "呈现地图，效果如下图所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29520)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显示地图功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts-component/map-mapcomponent/map-mapcomponent#mapcomponent",
        children: "MapComponent"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts-component/map-mapcomponent/map-mapcomponent",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
              children: "mapCommon.MapOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供Map组件初始化的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts-component/map-mapcomponent/map-mapcomponent#mapcomponent",
              children: "MapComponent"
            }), "(mapOptions: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
              children: "mapCommon.MapOptions"
            }), ", mapCallback: AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
              children: "map.MapComponentController"
            }), ">)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
              children: "map.MapComponentController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图组件的主要功能入口类，用来操作地图，与地图有关的所有方法从此处接入。它所承载的工作包括：地图类型切换（如标准地图、空地图）、改变地图状态（中心点坐标和缩放级别）、添加点标记（Marker）、绘制几何图形（如MapPolyline、MapPolygon、MapCircle）、监听各类事件等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图显示",
      children: "地图显示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Map Kit相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MapComponent, mapCommon, map } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建地图初始化参数mapOptions，设置地图中心点坐标及层级。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过callback回调的方式获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "对象，用来操作地图。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts-component/map-mapcomponent/map-mapcomponent#mapcomponent",
            children: "MapComponent"
          }), "组件，传入mapOptions和mapCallback参数，初始化地图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct HuaweiMapDemo {\n  private TAG = \"HuaweiMapDemo\";\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapController?: map.MapComponentController;\n  private mapEventManager?: map.MapEventManager;\n\n  aboutToAppear(): void {\n    // 地图初始化参数，设置地图中心点坐标及层级\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 39.9,\n          longitude: 116.4\n        },\n        zoom: 10\n      }\n    };\n\n    // 地图初始化的回调\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        // 获取地图的控制器类，用来操作地图\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        let callback = () => {\n          console.info(this.TAG, `on-mapLoad`);\n        }\n        this.mapEventManager.on(\"mapLoad\", callback);\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    };\n  }\n\n  // 页面每次显示时触发一次，包括路由过程、应用进入前台等场景，仅@Entry装饰的自定义组件生效\n  onPageShow(): void {\n    // 将地图切换到前台\n    if (this.mapController) {\n      this.mapController.show();\n    }\n  }\n\n  // 页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景，仅@Entry装饰的自定义组件生效\n  onPageHide(): void {\n    // 将地图切换到后台\n    if (this.mapController) {\n      this.mapController.hide();\n    }\n  }\n\n  build() {\n    Stack() {\n      // 调用MapComponent组件初始化地图\n      MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback }).width('100%').height('100%');\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行您刚完成的工程就可以在您的APP中看到地图了，运行后的效果如下图所示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果没有成功加载地图，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-faq/map-faq-1",
            children: "地图不显示"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(537986)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置地图属性",
      children: "设置地图属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
        children: "MapOptions"
      }), "包含以下属性。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mapType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地图类型，默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#maptype",
              children: "MapType"
            }), ".STANDARD。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图相机位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图展示框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minZoom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图最小层级，有效范围[2, 20]，默认值：2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxZoom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图最大层级，有效范围[2, 20]，默认值：20。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotateGesturesEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持旋转手势，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollGesturesEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持滑动手势，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zoomGesturesEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持缩放手势，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tiltGesturesEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持倾斜手势，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zoomControlsEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示缩放控件，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "myLocationControlsEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示我的位置按钮，默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compassControlsEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示指南针控件，默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleControlsEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示比例尺，默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alwaysShowScaleEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否始终显示比例尺，默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图和边界的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义样式ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dayNightMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日间夜间模式，默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#daynightmode",
              children: "DayNightMode"
            }), ".DAY（日间模式）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logoScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logo缩放比例，取值范围是[0.8, 1]，默认值：1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sphereEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启3D地球效果，默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indoorMapEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启室内图，默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleUnit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地图比例尺公英制单位，默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#scaleunit",
              children: "ScaleUnit"
            }), ".METRIC_UNIT（公制单位）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置mapType，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-creation/map-type",
            children: "切换地图类型"
          }), "章节中有详细讲解。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置myLocationControlsEnabled，展示我的位置按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在mapOptions中设置myLocationControlsEnabled属性为true，可展示我的位置按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(27568)/* ["default"] */.A) + "",
            width: "19",
            height: "18"
          }), "，显示效果如下图所示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["也可通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "对象的方法展示我的位置按钮，详情见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-creation/map-location",
            children: "显示我的位置"
          }), "章节。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 39.9,\n      longitude: 116.4\n    },\n    zoom: 10\n  },\n  myLocationControlsEnabled: true\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(335985)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示比例尺。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在mapOptions中设置scaleControlsEnabled属性为true，可展示比例尺，显示效果如下图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 39.9,\n      longitude: 116.4\n    },\n    zoom: 10\n  },\n  scaleControlsEnabled: true\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(946402)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启3d建筑图层",
      children: "开启3D建筑图层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setbuildingenabled",
        children: "setBuildingEnabled"
      }), "方法开启3D建筑图层，把缩放层级调整为16级或以上，将两个手指放在地图上，向上滑动倾斜地图可看到3D建筑图层的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setBuildingEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887164)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图前后台切换",
      children: "地图前后台切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象来控制地图页面前后台切换的生命周期。应用触发前后台切换时，可以在Page生命周期里调用show/hide，以便申请/释放资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "地图切换至前台："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 页面每次显示时触发一次，包括路由过程、应用进入前台等场景，仅@Entry装饰的自定义组件生效\nonPageShow(): void {\n  // 建议页面切换到前台，调用地图组件的show方法\n  if (this.mapController) {\n    this.mapController.show();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "地图切换至后台："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景，仅@Entry装饰的自定义组件生效\nonPageHide(): void {\n  // 建议页面切换到后台，调用地图组件的hide方法\n  if (this.mapController) {\n    this.mapController.hide();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "深色模式",
      children: "深色模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供2种方式设置地图的夜间模式：初始化地图时和创建地图后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式一：初始化地图时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在地图初始化参数中设置dayNightMode参数，参数可选值包括DAY（日间模式）、NIGHT（夜间模式）、AUTO（自动模式）。如果将参数值设置为AUTO，地图的深色模式会跟随系统，打开系统深色开关，显示夜间模式，否则显示日间模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 39.9,\n      longitude: 116.4\n    },\n    zoom: 10\n  },\n  myLocationControlsEnabled: true,\n  // 设置地图为夜间模式\n  dayNightMode: mapCommon.DayNightMode.NIGHT\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(278239)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式二：创建地图后"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建地图后，可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setdaynightmode",
        children: "setDayNightMode"
      }), "方法设置夜间模式。下面的例子中将参数值设置为AUTO，在设置完之后，打开系统的深色开关，地图会自动变为夜间模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置地图为自动模式\nthis.mapController.setDayNightMode(mapCommon.DayNightMode.AUTO);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "室内图",
      children: "室内图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用室内图可查看楼层平面图，如查看购物中心、博物馆和医院等地点的内部情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供2种方式开启地图的室内图功能：初始化地图时和创建地图后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式一：初始化地图时"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在地图初始化参数中设置将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
        children: "MapOptions"
      }), "中的indoorMapEnabled参数设置为true即可开启室内图功能，而且仅17级及以上地图层级可见室内图和楼层调节控件，通过左下角的楼层调节控件可以切换当前室内图楼层。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 31.979227,\n      longitude: 118.762245\n    },\n    zoom: 18\n  },\n  // 开启室内图功能\n  indoorMapEnabled: true\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(636147)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式二：创建地图后"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建地图后，可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setindoormapenabled",
        children: "setIndoorMapEnabled"
      }), "方法来开启或关闭室内图功能。下面的例子中将室内图开启后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#isindoormapenabled",
        children: "isIndoorMapEnabled"
      }), "方法来查询当前室内图功能的开启状态，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setfloorcontrolsposition",
        children: "setFloorControlsPosition"
      }), "方法可以设置楼层调节控件的位置。室内图功能还提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#switchindoormapfloor",
        children: "switchIndoorMapFloor"
      }), "方法，可以切换到指定的室内建筑和指定的楼层。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启室内图功能\nthis.mapController.setIndoorMapEnabled(true);\n// 查询当前室内图开启状态\nlet isIndoorMapEnabled: boolean = this.mapController.isIndoorMapEnabled();\nconsole.info('indoorMapEnabled is:' + isIndoorMapEnabled);\n// 设置楼层调节控件的位置\nthis.mapController.setFloorControlsPosition({\n  positionX: 500,\n  positionY: 500\n});\n// 切换楼层,需要将第一个入参替换成用户需要的建筑物id，第二个参数替换成当前楼层，如'1F'、'B1'等等\nthis.mapController.switchIndoorMapFloor('822588304363886720', '3F');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onindoormapenter",
        children: "on('indoorMapEnter')"
      }), "方法和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onindoormapexit",
        children: "on('indoorMapExit')"
      }), "可以分别设置进入和退出室内图的监听事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callbackEnter = (indoorMapInfo: map.IndoorMapInfo) => {\n  console.info(this.TAG, `on-indoorMapEnter`);\n};\nlet callbackExit = () => {\n  console.info(this.TAG, `on-indoorMapExit`);\n};\n// 进入室内图监听回调\nthis.mapEventManager.on(\"indoorMapEnter\", callbackEnter);\n// 退出室内图监听回调\nthis.mapEventManager.on(\"indoorMapExit\", callbackExit);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logo缩放比例",
      children: "Logo缩放比例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供2种方式设置地图的Logo缩放比例：初始化地图时和创建地图后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式一：初始化地图时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在地图初始化参数中设置logoScale参数，取值范围是[0.8, 1]，默认值是1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 39.9,\n      longitude: 116.4\n    },\n    zoom: 10\n  },\n  myLocationControlsEnabled: true,\n  // 设置logo缩放比例为0.9\n  logoScale: 0.9\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式二：创建地图后"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建地图后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlogoscale",
            children: "setLogoScale"
          }), "方法设置Logo缩放比例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.mapController.setLogoScale(0.9);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Logo缩放比例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#getlogoscale",
            children: "getLogoScale"
          }), "方法获取当前Logo缩放比例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let logoScale: number = this.mapController.getLogoScale();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启3d地球",
      children: "开启3D地球"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供2种方式开启3D地球：初始化地图时和创建地图后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启3D地球后，当层级缩小到小于4时，可以清晰地看到3D地球。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式一：初始化地图时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在地图初始化参数中设置3D地球的开启状态，默认值是false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapOptions = {\n  position: {\n    target: {\n      latitude: 39.9,\n      longitude: 116.4\n    },\n    zoom: 2\n  },\n  // 开启3D地球\n  sphereEnabled: true\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式二：创建地图后"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建地图后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setsphereenabled",
        children: "setSphereEnabled"
      }), "方法开启3D地球，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#issphereenabled",
        children: "isSphereEnabled"
      }), "方法可获取3D地球的开启状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启3D地球\nthis.mapController.setSphereEnabled(true);\n// 获取3D地球的开启状态\nlet result: boolean = this.mapController.isSphereEnabled();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831464)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启城市灯光效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setsphereenabled-2",
        children: "setSphereEnabled"
      }), "(enabled: boolean, animateDuration: number, cityLight: boolean)方法开启城市灯光效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491360)/* ["default"] */.A) + "",
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
278239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799356-21da25516f9f6b8f464bf86846ffa3cc.jpg");

},
491360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479007-819f806e70a62e5727f1d12625feaebc.jpg");

},
946402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959004-62e70484788f5deb7dbf1ec618abca70.jpg");

},
636147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439051-86fd01df3484d84208970b07e18a2dbe.jpg");

},
537986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479003-937a517f889bfa0877e50c145db2d35b.jpg");

},
29520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959002-937a517f889bfa0877e50c145db2d35b.jpg");

},
27568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAACE0lEQVQ4EW2TPWsyQRDHd3bPOw0ExCJ+Bks7IVUKm3yCNIGAdtapLAQRbNOIHKT346TIhwiWEu/29mVmnkcnnJeXKY65mf3tzOz+V9HZ8GziExEiVlU1mUzqiASJyHtvrS3LUv1JElFVVUmSIGINi8/M/mxfZDNtrX16esqyDACurq6m02lRFCGEGKMss2f7RiLifD4HgG63m+c5Eb2+vmZZlqbpZDKRmojonAshfCNHo5HWuiiKGKNzTiqUZYmISZKMRiOJM/OFjDEWRZFlWVmWMgkiSnve+xgjIiqlrLWynff+q+bxeFRK7XY75xwirtdrY4yMut1uQwjMvFgslPpafyK99/+jzKy1DiFYaw+Hg2oYAOz3eyJi5na7LdfDzMo5N5vNBoOBMUba6/V6DVC1Wq3r62siijEaYwaDwXA4PDV/PB4fHh5ub2/TNJV0v99vkp1O5+bmRsYzxtzd3a1WKyJSMcaqqmKMWmtrrRx6kzTGfHx8CKmUqtV2mdgYc39/H0JAxLe3NwDQWidJ8vLyIjLYbDYAIFucaooXY2RmAPj8/GRmRJQvEYWzWWub2IUU/vHxsdPpOOeqqqqVwMzOOQAYj8d1wZ8kEeV5rrUGgOfn5/f39/l8boxRSi2Xyyb2BykHttvtut0uAKRpmue5yOMnWb+AZkJE02q1DodDM970T7fS/BdfXvZms6mF+nvNP7KA+vQ3/zpGAAAAAElFTkSuQmCC");

},
335985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439049-2ea17ec229c0cd40b69fa10e20481a33.jpg");

},
887164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479005-816f65e2aa7392d7fb575f7b613230c9.jpg");

},
831464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959006-37cf42cfeeaad29e8c5fdf1ccb2d3966.jpg");

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