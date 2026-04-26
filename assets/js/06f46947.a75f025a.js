"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["240892"], {
285896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_interaction_map_controls_and_interaction_map_controls_and_interaction_md_06f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-interaction-map-controls-and-interaction-map-controls-and-interaction-md-06f.json
var site_docs_map_kit_guide_map_interaction_map_controls_and_interaction_map_controls_and_interaction_md_06f_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-interaction/map-controls-and-interaction/map-controls-and-interaction","title":"控件交互","description":"场景介绍","source":"@site/docs/map-kit-guide/map-interaction/map-controls-and-interaction/map-controls-and-interaction.md","sourceDirName":"map-kit-guide/map-interaction/map-controls-and-interaction","slug":"/map-kit-guide/map-interaction/map-controls-and-interaction/","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-controls-and-interaction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"控件交互","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-controls-and-interaction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"显示自定义地图","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-style/"},"next":{"title":"手势交互","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-controls-and-gestures/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-interaction/map-controls-and-interaction/map-controls-and-interaction.md


const frontMatter = {
	title: '控件交互',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-controls-and-interaction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '控件交互';

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
  "value": "缩放控件",
  "id": "缩放控件",
  "level": 3
}, {
  "value": "比例尺",
  "id": "比例尺",
  "level": 3
}, {
  "value": "指南针",
  "id": "指南针",
  "level": 3
}, {
  "value": "地图Logo",
  "id": "地图logo",
  "level": 3
}, {
  "value": "审图号",
  "id": "审图号",
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
        id: "控件交互",
        children: "控件交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)开始，支持在地图左下角设置审图号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何使用地图的控件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["控件是指浮在地图组件上的一系列用于操作地图的组件，例如缩放按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288545)/* ["default"] */.A) + "",
        width: "27",
        height: "53"
      }), "、定位按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884376)/* ["default"] */.A) + "",
        width: "26",
        height: "27"
      }), "、比例尺", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905255)/* ["default"] */.A) + "",
        width: "64",
        height: "29"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(72072)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是地图的控件相关接口，该功能有2种实现方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["地图初始化时，可在初始化参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
          children: "MapOptions"
        }), "中设置是否启用控件功能，详细讲解见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-creation/map-presenting",
          children: "显示地图"
        }), "章节。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
          children: "MapComponentController"
        }), "提供的set方法实现相关控件的开启或关闭。"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setzoomcontrolsenabled",
              children: "setZoomControlsEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用缩放控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationenabled",
              children: "setMyLocationEnabled"
            }), "(myLocationEnabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用我的位置图层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationcontrolsenabled",
              children: "setMyLocationControlsEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用我的位置按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setscalecontrolsenabled",
              children: "setScaleControlsEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用比例尺。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setscaleposition",
              children: "setScalePosition"
            }), "(point: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mappoint",
              children: "mapCommon.MapPoint"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置比例尺控件的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setalwaysshowscaleenabled",
              children: "setAlwaysShowScaleEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否始终显示比例尺。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setcompasscontrolsenabled",
              children: "setCompassControlsEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用指南针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlogoalignment",
              children: "setLogoAlignment"
            }), "(alignment: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#logoalignment",
              children: "mapCommon.LogoAlignment"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图Logo的对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setapprovenumberenabled",
              children: "setApproveNumberEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否显示审图号，只有路由地在中国才会显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["mapController对象在初始化地图时获取，初始化地图功能在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-creation/map-presenting",
        children: "显示地图"
      }), "章节中有详细讲解。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "缩放控件",
      children: "缩放控件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供了内置的缩放控件，默认情况下是开启的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启缩放控件\nthis.mapController.setZoomControlsEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935774)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "比例尺",
      children: "比例尺"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供了内置的比例尺控件，默认情况下是关闭的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启比例尺控件\nthis.mapController.setScaleControlsEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425608)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调整比例尺位置："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setscaleposition",
        children: "setScalePosition"
      }), "方法设置比例尺控件的位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let point: mapCommon.MapPoint = {\n  // 以当前地图组件左上角为原点，向右移动1000px\n  positionX: 1000,\n  // 以当前地图组件左上角为原点，向下移动1000px\n  positionY: 1000\n};\nthis.mapController.setScalePosition(point);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941702)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取当前层级的比例尺大小："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#getscalelevel",
        children: "getScaleLevel"
      }), "方法获取当前层级比例尺大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let level = this.mapController.getScaleLevel();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取比例尺控件宽高："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#getscalecontrolsheight",
        children: "getScaleControlsHeight"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#getscalecontrolswidth",
        children: "getScaleControlsWidth"
      }), "方法获取当前比例尺控件宽高。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取比例尺控件的高度\nlet height = this.mapController.getScaleControlsHeight();\n// 获取比例尺控件的宽度\nlet width = this.mapController.getScaleControlsWidth();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置比例尺控件常显："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setalwaysshowscaleenabled",
        children: "setAlwaysShowScaleEnabled"
      }), "方法设置比例尺控件常显，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#isalwaysshowscaleenabled",
        children: "isAlwaysShowScaleEnabled"
      }), "方法查询比例尺控件是否常显。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置比例尺控件常显\nthis.mapController.setAlwaysShowScaleEnabled(true);\n// 查询比例尺控件是否常显\nlet scaleEnabled: boolean = this.mapController.isAlwaysShowScaleEnabled();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指南针",
      children: "指南针"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供了内置的指南针控件，默认情况下是开启的，控件位置默认显示在地图的右上角。如果是启用状态，当地图不是指向正北方向或者发生倾斜时，地图右上角会显示一个指南针图标，点击指南针可使地图旋转为正北方向并且取消倾斜；当地图为正北方向且未发生倾斜时，指南针图标隐藏。如果是禁用状态，将不会显示指南针图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启指南针控件\nthis.mapController.setCompassControlsEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60852)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调整指南针位置："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setcompassposition",
        children: "setCompassPosition"
      }), "方法设置指南针控件的位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let point: mapCommon.MapPoint = {\n  // 以当前地图组件左上角为原点，向右移动1000px\n  positionX: 1000,\n  // 以当前地图组件左上角为原点，向下移动1000px\n  positionY: 1000\n};\nthis.mapController.setCompassPosition(point);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52727)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图logo",
      children: "地图Logo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Map Kit提供了调整地图Logo对齐方式的方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlogoalignment",
        children: "setLogoAlignment"
      }), "和调整地图边界与Logo之间的间距的方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlogopadding",
        children: "setLogoPadding"
      }), "。需注意，地图Logo不允许被遮挡，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setlogopadding",
        children: "setLogoPadding"
      }), "方法设置地图边界区域，来避免logo被遮挡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 将Logo放置在右下角位置\nthis.mapController.setLogoAlignment(mapCommon.LogoAlignment.BOTTOM_END);\n// 设置地图边界与Logo之间的间距，单位：px\nlet padding: mapCommon.Padding = {\n  right: 50,\n  bottom: 50\n};\nthis.mapController.setLogoPadding(padding);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(128135)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "审图号",
      children: "审图号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "审图号是指国家对地图产品进行审核并颁发的编号，用于标识地图已通过国家测绘地理信息局的审查。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Map Kit通过方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setapprovenumberenabled",
        children: "setApproveNumberEnabled"
      }), "展示审图号。如图左下角："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 显示审图号\nthis.mapController?.setApproveNumberEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(867287)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "368",
        height: "813"
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
425608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799372-47e1eb4446c27d1b4a46caf948ff2021.jpg");

},
867287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439069-c9b939993496dbfdb4236734913a84a2.jpg");

},
128135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799374-1280da458fe67eb7db4a8533ab381256.jpg");

},
905255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAdCAYAAAAaeWr3AAAEqElEQVRYCe1YS2xUVRjuw8YQS0yIWxvTFWhITKORTFzNwo1mXtSVBrGU0ukQcdoRDG0xFKIxonFBMYIo8YFaI7jAxE5nWprSqXGBkaDLljbYNqXtzNx7Hvcxw2f+czv0kcy0jQvvCIs/5957zp2c/7vf/33/mQrGLdzPUXE/J0+5PwBgXQYwC4zl/l24uMweMKAYA3RmgsKZp5HuDTVquqGunfnlOSFtSMNeWmchqwlw4W6RLcqAAgBC5sA4JSyg6RyL6SyENFUYpgXLtsE4JSrx1dcXIQ1LreXCgGXnkNWYq11mXQC4MHHhwpc4//kXKr65+K1KnnGJs+c+w3ff/wACQkgD/kBIJU1gnT13Hpcu/wRpFFjkTiasAcChM9GdqEuUn5mdw/btTyIWO4xotANdXccgpYlshuPGH3+hpuZh9PfHIaVEMBiEYRi4cuVnbNnyCCbGJ6Fr4h4DlkvKPWAUBaBQ7/3xJNraIippIQxwojsXENwE0yWGh0dw4sRJmKaJQCAAy7Jw6NCbuH79dwhugOmkG+5JeO1eigJQELBTH36M48d7kEr9iunpGViWDV3n+Pv2DPp/SSCRSCIeH0A8HkdDQ4MaBwYS6lliYAjzd9KQRn6FoLoLjKIAEAOo/lsOtGHXLg/C4Qg8nufR03NSMSA1+htiHUfQ3h5TX7y2thZVVVWoq6tDR0dMlUx79C1MjE/BEVJ3JV5gQlEAiAEEwvjEFKambqsSSKXGsHXro7h5809wZigdYEygt/cMPB4PvF4v6uvr0dfXh1zurqK/KgNugQuyR/cJYlEAKHlNd0DQNKZoPzs7p8RtdHQMpAfz82l8cOojhHY3YmFhET6fH7duTcLvD+D06V5kswyMSVcmvi4DyAkM04bX+wJ+vHRZ2RxZ4LZtj2F6ZlbNhXa/jB07nlJOQZ7/4ks+5PJ3MT4xicfrnsArr+6BncvDMPOuFcISDJAgrx+5NgafPwSfL4hgsBGJ5JDShnffex9H3u5UjQ5pBXk/rTMtapwk5u4sIBqNqebItPJwuscyKgGn+3Na3kyWY34hi3TG6epWtsBEJbrPZBn2vNasvrjOCDx6JiANAsRZU1YaQAlQ0KY13YROoU6GdDqkhFaEbkLTJISwIGVOvUPzmkYAulP9N6QBBRAYz0HXyf/te8dizvPquvBcCFpjLa2xoWnOtXrnP2uE1i+5NRqwlCC3MHR1BNdGx9Qhp4CW60e2vH8hLSXGZz75tKQArwKAviD9+UGe3dLShu7ud5DJ6iV/wFWgrACAzjKJ5CCqq2tK7n81AKqubdC5fn9LGEePdilFd1WSpcppBQDUyA0ODaOiomrjADBG3ZqtGEAAdHZ2gxSdLKwsQiMxtpb2KpEcvIrKyurNAEDK7gDQvD+Mzq5j6uxPdCqPoL1TCZPzmAqAio0D4PzlRU1NOqNj586n8cyzzyFy8A20hiNlEgfRGqaI4EBrG0KhRlRWPbRRBhAARHeOhcUMmvY14/Wmfdi7t0mNdF1e0YymJsqheTMAOJ2fpktQ90dMoJEEpdyC9k3d7GK6tIutcoGyUftSTrDJudUAKBuhZuJ/FiVA+QcD+NFkDG/+WQAAAABJRU5ErkJggg==");

},
884376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAADv0lEQVRIDbWWSyh0YRjHxz33XENhoVBKSSiSxELJJTu3BQuXFCsLwsK1KAtLOyIlNijCxkIhEiUslBLhG/ncxoy5/L/+T87pMMaM8k29nfe87znP77n832eODu8/m82G/zWsVgt0PzVutVrx+vqKt7c3lx2D7QcgAjiWl5dxeXkJs9ks9644CpvV9YgsFotEkZeXh9bWVphMJnCNcFdgLqfu6ekJR0dHSE1NRUZGBs7OzgTkCoTPOASxBgaDQUZnZyeio6MRGhoKb29v+Pj4ICIiArGxsejv78fj46NTqEMQU3N+fo6AgABERkaisrISu7u7eHl5ETEsLi4iMzNTgNnZ2Tg8PJQUOkrlBxAfYiTM/fb2NmJiYlBaWor9/X0pvlITpT68n56eRlJSEsLDw3F6eioZ+CqdH0B8gKCDgwPk5OSgsLAQz8/PUnAavb+/x8nJCY6Pj9VU8XlGFxUVhbKyMoeytwNRtqOjo+Lh+vq6RMK11dVVVFRUIDc3V0ZDQwN2dnZk32g0YmpqCiEhIVhaWvpShR9ATN3t7S1aWlrQ0dGBh4cHqcfe3h4SEhLg5eUFnU4nw9PTUyLmHqOiMxRJeXn59yAqjJ5tbW0hLS0Ns7OzkjKuE+rm5qZCCOO9r68vBgcHVcO1tbUoKChQwVphqBHRI6qL8vXw8MDc3JyAWKP8/Hw7EGHu7u4YGBhQQTMzM/Kun58f6urqcHNzo+6pIHo+NjaG6upqOTPz8/OSDva15uZmMFWfoyKor69PNdbd3Y34+Hi0tbVhYWFB0q4oUAUpC+xjVVVVGB4elhpRbWtrawgMDJQaaWEpKSnY2NhQQXFxcVI3xZb2agei4Z6eHvFMaTOU9dDQkHQCRsHowsLCMDk5Kc7wEFNETNnIyIgKdghi8SgInovExEQ0NTWp54XGLi4ucHV1hevra8k/Val0iqysLJE3e6IWoMztIqIoOBobG0UY4+PjclC5pv0fokNcu7u7k/YUFBSEzc1N1w+s4gGjq6+vR3BwsNRsZWVFWhFVSOGwe1CZxcXF0tGZWrYmraQVW7zaRaTdZL16e3tRU1MDf39/sHmyfl1dXSgqKpJUlZSUSCTa/qe1ocy/BfEhnnrWhS1mYmJCGmhycrLMGREFoxj77uoSiN5ysCZstunp6eLAd6n6DHUK0r7AVLa3t4P9jXPtnrP5j0A0xp9er5erM+PafR3AjwsOvI/f/76T7zqjyQCrzULcj1Kh9dbZ/NVkgE7/9xZGswFmWCC4X/xiZX55sPV//+Af5RSGUgJIZZ8AAAAASUVORK5CYII=");

},
935774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479021-5fb985a08e58ad3f6856293a1dc60833.jpg");

},
60852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959022-cbf2c47b83d0f930bc3058fd012f3d0f.jpg");

},
941702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439067-f91d2ffa6f43e21005f8d2ef5218b7ee.jpg");

},
288545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAA1CAYAAACwcpATAAAErUlEQVRYCe2YW0/jVhDH+Y6QwANCdC9pBdkWFdTXSvtG2C4BiQ/Ax+g+gdSHol3RlksLDyu1pVKrFVqSOLbPbeZfzTHH66S5OCG7TwUNxzb2+XkunjNz5pgZk4uDoxQ26YDiLtgasGMQMxwITv6yCIFIhGFZY25SEIEBNnC6A0o7cCr1EwIY+tIgBoimgxFpUNKCE5hVQyFBkQfB2KbguAWnOnDOfByY2P+Pmz/x1+9vM5juwrH9OLDb21tsbW3hm6+/gkvaIJOCmWYPE62ur69Rrz/DYmUeNo3ANF4r8dvEPhPY1dUV1tafoVpdgNMJUEKrqWDydle//Yq1+peoVCpeq1HhHiKxFEw0ER9FUYyo3cHd7Tv89PpHrK99gaWlJXQ6nR7pdrtwzg3031gzin8ODg7Q3G+iubeL716+wPPn32J5eRnz8/PY39/H3t6el93dXRweHsIYMxA4FnZ8fIzNzU08ffrIS632BI+fPMbi4iIWFhZQr9dRq9VykXunhsmDFxdnOD99jbPTNzj/5We8+v4VarXPvWbn5+cIcnFx4SN1PAwWDAvcj5IRrE5AKgLHbRiVwhrj818W+nVUq9WBvhE/FwMjHH8wIzQYxotzKWy3DU464LQFSu5gJaMze5iEvphPTBkmKjPmMNgEZLpwKvLC3RY4aYN1FyBJstnbSqRdXl5ifX0dKysr08FI1qT0frmQLK5jkNVg6g1jgd3c3GBjYwOrq6te0zJayT25ZiaNszVJK7BA7jWRBa84mfhDAuDk5ARHR0ewNktVRA5W/FwQQwZF8XHgHObIOoiwo0xGrNwCFIhoGYLBkYO2CsZpL9ppKOoXBSWw4ttPcyzLv8CKkjqFXkkRk8WcLPNFmRRYBmZsCmU/Fcyk0AKbVJP++0Uz8dcoM+qgWf/Dk56Xh80oQD6hZlTSjGYGPgPDMcGS+M5COwvVJ9k3OAMzio+l7PYipbaA+0TKPcf8cM0EluW+bBwUYFL9y7f84NAvgsJxP1Bgcu3BsP6JB53nWX/QP2d97X9YzwI6rXkLZpQaY3BVNO3k/c/lMKk5QFkFVbZ2759s3HkOk3LNSfsj2o3oi8dNOOr/H2Bpx3f9VsVgJwWPfICzNWsOsyaFSSJQKtKBlX7Zm3V2wBwmiVM6SBLNksib1NkEzBZSpo37kUpLJJhRyr1wHMYclh0wyBkY1QWnEVwiGibwhYpSUGNEAGkq/XVWpgdIGP8DE185p+HEpEkLl2dv8NmjFVQqVd9pSrc5SKR9kuvSt0ktGerJAJIxhxUvyjFZ5X13evID9l6+QKOxg50dkcb9GM6zsdFoYHt7G81mE1rrHpOGuYfCZKEjUrAqwt0/N3j/7m+0727Rbt2h1WoNFTG1mHMyzcSccD4qKXkPTlpgFQEltyGCNsVxqGay3eB/2cLqtu/RKG2DdDz19zcUFt4opC6nYniY7Oj4Lqe3uwn3jxrHwvKHyWT9W9KGB/f1bfl9I7qfCWAENon/HCTLOKMHBsEoaGmYlGg+fenI99o2iX1XOijqhgHLw3xlZOH3GBPZQejCpYnfnJV1YhigeL00LDwE+f4kWOIINg47qOWSdYD9C+ZWpCgnOU63AAAAAElFTkSuQmCC");

},
52727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479023-8333efd43e4b6c40285d3dc63c91af93.jpg");

},
72072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959020-c24ed77bbccebbf11a6c59ba32ef7db6.jpg");

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