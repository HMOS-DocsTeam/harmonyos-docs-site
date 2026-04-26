"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["427925"], {
297547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_static_diagram_map_static_diagram_md_a66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-static-diagram-map-static-diagram-md-a66.json
var site_docs_map_kit_guide_map_static_diagram_map_static_diagram_md_a66_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-static-diagram/map-static-diagram","title":"静态图","description":"场景介绍","source":"@site/docs/map-kit-guide/map-static-diagram/map-static-diagram.md","sourceDirName":"map-kit-guide/map-static-diagram","slug":"/map-kit-guide/map-static-diagram/","permalink":"/harmonyos-docs-site/map-kit-guide/map-static-diagram/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"静态图","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-static-diagram","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"轨迹绑路","permalink":"/harmonyos-docs-site/map-kit-guide/map-navi/map-navi-snap/"},"next":{"title":"地点详情展示","permalink":"/harmonyos-docs-site/map-kit-guide/map-advanced-controls/map-location-details/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-static-diagram/map-static-diagram.md


const frontMatter = {
	title: '静态图',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-static-diagram',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '静态图';

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
        id: "静态图",
        children: "静态图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何使用静态图功能。静态图功能会返回一张地图图片，您可以将地图以图片形式嵌入自己的应用/元服务中。在使用时，您可以指定请求的地图位置、图片大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 静态图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273980)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1203",
        height: "1787"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是地图静态图相关接口，获取静态图功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap",
        children: "staticMap"
      }), "命名空间下的方法提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap",
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
              href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#staticmapoptions",
              children: "StaticMapOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述静态图属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#getmapimage",
              children: "getMapImage"
            }), "(options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#staticmapoptions",
              children: "StaticMapOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据提供的参数创建静态图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#getmapimage-1",
              children: "getMapImage"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#staticmapoptions",
              children: "StaticMapOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据提供的参数创建静态图。支持上传Context上下文。"
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
            children: "import { staticMap } from '@kit.MapKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建静态图初始化参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-staticmap/map-staticmap#getmapimage",
            children: "getMapImage"
          }), "方法获取静态图，效果如下图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct StaticMapDemo {\n  @State image?: PixelMap = undefined;\n\n  build() {\n    Column() {\n      this.buildDemoUI();\n    }.width('100%')\n    .margin({ bottom: 48 })\n    .backgroundColor(0xf2f2f2)\n    .height('100%')\n  }\n\n  @Builder\n  buildDemoUI() {\n    // 展示获取的静态图\n    Image(this.image)\n      .width('100%')\n      .fitOriginalSize(false)\n      .border({ width: 1 })\n      .borderStyle(BorderStyle.Dashed)\n      .objectFit(ImageFit.Contain)\n      .height(\"90%\")\n\n    Row() {\n      Button(\"getStaticMap\")\n        .fontSize(12)\n        .onClick(async () => {\n          // 设置静态图标记参数\n          let markers: Array<staticMap.StaticMapMarker> = [{\n            location: {\n              latitude: 50,\n              longitude: 126.3\n            },\n            font: 'statics',\n            defaultIconSize: staticMap.IconSize.TINY\n          }];\n\n          // 设置静态图绘制路径参数\n          let path: staticMap.StaticMapPath = {\n            locations: [\n              {\n                latitude: 50,\n                longitude: 126\n              },\n              {\n                latitude: 50.3,\n                longitude: 126\n              },\n              {\n                latitude: 50.3,\n                longitude: 126.3\n              },\n              {\n                latitude: 49.7,\n                longitude: 126\n              },\n              {\n                latitude: 50,\n                longitude: 126\n              }\n            ],\n            width: 3\n          };\n\n          // 拼装静态图参数\n          let option: staticMap.StaticMapOptions = {\n            location: {\n              latitude: 50,\n              longitude: 126\n            },\n            zoom: 10,\n            imageWidth: 1024,\n            imageHeight: 1024,\n            scale: 1,\n            markers: markers,\n            path: path\n          };\n\n          try {\n            // 获取静态图\n            this.image = await staticMap.getMapImage(option);\n            console.info(\"Succeeded in getting image.\");\n          } catch (error) {\n            const err: BusinessError = error as BusinessError;\n            console.error(`Failed in getting image, code: ${err.code}, message: ${err.message}`);\n          }\n        })\n    }.margin({ top: 12 })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " 调用getMapImage方法获取静态图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(159576)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1199",
            height: "1221"
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
273980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479047-6491514fc4d335fe8db35ec2d079e563.jpg");

},
159576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799398-98aab854f259517c50b8fea1a4bb3c59.jpg");

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