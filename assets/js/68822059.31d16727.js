"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672832"], {
47558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_interaction_events_ts_universal_events_drag_drop_ts_universal_events_drag_drop_md_688_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-events-interaction-events-ts-universal-events-drag-drop-ts-universal-events-drag-drop-md-688.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_interaction_events_ts_universal_events_drag_drop_ts_universal_events_drag_drop_md_688_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop","title":"拖拽事件","description":"拖拽事件是指在用户界面中，当用户拖动某个对象（如文件、控件或元素）时触发的一系列事件。这些事件允许开发者自定义拖拽行为，实现诸如拖放、调整位置等功能。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"拖拽事件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-events-drag-drop"},"sidebar":"ref","previous":{"title":"点击事件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click"},"next":{"title":"焦点事件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop.md


const frontMatter = {
	title: '拖拽事件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-events-drag-drop'
};
const contentTitle = '拖拽事件';

const assets = {

};



const toc = [{
  "value": "onDragStart",
  "id": "ondragstart",
  "level": 2
}, {
  "value": "onDragEnter",
  "id": "ondragenter",
  "level": 2
}, {
  "value": "onDragMove",
  "id": "ondragmove",
  "level": 2
}, {
  "value": "onDragLeave",
  "id": "ondragleave",
  "level": 2
}, {
  "value": "onDrop",
  "id": "ondrop",
  "level": 2
}, {
  "value": "onDrop15+",
  "id": "ondrop15",
  "level": 2
}, {
  "value": "onDragEnd10+",
  "id": "ondragend10",
  "level": 2
}, {
  "value": "onPreDrag12+",
  "id": "onpredrag12",
  "level": 2
}, {
  "value": "onDragSpringLoading20+",
  "id": "ondragspringloading20",
  "level": 2
}, {
  "value": "DragItemInfo",
  "id": "dragiteminfo",
  "level": 2
}, {
  "value": "PreviewConfiguration15+",
  "id": "previewconfiguration15",
  "level": 2
}, {
  "value": "extraParams说明",
  "id": "extraparams说明",
  "level": 2
}, {
  "value": "DragEvent7+",
  "id": "dragevent7",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "setData10+",
  "id": "setdata10",
  "level": 3
}, {
  "value": "getData10+",
  "id": "getdata10",
  "level": 3
}, {
  "value": "getSummary10+",
  "id": "getsummary10",
  "level": 3
}, {
  "value": "setResult10+",
  "id": "setresult10",
  "level": 3
}, {
  "value": "getResult10+",
  "id": "getresult10",
  "level": 3
}, {
  "value": "getPreviewRect10+",
  "id": "getpreviewrect10",
  "level": 3
}, {
  "value": "getVelocityX10+",
  "id": "getvelocityx10",
  "level": 3
}, {
  "value": "getVelocityY10+",
  "id": "getvelocityy10",
  "level": 3
}, {
  "value": "getVelocity10+",
  "id": "getvelocity10",
  "level": 3
}, {
  "value": "getWindowX10+",
  "id": "getwindowx10",
  "level": 3
}, {
  "value": "getWindowY10+",
  "id": "getwindowy10",
  "level": 3
}, {
  "value": "getDisplayX10+",
  "id": "getdisplayx10",
  "level": 3
}, {
  "value": "getDisplayY10+",
  "id": "getdisplayy10",
  "level": 3
}, {
  "value": "getModifierKeyState12+",
  "id": "getmodifierkeystate12",
  "level": 3
}, {
  "value": "startDataLoading15+",
  "id": "startdataloading15",
  "level": 3
}, {
  "value": "executeDropAnimation18+",
  "id": "executedropanimation18",
  "level": 3
}, {
  "value": "getDisplayId20+",
  "id": "getdisplayid20",
  "level": 3
}, {
  "value": "getDragSource20+",
  "id": "getdragsource20",
  "level": 3
}, {
  "value": "isRemote20+",
  "id": "isremote20",
  "level": 3
}, {
  "value": "setDataLoadParams20+",
  "id": "setdataloadparams20",
  "level": 3
}, {
  "value": "getX(deprecated)",
  "id": "getxdeprecated",
  "level": 3
}, {
  "value": "getY(deprecated)",
  "id": "getydeprecated",
  "level": 3
}, {
  "value": "getGlobalDisplayX20+",
  "id": "getglobaldisplayx20",
  "level": 3
}, {
  "value": "getGlobalDisplayY20+",
  "id": "getglobaldisplayy20",
  "level": 3
}, {
  "value": "DragResult10+枚举说明",
  "id": "dragresult10枚举说明",
  "level": 2
}, {
  "value": "DragBehavior10+",
  "id": "dragbehavior10",
  "level": 2
}, {
  "value": "PreDragStatus12+枚举说明",
  "id": "predragstatus12枚举说明",
  "level": 2
}, {
  "value": "UnifiedData10+",
  "id": "unifieddata10",
  "level": 2
}, {
  "value": "Summary10+",
  "id": "summary10",
  "level": 2
}, {
  "value": "DataLoadParams20+",
  "id": "dataloadparams20",
  "level": 2
}, {
  "value": "DataSyncOptions15+",
  "id": "datasyncoptions15",
  "level": 2
}, {
  "value": "OnDragEventCallback15+",
  "id": "ondrageventcallback15",
  "level": 2
}, {
  "value": "DropOptions15+",
  "id": "dropoptions15",
  "level": 2
}, {
  "value": "DragSpringLoadingConfiguration20+",
  "id": "dragspringloadingconfiguration20",
  "level": 2
}, {
  "value": "SpringLoadingContext20+",
  "id": "springloadingcontext20",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置组件拖拽和落入）",
  "id": "示例1设置组件拖拽和落入",
  "level": 3
}, {
  "value": "示例2（自定义落位动效）",
  "id": "示例2自定义落位动效",
  "level": 3
}, {
  "value": "示例3（拖拽异步获取数据）",
  "id": "示例3拖拽异步获取数据",
  "level": 3
}, {
  "value": "示例4（获取当前拖拽的屏幕ID）",
  "id": "示例4获取当前拖拽的屏幕id",
  "level": 3
}, {
  "value": "示例5（获取包名和是否是跨设备）",
  "id": "示例5获取包名和是否是跨设备",
  "level": 3
}, {
  "value": "示例6（拖拽支持悬停检测）",
  "id": "示例6拖拽支持悬停检测",
  "level": 3
}, {
  "value": "示例7（拖起方延迟提供数据）",
  "id": "示例7拖起方延迟提供数据",
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
        id: "拖拽事件",
        children: "拖拽事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽事件是指在用户界面中，当用户拖动某个对象（如文件、控件或元素）时触发的一系列事件。这些事件允许开发者自定义拖拽行为，实现诸如拖放、调整位置等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(71787)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用本身预置的资源文件（即应用在安装前的HAP包中已经存在的资源文件）仅支持本地应用内拖拽。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架对以下组件实现了默认的拖拽能力，支持对数据的拖出或拖入响应。开发者也可以通过实现通用拖拽事件来自定义拖拽能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认支持拖出能力的组件（可从组件上拖出数据）：", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "，开发者可通过设置这些组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#draggable",
          children: "draggable"
        }), "属性来控制对默认拖拽能力的使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认支持拖入能力的组件（目标组件可响应拖入数据）：", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "，开发者可通过设置这些组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#allowdrop",
          children: "allowDrop"
        }), "属性为null来禁用对默认拖入能力的支持。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他支持拖出能力的组件需要开发者将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#draggable",
        children: "draggable"
      }), "属性设置为true，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "等接口中实现数据传输相关内容，才能正确处理拖拽能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text、TextInput、TextArea、Hyperlink、Image、RichEditor和Web组件的draggable属性默认为true，默认支持拖出能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313320)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
        children: "copyOption"
      }), "一起使用，设置copyOptions为CopyOptions.InApp或者CopyOptions.LocalDevice。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondragstart",
      children: "onDragStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在手势拖拽场景中，在可拖拽的组件上长按时间超过500ms，然后手指移动距离大于10vp时触发此回调；在鼠标拖拽场景中，鼠标左键在可拖拽的组件上按下并移动超过1vp时，即可触发此回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对默认支持拖拽能力的组件，如果开发者设置了onDragStart，优先执行onDragStart，并根据执行情况决定是否使用系统默认的拖拽能力，具体规则为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者返回了自定义预览图，则不再使用系统默认的拖拽预览图；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者设置了拖拽数据，则不再使用系统默认填充的拖拽数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本类组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
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
      }), "对选中的文本内容进行拖拽时，不支持自定义预览图。当onDragStart与菜单预览一起使用或使用了默认支持拖拽能力的组件时，预览及菜单项上的自定义内容不支持拖拽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816676)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 13开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "事件优先级："
        })
      }), " 长按事件触发时间 < 500ms，长按事件优先拖拽事件响应，长按事件触发时间 >= 500ms，拖拽事件优先长按事件响应。"]
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragiteminfo",
              children: "DragItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      id: "ondragenter",
      children: "onDragEnter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽进入组件范围内时，触发回调，当监听了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondrop",
        children: "onDrop"
      }), "事件时，此事件才有效。"]
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为拖拽事件信息，包括拖拽点坐标。  extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
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
      id: "ondragmove",
      children: "onDragMove"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragMove(event: (event: DragEvent, extraParams?: string) => void): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽在组件范围内移动时，触发回调，当监听了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondrop",
        children: "onDrop"
      }), "事件时，此事件才有效。"]
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为拖拽事件信息，包括拖拽点坐标。  extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
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
      id: "ondragleave",
      children: "onDragLeave"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽离开组件范围内时，触发回调，当监听了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondrop",
        children: "onDrop"
      }), "事件时，此事件才有效。"]
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为拖拽事件信息，包括拖拽点坐标。  extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
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
      id: "ondrop",
      children: "onDrop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDrop(event: (event: DragEvent, extraParams?: string) => void): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定此事件的组件可作为释放目标。当在本组件范围内停止拖放行为时，将触发回调。如果开发者未在onDrop中主动调用event.setResult()来设置拖拽接收的结果，对于系统支持的默认可拖入组件，处理结果将以系统实际处理的数据为准。对于其他组件，系统将默认视为数据接收成功。"
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为拖拽事件信息，包括拖拽点坐标。  extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
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
      id: "ondrop15",
      children: "onDrop15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定此事件的组件可作为拖拽释放目标，当在本组件范围内停止拖拽行为时，触发回调。如果开发者没有在onDrop中主动调用event.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#setresult10",
        children: "setResult"
      }), "()设置拖拽接收的结果，若拖拽组件为系统支持默认拖入的组件，以系统实际处理数据结果为准，其它组件则系统按照数据接收成功处理。"]
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
            children: "eventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondrageventcallback15",
              children: "OnDragEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dropOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dropoptions15",
              children: "DropOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落入过程的参数。"
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
      id: "ondragend10",
      children: "onDragEnd10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定此事件的组件触发的拖拽结束后，触发回调。"
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
              href: "#dragevent7",
              children: "DragEvent"
            }), ", extraParams?: string) => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为拖拽事件信息，在onDragEnd调用中不包括拖拽点坐标。  extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
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
      id: "onpredrag12",
      children: "onPreDrag12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPreDrag(callback: Callback<PreDragStatus>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定此事件的组件，当处于手势拖拽发起前的不同阶段时，触发回调。拖拽发起前的各阶段可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#predragstatus12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "PreDragStatus"
      }), "。此接口不支持在鼠标拖拽中触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59668)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#predragstatus12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PreDragStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
      id: "ondragspringloading20",
      children: "onDragSpringLoading20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定此事件的组件可作为具有悬停检测功能的拖拽响应目标。当拖拽对象悬停在目标上时，触发回调通知。此时只有一个目标可以成为响应方，并且子组件始终具有更高的响应优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于悬停检测的触发机制及详细使用方法，请参考开发指南", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event#%E6%94%AF%E6%8C%81%E6%82%AC%E5%81%9C%E6%A3%80%E6%B5%8B",
        children: "支持悬停检测"
      }), "。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#springloadingcontext20",
              children: "SpringLoadingContext"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragspringloadingconfiguration20",
              children: "DragSpringLoadingConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["悬停检测配置信息，为undefined时取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragspringloadingconfiguration20",
              children: "DragSpringLoadingConfiguration"
            }), "默认值。"]
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
      id: "dragiteminfo",
      children: "DragItemInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义拖拽过程中拖拽项的相关信息。"
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
            children: "pixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置拖拽过程中显示的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽过程中显示自定义组件，如果设置了pixelMap，则忽略此值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持全局builder。如果builder中使用了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            }), "组件，应尽量开启同步加载，即配置Image的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#syncload8",
              children: "syncLoad"
            }), "为true。该builder只用于生成当次拖拽中显示的图片，builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。  builder传参时，建议传参格式为builder: ()=>{this.customBuilder()}，用以保证this指向的正确性。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%B0%86builder%E8%A3%85%E9%A5%B0%E7%9A%84%E5%87%BD%E6%95%B0%E5%BD%93%E4%BD%9Ccustombuilder%E7%B1%BB%E5%9E%8B%E4%BD%BF%E7%94%A8",
              children: "将@Builder装饰的函数当作CustomBuilder类型使用"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽项的附加信息，用于描述拖拽项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewconfiguration15",
      children: "PreviewConfiguration15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置自定义拖拽过程中的预览图样式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "onlyForLifting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义配置的预览图是否仅用于浮起。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  默认值为false。true表示自定义预览图仅用于浮起，false表示可用于浮起和拖拽。设置为true时，如果发起长按拖拽，浮起时的预览图为自定义配置的预览图，拖拽时的预览图不使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#dragpreview11",
              children: "dragPreview"
            }), "属性，优先使用开发者在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
              children: "onDragStart"
            }), "中返回的预览图，如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
              children: "onDragStart"
            }), "中没有返回预览图则使用组件自截图。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delayCreating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件预览builder是否在设置时加载。  默认值为false。true表示组件预览builder在设置时加载，false表示组件预览builder不在设置时加载。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extraparams说明",
      children: "extraParams说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于返回组件在拖拽中需要用到的额外信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "extraParams是JSON对象转换的string字符串，可以通过JSON.parse转换的JSON对象获取如下属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽事件设在父容器的子元素时，selectedIndex表示当前被拖拽子元素是父容器第selectedIndex个子元素，selectedIndex从0开始。  仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "组件的拖拽事件中生效，否则返回undefined。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insertIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前拖拽元素在List组件中放下时，insertIndex表示被拖拽元素插入该组件的第insertIndex个位置，insertIndex从0开始。  仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "组件的拖拽事件中生效，否则返回undefined。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragevent7",
      children: "DragEvent7+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "useCustomDropAnimation10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当拖拽结束时，是否禁用系统默认落位动效。  应用可将该值设定为true来禁用系统默认落位动效，并实现自己的自定义落位动效。  当不配置或设置为false时，系统默认落位动效生效，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#setresult10",
              children: "setResult"
            }), "设置为DRAG_SUCCESSFUL时，落位为缩小消失动效，不为DRAG_SUCCESSFUL时，则为放大消失动效。  当未禁用系统默认落位动效时，应用不应再实现自定义动效，以避免动效上的冲突。  默认值：false"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dragBehavior10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragbehavior10",
              children: "DragBehavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换复制和剪贴模式的角标显示状态。  默认值：DragBehavior.COPY。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdata10",
      children: "setData10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setData(unifiedData: UnifiedData): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向DragEvent中设置用于拖拽的数据。"
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
            children: "unifiedData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#unifieddata10",
              children: "UnifiedData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽相关的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdata10",
      children: "getData10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getData(): UnifiedData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖拽相关数据。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddata",
              children: "UnifiedData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DragEvent中获取拖拽相关数据。数据获取结果请参考错误码说明。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-drag-event/errorcode-drag-event",
        children: "拖拽事件错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "190001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "190002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsummary10",
      children: "getSummary10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSummary(): Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所拖拽数据的概要，包括数据类型及大小信息；在延迟拖拽场景下，只能获取到数据类型信息。"
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
              href: "#summary10",
              children: "Summary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽相关数据的概要。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setresult10",
      children: "setResult10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setResult(dragResult: DragResult): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DragEvent中设置拖拽结果。"
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
            children: "dragResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragresult10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getresult10",
      children: "getResult10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getResult(): DragResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖拽结果。"
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
              href: "#dragresult10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DragEvent中获取的拖拽结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpreviewrect10",
      children: "getPreviewRect10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPreviewRect(): Rectangle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#rectangle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "Rectangle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息，单位vp，其中x和y代表预览图左上角的窗口坐标，width和height代表预览图的尺寸。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getvelocityx10",
      children: "getVelocityX10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVelocityX(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前拖拽的x轴方向拖动速度。"
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
            children: "当前拖拽的x轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从左往右为正，反之为负。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getvelocityy10",
      children: "getVelocityY10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVelocityY(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前拖拽的y轴方向拖动速度。"
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
            children: "当前拖拽的y轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从上往下为正，反之为负。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getvelocity10",
      children: "getVelocity10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVelocity(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前拖拽的主方向拖动速度。"
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
            children: "当前拖拽的主方向拖动速度。为xy轴方向速度的平方和的算术平方根，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getwindowx10",
      children: "getWindowX10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWindowX(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖拽点相对于窗口左上角的x轴坐标。"
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
            children: "当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getwindowy10",
      children: "getWindowY10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWindowY(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖拽点相对于窗口左上角的y轴坐标。"
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
            children: "当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdisplayx10",
      children: "getDisplayX10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDisplayX(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前拖拽点相对于屏幕左上角的x轴坐标。"
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
            children: "当前拖拽点相对于屏幕左上角的x轴坐标，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdisplayy10",
      children: "getDisplayY10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDisplayY(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前拖拽点相对于屏幕左上角的y轴坐标。"
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
            children: "当前拖拽点相对于屏幕左上角的y轴坐标，单位为vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmodifierkeystate12",
      children: "getModifierKeyState12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModifierKeyState?(keys: Array<string>): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取功能键按压状态。"
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
            children: "获取功能键按压状态。报错信息请参考以下错误码。支持功能键 'Ctrl'"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "是否被按下，返回true表示被按下，返回false表示未被按下"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startdataloading15",
      children: "startDataLoading15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startDataLoading(options: DataSyncOptions): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步获取拖拽数据，并通知开发者当前数据同步进度，仅支持在onDrop阶段使用。"
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
              href: "#datasyncoptions15",
              children: "DataSyncOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取拖拽数据时的参数，包含目标路径、文件冲突选项、进度条类型等。数据传输过程中可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller#canceldataloading15",
              children: "cancelDataLoading"
            }), "接口取消数据加载。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-drag-event/errorcode-drag-event",
        children: "拖拽事件错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "190003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed for current phase."
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽数据的标识，用于区分每次拖拽。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executedropanimation18",
      children: "executeDropAnimation18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeDropAnimation(customDropAnimation: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置自定义落位动效的执行函数，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#%E5%B1%9E%E6%80%A7",
        children: "useCustomDropAnimation"
      }), "为true时有效。"]
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
            children: "customDropAnimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在此回调函数中实现自定义落位动效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 该接口仅在onDrop回调中使用有效。  2. 使用前需设置useCustomDropAnimation为true，否则该接口不生效。  3. 不要在动画callback中实现与动效无关的逻辑，避免影响执行效率。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdisplayid20",
      children: "getDisplayId20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDisplayId(): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取当前拖拽事件发生时所在的屏幕ID，不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragend10",
        children: "onDragEnd"
      }), "阶段使用。"]
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
            children: "当前拖拽事件发生时所在的屏幕ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdragsource20",
      children: "getDragSource20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDragSource(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取拖起方包名。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖起方的包名。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isremote20",
      children: "isRemote20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isRemote(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取是否是跨设备拖拽，跨设备拖拽时为true。"
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
            children: "是否是跨设备拖拽，返回true表示是跨设备拖拽，返回false表示不是跨设备拖拽。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdataloadparams20",
      children: "setDataLoadParams20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDataLoadParams(dataLoadParams: DataLoadParams): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置起拖方延迟提供数据。使用此方法向系统提供数据加载参数，而不是直接提供完整的数据对象。当用户在目标应用程序上落入时，系统将使用此参数从起拖方请求实际数据。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setdata10",
        children: "setData"
      }), "方法同时使用，以最后调用的方法为准。该接口仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "回调中生效。"]
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
            children: "dataLoadParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dataloadparams20",
              children: "DataLoadParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落入操作时使用的数据加载参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getxdeprecated",
      children: "getX(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getX(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226155)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getwindowx10",
        children: "getWindowX"
      }), "替代。"]
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
            children: "返回当前拖拽点相对于窗口左上角的x轴坐标。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getydeprecated",
      children: "getY(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getY(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52390)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getwindowy10",
        children: "getWindowY"
      }), "替代。"]
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
            children: "返回当前拖拽点相对于窗口左上角的y轴坐标。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getglobaldisplayx20",
      children: "getGlobalDisplayX20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getGlobalDisplayX(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前拖拽点相对于全局屏幕的左上角的X坐标。"
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
            children: "返回当前拖拽点相对于全局屏幕的左上角的X坐标。  单位：vp，取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getglobaldisplayy20",
      children: "getGlobalDisplayY20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getGlobalDisplayY(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前拖拽点相对于全局屏幕的左上角的Y坐标。"
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
            children: "返回当前拖拽点相对于全局屏幕的左上角的Y坐标。  单位：vp，取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragresult10枚举说明",
      children: "DragResult10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义拖拽操作的结果及组件的落入选定状态。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DRAG_SUCCESSFUL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽成功，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondrop",
              children: "onDrop"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DRAG_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽失败，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondrop",
              children: "onDrop"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DRAG_CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽取消，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondrop",
              children: "onDrop"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件允许落入，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragenter",
              children: "onDragEnter"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragmove",
              children: "onDragMove"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragleave",
              children: "onDragLeave"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件不允许落入，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragenter",
              children: "onDragEnter"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragmove",
              children: "onDragMove"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ondragleave",
              children: "onDragLeave"
            }), "中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragbehavior10",
      children: "DragBehavior10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragresult10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "DragResult"
      }), "为DROP_ENABLED后，可设置DragBehavior为复制（COPY）或剪切（MOVE）。当DragBehavior为复制（COPY）时，拖拽对象的角标会显示加号；为剪切（MOVE）时，拖拽对象的角标不会显示加号。DragBehavior用来向开发者描述数据的处理方式是复制（COPY）还是剪切（MOVE），但无法最终决定对数据的实际处理方式。DragBehavior会通过onDragEnd带回给数据拖出方，发起拖拽的一方可通过DragBehavior来区分做出的是复制（COPY）还是剪切（MOVE）数据的不同行为。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "COPY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定对数据的处理方式为复制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定对数据的处理方式为剪切。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "predragstatus12枚举说明",
      children: "PreDragStatus12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义拖拽手势触发前的各阶段状态。"
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
            children: "ACTION_DETECTING_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽手势启动阶段。(按下50ms时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "READY_TO_TRIGGER_DRAG_ACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽准备完成，可发起拖拽阶段。(按下500ms时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREVIEW_LIFT_STARTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽浮起动效发起阶段。(按下800ms时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREVIEW_LIFT_FINISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽浮起动效结束阶段。(浮起动效完全结束时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREVIEW_LANDING_STARTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽落回动效发起阶段。(落回动效发起时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREVIEW_LANDING_FINISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽落回动效结束阶段。(落回动效结束时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_CANCELED_BEFORE_DRAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽浮起落位动效中断。(已满足READY_TO_TRIGGER_DRAG_ACTION状态后，未达到动效阶段，手指抬手时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREPARING_FOR_DRAG_DETECTION18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拖拽准备完成，可发起拖拽阶段。(按下350ms时触发)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "unifieddata10",
      children: "UnifiedData10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type UnifiedData = UnifiedData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽相关的数据。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddata",
              children: "UnifiedData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽相关的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary10",
      children: "Summary10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Summary = Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽相关数据的简介。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#summary",
              children: "Summary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽相关数据的简介。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dataloadparams20",
      children: "DataLoadParams20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DataLoadParams = DataLoadParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "落入操作时使用的数据加载参数。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#dataloadparams20",
              children: "DataLoadParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落入操作时使用的数据加载参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datasyncoptions15",
      children: "DataSyncOptions15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DataSyncOptions = GetDataParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为startDataLoading的入参对象。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#getdataparams15",
              children: "GetDataParams"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf",
              children: "UDMF"
            }), "获取数据时的参数，包含目标路径、文件冲突选项、进度条类型等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondrageventcallback15",
      children: "OnDragEventCallback15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽事件的回调函数。"
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
              href: "#dragevent7",
              children: "DragEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "event为拖拽事件信息，包括拖拽点坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["extraParams为拖拽事件额外信息，需要解析为JSON格式，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraparams%E8%AF%B4%E6%98%8E",
              children: "extraParams"
            }), "说明。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dropoptions15",
      children: "DropOptions15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置落入过程的参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disableDataPrefetch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置拖拽是否提前获取数据。true表示不提前获取数据，false表示提前获取数据，默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#startdataloading15",
              children: "startDataLoading"
            }), "获取数据时需设置该参数为true，防止拖拽提前获取数据。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragspringloadingconfiguration20",
      children: "DragSpringLoadingConfiguration20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DragSpringLoadingConfiguration = DragSpringLoadingConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义拖拽的悬停检测配置参数的接口。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragspringloadingconfiguration20",
              children: "DragSpringLoadingConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义拖拽的悬停检测配置参数的接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "springloadingcontext20",
      children: "SpringLoadingContext20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SpringLoadingContext = SpringLoadingContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#springloadingcontext20",
              children: "SpringLoadingContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，以便应用程序能访问拖拽状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置组件拖拽和落入",
      children: "示例1（设置组件拖拽和落入）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1展示了部分组件（如Image和Text等）拖拽和可落入区域的设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State targetImage: string = '';\n  @State targetText: string = 'Drag Text';\n  @State imageWidth: number = 100;\n  @State imageHeight: number = 100;\n  @State imgState: Visibility = Visibility.Visible;\n  @State abstractContent: string = \"abstract\";\n  @State textContent: string = \"\";\n  @State backGroundColor: Color = Color.Transparent;\n\n  @Builder\n  pixelMapBuilder() {\n    Column() {\n      // $r('app.media.icon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.icon'))\n        .width(120)\n        .height(120)\n        .backgroundColor(Color.Yellow)\n    }\n  }\n\n  // 获取Udmf数据\n  getDataFromUdmfRetry(event: DragEvent, callback: (data: DragEvent) => void) {\n    try {\n      let data: UnifiedData = event.getData();\n      if (!data) {\n        return false;\n      }\n      let records: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();\n      if (!records || records.length <= 0) {\n        return false;\n      }\n      callback(event);\n      return true;\n    } catch (e) {\n      console.error(`getData failed, code = ${(e as BusinessError).code}, message = ${(e as BusinessError).message}`);\n      return false;\n    }\n  }\n\n  // 首次获取Udmf数据失败后自动重试\n  getDataFromUdmf(event: DragEvent, callback: (data: DragEvent) => void) {\n    if (this.getDataFromUdmfRetry(event, callback)) {\n      return;\n    }\n    setTimeout(() => {\n      this.getDataFromUdmfRetry(event, callback);\n    }, 1500);\n  }\n\n  // 根据拖拽发起前的不同阶段更改背景色\n  private PreDragChange(preDragStatus: PreDragStatus): void {\n    if (preDragStatus == PreDragStatus.READY_TO_TRIGGER_DRAG_ACTION) {\n      this.backGroundColor = Color.Red;\n    } else if (preDragStatus == PreDragStatus.ACTION_CANCELED_BEFORE_DRAG\n      || preDragStatus == PreDragStatus.PREVIEW_LANDING_FINISHED) {\n      this.backGroundColor = Color.Blue;\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('start Drag')\n          .fontSize(18)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n        // $r('app.media.icon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.icon'))\n          .width(100)\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15 })\n          .visibility(this.imgState)\n          .onDragEnd((event) => {\n            // onDragEnd里取到的result值在接收方onDrop设置\n            if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n              this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag Success' });\n            } else if (event.getResult() === DragResult.DRAG_FAILED) {\n              this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag failed' });\n            }\n          })\n        Text('test drag event')\n          .width('100%')\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15 })\n          .copyOption(CopyOptions.InApp)\n        TextArea({ placeholder: 'please input words' })\n          .copyOption(CopyOptions.InApp)\n          .width('100%')\n          .height(50)\n          .draggable(true)\n        Search({ placeholder: 'please input you word' })\n          .searchButton('Search')\n          .width('100%')\n          .height(80)\n          .textFont({ size: 20 })\n\n        Column() {\n          Text('this is abstract')\n            .fontSize(20)\n            .width('100%')\n        }\n        .margin({ left: 40, top: 20 })\n        .width('100%')\n        .height(100)\n        .onDragStart((event) => {\n          this.backGroundColor = Color.Transparent;\n          let data: unifiedDataChannel.PlainText = new unifiedDataChannel.PlainText();\n          data.abstract = 'this is abstract';\n          data.textContent = 'this is content this is content';\n          (event as DragEvent).setData(new unifiedDataChannel.UnifiedData(data));\n        })\n        .onPreDrag((status: PreDragStatus) => {\n          this.PreDragChange(status);\n        })\n        .backgroundColor(this.backGroundColor)\n      }.width('45%')\n      .height('100%')\n\n      Column() {\n        Text('Drag Target Area')\n          .fontSize(20)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n        Image(this.targetImage)\n          .width(this.imageWidth)\n          .height(this.imageHeight)\n          .draggable(true)\n          .margin({ left: 15 })\n          .border({ color: Color.Black, width: 1 })\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDrop((dragEvent?: DragEvent) => {\n            this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n              let records: Array<unifiedDataChannel.UnifiedRecord> = event.getData().getRecords();\n              let rect: Rectangle = event.getPreviewRect();\n              this.imageWidth = Number(rect.width);\n              this.imageHeight = Number(rect.height);\n              this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n              event.useCustomDropAnimation = false;\n              this.imgState = Visibility.None;\n              // 显式设置result为successful，则将该值传递给拖出方的onDragEnd\n              event.setResult(DragResult.DRAG_SUCCESSFUL);\n            })\n          })\n\n        Text(this.targetText)\n          .width('100%')\n          .height(100)\n          .border({ color: Color.Black, width: 1 })\n          .margin(15)\n          .allowDrop([uniformTypeDescriptor.UniformDataType.PLAIN_TEXT])\n          .onDrop((dragEvent?: DragEvent) => {\n            this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n              let records: Array<unifiedDataChannel.UnifiedRecord> = event.getData().getRecords();\n              let plainText: unifiedDataChannel.PlainText = records[0] as unifiedDataChannel.PlainText;\n              this.targetText = plainText.textContent;\n            })\n          })\n\n        Column() {\n          Text(this.abstractContent).fontSize(20).width('100%')\n          Text(this.textContent).fontSize(15).width('100%')\n        }\n        .width('100%')\n        .height(100)\n        .margin(20)\n        .border({ color: Color.Black, width: 1 })\n        .allowDrop([uniformTypeDescriptor.UniformDataType.PLAIN_TEXT])\n        .onDrop((dragEvent?: DragEvent) => {\n          this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n            let records: Array<unifiedDataChannel.UnifiedRecord> = event.getData().getRecords();\n            let plainText: unifiedDataChannel.PlainText = records[0] as unifiedDataChannel.PlainText;\n            this.abstractContent = plainText.abstract as string;\n            this.textContent = plainText.textContent;\n          })\n        })\n      }.width('45%')\n      .height('100%')\n      .margin({ left: '5%' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840650)/* ["default"] */.A) + "",
        width: "497",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义落位动效",
      children: "示例2（自定义落位动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，示例2展示了通过自定义接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#executedropanimation18",
        children: "executeDropAnimation"
      }), "，实现落位动效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\n\n@Entry\n@Component\nstruct DropAnimationExample {\n  @State targetImage: string = '';\n  @State imageWidth: number = 100;\n  @State imageHeight: number = 100;\n  @State imgState: Visibility = Visibility.Visible;\n  customDropAnimation =\n    () => {\n      this.getUIContext().animateTo({ duration: 1000, curve: Curve.EaseOut, playMode: PlayMode.Normal }, () => {\n        this.imageWidth = 200;\n        this.imageHeight = 200;\n        this.imgState = Visibility.None;\n      })\n    }\n\n  build() {\n    Row() {\n      Column() {\n        // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.app_icon'))\n          .width(100)\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15, top: 40 })\n          .visibility(this.imgState)\n          .onDragStart((event) => {\n          })\n          .onDragEnd((event) => {\n            if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n              console.info('Drag Success');\n            } else if (event.getResult() === DragResult.DRAG_FAILED) {\n              console.error('Drag failed');\n            }\n          })\n      }.width('45%')\n      .height('100%')\n\n      Column() {\n        Text('Drag Target Area')\n          .fontSize(20)\n          .width(180)\n          .height(40)\n          .textAlign(TextAlign.Center)\n          .margin(10)\n          .backgroundColor('rgb(240,250,255)')\n        Column() {\n          Image(this.targetImage)\n            .width(this.imageWidth)\n            .height(this.imageHeight)\n        }\n        .draggable(true)\n        .margin({ left: 15 })\n        .border({ color: Color.Black, width: 1 })\n        .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n        // onDrop回调，获取拖拽图片的信息和尺寸并更新显示，同时启用并执行自定义下落动画\n        .onDrop((dragEvent: DragEvent) => {\n          let records: Array<unifiedDataChannel.UnifiedRecord> = dragEvent.getData().getRecords();\n          let rect: Rectangle = dragEvent.getPreviewRect();\n          this.imageWidth = Number(rect.width);\n          this.imageHeight = Number(rect.height);\n          this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n          dragEvent.useCustomDropAnimation = true;\n          dragEvent.executeDropAnimation(this.customDropAnimation)\n        })\n        .width(this.imageWidth)\n        .height(this.imageHeight)\n      }.width('45%')\n      .height('100%')\n      .margin({ left: '5%' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689100)/* ["default"] */.A) + "",
        width: "335",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3拖拽异步获取数据",
      children: "示例3（拖拽异步获取数据）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 15开始，示例3展示了通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#startdataloading15",
        children: "startDataLoading"
      }), "实现拖拽异步获取数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\nimport { fileUri, fileIo as fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct ImageExample {\n  @State uri: string = \"\";\n  @State blockArr: string[] = [];\n  uiContext = this.getUIContext();\n  udKey: string = '';\n\n  build() {\n    Column() {\n      Text('Image拖拽')\n        .fontSize('30dp')\n      Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceAround }) {\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.startIcon'))\n          .width(100)\n          .height(100)\n          .border({ width: 1 })\n          .draggable(true)\n          .onDragStart((event: DragEvent) => {\n            const context: Context | undefined = this.uiContext.getHostContext();\n            if (context) {\n              let data = context.resourceManager.getMediaContentSync($r('app.media.startIcon').id, 120);\n              const arrayBuffer: ArrayBuffer = data.buffer.slice(data.byteOffset, data.byteLength + data.byteOffset);\n              let filePath = context.filesDir + '/test.png';\n              let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n              fileIo.writeSync(file.fd, arrayBuffer);\n              // 获取图片的uri\n              let uri = fileUri.getUriFromPath(filePath);\n              let image: unifiedDataChannel.Image = new unifiedDataChannel.Image();\n              image.imageUri = uri;\n              let dragData: unifiedDataChannel.UnifiedData = new unifiedDataChannel.UnifiedData(image);\n              (event as DragEvent).setData(dragData);\n            }\n          })\n      }\n      .margin({ bottom: 20 })\n\n      Row() {\n        Column() {\n          Text('可释放区域')\n            .fontSize('15dp')\n            .height('10%')\n          List() {\n            ForEach(this.blockArr, (item: string, index) => {\n              ListItem() {\n                Image(item)\n                  .width(100)\n                  .height(100)\n                  .border({ width: 1 })\n              }\n              .margin({ left: 30, top: 30 })\n            }, (item: string) => item)\n          }\n          .border({ width: 1 })\n          .height('90%')\n          .width('100%')\n          .onDrop((event?: DragEvent, extraParams?: string) => {\n            console.info(\"enter onDrop\")\n            let context = this.uiContext.getHostContext() as common.UIAbilityContext;\n            let pathDir: string = context.distributedFilesDir;\n            let destUri = fileUri.getUriFromPath(pathDir);\n            // 创建DataProgressListener监听数据传输进度\n            let progressListener: unifiedDataChannel.DataProgressListener =\n              (progress: unifiedDataChannel.ProgressInfo, dragData: UnifiedData | null) => {\n                if (dragData != null) {\n                  // 获取数据记录数组\n                  let arr: Array<unifiedDataChannel.UnifiedRecord> = dragData.getRecords();\n                  if (arr.length > 0) {\n                    // 检查首记录类型是否为IMAGE\n                    if (arr[0].getType() === uniformTypeDescriptor.UniformDataType.IMAGE) {\n                      // 类型匹配成功，记录数据Uri\n                      let image = arr[0] as unifiedDataChannel.Image;\n                      this.uri = image.imageUri;\n                      this.blockArr.splice(JSON.parse(extraParams as string).insertIndex, 0, this.uri);\n                    }\n                  } else {\n                    console.info('dragData arr is null');\n                  }\n                } else {\n                  console.info('dragData is undefined');\n                }\n                console.info(`percentage: ${progress.progress}`);\n              };\n            // 设置异步数据加载参数项\n            let options: DataSyncOptions = {\n              destUri: destUri,\n              fileConflictOptions: unifiedDataChannel.FileConflictOptions.OVERWRITE,\n              progressIndicator: unifiedDataChannel.ProgressIndicator.DEFAULT,\n              dataProgressListener: progressListener,\n            }\n            try {\n              // 启动数据传输\n              this.udKey = (event as DragEvent).startDataLoading(options);\n              console.info(`udKey: ${this.udKey}`);\n            } catch (e) {\n              console.error(`startDataLoading errorCode: ${e.code}, errorMessage: ${e.message}`);\n            }\n          }, { disableDataPrefetch: true })\n        }\n        .height(\"50%\")\n        .width(\"90%\")\n        .border({ width: 1 })\n      }\n\n      Button('取消数据传输')\n        .onClick(() => {\n          try {\n            this.getUIContext().getDragController().cancelDataLoading(this.udKey);\n          } catch (e) {\n            console.error(`cancelDataLoading errorCode: ${e.code}, errorMessage: ${e.message}`);\n          }\n        })\n        .margin({ top: 10 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4获取当前拖拽的屏幕id",
      children: "示例4（获取当前拖拽的屏幕ID）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，示例4展示了通过onDragXXX（不支持onDragEnd）接口获取到拖拽事件，并调用拖拽事件里的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getdisplayid20",
        children: "getDisplayId"
      }), "接口获取屏幕ID。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State targetImage: string = '';\n  @State imageWidth: number = 100;\n  @State imageHeight: number = 100;\n  @State imgState: Visibility = Visibility.Visible;\n  @State backGroundColor: Color = Color.Transparent;\n  @State startDisplayId: number = -1;\n  @State enterDisplayId: number = -1;\n  @State moveDisplayId: number = -1;\n  @State leaveDisplayId: number = -1;\n  @State dropDisplayId: number = -1;\n\n  @Builder\n  pixelMapBuilder() {\n    Column() {\n      // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.app_icon'))\n        .width(120)\n        .height(120)\n        .backgroundColor(Color.Yellow)\n    }\n  }\n\n  getDataFromUdmfRetry(event: DragEvent, callback: (data: DragEvent) => void) {\n    try {\n      let data: UnifiedData = event.getData();\n      if (!data) {\n        return false;\n      }\n      let records: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();\n      if (!records || records.length <= 0) {\n        return false;\n      }\n      callback(event);\n      return true;\n    } catch (e) {\n      console.error(`getData failed, code = ${(e as BusinessError).code}, message = ${(e as BusinessError).message}`);\n      return false;\n    }\n  }\n\n  getDataFromUdmf(event: DragEvent, callback: (data: DragEvent) => void) {\n    if (this.getDataFromUdmfRetry(event, callback)) {\n      return;\n    }\n    setTimeout(() => {\n      this.getDataFromUdmfRetry(event, callback);\n    }, 1500);\n  }\n\n  private PreDragChange(preDragStatus: PreDragStatus): void {\n    if (preDragStatus == PreDragStatus.READY_TO_TRIGGER_DRAG_ACTION) {\n      this.backGroundColor = Color.Red;\n    } else if (preDragStatus == PreDragStatus.ACTION_CANCELED_BEFORE_DRAG\n      || preDragStatus == PreDragStatus.PREVIEW_LANDING_FINISHED) {\n      this.backGroundColor = Color.Blue;\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('start Drag')\n          .fontSize(18)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.startIcon'))\n          .width(100)\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15 })\n          .visibility(this.imgState)\n          .onDragStart((event) => {\n            let id = event.getDisplayId();\n            this.startDisplayId = id;\n          })\n\n          .onDragEnd((event) => {\n            if (event.getResult() === DragResult.DRAG_SUCCESSFUL) {\n              this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag Success' });\n            } else if (event.getResult() === DragResult.DRAG_FAILED) {\n              this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag failed' });\n            }\n          })\n\n        Text('displayID in onDragStart: ' + this.startDisplayId.toString())\n          .width('100%')\n          .height(50)\n          .draggable(true)\n          .margin({ left: 15 })\n        Text('displayID in onDragEnter: ' + this.enterDisplayId.toString())\n          .width('100%')\n          .height(50)\n          .draggable(true)\n          .margin({ left: 15 })\n        Text('displayID in onDragMove: ' + this.moveDisplayId.toString())\n          .width('100%')\n          .height(50)\n          .draggable(true)\n          .margin({ left: 15 })\n        Text('displayID in onDragLeave: ' + this.leaveDisplayId.toString())\n          .width('100%')\n          .height(50)\n          .draggable(true)\n          .margin({ left: 15 })\n        Text('displayID in onDrop: ' + this.dropDisplayId.toString())\n          .width('100%')\n          .height(50)\n          .draggable(true)\n          .margin({ left: 15 })\n          .onPreDrag((status: PreDragStatus) => {\n            this.PreDragChange(status);\n          })\n      }.width('45%')\n      .height('100%')\n\n      Column() {\n        Text('Drag Target Area')\n          .fontSize(20)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n        Image(this.targetImage)\n          .width(this.imageWidth)\n          .height(this.imageHeight)\n          .draggable(true)\n          .margin({ left: 15 })\n          .border({ color: Color.Black, width: 1 })\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDragEnter((event) => {\n            let id = event.getDisplayId();\n            this.enterDisplayId = id;\n          })\n          .onDragMove((event) => {\n            let id = event.getDisplayId();\n            this.moveDisplayId = id;\n          })\n          .onDragLeave((event) => {\n            let id = event.getDisplayId();\n            this.leaveDisplayId = id;\n          })\n          .onDrop((dragEvent: DragEvent) => {\n            let id = dragEvent.getDisplayId();\n            this.dropDisplayId = id;\n            this.getDataFromUdmf((dragEvent as DragEvent), (event: DragEvent) => {\n              let records: Array<unifiedDataChannel.UnifiedRecord> = event.getData().getRecords();\n              let rect: Rectangle = event.getPreviewRect();\n              this.imageWidth = Number(rect.width);\n              this.imageHeight = Number(rect.height);\n              this.targetImage = (records[0] as unifiedDataChannel.Image).imageUri;\n              event.useCustomDropAnimation = false;\n              this.imgState = Visibility.None;\n              event.setResult(DragResult.DRAG_SUCCESSFUL);\n            })\n          })\n      }.width('45%')\n      .height('100%')\n      .margin({ left: '5%' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(992951)/* ["default"] */.A) + "",
        width: "544",
        height: "536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5获取包名和是否是跨设备",
      children: "示例5（获取包名和是否是跨设备）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，示例5展示了通过onDragXXX接口获取到拖拽事件，调用拖拽事件里的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getdragsource20",
        children: "getDragSource"
      }), "接口获取包名，调用isRemote接口获取是否是跨设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State targetImage: string = '';\n  @State startDragSource: string = '';\n  @State startIsRemote: boolean = true;\n  @State enterDragSource: string = '';\n  @State enterIsRemote: boolean = true;\n\n  build() {\n    Column() {\n      Row() {\n        Column() {\n          Text('start Drag Area')\n            .fontSize(18)\n            .width('100%')\n            .height(40)\n            .margin(10)\n            .backgroundColor('#008888')\n          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n          Image($r('app.media.startIcon'))\n            .onDragStart((event) => {\n              this.startDragSource = (event as DragEvent).getDragSource();\n              this.startIsRemote = (event as DragEvent).isRemote();\n            })\n            .width(100)\n            .height(100)\n            .draggable(true)\n            .margin({ left: 15 })\n        }\n        .border({ color: Color.Black, width: 1 })\n        .width('45%')\n        .height('50%')\n\n        Column() {\n          Text('Drag Target Area')\n            .fontSize(20)\n            .width('100%')\n            .height(40)\n            .margin(10)\n            .backgroundColor('#008888')\n          Image(this.targetImage)\n            .width(100)\n            .height(100)\n            .draggable(true)\n            .margin({ left: 15 })\n            .border({ color: Color.Black, width: 1 })\n            .onDragEnter((event) => {\n              this.enterDragSource = (event as DragEvent).getDragSource();\n              this.enterIsRemote = (event as DragEvent).isRemote();\n            })\n            .onDrop(() => {\n            })\n        }\n        .border({ color: Color.Black, width: 1 })\n        .width('45%')\n        .height('50%')\n        .margin({ left: '5%' })\n      }\n      .height('70%')\n\n      Text('onDragStart dragSource: ' + this.startDragSource.toString() + '\\n' + 'onDragStart isRemote: ' +\n      this.startIsRemote.toString())\n        .width('100%')\n        .height(50)\n        .margin({ left: 15 })\n      Text('onDragEnter dragSource: ' + this.enterDragSource.toString() + '\\n' + 'onDragEnter isRemote: ' +\n      this.enterIsRemote.toString())\n        .width('100%')\n        .height(50)\n        .margin({ left: 15 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349570)/* ["default"] */.A) + "",
        width: "538",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6拖拽支持悬停检测",
      children: "示例6（拖拽支持悬停检测）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，示例6展示了通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondragspringloading20",
        children: "onDragSpringLoading"
      }), "接口注册回调，并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#springloadingcontext20",
        children: "SpringLoadingContext"
      }), "接口获取上下文（当前状态、通知序列）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State targetText: string = 'Drag Text';\n  @State state: number = 0;\n  @State currentNotifySequence: number = 0;\n  @State config: DragSpringLoadingConfiguration = {\n    stillTimeLimit: 200,\n    updateInterval: 300,\n    updateNotifyCount: 4,\n    updateToFinishInterval: 300\n  };\n\n  build() {\n    Row() {\n      Column() {\n        Text('start Drag')\n          .fontSize(18)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.startIcon'))\n          .id(\"ori_image\")\n          .width(100)\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15 })\n        Text('当前状态是： ' + this.state)\n          .fontSize(18)\n          .width('100%')\n          .height(40)\n          .margin(10)\n        Text('当前通知序列是： ' + this.currentNotifySequence)\n          .fontSize(18)\n          .width('100%')\n          .height(40)\n          .margin(10)\n      }\n      .width('45%')\n      .height('100%')\n\n      Column() {\n        Text('Drag Target Area')\n          .fontSize(20)\n          .width('100%')\n          .height(40)\n          .margin(10)\n          .backgroundColor('#008888')\n          .id(\"text\")\n        Image(\"\")\n          .width(100)\n          .height(100)\n          .draggable(true)\n          .margin({ left: 15 })\n          .border({ color: Color.Black, width: 2 })\n          .onDragSpringLoading((context: SpringLoadingContext) => {\n            this.state = context.state;\n            this.currentNotifySequence = context.currentNotifySequence;\n          }, this.config)\n      }\n      .width('45%')\n      .height('100%')\n      .margin({ left: '5%' })\n      .onDragSpringLoading((context: SpringLoadingContext) => {\n        this.state = context.state;\n        this.currentNotifySequence = context.currentNotifySequence;\n      }, this.config)\n      .id(\"column\")\n      .backgroundColor(Color.Grey)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997943)/* ["default"] */.A) + "",
        width: "386",
        height: "212"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7拖起方延迟提供数据",
      children: "示例7（拖起方延迟提供数据）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，示例7展示了在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondragstart",
        children: "onDragStart"
      }), "中调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setdataloadparams20",
        children: "setDataLoadParams"
      }), "延迟提供数据接口，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondrop",
        children: "onDrop"
      }), "中调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#startdataloading15",
        children: "startDataLoading"
      }), "异步获取数据接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel, uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';\nimport { fileUri, fileIo as fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct VideoExample {\n  @State uri: string = \"\";\n  @State blockArr: string[] = [];\n  uiContext = this.getUIContext();\n  udKey: string = '';\n\n  build() {\n    Column() {\n      Text('video拖拽')\n        .fontSize('30dp')\n      Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceAround }) {\n        // $rawfile('test1.mp4')需要替换为开发者所需的资源文件\n        Video({ src: $rawfile('test1.mp4'), controller: new VideoController() })\n          .width(200)\n          .height(200)\n          .border({ width: 1 })\n          .draggable(true)\n          .onDragStart((event: DragEvent) => {\n            const context: Context | undefined = this.uiContext.getHostContext();\n            if (context) {\n              let loadHandler: unifiedDataChannel.DataLoadHandler = (acceptableInfo) => {\n                console.info(`acceptableInfo recordCount ${acceptableInfo?.recordCount}`);\n                if (acceptableInfo?.types) {\n                  console.info(`acceptableInfo types ${Array.from(acceptableInfo.types)}`);\n                } else {\n                  console.error('acceptableInfo types is undefined');\n                }\n                let data = context.resourceManager.getRawFdSync('test1.mp4');\n                let filePath = context.filesDir + '/test1.mp4';\n                let file: fileIo.File = null!;\n                try {\n                  file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n                  let bufferSize = data.length as number;\n                  let buf = new ArrayBuffer(bufferSize);\n                  fileIo.readSync(data.fd, buf, { offset: data.offset, length: bufferSize });\n                  fileIo.writeSync(file.fd, buf, { offset: 0, length: bufferSize });\n                } catch (error) {\n                  console.error(`openSync errorCode: ${error.code}, errorMessage: ${error.message}`);\n                } finally {\n                  fileIo.closeSync(file.fd);\n                }\n                context.resourceManager.closeRawFdSync('test1.mp4')\n                this.uri = fileUri.getUriFromPath(filePath);\n                let videoMp: uniformDataStruct.FileUri = {\n                  uniformDataType: 'general.file-uri',\n                  oriUri: this.uri,\n                  fileType: 'general.video',\n                }\n                let unifiedRecord = new unifiedDataChannel.UnifiedRecord();\n                let unifiedData = new unifiedDataChannel.UnifiedData();\n                unifiedRecord.addEntry(uniformTypeDescriptor.UniformDataType.FILE_URI, videoMp);\n                unifiedData.addRecord(unifiedRecord);\n                return unifiedData;\n              }\n              (event as DragEvent).setDataLoadParams({\n                loadHandler: loadHandler,\n                dataLoadInfo: { types: new Set([uniformTypeDescriptor.UniformDataType.FILE_URI]), recordCount: 1 }\n              });\n            }\n          })\n      }\n      .margin({ bottom: 20 })\n\n      Row() {\n        Column() {\n          Text('可释放区域')\n            .fontSize('15dp')\n            .height('10%')\n          List() {\n            ForEach(this.blockArr, (item: string, index) => {\n              ListItem() {\n                Video({ src: item, controller: new VideoController() })\n                  .width(100)\n                  .height(100)\n                  .border({ width: 1 })\n              }\n              .margin({ left: 30, top: 30 })\n            }, (item: string) => item)\n          }\n          .border({ width: 1 })\n          .height('90%')\n          .width('100%')\n          .onDrop((event: DragEvent, extraParams?: string) => {\n            let context = this.uiContext.getHostContext() as common.UIAbilityContext;\n            let pathDir: string = context.distributedFilesDir;\n            let destUri = fileUri.getUriFromPath(pathDir);\n            let progressListener: unifiedDataChannel.DataProgressListener =\n              (progress: unifiedDataChannel.ProgressInfo, dragData: UnifiedData | null) => {\n                if (dragData != null) {\n                  let arr: Array<unifiedDataChannel.UnifiedRecord> = dragData.getRecords();\n                  if (arr.length > 0) {\n                    if (arr[0].getType() === uniformTypeDescriptor.UniformDataType.VIDEO) {\n                      this.blockArr.splice(JSON.parse(extraParams as string).insertIndex, 0, this.uri);\n                    }\n                  } else {\n                    console.info('dragData arr is null');\n                  }\n                } else {\n                  console.info('dragData is undefined');\n                }\n                console.info(`percentage: ${progress.progress}`);\n              };\n            let info: unifiedDataChannel.DataLoadInfo =\n              { types: new Set([uniformTypeDescriptor.UniformDataType.VIDEO]), recordCount: 100 }\n            let options: DataSyncOptions = {\n              destUri: destUri,\n              fileConflictOptions: unifiedDataChannel.FileConflictOptions.OVERWRITE,\n              progressIndicator: unifiedDataChannel.ProgressIndicator.DEFAULT,\n              dataProgressListener: progressListener,\n              acceptableInfo: info,\n            }\n            try {\n              this.udKey = (event as DragEvent).startDataLoading(options);\n              console.info(`udKey: ${this.udKey}`);\n            } catch (e) {\n              console.error(`startDataLoading errorCode: ${e.code}, errorMessage: ${e.message}`);\n            }\n          }, { disableDataPrefetch: true })\n        }\n        .height(\"50%\")\n        .width(\"90%\")\n        .border({ width: 1 })\n      }\n\n      Button('取消数据传输')\n        .onClick(() => {\n          try {\n            this.getUIContext().getDragController().cancelDataLoading(this.udKey);\n          } catch (e) {\n            console.error(`cancelDataLoading errorCode: ${e.code}, errorMessage: ${e.message}`);\n          }\n        })\n        .margin({ top: 10 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(563210)/* ["default"] */.A) + "",
        width: "599",
        height: "887"
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
52390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
992951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799818-25baaae8623d2a507cd6251a27a963e6.png");

},
563210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479469-22e1feeedaddc207bd2e560ee7b65b6a.gif");

},
71787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
997943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959468-4943863245750ed028dc9f2a33a9fbe0.gif");

},
816676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
349570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439513-3e038f63fee946d9c4cbbada906a963e.png");

},
226155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
59668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
313320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
840650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959466-ff2cef21c09fbe20fe9bcd058f2303b1.png");

},
689100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479467-f6fd0127db2b85cea2397fab128c767e.gif");

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