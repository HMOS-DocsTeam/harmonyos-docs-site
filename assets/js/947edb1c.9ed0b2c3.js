"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["392143"], {
8515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_router_to_navigation_arkts_router_to_navigation_md_947_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-set-navigation-routing-arkts-router-to-navigation-arkts-router-to-navigation-md-947.json
var site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_router_to_navigation_arkts_router_to_navigation_md_947_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/arkts-router-to-navigation","title":"Router切换Navigation","description":"鉴于组件导航（Navigation）支持更丰富的动效、一次开发多端部署能力和更灵活的栈操作。本文主要从页面跳转、动效和生命周期等方面介绍如何从Router切换到Navigation。","source":"@site/docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/arkts-router-to-navigation.md","sourceDirName":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation","slug":"/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Router切换Navigation","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-router-to-navigation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"页面路由 (@ohos.router)(不推荐)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/"},"next":{"title":"布局概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/arkts-router-to-navigation.md


const frontMatter = {
	title: 'Router切换Navigation',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-router-to-navigation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Router切换Navigation';

const assets = {

};



const toc = [{
  "value": "页面结构",
  "id": "页面结构",
  "level": 2
}, {
  "value": "路由操作",
  "id": "路由操作",
  "level": 2
}, {
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "转场动画",
  "id": "转场动画",
  "level": 2
}, {
  "value": "共享元素转场",
  "id": "共享元素转场",
  "level": 2
}, {
  "value": "跨包路由",
  "id": "跨包路由",
  "level": 2
}, {
  "value": "动态路由",
  "id": "动态路由",
  "level": 2
}, {
  "value": "生命周期监听",
  "id": "生命周期监听",
  "level": 2
}, {
  "value": "页面信息查询",
  "id": "页面信息查询",
  "level": 2
}, {
  "value": "路由拦截",
  "id": "路由拦截",
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
        id: "router切换navigation",
        children: "Router切换Navigation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鉴于组件导航（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "）支持更丰富的动效、一次开发多端部署能力和更灵活的栈操作。本文主要从页面跳转、动效和生命周期等方面介绍如何从Router切换到Navigation。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面结构",
      children: "页面结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router路由的页面是一个@Entry修饰的Component，每一个页面都需要在main_page.json中声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main_page.json\n{\n  \"src\": [\n    \"pages/Index\",\n    \"pages/pageOne\",\n    \"pages/pageTwo\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为Router页面的示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { router } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  @State router: string = 'Examples of Router, Navigation, and NavPathStack';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button('router to pageOne', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.getUIContext().getRouter().pushUrl({\n              url: 'pages/routerToNavigation/router/PageOne' // 目标url\n            }, router.RouterMode.Standard, (err) => {\n              if (err) {\n                hilog.error(DOMAIN, TAG, 'page ON_SHOWN:' + `Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n                return;\n              }\n              hilog.info( DOMAIN, TAG, 'Invoke pushUrl succeeded.');\n            })\n          })\n        // ···\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct pageOne {\n  @State message: string = 'This is pageOne';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button('router back to Index', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.getUIContext().getRouter().back();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["而基于Navigation的路由页面分为导航页和子页，导航页又叫", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navbar12",
        children: "Navbar"
      }), "，是Navigation包含的子组件，子页是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "包含的子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为Navigation导航页的示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n@Entry\n@Component\nstruct Index1 {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pathStack) {\n      Column() {\n        Button('Push PageOne', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pathStack.pushPathByName('navigation_pageOne', null);\n          })\n      }.width('100%').height('100%')\n    }\n    .title('Navigation')\n    .mode(NavigationMode.Stack)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为Navigation子页的示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function PageOneBuilder() {\n  PageOne();\n}\n\n@Entry\n@Component\nexport struct PageOne {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 请将$r('app.string.routerToNavigation_nav_text1_backHome')替换为实际资源文件，在本示例中该资源文件的value值为\"回到首页\"\n        Button($r('app.string.routerToNavigation_nav_text1_backHome'), { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pathStack.clear();\n          })\n      }.width('100%').height('100%')\n    }.title('PageOne')\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个子页面也需要配置到系统配置文件router_map.json中（参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package#%E7%B3%BB%E7%BB%9F%E8%B7%AF%E7%94%B1%E8%A1%A8",
        children: "系统路由表"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程配置文件module.json5中配置 {\"routerMap\": \"$profile:router_map\"}\n// router_map.json\n{\n  \"routerMap\": [\n    {\n      \"name\": \"pageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\": \"this is pageOne\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "路由操作",
      children: "路由操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Router通过@ohos.router模块提供的方法来操作页面，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getrouter",
        children: "getRouter"
      }), "获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
        children: "Router"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// push page\nthis.getUIContext().getRouter().pushUrl({ url:'pages/pageOne', params: null });\n\n// pop page\nthis.getUIContext().getRouter().back({ url: 'pages/pageOne' });\n\n// replace page\nthis.getUIContext().getRouter().replaceUrl({ url: 'pages/pageOne' });\n\n// clear all page\nthis.getUIContext().getRouter().clear();\n\n// 获取页面栈大小\nlet size = this.getUIContext().getRouter().getLength();\n\n// 获取页面状态\nlet pageState = this.getUIContext().getRouter().getState();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation通过导航控制器对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathstack10",
        children: "NavPathStack"
      }), "提供的方法来操作页面，需要创建一个栈对象并传入Navigation中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    // 设置NavPathStack并传入Navigation\n    Navigation(this.pathStack) {\n      // ...\n    }.width('100%').height('100%')\n    .title('Navigation, Navigation')\n    .mode(NavigationMode.Stack)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.pathStack.pop();\n// push page\nthis.pathStack.pushPath({ name: 'pageOne' });\n\n// pop page\nthis.pathStack.pop();\nthis.pathStack.popToIndex(1);\nthis.pathStack.popToName('pageOne');\n\n// replace page\nthis.pathStack.replacePath({ name: 'pageOne' });\n\n// clear all page\nthis.pathStack.clear();\n\n// 获取路由栈大小\nlet size: number = this.pathStack.size();\n\n// 删除栈中name为PageOne的所有页面\nthis.pathStack.removeByName('pageOne');\n\n// 删除指定索引的页面\nthis.pathStack.removeByIndexes([1, 3, 5]);\n\n// 获取栈中所有页面name集合\nthis.pathStack.getAllPathName();\n\n// 获取索引为1的页面参数\nthis.pathStack.getParamByIndex(1);\n\n// 获取PageOne页面的参数\nthis.pathStack.getParamByName('pageOne');\n\n// 获取PageOne页面的索引集合\nthis.pathStack.getIndexByName('pageOne');\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router作为全局通用模块，可以在任意页面中调用，Navigation作为组件，子页面想要做路由需要拿到Navigation持有的导航控制器对象NavPathStack，可以通过如下几种方式获取："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一"
        })
      }), "：通过@Provide和@Consume传递给子页面（有耦合，不推荐）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Navigation根容器\n@Entry\n@Component\nstruct Index {\n  // Navigation创建一个Provide修饰的NavPathStack\n  @Provide('pathStack') pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pathStack) {\n      // ...\n    }\n    .title('Method 1: Navigation')\n    .mode(NavigationMode.Stack)\n  }\n}\n\n// Navigation子页面\n@Component\nexport struct PageOne {\n  // NavDestination通过Consume获取到\n  @Consume('pathStack') pathStack: NavPathStack;\n\n  build() {\n    NavDestination() {\n      // ...\n    }\n    .title('PageOne')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式二"
        })
      }), "：子页面通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#onready11",
        children: "OnReady"
      }), "回调获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct PageOne {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      // ...\n    }.title('Method 2: PageOne')\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三"
        })
      }), "： 通过全局的AppStorage接口设置获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  pathStack: NavPathStack = new NavPathStack();\n\n  // 全局设置一个NavPathStack\n  aboutToAppear(): void {\n    AppStorage.setOrCreate('PathStack', this.pathStack);\n  }\n\n  build() {\n    Navigation(this.pathStack) {\n      // ...\n    }.title('Method 3: AppStorage')\n    .mode(NavigationMode.Stack)\n  }\n}\n\n// Navigation子页面\n@Component\nexport struct PageOne {\n  // 子页面中获取全局的NavPathStack\n  pathStack: NavPathStack = AppStorage.get('PathStack') as NavPathStack;\n\n  build() {\n    NavDestination() {\n      // ...\n    }\n    .title('PageOne')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式四"
        })
      }), "：通过自定义组件查询接口获取，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
        children: "queryNavigationInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 子页面中的自定义组件\n@Entry\n@Component\nstruct CustomNode {\n  pathStack: NavPathStack = new NavPathStack();\n\n  aboutToAppear() {\n    // query navigation info\n    let navigationInfo: NavigationInfo = this.queryNavigationInfo() as NavigationInfo;\n    if (navigationInfo !=  undefined) {\n      this.pathStack = navigationInfo.pathStack ;\n    }\n  }\n\n  build() {\n    Row() {\n      Button('Method 4: queryNavigationInfo')\n        .onClick(() => {\n          this.pathStack.pushPath({ name: 'pageTwo' });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703459)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "router页面的生命周期和Navigation页面的生命周期关系如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.router页面的跳转会影响其内部Navigation页面的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.Navigation页面的跳转不会影响其所在router页面的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.应用前后台切换会同时触发router页面和Navigation页面的生命周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Router页面", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "生命周期"
      }), "为@Entry页面中的通用方法，主要有如下四个生命周期："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 页面创建后挂树的回调\naboutToAppear(): void {\n}\n\n// 页面销毁前下树的回调\naboutToDisappear(): void {\n}\n\n// 页面显示时的回调\nonPageShow(): void {\n}\n\n// 页面隐藏时的回调\nonPageHide(): void {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其生命周期时序如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302633)/* ["default"] */.A) + "",
        width: "766",
        height: "643"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigation作为路由容器，其生命周期承载在NavDestination组件上，以组件事件的形式开放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体生命周期描述请参考Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "页面生命周期"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct PageOne {\n  aboutToDisappear() {\n  }\n\n  aboutToAppear() {\n  }\n\n  build() {\n    NavDestination() {\n      // ...\n    }\n    .onWillAppear(() => {\n    })\n    .onAppear(() => {\n    })\n    .onWillShow(() => {\n    })\n    .onShown(() => {\n    })\n    .onWillHide(() => {\n    })\n    .onHidden(() => {\n    })\n    .onWillDisappear(() => {\n    })\n    .onDisAppear(() => {\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "转场动画",
      children: "转场动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router和Navigation都提供了系统的转场动画，也提供了自定义转场的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中Router自定义页面转场通过通用方法pageTransition()实现，具体可参考Router", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation",
        children: "页面转场动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation作为路由容器组件，其内部的页面切换动画本质上属于组件跟组件之间的属性动画，可以通过Navigation中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#customnavcontenttransition11",
        children: "customNavContentTransition"
      }), "事件提供自定义转场动画的能力，具体实现可以参考Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AC%E5%9C%BA",
        children: "自定义转场"
      }), "。（注意：API version 13之前，Dialog类型的页面默认无转场动画。从API version13开始，Dialog类型的页面支持系统转场动画。）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享元素转场",
      children: "共享元素转场"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面和页面之间跳转的时候需要进行共享元素过渡动画，Router可以通过通用属性sharedTransition来实现共享元素转场，具体可以参考如下链接："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-shared-elements/ts-transition-animation-shared-elements",
        children: "Router共享元素转场动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation也提供了共享元素一镜到底的转场能力，需要配合geometryTransition属性，在子页面（NavDestination）之间切换时，可以实现共享元素转场，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation#%E5%85%B1%E4%BA%AB%E5%85%83%E7%B4%A0%E8%BD%AC%E5%9C%BA",
        children: "Navigation共享元素转场动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨包路由",
      children: "跨包路由"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router可以通过命名路由的方式实现跨包跳转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在想要跳转到的共享包", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
            children: "HAR"
          }), "或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
            children: "HSP"
          }), "页面里，给@Entry修饰的自定义组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
            children: "EntryOptions"
          }), "命名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// library/src/main/ets/pages/Index.ets\n// library为新建共享包自定义的名字\n@Entry({ routeName: 'myPage' })\n@Component\nexport struct MyComponent {\n  build() {\n    Row() {\n      Column() {\n        Text('Library Page')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用命名路由方式跳转时，需要在当前应用包的oh-package.json5文件中配置依赖。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n    \"library\": \"file:../library\",\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置成功后需要在跳转的页面中引入命名路由的页面并跳转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport('library/src/main/ets/pages/routerToNavigation/router/Index'); // 引入共享包中的命名路由页面\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Text('Hello World')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .margin({ top: 20 })\n        .backgroundColor('#ccc')\n        .onClick(() => { // 点击跳转到其他共享包中的页面\n          this.getUIContext().getRouter().pushNamedRoute({\n              name: 'myPage',\n              params: {\n                data1: 'message',\n                data2: {\n                  data3: [123, 456, 789]\n                }\n              }\n            })\n            .then(() => {\n              hilog.info(DOMAIN, TAG, 'pushNamedRoute succeeded.');\n            })\n            .catch((err: BusinessError) => {\n              let code = err.code;\n              let message = err.message;\n              hilog.error(DOMAIN, TAG,`pushNamedRoute failed, code is ${code}, message is ${message}`);\n            });\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigation作为路由组件，默认支持跨包跳转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从HSP（HAR）中完成自定义组件（需要跳转的目标页面）开发，将自定义组件申明为export。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nexport struct PageInHSP {\n  build() {\n    NavDestination() {\n      // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HSP（HAR）的Index.ets中导出组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export { PageInHSP } from './src/main/ets/pages/PageInHSP'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用跨包路由方式跳转时，需要在当前应用包的oh-package.json5文件中配置依赖。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n    \"library\": \"file:../library\",\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置好HSP（HAR）的项目依赖后，在mainPage中导入自定义组件，并添加到pageMap中，即可正常调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1.导入跨包的路由页面\nimport { PageInHSP } from 'library';\n\n@Entry\n@Component\nstruct mainPage {\n  pageStack: NavPathStack = new NavPathStack();\n\n  @Builder pageMap(name: string) {\n    if (name === 'PageInHSP') {\n      // 2.定义路由映射表\n      PageInHSP();\n    }\n  }\n\n  build() {\n    Navigation(this.pageStack) {\n      Button('Push HSP Page')\n        .onClick(() => {\n          // 3.跳转到Hsp中的页面\n          this.pageStack.pushPath({ name: 'PageInHSP' });\n        })\n    }\n    .mode(NavigationMode.Stack)\n    .navDestination(this.pageMap)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上是通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "静态依赖"
        })
      }), "的形式完成了跨包的路由，在大型的项目中一般跨模块的开发需要解耦，那就需要依赖动态路由的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态路由",
      children: "动态路由"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态路由设计的目的是解决多个产品（Hap）之间可以复用相同的业务模块，各个业务模块之间解耦（模块之间跳转通过路由表跳转，不需要互相依赖）和路由功能扩展整合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务特性模块对外暴露的就是模块内支持完成具体业务场景的多个页面的集合；路由管理就是将每个模块支持的页面都用统一的路由表结构管理起来。 当产品需要某个业务模块时，就会注册对应的模块的路由表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态路由的优势："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路由定义除了跳转的URL以外，可以丰富的配置任意扩展信息，如横竖屏默认模式，是否需要鉴权等等，做路由跳转时的统一处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "给每个路由设置一个名字，按照名称进行跳转而不是ets文件路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面的加载可以使用动态Import（按需加载），防止首个页面加载大量代码导致卡顿。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Router实现动态路由主要有下面三个过程："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义过程： 路由表定义新增路由 -> 页面文件绑定路由名称（装饰器） -> 加载函数和页面文件绑定（动态import函数）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义注册过程： 路由注册（可在入口ability中按需注入依赖模块的路由表）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跳转过程： 路由表检查(是否注册过对应路由名称) -> 路由前置钩子（路由页面加载-动态Import） -> 路由跳转 -> 路由后置钩子（公共处理，如打点）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation实现动态路由有如下两种实现方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方案一："
        })
      }), " 自定义路由表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本实现跟上述Router动态路由类似。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者自定义路由管理模块，各个提供路由页面的模块均依赖此模块；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建Navigation组件时，将NavPathStack注入路由管理模块，路由管理模块对NavPathStack进行封装，对外提供路由能力；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各个路由页面不再提供组件，转为提供@build封装的构建函数，并再通过WrappedBuilder封装后，实现全局封装；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各个路由页面将模块名称、路由名称、WrappedBuilder封装后构建函数注册如路由模块；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当路由需要跳转到指定路由时，路由模块完成对指定路由模块的动态导入，并完成路由跳转。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的构建过程，可以参考Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos-cases/cases/blob/master/CommonAppDevelopment/common/routermodule/README_AUTO_GENERATE.md",
        children: "自动生成动态路由"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方案二："
        })
      }), " 系统路由表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，Navigation支持系统跨模块的路由表方案，整体设计是将路由表方案下沉到系统中管理，即在需要路由的各个业务模块（HSP/HAR）中独立配置router_map.json文件，在触发路由跳转时，应用只需要通过NavPathStack进行路由跳转，此时系统会自动完成路由模块的动态加载、组件构建，并完成路由跳转功能，从而实现了开发层面的模块解耦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体可参考Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package#%E7%B3%BB%E7%BB%9F%E8%B7%AF%E7%94%B1%E8%A1%A8",
        children: "系统路由表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期监听",
      children: "生命周期监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Router可以通过observer实现注册监听，接口定义请参考Router无感监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#uiobserveronrouterpageupdate11",
        children: "uiObserver.on('routerPageUpdate')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIContext, uiObserver } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\nfunction callbackFunc(info: uiObserver.RouterPageInfo) {\n  hilog.info(DOMAIN, TAG,'RouterPageInfo is : ' + JSON.stringify(info));\n}\n\n// used in ability context.\nuiObserver.on('routerPageUpdate', this.context, callbackFunc);\n\n// used in UIContext.\nuiObserver.on('routerPageUpdate', this.getUIContext(), callbackFunc);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面状态发生变化时，注册的回调将会触发，开发者可以通过回调中传入的入参拿到页面的相关信息，如：页面的名字，索引，路径，生命周期状态等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigation同样可以通过在observer中实现注册监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { UIObserver, window } from '@kit.ArkUI';\nimport { UIAbility } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    windowStage.getMainWindow((err: BusinessError, data) => {\n      // ...\n      let windowClass = data;\n      // 获取UIContext实例。\n      let uiContext: UIContext = windowClass.getUIContext();\n      // 获取UIObserver实例。\n      let uiObserver : UIObserver = uiContext.getUIObserver();\n      // 注册DevNavigation的状态监听.\n      uiObserver.on('navDestinationUpdate',(info) => {\n        // NavDestinationState.ON_SHOWN = 0, NavDestinationState.ON_HIDE = 1\n        if (info.state == 0) {\n          // NavDestination组件显示时操作\n          hilog.info(DOMAIN, TAG, 'page ON_SHOWN:' + info.name.toString())\n        }\n      })\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面信息查询",
      children: "页面信息查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了实现页面内自定义组件跟页面解耦，自定义组件中提供了全局查询页面信息的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Router可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#queryrouterpageinfo12",
        children: "queryRouterPageInfo"
      }), "接口查询当前自定义组件所在的Page页面的信息，其返回值包含如下几个属性，其中pageId是页面的唯一标识符："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbilityContext/ UIContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage页面对应的上下文信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage在栈中的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage页面的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage页面的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RouterPageState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage页面的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageId12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "routerPage页面的唯一标识。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\n\n// 页面内的自定义组件\n@Component\nstruct MyComponent {\n  aboutToAppear() {\n    let info: uiObserver.RouterPageInfo | undefined = this.queryRouterPageInfo();\n  }\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavdestinationinfo",
        children: "queryNavDestinationInfo"
      }), "接口查询当前自定义组件所在的NavDestination的信息，其返回值包含如下几个属性，其中navDestinationId是页面的唯一标识符："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navigationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceStr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含NavDestination组件的Navigation组件的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceStr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestinationState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination组件的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination在路由栈中的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination组件的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navDestinationId12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination组件的唯一标识ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Component\nexport struct NavDestinationExample {\n  build() {\n    NavDestination() {\n      MyComponent();\n    }\n  }\n}\n\n@Component\nstruct MyComponent {\n  navDesInfo: uiObserver.NavDestinationInfo | undefined\n\n  aboutToAppear() {\n    this.navDesInfo = this.queryNavDestinationInfo();\n    hilog.info(DOMAIN, TAG, 'get navDestinationInfo: ' + JSON.stringify(this.navDesInfo))\n  }\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "路由拦截",
      children: "路由拦截"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Router没有提供路由拦截的能力，开发者需要自行封装路由跳转接口，并在自己封装的接口中做路由拦截的判断并重定向路由。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigation提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#setinterception12",
        children: "setInterception"
      }), "方法，用于设置Navigation页面跳转拦截回调。具体可以参考文档：Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-jump#%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA",
        children: "路由拦截"
      })]
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
703459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
302633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957692-25632b18dc26e4f30d2bb9a4deec5529.png");

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