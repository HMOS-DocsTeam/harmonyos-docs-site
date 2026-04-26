"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["143546"], {
136414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_blur_ui_design_navigation_dynamic_blur_md_38c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-dynamic-blur-ui-design-navigation-dynamic-blur-md-38c.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_blur_ui_design_navigation_dynamic_blur_md_38c_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/ui-design-navigation-dynamic-blur","title":"设置动态模糊样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/ui-design-navigation-dynamic-blur.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置动态模糊样式","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-blur","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"单层图标处理","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/"},"next":{"title":"设置信息提醒","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/ui-design-navigation-dynamic-blur.md


const frontMatter = {
	title: '设置动态模糊样式',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-blur',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置动态模糊样式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "通用模糊样式",
  "id": "通用模糊样式",
  "level": 3
}, {
  "value": "过渡模糊样式",
  "id": "过渡模糊样式",
  "level": 3
}, {
  "value": "渐变模糊样式",
  "id": "渐变模糊样式",
  "level": 3
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
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置动态模糊样式",
        children: "设置动态模糊样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从5.1.0(18)版本开始， 导航组件新增支持标题栏", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#scrolleffecttype",
        children: "通用模糊"
      }), "（适用于列表型非沉浸式场景）样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20)版本开始，新增支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#scrolleffecttype",
        children: "过渡模糊"
      }), "（适用于列表型非沉浸式场景）与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#scrolleffecttype",
        children: "渐变模糊"
      }), "（适用于沉浸式图文类的场景）样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用开发者需要使用标题栏样式随内容区滚动而动态改变样式的导航组件时，可以通过设置titleBar属性中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#hdsnavigationtitlebaroptions",
        children: "style"
      }), "配置，自定义标题栏样式随滚动距离线性变化。通常需配合滚动容器组件使用，推荐使用bindToScrollable、bindToNestedScrollable属性绑定导航组件和可滚动容器组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用模糊样式",
      children: "通用模糊样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对组件背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔。滑动内容进入/离开标题栏区域过程中，模糊背板和分割线透明渐变出现/消失。此方式适用于非沉浸式场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782508)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "317",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "过渡模糊样式",
      children: "过渡模糊样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对组件背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔。滑动时标题栏内容发生颜色/状态变化，滑动过程中，随滑动距离，标题栏样式线性变化。此方式仅适用于沉浸式页面，随内容区滚动修改标题栏样式的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(939862)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "314",
        height: "666"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渐变模糊样式",
      children: "渐变模糊样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模糊效果在空间维度上呈现逐渐增强/减弱的变化，模糊边界柔和，用于增强页面沉浸感。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(400736)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "317",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationTitleMode, ScrollEffectType, HdsNavigationAttribute } from '@kit.UIDesignKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过配置titleBar中的scrollEffectType属性，可实现通用模糊、过渡模糊、渐变模糊样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n\n  build() {\n    HdsNavigation() { // 创建HdsNavigation组件\n      List({ space: 12, initialIndex: 0, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Column() {\n              Row({ space: 8 }) {\n                Button() {\n                  SymbolGlyph($r('sys.symbol.wifi'))\n                    .fontColor([$r('sys.color.icon_on_primary')])\n                    .fontSize(24)\n                }\n                .width(35)\n                .height(35)\n\n                Text('list_' + item)\n                .width('100%')\n                .height(72)\n                .fontSize(16)\n                .fontWeight(500)\n              }\n\n              Divider().margin({ left: 40 })\n            }\n          }\n          .height(56)\n        }, (item: number) => item.toString())\n      }\n      .margin({ left: 16, right: 16 })\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      .cachedCount(3, true) // 设置列表中ListItem/ListItemGroup的预加载数量，列表穿透到标题栏下方不会消失\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .titleBar({\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      style: { // 设置导航组件标题栏样式，推荐使用默认样式\n        // 标题栏动态模糊样式，包括是否使能滚动动态模糊，动态模糊类型，动态模糊生效的滚动距离等\n        scrollEffectOpts: {\n          enableScrollEffect: true,\n          scrollEffectType: ScrollEffectType.COMMON_BLUR,\n          blurEffectiveStartOffset: LengthMetrics.vp(0),\n          blurEffectiveEndOffset: LengthMetrics.vp(20)\n        },\n        originalStyle: { // 内容区滚动前初始样式设置\n          backgroundStyle: { // 标题栏背板样式设置\n            backgroundColor: $r('sys.color.ohos_id_color_background'),\n          },\n          contentStyle: { // 标题栏内容区样式设置，包括标题区域，菜单区域，返回按钮区域\n            titleStyle: {\n              mainTitleColor: $r('sys.color.font_primary'),\n              subTitleColor: $r('sys.color.font_secondary')\n            },\n            menuStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            },\n            backIconStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            }\n          }\n        },\n        scrollEffectStyle: { // 内容区滚动超过blurEffectiveEndOffset后样式设置\n          backgroundStyle: {\n            backgroundColor: $r('sys.color.ohos_id_color_background_transparent'),\n          },\n          contentStyle: {\n            titleStyle: {\n              mainTitleColor: $r('sys.color.font_primary'),\n              subTitleColor: $r('sys.color.font_secondary')\n            },\n            menuStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            },\n            backIconStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            }\n          }\n        }\n      },\n      content: { // 标题栏内容设置\n        title: { mainTitle: 'MainTitle' },\n      }\n    })\n    .hideBackButton(true)\n    .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n    .titleMode(HdsNavigationTitleMode.MINI)\n  }\n}\n"
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
400736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438379-9f5468875cc44771275231a58f948593.gif");

},
939862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798684-cb4833e1f51177503897317bf659c293.gif");

},
782508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478333-60625f9ac0d8542f778807bc6013e8d5.gif");

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