"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["912928"], {
320727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_ts_universal_attributes_draw_modifier_ts_universal_attributes_draw_modifier_md_420_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-attribute-modifier-property-ts-universal-attributes-draw-modifier-ts-universal-attributes-draw-modifier-md-420.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_ts_universal_attributes_draw_modifier_ts_universal_attributes_draw_modifier_md_420_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier","title":"自定义绘制设置","description":"当某些组件本身的绘制内容不满足需求时，可使用自定义组件绘制功能，在原有组件基础上部分绘制，或者全部自行绘制，以达到预期效果。例如：独特的按钮形状、文字和图像混合的图标等。自定义组件绘制提供了自定义绘制修改器，来实现更自由地组件绘制。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义绘制设置","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-draw-modifier","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-draw-modifier"},"sidebar":"ref","previous":{"title":"动态手势设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier"},"next":{"title":"自定义内容","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier.md


const frontMatter = {
	title: '自定义绘制设置',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-draw-modifier',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-draw-modifier'
};
const contentTitle = '自定义绘制设置';

const assets = {

};



const toc = [{
  "value": "drawModifier",
  "id": "drawmodifier",
  "level": 2
}, {
  "value": "DrawModifier",
  "id": "drawmodifier-1",
  "level": 2
}, {
  "value": "drawFront",
  "id": "drawfront",
  "level": 3
}, {
  "value": "drawContent",
  "id": "drawcontent",
  "level": 3
}, {
  "value": "drawBehind",
  "id": "drawbehind",
  "level": 3
}, {
  "value": "drawForeground20+",
  "id": "drawforeground20",
  "level": 3
}, {
  "value": "drawOverlay23+",
  "id": "drawoverlay23",
  "level": 3
}, {
  "value": "invalidate",
  "id": "invalidate",
  "level": 3
}, {
  "value": "DrawContext",
  "id": "drawcontext",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（通过DrawModifier进行自定义绘制）",
  "id": "示例1通过drawmodifier进行自定义绘制",
  "level": 3
}, {
  "value": "示例2（通过DrawModifier对容器的前景进行自定义绘制）",
  "id": "示例2通过drawmodifier对容器的前景进行自定义绘制",
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
        id: "自定义绘制设置",
        children: "自定义绘制设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当某些组件本身的绘制内容不满足需求时，可使用自定义组件绘制功能，在原有组件基础上部分绘制，或者全部自行绘制，以达到预期效果。例如：独特的按钮形状、文字和图像混合的图标等。自定义组件绘制提供了自定义绘制修改器，来实现更自由地组件绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(920111)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawmodifier",
      children: "drawModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawModifier(modifier: DrawModifier | undefined): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的自定义绘制修改器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755244)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
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
          children: "组件支持范围:"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
        children: "AlphabetIndexer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
        children: "Badge"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank",
        children: "Blank"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker",
        children: "CalendarPicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
        children: "Checkbox"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
        children: "CheckboxGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
        children: "Circle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit",
        children: "ColumnSplit"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter",
        children: "Counter"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
        children: "DataPanel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
        children: "DatePicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
        children: "Ellipse"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
        children: "Flex"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
        children: "FlowItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack",
        children: "FolderStack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
        children: "FormLink"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge",
        children: "Gauge"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol",
        children: "GridCol"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
        children: "GridItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow",
        children: "GridRow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
        children: "Hyperlink"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator",
        children: "ImageAnimator"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
        children: "ImageSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line",
        children: "Line"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
        children: "LoadingProgress"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
        children: "Marquee"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
        children: "MenuItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitemgroup/ts-basic-components-menuitemgroup",
        children: "MenuItemGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-navigator/ts-container-navigator",
        children: "Navigator"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-navrouter/ts-basic-components-navrouter",
        children: "NavRouter"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
        children: "Path"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
        children: "PatternLock"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon",
        children: "Polygon"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline",
        children: "Polyline"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
        children: "Progress"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
        children: "QRCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
        children: "Radio"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
        children: "Rating"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
        children: "Rect"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
        children: "Refresh"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit",
        children: "RowSplit"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
        children: "ScrollBar"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
        children: "Select"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape",
        children: "Shape"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
        children: "SideBarContainer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
        children: "Slider"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
        children: "Stepper"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepperitem/ts-basic-components-stepperitem",
        children: "StepperItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
        children: "SymbolGlyph"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
        children: "TextClock"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
        children: "TextPicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
        children: "TextTimer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
        children: "TimePicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
        children: "Toggle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      })]
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
            children: "modifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawmodifier-1",
              children: "DrawModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
      id: "drawmodifier-1",
      children: "DrawModifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DrawModifier可设置遮罩层前景（drawOverlay）、前景（drawForeground）、内容前景（drawFront）、内容（drawContent）和内容背景（drawBehind）的绘制方法，还提供主动触发重绘的方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "#invalidate",
        children: "invalidate"
      }), "。每个DrawModifier实例只能设置到一个组件上，禁止进行重复设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义层级示例图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193815)/* ["default"] */.A) + "",
        width: "900",
        height: "573"
      })
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
      id: "drawfront",
      children: "drawFront"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawFront?(drawContext: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制内容前景的接口，若重载该方法则可进行内容前景的自定义绘制。"
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
            children: "drawContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E9%80%9A%E8%BF%87drawmodifier%E8%BF%9B%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6",
        children: "示例1（通过DrawModifier进行自定义绘制）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawcontent",
      children: "drawContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawContent?(drawContext: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制内容的接口，若重载该方法则可进行内容的自定义绘制，会替换组件原本的内容绘制函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
        children: "DrawContext"
      }), "中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-user-defined-extension-drawmodifier#%E8%B0%83%E6%95%B4%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6canvas%E7%9A%84%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5",
        children: "调整自定义绘制Canvas的变换矩阵"
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
            children: "drawContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E9%80%9A%E8%BF%87drawmodifier%E8%BF%9B%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6",
        children: "示例1（通过DrawModifier进行自定义绘制）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawbehind",
      children: "drawBehind"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawBehind?(drawContext: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制背景的接口，若重载该方法则可进行背景的自定义绘制。"
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
            children: "drawContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E9%80%9A%E8%BF%87drawmodifier%E8%BF%9B%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6",
        children: "示例1（通过DrawModifier进行自定义绘制）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawforeground20",
      children: "drawForeground20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawForeground(drawContext: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制前景的接口，若重载该方法则可进行前景的自定义绘制。需要对其组件的前景层进行绘制时重载该方法。"
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
            children: "drawContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E9%80%9A%E8%BF%87drawmodifier%E5%AF%B9%E5%AE%B9%E5%99%A8%E7%9A%84%E5%89%8D%E6%99%AF%E8%BF%9B%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6",
        children: "示例2（通过DrawModifier对容器的前景进行自定义绘制）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawoverlay23",
      children: "drawOverlay23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawOverlay(drawContext: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制遮罩层的接口，若重载该方法则可进行遮罩层的自定义绘制。需要对其组件的遮罩层进行绘制时重载该方法。"
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
            children: "drawContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
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
        children: "// test.ets\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass MyForegroundDrawModifier extends DrawModifier {\n  public scaleX: number = 3;\n  public scaleY: number = 3;\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  // 重载drawOverlay方法，实现自定义绘制遮罩层前景\n  drawOverlay(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 50,\n      blue: 100\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    context.canvas.drawRect({\n      left: this.uiContext.vp2px(halfWidth - 30 * this.scaleX),\n      top: this.uiContext.vp2px(halfHeight - 30 * this.scaleY),\n      right: this.uiContext.vp2px(halfWidth + 30 * this.scaleX),\n      bottom: this.uiContext.vp2px(halfHeight + 60 * this.scaleY)\n    });\n  }\n}\n\n@Entry\n@Component\nstruct DrawModifierExample {\n  // 将自定义绘制遮罩层前景的类实例化，传入UIContext实例\n  private overlayModifier: MyForegroundDrawModifier = new MyForegroundDrawModifier(this.getUIContext());\n\n  build() {\n    Column() {\n      Text('此文本是子节点')\n        .fontSize(36)\n        .width('100%')\n        .height('100%')\n        .textAlign(TextAlign.Center)\n    }\n    .margin(50)\n    .width(280)\n    .height(300)\n    .backgroundColor(0x87CEEB)\n    // 调用此接口并传入自定义绘制前景的类实例，即可实现自定义绘制前景\n    .drawModifier(this.overlayModifier)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invalidate",
      children: "invalidate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动触发重绘的接口，开发者无需也无法重载，调用会触发所绑定组件的重绘。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E9%80%9A%E8%BF%87drawmodifier%E8%BF%9B%E8%A1%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6",
        children: "示例1（通过DrawModifier进行自定义绘制）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawcontext",
      children: "DrawContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawContext = DrawContext"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1通过drawmodifier进行自定义绘制",
      children: "示例1（通过DrawModifier进行自定义绘制）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过DrawModifier对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "组件进行自定义绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { AnimatorResult } from '@kit.ArkUI';\n\n// 继承DrawModifier实现自定义绘制控制器\nclass MyFullDrawModifier extends DrawModifier {\n  public scaleX: number = 1;\n  public scaleY: number = 1;\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  // 重载drawBehind方法，自定义绘制背景\n  drawBehind(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 255,\n      green: 0,\n      blue: 0\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    context.canvas.drawRect({\n      left: this.uiContext.vp2px(halfWidth - 50 * this.scaleX),\n      top: this.uiContext.vp2px(halfHeight - 50 * this.scaleY),\n      right: this.uiContext.vp2px(halfWidth + 50 * this.scaleX),\n      bottom: this.uiContext.vp2px(halfHeight + 50 * this.scaleY)\n    });\n  }\n\n  // 重载drawContent方法，自定义绘制内容\n  drawContent(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 255,\n      blue: 0\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    context.canvas.drawRect({\n      left: this.uiContext.vp2px(halfWidth - 30 * this.scaleX),\n      top: this.uiContext.vp2px(halfHeight - 30 * this.scaleY),\n      right: this.uiContext.vp2px(halfWidth + 30 * this.scaleX),\n      bottom: this.uiContext.vp2px(halfHeight + 30 * this.scaleY)\n    });\n  }\n\n  // 重载drawFront方法，自定义绘制内容前景\n  drawFront(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 0,\n      blue: 255\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    const radiusScale = (this.scaleX + this.scaleY) / 2;\n    context.canvas.drawCircle(this.uiContext.vp2px(halfWidth), this.uiContext.vp2px(halfHeight),\n      this.uiContext.vp2px(20 * radiusScale));\n  }\n}\n\n// 继承DrawModifier实现自定义绘制控制器，仅支持自定义绘制内容前景\nclass MyFrontDrawModifier extends DrawModifier {\n  public scaleX: number = 1;\n  public scaleY: number = 1;\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  drawFront(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 0,\n      blue: 255\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    const radiusScale = (this.scaleX + this.scaleY) / 2;\n    context.canvas.drawCircle(this.uiContext.vp2px(halfWidth), this.uiContext.vp2px(halfHeight),\n      this.uiContext.vp2px(20 * radiusScale));\n  }\n}\n\n@Entry\n@Component\nstruct DrawModifierExample {\n  private fullModifier: MyFullDrawModifier = new MyFullDrawModifier(this.getUIContext());\n  private frontModifier: MyFrontDrawModifier = new MyFrontDrawModifier(this.getUIContext());\n  private drawAnimator: AnimatorResult | undefined = undefined;\n  @State modifier: DrawModifier = new MyFrontDrawModifier(this.getUIContext());\n  private count = 0;\n\n  // 创建Animator对象并设置动画\n  create() {\n    let self = this;\n    this.drawAnimator = this.getUIContext().createAnimator({\n      duration: 1000,\n      easing: 'ease',\n      delay: 0,\n      fill: 'forwards',\n      direction: 'normal',\n      iterations: 1,\n      begin: 0,\n      end: 2\n    });\n    this.drawAnimator.onFrame = (value: number) => {\n      console.info('frame value =', value);\n      const tempModifier = self.modifier as MyFullDrawModifier | MyFrontDrawModifier;\n      tempModifier.scaleX = Math.abs(value - 1);\n      tempModifier.scaleY = Math.abs(value - 1);\n      // 主动触发重绘\n      self.modifier.invalidate();\n    };\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Text('test text')\n          .width(100)\n          .height(100)\n          .margin(10)\n          .backgroundColor(Color.Gray)\n          .onClick(() => {\n            const tempModifier = this.modifier as MyFullDrawModifier | MyFrontDrawModifier;\n            tempModifier.scaleX -= 0.1;\n            tempModifier.scaleY -= 0.1;\n          })\n          .drawModifier(this.modifier)\n      }\n\n      Row() {\n        Button('create')\n          .width(100)\n          .height(100)\n          .borderRadius(50)\n          .margin(10)\n          .onClick(() => {\n            this.create();\n          })\n        Button('play')\n          .width(100)\n          .height(100)\n          .borderRadius(50)\n          .margin(10)\n          .onClick(() => {\n            if (this.drawAnimator) {\n              this.drawAnimator.play();\n            }\n          })\n        Button('changeModifier')\n          .width(100)\n          .height(100)\n          .borderRadius(50)\n          .margin(10)\n          .onClick(() => {\n            this.count += 1;\n            if (this.count % 2 === 1) {\n              console.info('change to full modifier');\n              this.modifier = this.fullModifier;\n            } else {\n              console.info('change to front modifier');\n              this.modifier = this.frontModifier;\n            }\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240864)/* ["default"] */.A) + "",
        width: "425",
        height: "261"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2通过drawmodifier对容器的前景进行自定义绘制",
      children: "示例2（通过DrawModifier对容器的前景进行自定义绘制）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过DrawModifier对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "容器的前景进行自定义绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass MyForegroundDrawModifier extends DrawModifier {\n  public scaleX: number = 3;\n  public scaleY: number = 3;\n  uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    super();\n    this.uiContext = uiContext;\n  }\n\n  // 重载drawForeground方法，实现自定义绘制前景\n  drawForeground(context: DrawContext): void {\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 50,\n      blue: 100\n    });\n    context.canvas.attachBrush(brush);\n    const halfWidth = context.size.width / 2;\n    const halfHeight = context.size.height / 2;\n    context.canvas.drawRect({\n      left: this.uiContext.vp2px(halfWidth - 30 * this.scaleX),\n      top: this.uiContext.vp2px(halfHeight - 30 * this.scaleY),\n      right: this.uiContext.vp2px(halfWidth + 30 * this.scaleX),\n      bottom: this.uiContext.vp2px(halfHeight + 30 * this.scaleY)\n    });\n  }\n}\n\n@Entry\n@Component\nstruct DrawModifierExample {\n  // 将自定义绘制前景的类实例化，传入UIContext实例\n  private foregroundModifier: MyForegroundDrawModifier = new MyForegroundDrawModifier(this.getUIContext());\n\n  build() {\n    Column() {\n      Text('此文本是子节点')\n        .fontSize(36)\n        .width('100%')\n        .height('100%')\n        .textAlign(TextAlign.Center)\n    }\n    .margin(50)\n    .width(280)\n    .height(300)\n    .backgroundColor(0x87CEEB)\n    // 调用此接口并传入自定义绘制前景的类实例，即可实现自定义绘制前景\n    .drawModifier(this.foregroundModifier)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(547047)/* ["default"] */.A) + "",
        width: "253",
        height: "272"
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
547047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
755244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
240864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799928-dfbb86e8c4324494d462410dccfeacc7.gif");

},
193815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479577-95f0c58506fa60cfa3a3fb7f0ba8a643.png");

},
920111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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