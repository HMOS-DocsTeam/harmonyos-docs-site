"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["147736"], {
344298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_tapgesture_ts_basic_gestures_tapgesture_md_acf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-basic-gestures-ts-basic-gestures-tapgesture-ts-basic-gestures-tapgesture-md-acf.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_basic_gestures_ts_basic_gestures_tapgesture_ts_basic_gestures_tapgesture_md_acf_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture","title":"TapGesture","description":"支持单击、双击和多次点击事件的识别。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"TapGesture","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-tapgesture","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-gestures-tapgesture"},"sidebar":"ref","previous":{"title":"手势处理器","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler"},"next":{"title":"LongPressGesture","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture.md


const frontMatter = {
	title: 'TapGesture',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-tapgesture',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-gestures-tapgesture'
};
const contentTitle = 'TapGesture';

const assets = {

};



const toc = [{
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "TapGestureParameters12+对象说明",
  "id": "tapgestureparameters12对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onAction",
  "id": "onaction",
  "level": 3
}, {
  "value": "EventLocationInfo20+",
  "id": "eventlocationinfo20",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（双击手势识别）",
  "id": "示例1双击手势识别",
  "level": 3
}, {
  "value": "示例2（获取单击手势坐标）",
  "id": "示例2获取单击手势坐标",
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
        id: "tapgesture",
        children: "TapGesture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持单击、双击和多次点击事件的识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310060)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件同时绑定双击和单击手势且双击手势先绑定时，单击手势会有300ms的延时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TapGesture(value?: TapGestureParameters)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建点击手势对象。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureinterfacet11",
        children: "GestureInterface<T>"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["触发点击手势事件的设备类型为键盘或手柄时，事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
        children: "SourceTool"
      }), "值为Unknown，事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
        children: "SourceType"
      }), "值为KEY，JOYSTICK。"]
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
              href: "#tapgestureparameters12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TapGestureParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击手势的相关参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tapgestureparameters12对象说明",
      children: "TapGestureParameters12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855397)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击手势参数。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#basehandleroptions15",
        children: "BaseHandlerOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["识别的连续点击次数。当设置的值小于1或不设置时，会被转化为默认值。  默认值：1  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 当配置多击时，上一次的最后一根手指抬起和下一次的第一根手指按下的超时时间为300毫秒。  2. 当上次点击的位置与当前点击的位置距离超过60vp时，手势识别失败。在多指情况下，点击的位置为所有参与手势响应手指的平均位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fingers11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触发点击的手指数，最小为1指， 最大为10指。当设置小于1的值或不设置时，会被转化为默认值。  默认值：1  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 当配置多指时，第一根手指按下后300毫秒内未有足够的手指数按下，手势识别失败；手指抬起时，抬起后剩余的手指数小于阈值时开始计时，如300ms内未全部抬起则手势识别失败。  2. 实际点击手指数超过配置值，手势识别成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distanceThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击手势移动阈值。当设置的值小于等于0或不设置时，会被转化为默认值。  默认值：2³¹-1  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当手指的移动距离超出开发者预设的移动阈值时，点击识别失败。如果初始化为默认阈值时，手指移动超过组件热区范围，点击识别失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952900)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件通过手势事件绑定不同GestureType的手势对象，各手势对象在响应手势操作的事件回调中提供手势相关信息。下面通过TapGesture手势对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onaction",
        children: "onAction"
      }), "事件响应点击事件，获取事件相关信息。其余手势对象的事件定义见各个手势对象章节。 若需绑定多种手势，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-combined-gestures/ts-combined-gestures",
        children: "组合手势"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GestureEvent"
      }), "的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议优先使用fingerInfos。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaction",
      children: "onAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAction(event: (event: GestureEvent) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击手势识别成功回调。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eventlocationinfo20",
      children: "EventLocationInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于点击手势获取点击位置坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于组件左上角的X坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于组件左上角的Y坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于窗口的左上角X坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于窗口的左上角Y坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于屏幕的左上角X坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于屏幕的左上角Y坐标。  取值范围：[0, +∞)  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "globalDisplayX23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于主屏幕左上角为原点的坐标系中的X坐标。  单位：vp  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "globalDisplayY23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相对于主屏幕左上角为原点的坐标系中的Y坐标。  单位：vp  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1双击手势识别",
      children: "示例1（双击手势识别）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过TapGesture实现了双击手势的识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TapGestureExample {\n  @State value: string = '';\n\n  build() {\n    Column() {\n      // 单指双击文本触发手势事件\n      Text('Click twice').fontSize(28)\n        .gesture(\n        TapGesture({ count: 2 })\n          .onAction((event: GestureEvent) => {\n            if (event) {\n              this.value = JSON.stringify(event.fingerList[0])\n            }\n          })\n        )\n      Text(this.value)\n    }\n    .height(300)\n    .width(300)\n    .padding(20)\n    .border({ width: 3 })\n    .margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473965)/* ["default"] */.A) + "",
        width: "363",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2获取单击手势坐标",
      children: "示例2（获取单击手势坐标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过TapGesture获取单击手势点击位置的坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TapGestureExample {\n\n  build() {\n    Column() {\n      Text('Click Once').fontSize(28)\n        .gesture(\n          TapGesture({ count: 1, fingers: 1 })\n            .onAction((event: GestureEvent | undefined) => {\n              if (event) {\n                console.info(`x = ${JSON.stringify(event.tapLocation?.x)}`)\n                console.info(`y = ${JSON.stringify(event.tapLocation?.y)}`)\n                console.info(`windowX = ${JSON.stringify(event.tapLocation?.windowX)}`)\n                console.info(`windowY = ${JSON.stringify(event.tapLocation?.windowY)}`)\n                console.info(`displayX = ${JSON.stringify(event.tapLocation?.displayX)}`)\n                console.info(`displayY = ${JSON.stringify(event.tapLocation?.displayY)}`)\n                // 从API version 23开始，新增globalDisplayX和globalDisplayY属性。\n                console.info(`globalDisplayX = ${JSON.stringify(event.tapLocation?.globalDisplayX)}`)\n                console.info(`globalDisplayY = ${JSON.stringify(event.tapLocation?.globalDisplayY)}`)\n              }\n            })\n        )\n    }\n    .height(200)\n    .width(300)\n    .padding(20)\n    .border({ width: 3 })\n    .margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67607)/* ["default"] */.A) + "",
        width: "403",
        height: "264"
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
952900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
67607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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b+/bXCHYfk6SvvrVr8bX/brqqqviy9wnpwDb9zwxz3/+859XtVpVtVrV5ZdfPiZ3WjRBXKlUtG3btt3ah8u/IzAawqSJdHV1xbOFtr61Vdddd92or29paVFvb69++tOf6txzz9WCBQt2+73NDa6mT58erzK/6aablM1ma7qvzK1zPc+rafhMkPi+r2j4Bl1mtlE2m1U+n9dVV10V33vktNNOi7c1jb+ZOWbfltezLmopSeedd168uHDBggUql8sjVsjb9zXJZDL61a9+pb/+9a/yhi96OX/+/Pg1jVzZuFG//OUv40vaX3zxxaO+NjlOMn/+/Hg231NPPTXqtrsbVGhuhEmTuffee+M/r127VosXLx7xGlORbNu2TbNnz45D5ec///luvae9aFGSfvjDKxUEQ/eWnzt3bs16DNNgb9myRYsWLdS//dtH1NfXF1cG5p4kpsE3Db3neTrllFPiBY69vb26+eab432aqiJtTUu1Wo2rjKVLlyoIAgVBoDfffFNnnHGGenp64ueVmCF2ySWX6Oqrr1YQBCoWi3riiSfifUdRtEcvQT8wMKD29nZJ0t///nfdcMMNqa+74oor9IlPfKJm1tayZcusS6Z8Wdu2vZW67VNPPaW5Z56uY49LvxwLUA8D8E3o2Wee1bHHHautW7dq69atOvroo3XYYYfpoosu0pQpU/TKK6/o1ltv1eDgoDo6OiRJX/rSl+oukmuEqQKiKNKnPvUpHX744Xr11Vf11ltvadasWTrvvPN01llnqa+vT7/4xS/0yiuvKIoilctldXZ2yvf9EQGS3P/AwIAefvhhzZ49W5K0fPlynX/++SoWizUD+VHiNr5mv6Zb7I9//KNOP/10lUol9fb2as6cOSoUClqyZIlmzJih7du36/bbb9eLL76oXC4X3zDrwQcflFKuSLynurra2tr0+OOP64QTTlClUtEtt9yiFStW6IorrtAhhxyiLVu26Ec/+lH8+qEB9Pf87Kc/039d8l+SpLlnztWMDx2pSy+9VN3d3erp6dFPfvKTofUo3tCNx8yEBKARhEmT8H3fuslURo9t+KO++c1v6vnnn1e5XI4bItPImu6dMAz13e9+V/PmzauZ4TQwMKDOzs64irHvKGjuNWI33ma7MAzV2dmp2267TVdeeeXQtaKG7wnyu9/9Lt5PtVpVR2eb1t63Nr5vij3u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");

},
855397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
310060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
473965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479581-9d703fe0ab57cbc8e75ec5f4bbaac050.gif");

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