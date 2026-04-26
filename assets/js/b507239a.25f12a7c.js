"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704905"], {
154809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_longpressgesture_ts_basic_gestures_longpressgesture_md_b50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-basic-gestures-ts-basic-gestures-longpressgesture-ts-basic-gestures-longpressgesture-md-b50.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_longpressgesture_ts_basic_gestures_longpressgesture_md_b50_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture","title":"LongPressGesture","description":"用于触发长按手势事件，触发长按手势的最少手指数为1，默认最短长按时间为500毫秒。可配置duration参数控制最短长按时长。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"LongPressGesture","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-gestures-longpressgesture"},"sidebar":"ref","previous":{"title":"TapGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture"},"next":{"title":"PanGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture.md


const frontMatter = {
	title: 'LongPressGesture',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-gestures-longpressgesture'
};
const contentTitle = 'LongPressGesture';

const assets = {

};



const toc = [{
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "LongPressGesture",
  "id": "longpressgesture-1",
  "level": 3
}, {
  "value": "LongPressGesture15+",
  "id": "longpressgesture15",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onAction",
  "id": "onaction",
  "level": 3
}, {
  "value": "onActionEnd",
  "id": "onactionend",
  "level": 3
}, {
  "value": "onActionCancel",
  "id": "onactioncancel",
  "level": 3
}, {
  "value": "onActionCancel18+",
  "id": "onactioncancel18",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
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
        id: "longpressgesture",
        children: "LongPressGesture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于触发长按手势事件，触发长按手势的最少手指数为1，默认最短长按时间为500毫秒。可配置duration参数控制最短长按时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(744182)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 18开始，部分设备会优先响应系统的双指长按手势，导致应用的双指长按手势不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "longpressgesture-1",
      children: "LongPressGesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LongPressGesture(value?: { fingers?: number; repeat?: boolean; duration?: number })"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建长按手势对象。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureinterfacet11",
        children: "GestureInterface<T>"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件默认支持可拖拽时，如Text、TextInput、TextArea、HyperLink、Image和RichEditor等组件。长按手势与拖拽会出现冲突，事件优先级如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当长按触发时间小于500毫秒时，系统优先响应长按事件而非拖拽事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当长按触发时间达到或超过500毫秒时，系统优先响应拖拽事件而非长按事件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ fingers?: number; repeat?: boolean; duration?: number }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置长按手势参数。  - fingers：触发长按的最少手指数，最小值为1， 最大值为10。  默认值：1  - repeat：是否连续触发事件回调。true表示连续触发事件回调，false表示不连续触发事件回调。  默认值：false  - duration：触发长按的最短时间，单位为毫秒（ms）。  默认值：500"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "longpressgesture15",
      children: "LongPressGesture15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LongPressGesture(options?: LongPressGestureHandlerOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建长按手势对象。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#longpressgesture-1",
        children: "LongPressGesture"
      }), "相比，options参数新增了对isFingerCountLimited参数，表示是否检查触摸屏幕的手指数量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件默认支持可拖拽时，如Text、TextInput、TextArea、HyperLink、Image和RichEditor等组件。长按手势与拖拽会出现冲突，事件优先级如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当长按触发时间小于500毫秒时，系统优先响应长按事件而非拖拽事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当长按触发时间达到或超过500毫秒时，系统优先响应拖拽事件而非长按事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#longpressgesturehandleroptions",
              children: "LongPressGestureHandlerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按手势处理器配置参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396131)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "GestureEvent"
        }), "的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议优先使用fingerInfos。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["长按手势触发后，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "GestureEvent"
        }), "中fingerList和fingerInfo的信息仅在有手指按下时才会更新，手指抬起时不会更新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaction",
      children: "onAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAction(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置长按手势识别成功回调。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按手势识别成功回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionend",
      children: "onActionEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionEnd(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置长按手势结束回调。长按手势识别成功后，最后一根手指抬起时触发回调。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按手势结束回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel",
      children: "onActionCancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置长按手势取消回调。长按手势识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按手势取消回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel18",
      children: "onActionCancel18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: Callback<GestureEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置长按手势取消回调。长按手势识别成功后，接收到触摸取消事件时触发回调。返回手势事件信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按手势取消回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过LongPressGesture实现了长按手势的识别。从API version 22开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#longpressgesturehandleroptions",
        children: "LongPressGestureHandlerOptions"
      }), "的allowableMovement属性设置识别手势的最大移动距离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LongPressGestureExample {\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Text('LongPress onAction:' + this.count).fontSize(28)\n        // 单指长按文本触发该手势事件\n        .gesture(\n        // 设置长按手势识别器识别的手势的最大移动距离为200px\n        LongPressGesture({ repeat: true, allowableMovement: 200 })\n          // 由于repeat设置为true，长按动作存在时会连续触发，触发间隔为duration（默认值500ms）\n          .onAction((event: GestureEvent) => {\n            if (event && event.repeat) {\n              this.count++\n            }\n          })\n            // 长按动作一结束触发\n          .onActionEnd((event: GestureEvent) => {\n            this.count = 0\n          })\n        )\n    }\n    .height(200)\n    .width(300)\n    .padding(20)\n    .border({ width: 3 })\n    .margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(684074)/* ["default"] */.A) + "",
        width: "384",
        height: "284"
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
684074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
396131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
744182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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