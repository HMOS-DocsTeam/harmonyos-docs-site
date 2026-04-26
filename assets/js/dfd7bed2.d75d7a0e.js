"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["701048"], {
391620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_interaction_map_camera_map_camera_md_dfd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-interaction-map-camera-map-camera-md-dfd.json
var site_docs_map_kit_guide_map_interaction_map_camera_map_camera_md_dfd_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-interaction/map-camera/map-camera","title":"更改地图位置","description":"场景介绍","source":"@site/docs/map-kit-guide/map-interaction/map-camera/map-camera.md","sourceDirName":"map-kit-guide/map-interaction/map-camera","slug":"/map-kit-guide/map-interaction/map-camera/","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-camera/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"更改地图位置","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-camera","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"事件交互","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-listening/"},"next":{"title":"地图截图","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-screenshots/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-interaction/map-camera/map-camera.md


const frontMatter = {
	title: '更改地图位置',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-camera',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '更改地图位置';

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
  "value": "相机移动",
  "id": "相机移动",
  "level": 3
}, {
  "value": "设置相机最大/最小偏好缩放级别",
  "id": "设置相机最大最小偏好缩放级别",
  "level": 3
}, {
  "value": "设置地图相机的边界",
  "id": "设置地图相机的边界",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "更改地图位置",
        children: "更改地图位置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为地图的移动是通过模拟相机移动的方式实现的，该相机可称为地图相机，您可以通过改变地图相机位置，来控制地图的可见区域，效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍地图相机的各个属性与含义，并移动相机。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 相机移动前"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756693)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 相机移动后"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166470)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-module-desc/map-module-desc",
        children: "map"
      }), "命名空间下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#movecamera",
        children: "moveCamera"
      }), "方法、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#animatecamera",
        children: "animateCamera"
      }), "方法和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#animatecamerastatus",
        children: "animateCameraStatus"
      }), "实现移动地图相机。方法入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
        children: "CameraUpdate"
      }), "可通过以下方法创建。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-zoomto/map-map-zoomto",
              children: "zoomTo"
            }), "(zoom: number): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图缩放级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-zoomout/map-map-zoomout",
              children: "zoomOut"
            }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩小地图缩放级别，在当前地图显示的级别基础上减1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-zoomin/map-map-zoomin",
              children: "zoomIn"
            }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放大地图缩放级别，在当前地图显示的级别基础上加1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-zoomby/map-map-zoomby",
              children: "zoomBy"
            }), "(amount: number, focus?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mappoint",
              children: "mapCommon.MapPoint"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定增量并以给定的屏幕像素点为中心点缩放地图级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-scrollby/map-map-scrollby",
              children: "scrollBy"
            }), "(x: number, y: number): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按像素移动地图中心点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-newlatlngbounds/map-map-newlatlngbounds#newlatlngbounds-1",
              children: "newLatLngBounds"
            }), "(bounds: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlngbounds",
              children: "mapCommon.LatLngBounds"
            }), ", padding?: number): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图经纬度范围、设置地图区域和边界之间的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-newlatlngbounds/map-map-newlatlngbounds#newlatlngbounds-2",
              children: "newLatLngBounds"
            }), "(bounds: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlngbounds",
              children: "mapCommon.LatLngBounds"
            }), ", width: number, height: number, padding: number): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图经纬度范围、设置经纬度矩形范围的高和宽、设置地图区域和边界之间的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-newlatlngbounds/map-map-newlatlngbounds#newlatlngbounds-3",
              children: "newLatLngBounds"
            }), "(bounds: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlngbounds",
              children: "mapCommon.LatLngBounds"
            }), ", padding: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#padding",
              children: "mapCommon.Padding"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持设置地图经纬度范围和4个方向与边界之间的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-newlatlng/map-map-newlatlng",
              children: "newLatLng"
            }), "(latLng: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            }), ", zoom?: number): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图的中心点和缩放层级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-newcameraposition/map-map-newcameraposition",
              children: "newCameraPosition"
            }), "(cameraPosition: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#cameraposition",
              children: "mapCommon.CameraPosition"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
              children: "CameraUpdate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新地图状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机移动",
      children: "相机移动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化地图并获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "地图操作类对象。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-creation/map-presenting",
            children: "显示地图"
          }), "章节中有详细讲解。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MapComponent, mapCommon, map } from '@kit.MapKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#movecamera",
            children: "moveCamera"
          }), "方法、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#animatecamera",
            children: "animateCamera"
          }), "方法和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#animatecamerastatus",
            children: "animateCameraStatus"
          }), "方法，可实现移动地图相机。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您可以选择以动画方式或非动画方式移动相机。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动画方式移动相机时，您可以设置动画持续的时间。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非动画方式移动相机是瞬时完成的。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建CameraUpdate对象\nlet cameraPosition: mapCommon.CameraPosition = {\n  target: {\n    latitude: 32.0,\n    longitude: 118.0\n  },\n  zoom: 10,\n  tilt: 0,\n  bearing: 0\n};\nlet cameraUpdate = map.newCameraPosition(cameraPosition);\n// 以非动画方式移动地图相机\nthis.mapController.moveCamera(cameraUpdate);\n\n// 以动画方式移动地图相机\nthis.mapController.animateCamera(cameraUpdate, 1000);\n\n// 以动画方式移动地图相机，并返回动画结果\nlet animateResult = await this.mapController.animateCameraStatus(cameraUpdate, 1000);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图3"
            })
          }), " 相机移动前"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(459169)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图4"
            })
          }), " 相机移动后"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(779821)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您还可以通过以下方式创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-cameraupdate/map-map-cameraupdate",
            children: "CameraUpdate"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 方式1：相机放大级数加1，保持其他属性不变\nlet cameraUpdate = map.zoomIn();\n\n// 方式2：相机放大级数减1，保持其他属性不变\nlet cameraUpdate1 = map.zoomOut();\n\n// 方式3：指定相机缩放级数zoom值，其他属性不变\nlet zoom1 = 8.0;\nlet cameraUpdate2 = map.zoomTo(zoom1);\n\n// 方式4：\n// a、指定相机缩放级别增量amount，您调用此方法可以在原来相机的缩放级别之上，进行适当的缩放\n// b、指定缩放级别增量和一个中心点，您调用此API可以移动相机至中心点位置，并进行缩放\n// 以屏幕左顶点为（0, 0）点，positionX正值代表可视区域向右移动，负值代表可视区域向左移动\n// positionY正值代表可视区域向下移动，负值代表可视区域向上移动\nlet point: mapCommon.MapPoint = {\n  positionX: 31,\n  positionY: 118\n};\nlet amount = 2.0;\nlet cameraUpdate3 = map.zoomBy(amount, point);\n\n// 方式5：设置相机的经纬度和地图层级\n// a、仅指定相机的经纬度，实现中心点的移动\n// b、指定相机的经纬度和地图层级，您调用此API可以移动相机至中心点位置，并进行缩放\nlet latLng: mapCommon.LatLng = {\n  latitude: 31.5,\n  longitude: 118.9\n};\nlet zoom2 = 10;\nlet cameraUpdate4 = map.newLatLng(latLng, zoom2);\n\n// 方式6：设置相机的可见区域\nlet latLngBounds: mapCommon.LatLngBounds = {\n  northeast: {\n    latitude: 32.5,\n    longitude: 119.9\n  },\n  southwest: {\n    latitude: 31.5,\n    longitude: 118.9\n  }\n};\n// 设置地图显示经纬度范围，设置地图区域和边界之间的距离为5像素\nlet cameraUpdate5 = map.newLatLngBounds(latLngBounds, 5);\n// 方式7：设置相机的可见区域\n// 设置地图显示经纬度范围，设置经纬度矩形范围的宽为1000像素，设置经纬度矩形范围的高为1000像素，设置地图区域和边界之间的距离为100像素\nlet cameraUpdate6 = map.newLatLngBounds(latLngBounds, 1000, 1000, 100);\n// 方式8：设置地图显示经纬度范围，设置地图区域和4个方向的边界之间的距离分别为5、6、7、8像素\nlet paddings: mapCommon.Padding = {\n  left:5,\n  top: 6,\n  right: 7,\n  bottom: 8\n};\nlet cameraUpdate7 = map.newLatLngBounds(latLngBounds, paddings);\n\n// 方式9：滚动相机，将相机按照指定的像素点移动\nlet x = 100.0;\nlet y = 100.0;\nlet cameraUpdate8 = map.scrollBy(x, y);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置相机最大最小偏好缩放级别",
      children: "设置相机最大/最小偏好缩放级别"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置最小偏好缩放级别，范围为[2, 20]\nthis.mapController.setMinZoom(6);\n// 设置最大偏好缩放级别，范围为[2, 20]\nthis.mapController.setMaxZoom(14);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置地图相机的边界",
      children: "设置地图相机的边界"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Map Kit支持设置地图相机的边界。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlatlngbounds",
        children: "setLatLngBounds"
      }), "接口指定一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#latlngbounds",
        children: "LatLngBounds"
      }), "来约束相机目标，使用户移动地图时，相机目标不会移出此边界。当设置参数为空时，地图相机的边界清除。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let bounds: mapCommon.LatLngBounds = {\n  northeast: {\n    latitude: 31,\n    longitude: 118\n  },\n  southwest: {\n    latitude: 30,\n    longitude: 113\n  }\n};\nthis.mapController.setLatLngBounds(bounds);\n"
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
756693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479025-24bc5d7c8e7a04f7de864f481c0fe3e2.jpg");

},
166470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799376-c0efb238ae1a4ae5007540f6089aee92.jpg");

},
779821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959026-760960a2d5d2e72d29f77daa097aeb24.jpg");

},
459169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439071-98d02d82e825a0b7ee4e8389014411f0.jpg");

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