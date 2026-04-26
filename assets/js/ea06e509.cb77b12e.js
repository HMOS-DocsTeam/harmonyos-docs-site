"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["55437"], {
723819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_touch_screen_arkts_interaction_development_guide_touch_screen_md_ea0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-raw-input-event-arkts-interaction-development-guide-touch-screen-arkts-interaction-development-guide-touch-screen-md-ea0.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_touch_screen_arkts_interaction_development_guide_touch_screen_md_ea0_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/arkts-interaction-development-guide-touch-screen","title":"支持触屏输入事件","description":"触屏设备是最常见的输入设备，几乎所有手持类终端设备都支持用户通过触控操作。触摸事件也是应用开发者最常处理的事件类型之一。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/arkts-interaction-development-guide-touch-screen.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"支持触屏输入事件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-touch-screen","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"交互基础机制说明","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/"},"next":{"title":"支持鼠标输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/arkts-interaction-development-guide-touch-screen.md


const frontMatter = {
	title: '支持触屏输入事件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-touch-screen',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持触屏输入事件';

const assets = {

};



const toc = [{
  "value": "触摸事件",
  "id": "触摸事件",
  "level": 2
}, {
  "value": "阻止冒泡",
  "id": "阻止冒泡",
  "level": 2
}, {
  "value": "重采样与历史点",
  "id": "重采样与历史点",
  "level": 2
}, {
  "value": "多指信息",
  "id": "多指信息",
  "level": 2
}, {
  "value": "触控笔",
  "id": "触控笔",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支持触屏输入事件",
        children: "支持触屏输入事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706153)/* ["default"] */.A) + "",
        width: "714",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触屏设备是最常见的输入设备，几乎所有手持类终端设备都支持用户通过触控操作。触摸事件也是应用开发者最常处理的事件类型之一。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，对于其他类型的输入设备上的类似触控行为的操作，系统为了交互一致性，也会将其转换为触摸事件派发给应用，如按下", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "鼠标"
        })
      }), "左键点击、滑动，既可以接收到Touch事件，也可以接收到鼠标事件。如果要将其与触屏设备产生的触摸事件进行区分，可以通过事件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
        children: "SourceType"
      }), "进行判断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触摸事件",
      children: "触摸事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触摸事件可以通过通用事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "在组件上接收，该回调响应遵循命中测试规则。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触摸事件的上报频率会由系统降采样到与屏幕刷新率一致，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%87%8D%E9%87%87%E6%A0%B7%E4%B8%8E%E5%8E%86%E5%8F%B2%E7%82%B9",
        children: "重采样与历史点"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于支持多点触控的输入设备，使用多根手指同时操作可以产生多个触点，全部的触点信息可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), "的touches成员得到，而changedTouches会给出当前事件上报时，是哪些触点在产生变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他更多的事件信息可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TouchEvent"
      }), "的基类", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#baseevent8",
        children: "BaseEvent"
      }), "中获得。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "阻止冒泡",
      children: "阻止冒泡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1",
        children: "事件冒泡"
      }), "了解冒泡机制，以下是一个简单示例，实现了只要点击在子组件区域内，就阻止父组件接收触摸事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_PreventBubbling]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'MyApp_PreventBubbling';\n\n@Entry\n@ComponentV2\nstruct PreventBubbling {\n  build() {\n    RelativeContainer() {\n      Column() { // 父组件\n        // 请将$r('app.string.preventEvent')替换为实际资源文件，在本示例中该资源文件的value值为\"如果点中了我，就阻止父组件收到触摸事件\"\n        Text($r('app.string.preventEvent'))\n          .fontColor(Color.White)\n          .height('40%')\n          .width('80%')\n          .backgroundColor(Color.Brown)\n          .alignSelf(ItemAlign.Center)\n          .padding(10)\n          .margin(20)\n          .onTouch((event: TouchEvent) => {\n            event.stopPropagation(); // 子组件优先接收到触摸事件后，阻止父组件接收事件\n          })\n      }\n      .justifyContent(FlexAlign.End)\n      .backgroundColor(Color.Green)\n      .height('100%')\n      .width('100%')\n      .onTouch((event: TouchEvent) => {\n        hilog.info(DOMAIN, TAG, BUNDLE + 'touch event received on parent');\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878208)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对事件的冒泡进行控制不会影响手势对触摸事件的接收与处理，因此需要分别考虑这两者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "重采样与历史点",
      children: "重采样与历史点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础事件的上报频率与具体的输入设备类型有关，但一般频率都是非常高的，如触屏一般每5~7ms即上报一个点，而对于一些高精度鼠标，上报频率最高可达到每1ms上报一次。由于对输入事件的响应是为了UI界面的变化来产生对用户操作的响应，因此将如此之高的基础事件上报给应用，多数情况下是冗余的。为此系统会对两帧之间所收到的基础事件进行重采样，只在帧内上报一次给应用。重采样是针对每个触点单独进行的，不同触点会单独进行重采样。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521163)/* ["default"] */.A) + "",
        width: "1304",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按下时产生的事件会立即上报给应用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "帧内的move报点并不会立即下发，而是会在送显帧到来时重采样合并后上报；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "抬起时产生的事件会立即上报给应用，并在上报之前先将还未处理的move事件上报；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重采样会合并同一个触点在同一帧内多次上报的move事件，并通过算法尽可能计算出一个合适的坐标上报给应用，因此经过重采样后的坐标信息，与底层设备真实上报的点会存在细微的差异，这些差异是有益的，经过重采样后的点通常具备更好的平滑性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重采样之前的所有原始点信息也都保留下来上报给了应用，如果需要直接处理它们，则可通过getHistoricalPoints(): Array来获取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一个简单示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Sampling]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'MyApp_Sampling';\n\n@Entry\n@ComponentV2\nstruct Sampling {\n  build() {\n    RelativeContainer() {\n      Column()\n        .backgroundColor(Color.Green)\n        .height('100%')\n        .width('100%')\n        .onTouch((event: TouchEvent) => {\n          // 从event中获取历史点\n          let allHistoricalPoints = event.getHistoricalPoints();\n          if (allHistoricalPoints.length !== 0) {\n            for (const point of allHistoricalPoints) {\n              hilog.info(DOMAIN, TAG, BUNDLE + 'historical point: [' + point.touchObject.windowX +\n                ', ' + point.touchObject.windowY + ']');\n            }\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多指信息",
      children: "多指信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在支持多指触控的触屏设备上，上报的事件中同时包含了窗口所有按压手指的信息，可以通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "touches"
        })
      }), "获取，如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_MultipleFingerInformation]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'MyApp_MultipleFingerInformation';\n\n@Entry\n@ComponentV2\nstruct MultipleFingerInformation {\n  private currentFingerCount: number = 0;\n  private allFingerIds: number[] = [];\n\n  build() {\n    RelativeContainer() {\n      Column()\n        .backgroundColor(Color.Green)\n        .height('100%')\n        .width('100%')\n        .onTouch((event: TouchEvent) => {\n          if (event.source !== SourceType.TouchScreen) {\n            return;\n          }\n          // clear数组\n          this.allFingerIds.splice(0, this.allFingerIds.length);\n          // 从event中获取所有触点信息\n          let allFingers = event.touches;\n          if (allFingers.length > 0 && this.currentFingerCount === 0) {\n            // 第1根手指按下\n            hilog.info(DOMAIN, TAG, BUNDLE + 'fingers start to press down');\n            this.currentFingerCount = allFingers.length;\n          }\n          if (allFingers.length !== 0) {\n            for (const finger of allFingers) {\n              this.allFingerIds.push(finger.id);\n            }\n            hilog.info(DOMAIN, TAG, BUNDLE + 'current all fingers : ' + this.allFingerIds.toString());\n          }\n          if (event.type === TouchType.Up && event.touches.length === 1) {\n            // 所有手指都已抬起\n            hilog.info(DOMAIN, TAG, BUNDLE + 'all fingers already up');\n            this.currentFingerCount = 0;\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同触点通过id区分，id按照接触屏幕的顺序依次递增，与物理上的触点（手指）并无严格顺序对应关系。并且这些触点在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "touches"
        })
      }), "数组中并非按照编号大小顺序排列，请不要依赖顺序进行访问，另外，直到所有触点全部离开屏幕之前，期间抬起的触点对应的编号，会在有触点按下时自动复用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是上面的示例在如下操作序列时产生的日志输出情况："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517716)/* ["default"] */.A) + "",
        width: "373",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按下手指① -> 按下手指② -> 按下手指③ -> 抬起手指② -> 抬起手指③ -> 按下手指② -> 抬起手指① -> 抬起手指③"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  fingers start to press down   // 按下手指①\n  current all fingers: 0\n  ... ...\n  current all fingers: 0,1      // 按下手指②\n  ... ...\n  current all fingers: 0,1,2    // 按下手指③\n  ... ...\n  current all fingers: 0,2      // 抬起手指②\n  ... ...\n  current all fingers: 0        // 抬起手指③\n  ... ...\n  current all fingers: 0,1      // 按下手指③\n  ... ...\n  current all fingers: 1        // 抬起手指①\n  ... ...\n  all fingers already up        // 抬起手指③\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触控笔",
      children: "触控笔"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触控笔操作触摸屏与通过手指操作类似，都会产生触摸事件，可以通过sourceTool进行区分。而对于一些主动式电容笔，上报的触摸事件中，还会包含笔接触屏幕时的夹角信息，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#baseevent8",
        children: "BaseEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tiltX：触控笔在设备平面上的投影与设备平面X轴的夹角。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tiltY：触控笔在设备平面上的投影与设备平面Y轴的夹角。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rollAngle：触控笔与设备平面的夹角。"
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
517716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957944-0f79bf8ab289db4d2dc8008b7b462d8c.png");

},
878208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
521163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437989-a761713bb4e500e0460c488928f3aa50.png");

},
706153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798294-36548d602fbf6c6add340092054dc9e8.png");

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