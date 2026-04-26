"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["570276"], {
665222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_control_ts_gesture_blocking_enhancement_ts_gesture_blocking_enhancement_md_95a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-gesture-control-ts-gesture-blocking-enhancement-ts-gesture-blocking-enhancement-md-95a.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_control_ts_gesture_blocking_enhancement_ts_gesture_blocking_enhancement_md_95a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement","title":"手势拦截增强","description":"为组件提供手势拦截能力。开发者可根据需要，将系统内置手势和比其优先级高的手势做并行化处理，并可以动态控制手势事件的触发。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"手势拦截增强","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-gesture-blocking-enhancement"},"sidebar":"ref","previous":{"title":"自定义手势判定","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge"},"next":{"title":"手势公共接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement.md


const frontMatter = {
	title: '手势拦截增强',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-gesture-blocking-enhancement'
};
const contentTitle = '手势拦截增强';

const assets = {

};



const toc = [{
  "value": "shouldBuiltInRecognizerParallelWith",
  "id": "shouldbuiltinrecognizerparallelwith",
  "level": 2
}, {
  "value": "ShouldBuiltInRecognizerParallelWithCallback",
  "id": "shouldbuiltinrecognizerparallelwithcallback",
  "level": 2
}, {
  "value": "onGestureRecognizerJudgeBegin13+",
  "id": "ongesturerecognizerjudgebegin13",
  "level": 2
}, {
  "value": "onGestureRecognizerJudgeBegin",
  "id": "ongesturerecognizerjudgebegin",
  "level": 2
}, {
  "value": "GestureRecognizerJudgeBeginCallback",
  "id": "gesturerecognizerjudgebegincallback",
  "level": 2
}, {
  "value": "onTouchTestDone20+",
  "id": "ontouchtestdone20",
  "level": 2
}, {
  "value": "TouchTestDoneCallback20+",
  "id": "touchtestdonecallback20",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（嵌套滚动）",
  "id": "示例1嵌套滚动",
  "level": 3
}, {
  "value": "示例2（嵌套场景下拦截内部容器手势）",
  "id": "示例2嵌套场景下拦截内部容器手势",
  "level": 3
}, {
  "value": "示例3（拦截手势获取属性）",
  "id": "示例3拦截手势获取属性",
  "level": 3
}, {
  "value": "示例4（手势触发成功时取消子组件上的Touch事件）",
  "id": "示例4手势触发成功时取消子组件上的touch事件",
  "level": 3
}, {
  "value": "示例5（自定义手势识别器是否参与手势处理）",
  "id": "示例5自定义手势识别器是否参与手势处理",
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
        id: "手势拦截增强",
        children: "手势拦截增强"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件提供手势拦截能力。开发者可根据需要，将系统内置手势和比其优先级高的手势做并行化处理，并可以动态控制手势事件的触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(420623)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shouldbuiltinrecognizerparallelwith",
      children: "shouldBuiltInRecognizerParallelWith"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供系统内置手势与响应链上其他组件的手势设置并行关系的回调事件。此接口对应的C API接口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativegestureapi-1/capi-arkui-nativemodule-arkui-nativegestureapi-1#setinnergestureparallelto",
        children: "setInnerGestureParallelTo"
      }), "。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shouldbuiltinrecognizerparallelwithcallback",
              children: "ShouldBuiltInRecognizerParallelWithCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内置手势与响应链上其他组件的手势设置并行关系的回调事件，当该组件进行触摸碰撞测试时，会触发用户定义的回调来形成手势并行关系。"
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
      id: "shouldbuiltinrecognizerparallelwithcallback",
      children: "ShouldBuiltInRecognizerParallelWithCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前组件的系统内置手势识别器，当前版本只提供内置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturetype11",
              children: "GestureType"
            }), ".PAN_GESTURE类型的手势识别器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "others"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应链上更高优先级的其他组件相同类别的手势识别器。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与current识别器绑定并行关系的某个手势识别器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ongesturerecognizerjudgebegin13",
      children: "onGestureRecognizerJudgeBegin13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定自定义手势识别器判定回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增exposeInnerGesture参数作为是否将ArkUI系统组合组件的内置组件的手势暴露给开发者的标识。当该标识置为true时，将ArkUI系统组合组件的内置组件的手势暴露给开发者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于不需要将ArkUI系统组合组件的内置组件的手势暴露给开发者的场景，建议采用原有", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ongesturerecognizerjudgebegin",
        children: "onGestureRecognizerJudgeBegin"
      }), "接口。若要求将ArkUI系统组合组件的内置组件的手势暴露给开发者，建议使用该接口并将exposeInnerGesture设置为true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gesturerecognizerjudgebegincallback",
              children: "GestureRecognizerJudgeBeginCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给组件绑定自定义手势识别器判定回调，当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exposeInnerGesture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暴露内部手势标识。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果是组合组件，此参数设置true，回调中的current参数则会包含组合组件内部的手势识别器。  当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "，其他组件请不要设置此参数。  设置为false时，功能与原接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ongesturerecognizerjudgebegin",
              children: "onGestureRecognizerJudgeBegin"
            }), "相同。"]
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
      id: "ongesturerecognizerjudgebegin",
      children: "onGestureRecognizerJudgeBegin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定自定义手势识别器判定回调。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gesturerecognizerjudgebegincallback",
              children: "GestureRecognizerJudgeBeginCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义手势识别器判定回调。当绑定到该组件的手势即将成功时，会触发用户定义的回调来获取结果。"
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
      id: "gesturerecognizerjudgebegincallback",
      children: "GestureRecognizerJudgeBeginCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义手势识别器判定回调类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#basegestureevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BaseGestureEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前基础手势事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前即将要响应的识别器对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recognizers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应链上的其他手势识别器对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "touchRecognizers20+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#touchrecognizer20",
              children: "TouchRecognizer"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应链上的Touch识别器对象。 默认值为null，表示在当前手势绑定组件及其子孙组件没有可响应的Touch识别器。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturejudgeresult11",
              children: "GestureJudgeResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势是否裁决成功的判定结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontouchtestdone20",
      children: "onTouchTestDone20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTouchTestDone(callback: TouchTestDoneCallback): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
        children: "触摸测试"
      }), "结束后，指定手势识别器是否参与后续处理的能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#touchtestdonecallback20",
              children: "TouchTestDoneCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数，用于指定手势识别器是否参与后续处理。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
              children: "触摸测试"
            }), "结束后，开始识别用户手势之前，会触发该回调来动态指定手势识别器是否参与后续处理。"]
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
      id: "touchtestdonecallback20",
      children: "TouchTestDoneCallback20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态指定手势识别器是否参与手势处理的回调事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#basegestureevent11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BaseGestureEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
              children: "触摸测试"
            }), "结束后的基础手势事件的信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅包含BaseGestureEvent的信息，不包含其子类拓展信息。  axisHorizontal和axisVertical的值为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recognizers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturerecognizer12",
              children: "GestureRecognizer"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
              children: "触摸测试"
            }), "结束后，所有手势识别器对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1嵌套滚动",
      children: "示例1（嵌套滚动）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过shouldBuiltInRecognizerParallelWith和onGestureRecognizerJudgeBegin实现了嵌套滚动的功能。内部组件优先响应滑动手势，当内部组件滑动至顶部或底部时，外部组件能够接替滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FatherControlChild {\n  scroller: Scroller = new Scroller();\n  scroller2: Scroller = new Scroller();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n  private childRecognizer: GestureRecognizer = new GestureRecognizer();\n  private currentRecognizer: GestureRecognizer = new GestureRecognizer();\n  private lastOffset: number = 0;\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Scroll(this.scroller) { // 外部滚动容器\n        Column() {\n          Text(\"Scroll Area\")\n            .width('90%')\n            .height(150)\n            .backgroundColor(0xFFFFFF)\n            .borderRadius(15)\n            .fontSize(16)\n            .textAlign(TextAlign.Center)\n            .margin({ top: 10 })\n          Scroll(this.scroller2) { // 内部滚动容器\n            Column() {\n              Text(\"Scroll Area2\")\n                .width('90%')\n                .height(150)\n                .backgroundColor(0xFFFFFF)\n                .borderRadius(15)\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .margin({ top: 10 })\n              Column() {\n                ForEach(this.arr, (item: number) => {\n                  Text(item.toString())\n                    .width('90%')\n                    .height(150)\n                    .backgroundColor(0xFFFFFF)\n                    .borderRadius(15)\n                    .fontSize(16)\n                    .textAlign(TextAlign.Center)\n                    .margin({ top: 10 })\n                }, (item: string) => item)\n              }.width('100%')\n            }\n          }\n          .id(\"inner\")\n          .width('100%')\n          .height(800)\n        }.width('100%')\n      }\n      .id(\"outer\")\n      .height(600)\n      .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n      .scrollBar(BarState.On) // 滚动条常驻显示\n      .scrollBarColor(Color.Gray) // 滚动条颜色\n      .scrollBarWidth(10) // 滚动条宽度\n      .edgeEffect(EdgeEffect.None)\n      .shouldBuiltInRecognizerParallelWith((current: GestureRecognizer, others: Array<GestureRecognizer>) => {\n        for (let i = 0; i < others.length; i++) {\n          let target = others[i].getEventTargetInfo();\n          if (target) {\n            if (target.getId() == \"inner\" && others[i].isBuiltIn() &&\n              others[i].getType() == GestureControl.GestureType.PAN_GESTURE) { // 找到将要组成并行手势的识别器\n              this.currentRecognizer = current; // 保存当前组件的识别器\n              this.childRecognizer = others[i]; // 保存将要组成并行手势的识别器\n              return others[i]; // 返回将要组成并行手势的识别器\n            }\n          }\n        }\n        return undefined;\n      })\n      .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n        others: Array<GestureRecognizer>) => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n        if (current) {\n          let target = current.getEventTargetInfo();\n          if (target) {\n            if (target.getId() == \"outer\" && current.isBuiltIn() &&\n              current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n              if (others) {\n                for (let i = 0; i < others.length; i++) {\n                  let target = others[i].getEventTargetInfo() as ScrollableTargetInfo;\n                  if (target instanceof ScrollableTargetInfo && target.getId() == \"inner\") { // 找到响应链上对应并行的识别器\n                    let panEvent = event as PanGestureEvent;\n                    if (target.isEnd()) { // 根据当前组件状态以及移动方向动态控制识别器使能状态\n                      if (panEvent && panEvent.offsetY < 0) {\n                        this.childRecognizer.setEnabled(false);\n                        this.currentRecognizer.setEnabled(true);\n                      } else {\n                        this.childRecognizer.setEnabled(true);\n                        this.currentRecognizer.setEnabled(false);\n                      }\n                    } else if (target.isBegin()) {\n                      if (panEvent.offsetY > 0) {\n                        this.childRecognizer.setEnabled(false);\n                        this.currentRecognizer.setEnabled(true);\n                      } else {\n                        this.childRecognizer.setEnabled(true);\n                        this.currentRecognizer.setEnabled(false);\n                      }\n                    } else {\n                      this.childRecognizer.setEnabled(true);\n                      this.currentRecognizer.setEnabled(false);\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        return GestureJudgeResult.CONTINUE;\n      })\n      .parallelGesture( // 绑定一个Pan手势作为动态控制器\n        PanGesture()\n          .onActionUpdate((event: GestureEvent) => {\n            if (this.childRecognizer.getState() != GestureRecognizerState.SUCCESSFUL ||\n              this.currentRecognizer.getState() != GestureRecognizerState.SUCCESSFUL) { // 如果识别器状态不是SUCCESSFUL，则不做控制\n              return;\n            }\n            let target = this.childRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            let currentTarget = this.currentRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            if (target instanceof ScrollableTargetInfo && currentTarget instanceof ScrollableTargetInfo) {\n              if (target.isEnd()) { // 在移动过程中实时根据当前组件状态，控制识别器的开闭状态\n                if ((event.offsetY - this.lastOffset) < 0) {\n                  this.childRecognizer.setEnabled(false);\n                  if (currentTarget.isEnd()) {\n                    this.currentRecognizer.setEnabled(false);\n                  } else {\n                    this.currentRecognizer.setEnabled(true);\n                  }\n                } else {\n                  this.childRecognizer.setEnabled(true);\n                  this.currentRecognizer.setEnabled(false);\n                }\n              } else if (target.isBegin()) {\n                if ((event.offsetY - this.lastOffset) > 0) {\n                  this.childRecognizer.setEnabled(false);\n                  if (currentTarget.isBegin()) {\n                    this.currentRecognizer.setEnabled(false);\n                  } else {\n                    this.currentRecognizer.setEnabled(true);\n                  }\n                } else {\n                  this.childRecognizer.setEnabled(true);\n                  this.currentRecognizer.setEnabled(false);\n                }\n              } else {\n                this.childRecognizer.setEnabled(true);\n                this.currentRecognizer.setEnabled(false);\n              }\n            }\n            this.lastOffset = event.offsetY;\n          })\n      )\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797517)/* ["default"] */.A) + "",
        width: "393",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2嵌套场景下拦截内部容器手势",
      children: "示例2（嵌套场景下拦截内部容器手势）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过将参数exposeInnerGesture设置为true，实现了一级Tabs容器在嵌套二级Tabs的场景下，能够屏蔽二级Tabs内置Swiper的滑动手势，从而触发一级Tabs内置Swiper滑动手势的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自行定义变量来记录内层Tabs的索引值，通过该索引值判断当滑动达到内层Tabs的边界处时，触发回调返回屏蔽使外层Tabs产生滑动手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  innerSelectedIndex: number = 0; // 记录内层Tabs的索引\n  controller?: TabsController = new TabsController();\n\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.selectedIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.selectedIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(this.tabBuilder(0, 'green'))\n\n        TabContent() {\n          Tabs() {\n            TabContent() {\n              Column().width('100%').height('100%').backgroundColor(Color.Blue)\n            }.tabBar(new SubTabBarStyle('blue'))\n\n            TabContent() {\n              Column().width('100%').height('100%').backgroundColor(Color.Pink)\n            }.tabBar(new SubTabBarStyle('pink'))\n          }\n          .onAnimationStart((index: number, targetIndex: number) => {\n            console.info(`ets onGestureRecognizerJudgeBegin child: ${targetIndex}`)\n            this.innerSelectedIndex = targetIndex\n          })\n          .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n            others: Array<GestureRecognizer>): GestureJudgeResult => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n            console.info('ets onGestureRecognizerJudgeBegin child')\n            if (current) {\n              let target = current.getEventTargetInfo();\n              if (target && current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n                console.info('ets onGestureRecognizerJudgeBegin child PAN_GESTURE')\n                let panEvent = event as PanGestureEvent;\n                if (panEvent && panEvent.velocityX < 0 && this.innerSelectedIndex === 1) { // 内层Tabs滑动到尽头\n                  console.info('ets onGestureRecognizerJudgeBegin child reject end')\n                  return GestureJudgeResult.REJECT;\n                }\n                if (panEvent && panEvent.velocityX > 0 && this.innerSelectedIndex === 0) { // 内层Tabs滑动到开头\n                  console.info('ets onGestureRecognizerJudgeBegin child reject begin')\n                  return GestureJudgeResult.REJECT;\n                }\n              }\n            }\n            return GestureJudgeResult.CONTINUE;\n          }, true)\n        }.tabBar(this.tabBuilder(1, 'blue and pink'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Brown)\n        }.tabBar(this.tabBuilder(2, 'brown'))\n      }\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        // 切换动画开始时触发该回调。目标页签显示下划线。\n        this.selectedIndex = targetIndex\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517094)/* ["default"] */.A) + "",
        width: "498",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3拦截手势获取属性",
      children: "示例3（拦截手势获取属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置onGestureRecognizerJudgeBegin判定手势，获取相应属性参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Gesture';\n\n  build() {\n    Column() {\n      Column() {\n        Row({ space: 20 }) {\n          Text(this.message)\n            .width('100%')\n            .height(80)\n            .fontSize(23)\n        }.margin(25)\n      }\n      .margin(25)\n      .padding(20)\n      .width('90%')\n      .height(250)\n      .borderWidth(2)\n      .gesture(TapGesture())\n      .gesture(LongPressGesture())\n      .gesture(PanGesture({ direction: PanDirection.Vertical }))\n      .gesture(PinchGesture())\n      .gesture(RotationGesture())\n      .gesture(SwipeGesture({ direction: SwipeDirection.Horizontal }))\n      // 给组件绑定自定义手势识别器判定回调\n      .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n        others: Array<GestureRecognizer>) => {\n        if (current) {\n          // 判断是否为滑动手势\n          if (current.getType() === GestureControl.GestureType.PAN_GESTURE) {\n            let target = current as PanRecognizer;\n            this.message = 'PanGesture\\ndistance:' + target.getPanGestureOptions().getDistance() + '\\nfingers:' +\n            target.getFingerCount() + '\\nisFingerCountLimited:' + target.isFingerCountLimit();\n          }\n          // 判断是否为长按手势\n          if (current.getType() === GestureControl.GestureType.LONG_PRESS_GESTURE) {\n            let target = current as LongPressRecognizer;\n            this.message = 'LongPressGesture\\nfingers:' + target.getFingerCount() + '\\nisFingerCountLimited:' +\n            target.isFingerCountLimit() + '\\nrepeat:' + target.isRepeat() + '\\nduration:' + target.getDuration();\n          }\n          // 判断是否为捏合手势\n          if (current.getType() === GestureControl.GestureType.PINCH_GESTURE) {\n            let target = current as PinchRecognizer;\n            this.message = 'PinchGesture\\ndistance:' + target.getDistance() + '\\nfingers:' +\n            target.getFingerCount() + '\\nisFingerCountLimited:' + target.isFingerCountLimit();\n          }\n          // 判断是否为点击手势\n          if (current.getType() === GestureControl.GestureType.TAP_GESTURE) {\n            let target = current as TapRecognizer;\n            this.message = 'TapGesture\\ncount:' + target.getTapCount() + '\\nfingers:' +\n            target.getFingerCount() + '\\nisFingerCountLimited:' + target.isFingerCountLimit();\n          }\n          // 判断是否为旋转手势\n          if (current.getType() === GestureControl.GestureType.ROTATION_GESTURE) {\n            let target = current as RotationRecognizer;\n            this.message = 'RotationGesture\\nangle:' + target.getAngle() + '\\nfingers:' +\n            target.getFingerCount() + '\\nisFingerCountLimited:' + target.isFingerCountLimit();\n          }\n          // 判断是否为快滑手势\n          if (current.getType() === GestureControl.GestureType.SWIPE_GESTURE) {\n            let target = current as SwipeRecognizer;\n            this.message = 'SwipeGesture\\ndirection:' + target.getDirection() + '\\nfingers:' +\n            target.getFingerCount() + '\\nisFingerCountLimited:' + target.isFingerCountLimit() + '\\nspeed:' +\n            target.getVelocityThreshold();\n          }\n        }\n        return GestureJudgeResult.CONTINUE;\n      })\n    }\n    .padding(15)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276691)/* ["default"] */.A) + "",
        width: "244",
        height: "198"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4手势触发成功时取消子组件上的touch事件",
      children: "示例4（手势触发成功时取消子组件上的Touch事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置onGestureRecognizerJudgeBegin判定手势，在父容器手势触发成功时，调用cancelTouch()强制取消子组件上的Touch事件，实现父子组件手势控制的精准切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FatherControlChild {\n  scroller: Scroller = new Scroller();\n  scroller2: Scroller = new Scroller()\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n  private childRecognizer: GestureRecognizer = new GestureRecognizer();\n  private currentRecognizer: GestureRecognizer = new GestureRecognizer();\n  private lastOffset: number = 0;\n  @State outerState: string = \"IDLE\";\n  @State innerState: string = \"IDLE\";\n  @State willCancel: boolean = false;\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Scroll(this.scroller) { // 外部滚动容器\n        Column() {\n          Text(\"Scroll Area\")\n            .width('90%')\n            .height(150)\n            .backgroundColor(0xFFFFFF)\n            .borderRadius(15)\n            .fontSize(16)\n            .textAlign(TextAlign.Center)\n            .margin({ top: 10 })\n\n          Scroll(this.scroller2) { // 内部滚动容器\n            Column() {\n              Text(\"Scroll Area2\")\n                .width('90%')\n                .height(150)\n                .backgroundColor(0xFFFFFF)\n                .borderRadius(15)\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .margin({ top: 10 })\n\n              Column() {\n                ForEach(this.arr, (item: number) => {\n                  Text(item.toString())\n                    .width('90%')\n                    .height(150)\n                    .backgroundColor(0xFFFFFF)\n                    .borderRadius(15)\n                    .fontSize(16)\n                    .textAlign(TextAlign.Center)\n                    .margin({ top: 10 })\n                }, (item: string) => item)\n              }.width('100%')\n            }\n          }\n          .id(\"inner\")\n          .width('100%')\n          .height(800)\n          .onTouch((event) => {\n            if (event.type === TouchType.Down) {\n              this.innerState = \"TOUCHING\";\n              this.willCancel = false;\n            } else if (event.type === TouchType.Up || event.type === TouchType.Cancel) {\n              if (this.willCancel) {\n                this.innerState = \"CANCELLED\";\n                setTimeout(() => {\n                  this.innerState = \"IDLE\";\n                  this.willCancel = false;\n                }, 1000);\n              } else {\n                this.innerState = \"IDLE\";\n              }\n            }\n          })\n        }.width('100%')\n      }\n      .id(\"outer\")\n      .height('100%')\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n      .edgeEffect(EdgeEffect.None)\n      .shouldBuiltInRecognizerParallelWith((current: GestureRecognizer, others: Array<GestureRecognizer>) => {\n        for (let i = 0; i < others.length; i++) {\n          let target = others[i].getEventTargetInfo();\n          if (target) {\n            if (target.getId() == \"inner\" && others[i].isBuiltIn() &&\n              others[i].getType() == GestureControl.GestureType.PAN_GESTURE) { // 找到将要组成并行手势的识别器\n              this.currentRecognizer = current; // 保存当前组件的识别器\n              this.childRecognizer = others[i]; // 保存将要组成并行手势的识别器\n              return others[i]; // 返回将要组成并行手势的识别器\n            }\n          }\n        }\n        return undefined;\n      })\n      .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n        others: Array<GestureRecognizer>,\n        touchRecognizers?: Array<TouchRecognizer>) => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n        if (current && touchRecognizers) {\n          let target = current.getEventTargetInfo();\n          if (target) {\n            if (target.getId() == \"outer\" && current.isBuiltIn() &&\n              current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n              return GestureJudgeResult.CONTINUE\n            }\n            for (let index = 0; index < touchRecognizers.length; index++) {\n              const element = touchRecognizers![index];\n              let touchTarget = element.getEventTargetInfo()\n              if (touchTarget && touchTarget.getId() == \"inner\") {\n                this.willCancel = true;\n                element.cancelTouch();\n              }\n            }\n          }\n        }\n        return GestureJudgeResult.CONTINUE;\n      })\n      .onTouch((event) => {\n        if (event.type === TouchType.Down) {\n          this.outerState = \"TOUCHING\";\n        } else if (event.type === TouchType.Up || event.type === TouchType.Cancel) {\n          this.outerState = \"IDLE\";\n        }\n      })\n      .parallelGesture( // 绑定一个Pan手势作为动态控制器\n        PanGesture()\n          .onActionUpdate((event: GestureEvent) => {\n            if (this.childRecognizer.getState() != GestureRecognizerState.SUCCESSFUL ||\n              this.currentRecognizer.getState() != GestureRecognizerState.SUCCESSFUL) { // 如果识别器状态不是SUCCESSFUL，则不做控制\n              return;\n            }\n            let target = this.childRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            let currentTarget = this.currentRecognizer.getEventTargetInfo() as ScrollableTargetInfo;\n            if (target instanceof ScrollableTargetInfo && currentTarget instanceof ScrollableTargetInfo) {\n              if (target.isEnd()) { // 在移动过程中实时根据当前组件状态，控制识别器的开闭状态\n                if ((event.offsetY - this.lastOffset) < 0) {\n                  this.childRecognizer.setEnabled(false)\n                  if (currentTarget.isEnd()) {\n                    this.currentRecognizer.setEnabled(false)\n                  } else {\n                    this.currentRecognizer.setEnabled(true)\n                  }\n                } else {\n                  this.childRecognizer.setEnabled(true)\n                  this.currentRecognizer.setEnabled(false)\n                }\n              } else if (target.isBegin()) {\n                if ((event.offsetY - this.lastOffset) > 0) {\n                  this.childRecognizer.setEnabled(false)\n                  if (currentTarget.isBegin()) {\n                    this.currentRecognizer.setEnabled(false)\n                  } else {\n                    this.currentRecognizer.setEnabled(true)\n                  }\n                } else {\n                  this.childRecognizer.setEnabled(true)\n                  this.currentRecognizer.setEnabled(false)\n                }\n              } else {\n                this.childRecognizer.setEnabled(true)\n                this.currentRecognizer.setEnabled(false)\n              }\n            }\n            this.lastOffset = event.offsetY\n          })\n      )\n\n      Column() { // 外层状态显示\n        Text(`outer: ${this.outerState}`)\n          .fontSize(24)\n          .fontColor(this.outerState === \"TOUCHING\" ? Color.Green : Color.Gray)\n          .margin({ bottom: 10 })\n        // 内层状态显示\n        Text(`inner: ${this.innerState === \"TOUCHING\" ? \"TOUCHING\" : this.innerState}`)\n          .fontSize(24)\n          .fontColor(\n            this.innerState === \"TOUCHING\" ? Color.Blue :\n              this.innerState === \"CANCELLED\" ? Color.Red : Color.Gray\n          )\n      }\n      .width('90%')\n      .backgroundColor(Color.White)\n      .border({ width: 1, color: Color.Gray })\n      .position({ x: '5%', y: '80%' })\n      .padding(20)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(799601)/* ["default"] */.A) + "",
        width: "506",
        height: "756"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5自定义手势识别器是否参与手势处理",
      children: "示例5（自定义手势识别器是否参与手势处理）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontouchtestdone20",
        children: "onTouchTestDone"
      }), "指定手势识别器不参与后续手势处理，触发回调时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#preventbegin20",
        children: "preventBegin"
      }), "阻止手势识别器参与后续处理。点击Tap2和Tap1的重合区域，不调用preventBegin时，触发Tap2对应的手势；调用preventBegin阻止Tap2时，触发Tap1对应的手势。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TouchTestDoneExample {\n  @State tagList: string[] = ['Null', 'Tap1', 'Tap2', 'Tap3', 'Tap4'];\n  @State tagId: number = 0;\n  @State textValue: string = '';\n\n  // 多层嵌套场景，为每一层的组件绑定一个Tap手势\n  build() {\n    Column() {\n      Column() {\n        Text('Tap1')\n          .margin(20)\n        Column() {\n          Text('Tap2')\n            .margin(20)\n          Column() {\n            Text('Tap3')\n              .margin(20)\n            Column() {\n              Text('Tap4')\n                .margin(20)\n            }\n            .backgroundColor('#D5D5D5')\n            .width('80%')\n            .height('80%')\n            .gesture(TapGesture().tag('Tap4').onAction(() => {\n              this.textValue = 'Tap4';\n            }))\n          }\n          .backgroundColor('#F7F7F7')\n          .width('80%')\n          .height('80%')\n          .gesture(TapGesture().tag('Tap3').onAction(() => {\n            this.textValue = 'Tap3';\n          }))\n        }\n        .backgroundColor('#707070')\n        .width('80%')\n        .height('80%')\n        .gesture(TapGesture().tag('Tap2').onAction(() => {\n          this.textValue = 'Tap2';\n        }))\n      }\n      .backgroundColor('#D5D5D5')\n      .width('80%')\n      .height('80%')\n      .gesture(TapGesture().tag('Tap1').onAction(() => {\n        this.textValue = 'Tap1';\n      }))\n      // 绑定onTouchTestDone，通过调用手势识别器的preventBegin()方法来自定义手势识别器是否参与后续手势处理\n      .onTouchTestDone((event, recognizers) => {\n        console.info(`event is ${JSON.stringify(event)}`);\n        for (let i = 0; i < recognizers.length; i++) {\n          let recognizer = recognizers[i];\n          console.info(`type is ${JSON.stringify(recognizer.getType())}`)\n          // 根据tag的值屏蔽不同的手势识别器\n          if (recognizer.getTag() == this.tagList[this.tagId]) {\n            recognizer.preventBegin();\n          }\n        }\n      })\n\n      Text('Current Gesture: ' + this.textValue)\n        .margin(5)\n\n      Button('Click to change preventGesture')\n        .margin(5)\n        .onClick(() => {\n          this.tagId++;\n          this.tagId %= 5;\n        })\n      Text('Current prevent gesture tag: ' + this.tagList[this.tagId])\n        .margin(5)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506384)/* ["default"] */.A) + "",
        width: "365",
        height: "621"
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
797517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439633-c8bfdaff4c50ab1e46f33cb48b27c1f5.gif");

},
506384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439635-0d623d6335f840d40dd39da88664a403.gif");

},
420623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
799601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799940-1e256bdfe92fc20db47ea500b410d160.gif");

},
276691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479589-32a0557e92929b816ccffcc7efa8a985.gif");

},
517094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959588-070853ef0540db9b12b6507161191bbd.gif");

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