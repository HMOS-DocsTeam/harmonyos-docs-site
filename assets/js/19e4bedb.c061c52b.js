"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["701780"], {
727256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_uiobserver_arkts_apis_uicontext_uiobserver_md_19e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-uiobserver-arkts-apis-uicontext-uiobserver-md-19e.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_uiobserver_arkts_apis_uicontext_uiobserver_md_19e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver","title":"Class (UIObserver)","description":"提供UI组件行为变化的无感监听能力。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"Class (UIObserver)","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uiobserver","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-uiobserver"},"sidebar":"ref","previous":{"title":"Class (UIInspector)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiinspector/arkts-apis-uicontext-uiinspector"},"next":{"title":"Interface (AtomicServiceBar)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-atomicservicebar/arkts-apis-uicontext-atomicservicebar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver.md


const frontMatter = {
	title: 'Class (UIObserver)',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uiobserver',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-uiobserver'
};
const contentTitle = 'Class (UIObserver)';

const assets = {

};



const toc = [{
  "value": "on(&#39;navDestinationUpdate&#39;)11+",
  "id": "onnavdestinationupdate11",
  "level": 2
}, {
  "value": "off(&#39;navDestinationUpdate&#39;)11+",
  "id": "offnavdestinationupdate11",
  "level": 2
}, {
  "value": "on(&#39;navDestinationUpdate&#39;)11+",
  "id": "onnavdestinationupdate11-1",
  "level": 2
}, {
  "value": "off(&#39;navDestinationUpdate&#39;)11+",
  "id": "offnavdestinationupdate11-1",
  "level": 2
}, {
  "value": "on(&#39;navDestinationUpdateByUniqueId&#39;)20+",
  "id": "onnavdestinationupdatebyuniqueid20",
  "level": 2
}, {
  "value": "off(&#39;navDestinationUpdateByUniqueId&#39;)20+",
  "id": "offnavdestinationupdatebyuniqueid20",
  "level": 2
}, {
  "value": "on(&#39;scrollEvent&#39;)12+",
  "id": "onscrollevent12",
  "level": 2
}, {
  "value": "off(&#39;scrollEvent&#39;)12+",
  "id": "offscrollevent12",
  "level": 2
}, {
  "value": "on(&#39;scrollEvent&#39;)12+",
  "id": "onscrollevent12-1",
  "level": 2
}, {
  "value": "off(&#39;scrollEvent&#39;)12+",
  "id": "offscrollevent12-1",
  "level": 2
}, {
  "value": "on(&#39;routerPageUpdate&#39;)11+",
  "id": "onrouterpageupdate11",
  "level": 2
}, {
  "value": "off(&#39;routerPageUpdate&#39;)11+",
  "id": "offrouterpageupdate11",
  "level": 2
}, {
  "value": "on(&#39;densityUpdate&#39;)12+",
  "id": "ondensityupdate12",
  "level": 2
}, {
  "value": "off(&#39;densityUpdate&#39;)12+",
  "id": "offdensityupdate12",
  "level": 2
}, {
  "value": "on(&#39;willDraw&#39;)12+",
  "id": "onwilldraw12",
  "level": 2
}, {
  "value": "off(&#39;willDraw&#39;)12+",
  "id": "offwilldraw12",
  "level": 2
}, {
  "value": "on(&#39;didLayout&#39;)12+",
  "id": "ondidlayout12",
  "level": 2
}, {
  "value": "off(&#39;didLayout&#39;)12+",
  "id": "offdidlayout12",
  "level": 2
}, {
  "value": "on(&#39;navDestinationSwitch&#39;)12+",
  "id": "onnavdestinationswitch12",
  "level": 2
}, {
  "value": "off(&#39;navDestinationSwitch&#39;)12+",
  "id": "offnavdestinationswitch12",
  "level": 2
}, {
  "value": "on(&#39;navDestinationSwitch&#39;)12+",
  "id": "onnavdestinationswitch12-1",
  "level": 2
}, {
  "value": "off(&#39;navDestinationSwitch&#39;)12+",
  "id": "offnavdestinationswitch12-1",
  "level": 2
}, {
  "value": "on(&#39;willClick&#39;)12+",
  "id": "onwillclick12",
  "level": 2
}, {
  "value": "off(&#39;willClick&#39;)12+",
  "id": "offwillclick12",
  "level": 2
}, {
  "value": "on(&#39;didClick&#39;)12+",
  "id": "ondidclick12",
  "level": 2
}, {
  "value": "off(&#39;didClick&#39;)12+",
  "id": "offdidclick12",
  "level": 2
}, {
  "value": "on(&#39;willClick&#39;)12+",
  "id": "onwillclick12-1",
  "level": 2
}, {
  "value": "off(&#39;willClick&#39;)12+",
  "id": "offwillclick12-1",
  "level": 2
}, {
  "value": "on(&#39;didClick&#39;)12+",
  "id": "ondidclick12-1",
  "level": 2
}, {
  "value": "off(&#39;didClick&#39;)12+",
  "id": "offdidclick12-1",
  "level": 2
}, {
  "value": "on(&#39;tabContentUpdate&#39;)12+",
  "id": "ontabcontentupdate12",
  "level": 2
}, {
  "value": "off(&#39;tabContentUpdate&#39;)12+",
  "id": "offtabcontentupdate12",
  "level": 2
}, {
  "value": "on(&#39;tabContentUpdate&#39;)12+",
  "id": "ontabcontentupdate12-1",
  "level": 2
}, {
  "value": "off(&#39;tabContentUpdate&#39;)12+",
  "id": "offtabcontentupdate12-1",
  "level": 2
}, {
  "value": "on(&#39;tabChange&#39;)22+",
  "id": "ontabchange22",
  "level": 2
}, {
  "value": "off(&#39;tabChange&#39;)22+",
  "id": "offtabchange22",
  "level": 2
}, {
  "value": "on(&#39;tabChange&#39;)22+",
  "id": "ontabchange22-1",
  "level": 2
}, {
  "value": "off(&#39;tabChange&#39;)22+",
  "id": "offtabchange22-1",
  "level": 2
}, {
  "value": "on(&#39;textChange&#39;)22+",
  "id": "ontextchange22",
  "level": 2
}, {
  "value": "off(&#39;textChange&#39;)22+",
  "id": "offtextchange22",
  "level": 2
}, {
  "value": "on(&#39;textChange&#39;)22+",
  "id": "ontextchange22-1",
  "level": 2
}, {
  "value": "off(&#39;textChange&#39;)22+",
  "id": "offtextchange22-1",
  "level": 2
}, {
  "value": "on(&#39;beforePanStart&#39;)19+",
  "id": "onbeforepanstart19",
  "level": 2
}, {
  "value": "off(&#39;beforePanStart&#39;)19+",
  "id": "offbeforepanstart19",
  "level": 2
}, {
  "value": "on(&#39;afterPanStart&#39;)19+",
  "id": "onafterpanstart19",
  "level": 2
}, {
  "value": "off(&#39;afterPanStart&#39;)19+",
  "id": "offafterpanstart19",
  "level": 2
}, {
  "value": "on(&#39;beforePanEnd&#39;)19+",
  "id": "onbeforepanend19",
  "level": 2
}, {
  "value": "off(&#39;beforePanEnd&#39;)19+",
  "id": "offbeforepanend19",
  "level": 2
}, {
  "value": "on(&#39;afterPanEnd&#39;)19+",
  "id": "onafterpanend19",
  "level": 2
}, {
  "value": "off(&#39;afterPanEnd&#39;)19+",
  "id": "offafterpanend19",
  "level": 2
}, {
  "value": "on(&#39;nodeRenderState&#39;)20+",
  "id": "onnoderenderstate20",
  "level": 2
}, {
  "value": "off(&#39;nodeRenderState&#39;)20+",
  "id": "offnoderenderstate20",
  "level": 2
}, {
  "value": "addGlobalGestureListener20+",
  "id": "addglobalgesturelistener20",
  "level": 2
}, {
  "value": "removeGlobalGestureListener20+",
  "id": "removeglobalgesturelistener20",
  "level": 2
}, {
  "value": "on(&#39;windowSizeLayoutBreakpointChange&#39;)22+",
  "id": "onwindowsizelayoutbreakpointchange22",
  "level": 2
}, {
  "value": "off(&#39;windowSizeLayoutBreakpointChange&#39;)22+",
  "id": "offwindowsizelayoutbreakpointchange22",
  "level": 2
}, {
  "value": "onSwiperContentUpdate22+",
  "id": "onswipercontentupdate22",
  "level": 2
}, {
  "value": "offSwiperContentUpdate22+",
  "id": "offswipercontentupdate22",
  "level": 2
}, {
  "value": "onSwiperContentUpdate22+",
  "id": "onswipercontentupdate22-1",
  "level": 2
}, {
  "value": "offSwiperContentUpdate22+",
  "id": "offswipercontentupdate22-1",
  "level": 2
}, {
  "value": "onRouterPageSizeChange23+",
  "id": "onrouterpagesizechange23",
  "level": 2
}, {
  "value": "offRouterPageSizeChange23+",
  "id": "offrouterpagesizechange23",
  "level": 2
}, {
  "value": "onNavDestinationSizeChange23+",
  "id": "onnavdestinationsizechange23",
  "level": 2
}, {
  "value": "offNavDestinationSizeChange23+",
  "id": "offnavdestinationsizechange23",
  "level": 2
}, {
  "value": "onNavDestinationSizeChangeByUniqueId23+",
  "id": "onnavdestinationsizechangebyuniqueid23",
  "level": 2
}, {
  "value": "offNavDestinationSizeChangeByUniqueId23+",
  "id": "offnavdestinationsizechangebyuniqueid23",
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
        id: "class-uiobserver",
        children: "Class (UIObserver)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供UI组件行为变化的无感监听能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(509743)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 11开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下API需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getuiobserver11",
          children: "getUIObserver()"
        }), "方法获取到UIObserver对象，再通过该对象调用对应方法。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UIObserver仅能监听到本进程内的相关信息，不支持获取跨进程场景的信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationupdate11",
      children: "on('navDestinationUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。返回当前的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件状态。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('navDestinationUpdate', callback)\n// uiObserver.off('navDestinationUpdate', callback)\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      Text(\"pageOne\")\n    }.title(\"pageOne\")\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private stack: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageBuilder(name: string) {\n    PageOne()\n  }\n\n  aboutToAppear() {\n    // 添加监听\n    this.getUIContext().getUIObserver().on('navDestinationUpdate', (info) => {\n      console.info('NavDestination state update', JSON.stringify(info));\n    });\n  }\n\n  aboutToDisappear() {\n    // 取消监听，不选择回调时，取消所有监听的回调\n    this.getUIContext().getUIObserver().off('navDestinationUpdate');\n  }\n\n  build() {\n    Column() {\n      Navigation(this.stack) {\n        Button(\"push\").onClick(() => {\n          // 将PageOne的NavDestination入栈\n          this.stack.pushPath({ name: \"pageOne\" });\n        })\n      }\n      .title(\"Navigation\")\n      .navDestination(this.PageBuilder)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationupdate11",
      children: "off('navDestinationUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消的监听回调，不传参数时，取消所有的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationupdate11",
        children: "on('navDestinationUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationupdate11-1",
      children: "on('navDestinationUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的id监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["{ navigationId: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            }), " }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。返回当前的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件状态。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('navDestinationUpdate', options, callback)\n// uiObserver.off('navDestinationUpdate', options, callback)\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      Text(\"pageOne\")\n    }.title(\"pageOne\")\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private stack: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageBuilder(name: string) {\n    PageOne()\n  }\n\n  aboutToAppear() {\n    // 添加监听，指定Navigation的id\n    this.getUIContext().getUIObserver().on('navDestinationUpdate', { navigationId: \"testId\" }, (info) => {\n      console.info('NavDestination state update', JSON.stringify(info));\n    });\n  }\n\n  aboutToDisappear() {\n    // 取消监听，不选择回调时，取消所有监听的回调\n    this.getUIContext().getUIObserver().off('navDestinationUpdate', { navigationId: \"testId\" });\n  }\n\n  build() {\n    Column() {\n      Navigation(this.stack) {\n        Button(\"push\").onClick(() => {\n          // 将PageOne的NavDestination入栈\n          this.stack.pushPath({ name: \"pageOne\" });\n        })\n      }\n      .id(\"testId\")\n      .title(\"Navigation\")\n      .navDestination(this.PageBuilder)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationupdate11-1",
      children: "off('navDestinationUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的id监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["{ navigationId: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            }), " }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消的监听回调，不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationupdate11-1",
        children: "on('navDestinationUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationupdatebyuniqueid20",
      children: "on('navDestinationUpdateByUniqueId')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的uniqueId监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化，uniqueId可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
        children: "queryNavigationInfo"
      }), "获取。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdateByUniqueId'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navigationUniqueId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的uniqueId，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
              children: "queryNavigationInfo"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。返回当前的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件状态。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的uniqueId，可以触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的状态变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示on('navDestinationUpdateByUniqueId', navigationUniqueId, callback)\n// off('navDestinationUpdateByUniqueId', navigationUniqueId, callback)\n\n@Component\nstruct PageOne {\n  private text = '';\n  private uniqueid = -1;\n  aboutToAppear() {\n    // 获取Navigation的uniqueId\n    let navigationUniqueId = this.queryNavigationInfo()?.uniqueId;\n    if (navigationUniqueId) {\n      this.uniqueid = navigationUniqueId.valueOf();\n    }\n    this.text = JSON.stringify(this.uniqueid);\n    // 添加监听，指定Navigation的uniqueId\n    this.getUIContext().getUIObserver().on('navDestinationUpdateByUniqueId', this.uniqueid, (info) => {\n      console.info('NavDestination state update navigationId', JSON.stringify(info));\n    });\n  }\n  aboutToDisappear() {\n    // 取消监听，不选择回调时，取消所有监听的回调\n    this.getUIContext().getUIObserver().off('navDestinationUpdateByUniqueId', this.uniqueid);\n  }\n  build() {\n    NavDestination() {\n      Text(\"pageOne\")\n      Text('navigationUniqueId是:' + this.text)\n        .width('80%')\n        .height(50)\n        .margin(50)\n        .fontSize(20)\n    }.title(\"pageOne\")\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private stack: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageBuilder(name: string) {\n    PageOne()\n  }\n\n  build() {\n    Column() {\n      Navigation(this.stack) {\n        Button(\"push\").onClick(() => {\n          // 将PageOne的NavDestination入栈\n          this.stack.pushPath({ name: \"pageOne\" });\n        })\n      }\n      .id(\"testId\")\n      .title(\"Navigation\")\n      .navDestination(this.PageBuilder)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationupdatebyuniqueid20",
      children: "off('navDestinationUpdateByUniqueId')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的uniqueId监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件的变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationUpdateByUniqueId'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "组件的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navigationUniqueId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的uniqueId，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
              children: "queryNavigationInfo"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消的监听回调，不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationupdatebyuniqueid20",
        children: "on('navDestinationUpdateByUniqueId')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscrollevent12",
      children: "on('scrollEvent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听所有滚动组件滚动事件的开始和结束。滚动组件包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#scrolleventinfo12",
              children: "ScrollEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回滚动事件的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('scrollEvent', callback)\n// uiObserver.off('scrollEvent', callback)\n// uiObserver.on('scrollEvent', options, callback)\n// uiObserver.off('scrollEvent', options, callback)\n\nimport { UIObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  observer: UIObserver = this.getUIContext().getUIObserver();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7];\n\n  build() {\n    Column() {\n      Column() {\n        Scroll(this.scroller) {\n          Column() {\n            ForEach(this.arr, (item: number) => {\n              Text(item.toString())\n                .width('90%')\n                .height(150)\n                .backgroundColor(0xFFFFFF)\n                .borderRadius(15)\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .margin({ top: 10 })\n            }, (item: string) => item)\n          }.width('100%')\n        }\n        .id('testId')\n        .height('80%')\n      }\n      .width('100%')\n\n      Row() {\n        Button('UIObserver on')\n          .onClick(() => {\n            // 添加监听\n            this.observer.on('scrollEvent', (info) => {\n              console.info('scrollEventInfo', JSON.stringify(info));\n            });\n          })\n        Button('UIObserver off')\n          .onClick(() => {\n            // 取消监听，不选择回调时，取消所有监听的回调\n            this.observer.off('scrollEvent');\n          })\n      }\n\n      Row() {\n        Button('UIObserverWithId on')\n          .onClick(() => {\n            // 添加监听，指定滚动组件的id\n            this.observer.on('scrollEvent', { id: 'testId' }, (info) => {\n              console.info('scrollEventInfo', JSON.stringify(info));\n            });\n          })\n        Button('UIObserverWithId off')\n          .onClick(() => {\n            // 取消监听，不选择回调时，取消所有监听的回调\n            this.observer.off('scrollEvent', { id: 'testId' });\n          })\n      }\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offscrollevent12",
      children: "off('scrollEvent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听所有滚动组件滚动事件的开始和结束。滚动组件包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#scrolleventinfo12",
              children: "ScrollEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回滚动事件的信息。不传参数时，取消所有滚动事件的监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollevent12",
        children: "on('scrollEvent')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscrollevent12-1",
      children: "on('scrollEvent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听指定id的滚动组件滚动事件的开始和结束。滚动组件包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observer选项，包含指定监听的滚动组件的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#scrolleventinfo12",
              children: "ScrollEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回滚动事件的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollevent12",
        children: "on('scrollEvent')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offscrollevent12-1",
      children: "off('scrollEvent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听指定id的滚动组件滚动事件的开始和结束。滚动组件包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observer选项，包含指定监听的滚动组件的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#scrolleventinfo12",
              children: "ScrollEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回滚动事件的信息。不传参数时，取消所有滚动事件的监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollevent12",
        children: "on('scrollEvent')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrouterpageupdate11",
      children: "on('routerPageUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
        children: "Router"
      }), "中page页面的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'routerPageUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
              children: "Router"
            }), "中page页面的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#routerpageinfo",
              children: "RouterPageInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#routerpageinfo",
              children: "RouterPageInfo"
            }), "对象，返回当前的page页面状态。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageOne.ets\n\n@Entry\n@Component\nstruct PageOne {\n  build() {\n    Column() {\n      Text(\"pageOne\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('routerPageUpdate', callback)\n// uiObserver.off('routerPageUpdate', callback)\n\n@Entry\n@Component\nstruct Index {\n  aboutToAppear() {\n    // 添加监听\n    this.getUIContext().getUIObserver().on('routerPageUpdate', (info) => {\n      console.info('router page update', JSON.stringify(info));\n    });\n  }\n\n  aboutToDisappear() {\n    // 取消监听，不选择回调时，取消所有监听的回调\n    this.getUIContext().getUIObserver().off('routerPageUpdate');\n  }\n\n  build() {\n    Column() {\n      Button(\"pushUrl\").onClick(() => {\n        // router跳转到PageOne.ets页面\n        this.getUIContext().getRouter().pushUrl({ url: 'pages/PageOne' })\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offrouterpageupdate11",
      children: "off('routerPageUpdate')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
        children: "Router"
      }), "中page页面的状态变化。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'routerPageUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
              children: "Router"
            }), "中page页面的状态变化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#routerpageinfo",
              children: "RouterPageInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router",
              children: "Router"
            }), "中page页面状态变化的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onrouterpageupdate11",
        children: "on('routerPageUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondensityupdate12",
      children: "on('densityUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听屏幕像素密度变化。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'densityUpdate'，即屏幕像素密度变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#densityinfo12",
              children: "DensityInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#densityinfo12",
              children: "DensityInfo"
            }), "，返回变化后的屏幕像素密度。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('densityUpdate', callback)\n// uiObserver.off('densityUpdate', callback)\n\nimport { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State density: number = 0;\n  @State message: string = '未注册监听';\n\n  // 定义监听回调函数\n  densityUpdateCallback = (info: uiObserver.DensityInfo) => {\n    this.density = info.density;\n    this.message = '变化后的DPI：' + this.density.toString();\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(24)\n        .fontWeight(FontWeight.Bold)\n      Button('注册屏幕像素密度变化监听')\n        .margin({ bottom: 10 })\n        .onClick(() => {\n          this.message = '已注册监听';\n          // 添加监听\n          this.getUIContext().getUIObserver().on('densityUpdate', this.densityUpdateCallback);\n        })\n      Button('解除注册屏幕像素密度变化监听')\n        .onClick(() => {\n          this.message = '未注册监听';\n          // 取消监听\n          this.getUIContext().getUIObserver().off('densityUpdate', this.densityUpdateCallback);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offdensityupdate12",
      children: "off('densityUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听屏幕像素密度的变化。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'densityUpdate'，即屏幕像素密度变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#densityinfo12",
              children: "DensityInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。若不指定具体的回调函数，则注销该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            }), "下所有屏幕像素密度变化事件监听。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondensityupdate12",
        children: "on('densityUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwilldraw12",
      children: "on('willDraw')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'willDraw', callback: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听每一帧绘制指令下发情况。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willDraw'，即是否将要绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('willDraw', callback)\n// uiObserver.off('willDraw', callback)\n\n@Entry\n@Component\nstruct Index {\n  // 定义监听回调函数\n  willDrawCallback = () => {\n    console.info(\"willDraw指令下发\");\n  }\n\n  build() {\n    Column() {\n      Button('注册绘制指令下发监听')\n        .margin({ bottom: 10 })\n        .onClick(() => {\n          // 添加监听\n          this.getUIContext().getUIObserver().on('willDraw', this.willDrawCallback);\n        })\n      Button('解除注册绘制指令下发监听')\n        .onClick(() => {\n          // 取消监听\n          this.getUIContext().getUIObserver().off('willDraw', this.willDrawCallback);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offwilldraw12",
      children: "off('willDraw')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'willDraw', callback?: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听每一帧绘制指令下发情况。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willDraw'，即是否将要绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有绘制指令下发事件的监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwilldraw12",
        children: "on('willDraw')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondidlayout12",
      children: "on('didLayout')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'didLayout', callback: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听每一帧布局完成情况。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didLayout'，即是否布局完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('didLayout', callback)\n// uiObserver.off('didLayout', callback)\n\n@Entry\n@Component\nstruct Index {\n  // 定义监听回调函数\n  didLayoutCallback = () => {\n    console.info(\"layout布局完成\");\n  }\n\n  build() {\n    Column() {\n      Button('注册布局完成监听')\n        .margin({ bottom: 10 })\n        .onClick(() => {\n          // 添加监听\n          this.getUIContext().getUIObserver().on('didLayout', this.didLayoutCallback);\n        })\n      Button('解除注册注册布局完成监听')\n        .onClick(() => {\n          // 取消监听\n          this.getUIContext().getUIObserver().off('didLayout', this.didLayoutCallback);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offdidlayout12",
      children: "off('didLayout')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'didLayout', callback?: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听每一帧布局完成情况。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didLayout'，即是否布局完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有布局完成的监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondidlayout12",
        children: "on('didLayout')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationswitch12",
      children: "on('navDestinationSwitch')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'navDestinationSwitch', callback: Callback<observer.NavDestinationSwitchInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的页面切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationSwitch'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的页面切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), "，返回页面切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示UIObserver.on('navDestinationSwitch', callback)\n// UIObserver.off('navDestinationSwitch', callback)\n\nimport { uiObserver } from '@kit.ArkUI';\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      Text(\"pageOne\")\n    }.title(\"pageOne\")\n  }\n}\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.NavDestinationSwitchInfo) {\n  console.info(`testTag navDestinationSwitch from: ${JSON.stringify(info.from)} to: ${JSON.stringify(info.to)}`);\n}\n\n@Entry\n@Component\nstruct Index {\n  private stack: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageBuilder(name: string) {\n    PageOne()\n  }\n\n  aboutToAppear() {\n    let obs = this.getUIContext().getUIObserver();\n    // 添加监听\n    obs.on('navDestinationSwitch', callbackFunc);\n  }\n\n  aboutToDisappear() {\n    let obs = this.getUIContext().getUIObserver();\n    // 取消监听\n    obs.off('navDestinationSwitch', callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Navigation(this.stack) {\n        Button(\"push\").onClick(() => {\n          // 将PageOne的NavDestination入栈\n          this.stack.pushPath({ name: \"pageOne\" });\n        })\n      }\n      .title(\"Navigation\")\n      .navDestination(this.PageBuilder)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationswitch12",
      children: "off('navDestinationSwitch')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'navDestinationSwitch', callback?: Callback<observer.NavDestinationSwitchInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的页面切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationSwitch'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的页面切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationswitch12",
        children: "on('navDestinationSwitch')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationswitch12-1",
      children: "on('navDestinationSwitch')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'navDestinationSwitch', observerOptions: observer.NavDestinationSwitchObserverOptions, callback: Callback<observer.NavDestinationSwitchInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过监听选项监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的页面切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationSwitch'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的页面切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "observerOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchobserveroptions12",
              children: "NavDestinationSwitchObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), "，返回页面切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示UIObserver.on('navDestinationSwitch', observerOptions, callback)\n// UIObserver.off('navDestinationSwitch', observerOptions, callback)\n\nimport { uiObserver } from '@kit.ArkUI';\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      Text(\"pageOne\")\n    }.title(\"pageOne\")\n  }\n}\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.NavDestinationSwitchInfo) {\n  console.info(`testTag navDestinationSwitch from: ${JSON.stringify(info.from)} to: ${JSON.stringify(info.to)}`);\n}\n\n@Entry\n@Component\nstruct Index {\n  private stack: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageBuilder(name: string) {\n    PageOne()\n  }\n\n  aboutToAppear() {\n    let obs = this.getUIContext().getUIObserver();\n    // 添加监听，指定Navigation的id\n    obs.on('navDestinationSwitch', { navigationId: \"myNavId\" }, callbackFunc);\n  }\n\n  aboutToDisappear() {\n    let obs = this.getUIContext().getUIObserver();\n    // 取消监听\n    obs.off('navDestinationSwitch', { navigationId: \"myNavId\" }, callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Navigation(this.stack) {\n        Button(\"push\").onClick(() => {\n          // 将PageOne的NavDestination入栈\n          this.stack.pushPath({ name: \"pageOne\" });\n        })\n      }\n      .id(\"myNavId\")\n      .title(\"Navigation\")\n      .navDestination(this.PageBuilder)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationswitch12-1",
      children: "off('navDestinationSwitch')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'navDestinationSwitch', observerOptions: observer.NavDestinationSwitchObserverOptions, callback?: Callback<observer.NavDestinationSwitchInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消通过监听选项监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的页面切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'navDestinationSwitch'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "的页面切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "observerOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchobserveroptions12",
              children: "NavDestinationSwitchObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationswitchinfo12",
              children: "NavDestinationSwitchInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationswitch12-1",
        children: "on('navDestinationSwitch')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwillclick12",
      children: "on('willClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'willClick', callback: GestureEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。回调类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
        children: "GestureEventListenerCallback"
      }), "。从API version 20开始支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willClick'，用于监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
              children: "GestureEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得点击事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('willClick', callback)\n// uiObserver.off('willClick', callback)\n// uiObserver.off('didClick', callback)\n// uiObserver.off('didClick', callback)\n\n// 定义监听回调函数\nfunction willClickGestureCallback(event: GestureEvent, node?: FrameNode) {\n  console.info('Example willClickCallback GestureEvent is called');\n}\n\nfunction willClickCallback(event: ClickEvent, node?: FrameNode) {\n  console.info('Example willClickCallback ClickEvent is called');\n}\n\nfunction didClickGestureCallback(event: GestureEvent, node?: FrameNode) {\n  console.info('Example didClickCallback GestureEvent is called');\n}\n\nfunction didClickCallback(event: ClickEvent, node?: FrameNode) {\n  console.info('Example didClickCallback ClickEvent is called');\n}\n\n@Entry\n@Component\nstruct ClickExample {\n  @State clickCount: number = 0;\n  @State tapGestureCount: number = 0;\n\n  aboutToAppear(): void {\n    // 添加监听\n    let observer = this.getUIContext().getUIObserver();\n    observer.on('willClick', willClickGestureCallback);\n    observer.on('willClick', willClickCallback);\n    observer.on('didClick', didClickGestureCallback);\n    observer.on('didClick', didClickCallback);\n  }\n\n  aboutToDisappear(): void {\n    // 取消监听\n    let observer = this.getUIContext().getUIObserver();\n    observer.off('willClick', willClickGestureCallback);\n    observer.off('willClick', willClickCallback);\n    // 如果不选择回调，则会取消所有监听的回调\n    observer.off('didClick');\n  }\n\n  build() {\n    Column() {\n      /**\n       * onClick和TapGesture在后端的处理是一致的\n       * 所以无论是触发onClick还是触发TapGesture\n       * on('willClick')两种类型入参的回调（GestureEvent和ClickEvent）都会被触发\n       * 同理，on('didClick')的两种回调也会被触发\n       */\n      Column() {\n        Text('Click Count: ' + this.clickCount)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .onClick((event: ClickEvent) => {\n        this.clickCount++;\n        console.info('Example Click event is called');\n      })\n\n      Column() {\n        Text('TapGesture Count: ' + this.tapGestureCount)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .gesture(TapGesture({ count: 2 }).onAction((event: TapGestureEvent) => {\n        this.tapGestureCount++;\n        console.info('Example Click event is called');\n      }))\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offwillclick12",
      children: "off('willClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'willClick', callback?: GestureEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "中的点击事件指令下发情况。从API version 20开始，支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willClick'，即点击事件指令下发情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
              children: "GestureEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondidclick12",
      children: "on('didClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'didClick', callback: GestureEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。回调类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
        children: "GestureEventListenerCallback"
      }), "。从API version 20开始支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didClick'，用于监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
              children: "GestureEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得点击事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offdidclick12",
      children: "off('didClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'didClick', callback?: GestureEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondidclick12",
        children: "on('didClick')"
      }), "中的点击事件指令下发情况。从API version 20开始，支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didClick'，即点击事件指令下发情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gestureeventlistenercallback12",
              children: "GestureEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwillclick12-1",
      children: "on('willClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'willClick', callback: ClickEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。回调类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
        children: "ClickEventListenerCallback"
      }), "。从API version 20开始支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willClick'，用于监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
              children: "ClickEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得点击事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent",
              children: "ClickEvent"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offwillclick12-1",
      children: "off('willClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'willClick', callback?: ClickEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12-1",
        children: "on('willClick')"
      }), "中的点击事件指令下发情况。从API version 20开始，支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'willClick'，即点击事件指令下发情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
              children: "ClickEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondidclick12-1",
      children: "on('didClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'didClick', callback: ClickEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。回调类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
        children: "ClickEventListenerCallback"
      }), "。从API version 20开始支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didClick'，用于监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
              children: "ClickEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得点击事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent",
              children: "ClickEvent"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offdidclick12-1",
      children: "off('didClick')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'didClick', callback?: ClickEventListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondidclick12-1",
        children: "on('didClick')"
      }), "中的点击事件指令下发情况。从API version 20开始，支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'didClick'，即点击事件指令下发情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#clickeventlistenercallback12",
              children: "ClickEventListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillclick12",
        children: "on('willClick')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabcontentupdate12",
      children: "on('tabContentUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "页面的切换事件。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabchange22",
        children: "on('tabChange')"
      }), "，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabContentUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('tabContentUpdate', callback)\n// uiObserver.off('tabContentUpdate', callback)\n\nimport { uiObserver } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.TabContentInfo) {\n  console.info('tabContentUpdate', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct TabsExample {\n\n  aboutToAppear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 添加监听\n    observer.on('tabContentUpdate', callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 取消监听\n    observer.off('tabContentUpdate', callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId0')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId1')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId2')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId3')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .id('tabsId')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtabcontentupdate12",
      children: "off('tabContentUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "页面的切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabContentUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabcontentupdate12",
        children: "on('tabContentUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabcontentupdate12-1",
      children: "on('tabContentUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件的id监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "页面的切换事件。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabchange22-1",
        children: "on('tabChange')"
      }), "，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabContentUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带TabContentInfo，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('tabContentUpdate', options, callback)\n// uiObserver.off('tabContentUpdate', options, callback)\n\nimport { uiObserver } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.TabContentInfo) {\n  console.info('tabContentUpdate', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct TabsExample {\n\n  aboutToAppear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 添加监听，指定Tabs的id\n    observer.on('tabContentUpdate', { id: 'tabsId' }, callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 取消监听\n    observer.off('tabContentUpdate', { id: 'tabsId' }, callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId0')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId1')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId2')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId3')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .id('tabsId')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtabcontentupdate12-1",
      children: "off('tabContentUpdate')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件的id监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "页面的切换事件。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabContentUpdate'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "页面的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "上所有的监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabcontentupdate12-1",
        children: "on('tabContentUpdate')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabchange22",
      children: "on('tabChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件页签的切换事件，支持多个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件的监听。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabcontentupdate12",
        children: "on('tabContentUpdate')"
      }), "，本接口支持监听Tabs组件初始化时，显示首个页签的事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabChange'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示监听Tabs组件页签的切换事件。\n// 此用例同时监听id为'tabsId1'、'tabsId2'的两个Tabs组件。\n// 两个Tabs组件初始化时，会监听到第0页页签的显示事件，页签对应id分别为'tabContentId0'、'tabContentId5'。\n// 在id为'tabsId1'的Tabs组件上滑动一下，会监听到第0页的页签隐藏、id为'tabContentId1'的第1页页签显示事件。\nimport { uiObserver } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.TabContentInfo) {\n  console.info('tabChange', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct TabsExample {\n\n  aboutToAppear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 添加监听\n    observer.on('tabChange', callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 取消监听\n    observer.off('tabChange', callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId0')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId1')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId2')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId3')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .id('tabsId1')\n\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId5')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId6')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId7')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId8')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .id('tabsId2')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtabchange22",
      children: "off('tabChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听所有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件页签的切换事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabChange'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。若不指定具体的回调函数，则注销所有通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontabchange22",
              children: "on('tabChange')"
            }), "接口注册的回调函数。  默认值：undefined"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabchange22",
        children: "on('tabChange')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontabchange22-1",
      children: "on('tabChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件的页签切换事件。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabcontentupdate12-1",
        children: "on('tabContentUpdate')"
      }), "，本接口支持监听Tabs组件初始化时，显示首个页签的事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabChange'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件的信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示监听id为'tabsId'的Tabs组件页签的切换事件。\n// Tabs组件页签初始化的时候，会监听到第0页页签的显示事件，页签对应id为'tabContentId0'；滑动一下，会监听到第0页的页签隐藏、id为'tabContentId1'的第1页页签显示事件。\nimport { uiObserver } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: uiObserver.TabContentInfo) {\n  console.info('tabChange', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct TabsExample {\n\n  aboutToAppear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 添加监听，指定Tabs的id\n    observer.on('tabChange', { id: 'tabsId' }, callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 取消监听\n    observer.off('tabChange', { id: 'tabsId' }, callbackFunc);\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId0')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId1')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId2')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId3')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .id('tabsId')\n\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar('green').id('tabContentId5')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar('blue').id('tabContentId6')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar('yellow').id('tabContentId7')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar('pink').id('tabContentId8')\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtabchange22-1",
      children: "off('tabChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消监听指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件页签的切换事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'tabChange'，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件页签的切换事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定监听的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#tabcontentinfo12",
              children: "TabContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。若不指定具体的回调函数，则注销config指定的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "组件下注册的所有的回调函数。  默认值：undefined"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontabchange22-1",
        children: "on('tabChange')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontextchange22",
      children: "on('textChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局监听输入框文本变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'textChange'，表示文本输入的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#textchangeeventinfo22",
              children: "TextChangeEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回文本变化的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TextUiObserver {\n  observer: UIObserver = this.getUIContext().getUIObserver();\n  build() {\n    Column() {\n      TextArea({ text: \"Hello World TextArea\" })\n        .width(336)\n        .height(56)\n        .margin({bottom:5})\n        .backgroundColor('#FFFFFF')\n        .id(\"TestId1\")\n      TextInput({ text: \"Hello World TextInput\" })\n        .width(336)\n        .height(56)\n        .margin({bottom:5})\n        .backgroundColor('#FFFFFF')\n        .id(\"TestId2\")\n      Search({ value: \"Hello World Search\" })\n        .width(336)\n        .height(56)\n        .margin({bottom:5})\n        .backgroundColor('#FFFFFF')\n        .id(\"TestId3\")\n      Row() {\n        // 开启全局监听\n        Button('UIObserver on')\n          .onClick(() => {\n            this.observer.on('textChange', (info) => {\n              console.info('textChangeInfo', JSON.stringify(info));\n            });\n          })\n        // 关闭全局监听\n        Button('UIObserver off')\n          .onClick(() => {\n            this.observer.off('textChange');\n          })\n      }.margin({bottom:5})\n      // 开启和关闭指定ID的局部监听\n      Row() {\n        Button('UIObserver TestId1 on')\n          .onClick(() => {\n            this.observer.on('textChange', { id: \"TestId1\" }, (info) => {\n              console.info('textChangeInfo', JSON.stringify(info));\n            });\n          })\n\n        Button('UIObserver TestId1 off')\n          .onClick(() => {\n            this.observer.off('textChange', { id: \"TestId1\" });\n          })\n      }.margin({bottom:5})\n      Row() {\n        Button('UIObserver TestId2 on')\n          .onClick(() => {\n            this.observer.on('textChange', { id: \"TestId2\" }, (info) => {\n              console.info('textChangeInfo', JSON.stringify(info));\n            });\n          })\n\n        Button('UIObserver TestId2 off')\n          .onClick(() => {\n            this.observer.off('textChange', { id: \"TestId2\" });\n          })\n      }.margin({bottom:5})\n      Row() {\n        Button('UIObserver TestId3 on')\n          .onClick(() => {\n            this.observer.on('textChange', { id: \"TestId3\" }, (info) => {\n              console.info('textChangeInfo', JSON.stringify(info));\n            });\n          })\n\n        Button('UIObserver TestId3 off')\n          .onClick(() => {\n            this.observer.off('textChange', { id: \"TestId3\" });\n          })\n      }.margin({bottom:5})\n    }.width('100%').height('100%').backgroundColor('#F1F3F5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtextchange22",
      children: "off('textChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消输入框文本变化的全局监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'textChange'，表示文本输入的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#textchangeeventinfo22",
              children: "TextChangeEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消输入框文本变化的所有全局监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontextchange22",
        children: "on('textChange')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontextchange22-1",
      children: "on('textChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'textChange', identity: observer.ObserverOptions, callback:Callback<observer.TextChangeEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定ID输入框文本变化的局部监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'textChange'，表示文本输入的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "identity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定监听的文本输入组件的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#textchangeeventinfo22",
              children: "TextChangeEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回文本变化的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontextchange22",
        children: "on('textChange')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offtextchange22-1",
      children: "off('textChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消指定ID输入框文本变化的局部监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'textChange'，表示文本输入的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "identity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定监听的文本输入组件的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#textchangeeventinfo22",
              children: "TextChangeEventInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消指定ID输入框文本变化的所有局部监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontextchange22",
        children: "on('textChange')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onbeforepanstart19",
      children: "on('beforePanStart')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'beforePanStart', callback: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'beforePanStart'，用于监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行前的指令下发情况，所注册回调将于Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件触发前触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得Pan手势事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('beforePanStart', callback)\n// uiObserver.off('beforePanStart', callback)\n// uiObserver.on('afterPanStart', callback)\n// uiObserver.off('afterPanStart', callback)\n// uiObserver.on('beforePanEnd', callback)\n// uiObserver.off('beforePanEnd', callback)\n// uiObserver.on('afterPanEnd', callback)\n// uiObserver.off('afterPanEnd', callback)\n\n// 在页面Component中使用\nlet TEST_TAG: string = 'node';\n\n// 定义监听回调函数\nfunction callbackFunc() {\n  console.info('on == beforePanStart');\n}\n\nfunction afterPanCallBack() {\n  console.info('on == afterPanStart');\n}\n\nfunction beforeEndCallBack() {\n  console.info('on == beforeEnd');\n}\n\nfunction afterEndCallBack() {\n  console.info('on == afterEnd');\n}\n\nfunction beforeStartCallBack() {\n  console.info('on == beforeStartCallBack');\n}\n\nfunction panGestureCallBack(event: GestureEvent, current: GestureRecognizer, node?: FrameNode) {\n  TEST_TAG = 'panGestureEvent';\n  console.info('===' + TEST_TAG + '=== event.repeat is ' + event.repeat);\n  console.info('===' + TEST_TAG + '=== event target is ' + event.target.id);\n  TEST_TAG = 'panGestureCurrent';\n  console.info('===' + TEST_TAG + '=== current.getTag() is ' + current.getTag());\n  TEST_TAG = 'panGestureNode';\n  console.info('===' + TEST_TAG + '=== node?.getId() is ' + node?.getId());\n}\n\n\n@Entry\n@Component\nstruct PanExample {\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State positionX: number = 0;\n  @State positionY: number = 0;\n  private panOption: PanGestureOptions = new PanGestureOptions({direction: PanDirection.All });\n\n  aboutToAppear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 添加监听\n    observer.on('beforePanStart', callbackFunc);\n    observer.on('beforePanStart', panGestureCallBack);\n    observer.on('beforePanStart', beforeStartCallBack);\n    observer.on('afterPanStart', afterPanCallBack);\n    observer.on('beforePanEnd', beforeEndCallBack);\n    observer.on('afterPanEnd', afterEndCallBack);\n  }\n\n  aboutToDisappear(): void {\n    let observer = this.getUIContext().getUIObserver();\n    // 取消监听\n    observer.off('beforePanStart', callbackFunc);\n    observer.off('beforePanStart');\n    observer.off('afterPanStart', afterPanCallBack);\n    observer.off('beforePanEnd');\n    observer.off('afterPanEnd');\n  }\n\n  build() {\n    Column(){\n      Column(){\n        Text('PanGesture :\\nX: ' + this.offsetX + '\\n' + 'Y: ' + this.offsetY)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .translate({ x: this.offsetX, y: this.offsetY, z: 0 })\n      .id('columnOuter')\n      .gesture(\n        PanGesture(this.panOption)\n          .onActionStart((event: GestureEvent) => {\n            console.info('Pan start');\n          })\n          .onActionUpdate((event: GestureEvent) => {\n            if (event) {\n              this.offsetX = this.positionX + event.offsetX;\n              this.offsetY = this.positionY + event.offsetY;\n            }\n          })\n          .onActionEnd((event: GestureEvent) => {\n            this.positionX = this.offsetX;\n            this.positionY = this.offsetY;\n            console.info('Pan end');\n            }))\n          }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offbeforepanstart19",
      children: "off('beforePanStart')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'beforePanStart', callback?: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件执行前的callback回调。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'beforePanStart'，即Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行前的指令下发情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消所有的Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行前的指令下发监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onafterpanstart19",
      children: "on('afterPanStart')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'afterPanStart', callback: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件执行后的指令下发情况，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'afterPanStart'，用于监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行后的指令下发情况，所注册回调将于Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件触发后触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得Pan手势事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offafterpanstart19",
      children: "off('afterPanStart')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'afterPanStart', callback?: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onafterpanstart19",
        children: "on('afterPanStart')"
      }), "监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
        children: "onActionStart"
      }), "事件执行后的callback回调。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'afterPanStart'，即Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行后的指令下发情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消所有的Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionstart",
              children: "onActionStart"
            }), "事件执行后的指令下发监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onbeforepanend19",
      children: "on('beforePanEnd')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'beforePanEnd', callback: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行前的指令下发情况，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'beforePanEnd'，用于监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行前的指令下发情况，所注册回调将于Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件触发前触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得Pan手势事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offbeforepanend19",
      children: "off('beforePanEnd')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'beforePanEnd', callback?: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanend19",
        children: "on('beforePanEnd')"
      }), "监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行前的callback回调。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'beforePanEnd'，即Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行前的指令下发情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消所有的Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行前的指令下发监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onafterpanend19",
      children: "on('afterPanEnd')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'afterPanEnd', callback: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行后的指令下发情况，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'beforePanEnd'，用于监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行后的指令下发情况，所注册回调将于Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件触发后触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得Pan手势事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offafterpanend19",
      children: "off('afterPanEnd')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'afterPanEnd', callback?: PanListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onafterpanend19",
        children: "on('afterPanEnd')"
      }), "监听Pan手势", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
        children: "onActionEnd"
      }), "事件执行后的callback回调。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听事件，固定为'afterPanEnd'，即Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行后的指令下发情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#panlistenercallback19",
              children: "PanListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。不传参数时，取消所有的Pan手势", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#onactionend",
              children: "onActionEnd"
            }), "事件执行后的指令下发监听回调。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onbeforepanstart19",
        children: "on('beforePanStart')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnoderenderstate20",
      children: "on('nodeRenderState')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册一个回调函数，以便在特定节点的渲染状态发生变化时调用，当注册成功时，此回调将立即执行一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意节点数量的限制。出于性能考虑，在单个UI实例中，注册节点太多，将会抛出异常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常，当组件被移动到屏幕外时，会收到RENDER_OUT的通知。但在某些情况下，即使组件移动到屏幕外也不会触发RENDER_OUT通知。例如，具有缓存功能的组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "，即使", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#cachedcount15",
        children: "cachedCount"
      }), "属性中的参数isShown配置为true，也不会触发RENDER_OUT通知。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'nodeRenderState'，用于监听节点渲染状态发生改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeIdentity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#nodeidentity20",
              children: "NodeIdentity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#noderenderstatechangecallback20",
              children: "NodeRenderStateChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。可以获得节点渲染状态改变事件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#noderenderstate20",
              children: "NodeRenderState"
            }), "和组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node-render-monitor/errorcode-node-render-monitor",
        children: "注册节点渲染状态监听错误码"
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
            children: "161001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The count of nodes monitoring render state is over the limitation."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何对目标组件添加监听和取消监听。当向左滑动，被监听组件从屏幕消失，会收到RENDER_OUT的通知，然后向右滑动，被监听组件重新出现在屏幕上，会收到RENDER_IN通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.on('nodeRenderState', nodeIdentity, callback)\n// uiObserver.off('nodeRenderState', nodeIdentity, callback)\n\n// 在页面Component中使用\nimport { NodeRenderState } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  @State notice: string = \"\";\n  private controller: TabsController = new TabsController();\n\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.selectedIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.selectedIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column() {\n            Column() {\n              Button(\"被监听节点\").margin({ top: 5 }).id(\"button_1\")\n              Button(\"添加监听\").margin({ top: 5 }).onClick(() => {\n                let node: FrameNode | null = this.getUIContext().getFrameNodeById(\"button_1\");\n                if (node) {\n                  let observer = this.getUIContext().getUIObserver();\n                  // 添加监听\n                  observer.on(\"nodeRenderState\", node?.getUniqueId(), (state: NodeRenderState, node?: FrameNode) => {\n                    // 根据节点状态修改通知信息\n                    if (state === 0) {\n                      this.notice = \"RENDER_IN\";\n                    } else {\n                      this.notice = \"RENDER_OUT\";\n                    }\n                    console.info(\"节点状态发生改变，当前状态：\", state);\n                  })\n                }\n              })\n              Button(\"取消监听\").margin({ top: 5 }).onClick(() => {\n                let node: FrameNode | null = this.getUIContext().getFrameNodeById(\"button_1\");\n                if (node) {\n                  let observer = this.getUIContext().getUIObserver();\n                  // 取消监听，不选择回调时，取消所有监听的回调\n                  observer.off(\"nodeRenderState\", node?.getUniqueId());\n                }\n                this.notice = \"\";\n              })\n            }\n          }.width('100%').height('100%').backgroundColor('#00CB87')\n        }.tabBar(this.tabBuilder(0, 'green'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#007DFF')\n        }.tabBar(this.tabBuilder(1, 'blue'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#FFBF00')\n        }.tabBar(this.tabBuilder(2, 'yellow'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor('#E67C92')\n        }.tabBar(this.tabBuilder(3, 'pink'))\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(56)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        if (index === targetIndex) {\n          return;\n        }\n        this.selectedIndex = targetIndex;\n      })\n      .width(360)\n      .height(296)\n      .margin({ top: 52 })\n      .backgroundColor('#F1F3F5')\n\n      Text(`收到的通知: ${this.notice}`)\n        .fontSize(20)\n        .margin(10)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(828073)/* ["default"] */.A) + "",
        width: "369",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnoderenderstate20",
      children: "off('nodeRenderState')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听节点渲染状态发生变化的callback回调。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'nodeRenderState'，即节点渲染状态变化指令下发情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeIdentity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#nodeidentity20",
              children: "NodeIdentity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#noderenderstatechangecallback20",
              children: "NodeRenderStateChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消该节点所有的渲染状态变化指令下发监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnoderenderstate20",
        children: "on('nodeRenderState')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addglobalgesturelistener20",
      children: "addGlobalGestureListener20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addGlobalGestureListener(type: GestureListenerType, option: GestureObserverConfigs, callback: GestureListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册回调函数以监听手势触发信息。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#gesturelistenertype20",
              children: "GestureListenerType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要监听的手势类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#gestureobserverconfigs20",
              children: "GestureObserverConfigs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定全局监听器时的配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gesturelistenercallback20",
              children: "GestureListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势状态更新时的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例使用全局手势监听器实时追踪Tap、Pan和LongPress三个独立区域的触发状态，记录各手势的触发次数和最后操作信息，并在组件生命周期内自动管理监听器的注册与注销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 演示uiObserver.addGlobalGestureListener(type, option, callback)\n// uiObserver.removeGlobalGestureListener(type, callback)\n\nimport { GestureListenerType, GestureActionPhase, GestureTriggerInfo, GestureListenerCallback } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '全局手势监控';\n  @State tapCount: number = 0;\n  @State panCount: number = 0;\n  @State longPressCount: number = 0;\n  @State lastAction: string = '无';\n  @State lastArea: string = '无';\n\n  // 存储监听器回调引用\n  private tapCallback?: GestureListenerCallback;\n  private panCallback?: GestureListenerCallback;\n  private longPressCallback?: GestureListenerCallback;\n\n  // 启用全局监听\n  aboutToAppear() {\n    this.addGlobalListeners();\n  }\n  // 终止全局监听\n  aboutToDisappear() {\n    this.removeGlobalListeners();\n  }\n\n  private addGlobalListeners() {\n    const observer = this.getUIContext().getUIObserver();\n\n    // Tap监听任务\n    this.tapCallback = (info: GestureTriggerInfo) => {\n      if (info.event?.target?.id === 'tap-area') {\n        this.tapCount++;\n        this.lastAction = '点击';\n        this.lastArea = 'Tap区域';\n      }\n    };\n    observer.addGlobalGestureListener(\n      GestureListenerType.TAP,\n      { actionPhases: [GestureActionPhase.WILL_START, GestureActionPhase.WILL_END] },\n      this.tapCallback\n    );\n\n    // Pan监听任务\n    this.panCallback = (info: GestureTriggerInfo) => {\n      if (info.event?.target?.id === 'pan-area') {\n        this.panCount++;\n        this.lastAction = '平移';\n        this.lastArea = 'Pan区域';\n      }\n    };\n    observer.addGlobalGestureListener(\n      GestureListenerType.PAN,\n      {\n        actionPhases: [GestureActionPhase.WILL_START, GestureActionPhase.WILL_END]\n      },\n      this.panCallback\n    );\n\n    // LongPress监听任务\n    this.longPressCallback = (info: GestureTriggerInfo) => {\n      if (info.event?.target?.id === 'longpress-area') {\n        this.longPressCount++;\n        this.lastAction = '长按';\n        this.lastArea = 'LongPress区域';\n      }\n    };\n    observer.addGlobalGestureListener(\n      GestureListenerType.LONG_PRESS,\n      {\n        actionPhases: [GestureActionPhase.WILL_START, GestureActionPhase.WILL_END]\n      },\n      this.longPressCallback\n    );\n  }\n\n  private removeGlobalListeners() {\n    const observer = this.getUIContext().getUIObserver();\n    if (this.tapCallback) {\n      observer.removeGlobalGestureListener(0, this.tapCallback);\n    }\n    if (this.panCallback) {\n      observer.removeGlobalGestureListener(2, this.panCallback);\n    }\n    if (this.longPressCallback) {\n      observer.removeGlobalGestureListener(1, this.longPressCallback);\n    }\n  }\n\n  build() {\n    Column() {\n      // 手势数据统计面板\n      Row({ space: 30 }) {\n        Column() {\n          Text('点击次数:').fontSize(16)\n          Text(`${this.tapCount}`).fontSize(24).fontColor('#FF6B81')\n        }\n        Column() {\n          Text('平移次数:').fontSize(16)\n          Text(`${this.panCount}`).fontSize(24).fontColor('#7BED9F')\n        }\n        Column() {\n          Text('长按次数:').fontSize(16)\n          Text(`${this.longPressCount}`).fontSize(24).fontColor('#70A1FF')\n        }\n      }\n      .margin(10)\n\n      Text(`最后动作: ${this.lastAction} (${this.lastArea})`)\n        .fontSize(18)\n        .margin(10)\n\n      // 手势区域\n      Row() {\n        Text('Tap区域').fontSize(18)\n      }\n      .id('tap-area')\n      .width('90%')\n      .height(120)\n      .margin(10)\n      .border({ width: 2, color: '#FF6B81' })\n      .justifyContent(FlexAlign.Center)\n      .gesture(TapGesture().onAction((event: GestureEvent)=>{\n        // 具体实现内容\n      }))\n\n      Row() {\n        Text('Pan区域').fontSize(18)\n      }\n      .id('pan-area')\n      .width('90%')\n      .height(120)\n      .margin(10)\n      .border({ width: 2, color: '#7BED9F' })\n      .justifyContent(FlexAlign.Center)\n      .gesture(\n        PanGesture()\n          .onActionStart((event: GestureEvent) => {\n            // 具体实现内容\n          })\n          .onActionEnd((event: GestureEvent) => {\n            // 具体实现内容\n          })\n      )\n\n      Row() {\n        Text('LongPress区域').fontSize(18)\n      }\n      .id('longpress-area')\n      .width('90%')\n      .height(120)\n      .margin(10)\n      .border({ width: 2, color: '#70A1FF' })\n      .justifyContent(FlexAlign.Center)\n      .gesture(\n        LongPressGesture()\n          .onAction((event: GestureEvent)=>{\n            // 具体实现内容\n          })\n          .onActionEnd((event: GestureEvent) => {\n            // 具体实现内容\n          })\n      )\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580545)/* ["default"] */.A) + "",
        width: "498",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "removeglobalgesturelistener20",
      children: "removeGlobalGestureListener20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除某一手势监听器类型的回调函数。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#gesturelistenertype20",
              children: "GestureListenerType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要移除监听器的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#gesturelistenercallback20",
              children: "GestureListenerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待移除的回调函数（未提供时将清除该手势类型的所有回调）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addglobalgesturelistener20",
        children: "addGlobalGestureListener"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwindowsizelayoutbreakpointchange22",
      children: "on('windowSizeLayoutBreakpointChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册窗口尺寸布局断点变化的回调函数。该方法用于监听窗口尺寸断点变化，可用于根据窗口尺寸自适应调整UI布局。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'windowSizeLayoutBreakpointChange'，用于监听窗口尺寸布局断点发生改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#windowsizelayoutbreakpointinfo22",
              children: "WindowSizeLayoutBreakpointInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带WindowSizeLayoutBreakpointinfo，包含窗口宽度和高度所在的布局断点枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示添加和取消监听窗口尺寸布局断点变化的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver, window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  private changeOrientation(isLandscape: boolean) {\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    window.getLastWindow(context).then((lastWindow) => {\n      lastWindow.setPreferredOrientation(isLandscape ? window.Orientation.LANDSCAPE : window.Orientation.PORTRAIT)\n    });\n  }\n\n  @State message: string = '';\n  @State widthBreakpoint: WidthBreakpoint = WidthBreakpoint.WIDTH_SM;\n  @State heightBreakpoint: HeightBreakpoint = HeightBreakpoint.HEIGHT_SM;\n  winSizeLayoutBreakpointCallback = (info: uiObserver.WindowSizeLayoutBreakpointInfo) => {\n    this.widthBreakpoint = info.widthBreakpoint;\n    this.heightBreakpoint = info.heightBreakpoint;\n    this.message = 'widthBpt:' + this.widthBreakpoint.toString() + 'heightBpt:' + this.heightBreakpoint.toString();\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n      Button('注册窗口尺寸布局断点变化监听')\n        .onClick(() => {\n          this.getUIContext()\n            .getUIObserver()\n            .on('windowSizeLayoutBreakpointChange', this.winSizeLayoutBreakpointCallback);\n        })\n      Button('解除窗口尺寸布局断点变化监听')\n        .onClick(() => {\n          this.getUIContext()\n            .getUIObserver()\n            .off('windowSizeLayoutBreakpointChange', this.winSizeLayoutBreakpointCallback);\n        })\n      Button(\"竖屏\").onClick(() => {\n        this.changeOrientation(false)\n      })\n      Button(\"横屏\").onClick(() => {\n        this.changeOrientation(true)\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offwindowsizelayoutbreakpointchange22",
      children: "off('windowSizeLayoutBreakpointChange')22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除之前注册的窗口尺寸布局断点变化回调函数。如果未提供回调函数参数，将移除指定上下文的所有回调函数。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件，固定为'windowSizeLayoutBreakpointChange'，用于监听窗口尺寸布局断点发生改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#windowsizelayoutbreakpointinfo22",
              children: "WindowSizeLayoutBreakpointInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要被注销的回调函数。若不指定具体的回调函数，则注销该", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            }), "下所有窗口尺寸布局断点变化事件监听。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwindowsizelayoutbreakpointchange22",
        children: "on('windowSizeLayoutBreakpointChange')"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onswipercontentupdate22",
      children: "onSwiperContentUpdate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听Swiper内容的切换事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#swipercontentinfo22",
              children: "SwiperContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { SwiperContentInfo } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: SwiperContentInfo) {\n  console.info('swiperContentUpdate', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct SwiperExample {\n  private swiperController: SwiperController = new SwiperController();\n\n  aboutToAppear(): void {\n    // 注册swiperContentUpdate监听回调\n    this.getUIContext().getUIObserver().onSwiperContentUpdate(callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    // 取消swiperContentUpdate监听回调\n    this.getUIContext().getUIObserver().offSwiperContentUpdate(callbackFunc);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Swiper(this.swiperController) {\n        Column() {\n          Text(\"SwiperItem1\")\n        }.width('100%').height('100%').backgroundColor('#00CB87')\n\n        Column() {\n          Text(\"SwiperItem2\")\n        }.width('100%').height('100%').backgroundColor('#007DFF')\n\n        Column() {\n          Text(\"SwiperItem3\")\n        }.width('100%').height('100%').backgroundColor('#FFBF00')\n\n        Column() {\n          Text(\"SwiperItem4\")\n        }.width('100%').height('100%').backgroundColor('#E67C92')\n      }\n      .width(360)\n      .height(300)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offswipercontentupdate22",
      children: "offSwiperContentUpdate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听Swiper内容的切换事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#swipercontentinfo22",
              children: "SwiperContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onswipercontentupdate22",
        children: "onSwiperContentUpdate"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onswipercontentupdate22-1",
      children: "onSwiperContentUpdate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Swiper组件的id监听Swiper内容的切换事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定监听的Swiper组件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#swipercontentinfo22",
              children: "SwiperContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { SwiperContentInfo } from '@kit.ArkUI';\n\n// 定义监听回调函数\nfunction callbackFunc(info: SwiperContentInfo) {\n  console.info('swiperContentUpdate', JSON.stringify(info));\n}\n\n@Entry\n@Component\nstruct SwiperExample {\n  private swiperController: SwiperController = new SwiperController();\n\n  aboutToAppear(): void {\n    // 通过id注册swiperContentUpdate监听回调\n    this.getUIContext().getUIObserver().onSwiperContentUpdate({ id: 'swiperId' }, callbackFunc);\n  }\n\n  aboutToDisappear(): void {\n    // 通过id取消swiperContentUpdate监听回调\n    this.getUIContext().getUIObserver().offSwiperContentUpdate({ id: 'swiperId' }, callbackFunc);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Swiper(this.swiperController) {\n        Column() {\n          Text(\"SwiperItem1\")\n        }.width('100%').height('100%').backgroundColor('#00CB87')\n\n        Column() {\n          Text(\"SwiperItem2\")\n        }.width('100%').height('100%').backgroundColor('#007DFF')\n\n        Column() {\n          Text(\"SwiperItem3\")\n        }.width('100%').height('100%').backgroundColor('#FFBF00')\n\n        Column() {\n          Text(\"SwiperItem4\")\n        }.width('100%').height('100%').backgroundColor('#E67C92')\n      }\n      .id(\"swiperId\")\n      .width(360)\n      .height(300)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offswipercontentupdate22-1",
      children: "offSwiperContentUpdate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消通过Swiper组件id监听的Swiper内容切换事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#observeroptions12",
              children: "ObserverOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定监听的Swiper组件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#swipercontentinfo22",
              children: "SwiperContentInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onswipercontentupdate22-1",
        children: "onSwiperContentUpdate"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrouterpagesizechange23",
      children: "onRouterPageSizeChange23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册监听回调函数，当可见的Router页面大小发生变化时，会触发该回调函数。使用callback异步回调。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#routerpageinfo",
              children: "RouterPageInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带RouterPageInfo，返回Router页面的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\n\nfunction myPageRouterPageSizeCallback(info: uiObserver.RouterPageInfo): void {\n  console.info(`testTag pageSize changeTo ${(info && info.size) ? JSON.stringify(info.size) : 'NA'}`);\n}\n\n@Entry\n@Component\nstruct QueryRouterPageSize {\n  aboutToAppear(): void {\n    // 可以通过注册监听的方式获取页面大小信息\n    this.getUIContext().getUIObserver().onRouterPageSizeChange(myPageRouterPageSizeCallback);\n  }\n\n  aboutToDisappear(): void {\n    this.getUIContext().getUIObserver().offRouterPageSizeChange(myPageRouterPageSizeCallback);\n  }\n\n  build() {\n    Column() {\n      Button('querySize').onClick(() => {\n        // 也可以主动获取页面大小信息\n        let info = this.queryRouterPageInfo();\n        console.info(`testTag pageSize: ${info && info.size ? JSON.stringify(info.size) : \"NA\"}`)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offrouterpagesizechange23",
      children: "offRouterPageSizeChange23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除使用onRouterPageSizeChange接口注册的监听回调函数。使用callback异步回调。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#routerpageinfo",
              children: "RouterPageInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被移除的回调函数。不传参数时，移除所有回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onrouterpagesizechange23",
        children: "onRouterPageSizeChange"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationsizechange23",
      children: "onNavDestinationSizeChange23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册监听回调函数，当可见的NavDestination大小发生变化时，会触发该回调函数。使用callback异步回调。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带NavDestinationInfo，返回NavDestination的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\n\n@Component\nstruct PageOneContent {\n  destSizeCallback(info: uiObserver.NavDestinationInfo): void {\n    console.info(`testTag destSize changeTo ${(info && info.size) ? JSON.stringify(info.size) : \"NA\"}`)\n  }\n\n  aboutToAppear(): void {\n    // 可以通过注册监听的方式获取NavDestination页面大小信息\n    this.getUIContext().getUIObserver().onNavDestinationSizeChange(this.destSizeCallback);\n  }\n\n  aboutToDisappear(): void {\n    this.getUIContext().getUIObserver().offNavDestinationSizeChange(this.destSizeCallback);\n  }\n\n  build() {\n    Column() {\n      Button('queryDestSize').onClick(() => {\n        // 也可以主动获取NavDestination页面大小信息\n        let info = this.queryNavDestinationInfo();\n        console.info(`testTag destSize: ${(info && info.size) ? JSON.stringify(info.size) : \"NA\"}`)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      PageOneContent()\n    }\n    .title('pageOne')\n  }\n}\n\n@Entry\n@Component\nstruct QueryNavDestinationSize {\n  private stack: NavPathStack = new NavPathStack();\n\n  aboutToAppear(): void {\n    this.stack.pushPath({name: 'one'});\n  }\n\n  @Builder\n  MyPageMap(name: string) {\n    PageOne()\n  }\n\n  build() {\n    Navigation(this.stack) {\n    }\n    .width('100%')\n    .height('100%')\n    .navDestination(this.MyPageMap)\n    .hideNavBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationsizechange23",
      children: "offNavDestinationSizeChange23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除使用onNavDestinationSizeChange接口注册的监听回调函数。使用callback异步回调。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被移除的回调函数。不传参数时，移除所有回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationsizechange23",
        children: "onNavDestinationSizeChange"
      }), "接口示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavdestinationsizechangebyuniqueid23",
      children: "onNavDestinationSizeChangeByUniqueId23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册监听回调函数，当属于指定Navigation的可见NavDestination的大小发生变化时，会触发该回调函数。使用callback异步回调。"
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
            children: "navigationUniqueId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["希望监听NavDestination所属的Navigation的唯一ID，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
              children: "queryNavigationInfo"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。携带NavDestinationInfo，返回NavDestination的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\n\n@Component\nstruct PageOneContent {\n  private navUniqueId: number = 0;\n\n  destSizeCallback(info: uiObserver.NavDestinationInfo): void {\n    console.info(`testTag destSize changeTo ${(info && info.size) ? JSON.stringify(info.size) : \"NA\"}`)\n  }\n\n  aboutToAppear(): void {\n    let navInfo = this.queryNavigationInfo();\n    if (navInfo && navInfo.uniqueId) {\n      this.navUniqueId = navInfo.uniqueId;\n      // 可以通过注册监听的方式获取NavDestination页面大小信息\n      this.getUIContext().getUIObserver().onNavDestinationSizeChangeByUniqueId(this.navUniqueId, this.destSizeCallback);\n    }\n  }\n\n  aboutToDisappear(): void {\n    this.getUIContext().getUIObserver().offNavDestinationSizeChangeByUniqueId(this.navUniqueId, this.destSizeCallback);\n  }\n\n  build() {\n    Column() {\n      Button('queryDestSize').onClick(() => {\n        // 也可以主动获取NavDestination页面大小信息\n        let info = this.queryNavDestinationInfo();\n        console.info(`testTag destSize: ${(info && info.size) ? JSON.stringify(info.size) : \"NA\"}`)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Component\nstruct PageOne {\n  build() {\n    NavDestination() {\n      PageOneContent()\n    }\n    .title('pageOne')\n  }\n}\n\n@Entry\n@Component\nstruct QueryNavDestinationSize {\n  private stack: NavPathStack = new NavPathStack();\n\n  aboutToAppear(): void {\n    this.stack.pushPath({name: 'one'});\n  }\n\n  @Builder\n  MyPageMap(name: string) {\n    PageOne()\n  }\n\n  build() {\n    Navigation(this.stack) {\n    }\n    .width('100%')\n    .height('100%')\n    .navDestination(this.MyPageMap)\n    .hideNavBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offnavdestinationsizechangebyuniqueid23",
      children: "offNavDestinationSizeChangeByUniqueId23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除使用onNavDestinationSizeChangeByUniqueId接口注册的监听回调函数。使用callback异步回调。"
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
            children: "navigationUniqueId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["希望监听的NavDestination所属的Navigation的唯一ID，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#querynavigationinfo12",
              children: "queryNavigationInfo"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<observer.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer#navdestinationinfo",
              children: "NavDestinationInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被移除的回调函数。不传参数时，移除所有指定了相同navigationUniqueId的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onnavdestinationsizechangebyuniqueid23",
        children: "onNavDestinationSizeChangeByUniqueId"
      }), "接口示例。"]
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
828073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479417-a4b109e3eac20a3ba30963101e2dbc10.gif");

},
580545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799768-1aa8fe46d69d8c7f3ed1f543c93bab32.gif");

},
509743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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