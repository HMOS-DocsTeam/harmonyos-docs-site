"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483364"], {
193784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_waterflow_ts_container_waterflow_md_194_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-scroll-and-swipe-ts-container-waterflow-ts-container-waterflow-md-194.json
var site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_waterflow_ts_container_waterflow_md_194_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow","title":"WaterFlow","description":"瀑布流容器，由“行”和“列”分割的单元格所组成，通过容器自身的排列规则，将不同大小的“项目”自上而下，如瀑布般紧密布局。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow.md","sourceDirName":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow","slug":"/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"WaterFlow","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-waterflow"},"sidebar":"ref","previous":{"title":"ArcSwiper","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper"},"next":{"title":"FlowItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow.md


const frontMatter = {
	title: 'WaterFlow',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-waterflow'
};
const contentTitle = 'WaterFlow';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "WaterFlowOptions对象说明",
  "id": "waterflowoptions对象说明",
  "level": 2
}, {
  "value": "WaterFlowSections12+",
  "id": "waterflowsections12",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "splice12+",
  "id": "splice12",
  "level": 3
}, {
  "value": "push12+",
  "id": "push12",
  "level": 3
}, {
  "value": "update12+",
  "id": "update12",
  "level": 3
}, {
  "value": "values12+",
  "id": "values12",
  "level": 3
}, {
  "value": "length12+",
  "id": "length12",
  "level": 3
}, {
  "value": "SectionOptions12+对象说明",
  "id": "sectionoptions12对象说明",
  "level": 2
}, {
  "value": "GetItemMainSizeByIndex12+",
  "id": "getitemmainsizebyindex12",
  "level": 2
}, {
  "value": "WaterFlowLayoutMode12+枚举说明",
  "id": "waterflowlayoutmode12枚举说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "columnsTemplate",
  "id": "columnstemplate",
  "level": 3
}, {
  "value": "columnsTemplate22+",
  "id": "columnstemplate22",
  "level": 3
}, {
  "value": "rowsTemplate",
  "id": "rowstemplate",
  "level": 3
}, {
  "value": "itemConstraintSize",
  "id": "itemconstraintsize",
  "level": 3
}, {
  "value": "columnsGap",
  "id": "columnsgap",
  "level": 3
}, {
  "value": "rowsGap",
  "id": "rowsgap",
  "level": 3
}, {
  "value": "layoutDirection",
  "id": "layoutdirection",
  "level": 3
}, {
  "value": "enableScrollInteraction10+",
  "id": "enablescrollinteraction10",
  "level": 3
}, {
  "value": "nestedScroll10+",
  "id": "nestedscroll10",
  "level": 3
}, {
  "value": "friction10+",
  "id": "friction10",
  "level": 3
}, {
  "value": "cachedCount11+",
  "id": "cachedcount11",
  "level": 3
}, {
  "value": "cachedCount14+",
  "id": "cachedcount14",
  "level": 3
}, {
  "value": "syncLoad20+",
  "id": "syncload20",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onReachStart",
  "id": "onreachstart",
  "level": 3
}, {
  "value": "onReachEnd",
  "id": "onreachend",
  "level": 3
}, {
  "value": "onScrollFrameBegin10+",
  "id": "onscrollframebegin10",
  "level": 3
}, {
  "value": "onScrollIndex11+",
  "id": "onscrollindex11",
  "level": 3
}, {
  "value": "UIWaterFlowEvent19+",
  "id": "uiwaterflowevent19",
  "level": 2
}, {
  "value": "setOnWillScroll19+",
  "id": "setonwillscroll19",
  "level": 3
}, {
  "value": "setOnDidScroll19+",
  "id": "setondidscroll19",
  "level": 3
}, {
  "value": "setOnScrollIndex19+",
  "id": "setonscrollindex19",
  "level": 3
}, {
  "value": "OnWaterFlowScrollIndexCallback19+",
  "id": "onwaterflowscrollindexcallback19",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（使用基本瀑布流）",
  "id": "示例1使用基本瀑布流",
  "level": 3
}, {
  "value": "示例2（自动计算列数）",
  "id": "示例2自动计算列数",
  "level": 3
}, {
  "value": "示例3（使用分组）",
  "id": "示例3使用分组",
  "level": 3
}, {
  "value": "示例4（双指缩放改变列数）",
  "id": "示例4双指缩放改变列数",
  "level": 3
}, {
  "value": "示例5（设置边缘渐隐效果）",
  "id": "示例5设置边缘渐隐效果",
  "level": 3
}, {
  "value": "示例6（单边边缘效果）",
  "id": "示例6单边边缘效果",
  "level": 3
}, {
  "value": "示例7（WaterFlow组件设置和改变尾部组件）",
  "id": "示例7waterflow组件设置和改变尾部组件",
  "level": 3
}, {
  "value": "示例8（WaterFlow组件实现下拉刷新）",
  "id": "示例8waterflow组件实现下拉刷新",
  "level": 3
}, {
  "value": "示例9（WaterFlow组件基于断点配置列数）",
  "id": "示例9waterflow组件基于断点配置列数",
  "level": 3
}, {
  "value": "示例10（WaterFlow组件实现获取内容高度）",
  "id": "示例10waterflow组件实现获取内容高度",
  "level": 3
}, {
  "value": "示例11（设置滚动事件）",
  "id": "示例11设置滚动事件",
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
        id: "waterflow",
        children: "WaterFlow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流容器，由“行”和“列”分割的单元格所组成，通过容器自身的排列规则，将不同大小的“项目”自上而下，如瀑布般紧密布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710264)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 9 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow组件支持展示瀑布流布局，不支持编辑模式和子元素拖动功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement",
        children: "手势拦截增强"
      }), "进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
        children: "FlowItem"
      }), "子组件和自定义组件。自定义组件在WaterFlow下使用时，建议使用FlowItem作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持通过渲染控制类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "if/else"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638831)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow子组件的visibility属性设置为None时不显示，但该子组件周围的columnsGap、rowsGap、margin仍会生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在涉及大量子组件的情况下，建议采用懒加载、缓存数据、组件复用、固定宽高以及布局优化等方法，以提升性能和减少内存占用。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-waterflow-performance-optimization",
        children: "优化瀑布流加载慢丢帧问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纵向布局时，WaterFlow会计算每一列中已放置子组件的累计高度，并将新子组件放入累计高度最小的那一列，以保持整体布局紧凑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若多个列的高度相同，优先放入最左边的列。在RTL模式下，优先放入最右边的列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，WaterFlow单个子组件的宽高最大为16777216px；API version 20及之前，WaterFlow单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow(options?: WaterFlowOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建瀑布流容器。"
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "WaterFlowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瀑布流组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "waterflowoptions对象说明",
      children: "WaterFlowOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流组件参数对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "footer"
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
            children: ["设置WaterFlow尾部组件，用于在瀑布流末尾显示自定义内容（如加载提示、底部标识等）。不设置时不显示尾部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  使用方法参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
              children: "示例1"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "footerContent18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置WaterFlow尾部组件。  该参数的优先级高于参数footer，即同时设置footer和footerContent时，以footerContent设置的组件为准。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scroller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可滚动组件的控制器，与可滚动组件绑定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不允许和其他滚动类组件，如：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
              children: "ArcList"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
              children: "Scroll"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
              children: "WaterFlow"
            }), "绑定同一个滚动控制对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sections12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflowsections12",
              children: "WaterFlowSections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置FlowItem分组，实现同一个瀑布流组件内部各分组使用不同列数混合布局。适用于需要在不同区域使用不同列数布局的场景。不设置时使用统一列数布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 使用分组混合布局时会忽略", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnstemplate",
              children: "columnsTemplate"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rowstemplate",
              children: "rowsTemplate"
            }), "属性。  2. 使用分组混合布局时不支持单独设置footer，可以使用最后一个分组作为尾部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflowlayoutmode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "WaterFlowLayoutMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置WaterFlow的布局模式，根据使用场景选择更切合的模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflowlayoutmode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ALWAYS_TOP_DOWN"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "waterflowsections12",
      children: "WaterFlowSections12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流分组信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(248932)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用splice、push、update修改分组信息后需要保证所有分组子节点总数与瀑布流实际子节点总数一致，否则会出现瀑布流因为不能正常布局而无法滑动的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个瀑布流分组。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "splice12",
      children: "splice12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除或者替换已存在的分组和/或添加新分组。"
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果索引是负数，则从末尾开始计算，使用start + WaterFlowSections.length()。  2. 如果 start < -WaterFlowSections.length()，则使用0。  3. 如果 start >= WaterFlowSections.length()，则在最后添加新分组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要从start开始删除的分组数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果省略了deleteCount，或者其值大于或等于由start指定的位置到WaterFlowSections末尾的分组数量，那么从start到WaterFlowSections末尾的所有分组将被删除。  2. 如果deleteCount是0或者负数，则不会删除任何分组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sections"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SectionOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要从start开始加入的分组。如果不指定，splice()将只从瀑布流中删除分组。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分组修改成功返回true；修改失败（要加入的分组中有任意分组的itemsCount不是非负数）返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "push12",
      children: "push12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "push(section: SectionOptions): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定分组添加到瀑布流末尾。"
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
            children: "section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SectionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加到瀑布流末尾的分组。"
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
            children: "分组添加成功返回true，添加失败（新分组的itemsCount不是非负数）返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update12",
      children: "update12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "update(sectionIndex: number, section: SectionOptions): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改指定索引分组的配置信息。"
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
            children: "sectionIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从0开始计算的索引，会转换为整数，表示要修改的分组的位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果索引是负数，则从末尾开始计算，使用sectionIndex + WaterFlowSections.length()。  2. 如果sectionIndex < -WaterFlowSections.length()，则使用0。  3. 如果sectionIndex >= WaterFlowSections.length()，则在最后添加新分组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SectionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的分组信息。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分组是否更新成功，新分组的itemsCount不是非负数时返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "values12",
      children: "values12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "values(): Array<SectionOptions>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取瀑布流中所有分组配置信息。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SectionOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瀑布流中所有分组配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "length12",
      children: "length12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "length(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取瀑布流中分组数量。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瀑布流中分组数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sectionoptions12对象说明",
      children: "SectionOptions12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FlowItem分组配置信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "itemsCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分组中FlowItem数量，必须是非负数。若splice、push、update方法收到的分组中有分组的itemsCount小于0，则不会执行该方法。 避免使用itemsCount为0的分组，这可能导致布局计算异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crossCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纵向布局时为列数，横向布局时为行数，默认值：1。小于1的按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnsGap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该分组的列间距，不设置该参数时默认使用瀑布流的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnsgap",
              children: "columnsGap"
            }), "，设置非法值时使用0vp。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rowsGap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该分组的行间距，不设置该参数时默认使用瀑布流的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rowsgap",
              children: "rowsGap"
            }), "，设置非法值时使用0vp。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onGetItemMainSizeByIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#getitemmainsizebyindex12",
              children: "GetItemMainSizeByIndex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["瀑布流组件布局过程中获取指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 同时使用onGetItemMainSizeByIndex和FlowItem的宽高属性时，主轴大小以onGetItemMainSizeByIndex返回结果为准，onGetItemMainSizeByIndex会覆盖FlowItem的主轴长度。  2. 使用onGetItemMainSizeByIndex可以提高瀑布流跳转到指定位置或index时的效率，避免混用设置onGetItemMainSizeByIndex和未设置的分组，会导致布局异常。  3. onGetItemMainSizeByIndex返回负数时FlowItem高度为0。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getitemmainsizebyindex12",
      children: "GetItemMainSizeByIndex12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GetItemMainSizeByIndex = (index: number) => number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据index获取指定Item的主轴大小。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlowItem在WaterFlow中的索引。  取值范围：[0, 子节点总数-1]"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "waterflowlayoutmode12枚举说明",
      children: "WaterFlowLayoutMode12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流组件布局模式枚举。"
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
            children: "ALWAYS_TOP_DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认的从上到下的布局模式。视窗内的FlowItem依赖视窗上方所有FlowItem的布局信息。因此跳转或切换列数时，需要计算出上方所有的FlowItem的布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLIDING_WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["移动窗口式的布局模式。只考虑视窗内的布局信息，对视窗上方的FlowItem没有依赖关系，因此向后跳转或切换列数时只需要布局视窗内的FlowItem。建议优先采用该模式，尤其在应用需要支持屏幕旋转或动态切换列数的场景下。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 无动画跳转到较远的位置时，会以目标位置为基准，向前或向后布局FlowItem。这之后如果滑回跳转前的位置，内容的布局效果可能和之前不一致。 这个效果会导致跳转后回滑到顶部时，顶部节点可能不对齐。所以该布局模式下会在滑动到顶部后自动调整布局，保证顶部对齐。在有多个分组的情况下，会在滑动结束时调整在视窗内的分组。  2. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "scroller"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#currentoffset",
              children: "currentOffset"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#offset23",
              children: "offset"
            }), "接口返回的总偏移量在触发跳转或数据更新后不准确，在回滑到顶部时会重新校准，从API version 23开始，新增offset接口。  3. 如果在同一帧内调用跳转（如无动画的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
              children: "scrollToIndex"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolledge",
              children: "scrollEdge"
            }), "）和输入偏移量（如滑动手势或滚动动画），两者都会生效。  4. 调用无动画的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
              children: "scrollToIndex"
            }), "进行跳转，如果跳转到较远位置（超过视窗内的FlowItem数量的位置）时，移动窗口模式对总偏移量进行估算。  5. 仅在API version 18及以上版本中支持滚动条", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#scrollbar11",
              children: "scrollBar"
            }), "显示。低于此版本时，设置滚动条将不显示。"]
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对比维度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ALWAYS_TOP_DOWN (默认)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SLIDING_WINDOW"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定列数、简单瀑布流"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态列数、大数据量、屏幕旋转"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "布局策略"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从顶部开始完整布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动窗口式布局"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "性能特点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖上方所有 FlowItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只考虑视窗内布局"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转效率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要计算上方所有布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快速跳转，无需完整计算"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列数切换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要重新计算全部布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只重新布局视窗内容"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕旋转"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，但性能较差"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，性能好"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "滚动条显示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "始终支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 18+ 支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "布局一致性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "始终保持一致"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转后可能不一致"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#%E5%B1%9E%E6%80%A7",
        children: "滚动组件通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117784)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlow组件使用通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip12+"
      }), "和通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip18",
        children: "clip18+"
      }), "时默认值都为true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlow组件内容裁剪模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#contentclipmode14%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ContentClipMode14+枚举说明"
      }), "为ContentClipMode.CONTENT_ONLY，padding区域会被裁剪不显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnstemplate",
      children: "columnsTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前瀑布流组件布局列的数量，不设置时默认1列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，'1fr 1fr 2fr' 是将父组件分3列，将父组件允许的宽分为4等份，第1列占1份，第2列占1份，第3列占2份。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可使用columnsTemplate('repeat(auto-fill,track-size)')根据给定的列宽track-size自动计算列数，其中repeat、auto-fill为关键字，track-size为可设置的宽度，支持的单位包括px、vp、%或有效数字，默认单位为vp，使用方法参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E8%87%AA%E5%8A%A8%E8%AE%A1%E7%AE%97%E5%88%97%E6%95%B0",
        children: "示例2"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前瀑布流组件布局列的数量。  默认值：'1fr'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnstemplate22",
      children: "columnsTemplate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate(value: string | ItemFillPolicy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前瀑布流组件布局列的数量，不设置时默认1列。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当value设置为string类型时，使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#columnstemplate",
        children: "columnsTemplate(value: string)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当value设置为ItemFillPolicy类型时，将根据WaterFlow组件宽度对应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout#%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8%E6%96%AD%E7%82%B9",
        children: "断点类型"
      }), "确定列数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，ItemFillPolicy.BREAKPOINT_DEFAULT在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列，且每列均为1fr。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#itemfillpolicy22",
              children: "ItemFillPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rowstemplate",
      children: "rowsTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsTemplate(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前瀑布流组件布局行的数量，不设置时默认1行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，'1fr 1fr 2fr'是将父组件分3行，将父组件允许的高分为4等份，第1行占1份，第2行占1份，第3行占2份。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用rowsTemplate('repeat(auto-fill,track-size)')根据给定的行高track-size自动计算行数，其中repeat、auto-fill为关键字，track-size为可设置的高度，支持的单位包括px、vp、%或有效数字，默认单位为vp。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前瀑布流组件布局行的数量。  默认值：'1fr'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "itemconstraintsize",
      children: "itemConstraintSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "itemConstraintSize(value: ConstraintSizeOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置约束尺寸，子组件布局时，进行尺寸范围限制。使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["约束尺寸。设置小于0的值，参数不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.同时设置itemConstraintSize和FlowItem的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
              children: "constraintSize"
            }), "属性时，minWidth/minHeight会取其中的最大值，maxWidth/maxHeight会取其中的最小值，调整后的值作为FlowItem的constraintSize处理。  2.只设置itemConstraintSize时，相当于对WaterFlow所有子组件设置了相同的constraintSize。  3.itemConstraintSize通过以上两种方式转换成FlowItem的constraintSize后的生效规则与通用属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
              children: "constraintSize"
            }), "相同。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnsgap",
      children: "columnsGap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsGap(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列与列的间距。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列与列的间距。  默认值：0  取值范围：[0, +∞)，小于0时按0处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rowsgap",
      children: "rowsGap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsGap(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置行与行的间距。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行与行的间距。  默认值：0  取值范围：[0, +∞)，小于0时按0处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layoutdirection",
      children: "layoutDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutDirection(value: FlexDirection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置布局的主轴方向。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#flexdirection",
              children: "FlexDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布局的主轴方向。  默认值：FlexDirection.Column"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutDirection优先级高于rowsTemplate和columnsTemplate。根据layoutDirection设置情况，分为以下三种设置模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "layoutDirection设置纵向布局（FlexDirection.Column 或 FlexDirection.ColumnReverse）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时columnsTemplate有效（如果未设置，取默认值）。例如columnsTemplate设置为'1fr 1fr'、rowsTemplate设置为'1fr 1fr 1fr'时，瀑布流组件纵向布局，辅轴均分成横向2列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "layoutDirection设置横向布局（FlexDirection.Row 或 FlexDirection.RowReverse）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时rowsTemplate有效（如果未设置，取默认值）。例如columnsTemplate设置为'1fr 1fr'、rowsTemplate设置为'1fr 1fr 1fr'时，瀑布流组件横向布局，辅轴均分成纵向3列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "layoutDirection未设置布局方向"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局方向为layoutDirection的默认值：FlexDirection.Column，此时columnsTemplate有效。例如columnsTemplate设置为'1fr 1fr'、rowsTemplate设置为'1fr 1fr 1fr'时，瀑布流组件纵向布局，辅轴均分成横向2列。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablescrollinteraction10",
      children: "enableScrollInteraction10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableScrollInteraction(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持滚动手势。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            }), "的滚动接口。  默认值：true"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(949613)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件无法通过鼠标按下拖动操作进行滚动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nestedscroll10",
      children: "nestedScroll10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nestedScroll(value: NestedScrollOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#%E7%A4%BA%E4%BE%8B3%E5%B5%8C%E5%A5%97%E6%BB%9A%E5%8A%A8%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F%E4%BA%8C",
        children: "嵌套滚动实现方式二"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#nestedscrolloptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "NestedScrollOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "嵌套滚动选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friction10",
      children: "friction10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "friction(value: number | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount11",
      children: "cachedCount11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置预加载的FlowItem数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和开启了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
        children: "virtualScroll"
      }), "开关的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "中生效，超出显示及缓存范围的FlowItem会被释放。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载的FlowItem的数量。  默认值：根据屏幕内显示的节点个数设置，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount14",
      children: "cachedCount14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(count: number, show: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置预加载的FlowItem数量，并配置是否显示预加载节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#clipcontent14",
        children: "clipContent"
      }), "属性可以显示出预加载节点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和开启了virtualScroll开关的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "中生效，超出显示及缓存范围的FlowItem会被释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
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
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载的FlowItem的数量。  默认值：根据屏幕内显示的节点个数设置，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被预加载的FlowItem是否需要显示。设置为true时显示预加载的FlowItem，设置为false时不显示预加载的FlowItem。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syncload20",
      children: "syncLoad20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "syncLoad(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否同步加载WaterFlow区域内所有子组件。"
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否同步加载WaterFlow区域内所有子组件。  true表示同步加载，false表示异步加载。  默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为false时，在首次显示、不带动画", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
              children: "scrollToIndex"
            }), "跳转场景，若当帧布局耗时超过50ms，会将WaterFlow区域内尚未布局的子组件延后到下一帧进行布局。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#%E4%BA%8B%E4%BB%B6",
        children: "滚动组件通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachstart",
      children: "onReachStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachStart(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流内容到达起始位置时触发。"
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
            children: "瀑布流内容到达起始位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachend",
      children: "onReachEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachEnd(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流内容到达末尾位置时触发。"
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
            children: "瀑布流内容到达末尾位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollframebegin10",
      children: "onScrollFrameBegin10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollFrameBegin(event: OnScrollFrameBeginCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，瀑布流将按照返回值的实际滑动量进行滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件时触发该事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户交互（如手指滑动、键鼠操作等）触发滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WaterFlow惯性滚动。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#fling12",
          children: "fling"
        }), "接口触发滚动。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不触发该事件的条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用除", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#fling12",
          children: "fling"
        }), "接口外的其他滚动控制接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "越界回弹。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖动滚动条。"
      }), "\n"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#onscrollframebegincallback18",
              children: "OnScrollFrameBeginCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧滚动开始回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollindex11",
      children: "onScrollIndex11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollIndex(event: (first: number, last: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前瀑布流显示的起始位置/终止位置的子组件发生变化时触发。瀑布流初始化时会触发一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流显示区域上第一个子组件/最后一个组件的索引值有变化就会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(509668)/* ["default"] */.A) + "",
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
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的瀑布流起始位置的索引值。  取值范围：[0, 子节点总数-1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "last"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的瀑布流终止位置的索引值。  取值范围：[0, 子节点总数-1]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过last参数可以判断是否“继续加载数据”，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B3%E4%BD%BF%E7%94%A8%E5%88%86%E7%BB%84",
        children: "示例3使用分组"
      }), "中“即将触底时提前增加数据”的处理逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当WaterFlow列表为空时，使用不同的WaterFlowOptions参数会导致onScrollIndex事件的返回值有所不同。具体差异请参见下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "layoutMode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sections"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "last"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_TOP_DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_TOP_DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLIDING_WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uiwaterflowevent19",
      children: "UIWaterFlowEvent19+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["frameNode中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#geteventwaterflow19",
        children: "getEvent('WaterFlow')"
      }), "方法的返回值，可用于给WaterFlow节点设置滚动事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UIWaterFlowEvent继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#uiscrollablecommonevent19",
        children: "UIScrollableCommonEvent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setonwillscroll19",
      children: "setOnWillScroll19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOnWillScroll(callback: OnWillScrollCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#onwillscroll12",
        children: "onWillScroll"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法入参为undefined时，会重置事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#onwillscrollcallback12",
              children: "OnWillScrollCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setondidscroll19",
      children: "setOnDidScroll19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOnDidScroll(callback: OnScrollCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#ondidscroll12",
        children: "onDidScroll"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法入参为undefined时，会重置事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#onscrollcallback12",
              children: "OnScrollCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setonscrollindex19",
      children: "setOnScrollIndex19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollindex11",
        children: "onScrollIndex"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法入参为undefined时，会重置事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
              href: "#onwaterflowscrollindexcallback19",
              children: "OnWaterFlowScrollIndexCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwaterflowscrollindexcallback19",
      children: "OnWaterFlowScrollIndexCallback19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnWaterFlowScrollIndexCallback = (first: number, last: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow组件可见区域item变化事件的回调类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的瀑布流起始位置的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "last"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的瀑布流终止位置的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1使用基本瀑布流",
      children: "示例1（使用基本瀑布流）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了WaterFlow组件数据加载处理、属性设置和事件回调等基本使用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource实现了LazyForEach数据源接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "，用于通过LazyForEach给WaterFlow提供子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WaterFlowDataSource.ets\n\n// 实现IDataSource接口的对象，用于瀑布流组件加载数据\nexport class WaterFlowDataSource implements IDataSource {\n  private dataArray: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor() {\n    for (let i = 0; i < 100; i++) {\n      this.dataArray.push(i);\n    }\n  }\n\n  // 获取索引对应的数据\n  public getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  // 通知控制器数据重新加载\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知控制器数据增加\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  // 通知控制器数据变化\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  // 通知控制器数据位置变化\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n\n  // 通知控制器数据批量修改\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    })\n  }\n\n  // 获取数据总数\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  // 注册改变数据的控制器\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 注销改变数据的控制器\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 增加数据\n  public add1stItem(): void {\n    this.dataArray.splice(0, 0, this.dataArray.length);\n    this.notifyDataAdd(0);\n  }\n\n  // 在数据尾部增加一个元素\n  public addLastItem(): void {\n    this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  // 在指定索引位置增加一个元素\n  public addItem(index: number): void {\n    this.dataArray.splice(index, 0, this.dataArray.length);\n    this.notifyDataAdd(index);\n  }\n\n  // 删除第一个元素\n  public delete1stItem(): void {\n    this.dataArray.splice(0, 1);\n    this.notifyDataDelete(0);\n  }\n\n  // 删除第二个元素\n  public delete2ndItem(): void {\n    this.dataArray.splice(1, 1);\n    this.notifyDataDelete(1);\n  }\n\n  // 删除最后一个元素\n  public deleteLastItem(): void {\n    this.dataArray.splice(-1, 1);\n    this.notifyDataDelete(this.dataArray.length);\n  }\n\n  // 在指定索引位置删除一个元素\n  public deleteItem(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  // 重新加载数据\n  public reload(): void {\n    this.dataArray.splice(1, 1);\n    this.dataArray.splice(3, 2);\n    this.notifyDataReload();\n  }\n\n  // 在数据尾部增加count个元素\n  public addNewItems(count: number): void {\n    let len = this.dataArray.length;\n    for (let i = 0; i < count; i++) {\n      this.dataArray.push(this.dataArray[len - 1] + i + 1);\n      this.notifyDataAdd(this.dataArray.length - 1);\n    }\n  }\n\n  // 刷新所有元素\n  public refreshItems(): void {\n    let newDataArray: number[] = [];\n    for (let i = 0; i < 100; i++) {\n      newDataArray.push(this.dataArray[0] + i + 1000);\n    }\n    this.dataArray = newDataArray;\n    this.notifyDataReload();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\nenum FooterState {\n  Loading = 0,\n  End = 1\n}\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  @State footerState: FooterState = FooterState.Loading;\n  scroller: Scroller = new Scroller();\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  @Builder\n  itemFoot() {\n    // 注意：不要直接用IfElse节点作为footer的根节点\n    // 必须在外面使用(Column/Row/Stack等)容器包裹，确保布局正确\n    Column() {\n      if (this.footerState == FooterState.Loading) {\n        Text(`加载中...`)\n          .fontSize(10)\n          .backgroundColor(Color.Red)\n          .width(50)\n          .height(50)\n          .align(Alignment.Center)\n          .margin({ top: 2 })\n      } else if (this.footerState == FooterState.End) {\n        Text(`到底啦...`)\n          .fontSize(10)\n          .backgroundColor(Color.Red)\n          .width(50)\n          .height(50)\n          .align(Alignment.Center)\n          .margin({ top: 2 })\n      } else {\n        Text(`Footer`)\n          .fontSize(10)\n          .backgroundColor(Color.Red)\n          .width(50)\n          .height(50)\n          .align(Alignment.Center)\n          .margin({ top: 2 })\n      }\n    }\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow({ footer: this.itemFoot() }) {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n              // 注意：需要确保对应的jpg文件存在才会正常显示\n              Image('res/waterFlowTest(' + item % 5 + ').jpg')\n                .objectFit(ImageFit.Fill)\n                .width('100%')\n                .layoutWeight(1)\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % this.colors.length])\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr')    // 设置2列等宽布局\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('100%')\n      .itemConstraintSize({minWidth:80,maxWidth:180,minHeight:80,maxHeight:180})\n      // 触底加载数据：滚动到底部时触发分页加载\n      .onReachEnd(() => {\n        console.info('onReachEnd')\n\n        // 模拟分页加载：当数据超过200条时停止加载\n        if (this.dataSource.totalCount() > 200) {\n          this.footerState = FooterState.End;\n          return;\n        }\n        setTimeout(() => {\n          for (let i = 0; i < 100; i++) {\n            this.dataSource.addLastItem();\n          }\n        }, 1000)\n      })\n      .onReachStart(() => {\n        // 滚动到顶部时触发\n        console.info('waterFlow reach start');\n      })\n      .onScrollStart(() => {\n        // 开始滚动时触发\n        console.info('waterFlow scroll start');\n      })\n      .onScrollStop(() => {\n        // 停止滚动时触发\n        console.info('waterFlow scroll stop');\n      })\n      .onScrollFrameBegin((offset: number, state: ScrollState) => {\n        // 滚动帧开始时触发：可以控制滚动行为\n        // offset：滚动偏移量，state：滚动状态\n        console.info('waterFlow scrollFrameBegin offset: ' + offset + ' state: ' + state.toString());\n        return { offsetRemain: offset };  // 返回开发者期望的实际滚动偏移量\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599111)/* ["default"] */.A) + "",
        width: "318",
        height: "629"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自动计算列数",
      children: "示例2（自动计算列数）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过auto-fill实现了自动计算列数的效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow() {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n              // 存在对应的jpg文件才会显示图片\n              Image('res/waterFlowTest(' + item % 5 + ').jpg')\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % this.colors.length])\n        }, (item: string) => item)\n      }\n      // auto-fill自动计算列数\n      // 'repeat(auto-fill,80)' 表示：根据容器宽度自动计算能放下多少个80px宽的列\n      // 例如：容器宽度400px，则自动计算为5列（400÷80=5）\n      .columnsTemplate('repeat(auto-fill,80)')\n      .columnsGap(10)\n      .rowsGap(5)\n      .padding({left:5})\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(202090)/* ["default"] */.A) + "",
        width: "355",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用分组",
      children: "示例3（使用分组）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了分组的初始化以及splice、push、update、values、length等接口的不同效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配合状态管理V2使用，详情见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object#%E6%BB%9A%E5%8A%A8%E7%BB%84%E4%BB%B6",
        children: "WaterFlow与makeObserved"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n// 可复用组件：优化性能，减少组件创建销毁开销\n@Reusable\n@Component\nstruct ReusableFlowItem {\n  @State item: number = 0;\n\n  // 组件复用生命周期：从复用缓存中取出时调用\n  // 用于更新组件状态，显示新的内容\n  aboutToReuse(params: Record<string, number>) {\n    this.item = params.item;\n    console.info('Reuse item:' + this.item);\n  }\n\n  // 组件生命周期：初始化尺寸数组和分组配置\n  aboutToAppear() {\n    console.info('new item:' + this.item);\n  }\n\n  build() {\n    Column() {\n      // 注意：需要确保对应的jpg文件存在才会正常显示\n      Image('res/waterFlowTest(' + this.item % 5 + ').jpg')\n        .overlay('N' + this.item, { align: Alignment.Top })\n        .objectFit(ImageFit.Fill)\n        .width('100%')\n        .layoutWeight(1)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  minSize: number = 80;\n  maxSize: number = 180;\n  colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  scroller: Scroller = new Scroller();\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  dataCount: number = this.dataSource.totalCount();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n  // 分组管理：WaterFlow的核心特性，支持不同区域使用不同列数\n  @State sections: WaterFlowSections = new WaterFlowSections();\n  // 分组边距配置：统一的外边距设置\n  sectionMargin: Margin = { top: 10, left: 5, bottom: 10, right: 5 };\n\n  oneColumnSection: SectionOptions = {\n    itemsCount: 4,                     // 该分组包含4个FlowItem\n    crossCount: 1,                     // 使用1列布局\n    columnsGap: '5vp',\n    rowsGap: 10,\n    margin: this.sectionMargin,\n    // 回调函数：动态设置每个item的高度\n    onGetItemMainSizeByIndex: (index: number) => {\n      return this.itemHeightArray[index % 100];\n    }\n  };\n\n  // 第二种分组：双列布局，适合展示列表内容\n  twoColumnSection: SectionOptions = {\n    itemsCount: 2,                     // 该分组包含2个FlowItem\n    crossCount: 2,                     // 使用2列布局\n    // 回调函数：固定高度100px\n    onGetItemMainSizeByIndex: (index: number) => {\n      return 100;\n    }\n  };\n\n  // 最后一个分组：用于处理剩余数据\n  lastSection: SectionOptions = {\n    itemsCount: 20,                    // 该分组包含20个FlowItem\n    crossCount: 2,                     // 使用2列布局\n    // 回调函数：使用随机高度\n    onGetItemMainSizeByIndex: (index: number) => {\n      return this.itemHeightArray[index % 100];\n    }\n  };\n\n  // 计算FlowItem高度\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的高度数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：初始化数据和恢复上次的列数设置\n  aboutToAppear() {\n    this.setItemSizeArray();\n\n    // 初始化瀑布流分组信息：交替使用单列和双列布局\n    let sectionOptions: SectionOptions[] = [];\n    let count = 0;                     // 已分配的FlowItem数量计数\n    let oneOrTwo = 0;                  // 用于交替选择分组类型\n\n    while (count < this.dataCount) {\n      // 剩余数据不足20个时，使用最后一个分组处理\n      if (this.dataCount - count < 20) {\n        this.lastSection.itemsCount = this.dataCount - count;\n        sectionOptions.push(this.lastSection);\n        break;\n      }\n\n      // 交替使用单列和双列布局\n      if (oneOrTwo++ % 2 == 0) {\n        sectionOptions.push(this.oneColumnSection);\n        count += this.oneColumnSection.itemsCount;\n      } else {\n        sectionOptions.push(this.twoColumnSection);\n        count += this.twoColumnSection.itemsCount;\n      }\n    }\n\n    // 将配置好的分组添加到WaterFlow中\n    this.sections.splice(0, 0, sectionOptions);\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      Row() {\n        Button('splice')\n          .height('5%')\n          .onClick(() => {\n            // 重要：必须保证LazyForEach中数据数量和新分组itemsCount累计总数保持一致\n            let totalCount: number = this.dataSource.totalCount();\n            let newSection: SectionOptions = {\n              itemsCount: totalCount,\n              crossCount: 2,\n              onGetItemMainSizeByIndex: (index: number) => {\n                return this.itemHeightArray[index % 100];\n              }\n            };\n            let oldLength: number = this.sections.length();\n            this.sections.splice(0, oldLength, [newSection]);  // 替换所有分组\n          })\n          .margin({ top: 10, left: 20 })\n\n        Button('update')\n          .height('5%')\n          .onClick(() => {\n            // 在第一个分组中增加4个FlowItem\n            // 重要：必须保证数据源和分组itemsCount同步更新\n            const sections: Array<SectionOptions> = this.sections.values();\n            let newSection: SectionOptions = sections[0];\n\n            // 先在数据源中添加4个新数据\n            this.dataSource.addItem(this.oneColumnSection.itemsCount);\n            this.dataSource.addItem(this.oneColumnSection.itemsCount + 1);\n            this.dataSource.addItem(this.oneColumnSection.itemsCount + 2);\n            this.dataSource.addItem(this.oneColumnSection.itemsCount + 3);\n\n            // 然后更新分组的itemsCount\n            newSection.itemsCount += 4;\n            const result: boolean = this.sections.update(0, newSection);\n            console.info('update:' + result);\n          })\n          .margin({ top: 10, left: 20 })\n\n        Button('delete')\n          .height('5%')\n          .onClick(() => {\n            // 在第一个分组中减少4个FlowItem\n            // 重要：必须保证数据源和分组itemsCount同步更新\n            const sections: Array<SectionOptions> = this.sections.values();\n            let newSection: SectionOptions = sections[0];\n\n            // 检查是否有足够的item可以删除\n            if (newSection.itemsCount < 4) {\n              return;\n            }\n\n            // 先从数据源中删除4条数据\n            this.dataSource.deleteItem(this.oneColumnSection.itemsCount - 1);\n            this.dataSource.deleteItem(this.oneColumnSection.itemsCount - 2);\n            this.dataSource.deleteItem(this.oneColumnSection.itemsCount - 3);\n            this.dataSource.deleteItem(this.oneColumnSection.itemsCount - 4);\n\n            // 更新分组的itemsCount\n            newSection.itemsCount -= 4;\n            this.sections.update(0, newSection);\n          })\n          .margin({ top: 10, left: 20 })\n\n        Button('values')\n          .height('5%')\n          .onClick(() => {\n            const sections: Array<SectionOptions> = this.sections.values();\n            for (const value of sections) {\n              console.info(JSON.stringify(value));\n            }\n            console.info('count:' + this.sections.length());\n          })\n          .margin({ top: 10, left: 20 })\n      }.margin({ bottom: 20 })\n\n      WaterFlow({ scroller: this.scroller, sections: this.sections }) {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            // 使用可复用组件，提升性能\n            ReusableFlowItem({ item: item })\n          }\n          .width('100%')\n          // 注意：同时设置onGetItemMainSizeByIndex和height属性时，\n          // 主轴大小以onGetItemMainSizeByIndex返回结果为准\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % this.colors.length])\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('100%')\n      .layoutWeight(1)\n      .onScrollIndex((first: number, last: number) => {\n        // 滚动监听：即将触底时提前加载更多数据\n        if (last + 20 >= this.dataSource.totalCount()) {\n          // 添加100个新数据到数据源\n          for (let i = 0; i < 100; i++) {\n            this.dataSource.addLastItem();\n          }\n\n          // 重要：更新数据源后必须同步更新sections\n          // 修改最后一个section的FlowItem数量\n          const sections: Array<SectionOptions> = this.sections.values();\n          let newSection: SectionOptions = sections[this.sections.length() - 1];\n          newSection.itemsCount += 100;\n          this.sections.update(-1, newSection);  // -1表示最后一个分组\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486095)/* ["default"] */.A) + "",
        width: "370",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4双指缩放改变列数",
      children: "示例4（双指缩放改变列数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#prioritygesture",
        children: "priorityGesture"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture",
        children: "PinchGesture"
      }), "实现了双指缩放改变列数效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\nimport { image } from '@kit.ImageKit';\n\n// 可复用组件：优化性能，减少组件创建销毁开销\n@Reusable\n@Component\nstruct ReusableFlowItem {\n  @State item: number = 0;\n\n  // 从复用缓存中加入到组件树之前调用，可在此处更新组件的状态变量以展示正确的内容\n  aboutToReuse(params: Record<string, number>) {\n    this.item = params.item;\n  }\n\n  build() {\n    Column() {\n      Text('N' + this.item).fontSize(12).height('16')\n      // 注意：需要确保对应的jpg文件存在才会正常显示\n      Image('res/waterFlow(' + this.item % 5 + ').jpg')\n        .objectFit(ImageFit.Fill)\n        .width('100%')\n        .layoutWeight(1)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  minSize: number = 80;\n  maxSize: number = 180;\n  colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n  @State columns: number = 2;\n  @State waterFlowScale: number = 1;\n  @State imageScale: number = 1;\n  @State waterFlowOpacity: number = 1;\n  @State waterFlowSnapshot: image.PixelMap | undefined = undefined;\n  private columnChanged: boolean = false;\n  private oldColumn: number = this.columns;\n  private pinchTime: number = 0;\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：初始化数据和恢复上次的列数设置\n  aboutToAppear() {\n    // 读取上次最后切换到的列数\n    let lastCount = AppStorage.get<number>('columnsCount');\n    if (typeof lastCount != 'undefined') {\n      this.columns = lastCount;\n    }\n    this.setItemSizeArray();\n  }\n\n  // 根据缩放阈值改变列数，触发WaterFlow重新布局\n  changeColumns(scale: number) {\n    if (scale > (this.columns / (this.columns - 0.5)) && this.columns > 1) {\n      this.columns--;\n      this.columnChanged = true;\n    } else if (scale < 1 && this.columns < 4) {\n      this.columns++;\n      this.columnChanged = true;\n    }\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      Row() {\n        Text('双指缩放改变列数')\n          .height('5%')\n          .margin({ top: 10, left: 20 })\n      }\n\n      Stack() {\n        // 用于展示缩放前的WaterFlow截图\n        Image(this.waterFlowSnapshot)\n          .width('100%')\n          .height('100%')\n          .scale({\n            x: this.imageScale,\n            y: this.imageScale,\n            centerX: 0,\n            centerY: 0\n          })\n        \n        WaterFlow() {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              // 使用可复用组件，提升性能\n              ReusableFlowItem({ item: item })\n            }\n            .width('100%')\n            .aspectRatio(this.itemHeightArray[item % 100] / this.itemWidthArray[item%100])\n            .backgroundColor(this.colors[item % this.colors.length])\n          }, (item: string) => item)\n        }\n        .id('waterflow') // 设置id用于截图\n        .columnsTemplate('1fr '.repeat(this.columns))  // 动态生成列模板，如：'1fr 1fr 1fr'表示3列等宽\n        .backgroundColor(0xFAEEE0)\n        .width('100%')\n        .height('100%')\n        .layoutWeight(1)\n        .opacity(this.waterFlowOpacity)\n        .scale({\n          x: this.waterFlowScale,\n          y: this.waterFlowScale,\n          centerX: 0,\n          centerY: 0\n        })\n        .priorityGesture(\n          PinchGesture()\n            .onActionStart((event: GestureEvent) => {\n              // 双指捏合手势识别成功时截图\n              this.pinchTime = event.timestamp;\n              this.columnChanged = false;\n              this.oldColumn = this.columns;\n              this.getUIContext().getComponentSnapshot().get('waterflow', (error: Error, pixmap: image.PixelMap) => {\n                if (error) {\n                  console.info('error:' + JSON.stringify(error));\n                  return;\n                }\n                this.waterFlowSnapshot = pixmap;\n              })\n            })\n            .onActionUpdate((event: GestureEvent) => {\n              // 手势更新：处理缩放逻辑和视觉效果\n              // 边界限制：防止超出列数范围时继续缩放\n              if ((this.oldColumn === 1 && event.scale > 1) || (this.oldColumn === 4 && event.scale < 1)) {\n                return;\n              }\n\n              // 节流处理：避免过于频繁的更新，提升性能\n              if (event.timestamp - this.pinchTime < 10000000) {\n                return;\n              }\n              this.pinchTime = event.timestamp;\n\n              this.waterFlowScale = event.scale;\n              this.imageScale = event.scale;\n              // 根据缩放比例设置WaterFlow透明度\n              this.waterFlowOpacity = (this.waterFlowScale > 1) ? (this.waterFlowScale - 1) : (1 - this.waterFlowScale);\n              this.waterFlowOpacity *= 3;\n              if (!this.columnChanged) {\n                this.changeColumns(event.scale);\n              }\n\n              // 列数改变后的缩放比例调整：避免出现空白区域\n              if (this.columnChanged) {\n                this.waterFlowScale = this.imageScale * this.columns / this.oldColumn;\n\n                // 限制缩放范围，确保视觉效果自然\n                if (event.scale < 1) {\n                  this.waterFlowScale = this.waterFlowScale > 1 ? this.waterFlowScale : 1;\n                } else {\n                  this.waterFlowScale = this.waterFlowScale < 1 ? this.waterFlowScale : 1;\n                }\n              }\n            })\n            .onActionEnd((event: GestureEvent) => {\n              // 手势结束：执行归位动画并保存状态\n              // 执行归位动画：平滑过渡到正常状态\n              this.getUIContext()?.animateTo({ duration: 300 }, () => {\n                this.waterFlowScale = 1;\n                this.waterFlowOpacity = 1;\n              })\n\n              // 持久化保存当前列数：下次启动时恢复\n              AppStorage.setOrCreate<number>('columnsCount', this.columns);\n            })\n        )\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436618)/* ["default"] */.A) + "",
        width: "329",
        height: "678"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置边缘渐隐效果",
      children: "示例5（设置边缘渐隐效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#fadingedge14",
        children: "fadingEdge"
      }), "实现了WaterFlow组件开启边缘渐隐效果，并通过fadingEdgeLength参数设置边缘渐隐长度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  scroller: Scroller = new Scroller();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow({ scroller: this.scroller }) {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % 5])\n        }, (item: string) => item)\n      }\n      // auto-fill自动计算列数：根据容器宽度自动计算能放下多少个80px宽的列\n      .columnsTemplate('repeat(auto-fill,80)')\n      .columnsGap(10)\n      .rowsGap(5)\n      .height('90%')\n      .scrollBar(BarState.On)\n      // 边缘渐隐效果：在滚动边缘创建渐隐过渡效果\n      // true：启用渐隐效果\n      // fadingEdgeLength: LengthMetrics.vp(80)：渐隐区域长度为80vp\n      // 效果：在瀑布流顶部和底部边缘会有80vp的渐隐过渡区域\n      .fadingEdge(true, { fadingEdgeLength: LengthMetrics.vp(80) })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93843)/* ["default"] */.A) + "",
        width: "238",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6单边边缘效果",
      children: "示例6（单边边缘效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#edgeeffect11",
        children: "edgeEffect"
      }), "接口，实现了WaterFlow组件设置单边边缘效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  scroller: Scroller = new Scroller();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow({ scroller: this.scroller }) {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % 5])\n        }, (item: number) => item.toString())\n      }\n      // auto-fill自动计算列数：根据容器宽度自动计算能放下多少个80px宽的列\n      .columnsTemplate('repeat(auto-fill,80)')\n      .columnsGap(10)\n      .rowsGap(5)\n      .height('90%')\n      // 单边边缘效果：设置弹簧效果，仅在顶部生效\n      // EdgeEffect.Spring：弹簧回弹效果，滑动到边界时会有弹性回弹\n      // alwaysEnabled: true：始终启用边缘效果，即使内容不足以滚动\n      // effectEdge: EffectEdge.START：仅在起始边缘（顶部）生效\n      // 效果：只有向上滑动到顶部时才会有弹簧回弹效果，向下滑动到底部不会有效果\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true, effectEdge: EffectEdge.START })\n\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577351)/* ["default"] */.A) + "",
        width: "232",
        height: "468"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7waterflow组件设置和改变尾部组件",
      children: "示例7（WaterFlow组件设置和改变尾部组件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#waterflowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "WaterFlowOptions对象说明"
      }), "的footerContent接口，实现了WaterFlow组件设置尾部组件。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
        children: "ComponentContent"
      }), "的update函数更新尾部组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { ComponentContent, UIContext } from '@kit.ArkUI';\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\nclass Params {\n  text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// Builder函数：构建尾部组件的UI结构\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin(20)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message1: string = '已经到底了';\n  @State message2: string = '加载更多';\n  @State colors: number[] = [0xD5D5D5, 0x7F7F7F, 0xF7F7F7];\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n\n  // UI上下文：用于创建ComponentContent\n  context: UIContext = this.getUIContext();\n\n  // 动态尾部组件：使用ComponentContent创建可更新的尾部组件\n  // ComponentContent<Params>：泛型指定参数类型\n  // wrapBuilder<[Params]>(buildText)：包装Builder函数\n  // new Params(this.message1)：初始参数，显示'已经到底了'\n  footerContent: ComponentContent<Params> = new ComponentContent<Params>(\n    this.context,\n    wrapBuilder<[Params]>(buildText),\n    new Params(this.message1)\n  );\n\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button('更新footer').width('90%').margin(20)\n          .onClick((event?: ClickEvent) => {\n            // 调用ComponentContent的update方法更新尾部组件\n            // 传入新的Params对象，文本内容从'已经到底了'变为'加载更多'\n            this.footerContent.update(new Params(this.message2));\n          })\n        WaterFlow({ footerContent: this.footerContent }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              Column() {\n                Text('N' + item).fontSize(12).height('16')\n              }\n              .width('100%')\n              .height(this.itemHeightArray[item % 100])\n              .backgroundColor(this.colors[item % 3])\n              .justifyContent(FlexAlign.Center)\n              .alignItems(HorizontalAlign.Center)\n            }\n          }, (item: number) => item.toString())\n        }\n        .columnsTemplate('1fr')\n        .height('90%')\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216634)/* ["default"] */.A) + "",
        width: "340",
        height: "724"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8waterflow组件实现下拉刷新",
      children: "示例8（WaterFlow组件实现下拉刷新）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
        children: "Refresh"
      }), "组件和WaterFlow组件，实现了下拉刷新瀑布流组件数据源。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  @State isRefreshing: boolean = false;\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  scroller: Scroller = new Scroller();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      // refreshing: $$this.isRefreshing：双向绑定刷新状态\n      Refresh({ refreshing: $$this.isRefreshing }) {\n        WaterFlow({ scroller: this.scroller }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              Column() {\n                Text('N' + item).fontSize(12).height('16')\n              }\n            }\n            .width('100%')\n            .height(this.itemHeightArray[item % 100])\n            .backgroundColor(this.colors[item % this.colors.length])\n          }, (item: number) => item.toString())\n        }\n        // auto-fill自动计算列数：根据容器宽度自动计算能放下多少个80px宽的列\n        .columnsTemplate('repeat(auto-fill,80)')\n        .columnsGap(10)\n        .rowsGap(5)\n        .height('90%')\n        // 边缘效果：弹簧回弹效果\n        .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n        .onReachEnd(() => {\n          // 触底加载更多数据：滚动到底部时触发\n          setTimeout(() => {\n            this.dataSource.addNewItems(100);\n          }, 1000)\n        })\n      }\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        // 刷新状态变化监听：处理不同的刷新状态\n        if (refreshStatus === RefreshStatus.Done) {\n          // 刷新完成时：调用数据源的刷新方法，更新所有数据\n          this.dataSource.refreshItems();\n        }\n      })\n      .onRefreshing(() => {\n        // 正在刷新时的回调：模拟刷新过程\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 1000)\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(796171)/* ["default"] */.A) + "",
        width: "344",
        height: "637"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9waterflow组件基于断点配置列数",
      children: "示例9（WaterFlow组件基于断点配置列数）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例展示了WaterFlow组件支持基于断点配置列数效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  minSize: number = 80;\n  maxSize: number = 180;\n  colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow() {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n              // 注意：需要确保对应的jpg文件存在才会正常显示\n              Image('res/waterFlowTest(' + item % 5 + ').jpg')\n                .objectFit(ImageFit.Fill)\n                .width('100%')\n                .layoutWeight(1)\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % this.colors.length])\n        }, (item: string) => item)\n      }\n      .key('waterFlow')\n      // 设置WaterFlow按断点决定列数\n      .columnsTemplate({fillType:PresetFillType.BREAKPOINT_SM2MD3LG5})\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .margin('20vp')\n      .width('100%')\n      .height('30%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow宽度属于sm及更小的断点区间时显示2列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554986)/* ["default"] */.A) + "",
        width: "1014",
        height: "666"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow宽度属于md断点区间时显示3列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(921465)/* ["default"] */.A) + "",
        width: "1092",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WaterFlow宽度属于lg及更大的断点区间时显示5列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126432)/* ["default"] */.A) + "",
        width: "1396",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10waterflow组件实现获取内容高度",
      children: "示例10（WaterFlow组件实现获取内容高度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22 开始，该示例通过WaterFlow组件，实现了获取内容高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlowDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E4%BD%BF%E7%94%A8%E5%9F%BA%E6%9C%AC%E7%80%91%E5%B8%83%E6%B5%81",
        children: "示例1使用基本瀑布流"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WaterFlowContentSizeDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  @State contentWidth: number = -1;\n  @State contentHeight: number = -1;\n  scroller: Scroller = new Scroller();\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  // 组件生命周期：在组件即将出现时初始化尺寸数组\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  @Builder\n  itemFoot() {\n    Column() {\n      Text(`到底啦...`)\n        .fontSize(10)\n        .backgroundColor(Color.Red)\n        .width(50)\n        .height(50)\n        .align(Alignment.Center)\n        .margin({ top: 2 })\n    }\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      // 点击按钮来调用contentSize函数获取内容尺寸\n      Button('GetContentSize')\n        .onClick(() => {\n          // Scroller未绑定组件时会抛异常，需要加上try catch保护\n          try {\n            // 通过调用contentSize函数获取内容尺寸的宽度值\n            this.contentWidth = this.scroller.contentSize().width;\n            // 通过调用contentSize函数获取内容尺寸的高度值\n            this.contentHeight = this.scroller.contentSize().height;\n          } catch (error) {\n            let err: BusinessError = error as BusinessError;\n            console.error(`Failed to get contentSize of the grid, code=${err.code}, message=${err.message}`);\n          }\n        }).margin(5)\n      // 将获取到的内容尺寸信息通过文本进行呈现\n      Text('Width:' + this.contentWidth)\n        .fontColor(Color.Red)\n        .height(30)\n      Text('Height:' + this.contentHeight)\n        .fontColor(Color.Red)\n        .height(30)\n\n      WaterFlow({ scroller: this.scroller, footer: this.itemFoot() }) {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item).fontSize(12).height('16')\n            }\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % this.colors.length])\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr') // 设置2列等宽布局\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('80%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(40305)/* ["default"] */.A) + "",
        width: "319",
        height: "633"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11设置滚动事件",
      children: "示例11（设置滚动事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过FrameNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#geteventwaterflow19",
        children: "getEvent('WaterFlow')"
      }), "获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#uiwaterflowevent19",
        children: "UIWaterFlowEvent"
      }), "，并为WaterFlow设置滚动事件回调，用于事件监听方因无法直接修改页面代码而无法使用声明式接口设置回调的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，新增UIWaterFlowEvent接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100);\n    return this.rootNode;\n  }\n\n  addCommonEvent(frameNode: FrameNode) {\n    // 获取WaterFlow事件\n    let waterFlowEvent: UIWaterFlowEvent | undefined = typeNode.getEvent(frameNode, 'WaterFlow');\n\n    // 设置OnWillScroll事件\n    waterFlowEvent?.setOnWillScroll((scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => {\n      console.info('onWillScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}, scrollSource = ${scrollSource}');\n    });\n\n    // 设置OnDidScroll事件\n    waterFlowEvent?.setOnDidScroll((scrollOffset: number, scrollState: ScrollState) => {\n      console.info('onDidScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}');\n    });\n\n    // 设置OnReachStart事件\n    waterFlowEvent?.setOnReachStart(() => {\n      console.info('onReachStart');\n    });\n\n    // 设置OnReachEnd事件\n    waterFlowEvent?.setOnReachEnd(() => {\n      console.info('onReachEnd');\n    });\n\n    // 设置OnScrollStart事件\n    waterFlowEvent?.setOnScrollStart(() => {\n      console.info('onScrollStart');\n    });\n\n    // 设置OnScrollStop事件\n    waterFlowEvent?.setOnScrollStop(() => {\n      console.info('onScrollStop');\n    });\n\n    // 设置OnScrollFrameBegin事件\n    waterFlowEvent?.setOnScrollFrameBegin((offset: number, state: ScrollState) => {\n      console.info('onScrollFrameBegin offset = ${offset}, state = ${state}');\n      return undefined;\n    });\n\n    // 设置OnScrollIndex事件\n    waterFlowEvent?.setOnScrollIndex((first: number, last: number) => {\n      console.info('onScrollIndex start = ${first}, end = ${last}');\n    });\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State index: number = 0;\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State numbers: string[] = [];\n  @State heights: number[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i < 30; i++) {\n      this.numbers.push('${i+1}');\n      this.heights.push(70 + Math.floor(Math.random() * 60));\n    }\n  }\n\n  build() {\n    Column() {\n      Button('add CommonEvent to WaterFlow')\n        .onClick(() => {\n          this.myNodeController!.addCommonEvent(this.myNodeController!.rootNode!.getParent()!.getPreviousSibling()!)\n        })\n      WaterFlow() {\n        ForEach(this.numbers, (day: string, index: number) => {\n          FlowItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(this.heights[index])\n              .textAlign(TextAlign.Center)\n          }\n          .width('100%')\n        }, (day: string, index: number) => index.toString() + day)\n      }\n      .columnsTemplate('1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .enableScrollInteraction(true)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n      NodeContainer(this.myNodeController)\n    }.width('100%')\n  }\n}\n"
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
436618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799998-ac831f9f12e961caa85f41f9cc5f3c56.gif");

},
248932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
921465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959650-23d93e7b3359d1a361245f2ff7db3bc4.png");

},
599111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439691-98d021ba93c4af20f3db208eba126444.gif");

},
93843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439693-ab5ce333b25ba3a02cb4ba5a79ece104.gif");

},
486095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479647-846550010a3eabbcfdbac50e6ce2482f.png");

},
796171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800000-47053068850f7f94cd8adfc75a2f3ad8.gif");

},
509668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
949613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
577351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959648-11089189703ca1b2be4b62f8974e20fd.gif");

},
216634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479649-5b6b06caed020fbf1155ed4643c810ff.gif");

},
554986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439695-4bb2eb31c1cbfcd1201ec2dd2de3bbb4.png");

},
202090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959646-92e709e1cbd13bba2f1969a515e31bd2.png");

},
117784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
638831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
710264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
40305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800002-44388dc56884fc3e0411bf32f8e60423.gif");

},
126432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479651-74becd3ebff4f930ef8f26360d1a8ce3.png");

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