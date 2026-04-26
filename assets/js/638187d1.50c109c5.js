"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["803978"], {
12360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_gesture_judge_arkts_gesture_events_gesture_judge_md_638_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-support-gesture-arkts-gesture-events-gesture-judge-arkts-gesture-events-gesture-judge-md-638.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_gesture_judge_arkts_gesture_events_gesture_judge_md_638_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/arkts-gesture-events-gesture-judge","title":"手势冲突处理","description":"手势冲突是指多个手势识别器在同一组件或重叠区域同时识别时产生竞争，导致识别结果不符合预期。常见冲突场景包括：","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/arkts-gesture-events-gesture-judge.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"手势冲突处理","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-gesture-judge","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多层级手势事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/"},"next":{"title":"支持统一拖拽","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/arkts-gesture-events-gesture-judge.md


const frontMatter = {
	title: '手势冲突处理',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-gesture-judge',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '手势冲突处理';

const assets = {

};



const toc = [{
  "value": "自定义手势判定",
  "id": "自定义手势判定",
  "level": 2
}, {
  "value": "手势并行动态控制",
  "id": "手势并行动态控制",
  "level": 2
}, {
  "value": "阻止手势参与识别",
  "id": "阻止手势参与识别",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "手势冲突处理",
        children: "手势冲突处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势冲突是指多个手势识别器在同一组件或重叠区域同时识别时产生竞争，导致识别结果不符合预期。常见冲突场景包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一组件上的多手势（如按钮同时添加点击与长按手势）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父子组件的同类型手势识别器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统默认手势与自定义手势（如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
          children: "Scroll"
        }), "滑动手势与子组件点击手势冲突）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["干预手势处理可有效解决冲突，除控制组件响应热区和命中测试模式外，主要通过以下三种方式：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%8B%E5%8A%BF%E5%88%A4%E5%AE%9A",
        children: "自定义手势判定"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%8B%E5%8A%BF%E5%B9%B6%E8%A1%8C%E5%8A%A8%E6%80%81%E6%8E%A7%E5%88%B6",
        children: "手势并行动态控制"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%98%BB%E6%AD%A2%E6%89%8B%E5%8A%BF%E5%8F%82%E4%B8%8E%E8%AF%86%E5%88%AB",
        children: "阻止手势参与识别"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义手势判定",
      children: "自定义手势判定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义手势判定是指在系统判定阈值已满足的条件下，应用可自行判断是否应拦截该手势，使该手势识别失败，从而将识别成功的机会留给其他手势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 自定义手势判定流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395303)/* ["default"] */.A) + "",
        width: "989",
        height: "297"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义手势判定涉及以下接口。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#ongesturejudgebegin",
              children: "onGestureJudgeBegin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于手势拦截，是通用事件。在手势满足系统触发阈值场景下，回调给应用判断是否拦截手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin",
              children: "onGestureRecognizerJudgeBegin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于手势拦截、获取手势识别器和设置手势识别器开闭状态。是onGestureJudgeBegin接口的能力扩展，可以代替onGestureJudgeBegin接口。  获取手势识别器时，会获取一次交互中手势响应链上的所有手势识别器，以及当前即将触发成功的手势识别器，此时可以设置手势的激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，Image和Stack两个组件位于同一区域。长按Stack组件的上半部分可触发挂载在Stack组件上的长按手势，长按Stack组件的下半部分则会响应Image组件的拖拽操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 示例图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(389227)/* ["default"] */.A) + "",
        width: "231",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image组件设置拖拽。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// $r('sys.media.ohos_app_icon') 需要替换为开发者所需的资源文件\nImage($r('sys.media.ohos_app_icon'))\n  .draggable(true)\n  .onDragStart(()=>{\n    // ...\n    // 请将$r('app.string.Allow_dragging_prompt')替换为实际资源文件，在本示例中该资源文件的value值为\"Drag 下半区蓝色区域，Image响应\"\n    promptAction.showToast({ message: $r('app.string.Allow_dragging_prompt') });\n  })\n  .width('200vp').height('200vp')\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stack组件设置手势。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Stack() {}\n.width('200vp')\n.height('200vp')\n.hitTestBehavior(HitTestMode.Transparent)\n.gesture(GestureGroup(GestureMode.Parallel,\n  LongPressGesture()\n    .onAction((event: GestureEvent) => {\n      // ...\n      /*\n      请将$r('app.string.Stop_dragging_prompt')替换为实际资源文件，在本示例中\n      该资源文件的value值为\"LongPressGesture 长按上半区 红色区域，红色区域响应\"\n       */\n      promptAction.showToast({ message: $r('app.string.Stop_dragging_prompt')  });\n    })\n    .tag('longpress')\n))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stack组件设置拦截。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n  // 如果是长按类型手势，判断点击的位置是否在上半区\n  if (gestureInfo.type == GestureControl.GestureType.LONG_PRESS_GESTURE) {\n    if (event.fingerList.length > 0 && event.fingerList[0].localY < 100) {\n      return GestureJudgeResult.CONTINUE;\n    } else {\n      return GestureJudgeResult.REJECT;\n    }\n  };\n  return GestureJudgeResult.CONTINUE;\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码完整示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  promptAction: PromptAction = this.getUIContext().getPromptAction();\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        /*\n        请将$r('app.string.Drag_instructions')替换为实际资源文件，在本示例中该资源文件的value值为\"包括上下两层组件，上层组件绑定长按手势，\n        下层组件绑定拖拽。其中上层组件下半区域绑定手势拦截，使该区域响应下层拖拽手势。\"\n         */\n        Text($r('app.string.Drag_instructions')).width('100%').fontSize(20).fontColor('0xffdd00')\n        Stack({ alignContent: Alignment.Center }) {\n          Column() {\n            // 模拟上半区和下半区\n            Stack().width('200vp').height('100vp').backgroundColor(Color.Gray)\n            Stack().width('200vp').height('100vp').backgroundColor(Color.Blue)\n          }.width('200vp').height('200vp')\n\n          // Stack的下半区是绑定了滑动手势的图像区域。\n          // $r('sys.media.ohos_app_icon') 需要替换为开发者所需的资源文件\n          Image($r('sys.media.ohos_app_icon'))\n            .draggable(true)\n            .onDragStart(() => {\n              // 请将$r('app.string.Allow_dragging_prompt')替换为实际资源文件，在本示例中该资源文件的value值为\"Drag 下半区蓝色区域，Image响应\"\n              this.promptAction.showToast({ message: $r('app.string.Allow_dragging_prompt') });\n            })\n            .width('200vp').height('200vp')\n          // Stack的上半区是绑定了长按手势的浮动区域。\n          Stack() {\n          }\n          .width('200vp')\n          .height('200vp')\n          .hitTestBehavior(HitTestMode.Transparent)\n          .gesture(GestureGroup(GestureMode.Parallel,\n            LongPressGesture()\n              .onAction((event: GestureEvent) => {\n                /*\n                请将$r('app.string.Stop_dragging_prompt')替换为实际资源文件，在本示例中\n                该资源文件的value值为\"LongPressGesture 长按上半区 红色区域，红色区域响应\"\n                 */\n                this.promptAction.showToast({ message: $r('app.string.Stop_dragging_prompt') });\n              })\n              .tag('longpress')\n          ))\n          .onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n            // 如果是长按类型手势，判断点击的位置是否在上半区\n            if (gestureInfo.type == GestureControl.GestureType.LONG_PRESS_GESTURE) {\n              if (event.fingerList.length > 0 && event.fingerList[0].localY < 100) {\n                return GestureJudgeResult.CONTINUE;\n              } else {\n                return GestureJudgeResult.REJECT;\n              }\n            };\n            return GestureJudgeResult.CONTINUE;\n          })\n        }.width('100%')\n      }.width('100%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(652797)/* ["default"] */.A) + "",
            width: "275",
            height: "235"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手势并行动态控制",
      children: "手势并行动态控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势并行动态控制指的是手势已经成功识别，但是开发者仍然可以通过调用API接口控制手势回调是否能够响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 手势并行动态控制流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(323135)/* ["default"] */.A) + "",
        width: "3122",
        height: "435"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势并行动态控制的前提是手势识别成功，如果手势不成功则不会产生手势回调响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务手势作业流：指真正触发UI变化的业务手势，比如使页面滚动的PanGesture，触发点击的TapGesture等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["监听手势作业流：指在监听手势运行的过程中，应根据上下文的业务状态变化动态控制手势识别器的开闭，例如判断组件嵌套滚动过程中是否已滑至边缘。这一监听事件可借助一个使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding#parallelgesture%E5%B9%B6%E8%A1%8C%E6%89%8B%E5%8A%BF%E7%BB%91%E5%AE%9A%E6%96%B9%E6%B3%95",
          children: "并行手势绑定方式"
        }), "的PanGesture实现，或者采用Touch事件来完成。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置手势并行：此步骤并非必需，典型场景是在嵌套滚动中，设置外部组件的滚动手势与内部的滚动手势并行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态开闭手势：指通过手势识别器的setEnabled方法，控制手势是否响应用户回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势并行动态控制涉及以下接口。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#shouldbuiltinrecognizerparallelwith",
              children: "shouldBuiltInRecognizerParallelWith"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置系统组件内置手势与其他手势并行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin",
              children: "onGestureRecognizerJudgeBegin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于手势拦截，获取手势识别器，初始化手势识别器开闭状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding#parallelgesture%E5%B9%B6%E8%A1%8C%E6%89%8B%E5%8A%BF%E7%BB%91%E5%AE%9A%E6%96%B9%E6%B3%95",
              children: "parallelGesture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可使开发者定义的手势，与比他优先级高的手势并行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例是两个Scroll组件的嵌套滚动场景，使用手势控制的api去控制外部组件和内部组件的嵌套滚动联动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用shouldBuiltInRecognizerParallelWith接口设置外部Scroll组件的PanGesture手势与内部Scroll组件的PanGesture手势并行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".shouldBuiltInRecognizerParallelWith((current: GestureRecognizer, others: Array<GestureRecognizer>) => {\n  for (let i = 0; i < others.length; i++) {\n    let target = others[i].getEventTargetInfo();\n    if (target.getId() == 'inner' && others[i].isBuiltIn() && others[i].getType() == GestureControl.GestureType.PAN_GESTURE) { // 找到将要组成并行手势的识别器\n      this.currentRecognizer = current; // 保存当前组件的识别器\n      this.childRecognizer = others[i]; // 保存将要组成并行手势的识别器\n      return others[i]; // 返回和当前手势将要组成并行手势的识别器\n    };\n  };\n  return undefined;\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用onGestureRecognizerJudgeBegin接口获取到Scroll组件的PanGesture手势识别器，同时根据内外Scroll组件的边界条件，设置内外手势的开闭状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n  others: Array<GestureRecognizer>) => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n  let target = current.getEventTargetInfo();\n  if (target && target.getId() == 'outer' && current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n    for (let i = 0; i < others.length; i++) {\n      let target = others[i].getEventTargetInfo() as ScrollableTargetInfo;\n      if (target instanceof ScrollableTargetInfo && target.getId() == 'inner') { // 找到响应链上对应并行的识别器\n        let panEvent = event as PanGestureEvent;\n        this.childRecognizer.setEnabled(true);\n        this.currentRecognizer.setEnabled(false);\n        if (target.isEnd()) { // 根据当前组件状态以及移动方向动态控制识别器使能状态\n          if (panEvent && panEvent.offsetY < 0) {\n            this.childRecognizer.setEnabled(false);\n            this.currentRecognizer.setEnabled(true);\n          };\n        } else if (target.isBegin()) {\n          if (panEvent.offsetY > 0) {\n            this.childRecognizer.setEnabled(false);\n            this.currentRecognizer.setEnabled(true);\n          };\n        };\n      };\n    };\n  };\n  return GestureJudgeResult.CONTINUE;\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置监听手势，监听Scroll组件状态，动态调整手势开闭状态，控制手势回调是否触发，从而控制Scroll是否滚动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".parallelGesture( // 绑定一个Pan手势作为动态控制器\n  PanGesture()\n    .onActionUpdate((event: GestureEvent)=>{\n      if (this.childRecognizer.getState() != GestureRecognizerState.SUCCESSFUL ||\n        this.currentRecognizer.getState() != GestureRecognizerState.SUCCESSFUL) { // 如果识别器状态不是SUCCESSFUL，则不做控制\n        return;\n      };\n      let target = this.childRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n      let currentTarget = this.currentRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n      if (target instanceof ScrollableTargetInfo && currentTarget instanceof ScrollableTargetInfo) {\n        this.childRecognizer.setEnabled(true);\n        this.currentRecognizer.setEnabled(false);\n        if (target.isEnd()) { // 在移动过程中实时根据当前组件状态，控制识别器的开闭状态\n          if ((event.offsetY - this.lastOffset) < 0) {\n            this.childRecognizer.setEnabled(false);\n            if (currentTarget.isEnd()) {\n              this.currentRecognizer.setEnabled(false);\n            } else {\n              this.currentRecognizer.setEnabled(true);\n            };\n          };\n        } else if (target.isBegin()) {\n          if ((event.offsetY - this.lastOffset) > 0) {\n            this.childRecognizer.setEnabled(false);\n            if (currentTarget.isBegin()) {\n              this.currentRecognizer.setEnabled(false);\n            } else {\n              this.currentRecognizer.setEnabled(true);\n            };\n          };\n        };\n      };\n      this.lastOffset = event.offsetY;\n    })\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码完整示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct FatherControlChild {\n  scroller: Scroller = new Scroller();\n  scroller2: Scroller = new Scroller();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n  private childRecognizer: GestureRecognizer = new GestureRecognizer();\n  private currentRecognizer: GestureRecognizer = new GestureRecognizer();\n  private lastOffset: number = 0;\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Scroll(this.scroller) { // 外部滚动容器\n        Column() {\n          Text('Scroll Area')\n            .width('90%')\n            .height(150)\n            .backgroundColor(0xFFFFFF)\n            .borderRadius(15)\n            .fontSize(16)\n            .textAlign(TextAlign.Center)\n            .margin({ top: 10 })\n          Scroll(this.scroller2) { // 内部滚动容器\n            Column() {\n              Text('Scroll Area2')\n                .width('90%')\n                .height(150)\n                .backgroundColor(0xFFFFFF)\n                .borderRadius(15)\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .margin({ top: 10 })\n              Column() {\n                ForEach(this.arr, (item: number) => {\n                  Text(item.toString())\n                    .width('90%')\n                    .height(150)\n                    .backgroundColor(0xFFFFFF)\n                    .borderRadius(15)\n                    .fontSize(16)\n                    .textAlign(TextAlign.Center)\n                    .margin({ top: 10 })\n                }, (item: string) => item)\n              }.width('100%')\n            }\n          }\n          .id('inner')\n          .width('100%')\n          .height(800)\n        }.width('100%')\n      }\n      .id('outer')\n      .height(600)\n      .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n      .scrollBar(BarState.On) // 滚动条常驻显示\n      .scrollBarColor(Color.Gray) // 滚动条颜色\n      .scrollBarWidth(10) // 滚动条宽度\n      .edgeEffect(EdgeEffect.None)\n      .shouldBuiltInRecognizerParallelWith((current: GestureRecognizer, others: Array<GestureRecognizer>) => {\n        for (let i = 0; i < others.length; i++) {\n          let target = others[i].getEventTargetInfo();\n          if (target.getId() == 'inner' && others[i].isBuiltIn() &&\n            others[i].getType() == GestureControl.GestureType.PAN_GESTURE) { // 找到将要组成并行手势的识别器\n            this.currentRecognizer = current; // 保存当前组件的识别器\n            this.childRecognizer = others[i]; // 保存将要组成并行手势的识别器\n            return others[i]; // 返回和当前手势将要组成并行手势的识别器\n          }\n        }\n        return undefined;\n      })\n      .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n        others: Array<GestureRecognizer>) => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n        let target = current.getEventTargetInfo();\n        if (target && target.getId() == 'outer' && current.isBuiltIn() &&\n          current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n          for (let i = 0; i < others.length; i++) {\n            let target = others[i].getEventTargetInfo() as ScrollableTargetInfo;\n            if (target instanceof ScrollableTargetInfo && target.getId() == 'inner') { // 找到响应链上对应并行的识别器\n              let panEvent = event as PanGestureEvent;\n              this.childRecognizer.setEnabled(true);\n              this.currentRecognizer.setEnabled(false);\n              if (target.isEnd()) { // 根据当前组件状态以及移动方向动态控制识别器使能状态\n                if (panEvent && panEvent.offsetY < 0) {\n                  this.childRecognizer.setEnabled(false);\n                  this.currentRecognizer.setEnabled(true);\n                }\n              } else if (target.isBegin()) {\n                if (panEvent.offsetY > 0) {\n                  this.childRecognizer.setEnabled(false);\n                  this.currentRecognizer.setEnabled(true);\n                }\n              }\n            }\n          }\n        }\n        return GestureJudgeResult.CONTINUE;\n      })\n      .parallelGesture( // 绑定一个Pan手势作为动态控制器\n        PanGesture()\n          .onActionUpdate((event: GestureEvent) => {\n            if (this.childRecognizer?.getState() != GestureRecognizerState.SUCCESSFUL ||\n              this.currentRecognizer?.getState() != GestureRecognizerState.SUCCESSFUL) { // 如果识别器状态不是SUCCESSFUL，则不做控制\n              return;\n            }\n            let target = this.childRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            let currentTarget = this.currentRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            if (target instanceof ScrollableTargetInfo && currentTarget instanceof ScrollableTargetInfo) {\n              this.childRecognizer.setEnabled(true);\n              this.currentRecognizer.setEnabled(false);\n              if (target.isEnd()) { // 在移动过程中实时根据当前组件状态，控制识别器的开闭状态\n                if ((event.offsetY - this.lastOffset) < 0) {\n                  this.childRecognizer.setEnabled(false);\n                  if (currentTarget.isEnd()) {\n                    this.currentRecognizer.setEnabled(false);\n                  } else {\n                    this.currentRecognizer.setEnabled(true);\n                  };\n                };\n              } else if (target.isBegin()) {\n                if ((event.offsetY - this.lastOffset) > 0) {\n                  this.childRecognizer.setEnabled(false)\n                  if (currentTarget.isBegin()) {\n                    this.currentRecognizer.setEnabled(false);\n                  } else {\n                    this.currentRecognizer.setEnabled(true);\n                  };\n                };\n              };\n            };\n            this.lastOffset = event.offsetY;\n          })\n      )\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "阻止手势参与识别",
      children: "阻止手势参与识别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["手势识别基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
        children: "触摸测试"
      }), "的响应链结果进行，因此在用户按下时，通过控制响应链中手势识别器的参与状态，实现高效的动态干预手势处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，可以结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#ontouchtestdone20",
        children: "onTouchTestDone"
      }), "接口来阻止手势参与识别。完成触摸测试后，系统通过该接口回调返回所有手势识别器对象。应用可根据类型、组件标识或关联组件信息筛选识别器，并通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#preventbegin20",
        children: "preventBegin"
      }), "接口主动禁用特定识别器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据手势类型进行禁用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".onTouchTestDone((event, recognizers) => {\n  for (let i = 0; i < recognizers.length; i++) {\n    let recognizer = recognizers[i];\n    // 根据类型禁用所有滑动手势\n    if (recognizer.getType() == GestureControl.GestureType.PAN_GESTURE) {\n      recognizer.preventBegin();\n    };\n  };\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据手势所归属的组件禁用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件需要提前通过通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
        children: "id"
      }), "配置组件标识。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".onTouchTestDone((event, recognizers) => {\n  for (let i = 0; i < recognizers.length; i++) {\n    let recognizer = recognizers[i];\n    // 禁用掉标识为myID的组件上的所有手势\n    if (recognizer.getEventTargetInfo().getId() == 'myID') {\n      recognizer.preventBegin();\n    };\n  };\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据是否系统内置手势禁用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".onTouchTestDone((event, recognizers) => {\n  for (let i = 0; i < recognizers.length; i++) {\n    let recognizer = recognizers[i];\n    // 禁用掉所有系统内置的手势\n    if (recognizer.isBuiltIn()) {\n      recognizer.preventBegin();\n    };\n  };\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据具体情况组合使用这些条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200202)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统由内向外执行节点上的onTouchTestDone回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在NDK中onTouchTestDone与preventBegin对应的接口分别为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_settouchtestdonecallback",
        children: "OH_ArkUI_SetTouchTestDoneCallback"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_preventgesturerecognizerbegin",
        children: "OH_ArkUI_PreventGestureRecognizerBegin"
      }), "，它们的使用方式及功能与ArkTS接口一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下通过一个简化的视频播放界面交互为例来说明具体的用法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父容器（video_layer）绑定了多种手势："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击：控制暂停/播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "双击：切换全屏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长按：快进。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上下滑动：调节亮度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "左右滑动：调整进度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其内部下方的Slider组件（progress_layer）未绑定长按手势，导致用户长按Slider时会触发父容器的快进手势，不符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决方案：在Slider上注册onTouchTestDone回调，通过该回调禁用非Slider组件的手势识别器，即可解决冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为完整示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local progress: number = 496000; // 初始进度，秒\n  @Local total: number = 27490000; // 总时长，秒\n  @Local currentWidth: string = '100%';\n  @Local currentHeight: string = '100%';\n  private currentPosX: number = 0;\n  private currentPosY: number = 0;\n  private currentFullScreenState: boolean = true;\n  private normalPlayTimer: number = -1;\n  private isPlaying: boolean = true;\n  private fastForwardTimer: number = -1;\n  private context = this.getUIContext().getHostContext()\n\n  aboutToAppear(): void {\n    // 启动一个周期性定时器每隔一秒刷新一次进度\n    this.startNormalPlayTimer();\n  };\n\n  startNormalPlayTimer(): void {\n    if (this.normalPlayTimer != -1) {\n      this.stopNormalPlayTimer()\n    };\n    this.normalPlayTimer = setInterval(() => {\n      this.progress = this.progress + 1000\n    }, 1000);\n  };\n\n  stopNormalPlayTimer(): void {\n    if (this.normalPlayTimer == -1) {\n      return;\n    };\n    clearInterval(this.normalPlayTimer);\n    this.normalPlayTimer = -1;\n  };\n\n  startFastForwardTimer(): void {\n    if (this.fastForwardTimer != -1) {\n      this.stopFastForwardTimer();\n    };\n    this.fastForwardTimer = setInterval(() => {\n      this.progress = this.progress + 100000;\n    }, 100);\n  };\n\n  stopFastForwardTimer(): void {\n    if (this.fastForwardTimer == -1) {\n      return;\n    };\n    clearInterval(this.fastForwardTimer);\n    this.fastForwardTimer = -1;\n  };\n\n  showMessage(message: string): void {\n    this.getUIContext().getPromptAction().showToast({ message: message, alignment: Alignment.Center });\n  };\n\n  resetPosInfo(): void {\n    this.currentPosX = 0;\n    this.currentPosY = 0;\n  };\n\n  toggleFullScreenState(): void {\n    this.currentFullScreenState = !this.currentFullScreenState;\n    if (this.currentFullScreenState) {\n      this.currentWidth = '100%';\n      this.currentHeight = '100%';\n    } else {\n      this.currentWidth = '100%';\n      this.currentHeight = '50%';\n    };\n    // 请将$r('app.string.Play_full_screen')替换为实际资源文件，在本示例中该资源文件的value值为\"全屏播放\"\n    // 请将$r('app.string.Exit_play_full_screen')替换为实际资源文件，在本示例中该资源文件的value值为\"取消全屏播放\"\n    this.showMessage(this.currentFullScreenState\n      ? this.context!.resourceManager.getStringSync($r('app.string.Play_full_screen').id)\n      : this.context!.resourceManager.getStringSync($r('app.string.Exit_play_full_screen').id));\n  };\n\n  togglePlayAndPause(): void {\n    this.isPlaying = !this.isPlaying;\n    if (!this.isPlaying) {\n      this.stopNormalPlayTimer();\n    } else {\n      // 重新启动\n      this.startNormalPlayTimer();\n    };\n    // 请将$r('app.string.stop_playing')替换为实际资源文件，在本示例中该资源文件的value值为\"暂停播放\"\n    // 请将$r('app.string.Continue_playing')替换为实际资源文件，在本示例中该资源文件的value值为\"继续播放\"\n    this.showMessage(this.isPlaying\n      ? this.context!.resourceManager.getStringSync($r('app.string.stop_playing').id)\n      : this.context!.resourceManager.getStringSync($r('app.string.Continue_playing').id));\n  };\n\n  doFastForward(start: boolean): void {\n    if (!start) { // 停止快进，恢复正常播放\n      this.stopFastForwardTimer();\n      this.startNormalPlayTimer();\n      // 请将$r('app.string.Cancel_FastForwarding')替换为实际资源文件，在本示例中该资源文件的value值为\"取消快进\"\n      this.showMessage(\n        this.context!.resourceManager.getStringSync($r('app.string.Cancel_FastForwarding').id));\n      return;\n    };\n\n    this.stopNormalPlayTimer();\n    this.startFastForwardTimer();\n    // 请将$r('app.string.Start_FastForwarding')替换为实际资源文件，在本示例中该资源文件的value值为\"开始快进\"\n    this.showMessage(\n      this.context!.resourceManager.getStringSync($r('app.string.Start_FastForwarding').id));\n  };\n\n  updateBrightness(start: boolean, event: BaseGestureEvent): void {\n    let newY = event.fingerList[0].localY;\n    if (start) {\n      this.currentPosY = newY;\n      // 请将$r('app.string.Start_adjusting_brightness')替换为实际资源文件，在本示例中该资源文件的value值为\"开始调整 亮度\"\n      this.showMessage(this.context!.resourceManager\n        .getStringSync($r('app.string.Start_adjusting_brightness').id));\n      return;\n    };\n    let offsetY = newY - this.currentPosY;\n    if (Math.abs(offsetY) > 10) {\n      // 请将$r('app.string.Reduce_brightness')替换为实际资源文件，在本示例中该资源文件的value值为\"降低亮度\"\n      // 请将$r('app.string.Increase_brightness')替换为实际资源文件，在本示例中该资源文件的value值为\"提高亮度\"\n      this.showMessage((offsetY > 0)\n        ? this.context!.resourceManager.getStringSync($r('app.string.Reduce_brightness').id)\n        : this.context!.resourceManager.getStringSync($r('app.string.Increase_brightness').id))\n      this.currentPosY = newY;\n    };\n  };\n\n  updateProgress(start: boolean, event: BaseGestureEvent): void {\n    let newX = event.fingerList[0].localX;\n    if (start) {\n      this.currentPosX = newX;\n      // 请将$r('app.string.Adjust_schedule')替换为实际资源文件，在本示例中该资源文件的value值为\"开始调整 进度\"\n      this.showMessage(this.context!.resourceManager\n        .getStringSync($r('app.string.Adjust_schedule').id));\n      return;\n    };\n    let offsetX = newX - this.currentPosX;\n    this.progress = Math.floor(this.progress + offsetX * 10000);\n    this.currentPosX = newX;\n  };\n\n  build() {\n    Stack({ alignContent: Alignment.Center }) {\n      Column() {\n        Column() {\n          // 请将$r('app.string.Playback_progress')替换为实际资源文件，在本示例中该资源文件的value值为\"播放进度\"\n          Text(this.context!.resourceManager.getStringSync($r('app.string.Playback_progress').id) + this.progress)\n        }\n        .width('100%').height('90%')\n\n        Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n          Slider({\n            value: this.progress,\n            min: 0,\n            max: this.total,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.progress = value;\n            })\n            .id('progress_layer')\n            .onTouchTestDone((event, allRecognizers: Array<GestureRecognizer>) => {\n              for (let i = 0; i < allRecognizers.length; i++) {\n                let recognizer = allRecognizers[i];\n                let inspectorInfo = recognizer.getEventTargetInfo().getId();\n                if (inspectorInfo !== 'progress_layer') {\n                  // 用户操作到进度条区域时，禁用掉所有非progress_layer上的手势\n                  recognizer.preventBegin();\n                };\n              };\n            })\n            .margin({ left: 5 })\n            .trackColor(Color.Blue)\n            .blockColor(Color.Gray)\n            .selectedColor(Color.White)\n            .trackThickness(2)\n            .flexShrink(1)\n            .flexGrow(1)\n        }\n        .flexGrow(1)\n        .flexShrink(1)\n        .id('id_progress_view')\n      }\n    }\n    .id('video_layer')\n    .backgroundColor('#E0E0E0')\n    .gesture(\n      GestureGroup(GestureMode.Exclusive,\n        PanGesture({ direction: PanDirection.Vertical, distance: 10 })\n          .tag('pan_for_brightness_control')\n          .onActionStart((event) => {\n            this.updateBrightness(true, event);\n          })\n          .onActionUpdate((event) => {\n            this.updateBrightness(false, event);\n          }),\n        PanGesture({ direction: PanDirection.Horizontal, distance: 10 })\n          .tag('pan_for_play_progress_control')\n          .onActionStart((event) => {\n            this.updateProgress(true, event);\n          })\n          .onActionUpdate((event) => {\n            this.updateProgress(false, event);\n          }),\n\n        LongPressGesture()\n          .tag('long_press_for_fast_forward_control')\n          .onAction(() => {\n            this.doFastForward(true); // 开始快进\n          })\n          .onActionEnd(() => {\n            this.doFastForward(false); // 停止快进\n          })\n          .onActionCancel(() => {\n            this.doFastForward(false);\n          }),\n\n        TapGesture({ count: 2 })\n          .tag('double_tap_on_video')\n          .onAction(() => {\n            this.toggleFullScreenState();\n          }),\n\n        TapGesture()\n          .tag('single_tap_on_video')\n          .onAction(() => {\n            this.togglePlayAndPause();\n          })\n      )\n    )\n    .width(this.currentWidth)\n    .height(this.currentHeight)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614015)/* ["default"] */.A) + "",
        width: "353",
        height: "697"
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
323135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798314-6604786f0080a7b985a59f94de02db70.png");

},
389227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957962-c3e7c3a8c591c1fbde9673cbd932d482.png");

},
395303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438007-7b8a07449c385c6d4e2fc460fe38d396.png");

},
652797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477963-225f907edda4c5fee51f5a056c559cb5.png");

},
200202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
614015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438009-95ebd47589d27e54b669158c8ea3efd1.gif");

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