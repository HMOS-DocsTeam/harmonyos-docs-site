"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["281854"], {
721038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_pangesture_ts_basic_gestures_pangesture_md_07e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-basic-gestures-ts-basic-gestures-pangesture-ts-basic-gestures-pangesture-md-07e.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_pangesture_ts_basic_gestures_pangesture_md_07e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture","title":"PanGesture","description":"滑动手势事件，当滑动的最小距离达到设定的最小值时触发滑动手势事件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"PanGesture","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-gestures-pangesture"},"sidebar":"ref","previous":{"title":"LongPressGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture"},"next":{"title":"PinchGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture.md


const frontMatter = {
	title: 'PanGesture',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-gestures-pangesture'
};
const contentTitle = 'PanGesture';

const assets = {

};



const toc = [{
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "PanGesture",
  "id": "pangesture-1",
  "level": 3
}, {
  "value": "PanGesture15+",
  "id": "pangesture15",
  "level": 3
}, {
  "value": "PanDirection枚举说明",
  "id": "pandirection枚举说明",
  "level": 2
}, {
  "value": "PanGestureOptions",
  "id": "pangestureoptions",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "setDirection",
  "id": "setdirection",
  "level": 3
}, {
  "value": "setDistance",
  "id": "setdistance",
  "level": 3
}, {
  "value": "setFingers",
  "id": "setfingers",
  "level": 3
}, {
  "value": "getDirection12+",
  "id": "getdirection12",
  "level": 3
}, {
  "value": "getDistance18+",
  "id": "getdistance18",
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
        id: "pangesture",
        children: "PanGesture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动手势事件，当滑动的最小距离达到设定的最小值时触发滑动手势事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景可以触发滑动手势："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "触发方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入设备类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手指按下滑动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".Finger"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".TouchScreen"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical和axisHorizontal均为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左键按下滑动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".MOUSE"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".Mouse"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical和axisHorizontal均为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标滚轮滚动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".MOUSE"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".Mouse"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical或axisHorizontal不为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸板按下左键后滑动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".MOUSE"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".Mouse"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical和axisHorizontal均为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸板双指滑动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".TOUCHPAD"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".Mouse"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical或axisHorizontal不为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手写笔滑动。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            }), ".Pen"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            }), ".TouchScreen"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical和axisHorizontal均为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958499)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pangesture-1",
      children: "PanGesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PanGesture(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建滑动手势对象。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureinterfacet11",
        children: "GestureInterface<T>"
      })]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["{ fingers?: number; direction?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#pandirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PanDirection"
            }), "; distance?: number }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pangestureoptions",
              children: "PanGestureOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pangesture15",
      children: "PanGesture15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PanGesture(options?: PanGestureHandlerOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建滑动手势对象。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pangesture-1",
        children: "PanGesture"
      }), "相比，options参数新增了对isFingerCountLimited和distanceMap参数，分别表示是否检查触摸屏幕的手指数量以及指定不同输入源触发滑动手势事件的最小滑动距离。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#pangesturehandleroptions",
              children: "PanGestureHandlerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动手势处理器配置参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pandirection枚举说明",
      children: "PanDirection枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与SwipeDirection不同，PanDirection没有角度限制。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竖直方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向左滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向右滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任何方向都不可触发滑动手势事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pangestureoptions",
      children: "PanGestureOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number })"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建滑动手势配置参数对象。通过PanGestureOptions对象接口可以动态修改滑动手势的属性，从而避免通过状态变量修改属性（状态变量修改会导致UI刷新）。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["{ fingers?: number; direction?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pandirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PanDirection"
            }), "; distance?: number }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动手势配置参数对象。  fingers用于指定触发滑动的最少手指数，最小为1指， 最大取值为10指。  默认值：1  direction用于指定触发滑动的手势方向，此枚举值支持逻辑与(&)和逻辑或（"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdirection",
      children: "setDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDirection(value: PanDirection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动方向。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pandirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PanDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定触发滑动的手势方向，此枚举值支持逻辑与(&)和逻辑或（"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdistance",
      children: "setDistance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDistance(value: number)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置触发滑动手势事件的最小滑动距离，单位为vp。距离值不宜设置过大，避免因滑动脱手、响应时延过大等问题导致性能劣化，最佳实践请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-latency-optimization-cases#section1116134115286",
        children: "减小拖动识别距离"
      }), "。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触发滑动手势事件的最小滑动距离，单位为vp。  手写笔默认值：8，其余输入源默认值：5  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs组件"
            }), "滑动与该滑动手势事件同时存在时，可将distance值设为1，使滑动更灵敏，避免造成事件错乱。  当设定的值小于0时，按默认值处理。  建议设置合理的滑动距离，滑动距离设置过大时会导致滑动不跟手（响应时延慢）的问题。  当组件应用了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
              children: "scale"
            }), "缩放变换时，distance的实际识别距离会按照scale比例进行缩放。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setfingers",
      children: "setFingers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setFingers(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触发滑动的最少手指数。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发滑动的最少手指数，最小为1指， 最大取值为10指。  默认值：1"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdirection12",
      children: "getDirection12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDirection(): PanDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取滑动方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pandirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PanDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动方向。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdistance18",
      children: "getDistance18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDistance(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触发滑动手势事件的最小滑动距离。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动手势事件的最小滑动距离。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334427)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GestureEvent"
      }), "的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议优先使用fingerInfos。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionstart",
      children: "onActionStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionStart(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动手势识别成功回调。"
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
            children: "滑动手势识别成功回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionupdate",
      children: "onActionUpdate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionUpdate(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动手势更新回调。fingerList为多根手指时，该回调监听每次只会更新一根手指的位置信息。"
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
            children: "滑动手势更新回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactionend",
      children: "onActionEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionEnd(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动手势结束回调。滑动手势识别成功后，手指抬起时触发回调。"
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
            children: "滑动手势结束回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel",
      children: "onActionCancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动手势取消回调。滑动手势识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。"
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
            children: "滑动手势取消回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onactioncancel18",
      children: "onActionCancel18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActionCancel(event: Callback<GestureEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动手势取消回调。滑动手势识别成功后，接收到触摸取消事件时触发回调。返回手势事件信息。"
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
            children: "滑动手势取消回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过PanGesture实现了单指/双指滑动手势的识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PanGestureExample {\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State positionX: number = 0;\n  @State positionY: number = 0;\n  private panOption: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Left | PanDirection.Right });\n\n  build() {\n    Column() {\n      Column() {\n        Text('PanGesture offset:\\nX: ' + this.offsetX + '\\n' + 'Y: ' + this.offsetY)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .translate({ x: this.offsetX, y: this.offsetY, z: 0 }) // 以组件左上角为坐标原点进行移动\n      // 左右滑动触发该手势事件\n      .gesture(\n      PanGesture(this.panOption)\n        .onActionStart((event: GestureEvent) => {\n          console.info('Pan start');\n          console.info(`Pan start timeStamp is: ${event.timestamp}`);\n        })\n        .onActionUpdate((event: GestureEvent) => {\n          if (event) {\n            this.offsetX = this.positionX + event.offsetX;\n            this.offsetY = this.positionY + event.offsetY;\n          }\n        })\n        .onActionEnd((event: GestureEvent) => {\n          this.positionX = this.offsetX;\n          this.positionY = this.offsetY;\n          console.info('Pan end');\n          console.info(`Pan end timeStamp is: ${event.timestamp}`);\n        })\n      )\n\n      Button('修改PanGesture触发条件')\n        .onClick(() => {\n          // 将PanGesture手势事件触发条件改为双指以任意方向滑动\n          this.panOption.setDirection(PanDirection.All);\n          this.panOption.setFingers(2);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向左滑动："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(112436)/* ["default"] */.A) + "",
        width: "384",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮时，修改PanGesture触发条件为双指向左下方滑动："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(607724)/* ["default"] */.A) + "",
        width: "384",
        height: "301"
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
607724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
334427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
112436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
958499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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