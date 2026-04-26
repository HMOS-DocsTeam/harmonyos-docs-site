"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["864729"], {
306690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_marker_map_marker_md_975_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-marker-map-marker-md-975.json
var site_docs_map_kit_guide_map_drawing_map_marker_map_marker_md_975_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-marker/map-marker","title":"标记","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-marker/map-marker.md","sourceDirName":"map-kit-guide/map-drawing/map-marker","slug":"/map-kit-guide/map-drawing/map-marker/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-marker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"标记","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-marker","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地图截图","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-screenshots/"},"next":{"title":"折线","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-polyline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-marker/map-marker.md


const frontMatter = {
	title: '标记',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-marker',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '标记';

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
  "value": "添加标记",
  "id": "添加标记",
  "level": 3
}, {
  "value": "自定义标记",
  "id": "自定义标记",
  "level": 3
}, {
  "value": "控制Marker文字显隐",
  "id": "控制marker文字显隐",
  "level": 3
}, {
  "value": "碰撞检测",
  "id": "碰撞检测",
  "level": 3
}, {
  "value": "设置监听标记点击事件",
  "id": "设置监听标记点击事件",
  "level": 3
}, {
  "value": "设置监听标记拖动事件",
  "id": "设置监听标记拖动事件",
  "level": 3
}, {
  "value": "信息窗",
  "id": "信息窗",
  "level": 3
}, {
  "value": "自定义信息窗",
  "id": "自定义信息窗",
  "level": 3
}, {
  "value": "标记动画",
  "id": "标记动画",
  "level": 3
}, {
  "value": "图片动画播放",
  "id": "图片动画播放",
  "level": 3
}, {
  "value": "自定义组件实现marker图标",
  "id": "自定义组件实现marker图标",
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
        id: "标记",
        children: "标记"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何在地图的指定位置添加标记以标识位置、商家、建筑等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点标记用来在地图上标记任何位置，例如用户位置、车辆位置、店铺位置等一切带有位置属性的事物。Map Kit提供的点标记功能（又称 Marker）封装了大量的触发事件，例如点击事件、长按事件、拖拽事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marker有默认风格，同时也支持自定义。由于内容丰富，以下只能展示一些基础功能的使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.1.1(19)开始，支持控制Marker文字显隐功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.0(20)开始，支持自定义组件实现marker图标功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747193)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加标记功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#markeroptions",
        children: "MarkerOptions"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmarker",
        children: "addMarker"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
        children: "Marker"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
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
              href: "/ref/map-api/map-arkts/map-common/map-common#markeroptions",
              children: "MarkerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addmarker",
              children: "addMarker"
            }), "(options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#markeroptions",
              children: "mapCommon.MarkerOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在地图上添加标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记，支持更新和查询相关属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加标记",
      children: "添加标记"
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
          children: ["添加标记，在callback方法中创建初始化参数并新建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
            children: "Marker"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MarkerDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapEventManager?: map.MapEventManager;\n  private marker?: map.Marker;\n\n  aboutToAppear(): void {\n    // 地图初始化参数\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.984410259206815,\n          longitude: 118.76625379397866\n        },\n        zoom: 15\n      }\n    };\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        // Marker初始化参数\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 31.984410259206815,\n            longitude: 118.76625379397866\n          },\n          rotation: 0,\n          visible: true,\n          zIndex: 0,\n          alpha: 1,\n          anchorU: 0.5,\n          anchorV: 1,\n          clickable: true,\n          draggable: true,\n          flat: false\n        };\n        // 新建marker\n        try {\n          this.marker = await this.mapController.addMarker(markerOptions);\n        } catch (e) {\n          console.error(`Failed to create the marker, code is：${e.code}, message is ${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    };\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(317258)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在添加标记之后，修改已经设置的标记属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置标记可拖拽\nthis.marker.setDraggable(true);\n// 设置标记锚点\nthis.marker.setMarkerAnchor(1.0, 1.0);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义标记",
      children: "自定义标记"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#markeroptions",
        children: "MarkerOptions"
      }), "中将icon属性设置为自定义图标的资源，可将默认标记图标修改成自定义图标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let markerOptions: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.984410259206815,\n    longitude: 118.76625379397866\n  },\n  rotation: 0,\n  visible: true,\n  zIndex: 0,\n  alpha: 1,\n  anchorU: 0.5,\n  anchorV: 1,\n  clickable: true,\n  draggable: true,\n  flat: false,\n  // 图标存放在resources/rawfile，icon参数传入rawfile文件夹下的相对路径\n  icon: 'test.png'\n};\nthis.marker = await this.mapController.addMarker(markerOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472313)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "控制marker文字显隐",
      children: "控制Marker文字显隐"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker#setannotationvisible",
        children: "setAnnotationVisible"
      }), "方法可以控制Marker文字显隐，还可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker#isannotationvisible",
        children: "isAnnotationVisible"
      }), "方法来获取Marker文字显隐的状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Marker初始化参数\nlet markerOptions: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.984410259206815,\n    longitude: 118.76625379397866\n  },\n  rotation: 0,\n  visible: true,\n  zIndex: 0,\n  alpha: 1,\n  anchorU: 0.5,\n  anchorV: 1,\n  clickable: true,\n  draggable: true,\n  flat: false,\n  annotations: [{\n    // 定义标题内容\n    content: \"text\",\n    fontStyle: 1,\n    strokeWidth: 3,\n    fontSize: 15\n  }]\n};\n// 创建Marker\nthis.marker = await this.mapController.addMarker(markerOptions);\n// 设置文字隐藏\nthis.marker.setAnnotationVisible(false);\n// 查询当前显隐状态\nlet isAnnotationVisible: boolean = this.marker.isAnnotationVisible();\nconsole.info(`isAnnotationVisible is: ` + isAnnotationVisible);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 隐藏Marker文字之前"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249652)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 隐藏Marker文字之后"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407457)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "碰撞检测",
      children: "碰撞检测"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#markeroptions",
        children: "MarkerOptions"
      }), "中设置collisionRule属性，可以设置标记的冲突处理规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let markerOptions: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.984410259206815,\n    longitude: 118.76625379397866\n  },\n  rotation: 0,\n  visible: true,\n  zIndex: 0,\n  alpha: 1,\n  anchorU: 0.5,\n  anchorV: 1,\n  clickable: true,\n  draggable: true,\n  flat: false,\n  // 图标存放在resources/rawfile，icon参数传入rawfile文件夹下的相对路径\n  icon: 'icon.png',\n  annotations:  [{\n    // 定义标题内容\n    content: \"Test\",\n    fontStyle: 1,\n    strokeWidth: 3,\n    fontSize: 15\n  }],\n  // 设置碰撞规则为图标和名称都参与碰撞\n  collisionRule: mapCommon.CollisionRule.ALL,\n  annotationPosition: mapCommon.TextPosition.TOP\n};\nthis.marker = await this.mapController.addMarker(markerOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298912)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置监听标记点击事件",
      children: "设置监听标记点击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (marker: map.Marker) => {\n  console.info(`on-markerClick marker = ${marker.getId()}`);\n};\nthis.mapEventManager.on(\"markerClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置监听标记拖动事件",
      children: "设置监听标记拖动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过如下步骤设置监听标记拖动事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
          children: "Marker"
        }), "的拖拽属性设置为true。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmarkerdragstart",
          children: "on(type: 'markerDragStart' , callback: Callback<Marker>)"
        }), "方法监听标记是否开始拖拽。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmarkerdrag",
          children: "on(type: 'markerDrag' , callback: Callback<Marker>)"
        }), "，监听标记拖动过程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmarkerdragend",
          children: "on(type: 'markerDragEnd' , callback: Callback<Marker>)"
        }), "，监听标记拖动结束事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置标记可拖拽\nthis.marker.setDraggable(true);\n\n// 监听标记开始拖拽\nlet markerCallback = (marker: map.Marker) => {\n  console.info(`on-markerDragStart marker = ${marker.getId()}`);\n};\nthis.mapEventManager.on(\"markerDragStart\", markerCallback);\n\n// 监听标记拖拽事件\nlet markerDragCallback = (marker: map.Marker) => {\n  console.info(`on-markerDrag marker = ${marker.getId()}`);\n};\nthis.mapEventManager.on(\"markerDrag\", markerDragCallback);\n\n// 监听标记拖拽结束\nlet markerDragEndCallback = (marker: map.Marker) => {\n  console.info(`on-markerDragEnd marker = ${marker.getId()}`);\n};\nthis.mapEventManager.on(\"markerDragEnd\", markerDragEndCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "信息窗",
      children: "信息窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 添加信息窗\nlet markerOptions: mapCommon.MarkerOptions = {\n  position: {\n    latitude: 31.984410259206815,\n    longitude: 118.76625379397866\n  }\n};\nthis.marker = await this.mapController?.addMarker(markerOptions);\n// 设置信息窗的标题\nthis.marker.setTitle('南京');\n// 设置信息窗的子标题\nthis.marker.setSnippet('华东地区');\n// 设置标记可点击\nthis.marker.setClickable(true);\n// 设置信息窗的锚点位置\nthis.marker.setInfoWindowAnchor(1, 1);\n// 设置信息窗可见，点击标记后可展示信息窗\nthis.marker.setInfoWindowVisible(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369251)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义信息窗",
      children: "自定义信息窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MarkerDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 32.120750,\n          longitude: 118.788765\n        },\n        zoom: 15\n      }\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 32.120750,\n            longitude: 118.788765\n          },\n          clickable: true,\n          // 设置信息窗标题，点击标记后可展示信息窗\n          title: \"自定义信息窗\"\n        };\n        // 创建Marker\n        await this.mapController?.addMarker(markerOptions);\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({\n          mapOptions: this.mapOptions,\n          mapCallback: this.callback,\n          // 自定义信息窗\n          customInfoWindow: this.customInfoWindow\n        })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n  // 自定义信息窗BuilderParam\n  @BuilderParam customInfoWindow: ($$: map.MarkerDelegate) => void = this.customInfoWindowBuilder;\n  // 自定义信息窗Builder\n  @Builder\n  customInfoWindowBuilder($$: map.MarkerDelegate) {\n    if ($$.marker) {\n      Text($$.marker.getTitle())\n        .width(\"50%\")\n        .height(50)\n        .backgroundColor(Color.Green)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .font({ size: 25, weight: 10, style: FontStyle.Italic })\n        .border({ width: 3, color: Color.Black, radius: 25, style: BorderStyle.Dashed })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(801848)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标记动画",
      children: "标记动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marker支持设置旋转、缩放、平移、透明、图片动画播放和组合动画效果。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-map/map-map-alphaanimation/map-map-alphaanimation",
              children: "AlphaAnimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制透明度的动画类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-rotateanimation/map-map-rotateanimation",
              children: "RotateAnimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制旋转的动画类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-scaleanimation/map-map-scaleanimation",
              children: "ScaleAnimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制缩放的动画类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-translateanimation/map-map-translateanimation",
              children: "TranslateAnimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制平移的动画类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-playimageanimation/map-map-playimageanimation",
              children: "PlayImageAnimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制多张图片的动画类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-animationset/map-map-animationset",
              children: "AnimationSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画集合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "旋转动画效果的示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { map, mapCommon, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct MarkerDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 32.020750,\n          longitude: 118.788765\n        },\n        zoom: 11\n      }\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        // 构造MarkerOptions对象\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 32.020750,\n            longitude: 118.788765\n          }\n        };\n        // 新建marker\n        let marker: map.Marker = await mapController.addMarker(markerOptions);\n        // 构造RotateAnimation对象\n        let animation = new map.RotateAnimation(0, 270);\n        // 动画执行时间\n        animation.setDuration(2000);\n\n        // 动画结束状态\n        animation.setFillMode(map.AnimationFillMode.BACKWARDS);\n\n        // 动画重复模式\n        animation.setRepeatMode(map.AnimationRepeatMode.REVERSE);\n\n        // 动画重复次数\n        animation.setRepeatCount(100);\n\n        // 设置动画开始监听\n        let callbackStart = () => {\n          console.info(\"animationStart\", `callback`);\n        };\n        animation.on(\"animationStart\", callbackStart);\n\n        // 设置动画结束监听\n        let callbackEnd = () => {\n          console.info(\"animationEnd\", `callback`);\n        };\n        animation.on(\"animationEnd\", callbackEnd);\n\n        // 设置动画\n        marker.setAnimation(animation);\n        // 开启动画\n        marker.startAnimation();\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示效果如图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970469)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图片动画播放",
      children: "图片动画播放"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { map, mapCommon, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct MarkerDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 32.020750,\n          longitude: 118.788765\n        },\n        zoom: 11\n      }\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        // 构造MarkerOptions对象\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 32.020750,\n            longitude: 118.788765\n          },\n        };\n        let images: Array<ResourceStr | image.PixelMap> = [\n          // 图标需存放在resources/rawfile目录下\n          'icon/avocado.png',\n          'icon/20231027.png',\n          // 图标需存放在resources/base/media目录下\n          $r('app.media.maps_blue_dot')\n        ]\n        let mContext = this.getUIContext().getHostContext();\n        if (mContext) {\n          const fileData: Uint8Array = await mContext?.resourceManager?.getRawFileContent('icon/icon.png');\n          let imageSource: image.ImageSource =\n            image.createImageSource(fileData.buffer.slice(0, fileData.buffer.byteLength));\n          let pixelMap: PixelMap = await imageSource.createPixelMap();\n          images.push(pixelMap);\n        }\n        // 新建marker\n        let marker: map.Marker = await mapController.addMarker(markerOptions);\n        // 构造PlayImageAnimation对象\n        let animation: map.PlayImageAnimation = new map.PlayImageAnimation();\n        // 添加图片\n        await animation.addImages(images)\n        // 动画执行时间\n        animation.setDuration(3000);\n\n        // 动画结束状态\n        animation.setFillMode(map.AnimationFillMode.BACKWARDS);\n\n        // 动画重复模式\n        animation.setRepeatMode(map.AnimationRepeatMode.REVERSE);\n\n        // 动画重复次数\n        animation.setRepeatCount(100);\n\n        // 设置动画开始监听\n        let callbackStart = () => {\n          console.info(\"animationStart\", `callback`);\n        };\n        animation.on(\"animationStart\", callbackStart);\n        // 设置动画结束监听\n        let callbackEnd = () => {\n          console.info(\"animationEnd\", `callback`);\n        };\n        animation.on(\"animationEnd\", callbackEnd);\n        // 设置动画\n        marker.setAnimation(animation);\n        // 开启动画\n        marker.startAnimation();\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示效果如图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3227)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件实现marker图标",
      children: "自定义组件实现marker图标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过自定义组件生成marker图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { map, mapCommon, MapComponent } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct MarkerDemo {\n  private mapOption?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private marker?: map.Marker;\n  aboutToAppear(): void {\n    this.mapOption = {\n      position: {\n        target: {\n          latitude: 32.120750,\n          longitude: 118.788765\n        },\n        zoom: 14\n      },\n      scaleControlsEnabled: true\n    }\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        // 构造MarkerOptions对象\n        let markerOptions: mapCommon.MarkerOptions = {\n          position: {\n            latitude: 32.120750,\n            longitude: 118.788765\n          },\n          // 自定义组件\n          iconBuilder: () => {\n            this.renderBuilder();\n          }\n        };\n        this.marker = await this.mapController?.addMarker(markerOptions);\n      }\n    }\n  }\n  @Builder\n  renderBuilder() {\n    Stack({ alignContent: Alignment.Center }) {\n      // 需要替换您自己的资源图片，存放在resources/base/media目录下\n      Image($r('app.media.iconbuilder'))\n        .syncLoad(true)\n    }\n    .height(50)\n    .width(50)\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback })\n          .width('100%')\n          .height('100%');\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示效果如图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338698)/* ["default"] */.A) + "",
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
298912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439075-3590c4723cc6d41d1f4ac98317b59fbe.gif");

},
249652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479029-2dcb0fb8d4f35897a4a056ad7485e425.jpg");

},
3227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439077-1ffff54277f454c60e0b802bbfd0518b.gif");

},
407457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799380-da94cf1f2460f44ac535e73fea531d39.jpg");

},
472313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959028-44370c9425f0865699ebd399061f10f2.jpg");

},
317258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439073-539b5ef57a3ee21188b20852c62534ca.jpg");

},
338698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959032-fabbc1b1f9359df67efbf5ed97ef8e0a.jpg");

},
747193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799378-539b5ef57a3ee21188b20852c62534ca.jpg");

},
970469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799382-c60d3dd50a882900574fd35e16f67160.gif");

},
801848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479031-4e7baf95f895e220e08a7f224e4127ec.jpg");

},
369251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959030-ca7f5c5d734d960403f59ae3a24c14b2.jpg");

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