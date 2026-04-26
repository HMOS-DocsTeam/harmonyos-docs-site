"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["795204"], {
836872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ui_design_api_ui_design_arkts_component_ui_design_hdsnavigation_ui_design_hdsnavigation_md_23a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ui-design-api-ui-design-arkts-component-ui-design-hdsnavigation-ui-design-hdsnavigation-md-23a.json
var site_docs_ref_ui_design_api_ui_design_arkts_component_ui_design_hdsnavigation_ui_design_hdsnavigation_md_23a_namespaceObject = JSON.parse('{"id":"ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation","title":"HdsNavigation","description":"本模块提供导航组件的能力，默认支持标题栏随内容区滚动的动态模糊样式。6.0.0(20)版本以后，推荐使用bindToScrollable、bindToNestedScrollable属性绑定导航组件和可滚动容器组件后，再使用导航组件滚动相关的功能，从而获得更优的体验。如滚动生效动态模糊样式，标题栏随内容区滚动动态显隐功能等。","source":"@site/docs-ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation.md","sourceDirName":"ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation","slug":"/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HdsNavigation","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation","kit":"应用框架","last_updated":"2026-04-22","slug":"ui-design-hdsnavigation"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts/ui-design-error-code/ui-design-error-code"},"next":{"title":"HdsNavDestination","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation.md


const frontMatter = {
	title: 'HdsNavigation',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ui-design-hdsnavigation'
};
const contentTitle = 'HdsNavigation';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "titleBar",
  "id": "titlebar",
  "level": 3
}, {
  "value": "titleMode",
  "id": "titlemode",
  "level": 3
}, {
  "value": "toolbarConfiguration",
  "id": "toolbarconfiguration",
  "level": 3
}, {
  "value": "hideToolBar",
  "id": "hidetoolbar",
  "level": 3
}, {
  "value": "hideTitleBar",
  "id": "hidetitlebar",
  "level": 3
}, {
  "value": "hideBackButton",
  "id": "hidebackbutton",
  "level": 3
}, {
  "value": "navBarWidth",
  "id": "navbarwidth",
  "level": 3
}, {
  "value": "navBarPosition",
  "id": "navbarposition",
  "level": 3
}, {
  "value": "mode",
  "id": "mode",
  "level": 3
}, {
  "value": "divider",
  "id": "divider",
  "level": 3
}, {
  "value": "hideNavBar",
  "id": "hidenavbar",
  "level": 3
}, {
  "value": "navDestination",
  "id": "navdestination",
  "level": 3
}, {
  "value": "navBarWidthRange",
  "id": "navbarwidthrange",
  "level": 3
}, {
  "value": "minContentWidth",
  "id": "mincontentwidth",
  "level": 3
}, {
  "value": "ignoreLayoutSafeArea",
  "id": "ignorelayoutsafearea",
  "level": 3
}, {
  "value": "systemBarStyle",
  "id": "systembarstyle",
  "level": 3
}, {
  "value": "recoverable",
  "id": "recoverable",
  "level": 3
}, {
  "value": "dynamicHideTitleBar",
  "id": "dynamichidetitlebar",
  "level": 3
}, {
  "value": "bindToScrollable",
  "id": "bindtoscrollable",
  "level": 3
}, {
  "value": "bindToNestedScrollable",
  "id": "bindtonestedscrollable",
  "level": 3
}, {
  "value": "enableDragBar",
  "id": "enabledragbar",
  "level": 3
}, {
  "value": "enableModeChangeAnimation",
  "id": "enablemodechangeanimation",
  "level": 3
}, {
  "value": "withTheme",
  "id": "withtheme",
  "level": 3
}, {
  "value": "splitPlaceholder",
  "id": "splitplaceholder",
  "level": 3
}, {
  "value": "enableVisibilityLifecycleWithContentCover",
  "id": "enablevisibilitylifecyclewithcontentcover",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onNavBarStateChange",
  "id": "onnavbarstatechange",
  "level": 3
}, {
  "value": "onNavigationModeChange",
  "id": "onnavigationmodechange",
  "level": 3
}, {
  "value": "onTitleModeChange",
  "id": "ontitlemodechange",
  "level": 3
}, {
  "value": "customNavContentTransition",
  "id": "customnavcontenttransition",
  "level": 3
}, {
  "value": "ScrollEffectType",
  "id": "scrolleffecttype",
  "level": 2
}, {
  "value": "HdsNavigationTitleMode",
  "id": "hdsnavigationtitlemode",
  "level": 2
}, {
  "value": "DividerShowType",
  "id": "dividershowtype",
  "level": 2
}, {
  "value": "TextStyleMode",
  "id": "textstylemode",
  "level": 2
}, {
  "value": "BottomBuilderShowType",
  "id": "bottombuildershowtype",
  "level": 2
}, {
  "value": "HideMode",
  "id": "hidemode",
  "level": 2
}, {
  "value": "IconStyleMode",
  "id": "iconstylemode",
  "level": 2
}, {
  "value": "BlurStrategy",
  "id": "blurstrategy",
  "level": 2
}, {
  "value": "TitleSize",
  "id": "titlesize",
  "level": 2
}, {
  "value": "NavDestinationBuilder",
  "id": "navdestinationbuilder",
  "level": 2
}, {
  "value": "CustomTransitionDelegate",
  "id": "customtransitiondelegate",
  "level": 2
}, {
  "value": "IconType",
  "id": "icontype",
  "level": 2
}, {
  "value": "HdsNavigationMenuItemOptions",
  "id": "hdsnavigationmenuitemoptions",
  "level": 2
}, {
  "value": "HdsNavigationBackButtonItemOptions",
  "id": "hdsnavigationbackbuttonitemoptions",
  "level": 2
}, {
  "value": "HdsNavigationBackgroundStyle",
  "id": "hdsnavigationbackgroundstyle",
  "level": 2
}, {
  "value": "HdsNavigationTitleStyle",
  "id": "hdsnavigationtitlestyle",
  "level": 2
}, {
  "value": "HdsNavigationIconItemStyle",
  "id": "hdsnavigationiconitemstyle",
  "level": 2
}, {
  "value": "HdsNavigationDividerStyle",
  "id": "hdsnavigationdividerstyle",
  "level": 2
}, {
  "value": "HdsTitleBarContentStyle",
  "id": "hdstitlebarcontentstyle",
  "level": 2
}, {
  "value": "HdsNavigationTitleBarStyle",
  "id": "hdsnavigationtitlebarstyle",
  "level": 2
}, {
  "value": "ScrollEffectOptions",
  "id": "scrolleffectoptions",
  "level": 2
}, {
  "value": "TitleBarStyleOptions",
  "id": "titlebarstyleoptions",
  "level": 2
}, {
  "value": "HdsNavigationBadgeOptions",
  "id": "hdsnavigationbadgeoptions",
  "level": 2
}, {
  "value": "HdsNavigationIconOptions",
  "id": "hdsnavigationiconoptions",
  "level": 2
}, {
  "value": "HdsNavigationBadgeIconOptions",
  "id": "hdsnavigationbadgeiconoptions",
  "level": 2
}, {
  "value": "HdsNavigationMenuContentOptions",
  "id": "hdsnavigationmenucontentoptions",
  "level": 2
}, {
  "value": "MultiWindowEntryInAPPMenuParams",
  "id": "multiwindowentryinappmenuparams",
  "level": 2
}, {
  "value": "HdsNavigationTitle",
  "id": "hdsnavigationtitle",
  "level": 2
}, {
  "value": "BottomBuilderParams",
  "id": "bottombuilderparams",
  "level": 2
}, {
  "value": "HdsNavigationDividerParams",
  "id": "hdsnavigationdividerparams",
  "level": 2
}, {
  "value": "TitleBarContentOptions",
  "id": "titlebarcontentoptions",
  "level": 2
}, {
  "value": "PaddingOptions",
  "id": "paddingoptions",
  "level": 2
}, {
  "value": "NavBarWidthRangeOptions",
  "id": "navbarwidthrangeoptions",
  "level": 2
}, {
  "value": "HdsNavigationTitleBarOptions",
  "id": "hdsnavigationtitlebaroptions",
  "level": 2
}, {
  "value": "DynamicHideParams",
  "id": "dynamichideparams",
  "level": 2
}, {
  "value": "NestedScrollInfo",
  "id": "nestedscrollinfo",
  "level": 2
}, {
  "value": "WithThemeOptions",
  "id": "withthemeoptions",
  "level": 2
}, {
  "value": "SystemMaterialParams",
  "id": "systemmaterialparams",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "设置动态模糊样式",
  "id": "设置动态模糊样式",
  "level": 3
}, {
  "value": "设置菜单消息提醒",
  "id": "设置菜单消息提醒",
  "level": 3
}, {
  "value": "设置自定义区域",
  "id": "设置自定义区域",
  "level": 3
}, {
  "value": "设置标题栏的动态显隐",
  "id": "设置标题栏的动态显隐",
  "level": 3
}, {
  "value": "设置标题栏图标样式",
  "id": "设置标题栏图标样式",
  "level": 3
}, {
  "value": "半模态标题栏样式",
  "id": "半模态标题栏样式",
  "level": 3
}, {
  "value": "图标上绑定自定义menu",
  "id": "图标上绑定自定义menu",
  "level": 3
}, {
  "value": "设置应用内多窗图标",
  "id": "设置应用内多窗图标",
  "level": 3
}, {
  "value": "设置HdsNavigation双栏模式",
  "id": "设置hdsnavigation双栏模式",
  "level": 3
}, {
  "value": "设置标题栏沉浸式样式",
  "id": "设置标题栏沉浸式样式",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    void: "void",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdsnavigation",
        children: "HdsNavigation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供导航组件的能力，默认支持标题栏随内容区滚动的动态模糊样式。6.0.0(20)版本以后，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindtoscrollable",
        children: "bindToScrollable"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindtonestedscrollable",
        children: "bindToNestedScrollable"
      }), "属性绑定导航组件和可滚动容器组件后，再使用导航组件滚动相关的功能，从而获得更优的体验。如滚动生效动态模糊样式，标题栏随内容区滚动动态显隐功能等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HdsNavigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏。其中内容区默认首页显示导航内容（HdsNavigation的子组件）或非首页显示（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination",
        children: "HdsNavDestination"
      }), "的子组件），首页和非首页通过路由进行切换。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(634843)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HdsNavigationAttribute是用于配置HdsNavigation组件属性的关键接口。6.0.1(21)及之前版本，导入HdsNavigation组件后需要开发者手动导入HdsNavigationAttribute，否则会编译报错。从6.0.2(22)版本开始，编译工具链识别到导入HdsNavigation组件后，会自动导入HdsNavigationAttribute，无需开发者手动导入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者手动导入HdsNavigationAttribute，DevEco Studio会显示置灰，6.0.1(21)及之前版本删除会编译报错，从6.0.2(22)版本开始，删除对功能无影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.1(21)及之前版本："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HdsNavigation, HdsNavigationAttribute } from '@kit.UIDesignKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.2(22)及之后版本："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HdsNavigation } from '@kit.UIDesignKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以包含子组件。 推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathstack10",
        children: "NavPathStack"
      }), "配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination",
        children: "HdsNavDestination"
      }), "属性进行页面路由。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation(pathInfos?: NavPathStack)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定路由栈到HdsNavigation组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathInfos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathstack10",
              children: "NavPathStack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路由栈信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "titlebar",
      children: "titleBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "titleBar(options?: HdsNavigationTitleBarOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置HdsNavigation组件titleBar区域（包含返回图标区域、标题区域、菜单区域、背景板）样式以及内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题字符串超长时，如果不设置副标题，先缩小再换行（2行）最后以\"...\"截断。如果设置副标题，先缩小后以\"...\"截断。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlebaroptions",
              children: "HdsNavigationTitleBarOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "titlemode",
      children: "titleMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "titleMode(value: HdsNavigationTitleMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置页面标题栏显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlemode",
              children: "HdsNavigationTitleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面标题栏显示模式。  默认值：HdsNavigationTitleMode.FREE。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toolbarconfiguration",
      children: "toolbarConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(497994)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置工具栏内容。不设置时不显示工具栏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#toolbaritem10",
              children: "ToolbarItem"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationtoolbaroptions11",
              children: "NavigationToolbarOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidetoolbar",
      children: "hideToolBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hideToolBar(hide: boolean, animated?: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否隐藏工具栏，并且可设置在工具栏显示隐藏的状态变化中是否使用动画。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "hide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏工具栏。  默认值：false。  - true： 隐藏工具栏。  - false：显示工具栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否使用动画显隐工具栏。  默认值：false。  - true：使用动画显示隐藏工具栏。  - false：不使用动画显示隐藏工具栏。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidetitlebar",
      children: "hideTitleBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hideTitleBar(hide: boolean, animated?: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否隐藏标题栏，并且可设置在标题栏显示隐藏的状态变化中是否使用动画。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "hide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏标题栏。  默认值：false。  - true：隐藏标题栏。  - false：显示标题栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否使用动画显隐标题栏。  默认值：false。  - true：使用动画显示隐藏标题栏。  - false：不使用动画显示隐藏标题栏。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidebackbutton",
      children: "hideBackButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hideBackButton(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否隐藏标题栏中的返回键。返回键仅针对", (0,jsx_runtime.jsx)(_components.a, {
        href: "#titlemode",
        children: "titleMode"
      }), "为HdsNavigationTitleMode.MINI时才生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏标题栏中的返回键。  默认值：false。  - true：隐藏返回键。  - false：显示返回键。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navbarwidth",
      children: "navBarWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "navBarWidth(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置导航栏宽度。仅在HdsNavigation组件分栏时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏宽度。  默认值：240。单位：vp。  undefined：行为不做处理，导航栏宽度与默认值保持一致。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navbarposition",
      children: "navBarPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "navBarPosition(value: NavBarPosition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置导航栏位置。仅在HdsNavigation组件分栏时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navbarposition9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "NavBarPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏位置。  默认值：NavBarPosition.Start。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mode",
      children: "mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mode(value: NavigationMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置导航栏的显示模式。支持Stack、Split与Auto模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationmode9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "NavigationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏的显示模式。  默认值：NavigationMode.Auto。  自适应：基于组件宽度自适应单栏和双栏。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider",
      children: "divider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "divider(style: NavigationDividerStyle | null)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置HdsNavigation双栏模式下的分割线样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationdividerstyle23",
              children: "NavigationDividerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidenavbar",
      children: "hideNavBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hideNavBar(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否隐藏导航栏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏导航栏。设置为false时，不隐藏导航栏。设置为true时，隐藏HdsNavigation的导航栏，包括标题栏、内容区和工具栏。如果此时路由栈中存在HdsNavDestination页面，则直接显示栈顶HdsNavDestination页面，反之显示空白。  默认值：false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navdestination",
      children: "navDestination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "navDestination(builder: NavDestinationBuilder)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建HdsNavDestination组件。使用builder函数，基于name和pageInfos构造HdsNavDestination组件。builder下只能有一个根节点。builder中允许在HdsNavDestination组件外包含一层自定义组件， 但自定义组件不允许设置属性和事件，否则仅显示空白。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#navdestinationbuilder",
              children: "NavDestinationBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建HdsNavDestination组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navbarwidthrange",
      children: "navBarWidthRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "navBarWidthRange(value: NavBarWidthRangeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置导航栏最小和最大宽度（双栏模式下生效）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "规则："
        })
      }), " 优先级规则详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mincontentwidth",
        children: "minContentWidth"
      }), "属性的说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#navbarwidthrangeoptions",
              children: "NavBarWidthRangeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏最小和最大宽度配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mincontentwidth",
      children: "minContentWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minContentWidth(value: Dimension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置导航栏内容区最小宽度（双栏模式下生效）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "规则："
        })
      }), " 优先级规则详见说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏内容区最小宽度。  默认值：360。单位：vp。  undefined：行为不做处理，导航栏内容区最小宽度与默认值保持一致。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195981)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅设置navBarWidth时，不支持HdsNavigation分割线拖拽。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navBarWidthRange指定分割线可以拖拽范围。如果不设置值，则按照默认值处理。拖拽范围需要满足navBarWidthRange设置的范围和minContentWidth限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HdsNavigation显示范围缩小顺序：a. 缩小内容区大小。如果不设置minContentWidth属性，则可以缩小内容区至0， 否则最小缩小至minContentWidth。b. 缩小导航栏大小，缩小时需要满足导航栏宽度大于navBarRange的下限。c. 对显示内容进行裁切。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ignorelayoutsafearea",
      children: "ignoreLayoutSafeArea"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制组件的布局，使其扩展到非安全区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#layoutsafeareatype12",
              children: "LayoutSafeAreaType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置扩展安全区域的类型。  默认值：[LayoutSafeAreaType.SYSTEM]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "edges"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#layoutsafeareaedge12",
              children: "LayoutSafeAreaEdge"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置扩展安全区域的方向。  默认值：[LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887857)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件设置LayoutSafeArea之后生效的条件为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置LayoutSafeAreaType.SYSTEM时，组件的边界与非安全区域重合时组件能够延伸到非安全区域下。例如：设备顶部状态栏高度100，组件在屏幕中纵向方位的绝对偏移需要在0到100之间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若组件延伸到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systembarstyle",
      children: "systemBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "systemBarStyle(originalStyle: Optional<SystemBarStyle>, scrollEffectStyle: Optional<SystemBarStyle>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当HdsNavigation中显示HdsNavigation首页时，设置对应系统状态栏的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "originalStyle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#systembarstyle12",
              children: "SystemBarStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统状态栏初始样式。未设置systemBarStyle属性时，颜色默认值同主标题栏字体颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollEffectStyle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#systembarstyle12",
              children: "SystemBarStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HdsNavigation动态样式生效后，系统状态栏对应的动态样式。未设置systemBarStyle属性时，颜色默认值同主标题栏字体颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(36236)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不建议混合使用systemBarStyle属性和window设置状态栏样式的相关接口，例如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowsystembarproperties9",
          children: "setWindowSystemBarProperties"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationmode9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
          children: "Split"
        }), "模式下的HdsNavigation，如果内容区没有HdsNavDestination，则遵从HdsNavigation首页的设置，反之则遵从栈顶HdsNavDestination的设置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持在主窗口的主页面中使用systemBarStyle设置状态栏样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当页面设置不同样式时，在页面转场开始时生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非全屏窗口下，HdsNavigation/HdsNavDestination设置的状态栏不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recoverable",
      children: "recoverable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "recoverable(recoverable: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置HdsNavigation是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该HdsNavigation，并恢复至异常退出时的页面栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recoverable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HdsNavigation是否可恢复，默认为不可恢复。  默认值：false。  - true：页面栈可恢复。  - false：页面栈不可恢复。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259574)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该接口需要先设置HdsNavigation的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
        children: "id属性"
      }), "，否则该接口无效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口需要配合HdsNavDestination的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination#recoverable",
        children: "recoverable"
      }), "接口使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复的过程中不可序列化的信息，例如不可序列化的参数与用户设置的onPop等，会被丢弃，无法恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamichidetitlebar",
      children: "dynamicHideTitleBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamicHideTitleBar(value: DynamicHideParams)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置标题栏跟随内容区动态显隐配置，推荐搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindtoscrollable",
        children: "bindToScrollable"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindtonestedscrollable",
        children: "bindToNestedScrollable"
      }), "体验更佳的滑动效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dynamichideparams",
              children: "DynamicHideParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏跟随内容区滚动动态显隐配置。  当标题栏模式为HdsNavigationTitleMode.MODAL时该接口设置无效。  不支持在显隐过程中动态切换属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindtoscrollable",
      children: "bindToScrollable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindToScrollable(scrollers: Array<Scroller>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定导航组件和可滚动容器组件，动态显隐标题区域，状态栏及底部自定义区域，使能动态显隐更优体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可滚动容器组件的控制器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindtonestedscrollable",
      children: "bindToNestedScrollable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindToNestedScrollable(scrollers: Array<NestedScrollInfo>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定导航组件和嵌套的可滚动容器组件，动态显隐标题区域、状态栏及底部自定义区域，使能动态显隐更优体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#nestedscrollinfo",
              children: "NestedScrollInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "嵌套的可滚动容器组件的控制器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(159271)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当多个可滚动容器组件绑定了同一个导航组件时，滚动任何一个容器都会触发标题栏显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "置时，会立即触发标题栏显示动效。因此，为了获得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enabledragbar",
      children: "enableDragBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableDragBar(isEnabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制分栏场景下是否显示拖拽条。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启拖拽条，默认为无拖拽条样式。  默认值：false。  - true：有拖拽条样式。  - false：无拖拽条样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablemodechangeanimation",
      children: "enableModeChangeAnimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableModeChangeAnimation(isEnabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["控制是否开启", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationmode9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "NavigationMode"
      }), "单双栏切换时的动效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启单双栏切换动效。  默认值：true。  - true：开启单双栏切换动效。  - false：关闭单双栏切换动效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "withtheme",
      children: "withTheme"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "withTheme(value: WithThemeOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置HdsNavigation的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "WithTheme"
      }), "能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#withthemeoptions",
              children: "WithThemeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WithTheme能力配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "splitplaceholder",
      children: "splitPlaceholder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "splitPlaceholder(placeholder: ComponentContent)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation双栏模式下，支持设置右侧页面显示默认占位页，占位页仅作为UI展示页，不可获焦和响应事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Navigation双栏模式下右侧的默认占位页。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablevisibilitylifecyclewithcontentcover",
      children: "enableVisibilityLifecycleWithContentCover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableVisibilityLifecycleWithContentCover(isEnabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否启用HdsNavDestination页面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination#onhidden",
        children: "onHidden"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination#onshown",
        children: "onShown"
      }), "生命周期与全模态的联动触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用HdsNavDestination页面onShown、onHidden生命周期与全模态的联动触发。  默认值：true。  - true：全模态拉起时，会触发当前HdsNavDestination页面的onHidden生命周期；全模态关闭时，会触发当前HdsNavDestination页面的onShown生命周期。  - false：HdsNavDestination页面onHidden、onShown生命周期不会因为全模态的拉起、关闭而触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnavbarstatechange",
      children: "onNavBarStateChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNavBarStateChange(callback: Callback<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航栏显示状态切换时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callBack"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数为true时表示显示导航栏，为false时表示隐藏导航栏。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnavigationmodechange",
      children: "onNavigationModeChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNavigationModeChange(callback: Callback<NavigationMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当HdsNavigation首次显示或者单双栏状态发生变化时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationmode9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "NavigationMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 参数为NavigationMode.Split时：当前HdsNavigation显示为双栏。  - 参数为NavigationMode.Stack时：当前HdsNavigation显示为单栏。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontitlemodechange",
      children: "onTitleModeChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTitleModeChange(callback: Callback<HdsNavigationTitleMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当titleMode为HdsNavigationTitleMode.FREE时，随着可滚动组件的滑动标题栏模式发生变化时触发此回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlemode",
              children: "HdsNavigationTitleMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数为标题栏显示模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customnavcontenttransition",
      children: "customNavContentTransition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customNavContentTransition(delegate: CustomTransitionDelegate)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义转场动画回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customtransitiondelegate",
              children: "CustomTransitionDelegate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义转场动画回调方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrolleffecttype",
      children: "ScrollEffectType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题栏模糊样式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMON_BLUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏的模糊样式类型：通用模糊。  对组件背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔。  滑动内容进入/离开标题栏区域过程中，模糊背板和分割线透明渐变出现/消失。此方式适用于非沉浸式场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRADUAL_BLUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏的模糊样式类型：过渡模糊。  对组件背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔。  滑动前后标题栏内容发生颜色/状态变化，滑动过程中，线性跟手变化。此样式适用于沉浸式图文类的场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRADIENT_BLUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏的模糊样式类型：渐变模糊。  模糊效果在空间维度上呈现渐强/渐弱的变化，模糊边界柔和，用于增强页面沉浸感。  - 当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect属性配置为true时，标题栏样式从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "originalStyle"
            }), "到", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "scrollEffectStyle"
            }), "线性过渡。  - 当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect属性配置为false时，直接生效模糊。此方式适用于列表型非沉浸式场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMMERSIVE_GRADIENT_BLUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏的模糊样式类型：沉浸式渐变模糊。  模糊效果在空间维度上呈现渐强/渐弱的变化，模糊边界柔和，用于增强页面沉浸感。  - 当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect属性配置为true时，标题栏样式从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "originalStyle"
            }), "到", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "scrollEffectStyle"
            }), "线性过渡。  - 当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect属性配置为false时，直接生效模糊。此样式适用于沉浸式图文类的场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationtitlemode",
      children: "HdsNavigationTitleMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题栏显示模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FREE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题随着内容向上滚动而缩小（子标题的大小不变、淡出）。向下滚动内容到顶时则恢复原样。  未滚动状态，标题栏高度与FULL模式一致；滚动时，标题栏的最小高度与MINI模式一致。  推荐搭配", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindtoscrollable",
              children: "bindToScrollable"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindtonestedscrollable",
              children: "bindToNestedScrollable"
            }), "体验更佳的联动效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定为大标题模式。  默认值：只有主标题时，标题栏高度为112vp；同时有主标题和副标题时，标题栏高度为138vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MINI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定为小标题模式。标题栏高度为56vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["固定为半模态模式。  - 一级页面只有主标题时，背板高度64vp，标题栏高度为56vp，上padding为8vp。  - 一级页面有主标题和副标题时，背板高度为80vp，标题栏为72vp，上padding为8vp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dividershowtype",
      children: "DividerShowType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分割线显示类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线始终不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线始终显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线随内容区滚动跟手显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textstylemode",
      children: "TextStyleMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文字型图标模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通文本模式。  胶囊按钮，圆角为sys.float.corner_radius_level10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_CHARACTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单字文本模式。  圆形按钮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bottombuildershowtype",
      children: "BottomBuilderShowType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bottomBuilder显示类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIRECTLY_SHOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接显示bottomBuilder。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OVERDRAG_SHOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过度拖拽场景下，显示bottomBuilder。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hidemode",
      children: "HideMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题栏动态显隐模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCROLL_UP_TO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上滑到固定位置隐藏，下滑到固定位置显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCROLL_UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意位置上滑隐藏，下滑显示。仅针对连续滑动场景生效，使用滚动组件接口触发的滚动不生效该隐藏模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCROLL_DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意位置上滑显示，下滑隐藏。仅标题栏模式为HdsNavigationTitleMode.MINI或者HdsNavDestinationTitleMode.MINI时该配置生效。仅针对连续滑动场景生效，使用滚动组件接口触发的滚动不生效该隐藏模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCROLL_UP_TO_BLEND_SCROLL_UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合隐藏模式，bottomBuilder使用SCROLL_UP_TO隐藏模式，标题栏使用SCROLL_UP隐藏模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iconstylemode",
      children: "IconStyleMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片型图标模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小图标模式，图标默认大小为18vp * 18vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通图标模式，图标默认大小为24vp * 24vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LARGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大图标模式，图标默认大小为40vp * 40vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blurstrategy",
      children: "BlurStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模糊效果生效策略枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能模糊效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使能模糊效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADAPTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模糊效果生效策略将根据系统策略进行调整。共设置三档系统策略：精美、轻柔、流畅，只有精美档位配置能够生效模糊效果。  系统策略由设备厂商根据设备性能配置，未配置时默认执行精美策略。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "titlesize",
      children: "TitleSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题字号大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TITLE_S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小号标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TITLE_ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等偏大号标题。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navdestinationbuilder",
      children: "NavDestinationBuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type NavDestinationBuilder = (name: string, pageInfos: Object) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于name和pageInfos构造HdsNavDestination组件的Builder方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建的HdsNavDestination页面的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageInfos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建的HdsNavDestination页面的详细参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customtransitiondelegate",
      children: "CustomTransitionDelegate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type CustomTransitionDelegate = (from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => NavigationAnimatedTransition | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义转场动画回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navcontentinfo11",
              children: "NavContentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退场Destination的页面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navcontentinfo11",
              children: "NavContentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进场Destination的页面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationoperation11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "NavigationOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转场类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationanimatedtransition11",
              children: "NavigationAnimatedTransition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "icontype",
      children: "IconType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type IconType = ResourceStr | SymbolGlyphModifier | PixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏上单个图标型菜单项支持的图片资源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "symbol资源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像像素类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationmenuitemoptions",
      children: "HdsNavigationMenuItemOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type HdsNavigationMenuItemOptions = HdsNavigationBadgeIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏菜单项配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationbadgeiconoptions",
              children: "HdsNavigationBadgeIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带信息提醒的图标配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationbackbuttonitemoptions",
      children: "HdsNavigationBackButtonItemOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type HdsNavigationBackButtonItemOptions = HdsNavigationIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏返回按钮配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationiconoptions",
              children: "HdsNavigationIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationbackgroundstyle",
      children: "HdsNavigationBackgroundStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏背景板样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏背景板背景色。  默认值：  模糊样式类型为COMMON_BLUR或GRADUAL_BLUR时，背景色默认值均为透明色。  模糊样式类型为GRADIENT_BLUR时，背景色生效线性径向渐变色，具体默认值分以下场景：  - 若", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为true，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            }), ".originalStyle中，backgroundColor默认值为透明色；在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            }), ".scrollEffectStyle中，backgroundColor默认值为#99000000。  - 若", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为false，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            }), ".originalStyle中，backgroundColor生效，默认值为透明色。  从6.1.0(23)开始，新增如下背景色默认规则：  当模糊样式类型为GRADIENT_BLUR并已配置systemMaterialEffect，或者模糊类型为IMMERSIVE_GRADIENT_BLUR时，对应默认值如下：  - 若", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为true，默认值为透明色；若", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为false，默认值为$r('sys.color.comp_background_gray')。  - 仅当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为true时生效，默认值为r('sys.color.comp_background_gray')。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maskExtraHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏模糊蒙层超出标题栏的额外高度。该配置只在模糊样式类型配置为GRADIENT_BLUR时生效。单位：vp。  默认值：32。单位：vp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blurRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏模糊半径。仅在模糊样式类型配置为渐变模糊GRADIENT_BLUR及沉浸式渐变模糊IMMERSIVE_GRADIENT_BLUR时生效。取值范围为[0.0, 128.0]。超出取值范围时，按默认值处理。  默认值：  - 作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            }), ".originalStyle中的属性时，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为true时，默认值为0.0；当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为false，未配置systemMaterialEffect时，默认值为16.0，配置systemMaterialEffect时，默认值为12.0。  - 作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            }), ".scrollEffectStyle中的属性时，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect为true时生效，未配置systemMaterialEffect时，默认值为16.0，配置systemMaterialEffect时，默认值为12.0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationtitlestyle",
      children: "HdsNavigationTitleStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的标题样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitleColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏主标题颜色。  默认值：  - 当模糊样式类型配置为COMMON_BLUR时，主标题默认颜色为$r('sys.color.font_primary')。  - 当模糊样式类型配置为GRADUAL_BLUR时，动态样式生效前，主标题默认颜色为$r('sys.color.font_on_primary')，动态样式生效后，主标题默认颜色为$r('sys.color.font_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为false时，主标题默认颜色为$r('sys.color.font_on_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为true时，动态样式生效前，主标题默认颜色为$r('sys.color.font_primary')，动态样式生效后，主标题默认颜色为$r('sys.color.font_on_primary')。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏副标题颜色。  默认值：  - 当模糊样式类型配置为COMMON_BLUR时，副标题默认颜色为$r('sys.color.font_secondary')。  - 当模糊样式类型配置为GRADUAL_BLUR时，动态样式生效前，副标题默认颜色为$r('sys.color.font_on_secondary')，动态样式生效后，副标题默认颜色为$r('sys.color.font_secondary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为false时，副标题默认颜色为$r('sys.color.font_on_secondary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为true时，动态样式生效前，副标题默认颜色为$r('sys.color.font_secondary')，动态样式生效后，副标题默认颜色为$r('sys.color.font_on_secondary')。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitleShadowColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏主标题投影颜色，仅在配置systemMaterialEffect场景生效。  默认值为：$r('sys.color.comp_background_gary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleShadowColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏副标题投影颜色，仅在配置systemMaterialEffect场景生效。  默认值为：$r('sys.color.comp_background_gary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationiconitemstyle",
      children: "HdsNavigationIconItemStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的图标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏图标背景色。  默认值：  - 当模糊样式类型配置为COMMON_BLUR时，图标背板默认色为$r('sys.color.comp_background_tertiary')。  - 当模糊样式类型配置为GRADUAL_BLUR时，默认值为透明色，同时生效提亮压暗样式。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为false时，默认值为透明色，同时生效提亮压暗样式。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为true时，动态样式生效前，背景色默认值为$r('sys.color.comp_background_tertiary')，动态样式生效后，默认值为透明色，同时生效提亮压暗样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏图标色。在配置了图标模式为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#iconstylemode",
              children: "IconStyleMode"
            }), "时生效。  默认值：  - 当模糊样式类型配置为COMMON_BLUR时，默认值为$r('sys.color.icon_primary')。  - 当模糊样式类型配置为GRADUAL_BLUR时，在动态样式生效前，默认值为$r('sys.color.icon_on_primary')；动态样式生效后，默认值为$r('sys.color.icon_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为false时，默认值为$r('sys.color.icon_on_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为true时，动态样式生效前，默认值为$r('sys.color.icon_primary')，动态样式生效后，默认值为$r('sys.color.icon_on_primary')。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏图标文本色。在配置了图标模式为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#textstylemode",
              children: "TextStyleMode"
            }), "时生效。  默认值：  - 当模糊样式类型配置为COMMON_BLUR时，默认值为$r('sys.color.font_primary')。  - 当模糊样式类型配置为GRADUAL_BLUR时，在动态样式生效前，默认值为$r('sys.color.font_on_primary')；动态样式生效后，默认值为$r('sys.color.font_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为false时，默认值为$r('sys.color.font_on_primary')。  - 当模糊样式类型配置为GRADIENT_BLUR且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            }), ".enableScrollEffect配置为true时，动态样式生效前，默认值为$r('sys.color.font_primary')，动态样式生效后，默认值为$r('sys.color.font_on_primary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationdividerstyle",
      children: "HdsNavigationDividerStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的分割线样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dividerColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏分割线颜色。  默认值：$r('sys.color.comp_divider')。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdstitlebarcontentstyle",
      children: "HdsTitleBarContentStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的内容区样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "titleStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlestyle",
              children: "HdsNavigationTitleStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏内容区标题样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationiconitemstyle",
              children: "HdsNavigationIconItemStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏内容区菜单栏样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backIconStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationiconitemstyle",
              children: "HdsNavigationIconItemStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏内容区返回图标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subIconStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationiconitemstyle",
              children: "HdsNavigationIconItemStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏内容区子图标样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dividerStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationdividerstyle",
              children: "HdsNavigationDividerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏内容区分割线样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationtitlebarstyle",
      children: "HdsNavigationTitleBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationbackgroundstyle",
              children: "HdsNavigationBackgroundStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HdsNavigation标题栏背板样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdstitlebarcontentstyle",
              children: "HdsTitleBarContentStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HdsNavigation标题栏内容区样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrolleffectoptions",
      children: "ScrollEffectOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的动态样式参数配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableScrollEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置标题栏是否随内容区滚动的总偏移量动态生效标题栏样式。  默认值：true。  - true：内容区滚动的总偏移量从blurEffectiveStartOffset到blurEffectiveEndOffset，标题栏样式从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "originalStyle"
            }), "到", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "scrollEffectStyle"
            }), "线性过渡。  - false：不随内容区滚动动态生效标题栏样式，仅生效", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "originalStyle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollEffectType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffecttype",
              children: "ScrollEffectType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏模糊样式类型。  默认值：ScrollEffectType.COMMON_BLUR。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableRefreshOffsetChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否响应内容区Refresh组件的滚动。  默认值：true。  - true：随内容区Refresh组件的滚动变化生效对应的标题栏样式。  - false：不随内容区Refresh组件的滚动变化生效对应的标题栏样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blurEffectiveStartOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["动态样式线性过渡的起始位置。当内容区滚动的总偏移量超过该值时，标题栏开始从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "originalStyle"
            }), "到", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "scrollEffectStyle"
            }), "线性过渡。  取值范围[0,+∞)。  默认值：LengthMetric.vp(0)。  超出取值范围时，按默认值处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blurEffectiveEndOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["动态样式线性过渡的终点位置。当内容区滚动的总偏移量超过该值时，标题栏的动态样式过渡结束，固定为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "scrollEffectStyle"
            }), "。  取值范围[0,+∞)。  若设置数值小于blurEffectiveStartOffset，按默认值处理。  默认值：  - 标题栏模糊样式类型设置为ScrollEffectType.COMMON_BLUR或者ScrollEffectType.GRADIENT_BLUR时，默认值为LengthMetric.vp(8)。  - 标题栏模糊样式类型设置为ScrollEffectType.GRADUAL_BLUR，默认值为LengthMetric.vp(56)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "titlebarstyleoptions",
      children: "TitleBarStyleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的样式配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollEffectOpts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrolleffectoptions",
              children: "ScrollEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏的动态样式参数配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "originalStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlebarstyle",
              children: "HdsNavigationTitleBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏的初始样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollEffectStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitlebarstyle",
              children: "HdsNavigationTitleBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏随内容区滚动生效的终点样式。  如果设置的模糊参数与模糊样式类型不匹配时，按照模糊样式类型对应的默认样式生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blurStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#blurstrategy",
              children: "BlurStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏的模糊生效策略。  默认值：BlurStrategy.ADAPTIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermoCtrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件样式的生效策略是否跟随热管理档位", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-thermal/js-apis-thermal#thermallevel",
              children: "ThermalLevel"
            }), "信息管理。  默认值：false。  - true：跟随热管理档位信息生效组件样式，组件创建时，若ThermalLevel > OVERHEATED，关闭组件模糊效果。  - false：不跟随热管理档位信息生效组件样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "systemMaterialEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#systemmaterialparams",
              children: "SystemMaterialParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏沉浸光感样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationbadgeoptions",
      children: "HdsNavigationBadgeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的信息标记配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置提醒信息数，大于99时，显示“99+”。  取值范围：[-2147483648,2147483647]。超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分。  默认值：-1。  设置为小于等于0时，不显示信息标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示内容的文本字符串。  - 同时设置value和count属性时，优先显示开发者设置的value。  - 开发者不设置value时，信息标记按照count属性配置生效。  - value配置为空字符串时，信息标记显示为“小红点”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏信息标记的的无障碍文本属性。  当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。  默认值：\"\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationiconoptions",
      children: "HdsNavigationIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏上图标配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#icontype",
              children: "IconType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标型菜单项支持的图片资源类型。  不配置时，显示空白。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标型菜单项的文本。  默认值：\"\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能。  默认值：true。  - true：使能。  - false：未使能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前选项被选中的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件Id，组件的唯一标识，唯一性由使用者保证。  默认值：\"\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#iconstylemode",
              children: "IconStyleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textstylemode",
              children: "TextStyleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationbadgeiconoptions",
      children: "HdsNavigationBadgeIconOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏上带信息提醒的图标配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationiconoptions",
              children: "HdsNavigationIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "badge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationbadgeoptions",
              children: "HdsNavigationBadgeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息标记配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationmenucontentoptions",
      children: "HdsNavigationMenuContentOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的菜单区域内容配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationmenuitemoptions",
              children: "HdsNavigationMenuItemOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单栏的图标配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单栏最多显示的图标个数，默认最多支持显示3个图标，多余的图标会被放入自动生成的更多图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiWindowEntryInAPPMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#multiwindowentryinappmenuparams",
              children: "MultiWindowEntryInAPPMenuParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用内多窗菜单栏配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  依赖全景多窗特性，只有当前设备及屏幕状态支持全景多窗，才支持设置此功能。目前支持全景多窗的设备形态有：  - 双折叠：展开态。  - 三折叠：双屏态，三屏态的横屏态。  - 平板：横屏态。  对于不支持的设备形态，该组件不可交互，不响应点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiwindowentryinappmenuparams",
      children: "MultiWindowEntryInAPPMenuParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的菜单区域应用内多窗配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要启动窗口的参数，有以下要求：  - 必填字段：abilityName, moduleName和bundleName；  - 应用限制：所有指定的名称（abilityName, moduleName 和bundleName）必须属于当前应用；  - 跨应用限制：多窗口功能不支持跨应用的能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationtitle",
      children: "HdsNavigationTitle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的标题资源配置。字符串超长时，如果不设置副标题，先缩小再换行（2行）最后以\"...\"截断。如果设置副标题，先缩小最后以\"...\"截断。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏主标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏副标题。不设置时，不显示副标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置副标题自定义区域。配置subTitle时，从subTitle尾部开始布局。该配置只在标题栏模式为HdsNavigationTitleMode.MODAL或者HdsNavDestinationTitleMode.MODAL时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleComponent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置副标题自定义区域。配置subTitle时，从subTitle尾部开始布局。该配置只在标题栏模式为HdsNavigationTitleMode.MODAL或者HdsNavDestinationTitleMode.MODAL时生效。  当同时配置了subTitleBuilder属性与subTitleComponent属性时，生效subTitleComponent属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.1(21)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置主标题的组件ID。  默认值：\"\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置副标题的组件ID。  默认值：\"\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitleAccessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置主标题的无障碍文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitleAccessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置副标题的无障碍文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainTitleSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlesize",
              children: "TitleSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置主标题字号。该配置只在标题栏模式为HdsNavigationTitleMode.MINI或者HdsNavDestinationTitleMode.MINI时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.1.0(23)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bottombuilderparams",
      children: "BottomBuilderParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏底部自定义区域配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题底部自定义区域内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builderComponent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题底部自定义区域内容。  当同时配置了builder属性与builderComponent属性时，生效builderComponent属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.1(21)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏底部自定义区域高度。不支持设置百分比单位。  默认值：56vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bottombuildershowtype",
              children: "BottomBuilderShowType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏底部自定义区域显示类型。仅在HideMode配置为HideMode.SCROLL_UP_TO时，该配置生效。  默认值：BottomBuilderShowType.DIRECTLY_SHOW。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationdividerparams",
      children: "HdsNavigationDividerParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏分割线配置，该参数不支持动态切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dividershowtype",
              children: "DividerShowType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏分割线显示类型。  默认值：DividerShowType.AUTO。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "titlebarcontentoptions",
      children: "TitleBarContentOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏的内容区配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationtitle",
              children: "HdsNavigationTitle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏标题内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationmenucontentoptions",
              children: "HdsNavigationMenuContentOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏菜单栏内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationbackbuttonitemoptions",
              children: "HdsNavigationBackButtonItemOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏的返回按钮内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stackBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏顶部自定义区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stackBuilderComponent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏顶部自定义区域。  当同时配置了stackBuilder属性与stackBuilderComponent属性时，生效stackBuilderComponent属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.1(21)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottomBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bottombuilderparams",
              children: "BottomBuilderParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏底部自定义区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationdividerparams",
              children: "HdsNavigationDividerParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏分割线内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdsnavigationbadgeiconoptions",
              children: "HdsNavigationBadgeIconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题栏子图标内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paddingoptions",
      children: "PaddingOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标题栏的内间距配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏起始端内间距。  默认值：页面宽度小于600vp时，默认值为16vp，页面宽度大于等于840vp时，默认值为32vp，其他场景默认值为24vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏结束端内间距。  默认值：页面宽度小于600vp时，默认值为16vp，页面宽度大于等于800vp时，默认值为32vp，其他场景默认值为24vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navbarwidthrangeoptions",
      children: "NavBarWidthRangeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航栏最大最小宽度配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏最小宽度。  默认值：240vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航栏最大宽度。  默认值：组件宽度的40% ，且不大于 432，单位：vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdsnavigationtitlebaroptions",
      children: "HdsNavigationTitleBarOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#paddingoptions",
              children: "PaddingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏内间距设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarstyleoptions",
              children: "TitleBarStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏样式设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#titlebarcontentoptions",
              children: "TitleBarContentOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏内容区设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHoverMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否响应悬停态。  使用规则：  1. 需满足HdsNavigation为全屏大小；  2. 标题栏显示模式为HdsNavigationTitleMode.FREE时此接口设置无效。  默认值：false。  - true：响应悬停态。  - false：不响应悬停态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "avoidLayoutSafeArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否需要标题栏主动避让安全区。  默认值：false。  - true：需要标题栏主动避让安全区。  - false：不需要标题栏主动避让安全区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableComponentSafeArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否将标题栏设置为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#safeareapadding14",
              children: "组件级安全区"
            }), "。  默认值：false。  - true：将标题栏设置为组件级安全区。  - false：不将标题栏设置为组件级安全区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamichideparams",
      children: "DynamicHideParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsNavigation标题栏动态显隐配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideTitleArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏标题区域。  默认值：false。  - true：隐藏标题区域。  - false：不隐藏标题区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideBottomBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏标题栏底部自定义区域。  默认值：false。  - true：隐藏标题栏底部自定义区域。  - false：不隐藏标题栏底部自定义区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideStatusBar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否隐藏状态栏区域。只有在配置隐藏标题区域时，配置隐藏状态栏才能生效  默认值：false。  - true：隐藏状态栏区域。  - false：不隐藏状态栏区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidemode",
              children: "HideMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏动态隐藏模式。  默认值：HideMode.SCROLL_UP_TO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置标题栏开始隐藏的滚动距离。只在HideMode.SCROLL_UP_TO隐藏模式下生效。  默认值：0。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置内容区滚动距离与标题栏隐藏的比例，取值范围[1.0,3.0]。  当内容区每滚动1vp，标题栏隐藏1/hideRatio vp。  超出取值范围，按默认值处理。  默认值：2.0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nestedscrollinfo",
      children: "NestedScrollInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "嵌套可滚动容器组件信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可滚动容器组件的控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可滚动容器组件的控制器，child对应的组件需要是parent对应组件的子组件，且组件间存在嵌套滚动关系。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "withthemeoptions",
      children: "WithThemeOptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标题栏", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "WithTheme"
      }), "能力配置信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableThemeColorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持WithTheme作用域内组件自定义深浅色配置。  默认值：false。  - true：支持WithTheme作用域内自定义深浅色配置。  - false：不支持WithTheme作用域内自定义深浅色配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemmaterialparams",
      children: "SystemMaterialParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "材质效果参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSComponent.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "materialType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsmaterial/ui-design-hdsmaterial#materialtype",
              children: "hdsMaterial.MaterialType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置材质类型。  默认值：hdsMaterial.MaterialType.NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "materialLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsmaterial/ui-design-hdsmaterial#materiallevel",
              children: "hdsMaterial.MaterialLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置材质等级。  默认值：hdsMaterial.MaterialLevel.ADAPTIVE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐使用默认值ADAPTIVE档位："
              })
            }), " 该模式下，系统会根据当前设备的算力动态调整组件的材质效果，实现性能与显示效果的最佳平衡体验。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "若未采用系统自适应能力："
              })
            }), " 请先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsmaterial/ui-design-hdsmaterial#getsystemmaterialtypes",
              children: "getSystemMaterialTypes()"
            }), "接口查询当前设备支持的材质能力，再根据查询结果选用相应的材质效果枚举：  1. 如果查询结果显示当前设备支持IMMERSIVE材质类型，可选用EXQUISITE或GENTLE效果。  2. 如果查询结果显示当前设备不支持IMMERSIVE材质类型，则建议使用SMOOTH效果，以降低卡顿和发热风险，保障用户体验。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "详细使用指导："
              })
            }), " 请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-component-material#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B2%89%E6%B5%B8%E5%85%89%E6%84%9F%E6%95%88%E6%9E%9C",
              children: "HDS组件使用沉浸光感材质指南"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置动态模糊样式",
      children: "设置动态模糊样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过titleBar属性，自定义设置标题栏随内容区滚动的动态模糊样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, ScrollEffectType, HdsNavigationTitleMode } from '@kit.UIDesignKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\nconst TITLE_BAR_HEIGHT_FREE: number = 138;\n\n@Entry\n@Component\nstruct Index {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  scroller: Scroller = new Scroller();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_FREE;\n  @State isHideBackButton: boolean = false;\n  @State titleMode: HdsNavigationTitleMode = HdsNavigationTitleMode.FREE;\n  @State subTitle: string = 'Sub';\n\n  build() {\n    HdsNavigation(this.pageInfos) {\n      Column() {\n        Stack() {\n          Scroll(this.scroller) {\n            Column() {\n              Blank().height(this.blankHeight)\n              Image($r('app.media.scenery')).width('100%') // scenery为自定义资源，开发者需替换本地资源\n            }\n          }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n        }\n      }\n    }\n    .titleBar({\n      padding: {\n        start: LengthMetrics.vp(2),\n        end: LengthMetrics.vp(2)\n      },\n      style: {\n        scrollEffectOpts: {\n          enableScrollEffect: true,\n          scrollEffectType: ScrollEffectType.COMMON_BLUR,\n          blurEffectiveStartOffset: LengthMetrics.vp(0),\n          blurEffectiveEndOffset: LengthMetrics.vp(20)\n        },\n        originalStyle: {\n          backgroundStyle: {\n            backgroundColor: $r('sys.color.ohos_id_color_background'),\n          },\n          contentStyle: {\n            titleStyle: { mainTitleColor: $r('sys.color.font_primary'), subTitleColor: $r('sys.color.font_secondary') },\n            menuStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            },\n            backIconStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            }\n          }\n        },\n        scrollEffectStyle: {\n          backgroundStyle: {\n            backgroundColor: $r('sys.color.ohos_id_color_background_transparent'),\n          },\n          contentStyle: {\n            titleStyle: { mainTitleColor: $r('sys.color.font_primary'), subTitleColor: $r('sys.color.font_secondary') },\n            menuStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            },\n            backIconStyle: {\n              backgroundColor: $r('sys.color.comp_background_tertiary'),\n              iconColor: $r('sys.color.icon_primary')\n            }\n          }\n        }\n      },\n      content: {\n        title: {\n          mainTitle: 'Main',\n          subTitle: this.subTitle\n        },\n        menu: {\n          value: [{\n            content: {\n              label: 'menu1',\n              icon: $r('sys.symbol.ohos_wifi'),\n              isEnabled: true,\n              action: () => {\n                console.info(\"HdsNavigation menu1\");\n              }\n            }\n          }, {\n            content: {\n              label: 'menu2',\n              icon: $r('sys.symbol.plus'),\n              isEnabled: true,\n            }\n          }, {\n            content: {\n              label: 'menu3',\n              icon: $r('sys.symbol.lock'),\n            }\n          }, {\n            content: {\n              label: 'menu4',\n              icon: $r('sys.symbol.trunk'),\n            }\n          }]\n        },\n        backIcon: {\n          label: 'backButton',\n          icon: $r('sys.symbol.trunk'),\n          isEnabled: true,\n        }\n      }\n    })\n    .systemBarStyle({ statusBarContentColor: '#0A59F7' }, { statusBarContentColor: '#C7C7CD' })\n    .titleMode(this.titleMode)\n    .hideBackButton(this.isHideBackButton)\n    .hideTitleBar(false)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508110)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "437",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置菜单消息提醒",
      children: "设置菜单消息提醒"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置标题栏上菜单配置中的Badge属性，使用信息提醒能力，在菜单项右上角附加消息提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute } from '@kit.UIDesignKit';\n\nconst TITLE_BAR_HEIGHT_FREE: number = 138;\n\n@Entry\n@Component\nstruct Index {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_FREE;\n  @State subTitle: string = 'Sub';\n\n  build() {\n    HdsNavigation(this.pageInfos) {\n      Column() {\n        Stack() {\n          Column() {\n            Blank().height(this.blankHeight)\n            Image($r('app.media.background1')) // background1为自定义资源，开发者需替换本地资源\n              .width('100%')\n          }\n        }\n      }\n    }\n    .titleBar({\n      content: {\n        title: {\n          mainTitle: \"Main\",\n          subTitle: this.subTitle\n        },\n        menu: {\n          value: [{\n            content: {\n              label: 'menu1',\n              icon: $r('sys.symbol.plus'),\n              isEnabled: true,\n            },\n            badge: {\n              count: 1,\n            }\n          }, {\n            content: {\n              label: 'menu2',\n              icon: $r('sys.symbol.trunk'),\n              isEnabled: true,\n            },\n            badge: {\n              count: 100,\n            }\n          }]\n        },\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47219)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "525",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置自定义区域",
      children: "设置自定义区域"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置titleBar属性中的stackBuilder，bottomBuilder属性，可以使用标题栏的自定义区域设置能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, ScrollEffectType } from '@kit.UIDesignKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\nconst TITLE_BAR_HEIGHT_FREE: number = 138;\nconst BOTTOM_BUILDER_HEIGHT: number = 56;\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_FREE + BOTTOM_BUILDER_HEIGHT;\n\n  @Builder\n  StackBuilder() {\n    Column() {\n      Button(\"HdsNavigation\")\n    }\n    .height(56)\n    .justifyContent(FlexAlign.Center)\n  }\n\n  @Builder\n  BottomBuilder() {\n    Column() {\n      Search()\n    }\n    .width('100%')\n    .height(56)\n  }\n\n  build() {\n    Column() {\n      HdsNavigation() {\n        Scroll(this.scroller) {\n          Column() {\n            Blank().height(this.blankHeight).width('100%')\n            Image($r('app.media.scenery')).width('100%') // scenery为自定义资源，开发者需替换本地资源\n          }\n        }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n      }\n      .titleBar({\n        style: {\n          scrollEffectOpts: {\n            enableScrollEffect: true,\n            scrollEffectType: ScrollEffectType.GRADIENT_BLUR,\n            blurEffectiveStartOffset: LengthMetrics.vp(0),\n            blurEffectiveEndOffset: LengthMetrics.vp(20)\n          },\n          scrollEffectStyle: {\n            backgroundStyle: { maskExtraHeight: 56.0 },\n          }\n        },\n        content: {\n          title: {\n            mainTitle: 'MainTitle',\n            subTitle: 'SubTitle'\n          },\n          stackBuilder: (): void => this.StackBuilder(),\n          bottomBuilder: { builder: (): void => this.BottomBuilder() },\n          menu: {\n            value: [{\n              content: {\n                label: 'menu1',\n                icon: $r('sys.symbol.plus'),\n              },\n            }, {\n              content: {\n                label: 'menu2',\n                icon: $r('sys.symbol.lock'),\n              }\n            }]\n          }\n        }\n      })\n      .bindToScrollable([this.scroller])\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986849)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "428",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置标题栏的动态显隐",
      children: "设置标题栏的动态显隐"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置dynamicHideTitleBar属性，可以使用标题栏随内容区动态显隐能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HideMode } from '@kit.UIDesignKit';\n\nconst TITLE_BAR_HEIGHT_FREE: number = 138;\nconst BOTTOM_BUILDER_HEIGHT: number = 56;\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_FREE + BOTTOM_BUILDER_HEIGHT;\n\n  @Builder\n  BottomBuilder() {\n    Column() {\n      Search()\n    }\n    .width('100%')\n    .height(56)\n  }\n\n  build() {\n    Column() {\n      HdsNavigation() {\n        Scroll(this.scroller) {\n          Column() {\n            Blank().height(this.blankHeight).width('100%')\n            Image($r('app.media.scenery')).width('100%') // scenery为自定义资源，开发者需替换本地资源\n          }\n        }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n      }\n      .titleBar({\n        content: {\n          title: {\n            mainTitle: 'MainTitle',\n            subTitle: 'SubTitle'\n          },\n          bottomBuilder: { builder: (): void => this.BottomBuilder() },\n          menu: {\n            value: [{\n              content: {\n                label: 'menu1',\n                icon: $r('sys.symbol.plus'),\n              },\n            }]\n          }\n        }\n      })\n      .bindToScrollable([this.scroller])\n      .dynamicHideTitleBar({\n        hideTitleArea: true,\n        hideBottomBuilder: true,\n        hideStatusBar: false,\n        mode: HideMode.SCROLL_UP_TO\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577647)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "552",
        height: "950"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置标题栏图标样式",
      children: "设置标题栏图标样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置HdsNavigationIconOptions属性中的type属性，可以设置图标为文字型或者图片型图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport {\n  HdsNavigation,\n  HdsNavigationAttribute,\n  HdsNavigationTitleMode,\n  IconStyleMode,\n  TextStyleMode,\n  DividerShowType\n} from '@kit.UIDesignKit';\n\nconst TITLE_BAR_HEIGHT_MINI: number = 56;\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_MINI;\n\n  build() {\n    Column() {\n      HdsNavigation() {\n        Scroll(this.scroller) {\n          Column() {\n            Blank().height(this.blankHeight).width('100%')\n            Image($r('app.media.background1')).width('100%')\n          }\n        }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n      }\n      .titleMode(HdsNavigationTitleMode.MINI)\n      .hideBackButton(true)\n      .titleBar({\n        content: {\n          title: {\n            mainTitle: 'Main',\n            subTitle: 'Sub'\n          },\n          menu: {\n            value: [{\n              content: {\n                label: 'CAPSULE',\n                type: TextStyleMode.NORMAL,\n              }\n            }, {\n              content: {\n                label: '5',\n                type: TextStyleMode.SINGLE_CHARACTER,\n              }\n            }, {\n              content: {\n                label: 'smallIcon',\n                icon: $r('sys.symbol.plus'),\n                type: IconStyleMode.LARGE,\n              }\n            }]\n          },\n          subIcon: {\n            content: {\n              label: 'headIcon',\n              icon: $r('sys.symbol.lock'),\n              type: IconStyleMode.SMALL,\n            }\n          },\n          divider: { showType: DividerShowType.ON },\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(933933)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "525",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "半模态标题栏样式",
      children: "半模态标题栏样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过titleMode设置半模态标题栏显示模式，半模态模式下，可以在subTitle右侧区域设置用户自定义的subTitleBuilder。半模态样式下，设置图标类型为IconStyleMode.SMALL，同时不设置图标资源时，默认显示关闭按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HdsNavigationTitleMode, IconStyleMode } from '@kit.UIDesignKit';\n\nconst TITLE_BAR_HEIGHT_MODAL: number = 80;\n\n@Entry\n@Component\nstruct SheetTransitionExample {\n  @State isShow: boolean = false;\n  @State blankHeight: number = TITLE_BAR_HEIGHT_MODAL;\n  scroller: Scroller = new Scroller();\n\n  @Builder\n  SubTitleBuilder() {\n    Text(\"click to share\")\n      .fontColor(Color.Blue)\n      .maxFontScale(1)\n      .lineHeight(`${14 * 1.49}vp`)\n      .fontSize(14)\n      .onClick(() => {\n        console.info(\"click to share\");\n      })\n  }\n\n  // 创建半模态页面显示内容\n  @Builder\n  myBuilder() {\n    Column() {\n      HdsNavigation() {\n        Scroll(this.scroller) {\n          Column() {\n            Blank().height(this.blankHeight).width('100%')\n            Image($r('app.media.background1')) // background1为自定义资源，开发者需替换本地资源\n              .width('100%')\n          }\n        }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n      }\n      .titleMode(HdsNavigationTitleMode.MODAL) // 设置显示的HdsNavigation为半模态样式\n      .titleBar({\n        content: {\n          title: {\n            mainTitle: 'MainTitle',\n            subTitle: 'SubTitle',\n            subTitleBuilder: this.SubTitleBuilder.bind(this), // 自定义副标题区域\n          },\n          menu: {\n            value: [{\n              content: {\n                label: 'modal_cancel',\n                isEnabled: true,\n                type: IconStyleMode.SMALL,\n                action: () => {\n                  console.info(\"model cancel\");\n                }\n              }\n            }]\n          },\n          subIcon: {\n            content: {\n              label: 'leftIcon',\n              icon: $r('sys.symbol.ohos_wifi'),\n              isEnabled: true,\n            }\n          },\n        }\n      })\n    }\n  }\n\n  build() {\n    Column() {\n      Button(\"transition modal\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindSheet($$this.isShow, this.myBuilder(), { showClose: false }) // 绑定半模态页面\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(444767)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "525",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图标上绑定自定义menu",
      children: "图标上绑定自定义menu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置菜单项HdsNavigationIconOptions中的componentId属性，结合promptAction.openMenu方法，绑定TargetInfo中的Id属性为设置的componentId，可以在对应的图标上弹出用户自定义菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HdsNavigationTitleMode } from '@kit.UIDesignKit';\nimport { ComponentContent, LengthMetrics, Prompt } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TITLE_BAR_HEIGHT_FULL: number = 138;\n\n@Builder\nfunction menuComponent() {\n  Menu() {\n    MenuItem({ content: \"copy\" }).onClick(() => {\n      Prompt.showToast({ message: 'on click' });\n    })\n    MenuItem({ content: \"paste\" }).enabled(false)\n  }\n  .width(224).menuItemDivider({ strokeWidth: LengthMetrics.px(1), color: $r('sys.color.comp_divider') })\n}\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  @State blankHeight: number = TITLE_BAR_HEIGHT_FULL;\n  private targetId: string = 'bindMenu';\n\n  build() {\n    Column() {\n      HdsNavigation() {\n        Scroll(this.scroller) {\n          Column() {\n            Blank().height(this.blankHeight).width('100%')\n            Image($r('app.media.background1'))\n              .width('100%')\n          }\n        }.edgeEffect(EdgeEffect.Spring).scrollBar(BarState.Off)\n      }\n      .titleMode(HdsNavigationTitleMode.FULL)\n      .titleBar({\n        content: {\n          title: {\n            mainTitle: 'MainTitle',\n            subTitle: 'SubTitle'\n          },\n          menu: {\n            value: [{\n              content: {\n                label: 'menu1',\n                icon: $r('sys.symbol.plus'),\n                isEnabled: true,\n                componentId: this.targetId,\n                action: () => {\n                  let uiContext = this.getUIContext();\n                  let promptAction = uiContext.getPromptAction();\n                  let contentNode = new ComponentContent(uiContext, wrapBuilder(menuComponent));\n                  try {\n                    promptAction.openMenu(\n                      contentNode,\n                      { id: this.targetId },\n                      { backgroundColor: Color.Yellow });\n                  } catch (error) {\n                    let message = (error as BusinessError).message;\n                    let code = (error as BusinessError).code;\n                    console.error(`openMenu args error code is ${code}, message is ${message}`);\n                  }\n                  console.info(\"model cancel\");\n                }\n              }\n            }, {\n              content: {\n                label: 'menu2',\n                icon: $r('sys.symbol.ohos_wifi'),\n              }\n            }]\n          },\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685312)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "598",
        height: "1132"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置应用内多窗图标",
      children: "设置应用内多窗图标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一级导航组件，通过配置titleBar中的menu上的multiWindowEntryInAPPMenu属性，实现应用内多窗图标设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HdsNavigationMenuContentOptions } from '@kit.UIDesignKit';\nimport { Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MultiWindowEntryInAPPTest {\n  private want: Want = {\n    // 修改为当前应用的bundleName、moduleName、abilityName，启动应用内的UIAbility\n    bundleName: \"com.example.myapplication\",\n    moduleName: \"entry\",\n    abilityName: \"FuncAbility\",\n  }\n  @State menuContent: HdsNavigationMenuContentOptions = {\n    multiWindowEntryInAPPMenu: {\n      want: this.want,\n    },\n    maxCount: 3,\n    value: [\n      { content: { label: 'menu1', icon: $r('sys.symbol.search_things'), } },\n      { content: { label: 'menu2', icon: $r('sys.symbol.plus'), } }\n    ]\n  }\n\n  build() {\n    HdsNavigation() {\n      Stack() {\n        Text(\"Page1\")\n      }.alignContent(Alignment.Center)\n      .width(\"100%\")\n      .height(\"100%\")\n    }\n    .hideToolBar(false)\n    .navBarWidth('100%')\n    .titleBar({\n      content: {\n        title: {\n          mainTitle: \"Index\"\n        },\n        menu: this.menuContent\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892825)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "525",
        height: "571"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置hdsnavigation双栏模式",
      children: "设置HdsNavigation双栏模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要展示HdsNavigation在双栏模式下，右侧显示默认占位页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HdsNavigationTitleMode } from '@kit.UIDesignKit';\nimport { ComponentContent } from '@kit.ArkUI';\n\n@Builder\nfunction PlaceholderPage() {\n  Column() {\n    Text(\"分栏模式占位页\")\n      .fontSize(28)\n      .fontWeight(700)\n      .margin({ top: 200 })\n  }.width(\"100%\")\n  .height(\"100%\")\n}\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  placeholder = new ComponentContent(this.getUIContext(), wrapBuilder(PlaceholderPage))\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n  build() {\n    HdsNavigation() {\n      List({ space: 12, initialIndex: 0, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('90%')\n              .height(72)\n              .backgroundColor('#FFFFFF')\n              .borderRadius(24)\n              .fontSize(16)\n              .fontWeight(500)\n              .textAlign(TextAlign.Center)\n          }\n        }, (item: number) => item.toString())\n      }\n      .height(324)\n      .width('100%')\n      .margin({ top: 12, left: '10%' })\n    }\n    .mode(NavigationMode.Split) // 设置HdsNavigation模式为Split\n    .splitPlaceholder(this.placeholder)\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .titleBar({\n      enableComponentSafeArea: true,\n      content: {\n        title: {\n          mainTitle: 'Main',\n          subTitle: 'Sub'\n        },\n      }\n    })\n    .bindToScrollable([this.scroller])\n    .divider({ startMargin: 20, endMargin: 20, color: Color.Red }) // 从6.1.0(23)开始，新增divider属性。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581672)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "2543",
        height: "1033"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置标题栏沉浸式样式",
      children: "设置标题栏沉浸式样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要展示HdsNavigation配置沉浸式模糊和材质的各类型效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport {\n  hdsMaterial,\n  HdsNavigation,\n  HdsNavigationAttribute,\n  HdsNavigationTitleMode,\n  ScrollEffectType,\n} from '@kit.UIDesignKit'\nimport { promptAction } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct Index {\n  private scrollerForScroll: Scroller = new Scroller();\n  @State materialLevel: hdsMaterial.MaterialLevel = hdsMaterial.MaterialLevel.ADAPTIVE;\n  @State materialType: hdsMaterial.MaterialType = hdsMaterial.MaterialType.IMMERSIVE;\n\n  aboutToAppear(): void {\n    // 该示例以系统支持的材质类型为hdsMaterial.MaterialType.IMMERSIVE为例\n    try {\n      let materialTypes: Array<hdsMaterial.MaterialType> = hdsMaterial.getSystemMaterialTypes();\n      console.info(`getSystemMaterialTypes successed, types: ${materialTypes}`);\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      console.error(`getSystemMaterialTypes failed, code: ${code}, message: ${message}`);\n    }\n  }\n\n  build() {\n    HdsNavigation() {\n      Scroll(this.scrollerForScroll) {\n        Column() {\n          // 'app.media.demo_img'需要替换为开发者所需的资源文件\n          Image($r('app.media.demo_img'))\n            .width('100%')\n          Text(`当前材质Level为: ${this.materialLevel}`).fontSize(20).fontWeight(FontWeight.Bold)\n          Text(`当前材质Type为: ${this.materialType}`).fontSize(20).fontWeight(FontWeight.Bold)\n          Button('切换材质Type为IMMERSIVE').onClick(() => {\n            // 沉浸式材质效果，该示例场景ADAPTIVE为沉浸式材质\n            this.materialType = hdsMaterial.MaterialType.IMMERSIVE;\n          }).margin({ top: 2 })\n          Button('切换材质Type为None').onClick(() => {\n            // 无材质效果\n            this.materialType = hdsMaterial.MaterialType.NONE;\n          }).margin({ top: 2 })\n        }.height('100%')\n      }.edgeEffect(EdgeEffect.Spring).height('100%')\n    }\n    .titleBar({\n      content: {\n        title: {\n          mainTitle: '主标题',\n        },\n        menu: {\n          value: [{\n            content: {\n              icon: $r('sys.symbol.search_things'),\n              label: 'search',\n              action: () => {\n                promptAction.openToast({ message: 'on click' });\n              },\n            }\n          }]\n        },\n      },\n      style: {\n        scrollEffectOpts: {\n          // 从6.1.0(23)开始， 新增IMMERSIVE_GRADIENT_BLUR类型，标题文字和图标样式从白色到黑色线性过渡。\n          scrollEffectType: ScrollEffectType.IMMERSIVE_GRADIENT_BLUR,\n        },\n        // 从6.1.0(23)开始，支持材质相关属性。\n        // 推荐与ScrollEffectType.IMMERSIVE_GRADIENT_BLUR（推荐沉浸式图文类的场景使用） 或 ScrollEffectType.GRADIENT_BLUR（推荐非沉浸式列表类的场景使用）搭配使用。\n        systemMaterialEffect: {\n          materialType: this.materialType,\n          materialLevel: this.materialLevel\n        }\n      },\n    })\n    .bindToScrollable([this.scrollerForScroll])\n    .hideBackButton(true)\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .ignoreLayoutSafeArea([LayoutSafeAreaType.SYSTEM], [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11211)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "403",
        height: "511"
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
508110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960520-31ba0d84a5127ecbf559d3ff62e081ae.gif");

},
892825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAI7Ag0DASIAAhEBAxEB/8QAHgABAAICAgMBAAAAAAAAAAAAAAcIBQYECQECAwr/xABBEAEAAAUDAgMFBgIIBAcAAAAAAQIDBAUGBxEIEgkTIRQYIjFRMkFYYZXUChUWFyNCcYGx0TM6YqFzdZGzweHx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASER/9oADAMBAAIRAxEAPwDv8Gubv7kYrZzajU27edtatex0vp69y97Rocd9SlbW89eeWXn07oy04wh+cVFs14pPV5tZtBqLMbr7eaEvNV5LZfT+4mgqWmcTk69rZ08nlKWOqY69oS1ale8ntp7m3n8638vz5Zp4QpU4yw5DsMEB9LXVFrXejbvF6gsbjD7i1LnUGXxudzujMDX09baerWdOM0trfY/L3M17QuJqkJaUZe2MYRqSTzSSU490de6euoDrT6gNObuaSymE2z0VrzQW5Fvg8dS8rIZzGUbSpi8bkYyV5patpUuK8sl9NTjUp+VT7pIRhJNLDmYLOiDPD2353l6ldgq+728MdK15L/VmWt9JZXSGNurO1y2Ftrqa2t7/AMm5r1p6ftE1GrWk+OMI0p6UfnGKcwAAAAAAAAAAAAAAAAAAAAAAAADmHy5I/L0RpgbDqHk6gMhe5u/oR0VGjPC1pSz0uOOyHZCWWEO+FSE3PdGPpxz+QJL5h9TmEflFW/XuD656+ssnV09kriOPmvakbD2G7tJKUKPdHshCE/E0Ph4559eeW8dP2O6lrLF5uTd6+kmqT0Zf5LC8q0qk8tXibmM0aP8Ac57PSPr8+FsxOpY5hH5REddO9lv1ZYnJy76XlOrXmvJY4/ipSmnhLxHv9aUOOyM3HbCPrD1/JIqXFAAAAAAAAAAAAAAAAAAAAAR/1X7wZbp86X9xd98Dh7bIX2jNDZXOWVjeVJpaNxVtbSrXkpzxl+KEs00kIRjD14jHgEgDq38LPx0+pPqt6mtuunfqn2d0DY/1xbXV9ZaFym3V7dRjj5Lete06ttkaV1Un7Z54WVWaXy5o9vwc93mRjJI/V54hPUDtZjdTbm4HW2Lw2Gx+6MdC6ewVPT9pN51zC5hay3V9kr+7pULSlNWhUmjUmllp05PLl+OebkHYCOs/ZHxJ969+8/orT+j+peS3raz0HDU9OGT22x9KayhPNU8ixmlhex8+5q07e8rywpRmlhb2s1aMeyeSMbidKXU9LuhmtQ7G7h6mxd3uDou6qyZiXFY6rbUr2x8+elb38Kc81SFHzOyaWalCpP2z054w+GMoJsAAABj9WaVwGudL5LReq8ZTvcXl7CtZZKzq89le3q05qdSnNx900k00I/4q37WeGVjNqtP5ijieqrcy41FPo3FaQ0brKrcY6TIaWwONuI3FnZW/l2ktK45qR4r1bmSrPcySyyVI8QWgAQt0/wDRfhdiakuen3l1tn8/f6uyOp9W5i/ylO3k1Hkry0p2c011a2tOnQjSpUaFCWjRlkllpeRJN8U3M0eZW6RcDb6f3oxOm9yNRYi73pyVa+yuXsKlCFzhq9TEWuK77KMacYSzS0rSSpLGpCeMKk0Y/LiWEugMHtjtzpHZ/bjAbT6AxUtjgtM4a1xWGspY8woWtvSlpUpPz4kklhyzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANO6htnsb1C7C612GzOZuMdaa00nkMHc5C0pyzVband21ShNVklm+GM0sJ+6EI+kYw9W4gOt3w+v4ePAdC3VNoTqbuerO/wBW1dvdI3un8JhpNv8AH4mWtRuJK8salzWt54z3FSWNxVj5lTuqRh2Sxn7ZJZUzb9+HZunuJjdwNutHbnaY/oZuJkL+8ymPzmFvYX9rG+jLNeUKdza3UkJqc88J4yzRpwqSS1ZpYTR7ZZoW8AUAyXg8Z/Ibt6Y3zo6Z2RsdUaRq0p8Nk8ZpTMW8YS0bGNjb06kst/xUkoW/EtKWMPg7JYw544W16cunq22WxWRzWpb7G5jWGocjXvtR6hssNLaQqzVKkZ5bejLGapUkt6UOJZJJ6k8ee6eMYzTzJKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFyeVoY2SHfDunm+zJD/X8oOVGPEOYq89ee8m4GzvTZqHcXbLIWlnqCplMNicTf39jC6pWM+Ry9njvafJjGEtaNKS6mqS05owlmmklhN6RjAEy1dSZOebmSaSSH0hJz/q+1nqevJNCW9pyzS/fNJDiMP91LepzRHWxsVhtJ5DAeI7qq+qag3T05pW6lvtsdLwhSoZHISWtSrJ2WUOakss0Zpefh5hDmEYejYtR+9J00bw7Sf0p6vcnuLgtfbjSaTzOC1FoTDWHkU62Mv7qnd0K+Po0qktWnUspIds3dJPJUmhGEI8TQC5NKrTr04VqM8JpZocwjD7yrVp0acatWeEsssOYxj9zEaUu55u+1mj8PbCeX8vq86pupoRp2csfSMO+b8/oD0vNUVppows6csksP788OYx/2fKXUOWoVIQrwhHmHPbPT45h9VPeqbqi1dcbmav2tk3zttmduNA1MJZ7h7o0sRPf5aa7ytCNxRtrOM1KpbYm3koRpxq5S5lqQpzVYQllp9vmsFmqGE6ddd0dO9CfWHeam1dV0zW1DlNoNf6xv9WYzUFhSoxrRvqmRjPXr4CvWl9KV15ns1eeMIezVPnAL64zLUMlJGEkO2pL9qSMf+8PrBykW7E7tYneXaXR2+embK5tcfq7TOPzlla3fHm0aN3bU68tOp2+ndLLU7Y8enMOYJMv7n2WyqXMv92TmX/H7gcXKZ6lYzxoUJIVKkPnzH0l/xY2bUeUjNzCtJD8uyDhyyVa8/Ekk080fWMJZYxjH8/REW6evtfae60dndr8Vl7m3wepdMazus5jIUJe28rWdLFxtZ5oxl7oRpzV63HbGEI+ZHnn04CdcfqWFSeFG/khLzHiFSX5f5st8/k1GpQr0ePOoTyc/LvkjDn/1bBp66mucfCWpHmNObt5/L7gc4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMOYcR+9V3xLNOakzHSBqS305prI5a5xWf05lrmwxFjPdXU9pYagx15dT0qNOEZ600lvQq1PLkhGeaEkYSwjGMIRtEx2YwsbyaF3aTdtaHz9eO7j5ev3RBQPrR8QbpX3OwGhbbQWq9T5Opi98NI57IU6O2GopY0MfaZWSvcV49+PhzCSnCM0YQ5jxD0hGPo2bcXqa2j6t98NidHdPVzqLUF5preCjqPUNSfQmZsLfG4u3w2Vo1LmtXvbSjSlh5tzQpyy90Z55qkISyx4jxcGrLnKE3bVqXcI/wDiTx/0i+lDGZjIRhJWnrQk55jGvPNGEP8AKMQfXSdCeNaevGHpJThL/nH/APHtqmjNC4pXHHwzSdvP5wjz/wDLLWVnRsbeFvRh6Q+cY/OMfqXtnRvrea3rQ9I/KMPnCP1BTbUmvaPRj1Sbn7tb7aUydPbDc+XAXUNwsfYTXuNwFxZY7+X17XL06cJqtnRnhJJUku5pJraMKk0lWelGX4tD2Y1zsN0ibPam6bOm7Daa3I3C17qDVGoMDovZOna1ZJ7DJ3t1Ux1fIXVLttsdaUbetRpe0XE8JJZaUZKEtXtlljeW8wd/azRh5EakkYRh3SQ55hH0jCMPz++Hya3t5s5t5tdY3WH2n2owOmLW/u43V/bac0/b4+nc14/OrUloSSQnn/6puY/mDA9LO1GZ2U6btuNjs7f295kdJaGw+Dvrqz58mtXtbOlQqTyd0IR7IzyTRhzCEeOOeEvZShNWxlWhT9Y9np+fHq4+GwnsUfabmMI1ePhhD5S//bIgivdfaHbDfXRFzttvBoew1FgLyrSq3OKyUk01GpPTnhPTmjCWaEeZZoQjD1+aoO7Hhr9DeP639ltK4rpS0vSwuV0rratmLOlZ140a9W3pYmNvNUj5keIyxqVe31h9qZfnLaeqRqRubCWEYTR5mp/LiP5MbNZ3kk3ZNa1YR+nZEEf7H9MPT301W2StNg9ocNpOnmKlKplJMRSnlhdTU4TQpxn755vswnmhDjj7UUs6YozU7CarNDjzJ4xh/hD0cHH6furmeE93JGlThH1hH7Uf9mfp05KUkKdOWEJZYcQhD7geQAAAA5+4AAjHiHIAQjCMOYf94AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOrrxG+offvQn8Qb0k7JaJ3p1TiNG6mws9TUelMbnK1HHZSfzshDuuLeWaElWPEkkOZoR+xD6LAb9ePB4aHTPq7cDbneDfS5x2o9tsla47PYOGnLye5uLuvJGeSlaQhT4uowlhGaeaSMZacOIzzS8w5qd4ov/MudFv/AJDU/wDfyTHeHBtjt9rv+JV6x9Q600djcrd4CwozYarkbOSv7HPcRsqdWenCeEYSzzSSQk7oevbGaHPE0eQ7EujXxJOj3rv2Tym/nT3u1b3eB0/VqU9T/wA3t58fXws0lLzpvaqdeEsaUnlf2kKnMZIywjGE0e2bii/Xz/EHeGf1C9KO+HTfsZ1IX8mrr3bnM22lcpHDXtha5S8hbzRkp2d5GWX+0m45pxj2d/p2RjzDmom3m1GrZMJ4tmx/Tdpyvby2eRllxmn8HSjLCWyo5fJVLmhRpSfdG1lryQklh6yx7YQ+UGcs+sXwm7r+Gyk6eqGb0bW3PraKms6WjqWPkmztTVnnRn/mMOJO+MvfD2j2nu7PJhGXu9PLBfXwousfZnpV8B7Z/qS6t95pMNhLbBXMl5nM7d1rq4uq8+TvJadGSHx1rmtN28SySwmmjCWPpxLGMJN6K/HB8PLr23Bu9othd1MjHVtGyq3llpvUGnrjHXeToU5e+ee0hWhCWvGEvxdks3f2/F29sIxh0y9ZWmdd1fA06A9zJbye00Fp7UeWl1VlKmH/AJhaYy5r5Kb2S5uLWPw3EkKdO7lhTm9KndGlzzVhCNgdnNCaK6pfFT6eNwdc+NzthupuBpa7kyWlsNoDZn+Xz32Mt/7atj611YzwpUZ5qPndtOvDukk86EJYc8TB2fbJeLl0F79bZ7k7raS3ojYY3aKNX+sahqbC3WLu8JCnLPGMattc05KseZqdSnDtljGarTmpwh3w4ST0j9Wm0HW1snj+oXYe4zFzpTLV61PFZDM4C5x015LSm7JqtOncSSzzU++E0sJ+O2aMk3EY8cvz8eNJT2d378RTdbfjpH2b1RqXa7bqng6HVdk9G5f2TH524lyMkKsks0vw98IUZac9XieHnUI1+JYUpqs36DOkTczYHeDpm0RuH0tVrCO3uQ05bf0To42jClStbOSSFOS28uH/AApqXZGlNTj6yTU5pY+sIgkcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGk6v6bun/cDdfA76642W0vl9aaWpxp6b1VkcHRrZDFyczx7bevNLGelDmeePEsYfbj9Xto/py2D2/3S1BvfobZnTGI1jquWWXU2qMbhKNG/ysJYyxlhcV5ZYT1YQjLLx3Rj9mH0boA0zb3p22G2m1tqbcnbDZzTOn9QazvIXWrc1hsLRtrrM14Tzzwq3NWSWE1abuqVJuZoxjzPNH74tFwnhs9AGnNd5rczBdGe2lpntQ2dza5nJ0NG2ktS6o3Ek0lxJN8HEIVZJppZ+IQ74TTQm5hGKbQGmYbp12D0/szJ06YXZfS1toGnZTWcmiqWBt4YqFvNPGeal7L2eV2RnmjNGXt45jGPzapsP0CdFPS/kMjmOnrpa0Lo69y9Cehkb7T+nKFvXr0ZvtUo1ZZe+FOPpGMkIwl9IenpBLwCPts+k3ph2Z28zG0u03T3ozTel9QxrRz2nsLpq2trLJebShRqefRkkhJW76cISTd8I8y+kfRk9lthNlOnHRv9Xewe1On9G4H2updQw2mcVSsrWFafjvqQpUoQlhNN2w5jx68cxbcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU9993sFsDsxqne3U+MvL3H6UwN1lb20x0ska9anQpxqTSU4TzSy90YQ4h3TQhz84waTozrL0Vc6jzuit7tKZHa3MafwlvmryjrjJY+S2q42vWnoSXVO8trmrbxlhWk8uaWaeWeSaaTmXieWMQmIa1mN5dotO4LEanz+6WnLHG5+rSpYLIXmct6VDIz1Ic05aFSaeEtaaaHrLCSMYxh8nnJbx7SYa9wmNy+6OnbW41NNCXTlvc5y3knysY8cQtpZp4Rrx+KX7Hd84fUGyCMdN9U+kNU9TF/wBMVjojVVvkbDT9zlYZ/I4WNtjLyW3uLa3rUrapVmhPcTST3VPunkkjS9YwhUmmhNCEnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjLrP2s1Zvh0m7j7P6Fp0J8zqfRmQxmLlubnyaca9ahNJJ3VOI9kOYw+LiPHzRNvt0T5TS+kKOe6f8AF5PUepL3UWMqatymqtUS5POXOKtJbmajb4+8zUlzRtKlK5ryVZfglh2xr9s0lWeWeFpgHW5cbc3nRhjNE5DqIw+2OXuKmlta4yTSGvNdWdrQsLe91DUyUt5Rr1rWShcS+z16FC6p0aUlWEJKflUppITSy8Tbvw/t6Na7R7d3eW0NkstgtW7EaI05lsVa6ttcJW07Nj6EY1ZantVhcXElOMa0K8kbaaSvJWkmhNLCPbUl7JMtg8LnadKjm8Ta3klC4lr0Zbq3lqQp1ZfszywmhHiaHPpGHrByoQ49ARZkNptYXHWhgt7qVK3jgcftdlcFcVZrn+39rr5LHXFOEJOPWXy7arGM3PpHiHHqlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVV3E3/8QrD67y+K0r06WlbGW+Qq08dXkxlS4hVoQmjCSfzJa8sJozS8TR9IcRjxxDhhveR8Sn8Nlv8AoFX9yuHxD6QOIfSAKee8j4lP4bLf9Aq/uT3kfEp/DZb/AKBV/crh8Q+kDiH0gCnnvI+JT+Gy3/QKv7k95HxKfw2W/wCgVf3K4fEPpA4h9IAp57yPiU/hst/0Cr+5PeR8Sn8Nlv8AoFX9yuHxD6QOIfSAKee8j4lP4bLf9Aq/uT3kfEp/DZb/AKBV/crh8Q+kDiH0gCnnvI+JT+Gy3/QKv7k95HxKfw2W/wCgVf3K4fEPpA4h9IAp57yPiU/hst/0Cr+5PeR8Sn8Nlv8AoFX9yuHxD6QOIfSAKee8j4lP4bLf9Aq/uT3kfEp/DZb/AKBV/crh8Q+kDiH0gCnnvI+JT+Gy3/QKv7lLnSpub1S7gX2Xo9QO01vp+1tqVKbG3UlvNQnrVIxjCeTsmqT90IQhCPd6cc8ev3TPxD6QIQhD5QAAAAAAAAAAAAAAAAAAAAAAAAB//9k=");

},
444767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480523-b8c264bddbd479daf4615efb7894c03c.jpg");

},
933933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960522-d836b2bd29f65c98b7eeea7796b2b501.jpg");

},
47219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480521-296152400e923cf736fe83ef6fc60bc5.jpg");

},
195981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
159271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
581672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960524-bc6bae7088d1cee67d5c16d6d7952e07.gif");

},
634843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
259574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
986849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800872-68b7d59ab0594941aad647011f74c124.jpg");

},
685312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800874-0b1087acca5760b7852de6fede6ba68b.gif");

},
11211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480525-dcc4ae42a98dab077f195cdc1db8b94f.gif");

},
497994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
887857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
577647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440567-49c3d35dd95166036cf4de884060eb61.gif");

},
36236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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