"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["276909"], {
971800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_common_events_focus_event_arkts_common_events_focus_event_md_4fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-arkts-common-events-focus-event-arkts-common-events-focus-event-md-4fd.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_common_events_focus_event_arkts_common_events_focus_event_md_4fd_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/arkts-common-events-focus-event","title":"支持焦点处理","description":"基础概念与规范","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/arkts-common-events-focus-event.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"支持焦点处理","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-focus-event","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持统一拖拽","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/"},"next":{"title":"动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/arkts-common-events-focus-event.md


const frontMatter = {
	title: '支持焦点处理',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-focus-event',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持焦点处理';

const assets = {

};



const toc = [{
  "value": "基础概念与规范",
  "id": "基础概念与规范",
  "level": 2
}, {
  "value": "基础概念",
  "id": "基础概念",
  "level": 3
}, {
  "value": "焦点传递规则",
  "id": "焦点传递规则",
  "level": 3
}, {
  "value": "走焦规范",
  "id": "走焦规范",
  "level": 3
}, {
  "value": "走焦算法",
  "id": "走焦算法",
  "level": 3
}, {
  "value": "获焦/失焦事件",
  "id": "获焦失焦事件",
  "level": 2
}, {
  "value": "设置组件是否可获焦",
  "id": "设置组件是否可获焦",
  "level": 2
}, {
  "value": "设置容器绘制焦点框",
  "id": "设置容器绘制焦点框",
  "level": 2
}, {
  "value": "设置焦点停留在容器上",
  "id": "设置焦点停留在容器上",
  "level": 2
}, {
  "value": "默认焦点",
  "id": "默认焦点",
  "level": 2
}, {
  "value": "层级页面的默认焦点",
  "id": "层级页面的默认焦点",
  "level": 3
}, {
  "value": "容器的默认焦点",
  "id": "容器的默认焦点",
  "level": 3
}, {
  "value": "层级页面/容器整体获焦时的焦点链",
  "id": "层级页面容器整体获焦时的焦点链",
  "level": 3
}, {
  "value": "焦点样式",
  "id": "焦点样式",
  "level": 2
}, {
  "value": "主动获焦/失焦",
  "id": "主动获焦失焦",
  "level": 2
}, {
  "value": "自定义组件走焦顺序",
  "id": "自定义组件走焦顺序",
  "level": 2
}, {
  "value": "nextFocus自定义走焦",
  "id": "nextfocus自定义走焦",
  "level": 3
}, {
  "value": "tabIndex自定义走焦",
  "id": "tabindex自定义走焦",
  "level": 3
}, {
  "value": "焦点组与获焦优先级",
  "id": "焦点组与获焦优先级",
  "level": 2
}, {
  "value": "焦点与按键事件",
  "id": "焦点与按键事件",
  "level": 2
}, {
  "value": "组件获焦能力说明",
  "id": "组件获焦能力说明",
  "level": 2
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
        id: "支持焦点处理",
        children: "支持焦点处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念与规范",
      children: "基础概念与规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "焦点、焦点链和走焦"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "焦点：指向当前应用界面上唯一的一个可交互元素，当用户使用键盘、电视遥控器、车机摇杆/旋钮等非指向性输入设备与应用程序进行间接交互时，基于焦点的导航和交互是重要的输入手段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "焦点链：在应用的组件树形结构中，当一个组件获得焦点时，从根节点到该组件节点的整条路径上的所有节点都会处于焦点状态，形成一条连续的焦点链。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["走焦：指焦点在应用内的组件之间转移的行为。这一过程对用户是透明的，但开发者可以通过监听onFocus（焦点获取）和onBlur（焦点失去）事件来捕捉这些变化。关于走焦的具体方式和规则，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%B5%B0%E7%84%A6%E8%A7%84%E8%8C%83",
          children: "走焦规范"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "焦点激活态"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点激活态是用来显示当前获焦组件焦点框的视觉样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "显示规则"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "默认状态：焦点激活态默认是隐藏的。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "激活条件：只有当应用程序进入\"激活态\"时，焦点激活态才会显示。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["重要关系：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "获得焦点的组件不一定显示激活态（取决于应用是否处于激活态）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "显示激活态的组件必定是当前获得焦点的组件。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "样式定制：组件通常有内置的激活态样式，开发者可以通过样式接口自定义，自定义后会覆盖默认样式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "显示优先级：当多个组件同时拥有焦点时，系统优先显示子组件的激活态，且同一时间只显示一个激活态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何进入激活态"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "按下外接键盘的Tab键（注意：首次激活时的Tab键仅用于激活，不会触发焦点移动）。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller",
              children: "FocusController"
            }), "的activate(true)方法。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何退出激活态"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用FocusController的activate(false)方法。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "发生点击事件时（包括触屏点击或鼠标左键点击）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusActiveExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Set Active').width(140).height(45).margin(5).onClick(() => {\n          this.getUIContext().getFocusController().activate(true, true);\n        })\n        Button('Set Not Active').width(140).height(45).margin(5).onClick(() => {\n          this.getUIContext().getFocusController().activate(false, true);\n        })\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按下Tab键，焦点激活态显示。点击鼠标退出焦点激活态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315386)/* ["default"] */.A) + "",
        width: "328",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#activate14",
        children: "activate"
      }), "接口进入和退出焦点激活态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520989)/* ["default"] */.A) + "",
        width: "328",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例操作步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Set Active按钮，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#activate14",
          children: "activate"
        }), "接口进入焦点激活态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tab键走焦至Set Not Active按钮，Enter键触发按键事件，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#activate14",
          children: "activate"
        }), "接口退出焦点激活态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "层级页面"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "层级页面是焦点框架中特定容器组件的统称，涵盖Page、Dialog、SheetPage、ModalPage、Menu、Popup、NavBar、NavDestination等。这些组件通常具有以下关键特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视觉层级独立性：从视觉呈现上看，这些组件独立于其他页面内容，并通常位于其上方，形成视觉上的层级差异。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "焦点跟随：此类组件在首次创建并展示之后，会立即将应用内焦点抢占。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "走焦范围限制：当焦点位于这些组件内部时，用户无法通过键盘按键将焦点转移到组件外部的其他元素上，焦点移动仅限于组件内部。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在一个应用程序中，任何时候都至少存在一个层级页面组件，并且该组件会持有当前焦点。当该层级页面关闭或不再可见时，焦点会自动转移到下一个可用的层级页面组件上，确保用户交互的连贯性和一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298808)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Popup组件在focusable属性（组件属性，非通用属性）为false的时候，不会有第2条特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NavBar、NavDestination没有第3条特性，对于它们的走焦范围，是与它们的首个父层级页面相同的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "根容器"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根容器是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "内的概念，当某个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "首次创建并展示时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "的特性，焦点会立即被该", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "抢占。此时，该", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "所在焦点链的末端节点将成为默认焦点，而这个默认焦点通常位于该", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "的根容器上。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在缺省状态下，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "的默认焦点位于其根容器上，但开发者可以通过defaultFocus属性来自定义这一行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当焦点位于根容器时，首次按下Tab键不仅会使焦点进入激活状态，还会根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%84%A6%E7%82%B9%E4%BC%A0%E9%80%92%E8%A7%84%E5%88%99",
        children: "焦点传递规则"
      }), "进行传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "焦点传递规则",
      children: "焦点传递规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点传递是指当用户首次激活应用焦点系统时，焦点如何从根节点逐级向下传递到具体组件的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在焦点链上的组件，都会处于获焦状态。同时组件在获焦时，会继续向下递归传递获焦状态，每次传递给第一个子组件，直到叶子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\nexport struct FocusTransferExample {\n  @State logText: string = '\\n';\n  context = this.getUIContext().getHostContext();\n\n  addText(message: string) {\n    this.logText += `${message}\\n`;\n  };\n\n  build() {\n    NavDestination() {\n      Column() {\n        Row() {\n          Column() {\n            Button('Button 1')\n              .margin(20)\n              .onClick(() => {\n                // 请将$r('app.string.Focus_Event')替换为实际资源文件，在本示例中该资源文件的value值为\"获焦信息\"\n                this.logText = this.context!.resourceManager.getStringSync($r('app.string.Focus_Event').id) + '：\\n';\n                this.getUIContext().getFocusController().requestFocus('Row 2');\n              })\n          }\n        }\n\n        Column() {\n          Row() {\n            Button('Button 2')\n              .margin(20)\n              .onFocus(() => {\n                // 请将$r('app.string.Get_Focus')替换为实际资源文件，在本示例中该资源文件的value值为\"获得焦点\"\n                this.addText('Button 2' + this.context!.resourceManager.getStringSync($r('app.string.Get_Focus').id));\n              })\n            Button('button 3')\n              .margin(20)\n              .onFocus(() => {\n                // 请将$r('app.string.Get_Focus')替换为实际资源文件，在本示例中该资源文件的value值为\"获得焦点\"\n                this.addText('Button 3' + this.context!.resourceManager.getStringSync($r('app.string.Get_Focus').id));\n              })\n          }\n          .id('Row 2')\n          .onFocus(() => {\n            // 请将$r('app.string.Get_Focus')替换为实际资源文件，在本示例中该资源文件的value值为\"获得焦点\"\n            this.addText('Row 2' + this.context!.resourceManager.getStringSync($r('app.string.Get_Focus').id));\n          })\n        }\n        .onFocus(() => {\n          // 请将$r('app.string.Get_Focus')替换为实际资源文件，在本示例中该资源文件的value值为\"获得焦点\"\n          this.addText('Column 2' + this.context!.resourceManager.getStringSync($r('app.string.Get_Focus').id));\n        })\n\n        Scroll() {\n          Text(this.logText)\n            .fontSize(14)\n            .textAlign(TextAlign.Start)\n            .padding(10)\n        }\n        .height('40%')\n        .width('100%')\n        .border({ width: 1, color: '#ccc' })\n        .margin(10)\n      }\n      .height('100%')\n      .padding(20)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后点击Button1，请求焦点给Row组件，Row组件的第一个可获焦子节点Button2获焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200798)/* ["default"] */.A) + "",
        width: "294",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "走焦规范",
      children: "走焦规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据走焦的触发方式，可以分为主动走焦和被动走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "主动走焦"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指开发者/用户主观行为导致的焦点移动，包括：使用外接键盘的按键走焦（Tab键/Shift+Tab键/方向键）、使用requestFocus申请焦点、clearFocus清除焦点、focusOnTouch点击申请焦点等接口导致的焦点转移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按键走焦"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "前提：当前应用需处于焦点激活态。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "范围限制：按键走焦仅在当前获得焦点的层级页面内进行，具体参见“层级页面”中的“走焦范围限制”部分。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "按键类型："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tab键：遵循Z字型遍历逻辑，完成当前范围内所有叶子节点的遍历，到达当前范围内的最后一个组件后，继续按下Tab键，焦点将循环至范围内的第一个可获焦组件，实现循环走焦。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Shift+Tab键：与Tab键具有相反的焦点转移效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方向键（上、下、左、右）：遵循十字型移动策略，在单层容器中，焦点的转移由该容器的特定走焦算法决定。若算法判定下一个焦点应落在某个容器组件上，系统将采用中心点距离优先的算法来进一步确定容器内的目标子节点。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "走焦算法：每个可获焦的容器组件都有其特定的走焦算法，用于定义焦点转移的规则。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "子组件优先：当子组件处理按键走焦事件，父组件将不再介入。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "requestFocus"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%BB%E5%8A%A8%E8%8E%B7%E7%84%A6%E5%A4%B1%E7%84%A6",
            children: "主动获焦失焦"
          }), "，可以主动将焦点转移到指定组件上。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不可跨窗口或跨ArkUI实例申请焦点，但可以跨层级页面申请焦点。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearFocus"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#clearfocus12",
            children: "clearFocus"
          }), "，会清除当前层级页面中的焦点，最终焦点停留在根容器上。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "focusOnTouch"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusontouch9",
            children: "focusOnTouch"
          }), "，使绑定组件具备点击后获得焦点的能力。若组件本身不可获焦，则此功能无效。若绑定的是容器组件，点击后优先将焦点转移给上一次获焦的子组件，否则转移给第一个可获焦的子组件。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "被动走焦"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被动走焦是指组件焦点因系统或其他操作而自动转移，无需开发者直接干预，这是焦点系统的默认行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前会被动走焦的机制有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件删除：当处于焦点状态的组件被删除时，焦点框架首先尝试将焦点转移到相邻的兄弟组件上，遵循先向后再向前的顺序。若所有兄弟组件均不可获焦，则焦点将释放，并通知其父组件进行焦点处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "属性变更：若将处于焦点状态的组件的focusable或enabled属性设置为false，或者将visibility属性设置为不可见，系统将自动转移焦点至其他可获焦组件，转移方式与1中相同。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "切换：当发生", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "切换时，如从一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "跳转到另一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "，当前", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "的焦点将自动释放，新", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "可能会根据预设逻辑自动获得焦点。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web组件初始化：对于Web组件，当其被创建时，若其设计需要立即获得焦点（如某些弹出框或输入框），则可能触发焦点转移至该Web组件，其行为属于组件自身的行为逻辑，不属于焦点框架的规格范围。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "走焦算法",
      children: "走焦算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在焦点管理系统中，每个可获焦的容器都配备有特定的走焦算法，这些算法定义了当使用Tab键、Shift+Tab键或方向键时，焦点如何从当前获焦的子组件转移到下一个可获焦的子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器采用何种走焦算法取决于其UX（用户体验）规格，并由容器组件进行适配。目前，焦点框架支持三种走焦算法：线性走焦、投影走焦和自定义走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "线性走焦算法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线性走焦算法是默认的走焦策略，它基于容器中子节点在节点树中的挂载顺序进行走焦，常用于单方向布局的容器，如Row、Column和Flex容器。运行规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "顺序依赖：走焦顺序完全基于子节点在节点树中的挂载顺序，与它们在界面上的实际布局位置无关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tab键走焦：使用Tab键时，焦点将按照子节点的挂载顺序依次遍历。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方向键走焦：当使用与容器定义方向垂直的方向键时，容器不接受该方向的走焦请求。例如，在横向的Row容器中，无法使用方向键进行上下移动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "边界处理：当焦点位于容器的首尾子节点时，容器将拒绝与当前焦点方向相反的方向键走焦请求。例如，焦点在一个横向的Row容器的第一个子节点上时，该容器无法处理方向键左的走焦请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusLinerExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Column() {\n          Button('Column Button1')\n            .width(150)\n            .height(45)\n            .fontColor(Color.White)\n            .margin(10)\n          Button('Column Button2')\n            .width(150)\n            .height(45)\n            .fontColor(Color.White)\n            .margin(10)\n        }\n        .margin(10)\n        Row() {\n          Button('Row Button1')\n            .width(150)\n            .height(45)\n            .fontColor(Color.White)\n            .margin(10)\n          Button('Row Button2')\n            .width(150)\n            .height(45)\n            .fontColor(Color.White)\n            .margin(10)\n        }\n      }\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab键走焦：按照子节点的挂载顺序循环走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579537)/* ["default"] */.A) + "",
        width: "328",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方向键上下走焦：纵向的Column容器中，可以使用上下键走焦，无法使用左右键走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(452531)/* ["default"] */.A) + "",
        width: "328",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "横向的Row容器中，可以使用左右键走焦，无法使用上下键走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573414)/* ["default"] */.A) + "",
        width: "328",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "投影走焦算法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "投影走焦算法基于当前获焦组件在走焦方向上的投影，结合子组件与投影的重叠面积和中心点距离进行胜出判定。该算法适用于子组件大小不一的容器，目前仅支持配置了wrap属性的Flex组件。运行规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方向键走焦时，判断投影与子组件区域的重叠面积，在所有面积不为0的子组件中，计算它们与当前获焦组件的中心点直线距离，选择距离最短的子组件。若存在多个备选子组件，则选择节点树上更靠前的子组件。若无任何子组件与投影有重叠，说明该容器无法处理该方向键的走焦请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tab键走焦时，先使用规格1，按照方向键右进行判定，若找到则成功退出，若无法找到，则将当前获焦子组件的位置模拟往下移动该获焦子组件的高度，然后再按照方向键左进行投影判定，有投影重叠且中心点直线距离最近的子组件胜出，若无投影重叠的子组件，则表示该容器无法处理本次Tab键走焦请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shift+Tab键走焦时，先使用规格1，按照方向键左进行判定，找到则成功退出。若无法找到，则将当前获焦子组件的位置模拟向上移动该获焦子组件的高度，然后再按照方向键右进行投影判定，有投影重叠且中心点直线距离最近的子组件胜出，若无投影重叠的子组件，则表示该容器无法处理本次的Shift+Tab键走焦请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct ProjectAreaFocusExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Column({ space: 5 }) {\n          Text('Wrap').fontSize(12).width('90%')\n          // 子组件多行布局\n          Flex({ wrap: FlexWrap.Wrap }) {\n            Button('1').width(140).height(50).margin(5)\n            Button('2').width(140).height(50).margin(5)\n            Button('3').width(140).height(50).margin(5)\n            Button('4').width(140).height(50).margin(5)\n            Button('5').width(140).height(50).margin(5)\n          }\n          .width('90%')\n          .padding(10)\n        }.width('100%').margin({ top: 5 })\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256496)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "这种投影走焦算法计算的走焦顺序与组件布局和大小密切相关，建议在组件排列非常规整的场景下使用。如果组件大小不一且存在横向或纵向的交叠关系，则可能会导致走焦顺序与开发者预期不符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者希望有明确的走焦顺序，建议使用Column/Row等顺序走焦的容器实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex多行组件布局，组件大小一致，走焦正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43960)/* ["default"] */.A) + "",
        width: "376",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct ProjectAreaFocusFlexExample {\n  build() {\n    NavDestination() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('Wrap').fontSize(12).width('90%')\n        // 子组件多行布局\n        Flex({ wrap: FlexWrap.Wrap }) {\n          Button('1').width(145).height(50).margin(5)\n          Button('2').width(145).height(50).margin(5)\n          Button('3').width(150).height(50).margin(5)\n          Button('4').width(160).height(50).margin(5)\n          Button('5').width(170).height(50).margin(5)\n        }\n        .width('90%')\n        .padding(10)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex多行组件布局，组件大小不一且有纵向的交叠关系，无法Tab键走焦至下方4、5按钮组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438323)/* ["default"] */.A) + "",
        width: "368",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义走焦算法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由组件自定义的走焦算法，规格由组件定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获焦失焦事件",
      children: "获焦/失焦事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onFocus(event: () => void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获焦事件回调，绑定该接口的组件获焦时，回调响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onBlur(event:() => void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "失焦事件回调，绑定该接口的组件失焦时，回调响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFocus和onBlur两个接口通常成对使用，来监听组件的焦点变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct OnFocusBlur {\n  @State oneButtonColor: Color = Color.Gray;\n  @State twoButtonColor: Color = Color.Gray;\n  @State threeButtonColor: Color = Color.Gray;\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // 通过外接键盘的上下键可以让焦点在三个按钮间移动，按钮获焦时颜色变化，失焦时变回原背景色\n        Button('First Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.oneButtonColor)\n          .fontColor(Color.Black)\n          // 监听第一个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.oneButtonColor = Color.Green;\n          })\n          // 监听第一个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.oneButtonColor = Color.Gray;\n          })\n\n        Button('Second Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.twoButtonColor)\n          .fontColor(Color.Black)\n          // 监听第二个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.twoButtonColor = Color.Green;\n          })\n          // 监听第二个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.twoButtonColor = Color.Gray;\n          })\n\n        Button('Third Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.threeButtonColor)\n          .fontColor(Color.Black)\n          // 监听第三个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.threeButtonColor = Color.Green;\n          })\n          // 监听第三个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.threeButtonColor = Color.Gray;\n          })\n      }.width('100%').margin({ top: 20 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872252)/* ["default"] */.A) + "",
        width: "227",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下3步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用打开，按下Tab键激活走焦，“First Button”显示焦点激活态样式：组件外围有一个蓝色的闭合框，onFocus回调响应，背景色变成绿色。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按下Tab键，触发走焦，“Second Button”获焦，onFocus回调响应，背景色变成绿色；“First Button”失焦，onBlur回调响应，背景色变回灰色。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按下Tab键，触发走焦，“Third Button”获焦，onFocus回调响应，背景色变成绿色；“Second Button”失焦，onBlur回调响应，背景色变回灰色。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父子节点同时存在获焦和失焦事件时，获焦/失焦事件响应顺序为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父节点Row1失焦 —> 子节点Button1失焦 —> 子节点Button2获焦 —> 父节点Row2获焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_FocusAndBlurExample]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'MyApp_FocusAndBlurExample';\n\n@Entry\n@Component\nexport struct FocusAndBlurExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Column({ space: 5 }) {\n          Row() { // 父节点Row1\n            Button('Button1') // 子节点Button1\n              .width(140)\n              .height(45)\n              .margin(5)\n              .onFocus(() => {\n                hilog.info(DOMAIN, TAG, `${BUNDLE} Button1 onFocus`);\n              })\n              .onBlur(() => {\n                hilog.info(DOMAIN, TAG, `${BUNDLE} Button1 onBlur`);\n              })\n          }\n          .onFocus(() => {\n            hilog.info(DOMAIN, TAG, BUNDLE + 'Row1 onFocus');\n          })\n          .onBlur(() => {\n            hilog.info(DOMAIN, TAG, `${BUNDLE} Row1 onBlur`);\n          })\n\n          Row() { // 父节点Row2\n            Button('Button2') // 子节点Button2\n              .width(140)\n              .height(45)\n              .margin(5)\n              .onFocus(() => {\n                hilog.info(DOMAIN, TAG, `${BUNDLE} Button2 onFocus`);\n              })\n              .onBlur(() => {\n                hilog.info(DOMAIN, TAG, `${BUNDLE} Button2 onBlur`);\n              })\n          }\n          .onFocus(() => {\n            hilog.info(DOMAIN, TAG, BUNDLE + 'Row2 onFocus');\n          })\n          .onBlur(() => {\n            hilog.info(DOMAIN, TAG, `${BUNDLE} Row2 onBlur`);\n          })\n        }.width('100%').margin({ top: 5 })\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Button1走焦到Button2，日志打印顺序："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Row1 onBlur\nButton1 onBlur\nButton2 onFocus\nRow2 onFocus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置组件是否可获焦",
      children: "设置组件是否可获焦"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusable(value: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件是否可获焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照组件的获焦能力可大致分为三类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认可获焦的组件，通常是有交互行为的组件，例如Button、Checkbox、TextInput组件，此类组件无需设置任何属性，默认即可获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有获焦能力，但默认不可获焦的组件，典型的是Text、Image组件，此类组件缺省情况下无法获焦，若需要使其获焦，可使用通用属性focusable(true)使能。对于没有配置focusable属性，有获焦能力但默认不可获焦的组件，例如没有可获焦子组件的容器组件，为其配置onClick或是单指单击的Tap手势，该组件会隐式地成为可获焦组件。如果其focusable属性被设置为false，即使配置了上述事件，该组件依然不可获焦。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["无获焦能力的组件，通常是无任何交互行为的展示类组件，例如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank",
          children: "Blank"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
          children: "Canvas"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
          children: "Circle"
        }), "组件，此类组件即使使用focusable属性也无法使其可获焦。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置容器组件可获焦："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获焦的主要目的是为了响应用户交互，如果组件不具备交互能力，则其也不会具有可获焦能力。容器组件通常不具备交互能力，因此如果一个容器组件（如Stack、Column）作为叶子节点，即使通过.focusable(true)也无法使其具备可获焦能力。需要注意的是通过动态方式创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点也受限于这个规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想让作为叶子节点的容器组件可获焦，可通过以下任一方式实现："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在其内添加一个具备获焦能力的叶子节点组件(如button)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为其配置onClick、Tap手势等使其能响应点击交互。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enabled(value: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件可交互性属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable#enabled",
        children: "enabled"
      }), "为false，则组件不可交互，无法获焦。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "visibility(value: Visibility)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件可见性属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility#visibility",
        children: "visibility"
      }), "为Visibility.None或Visibility.Hidden，则组件不可见，无法获焦。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusOnTouch(value: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件是否支持点击获焦能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(231585)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当某组件处于获焦状态时，将其的focusable属性或enabled属性设置为false，会自动使该组件失焦，然后焦点按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%B5%B0%E7%84%A6%E8%A7%84%E8%8C%83",
        children: "走焦规范"
      }), "将焦点转移给其他组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusableExample {\n  @State textFocusable: boolean = true;\n  @State textEnabled: boolean = true;\n  @State color1: Color = Color.Yellow;\n  @State color2: Color = Color.Yellow;\n  @State color3: Color = Color.Yellow;\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // 请将$r('app.string.Focus_Focusable_text')替换为实际资源文件，在本示例中该资源文件的value值为\"当某组件处于获焦状态\"\n        Text($r('app.string.Focus_Focusable_text'))\n          .fontSize(14)\n          .fontColor('#666')\n        Column({ space: 5 }) {\n          Text('Default Text')    // 第一个Text组件未设置focusable属性，默认不可获焦\n            .borderColor(this.color1)\n            .borderWidth(2)\n            .width(300)\n            .height(70)\n            .onFocus(() => {\n              this.color1 = Color.Blue;\n            })\n            .onBlur(() => {\n              this.color1 = Color.Yellow;\n            })\n          Divider()\n\n          Text('focusable: ' + this.textFocusable)    // 第二个Text设置了focusable初始为true，focusableOnTouch为true\n            .borderColor(this.color2)\n            .borderWidth(2)\n            .width(300)\n            .height(70)\n            .focusable(this.textFocusable)\n            .focusOnTouch(true)\n            .onFocus(() => {\n              this.color2 = Color.Blue;\n            })\n            .onBlur(() => {\n              this.color2 = Color.Yellow;\n            })\n\n          Text('enabled: ' + this.textEnabled)    // 第三个Text设置了focusable为true，enabled初始为true\n            .borderColor(this.color3)\n            .borderWidth(2)\n            .width(300)\n            .height(70)\n            .focusable(true)\n            .enabled(this.textEnabled)\n            .focusOnTouch(true)\n            .onFocus(() => {\n              this.color3 = Color.Blue;\n            })\n            .onBlur(() => {\n              this.color3 = Color.Yellow;\n            })\n\n          Divider()\n\n          Row() {\n            Button('Button1')\n              .width(140).height(70)\n            Button('Button2')\n              .width(160).height(70)\n          }\n\n          Divider()\n          Button('Button3')\n            .width(300).height(70)\n\n          Divider()\n        }.width('100%').justifyContent(FlexAlign.Center)\n        .onKeyEvent((e) => {\n          // 绑定onKeyEvent，在该Column组件获焦时，按下'F'键，可将第二个Text的focusable置反\n          if (e.keyCode === 2022 && e.type === KeyType.Down) {\n            this.textFocusable = !this.textFocusable;\n          }\n          // 绑定onKeyEvent，在该Column组件获焦时，按下'G'键，可将第三个Text的enabled置反\n          if (e.keyCode === 2023 && e.type === KeyType.Down) {\n            this.textEnabled = !this.textEnabled;\n          }\n        })\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502957)/* ["default"] */.A) + "",
        width: "249",
        height: "305"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下3步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "第一个Text组件没有设置focusable(true)属性，该Text组件无法获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击第二个Text组件，由于设置了focusOnTouch(true)，第二个组件获焦。按下Tab键，触发走焦，仍然是第二个Text组件获焦。按键盘F键，触发onKeyEvent，focusable置为false，第二个Text组件变成不可获焦，焦点自动转移，会自动从Text组件寻找下一个可获焦组件，焦点转移到第三个Text组件上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按键盘G键，触发onKeyEvent，enabled置为false，第三个Text组件变成不可获焦，焦点自动转移，使焦点转移到Row容器上，容器中使用的是默认配置，会转移到Button1上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置容器绘制焦点框",
      children: "设置容器绘制焦点框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虽然容器组件本身可以获焦，但是无法绘制焦点框。可以为其配置onClick或是单指单击的Tap手势，在容器上绘制焦点框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(422491)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器绘制焦点框前提："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器内部没有可获焦子节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器配置有onClick或是单指单击的Tap手势。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器本身未设置focusable属性，或设置在onClick或是单指单击的Tap手势之后。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_FocusAndBlurExample]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'MyApp_FocusAndBlurExample';\n\n@Entry\n@Component\nexport struct ScopeFocusExample {\n  @State scopeFocusState: boolean = true;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Column({ space: 5 }) {\n          // 请将$r('app.string.Container_Coking')替换为实际资源文件，在本示例中该资源文件的value值为\"容器获焦\"\n          Text($r('app.string.Container_Coking')).textAlign(TextAlign.Center)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width('80%')\n        .height(50)\n        .margin({ top: 5, bottom: 5 })\n        .onClick(() => {\n        })\n        .focusable(this.scopeFocusState)\n\n        Button('Button1')\n          .width(140)\n          .height(45)\n          .margin(5)\n          .onClick(() => {\n            this.scopeFocusState = !this.scopeFocusState;\n            hilog.info(DOMAIN, TAG, BUNDLE + 'Button1 onFocus');\n          })\n        Button('Button2')\n          .width(140)\n          .height(45)\n          .margin(5)\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507146)/* ["default"] */.A) + "",
        width: "328",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下2步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Column配置onClick事件并设置focusable为true后，Tab键走焦，Column容器可以绘制焦点框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button1，将Column的focusable属性设置为false，Column容器无法获焦和绘制焦点框。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置焦点停留在容器上",
      children: "设置焦点停留在容器上"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tabStop(isTabStop: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前容器组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#tabstop14",
        children: "tabStop"
      }), "属性，可决定在走焦时焦点是否会停留在当前容器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TabStopExample {\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        Button('Button1')\n          .width(140)\n          .height(45)\n          .margin(5)\n        Column() {\n          Button('Button2')\n            .width(140)\n            .height(45)\n            .margin(5)\n          Button('Button3')\n            .width(140)\n            .height(45)\n            .margin(5)\n        }.tabStop(true)\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24358)/* ["default"] */.A) + "",
        width: "328",
        height: "226"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下2步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Column配置tabStop后，Tab键走焦，焦点在Button1和Column容器之间切换，Column容器可以绘制焦点框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "走焦至Column容器后，按Enter键，焦点转移到容器中的第一个可获焦节点上。Tab键走焦，走焦至容器中其他可获焦节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认焦点",
      children: "默认焦点"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "层级页面的默认焦点",
      children: "层级页面的默认焦点"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultFocus(value: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件是否为当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "上的默认焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct DefaultFocus {\n  @State oneButtonColor: Color = Color.Gray;\n  @State twoButtonColor: Color = Color.Gray;\n  @State threeButtonColor: Color = Color.Gray;\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // 通过外接键盘的上下键可以让焦点在三个按钮间移动，按钮获焦时颜色变化，失焦时变回原背景色\n        Button('First Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.oneButtonColor)\n          .fontColor(Color.Black)\n          // 监听第一个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.oneButtonColor = Color.Green;\n          })\n          // 监听第一个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.oneButtonColor = Color.Gray;\n          })\n\n        Button('Second Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.twoButtonColor)\n          .fontColor(Color.Black)\n          // 监听第二个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.twoButtonColor = Color.Green;\n          })\n          // 监听第二个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.twoButtonColor = Color.Gray;\n          })\n\n        Button('Third Button')\n          .width(260)\n          .height(70)\n          .backgroundColor(this.threeButtonColor)\n          .fontColor(Color.Black)\n          // 设置默认焦点\n          .defaultFocus(true)\n          // 监听第三个组件的获焦事件，获焦后改变颜色\n          .onFocus(() => {\n            this.threeButtonColor = Color.Green;\n          })\n          // 监听第三个组件的失焦事件，失焦后改变颜色\n          .onBlur(() => {\n            this.threeButtonColor = Color.Gray;\n          })\n      }.width('100%').margin({ top: 20 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431647)/* ["default"] */.A) + "",
        width: "218",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下2步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在第三个Button组件上设置了defaultFocus(true)，进入", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "后第三个Button默认获焦，显示为绿色。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按下Tab键，触发走焦，第三个Button正处于获焦状态，会出现焦点框。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "容器的默认焦点",
      children: "容器的默认焦点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["容器的默认焦点受到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%84%A6%E7%82%B9%E7%BB%84%E4%B8%8E%E8%8E%B7%E7%84%A6%E4%BC%98%E5%85%88%E7%BA%A7",
        children: "获焦优先级"
      }), "的影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "defaultFocus与FocusPriority的区别"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9",
        children: "defaultFocus"
      }), "是用于指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "首次展示时的默认获焦节点，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focuspriority12",
        children: "FocusPriority"
      }), "是用于指定某个容器首次获焦时其子节点的获焦优先级。上述两个属性在某些场景同时配置时行为未定义，例如下面的场景，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "首次展示无法同时满足defaultFocus获焦和高优先级组件获焦。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusScopePriorityPrevious {\n  build() {\n    NavDestination() {\n      Row() {\n        Button('Button1')\n          .defaultFocus(true)\n        Button('Button2')\n          .focusScopePriority('RowScope', FocusPriority.PREVIOUS)\n      }.focusScopeId('RowScope')\n    }\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "层级页面容器整体获焦时的焦点链",
      children: "层级页面/容器整体获焦时的焦点链"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "整体获焦与非整体获焦"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["整体获焦是", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "/容器自身作为焦点链的叶节点获焦，获焦后再把焦点链叶节点转移到子孙组件。例如，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "切换、Navigation组件中的路由切换、焦点组走焦、容器组件主动调用requestFocusById等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非整体获焦是某个组件作为焦点链叶节点获焦，导致其祖先节点跟着获焦。例如TextInput组件主动获取焦点、Tab键在非焦点组场景下走焦等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "整体获焦的焦点链形成"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "首次获焦："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "焦点链叶节点为配置了defaultFocus的节点。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["未配置defaultFocus时，焦点停留在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "的根容器上。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "非首次获焦：由上次获焦的节点获焦。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.获焦链上存在配置了获焦优先级的组件和容器："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器内存在优先级大于PREVIOUS的组件，由优先级最高的组件获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器内不存在优先级大于PREVIOUS的组件，由上次获焦的节点获焦。例如，窗口失焦后重新获焦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "焦点样式",
      children: "焦点样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(660561)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最终绘制焦点激活态的组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order#zindex",
        children: "zIndex"
      }), "默认会被抬升至INT_MAX，如果该组件已经配置了zIndex，则不做zIndex调整。该组件不再绘制焦点激活态时，例如组件失焦或是退出走焦态，zIndex恢复为默认层级。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusBox(style: FocusBoxStyle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件系统焦点框样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ColorMetrics, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct RequestFocusExample {\n  build() {\n    NavDestination() {\n      Column({ space: 30 }) {\n        Button('small black focus box')\n          .focusBox({\n            margin: new LengthMetrics(0),\n            strokeColor: ColorMetrics.rgba(0, 0, 0),\n          })\n        Button('large red focus box')\n          .focusBox({\n            margin: LengthMetrics.px(20),\n            strokeColor: ColorMetrics.rgba(255, 0, 0),\n            strokeWidth: LengthMetrics.px(10)\n          })\n      }\n      .alignItems(HorizontalAlign.Center)\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(770400)/* ["default"] */.A) + "",
        width: "405",
        height: "139"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下2步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["进入", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
          children: "层级页面"
        }), "，按下Tab键触发走焦，第一个Button获焦，焦点框样式为紧贴边缘的黑色细框。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按下Tab键，走焦到第二个Button，焦点框样式为远离边缘的红色粗框。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主动获焦失焦",
      children: "主动获焦/失焦"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用FocusController中的方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更推荐使用FocusController中的requestFocus主动获取焦点。优势如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当前帧生效，避免被下一帧组件树变化影响。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "有异常值返回，便于排查主动获取焦点失败的原因。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "避免多实例场景中取到错误实例。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getfocuscontroller12",
            children: "getFocusController()"
          }), "方法获取实例，再通过此实例调用对应方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "requestFocus(key: string): void\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过组件的id将焦点转移到组件树对应的实体节点，生效时间为当帧生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "clearFocus(): void\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除焦点，将焦点强制转移到层级页面根容器节点，焦点链路上其他节点失焦。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用focusControl中的方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "requestFocus(value: string): boolean\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用此接口可以主动让焦点转移至参数指定的组件上，焦点转移生效时间为下一个帧信号。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct FocusControl {\n  @State btColor: string = '#ff2787d9';\n  @State btColor2: string = '#ff2787d9';\n\n  build() {\n    NavDestination() {\n        Column({ space: 20 }) {\n          Column({ space: 5 }) {\n            Button('Button')\n              .width(200)\n              .height(70)\n              .fontColor(Color.White)\n              .focusOnTouch(true)\n              .backgroundColor(this.btColor)\n              .onFocus(() => {\n                this.btColor = '#ffd5d5d5';\n              })\n              .onBlur(() => {\n                this.btColor = '#ff2787d9';\n              })\n              .id('testButton')\n\n            Button('Button')\n              .width(200)\n              .height(70)\n              .fontColor(Color.White)\n              .focusOnTouch(true)\n              .backgroundColor(this.btColor2)\n              .onFocus(() => {\n                this.btColor2 = '#ffd5d5d5';\n              })\n              .onBlur(() => {\n                this.btColor2 = '#ff2787d9';\n              })\n              .id('testButton2')\n\n            Divider()\n              .vertical(false)\n              .width('80%')\n              .backgroundColor('#ff707070')\n              .height(10)\n\n            Button('FocusController.requestFocus')\n              .width(200).height(70).fontColor(Color.White)\n              .onClick(() => {\n                this.getUIContext().getFocusController().requestFocus('testButton');\n              })\n              .backgroundColor('#ff2787d9')\n\n            Button('focusControl.requestFocus')\n              .width(200).height(70).fontColor(Color.White)\n              .onClick(() => {\n                focusControl.requestFocus('testButton2');\n              })\n              .backgroundColor('#ff2787d9')\n\n            Button('clearFocus')\n              .width(200).height(70).fontColor(Color.White)\n              .onClick(() => {\n                this.getUIContext().getFocusController().clearFocus();\n              })\n              .backgroundColor('#ff2787d9')\n          }\n        }\n        .width('100%')\n        .height('100%')\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(442009)/* ["default"] */.A) + "",
        width: "329",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下3步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击FocusController.requestFocus按钮，第一个Button获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击focusControl.requestFocus按钮，第二个Button获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击clearFocus按钮，第二个Button失焦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件走焦顺序",
      children: "自定义组件走焦顺序"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nextfocus自定义走焦",
      children: "nextFocus自定义走焦"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nextFocus(nextStep: Optional<FocusMovement>): T\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若存在配置了nextFocus的组件，则走焦只会按照设置的nextFocus走焦顺序走焦，没有设置自定义走焦或者设置自定义走焦的组件或容器不存在时，仍进行默认走焦规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360894)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该能力从API version 18开始支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct NextFocusExample {\n  build() {\n    NavDestination() {\n      Column({ space: 30 }) {\n        Row().height('30%')\n        Row({ space: 10 }) {\n          Button('A')\n            .id('A')\n            .nextFocus({ forward: 'F', backward: 'C', down: 'B' })\n          Button('B')\n            .id('B')\n            .nextFocus({ down: 'C' })\n          Button('C')\n            .id('C')\n        }\n\n        Column({ space: 10 }) {\n          Button('D')\n            .id('D')\n          Button('E')\n            .id('E')\n            .nextFocus({\n              forward: 'A',\n              backward: 'M',\n              up: 'E',\n              right: 'F'\n            })\n        }\n\n        Row({ space: 10 }) {\n          Button('F')\n            .id('F')\n            .nextFocus({ forward: 'B', down: 'A' })\n        }\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab键走焦：未配置nextFocus时，Tab键走焦顺序为A->B->C->D->E->F。配置nextFocus之后，Tab键走焦顺序为A->F->B->C->D->E->A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615278)/* ["default"] */.A) + "",
        width: "294",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方向键走焦（以方向下键为例）：未配置nextFocus时，按下Tab键激活焦点态之后，按方向下键走焦顺序为A->D->E->F。配置nextFocus之后，按下Tab键激活焦点态之后，按方向下键走焦顺序为A->B->C->D->E->F->A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659149)/* ["default"] */.A) + "",
        width: "294",
        height: "287"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabindex自定义走焦",
      children: "tabIndex自定义走焦"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tabIndex(index: number)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabIndex自定义组件Tab键走焦顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若存在配置了tabIndex大于0的组件，则Tab键走焦只会在tabIndex大于0的组件内，按照tabIndex的值从小到大并循环依次走焦。若没有配置tabIndex大于0的组件，则tabIndex等于0的组件按照组件预设的走焦规则走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455600)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不能同时设置tabIndex与focusScopeId属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "中通过单独设置组件的tabIndex属性为负数来控制获焦能力，可以使用focusable属性代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["tabIndex只能够自定义Tab键走焦，若想同时自定义方向键等走焦能力，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nextfocus%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B5%B0%E7%84%A6",
        children: "nextfocus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TabIndexExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Button1')\n          .width(140)\n          .height(45)\n          .margin(5)\n        Button('Focus Button1')\n          .width(140)\n          .height(45)\n          .margin(5).tabIndex(1)\n        Button('Button2')\n          .width(140)\n          .height(45)\n          .margin(5)\n        Button('Focus Button2')\n          .width(140)\n          .height(45)\n          .margin(5).tabIndex(2)\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab键走焦：只在配置TabIndex的节点间循环走焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473608)/* ["default"] */.A) + "",
        width: "328",
        height: "290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabIndex配置在容器上时，如果容器中的所有组件都没有获焦过，则走到第一个可获焦组件上，否则会走到上次获焦的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TabIndexFocusExample {\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Button1')\n          .width(140)\n          .height(45)\n          .margin(5).tabIndex(1)\n        Column() {\n          Button('Button2')\n            .width(140)\n            .height(45)\n            .margin(5)\n          Button('Button3')\n            .width(140)\n            .height(45)\n            .margin(5)\n        }.tabIndex(2)\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tab键走焦：tabIndex配置在容器上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462236)/* ["default"] */.A) + "",
        width: "328",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下3步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Tab键走焦，焦点在Button1和Button2之间循环走焦（tabIndex配置在Button2和Button3的父组件上）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在走焦至Button2时，使用方向下键，将焦点转移至Button3上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Tab键走焦，焦点在Button1和Button3之间循环走焦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "焦点组与获焦优先级",
      children: "焦点组与获焦优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusScopePriority(scopeId: string, priority?: FocusPriority)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件在指定容器内获焦的优先级。需要配合focusScopeId一起使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusScopeId(id: string, isGroup?: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前容器组件的id标识，设置当前容器组件是否为焦点组。焦点组与tabIndex不能混用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusScopePriority {\n  @State inputValue: string = '';\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Scroll() {\n          Row({ space: 20 }) {\n            Column({ space: 20 }) {  // 标记为Column1\n              Column({ space: 5 }) {\n                Button('Group1')\n                  .width(165)\n                  .height(40)\n                  .fontColor(Color.White)\n                Row({ space: 5 }) {\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                }\n                Row({ space: 5 }) {\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                }\n              }.borderWidth(2).borderColor(Color.Red).borderStyle(BorderStyle.Dashed)\n              Column({ space: 5 }) {\n                Button('Group2')\n                  .width(165)\n                  .height(40)\n                  .fontColor(Color.White)\n                Row({ space: 5 }) {\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                    .focusScopePriority('ColumnScope1', FocusPriority.PRIOR)  // Column1首次获焦时获焦\n                }\n                Row({ space: 5 }) {\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                  Button()\n                    .width(80)\n                    .height(40)\n                    .fontColor(Color.White)\n                }\n              }.borderWidth(2).borderColor(Color.Green).borderStyle(BorderStyle.Dashed)\n            }\n            .focusScopeId('ColumnScope1')\n            Column({ space: 5 }) {  // 标记为Column2\n              TextInput({placeholder: 'input', text: this.inputValue})\n                .onChange((value: string) => {\n                  this.inputValue = value;\n                })\n                .width(156)\n              Button('Group3')\n                .width(165)\n                .height(40)\n                .fontColor(Color.White)\n              Row({ space: 5 }) {\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n              }\n              Button()\n                .width(165)\n                .height(40)\n                .fontColor(Color.White)\n                .focusScopePriority('ColumnScope2', FocusPriority.PREVIOUS)  // Column2获焦时获焦\n              Row({ space: 5 }) {\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n              }\n              Button()\n                .width(165)\n                .height(40)\n                .fontColor(Color.White)\n              Row({ space: 5 }) {\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n                Button()\n                  .width(80)\n                  .height(40)\n                  .fontColor(Color.White)\n              }\n            }.borderWidth(2).borderColor(Color.Orange).borderStyle(BorderStyle.Dashed)\n            .focusScopeId('ColumnScope2', true)  // Column2为焦点组\n          }.alignItems(VerticalAlign.Top)\n        }\n\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956712)/* ["default"] */.A) + "",
        width: "334",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下2步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "input方框内设置了焦点组，因此按下Tab键后焦点会快速从input中走出去，而按下方向键后可以在input内走焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "左侧的两个Column没有设置焦点组，因此只能通过Tab键一个一个地走焦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 14，焦点组新增参数arrowStepOut，用于设置能否使用方向键走焦出当前焦点组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusScopeIdExample {\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        Column() {\n          Button('Group1')\n            .width(165)\n            .height(40)\n            .margin(5)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button('Button1')\n              .width(80)\n              .height(40)\n              .margin(5)\n              .fontColor(Color.White)\n            Button('Button2')\n              .width(80)\n              .height(40)\n              .margin(5)\n              .fontColor(Color.White)\n          }\n        }.focusScopeId('1', true, true)\n        .borderWidth(2).borderColor(Color.Red).borderStyle(BorderStyle.Dashed)\n\n        TextInput()\n        Column() {\n          Button('Group2')\n            .width(165)\n            .height(40)\n            .margin(5)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button('Button3')\n              .width(80)\n              .height(40)\n              .margin(5)\n              .fontColor(Color.White)\n            Button('Button4')\n              .width(80)\n              .height(40)\n              .margin(5)\n              .fontColor(Color.White)\n          }\n        }.focusScopeId('2', true, false)\n        .borderWidth(2).borderColor(Color.Green).borderStyle(BorderStyle.Dashed)\n\n        TextInput()\n      }.width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(704656)/* ["default"] */.A) + "",
        width: "354",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例包含以下3步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group1和Group2设置焦点组，因此按下Tab键后焦点会快速从Group1和Group2的方框内走出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group1设置焦点组时，允许使用方向键走焦出当前焦点组。在Group1方框内走焦时，使用方向键可以走焦至input输入框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group2设置焦点组时，不允许使用方向键走焦出当前焦点组。在Group2方框内走焦时，使用方向键无法走焦至input输入框。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637791)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextInput组件本身对方向键存在独有处理，因此无法使用方向键直接走出TextInput组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "焦点与按键事件",
      children: "焦点与按键事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件获焦且存在点击事件（onClick）或单指单击事件（TapGesture）时，回车和空格会触发对应的事件回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283273)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击事件（onClick）或单指单击事件（TapGesture）在回车、空格触发对应事件回调时，默认不冒泡传递，即父组件对应", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key",
          children: "按键事件"
        }), "不会被同步触发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按键事件（onKeyEvent）默认冒泡传递，即同时会触发父组件的按键事件回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件同时存在点击事件（onClick）和按键事件（onKeyEvent），在回车、空格触发时，两者都会响应。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 18开始，获焦组件只有在焦点激活态时才会响应点击事件（onClick）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct FocusOnclickExample {\n  @State count: number = 0;\n  @State name: string = 'Button';\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button(this.name)\n          .fontSize(30)\n          .onClick(() => {\n            this.count++;\n            if (this.count % 2 === 0) {\n              this.name = 'count is even number';\n            } else {\n              this.name = 'count is odd number';\n            }\n          }).height(60)\n      }.height('100%').width('100%').justifyContent(FlexAlign.Center)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612607)/* ["default"] */.A) + "",
        width: "265",
        height: "62"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件获焦能力说明",
      children: "组件获焦能力说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 基础组件获焦能力"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "基础组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有获焦能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "focusable默认值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
              children: "AlphabetIndexer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank",
              children: "Blank"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker",
              children: "CalendarPicker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
              children: "Canvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
              children: "Checkbox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
              children: "CheckboxGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
              children: "Circle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-component3d/ts-basic-components-component3d",
              children: "Component3D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
              children: "ContainerSpan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
              children: "DataPanel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
              children: "DatePicker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider",
              children: "Divider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
              children: "Ellipse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge",
              children: "Gauge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator",
              children: "ImageAnimator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
              children: "ImageSpan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-swiper-components-indicator/ts-swiper-components-indicator",
              children: "Indicator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line",
              children: "Line"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
              children: "LoadingProgress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
              children: "Marquee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
              children: "Menu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
              children: "MenuItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitemgroup/ts-basic-components-menuitemgroup",
              children: "MenuItemGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation",
              children: "MultiNavigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-navrouter/ts-basic-components-navrouter",
              children: "NavRouter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
              children: "Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
              children: "PatternLock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon",
              children: "Polygon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline",
              children: "Polyline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
              children: "Progress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
              children: "QRCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
              children: "Radio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
              children: "Rating"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
              children: "RichEditor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext",
              children: "RichText"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
              children: "ScrollBar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
              children: "Select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape",
              children: "Shape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
              children: "Slider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
              children: "Span"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
              children: "Stepper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepperitem/ts-basic-components-stepperitem",
              children: "StepperItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
              children: "SymbolSpan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
              children: "TextArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
              children: "TextClock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
              children: "TextPicker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
              children: "TextTimer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
              children: "TimePicker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
              children: "Toggle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 容器组件获焦能力"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "容器组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可获焦"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "focusable默认值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
              children: "Badge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
              children: "Column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit",
              children: "ColumnSplit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter",
              children: "Counter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
              children: "EmbeddedComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
              children: "Flex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
              children: "FlowItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack",
              children: "FolderStack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
              children: "FormLink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol",
              children: "GridCol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow",
              children: "GridRow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
              children: "GridItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
              children: "Hyperlink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-lazyvgridlayout/ts-container-lazyvgridlayout",
              children: "LazyVGridLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
              children: "ListItemGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-navigator/ts-container-navigator",
              children: "Navigator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
              children: "Refresh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
              children: "RelativeContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
              children: "Row"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit",
              children: "RowSplit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
              children: "Scroll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
              children: "SideBarContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
              children: "Swiper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
              children: "WaterFlow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
              children: "WithTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 媒体组件获焦能力"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "媒体组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可获焦"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "focusable默认值"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
              children: "Video"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })
      })]
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
659149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477977-5b1b683894a442e84ed400cdd60678d3.gif");

},
872252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477973-ca4859b8631820834faf0090b845029e.gif");

},
431647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477975-945c046d9ba0c1a9b2c8344ab15a2c8b.gif");

},
24358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957974-58e416e93e9c00055f3a2d418fda3f61.gif");

},
231585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
360894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
200798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
573414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798322-24085ae344623be03675b712339585b2.gif");

},
473608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798328-2b9403fb7a9089b9dccb8581f6499bdf.gif");

},
455600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
660561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
452531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477971-66c3859decdaae4418be6a3b3fbf7e9a.gif");

},
315386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477969-5e2076afa84d588bdae29b0ca83d6738.gif");

},
256496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
770400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798326-aa60de0c1725558b96a6b5ddb53c0a81.gif");

},
283273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
43960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438017-7ca62a19aafb0dce0ccf2abe6e338e19.gif");

},
502957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798324-84e0a0ffb0bf85ae494518010a9f6c70.gif");

},
579537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957970-664424aea189e4e95abfb4b82bac7ae8.gif");

},
520989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798320-914517c0cc654911c2cde3430227ca4d.gif");

},
438323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957972-ac551743a75f2abd6be1bd3baff79413.gif");

},
637791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
298808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
462236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438023-d5f0f1e05e2ad8481fe4fe56d9fe2d02.gif");

},
442009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438021-bbc579bb794355f19263419ef205fb2a.gif");

},
612607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798330-f13488b724e4a47e6661d497aee6933c.gif");

},
422491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
704656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477979-690e4c53c8a0126d2c8c4791aba70e44.gif");

},
956712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957978-a336fd0bb76e157b21e920ad9f1b58b9.gif");

},
507146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438019-ab15be7d5dce5280317194d4f805d95f.gif");

},
615278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957976-ebce8d71c90c8d7ae4e5a14fb7d06d58.gif");

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