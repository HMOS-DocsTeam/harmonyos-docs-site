"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780950"], {
449813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_features_pen_image_feature_picker_pen_image_feature_picker_md_058_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-features-pen-image-feature-picker-pen-image-feature-picker-md-058.json
var site_docs_system_hardware_pen_kit_guide_pen_features_pen_image_feature_picker_pen_image_feature_picker_md_058_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/pen-image-feature-picker","title":"接入全局取色","description":"接入全局取色功能，用户可以使用手指或者手写笔操作取色器在屏幕上移动，在目标位置抬起手指/抬起手写笔，会生成该位置色值对应的图像信息。","source":"@site/docs/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/pen-image-feature-picker.md","sourceDirName":"system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker","slug":"/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"接入全局取色","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-image-feature-picker","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入一笔成形","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/"},"next":{"title":"接入手写交互","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/pen-image-feature-picker.md


const frontMatter = {
	title: '接入全局取色',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-image-feature-picker',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入全局取色';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "限制与约束",
  "id": "限制与约束",
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
        id: "接入全局取色",
        children: "接入全局取色"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入全局取色功能，用户可以使用手指或者手写笔操作取色器在屏幕上移动，在目标位置抬起手指/抬起手写笔，会生成该位置色值对应的图像信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用中拉起全局取色，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997942)/* ["default"] */.A) + "",
        width: "525",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持获取当前屏幕上选中位置的色值和色域空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制与约束",
      children: "限制与约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局取色能力支持设备：Tablet、PC/2in1，并且从5.1.1(19)版本开始，新增支持设备：Phone。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备不支持连接手写笔的话，无法使用全局取色能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-imagefeaturepicker/pen-imagefeaturepicker",
              children: "imageFeaturePicker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-imagefeaturepicker/pen-imagefeaturepicker#pickforresult",
              children: "pickForResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动取色器。此API用于启动取色器，在取色器移动时不显示色值。"
          })]
        })
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
            children: "import { imageFeaturePicker } from '@kit.Penkit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造全局取色能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Stack({ alignContent: Alignment.Center }) {\n      Column() {\n        Row() {\n          Button() {\n            Text('Call GlobalColorPicker from ets side')\n              .fontSize(18)\n              .fontWeight(FontWeight.Normal)\n          }\n          .width('50%')\n          .height('60vp')\n          .align(Alignment.Center)\n          .onClick((event) => {\n            imageFeaturePicker.pickForResult(event.displayX, event.displayY)\n              .then((colorInfo: imageFeaturePicker.PickedColorInfo) => {\n                if (colorInfo) {\n                  console.info('colorInfo=' + JSON.stringify(colorInfo));\n                }\n              }).catch((err: BusinessError) => {\n              console.error(`pickForResult failed. Code is ${err.code}, message is ${err.message}`)\n            })\n          })\n        }\n      }\n      .align(Alignment.Center)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
997942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958476-bf13b186824bace999b6ae8d8e5c968e.png");

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