"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860123"], {
155116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ts_container_tabs_ts_container_tabs_md_134_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-navigation-and-switching-ts-container-tabs-ts-container-tabs-md-134.json
var site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ts_container_tabs_ts_container_tabs_md_134_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs","title":"Tabs","description":"通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs.md","sourceDirName":"arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs","slug":"/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Tabs","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-tabs"},"sidebar":"ref","previous":{"title":"MultiNavigation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation"},"next":{"title":"TabContent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs.md


const frontMatter = {
	title: 'Tabs',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-tabs'
};
const contentTitle = 'Tabs';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "TabsOptions15+",
  "id": "tabsoptions15",
  "level": 2
}, {
  "value": "BarPosition枚举说明",
  "id": "barposition枚举说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "vertical",
  "id": "vertical",
  "level": 3
}, {
  "value": "scrollable",
  "id": "scrollable",
  "level": 3
}, {
  "value": "barMode",
  "id": "barmode",
  "level": 3
}, {
  "value": "barMode10+",
  "id": "barmode10",
  "level": 3
}, {
  "value": "barMode10+",
  "id": "barmode10-1",
  "level": 3
}, {
  "value": "barWidth",
  "id": "barwidth",
  "level": 3
}, {
  "value": "barHeight",
  "id": "barheight",
  "level": 3
}, {
  "value": "barHeight20+",
  "id": "barheight20",
  "level": 3
}, {
  "value": "animationCurve20+",
  "id": "animationcurve20",
  "level": 3
}, {
  "value": "animationDuration",
  "id": "animationduration",
  "level": 3
}, {
  "value": "animationMode12+",
  "id": "animationmode12",
  "level": 3
}, {
  "value": "barPosition9+",
  "id": "barposition9",
  "level": 3
}, {
  "value": "divider10+",
  "id": "divider10",
  "level": 3
}, {
  "value": "fadingEdge10+",
  "id": "fadingedge10",
  "level": 3
}, {
  "value": "barOverlap10+",
  "id": "baroverlap10",
  "level": 3
}, {
  "value": "barBackgroundColor10+",
  "id": "barbackgroundcolor10",
  "level": 3
}, {
  "value": "barBackgroundBlurStyle11+",
  "id": "barbackgroundblurstyle11",
  "level": 3
}, {
  "value": "barBackgroundBlurStyle18+",
  "id": "barbackgroundblurstyle18",
  "level": 3
}, {
  "value": "barGridAlign10+",
  "id": "bargridalign10",
  "level": 3
}, {
  "value": "edgeEffect12+",
  "id": "edgeeffect12",
  "level": 3
}, {
  "value": "barBackgroundEffect18+",
  "id": "barbackgroundeffect18",
  "level": 3
}, {
  "value": "pageFlipMode15+",
  "id": "pageflipmode15",
  "level": 3
}, {
  "value": "cachedMaxCount19+",
  "id": "cachedmaxcount19",
  "level": 3
}, {
  "value": "DividerStyle10+对象说明",
  "id": "dividerstyle10对象说明",
  "level": 2
}, {
  "value": "BarGridColumnOptions10+对象说明",
  "id": "bargridcolumnoptions10对象说明",
  "level": 2
}, {
  "value": "ScrollableBarModeOptions10+对象说明",
  "id": "scrollablebarmodeoptions10对象说明",
  "level": 2
}, {
  "value": "BarMode枚举说明",
  "id": "barmode枚举说明",
  "level": 2
}, {
  "value": "AnimationMode12+枚举说明",
  "id": "animationmode12枚举说明",
  "level": 2
}, {
  "value": "LayoutStyle10+枚举说明",
  "id": "layoutstyle10枚举说明",
  "level": 2
}, {
  "value": "CommonModifier15+",
  "id": "commonmodifier15",
  "level": 2
}, {
  "value": "TabsCacheMode19+枚举说明",
  "id": "tabscachemode19枚举说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onChange",
  "id": "onchange",
  "level": 3
}, {
  "value": "onTabBarClick10+",
  "id": "ontabbarclick10",
  "level": 3
}, {
  "value": "onAnimationStart11+",
  "id": "onanimationstart11",
  "level": 3
}, {
  "value": "onAnimationEnd11+",
  "id": "onanimationend11",
  "level": 3
}, {
  "value": "onGestureSwipe11+",
  "id": "ongestureswipe11",
  "level": 3
}, {
  "value": "customContentTransition11+",
  "id": "customcontenttransition11",
  "level": 3
}, {
  "value": "onContentWillChange12+",
  "id": "oncontentwillchange12",
  "level": 3
}, {
  "value": "onSelected18+",
  "id": "onselected18",
  "level": 3
}, {
  "value": "onUnselected18+",
  "id": "onunselected18",
  "level": 3
}, {
  "value": "onContentDidScroll23+",
  "id": "oncontentdidscroll23",
  "level": 3
}, {
  "value": "OnTabsAnimationStartCallback18+",
  "id": "ontabsanimationstartcallback18",
  "level": 2
}, {
  "value": "OnTabsAnimationEndCallback18+",
  "id": "ontabsanimationendcallback18",
  "level": 2
}, {
  "value": "OnTabsGestureSwipeCallback18+",
  "id": "ontabsgestureswipecallback18",
  "level": 2
}, {
  "value": "TabsCustomContentTransitionCallback18+",
  "id": "tabscustomcontenttransitioncallback18",
  "level": 2
}, {
  "value": "OnTabsContentWillChangeCallback18+",
  "id": "ontabscontentwillchangecallback18",
  "level": 2
}, {
  "value": "TabsAnimationEvent11+对象说明",
  "id": "tabsanimationevent11对象说明",
  "level": 2
}, {
  "value": "TabContentAnimatedTransition11+",
  "id": "tabcontentanimatedtransition11",
  "level": 2
}, {
  "value": "TabContentTransitionProxy11+",
  "id": "tabcontenttransitionproxy11",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "finishTransition",
  "id": "finishtransition",
  "level": 3
}, {
  "value": "OnTabsContentDidScrollCallback23+",
  "id": "ontabscontentdidscrollcallback23",
  "level": 2
}, {
  "value": "TabsController",
  "id": "tabscontroller",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "changeIndex",
  "id": "changeindex",
  "level": 3
}, {
  "value": "preloadItems12+",
  "id": "preloaditems12",
  "level": 3
}, {
  "value": "setTabBarTranslate13+",
  "id": "settabbartranslate13",
  "level": 3
}, {
  "value": "setTabBarOpacity13+",
  "id": "settabbaropacity13",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置TabBar的布局模式）",
  "id": "示例1设置tabbar的布局模式",
  "level": 3
}, {
  "value": "示例2（设置Scrollable模式下的TabBar的布局样式）",
  "id": "示例2设置scrollable模式下的tabbar的布局样式",
  "level": 3
}, {
  "value": "示例3（自定义页签切换联动）",
  "id": "示例3自定义页签切换联动",
  "level": 3
}, {
  "value": "示例4（分割线基本属性）",
  "id": "示例4分割线基本属性",
  "level": 3
}, {
  "value": "示例5（设置TabBar渐隐）",
  "id": "示例5设置tabbar渐隐",
  "level": 3
}, {
  "value": "示例6（设置TabBar叠加在TabContent内容上）",
  "id": "示例6设置tabbar叠加在tabcontent内容上",
  "level": 3
}, {
  "value": "示例7（设置TabBar栅格化可见区域）",
  "id": "示例7设置tabbar栅格化可见区域",
  "level": 3
}, {
  "value": "示例8（自定义Tabs页面切换动画）",
  "id": "示例8自定义tabs页面切换动画",
  "level": 3
}, {
  "value": "示例9（页面切换拦截）",
  "id": "示例9页面切换拦截",
  "level": 3
}, {
  "value": "示例10（自定义TabBar切换动画）",
  "id": "示例10自定义tabbar切换动画",
  "level": 3
}, {
  "value": "示例11（预加载子节点）",
  "id": "示例11预加载子节点",
  "level": 3
}, {
  "value": "示例12（设置TabBar平移距离和不透明度）",
  "id": "示例12设置tabbar平移距离和不透明度",
  "level": 3
}, {
  "value": "示例13（页面懒加载和释放）",
  "id": "示例13页面懒加载和释放",
  "level": 3
}, {
  "value": "示例14（设置翻页动效）",
  "id": "示例14设置翻页动效",
  "level": 3
}, {
  "value": "示例15（页签超出TabBar区域显示）",
  "id": "示例15页签超出tabbar区域显示",
  "level": 3
}, {
  "value": "示例16（页签对齐布局）",
  "id": "示例16页签对齐布局",
  "level": 3
}, {
  "value": "示例17（Tabs与TabBar同步切换）",
  "id": "示例17tabs与tabbar同步切换",
  "level": 3
}, {
  "value": "示例18（释放Tabs子组件）",
  "id": "示例18释放tabs子组件",
  "level": 3
}, {
  "value": "示例19（设置TabBar背景模糊效果）",
  "id": "示例19设置tabbar背景模糊效果",
  "level": 3
}, {
  "value": "示例20（设置边缘滑动效果）",
  "id": "示例20设置边缘滑动效果",
  "level": 3
}, {
  "value": "示例21（Tabs设置翻页动画曲线）",
  "id": "示例21tabs设置翻页动画曲线",
  "level": 3
}, {
  "value": "示例22（监听Tabs页面滑动事件）",
  "id": "示例22监听tabs页面滑动事件",
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
    number: "number",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tabs",
        children: "Tabs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148319)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件从API version 11开始，支持安全区域避让特性，其", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#expandsafearea",
          children: "expandSafeArea"
        }), "属性的默认值为expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])。开发者可通过重写该属性覆盖默认行为。对于API version 11之前的版本，则需配合expandSafeArea属性手动实现安全区域避让。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "，以及渲染控制类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "if/else"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "，不建议自定义组件作为子组件。并且if/else和ForEach下也仅支持TabContent作为子组件，不建议自定义组件作为子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242459)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs子组件的visibility属性设置为None，或者visibility属性设置为Hidden时，对应子组件不显示，但依然会在视窗内占位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已经显示的Tabs子组件TabContent后续隐藏时不会被销毁，若需要页面懒加载和释放，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B13%E9%A1%B5%E9%9D%A2%E6%87%92%E5%8A%A0%E8%BD%BD%E5%92%8C%E9%87%8A%E6%94%BE",
        children: "示例13"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabs设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
        children: "height"
      }), "为auto时，可根据子组件高度自适应高度大小。设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
        children: "width"
      }), "为auto时，可根据子组件宽度自适应宽度大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs(options?: TabsOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Tabs容器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabsoptions15",
              children: "TabsOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabs组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabsoptions15",
      children: "TabsOptions15+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabs组件参数，设置Tabs的页签位置，当前显示页签的索引，Tabs控制器和TabBar的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
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
            children: "barPosition7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#barposition%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Tabs的页签位置。  默认值：BarPosition.Start。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前显示页签的索引。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为小于0的值时按默认值显示。  可选值为[0, TabContent子节点数量-1]。  直接修改index跳页时，切换动效不生效。 使用TabController的changeIndex时，默认生效切换动效，可以设置animationDuration为0关闭动画。  从API version 10开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  Tabs重建、系统资源切换（如系统字体切换、系统深浅色切换）或者组件属性变化时，会跳转到index对应的页面。若需要在上述情况下不跳转，建议使用双向绑定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabscontroller",
              children: "TabsController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Tabs控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "barModifier15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#commonmodifier15",
              children: "CommonModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置TabBar的", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
              children: "通用属性"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  动态置为undefined时会保持当前状态不变，不会重置各通用属性。  由一个CommonModifier切换为另一个CommonModifier时，重复属性会进行覆盖，非重复属性会同时生效，不会重置前一个CommonModifier的通用属性。  Tabs的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barwidth",
              children: "barWidth"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barheight",
              children: "barHeight"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barbackgroundcolor10",
              children: "barBackgroundColor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barbackgroundblurstyle18",
              children: "barBackgroundBlurStyle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barbackgroundeffect18",
              children: "barBackgroundEffect"
            }), "属性会覆盖CommonModifier的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
              children: "width"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
              children: "height"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor18",
              children: "backgroundColor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyle18",
              children: "backgroundBlurStyle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffect18",
              children: "backgroundEffect"
            }), "属性。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#align",
              children: "align"
            }), "属性仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barmode10-1",
              children: "BarMode.Scrollable"
            }), "模式下生效，且Tabs为横向时还需", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrollablebarmodeoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "nonScrollableLayoutStyle"
            }), "未设置或设置为异常值时才能生效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#tabbar18",
              children: "tabBar"
            }), "属性为底部页签样式时不支持拖拽功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "barposition枚举说明",
      children: "BarPosition枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs页签位置枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vertical属性方法设置为true时，页签位于容器左侧；vertical属性方法设置为false时，页签位于容器顶部。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vertical属性方法设置为true时，页签位于容器右侧；vertical属性方法设置为false时，页签位于容器底部。"
          })]
        })]
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
      id: "vertical",
      children: "vertical"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vertical(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否为纵向Tab。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为纵向Tab。  默认值：false，横向Tabs，为true时纵向Tabs。  当横向Tabs设置height为auto时，Tabs组件高度自适应子组件高度，即为tabBar高度+divider线宽+TabContent高度+上下padding值+上下border宽度。  当纵向Tabs设置width为auto时，Tabs组件宽度自适应子组件宽度，即为tabBar宽度+divider线宽+TabContent宽度+左右padding值+左右border宽度。  尽量保持每一个页面中的子组件尺寸大小一致，避免滑动页面时出现页面切换动画跳动现象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollable",
      children: "scrollable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否可以通过滑动页面进行页面切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否可以通过滑动页面进行页面切换。  默认值：true，可以通过滑动页面进行页面切换。为false时不可滑动切换页面。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barmode",
      children: "barMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barMode(value: BarMode, options?: ScrollableBarModeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar布局模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#barmode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布局模式。  默认值：BarMode.Fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrollablebarmodeoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ScrollableBarModeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scrollable模式下的TabBar的布局样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅Scrollable且水平模式下有效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barmode10",
      children: "barMode10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barMode(value: BarMode.Fixed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar布局模式为BarMode.Fixed。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#barmode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarMode.Fixed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有TabBar会平均分配barWidth宽度（纵向时平均分配barHeight高度）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barmode10-1",
      children: "barMode10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar布局模式为BarMode.Scrollable。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#barmode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarMode.Scrollable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有TabBar都使用实际布局宽度，超过总宽度（横向Tabs的barWidth，纵向Tabs的barHeight）后可滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrollablebarmodeoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ScrollableBarModeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scrollable模式下的TabBar的布局样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅水平模式下有效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barwidth",
      children: "barWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barWidth(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的宽度值。设置为小于0或大于Tabs宽度值时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            }), "8+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TabBar的宽度值。  默认值：  未设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#subtabbarstyle9",
              children: "SubTabBarStyle"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            }), "的TabBar且vertical属性为false时，默认值为Tabs的宽度。  未设置SubTabBarStyle和BottomTabBarStyle的TabBar且vertical属性为true时，默认值为56vp。  设置SubTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。  设置SubTabBarStyle样式且vertical属性为true时，默认值为56vp。  设置BottomTabBarStyle样式且vertical属性为true时，默认值为96vp。  设置BottomTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barheight",
      children: "barHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barHeight(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度。height设置为小于0或大于Tabs高度值时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 14之前的版本，若设置barHeight为固定值后，TabBar无法扩展底部安全区。从API version 14开始支持配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#safeareapadding14",
        children: "safeAreaPadding"
      }), "属性，当safeAreaPadding不设置bottom或者bottom设置为0时，可以实现扩展安全区。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            }), "8+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TabBar的高度值。  默认值：  未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56vp。  未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。  设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#subtabbarstyle9",
              children: "SubTabBarStyle"
            }), "样式且vertical属性为false时，默认值为56vp。  设置SubTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。  设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            }), "样式且vertical属性为true时，默认值为Tabs的高度。  设置BottomTabBarStyle样式且vertical属性为false时，默认值为56vp，从API version 12开始，默认值变更为48vp。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barheight20",
      children: "barHeight20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barHeight(height: Length, noMinHeightLimit: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度，并通过设置noMinHeightLimit为true让自适应高度可以小于TabBar默认高度。height设置为小于0或大于Tabs高度值时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TabBar的高度值。  默认值：  未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56vp。  未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。  设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#subtabbarstyle9",
              children: "SubTabBarStyle"
            }), "样式且vertical属性为false时，默认值为56vp。  设置SubTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。  设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            }), "样式且vertical属性为true时，默认值为Tabs的高度。  设置BottomTabBarStyle样式且vertical属性为false时，默认值为48vp。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noMinHeightLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["height设置为'auto'时，设置是否取消TabBar的最小高度限制。默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  值为true表示取消TabBar的最小高度限制，即TabBar的高度值可以小于默认值。  值为false表示限制TabBar的最小高度，即TabBar的最小高度值等于默认值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "animationcurve20",
      children: "animationCurve20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animationCurve(curve: Curve | ICurve)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Tabs翻页动画曲线。常用曲线参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#curve",
        children: "Curve"
      }), "枚举说明，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve",
        children: "插值计算"
      }), "模块提供的接口创建自定义的插值曲线对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#curve",
              children: "Curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#icurve9",
              children: "ICurve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "animationduration",
      children: "animationDuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animationDuration(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Tabs翻页动画时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animationCurve不设置时，由于滑动TabContent翻页动画曲线interpolatingSpring(-1, 1, 228, 30)时长只受曲线自身参数影响，animationDuration只能控制点击TabBar页签和调用TabsController的changeIndex接口切换TabContent的动画时长。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不受animationDuration控制的曲线可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve",
        children: "插值计算"
      }), "模块，比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesspringmotion9",
        children: "springMotion"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesresponsivespringmotion9",
        children: "responsiveSpringMotion"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesinterpolatingspring10",
        children: "interpolatingSpring"
      }), "类型的曲线。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabs翻页的动画时长。  默认值：  API version 10及以前，不设置该属性或设置为null时，默认值为0，即Tabs翻页无动画。设置为小于0或undefined时，默认值为300。  API version 11及以后，不设置该属性或设置为异常值，且设置TabBar为BottomTabBarStyle样式时，默认值为0。设置TabBar为其他样式时，默认值为300。  单位：ms  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "animationmode12",
      children: "animationMode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animationMode(mode: Optional<AnimationMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755751)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此属性不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#animationmode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "AnimationMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。  默认值：AnimationMode.CONTENT_FIRST，表示在点击TabBar页签或调用TabsController的changeIndex接口切换TabContent时，先加载目标页内容，再开始切换动画。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barposition9",
      children: "barPosition9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barPosition(value: BarPosition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Tabs的页签位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#barposition%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Tabs的页签位置。  默认值：BarPosition.Start"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider10",
      children: "divider10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "divider(value: DividerStyle | null)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置区分TabBar和TabContent的分割线样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dividerstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DividerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fadingedge10",
      children: "fadingEdge10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fadingEdge(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置页签超过容器宽度时是否渐隐消失。建议配合barBackgroundColor属性一起使用，如果barBackgroundColor属性没有定义，会默认显示页签末端为白色的渐隐效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签超过容器宽度时是否渐隐消失。  默认值：true，页签超过容器宽度时会渐隐消失。设置为false时，页签超过容器宽度直接截断显示，不产生任何渐变效果‌。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baroverlap10",
      children: "barOverlap10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barOverlap(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar是否背后变模糊并叠加在TabContent之上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TabBar是否背后变模糊并叠加在TabContent之上。当barOverlap设置为true时，TabBar背后变模糊并叠加在TabContent之上，并且TabBar默认模糊材质的BlurStyle值修改为'BlurStyle.COMPONENT_THICK'。当barOverlap设置为false时，无模糊和叠加效果。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barbackgroundcolor10",
      children: "barBackgroundColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barBackgroundColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的背景颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TabBar的背景颜色。  默认值：Color.Transparent，透明"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barbackgroundblurstyle11",
      children: "barBackgroundBlurStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barBackgroundBlurStyle(value: BlurStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的背景模糊材质。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125727)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TabBar的背景模糊材质。  默认值：BlurStyle.NONE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barbackgroundblurstyle18",
      children: "barBackgroundBlurStyle18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为TabBar提供一种在背景和内容之间的模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景模糊选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bargridalign10",
      children: "barGridAlign10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barGridAlign(value: BarGridColumnOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以栅格化方式设置TabBar的可见区域。具体参见BarGridColumnOptions对象。仅水平模式下有效，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout#%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8%E6%96%AD%E7%82%B9",
        children: "不适用于XS、XL和XXL设备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bargridcolumnoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BarGridColumnOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以栅格化方式设置TabBar的可见区域。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edgeeffect12",
      children: "edgeEffect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edgeEffect(edgeEffect: Optional<EdgeEffect>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置边缘回弹效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432494)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 17开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "edgeEffect"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#edgeeffect",
              children: "EdgeEffect"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边缘滑动效果。  默认值：EdgeEffect.Spring"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barbackgroundeffect18",
      children: "barBackgroundEffect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barBackgroundEffect(options: BackgroundEffectOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar背景属性，包含背景模糊半径，亮度，饱和度，颜色等参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar背景属性包括：模糊半径，亮度，饱和度，颜色等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pageflipmode15",
      children: "pageFlipMode15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pageFlipMode(mode: Optional<PageFlipMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标滚轮翻页模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#pageflipmode15",
              children: "PageFlipMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标滚轮翻页模式。  默认值：PageFlipMode.CONTINUOUS"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedmaxcount19",
      children: "cachedMaxCount19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedMaxCount(count: number, mode: TabsCacheMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子组件的最大缓存个数及缓存模式。未设置该属性时默认缓存所有子组件且缓存后不会释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的最大缓存个数。超出范围时自动释放不再需要的子组件。  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabscachemode19%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "TabsCacheMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的缓存模式。  默认值：TabsCacheMode.CACHE_BOTH_SIDE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dividerstyle10对象说明",
      children: "DividerStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分割线样式对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线的线宽（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
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
            children: "分割线的颜色。  默认值：#33182431"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startMargin"
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
            children: "分割线与侧边栏顶端的距离（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endMargin"
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
            children: "分割线与侧边栏底端的距离（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bargridcolumnoptions10对象说明",
      children: "BarGridColumnOptions10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabBar栅格化方式设置的对象，包括栅格模式下的column边距和间隔，以及小、中、大屏下，页签占用的columns数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "margin"
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
            children: "栅格模式下的column边距（不支持百分比设置）。  默认值：24.0  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gutter"
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
            children: "栅格模式下的column间隔（不支持百分比设置）。  默认值：24.0  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小屏下，页签占用的columns数量，必须是非负偶数。小屏为大于等于320vp但小于600vp。  默认值为-1，代表页签占用TabBar全部宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中屏下，页签占用的columns数量，必须是非负偶数。中屏为大于等于600vp但小于800vp。  默认值为-1，代表页签占用TabBar全部宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大屏下，页签占用的columns数量，必须是非负偶数。大屏为大于等于840vp但小于1024vp。  默认值为-1，代表页签占用TabBar全部宽度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrollablebarmodeoptions10对象说明",
      children: "ScrollableBarModeOptions10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scrollable模式下的TabBar的布局样式对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "margin"
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
            children: "Scrollable模式下的TabBar的左右边距（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nonScrollableLayoutStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "LayoutStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scrollable模式下不滚动时的页签排布方式。  默认值：LayoutStyle.ALWAYS_CENTER"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "barmode枚举说明",
      children: "BarMode枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabBar布局模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "Scrollable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每一个TabBar均使用实际布局宽度，超过总长度（横向Tabs的barWidth，纵向Tabs的barHeight）后可滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有TabBar平均分配barWidth宽度（纵向时平均分配barHeight高度）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animationmode12枚举说明",
      children: "AnimationMode12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击TabBar页签时切换TabContent的动画形式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CONTENT_FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["先加载目标页内容，再开始切换动画。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["先开始切换动画，再加载目标页内容；生效需要同时需要满足：Tabs的height、width没有设置成auto。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_ANIMATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关闭默认动画。调用TabsController的changeIndex接口切换TabContent时该枚举值不生效。  可以通过设置animationDuration为0实现调用TabsController的changeIndex接口时不带动画。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_FIRST_WITH_JUMP15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["先加载目标页内容，再无动画跳转到目标页附近，最后有动画跳转到目标页。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_FIRST_WITH_JUMP15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["先无动画跳转到目标页附近，再有动画跳转到目标页，最后加载目标页内容。此项生效需要同时需要满足：Tabs的height、width没有设置成auto。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutstyle10枚举说明",
      children: "LayoutStyle10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scrollable模式下不滚动时的页签排布方式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "ALWAYS_CENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页签内容超过TabBar宽度时，TabBar可滚动。  当页签内容不超过TabBar宽度时，TabBar不可滚动，页签紧凑居中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_AVERAGE_SPLIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页签内容超过TabBar宽度时，TabBar可滚动。  当页签内容不超过TabBar宽度时，TabBar不可滚动，且所有页签平均分配TabBar宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE_BETWEEN_OR_CENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页签内容超过TabBar宽度时，TabBar可滚动。  当页签内容不超过TabBar宽度但超过TabBar宽度一半时，TabBar不可滚动，页签紧凑居中。  当页签内容不超过TabBar宽度一半时，TabBar不可滚动，保证页签居中排列在TabBar宽度一半，且间距相同。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commonmodifier15",
      children: "CommonModifier15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type CommonModifier = CommonModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为Tabs组件的参数对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
              children: "CommonModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar的通用属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabscachemode19枚举说明",
      children: "TabsCacheMode19+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件的缓存模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "CACHE_BOTH_SIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存当前显示的子组件和其两侧的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存2n+1个子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CACHE_LATEST_SWITCHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存当前显示的子组件和最近切换过的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存n+1个子组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(event: Callback<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab页签切换后触发的事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件，即可触发该事件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、滑动页面进行页面切换时，组件滑动动画结束后触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tabscontroller",
        children: "控制器"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#changeindex",
        children: "changeIndex"
      }), "接口，Tab页签切换后触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3、动态修改", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "状态变量"
      }), "构造的index属性值，Tab页签切换后触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、点击TabBar页签，Tab页签切换后触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763265)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用自定义页签时，在onChange事件中联动可能会导致滑动页面切换后才执行页签联动，引起自定义页签切换效果延迟。建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onanimationstart11",
        children: "onAnimationStart"
      }), "中监听并刷新当前索引，以确保动效能够及时触发。具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B3%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5%E7%AD%BE%E5%88%87%E6%8D%A2%E8%81%94%E5%8A%A8",
        children: "示例3"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的index索引，索引从0开始计算。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontabbarclick10",
      children: "onTabBarClick10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTabBarClick(event: Callback<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab页签点击后触发的事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被点击的index索引，索引从0开始计算。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onanimationstart11",
      children: "onAnimationStart11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAnimationStart(handler: OnTabsAnimationStartCallback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["切换动画开始时触发该回调。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#animationduration",
        children: "animationDuration"
      }), "为0时动画关闭且", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scrollable",
        children: "scrollable"
      }), "为false时，不触发该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabsanimationstartcallback18",
              children: "OnTabsAnimationStartCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换动画开始时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onanimationend11",
      children: "onAnimationEnd11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAnimationEnd(handler: OnTabsAnimationEndCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换动画结束时触发该回调，包括动画过程中手势中断。当animationDuration为0时动画关闭，不触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabsanimationendcallback18",
              children: "OnTabsAnimationEndCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换动画结束时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ongestureswipe11",
      children: "onGestureSwipe11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGestureSwipe(handler: OnTabsGestureSwipeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面跟手滑动过程中，逐帧触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabsgestureswipecallback18",
              children: "OnTabsGestureSwipeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在页面跟手滑动过程中，逐帧触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customcontenttransition11",
      children: "customContentTransition11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customContentTransition(delegate: TabsCustomContentTransitionCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义Tabs页面切换动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用自定义切换动画时，Tabs组件自带的默认切换动画会被禁用，同时，页面也无法跟手滑动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当设置为undefined时，表示不使用自定义切换动画，仍然使用组件自带的默认切换动画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前自定义切换动画不支持打断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前自定义切换动画只支持两种场景触发：点击页签和调用TabsController.changeIndex()接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用自定义切换动画时，Tabs组件支持的事件中，除了onGestureSwipe，其他事件均支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onChange和onAnimationEnd事件的触发时机需要特殊说明：如果在第一次自定义动画执行过程中，触发了第二次自定义动画，那么在开始第二次自定义动画时，就会触发第一次自定义动画的onChange和onAnimationEnd事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用自定义动画时，参与动画的页面布局方式会改为Stack布局。如果开发者未主动设置相关页面的zIndex属性，那么所有页面的zIndex值是一样的，页面的渲染层级会按照在组件树上的顺序（即页面的index值顺序）确定。因此，开发者需要主动修改页面的zIndex属性，来控制页面的渲染层级。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此属性不支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311037)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabscustomcontenttransitioncallback18",
              children: "TabsCustomContentTransitionCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义Tabs页面切换动画开始时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncontentwillchange12",
      children: "onContentWillChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContentWillChange(handler: OnTabsContentWillChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义Tabs页面切换拦截事件能力，新页面即将显示时触发该回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件，即可触发该事件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、滑动TabContent切换新页面时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、通过TabsController.changeIndex接口切换新页面时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、通过动态修改index属性值切换新页面时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、通过点击TabBar页签切换新页面时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、TabBar页签获焦后，通过键盘左右方向键等切换新页面时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(847243)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabscontentwillchangecallback18",
              children: "OnTabsContentWillChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onselected18",
      children: "onSelected18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSelected(event: Callback<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件，即可触发该事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滑动离手时满足翻页阈值，开始切换动画时触发。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#tabscontroller",
          children: "TabsController控制器"
        }), "调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#changeindex",
          children: "changeIndex"
        }), "接口，开始切换动画时触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["动态修改", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "状态变量"
        }), "构造的index属性值后触发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过页签处点击触发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986674)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onSelected回调中不可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tabsoptions15",
        children: "TabsOptions"
      }), "的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前选中元素的索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onunselected18",
      children: "onUnselected18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onUnselected(event: Callback<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件，即可触发该事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滑动离手时满足翻页阈值，开始切换动画时触发。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#tabscontroller",
          children: "TabsController控制器"
        }), "调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#changeindex",
          children: "changeIndex"
        }), "接口，开始切换动画时触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["动态修改", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "状态变量"
        }), "构造的index属性值后触发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过页签处点击触发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要隐藏元素的索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668571)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onUnselected回调中不可通过TabsOptions的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncontentdidscroll23",
      children: "onContentDidScroll23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听Tabs页面滑动事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在页面滑动过程中，会对视窗内所有页面逐帧触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabscontentdidscrollcallback23",
        children: "OnTabsContentDidScrollCallback"
      }), "回调。例如，当视窗内有下标为0、1的两个页面时，会每帧触发两次index值分别为0和1的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabscontentdidscrollcallback23",
              children: "OnTabsContentDidScrollCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabsanimationstartcallback18",
      children: "OnTabsAnimationStartCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTabsAnimationStartCallback = (index: number, targetIndex: number, extraInfo: TabsAnimationEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换动画开始时触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "当前显示元素的索引，索引从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换动画目标元素的索引，索引从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabsanimationevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabsAnimationEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画相关信息，包括主轴方向上当前显示元素和目标元素相对Tabs起始位置的位移，以及离手速度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabsanimationendcallback18",
      children: "OnTabsAnimationEndCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTabsAnimationEndCallback = (index: number, extraInfo: TabsAnimationEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换动画结束时触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "当前显示元素的索引，索引从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabsanimationevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabsAnimationEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabsgestureswipecallback18",
      children: "OnTabsGestureSwipeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTabsGestureSwipeCallback = (index: number, extraInfo: TabsAnimationEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面跟手滑动过程中，逐帧触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "当前显示元素的索引，索引从0开始。  取值范围：[0, 索引值-1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabsanimationevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabsAnimationEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabscustomcontenttransitioncallback18",
      children: "TabsCustomContentTransitionCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TabsCustomContentTransitionCallback = (from: number, to: number) => TabContentAnimatedTransition | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义Tabs页面切换动画开始时触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画开始时，当前页面的index值，索引从0开始。  取值范围：[0, 索引值-1]，当设置的值超过索引值或小于0时无转场动画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画开始时，目标页面的index值，索引从0开始。  取值范围：[0, 索引值-1]，当设置的值超过索引值或小于0时无转场动画。"
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
              href: "#tabcontentanimatedtransition11",
              children: "TabContentAnimatedTransition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabscontentwillchangecallback18",
      children: "OnTabsContentWillChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTabsContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "currentIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示页面的index索引，索引从0开始计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "comingIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要显示的新页面的index索引。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当回调函数handler的返回值为true时，Tabs可以切换到新页面。  当回调函数handler的返回值为false时，Tabs无法切换到新页面，仍然显示原来页面内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabsanimationevent11对象说明",
      children: "TabsAnimationEvent11+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs组件动画相关信息集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "currentOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabs当前显示元素在主轴方向上，相对于Tabs起始位置的位移。单位vp，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabs动画目标元素在主轴方向上，相对于Tabs起始位置的位移。单位vp，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "velocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabs离手动画开始时的离手速度。单位vp/s，默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabcontentanimatedtransition11",
      children: "TabContentAnimatedTransition11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs自定义切换动画相关信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tabs自定义切换动画超时时间。从自定义动画开始切换计时，如果到达该时间后，开发者仍未调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontenttransitionproxy11",
              children: "TabContentTransitionProxy"
            }), "的finishTransition接口通知Tabs组件自定义动画结束，那么组件就会认为此次自定义动画已结束，直接执行后续操作。  默认值：1000  单位：ms  取值范围：[0, +∞)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontenttransitionproxy11",
              children: "TabContentTransitionProxy"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义切换动画具体内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabcontenttransitionproxy11",
      children: "TabContentTransitionProxy11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画的起始和目标页面信息，同时，也可以通过调用该对象的finishTransition接口通知Tabs组件自定义动画已结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义动画起始页面对应的index值，索引从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义动画目标页面对应的index值，索引从0开始。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finishtransition",
      children: "finishTransition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "finishTransition(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知Tabs组件，此页面的自定义动画已结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabscontentdidscrollcallback23",
      children: "OnTabsContentDidScrollCallback23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTabsContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs滑动时触发的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的selectedIndex为0、index为0、position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度。第二次回调的selectedIndex仍为0、index为1、position为当前帧第1页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第1页的长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前选中页面的索引。例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每一次回调的selectedIndex都为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视窗内页面的索引。例如，页面滑动过程中，视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的index为0，第二次回调的index为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index页面相对于Tabs主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。例如，一个横向Tabs中，当前选中的页签索引为0，从第0页往左切换到第1页的动画过程中，若刚好有一帧第0页和第1页分别占用视窗的30%和70%时，当前帧会触发两次回调。其中，第一次回调的position为-0.7，表示当前帧第0页在Tabs主轴起始位置的左侧，且第0页左侧位置距离Tabs主轴起始位置为视窗的70%，即第0页往左移动了视窗70%的距离。第二次回调的position为0.3，表示当前帧第1页在Tabs主轴起始位置的右侧，且第1页左侧位置距离Tabs主轴起始位置为视窗的30%，实际上第1页也是往左移动了视窗70%的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mainAxisLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index对应页面在主轴方向上的长度，单位vp。例如，某一次回调的index为0，这一次回调的mainAxisLength为360，则表示当前帧第0页在主轴方向上的长度为360vp。横向Tabs代表的是页面宽度，竖向Tabs代表的是页面高度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabscontroller",
      children: "TabsController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs组件的控制器，用于控制Tabs组件进行页签切换。不支持一个TabsController控制多个Tabs组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabsController的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changeindex",
      children: "changeIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "changeIndex(value: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制Tabs切换到指定页签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["页签在Tabs里的索引值，索引值从0开始。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0或大于最大数量的值时，取默认值0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preloaditems12",
      children: "preloadItems12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preloadItems(indices: Optional<Array<number>>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制Tabs预加载指定子节点。调用该接口后会一次性加载所有指定的子节点，因此为了性能考虑，建议分批加载子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(908580)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tabs的preloadItems需要在Tabs创建之后去调用，首次预加载推荐在Tabs的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onappear",
          children: "onAppear"
        }), "生命周期中去控制。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果TabsController对象未绑定任何Tabs组件，直接调用该接口，会抛出JS异常。因此使用该接口时，建议通过try-catch捕获异常。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用preloadItems预加载标签页时，若需自定义TabBar上的显示内容，推荐使用ComponentContent实现，使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#%E7%A4%BA%E4%BE%8B10%E9%80%9A%E8%BF%87componentcontent%E8%AE%BE%E7%BD%AEtabbar",
          children: "示例10"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "indices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<Array<number>>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需预加载的子节点的下标数组。  默认值：空数组。"
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
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载完成后触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter invalid. Possible causes: 1. The parameter type is not Array<number>; 2. The parameter is an empty array; 3. The parameter contains an invalid index."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settabbartranslate13",
      children: "setTabBarTranslate13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTabBarTranslate(translate: TranslateOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的平移距离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61712)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#bindtabstoscrollable13",
        children: "bindTabsToScrollable"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#bindtabstonestedscrollable13",
        children: "bindTabsToNestedScrollable"
      }), "等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarTranslate接口设置的TabBar平移距离会失效。因此不建议同时使用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarTranslate接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
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
            children: "translate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TranslateOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar的平移距离。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settabbaropacity13",
      children: "setTabBarOpacity13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTabBarOpacity(opacity: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar的不透明度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(696168)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#bindtabstoscrollable13",
        children: "bindTabsToScrollable"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#bindtabstonestedscrollable13",
        children: "bindTabsToNestedScrollable"
      }), "等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarOpacity接口设置的TabBar不透明度会失效。因此不建议同时使用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarOpacity接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
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
            children: "opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar的不透明度，取值范围为[0.0, 1.0]，设置的值小于0.0时，按0.0处理，设置的值大于1.0时，按1.0处理。  默认值：1.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置tabbar的布局模式",
      children: "示例1（设置TabBar的布局模式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过barMode分别实现了页签均分布局和以实际长度布局，且展示了当页签布局长度之和超过了TabBar总长度后可滑动的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State text: string = '文本';\n  @State barMode: BarMode = BarMode.Fixed;\n\n  build() {\n    Column() {\n      Row() {\n        Button('文本增加 ')\n          .width('47%')\n          .height(50)\n          .onClick((event?: ClickEvent) => {\n            this.text += '文本增加';\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n\n        Button('文本重置')\n          .width('47%')\n          .height(50)\n          .onClick((event?: ClickEvent) => {\n            this.text = '文本';\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('BarMode.Fixed')\n          .width('47%')\n          .height(50)\n          .onClick((event?: ClickEvent) => {\n            this.barMode = BarMode.Fixed;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n\n        Button('BarMode.Scrollable')\n          .width('47%')\n          .height(50)\n          .onClick((event?: ClickEvent) => {\n            this.barMode = BarMode.Scrollable;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar(SubTabBarStyle.of(this.text))\n      }\n      .height('60%')\n      .backgroundColor(0xf1f3f5)\n      .barMode(this.barMode)\n    }\n    .width('100%')\n    .height(500)\n    .padding('24vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544279)/* ["default"] */.A) + "",
        width: "497",
        height: "632"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置scrollable模式下的tabbar的布局样式",
      children: "示例2（设置Scrollable模式下的TabBar的布局样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例实现了barMode的ScrollableBarModeOptions参数，该参数仅在Scrollable模式下有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample6 {\n  private controller: TabsController = new TabsController();\n  @State scrollMargin: number = 0;\n  @State layoutStyle: LayoutStyle = LayoutStyle.ALWAYS_CENTER;\n  @State text: string = '文本';\n\n  build() {\n    Column() {\n      Row() {\n        Button('scrollMargin+10 ' + this.scrollMargin)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.scrollMargin += 10;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('scrollMargin-10 ' + this.scrollMargin)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.scrollMargin -= 10;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('文本增加 ')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.text += '文本增加';\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('文本重置')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.text = '文本';\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('layoutStyle.ALWAYS_CENTER')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .fontSize(15)\n          .onClick((event?: ClickEvent) => {\n            this.layoutStyle = LayoutStyle.ALWAYS_CENTER;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('layoutStyle.ALWAYS_AVERAGE_SPLIT')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .fontSize(15)\n          .onClick((event?: ClickEvent) => {\n            this.layoutStyle = LayoutStyle.ALWAYS_AVERAGE_SPLIT;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('layoutStyle.SPACE_BETWEEN_OR_CENTER')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .fontSize(15)\n          .onClick((event?: ClickEvent) => {\n            this.layoutStyle = LayoutStyle.SPACE_BETWEEN_OR_CENTER;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar(SubTabBarStyle.of(this.text))\n      }\n      .animationDuration(300)\n      .height('60%')\n      .backgroundColor(0xf1f3f5)\n      .barMode(BarMode.Scrollable, { margin: this.scrollMargin, nonScrollableLayoutStyle: this.layoutStyle })\n    }\n    .width('100%')\n    .height(500)\n    .margin({ top: 5 })\n    .padding('24vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249399)/* ["default"] */.A) + "",
        width: "446",
        height: "752"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义页签切换联动",
      children: "示例3（自定义页签切换联动）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过onAnimationStart、onChange实现切换时自定义tabBar和TabContent的联动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  private controller: TabsController = new TabsController();\n\n  @Builder tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.selectedIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.selectedIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar(this.tabBuilder(0, 'green'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar(this.tabBuilder(1, 'blue'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar(this.tabBuilder(2, 'yellow'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar(this.tabBuilder(3, 'pink'))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(56)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        // currentIndex控制TabContent显示页签\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        if (index === targetIndex) {\n          return;\n        }\n        // selectedIndex控制自定义TabBar内Image和Text颜色切换\n        this.selectedIndex = targetIndex;\n      })\n      .width(360)\n      .height(296)\n      .margin({ top: 52 })\n      .backgroundColor('#F1F3F5')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76000)/* ["default"] */.A) + "",
        width: "392",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4分割线基本属性",
      children: "示例4（分割线基本属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过divider实现了分割线各种属性的展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsDivider1 {\n  private controller1: TabsController = new TabsController();\n  @State dividerColor: string = 'red';\n  @State strokeWidth: number = 2;\n  @State startMargin: number = 0;\n  @State endMargin: number = 0;\n  @State nullFlag: boolean = false;\n\n  build() {\n    Column() {\n      Tabs({ controller: this.controller1 }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar('pink')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n        }.tabBar('yellow')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar('blue')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Red)\n        }.tabBar('red')\n      }\n      .vertical(true)\n      .scrollable(true)\n      .barMode(BarMode.Fixed)\n      .barWidth(70)\n      .barHeight(200)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        console.info(index.toString());\n      })\n      .height('200vp')\n      .margin({ bottom: '12vp' })\n      .divider(this.nullFlag ? null : {\n        strokeWidth: this.strokeWidth,\n        color: this.dividerColor,\n        startMargin: this.startMargin,\n        endMargin: this.endMargin\n      })\n\n      Button('常规Divider').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.nullFlag = false;\n          this.strokeWidth = 2;\n          this.dividerColor = 'red';\n          this.startMargin = 0;\n          this.endMargin = 0;\n        })\n      Button('空Divider').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.nullFlag = true;\n        })\n      Button('颜色变为蓝色').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.dividerColor = 'blue';\n        })\n      Button('宽度增加').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.strokeWidth += 2;\n        })\n      Button('宽度减小').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          if (this.strokeWidth > 2) {\n            this.strokeWidth -= 2;\n          }\n        })\n      Button('上边距增加').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.startMargin += 2;\n        })\n      Button('上边距减少').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          if (this.startMargin > 2) {\n            this.startMargin -= 2;\n          }\n        })\n      Button('下边距增加').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          this.endMargin += 2;\n        })\n      Button('下边距减少').width('100%').margin({ bottom: '12vp' })\n        .onClick(() => {\n          if (this.endMargin > 2) {\n            this.endMargin -= 2;\n          }\n        })\n    }.padding({ top: '24vp', left: '24vp', right: '24vp' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10341)/* ["default"] */.A) + "",
        width: "356",
        height: "704"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置tabbar渐隐",
      children: "示例5（设置TabBar渐隐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过fadingEdge实现了切换子页签渐隐和不渐隐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsOpaque {\n  @State message: string = 'Hello World';\n  private controller: TabsController = new TabsController();\n  private controller1: TabsController = new TabsController();\n  @State selfFadingFade: boolean = true;\n\n  build() {\n    Column() {\n      Button('子页签设置渐隐').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          this.selfFadingFade = true;\n        })\n      Button('子页签设置不渐隐').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          this.selfFadingFade = false;\n        })\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar('pink')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n        }.tabBar('yellow')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar('blue')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n      }\n      .vertical(false)\n      .scrollable(true)\n      .barMode(BarMode.Scrollable)\n      .barHeight(80)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        console.info(index.toString());\n      })\n      .fadingEdge(this.selfFadingFade)\n      .height('30%')\n      .width('100%')\n\n      Tabs({ barPosition: BarPosition.Start, controller: this.controller1 }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar('pink')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n        }.tabBar('yellow')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar('blue')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar('green')\n      }\n      .vertical(true)\n      .scrollable(true)\n      .barMode(BarMode.Scrollable)\n      .barHeight(200)\n      .barWidth(80)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        console.info(index.toString());\n      })\n      .fadingEdge(this.selfFadingFade)\n      .height('30%')\n      .width('100%')\n    }\n    .padding({ top: '24vp', left: '24vp', right: '24vp' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641875)/* ["default"] */.A) + "",
        width: "398",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置tabbar叠加在tabcontent内容上",
      children: "示例6（设置TabBar叠加在TabContent内容上）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过barOverlap实现了TabBar是否背后变模糊并叠加在TabContent之上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct barHeightTest {\n  @State arr: number[] = [0, 1, 2, 3];\n  @State barOverlap: boolean = true;\n\n  build() {\n    Column() {\n      Text(`barOverlap ${this.barOverlap}`).fontSize(16)\n      Button('barOverlap变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          if (this.barOverlap) {\n            this.barOverlap = false;\n          } else {\n            this.barOverlap = true;\n          }\n        })\n\n      Tabs({ barPosition: BarPosition.End }) {\n        TabContent() {\n          Column() {\n            List({ space: 10 }) {\n              ForEach(this.arr, (item: number) => {\n                ListItem() {\n                  Text('item' + item).width('80%').height(200).fontSize(16).textAlign(TextAlign.Center).backgroundColor('#fff8b81e')\n                }\n              }, (item: string) => item)\n            }.width('100%').height('100%')\n            .lanes(2).alignListItem(ListItemAlign.Center)\n          }.width('100%').height('100%')\n          .backgroundColor(Color.Pink)\n        }\n        .tabBar(new BottomTabBarStyle($r('sys.media.ohos_icon_mask_svg'), '测试0'))\n      }\n      .scrollable(false)\n      .height('60%')\n      .barOverlap(this.barOverlap)\n    }\n    .height(500)\n    .padding({ top: '24vp', left: '24vp', right: '24vp' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647991)/* ["default"] */.A) + "",
        width: "378",
        height: "423"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置tabbar栅格化可见区域",
      children: "示例7（设置TabBar栅格化可见区域）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过barGridAlign实现了以栅格化方式设置TabBar的可见区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample5 {\n  private controller: TabsController = new TabsController();\n  @State gridMargin: number = 10;\n  @State gridGutter: number = 10;\n  @State sm: number = -2;\n  @State clickedContent: string = '';\n\n  build() {\n    Column() {\n      Row() {\n        Button('gridMargin+10 ' + this.gridMargin)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.gridMargin += 10;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('gridMargin-10 ' + this.gridMargin)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.gridMargin -= 10;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('gridGutter+10 ' + this.gridGutter)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.gridGutter += 10;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('gridGutter-10 ' + this.gridGutter)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.gridGutter -= 10;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('sm+2 ' + this.sm)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.sm += 2;\n          })\n          .margin({ right: '6%' })\n        Button('sm-2 ' + this.sm).width('47%').height(50).margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.sm -= 2;\n          })\n      }\n\n      Text('点击内容:' + this.clickedContent).width('100%').height(200).margin({ top: 5 })\n\n\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), '1'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), '2'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), '3'))\n      }\n      .width('350vp')\n      .animationDuration(300)\n      .height('60%')\n      .barGridAlign({ sm: this.sm, margin: this.gridMargin, gutter: this.gridGutter })\n      .backgroundColor(0xf1f3f5)\n      .onTabBarClick((index: number) => {\n        this.clickedContent += 'now index ' + index + ' is clicked\\n';\n      })\n    }\n    .width('100%')\n    .height(500)\n    .margin({ top: 5 })\n    .padding('10vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396957)/* ["default"] */.A) + "",
        width: "492",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8自定义tabs页面切换动画",
      children: "示例8（自定义Tabs页面切换动画）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过customContentTransition实现了自定义Tabs页面的切换动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\ninterface itemType {\n  text: string,\n  backgroundColor: Color\n}\n\n@Entry\n@Component\nstruct TabsCustomAnimationExample {\n  @State data: itemType[] = [\n    {\n      text: 'Red',\n      backgroundColor: Color.Red\n    },\n    {\n      text: 'Yellow',\n      backgroundColor: Color.Yellow\n    },\n    {\n      text: 'Blue',\n      backgroundColor: Color.Blue\n    }];\n  @State opacityList: number[] = [];\n  @State scaleList: number[] = [];\n\n  private durationList: number[] = [];\n  private timeoutList: number[] = [];\n  private customContentTransition: (from: number, to: number) => TabContentAnimatedTransition = (from: number, to: number) => {\n    let tabContentAnimatedTransition = {\n      timeout: this.timeoutList[from],\n      transition: (proxy: TabContentTransitionProxy) => {\n        this.scaleList[from] = 1.0;\n        this.scaleList[to] = 0.5;\n        this.opacityList[from] = 1.0;\n        this.opacityList[to] = 0.5;\n        this.getUIContext()?.animateTo({\n          duration: this.durationList[from],\n          onFinish: () => {\n            proxy.finishTransition();\n          }\n        }, () => {\n          this.scaleList[from] = 0.5;\n          this.scaleList[to] = 1.0;\n          this.opacityList[from] = 0.5;\n          this.opacityList[to] = 1.0;\n        });\n      }\n    } as TabContentAnimatedTransition;\n    return tabContentAnimatedTransition;\n  };\n\n  aboutToAppear(): void {\n    let duration = 1000;\n    let timeout = 1000;\n    for (let i = 1; i <= this.data.length; i++) {\n      this.opacityList.push(1.0);\n      this.scaleList.push(1.0);\n      this.durationList.push(duration * i);\n      this.timeoutList.push(timeout * i);\n    }\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        ForEach(this.data, (item: itemType, index: number) => {\n          TabContent() {}\n          .tabBar(item.text)\n          .backgroundColor(item.backgroundColor)\n          // 自定义动画变化透明度、缩放页面等\n          .opacity(this.opacityList[index])\n          .scale({ x: this.scaleList[index], y: this.scaleList[index] })\n        })\n      }\n      .backgroundColor(0xf1f3f5)\n      .width('100%')\n      .height(500)\n      .customContentTransition(this.customContentTransition)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(121856)/* ["default"] */.A) + "",
        width: "348",
        height: "489"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9页面切换拦截",
      children: "示例9（页面切换拦截）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过onContentWillChange实现了自定义页面手势滑动切换拦截。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State selectedIndex: number = 2;\n  @State currentIndex: number = 2;\n  private controller: TabsController = new TabsController();\n\n  @Builder tabBuilder(title: string,targetIndex: number) {\n    Column(){\n      // $r('app.media.star_fill')需要替换为开发者所需的图像资源文件\n      // $r('app.media.star')需要替换为开发者所需的图像资源文件\n      Image(this.selectedIndex === targetIndex ? $r('app.media.star_fill') : $r('app.media.star'))\n        .width(24)\n        .height(24)\n        .margin({ bottom: 4 })\n        .objectFit(ImageFit.Contain)\n      Text(title).fontColor(this.selectedIndex === targetIndex ? '#1698CE' : '#6B6B6B')\n    }.width('100%')\n    .height(50)\n    .justifyContent(FlexAlign.Center)\n  }\n  \n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column(){\n            Text('首页的内容')\n          }.width('100%').height('100%').backgroundColor('#00CB87').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('首页',0))\n\n        TabContent() {\n          Column(){\n            Text('发现的内容')\n          }.width('100%').height('100%').backgroundColor('#007DFF').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('发现',1))\n\n        TabContent() {\n          Column(){\n            Text('推荐的内容')\n          }.width('100%').height('100%').backgroundColor('#FFBF00').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('推荐',2))\n\n        TabContent() {\n          Column(){\n            Text('我的内容')\n          }.width('100%').height('100%').backgroundColor('#E67C92').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('我的',3))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(60)\n      .animationDuration(0)\n      .onChange((index: number) => {\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .width(360)\n      .height(600)\n      .backgroundColor('#F1F3F5')\n      .scrollable(true)\n      .onContentWillChange((currentIndex, comingIndex) => {\n        if (comingIndex == 2) {\n          return false;\n        }\n        return true;\n      })\n\n      Button('动态修改index').width('50%').margin({ top: 20 })\n        .onClick(()=>{\n          this.currentIndex = (this.currentIndex + 1) % 4;\n        })\n\n      Button('changeIndex').width('50%').margin({ top: 20 })\n        .onClick(()=>{\n          this.currentIndex = (this.currentIndex + 1) % 4;\n          this.controller.changeIndex(this.currentIndex);\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523043)/* ["default"] */.A) + "",
        width: "354",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10自定义tabbar切换动画",
      children: "示例10（自定义TabBar切换动画）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过onChange、onAnimationStart、onAnimationEnd、onGestureSwipe等接口实现了自定义TabBar的切换动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { Configuration, UIAbility } from '@kit.AbilityKit';\nimport { i18n } from '@kit.LocalizationKit';\nimport { CommonUtil } from '../common/CommonUtil';\n\nexport default class EntryAbility extends UIAbility {\n  onConfigurationUpdate(newConfig: Configuration): void {\n    // 监听系统配置变化\n    if (newConfig.language) {\n      CommonUtil.setIsRTL(i18n.isRTL(newConfig.language));\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CommonUtil.ets\nexport class CommonUtil {\n  private static isRTL: boolean = false;\n\n  public static setIsRTL(isRTL: boolean): void {\n    CommonUtil.isRTL = isRTL;\n  }\n\n  public static getIsRTL(): boolean {\n    return CommonUtil.isRTL;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { CommonUtil } from '../common/CommonUtil';\n\n@Entry\n@Component\nstruct TabsExample {\n  @State colorArray: [string, string][] =\n    [['green', '#00CB87'], ['blue', '#007DFF'], ['yellow', '#FFBF00'], ['pink', '#E67C92']];\n  @State currentIndex: number = 0;\n  @State animationDuration: number = 300;\n  @State indicatorLeftMargin: number = 0;\n  @State indicatorWidth: number = 0;\n  private tabsWidth: number = 0;\n  private textInfos: [number, number][] = [];\n  private isStartAnimateTo: boolean = false;\n\n  aboutToAppear():void {\n    for (let i = 0; i < this.colorArray.length; i++) {\n      this.textInfos.push([0, 0]);\n    }\n  }\n\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontSize(16)\n        .fontColor(this.currentIndex === index ? '#007DFF' : '#182431')\n        .fontWeight(this.currentIndex === index ? 500 : 400)\n        .id(index.toString())\n        .onAreaChange((oldValue: Area, newValue: Area) => {\n          this.textInfos[index] = [newValue.globalPosition.x as number, newValue.width as number];\n          if (!this.isStartAnimateTo && this.currentIndex === index && this.tabsWidth > 0) {\n            this.setIndicatorAttr(this.textInfos[this.currentIndex][0], this.textInfos[this.currentIndex][1]);\n          }\n        })\n    }.width('100%')\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Tabs({ barPosition: BarPosition.Start }) {\n        ForEach(this.colorArray, (item: [string, string], index:number) => {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(item[1])\n          }.tabBar(this.tabBuilder(index, item[0]))\n        })\n      }\n      .onAreaChange((oldValue: Area, newValue: Area)=> {\n        this.tabsWidth = newValue.width as number;\n        if (!this.isStartAnimateTo) {\n          this.setIndicatorAttr(this.textInfos[this.currentIndex][0], this.textInfos[this.currentIndex][1]);\n        }\n      })\n      .barWidth('100%')\n      .barHeight(56)\n      .width('100%')\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .animationDuration(this.animationDuration)\n      .onChange((index: number) => {\n        this.currentIndex = index; // 监听索引index的变化，实现页签内容的切换。\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        // 切换动画开始时触发该回调。下划线跟着页面一起滑动，同时宽度渐变。\n        this.currentIndex = targetIndex;\n        this.startAnimateTo(this.animationDuration, this.textInfos[targetIndex][0], this.textInfos[targetIndex][1]);\n      })\n      .onAnimationEnd((index: number, event: TabsAnimationEvent) => {\n        // 切换动画结束时触发该回调。下划线动画停止。\n        let currentIndicatorInfo = this.getCurrentIndicatorInfo(index, event);\n        this.startAnimateTo(0, currentIndicatorInfo.left, currentIndicatorInfo.width);\n      })\n      .onGestureSwipe((index: number, event: TabsAnimationEvent) => {\n        // 在页面跟手滑动过程中，逐帧触发该回调。\n        let currentIndicatorInfo = this.getCurrentIndicatorInfo(index, event);\n        this.currentIndex = currentIndicatorInfo.index;\n        this.setIndicatorAttr(currentIndicatorInfo.left, currentIndicatorInfo.width);\n      })\n\n      Column()\n        .height(2)\n        .width(this.indicatorWidth)\n        .margin({ start: LengthMetrics.vp(this.indicatorLeftMargin), top: LengthMetrics.vp(48) })\n        .backgroundColor('#007DFF')\n    }.width('100%')\n  }\n\n  private getCurrentIndicatorInfo(index: number, event: TabsAnimationEvent): Record<string, number> {\n    let nextIndex = index;\n    if (index > 0 && (CommonUtil.getIsRTL() ? event.currentOffset < 0 : event.currentOffset > 0)) {\n      nextIndex--;\n    } else if (index < this.textInfos.length - 1 &&\n        (CommonUtil.getIsRTL() ? event.currentOffset > 0 : event.currentOffset < 0)) {\n      nextIndex++;\n    }\n    let indexInfo = this.textInfos[index];\n    let nextIndexInfo = this.textInfos[nextIndex];\n    let swipeRatio = Math.abs(event.currentOffset / this.tabsWidth);\n    let currentIndex = swipeRatio > 0.5 ? nextIndex : index; // 页面滑动超过一半，tabBar切换到下一页。\n    let currentLeft = indexInfo[0] + (nextIndexInfo[0] - indexInfo[0]) * swipeRatio;\n    let currentWidth = indexInfo[1] + (nextIndexInfo[1] - indexInfo[1]) * swipeRatio;\n    return { 'index': currentIndex, 'left': currentLeft, 'width': currentWidth };\n  }\n\n  private startAnimateTo(duration: number, leftMargin: number, width: number) {\n    this.isStartAnimateTo = true;\n    this.getUIContext()?.animateTo({\n      duration: duration, // 动画时长\n      curve: Curve.Linear, // 动画曲线\n      iterations: 1, // 播放次数\n      playMode: PlayMode.Normal, // 动画模式\n      onFinish: () => {\n        this.isStartAnimateTo = false;\n        console.info('play end');\n      }\n    }, () => {\n      this.setIndicatorAttr(leftMargin, width);\n    });\n  }\n\n  private setIndicatorAttr(leftMargin: number, width: number) {\n    this.indicatorWidth = width;\n    if (CommonUtil.getIsRTL()) {\n      this.indicatorLeftMargin = this.tabsWidth - leftMargin - width;\n    } else {\n      this.indicatorLeftMargin = leftMargin;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(642191)/* ["default"] */.A) + "",
        width: "354",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11预加载子节点",
      children: "示例11（预加载子节点）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过preloadItems接口实现了预加载指定子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct TabsPreloadItems {\n  @State currentIndex: number = 1;\n  private tabsController: TabsController = new TabsController();\n\n  build() {\n    Column() {\n      Tabs({ index: this.currentIndex, controller: this.tabsController }) {\n        TabContent() {\n          MyComponent({ color: '#00CB87' })\n        }.tabBar(SubTabBarStyle.of('green'))\n\n        TabContent() {\n          MyComponent({ color: '#007DFF' })\n        }.tabBar(SubTabBarStyle.of('blue'))\n\n        TabContent() {\n          MyComponent({ color: '#FFBF00' })\n        }.tabBar(SubTabBarStyle.of('yellow'))\n\n        TabContent() {\n          MyComponent({ color: '#E67C92' })\n        }.tabBar(SubTabBarStyle.of('pink'))\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .onChange((index: number) => {\n        this.currentIndex = index;\n      })\n\n      Button('preload items: [0, 2, 3]')\n        .margin(5)\n        .onClick(() => {\n          // 预加载第0、2、3个子节点，提高滑动或点击切换至这些节点时的性能\n          this.tabsController.preloadItems([0, 2, 3])\n            .then(() => {\n              console.info('preloadItems success.');\n            })\n            .catch((error: BusinessError) => {\n              console.error('preloadItems failed, error code: ' + error.code + ', error message: ' + error.message);\n            })\n        })\n    }\n  }\n}\n\n@Component\nstruct MyComponent {\n  private color: string = '';\n\n  aboutToAppear(): void {\n    console.info('aboutToAppear backgroundColor:' + this.color);\n  }\n\n  aboutToDisappear(): void {\n    console.info('aboutToDisappear backgroundColor:' + this.color);\n  }\n\n  build() {\n    Column()\n      .width('100%')\n      .height('100%')\n      .backgroundColor(this.color)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12设置tabbar平移距离和不透明度",
      children: "示例12（设置TabBar平移距离和不透明度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过setTabBarTranslate、setTabBarOpacity等接口设置了TabBar的平移距离和不透明度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  private controller: TabsController = new TabsController();\n\n  build() {\n    Column() {\n      Button('设置TabBar的平移距离').margin({ top: 20 })\n        .onClick(() => {\n          this.controller.setTabBarTranslate({ x: -20, y: -20 });\n        })\n\n      Button('设置TabBar的透明度').margin({ top: 20 })\n        .onClick(() => {\n          this.controller.setTabBarOpacity(0.5);\n        })\n\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar(BottomTabBarStyle.of($r('app.media.startIcon'), 'green'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar(BottomTabBarStyle.of($r('app.media.startIcon'), 'blue'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar(BottomTabBarStyle.of($r('app.media.startIcon'), 'yellow'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar(BottomTabBarStyle.of($r('app.media.startIcon'), 'pink'))\n      }\n      .width(360)\n      .height(296)\n      .margin({ top: 20 })\n      .barBackgroundColor('#F1F3F5')\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706303)/* ["default"] */.A) + "",
        width: "346",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13页面懒加载和释放",
      children: "示例13（页面懒加载和释放）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过使用自定义TabBar与Swiper配合LazyForEach实现页面懒加载和释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyDataSource implements IDataSource {\n  private list: number[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener() {\n  }\n}\n\n@Entry\n@Component\nstruct TabsSwiperExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  private list: number[] = [];\n  private tabsController: TabsController = new TabsController();\n  private swiperController: SwiperController = new SwiperController();\n  private swiperData: MyDataSource = new MyDataSource([]);\n\n  aboutToAppear(): void {\n    for (let i = 0; i <= 9; i++) {\n      this.list.push(i);\n    }\n    this.swiperData = new MyDataSource(this.list);\n  }\n\n  @Builder tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.currentIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.currentIndex === index ? 1 : 0)\n    }.width('20%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {\n        ForEach(this.list, (item: number) => {\n          TabContent().tabBar(this.tabBuilder(item, '页签 ' + this.list[item]))\n        })\n      }\n      .onTabBarClick((index: number) => {\n        this.currentIndex = index;\n        this.swiperController.changeIndex(index, true);\n      })\n      .barMode(BarMode.Scrollable)\n      .backgroundColor('#F1F3F5')\n      .height(56)\n      .width('100%')\n\n      Swiper(this.swiperController) {\n        LazyForEach(this.swiperData, (item: string) => {\n          Text(item.toString())\n            .onAppear(()=>{\n              console.info('onAppear ' + item.toString());\n            })\n            .onDisAppear(()=>{\n              console.info('onDisAppear ' + item.toString());\n            })\n            .width('100%')\n            .height('100%')\n            .backgroundColor(0xAFEEEE)\n            .textAlign(TextAlign.Center)\n            .fontSize(30)\n        }, (item: string) => item)\n      }\n      .loop(false)\n      .onChange((index: number) => {\n        this.currentIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, extraInfo: SwiperAnimationEvent) => {\n        this.currentIndex = targetIndex;\n        this.tabsController.changeIndex(targetIndex);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543183)/* ["default"] */.A) + "",
        width: "354",
        height: "706"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14设置翻页动效",
      children: "示例14（设置翻页动效）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过设置animationMode属性，实现了翻页的动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State currentIndex: number = 0;\n  @State currentAnimationMode: AnimationMode = AnimationMode.CONTENT_FIRST;\n  private controller: TabsController = new TabsController();\n  private data: number[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      this.data.push(i);\n    }\n  }\n\n  @Builder\n  tabBuilder(title: string,targetIndex: number) {\n    Column(){\n      Text(title).fontColor(this.currentIndex === targetIndex ? '#FF0000' : '#6B6B6B')\n    }.width('100%')\n    .height(50)\n    .justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.End, controller: this.controller, index: this.currentIndex }) {\n        ForEach(this.data, (item: string) => {\n          TabContent() {\n            Column(){\n              Text('' + item)\n            }.width('100%').height('100%').backgroundColor('#00CB87').justifyContent(FlexAlign.Center)\n          }.tabBar(this.tabBuilder('P' + item, parseInt(item)))\n        }, (item: string) => item)\n      }\n      .barWidth(360)\n      .barHeight(60)\n      .animationMode(this.currentAnimationMode)\n      .animationDuration(4000)\n      .onChange((index: number) => {\n        this.currentIndex = index;\n      })\n      .width(360)\n      .height(120)\n      .backgroundColor('#F1F3F5')\n\n      Text('AnimationMode:' + AnimationMode[this.currentAnimationMode])\n\n      Button('AnimationMode').width('50%').margin({ top: 1 }).height(25)\n        .onClick(()=>{\n          if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST) {\n            this.currentAnimationMode = AnimationMode.ACTION_FIRST;\n          } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST) {\n            this.currentAnimationMode = AnimationMode.NO_ANIMATION;\n          } else if (this.currentAnimationMode === AnimationMode.NO_ANIMATION) {\n            this.currentAnimationMode = AnimationMode.CONTENT_FIRST_WITH_JUMP;\n          } else if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST_WITH_JUMP) {\n            this.currentAnimationMode = AnimationMode.ACTION_FIRST_WITH_JUMP;\n          } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST_WITH_JUMP) {\n            this.currentAnimationMode = AnimationMode.CONTENT_FIRST;\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276450)/* ["default"] */.A) + "",
        width: "346",
        height: "166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15页签超出tabbar区域显示",
      children: "示例15（页签超出TabBar区域显示）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tabsoptions15",
        children: "TabsOptions"
      }), "中的barModifier设置tabBar的clip属性实现页签超出tabBar区域显示效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，在TabsOptions中新增了barModifier接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { CommonModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TabsBarModifierExample {\n  @State selectedIndex: number = 2;\n  @State currentIndex: number = 2;\n  @State isClip: boolean = false;\n  @State tabBarModifier: CommonModifier = new CommonModifier();\n  private controller: TabsController = new TabsController();\n\n  aboutToAppear(): void {\n    this.tabBarModifier.clip(this.isClip);\n  }\n\n  @Builder\n  tabBuilder(title: string, targetIndex: number) {\n    Column() {\n      Image($r('app.media.startIcon')).width(30).height(30)\n      Text(title).fontColor(this.selectedIndex === targetIndex ? '#1698CE' : '#6B6B6B')\n    }.width('100%')\n    .height(50)\n    .justifyContent(FlexAlign.Center)\n    .offset({ y: this.selectedIndex === targetIndex ? -15 : 0 })\n  }\n\n  build() {\n    Column() {\n      Tabs({\n        barPosition: BarPosition.End,\n        index: this.currentIndex,\n        controller: this.controller,\n        barModifier: this.tabBarModifier\n      }) {\n        TabContent() {\n          Column() {\n            Text('首页的内容')\n          }.width('100%').height('100%').backgroundColor('#00CB87').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('首页', 0))\n\n        TabContent() {\n          Column() {\n            Text('发现的内容')\n          }.width('100%').height('100%').backgroundColor('#007DFF').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('发现', 1))\n\n        TabContent() {\n          Column() {\n            Text('推荐的内容')\n          }.width('100%').height('100%').backgroundColor('#FFBF00').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('推荐', 2))\n\n        TabContent() {\n          Column() {\n            Text('我的内容')\n          }.width('100%').height('100%').backgroundColor('#E67C92').justifyContent(FlexAlign.Center)\n        }.tabBar(this.tabBuilder('我的', 3))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(340)\n      .barHeight(60)\n      .onChange((index: number) => {\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .width(340)\n      .height(400)\n      .backgroundColor('#F1F3F5')\n      .scrollable(true)\n\n      Button('isClip: ' + this.isClip)\n        .margin({ top: 30 })\n        .onClick(() => {\n          this.isClip = !this.isClip;\n          this.tabBarModifier.clip(this.isClip);\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(51824)/* ["default"] */.A) + "",
        width: "464",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16页签对齐布局",
      children: "示例16（页签对齐布局）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tabsoptions15",
        children: "TabsOptions"
      }), "中的barModifier设置tabBar的align属性实现页签对齐布局效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，在TabsOptions中新增了barModifier接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { CommonModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TabsBarModifierExample {\n  private controller: TabsController = new TabsController();\n  @State text: string = '文本';\n  @State isVertical: boolean = false;\n  @State tabBarModifier: CommonModifier = new CommonModifier();\n\n  build() {\n    Column() {\n      Row() {\n        Button('Alignment.Start ')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabBarModifier.align(Alignment.Start);\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('Alignment.End')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabBarModifier.align(Alignment.End);\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('Alignment.Center')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabBarModifier.align(Alignment.Center);\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('isVertical: ' + this.isVertical)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.isVertical = !this.isVertical;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('Alignment.Top')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabBarModifier.align(Alignment.Top);\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('Alignment.Bottom')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabBarModifier.align(Alignment.Bottom);\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Tabs({ barPosition: BarPosition.End, controller: this.controller, barModifier: this.tabBarModifier }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(SubTabBarStyle.of(this.text))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar(SubTabBarStyle.of(this.text))\n      }\n      .vertical(this.isVertical)\n      .height('60%')\n      .backgroundColor(0xf1f3f5)\n      .barMode(BarMode.Scrollable)\n    }\n    .width('100%')\n    .height(500)\n    .margin({ top: 5 })\n    .padding('24vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380333)/* ["default"] */.A) + "",
        width: "461",
        height: "703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17tabs与tabbar同步切换",
      children: "示例17（Tabs与TabBar同步切换）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onselected18",
        children: "onSelected"
      }), "接口，实现了Tabs与TabBar的同步切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，新增了onSelected接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  private controller: TabsController = new TabsController();\n\n  @Builder tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.selectedIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.selectedIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar(this.tabBuilder(0, 'green'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar(this.tabBuilder(1, 'blue'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar(this.tabBuilder(2, 'yellow'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar(this.tabBuilder(3, 'pink'))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(56)\n      .animationDuration(400)\n      .animationMode(AnimationMode.CONTENT_FIRST)\n      .onChange((index: number) => {\n        console.info('onChange index:' + index);\n        this.currentIndex = index;\n      })\n      .onSelected((index: number) => {\n        console.info('onSelected index:' + index);\n        this.selectedIndex = index;\n      })\n      .onUnselected((index: number) => {\n        console.info('onUnselected index:' + index);\n      })\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#F1F3F5')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889015)/* ["default"] */.A) + "",
        width: "527",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18释放tabs子组件",
      children: "示例18（释放Tabs子组件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cachedmaxcount19",
        children: "cachedMaxCount"
      }), "属性，实现了Tabs子组件的释放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，新增了cachedMaxCount接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TabsExample {\n  build() {\n    Tabs() {\n      TabContent() {\n        MyComponent({ color: '#00CB87' })\n      }.tabBar(SubTabBarStyle.of('green'))\n\n      TabContent() {\n        MyComponent({ color: '#007DFF' })\n      }.tabBar(SubTabBarStyle.of('blue'))\n\n      TabContent() {\n        MyComponent({ color: '#FFBF00' })\n      }.tabBar(SubTabBarStyle.of('yellow'))\n\n      TabContent() {\n        MyComponent({ color: '#E67C92' })\n      }.tabBar(SubTabBarStyle.of('pink'))\n    }\n    .width(360)\n    .height(296)\n    .backgroundColor('#F1F3F5')\n    .cachedMaxCount(1, TabsCacheMode.CACHE_BOTH_SIDE)\n  }\n}\n\n@Component\nstruct MyComponent {\n  private color: string = '';\n\n  aboutToAppear(): void {\n    console.info('aboutToAppear backgroundColor:' + this.color);\n  }\n\n  aboutToDisappear(): void {\n    console.info('aboutToDisappear backgroundColor:' + this.color);\n  }\n\n  build() {\n    Column()\n      .width('100%')\n      .height('100%')\n      .backgroundColor(this.color)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19设置tabbar背景模糊效果",
      children: "示例19（设置TabBar背景模糊效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例分别通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#barbackgroundblurstyle18",
        children: "barBackgroundBlurStyle"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#barbackgroundeffect18",
        children: "barBackgroundEffect"
      }), "设置TabsBar页签栏的背景模糊样式和效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，新增了barBackgroundBlurStyle和barBackgroundEffect接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  build() {\n    Column() {\n      // barBackgroundBlurStyle 可以通过枚举值的方式设置模糊参数\n      Stack() {\n        Image($r('app.media.startIcon'))\n        Tabs() {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#00CB87')\n          }.tabBar('green')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#007DFF')\n          }.tabBar('blue')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#FFBF00')\n          }.tabBar('yellow')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#E67C92')\n          }.tabBar('pink')\n        }\n        .barBackgroundBlurStyle(BlurStyle.COMPONENT_THICK,\n          { colorMode: ThemeColorMode.LIGHT, adaptiveColor: AdaptiveColor.DEFAULT, scale: 1.0 })\n      }\n      .width(300)\n      .height(300)\n      .margin(10)\n\n      // barBackgroundEffect 可以自定义设置tabBar页签栏的模糊半径、亮度、饱和度等参数\n      Stack() {\n        Image($r('app.media.startIcon'))\n        Tabs() {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#00CB87')\n          }.tabBar('green')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#007DFF')\n          }.tabBar('blue')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#FFBF00')\n          }.tabBar('yellow')\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor('#E67C92')\n          }.tabBar('pink')\n        }\n        .barBackgroundEffect({ radius: 20, brightness: 0.6, saturation: 15 })\n      }\n      .width(300)\n      .height(300)\n      .margin(10)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(717869)/* ["default"] */.A) + "",
        width: "468",
        height: "944"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置边缘滑动效果",
      children: "示例20（设置边缘滑动效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#edgeeffect12",
        children: "edgeEffect"
      }), "实现了不同的边缘回弹效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsExample {\n  @State edgeEffect: EdgeEffect = EdgeEffect.Spring;\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink')\n      }\n      .width(360)\n      .height(296)\n      .margin({ top: 52 })\n      .backgroundColor('#F1F3F5')\n      .edgeEffect(this.edgeEffect)\n\n      Button('EdgeEffect.Spring').width('50%').margin({ top: 20 })\n        .onClick(() => {\n          this.edgeEffect = EdgeEffect.Spring;\n        })\n\n      Button('EdgeEffect.Fade').width('50%').margin({ top: 20 })\n        .onClick(() => {\n          this.edgeEffect = EdgeEffect.Fade;\n        })\n\n      Button('EdgeEffect.None').width('50%').margin({ top: 20 })\n        .onClick(() => {\n          this.edgeEffect = EdgeEffect.None;\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805711)/* ["default"] */.A) + "",
        width: "349",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21tabs设置翻页动画曲线",
      children: "示例21（Tabs设置翻页动画曲线）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例展示了如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#animationcurve20",
        children: "animationCurve"
      }), "接口设置Tabs翻页动画曲线，并结合animationDuration设置翻页动画的时长。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，新增了animationCurve接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\ninterface TabsItemType {\n  text: string,\n  backgroundColor: ResourceColor\n}\n\n@Entry\n@Component\nstruct TabsExample {\n  private tabsController: TabsController = new TabsController();\n  private curves: (Curve | ICurve) [] = [\n    curves.interpolatingSpring(-1, 1, 328, 34),\n    curves.springCurve(10, 1, 228, 30),\n    curves.cubicBezierCurve(0.25, 0.1, 0.25, 1.0),\n  ];\n  private curveNames: string[] = [\n    'interpolatingSpring(-1, 1, 328, 34)',\n    'springCurve(10, 1, 228, 30)',\n    'cubicBezierCurve(0.25, 0.1, 0.25, 1.0)'\n  ];\n  @State curveIndex: number = 0;\n  private data: TabsItemType[] = [\n    { text: '1', backgroundColor: '#004AAF' },\n    { text: '2', backgroundColor: '#2787D9' },\n    { text: '3', backgroundColor: '#D5D5D5' },\n    { text: '4', backgroundColor: '#707070' },\n    { text: '5', backgroundColor: '#F7F7F7' },\n  ];\n  @State duration: number = 0;\n\n  build() {\n    Column({ space: 2 }) {\n      Tabs({ controller: this.tabsController }) {\n        ForEach(this.data, (item: TabsItemType, index: number) => {\n          TabContent() {\n          }\n          .tabBar(item.text)\n          .backgroundColor(item.backgroundColor)\n        })\n      }\n      .backgroundColor(0xf1f3f5)\n      .width('100%')\n      .height(500)\n      .animationCurve(this.curves[this.curveIndex])\n      .animationDuration(this.duration)\n\n      Column({ space: 2 }) {\n        Text('Curve:' + this.curveNames[this.curveIndex])\n        Row({ space: 2 }) {\n          // 切换动效曲线\n          Button('++').onClick(() => {\n            this.curveIndex = (this.curveIndex + 1) % this.curves.length;\n          })\n          Button('reset').onClick(() => {\n            this.curveIndex = 0;\n          })\n        }\n      }\n      .margin({ left: '10vp' })\n      .width('100%')\n\n      Row({ space: 2 }) {\n        Text('Duration:' + this.duration)\n        // 增加动效时长\n        Button('+100').onClick(() => {\n          this.duration = (this.duration + 100) % 10000;\n        })\n        Button('+1000').onClick(() => {\n          this.duration = (this.duration + 1000) % 10000;\n        })\n        Button('reset').onClick(() => {\n          this.duration = 0;\n        })\n      }\n      .margin({ left: '10vp' })\n      .width('100%')\n    }\n    .margin('10vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293752)/* ["default"] */.A) + "",
        width: "430",
        height: "716"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例22监听tabs页面滑动事件",
      children: "示例22（监听Tabs页面滑动事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例展示了如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oncontentdidscroll23",
        children: "onContentDidScroll"
      }), "接口设置Tabs滑动时的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增onContentDidScroll接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsDidScrollExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  @State didScrollStr: string = '';\n  private controller: TabsController = new TabsController();\n\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.selectedIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.selectedIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Text('滑动页面触发回调')\n        .width(\"80%\")\n        .fontSize(20)\n        .margin(5)\n        .textAlign(TextAlign.Center)\n\n      Text(this.didScrollStr)\n        .width(\"80%\")\n        .fontSize(20)\n        .margin(5)\n        .textAlign(TextAlign.Center)\n\n      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar(this.tabBuilder(0, 'green'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar(this.tabBuilder(1, 'blue'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar(this.tabBuilder(2, 'yellow'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar(this.tabBuilder(3, 'pink'))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(56)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        // currentIndex控制TabContent显示页签\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        if (index === targetIndex) {\n          return;\n        }\n        // selectedIndex控制自定义TabBar内Image和Text颜色切换\n        this.selectedIndex = targetIndex;\n      })\n      .width(360)\n      .height(296)\n      .margin({ top: 15 })\n      .backgroundColor('#F1F3F5')\n      .onContentDidScroll((selectedIndex: number, index: number, position: number, mainAxisLength: number) => {\n        // 监听Tabs页面滑动事件，在该回调中可以实现自定义导航点切换动画等\n        console.info(\"onContentDidScroll selectedIndex: \" + selectedIndex + \", index: \" + index + \", position: \" +\n          position + \", mainAxisLength: \" + mainAxisLength);\n        this.didScrollStr =\n          \"onContentDidScroll selectedIndex: \" + selectedIndex + \", index: \" + index + \", position: \" +\n            position + \", mainAxisLength: \" + mainAxisLength\n      })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(414913)/* ["default"] */.A) + "",
        width: "404",
        height: "540"
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
148319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
242459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
311037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
76000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800028-f1000fa2343092601791d6f8e0ab5e34.gif");

},
763265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
668571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
396957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800030-60aa710e0b1bca5d64a2bbd3936b4441.gif");

},
61712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
647991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479679-d4b6c8959011789dc91709f71254dc24.gif");

},
51824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479683-d3896729bf781dfbb011e23ad74e8d5b.gif");

},
986674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
121856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439725-57f86c030454dbd3553f55340fcc6741.gif");

},
414913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439731-6057e63e7b68e28436bbbf959509aa06.gif");

},
380333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800034-373a30c181b0877df50e1b08e1110371.gif");

},
276450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959682-863f5bf5550238e55a986adea2a18512.gif");

},
125727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
958834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
805711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479685-9de0287233e0bdc3fbeae02063c2fec5.gif");

},
847243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
908580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
523043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959680-3e3934e7ea54457c35906122978f7dd1.gif");

},
755751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479677-edfd874d9847a33326065dc67de6e76c.gif");

},
543183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439727-50f9c3ec7a0f9688851631d89074eba8.gif");

},
544279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959676-5c60b03d1467c2fa27e3005675abafe1.gif");

},
10341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439723-521edadab750255e2885db63b9724ca8.gif");

},
717869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959684-cc18cf9337f118e29c6ff68e2929ed0b.png");

},
293752(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800036-3f885f37910165b7834f116518f3b5cf.gif");

},
696168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
432494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
641875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959678-749def9f2ed2e5f30d826bd6c3d22ca3.gif");

},
706303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800032-770cceabdf48901462b0c1282e9c5a45.gif");

},
889015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439729-ead163abc7d1a7ed90062b3fce7111c0.gif");

},
642191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479681-f5c09b2d04a6b7040492e58008fd5933.gif");

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