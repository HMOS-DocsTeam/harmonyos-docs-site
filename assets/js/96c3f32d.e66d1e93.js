"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852792"], {
183564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_grid_ts_container_grid_md_96c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-scroll-and-swipe-ts-container-grid-ts-container-grid-md-96c.json
var site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_grid_ts_container_grid_md_96c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid","title":"Grid","description":"网格容器，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid.md","sourceDirName":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid","slug":"/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Grid","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-grid"},"sidebar":"ref","previous":{"title":"ArcListItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem"},"next":{"title":"GridItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid.md


const frontMatter = {
	title: 'Grid',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-grid'
};
const contentTitle = 'Grid';

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
  "value": "GridLayoutOptions10+对象说明",
  "id": "gridlayoutoptions10对象说明",
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
  "value": "columnsGap",
  "id": "columnsgap",
  "level": 3
}, {
  "value": "rowsGap",
  "id": "rowsgap",
  "level": 3
}, {
  "value": "scrollBar",
  "id": "scrollbar",
  "level": 3
}, {
  "value": "scrollBarColor",
  "id": "scrollbarcolor",
  "level": 3
}, {
  "value": "scrollBarColor22+",
  "id": "scrollbarcolor22",
  "level": 3
}, {
  "value": "scrollBarWidth",
  "id": "scrollbarwidth",
  "level": 3
}, {
  "value": "cachedCount",
  "id": "cachedcount",
  "level": 3
}, {
  "value": "cachedCount14+",
  "id": "cachedcount14",
  "level": 3
}, {
  "value": "editMode8+",
  "id": "editmode8",
  "level": 3
}, {
  "value": "layoutDirection8+",
  "id": "layoutdirection8",
  "level": 3
}, {
  "value": "maxCount8+",
  "id": "maxcount8",
  "level": 3
}, {
  "value": "minCount8+",
  "id": "mincount8",
  "level": 3
}, {
  "value": "cellLength8+",
  "id": "celllength8",
  "level": 3
}, {
  "value": "multiSelectable8+",
  "id": "multiselectable8",
  "level": 3
}, {
  "value": "supportAnimation8+",
  "id": "supportanimation8",
  "level": 3
}, {
  "value": "edgeEffect10+",
  "id": "edgeeffect10",
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
  "value": "alignItems12+",
  "id": "alignitems12",
  "level": 3
}, {
  "value": "focusWrapMode20+",
  "id": "focuswrapmode20",
  "level": 3
}, {
  "value": "syncLoad20+",
  "id": "syncload20",
  "level": 3
}, {
  "value": "supportEmptyBranchInLazyLoading23+",
  "id": "supportemptybranchinlazyloading23",
  "level": 3
}, {
  "value": "editModeOptions23+",
  "id": "editmodeoptions23",
  "level": 3
}, {
  "value": "GridItemAlignment12+枚举说明",
  "id": "griditemalignment12枚举说明",
  "level": 2
}, {
  "value": "GridDirection8+枚举说明",
  "id": "griddirection8枚举说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onScrollIndex",
  "id": "onscrollindex",
  "level": 3
}, {
  "value": "onItemDragStart8+",
  "id": "onitemdragstart8",
  "level": 3
}, {
  "value": "onItemDragEnter8+",
  "id": "onitemdragenter8",
  "level": 3
}, {
  "value": "onItemDragMove8+",
  "id": "onitemdragmove8",
  "level": 3
}, {
  "value": "onItemDragLeave8+",
  "id": "onitemdragleave8",
  "level": 3
}, {
  "value": "onItemDrop8+",
  "id": "onitemdrop8",
  "level": 3
}, {
  "value": "onScrollBarUpdate10+",
  "id": "onscrollbarupdate10",
  "level": 3
}, {
  "value": "onReachStart10+",
  "id": "onreachstart10",
  "level": 3
}, {
  "value": "onReachEnd10+",
  "id": "onreachend10",
  "level": 3
}, {
  "value": "onScrollFrameBegin10+",
  "id": "onscrollframebegin10",
  "level": 3
}, {
  "value": "onScrollStart10+",
  "id": "onscrollstart10",
  "level": 3
}, {
  "value": "onScrollStop10+",
  "id": "onscrollstop10",
  "level": 3
}, {
  "value": "onScroll(deprecated)",
  "id": "onscrolldeprecated",
  "level": 3
}, {
  "value": "ComputedBarAttribute10+对象说明",
  "id": "computedbarattribute10对象说明",
  "level": 2
}, {
  "value": "UIGridEvent19+",
  "id": "uigridevent19",
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
  "value": "OnGridScrollIndexCallback19+",
  "id": "ongridscrollindexcallback19",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（固定行列Grid）",
  "id": "示例1固定行列grid",
  "level": 3
}, {
  "value": "示例2（可滚动Grid和滚动事件）",
  "id": "示例2可滚动grid和滚动事件",
  "level": 3
}, {
  "value": "示例3（可滚动Grid设置跨行跨列节点）",
  "id": "示例3可滚动grid设置跨行跨列节点",
  "level": 3
}, {
  "value": "示例4（Grid嵌套滚动）",
  "id": "示例4grid嵌套滚动",
  "level": 3
}, {
  "value": "示例5（Grid拖拽场景）",
  "id": "示例5grid拖拽场景",
  "level": 3
}, {
  "value": "示例6（自适应Grid）",
  "id": "示例6自适应grid",
  "level": 3
}, {
  "value": "示例7（双指缩放修改Grid列数）",
  "id": "示例7双指缩放修改grid列数",
  "level": 3
}, {
  "value": "示例8（设置自适应列数）",
  "id": "示例8设置自适应列数",
  "level": 3
}, {
  "value": "示例9（以当前行最高的GridItem的高度为其他GridItem的高度）",
  "id": "示例9以当前行最高的griditem的高度为其他griditem的高度",
  "level": 3
}, {
  "value": "示例10（设置边缘渐隐）",
  "id": "示例10设置边缘渐隐",
  "level": 3
}, {
  "value": "示例11（单边边缘效果）",
  "id": "示例11单边边缘效果",
  "level": 3
}, {
  "value": "示例12（方向键走焦换行模式）",
  "id": "示例12方向键走焦换行模式",
  "level": 3
}, {
  "value": "示例13（设置滚动事件）",
  "id": "示例13设置滚动事件",
  "level": 3
}, {
  "value": "示例14（滚动到指定位置）",
  "id": "示例14滚动到指定位置",
  "level": 3
}, {
  "value": "示例15（实现Grid滑动选择）",
  "id": "示例15实现grid滑动选择",
  "level": 3
}, {
  "value": "示例16（实现GridItem自定义拖拽）",
  "id": "示例16实现griditem自定义拖拽",
  "level": 3
}, {
  "value": "示例17（通过拖拽事件实现GridItem拖拽）",
  "id": "示例17通过拖拽事件实现griditem拖拽",
  "level": 3
}, {
  "value": "示例18（Grid组件基于断点配置列数）",
  "id": "示例18grid组件基于断点配置列数",
  "level": 3
}, {
  "value": "示例19（获取内容总大小）",
  "id": "示例19获取内容总大小",
  "level": 3
}, {
  "value": "示例20（设置多选聚拢动画）",
  "id": "示例20设置多选聚拢动画",
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
        id: "grid",
        children: "Grid"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格容器，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754702)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
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
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
        children: "GridItem"
      }), "子组件和自定义组件。自定义组件在Grid下使用时，建议使用GridItem作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。"]
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
        src: (__webpack_require__(303054)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid子组件的索引值计算规则："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按子组件的顺序依次递增。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "if/else语句中，只有条件成立分支内的子组件会参与索引值计算，条件不成立分支内的子组件不计算索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ForEach/LazyForEach和Repeat语句中，会计算展开所有子组件索引值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
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
      }), "发生变化以后，会更新子组件索引值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid子组件的visibility属性设置为Hidden或None时依然会计算索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid子组件的visibility属性设置为None时不显示，但依然会占用子组件对应的网格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid子组件设置position属性，会占用子组件对应的网格，子组件将显示在相对Grid左上角偏移position的位置。该子组件不会随其对应网格滚动，在对应网格滑出Grid显示范围外后不显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Grid子组件之间留有空隙时，会根据当前的展示区域尽可能填补空隙，因此GridItem可能会随着网格滚动而改变相对位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，Grid单个子组件的宽高最大为16777216px；API version 20及之前，Grid单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid(scroller?: Scroller, layoutOptions?: GridLayoutOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建网格容器。"
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
            children: "scroller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可滚动组件的控制器。用于与可滚动组件进行绑定。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            }), "绑定同一个滚动控制对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutOptions10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GridLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid布局选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gridlayoutoptions10对象说明",
      children: "GridLayoutOptions10+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Grid布局选项。其中，irregularIndexes和onGetIrregularSizeByIndex可对仅设置rowsTemplate或columnsTemplate的Grid使用，可以指定一个index数组，并为其中的index对应的GridItem设置其占据的行数与列数，使用方法参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B3%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E8%AE%BE%E7%BD%AE%E8%B7%A8%E8%A1%8C%E8%B7%A8%E5%88%97%E8%8A%82%E7%82%B9",
        children: "示例3"
      }), "；onGetRectByIndex可对同时设置rowsTemplate和columnsTemplate的Grid使用，为指定的index对应的GridItem设置位置和大小，使用方法参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E5%9B%BA%E5%AE%9A%E8%A1%8C%E5%88%97grid",
        children: "示例1"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为提高Grid在跳转、列数变化等场景的性能，应该尽量使用GridLayoutOptions。即使Grid中没有任何特殊的跨行跨列节点，也可以通过使用'Grid(this.scroller, {regularSize: [1, 1]})'的方式提高跳转性能。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve_grid_performance",
        children: "优化Grid组件加载慢丢帧问题"
      }), "。"]
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
            children: "regularSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["大小规则的GridItem在Grid中占的行数和列数，只支持占1行1列即[1, 1]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "irregularIndexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定索引的GridItem在Grid中的大小是不规则的。当不设置onGetIrregularSizeByIndex时，irregularIndexes中GridItem的默认大小为垂直滚动Grid的一整行或水平滚动Grid的一整列。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onGetIrregularSizeByIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(index: number) => [number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配合irregularIndexes使用，设置不规则GridItem占用的行数和列数。开发者可为irregularIndexes中指明的index对应的GridItem设置占用的行数和列数。在API version 12之前，垂直滚动Grid不支持GridItem占多行，水平滚动Grid不支持GridItem占多列。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onGetRectByIndex11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(index: number) => [number, number,number,number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置指定索引index对应的GridItem的位置及大小[rowStart,columnStart,rowSpan,columnSpan]。  其中rowStart为行起始位置，columnStart为列起始位置，无单位。  rowSpan为GridItem占用的行数，columnSpan为GridItem占用的列数，无单位。  rowStart和columnStart取大于等于0的自然数，若取负数时，rowStart和columnStart默认为0。  rowSpan和columnSpan取大于等于1的自然数，若取小数则向下取整，若小于1则按1计算。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  第一种情况：某个GridItem发现给它指定的起始位置被占据了，则从起始位置[0,0]开始按顺序从左到右，从上到下寻找起始的放置位置。  第二种情况：如果起始位置没有被占据，但其他位置被占据了，无法显示全部的GridItem大小，则只会布局一部分。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
        src: (__webpack_require__(710297)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Grid组件使用通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip12+"
      }), "和通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip18",
        children: "clip18+"
      }), "时默认值都为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Grid的padding后，如果子组件部分位于Grid内容区且部分位于padding区域内，则会显示；如果子组件完全位于padding区域内，则不会显示。如下图所示，GridItem1显示，而GridItem2不显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786324)/* ["default"] */.A) + "",
        width: "256",
        height: "349"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnstemplate",
      children: "columnsTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如， '1fr 1fr 2fr' 是将父组件分3列，将父组件允许的宽分为4等份，第1列占1份，第2列占1份，第3列占2份。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap作为最小列间距，自动计算列数和实际列间距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效列宽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效列宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用效果可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B8%E8%AE%BE%E7%BD%AE%E8%87%AA%E9%80%82%E5%BA%94%E5%88%97%E6%95%B0",
        children: "示例8"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置为'0fr'时，该列的列宽为0，不显示GridItem。设置为其他非法值时，GridItem显示为固定1列。"
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
            children: "当前网格布局列的数量或最小列宽值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnstemplate22",
      children: "columnsTemplate22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsTemplate(value: string | ItemFillPolicy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前网格组件布局列的数量，不设置时默认1列。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当value设置为string类型时，使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#columnstemplate",
        children: "columnsTemplate(value: string)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当value设置为ItemFillPolicy类型时，将根据Grid组件宽度对应", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "设置当前网格布局行的数量、固定行高或最小行高值，不设置时默认1行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如， '1fr 1fr 2fr'是将父组件分3行，将父组件允许的高分为4等份，第1行占1份，第2行占1份，第3行占2份。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsTemplate('repeat(auto-fit, track-size)')是设置最小行高值为track-size，自动计算行数和实际行高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsTemplate('repeat(auto-fill, track-size)')是设置固定行高值为track-size，自动计算行数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsTemplate('repeat(auto-stretch, track-size)')是设置固定行高值为track-size，使用rowsGap为最小行间距，自动计算行数和实际行间距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为行高，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效行高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "auto-fit模式和auto-stretch模式只支持track-size为一个有效行高值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效行高，如rowsTemplate('repeat(auto-fill, 20)')、rowsTemplate('repeat(auto-fill, 20 80px)')。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置为'0fr'，则这一行的行高为0，这一行GridItem不显示。设置为其他非法值，按固定1行处理。"
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
            children: "当前网格布局行的数量或最小行高值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56607)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid组件根据rowsTemplate、columnsTemplate属性的设置情况，可分为以下三种布局模式："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、rowsTemplate、columnsTemplate同时设置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid只展示固定行列数的元素，其余元素不展示，且Grid不可滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此模式下以下属性不生效：layoutDirection、maxCount、minCount、cellLength。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid的宽高没有设置时，默认适应父组件尺寸。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid网格列大小按照Grid自身内容区域大小减去所有行列Gap后按各个行列所占比重分配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GridItem默认填满网格大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、rowsTemplate、columnsTemplate仅设置其中的一个："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元素按照设置的方向进行排布，超出Grid显示区域后，Grid可通过滚动的方式展示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果设置了columnsTemplate，Grid滚动方向为垂直方向，主轴方向为垂直方向，交叉轴方向为水平方向。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果设置了rowsTemplate，Grid滚动方向为水平方向，主轴方向为水平方向，交叉轴方向为垂直方向。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此模式下以下属性不生效：layoutDirection、maxCount、minCount、cellLength。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网格交叉轴方向尺寸根据Grid自身内容区域交叉轴尺寸减去交叉轴方向所有Gap后按所占比重分配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网格主轴方向尺寸取当前网格交叉轴方向所有GridItem主轴方向尺寸最大值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此模式下GridItem交叉轴方向尺寸与网格一致，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
          children: "constraintSize"
        }), "中的maxWidth或maxHeight限制GridItem交叉轴方向尺寸小于网格。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、rowsTemplate、columnsTemplate都不设置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元素在layoutDirection方向上排布，列数由Grid的宽度、首个元素的宽度、minCount、maxCount、columnsGap共同决定。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行数由Grid高度、首个元素高度、cellLength、rowsGap共同决定。超出行列容纳范围的元素不显示，也不能通过滚动进行展示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此模式下仅生效以下属性：layoutDirection、maxCount、minCount、cellLength、editMode、columnsGap、rowsGap。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前layoutDirection设置为Row时，先从左到右排列，排满一行再排下一行。剩余高度不足时不再布局，整体内容顶部居中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前layoutDirection设置为Column时，先从上到下排列，排满一列再排下一列，剩余宽度不足时不再布局。整体内容顶部居中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前Grid下面没有GridItem时，Grid的宽高为0。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "columnsgap",
      children: "columnsGap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "columnsGap(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列与列的间距。设置为小于0的值时，按默认值显示。"
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
            children: "列与列的间距。  默认值：0  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rowsgap",
      children: "rowsGap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsGap(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置行与行的间距。设置为小于0的值时，按默认值显示。"
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
            children: "行与行的间距。  默认值：0  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollbar",
      children: "scrollBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBar(value: BarState)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滚动条状态。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#barstate",
              children: "BarState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滚动条状态。  默认值：BarState.Auto  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  API version 9及以下版本默认值为BarState.Off，API version 10及以上版本的默认值为BarState.Auto。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollbarcolor",
      children: "scrollBarColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBarColor(value: Color | number | string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滚动条的颜色。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollbarcolor22",
      children: "scrollBarColor22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBarColor(color: Color | number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置滚动条的颜色。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scrollbarcolor",
        children: "scrollBarColor"
      }), "相比， 参数名改为color，并开始支持Resource类型。"]
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollbarwidth",
      children: "scrollBarWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBarWidth(value: number | string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Grid组件主轴方向的高度，则滚动条的宽度会变为默认值。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount",
      children: "cachedCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(value: number)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置预加载的GridItem的数量，只在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和开启了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
        children: "virtualScroll"
      }), "开关的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "中生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和开启了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
        children: "virtualScroll"
      }), "开关的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "超出显示和缓存范围的GridItem会被释放。"]
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
            children: "预加载的GridItem的数量。  默认值：垂直滚动时为一个屏幕内可显示的行数，水平滚动时为一个屏幕内可显示的列数，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。  通过状态变量单独更新value值时，Grid组件不会触发布局更新，缓存节点数量仅会在下次布局时更新。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount14",
      children: "cachedCount14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(count: number, show: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置预加载的GridItem数量，并配置是否显示预加载节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "裁剪"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#clipcontent14",
        children: "内容裁剪"
      }), "属性可以显示出预加载节点。"]
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
            children: "预加载的GridItem的数量。  默认值：垂直滚动时为一个屏幕内可显示的行数，水平滚动时为一个屏幕内可显示的列数，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。  通过状态变量单独更新count值时，Grid组件不会触发布局更新，缓存节点数量仅会在下次布局时更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被预加载的GridItem是否需要显示。设置为true时显示预加载的GridItem，设置为false时不显示预加载的GridItem。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editmode8",
      children: "editMode8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editMode(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Grid是否进入编辑模式，进入编辑模式可以拖拽Grid组件内部", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
        children: "GridItem"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid是否进入编辑模式。设置为true时当前Grid组件处于可编辑模式，设置为false时当前Grid组件处于不可编辑模式。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layoutdirection8",
      children: "layoutDirection8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutDirection(value: GridDirection)"
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
              href: "#griddirection8%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GridDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布局的主轴方向。  默认值：GridDirection.Row"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxcount8",
      children: "maxCount8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxCount(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置可显示的最大行数或列数。设置为小于1的值时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Row/RowReverse时，表示可显示的最大列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Column/ColumnReverse时，表示可显示的最大行数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当maxCount小于minCount时，maxCount和minCount都按默认值处理。"
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
            children: "可显示的最大行数或列数。  默认值：Infinity"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mincount8",
      children: "minCount8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minCount(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置可显示的最小行数或列数。设置为小于1的值时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Row/RowReverse时，表示可显示的最小列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Column/ColumnReverse时，表示可显示的最小行数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当minCount大于maxCount时，minCount和maxCount都按默认值处理。"
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
            children: "可显示的最小行数或列数。  默认值：1"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "celllength8",
      children: "cellLength8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cellLength(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置一行的高度或者一列的宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Row/RowReverse时，表示一行的高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当layoutDirection是Column/ColumnReverse时，表示一列的宽度。"
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
            children: "一行的高度或者一列的宽度。  默认值：第一个元素的大小  单位：vp  取值范围：(0, +∞)，设置为小于等于0的值时，按默认值显示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiselectable8",
      children: "multiSelectable8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiSelectable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否开启鼠标框选。开启框选后，可以配合GridItem的selected属性和onSelect事件获取GridItem的选中状态，还可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style",
        children: "多态样式"
      }), "设置GridItem的选中态样式（GridItem默认无选中态样式）。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启鼠标框选。  默认值：false  false：关闭框选。true：开启框选。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportanimation8",
      children: "supportAnimation8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportAnimation(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持动画。当前支持GridItem拖拽动画。仅在滚动模式下（只设置rowsTemplate、columnsTemplate其中一个）支持动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅在大小规则的Grid中支持拖拽动画，跨行或跨列场景不支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["supportAnimation动画效果参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B5grid%E6%8B%96%E6%8B%BD%E5%9C%BA%E6%99%AF",
        children: "示例5（Grid拖拽场景）"
      }), "，其他动画效果需要应用自定义拖拽实现。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持动画。设置为true时支持GridItem拖拽动画，设置为false时不支持GridItem拖拽动画。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edgeeffect10",
      children: "edgeEffect10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置边缘滑动效果。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#edgeeffect",
              children: "EdgeEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid组件的边缘滑动效果，支持弹簧效果和阴影效果。  默认值：EdgeEffect.None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#edgeeffectoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "EdgeEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件内容大小小于组件自身时，是否开启滑动效果。设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled: false }不开启。  默认值：{ alwaysEnabled: false }"
          })]
        })]
      })]
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
        src: (__webpack_require__(98570)/* ["default"] */.A) + "",
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
      children: ["设置嵌套滚动选项。设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。当组件内容大小小于组件自身，且", (0,jsx_runtime.jsx)(_components.a, {
        href: "#edgeeffect10",
        children: "edgeEffect"
      }), "的options为{ alwaysEnabled: false }时，组件自身滑动手势不会触发，嵌套滚动属性不会生效，如果其父滚动组件有滑动手势，则会触发父组件的滑动手势。"]
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
      id: "alignitems12",
      children: "alignItems12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignItems(alignment: Optional<GridItemAlignment>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Grid中GridItem的对齐方式， 使用方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B9%E4%BB%A5%E5%BD%93%E5%89%8D%E8%A1%8C%E6%9C%80%E9%AB%98%E7%9A%84griditem%E7%9A%84%E9%AB%98%E5%BA%A6%E4%B8%BA%E5%85%B6%E4%BB%96griditem%E7%9A%84%E9%AB%98%E5%BA%A6",
        children: "示例9"
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
            children: "alignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#griditemalignment12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GridItemAlignment"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Grid中GridItem的对齐方式。  默认值：GridItemAlignment.DEFAULT"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "focuswrapmode20",
      children: "focusWrapMode20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusWrapMode(mode: Optional<FocusWrapMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置交叉轴方向键走焦模式。"
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
            children: "mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#focuswrapmode20",
              children: "FocusWrapMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["交叉轴方向键走焦模式。  默认值：FocusWrapMode.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  异常值按默认值处理，即交叉轴方向键不能换行。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syncload20",
      children: "syncLoad20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "syncLoad(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否同步加载Grid区域内所有子组件。"
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
            children: ["是否同步加载Grid区域内所有子组件。  true表示同步加载，false表示异步加载。默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为false时，在首次显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将Grid区域内尚未布局的子组件延后到下一帧进行布局。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportemptybranchinlazyloading23",
      children: "supportEmptyBranchInLazyLoading23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportEmptyBranchInLazyLoading(supported: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前Grid组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支行为之间切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editmodeoptions23",
      children: "editModeOptions23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editModeOptions(options?: EditModeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置编辑模式选项参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#editmodeoptions23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "EditModeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑模式选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "griditemalignment12枚举说明",
      children: "GridItemAlignment12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridItem的对齐方式枚举。"
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Grid的默认对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRETCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以一行中的最高的GridItem作为其他GridItem的高度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756370)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、只有可滚动的Grid中，设置STRETCH参数会生效，其他场景不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、在Grid的一行中，如果每个GridItem都是大小规律的（只占一行一列），设置STRETCH参数会生效，存在跨行或跨列的GridItem的场景不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、设置STRETCH后，只有不设置高度的GridItem才会以当前行中最高的GridItem作为自己的高度，设置过高度的GridItem高度不会变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、设置STRETCH后，Grid布局时会有额外的布局流程，可能会带来额外的性能开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "griddirection8枚举说明",
      children: "GridDirection8+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主轴布局方向枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主轴布局方向沿水平方向布局，即自左往右先填满一行，再去填下一行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主轴布局方向沿垂直方向布局，即自上往下先填满一列，再去填下一列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RowReverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主轴布局方向沿水平方向反向布局，即自右往左先填满一行，再去填下一行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ColumnReverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主轴布局方向沿垂直方向反向布局，即自下往上先填满一列，再去填下一列。"
          })]
        })]
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
      id: "onscrollindex",
      children: "onScrollIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollIndex(event: (first: number, last: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前网格显示的起始位置/终止位置的item发生变化时触发。网格初始化时会触发一次。Grid显示区域上第一个子组件/最后一个组件的索引值有变化就会触发。"
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
            children: "当前显示的网格起始位置的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "last10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的网格终止位置的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragstart8",
      children: "onItemDragStart8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragStart(event: OnItemDragStartCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始拖拽网格元素时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手指长按GridItem时触发该事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于拖拽检测也需要长按，且事件处理机制优先触发子组件事件，GridItem上绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture#longpressgesture-1",
        children: "LongPressGesture"
      }), "时无法触发拖拽。如有长按和拖拽同时使用的需求可以使用通用拖拽事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拖拽浮起的网格元素可在应用窗口内移动，若需限制移动范围，可通过自定义手势实现，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B16%E5%AE%9E%E7%8E%B0griditem%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8B%96%E6%8B%BD",
        children: "示例16（实现GridItem自定义拖拽）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持拖动到Grid边缘时自动滚动，可使用通用拖拽实现，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B17%E9%80%9A%E8%BF%87%E6%8B%96%E6%8B%BD%E4%BA%8B%E4%BB%B6%E5%AE%9E%E7%8E%B0griditem%E6%8B%96%E6%8B%BD",
        children: "示例17（通过拖拽事件实现griditem拖拽）"
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#onitemdragstartcallback23",
              children: "OnItemDragStartCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格元素拖拽开始时触发的回调。  API version 22及之前版本，该参数类型为(event: ItemDragInfo, itemIndex: number) => (() => any)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragenter8",
      children: "onItemDragEnter8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragEnter(event: (event: ItemDragInfo) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽进入网格元素范围内时触发。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#itemdraginfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ItemDragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽点的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragmove8",
      children: "onItemDragMove8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽在网格元素范围内移动时触发。"
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#itemdraginfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ItemDragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽点的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insertIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽插入位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragleave8",
      children: "onItemDragLeave8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽离开网格元素时触发。"
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#itemdraginfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ItemDragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽点的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽离开的网格元素索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdrop8",
      children: "onItemDrop8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定该事件的网格元素可作为拖拽释放目标，当GridItem停止拖拽时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当拖拽释放位置在网格元素之内时，isSuccess会返回true；在网格元素之外时，isSuccess会返回false。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#itemdraginfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ItemDragInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽点的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insertIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽插入位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSuccess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽释放位置是否在设置了onItemDrop的网格元素之内。  true：表示拖拽释放位置在设置了onItemDrop的网格元素之内；false：表示拖拽释放位置在设置了onItemDrop的网格元素之外。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollbarupdate10",
      children: "onScrollBarUpdate10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Grid每帧布局结束时触发，可通过该回调设置滚动条的位置及长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口只用作设置Grid的滚动条位置，不建议开发者在此接口中做业务逻辑处理。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的网格起始位置的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的网格起始位置元素相对网格显示起始位置的偏移，单位vp。"
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
              href: "#computedbarattribute10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ComputedBarAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动条的位置及长度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachstart10",
      children: "onReachStart10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachStart(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格到达起始位置时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid初始化时会触发一次，Grid滚动到起始位置时触发一次。Grid边缘效果为弹簧效果时，划动经过起始位置时触发一次，回弹回起始位置时再触发一次。"
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
            children: "网格到达起始位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachend10",
      children: "onReachEnd10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachEnd(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格到达末尾位置时触发。不满一屏并且最后一个子组件末端在Grid内时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid边缘效果为弹簧效果时，划动经过末尾位置时触发一次，回弹回末尾位置时再触发一次。"
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
            children: "网格到达末尾位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollframebegin10",
      children: "onScrollFrameBegin10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollFrameBegin(event: OnScrollFrameBeginCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，网格将按照返回值的实际滑动量进行滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件时触发该事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户交互（如手指滑动、键鼠操作等）触发滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid惯性滚动。"
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
      id: "onscrollstart10",
      children: "onScrollStart10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollStart(event: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网格滑动开始时触发。手指拖动网格或网格的滚动条触发的滑动开始时，会触发该事件。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滑动控制器触发的带动画的滑动，动画开始时会触发该事件。"]
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
            children: "网格滑动开始时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollstop10",
      children: "onScrollStop10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollStop(event: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网格滑动停止时触发。手指拖动网格或网格的滚动条触发的滑动，手指离开屏幕后滑动停止时会触发该事件。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滑动控制器触发的带动画的滑动，动画停止会触发该事件。"]
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
            children: "网格滑动停止时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrolldeprecated",
      children: "onScroll(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onScroll(event: (scrollOffset: number, scrollState: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#scrollstate%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ScrollState"
      }), ") => void)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格滑动时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(965021)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始支持，从API version 12开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#ondidscroll12",
        children: "onDidScroll"
      }), "替代。"]
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
            children: "scrollOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对于上一帧的偏移量，Grid的内容向上滚动时偏移量为正，向下滚动时偏移量为负。  单位vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#scrollstate%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ScrollState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前滑动状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "computedbarattribute10对象说明",
      children: "ComputedBarAttribute10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动条位置和长度对象。"
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
            children: "totalOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid内容相对显示区域的总偏移，单位px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "totalLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid内容总长度，单位px。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uigridevent19",
      children: "UIGridEvent19+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["frameNode中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#geteventgrid19",
        children: "getEvent('Grid')"
      }), "方法的返回值，可用于给Grid节点设置滚动事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UIGridEvent继承于", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollindex",
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
              href: "#ongridscrollindexcallback19",
              children: "OnGridScrollIndexCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ongridscrollindexcallback19",
      children: "OnGridScrollIndexCallback19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnGridScrollIndexCallback = (first: number, last: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid组件可见区域item变化事件的回调类型。"
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
            children: "当前显示的Grid起始位置的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "last"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示的Grid终止位置的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1固定行列grid",
      children: "示例1（固定行列Grid）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GridLayoutOptions"
      }), "中的onGetRectByIndex指定GridItem的位置和大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GridExample {\n  @State numbers1: string[] = ['0', '1', '2', '3', '4'];\n  @State numbers2: string[] = ['0', '1', '2', '3', '4', '5'];\n  layoutOptions3: GridLayoutOptions = {\n    regularSize: [1, 1],\n    onGetRectByIndex: (index: number) => {\n      if (index == 0) {\n        return [0, 0, 1, 1];\n      } else if (index == 1) {\n        return [0, 1, 2, 2];\n      } else if (index == 2) {\n        return [0, 3, 3, 3];\n      } else if (index == 3) {\n        return [3, 0, 3, 3];\n      } else if (index == 4) {\n        return [4, 3, 2, 2];\n      } else {\n        return [5, 5, 1, 1];\n      }\n    }\n  };\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        ForEach(this.numbers1, (day: string) => {\n          ForEach(this.numbers1, (day: string) => {\n            GridItem() {\n              Text(day)\n                .fontSize(16)\n                .backgroundColor(0xF9CF93)\n                .width('100%')\n                .height('100%')\n                .textAlign(TextAlign.Center)\n            }\n          }, (day: string) => day)\n        }, (day: string) => day)\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n\n      Text('GridLayoutOptions的使用：onGetRectByIndex。').fontColor(0x000000).fontSize(14).width('90%')\n\n      Grid(undefined, this.layoutOptions3) {\n        ForEach(this.numbers2, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height('100%')\n              .textAlign(TextAlign.Center)\n          }\n          .height('100%')\n          .width('100%')\n        }, (day: string) => day)\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(121264)/* ["default"] */.A) + "",
        width: "306",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2可滚动grid和滚动事件",
      children: "示例2（可滚动Grid和滚动事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可滚动Grid，包括所有滚动属性和事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource实现了LazyForEach数据源接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "，用于通过LazyForEach给Grid提供子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GridDataSource.ets\nexport class GridDataSource implements IDataSource {\n  private list: string[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: string[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): string {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知控制器数据位置变化\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n\n  // 重新加载所有数据\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 交换元素位置\n  public swapItem(from: number, to: number): void {\n    let temp: string = this.list[from];\n    this.list[from] = this.list[to];\n    this.list[to] = temp;\n    this.notifyDataReload()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  @State gridPosition: number = 0; // 0代表滚动到grid顶部，1代表中间值，2代表滚动到grid底部。\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Grid').fontColor(0x000000).fontSize(16).width('90%')\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .friction(0.6)\n      .enableScrollInteraction(true)\n      .supportAnimation(false)\n      .multiSelectable(false)\n      .edgeEffect(EdgeEffect.Spring)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Grey)\n      .scrollBarWidth(4)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n      .onScrollIndex((first: number, last: number) => {\n        console.info(first.toString());\n        console.info(last.toString());\n      })\n      .onScrollBarUpdate((index: number, offset: number) => {\n        console.info('XXX' + 'Grid onScrollBarUpdate,index : ' + index.toString() + ',offset' + offset.toString());\n        return { totalOffset: (index / 5) * (80 + 10) - offset, totalLength: 80 * 5 + 10 * 4 };\n      })  // 只适用于当前示例代码数据源，如果数据源有变化，则需要修改该部分代码，或者删掉此属性\n      .onDidScroll((scrollOffset: number, scrollState: ScrollState) => {\n        console.info(scrollOffset.toString());\n        console.info(scrollState.toString());\n      })\n      .onScrollStart(() => {\n        console.info('XXX' + 'Grid onScrollStart');\n      })\n      .onScrollStop(() => {\n        console.info('XXX' + 'Grid onScrollStop');\n      })\n      .onReachStart(() => {\n        this.gridPosition = 0;\n        console.info('XXX' + 'Grid onReachStart');\n      })\n      .onReachEnd(() => {\n        this.gridPosition = 2;\n        console.info('XXX' + 'Grid onReachEnd');\n      })\n\n      Button('next page')\n        .onClick(() => { // 点击后滑到下一页\n          this.scroller.scrollPage({ next: true });\n        })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363110)/* ["default"] */.A) + "",
        width: "307",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3可滚动grid设置跨行跨列节点",
      children: "示例3（可滚动Grid设置跨行跨列节点）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GridLayoutOptions"
      }), "的使用：irregularIndexes与onGetIrregularSizeByIndex。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  layoutOptions1: GridLayoutOptions = {\n    regularSize: [1, 1],        // 只支持[1, 1]\n    irregularIndexes: [0, 6],   // 索引为0和6的GridItem占用一行\n  };\n\n  layoutOptions2: GridLayoutOptions = {\n    regularSize: [1, 1],\n    irregularIndexes: [0, 7],   // 索引为0和7的GridItem占用的列数由onGetIrregularSizeByIndex指定\n    onGetIrregularSizeByIndex: (index: number) => {\n      if (index === 0) {\n        return [1, 5];\n      }\n      return [1, index % 6 + 1];\n    }\n  };\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Grid1').fontColor(0x000000).fontSize(16).width('90%')\n      Grid(this.scroller, this.layoutOptions1) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }.selectable(false)\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .multiSelectable(true)\n      .scrollBar(BarState.Off)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n\n      Text('Grid2').fontColor(0x000000).fontSize(16).width('90%')\n      // 不使用scroll，需要undefined占位\n      Grid(undefined, this.layoutOptions2) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .scrollBar(BarState.Off)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515565)/* ["default"] */.A) + "",
        width: "307",
        height: "597"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4grid嵌套滚动",
      children: "示例4（Grid嵌套滚动）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#nestedscroll10",
        children: "nestedScroll"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollframebegin10",
        children: "onScrollFrameBegin"
      }), "的使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  numbers: GridDataSource = new GridDataSource([]);\n  @State translateY: number = 0;\n  private scroller: Scroller = new Scroller();\n  private gridScroller: Scroller = new Scroller();\n  private touchDown: boolean = false;\n  private listTouchDown: boolean = false;\n  private scrolling: boolean = false;\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 100; i++) {\n      list.push(i.toString());\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        Row() {\n          Text('Head')\n        }\n\n        Column() {\n          List({ scroller: this.scroller }) {\n            ListItem() {\n              Grid() {\n                GridItem() {\n                  Text('GoodsTypeList1')\n                }\n                .backgroundColor(this.colors[0])\n                .columnStart(0)\n                .columnEnd(1)\n\n                GridItem() {\n                  Text('GoodsTypeList2')\n                }\n                .backgroundColor(this.colors[1])\n                .columnStart(0)\n                .columnEnd(1)\n\n                GridItem() {\n                  Text('GoodsTypeList3')\n                }\n                .backgroundColor(this.colors[2])\n                .columnStart(0)\n                .columnEnd(1)\n\n                GridItem() {\n                  Text('GoodsTypeList4')\n                }\n                .backgroundColor(this.colors[3])\n                .columnStart(0)\n                .columnEnd(1)\n\n                GridItem() {\n                  Text('GoodsTypeList5')\n                }\n                .backgroundColor(this.colors[4])\n                .columnStart(0)\n                .columnEnd(1)\n              }\n              .scrollBar(BarState.Off)\n              .columnsGap(15)\n              .rowsGap(10)\n              .rowsTemplate('1fr 1fr 1fr 1fr 1fr')\n              .columnsTemplate('1fr')\n              .width('100%')\n              .height(200)\n            }\n\n            ListItem() {\n              Grid(this.gridScroller) {\n                LazyForEach(this.numbers, (item: string) => {\n                  GridItem() {\n                    Text(item)\n                      .fontSize(16)\n                      .backgroundColor(0xF9CF93)\n                      .width('100%')\n                      .height('100%')\n                      .textAlign(TextAlign.Center)\n                  }\n                  .width('100%')\n                  .height(40)\n                  .shadow({ radius: 10, color: '#909399', offsetX: 1, offsetY: 1 })\n                  .borderRadius(10)\n                  .translate({ x: 0, y: this.translateY })\n                }, (item: string) => item)\n              }\n              .columnsTemplate('1fr 1fr')\n              .friction(0.3)\n              .columnsGap(15)\n              .rowsGap(10)\n              .scrollBar(BarState.Off)\n              .width('100%')\n              .height('100%')\n              .layoutDirection(GridDirection.Column)\n              .nestedScroll({\n                scrollForward: NestedScrollMode.PARENT_FIRST,\n                scrollBackward: NestedScrollMode.SELF_FIRST\n              })\n              .onTouch((event: TouchEvent) => {\n                if (event.type == TouchType.Down) {\n                  this.listTouchDown = true;\n                } else if (event.type == TouchType.Up) {\n                  this.listTouchDown = false;\n                }\n              })\n            }\n          }\n          .scrollBar(BarState.Off)\n          .edgeEffect(EdgeEffect.None)\n          .onTouch((event: TouchEvent) => {\n            if (event.type == TouchType.Down) {\n              this.touchDown = true;\n            } else if (event.type == TouchType.Up) {\n              this.touchDown = false;\n            }\n          })\n          .onScrollFrameBegin((offset: number, state: ScrollState) => {\n            if (this.scrolling && offset > 0) {\n              let newOffset = this.scroller.currentOffset().yOffset;\n              if (newOffset >= 590) {\n                this.gridScroller.scrollBy(0, offset);\n                return { offsetRemain: 0 };\n              } else if (newOffset + offset > 590) {\n                this.gridScroller.scrollBy(0, newOffset + offset - 590);\n                return { offsetRemain: 590 - newOffset };\n              }\n            }\n            return { offsetRemain: offset };\n          })\n          .onScrollStart(() => {\n            if (this.touchDown && !this.listTouchDown) {\n              this.scrolling = true;\n            }\n          })\n          .onScrollStop(() => {\n            this.scrolling = false;\n          })\n        }\n        .width('100%')\n        .height('100%')\n        .padding({ left: 10, right: 10 })\n      }\n\n      Row() {\n        Text('Top')\n          .width(30)\n          .height(30)\n          .borderRadius(50)\n      }\n      .padding(5)\n      .borderRadius(50)\n      .backgroundColor('#ffffff')\n      .shadow({ radius: 10, color: '#909399', offsetX: 1, offsetY: 1 })\n      .margin({ right: 22, bottom: 15 })\n      .onClick(() => {\n        this.scroller.scrollTo({ xOffset: 0, yOffset: 0 });\n        this.gridScroller.scrollTo({ xOffset: 0, yOffset: 0 });\n      })\n    }\n    .align(Alignment.BottomEnd)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453457)/* ["default"] */.A) + "",
        width: "263",
        height: "575"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5grid拖拽场景",
      children: "示例5（Grid拖拽场景）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过属性", (0,jsx_runtime.jsx)(_components.a, {
          href: "#editmode8",
          children: "editMode"
        }), "设置Grid是否进入编辑模式，进入编辑模式可以拖拽Grid组件内部GridItem。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onitemdragstart8",
          children: "onItemDragStart"
        }), "回调中设置拖拽过程中显示的图片。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onitemdrop8",
          children: "onItemDrop"
        }), "中获取拖拽起始位置，和拖拽插入位置，并在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onitemdrop8",
          children: "onItemDrop"
        }), "中完成交换数组位置逻辑。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置属性supportAnimation(true)支持动画。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(352506)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览器窗口不支持显示拖拽跟手。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  @State text: string = 'drag';\n\n  @Builder pixelMapBuilder() { // 拖拽过程样式\n    Column() {\n      Text(this.text)\n        .fontSize(16)\n        .backgroundColor(0xF9CF93)\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n    }\n  }\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 1; i <= 15; i++) {\n      list.push(i + '');\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  changeIndex(index1: number, index2: number) { // 交换数组位置\n    this.numbers.swapItem(index1, index2);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width(80)\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (day: string) => day)\n      }\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n      .editMode(true) // 设置Grid是否进入编辑模式，进入编辑模式可以拖拽Grid组件内部GridItem\n      .supportAnimation(true) // 设置支持动画\n      .onItemDragStart((event: ItemDragInfo, itemIndex: number) => { // 第一次拖拽此事件绑定的组件时，触发回调。\n        this.text = this.numbers.getData(itemIndex);\n        return this.pixelMapBuilder(); // 设置拖拽过程中显示的图片。\n      })\n      .onItemDrop((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => { // 绑定此事件的组件可作为拖拽释放目标，当在本组件范围内停止拖拽行为时，触发回调。\n        // isSuccess=false时，说明drop的位置在grid外部；insertIndex > length时，说明有新增元素的事件发生\n        if (!isSuccess || insertIndex >= this.numbers.totalCount()) {\n          return;\n        }\n        console.info('itemIndex:' + itemIndex + ', insertIndex:' + insertIndex); // itemIndex拖拽起始位置，insertIndex拖拽插入位置\n        this.changeIndex(itemIndex, insertIndex);\n      })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格子组件开始拖拽："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407350)/* ["default"] */.A) + "",
        width: "350",
        height: "284"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格子组件拖拽过程中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187450)/* ["default"] */.A) + "",
        width: "341",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格子组件1与子组件6拖拽交换位置后："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453611)/* ["default"] */.A) + "",
        width: "350",
        height: "284"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽动画："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761864)/* ["default"] */.A) + "",
        width: "293",
        height: "259"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6自适应grid",
      children: "示例6（自适应Grid）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdirection8",
        children: "layoutDirection"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxcount8",
        children: "maxCount"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mincount8",
        children: "minCount"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#celllength8",
        children: "cellLength"
      }), "的使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 1; i <= 30; i++) {\n      list.push(i + '');\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 5 }) {\n        Blank()\n        Text('rowsTemplate、columnsTemplate都不设置时，layoutDirection、maxCount、minCount、cellLength才生效')\n          .fontSize(16).fontColor(0x000000).width('90%')\n        Grid() {\n          LazyForEach(this.numbers, (day: string) => {\n            GridItem() {\n              Text(day).fontSize(16).backgroundColor(0xF9CF93)\n            }.width(40).height(80).borderWidth(2).borderColor(Color.Red)\n          }, (day: string) => day)\n        }\n        .height(300)\n        .columnsGap(10)\n        .rowsGap(10)\n        .backgroundColor(0xFAEEE0)\n        .maxCount(6)\n        .minCount(2)\n        .cellLength(0)\n        .layoutDirection(GridDirection.Row)\n      }\n      .width('90%').margin({ top: 5, left: 5, right: 5 })\n      .align(Alignment.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576308)/* ["default"] */.A) + "",
        width: "284",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7双指缩放修改grid列数",
      children: "示例7（双指缩放修改Grid列数）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "双指缩放修改Grid列数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  @State columns: number = 2;\n\n  aboutToAppear() {\n    let lastCount = AppStorage.get<number>('columnsCount');\n    if (typeof lastCount != 'undefined') {\n      this.columns = lastCount;\n    }\n\n    let list: string[] = [];\n    for (let i = 0; i < 20; i++) {\n      for (let j = 0; j < 20; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Row() {\n        Text('双指缩放改变列数')\n          .height('5%')\n          .margin({ top: 10, left: 20 })\n      }\n\n      Grid() {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr '.repeat(this.columns))\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .scrollBar(BarState.Off)\n      .backgroundColor(0xFAEEE0)\n      .height('100%')\n      .cachedCount(3)\n      // 切换列数item位置重排动画\n      .animation({\n        duration: 300,\n        curve: Curve.Smooth\n      })\n      .priorityGesture(\n        PinchGesture()\n          .onActionEnd((event: GestureEvent) => {\n            console.info('end scale:' + event.scale);\n            // 手指分开，减少列数以放大Item，触发阈值可以自定义，示例为2\n            if (event.scale > 2) {\n              this.columns--;\n            } else if (event.scale < 0.6) {\n              this.columns++;\n            }\n            // 可以根据设备屏幕宽度设定最大和最小列数，此处以最小1列最大4列为例\n            this.columns = Math.min(4, Math.max(1, this.columns));\n            AppStorage.setOrCreate<number>('columnsCount', this.columns);\n          })\n      )\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812187)/* ["default"] */.A) + "",
        width: "312",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置自适应列数",
      children: "示例8（设置自适应列数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "#columnstemplate",
        children: "columnsTemplate"
      }), "中auto-fill、auto-fit和auto-stretch的使用示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct GridColumnsTemplate {\n  data: number[] = [0, 1, 2, 3, 4, 5];\n  data1: number[] = [0, 1, 2, 3, 4, 5];\n  data2: number[] = [0, 1, 2, 3, 4, 5];\n\n  build() {\n    Column({ space: 10 }) {\n      Text('auto-fill 根据设定的列宽自动计算列数').width('90%')\n      Grid() {\n        ForEach(this.data, (item: number) => {\n          GridItem() {\n            Text('N' + item).height(80)\n          }\n          .backgroundColor(Color.Orange)\n        })\n      }\n      .width('90%')\n      .border({ width: 1, color: Color.Black })\n      .columnsTemplate('repeat(auto-fill, 70)')\n      .columnsGap(10)\n      .rowsGap(10)\n      .height(150)\n\n      Text('auto-fit 先根据设定的列宽计算列数，余下的空间会均分到每一列中').width('90%')\n      Grid() {\n        ForEach(this.data1, (item: number) => {\n          GridItem() {\n            Text('N' + item).height(80)\n          }\n          .backgroundColor(Color.Orange)\n        })\n      }\n      .width('90%')\n      .border({ width: 1, color: Color.Black })\n      .columnsTemplate('repeat(auto-fit, 70)')\n      .columnsGap(10)\n      .rowsGap(10)\n      .height(150)\n\n      Text('auto-stretch 先根据设定的列宽计算列数，余下的空间会均分到每个列间距中').width('90%')\n      Grid() {\n        ForEach(this.data2, (item: number) => {\n          GridItem() {\n            Text('N' + item).height(80)\n          }\n          .backgroundColor(Color.Orange)\n        })\n      }\n      .width('90%')\n      .border({ width: 1, color: Color.Black })\n      .columnsTemplate('repeat(auto-stretch, 70)')\n      .columnsGap(10)\n      .rowsGap(10)\n      .height(150)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487943)/* ["default"] */.A) + "",
        width: "646",
        height: "845"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9以当前行最高的griditem的高度为其他griditem的高度",
      children: "示例9（以当前行最高的GridItem的高度为其他GridItem的高度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的Grid中包含两列，每列中的GridItem包括高度确定的两个Column和一个高度不确定的Text共三个子组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在默认情况下，左右两个GridItem的高度可能是不同的；在设置了Grid的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#alignitems12",
        children: "alignItems"
      }), "属性为GridItemAlignment.STRETCH后，一行左右两个GridItem中原本高度较小的GridItem会以另一个高度较大的GridItem的高度作为自己的高度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct Index {\n  data: GridDataSource = new GridDataSource([]);\n  @State items: number[] = [];\n\n  aboutToAppear(): void {\n    let list: string[] = [];\n    for (let i = 0; i < 100; i++) {\n      list.push(i.toString());\n      this.items.push(this.getSize());\n    }\n    this.data= new GridDataSource(list);\n  }\n\n  getSize() {\n    let ret = Math.floor(Math.random() * 5);\n    return Math.max(1, ret);\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text('Grid alignItems示例代码')\n\n      Grid() {\n        LazyForEach(this.data, (item: number) => {\n          // GridItem和Column不设置高度，默认会自适应子组件大小，设置STRETCH的场景下，会变成与当前行最高节点同高。\n          // 若设置高度，则会保持已设置的高度，不会与当前行最高节点同高。\n          GridItem() {\n            Column() {\n              Column().height(100).backgroundColor('#D5D5D5').width('100%')\n              // 中间的Text设置flexGrow(1)来自适应填满父组件的空缺\n              Text('这是一段文字。'.repeat(this.items[item]))\n                .flexGrow(1).width('100%').align(Alignment.TopStart)\n                .backgroundColor('#F7F7F7')\n              Column().height(50).backgroundColor('#707070').width('100%')\n            }\n          }\n          .border({ color: Color.Black, width: 1 })\n        })\n      }\n      .columnsGap(10)\n      .rowsGap(5)\n      .columnsTemplate('1fr 1fr')\n      .width('80%')\n      .height('100%')\n      // Grid设置alignItems为STRETCH，以当前行最高的GridItem的高度为其他GridItem的高度。\n      .alignItems(GridItemAlignment.STRETCH)\n      .scrollBar(BarState.Off)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484595)/* ["default"] */.A) + "",
        width: "299",
        height: "658"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10设置边缘渐隐",
      children: "示例10（设置边缘渐隐）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#fadingedge14",
        children: "fadingEdge"
      }), "属性来设置边缘渐隐效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// 该示例实现了Grid组件开启边缘渐隐效果并设置边缘渐隐长度\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i <= 10; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Grid').fontColor(0x000000).fontSize(16).width('90%')\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(20)\n      .height('90%')\n      .fadingEdge(true, { fadingEdgeLength: LengthMetrics.vp(80) })\n\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(982247)/* ["default"] */.A) + "",
        width: "310",
        height: "638"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11单边边缘效果",
      children: "示例11（单边边缘效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#edgeeffect10",
        children: "edgeEffect"
      }), "接口，实现了Grid组件设置单边边缘效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i <= 10; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(20)\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true, effectEdge: EffectEdge.START })\n      .width('90%')\n      .backgroundColor(0xDCDCDC)\n      .height('80%')\n\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(265327)/* ["default"] */.A) + "",
        width: "232",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12方向键走焦换行模式",
      children: "示例12（方向键走焦换行模式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focuswrapmode20",
        children: "focusWrapMode"
      }), "接口，实现了Grid组件方向键走焦换行效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GridExample {\n  scroller: Scroller = new Scroller();\n  build() {\n    Column() {\n      Grid(this.scroller) {\n        GridItem() {\n          Text('A')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n        GridItem() {\n          Text('B')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n        GridItem() {\n          Text('C')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n        GridItem() {\n          Text('D')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n        GridItem() {\n          Text('E')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n        GridItem() {\n          Text('F')\n            .focusable(true)\n            .fontSize(18)\n            .fontWeight(5)\n            .backgroundColor(0xF9CF93)\n            .width('100%')\n            .height(80)\n            .textAlign(TextAlign.Center)\n        }\n      }\n      .focusWrapMode(FocusWrapMode.WRAP_WITH_ARROW)\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(20)\n      .backgroundColor(0xDCDCDC)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(441065)/* ["default"] */.A) + "",
        width: "352",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13设置滚动事件",
      children: "示例13（设置滚动事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过FrameNode中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#geteventgrid19",
        children: "getEvent('Grid')"
      }), "获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#uigridevent19",
        children: "UIGridEvent"
      }), "，并为Grid设置滚动事件回调，用于事件监听方因无法直接修改页面代码而无法使用声明式接口设置回调的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，新增UIGridEvent接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100);\n    return this.rootNode;\n  }\n\n  addCommonEvent(frameNode: FrameNode) {\n    let gridEvent: UIGridEvent | undefined = typeNode.getEvent(frameNode, 'Grid');\n    gridEvent?.setOnWillScroll((scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => {\n      console.info(`onWillScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}, scrollSource = ${scrollSource}`);\n    });\n    gridEvent?.setOnDidScroll((scrollOffset: number, scrollState: ScrollState) => {\n      console.info(`onDidScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}`);\n    });\n    gridEvent?.setOnReachStart(() => {\n      console.info(`onReachStart`);\n    });\n    gridEvent?.setOnReachEnd(() => {\n      console.info(`onReachEnd`);\n    });\n    gridEvent?.setOnScrollStart(() => {\n      console.info(`onScrollStart`);\n    });\n    gridEvent?.setOnScrollStop(() => {\n      console.info(`onScrollStop`);\n    });\n    gridEvent?.setOnScrollFrameBegin((offset: number, state: ScrollState) => {\n      console.info(`onScrollFrameBegin offset = ${offset}, state = ${state}`);\n      return undefined;\n    });\n    gridEvent?.setOnScrollIndex((first: number, last: number) => {\n      console.info(`onScrollIndex start = ${first}, end = ${last}`);\n    });\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State index: number = 0;\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State numbers: string[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        this.numbers.push(j.toString());\n      }\n    }\n  }\n\n  build() {\n    Column() {\n      Button('add CommonEvent to Grid')\n        .onClick(() => {\n          this.myNodeController!.addCommonEvent(this.myNodeController!.rootNode!.getParent()!.getPreviousSibling()!);\n        })\n      Grid() {\n        ForEach(this.numbers, (day: string, index: number) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (day: string, index: number) => index.toString() + day)\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .enableScrollInteraction(true)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n      NodeContainer(this.myNodeController)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14滚动到指定位置",
      children: "示例14（滚动到指定位置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
        children: "scrollToIndex"
      }), "接口，实现了Grid组件滚动到指定位置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\n@Entry\n@Component\nstruct GridScrollToIndexSample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  aboutToAppear(): void {\n    let list: string[] = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        list.push((i * 5 + j  + 1).toString());\n      }\n    }\n    this.numbers =  new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Button('scrollToIndex')\n        .onClick(() => { // 滚动到对应的位置\n          this.scroller.scrollToIndex(25, true, ScrollAlign.START);\n        })\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .friction(0.6)\n      .enableScrollInteraction(true)\n      .supportAnimation(false)\n      .multiSelectable(false)\n      .edgeEffect(EdgeEffect.Spring)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Grey)\n      .scrollBarWidth(4)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886567)/* ["default"] */.A) + "",
        width: "332",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15实现grid滑动选择",
      children: "示例15（实现Grid滑动选择）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture#pangesture-1",
        children: "PanGesture"
      }), "接口，实现了Grid组件一边滑动一边选择的效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\nimport { display, curves } from '@kit.ArkUI';\n\nenum SlideActionType {\n  START,\n  UPDATE,\n  END\n}\n// 热区\nconst HOT_AREA_LENGTH =\n  Math.round(display.getDefaultDisplaySync().densityDPI * 10 / 25.4 / display.getDefaultDisplaySync().densityPixels);\n// 滚动曲线: 贝塞尔曲线\nconst SLIDE_SELECT_SPEED_CURVE = curves.cubicBezierCurve(0.33, 0, 0.67, 1);\n// 滚动速度: 最大速度\nconst AUTO_SPEED_MAX: number = Math.round(2400 / display.getDefaultDisplaySync().densityPixels);\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  @State selectedIndexes: string[] = [];\n  // 滑动多选时，当前变更选中状态的item\n  @State updateIndex: number = -1;\n  @State lastUpdateIndex: number = -1;\n  @State updateTimer: number = new Date().valueOf();\n  // 是否可进行滑动多选\n  @State canSlideSelect: boolean = false;\n  @State isAutoScroll: boolean = false;\n  // 停止手势\n  @State stopGesture: boolean = false;\n  private scrollStartIndex: number = 0;\n  private scrollEndIndex: number = 0;\n  // 滑动的初始点位\n  @State startIndex: number = -1;\n  @State endIndex: number = -1;\n  // 滚动部位显示区域的高度\n  @State contentHeight: number = 0;\n  @State areaY: number = 0;\n  // 列表宽度\n  @State listWidth: number = 0;\n  @State oldCheckList: boolean[] = [];\n  // 滑动过程中是否将经过的点设为选中状态\n  @State setChecked: boolean = false;\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 20; i++) {\n      for (let j = 0; j < 20; j++) {\n        list.push((20 * i + j + 1).toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n  /**\n   * 获取当前点位\n   * @param finger\n   * @returns\n   */\n  getIndex(finger: FingerInfo): number {\n    // 初始化数据\n    let index = -1;\n    try {\n      index = this.scroller.getItemIndex(finger.localX, finger.localY);\n      if (index === -1) {\n        for (let i = this.scrollStartIndex; i <= this.scrollEndIndex; i++) {\n          const item = this.scroller.getItemRect(i);\n          if (finger.localY < item.y ||\n            finger.localY >= item.y && finger.localY <= item.y + item.height && finger.localX < item.x) {\n            break;\n          }\n          index = i;\n        }\n      }\n    } catch {\n      this.stopGesture = true;\n      return index;\n    }\n    return index;\n  }\n  slideActionStart(index: number): void {\n    if (index < 0) {\n      return;\n    }\n    console.debug('start index: ' + index.toString());\n    const targetIndex = index + 1;\n    this.setChecked = !this.selectedIndexes.includes(targetIndex.toString());\n    this.startIndex = index;\n    this.selectedIndexes.push(targetIndex.toString());\n    this.updateIndex = index;\n\n  }\n  slideActionUpdate(index: number): void {\n    if (!this.canSlideSelect) {\n      return;\n    }\n    if (this.startIndex === -1) {\n      // （初始接触点在空隙）时，重新配置滑动的初始数据\n      this.slideActionStart(index);\n      return;\n    }\n    if (index === -1) {\n      return;\n    }\n\n    this.lastUpdateIndex = this.updateIndex;\n    this.setItemChecked(index);\n    this.updateIndex = index;\n  }\n  setItemChecked(index: number):void {\n    const start = Math.min(this.startIndex, index);\n    const end = Math.max(this.startIndex, index);\n    for (let i = start; i < end+1;i++) {\n      const item = (i+1).toString();\n      if (this.setChecked) {\n        this.selectedIndexes.push(item);\n      } else {\n        if (this.selectedIndexes.includes(item)) {\n          this.selectedIndexes = this.selectedIndexes.filter(selectIndex => selectIndex != item);\n        }\n      }\n\n    }\n  }\n  /**\n   * 滑动结束\n   */\n  slideActionEnd(): void {\n    this.startIndex = -1;\n    this.updateIndex = -1;\n    this.scroller.scrollBy(0, 0);\n    this.isAutoScroll = false;\n  }\n  /**\n   * 自动滚动--\n   * @param finger\n   */\n  autoScroll(finger: FingerInfo): void {\n    // 不可多选\n    if (!this.canSlideSelect) {\n      return;\n    }\n    let pointY = finger.globalY - this.areaY;\n    if (pointY <= HOT_AREA_LENGTH) {\n      if (this.isAutoScroll && pointY <= 0) {\n        return;\n      }\n      const speedFlag = pointY > 0 ? SLIDE_SELECT_SPEED_CURVE\n        .interpolate(1 - pointY / HOT_AREA_LENGTH) : 1;\n      this.scroller.scrollEdge(Edge.Top, {\n        velocity: speedFlag * AUTO_SPEED_MAX\n      });\n      this.isAutoScroll = true;\n    } else if (pointY > this.contentHeight - HOT_AREA_LENGTH) {\n      if (this.isAutoScroll && pointY >= this.contentHeight) {\n        return;\n      }\n      const speedFlag = pointY < this.contentHeight ? SLIDE_SELECT_SPEED_CURVE\n        .interpolate(1 - (this.contentHeight - pointY) / HOT_AREA_LENGTH) : 1;\n      this.scroller.scrollEdge(Edge.Bottom, {\n        velocity: speedFlag * AUTO_SPEED_MAX\n      });\n      this.isAutoScroll = true;\n    } else {\n      if (this.isAutoScroll) {\n        this.scroller.scrollBy(0, 0);\n        this.isAutoScroll = false;\n      }\n    }\n  }\n\n  panGestureAction(type: SlideActionType, event: GestureEvent | undefined): void {\n    if (this.stopGesture || !event) {\n      return;\n    }\n    const finger = event!.fingerList[0];\n    const index = this.getIndex(finger);\n    switch (type) {\n      case SlideActionType.START: {\n        this.slideActionStart(index);\n        break;\n      }\n      case SlideActionType.UPDATE: {\n        this.slideActionUpdate(index);\n        this.autoScroll(finger);\n        break;\n      }\n      case SlideActionType.END: {\n        this.slideActionEnd();\n        break;\n      }\n      default: {\n      }\n    }\n  }\n  build() {\n    Column({ space: 5 }) {\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Stack() {\n              Text(day)\n                .fontSize(16)\n                .backgroundColor(0xF9CF93)\n                .width('100%')\n                .height(80)\n                .textAlign(TextAlign.Center)\n              if (this.canSlideSelect) {\n                // $r('app.media.gouxuan')和$r('app.media.weigouxuan')需要替换为开发者所需的图像资源文件。\n                Image(this.selectedIndexes.includes(day) ? $r('app.media.gouxuan') :$r('app.media.weigouxuan'))\n                  .width(30)\n                  .height(30)\n                  .position({right:5,top:5})\n                  .draggable(false)\n              }\n\n            }\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .friction(0.6)\n      .enableScrollInteraction(true)\n      .supportAnimation(false)\n      .multiSelectable(false)\n      .edgeEffect(EdgeEffect.Spring)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Grey)\n      .scrollBarWidth(4)\n      .width('90%')\n      .height('85%')\n      .draggable(!this.canSlideSelect)\n      .backgroundColor(0xFAEEE0)\n      .onAreaChange((oldVal, newVal) => {\n        this.listWidth = newVal.width as number;\n        this.areaY = newVal.globalPosition.y as number;\n        this.contentHeight = newVal.height as number;\n      })\n      .onScrollIndex((start, end) => {\n        this.scrollStartIndex = start;\n        this.scrollEndIndex = end;\n      })\n      .gesture(\n        // 手势滑动\n        PanGesture({ direction: PanDirection.Vertical })\n          .onActionStart((event: GestureEvent | undefined) => {\n            this.panGestureAction(SlideActionType.START, event);\n          })\n          .onActionUpdate((event: GestureEvent | undefined) => {\n            this.panGestureAction(SlideActionType.UPDATE, event);\n          })\n          .onActionEnd((event?: GestureEvent) => {\n            this.panGestureAction(SlideActionType.END, event);\n          }),\n        GestureMask.Normal\n      )\n      .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n        recognizers: Array<GestureRecognizer>) => {\n        if (this.canSlideSelect && current.isBuiltIn() &&\n          current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n          return GestureJudgeResult.REJECT;\n        }\n        return GestureJudgeResult.CONTINUE;\n      })\n      Row() {\n        Button('开始编辑').onClick(()=>{\n          this.selectedIndexes = [];\n          this.canSlideSelect = true;\n        })\n        Button('结束编辑').onClick(()=>{\n          this.canSlideSelect = false;\n          this.selectedIndexes = [];\n        })\n      }\n      .margin({\n        bottom: 30\n      })\n      Text(`${this.selectedIndexes.join(',')}`)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(68864)/* ["default"] */.A) + "",
        width: "301",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16实现griditem自定义拖拽",
      children: "示例16（实现GridItem自定义拖拽）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#gesture",
        children: "gesture"
      }), "接口，实现了GridItem组件自定义拖拽效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct GridItemExample {\n  @State numbers: number[] = [];\n  @State dragItem: number = -1;\n  @State scaleItem: number = -1;\n  @State item: number = -1;\n  private dragRefOffsetX: number = 0;\n  private dragRefOffsetY: number = 0;\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  private FIX_VP_X: number = 108;\n  private FIX_VP_Y: number = 120;\n\n  aboutToAppear() {\n    for (let i = 1; i <= 11; i++) {\n      this.numbers.push(i);\n    }\n  }\n\n  itemMove(index: number, newIndex: number): void {\n    console.info('index:' + index + ' newIndex:' + newIndex);\n    if (!this.isDraggable(newIndex)) {\n      return;\n    }\n    let tmp = this.numbers.splice(index, 1);\n    this.numbers.splice(newIndex, 0, tmp[0]);\n  }\n\n  // 向下滑\n  down(index: number): void {\n    // 指定固定GridItem不响应事件\n    if (!this.isDraggable(index + 3)) {\n      return;\n    }\n    this.offsetY -= this.FIX_VP_Y;\n    this.dragRefOffsetY += this.FIX_VP_Y;\n    this.itemMove(index, index + 3);\n  }\n\n  // 向下滑(右下角为空)\n  down2(index: number): void {\n    if (!this.isDraggable(index + 3)) {\n      return;\n    }\n    this.offsetY -= this.FIX_VP_Y;\n    this.dragRefOffsetY += this.FIX_VP_Y;\n    this.itemMove(index, index + 3);\n  }\n\n  // 向上滑\n  up(index: number): void {\n    if (!this.isDraggable(index - 3)) {\n      return;\n    }\n    this.offsetY += this.FIX_VP_Y;\n    this.dragRefOffsetY -= this.FIX_VP_Y;\n    this.itemMove(index, index - 3);\n  }\n\n  // 向左滑\n  left(index: number): void {\n    if (!this.isDraggable(index - 1)) {\n      return;\n    }\n    this.offsetX += this.FIX_VP_X;\n    this.dragRefOffsetX -= this.FIX_VP_X;\n    this.itemMove(index, index - 1);\n  }\n\n  // 向右滑\n  right(index: number): void {\n    if (!this.isDraggable(index + 1)) {\n      return;\n    }\n    this.offsetX -= this.FIX_VP_X;\n    this.dragRefOffsetX += this.FIX_VP_X;\n    this.itemMove(index, index + 1);\n  }\n\n  // 向右下滑\n  lowerRight(index: number): void {\n    if (!this.isDraggable(index + 4)) {\n      return;\n    }\n    this.offsetX -= this.FIX_VP_X;\n    this.dragRefOffsetX += this.FIX_VP_X;\n    this.offsetY -= this.FIX_VP_Y;\n    this.dragRefOffsetY += this.FIX_VP_Y;\n    this.itemMove(index, index + 4);\n  }\n\n  // 向右上滑\n  upperRight(index: number): void {\n    if (!this.isDraggable(index - 2)) {\n      return;\n    }\n    this.offsetX -= this.FIX_VP_X;\n    this.dragRefOffsetX += this.FIX_VP_X;\n    this.offsetY += this.FIX_VP_Y;\n    this.dragRefOffsetY -= this.FIX_VP_Y;\n    this.itemMove(index, index - 2);\n  }\n\n  // 向左下滑\n  lowerLeft(index: number): void {\n    if (!this.isDraggable(index + 2)) {\n      return;\n    }\n    this.offsetX += this.FIX_VP_X;\n    this.dragRefOffsetX -= this.FIX_VP_X;\n    this.offsetY -= this.FIX_VP_Y;\n    this.dragRefOffsetY += this.FIX_VP_Y;\n    this.itemMove(index, index + 2);\n  }\n\n  // 向左上滑\n  upperLeft(index: number): void {\n    if (!this.isDraggable(index - 4)) {\n      return;\n    }\n    this.offsetX += this.FIX_VP_X;\n    this.dragRefOffsetX -= this.FIX_VP_X;\n    this.offsetY += this.FIX_VP_Y;\n    this.dragRefOffsetY -= this.FIX_VP_Y;\n    this.itemMove(index, index - 4);\n  }\n\n  isDraggable(index: number): boolean {\n    console.info('index:' + index)\n    return index > 1;\n  }\n\n  build() {\n    Column() {\n      Grid() {\n        ForEach(this.numbers, (item: number) => {\n          GridItem() {\n            Text(item + '')\n              .fontSize(16)\n              .width('100%')\n              .textAlign(TextAlign.Center)\n              .height(100)\n              .borderRadius(10)\n              .backgroundColor(0xF9CF93)\n              .shadow(this.scaleItem == item ? {\n                radius: 70,\n                color: '#15000000',\n                offsetX: 0,\n                offsetY: 0\n              } :\n                {\n                  radius: 0,\n                  color: '#15000000',\n                  offsetX: 0,\n                  offsetY: 0\n                })\n              .animation({ curve: Curve.Sharp, duration: 300 })\n          }\n          // 指定固定GridItem不响应事件\n          .hitTestBehavior(this.isDraggable(this.numbers.indexOf(item)) ? HitTestMode.Default : HitTestMode.None)\n          .scale({ x: this.scaleItem == item ? 1.05 : 1, y: this.scaleItem == item ? 1.05 : 1 })\n          .zIndex(this.dragItem == item ? 1 : 0)\n          .translate(this.dragItem == item ? { x: this.offsetX, y: this.offsetY } : { x: 0, y: 0 })\n          .padding(10)\n          .gesture(\n            // 以下组合手势为顺序识别，当长按手势事件未正常触发时则不会触发拖动手势事件\n            GestureGroup(GestureMode.Sequence,\n              LongPressGesture({ repeat: true })\n                .onAction((event?: GestureEvent) => {\n                  this.getUIContext()?.animateTo({ curve: Curve.Friction, duration: 300 }, () => {\n                    this.scaleItem = item;\n                  })\n                })\n                .onActionEnd(() => {\n                  this.getUIContext()?.animateTo({ curve: Curve.Friction, duration: 300 }, () => {\n                    this.scaleItem = -1;\n                  })\n                }),\n              PanGesture({ fingers: 1, direction: null, distance: 0 })\n                .onActionStart(() => {\n                  this.dragItem = item;\n                  this.dragRefOffsetX = 0;\n                  this.dragRefOffsetY = 0;\n                })\n                .onActionUpdate((event: GestureEvent) => {\n                  this.offsetY = event.offsetY - this.dragRefOffsetY;\n                  this.offsetX = event.offsetX - this.dragRefOffsetX;\n                  this.getUIContext()?.animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {\n                    let index = this.numbers.indexOf(this.dragItem);\n                    if (this.offsetY >= this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44) &&\n                      ![8, 9, 10].includes(index)) {\n                      // 向下滑\n                      this.down(index);\n                    } else if (this.offsetY <= -this.FIX_VP_Y / 2 && (this.offsetX <= 44 && this.offsetX >= -44) &&\n                      ![0, 1, 2].includes(index)) {\n                      // 向上滑\n                      this.up(index);\n                    } else if (this.offsetX >= this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&\n                      ![2, 5, 8, 10].includes(index)) {\n                      // 向右滑\n                      this.right(index);\n                    } else if (this.offsetX <= -this.FIX_VP_X / 2 && (this.offsetY <= 50 && this.offsetY >= -50) &&\n                      ![0, 3, 6, 9].includes(index)) {\n                      // 向左滑\n                      this.left(index);\n                    } else if (this.offsetX >= this.FIX_VP_X / 2 && this.offsetY >= this.FIX_VP_Y / 2 &&\n                      ![2, 5, 7, 8, 9, 10].includes(index)) {\n                      // 向右下滑\n                      this.lowerRight(index);\n                    } else if (this.offsetX >= this.FIX_VP_X / 2 && this.offsetY <= -this.FIX_VP_Y / 2 &&\n                      ![0, 1, 2, 5, 8].includes(index)) {\n                      // 向右上滑\n                      this.upperRight(index);\n                    } else if (this.offsetX <= -this.FIX_VP_X / 2 && this.offsetY >= this.FIX_VP_Y / 2 &&\n                      ![0, 3, 6, 9, 10].includes(index)) {\n                      // 向左下滑\n                      this.lowerLeft(index);\n                    } else if (this.offsetX <= -this.FIX_VP_X / 2 && this.offsetY <= -this.FIX_VP_Y / 2 &&\n                      ![0, 1, 2, 3, 6, 9].includes(index)) {\n                      // 向左上滑\n                      this.upperLeft(index);\n                    } else if (this.offsetX >= this.FIX_VP_X / 2 && this.offsetY >= this.FIX_VP_Y / 2 &&\n                    [7].includes(index)) {\n                      // 向右下滑(右下角为空)\n                      this.down2(index);\n                    }\n                  })\n                })\n                .onActionEnd(() => {\n                  this.getUIContext()?.animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {\n                    this.dragItem = -1;\n                  })\n                  this.getUIContext()?.animateTo({\n                    curve: curves.interpolatingSpring(14, 1, 170, 17), delay: 150\n                  }, () => {\n                    this.scaleItem = -1;\n                  })\n                })\n            )\n              .onCancel(() => {\n                this.getUIContext()?.animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {\n                  this.dragItem = -1;\n                })\n                this.getUIContext()?.animateTo({\n                  curve: curves.interpolatingSpring(14, 1, 170, 17)\n                }, () => {\n                  this.scaleItem = -1;\n                })\n              })\n          )\n        }, (item: number) => item.toString())\n      }\n      .width('90%')\n      .editMode(true)\n      .scrollBar(BarState.Off)\n      .columnsTemplate('1fr 1fr 1fr')\n    }.width('100%').height('100%').backgroundColor('#0D182431').padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592413)/* ["default"] */.A) + "",
        width: "293",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17通过拖拽事件实现griditem拖拽",
      children: "示例17（通过拖拽事件实现GridItem拖拽）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop",
        children: "拖拽事件"
      }), "实现拖拽GridItem到Grid边缘时Grid自动滚动的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2可滚动grid和滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct Example {\n  numbers: GridDataSource = new GridDataSource([]);\n\n  aboutToAppear(): void {\n    let list: string[] = [];\n    for (let index = 0; index < 100; index++) {\n      list.push(index.toString());\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  changeIndex(index1: number, index2: number) { // 交换数组位置\n    console.info(index1 + 'index2:' + index2);\n    this.numbers.swapItem(index1, index2);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.numbers, (item: number, index: number) => {\n          GridItem() {\n            Text(item + '')\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width(80)\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n          .width(90)\n          .height(90)\n          .selectable(true)\n          .selected(true)\n          .allowDrop([])\n          .onDragStart((event: DragEvent) => {\n            return { extraInfo: index + '' };\n          })\n          .onDragEnter((event: DragEvent, extraParams?: string) => {\n            console.info(index + '' + extraParams);\n          })\n          .onDragEnd((event: DragEvent, extraParams?: string) => {\n            console.info('onDragEnd' + index + '' + extraParams);\n          })\n          .onDrop((event?: DragEvent, extraParams?: string) => {\n            console.info('drop:' + item + '' + extraParams + JSON.stringify(event!));\n            this.changeIndex(parseInt(JSON.parse(extraParams!).extraInfo), index);\n          })\n        }, (item: string, index: number) => item + '+' + index)\n      }\n      .columnsGap(5)\n      .rowsGap(5)\n      .columnsTemplate('1fr 1fr 1fr')\n      .height(300)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153622)/* ["default"] */.A) + "",
        width: "398",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18grid组件基于断点配置列数",
      children: "示例18（Grid组件基于断点配置列数）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例展示了Grid组件支持基于断点配置列数效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid(undefined) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate({fillType:PresetFillType.BREAKPOINT_SM2MD3LG5})\n      .columnsGap(10)\n      .rowsGap(10)\n      .scrollBar(BarState.Off)\n      .width('100%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').height('10%').justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid宽度属于sm及更小的断点区间时显示2列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(819445)/* ["default"] */.A) + "",
        width: "356",
        height: "707"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid宽度属于md断点区间时显示3列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(243050)/* ["default"] */.A) + "",
        width: "1013",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid宽度属于lg及更大的断点区间时显示5列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(184464)/* ["default"] */.A) + "",
        width: "1399",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19获取内容总大小",
      children: "示例19（获取内容总大小）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22 开始，该示例实现了获取内容总大小的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2（可滚动Grid和滚动事件）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { GridDataSource } from './GridDataSource';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource([]);\n  scroller: Scroller = new Scroller();\n  @State contentWidth: number = -1;\n  @State contentHeight: number = -1;\n\n  aboutToAppear() {\n    let list: string[] = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 5; j++) {\n        list.push(j.toString());\n      }\n    }\n    this.numbers = new GridDataSource(list);\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('可滚动Grid和LazyForEach')\n      Row() {\n        // 点击按钮来调用contentSize函数获取内容尺寸\n        Button('GetContentSize')\n          .onClick(() => {\n            // Scroller未绑定组件时会抛异常，需要加上try catch保护\n            try {\n              // 通过调用contentSize函数获取内容尺寸的宽度值\n              this.contentWidth = this.scroller.contentSize().width;\n              // 通过调用contentSize函数获取内容尺寸的高度值\n              this.contentHeight = this.scroller.contentSize().height;\n            } catch (error) {\n              let err: BusinessError = error as BusinessError;\n              console.error(`Failed to get contentSize of the grid, code=${err.code}, message=${err.message}`);\n            }\n          })\n        // 将获取到的内容尺寸信息通过文本进行呈现\n        Text('Width：' + this.contentWidth + '，Height：' + this.contentHeight)\n          .fontColor(Color.Red)\n          .height(50)\n      }\n\n      Grid(this.scroller) {\n        LazyForEach(this.numbers, (day: string) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n          .margin(20)\n        }, (index: number) => index.toString())\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .friction(0.6)\n      .enableScrollInteraction(true)\n      .supportAnimation(false)\n      .multiSelectable(false)\n      .edgeEffect(EdgeEffect.Spring)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Grey)\n      .scrollBarWidth(4)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(644112)/* ["default"] */.A) + "",
        width: "352",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置多选聚拢动画",
      children: "示例20（设置多选聚拢动画）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过打开Grid多选聚拢动画开关，实现了在GridItem上", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
        children: "长按弹出菜单"
      }), "时聚拢显示范围内被选中的GridItem。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，Grid组件新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmodeoptions23",
        children: "编辑模式选项"
      }), "接口，可以设置多选聚拢动画开关。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GridDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E5%8F%AF%E6%BB%9A%E5%8A%A8grid%E5%92%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例2（可滚动Grid和滚动事件）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { GridDataSource } from './GridDataSource';\n\n@Entry\n@Component\nstruct GridExample {\n  numbers: GridDataSource = new GridDataSource(['1', '2', '3', '4', '5', '6', '7', '8', '9']);\n  @State isSelected: boolean[] = [];\n  selectedCount: number = 0;\n\n  @Styles\n  normalStyles(): void {\n    .opacity(1.0)\n  }\n\n  @Styles\n  selectStyles(): void {\n    .opacity(0.4)\n  }\n\n  onPageShow(): void {\n    let i: number = 0;\n    for (i = 0; i < 9; i++) {\n      this.isSelected.push(false);\n    }\n  }\n\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text('menu item 1')\n        .fontSize(18)\n        .width(120)\n        .height(50)\n        .textAlign(TextAlign.Center)\n      Divider().height(10)\n      Text('menu item 2')\n        .fontSize(18)\n        .width(120)\n        .height(50)\n        .textAlign(TextAlign.Center)\n    }.width(100)\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Grid')\n      Grid() {\n        LazyForEach(this.numbers, (day: string, index: number) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height('100%')\n              .textAlign(TextAlign.Center)\n          }\n          .selected(this.isSelected[index])\n          // 设置多选显示效果\n          .stateStyles({\n            normal: this.normalStyles,\n            selected: this.selectStyles\n          })\n          .bindContextMenu(this.MenuBuilder, ResponseType.LongPress,\n            { preview: MenuPreviewMode.IMAGE, hapticFeedbackMode: HapticFeedbackMode.ENABLED })\n          .onClick(() => {\n            this.isSelected[index] = !this.isSelected[index];\n            console.info(`item:${index}, this.isSelected[item]:${this.isSelected[index]}`)\n            if (this.isSelected[index]) {\n              ++this.selectedCount;\n            } else {\n              --this.selectedCount;\n            }\n          })\n        }, (day: string) => day)\n      }\n      .editModeOptions({\n        enableGatherSelectedItemsAnimation: true, onGetPreviewBadge: () => {\n          return this.selectedCount;\n        }\n      })\n      .columnsTemplate('1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432113)/* ["default"] */.A) + "",
        width: "403",
        height: "425"
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
265327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479627-18f7781a3dbef0523b092a504ce5ef3b.gif");

},
592413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479629-58f772028b55f3e2862b8f607e33532d.gif");

},
407350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
363110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479621-298a5dc10629162a40e0f8854126014e.gif");

},
761864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439669-feec79f5a2eb2ac3d76e6ccac9bd1ac0.gif");

},
644112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799982-1d48e4b2b575416d6a16f6376a26a2dd.gif");

},
153622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799980-db3fc8937e5595b0d886fa9039b85362.gif");

},
98570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
886567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439673-a11409339a77f55b9a00db7f8e12558c.gif");

},
453611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
56607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
187450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479623-9dcf89196091eb3448a140ac608fc078.png");

},
243050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959630-3159937298f9453519f4297bdac16e4b.png");

},
576308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959624-c9b385f245a3109c117bc1e2c3fd64bf.gif");

},
965021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
812187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479625-e82e194476fa34d794134504cb45f69c.gif");

},
756370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
68864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959628-390b6a6d4ba7fb49eba4198dc2b8a914.gif");

},
484595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439671-6ace31d0047780dbcdebfa43276dbd39.png");

},
184464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479631-5342a791ff691eaa2d526dbd5db12cff.png");

},
487943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799976-a85a33815ba054e4e770a90e6417a3b3.png");

},
432113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439677-a226f2e34717ad09c40d8c304c1b35dc.gif");

},
710297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
303054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
786324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
982247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959626-0cc9c3458b4b85da8b029fc5e8d0a59b.gif");

},
453457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439667-f4bc93ae28a8a7cf1c6cf1b8457d74ff.gif");

},
754702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
441065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799978-5b05eeca93b81b57df2848ee811e2004.gif");

},
352506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
121264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959620-27dde2fbd93b5bce8a32a2d73bcbd62f.gif");

},
819445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439675-96cc230f50b517be4ccb52239b4d9127.png");

},
515565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799972-28e59ea11e8b032b1734f7af413cb972.gif");

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