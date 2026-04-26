"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792751"], {
528270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ohos_arkui_advanced_multinavigation_ohos_arkui_advanced_multinavigation_md_56f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-navigation-and-switching-ohos-arkui-advanced-multinavigation-ohos-arkui-advanced-multinavigation-md-56f.json
var site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ohos_arkui_advanced_multinavigation_ohos_arkui_advanced_multinavigation_md_56f_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation","title":"MultiNavigation","description":"MultiNavigation用于在大尺寸设备上分栏显示、进行路由跳转。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation.md","sourceDirName":"arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation","slug":"/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"MultiNavigation","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-multinavigation","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-multinavigation"},"sidebar":"ref","previous":{"title":"NavDestination","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination"},"next":{"title":"Tabs","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation.md


const frontMatter = {
	title: 'MultiNavigation',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-multinavigation',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-multinavigation'
};
const contentTitle = 'MultiNavigation';

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
  "value": "MultiNavigation",
  "id": "multinavigation-1",
  "level": 2
}, {
  "value": "MultiNavPathStack",
  "id": "multinavpathstack",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "pushPath",
  "id": "pushpath",
  "level": 3
}, {
  "value": "pushPath",
  "id": "pushpath-1",
  "level": 3
}, {
  "value": "pushPathByName",
  "id": "pushpathbyname",
  "level": 3
}, {
  "value": "pushPathByName",
  "id": "pushpathbyname-1",
  "level": 3
}, {
  "value": "replacePath",
  "id": "replacepath",
  "level": 3
}, {
  "value": "replacePath",
  "id": "replacepath-1",
  "level": 3
}, {
  "value": "replacePathByName",
  "id": "replacepathbyname",
  "level": 3
}, {
  "value": "removeByIndexes",
  "id": "removebyindexes",
  "level": 3
}, {
  "value": "removeByName",
  "id": "removebyname",
  "level": 3
}, {
  "value": "pop",
  "id": "pop",
  "level": 3
}, {
  "value": "pop",
  "id": "pop-1",
  "level": 3
}, {
  "value": "popToName",
  "id": "poptoname",
  "level": 3
}, {
  "value": "popToName",
  "id": "poptoname-1",
  "level": 3
}, {
  "value": "popToIndex",
  "id": "poptoindex",
  "level": 3
}, {
  "value": "popToIndex",
  "id": "poptoindex-1",
  "level": 3
}, {
  "value": "moveToTop",
  "id": "movetotop",
  "level": 3
}, {
  "value": "moveIndexToTop",
  "id": "moveindextotop",
  "level": 3
}, {
  "value": "clear",
  "id": "clear",
  "level": 3
}, {
  "value": "getAllPathName",
  "id": "getallpathname",
  "level": 3
}, {
  "value": "getParamByIndex",
  "id": "getparambyindex",
  "level": 3
}, {
  "value": "getParamByName",
  "id": "getparambyname",
  "level": 3
}, {
  "value": "getIndexByName",
  "id": "getindexbyname",
  "level": 3
}, {
  "value": "size",
  "id": "size",
  "level": 3
}, {
  "value": "disableAnimation",
  "id": "disableanimation",
  "level": 3
}, {
  "value": "switchFullScreenState",
  "id": "switchfullscreenstate",
  "level": 3
}, {
  "value": "setHomeWidthRange",
  "id": "sethomewidthrange",
  "level": 3
}, {
  "value": "keepBottomPage",
  "id": "keepbottompage",
  "level": 3
}, {
  "value": "setPlaceholderPage",
  "id": "setplaceholderpage",
  "level": 3
}, {
  "value": "SplitPolicy枚举说明",
  "id": "splitpolicy枚举说明",
  "level": 2
}, {
  "value": "NavDestinationBuildFunction",
  "id": "navdestinationbuildfunction",
  "level": 2
}, {
  "value": "OnNavigationModeChangeCallback",
  "id": "onnavigationmodechangecallback",
  "level": 2
}, {
  "value": "OnHomeShowOnTopCallback",
  "id": "onhomeshowontopcallback",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
    object: "object",
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
        id: "multinavigation",
        children: "MultiNavigation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MultiNavigation用于在大尺寸设备上分栏显示、进行路由跳转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(68905)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 14开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于MultiNavigation存在多重栈嵌套，调用本文档明确说明的不支持接口或不在本文档支持接口列表中的接口(例如getParent、setInterception、pushDestination等)，可能会发生无法预期的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MultiNavigation在深层嵌套场景下，可能存在路由动效异常的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MultiNavigation, MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不可以包含子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multinavigation-1",
      children: "MultiNavigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MultiNavigation({navDestination: NavDestinationBuildFunction, multiStack: MultiNavPathStack, onNavigationModeChange?: OnNavigationModeChangeCallback, onHomeShowOnTop?: OnHomeShowOnTopCallback})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并初始化MultiNavigation组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MultiNavigation组件遵循默认的左起右清栈规则，这意味着从左侧主页点击时，会触发详情页的加载并同时清除右侧所有其他详情页，确保右侧仅展示最新加载的详情页。然而，若在右侧的详情页上再次执行详情页加载操作，系统将不会执行清栈动作。效果可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B",
        children: "主页跳转详情页效果演示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#multinavpathstack",
              children: "MultiNavPathStack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置路由栈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navDestination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#navdestinationbuildfunction",
              children: "NavDestinationBuildFunction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置加载目标页面的路由规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onNavigationModeChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onnavigationmodechangecallback",
              children: "OnNavigationModeChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置MultiNavigation模式变更时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHomeShowOnTop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onhomeshowontopcallback",
              children: "OnHomeShowOnTopCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主页处于栈顶时的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multinavpathstack",
      children: "MultiNavPathStack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前，MultiNavigation的路由栈仅支持由使用方自行创建，不支持通过回调方式获取。请勿使用NavDestination的onReady等类似事件或接口来获取NavPathStack并进行栈操作，因为这可能会导致不可预知的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushpath",
      children: "pushPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定的NavDestination页面信息入栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#splitpolicy%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SplitPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前入栈页面的策略。默认值：DETAIL_PAGE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushpath-1",
      children: "pushPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定的NavDestination页面信息入栈，通过NavigationOptions设置页面栈操作选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationoptions12",
              children: "NavigationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面栈操作选项。仅支持其中的animated字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#splitpolicy%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SplitPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前入栈页面的策略。默认值：DETAIL_PAGE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushpathbyname",
      children: "pushPathByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将name指定的NavDestination页面信息入栈，传递的数据为param。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面详细参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#splitpolicy%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SplitPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前入栈页面的策略。默认值：DETAIL_PAGE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushpathbyname-1",
      children: "pushPathByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pushPathByName(name: string, param: Object, onPop?: base.Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面详细参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onPop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["base.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#popinfo11",
              children: "PopInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback回调，用于页面出栈时触发该回调处理返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#splitpolicy%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SplitPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前入栈页面的策略。默认值：DETAIL_PAGE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replacepath",
      children: "replacePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "replacePath(info: NavPathInfo, animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replacepath-1",
      children: "replacePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "replacePath(info: NavPathInfo, options?: NavigationOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略，通过NavigationOptions设置页面栈操作选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationoptions12",
              children: "NavigationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面栈操作选项。仅支持其中的animated字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replacepathbyname",
      children: "replacePathByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "replacePathByName(name: string, param: Object, animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前页面栈栈顶退出，将name指定的页面入栈，新页面的分栏策略继承原栈顶页面的策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面详细参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removebyindexes",
      children: "removeByIndexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeByIndexes(indexes: Array<number>): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将页面栈内索引值在indexes中的NavDestination页面删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除NavDestination页面的索引值数组。  number类型的取值范围：[0, +∞)"
          })]
        })
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回删除的NavDestination页面数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removebyname",
      children: "removeByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeByName(name: string): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将页面栈内指定name的NavDestination页面删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除NavDestination页面的名字。"
          })]
        })
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回删除的NavDestination页面数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pop",
      children: "pop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pop(animated?: boolean): NavPathInfo | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出路由栈栈顶元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402786)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#keepbottompage",
        children: "keepBottomPage"
      }), "接口并设置为true时，会保留栈底页面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })
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
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pop-1",
      children: "pop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pop(result?: Object, animated?: boolean): NavPathInfo | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出路由栈栈顶元素，并触发onPop回调传入页面处理结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2125)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#keepbottompage",
        children: "keepBottomPage"
      }), "接口并设置为true时，会保留栈底页面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面自定义处理结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
              children: "NavPathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poptoname",
      children: "popToName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "popToName(name: string, animated?: boolean): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回退路由栈到由栈底开始第一个名为name的NavDestination页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。  取值范围：[-1, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poptoname-1",
      children: "popToName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "popToName(name: string, result: Object, animated?: boolean): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面自定义处理结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。  取值范围：[-1, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poptoindex",
      children: "popToIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "popToIndex(index: number, animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回退路由栈到index指定的NavDestination页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的位置索引。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poptoindex-1",
      children: "popToIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "popToIndex(index: number, result: Object, animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的位置索引。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面自定义处理结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "movetotop",
      children: "moveToTop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveToTop(name: string, animated?: boolean): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将由栈底开始第一个名为name的NavDestination页面移到栈顶。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126748)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1)当找到的是最上层主页或者全屏页，此时不做任何处理；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "NavDestination页面名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveindextotop",
      children: "moveIndexToTop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveIndexToTop(index: number, animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定index的NavDestination页面移到栈顶。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890902)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1)当找到的是最上层主页或者全屏页，此时不做任何处理；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的位置索引。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear",
      children: "clear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clear(animated?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除栈中所有页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111888)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#keepbottompage",
        children: "keepBottomPage"
      }), "接口并设置为true时，会保留栈底页面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "animated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持转场动画。  默认值：true  true：支持转场动画。  false：不支持转场动画。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallpathname",
      children: "getAllPathName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllPathName(): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取栈中所有NavDestination页面的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回栈中所有NavDestination页面的名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparambyindex",
      children: "getParamByIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParamByIndex(index: number): Object | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取index指定的NavDestination页面的参数信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NavDestination页面的位置索引。  取值范围：[0, +∞)"
          })]
        })
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparambyname",
      children: "getParamByName"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["getParamByName(name: string): Array", (0,jsx_runtime.jsxs)(_components.object, {
        children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取全部名为name的NavDestination页面的参数信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NavDestination页面名称。"
              })]
            })
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
                children: "Array<Object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回全部名为name的NavDestination页面的参数信息。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "getindexbyname",
          children: "getIndexByName"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "getIndexByName(name: string): Array<number>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取全部名为name的NavDestination页面的位置索引。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NavDestination页面名称。"
              })]
            })
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
                children: "Array<number>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回全部名为name的NavDestination页面的位置索引。  number类型的取值范围：[0, +∞)"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "size",
          children: "size"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "size(): number"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取栈大小。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回栈大小。  取值范围：[0, +∞)"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "disableanimation",
          children: "disableAnimation"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "disableAnimation(disable: boolean): void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭（true）或打开（false）当前MultiNavigation中所有转场动画。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "disable"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是否关闭转场动画。  默认值：false  true：关闭转场动画。  false：不关闭转场动画。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "switchfullscreenstate",
          children: "switchFullScreenState"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "switchFullScreenState(isFullScreen?: boolean): boolean"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换当前顶栈详情页面的显示模式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "isFullScreen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是否切换为全屏。默认值为false。true表示全屏模式，false表示分栏模式。"
              })]
            })
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "切换成功或失败。  true：切换成功。  false：切换失败。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "sethomewidthrange",
          children: "setHomeWidthRange"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setHomeWidthRange(minPercent: number, maxPercent: number): void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置主页宽度可拖动范围。应用不设置的情况下宽度为50%，且不可拖动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "minPercent"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小主页宽度百分比。  取值范围：[0, 100]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "maxPercent"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大主页宽度百分比。  取值范围：[0, 100]"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "keepbottompage",
          children: "keepBottomPage"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "keepBottomPage(keepBottom: boolean): void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置在调用pop和clear接口时是否保留栈底页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(849688)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MultiNavigation将主页也当作了NavDestination页面入栈，所以调用pop或clear接口时会将栈底页面也出栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用调用此接口并设置为TRUE时，MultiNavigation会在调用pop和clear接口时保留栈底页面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "keepBottom"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是否保留栈底页面。  默认值：false  true：保留栈底页面。  false：不保留栈底页面。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setplaceholderpage",
          children: "setPlaceholderPage"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setPlaceholderPage(info: NavPathInfo): void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置占位页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(116844)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "占位页面为特殊页面类型，当应用设置后，在一些大屏设备上会和主页默认形成左右分栏的效果，即左边主页，右边占位页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用可绘制区域小于600VP、折叠屏由展开态切换为折叠态及平板横屏转竖屏等场景时，会自动将占位页出栈，只显示主页；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "而当应用可绘制区域大于等于600VP、折叠屏由折叠态切换为展开态及平板竖屏转横屏等场景时，会自动补充占位页，形成分栏。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "info"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navpathinfo10",
                  children: "NavPathInfo"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "占位页页面信息。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "splitpolicy枚举说明",
          children: "SplitPolicy枚举说明"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示MultiNavigation中页面的类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "HOME_PAGE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "主页页面类型。全屏模式显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DETAIL_PAGE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详情页页面类型。分栏模式显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FULL_PAGE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "全屏页页面类型。全屏模式显示。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "navdestinationbuildfunction",
          children: "NavDestinationBuildFunction"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type NavDestinationBuildFunction = (name: string, param?: object) => void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MultiNavigation用以加载NavDestination的方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "路由页面的标识符。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "param"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "路由跳转创建页面时传递的参数。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onnavigationmodechangecallback",
          children: "OnNavigationModeChangeCallback"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type OnNavigationModeChangeCallback = (mode: NavigationMode) => void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当MultiNavigation的mode变化时触发的回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "mode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navigationmode9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                  children: "NavigationMode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当回调触发时的NavigationMode。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onhomeshowontopcallback",
          children: "OnHomeShowOnTopCallback"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type OnHomeShowOnTopCallback = (name: string) => void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当主页在栈顶显示时触发的回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 14开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "显示在栈顶的页面的标识符。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "属性",
          children: "属性"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
            children: "通用属性"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "事件",
          children: "事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
            children: "通用事件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "示例",
          children: "示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本示例演示MultiNavigation的基本功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/Index.ets\nimport { MultiNavigation, MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\nimport { PageDetail1 } from './PageDetail1';\nimport { PageDetail2 } from './PageDetail2';\nimport { PageFull1 } from './PageFull1';\nimport { PageHome1 } from './PageHome1';\nimport { PagePlaceholder } from './PagePlaceholder';\n\n@Entry\n@Component\nstruct Index {\n  @Provide('pageStack') pageStack: MultiNavPathStack = new MultiNavPathStack();\n\n  @Builder\n  PageMap(name: string, param?: object) {\n    if (name === 'PageHome1') {\n      PageHome1({ param: param });\n    } else if (name === 'PageDetail1') {\n      PageDetail1({ param: param });\n    } else if (name === 'PageDetail2') {\n      PageDetail2({ param: param });\n    } else if (name === 'PageFull1') {\n      PageFull1();\n    } else if (name === 'PagePlaceholder') {\n      PagePlaceholder();\n    }\n  }\n\n  aboutToAppear(): void {\n    this.pageStack.pushPathByName('PageHome1', 'paramTest', false, SplitPolicy.HOME_PAGE);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        MultiNavigation({ navDestination: this.PageMap, multiStack: this.pageStack })\n      }\n      .width('100%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/PageHome1.ets, 对应首页\nimport { MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nexport struct PageHome1 {\n  @State message: string = 'PageHome1';\n  @Consume('pageStack') pageStack: MultiNavPathStack;\n  controller: TextInputController = new TextInputController();\n  text: string = '';\n  param: Object = new Object();\n  lastBackTime: number = 0;\n\n  build() {\n    if (this.log()) {\n      NavDestination() {\n        Column() {\n          Column() {\n            Text(this.message)\n              .fontSize(40)\n              .fontWeight(FontWeight.Bold)\n          }\n          .width('100%')\n          .height('8%')\n          Scroll(){\n            Column() {\n              Button('OpenHome', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageHome1页面\n                    this.pageStack.pushPathByName('PageHome1', 'testParam', true, SplitPolicy.HOME_PAGE);\n                  }\n                })\n              Button('OpenDetail', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageDetail1页面\n                    this.pageStack.pushPathByName('PageDetail1', 'testParam');\n                  }\n                })\n              Button('OpenFull', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageFull1页面\n                    this.pageStack.pushPathByName('PageFull1', 'testParam', true, SplitPolicy.FULL_PAGE);\n                  }\n                })\n              TextInput({placeholder: 'input your popToIndex ...', controller: this.controller })\n                .placeholderColor(Color.Grey)\n                .placeholderFont({ size: 14, weight: 400 })\n                .caretColor(Color.Blue)\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .type(InputType.Number)\n                .fontSize(14)\n                .fontColor(Color.Black)\n                .onChange((value: string) => {\n                  this.text = value;\n                })\n              Button('popToIndex', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 返回至指定index页面，删除大于该index的所有页面\n                    this.pageStack.popToIndex(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n              Button('OpenDetailWithName', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageDetail1页面\n                    this.pageStack.pushPathByName('PageDetail1', 'testParam', undefined, true);\n                  }\n                })\n              Button('pop', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.pop();\n                  }\n                })\n              Button('moveToTopByName: PageDetail1', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(10)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 将PageDetail1页面移动至栈顶\n                    let indexFound = this.pageStack.moveToTop('PageDetail1');\n                    hilog.info(0x0000, 'demoTest', 'moveToTopByName,indexFound:' + indexFound);\n                  }\n                })\n              Button('removeByName HOME', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除名称为PageHome1的页面\n                    this.pageStack.removeByName('PageHome1');\n                  }\n                })\n              Button('removeByIndexes 0135', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除栈中index为0，1，3，5的页面\n                    this.pageStack.removeByIndexes([0,1,3,5]);\n                  }\n                })\n              Button('getAllPathName', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    let result = this.pageStack.getAllPathName();\n                    hilog.info(0x0000, 'demoTest', 'getAllPathName: ' + result.toString());\n                  }\n                })\n              Button('getParamByIndex0', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 获取index为0的页面的参数\n                    let result = this.pageStack.getParamByIndex(0);\n                    hilog.info(0x0000, 'demoTest', 'getParamByIndex: ' + result);\n                  }\n                })\n              Button('getParamByNameHomePage', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 获取名称为PageHome1的页面的参数\n                    let result = this.pageStack.getParamByName('PageHome1');\n                    hilog.info(0x0000, 'demoTest', 'getParamByName: ' + result.toString());\n                  }\n                })\n              Button('getIndexByNameHomePage', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 获取名称为PageHome1的页面的Index\n                    let result = this.pageStack.getIndexByName('PageHome1');\n                    hilog.info(0x0000, 'demoTest', 'getIndexByName: ' + result);\n                  }\n                })\n              Button('keepBottomPage True', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(10)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 设置栈底页面无法被移除\n                    this.pageStack.keepBottomPage(true);\n                  }\n                })\n              Button('keepBottomPage False', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(10)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 设置栈底页面可以被移除\n                    this.pageStack.keepBottomPage(false);\n                  }\n                })\n              Button('setPlaceholderPage', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(10)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.setPlaceholderPage({ name: 'PagePlaceholder' });\n                  }\n                })\n            }.backgroundColor(0xFFFFFF).width('100%').padding(10).borderRadius(15)\n            }\n            .width('100%')\n          }\n          .width('100%')\n          .height('92%')\n        }.hideTitleBar(true)\n      }\n    }\n\n  log(): boolean {\n    hilog.info(0x0000, 'demoTest', 'PageHome1 build called');\n    return true;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/PageDetail1.ets：详情页\nimport { MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nexport struct PageDetail1 {\n  @State message: string = 'PageDetail1';\n  @Consume('pageStack') pageStack: MultiNavPathStack;\n  controller: TextInputController = new TextInputController();\n  text: string = '';\n  param: Object = new Object();\n\n  build() {\n    if (this.log()) {\n      NavDestination() {\n        Column() {\n          Column() {\n            Text(this.message)\n              .fontSize(40)\n              .fontWeight(FontWeight.Bold)\n          }\n          .height('8%')\n          .width('100%')\n          Scroll(){\n            Column(){\n              Button('OpenHome', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageHome1页面\n                    this.pageStack.pushPathByName('PageHome1', 'testParam', true, SplitPolicy.HOME_PAGE);\n                  }\n                })\n              Button('OpenDetail', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageDetail1页面\n                    this.pageStack.pushPathByName('PageDetail1', 'testParam');\n                  }\n                })\n              Button('OpenFull', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageFull1页面\n                    this.pageStack.pushPathByName('PageFull1', 'testParam', true, SplitPolicy.FULL_PAGE);\n                  }\n                })\n              Button('ReplaceDetail', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 使用PageDetail2替换当前页面\n                    this.pageStack.replacePathByName('PageDetail2', 'testParam');\n                  }\n                })\n              Button('removeByName PageDetail1', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除栈中name为PageDetail1的页面\n                    this.pageStack.removeByName('PageDetail1');\n                  }\n                })\n              Button('removeByIndexes 0135', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除栈中index为0，1，3，5的页面\n                    this.pageStack.removeByIndexes([0,1,3,5]);\n                  }\n                })\n              Button('switchFullScreenState true', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 将页面设置为全屏\n                    this.pageStack.switchFullScreenState(true);\n                  }\n                })\n              Button('switchFullScreenState false', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 将页面设置为非全屏\n                    this.pageStack.switchFullScreenState(false);\n                  }\n                })\n              Button('pop', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.pop('123');\n                  }\n                })\n              Button('popToHome1', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 返回至指定name的页面，删除大于该页面index的所有其他页面\n                    this.pageStack.popToName('PageHome1');\n                  }\n                })\n              TextInput({placeholder: 'input your popToIndex ...', controller: this.controller })\n                .placeholderColor(Color.Grey)\n                .placeholderFont({ size: 14, weight: 400 })\n                .caretColor(Color.Blue)\n                .type(InputType.Number)\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .fontSize(14)\n                .fontColor(Color.Black)\n                .onChange((value: string) => {\n                  this.text = value;\n                })\n              Button('popToIndex', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 返回至指定index页面，删除大于该index的所有页面\n                    this.pageStack.popToIndex(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n              Button('moveIndexToTop', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 将指定Index页面移动至栈顶\n                    this.pageStack.moveIndexToTop(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n              Button('clear', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 清空当前路由栈\n                    this.pageStack.clear();\n                  }\n                })\n              Button('disableAnimation', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 关闭当前栈对应栈操作的动画\n                    this.pageStack.disableAnimation(true);\n                  }\n                })\n              Button('enableAnimation', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 开启当前栈对应栈操作的动画\n                    this.pageStack.disableAnimation(false);\n                  }\n                })\n              Button('setHomeWidthRange(20, 80)', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.setHomeWidthRange(20, 80);\n                  }\n                })\n              Button('setHomeWidthRange(-1, 20)', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.setHomeWidthRange(-1, 20);\n                  }\n                })\n              Button('setHomeWidthRange(20, 120)', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.setHomeWidthRange(20, 120);\n                  }\n                })\n            }\n            .width('100%')\n          }\n          .width('100%')\n          .height('92%')\n        }\n      }.hideTitleBar(true)\n    }\n  }\n\n  log(): boolean {\n    hilog.info(0x0000, 'demoTest', 'PageDetail1 build called');\n    return true;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/PageDetail2.ets: 详情页\nimport { MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nexport struct PageDetail2 {\n  @State message: string = 'PageDetail2';\n  @Consume('pageStack') pageStack: MultiNavPathStack;\n  controller: TextInputController = new TextInputController();\n  text: string = '';\n  param: Object = new Object();\n\n  build() {\n    if (this.log()) {\n      NavDestination() {\n        Column() {\n          Column() {\n            Text(this.message)\n              .fontSize(40)\n              .fontWeight(FontWeight.Bold)\n          }\n          .width('100%')\n          .height('8%')\n          Scroll(){\n            Column() {\n              Button('OpenHome', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageHome1页面\n                    this.pageStack.pushPathByName('PageHome1', 'testParam', true, SplitPolicy.HOME_PAGE);\n                  }\n                })\n              Button('OpenDetail', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageDetail1页面\n                    this.pageStack.pushPathByName('PageDetail1', 'testParam');\n                  }\n                })\n              Button('OpenFull', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageFull1页面\n                    this.pageStack.pushPathByName('PageFull1', 'testParam', true, SplitPolicy.FULL_PAGE);\n                  }\n                })\n              Button('ReplaceDetail', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 使用PageDetail2替换当前页面\n                    this.pageStack.replacePathByName('PageDetail2', 'testParam');\n                  }\n                })\n              TextInput({placeholder: 'input your popToIndex ...', controller: this.controller })\n                .placeholderColor(Color.Grey)\n                .placeholderFont({ size: 14, weight: 400 })\n                .caretColor(Color.Blue)\n                .type(InputType.Number)\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .fontSize(14)\n                .fontColor(Color.Black)\n                .onChange((value: string) => {\n                  this.text = value;\n                })\n              Button('moveIndexToTop', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 将指定index的页面移动至栈顶\n                    this.pageStack.moveIndexToTop(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n              Button('pop', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.pop();\n                  }\n                })\n              TextInput({placeholder: 'input your popToIndex ...', controller: this.controller })\n                .placeholderColor(Color.Grey)\n                .placeholderFont({ size: 14, weight: 400 })\n                .caretColor(Color.Blue)\n                .type(InputType.Number)\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .fontSize(14)\n                .fontColor(Color.Black)\n                .onChange((value: string) => {\n                  this.text = value;\n                })\n              Button('popToIndex', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 返回至指定index页面，删除大于该index的所有页面\n                    this.pageStack.popToIndex(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n              Button('clear', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 清空当前路由栈\n                    this.pageStack.clear();\n                  }\n                })\n              Button('disableAnimation', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 关闭当前栈对应栈操作的动画\n                    this.pageStack.disableAnimation(true);\n                  }\n                })\n              Button('enableAnimation', { stateEffect: true, type: ButtonType.Capsule})\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 开启当前栈对应栈操作的动画\n                    this.pageStack.disableAnimation(false);\n                  }\n                })\n            }\n            .width('100%')\n          }\n          .width('100%')\n          .height('92%')\n        }\n      }\n      .hideTitleBar(true)\n    }\n  }\n\n  log(): boolean {\n    hilog.info(0x0000, 'demoTest', 'PageDetail2 build called');\n    return true;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/PageFull1.ets: 不参与分栏的页面，默认全屏展示\nimport { MultiNavPathStack, SplitPolicy } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nexport struct PageFull1 {\n  @State message: string = 'PageFull1';\n  @Consume('pageStack') pageStack: MultiNavPathStack;\n  controller: TextInputController = new TextInputController();\n  text: string = '';\n\n  build() {\n    if (this.log()) {\n      NavDestination() {\n        Column() {\n          Column() {\n            Text(this.message)\n              .fontSize(40)\n              .fontWeight(FontWeight.Bold)\n          }\n          .width('100%')\n          .height('8%')\n\n          Scroll() {\n            Column() {\n              Button('OpenHome', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageHome1页面\n                    this.pageStack.pushPathByName('PageHome1', 'testParam', true, SplitPolicy.HOME_PAGE);\n                  }\n                })\n              Button('OpenDetail', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageDetail1页面\n                    this.pageStack.pushPathByName('PageDetail1', 'testParam');\n                  }\n                })\n              Button('OpenFull', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 跳转至PageFull1页面\n                    this.pageStack.pushPathByName('PageFull1', 'testParam', true, SplitPolicy.FULL_PAGE);\n                  }\n                })\n              Button('ReplaceFULL', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 使用PageFull1页面替换当前页面\n                    this.pageStack.replacePathByName('PageFull1', 'testParam', true);\n                  }\n                })\n              Button('removeByName PageFull1', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除栈中name为PageFull1的页面\n                    this.pageStack.removeByName('PageFull1');\n                  }\n                })\n              Button('removeByIndexes 0135', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    // 删除栈中index为0，1，3，5的页面\n                    this.pageStack.removeByIndexes([0, 1, 3, 5]);\n                  }\n                })\n              Button('pop', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.pop();\n                  }\n                })\n              TextInput({ placeholder: 'input your popToIndex ...', controller: this.controller })\n                .placeholderColor(Color.Grey)\n                .placeholderFont({ size: 14, weight: 400 })\n                .caretColor(Color.Blue)\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .type(InputType.Number)\n                .fontSize(14)\n                .fontColor(Color.Black)\n                .onChange((value: string) => {\n                  this.text = value;\n                })\n              Button('popToIndex', { stateEffect: true, type: ButtonType.Capsule })\n                .width('50%')\n                .height(40)\n                .margin(20)\n                .onClick(() => {\n                  if (this.pageStack !== undefined && this.pageStack !== null) {\n                    this.pageStack.popToIndex(Number(this.text));\n                    this.controller.caretPosition(1);\n                  }\n                })\n            }\n            .width('100%')\n          }\n          .width('100%')\n          .height('92%')\n        }\n      }\n      .hideTitleBar(true)\n      .onBackPressed(() => {\n        hilog.info(0x0000, 'demoTest', 'PageFull1 onBackPressed: ');\n        return false;\n      })\n    }\n  }\n\n  log(): boolean {\n    hilog.info(0x0000, 'demoTest', 'PageFull1 build called');\n    return true;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// pages/PagePlaceholder.ets: 占位页\nimport { MultiNavPathStack } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Component\nexport struct PagePlaceholder {\n  @State message: string = 'PagePlaceholder';\n  @Consume('pageStack') pageStack: MultiNavPathStack;\n  controller: TextInputController = new TextInputController();\n  text: string = '';\n  lastBackTime: number = 0;\n\n  build() {\n    if (this.log()) {\n      NavDestination() {\n        Column() {\n          Column() {\n            Text(this.message)\n              .fontSize(50)\n              .fontWeight(FontWeight.Bold)\n          }\n          .width('100%')\n          .height('8%')\n\n          Stack({alignContent: Alignment.Center}) {\n            Text('Placeholder示例页面')\n              .fontSize(80)\n              .fontWeight(FontWeight.Bold)\n              .fontColor(Color.Red)\n          }\n          .width('100%')\n          .height('92%')\n        }\n      }.hideTitleBar(true)\n    }\n  }\n\n  log(): boolean {\n    hilog.info(0x0000, 'demoTest', 'PagePlaceholder build called');\n    return true;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分栏效果演示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(177677)/* ["default"] */.A) + "",
            width: "613",
            height: "423"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主页跳转详情页效果演示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(368308)/* ["default"] */.A) + "",
            width: "613",
            height: "423"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全屏类型页面效果演示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(203433)/* ["default"] */.A) + "",
            width: "613",
            height: "423"
          })
        }), "\n"]
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
368308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800026-63b5bd11d436469f2ea2f6c305e39d6f.gif");

},
890902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
203433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439721-a60296ed7ba64487094c5829ab24af23.gif");

},
402786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
126748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
2125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
111888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
177677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479675-82846e9e79d31e7f733051743cff8b17.gif");

},
116844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
849688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
68905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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