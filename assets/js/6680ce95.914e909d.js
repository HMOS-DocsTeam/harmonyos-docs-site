"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["530570"], {
585917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_control_ts_gesture_customize_judge_ts_gesture_customize_judge_md_668_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-gesture-control-ts-gesture-customize-judge-ts-gesture-customize-judge-md-668.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_control_ts_gesture_customize_judge_ts_gesture_customize_judge_md_668_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge","title":"自定义手势判定","description":"为组件提供自定义手势判定能力。开发者可根据需要，在手势识别期间，决定是否响应手势。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义手势判定","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-customize-judge","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-gesture-customize-judge"},"sidebar":"ref","previous":{"title":"组合手势","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-combined-gestures/ts-combined-gestures"},"next":{"title":"手势拦截增强","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge.md


const frontMatter = {
	title: '自定义手势判定',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-customize-judge',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-gesture-customize-judge'
};
const contentTitle = '自定义手势判定';

const assets = {

};



const toc = [{
  "value": "onGestureJudgeBegin",
  "id": "ongesturejudgebegin",
  "level": 2
}, {
  "value": "BaseEvent8+",
  "id": "baseevent8",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "getModifierKeyState12+",
  "id": "getmodifierkeystate12",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（自定义手势判定）",
  "id": "示例1自定义手势判定",
  "level": 3
}, {
  "value": "示例2（自定义区域手势判定）",
  "id": "示例2自定义区域手势判定",
  "level": 3
}, {
  "value": "示例3（实时监测参与手势的有效触点的数量及其简要信息）",
  "id": "示例3实时监测参与手势的有效触点的数量及其简要信息",
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
        id: "自定义手势判定",
        children: "自定义手势判定"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件提供自定义手势判定能力。开发者可根据需要，在手势识别期间，决定是否响应手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427082)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ongesturejudgebegin",
      children: "onGestureJudgeBegin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件绑定自定义手势判定回调。当手势即将成功时，触发用户定义的回调获取结果。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(gestureInfo: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureinfo11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureInfo"
            }), ", event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#basegestureevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BaseGestureEvent"
            }), ") => ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturejudgeresult11",
              children: "GestureJudgeResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义手势判定回调。当手势即将成功时，触发用户定义的回调获取结果。"
          })]
        })
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
      id: "baseevent8",
      children: "BaseEvent8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础事件类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#eventtarget8",
              children: "EventTarget"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触发手势事件的元素对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件时间戳，触发事件时距离系统启动的时间间隔。  单位：ns  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
              children: "SourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件输入设备的类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pressure9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按压的压力大小。  默认值：0  取值范围：[0,1]，典型值0.913168，压感大小与数值正相关。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tiltX9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手写笔在设备平面上的投影与设备平面X轴的夹角。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tiltY9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手写笔在设备平面上的投影与设备平面Y轴的夹角。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rollAngle17+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手写笔与设备平面的夹角。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 17开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 17开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sourceTool9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
              children: "SourceTool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件输入源的类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisHorizontal12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水平轴值。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。  对于Shift+鼠标滚轮触发的横向滚动场景，axisHorizontal为0，滚动值体现在axisVertical中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisVertical12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["垂直轴值。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。  对于Shift+鼠标滚轮触发的横向滚动场景，滚动值体现在axisVertical中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisPinch21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["双指缩放比例。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在触控板上通过双指缩放操作触发的Pinch手势，或在轴事件中，可以获取该值；在其他场景下，获取到的将是默认值。  缩放比例是指在双指缩放事件触发过程中，双指当前距离与最初按下时距离的比值。  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 21开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 21开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触发当前事件的输入设备ID。  默认值：0  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetDisplayId15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件发生的屏幕ID。  默认值：0  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmodifierkeystate12",
      children: "getModifierKeyState12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModifierKeyState?(keys: Array<string>): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取功能键按压状态。报错信息请参考以下错误码。支持功能键'Ctrl'|'Alt'|'Shift'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431775)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口不支持在手写笔场景下使用。"
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
            children: "keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能键列表。"
          })]
        })
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回功能键按压状态。当功能键均处于按压状态时返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1自定义手势判定",
      children: "示例1（自定义手势判定）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ongesturejudgebegin",
        children: "onGestureJudgeBegin"
      }), "实现了对长按、快滑和滑动手势的自定义判定。从API version 21开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#baseevent8",
        children: "BaseEvent"
      }), "的axisPinch属性获取双指缩放比例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Column() {\n      Row({ space: 20 }) {\n        Text(this.message).width(200).height(80).backgroundColor(Color.Pink)\n          .fontSize(25)\n      }.margin(20)\n    }\n    .width('100%')\n    .height(200)\n    .borderWidth(2)\n    .onDragStart(() => {\n      this.message = 'drag'\n      console.info(\"Drag start.\")\n    })\n    .gesture(\n      TapGesture()\n        .tag(\"tap1\")// 设置点击手势标志\n        .onAction(() => {\n          this.message = 'tap1'\n        })\n    )\n    .gesture(\n      LongPressGesture()\n        .tag(\"longPress1\")// 设置长按手势标志\n        .onAction(() => {\n          this.message = 'longPress'\n        })\n    )\n    .gesture(\n      SwipeGesture()\n        .tag(\"swipe1\")// 设置快滑手势标志\n        .onAction(() => {\n          this.message = 'swipe1'\n        })\n    )\n    .gesture(\n      PanGesture()\n        .tag(\"pan1\")// 设置滑动手势标志\n        .onActionStart(() => {\n          this.message = 'pan1'\n        })\n    )\n    .gesture(\n      PinchGesture()\n        .tag(\"pinch1\")// 设置捏合手势标志\n        .onActionStart(() => {\n          this.message = 'pinch1'\n        })\n    )\n    .onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n      // 若该手势类型为长按手势，转换为长按手势事件\n      if (gestureInfo.type == GestureControl.GestureType.LONG_PRESS_GESTURE) {\n        let longPressEvent = event as LongPressGestureEvent;\n        console.info(`repeat ${longPressEvent.repeat}`)\n      }\n      // 若该手势类型为快滑手势，转换为快滑手势事件\n      if (gestureInfo.type == GestureControl.GestureType.SWIPE_GESTURE) {\n        let swipeEvent = event as SwipeGestureEvent;\n        console.info(`angle ${swipeEvent.angle}`)\n      }\n      // 若该手势类型为滑动手势，转换为滑动手势事件\n      if (gestureInfo.type == GestureControl.GestureType.PAN_GESTURE) {\n        let panEvent = event as PanGestureEvent;\n        console.info(`velocity ${panEvent.velocity}`)\n      }\n      // 若该手势类型为捏合手势，转换为捏合手势事件\n      if (gestureInfo.type == GestureControl.GestureType.PINCH_GESTURE) {\n        let pinchEvent = event as PinchGestureEvent;\n        console.info(`axisPinch ${pinchEvent.axisPinch}`)\n      }\n      // 自定义判定标准\n      if (gestureInfo.type == GestureControl.GestureType.DRAG) {\n        // 返回 GestureJudgeResult.REJECT 会使拖动手势失败。\n        return GestureJudgeResult.REJECT;\n      } else if (gestureInfo.tag === 'longPress1' && event.fingerList.length > 0 && event.fingerList[0].localY < 100) {\n        // 返回 GestureJudgeResult.CONTINUE 将保持系统判定。\n        return GestureJudgeResult.CONTINUE;\n      }\n      return GestureJudgeResult.CONTINUE;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272199)/* ["default"] */.A) + "",
        width: "372",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义区域手势判定",
      children: "示例2（自定义区域手势判定）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置onGestureJudgeBegin判定区域决定长按手势和拖拽是否响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller()\n  promptAction: PromptAction = this.getUIContext().getPromptAction();\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Text(\"Drag 上下两层 上层绑定长按，下层绑定拖拽。先长按后平移上半区红色区域只会响应长按，先长按后平移下半区蓝色区域只会响应拖拽\")\n          .width('100%')\n          .fontSize(20)\n          .fontColor('0xffdd00')\n          .backgroundColor(0xeeddaa00)\n        Stack({ alignContent: Alignment.Center }) {\n          Column() {\n            // 模拟上半区和下半区\n            Stack().width('200vp').height('100vp').backgroundColor(Color.Red)\n            Stack().width('200vp').height('100vp').backgroundColor(Color.Blue)\n          }.width('200vp').height('200vp')\n\n          // Stack的下半区是绑定了拖动手势的图像区域\n          Image($r('sys.media.ohos_app_icon'))\n            .draggable(true)\n            .onDragStart(() => {\n              this.promptAction.showToast({ message: \"Drag 下半区蓝色区域，Image响应\" })\n            })\n            .width('200vp').height('200vp')\n          // Stack的上半区是绑定了长按手势的浮动区域\n          Stack() {\n          }\n          .width('200vp')\n          .height('200vp')\n          .hitTestBehavior(HitTestMode.Transparent)\n          .onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n            // 确定gestureInfo的tag标志是否有值\n            if (gestureInfo.tag) {\n              console.info(`gestureInfo tag ${gestureInfo.tag.toString()}`)\n            }\n            console.info(`gestureInfo Type ${gestureInfo.type.toString()}`);\n            console.info(`isSystemGesture ${gestureInfo.isSystemGesture}`);\n            console.info(`zqs pressure ${event.pressure}\\nfingerList.length ${event.fingerList.length}\\ntimeStamp ${event.timestamp}\\nsourceType ${event.source.toString()}\\n` +\n              `tiltX ${event.tiltX}\\ntiltY ${event.tiltY}\\nrollAngle ${event.rollAngle}\\nsourcePool ${event.sourceTool.toString()}`);\n            // 如果是长按类型手势，判断点击的位置是否在上半区\n            if (gestureInfo.type == GestureControl.GestureType.LONG_PRESS_GESTURE) {\n              if (event.fingerList.length > 0 && event.fingerList[0].localY < 100) {\n                return GestureJudgeResult.CONTINUE\n              } else {\n                return GestureJudgeResult.REJECT\n              }\n            }\n            return GestureJudgeResult.CONTINUE\n          })\n          .gesture(GestureGroup(GestureMode.Parallel,\n            LongPressGesture()\n              .onAction((event: GestureEvent) => {\n                this.promptAction.showToast({ message: \"LongPressGesture 长按上半区 红色区域，红色区域响应\" })\n              })\n              .tag(\"tap111\")\n          ))\n\n        }.width('100%')\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502136)/* ["default"] */.A) + "",
        width: "364",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3实时监测参与手势的有效触点的数量及其简要信息",
      children: "示例3（实时监测参与手势的有效触点的数量及其简要信息）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置fingerInfos实时检测参与手势的有效触点数量、各个触点ID及其坐标"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GestureDetectorExample {\n  @State message: string = '触摸区域'\n  @State fingerCount: number = 0\n  @State fingerDetails: string = ''\n\n  build() {\n    Column() {\n      // 显示信息区域\n      Column() {\n        Text(this.message)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n\n        Text(`触点数量: ${this.fingerCount}`)\n          .fontSize(16)\n          .margin({ top: 8 })\n\n\n        Text(this.fingerDetails)\n          .fontSize(14)\n          .margin({ top: 8 })\n      }\n      .padding(10)\n      .border({ width: 1, color: Color.Gray })\n\n      // 手势检测区域\n      Column()\n        .width('90%')\n        .height(200)\n        .margin(20)\n        .border({ width: 2, color: Color.Black })\n        .gesture(\n          GestureGroup(GestureMode.Exclusive,\n            TapGesture()\n              .onAction(() => {\n                this.message = '单击事件'\n              }),\n            LongPressGesture()\n              .onAction(() => {\n                this.message = '长按事件'\n              }),\n            PanGesture()\n              .onActionStart(() => {\n                this.message = '拖动开始'\n              })\n              .onActionUpdate(() => {\n                this.message = '拖动中...'\n              })\n              .onActionEnd(() => {\n                this.message = '拖动结束'\n                this.fingerCount = 0\n                this.fingerDetails = ''\n              })\n          )\n        )\n        .onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n          // 获取 fingerInfos 信息\n          if (event?.fingerInfos) {\n            this.fingerCount = event.fingerInfos.length\n            this.fingerDetails = event.fingerInfos.map(finger =>\n            `ID：${finger.id}: (${finger.localX.toFixed(1)}, ${finger.localY.toFixed(1)})`\n            ).join('\\n')\n            console.info(`触点信息：${JSON.stringify(event.fingerInfos)}`)\n          }\n          if (this.fingerCount > 2) {\n            return GestureJudgeResult.REJECT\n          }\n          return GestureJudgeResult.CONTINUE\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .padding(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(157081)/* ["default"] */.A) + "",
        width: "470",
        height: "518"
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
272199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959586-40241f211bdffba94ddf8f05b76d67b7.gif");

},
431775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
157081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799938-eac36ac880497c0dc669180cbeb42c48.gif");

},
427082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
502136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479587-b7fce46e0ac29def22e313d283cbe742.gif");

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