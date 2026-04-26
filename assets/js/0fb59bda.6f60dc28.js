"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86003"], {
182009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_blur_demo_ui_design_navigation_dynamic_blur_demo_md_0fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-dynamic-blur-demo-ui-design-navigation-dynamic-blur-demo-md-0fb.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_blur_demo_ui_design_navigation_dynamic_blur_demo_md_0fb_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/ui-design-navigation-dynamic-blur-demo","title":"开发实例","description":"1. 在首页创建一级导航，适用于需要构建具有导航结构的主界面，支持动态标题栏样式切换与页面跳转功能。通过titleBar接口设置导航栏的内容和样式，包括标题、菜单项、返回按钮等元素。通过pushPath路由方法跳转至二级导航页面。","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/ui-design-navigation-dynamic-blur-demo.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"开发实例","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-blur-demo","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置应用内多窗","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/"},"next":{"title":"设置overlay模式的侧边栏","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-overlay-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/ui-design-navigation-dynamic-blur-demo.md


const frontMatter = {
	title: '开发实例',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-blur-demo',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '开发实例';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
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
        id: "开发实例",
        children: "开发实例"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在首页创建一级导航，适用于需要构建具有导航结构的主界面，支持动态标题栏样式切换与页面跳转功能。通过titleBar接口设置导航栏的内容和样式，包括标题、菜单项、返回按钮等元素。通过pushPath路由方法跳转至二级导航页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块导入\n// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, ScrollEffectType, HdsNavigationTitleMode, HdsNavigationAttribute } from '@kit.UIDesignKit';\n\n@Entry\n@Component\nstruct Index {\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  scroller: Scroller = new Scroller();\n\n  build() {\n    HdsNavigation(this.pageInfos) { // 创建HdsNavigation组件\n      Stack() {\n        Button('pushPath', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin({ top: '5%', right: '50vp', left: '50vp' })\n          .onClick(() => {\n            this.pageInfos.pushPath({ name: 'pageOne' });\n          })\n      }\n      .zIndex(5)\n\n      List({ space: 12, initialIndex: 0, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Column() {\n              Row({ space: 8 }) {\n                Button() {\n                  SymbolGlyph($r('sys.symbol.wifi'))\n                    .fontColor([$r('sys.color.icon_on_primary')])\n                    .fontSize(24)\n                }\n                .width(35)\n                .height(35)\n\n                Text('list_' + item)\n                  .width('100%')\n                  .height(72)\n                  .fontSize(16)\n                  .fontWeight(500)\n              }\n\n              Divider().margin({ left: 40 })\n            }\n          }\n          .height(56)\n        }, (item: number) => item.toString())\n      }\n      .margin({ left: 16, right: 16 })\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      .cachedCount(3, true) // 设置列表中ListItem/ListItemGroup的预加载数量，列表穿透到标题栏下方不会消失\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .titleBar({\n      // HdsNavigation标题栏设置\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      style: {\n        // HdsNavigation标题栏样式设置\n        // 标题栏动态模糊样式：通用模糊\n        scrollEffectOpts: {\n          enableScrollEffect: true,\n          scrollEffectType: ScrollEffectType.COMMON_BLUR,\n        },\n      },\n      content: {\n        // HdsNavigation标题栏内容区设置\n        title: {\n          // HdsNavigation标题栏标题设置\n          mainTitle: 'MainTitle',\n        },\n        menu: {\n          // HdsNavigation标题栏菜单项设置\n          value: [{\n            // 第一个菜单项内容设置\n            content: {\n              label: 'menu1',\n              icon: $r('sys.symbol.ohos_wifi'),\n              isEnabled: true,\n            },\n            badge: {\n              count: 1,\n            }\n          }, {\n            // 第二个菜单项内容设置\n            content: {\n              label: 'menu2',\n              icon: $r('sys.symbol.ohos_lock'),\n              isEnabled: true,\n              action: () => {\n                console.info(`HDS_NAV HELLO 2`);\n              }\n            }\n          }, {\n            // 第三个菜单项内容设置\n            content: {\n              label: 'menu3',\n              icon: $r('sys.symbol.speaker_plus'),\n            }\n          }, {\n            content: {\n              // 第三个菜单项内容设置\n              label: 'menu4',\n              icon: $r('sys.symbol.ohos_star'),\n            }\n          }]\n        },\n      }\n    })\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .hideBackButton(true)\n    .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在PageOne页面创建二级导航组件。通过titleBar接口设置HdsNavDestination标题栏HarmonyOS风格化样式及内容设置。展示NavPathStack路由使用示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PageOne.ets\n// 模块导入\n// 从6.0.2(22)版本开始，无需手动导入HdsNavDestinationAttribute。具体请参考HdsNavDestination的导入模块说明。\nimport { HdsNavDestination, HdsNavDestinationAttribute } from '@kit.UIDesignKit';\n\n@Builder\nexport function PageOneBuilder() {\n  PageOne()\n}\n\n@Component\nexport struct PageOne {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n  scroller: Scroller = new Scroller();\n  listScroller: Scroller = new Scroller();\n\n  build() {\n    HdsNavDestination() { // 创建HdsNavDestination组件\n      Scroll(this.scroller) { // HdsNavDestination内容区设置可滚动容器组件，用于实现内容区滚动联动标题栏动态模糊样式\n        Column() {\n          Button('pushPath', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin({\n              top: '5%',\n              right: '50vp',\n              left: '50vp',\n              bottom: '5%'\n            })\n            .onClick(() => {\n              this.pageInfos.pushPath({ name: 'pageTwo' }); // 将name指定的HdsNavDestination页面信息入栈\n            })\n          Button('popToName', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfos.popToName('pageTwo'); // 回退路由栈到首个名为name的HdsNavDestination页面\n            })\n          Button('popToIndex', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfos.popToIndex(1); // 回退路由栈到index指定的HdsNavDestination页面\n            })\n          Button('moveIndexToTop', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfos.moveIndexToTop(1); // 将index指定的HdsNavDestination页面移到栈顶\n            })\n          Button('clear', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfos.clear(); // 清除栈中所有页面\n            })\n          List({ space: 12, initialIndex: 0 }) {\n            ForEach(this.arr, (item: number) => {\n              ListItem() {\n                Column() {\n                  Row({ space: 8 }) {\n                    Button() {\n                      SymbolGlyph($r('sys.symbol.wifi'))\n                        .fontColor([$r('sys.color.icon_on_primary')])\n                        .fontSize(24)\n                    }\n                    .width(35)\n                    .height(35)\n\n                    Text('list_' + item)\n                      .width('100%')\n                      .height(72)\n                      .fontSize(16)\n                      .fontWeight(500)\n                  }\n\n                  Divider().margin({ left: 40 })\n                }\n              }\n              .height(56)\n              .borderRadius(24)\n            }, (item: number) => item.toString())\n          }\n          .edgeEffect(EdgeEffect.None)\n          .scrollBar(BarState.Off)\n          .width('100%')\n          .height('100%')\n          .cachedCount(3, true) // 设置列表中ListItem/ListItemGroup的预加载数量，列表穿透到标题栏下方不会消失\n          .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n          .nestedScroll({ scrollForward: NestedScrollMode.PARENT_FIRST, scrollBackward: NestedScrollMode.PARENT_FIRST })\n        }\n      }\n      .edgeEffect(EdgeEffect.Spring)\n      .scrollBar(BarState.Off)\n      .margin({ left: 16, right: 16 })\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n    }\n    .titleBar({\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      content: {\n        // HdsNavigation标题栏内容区设置\n        title: {\n          // HdsNavigation标题栏标题设置\n          mainTitle: 'PageOne',\n        },\n        // HdsNavigation标题栏返回按钮设置\n        backIcon: {\n          label: 'backIcon', // 无障碍播报内容\n          componentId: 'backIconId', // 返回按钮id\n        },\n        menu: {\n          // HdsNavigation标题栏菜单设置\n          value: [{\n            // 第一个菜单项内容设置\n            content: {\n              label: 'menu1',\n              icon: $r('sys.symbol.ohos_star'),\n            }\n          }, {\n            // 第二个菜单项内容设置\n            content: {\n              label: 'menu2',\n              icon: $r('sys.symbol.ohos_circle'),\n            },\n            badge: {\n              value: '66'\n            }\n          }]\n        },\n      }\n    })\n    .bindToNestedScrollable([{ parent: this.scroller, child: this.listScroller }]) // 绑定导航组件和可滚动容器组件\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在PageTwo页面创建二级导航组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PageTwo.ets\n// 模块导入\n// 从6.0.2(22)版本开始，无需手动导入HdsNavDestinationAttribute。具体请参考HdsNavDestination的导入模块说明。\nimport { HdsNavDestination, HdsNavDestinationAttribute } from '@kit.UIDesignKit';\n\n@Builder\nexport function PageTwoBuilder() {\n  PageTwo()\n}\n\n@Component\nexport struct PageTwo {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private stack: NavPathStack | null = null;\n  private name: string = '';\n  scroller: Scroller = new Scroller();\n\n  build() {\n    HdsNavDestination() { // 创建HdsNavDestination组件\n      Scroll(this.scroller) { // HdsNavDestination组件内容区设置\n        Button('pushPathByName', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfos.pushPathByName('pageOne', null); // 将name指定的HdsNavDestination页面信息入栈\n          })\n      }\n      .align(Alignment.Top)\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      .width('100%')\n      .height('100%')\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .titleBar({\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      // HdsNavDestination组件标题栏设置\n      content: {\n        title: {\n          mainTitle: 'PageTwo'\n        },\n        menu: {\n          value: [{\n            content: {\n              label: 'menu1',\n              icon: $r('sys.symbol.trunk'),\n            }\n          }]\n        },\n      },\n    })\n    .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n    .onReady((ctx: NavDestinationContext) => {\n      // 在NavDestination中能够拿到传来的NavPathInfo和当前所处的NavPathStack\n      try {\n        this.name = ctx?.pathInfo?.name;\n        this.stack = ctx.pathStack;\n      } catch (e) {\n        console.error(`testTag onReady catch exception code:\n         ${JSON.stringify(e.code)}, message: ${JSON.stringify(e.message)}`);\n      }\n    })\n  }\n}\n"
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
            children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"pageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\": \"this is pageOne\"\n      }\n    },\n    {\n      \"name\": \"pageTwo\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageTwo.ets\",\n      \"buildFunction\": \"PageTwoBuilder\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784937)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "317",
        height: "664"
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
784937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438383-1723d450787d24a47742df5917db0290.gif");

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