"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["388149"], {
518934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_color_effect_arkts_color_effect_md_f49_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-effects-arkts-color-effect-arkts-color-effect-md-f49.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_color_effect_arkts_color_effect_md_f49_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/arkts-color-effect","title":"色彩","description":"色彩","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/arkts-color-effect.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"色彩","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-color-effect","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"阴影","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/"},"next":{"title":"帧动画（ohos.animator）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/arkts-color-effect.md


const frontMatter = {
	title: '色彩',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-color-effect',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '色彩';

const assets = {

};



const toc = [{
  "value": "色彩",
  "id": "色彩-1",
  "level": 2
}, {
  "value": "为组件添加线性渐变效果",
  "id": "为组件添加线性渐变效果",
  "level": 2
}, {
  "value": "为组件添加角度渐变效果",
  "id": "为组件添加角度渐变效果",
  "level": 2
}, {
  "value": "为组件添加径向渐变效果",
  "id": "为组件添加径向渐变效果",
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
        id: "色彩",
        children: "色彩"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "色彩-1",
      children: "色彩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过颜色渐变接口，可以设置组件的背景颜色渐变效果，实现在两个或多个指定的颜色之间进行平稳的过渡。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color#lineargradient",
              children: "linearGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加线性渐变的颜色渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color#sweepgradient",
              children: "sweepGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加角度渐变的颜色渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color#radialgradient",
              children: "radialGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加径向渐变的颜色渐变效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为组件添加线性渐变效果",
      children: "为组件添加线性渐变效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LinearGradientDemo {\n  build() {\n    Grid() {\n      GridItem() {\n        Column() {\n          Text('angle: 180')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .linearGradient({\n          // 0点方向顺时针旋转为正向角度，线性渐变起始角度的默认值为180°\n          colors: [\n            [0xf56c6c, 0.0], // 颜色断点1的颜色和比重，对应组件在180°方向上的起始位置\n            [0xffffff, 1.0],// 颜色断点2的颜色和比重，对应组件在180°方向上的终点位置\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('angle: 45')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .linearGradient({\n          angle: 45, // 设置颜色渐变起始角度为顺时针方向45°\n          colors: [\n            [0xf56c6c, 0.0],\n            [0xffffff, 1.0],\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: true')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .linearGradient({\n          repeating: true, // 在当前组件内0.3到1.0区域内重复0到0.3区域的颜色渐变效果\n          colors: [\n            [0xf56c6c, 0.0],\n            [0xE6A23C, 0.3],\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: false')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .linearGradient({\n          colors: [\n            [0xf56c6c, 0.0], // repeating默认为false，此时组件内只有0到0.3区域内存在颜色渐变效果\n            [0xE6A23C, 0.3],\n          ]\n        })\n      }\n    }\n    .columnsGap(10)\n    .rowsGap(10)\n    .columnsTemplate('1fr 1fr')\n    .rowsTemplate('1fr 1fr 1fr')\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777331)/* ["default"] */.A) + "",
        width: "331",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为组件添加角度渐变效果",
      children: "为组件添加角度渐变效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SweepGradientDemo {\n  build() {\n    Grid() {\n      GridItem() {\n        Column() {\n          Text('center: 50')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .sweepGradient({\n          center: [50, 50], // 角度渐变中心点\n          start: 0, // 角度渐变的起点\n          end: 360, // 角度渐变的终点。\n          repeating: true, // 渐变效果在重复\n          colors: [\n            // 当前组件中，按照中心点和渐变的起点和终点值,\n            // 角度区域为0-0.125的范围，从颜色断点1的颜色渐变到颜色断点2的颜色,\n            // 角度区域0.125到0.25的范围，从颜色断点2的颜色渐变到颜色断点3的颜色,\n            // 因为repeating设置为true，角度区域0.25到1的范围，重复区域0到0.25的颜色渐变效果\n            [0xf56c6c, 0], // 颜色断点1的颜色和比重，对应角度为0*360°=0°，角点为中心点\n            [0xffffff, 0.125], // 颜色断点2的颜色和比重\n            [0x409EFF, 0.25]// 颜色断点3的颜色和比重\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('center: 0')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .sweepGradient({\n          center: [0, 0], // 角度渐变中心点，当前为组件的左上角坐标\n          start: 0,\n          end: 360,\n          repeating: true,\n          colors: [\n            // 当前组件中，因为角度渐变中心是组件的左上角，所以从颜色断点1到颜色断点3的角度范围，恰好可以覆盖整个组件\n            [0xf56c6c, 0], // 颜色断点1的颜色和比重，对应角度为0*360°=0°\n            [0xffffff, 0.125], // 颜色断点2的颜色和比重，对应角度为0.125*360°=45°\n            [0x409EFF, 0.25]// 颜色断点3的颜色和比重，对应角度为0.25*360°=90°\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: true')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .sweepGradient({\n          center: [50, 50],\n          start: 0,\n          end: 360,\n          repeating: true,\n          colors: [\n            [0xf56c6c, 0],\n            [0xffffff, 0.125],\n            [0x409EFF, 0.25]\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: false')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .sweepGradient({\n          center: [50, 50],\n          start: 0,\n          end: 360,\n          repeating: false, //只在颜色断点角度覆盖范围内产生颜色渐变效果，其余范围内不重复\n          colors: [\n            [0xf56c6c, 0],\n            [0xffffff, 0.125],\n            [0x409EFF, 0.25]\n          ]\n        })\n      }\n    }\n    .columnsGap(10)\n    .rowsGap(10)\n    .columnsTemplate('1fr 1fr')\n    .rowsTemplate('1fr 1fr 1fr')\n    .width('100%')\n    .height(437)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(383206)/* ["default"] */.A) + "",
        width: "337",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为组件添加径向渐变效果",
      children: "为组件添加径向渐变效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RadialGradientDemo {\n  build() {\n    Grid() {\n      GridItem() {\n        Column() {\n          Text('center: 50')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .radialGradient({\n          center: [50, 50], // 径向渐变中心点\n          radius: 100, // 径向渐变半径\n          repeating: true, // 允许在组件内渐变范围外重复按照渐变范围内效果着色\n          colors: [\n            // 组件内以[50，50]为中心点，在半径为0到12.5的范围内从颜色断点1的颜色渐变到颜色断点2的颜色,\n            // 在半径为12.5到25的范围内从颜色断点2的颜色渐变到颜色断点3的颜色,\n            // 组件外其他半径范围内按照半径为0到25的渐变效果重复着色\n            [0xf56c6c, 0], // 颜色断点1的颜色和比重，对应半径为0*100=0\n            [0xffffff, 0.125], // 颜色断点2的颜色和比重，对应半径为0.125*100=12.5\n            [0x409EFF, 0.25]// 颜色断点3的颜色和比重，对应半径为0.25*100=25\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('center: 0')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .radialGradient({\n          center: [0, 0], // 径向渐变中心点，当前为组件左上角坐标\n          radius: 100,\n          repeating: true,\n          colors: [\n            [0xf56c6c, 0],\n            [0xffffff, 0.125],\n            [0x409EFF, 0.25]\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: true')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .radialGradient({\n          center: [50, 50],\n          radius: 100,\n          repeating: true,\n          colors: [\n            [0xf56c6c, 0],\n            [0xffffff, 0.125],\n            [0x409EFF, 0.25]\n          ]\n        })\n      }\n\n      GridItem() {\n        Column() {\n          Text('repeat: false')\n            .fontSize(15)\n        }\n        .width(100)\n        .height(100)\n        .justifyContent(FlexAlign.Center)\n        .borderRadius(10)\n        .radialGradient({\n          center: [50, 50],\n          radius: 100,\n          repeating: false, // 在组件内渐变范围外不重复按照渐变范围内效果着色\n          colors: [\n            [0xf56c6c, 0],\n            [0xffffff, 0.125],\n            [0x409EFF, 0.25]\n          ]\n        })\n      }\n    }\n    .columnsGap(10)\n    .rowsGap(10)\n    .columnsTemplate('1fr 1fr')\n    .rowsTemplate('1fr 1fr 1fr')\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699862)/* ["default"] */.A) + "",
        width: "342",
        height: "410"
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
383206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958002-4e25bbc1d3af499cb88cd744454e0ee4.png");

},
699862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478003-49ad3ba7cd469c47ee2c2bb72e0ba6aa.png");

},
777331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438047-d1078ea9228735a2c0e017a9bbdcfce2.png");

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