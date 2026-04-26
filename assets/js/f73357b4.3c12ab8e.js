"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["945199"], {
382325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_page_transition_animation_arkts_page_transition_animation_md_f73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-page-transition-animation-arkts-page-transition-animation-md-f73.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_page_transition_animation_arkts_page_transition_animation_md_f73_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/arkts-page-transition-animation","title":"页面转场动画 (不推荐)","description":"为了实现更好的转场效果，推荐使用Navigation转场动画和模态转场。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/arkts-page-transition-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"页面转场动画 (不推荐)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-page-transition-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"旋转屏动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/"},"next":{"title":"粒子动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/arkts-page-transition-animation.md


const frontMatter = {
	title: '页面转场动画 (不推荐)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-page-transition-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '页面转场动画 (不推荐)';

const assets = {

};



const toc = [{
  "value": "type配置为RouteType.None",
  "id": "type配置为routetypenone",
  "level": 2
}, {
  "value": "type配置为RouteType.Push或RouteType.Pop",
  "id": "type配置为routetypepush或routetypepop",
  "level": 2
}, {
  "value": "禁用某页面的页面转场",
  "id": "禁用某页面的页面转场",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
        id: "页面转场动画-不推荐",
        children: "页面转场动画 (不推荐)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了实现更好的转场效果，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation",
        children: "Navigation转场动画"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition",
        children: "模态转场"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两个页面间发生跳转，一个页面消失，另一个页面出现，这时可以配置各自页面的页面转场参数实现自定义的页面转场效果。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation",
        children: "页面转场"
      }), "效果写在pageTransition函数中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#pagetransitionenter",
        children: "PageTransitionEnter"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#pagetransitionexit",
        children: "PageTransitionExit"
      }), "指定页面进入和退出的动画效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pageTransition的函数为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pageTransition() {\n  PageTransitionEnter()\n  PageTransitionExit()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageTransitionEnter的接口为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PageTransitionEnter({ type?: RouteType, duration?: number, curve?: Curve | string, delay?: number })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageTransitionExit的接口为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PageTransitionExit({ type?: RouteType, duration?: number, curve?: Curve | string, delay?: number })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述接口定义了PageTransitionEnter和PageTransitionExit组件，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#slide",
        children: "slide"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#translate",
        children: "translate"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#scale",
        children: "scale"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#opacity",
        children: "opacity"
      }), "属性定义不同的页面转场效果。对于PageTransitionEnter而言，这些效果表示入场时起点值，对于PageTransitionExit而言，这些效果表示退场的终点值，这一点与组件转场", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component",
        children: "transition"
      }), "配置方法类似。此外，PageTransitionEnter提供了onEnter接口进行自定义页面入场动画的回调，PageTransitionExit提供了onExit接口进行自定义页面退场动画的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述接口中的参数type，表示路由生效的类型，这一点开发者容易混淆其含义。页面转场的两个页面，必定有一个页面退出，一个页面进入。如果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#pushurl",
        children: "pushUrl"
      }), "操作从页面A跳转到页面B，则页面A退出，做页面退场动画，页面B进入，做页面入场动画。如果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "back"
      }), "操作从页面B返回到页面A，则页面B退出，做页面退场动画，页面A进入，做页面入场动画。即页面的PageTransitionEnter既可能是由于新增页面(push，入栈)引起的新页面的入场动画，也可能是由于页面返回(back，或pop，出栈)引起的页面栈中老页面的入场动画，为了能区分这两种形式的入场动画，提供了type参数，这样开发者能完全定义所有类型的页面转场效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type配置为routetypenone",
      children: "type配置为RouteType.None"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type为RouteType.None表示对页面栈的push、pop操作均生效，type的默认值为RouteType.None。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// page A\npageTransition() {\n  // 定义页面进入时的效果，从左侧滑入，时长为1200ms，无论页面栈发生push还是pop操作均可生效\n  PageTransitionEnter({ type: RouteType.None, duration: 1200 })\n    .slide(SlideEffect.Left)\n  // 定义页面退出时的效果，向左侧滑出，时长为1000ms，无论页面栈发生push还是pop操作均可生效\n  PageTransitionExit({ type: RouteType.None, duration: 1000 })\n    .slide(SlideEffect.Left)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// page B\npageTransition() {\n  // 定义页面进入时的效果，从右侧滑入，时长为1000ms，无论页面栈发生push还是pop操作均可生效\n  PageTransitionEnter({ type: RouteType.None, duration: 1000 })\n    .slide(SlideEffect.Right)\n  // 定义页面退出时的效果，向右侧滑出，时长为1200ms，无论页面栈发生push还是pop操作均可生效\n  PageTransitionExit({ type: RouteType.None, duration: 1200 })\n    .slide(SlideEffect.Right)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设页面跳转配置为多实例模式，即页面栈中允许存在重复的页面。可能会有4种场景，对应的页面转场效果如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "路由操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "页面A转场效果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "页面B转场效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushUrl，从页面A跳转到新增的页面B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit生效，向左侧滑出屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter生效，从右侧滑入屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "back，从页面B返回到页面A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter生效，从左侧滑入屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit生效，向右侧滑出屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushUrl，从页面B跳转到新增的页面A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter生效，从左侧滑入屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit生效，向右侧滑出屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "back，从页面A返回到页面B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit生效，向左侧滑出屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter生效，从右侧滑入屏幕"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果希望pushUrl进入的页面总是从右侧滑入，back时退出的页面总是从右侧滑出，则上表中的第3、4种情况不满足要求，那么需要完整的定义4个页面转场效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type配置为routetypepush或routetypepop",
      children: "type配置为RouteType.Push或RouteType.Pop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#pagetransitionoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "type"
      }), "为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation#routetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "RouteType.Push"
      }), "表示仅对页面栈的push操作生效，type为RouteType.Pop表示仅对页面栈的pop操作生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// page A\npageTransition() {\n  // 定义页面进入时的效果，从右侧滑入，时长为1200ms，页面栈发生push操作时该效果才生效\n  PageTransitionEnter({ type: RouteType.Push, duration: 1200 })\n    .slide(SlideEffect.Right)\n  // 定义页面进入时的效果，从左侧滑入，时长为1200ms，页面栈发生pop操作时该效果才生效\n  PageTransitionEnter({ type: RouteType.Pop, duration: 1200 })\n    .slide(SlideEffect.Left)\n  // 定义页面退出时的效果，向左侧滑出，时长为1000ms，页面栈发生push操作时该效果才生效\n  PageTransitionExit({ type: RouteType.Push, duration: 1000 })\n    .slide(SlideEffect.Left)\n  // 定义页面退出时的效果，向右侧滑出，时长为1000ms，页面栈发生pop操作时该效果才生效\n  PageTransitionExit({ type: RouteType.Pop, duration: 1000 })\n    .slide(SlideEffect.Right)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// page B\npageTransition() {\n  // 定义页面进入时的效果，从右侧滑入，时长为1000ms，页面栈发生push操作时该效果才生效\n  PageTransitionEnter({ type: RouteType.Push, duration: 1000 })\n    .slide(SlideEffect.Right)\n  // 定义页面进入时的效果，从左侧滑入，时长为1000ms，页面栈发生pop操作时该效果才生效\n  PageTransitionEnter({ type: RouteType.Pop, duration: 1000 })\n    .slide(SlideEffect.Left)\n  // 定义页面退出时的效果，向左侧滑出，时长为1200ms，页面栈发生push操作时该效果才生效\n  PageTransitionExit({ type: RouteType.Push, duration: 1200 })\n    .slide(SlideEffect.Left)\n  // 定义页面退出时的效果，向右侧滑出，时长为1200ms，页面栈发生pop操作时该效果才生效\n  PageTransitionExit({ type: RouteType.Pop, duration: 1200 })\n    .slide(SlideEffect.Right)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码则完整的定义了所有可能的页面转场样式。假设页面跳转配置为多实例模式，即页面栈中允许存在重复的页面。可能会有4种场景，对应的页面转场效果如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "路由操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "页面A转场效果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "页面B转场效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushUrl，从页面A跳转到新增的页面B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit且type为RouteType.Push的转场样式生效，向左侧滑出屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter且type为RouteType.Push的转场样式生效，从右侧滑入屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "back，从页面B返回到页面A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter且type为RouteType.Pop的转场样式生效，从左侧滑入屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit且type为RouteType.Pop的转场样式生效，向右侧滑出屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pushUrl，从页面B跳转到新增的页面A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter且type为RouteType.Push的转场样式生效，从右侧滑入屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit且type为RouteType.Push的转场样式生效，向左侧滑出屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "back，从页面A返回到页面B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面退出，PageTransitionExit且type为RouteType.Pop的转场样式生效，向右侧滑出屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面进入，PageTransitionEnter且type为RouteType.Pop的转场样式生效，从左侧滑入屏幕"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260072)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于每个页面的页面转场样式都可由开发者独立配置，而页面转场涉及到两个页面，开发者应考虑两个页面的页面转场效果的衔接，如时长尽量保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果没有定义匹配的页面转场样式，则该页面使用系统默认的页面转场样式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁用某页面的页面转场",
      children: "禁用某页面的页面转场"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置页面转场的时长为0，可使该页面无页面转场动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pageTransition() {\n  PageTransitionEnter({ type: RouteType.None, duration: 0 })\n  PageTransitionExit({ type: RouteType.None, duration: 0 })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面介绍了利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#pushurl",
        children: "pushUrl"
      }), "跳转能力定义了所有的四种页面转场样式的页面转场动画示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTransitionSrc1\n@Entry\n@Component\nstruct PageTransitionSrc1 {\n  build() {\n    Column() {\n      // 请将$r('app.media.mountain')替换为实际资源文件\n      Image($r('app.media.mountain'))\n        .width('90%')\n        .height('80%')\n        .objectFit(ImageFit.Fill)\n        .syncLoad(true) // 同步加载图片，使页面出现时图片已经加载完成\n        .margin(30)\n\n      Row({ space: 10 }) {\n        Button('pushUrl')\n          .onClick(() => {\n            // 路由到下一个页面，push操作\n            this.getUIContext().getRouter().pushUrl({ url: 'pages/pageTransition/template3/pageTransitionDst1' });\n          })\n        Button('back')\n          .onClick(() => {\n            // 返回到上一页面，相当于pop操作\n            this.getUIContext().getRouter().back();\n          })\n      }.justifyContent(FlexAlign.Center)\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  pageTransition() {\n    // 定义页面进入时的效果，从右侧滑入，时长为1000ms，页面栈发生push操作时该效果才生效\n    PageTransitionEnter({ type: RouteType.Push, duration: 1000 })\n      .slide(SlideEffect.Right)\n    // 定义页面进入时的效果，从左侧滑入，时长为1000ms，页面栈发生pop操作时该效果才生效\n    PageTransitionEnter({ type: RouteType.Pop, duration: 1000 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，向左侧滑出，时长为1000ms，页面栈发生push操作时该效果才生效\n    PageTransitionExit({ type: RouteType.Push, duration: 1000 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，向右侧滑出，时长为1000ms，页面栈发生pop操作时该效果才生效\n    PageTransitionExit({ type: RouteType.Pop, duration: 1000 })\n      .slide(SlideEffect.Right)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTransitionDst1\n@Entry\n@Component\nstruct PageTransitionDst1 {\n  build() {\n    Column() {\n      // 请将$r('app.media.forest')替换为实际资源文件\n      Image($r('app.media.forest'))\n        .width('90%')\n        .height('80%')\n        .objectFit(ImageFit.Fill)\n        .syncLoad(true) // 同步加载图片，使页面出现时图片已经加载完成\n        .margin(30)\n\n      Row({ space: 10 }) {\n        Button('pushUrl')\n          .onClick(() => {\n            // 路由到下一页面，push操作\n            this.getUIContext().getRouter().pushUrl({ url: 'pages/pageTransition/template3/pageTransitionSrc1' });\n          })\n        Button('back')\n          .onClick(() => {\n            // 返回到上一页面，相当于pop操作\n            this.getUIContext().getRouter().back();\n          })\n      }.justifyContent(FlexAlign.Center)\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  pageTransition() {\n    // 定义页面进入时的效果，从右侧滑入，时长为1000ms，页面栈发生push操作时该效果才生效\n    PageTransitionEnter({ type: RouteType.Push, duration: 1000 })\n      .slide(SlideEffect.Right)\n    // 定义页面进入时的效果，从左侧滑入，时长为1000ms，页面栈发生pop操作时该效果才生效\n    PageTransitionEnter({ type: RouteType.Pop, duration: 1000 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，向左侧滑出，时长为1000ms，页面栈发生push操作时该效果才生效\n    PageTransitionExit({ type: RouteType.Push, duration: 1000 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，向右侧滑出，时长为1000ms，页面栈发生pop操作时该效果才生效\n    PageTransitionExit({ type: RouteType.Pop, duration: 1000 })\n      .slide(SlideEffect.Right)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788572)/* ["default"] */.A) + "",
        width: "480",
        height: "886"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍使用了type为None的页面转场动画示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTransitionSrc2\n@Entry\n@Component\nstruct PageTransitionSrc2 {\n  build() {\n    Column() {\n      // 请将$r('app.media.mountain')替换为实际资源文件\n      Image($r('app.media.mountain'))\n        .width('90%')\n        .height('80%')\n        .objectFit(ImageFit.Fill)\n        .syncLoad(true) // 同步加载图片，使页面出现时图片已经加载完成\n        .margin(30)\n\n      Row({ space: 10 }) {\n        Button('pushUrl')\n          .onClick(() => {\n            // 路由到下一页面，push操作\n            this.getUIContext().getRouter().pushUrl({ url: 'pages/pageTransition/template4/pageTransitionDst2' });\n          })\n        Button('back')\n          .onClick(() => {\n            // 返回到上一页面，相当于pop操作\n            this.getUIContext().getRouter().back();\n          })\n      }.justifyContent(FlexAlign.Center)\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  pageTransition() {\n    // 定义页面进入时的效果，从左侧滑入，时长为1000ms，无论页面栈发生push还是pop操作均可生效\n    PageTransitionEnter({ duration: 1000 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，相对于正常页面位置x方向平移100vp，y方向平移100vp，透明度变为0，时长为1200ms，无论页面栈发生push还是pop操作均可生效\n    PageTransitionExit({ duration: 1200 })\n      .translate({ x: 100.0, y: 100.0 })\n      .opacity(0)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTransitionDst2\n@Entry\n@Component\nstruct PageTransitionDst2 {\n  build() {\n    Column() {\n      // 请将$r('app.media.forest')替换为实际资源文件\n      Image($r('app.media.forest'))\n        .width('90%')\n        .height('80%')\n        .objectFit(ImageFit.Fill)\n        .syncLoad(true) // 同步加载图片，使页面出现时图片已经加载完成\n        .margin(30)\n\n      Row({ space: 10 }) {\n        Button('pushUrl')\n          .onClick(() => {\n            // 路由到下一页面，push操作\n            this.getUIContext().getRouter().pushUrl({ url: 'pages/pageTransition/template4/pageTransitionSrc2' });\n          })\n        Button('back')\n          .onClick(() => {\n            // 返回到上一页面，相当于pop操作\n            this.getUIContext().getRouter().back();\n          })\n      }.justifyContent(FlexAlign.Center)\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  pageTransition() {\n    // 定义页面进入时的效果，从左侧滑入，时长为1200ms，无论页面栈发生push还是pop操作均可生效\n    PageTransitionEnter({ duration: 1200 })\n      .slide(SlideEffect.Left)\n    // 定义页面退出时的效果，相对于正常页面位置x方向平移100vp，y方向平移100vp，透明度变为0，时长为1000ms，无论页面栈发生push还是pop操作均可生效\n    PageTransitionExit({ duration: 1000 })\n      .translate({ x: 100.0, y: 100.0 })\n      .opacity(0)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(692149)/* ["default"] */.A) + "",
        width: "480",
        height: "886"
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
788572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438037-8755cbbde1f502dd098759b6bd3e2a1f.gif");

},
260072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
692149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957992-f5c00ded4e9d4fc0582a8ecc3e2b4c57.gif");

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