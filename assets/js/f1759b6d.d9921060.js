"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["248784"], {
964145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_gesture_web_gesture_md_f17_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-gesture-web-gesture-md-f17.json
var site_docs_arkweb_web_manage_page_interaction_web_gesture_web_gesture_md_f17_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-gesture/web-gesture","title":"使用Web组件的手势与应用交互","description":"在移动端或支持触控的Web应用中，用户通过触摸屏与页面交互，Web组件支持了常见的手势识别，例如长按、滑动、点击等，以支持丰富的用户交互体验。","source":"@site/docs/arkweb/web-manage-page-interaction/web-gesture/web-gesture.md","sourceDirName":"arkweb/web-manage-page-interaction/web-gesture","slug":"/arkweb/web-manage-page-interaction/web-gesture/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-gesture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Web组件的手势与应用交互","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-gesture","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件焦点管理","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-focus/"},"next":{"title":"使用Web组件管理网页缩放","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-scale-zoom/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-gesture/web-gesture.md


const frontMatter = {
	title: '使用Web组件的手势与应用交互',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-gesture',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的手势与应用交互';

const assets = {

};



const toc = [{
  "value": "ArkWeb手势识别",
  "id": "arkweb手势识别",
  "level": 2
}, {
  "value": "ArkWeb手势与ArkUI手势",
  "id": "arkweb手势与arkui手势",
  "level": 2
}, {
  "value": "Web组件的手势拦截",
  "id": "web组件的手势拦截",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "如何禁用缩放手势",
  "id": "如何禁用缩放手势",
  "level": 3
}, {
  "value": "Web组件中如何通过手势滑动返回上一个Web页面",
  "id": "web组件中如何通过手势滑动返回上一个web页面",
  "level": 3
}, {
  "value": "为什么Web组件加载后网页无法交互？",
  "id": "为什么web组件加载后网页无法交互",
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
        id: "使用web组件的手势与应用交互",
        children: "使用Web组件的手势与应用交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在移动端或支持触控的Web应用中，用户通过触摸屏与页面交互，Web组件支持了常见的手势识别，例如长按、滑动、点击等，以支持丰富的用户交互体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkweb手势识别",
      children: "ArkWeb手势识别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb接收ArkUI的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen#%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6",
        children: "触摸事件"
      }), "，并识别出手势（触摸事件的分发策略详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles",
        children: "交互基础机制说明"
      }), "）。ArkWeb手势符合W3C标准：Touch Events、UI Events、Pointer Events。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见事件识别说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "手势事件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发条件"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下并抬起时触发，且间隔较短未触发长按。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LongPress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下且不移动，经过一段延迟后触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScrollBegin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动开始时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScrollUpdate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动时触发，包括抛滑和拖滑。手指未离开屏幕时的滚动为拖滑；若手指离开屏幕时带有速度，离手后页面继续滚动，被称为抛滑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScrollEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动结束时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FlingStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动过程中手指抬起，且抬手速度足够快，触发了抛滑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FlingCancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消抛滑时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PinchBegin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捏合开始时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PinchUpdate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捏合过程中触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PinchEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捏合结束时触发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkweb手势与arkui手势",
      children: "ArkWeb手势与ArkUI手势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding",
        children: "手势绑定"
      }), "，Web组件有独立的手势识别，因此需要区分两种手势："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkWeb手势：Web组件接收触摸事件自动生成的手势，这些手势作用于网页上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkUI手势：Web组件作为通用组件会接收ArkUI手势，ArkUI手势并不直接作用于网页，而作用于Web组件上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以缩放为例说明两种手势的区别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Web上使用双指捏合时，Web组件中的内容将会缩放。这是由于ArkWeb识别了Pinch事件并将其作用于网页上。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用三指捏合，Web组件本身会进行缩放。这是因为ArkWeb接收到ArkUI识别出的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture#%E6%8D%8F%E5%90%88%E6%89%8B%E5%8A%BFpinchgesture",
          children: "PinchGesture"
        }), "，执行绑定的回调函数。同时，ArkWeb支持scale方法，能够调整Web组件的缩放比例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338125)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例仅用于说明ArkUI手势和ArkWeb手势的区别，不建议使用此方法进行Web组件的缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State scaleValue: number = 1;\n  @State pinchValue: number = 1;\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n      // 在组件上绑定缩放比例，可以通过修改缩放比例来实现组件的缩小或者放大\n        .scale({ x: this.scaleValue, y: this.scaleValue, z: 1 })\n        .zoomAccess(true)\n        .gesture(\n          // 在组件上绑定三指触发的捏合手势\n          PinchGesture({ fingers: 3 })\n            .onActionStart((event: GestureEvent|undefined) => {\n              console.info('Pinch start');\n            })\n            // 当捏合手势触发时，可以通过回调函数获取缩放比例，从而修改组件的缩放比例\n            .onActionUpdate((event: GestureEvent|undefined) => {\n              if(event){\n                this.scaleValue = this.pinchValue * event.scale;\n                console.info(`Pinch update: ${this.scaleValue}`);\n              }\n            })\n            .onActionEnd(() => {\n              this.pinchValue = this.scaleValue;\n              console.info('Pinch end');\n            })\n        )\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58423)/* ["default"] */.A) + "",
        width: "554",
        height: "951"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件的手势拦截",
      children: "Web组件的手势拦截"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI手势"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkWeb会消费部分ArkUI手势，例如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture#%E6%BB%91%E5%8A%A8%E6%89%8B%E5%8A%BFpangesture",
            children: "滑动手势"
          }), "，若希望自行处理这些手势而非由ArkWeb消费，可以参考ArkUI的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge",
            children: "手势冲突处理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb手势的生成需要Web组件接收触摸事件，有两种拦截方案："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["完全禁止触摸事件发送给Web组件，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
              children: "触摸测试"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["发送TouchCancel触摸事件给Web组件，CAPI接口介绍详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#%E5%87%BD%E6%95%B0",
              children: "OH_ArkUI_TouchRecognizer_CancelTouch"
            }), "，具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NdkGestureSetting",
              children: "NdkGestureSetting"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何禁用缩放手势",
      children: "如何禁用缩放手势"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件提供了接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#zoomaccess",
        children: "zoomAccess"
      }), "，控制是否可以缩放。网页上有user-scalable属性也会影响缩放。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-manage-page-interaction/web-scale-zoom",
        children: "使用Web组件管理网页缩放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web组件中如何通过手势滑动返回上一个web页面",
      children: "Web组件中如何通过手势滑动返回上一个Web页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过重写onBackPress函数来自定义返回逻辑，使用WebviewController判断是否返回上一个Web页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com', controller: this.controller }) // 需要手动替换为真实网站\n    }\n  }\n\n  onBackPress() {\n    try {\n      // 当前页面是否可前进或者后退给定的step步(-1),正数代表前进，负数代表后退\n      if (this.controller.accessStep(-1)) {\n        this.controller.backward(); // 返回上一个Web页面\n        // 执行用户自定义返回逻辑\n        return true;\n      }\n    } catch (err) {\n      console.error(`copyUrlPicToDir failed with error: ${err.code}, ${err.message}`);\n    }\n    // 执行系统默认返回逻辑，返回上一个页面\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为什么web组件加载后网页无法交互",
      children: "为什么Web组件加载后网页无法交互？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页可能基于其他平台的User-Agent进行判断。为解决此问题，可以在Web组件中设置自定义User-Agent，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  private webController: webview.WebviewController = new webview.WebviewController();\n  build(){\n    Column() {\n      Web({\n        src: 'https://www.example.com',\n        controller: this.webController,\n      }).onControllerAttached(() => {\n        // 自定义User-Agent\n        let customUA = 'Mozilla/5.0 (Phone; Android; HarmonyOS 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36';\n        this.webController.setCustomUserAgent(customUA);\n      })\n    }\n  }\n}\n"
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
58423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958220-966a70eb558532aa9725321f0b21b135.gif");

},
338125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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