"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29515"], {
884156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_interaction_basic_principles_arkts_interaction_basic_principles_md_915_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-arkts-interaction-basic-principles-arkts-interaction-basic-principles-md-915.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_interaction_basic_principles_arkts_interaction_basic_principles_md_915_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/arkts-interaction-basic-principles","title":"交互基础机制说明","description":"对于触摸事件、鼠标事件、轴事件等指向性事件的交互，交互框架基于坐标信息进行命中测试确定事件和手势的响应目标，即收集形成响应链，系统会根据触控事件的坐标、类型等信息，结合UI布局，将事件发送给对应UI组件。多个事件可以组合触发手势或其他功能，如长按、点击、拖拽。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/arkts-interaction-basic-principles.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"交互基础机制说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-basic-principles","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"交互响应概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/"},"next":{"title":"支持触屏输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/arkts-interaction-basic-principles.md


const frontMatter = {
	title: '交互基础机制说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-basic-principles',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '交互基础机制说明';

const assets = {

};



const toc = [{
  "value": "事件交互流程",
  "id": "事件交互流程",
  "level": 2
}, {
  "value": "事件响应链",
  "id": "事件响应链",
  "level": 2
}, {
  "value": "触摸测试",
  "id": "触摸测试",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "干预命中",
  "id": "干预命中",
  "level": 3
}, {
  "value": "禁用控制",
  "id": "禁用控制",
  "level": 2
}, {
  "value": "安全组件",
  "id": "安全组件",
  "level": 2
}, {
  "value": "事件冒泡",
  "id": "事件冒泡",
  "level": 2
}, {
  "value": "Cancel事件",
  "id": "cancel事件",
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
        id: "交互基础机制说明",
        children: "交互基础机制说明"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key",
        children: "鼠标事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis",
        children: "轴事件"
      }), "等指向性事件的交互，交互框架基于坐标信息进行命中测试确定事件和手势的响应目标，即收集形成响应链，系统会根据触控事件的坐标、类型等信息，结合UI布局，将事件发送给对应UI组件。多个事件可以组合触发手势或其他功能，如长按、点击、拖拽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件交互流程",
      children: "事件交互流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件交互流程是指当ArkUI接收上游发送的Touch类触控事件或Mouse类触控事件后，根据开发者设定的各类参数，收集事件响应链并分发至各组件以触发回调的整个过程。该流程可以概括为以下三个步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件产生"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "硬件输入设备通过驱动、多模等模块，将事件上报至目标的ArkUI实例。ArkUI在渲染管线中进行统一处理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "收集事件响应链并分发事件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件响应链是事件交互流程的核心，管线在接收事件后，将通过触摸测试建立事件响应链，通过响应链决策事件分发以及手势合成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）触摸测试"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当管线接收到起始触控事件后，将根据起始触控事件的坐标和组件位置进行触摸测试，最终建立事件响应链。开发者可以通过设置属性影响事件响应链的形成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）分发事件至Touch事件响应链"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建事件响应链后，触控事件将根据Touch事件响应链分发至目标组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）分发事件至手势响应链并进行手势识别"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各组件上设置的手势在通过触摸测试后，还会形成手势响应链。触控事件送入手势响应链后会与其它事件组合产生手势，手势之间再经过竞争，最终触发符合条件的手势回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（4）事件拦截"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件响应链建立前，开发者可以配置触摸测试属性从而影响到事件响应链的形成。当事件响应链建立后，开发者可以通过设置接口实现事件拦截，从而改变事件分发的流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当分发事件至Touch事件响应链时，开发者可以通过设置触摸事件拦截，防止触摸事件继续传递给响应链的后续节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当分发事件至手势响应链时，开发者可以通过设置手势拦截阻止手势响应。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在收集事件响应链时，开发者绑定的回调函数将被同步收集。完成事件响应链的收集及事件分发后，符合触发条件的事件和手势对应的回调函数将被触发。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件响应链",
      children: "事件响应链"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI事件响应链通过触摸测试进行收集，遵循右子树（按组件布局的先后层级）优先的后序遍历。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件响应链收集举例：按下图的组件树，hitTestBehavior属性均为默认，用户点按的动作如果发生在组件5上，则最终收集到的响应链，以及先后关系是5，3，1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为组件3的hitTestBehavior属性为Default，收集到事件后会阻塞兄弟节点，所以没有收集组件1的左子树。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(300119)/* ["default"] */.A) + "",
        width: "337",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触摸测试",
      children: "触摸测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸测试即touch test，也称为命中测试（hit test），是在用户交互开始前，系统确定哪些组件上的事件或手势能够参与此次交互响应的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于指向性基础事件的派发，系统不会直接从页面根节点递归遍历所有组件节点，而是在首次事件发生时确定能够响应此次交互的组件范围，即识别用户点击的组件。对于未被点击的组件，在此次交互中将不会有任何响应。这一过程称为命中测试（hit test/touch test）。系统依据组件响应热区是否包含事件坐标来判定是否被点击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(843812)/* ["default"] */.A) + "",
        width: "600",
        height: "721"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户触发按下事件时，系统将自上而下、自右向左遍历组件树，收集每个组件上绑定的手势和事件，然后将这些信息逐级向上冒泡至父组件进行整合，最终构建完整的事件响应链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设T点为用户按下的位置（Touch Down），则A、B、D组件将被判定为命中，这些组件组成的链条被称为本次交互的响应链。基础事件将在该响应链上进行传递，首先传递给叶子节点，随后传递给父节点，逐层向上传递，这一过程称为事件冒泡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是描述命中测试过程的流程图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995127)/* ["default"] */.A) + "",
        width: "838",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，当起始事件被分发至组件时，组件会收集自身绑定的手势与事件，随后将收集结果传递给父组件，直至达到根节点。若组件透明、已从组件树中移除，或事件坐标不在组件响应热区范围内，将不会触发收集过程，父组件接收的反馈为空。除此之外，所有组件均会执行手势与事件的收集，并将结果反馈给父组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "干预命中",
      children: "干预命中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过以下几种方式对命中结果进行干预，从而影响最终的响应范围，即控制哪些组件能够被收集到。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "干预方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸热区设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件能够响应用户交互的热区范围。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#responseregion",
              children: "responseRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.热区会被用来识别用户手指落下的位置是否在热区范围内，只有在范围内的才会被收集；  2. 热区也会影响一些手势的判定，比如点击，只有当在热区范围抬手时才会被触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸热区设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件能够响应鼠标交互的热区范围。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#mouseresponseregion10",
              children: "mouseResponseRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置一个或多个鼠标触摸热区。功能与responseRegion类似，但仅对鼠标事件生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸热区设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件的触摸热区列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#responseregionlist22",
              children: "responseRegionList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件的触摸热区列表，可指定每个热区适用的输入工具类型（如鼠标、触摸等）。调用该接口时，responseRegion与mouseResponseRegion接口不再生效。从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触摸测试控制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "干预自身及其他组件收集结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
              children: "hitTestBehavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与onTouchIntercept效果相同，但是hitTestBehavior是静态配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义事件拦截"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "干预自身及其他组件收集结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/event-dispatch-control/ts-universal-attributes-on-touch-intercept/ts-universal-attributes-on-touch-intercept#ontouchintercept",
              children: "onTouchIntercept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户触发按下事件时，系统开始收集当前位置下所有需要参与事件处理的组件时触发，应用可通过该回调返回一个HitTestMode值，进而影响系统收集子节点或兄弟节点的行为。可以通过该回调达到动态控制交互响应的效果，如某些组件，根据业务状态的变化，可能有时候需要参与交互，有时候不需要参与交互。  与hitTestBehavior效果相同，但是onTouchIntercept是动态回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触摸热区设置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认情况下，组件的响应热区即为组件自身的位置和大小，这与用户看到的范围相一致，从而最大程度地保证用户操作的手眼一致性。在极少数情况下，应用需调整热区大小以限制或扩大组件响应的操作范围。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI提供了以下三个接口来设置组件的触摸热区："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "responseRegion"
              })
            }), "：设置一个或多个触摸热区，适用于所有输入设备类型（如触摸、鼠标等）。从API version 8开始支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "mouseResponseRegion"
              })
            }), "：设置一个或多个鼠标触摸热区，仅对鼠标事件生效。从API version 10开始支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "responseRegionList"
              })
            }), "：设置组件的触摸热区列表，可为每个热区指定适用的输入工具类型。调用该接口时，responseRegion与mouseResponseRegion接口不再生效。从API version 22开始支持。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应热区影响指向性事件的派发，通过与组件自身区域的相对关系进行指定，可以指定一个或多个区域，将组件的响应热区分割为多个部分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(606936)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "x和y可以设置正负值百分比。当x设置为'100%'时表示热区往右偏移组件本身宽度大小，当x设置为'-100%'时表示热区往左偏移组件本身宽度大小。当y设置为'100%'时表示热区往下偏移组件本身高度大小，当y设置为'-100%'时表示热区往上偏移组件本身高度大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "width和height只能设置正值百分比。width：'100%'表示热区宽度设置为该组件本身的宽度。比如组件本身宽度是100vp，那么'100%'表示热区宽度也为100vp。height：'100%'表示热区高度设置为该组件本身的高度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "百分比相对于组件自身宽高进行计算。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下是一个绑定多个热区范围的示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct FocusOnclickExample {\n  @State text: string = '';\n  @State number: number = 0;\n\n  build() {\n    Column() {\n      Text(this.text)\n        .margin({ bottom: 20 })\n      // 请将$r('app.string.button')替换为实际资源文件，在本示例中该资源文件的value值为\"按钮\"\n      Button($r('app.string.button'))\n        .responseRegion([\n          {\n            x: 0,\n            y: 0,\n            width: '30%',\n            height: '100%'\n          }, // 第一个热区为按钮的左侧1/3区域\n          {\n            x: '70%',\n            y: 0,\n            width: '30%',\n            height: '100%'\n          },// 第二个热区为按钮的右侧1/3区域\n        ])\n        .onClick(() => {\n          this.number++;\n          this.text = 'button' + this.number + 'clicked';\n        })\n        .width(200)\n    }.width('100%').justifyContent(FlexAlign.Center)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上面的代码可以将按钮切分成了3部分，中间40%的区域不响应点击，而两侧的剩下部分可响应。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(894933)/* ["default"] */.A) + "",
            width: "1070",
            height: "528"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触摸测试控制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在组件上绑定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior",
            children: "触摸测试控制"
          }), "时，可能影响兄弟节点和父子节点的触摸测试。子组件对父组件的触摸测试影响程度取决于最后一个未被阻塞触摸测试的子组件状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过配置触摸测试控制，来实现阻塞组件自身或其他组件的触摸测试。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.Default：默认不配hitTestBehavior属性，自身如果命中会阻塞兄弟组件，但是不阻塞子组件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(17995)/* ["default"] */.A) + "",
                width: "330",
                height: "460"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.None：自身不接收事件，但不会阻塞兄弟组件或子组件继续做触摸测试。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(663328)/* ["default"] */.A) + "",
                width: "175",
                height: "330"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.Block：阻塞子组件的触摸测试，如果自身触摸测试命中，会阻塞兄弟组件及父组件的触摸测试。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(642029)/* ["default"] */.A) + "",
                width: "320",
                height: "524"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.Transparent：自身进行触摸测试，同时不阻塞兄弟组件及父组件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(20968)/* ["default"] */.A) + "",
                width: "179",
                height: "415"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.BLOCK_HIERARCHY（从API version 20开始支持）: 自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(953683)/* ["default"] */.A) + "",
                width: "200",
                height: "327"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HitTestMode.BLOCK_DESCENDANTS（从API version 20开始支持）: 自身不响应触摸测试，并且所有的后代（孩子，孙子等）也不响应触摸测试，不会影响祖先节点的触摸测试。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(899925)/* ["default"] */.A) + "",
                width: "198",
                height: "243"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义事件拦截"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当用户执行按下操作时，将触发组件上绑定的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/event-dispatch-control/ts-universal-attributes-on-touch-intercept/ts-universal-attributes-on-touch-intercept",
            children: "自定义事件拦截"
          }), "的回调。开发者可根据应用状态，动态调整组件的hitTestBehavior属性，进而影响触控测试的流程。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁用控制",
      children: "禁用控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable",
        children: "禁用控制"
      }), "的组件及其子组件不会发起触摸测试过程，而是直接返回组件的父组件继续触摸测试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全组件",
      children: "安全组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI包含的安全组件有：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/security-components/pastebutton",
        children: "使用粘贴控件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/security-components/savebutton",
        children: "使用保存控件"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安全组件当前对触摸测试影响：如果有组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order",
        children: "z序"
      }), "比安全组件的z序靠前，且遮盖安全组件，则安全组件事件直接返回到父节点继续触摸测试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件冒泡",
      children: "事件冒泡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础事件在响应链上的传递遵循冒泡机制，即最内层组件优先处理，再逐层往父组件传递该事件，任意一层组件可主动终止本次事件的继续传递，即终止冒泡。但需要注意的是，终止冒泡并不会中断父组件对手势的响应处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopPropagation可终止冒泡。如下图所示，以Touch事件为例，当一个Touch事件传递至C节点时，如果调用了该事件上的stopPropagation接口，则B节点和root节点将不再接收到此事件，但B节点上的手势对象仍能接收和处理该Touch事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25111)/* ["default"] */.A) + "",
        width: "622",
        height: "659"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224802)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopPropagation干预事件冒泡时，应注意对同一事件的不同类型（如Down/Move/Up）采用一致的规则，避免上层节点仅接收到部分类型事件，导致事件不闭环的情况，例如B节点仅接收到Down事件，而未接收到Up事件，这会影响B节点上的事件完整性（对于指向性按下操作类交互产生的事件，确保事件的完整性是必要的）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancel事件",
      children: "Cancel事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当处理基础事件时，会发现存在多种具有Cancel类型的事件，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#touchtype",
        children: "TouchType"
      }), ".Cancel、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#mouseaction8",
        children: "MouseAction"
      }), ".CANCEL等。系统在特定场景下发送此类事件，例如在拖拽操作中，当通过手指或鼠标拖动一个支持拖拽（onDragStart）的对象时，由于拖拽动作需达到一定位移阈值才能触发，因此在触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "之前，应用将正常接收到Touch或Mouse事件。一旦拖拽动作开始，系统将发送Cancel事件，告知应用普通基础事件已结束。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cancel的含义与Up相同，均表示事件处理结束。若在处理Up/Release的场景中，亦应同时处理Cancel。"
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
663328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
995127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477939-b25849ad610591f41ee52afbc5843a4e.png");

},
20968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
224802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
953683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437987-c6202acbd06123de7f46a11b4729d30d.png");

},
300119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437983-5848b3da25d75bb29a11b170c3032a3b.png");

},
899925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957942-f021d592b8d8aebeb63809565ebdc713.png");

},
606936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
843812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957938-4940ca1d687535bf67db9cfeed63ddcf.png");

},
894933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798290-a0753b3e5a592374591af86993ba3a28.png");

},
642029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477941-4c9c161c91f67673e07df17d009cf043.png");

},
25111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477943-ee978a90531146be7ea6906215607835.png");

},
17995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437985-e688b163c4076fa9b3292f47999124ff.png");

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