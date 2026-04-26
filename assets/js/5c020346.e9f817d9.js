"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["663705"], {
251509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_interaction_events_ts_universal_events_keyboardshortcut_ts_universal_events_keyboardshortcut_md_5c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-events-interaction-events-ts-universal-events-keyboardshortcut-ts-universal-events-keyboardshortcut-md-5c0.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_interaction_events_ts_universal_events_keyboardshortcut_ts_universal_events_keyboardshortcut_md_5c0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut/ts-universal-events-keyboardshortcut","title":"组件快捷键事件","description":"开发者可以设置组件的自定义组合键，每个组件可以设置多个组合键。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut/ts-universal-events-keyboardshortcut.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut/ts-universal-events-keyboardshortcut","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut/ts-universal-events-keyboardshortcut","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"组件快捷键事件","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-keyboardshortcut","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-events-keyboardshortcut"},"sidebar":"ref","previous":{"title":"悬浮事件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover"},"next":{"title":"自定义事件拦截","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/event-dispatch-control/ts-universal-attributes-on-touch-intercept/ts-universal-attributes-on-touch-intercept"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-keyboardshortcut/ts-universal-events-keyboardshortcut.md


const frontMatter = {
	title: '组件快捷键事件',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-keyboardshortcut',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-events-keyboardshortcut'
};
const contentTitle = '组件快捷键事件';

const assets = {

};



const toc = [{
  "value": "keyboardShortcut",
  "id": "keyboardshortcut",
  "level": 2
}, {
  "value": "快捷键使用注意事项",
  "id": "快捷键使用注意事项",
  "level": 2
}, {
  "value": "禁止绑定的系统快捷键",
  "id": "禁止绑定的系统快捷键",
  "level": 3
}, {
  "value": "系统已存在的按键事件",
  "id": "系统已存在的按键事件",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置组件快捷键）",
  "id": "示例1设置组件快捷键",
  "level": 3
}, {
  "value": "示例2（快捷键的绑定和解除绑定）",
  "id": "示例2快捷键的绑定和解除绑定",
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
        id: "组件快捷键事件",
        children: "组件快捷键事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以设置组件的自定义组合键，每个组件可以设置多个组合键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即使组件未获焦或是在所在页面未展示，只要已经挂载到获焦窗口的组件树上就会响应自定义组合键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在设置组合键的同时可以设置自定义事件，组合键按下时，触发该自定义事件，若没有设置自定义事件，则组合键行为与click行为一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(286051)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "keyboardshortcut",
      children: "keyboardShortcut"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的自定义组合键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#functionkey10",
              children: "FunctionKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keys"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#modifierkey10",
              children: "ModifierKey"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["热键组合。  仅当value为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#functionkey10",
              children: "FunctionKey"
            }), "的情况下keys的值可以为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组合快捷键触发成功后的自定义事件回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快捷键使用注意事项",
      children: "快捷键使用注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["快捷键是对系统按键的响应，优先于普通的按键事件OnKeyEvent，按键事件触发的逻辑详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard#%E6%8C%89%E9%94%AE%E4%BA%8B%E4%BB%B6%E6%95%B0%E6%8D%AE%E6%B5%81",
        children: "按键事件数据流"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "快捷键处理逻辑"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "例子"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "所有支持onClick事件的组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持自定义组合键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组合键要求"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制键Ctrl、Shift、Alt及它们的组合加上热键的单个字符（可以通过键盘输入的字符）或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#functionkey10",
              children: "FunctionKey"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut('a',[ModifierKey.CTRL])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "多个不同组件设置相同组合键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只响应节点树上的深度最浅的组件，其它组件不响应快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut('a',[ModifierKey.CTRL])  Button('button2').keyboardShortcut('a',[ModifierKey.CTRL])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无论组件是否获焦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只要窗口获焦，快捷键就会响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用单个FunctionKey触发快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个FunctionKey，没有ModifierKey，可以绑定为快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut(FunctionKey.F2,[])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardShortcut的入参value为空"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消绑定的快捷键。  绑定了多个快捷键的不能解除绑定快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut('',[ModifierKey.CTRL])  Button('button2').keyboardShortcut('',[])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardShortcut接口中的keys命令中Ctrl、Shift、Alt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不区分左右键都响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut('a',[ModifierKey.CTRL, ModifierKey.ALT])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardShortcut接口中的value单个字符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不区分大小写都响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut('a',[ModifierKey.CTRL])  Button('button2').keyboardShortcut('A',[ModifierKey.CTRL])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "快捷键的响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys键处于按下状态且value键触发down事件（长按会连续响应）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "隐藏组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["不可交互（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable#enabled",
              children: "enabled"
            }), "设置为false）状态的组件"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不响应快捷键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1. 组件的组合键(包括系统预定义快捷键)相同时  2. 接口参数value有多个字符时  3. 接口参数keys有重复的控制键时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这几种情况不绑定组合键，先前绑定的组合键仍然有效"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button('button1').keyboardShortcut(FunctionKey.F4,[ModifierKey.ALT])  Button('button2').keyboardShortcut('ab',[ModifierKey.CTRL])  Button('button3').keyboardShortcut('ab',[ModifierKey.CTRL,ModifierKey.CTRL])"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "禁止绑定的系统快捷键",
      children: "禁止绑定的系统快捷键"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下组合键绑定为快捷键不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alt + F4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alt + Shift + F4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alt + TAB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alt + Shift + TAB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ctrl + Shift + ESC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统已存在的按键事件",
      children: "系统已存在的按键事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已存在如下系统响应的按键事件，具体规格如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表中的按键事件与自定义按键事件的触发有优先级关系，高优先级的事件会拦截低优先级事件，焦点事件响应优先级详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard#%E6%8C%89%E9%94%AE%E4%BA%8B%E4%BB%B6%E6%95%B0%E6%8D%AE%E6%B5%81",
        children: "按键事件数据流"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "快捷键"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "获焦组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "用途"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "事件处理类别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "方向键、Shift + 方向键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动光标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "方向键、Shift + 方向键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统处于走焦状态时，用于方向走焦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAB、Shift + TAB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发进入走焦状态/走焦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统按键"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置组件快捷键",
      children: "示例1（设置组件快捷键）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置组件的快捷键，同时按控制键+对应的字符可以触发组件响应快捷键，并触发onClick事件或自定义事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(this.message)\n        Button(\"Test short cut 1\").onClick((event: ClickEvent) => {\n          this.message = \"I clicked Button 1\";\n          console.info(\"I clicked 1\");\n        }).keyboardShortcut('.', [ModifierKey.SHIFT, ModifierKey.CTRL, ModifierKey.ALT])\n          .onKeyEvent((event: KeyEvent) => {\n            console.info(\"event.keyCode: \" + JSON.stringify(event));\n          })\n        Button(\"Test short cut 2\").onClick((event: ClickEvent) => {\n          this.message = \"I clicked Button 2\";\n          console.info(\"I clicked 2\");\n        }).keyboardShortcut('1', [ModifierKey.CTRL])\n        Button(\"Test short cut 3\").onClick((event: ClickEvent) => {\n          this.message = \"I clicked Button 3\";\n          console.info(\"I clicked 3\");\n        }).keyboardShortcut('A', [ModifierKey.SHIFT])\n        Button(\"Test short cut 4\").onClick((event: ClickEvent) => {\n          this.message = \"I clicked Button 4\";\n          console.info(\"I clicked 4\");\n        }).keyboardShortcut(FunctionKey.F5, [], () => {\n          this.message = \"I clicked Button 4\";\n          console.info(\"I clicked user callback.\");\n        }).keyboardShortcut(FunctionKey.F3, [])\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52339)/* ["default"] */.A) + "",
        width: "244",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2快捷键的绑定和解除绑定",
      children: "示例2（快捷键的绑定和解除绑定）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例演示了如何实现快捷键的绑定和解除绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'disable'\n  @State shortCutEnable: boolean = false\n  @State keyValue: string = ''\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text('Ctrl+A is ' + this.message)\n        Button(\"Test short cut\").onClick((event: ClickEvent) => {\n          this.message = \"I clicked Button\";\n          console.info(\"I clicked\");\n        }).keyboardShortcut(this.keyValue, [ModifierKey.CTRL])\n        Button(this.message + 'shortCut').onClick((event: ClickEvent) => {\n          this.shortCutEnable = !this.shortCutEnable;\n          this.message = this.shortCutEnable ? 'enable' : 'disable';\n          this.keyValue = this.shortCutEnable ? 'a' : '';\n        })\n        Button('multi-shortcut').onClick((event: ClickEvent) => {\n          console.info('Trigger keyboard shortcut success.')\n        }).keyboardShortcut('q', [ModifierKey.CTRL])\n          .keyboardShortcut('w', [ModifierKey.CTRL])\n          .keyboardShortcut('', []) // 不生效，绑定了多个快捷键的组件不能解除绑定快捷键\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(420243)/* ["default"] */.A) + "",
        width: "327",
        height: "255"
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
420243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439517-31e4114bc2450bac57e40974e047543b.gif");

},
286051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
52339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799822-9c5d9860d7bff2677b06353f4d262fab.gif");

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