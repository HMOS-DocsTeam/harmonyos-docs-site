"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["564913"], {
635690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_combined_gestures_arkts_gesture_events_combined_gestures_md_226_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-support-gesture-arkts-gesture-events-combined-gestures-arkts-gesture-events-combined-gestures-md-226.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_combined_gestures_arkts_gesture_events_combined_gestures_md_226_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/arkts-gesture-events-combined-gestures","title":"组合手势","description":"组合手势由多种单一手势组合而成，通过在GestureGroup中使用不同的GestureMode来声明该组合手势的类型，支持顺序识别、并行识别和互斥识别三种类型。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/arkts-gesture-events-combined-gestures.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"组合手势","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-combined-gestures","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"单一手势","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/"},"next":{"title":"多层级手势事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/arkts-gesture-events-combined-gestures.md


const frontMatter = {
	title: '组合手势',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-combined-gestures',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组合手势';

const assets = {

};



const toc = [{
  "value": "顺序识别",
  "id": "顺序识别",
  "level": 2
}, {
  "value": "并行识别",
  "id": "并行识别",
  "level": 2
}, {
  "value": "互斥识别",
  "id": "互斥识别",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "组合手势",
        children: "组合手势"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组合手势由多种单一手势组合而成，通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-combined-gestures/ts-combined-gestures#%E6%8E%A5%E5%8F%A3",
        children: "GestureGroup"
      }), "中使用不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-combined-gestures/ts-combined-gestures#gesturemode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "GestureMode"
      }), "来声明该组合手势的类型，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A1%BA%E5%BA%8F%E8%AF%86%E5%88%AB",
        children: "顺序识别"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B9%B6%E8%A1%8C%E8%AF%86%E5%88%AB",
        children: "并行识别"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BA%92%E6%96%A5%E8%AF%86%E5%88%AB",
        children: "互斥识别"
      }), "三种类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GestureGroup(mode:GestureMode, gesture:GestureType[])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mode：为GestureMode枚举类。用于声明该组合手势的类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gesture：由多个手势组合而成的数组。用于声明该组合手势的各个手势。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "顺序识别",
      children: "顺序识别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["顺序识别组合手势对应的GestureMode为Sequence。顺序识别组合手势将按照手势的注册顺序识别手势，直到所有的手势识别成功。当顺序识别组合手势中有一个手势识别失败时，后续手势识别均失败。顺序识别手势中仅有最后一个手势可以响应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#onactionend",
        children: "onActionEnd"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以一个由长按手势和滑动手势组合而成的顺序识别手势为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在一个Column组件上绑定了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
        children: "translate"
      }), "属性，通过修改该属性可以设置组件的位置移动。然后在该组件上绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture",
        children: "LongPressGesture"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture",
        children: "PanGesture"
      }), "组合而成的Sequence组合手势。当触发LongPressGesture时，更新显示的数字。当长按后进行拖动时，根据滑动手势的回调函数，实现组件的拖动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'Sample_gesturegroup';\n\n@Entry\n@Component\nstruct sequenceIdentification {\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State count: number = 0;\n  @State positionX: number = 0;\n  @State positionY: number = 0;\n  @State borderStyles: BorderStyle = BorderStyle.Solid;\n\n  build() {\n    Column() {\n      Text('sequence gesture\\n' + 'LongPress onAction:' + this.count + '\\nPanGesture offset:\\nX: ' + this.offsetX +\n        '\\n' + 'Y: ' + this.offsetY)\n        .fontSize(28)\n    }\n    .margin(10)\n    .borderWidth(1)\n    // 绑定translate属性可以实现组件的位置移动\n    .translate({ x: this.offsetX, y: this.offsetY, z: 0 })\n    .height(250)\n    .width(300)\n    // 以下组合手势为顺序识别，当长按手势事件未正常触发时不会触发滑动手势事件\n    .gesture(\n      // 声明该组合手势的类型为Sequence类型\n      GestureGroup(GestureMode.Sequence,\n        // 该组合手势第一个触发的手势为长按手势，且长按手势可多次响应\n        LongPressGesture({ repeat: true })\n        // 当长按手势识别成功，增加Text组件上显示的count次数\n          .onAction((event: GestureEvent | undefined) => {\n            if (event) {\n              if (event.repeat) {\n                this.count++;\n              }\n              ;\n            }\n            ;\n            hilog.info(DOMAIN, TAG, 'LongPress onAction');\n          })\n          .onActionEnd(() => {\n            hilog.info(DOMAIN, TAG, 'LongPress end');\n          }),\n        // 当长按之后进行拖动，PanGesture手势被触发\n        PanGesture()\n          .onActionStart(() => {\n            this.borderStyles = BorderStyle.Dashed;\n            hilog.info(DOMAIN, TAG, 'pan start');\n          })\n          // 当该手势被触发时，根据回调获得拖动的距离，修改该组件的位移距离从而实现组件的移动\n          .onActionUpdate((event: GestureEvent | undefined) => {\n            if (event) {\n              this.offsetX = (this.positionX + event.offsetX);\n              this.offsetY = this.positionY + event.offsetY;\n            }\n            ;\n            hilog.info(DOMAIN, TAG, 'pan update');\n          })\n          .onActionEnd(() => {\n            this.positionX = this.offsetX;\n            this.positionY = this.offsetY;\n            this.borderStyles = BorderStyle.Solid;\n          })\n      )\n        .onCancel(() => {\n          hilog.info(DOMAIN, TAG, 'sequence gesture canceled');\n        })\n    )\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242892)/* ["default"] */.A) + "",
        width: "340",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581038)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽事件是一种典型的顺序识别组合手势事件，由长按手势事件和滑动手势事件组合而成。只有先长按达到长按手势事件预设置的时间后进行滑动才会触发拖拽事件。如果长按事件未达到或者长按后未进行滑动，拖拽事件均识别失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "并行识别",
      children: "并行识别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并行识别组合手势对应的GestureMode为Parallel。并行识别组合手势中注册的手势将同时进行识别，直到所有手势识别结束。并行识别手势组合中的手势进行识别时互不影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在一个Column组件上绑定点击手势和双击手势组成的并行识别手势为例，由于单击手势和双击手势是并行识别，因此两个手势可以同时进行识别，二者互不干涉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct parallelRecognition {\n  @State count1: number = 0;\n  @State count2: number = 0;\n\n  build() {\n    Column() {\n      Text('Parallel gesture\\n' + 'tapGesture count is 1:' + this.count1 + '\\ntapGesture count is 2:' + this.count2 +\n        '\\n')\n        .fontSize(28);\n    }\n    .height(200)\n    .width('100%')\n    // 以下组合手势为并行识别，单击手势识别成功后，若在规定时间内再次点击，双击手势也会识别成功\n    .gesture(\n      GestureGroup(GestureMode.Parallel,\n        TapGesture({ count: 1 })\n          .onAction(() => {\n            this.count1++;\n          }),\n        TapGesture({ count: 2 })\n          .onAction(() => {\n            this.count2++;\n          })\n      )\n    )\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348083)/* ["default"] */.A) + "",
        width: "340",
        height: "194"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(415747)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当由单击手势和双击手势组成一个并行识别组合手势后，在区域内进行点击时，单击手势和双击手势将同时进行识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当只有单次点击时，单击手势识别成功，双击手势识别失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当有两次点击时，若两次点击相距时间在规定时间内（默认规定时间为300毫秒），触发两次单击事件和一次双击事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当有两次点击时，若两次点击相距时间超出规定时间，触发两次单击事件不触发双击事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "互斥识别",
      children: "互斥识别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互斥识别组合手势对应的GestureMode为Exclusive。互斥识别组合手势中注册的手势将同时进行识别，若有一个手势识别成功，则结束手势识别，其他所有手势识别失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在一个Column组件上绑定单击手势和双击手势组合而成的互斥识别组合手势为例。若先绑定单击手势后绑定双击手势，由于单击手势只需要一次点击即可触发而双击手势需要两次，每次的点击事件均被单击手势消费而不能积累成双击手势，所以双击手势无法触发。若先绑定双击手势后绑定单击手势，则触发双击手势不触发单击手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct MutualExclusion {\n  @State count1: number = 0;\n  @State count2: number = 0;\n\n  build() {\n    Column() {\n      Text('Exclusive gesture\\n' + 'tapGesture count is 1:' + this.count1 + '\\ntapGesture count is 2:' + this.count2 +\n        '\\n')\n        .fontSize(28)\n    }\n    .height(200)\n    .width('100%')\n    // 以下组合手势为互斥识别，单击手势识别成功后，双击手势会识别失败\n    .gesture(\n      GestureGroup(GestureMode.Exclusive,\n        TapGesture({ count: 1 })\n          .onAction(() => {\n            this.count1++;\n          }),\n        TapGesture({ count: 2 })\n          .onAction(() => {\n            this.count2++;\n          })\n      )\n    )\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964658)/* ["default"] */.A) + "",
        width: "340",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(584041)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当由单击手势和双击手势组成一个互斥识别组合手势后，在区域内进行点击时，单击手势和双击手势将同时进行识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当只有单次点击时，单击手势识别成功，双击手势识别失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当有两次点击时，手势响应取决于绑定手势的顺序。若先绑定单击手势后绑定双击手势，单击手势在第一次点击时即宣告识别成功，此时双击手势已经失败。即使在规定时间内进行了第二次点击，双击手势事件也不会进行响应，此时会触发单击手势事件的第二次识别成功。若先绑定双击手势后绑定单击手势，则会响应双击手势而不响应单击手势。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例实现了子组件绑定长按和滑动手势，长按手势和滑动手势可以同时触发，但是在长按手势未成功时，需要让父组件Swiper的内置滑动手势触发功能。由于子组件的滑动手势和父组件的内置滑动手势是竞争关系，且子组件的滑动手势的优先级更高，因此需要通过动态控制子组件的滑动手势是否触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct CombinedGestureDemo {\n  @State isLongPress: boolean = false;\n  promptAction: PromptAction = this.getUIContext().getPromptAction();\n\n  build() {\n    Swiper() {\n      // 页面1\n      Row()\n        .width('100%')\n        .height('100%')\n        .backgroundColor(Color.Grey)\n        .borderRadius(12)\n        // 通过自定义手势判定回调，判断在长按手势未成功时，拒绝子组件的滑动手势，从而让父组件Swiper的滑动手势成功\n        .onGestureRecognizerJudgeBegin(\n          (event: BaseGestureEvent, current: GestureRecognizer, others: Array<GestureRecognizer>) => {\n            if (current.getType() !== GestureControl.GestureType.PAN_GESTURE) {\n              return GestureJudgeResult.CONTINUE;\n            }\n            ;\n            if (this.isLongPress) {\n              return GestureJudgeResult.CONTINUE;\n            }\n            ;\n            return GestureJudgeResult.REJECT;\n          })\n        .gesture(\n          // 绑定并行手势组，实现长按手势和滑动手势可以同时触发\n          GestureGroup(GestureMode.Parallel,\n            LongPressGesture()\n              .onAction(() => {\n                this.isLongPress = true;\n                this.promptAction.showToast({ message: 'LongPress trigger' });\n              })\n              .onActionEnd(() => {\n                this.isLongPress = false;\n              })\n            ,\n            PanGesture()\n              .onActionStart(() => {\n                this.promptAction.showToast({ message: 'child pan start' });\n              })\n          )\n        )\n      // 页面2\n      Row()\n        .width('100%')\n        .height('100%')\n        .backgroundColor(Color.Pink)\n        .borderRadius(12)\n    }\n    .borderWidth(2)\n    .width('100%')\n    .height(300)\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2139)/* ["default"] */.A) + "",
        width: "537",
        height: "993"
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
415747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
242892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438005-e178ffca3191553dfc118f6649899657.gif");

},
2139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798312-a9f18d123d74beafbafcc68a94661f43.gif");

},
964658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477961-d561c3e627f4149d105922486afa51aa.gif");

},
584041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
348083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957960-24debbfae5ebb839689333c4df824191.gif");

},
581038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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