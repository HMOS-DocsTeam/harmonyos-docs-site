"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["927575"], {
242396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_drawing_map_annotation_map_annotation_md_eff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-drawing-map-annotation-map-annotation-md-eff.json
var site_docs_map_kit_guide_map_drawing_map_annotation_map_annotation_md_eff_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-drawing/map-annotation/map-annotation","title":"点注释","description":"场景介绍","source":"@site/docs/map-kit-guide/map-drawing/map-annotation/map-annotation.md","sourceDirName":"map-kit-guide/map-drawing/map-annotation","slug":"/map-kit-guide/map-drawing/map-annotation/","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-annotation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"点注释","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-annotation","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"圆形","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-circle/"},"next":{"title":"气泡","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-bubble/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-drawing/map-annotation/map-annotation.md


const frontMatter = {
	title: '点注释',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-annotation',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '点注释';

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
  "value": "添加点注释",
  "id": "添加点注释",
  "level": 3
}, {
  "value": "设置监听点注释点击事件",
  "id": "设置监听点注释点击事件",
  "level": 3
}, {
  "value": "点注释动画",
  "id": "点注释动画",
  "level": 3
}, {
  "value": "点注释标题动画",
  "id": "点注释标题动画",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "点注释",
        children: "点注释"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何在地图的指定位置添加点注释以标识位置、商家、建筑等，并可以通过信息窗口展示详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点注释支持功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持设置图标、文字、碰撞规则等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持添加点击事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "有默认风格，同时也支持自定义。由于内容丰富，以下只展示一些基础功能的使用，详细内容可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(575276)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加点注释功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-common/map-common#pointannotationparams",
        children: "PointAnnotationParams"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addpointannotation",
        children: "addPointAnnotation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onpointannotationclick",
        children: "on"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#offpointannotationclick",
        children: "off"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-common/map-common#pointannotationparams",
              children: "PointAnnotationParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点注释参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#addpointannotation",
              children: "addPointAnnotation"
            }), "(params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#pointannotationparams",
              children: "mapCommon.PointAnnotationParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
              children: "PointAnnotation"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在地图上添加点注释。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
              children: "PointAnnotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点注释，支持更新和查询相关属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onpointannotationclick",
              children: "on"
            }), "(type: 'pointAnnotationClick', callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
              children: "PointAnnotation"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置点注释点击事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#offpointannotationclick",
              children: "off"
            }), "(type: 'pointAnnotationClick', callback?: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
              children: "PointAnnotation"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听点注释点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加点注释",
      children: "添加点注释"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加点注释，在callback方法中创建初始化参数并新建点注释。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PointAnnotationDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private mapController?: map.MapComponentController;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapEventManager?: map.MapEventManager;\n  private pointAnnotation?: map.PointAnnotation;\n  aboutToAppear(): void {\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 32.020750,\n          longitude: 118.788765\n        },\n        zoom: 14\n      }\n    };\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        let pointAnnotationOptions: mapCommon.PointAnnotationParams = {\n          // 定义点注释图标锚点\n          position: {\n            latitude: 32.020750,\n            longitude: 118.788765\n          },\n          // 定义点注释名称与地图POI名称相同时，是否支持去重\n          repeatable: true,\n          // 定义点注释的碰撞规则\n          collisionRule: mapCommon.CollisionRule.NAME,\n          // 定义点注释的标题，数组长度最小为1，最大为3\n          titles: [{\n            // 定义标题内容\n            content: \"南京夫子庙\",\n            // 定义标题字体颜色\n            color: 0xFF000000,\n            // 定义标题字体大小\n            fontSize: 15,\n            // 定义标题描边颜色\n            strokeColor: 0xFFFFFFFF,\n            // 定义标题描边宽度\n            strokeWidth: 2,\n            // 定义标题字体样式\n            fontStyle: mapCommon.FontStyle.ITALIC\n          }],\n          // 定义点注释的图标，图标存放在resources/rawfile\n          icon: \"\",\n          // 定义点注释是否展示图标\n          showIcon: true,\n          // 定义点注释的锚点在水平方向上的位置\n          anchorU: 0.5,\n          // 定义点注释的锚点在垂直方向上的位置\n          anchorV: 1,\n          // 定义点注释的显示属性，为true时，在被碰撞后仍能显示\n          forceVisible: false,\n          // 定义碰撞优先级，数值越大，优先级越低\n          priority: 3,\n          // 定义点注释展示的最小层级\n          minZoom: 2,\n          // 定义点注释展示的最大层级\n          maxZoom: 20,\n          // 定义点注释是否可见\n          visible: true,\n          // 定义点注释叠加层级属性\n          zIndex: 10\n        }\n\n        // 创建pointAnnotation\n        try {\n          this.pointAnnotation = await this.mapController.addPointAnnotation(pointAnnotationOptions);\n        } catch (e) {\n          console.error(`Failed to create the pointAnnotation, code is：${e.code}, message is ${e.message}`);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    };\n  }\n  build() {\n    Stack() {\n      Column() {\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback });\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(481272)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在添加点注释之后，修改已经设置的点注释属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置点注释的显示层级为3~14级\nthis.pointAnnotation.setZoom(3,14);\n// 设置点注释的碰撞优先级为10\nthis.pointAnnotation.setPriority(10);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置监听点注释点击事件",
      children: "设置监听点注释点击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (pointAnnotation: map.PointAnnotation) => {\n  console.info(\"pointAnnotationClick\", `pointAnnotationClick: ${pointAnnotation.getId()}`);\n};\nthis.mapEventManager.on(\"pointAnnotationClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点注释动画",
      children: "点注释动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-basepriorityoverlay/map-map-basepriorityoverlay#setanimation",
        children: "setAnimation"
      }), "方法设置动画。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-basepriorityoverlay/map-map-basepriorityoverlay#startanimation",
        children: "startAnimation"
      }), "方法启动动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let animation: map.ScaleAnimation = new map.ScaleAnimation(1, 3, 1, 3);\n// 设置动画单次的时长\nanimation.setDuration(3000);\n// 设置动画开始监听\nlet callbackStart = () => {\n  console.info(\"animationStart\", `callback`);\n};\nanimation.on(\"animationStart\", callbackStart);\n// 设置动画结束监听\nlet callbackEnd = () => {\n  console.info(\"animationEnd\", `callback`);\n};\nanimation.on(\"animationEnd\", callbackEnd);\n// 设置动画执行完成的状态\nanimation.setFillMode(map.AnimationFillMode.BACKWARDS);\n// 设置动画重复的方式\nanimation.setRepeatMode(map.AnimationRepeatMode.REVERSE);\n// 设置动画插值器\nanimation.setInterpolator(Curve.Linear);\n// 设置动画的重复次数\nanimation.setRepeatCount(100);\nthis.pointAnnotation.setAnimation(animation);\nthis.pointAnnotation.startAnimation();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(203514)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点注释标题动画",
      children: "点注释标题动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation#settitleanimation",
        children: "setTitleAnimation"
      }), "方法设置标题动画。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation",
        children: "PointAnnotation"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation#starttitleanimation",
        children: "startTitleAnimation"
      }), "方法启动标题动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let animation: map.FontSizeAnimation = new map.FontSizeAnimation(15, 45);\n// 设置动画单次的时长\nanimation.setDuration(3000);\n// 设置动画开始监听\nlet callbackStart = () => {\n  console.info(\"animationStart\", `callback`);\n};\nanimation.on(\"animationStart\", callbackStart);\n// 设置动画结束监听\nlet callbackEnd = () => {\n  console.info(\"animationEnd\", `callback`);\n};\nanimation.on(\"animationEnd\", callbackEnd);\n// 设置动画执行完成的状态\nanimation.setFillMode(map.AnimationFillMode.FORWARDS);\n// 设置动画重复的方式\nanimation.setRepeatMode(map.AnimationRepeatMode.REVERSE);\n// 设置动画插值器\nanimation.setInterpolator(Curve.Linear);\n// 设置动画的重复次数\nanimation.setRepeatCount(100);\nthis.pointAnnotation.setTitleAnimation(animation);\nthis.pointAnnotation.startTitleAnimation();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(227343)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
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
203514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439085-9377a59462b47cb339e2e82d41091738.gif");

},
227343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959040-20917836767b713effa0de764ed19c92.gif");

},
481272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799390-b2890dfe80b7a25c53f652007249eb83.jpg");

},
575276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479039-b2890dfe80b7a25c53f652007249eb83.jpg");

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