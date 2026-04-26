"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["925863"], {
256756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_nested_scrolling_web_nested_scrolling_md_151_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-nested-scrolling-web-nested-scrolling-md-151.json
var site_docs_arkweb_web_manage_page_interaction_web_nested_scrolling_web_nested_scrolling_md_151_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-nested-scrolling/web-nested-scrolling","title":"Web组件嵌套滚动","description":"Web组件嵌套滚动的典型应用场景为，在页面中，多个独立区域需进行滚动，当用户滚动Web区域内容时，可联动其他滚动区域，实现上下左右全方位滑动页面的嵌套滚动体验。内嵌于可滚动容器（Grid、List、Scroll、Swiper、Tabs、WaterFlow、Refresh、bindSheet）中的Web组件，接收到滑动手势事件后，需要设置ArkUI的NestedScrollMode枚举属性，实现Web组件与ArkUI可滚动容器的嵌套滚动。","source":"@site/docs/arkweb/web-manage-page-interaction/web-nested-scrolling/web-nested-scrolling.md","sourceDirName":"arkweb/web-manage-page-interaction/web-nested-scrolling","slug":"/arkweb/web-manage-page-interaction/web-nested-scrolling/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-nested-scrolling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Web组件嵌套滚动","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-nested-scrolling","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"建立应用侧与前端页面数据通道(C/C++)","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/"},"next":{"title":"Web页面显示内容滚动","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-content-scrolling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-nested-scrolling/web-nested-scrolling.md


const frontMatter = {
	title: 'Web组件嵌套滚动',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-nested-scrolling',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件嵌套滚动';

const assets = {

};



const toc = [{
  "value": "使用nestedScroll属性实现嵌套滚动",
  "id": "使用nestedscroll属性实现嵌套滚动",
  "level": 2
}, {
  "value": "滚动偏移量由滚动父组件统一派发",
  "id": "滚动偏移量由滚动父组件统一派发",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "web组件嵌套滚动",
        children: "Web组件嵌套滚动"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件嵌套滚动的典型应用场景为，在页面中，多个独立区域需进行滚动，当用户滚动Web区域内容时，可联动其他滚动区域，实现上下左右全方位滑动页面的嵌套滚动体验。内嵌于可滚动容器（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
        children: "Refresh"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
        children: "bindSheet"
      }), "）中的Web组件，接收到滑动手势事件后，需要设置ArkUI的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#nestedscrollmode10",
        children: "NestedScrollMode"
      }), "枚举属性，实现Web组件与ArkUI可滚动容器的嵌套滚动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件嵌套滚动可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8nestedscroll%E5%B1%9E%E6%80%A7%E5%AE%9E%E7%8E%B0%E5%B5%8C%E5%A5%97%E6%BB%9A%E5%8A%A8",
        children: "方案1：使用nestedScroll属性实现嵌套滚动"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BB%9A%E5%8A%A8%E5%81%8F%E7%A7%BB%E9%87%8F%E7%94%B1%E6%BB%9A%E5%8A%A8%E7%88%B6%E7%BB%84%E4%BB%B6%E7%BB%9F%E4%B8%80%E6%B4%BE%E5%8F%91",
        children: "方案2：滚动偏移量由滚动父组件统一派发"
      }), "两个方案实现，方案的选择应取决于应用嵌套滚动的具体业务场景。如果只是简单的Web组件与其他父组件联动滚动建议通过方案1实现；如果应用需要自定义控制Web组件和其他滚动组件滚动，以及一些复杂场景建议使用方案2。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771928)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果Web组件用到了全量展开的场景（layoutMode为WebLayoutMode.FIT_CONTENT），需要显式指明渲染模式(RenderMode.SYNC_RENDER)，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#layoutmode11",
        children: "layoutMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用nestedscroll属性实现嵌套滚动",
      children: "使用nestedScroll属性实现嵌套滚动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Web组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#nestedscroll11",
        children: "nestedScroll"
      }), "属性来设置上下左右四个方向，或者设置向前、向后两个方向的嵌套滚动模式，实现与父组件的滚动联动，同时也允许在过程中动态改变嵌套滚动的模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@ComponentV2\nstruct NestedScroll {\n  private scrollerForScroll: Scroller = new Scroller();\n  private listScroller: Scroller = new Scroller();\n  controller: webview.WebviewController = new webview.WebviewController();\n  @Local arr: Array<number> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n    this.arr.push(i);\n  }\n}\n\nbuild() {\n  Scroll(this.scrollerForScroll) {\n    Column() {\n      Web({ src: $rawfile('scroll.html'), controller: this.controller })\n        .nestedScroll({\n          scrollUp: NestedScrollMode.PARENT_FIRST, // 向上滚动父组件优先\n          scrollDown: NestedScrollMode.SELF_FIRST, // 向下滚动子组件优先\n        }).height('100%')\n      Repeat<number>(this.arr)\n        .each((item: RepeatItem<number>) => {\n          Text('Scroll Area')\n            .width('100%')\n            .height('40%')\n            .backgroundColor(0x330000FF)\n            .fontSize(16)\n            .textAlign(TextAlign.Center)\n        })\n    }\n  }\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- scroll.html -->\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta name=\"viewport\" id=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        .blue {\n            background-color: lightblue;\n        }\n\n        .green {\n            background-color: lightgreen;\n        }\n\n        .blue,\n        .green {\n            font-size: 16px;\n            height: 200px;\n            text-align: center;\n            /* 水平居中 */\n            line-height: 200px;\n            /* 垂直居中（值等于容器高度） */\n        }\n    </style>\n</head>\n\n<body>\n    <div class=\"blue\">webArea</div>\n    <div class=\"green\">webArea</div>\n    <div class=\"blue\">webArea</div>\n    <div class=\"green\">webArea</div>\n    <div class=\"blue\">webArea</div>\n    <div class=\"green\">webArea</div>\n    <div class=\"blue\">webArea</div>\n</body>\n\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52811)/* ["default"] */.A) + "",
        width: "424",
        height: "858"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滚动偏移量由滚动父组件统一派发",
      children: "滚动偏移量由滚动父组件统一派发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现思路"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手指向上滑动："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 如果Web页面没有滚动到底部，Scroll组件将滚动偏移量派发给Web，Scroll组件自身不滚动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 如果Web页面滚动至底部，而Scroll组件尚未滚动至底部，则仅Scroll组件自身滚动，不向Web组件和List组件派发滚动偏移量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(3) 如果Scroll组件滚动到底部，则滚动偏移量派发给List组件，Scroll组件自身不滚动。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手指向下滑动："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 如果List组件没有滚动到顶部，则Scroll组件将滚动偏移量派发给List组件，Scroll组件自身不滚动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 当List组件滚动至顶部，而Scroll组件未到达顶部时，Scroll组件将自行滚动，滚动偏移量不会派发给List组件和Web组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(3) 如果Scroll组件滚动到顶部，则滚动偏移量派发给Web，Scroll组件自身不滚动。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "关键实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何禁用Web组件滚动手势。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(1) 首先调用Web组件滚动控制器方法，设置Web禁用触摸（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setscrollable12",
            children: "setScrollable"
          }), "）的滚动。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.webController.setScrollable(false, webview.ScrollType.EVENT);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(2) 再使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin13",
            children: "onGestureRecognizerJudgeBegin"
          }), "方法，禁止Web组件自带的滚动手势触发。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer, otherArray<GestureRecognizer>) => {\n  if (current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n    return GestureJudgeResult.REJECT;\n  }\n  return GestureJudgeResult.CONTINUE;\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何禁用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "组件的手势。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".enableScrollInteraction(false)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何检测List组件、Scroll组件是否滚动到边界。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 滚动到上边界：scroller.currentOffset().yOffset <= 0;"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 滚动到下边界：scroller.isAtEnd() == true;"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何检测Web组件是否滚动到边界。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 获取Web组件自身高度、内容高度和当前滚动偏移量来判定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 判断Web组件是否滚动到顶部：webController.getPageOffset().y == 0;"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(3) 判断Web组件是否滚动到底部：webController.getPageOffset().y + this.webHeight >= webController.getPageHeight();"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(4) 获取Web组件自身高度：webController.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getpageheight",
            children: "getPageHeight()"
          }), ";"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(5) 获取Web组件窗口高度：webController?.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascriptext10",
            children: "runJavaScriptExt"
          }), "('window.innerHeight');"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(6) 获取Web组件的滚动偏移量：webController.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getpageoffset20",
            children: "getPageOffset()"
          }), ";"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何让Scroll组件不滚动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Scroll组件绑定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#onscrollframebegin9",
            children: "onScrollFrameBegin"
          }), "事件，将剩余滚动偏移量返回0，Scroll组件就不滚动，也不会停止惯性滚动动画。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滚动偏移量如何派发给List组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.listScroller.scrollBy(0, offset)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滚动偏移量如何派发给Web组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.webController.scrollBy(0, offset)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置Web组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#bypassvsynccondition20",
            children: "bypassVsyncCondition"
          }), "为WebBypassVsyncCondition.SCROLLBY_FROM_ZERO_OFFSET，加快Web组件首帧滚动绘制。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".bypassVsyncCondition(WebBypassVsyncCondition.SCROLLBY_FROM_ZERO_OFFSET)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@ComponentV2\nstruct Index {\n  private scroller: Scroller = new Scroller()\n  private listScroller: Scroller = new Scroller()\n  private webController: webview.WebviewController = new webview.WebviewController()\n  private isWebAtEnd: boolean = false\n  private webHeight: number = 0\n  @Local arr: Array<number> = []\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      this.arr.push(i)\n    }\n  }\n\n  getWebHeight() {\n    try {\n      this.webController?.runJavaScriptExt('window.innerHeight',\n        (error, result) => {\n          if (error || !result) {\n            return;\n          }\n          if (result.getType() === webview.JsMessageType.NUMBER) {\n            this.webHeight = result.getNumber()\n          }\n        })\n    } catch (error) {\n    }\n  }\n\n  checkScrollBottom() {\n    this.isWebAtEnd = false;\n    if (this.webController.getPageOffset().y + this.webHeight >= this.webController.getPageHeight()) {\n      this.isWebAtEnd = true;\n    }\n  }\n\n  build() {\n    Scroll(this.scroller) {\n      Column() {\n        Web({\n          src: $rawfile('scroll.html'),\n          controller: this.webController,\n        }).height('100%')\n          .bypassVsyncCondition(WebBypassVsyncCondition.SCROLLBY_FROM_ZERO_OFFSET)\n          .onPageEnd(() => {\n            this.webController.setScrollable(false, webview.ScrollType.EVENT);\n            this.getWebHeight();\n          })\n          // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n          .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n            others: Array<GestureRecognizer>) => {\n            if (current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n              return GestureJudgeResult.REJECT;\n            }\n            return GestureJudgeResult.CONTINUE;\n          })\n        List({ scroller: this.listScroller }) {\n          Repeat<number>(this.arr)\n            .each((item: RepeatItem<number>) => {\n              ListItem() {\n                Text('Scroll Area')\n                  .width('100%')\n                  .height('40%')\n                  .backgroundColor(0x330000FF)\n                  .fontSize(16)\n                  .textAlign(TextAlign.Center)\n              }\n            })\n        }.height('100%')\n        .maintainVisibleContentPosition(true)\n        .enableScrollInteraction(false)\n      }\n    }\n    .onScrollFrameBegin((offset: number, state: ScrollState) => {\n      this.checkScrollBottom();\n      if (offset > 0) {\n        if (!this.isWebAtEnd) {\n          this.webController.scrollBy(0, offset)\n          return { offsetRemain: 0 }\n        } else if (this.scroller.isAtEnd()) {\n          this.listScroller.scrollBy(0, offset)\n          return { offsetRemain: 0 }\n        }\n      } else if (offset < 0) {\n        if (this.listScroller.currentOffset().yOffset > 0) {\n          this.listScroller.scrollBy(0, offset)\n          return { offsetRemain: 0 }\n        } else if (this.scroller.currentOffset().yOffset <= 0) {\n          this.webController.scrollBy(0, offset)\n          return { offsetRemain: 0 }\n        }\n      }\n      return { offsetRemain: offset }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- scroll.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" id=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        .blue {\n          background-color: lightblue;\n        }\n        .green {\n          background-color: lightgreen;\n        }\n        .blue, .green {\n         font-size:16px;\n         height:200px;\n         text-align: center;       /* 水平居中 */\n         line-height: 200px;       /* 垂直居中（值等于容器高度） */\n        }\n    </style>\n</head>\n<body>\n<div class=\"blue\" >webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523348)/* ["default"] */.A) + "",
        width: "424",
        height: "858"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/web-scroller",
          children: "Web组件嵌套滑动"
        })
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
52811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478215-a70e278bc618f6b8b59cdc9a8ebd0253.gif");

},
523348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798566-ef13a883389c6363b4abe2b48f3aa545.gif");

},
771928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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