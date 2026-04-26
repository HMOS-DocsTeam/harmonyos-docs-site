"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["7257"], {
863274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_common_events_drag_event_arkts_common_events_drag_event_md_549_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-arkts-common-events-drag-event-arkts-common-events-drag-event-md-549.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_common_events_drag_event_arkts_common_events_drag_event_md_549_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/arkts-common-events-drag-event","title":"支持统一拖拽","description":"统一拖拽提供了一种通过鼠标或手势触屏传递数据的机制，即从一个组件位置拖出（drag）数据并将其拖入（drop）到另一个组件位置，以触发响应。在这一过程中，拖出方提供数据，而拖入方负责接收和处理数据。这一操作使用户能够便捷地移动、复制或删除指定内容。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/arkts-common-events-drag-event.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"支持统一拖拽","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-drag-event","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手势冲突处理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/"},"next":{"title":"支持焦点处理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event/arkts-common-events-drag-event.md


const frontMatter = {
	title: '支持统一拖拽',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-drag-event',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持统一拖拽';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "拖拽方式",
  "id": "拖拽方式",
  "level": 2
}, {
  "value": "​手势拖拽",
  "id": "手势拖拽",
  "level": 3
}, {
  "value": "​鼠标拖拽",
  "id": "鼠标拖拽",
  "level": 3
}, {
  "value": "拖拽回调",
  "id": "拖拽回调",
  "level": 2
}, {
  "value": "拖拽事件",
  "id": "拖拽事件",
  "level": 2
}, {
  "value": "拖拽背板图",
  "id": "拖拽背板图",
  "level": 2
}, {
  "value": "使用拖拽能力",
  "id": "使用拖拽能力",
  "level": 2
}, {
  "value": "通用拖拽适配",
  "id": "通用拖拽适配",
  "level": 3
}, {
  "value": "多选拖拽适配",
  "id": "多选拖拽适配",
  "level": 3
}, {
  "value": "适配自定义落位动效",
  "id": "适配自定义落位动效",
  "level": 3
}, {
  "value": "处理大批量数据",
  "id": "处理大批量数据",
  "level": 3
}, {
  "value": "支持悬停检测",
  "id": "支持悬停检测",
  "level": 2
}, {
  "value": "触发原理",
  "id": "触发原理",
  "level": 3
}, {
  "value": "触发自定义",
  "id": "触发自定义",
  "level": 3
}, {
  "value": "实现示例",
  "id": "实现示例",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "支持统一拖拽",
        children: "支持统一拖拽"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一拖拽提供了一种通过鼠标或手势触屏传递数据的机制，即从一个组件位置拖出（drag）数据并将其拖入（drop）到另一个组件位置，以触发响应。在这一过程中，拖出方提供数据，而拖入方负责接收和处理数据。这一操作使用户能够便捷地移动、复制或删除指定内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖拽操作：在可响应拖出的组件上长按并滑动以触发拖拽行为，当用户释放手指或鼠标时，拖拽操作即告结束。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["拖拽背景（背板）：用户拖动数据时的形象化表示。开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
          children: "onDragStart"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
          children: "CustomBuilder"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
          children: "DragItemInfo"
        }), "进行设置，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#dragpreview11",
          children: "dragPreview"
        }), "通用属性进行自定义。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["拖拽内容：被拖动的数据，使用UDMF统一API ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddata",
          children: "UnifiedData"
        }), " 进行封装，确保数据的一致性和安全性。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖出对象：触发拖拽操作并提供数据的组件，通常具有响应拖拽的特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖入目标：可接收并处理拖动数据的组件，能够根据拖入的数据执行相应的操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖拽点：鼠标或手指与屏幕的接触位置，用于判断是否进入组件范围。判定依据是接触点是否位于组件的范围内。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拖拽方式",
      children: "拖拽方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽方式包含手势拖拽和鼠标拖拽，有助于开发者理解回调事件触发的时机。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手势拖拽",
      children: "​手势拖拽"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在手势长按触发拖拽的场景中，ArkUI在发起拖拽前会校验当前组件是否具备拖拽功能。若为默认支持拖出能力的组件（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
        children: "Hyperlink"
      }), "），需要判断是否设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#draggable",
        children: "draggable"
      }), "为true。其他组件则需额外确认是否已设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "回调函数。在满足上述条件后，长按时间达到或超过500ms即可触发拖拽，而长按800ms时，系统开始执行预览图的浮起动效。若与Menu功能结合使用，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
        children: "bindMenu"
      }), "中通过isShow控制其显示与隐藏，建议避免在用户操作800ms后才控制菜单显示，此举可能引发非预期的行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势拖拽（手指/手写笔）触发拖拽流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(142426)/* ["default"] */.A) + "",
        width: "623",
        height: "584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标拖拽",
      children: "​鼠标拖拽"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标拖拽操作遵循即拖即走的模式，当鼠标左键在可拖拽的组件上按下并移动超过1vp时，即可触发拖拽功能。鼠标拖拽的其他流程与手势拖拽流程相似，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%8B%E5%8A%BF%E6%8B%96%E6%8B%BD",
        children: "手势拖拽"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拖拽回调",
      children: "拖拽回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前不仅支持应用内部的拖拽，还支持跨应用的拖拽操作。为了帮助开发者更好地感知拖拽状态并调整系统默认的拖拽行为，ArkUI提供了多个回调事件，具体详情如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "回调事件"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
              children: "onDragStart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖出的组件产生拖出动作时，该回调触发。  该回调可以感知拖拽行为的发起，开发者可以在onDragStart方法中设置拖拽过程中传递的数据，并自定义拖拽的背板图像。建议开发者采用pixelmap的方式来返回背板图像，避免使用customBuilder，因为后者可能会带来额外的性能开销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragenter",
              children: "onDragEnter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽操作的拖拽点进入组件的范围时，如果该组件监听了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondrop",
              children: "onDrop"
            }), "事件，此回调将会被触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragmove",
              children: "onDragMove"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽点在组件范围内移动时，如果该组件监听了onDrop事件，此回调将会被触发。  在这一过程中，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
              children: "DragEvent"
            }), "中的setResult方法来影响系统在部分场景下的外观表现：  1. 设置DragResult.DROP_ENABLED，组件允许落入。  2. 设置DragResult.DROP_DISABLED，组件不允许落入。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragleave",
              children: "onDragLeave"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽点移出组件范围时，如果该组件监听了onDrop事件，此回调将会被触发。  在以下两种情况下，系统默认不会触发onDragLeave事件：  1. 父组件移动到子组件。  2. 目标组件与当前组件布局有重叠。  API version 12开始可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            }), "中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller#setdrageventstrictreportingenabled12",
              children: "setDragEventStrictReportingEnabled"
            }), "方法严格触发onDragLeave事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondrop",
              children: "onDrop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户在组件范围内释放拖拽操作时，此回调会被触发。开发者需在此回调中通过DragEvent的setResult方法来设置拖拽结果，否则在拖出方组件的onDragEnd方法中，通过getResult方法获取的将只是默认的处理结果DragResult.DRAG_FAILED。  此回调是开发者干预系统默认拖入处理行为的关键点，系统会优先执行开发者定义的onDrop回调。通过在onDrop回调中调用setResult方法，开发者可以告知系统如何处理被拖拽的数据。  1. 设置 DragResult.DRAG_SUCCESSFUL，数据完全由开发者自己处理，系统不进行处理。  2. 设置DragResult.DRAG_FAILED，数据不再由系统继续处理。  3. 设置DragResult.DRAG_CANCELED，系统也不需要进行数据处理。  4. 设置DragResult.DROP_ENABLED或DragResult.DROP_DISABLED会被忽略，等同于设置DragResult.DRAG_SUCCESSFUL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragend10",
              children: "onDragEnd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户释放拖拽时，拖拽活动终止，发起拖出动作的组件将触发该回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#onpredrag12",
              children: "onPreDrag"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当触发拖拽事件的不同阶段时，绑定此事件的组件会触发该回调函数。  开发者可利用此方法，在拖拽开始前的不同阶段，根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#predragstatus12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PreDragStatus"
            }), "枚举准备相应数据。  1. ACTION_DETECTING_STATUS：拖拽手势启动阶段。按下50ms时触发。  2. READY_TO_TRIGGER_DRAG_ACTION：拖拽准备完成，可发起拖拽阶段。按下500ms时触发。  3. PREVIEW_LIFT_STARTED：拖拽浮起动效发起阶段。按下800ms时触发。  4. PREVIEW_LIFT_FINISHED：拖拽浮起动效结束阶段。浮起动效完全结束时触发。  5. PREVIEW_LANDING_STARTED：拖拽落回动效发起阶段。落回动效发起时触发。  6. PREVIEW_LANDING_FINISHED：拖拽落回动效结束阶段。落回动效结束时触发。  7. ACTION_CANCELED_BEFORE_DRAG：拖拽浮起落位动效中断。已满足READY_TO_TRIGGER_DRAG_ACTION状态后，未达到动效阶段，手指抬起时触发。  8. PREPARING_FOR_DRAG_DETECTION18+：拖拽准备完成，可发起拖拽阶段。按下350ms时触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragspringloading20",
              children: "onDragSpringLoading"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽对象悬停在绑定此事件的组件上时，触发回调通知。此时只有一个目标可以成为响应方，并且子组件始终具有更高的响应优先级。  开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#springloadingcontext20",
              children: "SpringLoadingContext"
            }), "配置回调的上下文信息，包括当前悬停检测的状态、一次悬停检测中的回调通知次数、拖拽信息和配置信息等。  从API version 20开始，支持调用该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拖拽事件",
      children: "拖拽事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽回调函数可以接收", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
        children: "DragEvent"
      }), "对象。通过该对象发出拖拽事件，其中包含了拖拽行为的详细信息，以及拖出时组件向系统提供的数据等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
        children: "DragEvent"
      }), "支持的get方法可以获取拖拽行为的详细信息。下表展示了在相应的拖拽回调中，这些get方法是否能够返回有效数据。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回调事件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragStart"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragEnter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragMove"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragLeave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDrop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragEnd"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getSummary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getPreviewRect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getVelocity/X/Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getWindowX/Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDisplayX/Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getX/Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getModifierKeyState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startDataLoading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDisplayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDragSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isRemote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getGlobalDisplayX/Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
        children: "DragEvent"
      }), "支持相关set方法向系统传递信息，这些信息部分会影响系统对UI或数据的处理方式。下表列出了set方法应该在回调的哪个阶段执行才会被系统接收并处理。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回调事件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragStart"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragEnter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragMove"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDragLeave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "onDrop"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useCustomDropAnimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，可通过set failed或cancel来阻止拖拽发起"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，不作为最终结果传递给onDragEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，不作为最终结果传递给onDragEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，不作为最终结果传递给onDragEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，作为最终结果传递给onDragEnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setDataLoadParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拖拽背板图",
      children: "拖拽背板图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在拖拽移动过程中显示的背板图并非组件本身，而是表示用户拖动的数据，开发者可将其设定为任意可显示的图像。具体而言，onDragStart回调中返回的customBuilder或pixelmap可以用于设置拖拽移动过程中的背板图，而浮起图则默认采用组件本身的截图。dragpreview属性中设定的customBuilder或pixelmap可以用于配置浮起和拖拽过程的背板图。若开发者未配置背板图，系统将自动采用组件本身的截图作为拖拽和浮起时的背板图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽背板图当前支持设置透明度、圆角、阴影和模糊，具体用法见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop",
        children: "拖拽控制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(933376)/* ["default"] */.A) + "",
        width: "480",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于容器组件，如果内部内容通过position、offset等接口使得绘制区域超出了容器组件范围，则系统截图无法截取到范围之外的内容。此种情况下，如果一定要浮起，即拖拽背板能够包含范围之外的内容，则可考虑通过扩大容器范围或自定义方式实现。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不论是使用自定义builder或是系统默认截图方式，截图都暂时无法应用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#rotate",
          children: "rotate"
        }), "等图形变换效果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用拖拽能力",
      children: "使用拖拽能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用拖拽适配",
      children: "通用拖拽适配"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件为例，介绍组件拖拽开发的基本步骤，以及开发中需要注意的事项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件使能拖拽。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置draggable属性为true，并配置onDragStart回调函数。在回调函数中，可通过UDMF（用户数据管理框架）设置拖拽的数据，并返回自定义的拖拽背景图像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.media.app_icon')替换为实际资源文件\nImage($r('app.media.app_icon'))\n  .width(100)\n  .height(100)\n  .draggable(true)\n  // ...\n  .onDragStart((event) => {\n    let data: unifiedDataChannel.Image = new unifiedDataChannel.Image();\n    // 'resources/base/media/app_icon.png'需要替换为开发者所需的图像资源文件\n    data.imageUri = 'resources/base/media/app_icon.png';\n    let unifiedData = new unifiedDataChannel.UnifiedData(data);\n    event.setData(unifiedData);\n\n    let dragItemInfo: DragItemInfo = {\n      pixelMap: this.pixmap,\n      extraInfo: 'this is extraInfo',\n    };\n    // onDragStart回调函数中返回自定义拖拽背板图\n    return dragItemInfo;\n  })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手势场景触发的拖拽功能依赖于底层绑定的长按手势。如果开发者在可拖拽组件上也绑定了长按手势，这将与底层的长按手势产生冲突，进而导致拖拽操作失败。为解决此类问题，可以采用并行手势的方案，具体如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".parallelGesture(LongPressGesture().onAction(() => {\n  this.getUIContext()\n    .getPromptAction()\n    .showToast({ duration: 100, message: 'Long press gesture trigger' });\n}))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义拖拽背板图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过在长按50ms时触发的回调中设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#onpredrag12",
            children: "onPreDrag"
          }), "回调函数，来提前准备自定义拖拽背板图的pixmap。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onPreDrag((preDragStatus: PreDragStatus) => {\n  if (preDragStatus == PreDragStatus.ACTION_DETECTING_STATUS) {\n    this.getComponentSnapshot();\n  }\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["pixmap的生成可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#createfrombuilder12",
            children: "this.getUIContext().getComponentSnapshot().createFromBuilder()"
          }), "来实现。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = 'DefaultDragError: ';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\npixelMapBuilder() {\n  Column() {\n    // 请将$r('app.media.startIcon')替换为实际资源文件\n    Image($r('app.media.startIcon'))\n      .width(120)\n      .height(120)\n      // ...\n  }\n}\n\n// ...\n// 调用componentSnapshot中的createFromBuilder接口截取自定义builder的截图\nprivate getComponentSnapshot(): void {\n  this.getUIContext().getComponentSnapshot().createFromBuilder(() => {\n    this.pixelMapBuilder();\n  },\n    (error: Error, pixmap: image.PixelMap) => {\n      if (error) {\n        hilog.error(DOMAIN, TAG, '%{public}s', JSON.stringify(error));\n        return;\n      }\n      this.pixmap = pixmap;\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若开发者需确保触发", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragleave",
            children: "onDragLeave"
          }), "事件，应通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller#setdrageventstrictreportingenabled12",
            children: "setDragEventStrictReportingEnabled"
          }), "方法进行设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ···\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n      windowStage.getMainWindow((err, data) => {\n        if (err.code) {\n          return;\n        }\n        let windowClass: window.Window = data;\n        let uiContext: UIContext = windowClass.getUIContext();\n        uiContext.getDragController().setDragEventStrictReportingEnabled(true);\n      });\n    });\n  }\n  // ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽过程显示角标样式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#allowdrop",
            children: "allowDrop"
          }), "来定义接收的数据类型，这将影响角标显示。当拖拽的数据符合定义的允许落入的数据类型时，角标会显示加号。当拖拽的数据类型不在允许范围内时，可强制设置为显示禁用角标。若未设置allowDrop，则角标不会显示加号。以下代码示例表示仅接收UnifiedData中定义的HYPERLINK和PLAIN_TEXT类型数据，其他类型数据将被禁止落入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".allowDrop([uniformTypeDescriptor.UniformDataType.HYPERLINK,\n  uniformTypeDescriptor.UniformDataType.PLAIN_TEXT])\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在实现onDrop回调的情况下，还可以在onDragMove中设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragresult10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
            children: "DragResult"
          }), "为DROP_ENABLED，并将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragbehavior10",
            children: "DragBehavior"
          }), "设置为COPY或MOVE，以此来控制角标中的加号是否显示。当设置为COPY时，角标显示加号；设置为MOVE时，角标不显示加号。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onDragMove((event) => {\n  event.setResult(DragResult.DROP_ENABLED)\n  event.dragBehavior = DragBehavior.COPY\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽数据的接收。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要设置onDrop回调函数，并在回调函数中处理拖拽数据，显式设置拖拽结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onDrop((dragEvent?: DragEvent) => {\n  // 获取拖拽数据\n  this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n    let records: unifiedDataChannel.UnifiedRecord[] = event.getData().getRecords();\n    let rect: Rectangle = event.getPreviewRect();\n    this.imageWidth = Number(rect.width);\n    this.imageHeight = Number(rect.height);\n    this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n    this.imgState = Visibility.None;\n    // 显式设置result为successful，则将该值传递给拖出方的onDragEnd\n    event.setResult(DragResult.DRAG_SUCCESSFUL);\n  })\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据的传递是通过UDMF实现的，在数据较大时可能存在时延，因此在首次获取数据失败时建议加1500ms的延迟重试机制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getDataFromUdmfRetry(event: DragEvent, callback: (data: DragEvent) => void) {\n  try {\n    let data: UnifiedData = event.getData();\n    if (!data) {\n      return false;\n    }\n    let records: unifiedDataChannel.UnifiedRecord[] = data.getRecords();\n    if (!records || records.length <= 0) {\n      return false;\n    }\n    callback(event);\n    return true;\n  } catch (e) {\n    hilog.error(DOMAIN, TAG, `${(e as BusinessError).code}, message: ${(e as BusinessError).message}`);\n    return false;\n  }\n}\n\ngetDataFromUdmf(event: DragEvent, callback: (data: DragEvent) => void) {\n  if (this.getDataFromUdmfRetry(event, callback)) {\n    return;\n  }\n  setTimeout(() => {\n    this.getDataFromUdmfRetry(event, callback);\n  }, 1500);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽发起方可以通过设置onDragEnd回调感知拖拽结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onDragEnd((event) => {\n  // onDragEnd里取到的result值在接收方onDrop设置\n  if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n    this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag Success' });\n  } else if (event.getResult() === DragResult.DRAG_FAILED) {\n    this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag failed' });\n  }\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = 'DefaultDragError: ';\n\n@Entry\n@Component\nexport struct DefaultDrag {\n  @State targetImage: string = '';\n  @State imageWidth: number = 100;\n  @State imageHeight: number = 100;\n  @State imgState: Visibility = Visibility.Visible;\n  @State pixmap: image.PixelMap | undefined = undefined;\n\n  @Builder\n  pixelMapBuilder() {\n    Column() {\n      // 请将$r('app.media.startIcon')替换为实际资源文件\n      Image($r('app.media.startIcon'))\n        .width(120)\n        .height(120)\n        // ...\n    }\n  }\n\n  getDataFromUdmfRetry(event: DragEvent, callback: (data: DragEvent) => void) {\n    try {\n      let data: UnifiedData = event.getData();\n      if (!data) {\n        return false;\n      }\n      let records: unifiedDataChannel.UnifiedRecord[] = data.getRecords();\n      if (!records || records.length <= 0) {\n        return false;\n      }\n      callback(event);\n      return true;\n    } catch (e) {\n      hilog.error(DOMAIN, TAG, `${(e as BusinessError).code}, message: ${(e as BusinessError).message}`);\n      return false;\n    }\n  }\n\n  getDataFromUdmf(event: DragEvent, callback: (data: DragEvent) => void) {\n    if (this.getDataFromUdmfRetry(event, callback)) {\n      return;\n    }\n    setTimeout(() => {\n      this.getDataFromUdmfRetry(event, callback);\n    }, 1500);\n  }\n\n  // 调用componentSnapshot中的createFromBuilder接口截取自定义builder的截图\n  private getComponentSnapshot(): void {\n    this.getUIContext().getComponentSnapshot().createFromBuilder(() => {\n      this.pixelMapBuilder();\n    },\n      (error: Error, pixmap: image.PixelMap) => {\n        if (error) {\n          hilog.error(DOMAIN, TAG, '%{public}s', JSON.stringify(error));\n          return;\n        }\n        this.pixmap = pixmap;\n      });\n  }\n\n  build() {\n    // ...\n        Row() {\n          Column() {\n            Text('start Drag')\n              .fontSize(18)\n              .width('100%')\n              .height(40)\n              .margin(10)\n              .backgroundColor('#008888')\n            Row() {\n              // 请将$r('app.media.app_icon')替换为实际资源文件\n              Image($r('app.media.app_icon'))\n                .width(100)\n                .height(100)\n                .draggable(true)\n                .margin({ left: 15 })\n                .visibility(this.imgState)\n                // 绑定平行手势，可同时触发应用自定义长按手势\n                .parallelGesture(LongPressGesture().onAction(() => {\n                  this.getUIContext()\n                    .getPromptAction()\n                    .showToast({ duration: 100, message: 'Long press gesture trigger' });\n                }))\n                .onDragStart((event) => {\n                  let data: unifiedDataChannel.Image = new unifiedDataChannel.Image();\n                  // 'resources/base/media/app_icon.png'需要替换为开发者所需的图像资源文件\n                  data.imageUri = 'resources/base/media/app_icon.png';\n                  let unifiedData = new unifiedDataChannel.UnifiedData(data);\n                  event.setData(unifiedData);\n\n                  let dragItemInfo: DragItemInfo = {\n                    pixelMap: this.pixmap,\n                    extraInfo: 'this is extraInfo',\n                  };\n                  // onDragStart回调函数中返回自定义拖拽背板图\n                  return dragItemInfo;\n                })\n                // 提前准备拖拽自定义背板图\n                .onPreDrag((preDragStatus: PreDragStatus) => {\n                  if (preDragStatus == PreDragStatus.ACTION_DETECTING_STATUS) {\n                    this.getComponentSnapshot();\n                  }\n                })\n                .onDragEnd((event) => {\n                  // onDragEnd里取到的result值在接收方onDrop设置\n                  if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n                    this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag Success' });\n                  } else if (event.getResult() === DragResult.DRAG_FAILED) {\n                    this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag failed' });\n                  }\n                })\n            }\n\n            Text('Drag Target Area')\n              .fontSize(20)\n              .width('100%')\n              .height(40)\n              .margin(10)\n              .backgroundColor('#008888')\n            Row() {\n              Image(this.targetImage)\n                .width(this.imageWidth)\n                .height(this.imageHeight)\n                .draggable(true)\n                .margin({ left: 15 })\n                .border({ color: Color.Black, width: 1 })// 控制角标显示类型为MOVE，即不显示角标\n                .onDragMove((event) => {\n                  event.setResult(DragResult.DROP_ENABLED);\n                  event.dragBehavior = DragBehavior.COPY;\n                })\n                .allowDrop([uniformTypeDescriptor.UniformDataType.HYPERLINK,\n                  uniformTypeDescriptor.UniformDataType.PLAIN_TEXT])\n                .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n                .onDrop((dragEvent?: DragEvent) => {\n                  // 获取拖拽数据\n                  this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n                    let records: unifiedDataChannel.UnifiedRecord[] = event.getData().getRecords();\n                    let rect: Rectangle = event.getPreviewRect();\n                    this.imageWidth = Number(rect.width);\n                    this.imageHeight = Number(rect.height);\n                    this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n                    this.imgState = Visibility.None;\n                    // 显式设置result为successful，则将该值传递给拖出方的onDragEnd\n                    event.setResult(DragResult.DRAG_SUCCESSFUL);\n                  });\n                })\n            }\n          }\n          .width('100%')\n          .height('100%')\n        }\n        .height('100%')\n      }\n      \n      // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(700518)/* ["default"] */.A) + "",
        width: "421",
        height: "688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多选拖拽适配",
      children: "多选拖拽适配"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "组件和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件中的GridItem和ListItem组件支持多选与拖拽功能。目前，仅支持onDragStart的触发方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下以Grid为例，详细介绍实现多选拖拽的基本步骤，以及在开发过程中需要注意的事项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件多选拖拽使能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建GridItem子组件并绑定onDragStart回调函数。同时设置GridItem组件的状态为可选中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Grid() {\n  ForEach(this.numbers, (idx: number) => {\n    GridItem() {\n      Column()\n        .backgroundColor(Color.Blue)\n        .width(50)\n        .height(50)\n        .opacity(1.0)\n        .id('grid' + idx)\n    }\n    // ···\n    .onDragStart(() => {\n    })\n    .selectable(true)\n    // ···\n  }, (idx: string) => idx)\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["多选拖拽功能默认处于关闭状态。若要启用此功能，需在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#dragpreviewoptions11",
            children: "dragPreviewOptions"
          }), "接口的DragInteractionOptions参数中，将isMultiSelectionEnabled设置为true，以表明当前组件支持多选。此外，DragInteractionOptions还包含defaultAnimationBeforeLifting参数，用于控制组件浮起前的默认效果。将该参数设置为true，组件在浮起前将展示一个默认的缩小动画效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".dragPreviewOptions({ numberBadge: this.numberBadge },\n  { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了确保选中状态，应将GridItem子组件的selected属性设置为true。例如，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
            children: "onClick"
          }), "来设置特定组件为选中状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".selected(this.isSelectedGrid[idx])\n// ···\n.onClick(() => {\n  this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n  // ···\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "优化多选拖拽性能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多选拖拽操作中，当多选触发聚拢动画效果时，系统会截取当前屏幕内显示的选中组件图像。如果选中组件数量过多，可能会造成较高的性能消耗。为了优化性能，多选拖拽功能支持从dragPreview中获取截图，用以实现聚拢动画效果，从而有效节省系统资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".dragPreview({\n  pixelMap: this.pixmap\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["截图的获取可以在选中组件时通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentsnapshot/arkts-apis-uicontext-componentsnapshot#get12",
            children: "this.getUIContext().getComponentSnapshot().get()"
          }), "方法获取。以下示例通过获取组件对应id的方法进行截图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State previewData: DragItemInfo[] = [];\n@State isSelectedGrid: boolean[] = [];\n// ...\n          .onClick(() => {\n            this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n            if (this.isSelectedGrid[idx]) {\n              // ...\n              let gridItemName = 'grid' + idx;\n              // 选中状态下提前调用componentSnapshot中的get接口获取pixmap\n              this.getUIContext().getComponentSnapshot().get(gridItemName, (error: Error, pixmap: image.PixelMap) => {\n                this.pixmap = pixmap;\n                this.previewData[idx] = {\n                  pixelMap: this.pixmap\n                };\n              });\n            } else {\n              // ...\n            }\n          })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多选显示效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style#statestyles",
            children: "stateStyles"
          }), "可以设置选中态和非选中态的显示效果，方便区分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Styles\nnormalStyles(): void {\n  .opacity(1.0);\n}\n\n@Styles\nselectStyles(): void {\n  .opacity(0.4);\n}\n\n// ...\n          .stateStyles({\n            normal: this.normalStyles,\n            selected: this.selectStyles\n          })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适配数量角标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多选拖拽的数量角标当前需要应用使用dragPreviewOptions中的numberBadge参数设置，开发者需要根据当前选中的节点数量来设置数量角标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State numberBadge: number = 0;\n// ...\n          .onClick(() => {\n            this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n            if (this.isSelectedGrid[idx]) {\n              // ...\n              this.numberBadge++;\n              // ...\n            } else {\n              this.numberBadge--;\n              // ...\n            }\n          })\n          // 多选场景右上角数量角标需要应用设置numberBadge参数\n          .dragPreviewOptions({ numberBadge: this.numberBadge })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct GridEts {\n  @State pixmap: image.PixelMap | undefined = undefined;\n  @State numbers: number[] = [];\n  @State isSelectedGrid: boolean[] = [];\n  @State previewData: DragItemInfo[] = [];\n  @State numberBadge: number = 0;\n\n  @Styles\n  normalStyles(): void {\n    .opacity(1.0)\n  }\n\n  @Styles\n  selectStyles(): void {\n    .opacity(0.4)\n  }\n\n  onPageShow(): void {\n    let i: number = 0;\n    for(i = 0; i < 100; i++) {\n    this.numbers.push(i);\n    this.isSelectedGrid.push(false);\n    this.previewData.push({});\n  }\n}\n\n@Builder\nRandomBuilder(idx: number) {\n  Column()\n    .backgroundColor(Color.Blue)\n    .width(50)\n    .height(50)\n    .opacity(1.0)\n}\n\nbuild() {\n  Column({ space: 5 }) {\n    Grid() {\n      ForEach(this.numbers, (idx: number) => {\n        GridItem() {\n          Column()\n            .backgroundColor(Color.Blue)\n            .width(50)\n            .height(50)\n            .opacity(1.0)\n            .id('grid' + idx)\n        }\n          .dragPreview(this.previewData[idx])\n          .selectable(true)\n          .selected(this.isSelectedGrid[idx])\n          // 设置多选显示效果\n          .stateStyles({\n            normal: this.normalStyles,\n            selected: this.selectStyles\n          })\n          .onClick(() => {\n            this.isSelectedGrid[idx] = !this.isSelectedGrid[idx]\n            if (this.isSelectedGrid[idx]) {\n              this.numberBadge++;\n              let gridItemName = 'grid' + idx;\n              // 选中状态下提前调用componentSnapshot中的get接口获取pixmap\n              this.getUIContext().getComponentSnapshot().get(gridItemName, (error: Error, pixmap: image.PixelMap) => {\n                this.pixmap = pixmap;\n                this.previewData[idx] = {\n                  pixelMap: this.pixmap\n                }\n              })\n            } else {\n              this.numberBadge--;\n            }\n          })\n          // 使能多选拖拽，右上角数量角标需要应用设置numberBadge参数\n          .dragPreviewOptions({ numberBadge: this.numberBadge },\n            { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n          .onDragStart(() => {\n          })\n      }, (idx: string) => idx)\n    }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(5)\n      .rowsGap(10)\n      .backgroundColor(0xFAEEE0)\n  }.width('100%').margin({ top: 5 })\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(713492)/* ["default"] */.A) + "",
        width: "414",
        height: "688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适配自定义落位动效",
      children: "适配自定义落位动效"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当开发者需要实现自定义落位动效时，可以禁用系统的默认动效。从API version 18开始，ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#executedropanimation18",
        children: "executeDropAnimation"
      }), "接口，用于自定义落位动效。以下以Image组件为例，详细介绍使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#executedropanimation18",
        children: "executeDropAnimation"
      }), "接口的基本步骤，以及开发过程中需要注意的事项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件拖拽设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置draggable为true，并配置onDragStart、onDragEnd等回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.media.app_icon')替换为实际资源文件\nImage($r('app.media.app_icon'))\n  .width(100)\n  .height(100)\n  .draggable(true)\n  .margin({ left: 15, top: 40 })\n  .visibility(this.imgState)\n  .onDragStart((event) => {\n  })\n  .onDragEnd((event) => {\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置自定义动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["自定义落位动效通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
            children: "animateTo"
          }), "接口设置动画相关的参数来实现。例如，可以改变组件的大小。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "customDropAnimation =\n  () => {\n    this.getUIContext().animateTo({ duration: 1000, curve: Curve.EaseOut, playMode: PlayMode.Normal }, () => {\n      this.imageWidth = 200;\n      this.imageHeight = 200;\n      this.imgState = Visibility.None;\n    })\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽落位适配动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置onDrop回调函数，接收拖拽数据。拖拽落位动效通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#executedropanimation18",
            children: "executeDropAnimation"
          }), "函数执行，设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
            children: "useCustomDropAnimation"
          }), "为true禁用系统默认动效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  Image(this.targetImage)\n    .width(this.imageWidth)\n    .height(this.imageHeight)\n}\n.draggable(true)\n.margin({ left: 15 })\n.border({ color: Color.Black, width: 1 })\n.allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n.onDrop((dragEvent: DragEvent) => {\n  let records: Array<unifiedDataChannel.UnifiedRecord> = dragEvent.getData().getRecords();\n  let rect: Rectangle = dragEvent.getPreviewRect();\n  this.imageWidth = Number(rect.width);\n  this.imageHeight = Number(rect.height);\n  this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n  dragEvent.useCustomDropAnimation = true;\n  dragEvent.executeDropAnimation(this.customDropAnimation)\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// ...\nconst DOMAIN = 0x0000;\nconst TAG = 'DropAnimationExampleTag';\n\n@Entry\n@Component\nexport struct DropAnimationExample {\n  // ...\n  @State targetImage: string = '';\n  @State imageWidth: number = 100;\n  @State imageHeight: number = 100;\n  @State imgState: Visibility = Visibility.Visible;\n  customDropAnimation =\n    () => {\n      this.getUIContext().animateTo({ duration: 1000, curve: Curve.EaseOut, playMode: PlayMode.Normal }, () => {\n        this.imageWidth = 200;\n        this.imageHeight = 200;\n        this.imgState = Visibility.None;\n      });\n    };\n\n  build() {\n    // ...\n      Row() {\n        Column() {\n          // 请将$r('app.media.app_icon')替换为实际资源文件\n          Image($r('app.media.app_icon'))\n            .width(100)\n            .height(100)\n            .draggable(true)\n            .margin({ left: 15, top: 40 })\n            .visibility(this.imgState)\n            .onDragStart((event) => {\n            })\n            .onDragEnd((event) => {\n              if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n                hilog.info(DOMAIN, TAG, '%{public}s', 'Drag Success');\n              } else if (event.getResult() === DragResult.DRAG_FAILED) {\n                hilog.info(DOMAIN, TAG, '%{public}s', 'Drag failed');\n              }\n            })\n\n        }.width('45%')\n        .height('100%')\n\n        Column() {\n          Text('Drag Target Area')\n            .fontSize(20)\n            .width(180)\n            .height(40)\n            .textAlign(TextAlign.Center)\n            .margin(10)\n            .backgroundColor('rgb(240,250,255)')\n          Column() {\n            Image(this.targetImage)\n              .width(this.imageWidth)\n              .height(this.imageHeight)\n          }\n          .draggable(true)\n          .margin({ left: 15 })\n          .border({ color: Color.Black, width: 1 })\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDrop((dragEvent: DragEvent) => {\n            let records: Array<unifiedDataChannel.UnifiedRecord> = dragEvent.getData().getRecords();\n            let rect: Rectangle = dragEvent.getPreviewRect();\n            this.imageWidth = Number(rect.width);\n            this.imageHeight = Number(rect.height);\n            this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n            dragEvent.useCustomDropAnimation = true;\n            dragEvent.executeDropAnimation(this.customDropAnimation);\n          })\n          .width(this.imageWidth)\n          .height(this.imageHeight)\n        }.width('45%')\n        .height('100%')\n        .margin({ left: '5%' })\n      }\n      .height('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743138)/* ["default"] */.A) + "",
        width: "335",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理大批量数据",
      children: "处理大批量数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当多选拖拽的数量较多或者拖拽数据量较大时，在拖拽过程中统一处理数据可能会影响拖拽功能的体验。以下以Grid组件为例，详细介绍在大批量数据拖拽过程中数据的推荐处理方式，以及在开发中需要注意的事项。本示例中使用的主动阻塞拖拽能力从API version 18开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件多选拖拽设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建GridItem子组件，并设置其状态为可选中。再设置多选拖拽功能isMultiSelectionEnabled为true，最后设置选中状态用作区分是否选中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Grid() {\n  ForEach(this.numbers, (idx: number) => {\n    GridItem() {\n      Column()\n        .backgroundColor(Color.Blue)\n        .width(50)\n        .height(50)\n        .opacity(1.0)\n        .id('grid' + idx)\n    }\n    .dragPreview(this.previewData[idx])\n    .dragPreviewOptions({ numberBadge: this.numberBadge },\n      { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n    .selectable(true)\n    .selected(this.isSelectedGrid[idx])\n    .stateStyles({\n      normal: this.normalStyles,\n      selected: this.selectStyles\n    })\n    .onClick(() => {\n      this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n    })\n  }, (idx: string) => idx)\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多选拖拽的数据数量过多可能影响拖拽的体验，推荐多选拖拽最大多选数量为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onPageShow(): void {\n  let i: number = 0;\n  for (i = 0; i < 500; i++) {\n    this.numbers.push(i);\n    this.isSelectedGrid.push(false);\n    this.previewData.push({});\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多选拖拽选中时添加数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当数据量较大时，建议在选择数据时通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#addrecord",
            children: "addRecord"
          }), "添加数据记录，以避免在拖拽过程中集中添加数据而导致显著的性能消耗。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onClick(() => {\n  this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n  if (this.isSelectedGrid[idx]) {\n    let data: UDC.Image = new UDC.Image();\n    // '/resource/image.jpeg'需要替换为开发者所需的图像资源文件\n    data.uri = '/resource/image.jpeg';\n    if (!this.unifiedData) {\n      this.unifiedData = new UDC.UnifiedData(data);\n    }\n    this.unifiedData.addRecord(data);\n    this.numberBadge++;\n    let gridItemName = 'grid' + idx;\n    // 选中状态下提前调用componentSnapshot中的get接口获取pixmap\n    this.getUIContext().getComponentSnapshot().get(gridItemName, (error: Error, pixmap: image.PixelMap) => {\n      this.pixmap = pixmap;\n      this.previewData[idx] = {\n        pixelMap: this.pixmap\n      }\n    })\n  } else {\n    this.numberBadge--;\n    for (let i = 0; i < this.isSelectedGrid.length; i++) {\n      if (this.isSelectedGrid[i] === true) {\n        let data: UDC.Image = new UDC.Image();\n        // '/resource/image.jpeg'需要替换为开发者所需的图像资源文件\n        data.uri = '/resource/image.jpeg';\n        if (!this.unifiedData) {\n          this.unifiedData = new UDC.UnifiedData(data);\n        }\n        this.unifiedData.addRecord(data);\n      }\n    }\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽数据提前准备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onPreDrag中可以提前接收到准备发起拖拽的信号。若数据量较大，此时可以事先准备数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onPreDrag((status: PreDragStatus) => {\n  if (status == PreDragStatus.PREPARING_FOR_DRAG_DETECTION) {\n    this.loadData();\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据准备未完成时设置主动阻塞拖拽。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在发起拖拽时，应判断数据是否已准备完成。若数据未准备完成，则需向系统发出", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragstartrequeststatus18",
            children: "WAITING"
          }), "信号。此时，若手指做出移动手势，背板图将停留在原地，直至应用发出READY信号或超出主动阻塞的最大限制时间（5s）。若数据已准备完成，则可直接将数据设置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
            children: "dragEvent"
          }), "中。此外，在使用主动阻塞功能时，需保存当前的dragEvent，并在数据准备完成时进行数据设置；在非主动阻塞场景下，不建议保存当前的dragEvent。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onDragStart((event: DragEvent) => {\n  this.dragEvent = event;\n  if (this.finished == false) {\n    this.getUIContext()\n      .getDragController()\n      .notifyDragStartRequest(dragController.DragStartRequestStatus.WAITING);\n  } else {\n    event.setData(this.unifiedData);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { unifiedDataChannel as UDC } from '@kit.ArkData';\nimport { dragController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct GridEts {\n  @State pixmap: image.PixelMap | undefined = undefined;\n  @State numbers: number[] = [];\n  @State isSelectedGrid: boolean[] = [];\n  @State previewData: DragItemInfo[] = [];\n  @State numberBadge: number = 0;\n  unifiedData: UnifiedData | undefined = undefined;\n  timeout: number = 1;\n  finished: boolean = false;\n  dragEvent: DragEvent | undefined;\n\n  @Styles\n  normalStyles(): void{\n    .opacity(1.0);\n  }\n\n  @Styles\n  selectStyles(): void{\n    .opacity(0.4);\n  }\n\n  onPageShow(): void {\n    let i: number = 0;\n    for (i = 0; i < 500; i++) {\n      this.numbers.push(i);\n      this.isSelectedGrid.push(false);\n      this.previewData.push({});\n    }\n  }\n\n  loadData() {\n    this.timeout = setTimeout(() => {\n      // 数据准备完成后的状态\n      if (this.dragEvent) {\n        this.dragEvent.setData(this.unifiedData);\n      }\n      this.getUIContext().getDragController().notifyDragStartRequest(dragController.DragStartRequestStatus.READY);\n      this.finished = true;\n    }, 4000);\n  }\n\n  @Builder\n  RandomBuilder(idx: number) {\n    Column()\n      .backgroundColor(Color.Blue)\n      .width(50)\n      .height(50)\n      .opacity(1.0)\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      // 请将$r('app.string.Select_All')替换为实际资源文件，在本示例中该资源文件的value值为\"全选\"\n      Button($r('app.string.Select_All'))\n        .onClick(() => {\n          for (let i = 0; i < this.isSelectedGrid.length; i++) {\n            if (this.isSelectedGrid[i] === false) {\n              this.numberBadge++;\n              this.isSelectedGrid[i] = true;\n              let data: UDC.Image = new UDC.Image();\n              // '/resource/image.jpeg'需要替换为开发者所需的图像资源文件\n              data.uri = '/resource/image.jpeg';\n              if (!this.unifiedData) {\n                this.unifiedData = new UDC.UnifiedData(data);\n              }\n              this.unifiedData.addRecord(data);\n              let gridItemName = 'grid' + i;\n              // 选中状态下提前调用componentSnapshot中的get接口获取pixmap\n              this.getUIContext().getComponentSnapshot().get(gridItemName, (error: Error, pixmap: image.PixelMap) => {\n                this.pixmap = pixmap;\n                this.previewData[i] = {\n                  pixelMap: this.pixmap\n                };\n              });\n            }\n          }\n        })\n      Grid() {\n        ForEach(this.numbers, (idx: number) => {\n          GridItem() {\n            Column()\n              .backgroundColor(Color.Blue)\n              .width(50)\n              .height(50)\n              .opacity(1.0)\n              .id('grid' + idx)\n          }\n          .dragPreview(this.previewData[idx])\n          .dragPreviewOptions({ numberBadge: this.numberBadge },\n            { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n          .selectable(true)\n          .selected(this.isSelectedGrid[idx])\n          // 设置多选显示效果\n          .stateStyles({\n            normal: this.normalStyles,\n            selected: this.selectStyles\n          })\n          .onClick(() => {\n            this.isSelectedGrid[idx] = !this.isSelectedGrid[idx];\n            if (this.isSelectedGrid[idx]) {\n              let data: UDC.Image = new UDC.Image();\n              // '/resource/image.jpeg'需要替换为开发者所需的图像资源文件\n              data.uri = '/resource/image.jpeg';\n              if (!this.unifiedData) {\n                this.unifiedData = new UDC.UnifiedData(data);\n              }\n              this.unifiedData.addRecord(data);\n              this.numberBadge++;\n              let gridItemName = 'grid' + idx;\n              // 选中状态下提前调用componentSnapshot中的get接口获取pixmap\n              this.getUIContext().getComponentSnapshot().get(gridItemName, (error: Error, pixmap: image.PixelMap) => {\n                this.pixmap = pixmap;\n                this.previewData[idx] = {\n                  pixelMap: this.pixmap\n                };\n              });\n            } else {\n              this.numberBadge--;\n              for (let i = 0; i < this.isSelectedGrid.length; i++) {\n                if (this.isSelectedGrid[i] === true) {\n                  let data: UDC.Image = new UDC.Image();\n                  // '/resource/image.jpeg'需要替换为开发者所需的图像资源文件\n                  data.uri = '/resource/image.jpeg';\n                  if (!this.unifiedData) {\n                    this.unifiedData = new UDC.UnifiedData(data);\n                  }\n                  this.unifiedData.addRecord(data);\n                }\n              }\n            }\n          })\n          // ...\n          .onPreDrag((status: PreDragStatus) => {\n            // 1.长按时通知，350ms回调\n            if (status == PreDragStatus.PREPARING_FOR_DRAG_DETECTION) {\n              // 2.用户按住一段时间，还没有松手，有可能会拖拽，此时可准备数据\n              this.loadData();\n            } else if (status == PreDragStatus.ACTION_CANCELED_BEFORE_DRAG) {\n              // 3.用户停止拖拽交互，取消数据准备(模拟方法：定时器取消)\n              clearTimeout(this.timeout);\n            }\n          })\n          // >=500ms,移动超过10vp触发\n          .onDragStart((event: DragEvent) => {\n            this.dragEvent = event;\n            if (this.finished == false) {\n              this.getUIContext()\n                .getDragController()\n                .notifyDragStartRequest(dragController.DragStartRequestStatus.WAITING);\n            } else {\n              event.setData(this.unifiedData);\n            }\n          })\n          .onDragEnd(() => {\n            this.finished = false;\n          })\n          .dragPreviewOptions({ numberBadge: this.numberBadge },\n            { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n        }, (idx: string) => idx)\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(5)\n      .rowsGap(10)\n      .backgroundColor(0xFAEEE0)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611185)/* ["default"] */.A) + "",
        width: "414",
        height: "688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持悬停检测",
      children: "支持悬停检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Loading，即拖拽悬停检测（又叫弹簧加载）是拖拽操作的一项增强功能，允许用户在拖动过程中通过悬停在目标上自动触发视图跳转，提供了使用的便利性。建议在所有支持页面切换的区域均实现该功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力从API version 20开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为常见的适合支持该功能的场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在文件管理器中，拖动文件并悬停在文件夹上时，文件夹可以自动打开。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在桌面启动器中，拖动文件并悬停在应用程序图标上时，应用程序可以自动打开。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了实现视图切换跳转功能，该能力也可用于特定视图的激活。例如，在用户将一段文本拖拽至按钮上停留后，可激活一个文本输入框。用户随后可将所拖拽文本移动至该输入框上方释放，触发搜索结果展示，实现单手高效完成整个操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706207)/* ["default"] */.A) + "",
        width: "1000",
        height: "488"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触发原理",
      children: "触发原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要实现这些能力，需要在组件上注册onDragSpringLoading接口，并传入一个用于处理拖拽悬停触发通知的回调。使用该接口后，该组件将如同注册了onDrop接口的组件一样，成为一个可拖入目标，并且遵循与onDrop相同的命中检测规则，即：在悬停位置下方，仅有一个组件可以接收拖拽事件响应，并且总是首个被检测到的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Loading的整个过程包含三个阶段：悬停检测 -> 回调通知 -> 结束。在结束之前，如果用户重新开始移动，会自动中断Spring Loading，并通知应用取消。如果在悬停检测期间移动，且尚未进入Spring Loading状态，则不会触发取消通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494704)/* ["default"] */.A) + "",
        width: "1000",
        height: "358"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用通过回调接收当前的状态，动态改变UI显示，从而达到用户提醒的效果。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议处理方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已经在本组件上方悬停不动维持了一段时间，开始进入 Spring Loading 状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改背景色或改变组件尺寸，强化提醒用户继续保持悬停不动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户继续维持不动，系统周期性下发刷新通知，默认3次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过通知中携带的sequence是否为奇偶数，来决定是否重置UI显示，以此达到周期性变化的提醒效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已保持悬停不动足够多的时间，整个Spring Loading检测与触发完整结束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行页面跳转或视图切换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "悬停进入BEGIN状态后，用户重新移动或其他情况打断了悬停检测，无法再进行整个Spring Loading状态的触发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置和恢复UI显示，取消视图切换相关的状态和逻辑。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556187)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在同一个组件内持续保持不动，整个Spring Loading仅会触发一轮，不会重复触发，直到拖离当前组件后再重新进入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个组件上即可以实现Spring Loading，也可以实现onDrop/onDragEnter等拖拽事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触发自定义",
      children: "触发自定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以自定义修改Spring Loading检测参数，动态决定是否继续触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发参数自定义"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragspringloading20",
        children: "onDragSpringLoading"
      }), "接口还提供了一个可选参数configuration供应用自定义静止检测时长以及触发间隔与次数等配置，可以通过此参数来个性化定义Spring Loading触发条件。但绝大数多情况下，不需要进行修改，使用系统默认配置即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "configuration参数必须在检测开始前准备就绪。系统一旦启动Spring Loading检测过程，将不再从该参数读取配置。然而，可以通过回调中传入的context对象中的updateCon figuration方法动态更新配置。此动态更新仅对当前触发有效，不会影响通过configuration的配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用默认配置，或通过onDragSpringLoading接口的configuration配置固定参数。在绝大多数情况下，无需在Spring Loading过程中动态修改这些检测参数。但若需针对不同的拖拽数据类型提供不同的用户提示效果，则可考虑使用此功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(165727)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不要设置过长的时间间隔和过多的触发次数，这对于用户提醒通常没有意义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.动态终止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当系统检测到用户悬停足够时长，回调onDragSpringLoading接口设置到回调函数时，有机会决定即将出现的Spring Loading通知是否继续，这发生在需要观察用户拖拽的数据类型并与自身业务逻辑结合的情况下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一段伪代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  .onDragSpringLoading((context: DragSpringLoadingContext)=>{\n    // 检查当前的状态\n    if (context.state == DragSpringLoadingState.BEGIN) {\n      // 检查用户所拖拽的数据类型是否自己能够处理的\n      boolean isICanHandle = false;\n      let dataSummary = context?.dragInfos?.dataSummary;\n      if (dataSummary != undefined) {\n        for (const [type, size] of dataSummary) {\n          if (type === \"general.plain-text\") { // 只能处理纯文本类型\n            isICanHandle = true;\n            break;\n          }\n        }\n      }\n      // 如果数据无法处理，直接终止Spring Loading\n      if (!isICanHandle) {\n        context.abort();\n        return;\n      }\n    }\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.禁用Spring Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不再需要该组件上响应任何Spring Loading事件，则可以通过传递null给onDragSpringLoading来明确关闭响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".onDragSpringLoading(null)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现示例",
      children: "实现示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面通过实现搜索设备的简单示例来展示如何通过onDragSpringLoading实现提醒和视图切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.准备一些组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了简化示例，准备一个可拖出文字的组件以供用户拖出待搜索的文字，并添加一个按钮控件，用于响应Spring Loading来进一步激活视图。被激活的视图通过bindSheet实现，内部配置有一个输入框控件用于接收拖拽文本，以及一个文本组件用于展示搜索结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "build() {\n  Column() {\n    // ...\n      Column() {\n        // 请将$r('app.string.DoubleClick_Text')替换为实际资源文件，在本示例中该资源文件的value值为\"双击文字选择后拖出: \\n     DeviceName\"\n        Text($r('app.string.DoubleClick_Text'))\n          .fontSize(30)\n          .copyOption(CopyOptions.InApp) // 开启copyOption之后，文本组件即可支持选择内容进行拖拽\n      }.padding({ bottom: 30 })\n\n      // 请将$r('app.string.Search_Device')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索设备\"\n      Button($r('app.string.Search_Device'))\n        .width('80%')\n        .height('80vp')\n        .fontSize(30)\n        .bindSheet($$this.isShowSheet, this.SheetBuilder(), {\n          detents: [SheetSize.MEDIUM, SheetSize.LARGE, 600],\n          preferType: SheetType.BOTTOM,\n          // 请将$r('app.string.Search_Device')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索设备\"\n          title: { title: $r('app.string.Search_Device') },\n        })\n        // ...\n  }.width('100%').height('100%')\n  .justifyContent(FlexAlign.Center)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.实现SheetBuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现半模态弹框的UI界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nSheetBuilder() {\n  Column() {\n    // 输入框\n    // 请将$r('app.string.Push_Here')替换为实际资源文件，在本示例中该资源文件的value值为\"拖入此处\"\n    TextInput({ placeholder: $r('app.string.Push_Here') })\n      .width('80%')\n      .borderWidth(1)\n      .borderColor(Color.Black)\n      // ...\n      .onChange((value: string) => {\n        if (value.length == 0) {\n          this.isSearchDone = false;\n          return;\n        }\n        // 此处简化处理，直接显示固定搜索结果\n        this.isSearchDone = true;\n      })\n    if (this.isSearchDone) {\n      Text(this.searchResult).fontSize(20)\n      // ...\n    }\n  }.width('100%').height('100%')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.为Button控件添加进入和离开的响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了达到提醒效果，为目标组件也增加onDragEnter和onDragLeave的处理。当用户拖拽文字进入到组件范围时，变化背景色，以提醒用户在此处停留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".onDragEnter(() => {\n  // 当用户拖拽进入按钮范围，即提醒用户，此处是可以处理数据的\n  this.buttonBackgroundColor = this.reminderColor\n})\n.onDragLeave(() => {\n  // 当用户拖拽离开按钮范围，恢复UI\n  this.buttonBackgroundColor = this.normalColor\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.实现Spring Loading响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现一个Spring Loading的响应函数，处理所有状态，如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "handleSpringLoading(context: SpringLoadingContext) {\n  // BEGIN 状态时检查拖拽数据类型\n  if (context.state == dragController.DragSpringLoadingState.BEGIN) {\n    // ···\n    // 进行必要判断，决定是否要终止触发\n    return;\n  }\n  if (context.state == dragController.DragSpringLoadingState.UPDATE) {\n    // ···\n    // 刷新提醒\n    return;\n  }\n  // 处理Spring Loading结束，触发视图切换\n  if (context.state == dragController.DragSpringLoadingState.END) {\n    // ···\n    // 视图激活或跳转\n    return;\n  }\n  // 处理CANCEL状态，复原UI\n  if (context.state == dragController.DragSpringLoadingState.CANCEL) {\n    // ···\n    // 恢复状态与UI\n    return;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dragController } from '@kit.ArkUI';\nimport { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\n\n// ...\n\n@Entry\n@ComponentV2\nexport struct SpringLoadingPage {\n  context1 = this.getUIContext().getHostContext();\n  @Local isShowSheet: boolean = false;\n  // 请将$r('app.string.Select_Result')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索结果：\\n  设备 1\\n  设备 2\\n  设备 3\\n  ... ...\"\n  private searchResult: string = this.context1?.resourceManager.getStringSync($r('app.string.Select_Result').id)!;\n  @Local isSearchDone: boolean = false;\n  private reminderColor: Color = Color.Green;\n  private normalColor: Color = Color.Blue;\n  @Local buttonBackgroundColor: Color = this.normalColor;\n\n  @Builder\n  SheetBuilder() {\n    Column() {\n      // 输入框\n      // 请将$r('app.string.Push_Here')替换为实际资源文件，在本示例中该资源文件的value值为\"拖入此处\"\n      TextInput({ placeholder: $r('app.string.Push_Here') })\n        .width('80%')\n        .borderWidth(1)\n        .borderColor(Color.Black)\n        .padding({ bottom: 5 })\n        .onChange((value: string) => {\n          if (value.length == 0) {\n            this.isSearchDone = false;\n            return;\n          }\n          // 此处简化处理，直接显示固定搜索结果\n          this.isSearchDone = true;\n        })\n      if (this.isSearchDone) {\n        Text(this.searchResult).fontSize(20)\n          .textAlign(TextAlign.Start)\n          .width('80%')\n      }\n    }.width('100%').height('100%')\n  }\n\n  // 检查拖拽数据类型是否包含所希望的plain-text\n  checkDataType(dataSummary: unifiedDataChannel.Summary | undefined): boolean {\n    let summary = dataSummary?.summary;\n    if (summary == undefined) {\n      return false;\n    }\n\n    let dataSummaryObjStr: string = JSON.stringify(summary);\n    let dataSummaryArray: Array<Array<string>> = JSON.parse(dataSummaryObjStr);\n    let isDataTypeMatched: boolean = false;\n    dataSummaryArray.forEach((record: Array<string>) => {\n      if (record[0] == 'general.plain-text') {\n        isDataTypeMatched = true;\n      }\n    });\n    return isDataTypeMatched;\n  }\n\n  // 处理BEGIN状态\n  handleBeginState(context: SpringLoadingContext): boolean {\n    // 检查用户所拖拽的数据类型是否自己能够处理的\n    if (this.checkDataType(context?.dragInfos?.dataSummary)) {\n      return true;\n    }\n    // 如果数据无法处理，直接终止Spring Loading\n    context.abort();\n    return false;\n  }\n\n  // Spring Loading处理入口\n  handleSpringLoading(context: SpringLoadingContext) {\n    // BEGIN 状态时检查拖拽数据类型\n    if (context.state == dragController.DragSpringLoadingState.BEGIN) {\n      if (this.handleBeginState(context)) {\n        // 我们已经在onDragEnter时刷新了提醒色，进入Spring Loading状态时，恢复UI，提醒用户继续保持不动\n        this.buttonBackgroundColor = this.normalColor;\n      }\n      // ...\n      return;\n    }\n    if (context.state == dragController.DragSpringLoadingState.UPDATE) {\n      // 奇数次UPDATE通知刷新提醒UI，偶数次复原UI\n      if (context.currentNotifySequence % 2 != 0) {\n        this.buttonBackgroundColor = this.reminderColor;\n      } else {\n        this.buttonBackgroundColor = this.normalColor;\n      }\n      // ...\n      return;\n    }\n    // 处理Spring Loading结束，触发视图切换\n    if (context.state == dragController.DragSpringLoadingState.END) {\n      this.isShowSheet = true;\n      // ...\n      return;\n    }\n    // 处理CANCEL状态，复原UI\n    if (context.state == dragController.DragSpringLoadingState.CANCEL) {\n      this.buttonBackgroundColor = this.normalColor;\n      // ...\n      return;\n    }\n  }\n\n  build() {\n    Column() {\n      // ...\n        Column() {\n          // 请将$r('app.string.DoubleClick_Text')替换为实际资源文件，在本示例中该资源文件的value值为\"双击文字选择后拖出: \\n     DeviceName\"\n          Text($r('app.string.DoubleClick_Text'))\n            .fontSize(30)\n            .copyOption(CopyOptions.InApp) // 开启copyOption之后，文本组件即可支持选择内容进行拖拽\n        }.padding({ bottom: 30 })\n\n        // 请将$r('app.string.Search_Device')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索设备\"\n        Button($r('app.string.Search_Device'))\n          .width('80%')\n          .height('80vp')\n          .fontSize(30)\n          .bindSheet($$this.isShowSheet, this.SheetBuilder(), {\n            detents: [SheetSize.MEDIUM, SheetSize.LARGE, 600],\n            preferType: SheetType.BOTTOM,\n            // 请将$r('app.string.Search_Device')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索设备\"\n            title: { title: $r('app.string.Search_Device') },\n          })\n          .allowDrop([uniformTypeDescriptor.UniformDataType.PLAIN_TEXT])\n          .backgroundColor(this.buttonBackgroundColor)\n          .onDragEnter(() => {\n            // 当用户拖拽进入按钮范围，即提醒用户，此处是可以处理数据的\n            this.buttonBackgroundColor = this.reminderColor;\n          })\n          .onDragLeave(() => {\n            // 当用户拖拽离开按钮范围，恢复UI\n            this.buttonBackgroundColor = this.normalColor;\n          })\n          .onDragSpringLoading(null)\n          .onDragSpringLoading((context: SpringLoadingContext) => {\n            this.handleSpringLoading(context);\n          })\n        // ...\n    }.width('100%').height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894821)/* ["default"] */.A) + "",
        width: "312",
        height: "478"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DragFramework",
          children: "拖拽框架开发实践"
        })
      }), "\n"]
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
556187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
494704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438013-30d62c5d84ecfb26540fa2121ea507d0.png");

},
713492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438011-dd154f3eb86f63f64c9f984eed3d969d.gif");

},
165727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
700518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798316-afd69ff64facc1885e2ce1df9920aaac.gif");

},
743138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957966-f6fd0127db2b85cea2397fab128c767e.gif");

},
933376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477965-236312596718bd75fea172b18010074c.png");

},
142426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957964-7494013cb622cd5af994afcb314baf34.png");

},
894821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957968-3d714c5265cc003650be050747b9b687.gif");

},
706207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798318-d9536e0615a8cea192d30215fbab9621.png");

},
611185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477967-af4440ead53a4c447d10b3663013120f.gif");

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