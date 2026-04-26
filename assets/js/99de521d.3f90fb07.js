"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417903"], {
132810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_dragcontroller_arkts_apis_uicontext_dragcontroller_md_99d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-dragcontroller-arkts-apis-uicontext-dragcontroller-md-99d.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_dragcontroller_arkts_apis_uicontext_dragcontroller_md_99d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller","title":"Class (DragController)","description":"提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Class (DragController)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-dragcontroller","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-dragcontroller"},"sidebar":"ref","previous":{"title":"Class (CursorController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller"},"next":{"title":"Class (DynamicSyncScene)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller.md


const frontMatter = {
	title: 'Class (DragController)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-dragcontroller',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-dragcontroller'
};
const contentTitle = 'Class (DragController)';

const assets = {

};



const toc = [{
  "value": "executeDrag11+",
  "id": "executedrag11",
  "level": 2
}, {
  "value": "executeDrag11+",
  "id": "executedrag11-1",
  "level": 2
}, {
  "value": "createDragAction11+",
  "id": "createdragaction11",
  "level": 2
}, {
  "value": "getDragPreview11+",
  "id": "getdragpreview11",
  "level": 2
}, {
  "value": "setDragEventStrictReportingEnabled12+",
  "id": "setdrageventstrictreportingenabled12",
  "level": 2
}, {
  "value": "cancelDataLoading15+",
  "id": "canceldataloading15",
  "level": 2
}, {
  "value": "notifyDragStartRequest18+",
  "id": "notifydragstartrequest18",
  "level": 2
}, {
  "value": "enableDropDisallowedBadge20+",
  "id": "enabledropdisallowedbadge20",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "class-dragcontroller",
        children: "Class (DragController)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863277)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 11开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下API需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getdragcontroller11",
          children: "getDragController()"
        }), "方法获取DragController实例，再通过此实例调用对应方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executedrag11",
      children: "executeDrag11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo, callback: AsyncCallback<dragController.DragEventParam>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过回调返回拖拽事件结果。"
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
            children: "custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
              children: "DragItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dragInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#draginfo",
              children: "dragController.DragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback",
              children: "AsyncCallback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#drageventparam12",
              children: "dragController.DragEventParam"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽结束返回结果的回调  - event：拖拽事件信息，仅包括拖拽结果。  - extraParams：拖拽事件额外信息。"
          })]
        })]
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal handling failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dragController } from '@kit.ArkUI';\nimport { unifiedDataChannel } from '@kit.ArkData';\n\nclass DragInfo {\n  event: DragEvent | undefined = undefined;\n  extraParams: string = '';\n}\n\n@Entry\n@Component\nstruct DragControllerPage {\n  @Builder\n  DraggingBuilder() {\n    Column() {\n      Text(\"DraggingBuilder\")\n    }\n    .width(100)\n    .height(100)\n    .backgroundColor(Color.Blue)\n  }\n\n  build() {\n    Column() {\n      Button('touch to execute drag')\n        .onTouch((event?: TouchEvent) => {\n          if (event) {\n            if (event.type == TouchType.Down) {\n              let text = new unifiedDataChannel.Text();\n              let unifiedData = new unifiedDataChannel.UnifiedData(text);\n\n              let dragInfo: dragController.DragInfo = {\n                pointerId: 0,\n                data: unifiedData,\n                extraParams: ''\n              };\n              let eve: DragInfo = new DragInfo();\n              this.getUIContext().getDragController().executeDrag(() => {\n                this.DraggingBuilder()\n              }, dragInfo, (err, eve) => {\n                if (eve.event) {\n                  if (eve.event.getResult() == DragResult.DRAG_SUCCESSFUL) {\n                    // ...\n                  } else if (eve.event.getResult() == DragResult.DRAG_FAILED) {\n                    // ...\n                  }\n                }\n              })\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617029)/* ["default"] */.A) + "",
        width: "334",
        height: "172"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executedrag11-1",
      children: "executeDrag11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo): Promise<dragController.DragEventParam>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过Promise返回拖拽事件结果。"
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
            children: "custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
              children: "DragItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dragInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#draginfo",
              children: "dragController.DragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽信息。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#drageventparam12",
              children: "dragController.DragEventParam"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽结束返回结果的回调  - event：拖拽事件信息，仅包括拖拽结果。  - extraParams：拖拽事件额外信息。"
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal handling failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dragController } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\nimport { unifiedDataChannel } from '@kit.ArkData';\n\nclass DragInfo {\n  event: DragEvent | undefined = undefined;\n  extraParams: string = '';\n}\n\n@Entry\n@Component\nstruct DragControllerPage {\n  @State pixmap: image.PixelMap | null = null;\n\n  @Builder\n  DraggingBuilder() {\n    Column() {\n      Text(\"DraggingBuilder\")\n    }\n    .width(100)\n    .height(100)\n    .backgroundColor(Color.Blue)\n  }\n\n  @Builder\n  PixmapBuilder() {\n    Column() {\n      Text(\"PixmapBuilder\")\n    }\n    .width(100)\n    .height(100)\n    .backgroundColor(Color.Blue)\n  }\n\n  build() {\n    Column() {\n      Button('touch to execute drag')\n        .onTouch((event?: TouchEvent) => {\n          if (event) {\n            if (event.type == TouchType.Down) {\n              let text = new unifiedDataChannel.Text();\n              let unifiedData = new unifiedDataChannel.UnifiedData(text);\n\n              let dragInfo: dragController.DragInfo = {\n                pointerId: 0,\n                data: unifiedData,\n                extraParams: ''\n              };\n              let pb: CustomBuilder = (): void => {\n                this.PixmapBuilder()\n              };\n              this.getUIContext().getComponentSnapshot().createFromBuilder(pb).then((pix: image.PixelMap) => {\n                this.pixmap = pix;\n                let dragItemInfo: DragItemInfo = {\n                  pixelMap: this.pixmap,\n                  builder: () => {\n                    this.DraggingBuilder()\n                  },\n                  extraInfo: \"DragItemInfoTest\"\n                };\n                let eve: DragInfo = new DragInfo();\n                this.getUIContext()\n                  .getDragController()\n                  .executeDrag(dragItemInfo, dragInfo)\n                  .then((eve) => {\n                    if (eve.event.getResult() == DragResult.DRAG_SUCCESSFUL) {\n                      // ...\n                    } else if (eve.event.getResult() == DragResult.DRAG_FAILED) {\n                      // ...\n                    }\n                  })\n                  .catch((err: Error) => {\n                  })\n              })\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491960)/* ["default"] */.A) + "",
        width: "338",
        height: "171"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createdragaction11",
      children: "createDragAction11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createDragAction(customArray: Array<CustomBuilder | DragItemInfo>, dragInfo: dragController.DragInfo): dragController.DragAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建拖拽的Action对象，需要显式指定拖拽背板图（可多个），以及拖拽的数据，跟手点等信息；当通过一个已创建的Action对象发起的拖拽未结束时，无法再次创建新的Action对象，接口会抛出异常；当Action对象的生命周期结束后，注册在该对象上的回调函数会失效，因此需要在一个尽量长的作用域下持有该对象，并在每次发起拖拽前通过createDragAction返回新的对象覆盖旧值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706312)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议控制传递的拖拽背板数量，传递过多容易导致拖起的效率问题。"
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
            children: "customArray"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
              children: "DragItemInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dragInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#draginfo",
              children: "dragController.DragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽信息。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragaction11",
              children: "dragController.DragAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建拖拽Action对象，主要用于后面实现注册监听拖拽状态改变事件和启动拖拽服务。"
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal handling failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在EntryAbility.ets中获取UI上下文并保存至LocalStorage中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\nlet uiContext: UIContext;\nlet localStorage: LocalStorage = new LocalStorage('uiContext');\n\nexport default class EntryAbility extends UIAbility {\n  storage: LocalStorage = localStorage;\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', this.storage, (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n      windowStage.getMainWindow((err, data) => {\n        if (err.code) {\n          console.error(`Failed to obtain the main window. Cause:${err.message}`);\n          return;\n        }\n        let windowClass: window.Window = data;\n        uiContext = windowClass.getUIContext();\n        this.storage.setOrCreate<UIContext>('uiContext', uiContext);\n        // 获取UIContext实例\n      });\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.通过this.getUIContext().getSharedLocalStorage()获取上下文，进而获取DragController对象实施后续操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dragController, componentSnapshot, UIContext, DragController } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\nimport { unifiedDataChannel } from '@kit.ArkData';\n\n@Entry()\n@Component\nstruct DragControllerPage {\n  @State pixmap: image.PixelMap | null = null;\n  private dragAction: dragController.DragAction | null = null;\n  customBuilders: Array<CustomBuilder | DragItemInfo> = new Array<CustomBuilder | DragItemInfo>();\n  storages = this.getUIContext().getSharedLocalStorage();\n\n  @Builder\n  DraggingBuilder() {\n    Column() {\n      Text(\"DraggingBuilder\")\n    }\n    .width(100)\n    .height(100)\n    .backgroundColor(Color.Blue)\n  }\n\n  build() {\n    Column() {\n      Button('多对象dragAction customBuilder拖拽').onTouch((event?: TouchEvent) => {\n        if (event) {\n          if (event.type == TouchType.Down) {\n            console.info(\"multi drag Down by listener\");\n            this.customBuilders.push(() => {\n              this.DraggingBuilder()\n            });\n            this.customBuilders.push(() => {\n              this.DraggingBuilder()\n            });\n            this.customBuilders.push(() => {\n              this.DraggingBuilder()\n            });\n            let text = new unifiedDataChannel.Text();\n            let unifiedData = new unifiedDataChannel.UnifiedData(text);\n            let dragInfo: dragController.DragInfo = {\n              pointerId: 0,\n              data: unifiedData,\n              extraParams: ''\n            };\n            try {\n              let uiContext: UIContext = this.storages?.get<UIContext>('uiContext') as UIContext;\n              this.dragAction = uiContext.getDragController().createDragAction(this.customBuilders, dragInfo);\n              if (!this.dragAction) {\n                console.info(\"listener dragAction is null\");\n                return;\n              }\n              this.dragAction.on('statusChange', (dragAndDropInfo) => {\n                if (dragAndDropInfo.status == dragController.DragStatus.STARTED) {\n                  console.info(\"drag has start\");\n                } else if (dragAndDropInfo.status == dragController.DragStatus.ENDED) {\n                  console.info(\"drag has end\");\n                  if (!this.dragAction) {\n                    return;\n                  }\n                  this.customBuilders.splice(0, this.customBuilders.length);\n                  this.dragAction.off('statusChange');\n                }\n              })\n              this.dragAction.startDrag().then(() => {\n              }).catch((err: Error) => {\n                console.error(`start drag Error:${err.message}`);\n              })\n            } catch (err) {\n              console.error(`create dragAction Error:${err.message}`);\n            }\n          }\n        }\n      }).margin({ top: 20 })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525377)/* ["default"] */.A) + "",
        width: "409",
        height: "195"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getdragpreview11",
      children: "getDragPreview11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDragPreview(): dragController.DragPreview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个代表拖拽背板的对象。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragpreview11",
              children: "dragController.DragPreview"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个代表拖拽背板的对象，提供背板样式设置的接口，在OnDrop和OnDragEnd回调中使用不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      }), " 通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#animate11",
        children: "animate"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setdrageventstrictreportingenabled12",
      children: "setDragEventStrictReportingEnabled12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDragEventStrictReportingEnabled(enable: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当目标从父组件拖拽到子组件时，通过该方法设置是否会触发父组件的onDragLeave的回调。"
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标从父组件拖拽到子组件时，是否会触发父组件的onDragLeave的回调。true表示触发父组件的onDragLeave的回调，false表示不触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\n export default class EntryAbility extends UIAbility {\n   onWindowStageCreate(windowStage: window.WindowStage): void {\n       windowStage.loadContent('pages/Index', (err, data) => {\n         if (err.code) {\n         return;\n       }\n       windowStage.getMainWindow((err, data) => {\n         if (err.code) {\n           return;\n         }\n         let windowClass: window.Window = data;\n         let uiContext: UIContext = windowClass.getUIContext();\n         uiContext.getDragController().setDragEventStrictReportingEnabled(true);\n     });\n   });\n }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "canceldataloading15",
      children: "cancelDataLoading15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancelDataLoading(key: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#startdataloading15",
        children: "startDataLoading"
      }), "获取拖拽数据时，可调用该接口取消数据传输。仅可在拖拽释放后调用。"]
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽数据的标识，用于区分每次拖拽。key可通过startDataLoading接口获取。"
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
            children: "190004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notifydragstartrequest18",
      children: "notifyDragStartRequest18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制应用是否可以发起拖拽。"
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
            children: "requestStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller#dragstartrequeststatus18",
              children: "dragController.DragStartRequestStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义应用是否可以发起拖拽。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { unifiedDataChannel } from '@kit.ArkData';\nimport { image } from '@kit.ImageKit';\nimport { dragController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct NormalEts {\n  @State finished: boolean = false;\n  @State timeout1: number = 1;\n  @State pixmap: image.PixelMap | undefined = undefined;\n  @State unifiedData1: unifiedDataChannel.UnifiedData | undefined = undefined;\n  @State previewData: DragItemInfo | undefined = undefined;\n\n  loadData() {\n    // 设置4s后才能发起拖拽\n    let timeout = setTimeout(() => {\n      this.getUIContext().getComponentSnapshot().get(\"image1\", (error: Error, pixmap: image.PixelMap) => {\n        this.pixmap = pixmap;\n        this.previewData = {\n          pixelMap: this.pixmap\n        };\n      });\n\n      let data: unifiedDataChannel.Image = new unifiedDataChannel.Image();\n      data.imageUri = \"app.media.startIcon\";\n      let unifiedData = new unifiedDataChannel.UnifiedData(data);\n      this.unifiedData1 = unifiedData;\n\n      this.getUIContext().getDragController().notifyDragStartRequest(dragController.DragStartRequestStatus.READY);\n    }, 4000);\n    this.timeout1 = timeout;\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      Image($r(\"app.media.startIcon\"))\n        .width(150)\n        .height(150)\n        .id(\"image1\")\n        .draggable(true)\n        .dragPreview(this.previewData)\n        .onPreDrag((status: PreDragStatus) => {\n          if (status == PreDragStatus.PREPARING_FOR_DRAG_DETECTION) {\n            this.loadData();\n          } else {\n            clearTimeout(this.timeout1);\n          }\n        })\n        .onDragStart((event: DragEvent) => {\n          if (this.finished == false) {\n            this.getUIContext()\n              .getDragController()\n              // 应用数据准备阶段，无法发起拖拽\n              .notifyDragStartRequest(dragController.DragStartRequestStatus.WAITING);\n          } else {\n            event.setData(this.unifiedData1);\n          }\n        })\n        .onDragEnd(() => {\n          this.finished = false;\n        })\n    }\n    .width('100%')\n    .height(400)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533792)/* ["default"] */.A) + "",
        width: "285",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enabledropdisallowedbadge20",
      children: "enableDropDisallowedBadge20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableDropDisallowedBadge(enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的类型与配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#allowdrop",
        children: "allowDrop"
      }), "无交集时可显示禁用角标。通常，当组件可以接收或处理拖拽数据，或当它返回DragBehavior.COPY向系统声明数据以复制方式处理时，拖拽对象会显示加号及数据编号的角标。如果返回DragBehavior.MOVE以向系统声明数据以剪切方式处理，拖拽对象将只显示数据编号的角标。当目标进行拖拽时，若系统决定或组件显式声明无法处理拖拽数据，可通过该方法检查是否应显示拖拽禁止角标。该接口暂不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
        children: "UIExtension"
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当组件的类型与配置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#allowdrop",
              children: "allowDrop"
            }), "无交集时可显示禁用角标，当目标进行拖拽时，通过enableDropDisallowedBadge方法检查是否显示拖拽禁止角标。true表示显示拖拽禁止角标，false表示不显示拖拽禁止角标。默认值为false。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过enableDropDisallowedBadge接口实现了对目标进行拖拽时显示拖拽禁止角标的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在EntryAbility.ets中调用enableDropDisallowedBadge接口，设置enabled参数为true。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\n export default class EntryAbility extends UIAbility {\n   onWindowStageCreate(windowStage: window.WindowStage): void {\n       windowStage.loadContent('pages/Index', (err, data) => {\n         if (err.code) {\n         return;\n       }\n       windowStage.getMainWindow((err, data) => {\n         if (err.code) {\n           return;\n         }\n         let windowClass: window.Window = data;\n         let uiContext: UIContext = windowClass.getUIContext();\n         uiContext.getDragController().enableDropDisallowedBadge(true);\n     });\n   });\n }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index.ets中拖拽图标icon至下方空白区域，显示拖拽禁止角标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 20 }) {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.startIcon'))\n        .width(120)\n        .height(120)\n      Text('这里是不能落入区域')\n      Column()\n        .width('100%')\n        .layoutWeight(1)\n        .allowDrop(null)\n        .onDrop(() => {\n        })\n    }.width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233031)/* ["default"] */.A) + "",
        width: "226",
        height: "202"
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
233031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439455-ed2629dfe21cb9318b070927e78be0eb.png");

},
533792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799760-028b52f48e615e55db37d5efa17dde81.gif");

},
863277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
491960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959408-bfcb6d06184cffa40894cdf7f227cdd4.gif");

},
525377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479409-25fbc2d4e38c3f080eae9716d12cb6fc.gif");

},
706312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
617029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439453-f93ee56fb09a77da758d7871b91b45e0.gif");

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