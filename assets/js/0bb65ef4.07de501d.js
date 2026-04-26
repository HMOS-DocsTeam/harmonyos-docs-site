"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["999870"], {
9742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_dialog_overview_arkts_dialog_overview_md_0bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-dialog-overview-arkts-dialog-overview-md-0bb.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_dialog_overview_arkts_dialog_overview_md_0bb_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/arkts-dialog-overview","title":"弹窗概述","description":"弹窗一般指打开应用时自动弹出或者用户行为操作时弹出的UI界面，用于短时间内展示用户需关注的信息或待处理的操作。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/arkts-dialog-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"弹窗概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dialog-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"进度条 (Progress)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/"},"next":{"title":"弹出框概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/arkts-dialog-overview.md


const frontMatter = {
	title: '弹窗概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dialog-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弹窗概述';

const assets = {

};



const toc = [{
  "value": "弹窗的种类",
  "id": "弹窗的种类",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "规格约束",
  "id": "规格约束",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "弹窗概述",
        children: "弹窗概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹窗一般指打开应用时自动弹出或者用户行为操作时弹出的UI界面，用于短时间内展示用户需关注的信息或待处理的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ArkUI组件树层级上来看，Overlay浮层、弹窗、模态、带Order的Overlay浮层都挂载在Root节点下。弹窗、模态、带Order的Overlay浮层根据设置的层级（数字大小）进行逐层显示，并且全部显示在Overlay浮层上面。如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789322)/* ["default"] */.A) + "",
        width: "1508",
        height: "597"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于一个多页面应用，基本树结构如下所示。多个Page页面之间使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
        children: "Router"
      }), "的接口进行跳转。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navbar12",
        children: "NavBar"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "Navdestination"
      }), "组成的页面可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "接口进行跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464011)/* ["default"] */.A) + "",
        width: "600",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["而", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
        children: "Dialog"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview",
        children: "Popup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview",
        children: "Menu"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager",
        children: "OverlayManager"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast",
        children: "Toast"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page",
        children: "bindSheet"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page",
        children: "bindContentCover"
      }), "的组件在结合路由、导航使用时存在如下几种显示模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗显示在当前应用窗口最上层，层级高于应用主窗内所有页面（默认行为）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图所示，触发弹窗显示时，弹窗层级要高于Page页面和Navigation页面，即如果弹窗组件没有被关闭的话，页面切换前后，弹窗组件都会显示在页面上方，而不会出现新的路由/导航页面覆盖在弹窗之上的情况。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(925502)/* ["default"] */.A) + "",
            width: "800",
            height: "437"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(908371)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果Popup或Menu等存在绑定组件的弹窗组件，在页面跳转后因为所绑定的组件不在新页面显示，系统内部会自动关闭对应弹窗组件。但因为弹窗组件显示同时受开发者配置的参数控制，例如当", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview",
            children: "Popup"
          }), "的show参数设置为显示时，弹窗组件会覆盖在下一个页面上显示。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗显示在当前页面内，层级低于下一跳页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当开发者期望弹窗是一个页面内的弹窗，即当路由/导航切换页面时，弹窗会被跳转的页面覆盖，随着页面切回原页面，弹窗仍然正常显示。此时弹窗层级如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(390877)/* ["default"] */.A) + "",
            width: "700",
            height: "501"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["页面级弹窗功能需要结合弹窗组件的页面级能力使用，当前支持页面级能力的有", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
            children: "Dialog"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page",
            children: "bindSheet"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗显示在独立窗口内，窗口层级高于应用所在窗口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在PC/2in1等设备上，开发者常期望弹窗的显示在应用窗口之外，此时需要借助子窗的能力。例如自定义弹窗可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "CustomDialogControllerOptions"
          }), "中的showInSubwindow属性控制是否使用子窗功能。基于子窗显示的弹窗效果如下图所示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(7735)/* ["default"] */.A) + "",
            width: "800",
            height: "501"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时弹窗组件的显示层级受窗口的层级管理控制，会高于当前应用所在的窗口，低于系统窗口（如系统输入法、系统弹窗等）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹窗的种类",
      children: "弹窗的种类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据用户交互操作场景，弹窗可分为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模态弹窗"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "非模态弹窗"
        })
      }), "两种类型，其区别在于用户是否必须对其做出响应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "模态弹窗："
          })
        }), " 为强交互形式，会中断用户当前的操作流程，要求用户必须做出响应才能继续其他操作，通常用于需要向用户传达重要信息的场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "非模态弹窗："
          })
        }), " 为弱交互形式，不会影响用户当前操作行为，用户可以不对其进行回应，通常都有时间限制，出现一段时间后会自动消失。一般用于告诉用户信息内容外还需要用户进行功能操作的场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(168943)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前模态弹窗通过设置指定属性变成非模态，例如AlertDialog，可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box#alertdialogparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "AlertDialogParam"
      }), "中的isModal属性值为false变成非模态，其他弹窗详见API说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议在非前台状态下，调用弹窗显示接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统弹窗由系统弹出，出于安全考虑，不支持自定义样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统弹窗出现时，调用非系统弹窗的显示接口（例如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction",
        children: "promptAction"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#promptactionopencustomdialogdeprecated",
        children: "openCustomDialog"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
        children: "CustomDialogController"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#open",
        children: "open"
      }), "等），禁止该类弹窗显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据实际应用场景选择合适的弹窗进行页面开发。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "弹窗名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
              children: "弹出框（Dialog）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要展示用户当前需要或必须关注的信息内容或操作时，例如二次退出应用等，应优先考虑使用此弹出框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview",
              children: "菜单（Menu/openMenu）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要给用户提供可执行的操作时，例如长按图标展示操作选项等，应优先考虑使用此弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview",
              children: "气泡提示（Popup/openPopup）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要给用户提供提示时，例如点击一个问号图标弹出一段帮助提示等，应优先考虑使用此弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-modal-overview",
              children: "绑定模态页面（bindContentCover/bindSheet）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要新的界面覆盖在旧的界面上，且旧的界面不消失的一种转场方式时，例如缩略图片点击后查看大图等，应优先考虑使用此弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast",
              children: "即时反馈（Toast）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要在一个小的窗口中提供用户当前操作的简单反馈时，例如提示文件保存成功等，应优先考虑使用此弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager",
              children: "设置浮层（OverlayManager）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要完全自定义内容、行为、样式时，可以使用浮层将UI展示在页面之上，例如音乐/语音播放悬浮球/胶囊等，应优先考虑使用此弹窗。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格约束",
      children: "规格约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多个弹窗组件先后弹出时，后弹出的组件的层级高于先弹出的层级，退出时按照层级从高到低的顺序逐次退出。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在移动设备中，子窗模式的弹窗当前无法超出主窗口。而在2in1设备上，使用模态类弹窗时，会出现需要超出主窗口显示的场景，开发者可以通过设置showInSubWindow为true实现超出主窗口的显示效果。如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(454460)/* ["default"] */.A) + "",
            width: "1161",
            height: "655"
          })
        }), "\n"]
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
390877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957896-dd3577265d4df0f34eac25dd67d8ed51.png");

},
168943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
454460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798248-cbab730e451f07c993a9864265b898b1.png");

},
908371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437941-e7763453fb6b617a4452fd0cd40fcbcb.png");

},
789322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477895-eb7c878457076d47730dd10dbf9ff846.png");

},
464011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798246-17515a2377f0f7703e828e52ef2a6bbd.png");

},
7735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477897-50db383ab165d5230d2b24b18be681c3.png");

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