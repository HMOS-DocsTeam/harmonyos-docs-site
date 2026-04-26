"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691641"], {
928967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_global_interface_arkts_global_interface_md_7ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-global-interface-arkts-global-interface-md-7ab.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_global_interface_arkts_global_interface_md_7ab_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/arkts-global-interface","title":"使用UI上下文接口操作界面（UIContext）","description":"本文主要介绍了多UI实例涉及的概念，以及使用UIContext的方法替换全局接口的原因，并提供了相应的替换方案。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/arkts-global-interface.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用UI上下文接口操作界面（UIContext）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-global-interface","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置应用内主题换肤","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/theme_skinning/"},"next":{"title":"使用组件截图（ComponentSnapshot）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/arkts-global-interface.md


const frontMatter = {
	title: '使用UI上下文接口操作界面（UIContext）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-global-interface',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用UI上下文接口操作界面（UIContext）';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "UI上下文不明确",
  "id": "ui上下文不明确",
  "level": 2
}, {
  "value": "UIContext接口替换全局接口的关系",
  "id": "uicontext接口替换全局接口的关系",
  "level": 2
}, {
  "value": "常见UIContext接口替换全局接口的场景",
  "id": "常见uicontext接口替换全局接口的场景",
  "level": 2
}, {
  "value": "通过自定义组件获取UIContext",
  "id": "通过自定义组件获取uicontext",
  "level": 3
}, {
  "value": "通过窗口对象获取UIContext对象",
  "id": "通过窗口对象获取uicontext对象",
  "level": 3
}, {
  "value": "通过静态方法获取UIContext对象",
  "id": "通过静态方法获取uicontext对象",
  "level": 3
}, {
  "value": "在封装的接口中获取UI上下文",
  "id": "在封装的接口中获取ui上下文",
  "level": 3
}, {
  "value": "应用存在多窗时，通过最近获焦窗口获取UIContext",
  "id": "应用存在多窗时通过最近获焦窗口获取uicontext",
  "level": 3
}, {
  "value": "执行绑定UI实例的闭包",
  "id": "执行绑定ui实例的闭包",
  "level": 3
}, {
  "value": "特殊全局接口替换示例",
  "id": "特殊全局接口替换示例",
  "level": 2
}, {
  "value": "像素单位转换接口替换为UIContext接口",
  "id": "像素单位转换接口替换为uicontext接口",
  "level": 3
}, {
  "value": "获取Ability的Context",
  "id": "获取ability的context",
  "level": 3
}, {
  "value": "LocalStorage替换为UIContext的接口",
  "id": "localstorage替换为uicontext的接口",
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
        id: "使用ui上下文接口操作界面uicontext",
        children: "使用UI上下文接口操作界面（UIContext）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍了多UI实例涉及的概念，以及使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "的方法替换全局接口的原因，并提供了相应的替换方案。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI实例："
        })
      }), " UI实例是用于管理用户界面的对象，主要负责组件、布局、动画以及交互事件等UI功能的管理。每个窗口对象都会创建并管理一个UI实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI上下文："
        })
      }), " UI上下文是指UI实例运行环境的抽象概念，UI功能在UI上下文中运行，其效果最终反映在相应的UI实例中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全局接口："
        })
      }), " ArkUI提供的一系列全局接口，这些接口在调用时无需显式指定UI实例或组件。它们会根据调用发生时所在的UI上下文，自动作用于相应的UI实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调用作用域："
        })
      }), " 调用作用域是确保UI实例在异步任务执行过程中维持正确上下文关联的核心机制。该机制通过建立明确的上下文标识体系，保证异步操作能够准确关联到其归属的UI实例。其工作机制分为下面四步："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标识注册：UI实例初始化时自动生成唯一标识符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上下文绑定：UI实例发起的任务自动携带实例标识。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "作用域保护：在异步边界（包括NAPI调用、Promise回调、Worker通信等）维持标识传递。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上下文恢复：异步任务执行时恢复其关联的UI实例标识。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了多线程下的异步任务执行场景。以Task 1为例，最初在Thread-1执行，执行途中向Thread-2抛出Task 1.2，抛出Task的同时携带了UI上下文标识，Task 1.2执行完成后又再次向Thread-3抛出Task 1.3，Task 1.3执行后重新向Thread-1抛出Task 1.4。同一Thread可能先后执行来自不同窗口的Task，执行Task时，根据Task的UI上下文标识确认当前Task属于哪一个窗口，确保异步操作能够关联到正确的UI实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 调用作用域原理图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734685)/* ["default"] */.A) + "",
        width: "908",
        height: "478"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ui上下文不明确",
      children: "UI上下文不明确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI上下文不明确是指调用ArkUI全局接口时，调用点无法明确识别UI实例的问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前的系统支持两种", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "——FA模型和Stage模型。在FA模型中，每个UI实例拥有独立的ArkTS引擎，全局接口可以通过ArkTS引擎跟踪到对应的UI实例上，因此不存在UI上下文不明确的问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stage模型中，一个ArkTS引擎中可运行多个ArkUI实例。全局接口通过分析调用链中的上下文信息来确定当前UI上下文，异步接口和非UI接口可能导致UI上下文跟踪失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保证全局接口的相关功能正常，开发者应当使用UIContext的接口替换全局接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下图展示了Stage模型下ArkTS引擎和UI上下文的对应关系，一个ArkTS引擎中存在两个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/abilitykit-overview",
        children: "Ability"
      }), "，这些Ability对应了三个窗口，三个窗口各自对应一个ArkUI实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 多实例关系图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621183)/* ["default"] */.A) + "",
        width: "492",
        height: "264"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uicontext接口替换全局接口的关系",
      children: "UIContext接口替换全局接口的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分多实例替代接口如下表所示，UIContext实例支持的全量接口以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "中描述为准。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例代码使用的接口中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#isavailable20",
        children: "isAvailable"
      }), "从API version 20开始生效，其余接口从API version 18开始生效。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "全局接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "替代接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.animator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createAnimator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义动画控制器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.arkui.componentSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getComponentSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件截图"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.arkui.componentUtils"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getComponentUtils"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件工具类"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.arkui.dragController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getDragController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽控制器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.arkui.inspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getUIInspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件布局回调"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.arkui.observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getUIObserver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无感监听"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义字体"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.measure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getMeasureUtil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本计算"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.mediaquery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getMediaQuery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体查询"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.promptAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getPromptAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ohos.router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getRouter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面路由"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AlertDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showAlertDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "警告弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ActionSheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showActionSheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表选择弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CalendarPickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历选择器弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DatePickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showDatePickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期滑动选择弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TimePickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showTimePickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间滑动选择器弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TextPickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showTextPickerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本滑动选择器弹窗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ContextMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getContextMenuController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单控制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vp2px/px2vp/fp2px/px2fp/lpx2px/px2lpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vp2px/px2vp/fp2px/px2fp/lpx2px/px2lpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素单位转换"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "focusControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFocusControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点控制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cursorControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getCursorControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标控制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getHostContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前的Ability的Context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LocalStorage.getShared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getSharedLocalStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Ability传递的Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animateTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "animateTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显式动画"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animateToImmediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显式立即动画"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见uicontext接口替换全局接口的场景",
      children: "常见UIContext接口替换全局接口的场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下UIContext接口替换全局接口示例以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
        children: "像素单位"
      }), "接口为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过自定义组件获取uicontext",
      children: "通过自定义组件获取UIContext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当全局接口在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/ui-js-custom-components",
        children: "自定义组件"
      }), "的成员方法或组件生命周期方法等其他作用域中，且this指向自定义组件时，可以通过调用自定义组件的成员方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
        children: "getUIContext"
      }), "来获取UIContext对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528620)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在异步调用的回调方法中使用getUIContext，或者该接口的起始调用不在当前页面时，可能会在自定义组件销毁后调用接口，从而导致返回undefined。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法只能通过this调用，不能通过new关键字创建的自定义组件对象调用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
          children: "自定义声明式节点 (BuilderNode)"
        }), "中创建的自定义节点获取的UIContext与创建BuilderNode的UIContext指向同一个UI实例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口，该接口已经废弃，推荐使用下方的UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/NewGlobal.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('Calculate 20vp to px')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let pxValue = vp2px(20);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/NewGlobal.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('Calculate 20vp to px')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let uiContext = this.getUIContext();\n          let pxValue = uiContext.vp2px(20);\n          hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过窗口对象获取uicontext对象",
      children: "通过窗口对象获取UIContext对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过窗口对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
        children: "getUIContext"
      }), "方法获取UIContext对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127781)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须在UI实例创建完成后，才可以通过窗口对象的getUIContext方法获取UIContext。建议在loadContent的成功回调中调用，以确保UI实例准备就绪。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vp2px/px2vp在UI实例未创建时会获取默认值进行计算，替换时可考虑获取当前默认的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#display",
          children: "Display"
        }), "对象的逻辑像素密度进行计算结果，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%83%8F%E7%B4%A0%E5%8D%95%E4%BD%8D%E8%BD%AC%E6%8D%A2%E6%8E%A5%E5%8F%A3%E6%9B%BF%E6%8D%A2%E4%B8%BAuicontext%E6%8E%A5%E5%8F%A3",
          children: "像素单位转换接口替换为UIContext接口"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    // 在loadContent前调用时，vp2px会根据屏幕默认像素密度返回计算结果。\n    let pxValue = vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      // 需要在回调中调用。\n      let pxValue = vp2px(20);\n      hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    });\n    // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    pxValue = vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\nimport { PixelUtils } from '../Common/UIContext';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let localStorage = new LocalStorage();\n    localStorage.setOrCreate('message', 'Message from Storage')\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'success localStorage');\n    let window = windowStage.getMainWindowSync();\n    // 注册主窗的回调。\n    WindowUIContextUtils.registerWindowCallback(window);\n    // 在loadContent前调用getUIContext时，UI实例未创建，存在异常。\n    windowStage.loadContent('pages/Index', localStorage, (err) => {\n      // 需要在loadContent完成后获取UIContext。\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', `loadContent success.`);\n      // 需要在回调中调用。\n      try {\n        let uiContext = window.getUIContext();\n        PixelUtils.setUIContext(uiContext);\n        // 主窗获焦可能早于loadContent完成，需要在成功后设置保证有效。\n        WindowUIContextUtils.setActiveUIContext(uiContext)\n        if (!uiContext) {\n          hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n          return;\n        }\n        let pxValue = uiContext.vp2px(20);\n        hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n      } catch (e) {\n        hilog.error(DOMAIN, 'testTag', `Can't get UIContext, ${e}`);\n      }\n      // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    });\n  }\n\n  // ...\n\n  onWindowStageDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n    // 在窗口销毁时需要移除失效的UIContext\n    PixelUtil.removeUIContext();\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过静态方法获取uicontext对象",
      children: "通过静态方法获取UIContext对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，开发者可以通过UIContext类静态方法如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#resolveuicontext22",
        children: "resolveUIContext"
      }), "获取UIContext对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(408293)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优先通过自定义组件或者窗口对象获取UIContext，通过这两种方式获取不受调用作用域的影响，且获取到的是可预期的UIContext实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用该方案替换全局接口可以保证在同一个调用点保持与原先全局接口行为一致，但是不能保证能够作用到期望的UI实例上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面举例说明在不同时机使用静态方法替换全局接口的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    // 在loadContent前调用，此时无UI实例，vp2px会根据屏幕默认像素密度返回计算结果。\n    let pxValue = vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      // 在loadContent异步回调中调用，此时有UI实例，但上下文不明确，此时会根据主窗的像素密度返回计算结果。\n      let pxValue = vp2px(20);\n      hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    });\n    // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    pxValue = vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/Index.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('Calculate 20vp to px')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 在有UI实例且上下文明确时调用，此时会根据此时UI上下文对应的实例的像素密度返回计算结果。\n          let pxValue = vp2px(20);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用静态方法替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to set colorMode. Cause: %{public}s', JSON.stringify(err));\n    }\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    // 在loadContent前调用，此时无UI实例，vp2px会根据屏幕默认像素密度返回计算结果。\n    // 此时UIContext对象的解析策略ResolveStrategy为UNDEFINED。\n    let resolvedUIContext = UIContext.resolveUIContext();\n    let pxValue = resolvedUIContext.vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      // 在loadContent异步回调中调用，此时有UI实例，但上下文不明确，此时会根据主窗的像素密度返回计算结果。\n      // 此时UIContext对象的解析策略ResolveStrategy为UNIQUE。\n      let resolvedUIContext = UIContext.resolveUIContext();\n      let pxValue = resolvedUIContext.vp2px(20);\n      hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n    });\n    // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    pxValue = vp2px(20);\n    hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n  }\n\n  onWindowStageDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/Index.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { UIContext } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('Calculate 20vp to px')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 在有UI实例且上下文明确时调用，此时会根据此时UI上下文对应的实例的像素密度返回计算结果。\n          // 此时UIContext对象的解析策略ResolveStrategy为CALLING_SCOPE。\n          let resolvedUIContext = UIContext.resolveUIContext();\n          let pxValue = resolvedUIContext.vp2px(20);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#resolveuicontext22",
        children: "resolveUIContext"
      }), "接口获取UIContext的逻辑与下面示例通过基础查询接口组合使用的代码逻辑是等价的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function GetUIContextByAtomicInterface(): UIContext {\n  let callingScopeUIContext = UIContext.getCallingScopeUIContext();\n  if (callingScopeUIContext) {\n    hilog.info(0x00, 'testTag', `Get UIContext of calling scope.`)\n    return callingScopeUIContext;\n  }\n  let allContexts = UIContext.getAllUIContexts();\n  let length = allContexts.length;\n  if (length === 1) {\n    hilog.info(0x00, 'testTag', `Get UIContext of unique UI instance.`)\n    return allContexts[0];\n  }\n  let lastFocusedUIContext = UIContext.getLastFocusedUIContext();\n  if (lastFocusedUIContext) {\n    hilog.info(0x00, 'testTag', `Get UIContext of last focused instance.`)\n    return lastFocusedUIContext;\n  }\n  let lastForegroundUIContext = UIContext.getLastForegroundUIContext();\n  if (lastForegroundUIContext) {\n    hilog.info(0x00, 'testTag', `Get UIContext of last foregrounded instance.`)\n    return lastForegroundUIContext;\n  }\n  if (length !== 0) {\n    hilog.info(0x00, 'testTag', `Get UIContext with maximum instanceId.`)\n    return allContexts[length - 1];\n  }\n  hilog.info(0x00, 'testTag', `Get UIContext of undefined calling scope.`)\n  return new UIContext();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者希望自定义UIContext的获取策略，或者需要排除上述默认规则中的某些判断条件，建议直接使用上述代码中涉及的基础查询接口进行组合替换，以实现更符合业务场景的上下文获取逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在封装的接口中获取ui上下文",
      children: "在封装的接口中获取UI上下文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通常在封装的接口中使用全局接口。对于这类场景，应优先考虑增加UIContext类型的入参。如果应用只有一个窗口，可以使用全局存储对象来保存UIContext。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732108)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建UI实例是异步过程，需要在回调中调用窗口对象的getUIContext来获取UIContext对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议增加可选的UIContext入参，方便调用者传入UIContext。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vp2px/px2vp在UI实例未创建时会获取默认值进行计算，替换时可考虑获取当前默认的Display对象的逻辑像素密度进行计算，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%83%8F%E7%B4%A0%E5%8D%95%E4%BD%8D%E8%BD%AC%E6%8D%A2%E6%8E%A5%E5%8F%A3%E6%9B%BF%E6%8D%A2%E4%B8%BAuicontext%E6%8E%A5%E5%8F%A3",
          children: "像素单位转换接口替换为UIContext接口"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// common/Utils.ets\nclass PixelUtils {\n  static vp2px(vpValue: number) : number {\n    return vp2px(vpValue);\n  }\n\n  static fp2px(fpValue: number) : number | undefined {\n    return fp2px(fpValue);\n  }\n\n  static lpx2px(lpxValue: number) : number | undefined {\n    return lpx2px(lpxValue);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// common/Utils.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nexport class PixelUtil {\n  static uiContext: UIContext | undefined;\n\n  static setUIContext(uiContext: UIContext): void {\n    PixelUtil.uiContext = uiContext;\n  }\n\n  static removeUIContext(): void {\n    PixelUtil.uiContext = undefined;\n  }\n\n  static vp2px(vpValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtil.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n      return undefined;\n    }\n    return _uiContext.vp2px(vpValue)\n  }\n\n  static fp2px(fpValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtil.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n      return undefined;\n    }\n    return _uiContext.fp2px(fpValue)\n  }\n\n  lpx2px(lpxValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtil.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n      return undefined;\n    }\n    return _uiContext.lpx2px(lpxValue)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\nimport { PixelUtils } from '../Common/UIContext';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let localStorage = new LocalStorage();\n    localStorage.setOrCreate('message', 'Message from Storage')\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'success localStorage');\n    let window = windowStage.getMainWindowSync();\n    // 注册主窗的回调。\n    WindowUIContextUtils.registerWindowCallback(window);\n    // 在loadContent前调用getUIContext时，UI实例未创建，存在异常。\n    windowStage.loadContent('pages/Index', localStorage, (err) => {\n      // 需要在loadContent完成后获取UIContext。\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', `loadContent success.`);\n      // 需要在回调中调用。\n      try {\n        let uiContext = window.getUIContext();\n        PixelUtils.setUIContext(uiContext);\n        // 主窗获焦可能早于loadContent完成，需要在成功后设置保证有效。\n        WindowUIContextUtils.setActiveUIContext(uiContext)\n        if (!uiContext) {\n          hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n          return;\n        }\n        let pxValue = uiContext.vp2px(20);\n        hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n      } catch (e) {\n        hilog.error(DOMAIN, 'testTag', `Can't get UIContext, ${e}`);\n      }\n      // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    });\n  }\n\n  // ...\n\n  onWindowStageDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n    // 在窗口销毁时需要移除失效的UIContext\n    PixelUtil.removeUIContext();\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用替换的封装接口时，建议在能够获取UIContext的场景下传入UIContext参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/VpPage.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('Calculate 20vp to px')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let pxValue = PixelUtil.vp2px(20, this.getUIContext());\n          hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法获取UIContext时，可考虑直接调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let pxValue = PixelUtils.vp2px(20);\nhilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用存在多窗时通过最近获焦窗口获取uicontext",
      children: "应用存在多窗时，通过最近获焦窗口获取UIContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用有多个窗口且无法直接获取UIContext时，可通过最近获得焦点的窗口获取其UIContext。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296780)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方案将跟踪最近一个获得焦点的窗口，在调用具体功能时，该窗口可能处于失焦状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建窗口时需要调用registerWindowCallback注册回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// common/WindowUtils.ets\nimport { display, window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nexport class WindowUIContextUtils {\n  public static activeUIContext: UIContext | undefined;\n\n  static registerWindowCallback(windowClass: window.Window): void {\n    try {\n      windowClass.on('windowEvent', (event: window.WindowEventType) => {\n        if (event === window.WindowEventType.WINDOW_ACTIVE) {\n          try {\n            let uiContext = windowClass.getUIContext();\n            WindowUIContextUtils.activeUIContext = uiContext;\n          } catch (exception) {\n            hilog.error(DOMAIN, 'testTag', `Can't get UIContext, ${exception}`);\n          }\n        }\n      });\n    } catch (exception) {\n      console.error(`Failed to unregister callback. Cause: ${exception}`);\n    }\n  }\n\n  static unregisterWindowCallback(windowClass: window.Window): void {\n    windowClass.off('windowEvent');\n  }\n\n  static setActiveUIContext(uiContext: UIContext): void {\n    WindowUIContextUtils.activeUIContext = uiContext;\n  }\n\n  static vp2px(vpValue: number, uiContext?: UIContext): number {\n    let _uiContext = uiContext ?? WindowUIContextUtils.activeUIContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      let displayClass = display.getDefaultDisplaySync();\n      let density = displayClass.densityPixels;\n      return vpValue * density;\n    }\n\n    return _uiContext.vp2px(vpValue);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\nimport { PixelUtils } from '../Common/UIContext';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let localStorage = new LocalStorage();\n    localStorage.setOrCreate('message', 'Message from Storage')\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'success localStorage');\n    let window = windowStage.getMainWindowSync();\n    // 注册主窗的回调。\n    WindowUIContextUtils.registerWindowCallback(window);\n    // 在loadContent前调用getUIContext时，UI实例未创建，存在异常。\n    windowStage.loadContent('pages/Index', localStorage, (err) => {\n      // 需要在loadContent完成后获取UIContext。\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', `loadContent success.`);\n      // 需要在回调中调用。\n      try {\n        let uiContext = window.getUIContext();\n        PixelUtils.setUIContext(uiContext);\n        // 主窗获焦可能早于loadContent完成，需要在成功后设置保证有效。\n        WindowUIContextUtils.setActiveUIContext(uiContext)\n        if (!uiContext) {\n          hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n          return;\n        }\n        let pxValue = uiContext.vp2px(20);\n        hilog.info(DOMAIN, 'testTag', `20vp equals to ${pxValue}px`);\n      } catch (e) {\n        hilog.error(DOMAIN, 'testTag', `Can't get UIContext, ${e}`);\n      }\n      // loadContent是异步接口，在此处调用不能保证UI实例已经创建成功。\n    });\n  }\n\n  onWindowStageWillDestroy(windowStage: window.WindowStage) {\n    let window = windowStage.getMainWindowSync();\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `The main window: ${window}`);\n    // 注销主窗的回调。\n    WindowUIContextUtils.unregisterWindowCallback(window);\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/WindowTestPage.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  private subWindow: window.Window | undefined;\n\n  build() {\n    Column() {\n      Text('Create SubWindow')\n        .onClick(() => {\n          let config: window.Configuration = {\n            name: 'test',\n            windowType: window.WindowType.TYPE_DIALOG,\n            ctx: this.getUIContext().getHostContext()\n          };\n          try {\n            window.createWindow(config, (err: BusinessError, windowClass: window.Window) => {\n              const errCode: number = err.code;\n              if (errCode) {\n                hilog.error(DOMAIN, 'testTag', `Failed to create the window. Cause: ${errCode}`);\n                return;\n              }\n              // 在窗口创建后注册回调。\n              this.subWindow = windowClass;\n              try {\n                windowClass.setUIContent('pages/Index', () => {\n                  WindowUIContextUtils.registerWindowCallback(windowClass);\n                  windowClass.resize(500, 1000);\n                  windowClass.showWindow();\n                });\n              } catch (exception) {\n                hilog.error(DOMAIN, 'testTag', `Failed to setUIContent. Cause : ${exception}`);\n              }\n            });\n          } catch (exception) {\n            hilog.error(DOMAIN, 'testTag', `Failed to create the window. Cause : ${exception}`);\n          }\n        })\n      Text('Destroy SubWindow')\n        .onClick(() => {\n          if (this.subWindow) {\n            // 在窗口销毁前注销回调。\n            WindowUIContextUtils.unregisterWindowCallback(this.subWindow);\n            this.subWindow.destroyWindow();\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行绑定ui实例的闭包",
      children: "执行绑定UI实例的闭包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于UIContext中没有提供替代的接口（例如CalendarPickerDialog），或者开发者自定义实现的业务行为与多实例相关，需要和实例绑定时（例如，一个代码段），可以使用UIContext对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#runscopedtask",
        children: "runScopedTask"
      }), "方法执行闭包。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/CalendarPickerDialogPage.ets\n@Entry\n@Component\nstruct CalendarPickerDialogPage {\n  private selectedDate: Date = new Date('2025-10-01');\n\n  build() {\n    RelativeContainer() {\n      Button('Show CalendarPicker Dialog')\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let uiContext = this.getUIContext();\n          uiContext.runScopedTask(() => {\n            CalendarPickerDialog.show({\n              selected: this.selectedDate,\n              backgroundColor: Color.White,\n              backgroundBlurStyle: BlurStyle.NONE,\n              shadow: ShadowStyle.OUTER_FLOATING_SM\n            });\n          });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "特殊全局接口替换示例",
      children: "特殊全局接口替换示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分全局接口在替换为UIContext接口时，需要考虑一些特殊的调用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "像素单位转换接口替换为uicontext接口",
      children: "像素单位转换接口替换为UIContext接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因为不同的UI实例可以有不同的转换系数，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
        children: "像素单位"
      }), "接口计算结果依赖UI实例。其中fp2px/px2fp/lpx2px/px2lpx接口在无有效UI上下文时会返回undefined，而vp2px/px2vp接口在无有效UI上下文时，会获取默认屏幕像素密度进行计算。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "像素单位转换接口调用时机"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口行为"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可能与预期不一致的场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主窗口创建并调用loadContent或setUIContent前。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有合适的UI实例。  px2vp/vp2px使用默认屏幕的density进行换算，返回结果。  fp2px/px2fp/lpx2px/px2lpx返回undefined。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "px2vp/vp2px在多屏场景下可能与预期不一致。如预期以主屏的逻辑像素密度计算结果，实际以扩展屏的像素密度计算结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在loadContent或setUIContent后，且在UI的回调函数中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据UI跟踪的调用域（Scope）找到具体的UI实例，使用该UI实例关联的信息进行计算。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用单Ability单窗口的场景，并在loadContent或setUIContent之后，但在非UI的其他异步回调中调用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法根据UI跟踪的调用域（Scope）找到具体的UI实例，但根据当前单例场景可以确定唯一UI实例，使用该UI实例关联的信息进行计算。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "多Ability或多窗口的多UI实例场景，在loadContent或setUIContent调用之后，但在其他异步回调中调用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法根据UI跟踪的调用域（Scope）找到具体的UI实例，也无法确定唯一实例。接口按照最近获焦、最近前台、最近创建的优先级依次查找匹配的UI实例，并根据UI实例关联的信息进行计算。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多实例场景可能存在作用实例和预期不一致。如预期以主窗所处屏幕的逻辑像素密度计算结果，实际以子窗所处屏幕的像素密度计算结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "所有的窗口销毁，无UI实例后。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有合适的UI实例。  px2vp/vp2px使用默认屏幕的density进行换算，返回结果。  fp2px/px2fp/lpx2px/px2lpx返回undefined。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "px2vp/vp2px在多屏场景下可能与预期不一致。如预期以扩展屏的逻辑像素密度计算结果，实际以主屏的像素密度计算结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在实际的开发场景中，全局接口可能在UI实例创建前被调用。此时，在替换vp2px/px2vp时，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetdefaultdisplaysync9",
        children: "display.getDefaultDisplaySync"
      }), "获取当前默认屏幕的逻辑像素密度计算结果；替换fp2px/px2fp/lpx2px/px2lpx接口时，可以直接返回undefined，以保证行为的一致性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Common/UIContext.ets\nexport class PixelUtils {\n  static vp2px(vpValue: number) : number {\n    return vp2px(vpValue);\n  }\n\n  static fp2px(fpValue: number) : number | undefined {\n    return fp2px(fpValue);\n  }\n\n  static lpx2px(lpxValue: number) : number | undefined {\n    return lpx2px(lpxValue);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Common/UIContext.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { display } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport class PixelUtils {\n  public static uiContext: UIContext | undefined;\n\n  static setUIContext(uiContext: UIContext): void {\n    PixelUtils.uiContext = uiContext;\n  }\n\n  static vp2px(vpValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtils.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      let displayClass = display.getDefaultDisplaySync();\n      let density = displayClass.densityPixels;\n      return vpValue * density;\n    }\n    return _uiContext.vp2px(vpValue)\n  }\n\n  static fp2px(fpValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtils.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n      return undefined;\n    }\n    return _uiContext.fp2px(fpValue)\n  }\n\n  lpx2px(lpxValue: number, uiContext?: UIContext): number | undefined {\n    let _uiContext = uiContext ?? PixelUtils.uiContext;\n    if (!_uiContext || !_uiContext.isAvailable()) {\n      hilog.error(DOMAIN, 'testTag', `Can't get UIContext`);\n      return undefined;\n    }\n    return _uiContext.lpx2px(lpxValue)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取ability的context",
      children: "获取Ability的Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-getcontext/js-apis-getcontext",
        children: "getContext"
      }), "接口用于在UI页面中获取对应UI实例所属Ability的Context，因此依赖于UI实例。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "getContext接口的调用时机"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口行为"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可能与预期不一致的场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主窗口创建并调用loadContent或setUIContent前。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有合适的UI实例，返回undefined。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主窗口创建并调用loadContent或setUIContent后，且传入自定义组件对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪自定义组件所属的UI实例，返回该UI实例所属Ability的Context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "在loadContent或setUIContent后，且在UI的回调函数中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据UI跟踪的调用域（Scope）找到具体的UI实例，返回该UI实例所属Ability的Context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用单Ability单窗口的场景，并在loadContent或setUIContent之后，但在非UI的其他异步回调中调用且未传入自定义组件对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法根据UI跟踪的调用域（Scope）找到具体的UI实例，但根据当前单例场景可以确定唯一UI实例，返回该UI实例所属Ability的Context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "多Ability或多窗口的多UI实例场景，在loadContent或setUIContent调用之后，但在其他异步回调中调用且未传入自定义组件对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法根据UI跟踪的调用域(Scope)找到具体的UI实例，也无法确定唯一实例。接口按照最近获焦、最近前台、最近创建的优先级依次查找匹配的UI实例，返回该UI实例所属Ability的Context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多实例场景可能与预期不一致。如存在两个Ability时，预期返回第一个创建的Ability的Context，实际返回第二个创建的Ability的Context。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "所有的窗口销毁，无UI实例后。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有合适的UI实例，返回undefined。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在单Ability场景中，建议直接获取Ability的context属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口，该接口已经废弃，推荐使用下方的UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Common/ContextUtils.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct GetContextPage {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 需要确保传入的是自定义组件对象。\n          let context = getContext(this);\n          hilog.info(DOMAIN, 'testTag', `The context is ${context}`);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Common/ContextUtils.ets\nexport class ContextUtils {\n  public static context: Context | undefined;\n\n  static setContext(context: Context): void {\n    ContextUtils.context = context;\n  }\n\n  static getContext(uiContext?: UIContext): Context | undefined {\n    if (uiContext) {\n      return uiContext.getHostContext();\n    }\n\n    return ContextUtils.context;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口的默认返回值设置为Ability的成员属性context。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\nimport { PixelUtils } from '../Common/UIContext';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // ...\n    ContextUtils.setContext(this.context);\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'setContext success');\n    // ...\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UI界面中，建议传入UIContext，以保证符合预期或直接调用getHostContext。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/ContextPage.ets\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xF811;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Text('getContext')\n        .onClick(() => {\n          let context = ContextUtils.getContext(this.getUIContext());\n          hilog.info(DOMAIN, 'testTag', `The context is ${context}`);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无UI场景直接返回窗口创建时设置的默认返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = ContextUtils.getContext();\nhilog.info(DOMAIN, 'testTag', `The context is ${context}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localstorage替换为uicontext的接口",
      children: "LocalStorage替换为UIContext的接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LocalStorage是页面级的UI状态存储，通过@Entry装饰器接收的参数可以在页面内共享同一个LocalStorage实例。使用全局接口时，开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#getshareddeprecated",
        children: "getShared"
      }), "向@Entry装饰器传递LocalStorage对象。使用UIContext接口后，无法直接获取UIContext对象，可以将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-entry/ts-universal-entry#entryoptions10",
        children: "EntryOptions"
      }), "的useSharedStorage参数设置为true，以使用共享的LocalStorage实例对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局接口，该接口已经废弃，推荐使用下方的UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/LocalStoragePage\n@Entry({storage: LocalStorage.getShared()})\n@Component\nstruct LocalStoragePage {\n  @LocalStorageLink('message') message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('LocalStoragePageHelloWorld')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let storage = LocalStorage.getShared();\n          if (storage) {\n            storage.setOrCreate('message', 'onClick is called.')\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIContext接口替换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/LocalStoragePage\n@Entry({ useSharedStorage: true })\n@Component\nstruct LocalStoragePage {\n  @LocalStorageLink('message') message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('LocalStoragePageHelloWorld')\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let uiContext = this.getUIContext();\n          let storage = uiContext.getSharedLocalStorage();\n          if (storage) {\n            storage.setOrCreate('message', 'onClick is called.');\n            this.message = 'LocalStoragePageHelloWorld';\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用共享的LocalStorage对象需要在loadContent时传入LocalStorage，详细可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
        children: "LocalStorage：页面级UI状态存储"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { ContextUtils } from '../Common/ContextUtils';\nimport { WindowUIContextUtils } from '../Common/WindowUtils';\nimport { PixelUtils } from '../Common/UIContext';\nimport { PixelUtil } from '../Common/Utils';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let localStorage = new LocalStorage();\n    localStorage.setOrCreate('message', 'Message from Storage')\n  // ...\n    windowStage.loadContent('pages/Index', localStorage, (err) => {\n      // 需要在loadContent完成后获取UIContext。\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', `loadContent success.`);\n      // ...\n    });\n  }\n\n  // ...\n}\n"
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
528620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
408293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
734685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958056-3200411a851c5a2d77f9fe4cc85f95cf.png");

},
621183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478057-91c314b7412cd08f8d0237cd41cc6d13.png");

},
127781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
732108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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