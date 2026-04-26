"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["425716"], {
738246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_foldsplitcontainer_ohos_arkui_advanced_foldsplitcontainer_md_f81_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-foldsplitcontainer-ohos-arkui-advanced-foldsplitcontainer-md-f81.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_foldsplitcontainer_ohos_arkui_advanced_foldsplitcontainer_md_f81_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer","title":"FoldSplitContainer","description":"FoldSplitContainer分栏布局，实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"FoldSplitContainer","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-foldsplitcontainer","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-foldsplitcontainer"},"sidebar":"ref","previous":{"title":"FolderStack","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack"},"next":{"title":"FormMenu","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-formmenu/ohos-arkui-advanced-formmenu"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer.md


const frontMatter = {
	title: 'FoldSplitContainer',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-foldsplitcontainer',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-foldsplitcontainer'
};
const contentTitle = 'FoldSplitContainer';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "FoldSplitContainer",
  "id": "foldsplitcontainer-1",
  "level": 2
}, {
  "value": "ExpandedRegionLayoutOptions",
  "id": "expandedregionlayoutoptions",
  "level": 2
}, {
  "value": "HoverModeRegionLayoutOptions",
  "id": "hovermoderegionlayoutoptions",
  "level": 2
}, {
  "value": "FoldedRegionLayoutOptions",
  "id": "foldedregionlayoutoptions",
  "level": 2
}, {
  "value": "OnHoverStatusChangeHandler",
  "id": "onhoverstatuschangehandler",
  "level": 2
}, {
  "value": "HoverModeStatus",
  "id": "hovermodestatus",
  "level": 2
}, {
  "value": "ExtraRegionPosition",
  "id": "extraregionposition",
  "level": 2
}, {
  "value": "PresetSplitRatio",
  "id": "presetsplitratio",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置二分栏）",
  "id": "示例1设置二分栏",
  "level": 3
}, {
  "value": "示例2（设置三分栏）",
  "id": "示例2设置三分栏",
  "level": 3
}, {
  "value": "示例3（展开态布局信息）",
  "id": "示例3展开态布局信息",
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
        id: "foldsplitcontainer",
        children: "FoldSplitContainer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FoldSplitContainer分栏布局，实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763319)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["窗口宽度小于等于600vp时默认使用二分栏，窗口宽度大于600vp时在上下分栏的同时可支持扩展区域，窗口宽度大于600vp且在横屏半折状态下可触发悬停态布局。悬停态布局时会增加折痕区的避让并且扩展区域不可以贯穿折痕区，悬停态可设置不展示扩展区域，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B",
          children: "示例"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FoldSplitContainer } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foldsplitcontainer-1",
      children: "FoldSplitContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FoldSplitContainer({primary: Callback<void>, secondary: Callback<void>, extra?: Callback<void>, expandedLayoutOptions: ExpandedRegionLayoutOptions, hoverModeLayoutOptions: HoverModeRegionLayoutOptions, foldedLayoutOptions: FoldedRegionLayoutOptions, animationOptions?: AnimateParam | null, onHoverStatusChange?: OnHoverStatusChangeHandler})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制的分栏布局。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要区域回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次要区域回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域回调函数，不传入的情况，没有对应区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expandedLayoutOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#expandedregionlayoutoptions",
              children: "ExpandedRegionLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展开态布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverModeLayoutOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hovermoderegionlayoutoptions",
              children: "HoverModeRegionLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "悬停态布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foldedLayoutOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#foldedregionlayoutoptions",
              children: "FoldedRegionLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠态布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animationOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AnimateParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHoverStatusChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onhoverstatuschangehandler",
              children: "OnHoverStatusChangeHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠屏进入或退出悬停模式时触发的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandedregionlayoutoptions",
      children: "ExpandedRegionLayoutOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展开态布局信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isExtraRegionPerpendicular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为true时，扩展区域从上到下贯穿整个组件；设置为false时，扩展区域不贯穿整个组件。此字段仅在extra有效时生效。  默认值：true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "verticalSplitRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主要区域与次要区域之间的高度比例。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#presetsplitratio",
              children: "PresetSplitRatio"
            }), ".LAYOUT_1V1"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "horizontalSplitRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主要区域与扩展区域之间的宽度比例。此字段在extra有效时生效。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#presetsplitratio",
              children: "PresetSplitRatio"
            }), ".LAYOUT_3V2"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraRegionPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraregionposition",
              children: "ExtraRegionPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域的位置信息。当isExtraRegionPerpendicular设置为false时，此字段生效。  默认值：ExtraRegionPosition.top"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hovermoderegionlayoutoptions",
      children: "HoverModeRegionLayoutOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "悬停态布局信息。"
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
            children: "showExtraRegion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可折叠屏幕在半折叠状态下是否显示扩展区域。设置为true时表示显示扩展区域，设置为false时表示不显示扩展区域。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "horizontalSplitRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主要区域与扩展区域之间的宽度比例，当且仅当extra有效时此字段才生效。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#presetsplitratio",
              children: "PresetSplitRatio"
            }), ".LAYOUT_3V2"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraRegionPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#extraregionposition",
              children: "ExtraRegionPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域的位置信息，当且仅当showExtraRegion设置为true时此字段才生效。  默认值：ExtraRegionPosition.top"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296172)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在悬停状态下，设备存在避让区域，布局计算时需考虑该区域的影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.在悬停模式下，屏幕上半部分为显示区域，下半部分为操作区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foldedregionlayoutoptions",
      children: "FoldedRegionLayoutOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "折叠态布局信息。"
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
            children: "verticalSplitRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主要区域与次要区域之间的高度比例。默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#presetsplitratio",
              children: "PresetSplitRatio"
            }), ".LAYOUT_1V1"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onhoverstatuschangehandler",
      children: "OnHoverStatusChangeHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onHoverStatusChange事件处理。"
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
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hovermodestatus",
              children: "HoverModeStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠屏进入或退出悬停模式时触发的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hovermodestatus",
      children: "HoverModeStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备或应用的折叠、旋转、窗口状态信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "foldStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#foldstatus10",
              children: "display.FoldStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的折叠状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHoverMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app当前是否处于悬停态。设置为true时表示当前为悬停态，设置为false时表示当前为非悬停态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appRotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStatusType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowstatustype11",
              children: "window.WindowStatusType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extraregionposition",
      children: "ExtraRegionPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展区域位置信息。"
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
            children: "TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域在组件上半区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域在组件下半区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "presetsplitratio",
      children: "PresetSplitRatio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区域比例。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "LAYOUT_1V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_3V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3:2比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_2V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.6666666666666666"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2:3比例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置二分栏",
      children: "示例1（设置二分栏）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了折叠屏二分栏在展开态、悬停态以及折叠态的区域控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FoldSplitContainer } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TwoColumns {\n  @Builder\n  privateRegion() {\n    Text(\"Primary\")\n      .backgroundColor('rgba(255, 0, 0, 0.1)')\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .height('100%')\n      .width('100%')\n  }\n\n  @Builder\n  secondaryRegion() {\n    Text(\"Secondary\")\n      .backgroundColor('rgba(0, 255, 0, 0.1)')\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .height('100%')\n      .width('100%')\n  }\n\n  build() {\n    RelativeContainer() {\n      FoldSplitContainer({\n        primary: () => {\n          this.privateRegion()\n        },\n        secondary: () => {\n          this.secondaryRegion()\n        }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "折叠态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "展开态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "悬停态"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置三分栏",
      children: "示例2（设置三分栏）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了折叠屏三分栏在展开态、悬停态以及折叠态的区域控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FoldSplitContainer } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ThreeColumns {\n  @Builder\n  privateRegion() {\n    Text(\"Primary\")\n      .backgroundColor('rgba(255, 0, 0, 0.1)')\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .height('100%')\n      .width('100%')\n  }\n\n  @Builder\n  secondaryRegion() {\n    Text(\"Secondary\")\n      .backgroundColor('rgba(0, 255, 0, 0.1)')\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .height('100%')\n      .width('100%')\n  }\n\n  @Builder\n  extraRegion() {\n    Text(\"Extra\")\n      .backgroundColor('rgba(0, 0, 255, 0.1)')\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .height('100%')\n      .width('100%')\n  }\n\n  build() {\n    RelativeContainer() {\n      FoldSplitContainer({\n        primary: () => {\n          this.privateRegion()\n        },\n        secondary: () => {\n          this.secondaryRegion()\n        },\n        extra: () => {\n          this.extraRegion()\n        }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "折叠态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "展开态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "悬停态"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3展开态布局信息",
      children: "示例3（展开态布局信息）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置ExpandedRegionLayoutOptions实现折叠屏展开态的布局信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  FoldSplitContainer,\n  PresetSplitRatio,\n  ExtraRegionPosition,\n  ExpandedRegionLayoutOptions,\n  HoverModeRegionLayoutOptions,\n  FoldedRegionLayoutOptions\n} from '@kit.ArkUI';\n\n@Component\nstruct Region {\n  @Prop title: string;\n  @BuilderParam content: () => void;\n  @Prop compBackgroundColor: string;\n\n  build() {\n    Column({ space: 8 }) {\n      Text(this.title)\n        .fontSize(\"24fp\")\n        .fontWeight(600)\n\n      Scroll() {\n        this.content()\n      }\n      .layoutWeight(1)\n      .width(\"100%\")\n    }\n    .backgroundColor(this.compBackgroundColor)\n    .width(\"100%\")\n    .height(\"100%\")\n    .padding(12)\n  }\n}\n\nconst noop = () => {\n};\n\n@Component\nstruct SwitchOption {\n  @Prop label: string = \"\"\n  @Prop value: boolean = false\n  public onChange: (checked: boolean) => void = noop;\n\n  build() {\n    Row() {\n      Text(this.label)\n      Blank()\n      Toggle({ type: ToggleType.Switch, isOn: this.value })\n        .onChange((isOn) => {\n          this.onChange(isOn);\n        })\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width(\"100%\")\n  }\n}\n\ninterface RadioOptions {\n  label: string;\n  value: Object | undefined | null;\n  onChecked: () => void;\n}\n\n@Component\nstruct RadioOption {\n  @Prop label: string;\n  @Prop value: Object | undefined | null;\n  @Prop options: Array<RadioOptions>;\n\n  build() {\n    Row() {\n      Text(this.label)\n      Blank()\n      Column({ space: 4 }) {\n        ForEach(this.options, (option: RadioOptions) => {\n          Row() {\n            Radio({\n              group: this.label,\n              value: JSON.stringify(option.value),\n            })\n              .checked(this.value === option.value)\n              .onChange((checked) => {\n                if (checked) {\n                  option.onChecked();\n                }\n              })\n            Text(option.label)\n          }\n        })\n      }\n      .alignItems(HorizontalAlign.Start)\n    }\n    .alignItems(VerticalAlign.Top)\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width(\"100%\")\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State expandedRegionLayoutOptions: ExpandedRegionLayoutOptions = {\n    horizontalSplitRatio: PresetSplitRatio.LAYOUT_3V2,\n    verticalSplitRatio: PresetSplitRatio.LAYOUT_1V1,\n    isExtraRegionPerpendicular: true,\n    extraRegionPosition: ExtraRegionPosition.TOP\n  };\n  @State foldingRegionLayoutOptions: HoverModeRegionLayoutOptions = {\n    horizontalSplitRatio: PresetSplitRatio.LAYOUT_3V2,\n    showExtraRegion: false,\n    extraRegionPosition: ExtraRegionPosition.TOP\n  };\n  @State foldedRegionLayoutOptions: FoldedRegionLayoutOptions = {\n    verticalSplitRatio: PresetSplitRatio.LAYOUT_1V1\n  };\n\n  @Builder\n  MajorRegion() {\n    Region({\n      title: \"折叠态配置\",\n      compBackgroundColor: \"rgba(255, 0, 0, 0.1)\",\n    }) {\n      Column({ space: 4 }) {\n        RadioOption({\n          label: \"折叠态垂直高度比\",\n          value: this.foldedRegionLayoutOptions.verticalSplitRatio,\n          options: [\n            {\n              label: \"1:1\",\n              value: PresetSplitRatio.LAYOUT_1V1,\n              onChecked: () => {\n                this.foldedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_1V1\n              }\n            },\n            {\n              label: \"2:3\",\n              value: PresetSplitRatio.LAYOUT_2V3,\n              onChecked: () => {\n                this.foldedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_2V3\n              }\n            },\n            {\n              label: \"3:2\",\n              value: PresetSplitRatio.LAYOUT_3V2,\n              onChecked: () => {\n                this.foldedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_3V2\n              }\n            },\n            {\n              label: \"未定义\",\n              value: undefined,\n              onChecked: () => {\n                this.foldedRegionLayoutOptions.verticalSplitRatio = undefined\n              }\n            }\n          ]\n        })\n      }\n      .constraintSize({ minHeight: \"100%\" })\n    }\n  }\n\n  @Builder\n  MinorRegion() {\n    Region({\n      title: \"悬停态配置\",\n      compBackgroundColor: \"rgba(0, 255, 0, 0.1)\"\n    }) {\n      Column({ space: 4 }) {\n        RadioOption({\n          label: \"悬停态水平宽度比\",\n          value: this.foldingRegionLayoutOptions.horizontalSplitRatio,\n          options: [\n            {\n              label: \"1:1\",\n              value: PresetSplitRatio.LAYOUT_1V1,\n              onChecked: () => {\n                this.foldingRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_1V1\n              }\n            },\n            {\n              label: \"2:3\",\n              value: PresetSplitRatio.LAYOUT_2V3,\n              onChecked: () => {\n                this.foldingRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_2V3\n              }\n            },\n            {\n              label: \"3:2\",\n              value: PresetSplitRatio.LAYOUT_3V2,\n              onChecked: () => {\n                this.foldingRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_3V2\n              }\n            },\n            {\n              label: \"未定义\",\n              value: undefined,\n              onChecked: () => {\n                this.foldingRegionLayoutOptions.horizontalSplitRatio = undefined\n              }\n            },\n          ]\n        })\n\n        SwitchOption({\n          label: \"悬停态是否显示扩展区\",\n          value: this.foldingRegionLayoutOptions.showExtraRegion,\n          onChange: (checked) => {\n            this.foldingRegionLayoutOptions.showExtraRegion = checked;\n          }\n        })\n\n        if (this.foldingRegionLayoutOptions.showExtraRegion) {\n          RadioOption({\n            label: \"悬停态扩展区位置\",\n            value: this.foldingRegionLayoutOptions.extraRegionPosition,\n            options: [\n              {\n                label: \"顶部\",\n                value: ExtraRegionPosition.TOP,\n                onChecked: () => {\n                  this.foldingRegionLayoutOptions.extraRegionPosition = ExtraRegionPosition.TOP\n                }\n              },\n              {\n                label: \"底部\",\n                value: ExtraRegionPosition.BOTTOM,\n                onChecked: () => {\n                  this.foldingRegionLayoutOptions.extraRegionPosition = ExtraRegionPosition.BOTTOM\n                }\n              },\n              {\n                label: \"未定义\",\n                value: undefined,\n                onChecked: () => {\n                  this.foldingRegionLayoutOptions.extraRegionPosition = undefined\n                }\n              },\n            ]\n          })\n        }\n      }\n      .constraintSize({ minHeight: \"100%\" })\n    }\n  }\n\n  @Builder\n  ExtraRegion() {\n    Region({\n      title: \"展开态配置\",\n      compBackgroundColor: \"rgba(0, 0, 255, 0.1)\"\n    }) {\n      Column({ space: 4 }) {\n        RadioOption({\n          label: \"展开态水平宽度比\",\n          value: this.expandedRegionLayoutOptions.horizontalSplitRatio,\n          options: [\n            {\n              label: \"1:1\",\n              value: PresetSplitRatio.LAYOUT_1V1,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_1V1\n              }\n            },\n            {\n              label: \"2:3\",\n              value: PresetSplitRatio.LAYOUT_2V3,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_2V3\n              }\n            },\n            {\n              label: \"3:2\",\n              value: PresetSplitRatio.LAYOUT_3V2,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.horizontalSplitRatio = PresetSplitRatio.LAYOUT_3V2\n              }\n            },\n            {\n              label: \"未定义\",\n              value: undefined,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.horizontalSplitRatio = undefined\n              }\n            },\n          ]\n        })\n\n        RadioOption({\n          label: \"展开态垂直高度比\",\n          value: this.expandedRegionLayoutOptions.verticalSplitRatio,\n          options: [\n            {\n              label: \"1:1\",\n              value: PresetSplitRatio.LAYOUT_1V1,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_1V1\n              }\n            },\n            {\n              label: \"2:3\",\n              value: PresetSplitRatio.LAYOUT_2V3,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_2V3\n              }\n            },\n            {\n              label: \"3:2\",\n              value: PresetSplitRatio.LAYOUT_3V2,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.verticalSplitRatio = PresetSplitRatio.LAYOUT_3V2\n              }\n            },\n            {\n              label: \"未定义\",\n              value: undefined,\n              onChecked: () => {\n                this.expandedRegionLayoutOptions.verticalSplitRatio = undefined\n              }\n            }\n          ]\n        })\n\n        SwitchOption({\n          label: \"展开态扩展区是否上下贯穿\",\n          value: this.expandedRegionLayoutOptions.isExtraRegionPerpendicular,\n          onChange: (checked) => {\n            this.expandedRegionLayoutOptions.isExtraRegionPerpendicular = checked;\n          }\n        })\n\n        if (!this.expandedRegionLayoutOptions.isExtraRegionPerpendicular) {\n          RadioOption({\n            label: \"展开态扩展区位置\",\n            value: this.expandedRegionLayoutOptions.extraRegionPosition,\n            options: [\n              {\n                label: \"顶部\",\n                value: ExtraRegionPosition.TOP,\n                onChecked: () => {\n                  this.expandedRegionLayoutOptions.extraRegionPosition = ExtraRegionPosition.TOP\n                }\n              },\n              {\n                label: \"底部\",\n                value: ExtraRegionPosition.BOTTOM,\n                onChecked: () => {\n                  this.expandedRegionLayoutOptions.extraRegionPosition = ExtraRegionPosition.BOTTOM\n                }\n              },\n              {\n                label: \"未定义\",\n                value: undefined,\n                onChecked: () => {\n                  this.expandedRegionLayoutOptions.extraRegionPosition = undefined\n                }\n              },\n            ]\n          })\n        }\n      }\n      .constraintSize({ minHeight: \"100%\" })\n    }\n  }\n\n  build() {\n    Column() {\n      FoldSplitContainer({\n        primary: () => {\n          this.MajorRegion()\n        },\n        secondary: () => {\n          this.MinorRegion()\n        },\n        extra: () => {\n          this.ExtraRegion()\n        },\n        expandedLayoutOptions: this.expandedRegionLayoutOptions,\n        hoverModeLayoutOptions: this.foldingRegionLayoutOptions,\n        foldedLayoutOptions: this.foldedRegionLayoutOptions,\n      })\n    }\n    .width(\"100%\")\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "折叠态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "展开态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "悬停态"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
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
763319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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