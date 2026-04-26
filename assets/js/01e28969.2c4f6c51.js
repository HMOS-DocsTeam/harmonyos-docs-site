"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["101070"], {
29449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_interaction_map_listening_map_listening_md_01e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-interaction-map-listening-map-listening-md-01e.json
var site_docs_map_kit_guide_map_interaction_map_listening_map_listening_md_01e_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-interaction/map-listening/map-listening","title":"事件交互","description":"本章节包含地图的点击和长按、相机移动（华为地图的移动是通过模拟相机移动的方式实现的）、以及“我的位置”按钮点击等事件监听。","source":"@site/docs/map-kit-guide/map-interaction/map-listening/map-listening.md","sourceDirName":"map-kit-guide/map-interaction/map-listening","slug":"/map-kit-guide/map-interaction/map-listening/","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-listening/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"事件交互","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-listening","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手势交互","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-controls-and-gestures/"},"next":{"title":"更改地图位置","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-camera/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-interaction/map-listening/map-listening.md


const frontMatter = {
	title: '事件交互',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-listening',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '事件交互';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "初始化地图组件的事件管理接口",
  "id": "初始化地图组件的事件管理接口",
  "level": 3
}, {
  "value": "地图点击事件监听",
  "id": "地图点击事件监听",
  "level": 3
}, {
  "value": "地图长按事件监听",
  "id": "地图长按事件监听",
  "level": 3
}, {
  "value": "相机移动监听",
  "id": "相机移动监听",
  "level": 3
}, {
  "value": "标记点击事件监听",
  "id": "标记点击事件监听",
  "level": 3
}, {
  "value": "我的位置监听",
  "id": "我的位置监听",
  "level": 3
}, {
  "value": "点注释事件监听",
  "id": "点注释事件监听",
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
    li: "li",
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
        id: "事件交互",
        children: "事件交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节包含地图的点击和长按、相机移动（华为地图的移动是通过模拟相机移动的方式实现的）、以及“我的位置”按钮点击等事件监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是地图监听事件相关接口，以下功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager",
        children: "MapEventManager"
      }), "提供，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#geteventmanager",
        children: "getEventManager"
      }), "方法获得", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager",
        children: "MapEventManager"
      }), "，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmapclick",
              children: "on"
            }), "(type: 'mapClick', callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图点击事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmaplongclick",
              children: "on"
            }), "(type: 'mapLongClick', callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图长按事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#oncameramovestart",
              children: "on"
            }), "(type: 'cameraMoveStart', callback: Callback<number>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相机开始移动事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#oncameramove",
              children: "on"
            }), "(type: 'cameraMove', callback: Callback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相机移动事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#oncameraidle",
              children: "on"
            }), "(type: 'cameraIdle', callback: Callback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相机移动结束事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmarkerclick",
              children: "on"
            }), "(type: 'markerClick' , callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker",
              children: "Marker"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标记点击事件监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmylocationbuttonclick",
              children: "on"
            }), "(type: 'myLocationButtonClick', callback: Callback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置我的位置按钮点击事件监听器。"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化地图组件的事件管理接口",
      children: "初始化地图组件的事件管理接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapEventManager = this.mapController.getEventManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图点击事件监听",
      children: "地图点击事件监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (position: mapCommon.LatLng) => {\n  console.info(\"mapClick\", `on-mapClick position = ${position.longitude}`);\n};\nthis.mapEventManager.on(\"mapClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地图长按事件监听",
      children: "地图长按事件监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (position: mapCommon.LatLng) => {\n  console.info(\"mapLongClick\", `on-mapLongClick position = ${position.longitude}`);\n};\nthis.mapEventManager.on(\"mapLongClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机移动监听",
      children: "相机移动监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机移动时（华为地图的移动是通过模拟相机移动的方式实现的），通过设置监听器，能够对相机移动状态进行监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当相机开始移动时，会回调cameraMoveStart。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (reason: number) => {\n  console.info(\"cameraMoveStart\", `on-cameraMoveStart reason = ${reason}`);\n};\nthis.mapEventManager.on(\"cameraMoveStart\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当相机移动或用户与触摸屏交互时，会多次调用cameraMove。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = () => {\n  console.info(\"cameraMove\", `on-cameraMove`);\n};\nthis.mapEventManager.on(\"cameraMove\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当相机停止移动时，会回调cameraIdle。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = () => {\n  console.info(\"cameraIdle\", `on-cameraIdle`);\n};\nthis.mapEventManager.on(\"cameraIdle\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标记点击事件监听",
      children: "标记点击事件监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标记是指在地图的指定位置添加标记以标识位置、商家、建筑等。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-drawing/map-marker",
        children: "标记"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (marker: map.Marker) => {\n  console.info(\"markerClick\", `markerClick: ${marker.getId()}`);\n};\nthis.mapEventManager.on(\"markerClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "我的位置监听",
      children: "我的位置监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-creation/map-location",
        children: "显示我的位置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = () => {\n  console.info(\"myLocationButtonClick\", `myLocationButtonClick`);\n};\nthis.mapEventManager.on(\"myLocationButtonClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点注释事件监听",
      children: "点注释事件监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点注释是指在地图的指定位置添加点注释以标识位置、商家、建筑等，并可以通过信息窗口展示详细信息。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-drawing/map-annotation",
        children: "点注释"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = (pointAnnotation: map.PointAnnotation) => {\n  console.info(\"pointAnnotationClick\", `pointAnnotationClick: ${pointAnnotation.getId()}`);\n};\nthis.mapEventManager.on(\"pointAnnotationClick\", callback);\n"
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