"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["192331"], {
871489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_interaction_map_controls_and_gestures_map_controls_and_gestures_md_a2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-interaction-map-controls-and-gestures-map-controls-and-gestures-md-a2d.json
var site_docs_map_kit_guide_map_interaction_map_controls_and_gestures_map_controls_and_gestures_md_a2d_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-interaction/map-controls-and-gestures/map-controls-and-gestures","title":"手势交互","description":"场景介绍","source":"@site/docs/map-kit-guide/map-interaction/map-controls-and-gestures/map-controls-and-gestures.md","sourceDirName":"map-kit-guide/map-interaction/map-controls-and-gestures","slug":"/map-kit-guide/map-interaction/map-controls-and-gestures/","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-controls-and-gestures/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"手势交互","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-controls-and-gestures","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"控件交互","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-controls-and-interaction/"},"next":{"title":"事件交互","permalink":"/harmonyos-docs-site/map-kit-guide/map-interaction/map-listening/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-interaction/map-controls-and-gestures/map-controls-and-gestures.md


const frontMatter = {
	title: '手势交互',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-controls-and-gestures',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '手势交互';

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
  "value": "地图手势控制",
  "id": "地图手势控制",
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
        id: "手势交互",
        children: "手势交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何使用地图的手势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Map Kit提供了多种手势供用户与地图之间进行交互，如缩放、滚动、旋转和倾斜。这些手势默认开启，如果想要关闭某些手势，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "类提供的接口来控制手势的开关。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474396)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是地图手势相关接口，该功能有2种实现方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["地图初始化时，可在初始化参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-common/map-common#mapoptions",
          children: "MapOptions"
        }), "中设置是否启用手势功能，详细讲解见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-creation/map-presenting",
          children: "显示地图"
        }), "章节。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
          children: "MapComponentController"
        }), "提供的set方法实现相关手势的开启或关闭。"]
      }), "\n"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setzoomgesturesenabled",
              children: "setZoomGesturesEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用缩放手势。  默认值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setscrollgesturesenabled",
              children: "setScrollGesturesEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用滚动手势。  默认值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setrotategesturesenabled",
              children: "setRotateGesturesEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用旋转手势。  默认值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#settiltgesturesenabled",
              children: "setTiltGesturesEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用倾斜手势。  默认值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setallgesturesenabled",
              children: "setAllGesturesEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置手势是否可用。  默认值为true。"
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
      id: "地图手势控制",
      children: "地图手势控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以通过mapController对象来启用或禁止相关的地图手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "缩放手势："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以通过用双指捏合，实现放大缩小地图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setZoomGesturesEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "滚动平移手势："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以通过用手指拖动地图来进行移动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setScrollGesturesEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "旋转手势："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以通过将两个手指放在地图上旋转来旋转地图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setRotateGesturesEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "倾斜手势："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以通过将两个手指放在地图上下滑动来倾斜地图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setTiltGesturesEnabled(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "启用或禁止所有手势："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setallgesturesenabled",
        children: "setAllGesturesEnabled"
      }), "方法，可启用或禁止所有手势。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 禁止所有手势\nthis.mapController.setAllGesturesEnabled(false);\n"
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
474396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959024-c24ed77bbccebbf11a6c59ba32ef7db6.jpg");

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