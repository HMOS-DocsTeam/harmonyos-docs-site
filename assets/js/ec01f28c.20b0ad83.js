"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["369362"], {
104773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_customized_area_ui_design_navigation_customized_area_md_ec0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-customized-area-ui-design-navigation-customized-area-md-ec0.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_customized_area_ui_design_navigation_customized_area_md_ec0_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/ui-design-navigation-customized-area","title":"设置自定义区域","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/ui-design-navigation-customized-area.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"设置自定义区域","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-customized-area","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置信息提醒","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/"},"next":{"title":"标题栏动态显隐","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/ui-design-navigation-customized-area.md


const frontMatter = {
	title: '设置自定义区域',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-customized-area',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置自定义区域';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置自定义区域",
        children: "设置自定义区域"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20)版本开始，导航组件支持设置标题栏的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#titlebarcontentoptions",
        children: "stackBuilder"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#titlebarcontentoptions",
        children: "bottomBuilder"
      }), "，允许开发者自定义标题栏样式，以匹配应用的视觉风格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用开发者需要在标题栏区域增加自定义节点时，例如在标题栏上方区域增加分段按钮，标题下方区域增加搜索框、页签时，可以使用标题栏自定义区域设置能力。由于标题栏高度通常由系统或框架统一控制，开发者在添加自定义节点时需注意不要超出标题栏的可用空间，否则可能导致布局溢出或视觉混乱。自定义区域可能会覆盖或影响默认标题栏组件（如返回按钮、标题文字），需谨慎布局，避免交互冲突或遮挡关键元素。如果在标题栏中添加大量交互复杂、渲染频率高的组件，可能会对性能产生影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386193)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1440",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871684)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1440",
        height: "3168"
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
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationTitleMode, HdsNavigationAttribute } from '@kit.UIDesignKit';\nimport { ItemRestriction, SegmentButton, SegmentButtonOptions, SegmentButtonTextItem } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过配置titleBar中content属性的stackBuilder以及bottomBuilder属性，即可实现导航组件的自定义区域设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  scroller: Scroller = new Scroller();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n  @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({\n    buttons: [{ text: '备忘' }, { text: '待办' }] as ItemRestriction<SegmentButtonTextItem>,\n    selectedFontColor: '#ffe6ba0b',\n    selectedBackgroundColor: Color.White,\n    textPadding: {\n      top: 5,\n      right: 5,\n      bottom: 5,\n      left: 5\n    },\n  });\n  @State tabSelectedIndexes: number[] = [0];\n\n  @Builder\n  stackBuilder() {\n    Row() {\n      Flex({ justifyContent: FlexAlign.SpaceBetween }) {\n        Button() {\n          SymbolGlyph($r('sys.symbol.open_sidebar'))\n            .fontColor([$r('sys.color.icon_primary')])\n            .fontSize(24)\n            .width(24)\n            .height(24)\n        }\n        .width(40)\n        .height(40)\n        .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n\n        SegmentButton({\n          options: this.tabOptions,\n          selectedIndexes: $tabSelectedIndexes\n        })\n          .width(150)\n\n        Button() {\n          SymbolGlyph($r('sys.symbol.dot_grid_2x2'))\n            .fontColor([$r('sys.color.icon_primary')])\n            .fontSize(24)\n            .width(24)\n            .height(24)\n        }\n        .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n        .width(40)\n        .height(40)\n      }\n      .margin({ left: 16, right: 16 })\n    }\n    .width('100%')\n  }\n\n  build() {\n    HdsNavigation(this.pageInfos) { // 创建HdsNavigation组件\n      Row() {\n        Text('全部备忘')\n          .fontSize(26)\n          .fontWeight(FontWeight.Bold)\n          .layoutWeight(1)\n          .onClick(() => {\n            this.pageInfos.pushPath({ name: 'pageOne' });\n          })\n      }\n      .margin({ left: 16, top: 16 })\n      .justifyContent(FlexAlign.Start)\n    }\n    .titleBar({\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      content: {\n        title: { mainTitle: '' },\n        // 设置HdsNavigation 自定义标题区\n        stackBuilder: (): void => this.stackBuilder(),\n      }\n    })\n    .hideBackButton(true)\n    .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n    .titleMode(HdsNavigationTitleMode.MINI)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在PageOne页面创建二级导航组件。通过titleBar接口设置HdsNavDestination标题栏HarmonyOS风格化样式及内容设置。展示NavPathStack路由使用示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PageOne.ets\n// 模块导入\n// 从6.0.2(22)版本开始，无需手动导入HdsNavDestinationAttribute。具体请参考HdsNavDestination的导入模块说明。\nimport { BottomBuilderShowType, HdsNavDestination, HdsNavDestinationAttribute } from '@kit.UIDesignKit';\n\n@Builder\nexport function PageOneBuilder() {\n   PageOne()\n}\n\n@Component\nexport struct PageOne {\n   @Consume('pageInfos') pageInfos: NavPathStack;\n   private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n   scroller: Scroller = new Scroller();\n\n   @Builder\n   bottomBuilder() {\n      Column() {\n         Search({ placeholder: 'Search' })\n            .height(40)\n            .placeholderColor($r('sys.color.font_primary'))\n            .margin({ left: 16, right: 16 })\n      }\n      .width('100%')\n   }\n\n   build() {\n      HdsNavDestination() { // 创建HdsNavDestination组件\n         Scroll(this.scroller) { // HdsNavDestination内容区设置可滚动容器组件，用于实现内容区滚动联动标题栏动态模糊样式\n            Image($r('app.media.scenery2')) // scenery2为自定义资源，开发者需替换本地资源\n               .height('100%')\n         }\n         .edgeEffect(EdgeEffect.Spring)\n         .scrollBar(BarState.Off)\n         .margin({ left: 16, right: 16 })\n         .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      }\n      .titleBar({\n         enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n         content: {\n            // HdsNavigation标题栏内容区设置\n            title: {\n               // HdsNavigation标题栏标题设置\n               mainTitle: 'PageOne',\n            },\n            // HdsNavigation标题栏返回按钮设置\n            backIcon: {\n               label: 'backIcon', // 无障碍播报内容\n               componentId: 'backIconId', // 返回按钮id\n            },\n            // 设置HdsNavigation BottomBuilder区域，包括设置高度，显示类型\n            bottomBuilder: {\n               builder: (): void => this.bottomBuilder(),\n               height: 56,\n               showType: BottomBuilderShowType.DIRECTLY_SHOW\n            },\n            menu: {\n               // HdsNavigation标题栏菜单设置\n               value: [{\n                  // 菜单项内容设置\n                  content: {\n                     label: 'menu',\n                     icon: $r('sys.symbol.ohos_circle'),\n                  },\n               }]\n            },\n         }\n      })\n      .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n   }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程entry/src/main/module.json5文件中的“module”下新增如下配置，用于页面跳转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"routerMap\": \"$profile:route_map\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程entry/src/main/resources/base/profile目录下增加route_map.json文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"pageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\": \"this is pageOne\"\n      }\n    }\n  ]\n}\n"
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
871684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798686-b8693dceffd789471d0d5238d76ce6fd.png");

},
386193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478335-223b327002e9cbdd58a9fd3fe1f08823.png");

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