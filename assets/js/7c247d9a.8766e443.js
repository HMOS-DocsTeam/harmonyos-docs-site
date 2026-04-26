"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["110833"], {
479168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_create_toast_arkts_create_toast_md_7c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-create-toast-arkts-create-toast-md-7c2.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_create_toast_arkts_create_toast_md_7c2_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/arkts-create-toast","title":"即时反馈（Toast）","description":"即时反馈（Toast）是一种临时性的消息提示框，用于向用户显示简短的操作反馈或状态信息。​它通常在屏幕的底部或顶部短暂弹出，随后在一段时间后自动消失。即时反馈的主要目的是提供简洁、不打扰的信息反馈，避免干扰用户当前的操作流程。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/arkts-create-toast.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"即时反馈（Toast）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-toast","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绑定全模态页面（bindContentCover）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/"},"next":{"title":"设置浮层（OverlayManager）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/arkts-create-toast.md


const frontMatter = {
	title: '即时反馈（Toast）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-toast',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '即时反馈（Toast）';

const assets = {

};



const toc = [{
  "value": "使用建议",
  "id": "使用建议",
  "level": 2
}, {
  "value": "即时反馈模式对比",
  "id": "即时反馈模式对比",
  "level": 2
}, {
  "value": "创建即时反馈",
  "id": "创建即时反馈",
  "level": 2
}, {
  "value": "显示和关闭即时反馈",
  "id": "显示和关闭即时反馈",
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
        id: "即时反馈toast",
        children: "即时反馈（Toast）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即时反馈（Toast）是一种临时性的消息提示框，用于向用户显示简短的操作反馈或状态信息。​它通常在屏幕的底部或顶部短暂弹出，随后在一段时间后自动消失。即时反馈的主要目的是提供简洁、不打扰的信息反馈，避免干扰用户当前的操作流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
        children: "getPromptAction"
      }), "方法获取当前UI上下文关联的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction",
        children: "PromptAction"
      }), "对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#showtoast",
        children: "showToast"
      }), "创建并显示文本提示框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(19064)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了安全考虑，例如Toast恶意遮挡其他页面，Toast只能显示在当前的UI实例中，应用退出后，不会单独显示在桌面上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "合理使用弹出场景，避免过度提醒用户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以针对以下常用场景使用即时反馈操作，例如，当用户执行某个操作时及时结果反馈，用来提示用户操作是否成功或失败；或是当应用程序的状态发生变化时提供状态更新等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意文本的信息密度，即时反馈展示时间有限，应当避免长文本的出现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Toast控件的文本应该清晰可读，字体大小和颜色应该与应用程序的主题相符。除此之外，即时反馈控件本身不应该包含任何可交互的元素，如按钮或链接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "杜绝强制占位和密集弹出的提示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即时反馈作为应用内的轻量通知，应当避免内容布局占用界面内的其他元素信息，如遮盖弹出框的展示内容，从而迷惑用户弹出的内容是否属于弹出框。再或者频繁性的弹出信息内容，且每次弹出之间无时间间隔，影响用户的正常使用。也不要在短时间内频繁弹出新的即时反馈替代上一个。即时反馈的单次显示时长不要超过 3 秒钟，避免影响用户正常的行为操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "遵从系统默认弹出位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即时反馈在系统中默认从界面底部弹出，距离底部有一定的安全间距，作为系统性的应用内提示反馈，请遵从系统默认效果，避免与其他弹出类组件内容重叠。特殊场景下可对内容布局进行规避。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹框字体最大放大倍数限制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即时反馈中，字体的最大放大倍数为2。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "即时反馈模式对比",
      children: "即时反馈模式对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即时反馈提供了两种显示模式，分别为DEFAULT（显示在应用内）、TOP_MOST（显示在应用之上）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TOP_MOST类型的Toast显示前，会创建一个全屏大小的子窗（手机上子窗大小和主窗大小一致），然后在该子窗上计算Toast的布局位置，最后显示在该子窗上。具体和DEFAULT模式Toast的差异如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "差异点"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TOP_MOST"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否创建子窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "层级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示在主窗内，层级和主窗一致，一般比较低"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示在子窗中，一般比主窗层级高，比其他弹窗类组件层级高，比软键盘和权限弹窗层级低"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否避让软键盘"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘抬起时，必定上移软键盘的高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘抬起时，只有toast被遮挡时，才会避让，且避让后toast底部距离软键盘高度为80vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UIExtension内布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以UIExtension为主窗中布局，对齐方式与UIExtension对齐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以宿主窗口为主窗中布局，对齐方式与宿主窗口对齐"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { promptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_dialogproject]';\nconst DOMAIN: number = 0xFF00;\n\n@Entry\n@Component\nexport struct DefaultAndTopToastExample {\n  build() {\n    // ...\n      Column({ space: 10 }) {\n        TextInput()\n        Button('Toast of the DEFAULT type')\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          try {\n            this.getUIContext().getPromptAction().showToast({\n              message: 'ok, I am DEFAULT toast',\n              duration: 2000,\n              showMode: promptAction.ToastShowMode.DEFAULT,\n              bottom: 80\n            });\n          } catch (error) {\n            let message = (error as BusinessError).message;\n            let code = (error as BusinessError).code;\n            hilog.error(DOMAIN, TAG, '%{public}s', 'showToast args error code is $\\{code}, message is $\\{message}');\n          }\n        })\n\n        Button('Toast of the TOPMOST type')\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          try {\n            this.getUIContext().getPromptAction().showToast({\n              message: 'ok, I am TOP_MOST toast',\n              duration: 2000,\n              showMode: promptAction.ToastShowMode.TOP_MOST,\n              bottom: 85\n            });\n          }  catch (error) {\n            let message = (error as BusinessError).message;\n            let code = (error as BusinessError).code;\n            hilog.error(DOMAIN, TAG, '%{public}s', 'showToast args error code is $\\{code}, message is $\\{message}');\n          }\n        })\n      }\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439197)/* ["default"] */.A) + "",
        width: "344",
        height: "689"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建即时反馈",
      children: "创建即时反馈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于短时间内提示框自动消失的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PromptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_dialogproject]';\nconst DOMAIN: number = 0xFF00;\n\n@Entry\n@Component\nexport struct CreateToastExample {\n  private uiContext: UIContext = this.getUIContext();\n  private promptAction: PromptAction = this.uiContext.getPromptAction();\n  build() {\n    // ...\n      Column() {\n        Button('Show toast').fontSize(20)\n          .onClick(() => {\n            try {\n              this.promptAction.showToast({\n                message: 'Hello World',\n                duration: 2000\n              });\n            } catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              hilog.error(DOMAIN, TAG, '%{public}s', 'showToast args error code is $\\{code}, message is $\\{message}');\n            }\n          })\n      }.height('100%').width('100%').justifyContent(FlexAlign.Center)\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(328104)/* ["default"] */.A) + "",
        width: "440",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示和关闭即时反馈",
      children: "显示和关闭即时反馈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于提示框停留时间较长，用户操作可以提前关闭提示框的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PromptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_dialogproject]';\nconst DOMAIN: number = 0xFF00;\n\n@Entry\n@Component\nexport struct OpenCloseToastExample {\n  @State toastId: number = 0;\n  private uiContext: UIContext = this.getUIContext();\n  private promptAction: PromptAction = this.uiContext.getPromptAction();\n\n  build() {\n    // ...\n      Column() {\n        Button('Open Toast')\n          .height(100)\n          .type(ButtonType.Capsule)\n          .onClick(() => {\n            try {\n              this.promptAction.openToast({\n                message: 'Toast Message',\n                duration: 10000,\n              }).then((toastId: number) => {\n                this.toastId = toastId;\n              });\n            } catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              hilog.error(DOMAIN, TAG, '%{public}s', 'OpenToast error code is $\\{code}, message is $\\{message}');\n            }\n          })\n        Blank().height(50);\n        Button('Close Toast')\n          .height(100)\n          .type(ButtonType.Capsule)\n          .onClick(() => {\n            try {\n              this.promptAction.closeToast(this.toastId);\n            } catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              hilog.error(DOMAIN, TAG, '%{public}s', 'CloseToast error code is $\\{code}, message is $\\{message}');\n            }\n          })\n      }.height('100%').width('100%').justifyContent(FlexAlign.Center)\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(262542)/* ["default"] */.A) + "",
        width: "270",
        height: "576"
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
19064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
439197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477925-747732b5c3a9679d1635ff2723a733f9.gif");

},
328104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798276-fe1719614f140f947f73df3d9c2fbd3a.gif");

},
262542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437971-4799d61135d351d9cca93386d6b2db79.gif");

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