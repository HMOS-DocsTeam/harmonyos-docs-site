"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["49819"], {
810804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_container_comp_js_service_widget_container_list_js_service_widget_container_list_md_e1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-container-comp-js-service-widget-container-list-js-service-widget-container-list-md-e1d.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_container_comp_js_service_widget_container_list_js_service_widget_container_list_md_e1d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list/js-service-widget-container-list","title":"list","description":"列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list/js-service-widget-container-list.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list/js-service-widget-container-list","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list/js-service-widget-container-list","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"list","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-container-list","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-container-list"},"sidebar":"ref","previous":{"title":"div","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-div/js-service-widget-container-div"},"next":{"title":"list-item","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list-item/js-service-widget-container-list-item"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list/js-service-widget-container-list.md


const frontMatter = {
	title: 'list',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-container-list',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-container-list'
};
const contentTitle = 'list';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "样式",
  "id": "样式",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    color: "color",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    length: "length",
    p: "p",
    percentage: "percentage",
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
        id: "list",
        children: "list"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471024)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对卡片场景，建议开发者控制list中的子节点list-item的数量（建议30条以内）以便获得更好的卡片交互体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-container-comp/js-service-widget-container-list-item/js-service-widget-container-list-item",
        children: "list-item"
      }), ">子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-attributes/js-service-widget-common-attributes",
        children: "通用属性"
      }), "外，还支持如下属性："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cachedcount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长列表延迟加载时list-item最少缓存数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollbar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "侧边滑动栏的显示模式（当前只支持纵向）：  - off：不显示。  - auto：按需显示(触摸时显示，2s后消失)。  - on：常驻显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrolleffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动效果，目前支持如下滑动效果：  - spring：弹性物理动效，滑动到边缘后可以根据初始速度或通过触摸事件继续滑动一段距离，松开后回弹。  - fade：渐隐物理动效，滑动到边缘后展示一个波浪形的渐隐，根据速度和滑动距离的变化渐隐也会发生一定的变化。  - no：滑动到边缘后无效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["item是否自带分隔线。  其样式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%A0%B7%E5%BC%8F",
              children: "样式列表"
            }), "的divider-color、divider-height、divider-length、divider-origin。  - false：item不自带分隔线。  - true：item自带分隔线。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shapemode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "侧边滑动栏的形状类型。  - default：不指定，跟随主题。  - rect：矩形。  - round：圆形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateeffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置当list内部的item发生删除或新增时是否支持动效。  - false：新增删除item时无过渡动效。  - true：新增删除item时有过渡动效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "initialindex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置当前List初次加载时视口起始位置显示的item，默认为0，即显示第一个item，如设置的序号超过了最后一个item的序号，则设置不生效，当同时设置了initialoffset属性时，当前属性不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "initialoffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置当前List初次加载时视口的起始偏移量，偏移量无法超过当前List可滑动的范围，如果超过会被截断为可滑动范围的极限值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定当前列表中被选中激活的项，可选值为list-item的section属性值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式",
      children: "样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-styles/js-service-widget-common-styles",
        children: "通用样式"
      }), "外，还支持如下样式："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider-color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transparent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "item分隔线颜色，仅当list的divider属性为true时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "item分隔线高度，仅当list的divider属性为true时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider-length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主轴宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "item分隔线长度，不设置时最大长度为主轴宽度，具体长度取决于divider-origin，仅当list的divider属性为true时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider-origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "item分隔线相对于item主轴起点位置的偏移量，仅当list的divider属性为true时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flex-direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置flex容器主轴的方向，指定flex项如何放置在flex容器中，可选值为：  - column：主轴为纵向。  - row：主轴为横向。  其他组件默认值为row，在list组件中默认值为column。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list交叉轴方向的显示列数，默认为1列。  设置多列时，在list交叉轴上进行均分，每一列大小相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align-items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stretch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list每一列交叉轴上的对齐格式，可选值为：  - stretch：弹性元素被在交叉轴方向被拉伸到与容器相同的高度或宽度。  - flex-start：元素向交叉轴起点对齐。  - flex-end：元素向交叉轴终点对齐。  - center：元素在交叉轴居中。  align-items样式作用在每一列的子元素上，列与列之间采用均分方式布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "item-extent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.percentage, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fade-color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置渐隐物理动效的颜色。当滑动效果设置为渐隐物理动效时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollbar-color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滚动条的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollbar-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滚动条的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scrollbar-offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滚动条距离List默认位置的偏移量，只支持正数，默认位置在List右边缘，可以通过这个偏移量调整滚动条的水平位置，如果滚动条绘制在list外部，而list父组件有裁剪，会导致滚动条被裁剪。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-events/js-service-widget-common-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<div class=\"container\">\n  <list class=\"todo-wrapper\">\n    <list-item for=\"{{todolist}}\" class=\"todo-item\">\n      <text class=\"todo-title\">{{$item.title}}</text>\n      <text class=\"todo-title\">{{$item.date}}</text>\n    </list-item>\n  </list>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"todolist\": [{\n      \"title\": \"work\",\n      \"date\": \"2021-12-31 10:00:00\"\n    }, {\n      \"title\": \"watch movie\",\n      \"date\": \"2021-12-31 20:00:00\"\n    }]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0px;\n  top: 0px;\n  width: 454px;\n  height: 454px;\n}\n.todo-wrapper {\n  width: 454px;\n  height: 300px;\n}\n.todo-item {\n  width: 454px;\n  height: 80px;\n  flex-direction: column;\n}\n.todo-title {\n  width: 454px;\n  height: 40px;\n  text-align: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4*4卡片"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952840)/* ["default"] */.A) + "",
        width: "300",
        height: "189"
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
471024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
952840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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