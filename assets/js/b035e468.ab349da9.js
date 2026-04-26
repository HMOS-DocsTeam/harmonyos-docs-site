"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["887093"], {
316583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_list_ts_container_list_md_b03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-scroll-and-swipe-ts-container-list-ts-container-list-md-b03.json
var site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_list_ts_container_list_md_b03_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list","title":"List","description":"列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list.md","sourceDirName":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list","slug":"/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"List","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-list"},"sidebar":"ref","previous":{"title":"SideBarContainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer"},"next":{"title":"ListItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list.md


const frontMatter = {
	title: 'List',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-list'
};
const contentTitle = 'List';

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
  "value": "ListOptions18+对象说明",
  "id": "listoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "listDirection",
  "id": "listdirection",
  "level": 3
}, {
  "value": "divider",
  "id": "divider",
  "level": 3
}, {
  "value": "scrollBar",
  "id": "scrollbar",
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
  "value": "cachedCount22+",
  "id": "cachedcount22",
  "level": 3
}, {
  "value": "edgeEffect",
  "id": "edgeeffect",
  "level": 3
}, {
  "value": "chainAnimation",
  "id": "chainanimation",
  "level": 3
}, {
  "value": "multiSelectable8+",
  "id": "multiselectable8",
  "level": 3
}, {
  "value": "lanes9+",
  "id": "lanes9",
  "level": 3
}, {
  "value": "lanes22+",
  "id": "lanes22",
  "level": 3
}, {
  "value": "alignListItem9+",
  "id": "alignlistitem9",
  "level": 3
}, {
  "value": "sticky9+",
  "id": "sticky9",
  "level": 3
}, {
  "value": "scrollSnapAlign10+",
  "id": "scrollsnapalign10",
  "level": 3
}, {
  "value": "scrollSnapAnimationSpeed22+",
  "id": "scrollsnapanimationspeed22",
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
  "value": "contentStartOffset11+",
  "id": "contentstartoffset11",
  "level": 3
}, {
  "value": "contentStartOffset22+",
  "id": "contentstartoffset22",
  "level": 3
}, {
  "value": "contentEndOffset11+",
  "id": "contentendoffset11",
  "level": 3
}, {
  "value": "contentEndOffset22+",
  "id": "contentendoffset22",
  "level": 3
}, {
  "value": "childrenMainSize12+",
  "id": "childrenmainsize12",
  "level": 3
}, {
  "value": "maintainVisibleContentPosition12+",
  "id": "maintainvisiblecontentposition12",
  "level": 3
}, {
  "value": "stackFromEnd19+",
  "id": "stackfromend19",
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
  "value": "editModeOptions23+",
  "id": "editmodeoptions23",
  "level": 3
}, {
  "value": "editMode(deprecated)",
  "id": "editmodedeprecated",
  "level": 3
}, {
  "value": "supportEmptyBranchInLazyLoading23+",
  "id": "supportemptybranchinlazyloading23",
  "level": 3
}, {
  "value": "ListItemAlign9+枚举说明",
  "id": "listitemalign9枚举说明",
  "level": 2
}, {
  "value": "StickyStyle9+枚举说明",
  "id": "stickystyle9枚举说明",
  "level": 2
}, {
  "value": "ScrollSnapAlign10+枚举说明",
  "id": "scrollsnapalign10枚举说明",
  "level": 2
}, {
  "value": "ScrollSnapAnimationSpeed22+枚举说明",
  "id": "scrollsnapanimationspeed22枚举说明",
  "level": 2
}, {
  "value": "CloseSwipeActionOptions11+对象说明",
  "id": "closeswipeactionoptions11对象说明",
  "level": 2
}, {
  "value": "ListDividerOptions18+对象说明",
  "id": "listdivideroptions18对象说明",
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
  "value": "onReachStart",
  "id": "onreachstart",
  "level": 3
}, {
  "value": "onReachEnd",
  "id": "onreachend",
  "level": 3
}, {
  "value": "onScrollFrameBegin9+",
  "id": "onscrollframebegin9",
  "level": 3
}, {
  "value": "onScrollStart9+",
  "id": "onscrollstart9",
  "level": 3
}, {
  "value": "onScrollStop",
  "id": "onscrollstop",
  "level": 3
}, {
  "value": "onItemMove",
  "id": "onitemmove",
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
  "value": "onScrollVisibleContentChange12+",
  "id": "onscrollvisiblecontentchange12",
  "level": 3
}, {
  "value": "onItemDelete(deprecated)",
  "id": "onitemdeletedeprecated",
  "level": 3
}, {
  "value": "onScroll(deprecated)",
  "id": "onscrolldeprecated",
  "level": 3
}, {
  "value": "ScrollState枚举说明",
  "id": "scrollstate枚举说明",
  "level": 2
}, {
  "value": "ListScroller11+",
  "id": "listscroller11",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象",
  "level": 3
}, {
  "value": "getItemRectInGroup11+",
  "id": "getitemrectingroup11",
  "level": 3
}, {
  "value": "getVisibleListContentInfo14+",
  "id": "getvisiblelistcontentinfo14",
  "level": 3
}, {
  "value": "scrollToItemInGroup11+",
  "id": "scrolltoitemingroup11",
  "level": 3
}, {
  "value": "closeAllSwipeActions11+",
  "id": "closeallswipeactions11",
  "level": 3
}, {
  "value": "OnScrollVisibleContentChangeCallback12+",
  "id": "onscrollvisiblecontentchangecallback12",
  "level": 2
}, {
  "value": "VisibleListContentInfo12+对象说明",
  "id": "visiblelistcontentinfo12对象说明",
  "level": 2
}, {
  "value": "ListItemGroupArea12+枚举说明",
  "id": "listitemgrouparea12枚举说明",
  "level": 2
}, {
  "value": "UIListEvent19+",
  "id": "uilistevent19",
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
  "value": "setOnScrollVisibleContentChange19+",
  "id": "setonscrollvisiblecontentchange19",
  "level": 3
}, {
  "value": "OnListScrollIndexCallback19+",
  "id": "onlistscrollindexcallback19",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（添加滚动事件）",
  "id": "示例1添加滚动事件",
  "level": 3
}, {
  "value": "示例2（设置子元素对齐）",
  "id": "示例2设置子元素对齐",
  "level": 3
}, {
  "value": "示例3（设置编辑模式）",
  "id": "示例3设置编辑模式",
  "level": 3
}, {
  "value": "示例4（设置限位对齐）",
  "id": "示例4设置限位对齐",
  "level": 3
}, {
  "value": "示例5（跳转准确）",
  "id": "示例5跳转准确",
  "level": 3
}, {
  "value": "示例6（获得子组件索引信息）",
  "id": "示例6获得子组件索引信息",
  "level": 3
}, {
  "value": "示例7（设置边缘渐隐）",
  "id": "示例7设置边缘渐隐",
  "level": 3
}, {
  "value": "示例8（单边边缘效果）",
  "id": "示例8单边边缘效果",
  "level": 3
}, {
  "value": "示例9（设置折行走焦）",
  "id": "示例9设置折行走焦",
  "level": 3
}, {
  "value": "示例10（设置显示区域外插入数据时，保持显示内容不变）",
  "id": "示例10设置显示区域外插入数据时保持显示内容不变",
  "level": 3
}, {
  "value": "示例11（设置滚动条的边距）",
  "id": "示例11设置滚动条的边距",
  "level": 3
}, {
  "value": "示例12（使用OnMove进行拖拽）",
  "id": "示例12使用onmove进行拖拽",
  "level": 3
}, {
  "value": "示例13（基于断点配置lanes）",
  "id": "示例13基于断点配置lanes",
  "level": 3
}, {
  "value": "示例14（获取内容总大小）",
  "id": "示例14获取内容总大小",
  "level": 3
}, {
  "value": "示例15（在两个列表之间实现拖拽功能）",
  "id": "示例15在两个列表之间实现拖拽功能",
  "level": 3
}, {
  "value": "示例16（实现ListItemGroup中点击项的居中效果）",
  "id": "示例16实现listitemgroup中点击项的居中效果",
  "level": 3
}, {
  "value": "示例17（设置多选聚拢动画）",
  "id": "示例17设置多选聚拢动画",
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
        id: "list",
        children: "List"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List的懒加载是指组件按需加载可见区域可见的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。List和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "结合，懒加载能力存在差异："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List和ForEach结合，会一次性创建所有的子节点，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，划出屏幕范围的节点不会下树销毁，划入屏幕范围的节点会布局和渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，划出屏幕范围的节点会下树销毁，划入屏幕范围的节点会创建、布局、渲染。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当List和带", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
          children: "virtualScroll"
        }), "的Repeat结合，它的懒加载行为和LazyForEach一致。当List和不带virtualScroll的Repeat结合，它的懒加载行为和ForEach一致。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果可滚动组件嵌套List组件，并且滚动方向相同，List组件又没有设置主轴尺寸时，List组件会全量加载子组件，导致懒加载失效。该场景推荐使用List嵌套", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "组件以实现优化性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List的预加载是指除了加载显示区域内可见的子组件外，还支持空闲时隙提前加载部分显示区域外不可见的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。List支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cachedcount",
        children: "cachedCount"
      }), "设置预加载的数量。默认会预加载显示区域上下各一屏子节点（最大预加载16行子节点）。List和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "结合，预加载能力存在差异："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List和ForEach结合，如果设置了cachedCount，除了会布局显示区域内子组件外，还会在空闲时隙预布局显示区域外cachedCount范围内的子节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List和LazyForEach结合，如果设置了cachedCount，除了会创建和布局显示区域内子组件外，还会在空闲时隙预创建和预布局显示区域外cachedCount范围内的子节点。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当List和带", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
          children: "virtualScroll"
        }), "的Repeat结合，它的预加载行为和LazyForEach一致。当List和不带virtualScroll的Repeat结合，它的预加载行为和ForEach一致。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153463)/* ["default"] */.A) + "",
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
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "子组件和自定义组件。自定义组件在List下使用时，建议使用ListItem或ListItemGroup作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。"]
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
        src: (__webpack_require__(453877)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在处理大量子组件时遇到卡顿问题，请考虑采用懒加载、缓存列表项、动态预加载、组件复用和布局优化等方法来进行优化。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list",
        children: "优化长列表加载慢丢帧问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，List单个子组件的宽高最大为16777216px；API version 20及之前，List单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List的子组件的索引值计算规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按子组件的顺序依次递增。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if/else语句中，只有条件成立的分支内的子组件会参与索引值计算，条件不成立的分支内子组件不计算索引值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ForEach/LazyForEach/Repeat语句中，会计算展开所有子节点索引值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), "发生变化以后，会更新子节点索引值。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ListItemGroup作为一个整体计算一个索引值，ListItemGroup内部的ListItem不计算索引值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List子组件visibility属性设置为Hidden或None依然会计算索引值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List(options?: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ListOptions"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建List列表容器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#listoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ListOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置List组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listoptions18对象说明",
      children: "ListOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置List组件参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "initialIndex7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前List初次加载时显示区域起始位置的item索引值。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数或超过了当前List最后一个item的索引值时视为无效取值，无效取值按默认值显示。  从API version 14开始，如果在List组件创建完成后首次布局前（如List的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onattach12",
              children: "onAttach"
            }), "事件中），调用Scroller滚动控制器中不带动画的scrollToIndex或scrollEdge方法，会覆盖initialIndex设置的值。  设置了initialIndex后，List从initialIndex对应的子组件开始布局，在这之前的子组件未参与布局，无法计算准确大小，因此通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#currentoffset",
              children: "currentOffset"
            }), "接口获取到的List的滚动总偏移量通过估算得出，可能会有误差。可通过设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#childrenmainsize12",
              children: "childrenMainSize"
            }), "确保List的滚动总偏移量的准确性。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "space7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scroller7+"
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
            children: ["可滚动组件的控制器。与List绑定后，可以通过它控制List的滚动。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
        src: (__webpack_require__(195652)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "的默认值为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listdirection",
      children: "listDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "listDirection(value: Axis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List组件排列方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axis",
              children: "Axis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的排列方向。  默认值：Axis.Vertical"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider",
      children: "divider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["divider(value: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listdivideroptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ListDividerOptions"
      }), " | null)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置ListItem分割线样式，默认无分割线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List的分割线画在主轴方向两个子组件之间，第一个子组件上方和最后一个子组件下方不会绘制分割线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多列模式下，ListItem与ListItem之间的分割线起始边距从每一列的交叉轴方向起始边开始计算，单列模式从List交叉轴方向起始边开始计算。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItem设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style",
        children: "多态样式"
      }), "时，被按压的子组件上下的分割线不绘制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#listdivideroptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ListDividerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动条状态。  默认值：API version 9及以下版本默认值为BarState.Off，API version 10及以上版本的默认值为BarState.Auto。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount",
      children: "cachedCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表中ListItem/ListItemGroup的预加载数量，懒加载场景只会预加载List显示区域外上下各cachedCount行的ListItem，非懒加载场景会全部加载。懒加载、非懒加载都只布局List显示区域+List显示区域外cachedCount的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内没有ListItem，则整个ListItemGroup算一行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List下嵌套使用LazyForEach，并且LazyForEach下嵌套使用ListItemGroup时，LazyForEach会在List显示区域外上下各会创建cachedCount个ListItemGroup。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "ListItem/ListItemGroup的预加载数量。  默认值：根据屏幕内显示的节点个数设置，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount14",
      children: "cachedCount14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(count: number, show: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表中ListItem/ListItemGroup的预加载数量，并配置是否显示预加载节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内没有ListItem，则整个ListItemGroup算一行。配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "裁剪"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#clipcontent14",
        children: "内容裁剪"
      }), "属性可以显示出预加载节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(719237)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常建议设置cachedCount=n/2（n代表一屏显示的列表项数量），同时需考虑其他因素以实现体验和内存使用的平衡。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list#section11667144010222",
        children: "优化长列表加载慢丢帧问题-缓存列表项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 14开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "预加载的ListItem的数量。  默认值：根据屏幕内显示的节点个数设置，最大值为16。  取值范围：[0, +∞)，设置为小于0的值时，按1处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被预加载的ListItem是否需要显示。设置为true时显示预加载的ListItem，设置为false时不显示预加载的ListItem。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachedcount22",
      children: "cachedCount22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount(count: number | CacheCountInfo, show: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表中ListItem/ListItemGroup的预加载数量，并配置是否显示预加载节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若cachedCount属性的第一个参数为number类型，在帧间空闲时隙会在显示区域外上下各预加载并布局count行ListItem。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若cachedCount属性的第一个参数为CacheCountInfo类型，当已缓存行数小于CacheCountInfo.minCount时，会在帧间空闲时隙预加载和布局。当已缓存行数大于CacheCountInfo.maxCount时，会将超出范围的节点销毁或回收复用。UI空闲时（无动画或用户操作），会在显示区域外上下各预加载CacheCountInfo.maxCount行ListItem。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内没有ListItem，则整个ListItemGroup算一行。配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#clipcontent14",
        children: "clipContent"
      }), "属性可以显示出预加载节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认行为：count参数默认为number类型，数值根据屏幕内显示的节点个数设置，最大值为16。预加载的ListItem默认不参与绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623885)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常建议设置cachedCount=n/2（n代表一屏显示的列表项数量），同时需考虑其他因素以实现体验和内存使用的平衡。从API version 22开始，支持设置最大最小缓存数，可以将最大缓存数设置稍大，如设置为最小缓存数的两倍，利用UI线程空闲时间创建节点，减少滚动过程中预加载创建节点，提升滚动流畅性。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list#section11667144010222",
        children: "优化长列表加载慢丢帧问题-缓存列表项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#cachecountinfo22%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CacheCountInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被预加载的ListItem是否需要显示。  true：显示预加载的ListItem。  false：不显示预加载的ListItem。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edgeeffect",
      children: "edgeEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置边缘滑动效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349013)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件的内容区小于一屏时，默认没有回弹效果。若要启用回弹效果，可以通过设置edgeEffect属性的options参数为{ alwaysEnabled: true }来实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "List组件的边缘滑动效果，支持弹簧效果和阴影效果。  默认值：EdgeEffect.Spring"
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
      id: "chainanimation",
      children: "chainAnimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chainAnimation(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前List是否启用链式联动动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(429973)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "链式联动效果是指在手指划动过程中，手指拖动的ListItem是主动对象，相邻的ListItem为从动对象，主动对象驱动从动对象联动，驱动效果遵循弹簧物理动效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "链式动效的驱动效果体现在ListItem之间的间距上。静止状态下的间距可以通过List组件space参数设置，如果不设置space参数并且启用了链式动效，该间距默认为20vp。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "链式动效启用后，List的分割线不显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "链式动效生效的前提是List处于单列模式并且边缘效果为EdgeEffect.Spring类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "是否启用链式联动动效。  默认值：false，不启用链式联动。true，启用链式联动。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiselectable8",
      children: "multiSelectable8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiSelectable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启鼠标框选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "是否开启鼠标框选。  默认值：false，关闭框选。true，开启框选。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lanes9",
      children: "lanes9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lanes(value: number | LengthConstrain, gutter?: Dimension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List组件的布局列数或行数（List垂直滚动时表示列数，水平滚动时表示行数）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以列数作为示例，介绍设置规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "value为number类型时，根据number类型数值指定列数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "value为LengthConstrain类型时，LengthConstrain中的minLength表示最小列宽，List组件会根据自身宽度在满足最小列宽情况下计算最大列数。同时，LengthConstrain会作为最大最小布局宽度约束传递给List的子组件，子组件没有设置宽度时会生效该最大最小布局约束。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ListItemGroup在多列模式下也是独占一行，ListItemGroup中的ListItem按照List组件的lanes属性设置值来布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "value为LengthConstrain类型时，计算ListItemGroup中的列数时会按照ListItemGroup的自身宽度计算。因此ListItemGroup宽度与List宽度不一致时，ListItemGroup中的列数与List中的列数可能不一样。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#lengthconstrain",
              children: "LengthConstrain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gutter10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["列间距或行间距。  默认值：0  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  gutter为列间距或行间距，当列数或行数大于1时生效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lanes22",
      children: "lanes22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lanes(value: number | LengthConstrain | ItemFillPolicy, gutter?: Dimension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List组件布局列的数量和列的间距，默认按固定一列显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#lengthconstrain",
              children: "LengthConstrain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#itemfillpolicy22",
              children: "ItemFillPolicy"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gutter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列间距。  默认值：0  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alignlistitem9",
      children: "alignListItem9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignListItem(value: ListItemAlign)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List交叉轴方向宽度大于ListItem交叉轴宽度 * lanes + (lanes - 1) * gutter时，ListItem在List交叉轴方向的布局方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#listitemalign9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ListItemAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交叉轴方向的布局方式。  默认值：ListItemAlign.Start"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sticky9",
      children: "sticky9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sticky(value: StickyStyle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "组件使用，设置ListItemGroup中header是否要吸顶或footer是否要吸底。sticky属性可以设置为 StickyStyle.Header | StickyStyle.Footer 以同时支持header吸顶和footer吸底。从API version 20开始，sticky属性也可以设置为StickyStyle.BOTH，以同时支持header吸顶和footer吸底。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(566686)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于浮点数计算精度，设置sticky后，在List滑动过程中小概率产生缝隙，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-pixelroundforcomponent/ts-universal-attributes-pixelroundforcomponent#pixelround",
        children: "pixelRound"
      }), "指定当前组件向下像素取整解决该问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#stickystyle9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "StickyStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup吸顶或吸底效果。  默认值：StickyStyle.None"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollsnapalign10",
      children: "scrollSnapAlign10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollSnapAlign(value: ScrollSnapAlign)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表项滚动结束对齐效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只支持item等高场景限位，不等高场景可能存在不准确的情况。对齐动画期间", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#onwillscroll12",
        children: "onWillScroll"
      }), "事件上报的滚动操作来源类型为ScrollSource.FLING。"]
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
              href: "#scrollsnapalign10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ScrollSnapAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表项滚动结束对齐效果。  默认值：ScrollSnapAlign.NONE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollsnapanimationspeed22",
      children: "scrollSnapAnimationSpeed22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollSnapAnimationSpeed(speed: ScrollSnapAnimationSpeed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表项滚动限位动画速度。只在列表设置了滚动结束对齐效果后才生效。"
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
            children: "speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scrollsnapanimationspeed22%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ScrollSnapAnimationSpeed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表滚动限位动画速度。  默认值：ScrollSnapAnimationSpeed.NORMAL"
          })]
        })
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
        src: (__webpack_require__(165737)/* ["default"] */.A) + "",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。"
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
            children: "嵌套滚动选项。  默认值：{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward: NestedScrollMode.SELF_ONLY }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friction10",
      children: "friction10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "friction(value: number | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程。设置为小于等于0的值时，按默认值处理。"
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
      id: "contentstartoffset11",
      children: "contentStartOffset11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内容区域起始偏移量。列表滚动到起始位置时，列表内容与列表显示区域边界保留指定距离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容区域起始偏移量。  默认值：0  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数时，按默认值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentstartoffset22",
      children: "contentStartOffset22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset(offset: number | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置内容区域起始偏移量。列表滚动到起始位置时，列表内容与列表显示区域边界保留指定距离。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentstartoffset11",
        children: "contentStartOffset11+"
      }), "相比，参数名改为offset，并开始支持Resource类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。"
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
            children: "offset"
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
      id: "contentendoffset11",
      children: "contentEndOffset11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentEndOffset(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内容区末尾偏移量。列表滚动到末尾位置时，列表内容与列表显示区域边界保留指定距离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容区末尾偏移量。  默认值：0  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数时，按默认值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentendoffset22",
      children: "contentEndOffset22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentEndOffset(offset: number | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置内容区末尾偏移量。列表滚动到末尾位置时，列表内容与列表显示区域边界保留指定距离。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentendoffset11",
        children: "contentEndOffset11+"
      }), "相比，参数名改为offset，并开始支持Resource类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。"
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
            children: "offset"
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
      id: "childrenmainsize12",
      children: "childrenMainSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "childrenMainSize(value: ChildrenMainSize)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List组件的子组件在主轴方向的大小信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969499)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该属性通过向List组件提供所有子组件在主轴方向的大小信息，确保在面对子组件主轴大小不一致、增删子组件、使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
          children: "scrollToIndex"
        }), "等场景时，List组件能够维护其滑动位置准确性。这样，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrollto",
          children: "scrollTo"
        }), "可以准确的跳转到指定位置，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#currentoffset",
          children: "currentOffset"
        }), "可以获取到当前准确的滑动位置，内置滚动条可以实现平滑移动无跳变。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当子组件是ListItemGroup时，需要根据ListItemGroup的列数、ListItemGroup中ListItem在主轴方向的间距以及ListItemGroup中header、footer和ListItem的大小，来准确计算出ListItemGroup在主轴方向的整体大小，并传递给List组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果子组件有ListItemGroup，必须为每一个ListItemGroup设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup#childrenmainsize12",
          children: "childrenMainSize"
        }), "属性。List组件和每一个ListItemGroup组件都要通过childrenMainSize属性接口一对一绑定一个ChildrenMainSize对象。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多列场景使用LazyForEach生成子组件时，需确保LazyForEach全部生成ListItemGroup组件或者全部生成ListItem组件。"
      }), "\n"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#childrenmainsize12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ChildrenMainSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该对象用来维护子组件在主轴方向的大小信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintainvisiblecontentposition12",
      children: "maintainVisibleContentPosition12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maintainVisibleContentPosition(enabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。"
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。  默认值：false，显示区域上方插入或删除数据时可见内容位置会跟随变化。 true：显示区域上方插入或删除数据时可见内容位置不变。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(965661)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只有使用LazyForEach在显示区域外插入或删除数据时，属性设置为true才能保持可见内容位置不变。使用ForEach插入或删除数据、使用LazyForEach重新加载数据时，即使maintainVisibleContentPosition属性设置为true，可见区内容位置也会跟随变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
          children: "Repeat"
        }), "在懒加载场景下，显示区域外插入或删除数据时，属性设置为true也能保持可见内容位置不变。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["maintainVisibleContentPosition属性设置为true后，在显示区域上方插入或删除数据，会触发", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#ondidscroll12",
          children: "onDidScroll"
        }), "、onScrollIndex事件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintainVisibleContentPosition属性设置为true后，在多列场景下，一次插入或删除整行数据，可以保持可见内容位置不变，如果不是插入或删除整行数据，可见内容位置还是会发生变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stackfromend19",
      children: "stackFromEnd19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stackFromEnd(enabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置List组件是否从末尾开始布局。"
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置List组件是否从末尾开始布局。  默认值：false，List从顶部开始布局。 true：List组件从末尾开始布局。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841458)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stackFromEnd属性设置为true后，当List内容小于List组件高度时，内容底部对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stackFromEnd属性设置为true后，显示区域内有ListItem变高，或有插入ListItem，内容上方的ListItem往上移动。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["stackFromEnd属性设置为true后，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#listoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "ListOptions"
        }), "中initialIndex参数默认值为总item个数-1。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "focuswrapmode20",
      children: "focusWrapMode20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusWrapMode(mode: Optional<FocusWrapMode>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置方向键走焦模式。"
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
      children: "设置是否同步加载List区域内所有子组件。"
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
            children: ["是否同步加载List区域内所有子组件。  true表示同步加载，false表示异步加载。默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为false时，在首次显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将List区域内尚未布局的子组件延后到下一帧进行布局。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editmodedeprecated",
      children: "editMode(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editMode(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前List组件是否处于可编辑模式。可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B3%E8%AE%BE%E7%BD%AE%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F",
        children: "示例3"
      }), "实现删除选中的list项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517000)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持，从API version 9开始废弃，无替代接口。"
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
            children: "当前List组件是否处于可编辑模式。  默认值：false，当前List组件不处于可编辑模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportemptybranchinlazyloading23",
      children: "supportEmptyBranchInLazyLoading23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportEmptyBranchInLazyLoading(supported: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前List组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支行为之间切换。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitemalign9枚举说明",
      children: "ListItemAlign9+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子组件在List交叉轴方向的对齐方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItem在List中，交叉轴方向首部对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItem在List中，交叉轴方向居中对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItem在List中，交叉轴方向尾部对齐。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stickystyle9枚举说明",
      children: "StickyStyle9+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItemGroup吸顶或吸底效果枚举。"
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
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ListItemGroup的header不吸顶，footer不吸底。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ListItemGroup的header吸顶，footer不吸底。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "Footer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ListItemGroup的footer吸底，header不吸顶。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "BOTH20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ListItemGroup的header吸顶，footer吸底。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrollsnapalign10枚举说明",
      children: "ScrollSnapAlign10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表项滚动结束对齐效果。"
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
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认无项目滚动对齐效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视图中的第一项将在列表的开头对齐。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当列表位移至末端，需要将末端的item完整显示，可能出现开头不对齐的情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视图中的中间项将在列表中心对齐。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  顶端和末尾的item都可以在列表中心对齐，列表显示可能露出空白。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视图中的最后一项将在列表末尾对齐。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当列表位移至顶端，需要将顶端的item完整显示，可能出现末尾不对齐的情况。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrollsnapanimationspeed22枚举说明",
      children: "ScrollSnapAnimationSpeed22+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置列表项滚动限位动画速度。"
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
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认列表限位动画速度，通常用于列表项尺寸较大，划一下滚动一个列表项场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表限位动画速度较慢，通常用于列表项尺寸较小，划一下滚动多个列表项场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "closeswipeactionoptions11对象说明",
      children: "CloseSwipeActionOptions11+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["收起", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeactionstate11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "EXPANDED"
      }), "状态", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "回调事件集合，用于设置收起动画完成后回调事件。"]
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
            children: "onFinish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在收起动画完成后触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listdivideroptions18对象说明",
      children: "ListDividerOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置List或ListItemGroup组件的分割线样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645915)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "strokeWidth7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线的线宽。  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数，百分比，或者大于等于List内容区长度时，按0处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "color7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线颜色。  默认值：0x08000000  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "startMargin7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线与列表侧边起始端的距离。  默认值：0  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数或者百分比时，按默认值处理。  endMargin + startMargin 超过列宽度后startMargin和endMargin均会被置0。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "endMargin7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线与列表侧边结束端的距离。  默认值：0  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为负数或者百分比时，按默认值处理。  endMargin + startMargin 超过列宽度后startMargin和endMargin均会被置0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
      children: "onScrollIndex(event: (start: number, end: number, center: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有子组件划入或划出List显示区域时触发。计算索引值时，ListItemGroup作为一个整体占一个索引值，不计算ListItemGroup内部ListItem的索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollIndex事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，List显示区域中间位置子组件变化时也会触发该事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内第一个子组件的索引值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内最后一个子组件的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "center10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内中间位置子组件的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachstart",
      children: "onReachStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachStart(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表到达起始位置时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List初始化时如果initialIndex为0会触发一次，List滚动到起始位置时触发一次。List边缘效果为弹簧效果时，划动经过起始位置时触发一次，回弹回起始位置时再触发一次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "列表到达起始位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onreachend",
      children: "onReachEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReachEnd(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表到达末尾位置时触发事件。当最后一个子组件因滚动或内容/布局变化出现在列表视窗中时，触发此回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当子组件未撑满列表，无须滚动即可直接在列表内完整展示时，首次加载也会触发此事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List边缘效果为弹簧效果时，划动经过末尾位置时触发一次，回弹回末尾位置时再触发一次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "列表到达末尾位置时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollframebegin9",
      children: "onScrollFrameBegin9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollFrameBegin(event: OnScrollFrameBeginCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，列表将按照返回值的实际滑动量进行滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当listDirection的值为Axis.Vertical时，返回垂直方向滑动量，当listDirection的值为Axis.Horizontal时，返回水平方向滑动量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下任一条件时触发该事件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户交互（如手指滑动、键鼠操作等）触发滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List惯性滚动。"
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
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
      id: "onscrollstart9",
      children: "onScrollStart9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollStart(event: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["列表滑动开始时触发。手指拖动列表或列表的滚动条触发的滑动开始时，会触发该事件。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滑动控制器触发的带动画的滑动，动画开始时会触发该事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "列表滑动开始时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollstop",
      children: "onScrollStop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollStop(event: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["列表滑动停止时触发。手拖动列表或列表的滚动条触发的滑动，手离开屏幕后滑动停止时会触发该事件。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滑动控制器触发的带动画的滑动，动画停止会触发该事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "列表滑动停止时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemmove",
      children: "onItemMove"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemMove(event: (from: number, to: number) => boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表元素发生移动时触发。"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动前索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动后索引值。"
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
            children: "是否已经移动。返回值为true时列表元素发生移动，返回值为false时列表元素没有移动。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragstart8",
      children: "onItemDragStart8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragStart(event: OnItemDragStartCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始拖拽列表元素时触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持拖动到List边缘时触发List的自动滚动，可以使用ForEach、LazyForEach、Repeat的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "接口实现该效果，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B12%E4%BD%BF%E7%94%A8onmove%E8%BF%9B%E8%A1%8C%E6%8B%96%E6%8B%BD",
        children: "示例12（使用OnMove进行拖拽）"
      }), "。但需注意", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "接口不支持跨ListItemGroup拖拽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(159474)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 14开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "列表元素拖拽开始时触发的回调。  API version 22及之前版本，该参数类型为(event: ItemDragInfo, itemIndex: number) => (() => any)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdragenter8",
      children: "onItemDragEnter8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDragEnter(event: (event: ItemDragInfo) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拖拽列表元素进入列表范围内时触发。"
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
      children: "拖拽列表元素在列表范围内移动时触发。"
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
      children: "拖拽列表元素离开列表范围时触发。"
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
            children: "拖拽离开的列表元素索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdrop8",
      children: "onItemDrop8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定该事件的列表可作为拖拽释放目标，当在列表范围内停止拖拽时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨List拖拽时，当拖拽释放的位置绑定了onItemDrop时isSuccess为true，否则为false。List内部拖拽时，isSuccess为onItemMove事件的返回值。"
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
            children: "是否成功释放。返回值为true时列表元素成功释放，返回值为false时列表元素没有成功释放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollvisiblecontentchange12",
      children: "onScrollVisibleContentChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有子组件划入或划出List显示区域时触发。计算触发条件时，每一个ListItem、ListItemGroup中的header或footer都算一个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollVisibleContentChange事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。"
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onscrollvisiblecontentchangecallback12",
              children: "OnScrollVisibleContentChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前显示内容发生改变的时候触发回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onitemdeletedeprecated",
      children: "onItemDelete(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onItemDelete(event: (index: number) => boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件在编辑模式时，点击ListItem右边出现的删除按钮时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673197)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持，从API version 9开始废弃，无替代接口。"
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
            children: "被删除的列表项的索引值。"
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
            children: "是否已经删除。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrolldeprecated",
      children: "onScroll(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onScroll(event: (scrollOffset: number, scrollState: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scrollstate%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ScrollState"
      }), ") => void)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表滑动时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(174094)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 12开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#ondidscroll12",
        children: "onDidScroll"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "相对于上一帧的偏移量，List的内容向上滚动时偏移量为正，向下滚动时偏移量为负。  单位vp。"
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
      id: "scrollstate枚举说明",
      children: "ScrollState枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动状态枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空闲状态。滚动状态回归空闲时触发，控制器提供的无动画方法控制滚动时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scroll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动状态。手指拖动List，拖动滚动条和滚动鼠标滚轮时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "惯性滚动状态。动画控制的滚动都会触发。包括快速划动松手后的惯性滚动，  划动到边缘回弹的滚动，快速拖动内置滚动条松手后的惯性滚动，  使用滚动控制器提供的带动画的方法控制的滚动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listscroller11",
      children: "ListScroller11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件的滚动控制器，通过它控制List组件的滚动，仅支持一对一绑定到List组件。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310870)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListScroller继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "，具有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "的全部方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入对象",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "listScroller: ListScroller = new ListScroller();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getitemrectingroup11",
      children: "getItemRectInGroup11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getItemRectInGroup(index: number, indexInGroup: number): RectResult"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "的大小和相对于List的位置。"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup在List中的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indexInGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItem在ListItemGroup中的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659618)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "index必须是当前显示区域显示的子组件的索引值，否则视index为非法值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "索引值为index的子组件必须是ListItemGroup，否则视index为非法值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "indexInGroup必须是当前显示区域内ListItemGroup中显示的ListItem的索引值，否则视indexInGroup为非法值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "index或者indexInGroup为非法值时返回的大小和位置均为0。"
      }), "\n"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/event-dispatch-control/ts-universal-attributes-on-child-touch-test/ts-universal-attributes-on-child-touch-test#rectresult",
              children: "RectResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup中的ListItem的大小和相对于List的位置。  单位：vp。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-scroll/errorcode-scroll",
        children: "滚动类组件错误码"
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
            children: "100004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller not bound to a component."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getvisiblelistcontentinfo14",
      children: "getVisibleListContentInfo14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据坐标获取子组件的索引信息。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴坐标，单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴坐标，单位为vp。"
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
              href: "#visiblelistcontentinfo12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VisibleListContentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参坐标处的子组件的索引信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379999)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "入参坐标(x, y)的基准点是List组件的位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该坐标位置处于ListItem范围内，且该ListItem父组件是List，则返回值对象成员index为该ListItem在List中的索引值，itemGroupArea返回undefined，itemIndexInGroup返回undefined。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该坐标位置处于ListItem范围内，且该ListItem父组件是ListItemGroup，则返回值对象成员index为该ListItemGroup在List中的索引值，itemGroupArea返回ListItemGroupArea.IN_LIST_ITEM_AREA，itemIndexInGroup返回该ListItem在ListItemGroup中的索引值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该坐标位置不处于ListItem范围内，但是处于ListItemGroup的header或者footer范围内，则返回值对象成员index为该ListItemGroup在List中的索引值，itemIndexInGroup返回undefined。如果坐标位置处于header范围，itemGroupArea返回ListItemGroupArea.IN_HEADER_AREA。如果坐标位置处于footer范围，itemGroupArea返回ListItemGroupArea.IN_FOOTER_AREA。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该坐标位置既不处于ListItem范围内，也不处于ListItemGroup的header或者footer范围内，但是处于ListItemGroup的范围内，则返回值对象成员index为该ListItemGroup在List中的索引值，itemIndexInGroup返回undefined，itemGroupArea返回ListItemGroupArea.NONE。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该坐标位置既不处于ListItem范围内，也不处于ListItemGroup的范围内，则返回值对象成员index为-1，itemIndexInGroup返回undefined，itemGroupArea返回undefined。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-scroll/errorcode-scroll",
        children: "滚动类组件错误码"
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
            children: "100004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller not bound to a component."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrolltoitemingroup11",
      children: "scrollToItemInGroup11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollToItemInGroup(index: number, indexInGroup: number, smooth?: boolean, align?: ScrollAlign): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动到指定的ListItemGroup中指定的ListItem。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  index值设置成负值或者大于当前容器子组件的最大索引值，视为异常值，本次跳转不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indexInGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要滑动到的目标元素在index指定的ListItemGroup中的索引值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  indexInGroup值设置成负值或者大于index指定的ListItemGroup容器子组件的最大索引值，视为异常值，本次跳转不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "smooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置该次滑动是否有动效，true表示有动效，false表示没有动效。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  开启动效时，会对经过的所有item进行加载和布局计算，当大量加载item时会导致性能问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrollalign10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ScrollAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定滑动到的元素与当前容器的对齐方式。  默认值：ScrollAlign.START。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-scroll/errorcode-scroll",
        children: "滚动类组件错误码"
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
            children: "100004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller not bound to a component."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closeallswipeactions11",
      children: "closeAllSwipeActions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closeAllSwipeActions(options?: CloseSwipeActionOptions): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeactionstate11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "EXPANDED"
      }), "状态的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "收起，并设置回调事件。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#closeswipeactionoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CloseSwipeActionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收起", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeactionstate11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "EXPANDED"
            }), "状态的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "的回调事件集合。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-scroll/errorcode-scroll",
        children: "滚动类组件错误码"
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
            children: "100004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller not bound to a component."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(404987)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ListScroller必须绑定到List组件上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscrollvisiblecontentchangecallback12",
      children: "OnScrollVisibleContentChangeCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有子组件划入或划出List显示区域时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List从有子组件变成空的List时，上报的start和end参数会保留上次有子组件时的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "start和end的index同时返回0，代表List内只有一个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941536)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 14开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visiblelistcontentinfo12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VisibleListContentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 通过该参数获取List显示区域第一个子组件在List中的索引值。  2. 如果当前List显示区域第一个子组件是ListItemGroup，可以获取当前List显示区域第一个组件属于该ListItemGroup的哪一区域。  3. 如果当前List显示区域第一个组件是ListItemGroup内的ListItem，可以获取该ListItem在ListItemGroup内的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visiblelistcontentinfo12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VisibleListContentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 通过该参数获取List显示区域最后一个子组件在List中的索引值。  2. 如果当前List显示区域最后一个子组件是ListItemGroup，可以获取当前List显示区域最后一个组件属于该ListItemGroup的哪一区域。  3. 如果当前List显示区域最后一个组件是ListItemGroup内的ListItem，可以获取该ListItem在ListItemGroup内的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visiblelistcontentinfo12对象说明",
      children: "VisibleListContentInfo12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示List可见内容区子组件的详细信息。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示ListItem或ListItemGroup在List中的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemGroupArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#listitemgrouparea12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ListItemGroupArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示处于ListItemGroup的哪一个区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIndexInGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示ListItem在ListItemGroup中的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitemgrouparea12枚举说明",
      children: "ListItemGroupArea12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举了ListItemGroup各个区域。"
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
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup内部ListItem区域、header区域以及footer区域以外的区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN_LIST_ITEM_AREA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup内部ListItem区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN_HEADER_AREA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup内部header区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN_FOOTER_AREA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup内部footer区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uilistevent19",
      children: "UIListEvent19+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["frameNode中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#geteventlist19",
        children: "getEvent('List')"
      }), "方法的返回值，可用于给List节点设置滚动事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UIListEvent继承于", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void"
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
              href: "#onlistscrollindexcallback19",
              children: "OnListScrollIndexCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setonscrollvisiblecontentchange19",
      children: "setOnScrollVisibleContentChange19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollvisiblecontentchange12",
        children: "onScrollVisibleContentChange"
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#onscrollvisiblecontentchangecallback12",
              children: "OnScrollVisibleContentChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onlistscrollindexcallback19",
      children: "OnListScrollIndexCallback19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnListScrollIndexCallback = (start: number, end: number, center: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件可见区域item变化事件的回调类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 19开始，该接口支持在ArkTS卡片中使用。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内第一个子组件的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内最后一个子组件的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List显示区域内中间位置子组件的索引值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1添加滚动事件",
      children: "示例1（添加滚动事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了设置纵向列表，并在当前显示界面发生改变时回调索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource实现了LazyForEach数据源接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "，用于通过LazyForEach给List提供子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ListDataSource.ets\nexport class ListDataSource implements IDataSource {\n  private list: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知控制器添加数据\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 在指定索引位置删除一个元素\n  public deleteItem(index: number): void {\n    this.list.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  // 在指定索引位置插入一个元素\n  public insertItem(index: number, data: number): void {\n    this.list.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public reloadData(): void {\n    this.notifyDataReload();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%').height(100).fontSize(16)\n              .textAlign(TextAlign.Center).borderRadius(10).backgroundColor(0xFFFFFF)\n          }\n        }, (item: number) => item.toString())\n      }\n      .listDirection(Axis.Vertical) // 排列方向\n      .scrollBar(BarState.Off)\n      .friction(0.6)\n      .divider({ strokeWidth: 2, color: 0xFFFFFF, startMargin: 20, endMargin: 20 }) // 每行之间的分界线\n      .edgeEffect(EdgeEffect.Spring) // 边缘效果设置为Spring\n      .onScrollIndex((firstIndex: number, lastIndex: number, centerIndex: number) => {\n        console.info('first' + firstIndex);\n        console.info('last' + lastIndex);\n        console.info('center' + centerIndex);\n      })\n      .onScrollVisibleContentChange((start: VisibleListContentInfo, end: VisibleListContentInfo) => {\n        console.info(' start index: ' + start.index +\n                    ' start item group area: ' + start.itemGroupArea +\n                    ' start index in group: ' + start.itemIndexInGroup);\n        console.info(' end index: ' + end.index +\n                    ' end item group area: ' + end.itemGroupArea +\n                    ' end index in group: ' + end.itemIndexInGroup);\n      })\n      .onDidScroll((scrollOffset: number, scrollState: ScrollState) => {\n        console.info(`onScroll scrollState = ScrollState` + scrollState + `, scrollOffset = ` + scrollOffset);\n      })\n      .width('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465117)/* ["default"] */.A) + "",
        width: "360",
        height: "747"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置子元素对齐",
      children: "示例2（设置子元素对齐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了不同ListItemAlign枚举值下，List组件交叉轴方向子元素对齐效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListLanesExample {\n  arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);\n  @State alignListItem: ListItemAlign = ListItemAlign.Start;\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        LazyForEach(this.arr, (item: string) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n          .border({ width: 2, color: Color.Green })\n        }, (item: string) => item)\n      }\n      .height(300)\n      .width('90%')\n      .friction(0.6)\n      .border({ width: 3, color: Color.Red })\n      .lanes({ minLength: 40, maxLength: 40 })\n      .alignListItem(this.alignListItem)\n      .scrollBar(BarState.Off)\n\n      Button('点击更改alignListItem:' + this.alignListItem).onClick(() => {\n        if (this.alignListItem == ListItemAlign.Start) {\n          this.alignListItem = ListItemAlign.Center;\n        } else if (this.alignListItem == ListItemAlign.Center) {\n          this.alignListItem = ListItemAlign.End;\n        } else {\n          this.alignListItem = ListItemAlign.Start;\n        }\n      })\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(309631)/* ["default"] */.A) + "",
        width: "371",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置编辑模式",
      children: "示例3（设置编辑模式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何设置当前List组件是否处于可编辑模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n  @State editFlag: boolean = false;\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Column() {\n        List({ space: 20, initialIndex: 0 }) {\n          LazyForEach(this.arr, (item: number, index?: number) => {\n            ListItem() {\n              Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center }) {\n                Text('' + item)\n                  .width('100%')\n                  .height(80)\n                  .fontSize(20)\n                  .textAlign(TextAlign.Center)\n                  .borderRadius(10)\n                  .backgroundColor(0xFFFFFF)\n                  .flexShrink(1)\n                if (this.editFlag) {\n                  Button() {\n                    Text('delete').fontSize(16)\n                  }.width('30%').height(40)\n                  .onClick(() => {\n                    if (index != undefined) {\n                      console.info(this.arr.getData(index) + 'Delete');\n                      this.arr.deleteItem(index);\n                      this.arr.reloadData();\n                      console.info(JSON.stringify(this.arr));\n                      this.editFlag = false;\n                    }\n                  }).stateEffect(true)\n                }\n              }\n            }\n          }, (item: number, index: number) => item.toString() + index.toString())\n        }.width('90%')\n        .scrollBar(BarState.Off)\n        .friction(0.6)\n      }.width('100%')\n\n      Button('edit list')\n        .onClick(() => {\n          this.editFlag = !this.editFlag;\n        }).margin({ top: 5, left: 20 })\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465170)/* ["default"] */.A) + "",
        width: "414",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置限位对齐",
      children: "示例4（设置限位对齐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了List组件设置居中限位的实现效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource=new ListDataSource([]);\n  private scrollerForList: Scroller = new Scroller();\n\n  aboutToAppear() {\n    let list: number[] = [];\n    for (let i = 0; i < 20; i++) {\n      list.push(i);\n    }\n    this.arr = new ListDataSource(list);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        List({ space: 20, initialIndex: 3, scroller: this.scrollerForList }) {\n          LazyForEach(this.arr, (item: number) => {\n            ListItem() {\n              Text('' + item)\n                .width('100%').height(100).fontSize(16)\n                .textAlign(TextAlign.Center)\n            }\n            .borderRadius(10).backgroundColor(0xFFFFFF)\n            .width('60%')\n            .height('80%')\n          }, (item: number) => JSON.stringify(item))\n        }\n        .chainAnimation(true)\n        .edgeEffect(EdgeEffect.Spring)\n        .listDirection(Axis.Horizontal)\n        .height('100%')\n        .width('100%')\n        .scrollSnapAlign(ScrollSnapAlign.CENTER)\n        .borderRadius(10)\n        .backgroundColor(0xDCDCDC)\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor(0xDCDCDC)\n      .padding({ top: 10 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(133423)/* ["default"] */.A) + "",
        width: "357",
        height: "587"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5跳转准确",
      children: "示例5（跳转准确）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#childrenmainsize12",
        children: "childrenMainSize"
      }), "属性，实现了List在子组件高度不一致时调用scrollTo接口也可以跳转准确。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配合状态管理V2使用，详情见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object#%E6%BB%9A%E5%8A%A8%E7%BB%84%E4%BB%B6",
        children: "List与makeObserved"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([]);\n  private scroller: ListScroller = new ListScroller();\n  @State listSpace: number = 10;\n  @State listChildrenSize: ChildrenMainSize = new ChildrenMainSize(100);\n  aboutToAppear(){\n    // 初始化数据源。\n    let list: number[] = [];\n    for (let i = 0; i < 10; i++) {\n      list.push(i);\n    }\n    this.arr = new ListDataSource(list);\n    // 前5个item的主轴大小不是默认大小100，因此需要通过ChildrenMainSize通知List。\n    this.listChildrenSize.splice(0, 5, [300, 300, 300, 300, 300]);\n  }\n\n  build() {\n    Column() {\n      List({ space: this.listSpace, initialIndex: 4, scroller: this.scroller }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('item-' + item)\n              .height( item < 5 ? 300 : this.listChildrenSize.childDefaultSize)\n              .width('90%')\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n        }, (item: string) => item)\n      }\n      .backgroundColor(Color.Gray)\n      .layoutWeight(1)\n      .scrollBar(BarState.On)\n      .childrenMainSize(this.listChildrenSize)\n      .alignListItem(ListItemAlign.Center)\n      Row({ space: 18 }) {\n        Button() { Text('item size + 50') }.onClick(()=>{\n          this.listChildrenSize.childDefaultSize += 50;\n        }).height('50%').width('30%').backgroundColor(0xADD8E6)\n        Button() { Text('item size - 50') }.onClick(()=>{\n          if (this.listChildrenSize.childDefaultSize === 0) {\n            return;\n          }\n          this.listChildrenSize.childDefaultSize -= 50;\n        }).height('50%').width('30%').backgroundColor(0xADD8E6)\n        Button() { Text('scrollTo (0, 310)') }.onClick(()=>{\n          // 310: 跳转到item 1顶部与List顶部平齐的位置。\n          // 如果不设置childrenMainSize，item高度不一致时scrollTo会不准确。\n          this.scroller.scrollTo({ xOffset: 0, yOffset: 310 })\n        }).height('50%').width('30%').backgroundColor(0xADD8E6)\n      }.height('20%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(42885)/* ["default"] */.A) + "",
        width: "282",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6获得子组件索引信息",
      children: "示例6（获得子组件索引信息）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了含有group时，获得List组件的Item索引相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass TimeTableDataSource implements IDataSource {\n  private list: TimeTable[] = [];\n\n  constructor(list: TimeTable[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): TimeTable {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\nclass ProjectsDataSource implements IDataSource {\n  private list: string[] = [];\n\n  constructor(list: string[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): string {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\n@Entry\n@Component\nstruct ListItemGroupExample {\n  private timeTable: TimeTable[] = [\n  {\n    title: '星期一',\n    projects: ['语文', '数学', '英语']\n  },\n  {\n    title: '星期二',\n    projects: ['物理', '化学', '生物']\n  },\n  {\n    title: '星期三',\n    projects: ['历史', '地理', '政治']\n  },\n  {\n    title: '星期四',\n    projects: ['美术', '音乐', '体育']\n  }\n];\n  private scroller: ListScroller = new ListScroller();\n  @State listIndexInfo: VisibleListContentInfo = { index: -1 };\n  @State mess:string = 'null';\n  @State itemBackgroundColorArr: boolean[] = [false];\n  @Builder\n  itemHead(text: string) {\n    Text(text)\n      .fontSize(20)\n      .backgroundColor(0xAABBCC)\n      .width('100%')\n      .padding(10)\n  }\n\n  @Builder\n  itemFoot(num: number) {\n    Text('共' + num + '节课')\n      .fontSize(16)\n      .backgroundColor(0xAABBCC)\n      .width('100%')\n      .padding(5)\n  }\n\n  build() {\n    Column() {\n      List({ space: 20, scroller: this.scroller}) {\n        LazyForEach(new TimeTableDataSource(this.timeTable), (item: TimeTable, index: number) => {\n          ListItemGroup({ header: this.itemHead(item.title), footer: this.itemFoot(item.projects.length) }) {\n            LazyForEach(new ProjectsDataSource(item.projects), (project: string, subIndex: number) => {\n              ListItem() {\n                Text(project)\n                  .width('100%')\n                  .height(100)\n                  .fontSize(20)\n                  .textAlign(TextAlign.Center)\n                  .backgroundColor(this.itemBackgroundColorArr[index * 3 +subIndex] ? 0x68B4FF: 0xFFFFFF)\n              }\n            }, (item: string) => item)\n          }\n          .divider({ strokeWidth: 1, color: Color.Blue }) // 每行之间的分界线\n        },(item: string) => item)\n      }\n      .width('90%')\n      .sticky(StickyStyle.Header | StickyStyle.Footer)\n      .scrollBar(BarState.Off)\n      .gesture(\n        PanGesture()\n          .onActionUpdate((event: GestureEvent) => {\n            if (event.fingerList[0] != undefined && event.fingerList[0].localX != undefined && event.fingerList[0].localY != undefined) {\n              this.listIndexInfo  = this.scroller.getVisibleListContentInfo(event.fingerList[0].localX, event.fingerList[0].localY);\n              let itemIndex:string = 'undefined';\n              if (this.listIndexInfo.itemIndexInGroup != undefined ) {\n                itemIndex = this.listIndexInfo.itemIndexInGroup.toString();\n                if (this.listIndexInfo.index != undefined && this.listIndexInfo.index >= 0 &&\n                  this.listIndexInfo.itemIndexInGroup >= 0 ) {\n                  this.itemBackgroundColorArr[this.listIndexInfo.index * 3 + this.listIndexInfo.itemIndexInGroup] = true;\n                }\n              }\n              this.mess = 'index:' + this.listIndexInfo.index.toString() + ' itemIndex:' + itemIndex;\n            }\n          }))\n      .gesture(\n        TapGesture({ count: 1 })\n          .onAction((event: GestureEvent) => {\n            if (event) {\n              this.itemBackgroundColorArr.splice(0,this.itemBackgroundColorArr.length);\n            }\n          })\n      )\n      Text('您当前位置Item索引为'+ this.mess)\n        .fontColor(Color.Red)\n        .height(50)\n    }.width('100%').height('90%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n\ninterface TimeTable {\n  title: string;\n  projects: string[];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(40523)/* ["default"] */.A) + "",
        width: "246",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置边缘渐隐",
      children: "示例7（设置边缘渐隐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了List组件开启边缘渐隐效果并设置边缘渐隐长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI'\nimport { ListDataSource } from './ListDataSource';\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource=new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);\n  scrollerForList: Scroller = new Scroller();\n\n  build() {\n    Column() {\n\n      List({ space: 20, initialIndex: 0, scroller: this.scrollerForList }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%').height(100).fontSize(16)\n              .textAlign(TextAlign.Center).borderRadius(10).backgroundColor(0xFFFFFF)\n          }\n        }, (item: number) => item.toString())\n      }\n      .fadingEdge(true, { fadingEdgeLength: LengthMetrics.vp(80) })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(352215)/* ["default"] */.A) + "",
        width: "238",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8单边边缘效果",
      children: "示例8（单边边缘效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过edgeEffect接口，实现了List组件设置单边边缘效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);\n  scrollerForList: Scroller = new Scroller();\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0, scroller: this.scrollerForList }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%').height(100).fontSize(16)\n              .textAlign(TextAlign.Center).borderRadius(10).backgroundColor(0xFFFFFF)\n          }\n        }, (item: string) => item)\n      }\n      .edgeEffect(EdgeEffect.Spring, {alwaysEnabled: true, effectEdge: EffectEdge.START})\n      .width('90%').height('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(560654)/* ["default"] */.A) + "",
        width: "232",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置折行走焦",
      children: "示例9（设置折行走焦）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focuswrapmode20",
        children: "focusWrapMode"
      }), "接口，实现了List组件方向键走焦换行效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ListExample {\n  @State arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Column() {\n        List({ space: 40, initialIndex: 0 }) {\n          ForEach(this.arr, (item: number, index?: number) => {\n            ListItem() {\n              Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center }) {\n                Text('' + item)\n                  .width(150)\n                  .height(93)\n                  .fontSize(30)\n                  .textAlign(TextAlign.Center)\n                  .borderRadius(10)\n                  .backgroundColor(0xFFFFFF)\n                  .flexShrink(1)\n                  .focusable(true)\n                  .offset({ left: 5 })\n              }\n            }\n          }, (item: string, index?: number) => item)\n        }\n        .lanes(2)\n        .contentStartOffset(20)\n        .contentEndOffset(20)\n        .width('100%')\n        .scrollBar(BarState.Off)\n        .friction(0.6)\n        .focusWrapMode(FocusWrapMode.WRAP_WITH_ARROW)\n        .alignListItem(ListItemAlign.Center)\n        .offset({ left: 20 })\n      }.width('90%')\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206862)/* ["default"] */.A) + "",
        width: "327",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10设置显示区域外插入数据时保持显示内容不变",
      children: "示例10（设置显示区域外插入数据时，保持显示内容不变）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过maintainVisibleContentPosition接口，实现了上滑无限加载历史消息场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([990, 991, 992, 993, 994, 995, 996, 997, 998, 999]);\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 9 }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('message:' + item)\n              .width('100%').height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n        }, (item: number) => item.toString())\n      }\n      .maintainVisibleContentPosition(true)\n      .onScrollIndex((start:number)=>{\n        if (start < 5) {\n          for (let i = 0; i < 10; i++) {\n            this.arr.insertItem(0, this.arr.getData(0) - 1);\n          }\n        }\n      })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding(12)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769771)/* ["default"] */.A) + "",
        width: "353",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11设置滚动条的边距",
      children: "示例11（设置滚动条的边距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例展示了通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#scrollbarmargin20",
        children: "scrollBarMargin"
      }), "属性设置滚动条边距并避让", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentstartoffset11",
        children: "contentStartOffset"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentendoffset11",
        children: "contentEndOffset"
      }), "区域的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ListScrollBarMarginExample {\n  @State arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n  build() {\n    Column() {\n      List({ space: 40, initialIndex: 0 }) {\n        ForEach(this.arr, (item: number, index?: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n        }, (item: string, index?: number) => item)\n      }\n      .contentStartOffset(20)\n      .contentEndOffset(20)\n      .scrollBar(BarState.On)\n      .scrollBarMargin({ start: LengthMetrics.vp(20), end: LengthMetrics.vp(20) })\n      .width('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558122)/* ["default"] */.A) + "",
        width: "231",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12使用onmove进行拖拽",
      children: "示例12（使用OnMove进行拖拽）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例展示了使用ForEach的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "接口进行拖拽排序的效果，支持拖动到List边缘时触发List的自动滚动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachSort {\n  @State arr: Array<string> = [];\n\n  build() {\n    Row() {\n      List() {\n        ForEach(this.arr, (item: string) => {\n          ListItem() {\n            Text(item.toString())\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .size({ height: 100, width: '100%' })\n          }.margin(10)\n          .borderRadius(10)\n          .backgroundColor('#FFFFFFFF')\n        }, (item: string) => item)\n          .onMove((from: number, to: number) => {\n            let tmp = this.arr.splice(from, 1);\n            this.arr.splice(to, 0, tmp[0]);\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFDCDCDC')\n    }\n  }\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.arr.push(i.toString());\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171348)/* ["default"] */.A) + "",
        width: "263",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13基于断点配置lanes",
      children: "示例13（基于断点配置lanes）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例展示了List组件支持基于断点配置lanes效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1添加滚动事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);\n  scrollerForList: Scroller = new Scroller();\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0, scroller: this.scrollerForList }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%').height(100).fontSize(16)\n              .textAlign(TextAlign.Center).borderRadius(10).backgroundColor(0xFFFFFF)\n          }\n        }, (item: string) => item)\n      }\n      .lanes({ fillType: PresetFillType.BREAKPOINT_SM2MD3LG5}, 10)\n      .width('90%').height(600)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List宽度属于sm及更小的断点区间时显示2列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(66238)/* ["default"] */.A) + "",
        width: "386",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List宽度属于md断点区间时显示3列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963518)/* ["default"] */.A) + "",
        width: "669",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List宽度属于lg及更大的断点区间时显示5列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233644)/* ["default"] */.A) + "",
        width: "883",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14获取内容总大小",
      children: "示例14（获取内容总大小）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22 开始，该示例实现了List组件获取内容总大小的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\n  scrollerForList: Scroller = new Scroller()\n  @State contentWidth: number = -1;\n  @State contentHeight: number = -1;\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0, scroller: this.scrollerForList }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n        }, (item: string) => item)\n      }\n      .width('90%').height('90%')\n\n      // 点击按钮来调用contentSize函数获取内容尺寸\n      Button('GetContentSize')\n        .onClick(() => {\n          // Scroller未绑定组件时会抛异常，需要加上try catch保护\n          try {\n            // 通过调用contentSize函数获取内容尺寸的宽度值\n            this.contentWidth = this.scrollerForList.contentSize().width;\n            // 通过调用contentSize函数获取内容尺寸的高度值\n            this.contentHeight = this.scrollerForList.contentSize().height;\n          } catch (error) {\n            let err: BusinessError = error as BusinessError;\n            console.error(`Failed to get contentSize of the grid, code=${err.code}, message=${err.message}`);\n          }\n        })\n      // 将获取到的内容尺寸信息通过文本进行呈现\n      Text('Width：' + this.contentWidth + '，Height：' + this.contentHeight)\n        .fontColor(Color.Red)\n        .height(50)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282347)/* ["default"] */.A) + "",
        width: "333",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15在两个列表之间实现拖拽功能",
      children: "示例15（在两个列表之间实现拖拽功能）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过OnItemDragStart等事件实现了ListItem在两个List组件间的拖拽效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@ObservedV2\nclass ListData {\n  @Trace public title: string = '';\n  @Trace public data: string[] = [];\n\n  constructor(title: string, data: string[]) {\n    this.title = title;\n    this.data = data;\n  }\n}\n\nclass DraggingData {\n  public data?: string;\n}\n\n@ComponentV2\nstruct DraggableList {\n  @Require @Param data: string[];\n  @Require @Param draggingData: DraggingData;\n\n  @Builder\n  ItemBuilder(data: string, size: SizeOptions, event: ItemDragInfo): void {\n    Stack() {\n      Text(data)\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(4)\n    .size(size)\n  }\n\n  viewWidth: number = 0;\n  lastInsertIndex: number = 0;\n  scroller: Scroller = new Scroller();\n\n  build() {\n    List({ scroller: this.scroller }) {\n      ForEach(this.data, (item: string) => {\n        ListItem() {\n          Text(item)\n        }\n        .width('100%')\n        .height('10%')\n        .margin(10)\n        .backgroundColor(Color.White)\n        .borderRadius(4)\n        .aspectRatio(1)\n      }, (item: string) => item)\n    }\n    .width('50%')\n    .layoutWeight(1)\n    .padding(10)\n    .onItemDragStart((event: ItemDragInfo, itemIndex: number) => {\n      let rect = this.scroller.getItemRect(itemIndex);\n      let size: SizeOptions = {\n        width: rect.width,\n        height: rect.height\n      };\n      this.lastInsertIndex = itemIndex;\n      this.draggingData.data = this.data[itemIndex];\n      this.data.splice(itemIndex, 1);\n\n      return this.ItemBuilder(this.draggingData.data, size, event);\n    })\n    .onItemDragEnter((event: ItemDragInfo) => {\n      console.info('Item drag enter at position:', event.x, event.y);\n    })\n    .onItemDragMove((event: ItemDragInfo, itemIndex: number, insertIndex: number) => {\n      if (this.lastInsertIndex != insertIndex){\n        console.info('insertIndex change from ', this.lastInsertIndex, 'to', insertIndex);\n        this.lastInsertIndex = insertIndex;\n      }\n    })\n    .onItemDragLeave((event: ItemDragInfo, itemIndex: number) => {\n      console.info('Item ' + itemIndex + ' drag leave at position:', event.x, event.y);\n    })\n    .onItemDrop((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => {\n      if (!isSuccess) {\n        this.draggingData.data = undefined;\n        return;\n      }\n      if (insertIndex >= 0) {\n        this.data.splice(insertIndex, 0, this.draggingData.data!);\n      }\n      this.draggingData.data = undefined;\n    })\n    .onSizeChange((oldValue: SizeOptions, newValue: SizeOptions) => {\n      this.viewWidth = newValue.width as number;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local data: ListData[] = [\n    new ListData('A', ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']),\n    new ListData('B', ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8']),\n  ]\n  @Local draggingData: DraggingData = new DraggingData();\n\n  build() {\n    Stack() {\n      Row() {\n        DraggableList({ data: this.data[0].data, draggingData: this.draggingData })\n        DraggableList({ data: this.data[1].data, draggingData: this.draggingData })\n      }\n    }\n    .backgroundColor('#FFDCDCDC')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76916)/* ["default"] */.A) + "",
        width: "318",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16实现listitemgroup中点击项的居中效果",
      children: "示例16（实现ListItemGroup中点击项的居中效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scrolltoitemingroup11",
        children: "scrollToItemInGroup"
      }), "接口，实现了点击", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "时将其居中的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\nclass Contact {\n  key: string = util.generateRandomUUID(true);\n  name: string;\n  icon: Resource;\n\n  constructor(name: string, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\nclass ContactsGroup {\n  title: string = '';\n  contacts: Array<object> | null = null;\n  key: string = '';\n}\n\n@Entry\n@Component\nstruct ContactsList {\n  private scroller: ListScroller = new ListScroller();\n  private contactsGroups: ContactsGroup[] = [\n    {\n      title: 'A',\n      contacts: [\n        new Contact('艾佳', $r('app.media.icon')),  // $r('app.media.icon')需要替换为开发者所需的图像资源文件\n        new Contact('安安', $r('app.media.icon')),\n        new Contact('Angela', $r('app.media.icon'))\n        // ...\n      ],\n      key: util.generateRandomUUID(true)\n    } as ContactsGroup,\n    {\n      title: 'B',\n      contacts: [\n        new Contact('白叶', $r('app.media.icon')),\n        new Contact('伯明', $r('app.media.icon'))\n        // ...\n      ],\n      key: util.generateRandomUUID(true)\n    } as ContactsGroup,\n    // ...\n  ]\n\n  @Builder\n  itemHead(text: string) {\n    Text(text)\n      .fontSize(20)\n      .backgroundColor('#fff1f3f5')\n      .width('100%')\n      .padding(5)\n  }\n\n  build() {\n    List({ scroller: this.scroller }) {\n      ForEach(this.contactsGroups, (item: ContactsGroup, index: number) => {\n        ListItemGroup({ header: this.itemHead(item.title) }) {\n          ForEach(item.contacts, (contact: Contact, subIndex: number) => {\n            ListItem() {\n              Row() {\n                Image(contact.icon)\n                  .width(40)\n                  .height(40)\n                  .margin(10)\n                Text(contact.name).fontSize(20)\n              }\n              .width('100%')\n              .justifyContent(FlexAlign.Start)\n              .margin(10)\n            }\n            .gesture(\n              TapGesture({ count: 1 })\n                .onAction((event: GestureEvent) => {\n                  if (event) {\n                    const itemRect = this.scroller.getItemRectInGroup(index, subIndex);\n                    console.info('第', index + 1, '个ListItemGroup的第', subIndex + 1, '个ListItem的 x:', itemRect.x,\n                      ' y:', itemRect.y, ' width:', itemRect.width, ' height:', itemRect.height)\n                    this.scroller.scrollToItemInGroup(index, subIndex, true, ScrollAlign.CENTER);\n                  }\n                })\n            )\n          }, (contact: Contact) => JSON.stringify(contact))\n        }\n        .divider({ strokeWidth: 4 })\n        .width('100%')\n      }, (item: ContactsGroup) => JSON.stringify(item))\n    }\n    .onScrollFrameBegin((offset: number, state: ScrollState) => {\n      console.info('List scrollFrameBegin offset: ' + offset + ' state: ' + state.toString());\n      return { offsetRemain: offset };\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(578236)/* ["default"] */.A) + "",
        width: "230",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17设置多选聚拢动画",
      children: "示例17（设置多选聚拢动画）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过打开List多选聚拢动画开关，实现了在ListItem上", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
        children: "长按弹出菜单"
      }), "时聚拢显示范围内被选中的ListItem。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，List组件新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmodeoptions23",
        children: "编辑模式选项"
      }), "接口，可以设置多选聚拢动画开关。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E6%B7%BB%E5%8A%A0%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6",
        children: "示例1（添加滚动事件）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n  @State isSelected: boolean[] = [];\n  selectedCount: number = 0;\n\n  @Styles\n  normalStyles(): void {\n    .opacity(1.0)\n  }\n\n  @Styles\n  selectStyles(): void {\n    .opacity(0.4)\n  }\n\n  onPageShow(): void {\n    let i: number = 0;\n    for (i = 0; i < 10; i++) {\n      this.isSelected.push(false);\n    }\n  }\n\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text('menu item 1')\n        .fontSize(18)\n        .width(120)\n        .height(50)\n        .textAlign(TextAlign.Center)\n      Divider().height(10)\n      Text('menu item 2')\n        .fontSize(18)\n        .width(120)\n        .height(50)\n        .textAlign(TextAlign.Center)\n    }.width(100)\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      List({ space: 10 }) {\n        LazyForEach(this.arr, (item: number) => {\n            ListItem() {\n              Text(item.toString())\n                .fontSize(16)\n                .backgroundColor(Color.White)\n                .width('100%')\n                .height(50)\n                .textAlign(TextAlign.Center)\n            }\n            .selected(this.isSelected[item])\n            // 设置多选显示效果\n            .stateStyles({\n              normal: this.normalStyles,\n              selected: this.selectStyles\n            })\n            .bindContextMenu(this.MenuBuilder, ResponseType.LongPress,\n              { preview: MenuPreviewMode.IMAGE, hapticFeedbackMode: HapticFeedbackMode.ENABLED })\n            .onClick(() => {\n              this.isSelected[item] = !this.isSelected[item];\n              console.info(`item:${item}, this.isSelected[item]:${this.isSelected[item]}`)\n              if (this.isSelected[item]) {\n                ++this.selectedCount;\n              } else {\n                --this.selectedCount;\n              }\n            })\n        }, (item: number) => item.toString())\n      }\n      .editModeOptions({\n        enableGatherSelectedItemsAnimation: true, onGetPreviewBadge: () => {\n          return this.selectedCount;\n        }\n      })\n      .width('90%')\n      .height(300)\n      .scrollBar(BarState.Off)\n    }.width('100%').margin({ top: 5 }).backgroundColor('#FFDCDCDC')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296313)/* ["default"] */.A) + "",
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
517000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
969499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
174094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
404987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
165737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959612-0d7b184eb25f22b209c394fe02056dee.gif");

},
719237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
623885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
673197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
429973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
558122(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439655-0f2bc562e2f35b456aa83b4b13b4e4d6.gif");

},
233644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439657-7692c86beb67b0020c61700f9b296026.png");

},
76916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479613-1a2ecc90c1975e509568b2c4068fbc74.gif");

},
352215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439653-633c8bfbf300f28b4caa9cfe8a1cc294.gif");

},
349013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
133423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959606-e69808a2c688d79bbd93e441aef7bd95.gif");

},
310870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
171348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959610-906e1a828e853065dd41b14397f76ff4.gif");

},
66238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
159474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
465170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439651-ee502903e3b75d2312bdc49f5d739e09.gif");

},
309631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799956-d96314068ad28b8f694714a9a41b35bf.gif");

},
578236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799964-e6e606b57e9811aecf3f5c767d5e6e0a.gif");

},
645915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
379999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
965661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
963518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
769771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799960-9b53801ca014b32df327f3439ffeb777.gif");

},
560654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959608-ec7d56d7ab10bb7669005ca6057b011f.gif");

},
941536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
465117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479605-6f2876729bf6b8cbbec38276d1b4f98a.gif");

},
566686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
153463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
453877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
206862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479609-d37bc46e79b98e28d0bab12185a6d870.gif");

},
296313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439659-f2bd3d649e76a22c845db8b5d8233864.gif");

},
40523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799958-b66cba883efcba5ad863a917ce5029db.gif");

},
42885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479607-07f19f36850f83bac2e07414e4fd0498.gif");

},
841458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
659618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
195652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
664062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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