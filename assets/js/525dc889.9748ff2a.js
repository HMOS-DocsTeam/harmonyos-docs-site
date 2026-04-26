"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["737966"], {
761341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_pinchgesture_ts_basic_gestures_pinchgesture_md_525_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-basic-gestures-ts-basic-gestures-pinchgesture-ts-basic-gestures-pinchgesture-md-525.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_pinchgesture_ts_basic_gestures_pinchgesture_md_525_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture","title":"PinchGesture","description":"用于触发捏合手势，最少需要2指，最多5指，最小识别距离为5vp。在支持鼠标和键盘输入的设备上，通过“Ctrl+鼠标滚轮”也可以触发捏合手势。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"PinchGesture","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-gestures-pinchgesture"},"sidebar":"ref","previous":{"title":"PanGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture"},"next":{"title":"RotationGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-rotationgesture/ts-basic-gestures-rotationgesture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture.md


const frontMatter = {
	title: 'PinchGesture',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-gestures-pinchgesture'
};
const contentTitle = 'PinchGesture';

const assets = {

};



const toc = [{
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "PinchGesture",
  "id": "pinchgesture-1",
  "level": 3
}, {
  "value": "PinchGesture15+",
  "id": "pinchgesture15",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onActionStart",
  "id": "onactionstart",
  "level": 3
}, {
  "value": "onActionUpdate",
  "id": "onactionupdate",
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
}, {
  "value": "示例1（实现简单缩放）",
  "id": "示例1实现简单缩放",
  "level": 3
}, {
  "value": "示例2（实现图片跟手缩放）",
  "id": "示例2实现图片跟手缩放",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pinchgesture",
        children: "PinchGesture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于触发捏合手势，最少需要2指，最多5指，最小识别距离为5vp。在支持鼠标和键盘输入的设备上，通过“Ctrl+鼠标滚轮”也可以触发捏合手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464501)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "捏合手势触发成功后，抬起手指直至不再满足触发条件。再次满足条件时，可重新触发捏合手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pinchgesture-1",
      children: "PinchGesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PinchGesture(value?: { fingers?: number; distance?: number })"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureinterfacet11",
        children: "GestureInterface<T>"
      }), "，设置捏合手势事件。"]
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
            children: "{ fingers?: number; distance?: number }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置捏合手势事件参数。  - fingers：触发捏合的最少手指数，最小为2指，最大为5指。  默认值：2  取值范围：[2, 5]。当设置的值不在该范围内时，会被转化为默认值。  触发手势的手指数量可以多于fingers数目，但只有最先落下的与fingers相同数目的手指参与手势计算。  - distance：最小识别距离，单位为vp。该距离是指当前多根手指位置与手指中心位置的平均距离，与手指落下时的平均距离之间的差值。当这一差值大于或等于最小识别距离时，捏合手势被视为成功。  默认值：5  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  取值范围：[0, +∞)。当识别距离的值小于等于0时，会被转化为默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pinchgesture15",
      children: "PinchGesture15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PinchGesture(options?: PinchGestureHandlerOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置捏合手势事件。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pinchgesture-1",
        children: "PinchGesture"
      }), "相比，options参数新增isFingerCountLimited，表示是否检查触摸屏幕的手指数量。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#pinchgesturehandleroptions",
              children: "PinchGestureHandlerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捏合手势处理器配置参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(322861)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GestureEvent"
      }), "的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议开发者优先使用fingerInfos。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionstart",
      children: "onActionStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionStart(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pinch手势识别成功后触发回调。"
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
            children: "手势事件回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionupdate",
      children: "onActionUpdate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionUpdate(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pinch手势移动过程中回调。"
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
            children: "手势事件回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionend",
      children: "onActionEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionEnd(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pinch手势识别成功，当抬起最后一根满足手势触发条件的手指后，触发回调。"
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
            children: "手势事件回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel",
      children: "onActionCancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pinch手势识别成功，接收到触摸取消事件触发的回调，不返回手势事件信息。"
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
            children: "手势事件回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel18",
      children: "onActionCancel18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: Callback<GestureEvent>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pinch手势识别成功并接收到触摸取消事件的回调。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onactioncancel",
        children: "onActionCancel"
      }), "相比，该回调返回手势事件信息。"]
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
            children: "手势事件回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1实现简单缩放",
      children: "示例1（实现简单缩放）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置PinchGesture实现了三指捏合手势的识别功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PinchGestureExample {\n  @State scaleValue: number = 1;\n  @State pinchValue: number = 1;\n  @State pinchX: number = 0;\n  @State pinchY: number = 0;\n\n  build() {\n    Column() {\n      Column() {\n        Text('PinchGesture scale:\\n' + this.scaleValue)\n        Text('PinchGesture center:\\n(' + this.pinchX + ',' + this.pinchY + ')')\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin({ top: 100 })\n      .scale({ x: this.scaleValue, y: this.scaleValue, z: 1 })\n      // 三指捏合触发该手势事件\n      .gesture(\n      PinchGesture({ fingers: 3 }) // 三指捏合手势，用于缩放操作\n        .onActionStart((event: GestureEvent) => {\n          console.info('Pinch start')\n        })\n        .onActionUpdate((event: GestureEvent) => {\n          if (event) {\n            this.scaleValue = this.pinchValue * event.scale\n            this.pinchX = event.pinchCenterX\n            this.pinchY = event.pinchCenterY\n          }\n        })\n        .onActionEnd((event: GestureEvent) => {\n          this.pinchValue = this.scaleValue\n          console.info('Pinch end')\n        })\n      )\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(237956)/* ["default"] */.A) + "",
        width: "384",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2实现图片跟手缩放",
      children: "示例2（实现图片跟手缩放）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过配置PinchGesture，该示例实现了图片的跟手缩放效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { UIContext, display, matrix4 } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct PinchGestureExample {\n  private uiContext: UIContext = new UIContext();\n  private contentWidth: number = 0;\n  private contentHeight: number = 0;\n  private scaleMin: number = 0.3;\n  private scaleMax: number = 30.0;\n  private screenWidth: number = 0;\n  private screenHeight: number = 0;\n  @State pntX: number = 0;\n  @State pntY: number = 0;\n  @State curScale: number = 1;\n  @State preScale: number = 1;\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State matrix: matrix4.Matrix4Transit = matrix4.identity()\n    .translate({ x: this.offsetX, y: this.offsetY })\n    .scale({ x: this.curScale, y: this.curScale });\n\n  public updateMatrix(): void {\n    this.matrix = matrix4.identity()\n      .scale({ x: this.curScale, y: this.curScale })\n      .translate({ x: this.uiContext.vp2px(this.offsetX), y: this.uiContext.vp2px(this.offsetY) });\n  }\n\n  aboutToAppear(): void {\n    this.uiContext = this.getUIContext();\n    let screenSize = display.getDefaultDisplaySync();\n    this.screenWidth = this.uiContext.px2vp(screenSize.width);\n    this.screenHeight = this.uiContext.px2vp(screenSize.height);\n  }\n\n  build() {\n    Column() {\n      // $r('app.media.img')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.img'))\n        .objectFit(ImageFit.Contain)\n        .draggable(false)\n        .onComplete((event) => {\n          this.contentWidth = this.uiContext.px2vp(event!.contentWidth);\n          this.contentHeight = this.uiContext.px2vp(event!.contentHeight);\n        })\n        .transform(this.matrix)\n    }\n    // 双指捏合触发该手势事件\n    .gesture(\n      PinchGesture({ fingers: 2 }) // 双指捏合手势，用于缩放图片\n        .onActionStart((event: GestureEvent) => {\n          // 图片本次缩放前展示大小\n          const displayWidth = this.contentWidth * this.curScale;\n          const displayHeight = this.contentHeight * this.curScale;\n          // 图片本次缩放前左上角顶点\n          const left = (this.screenWidth - displayWidth) / 2 + this.offsetX;\n          const top = (this.screenHeight - displayHeight) / 2 + this.offsetY;\n          // 本次缩放前手指终点相对图片左上角顶点尺寸占图片展示尺寸的百分比\n          this.pntX = (event.pinchCenterX - left) / displayWidth;\n          this.pntY = (event.pinchCenterY - top) / displayHeight;\n          // 图片本次缩放前的缩放比例\n          this.preScale = this.curScale;\n        })\n        .onActionUpdate((event: GestureEvent) => {\n          // 目标缩放比\n          this.curScale = this.preScale * event.scale;\n          let targetDisplayWidth = this.contentWidth * this.curScale;\n          let targetDisplayHeight = this.contentHeight * this.curScale;\n          // 本次缩放前手指中点在本次缩放后的坐标\n          const pointX = (this.screenWidth - targetDisplayWidth) / 2 + targetDisplayWidth * this.pntX;\n          const pointY = (this.screenHeight - targetDisplayHeight) / 2 + targetDisplayHeight * this.pntY;\n          // 将pointX、pointY移动到缩放后的手指中点，需要移动的距离\n          this.offsetX = event.pinchCenterX - pointX;\n          this.offsetY = event.pinchCenterY - pointY;\n          this.updateMatrix();\n        })\n        .onActionEnd((event: GestureEvent) => {\n          if (this.curScale < this.scaleMin || this.curScale > this.scaleMax) {\n            this.curScale = 1;\n            this.offsetX = 0;\n            this.offsetY = 0;\n            this.updateMatrix();\n          }\n        })\n    )\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325238)/* ["default"] */.A) + "",
        width: "310",
        height: "511"
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
237956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799934-312553528070b21e0000c40033aabc9c.png");

},
325238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439629-b4c6c89441b566097ea951ab0bf63ab6.gif");

},
464501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
322861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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