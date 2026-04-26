"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["613045"], {
653409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_span_ts_basic_components_span_md_951_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-basic-components-span-ts-basic-components-span-md-951.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_span_ts_basic_components_span_md_951_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span","title":"Span","description":"作为Text、ContainerSpan组件的子组件，用于显示行内文本的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Span","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-span"},"sidebar":"ref","previous":{"title":"Search","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search"},"next":{"title":"ImageSpan","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span.md


const frontMatter = {
	title: 'Span',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-span'
};
const contentTitle = 'Span';

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
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "decoration",
  "id": "decoration",
  "level": 3
}, {
  "value": "letterSpacing",
  "id": "letterspacing",
  "level": 3
}, {
  "value": "textCase",
  "id": "textcase",
  "level": 3
}, {
  "value": "fontColor",
  "id": "fontcolor",
  "level": 3
}, {
  "value": "fontSize",
  "id": "fontsize",
  "level": 3
}, {
  "value": "fontStyle",
  "id": "fontstyle",
  "level": 3
}, {
  "value": "fontWeight",
  "id": "fontweight",
  "level": 3
}, {
  "value": "fontFamily",
  "id": "fontfamily",
  "level": 3
}, {
  "value": "lineHeight10+",
  "id": "lineheight10",
  "level": 3
}, {
  "value": "font10+",
  "id": "font10",
  "level": 3
}, {
  "value": "textShadow11+",
  "id": "textshadow11",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "BaseSpan",
  "id": "basespan",
  "level": 2
}, {
  "value": "textBackgroundStyle11+",
  "id": "textbackgroundstyle11",
  "level": 3
}, {
  "value": "baselineOffset12+",
  "id": "baselineoffset12",
  "level": 3
}, {
  "value": "TextBackgroundStyle11+对象说明",
  "id": "textbackgroundstyle11对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置文本样式）",
  "id": "示例1设置文本样式",
  "level": 3
}, {
  "value": "示例2（设置文本阴影）",
  "id": "示例2设置文本阴影",
  "level": 3
}, {
  "value": "示例3（设置背景样式）",
  "id": "示例3设置背景样式",
  "level": 3
}, {
  "value": "示例4（设置文本基线偏移量）",
  "id": "示例4设置文本基线偏移量",
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
        id: "span",
        children: "Span"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
        children: "ContainerSpan"
      }), "组件的子组件，用于显示行内文本的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572254)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。若需设置通用属性，应使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "进行设置，或改用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string",
        children: "属性字符串"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#customspan",
        children: "CustomSpan"
      }), "自行绘制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "只支持点击事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "onClick"
      }), "和悬浮事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover",
        children: "onHover"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Span(value: string | Resource)"
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
            children: "string"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#basespan",
        children: "BaseSpan"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decoration",
      children: "decoration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "decoration(value: DecorationStyleInterface)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本装饰线样式及其颜色。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyleinterface",
              children: "DecorationStyleInterface12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本装饰线样式对象。  默认值：  {  type: TextDecorationType.None,  color: Color.Black,  style: TextDecorationStyle.SOLID  }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  style参数不支持卡片能力。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(649113)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "letterspacing",
      children: "letterSpacing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "letterSpacing(value: number | ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本字符间距。取值小于0，字符聚集重叠，取值大于0且随着数值变大，字符间距越来越大，稀疏分布。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textcase",
      children: "textCase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textCase(value: TextCase)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本大小写。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textcase",
              children: "TextCase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本大小写。  默认值：TextCase.Normal"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontcolor",
      children: "fontColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体颜色。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体颜色。  默认值：'e6182431'  Wearable设备上默认值为：'#c5ffffff'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontsize",
      children: "fontSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体大小。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontstyle",
      children: "fontStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontStyle(value: FontStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体样式。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
              children: "FontStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体样式。  默认值：FontStyle.Normal"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontweight",
      children: "fontWeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontWeight(value: number | FontWeight | ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的字体粗细，设置过大可能会在不同字体下有截断。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontfamily",
      children: "fontFamily"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontFamily(value: string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体列表。"
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
            children: "string"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(968754)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
        children: "loadFontSync"
      }), "注册自定义字体。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineheight10",
      children: "lineHeight10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineHeight(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本行高。"
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
            children: "文本行高。  number类型时单位为fp。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font10",
      children: "font10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "font(value: Font)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本样式。包括字体大小、字体粗细、字体族和字体风格。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textshadow11",
      children: "textShadow11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textShadow(value: ShadowOptions | Array<ShadowOptions>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用事件支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "点击事件onClick"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover",
        children: "悬浮事件onHover"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129743)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Span组件无尺寸信息，因此点击事件返回的ClickEvent对象的target属性无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basespan",
      children: "BaseSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义BaseSpan基础类，包含Span的通用属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textbackgroundstyle11",
      children: "textBackgroundStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textBackgroundStyle(style: TextBackgroundStyle): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置背景样式。作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
        children: "ContainerSpan"
      }), "的子组件时可以继承它的此属性值，优先使用其自身的此属性。"]
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
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textbackgroundstyle11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextBackgroundStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景样式。  默认值:  {  color: Color.Transparent,  radius: 0  }"
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
            children: "返回当前Span的属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baselineoffset12",
      children: "baselineOffset12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "baselineOffset(value: LengthMetrics): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Span基线的偏移量。此属性与父组件的baselineOffset是共存的。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Span基线的偏移量，设置该值为百分比时，按默认值显示。  正数内容向上偏移，负数向下偏移。  默认值：0  在ImageSpan中，设置为非0时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan#verticalalign",
              children: "verticalAlign"
            }), "将固定为ImageSpanAlignment.BASELINE对齐；设置为0时，要使基线对齐策略生效，需同时设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan#verticalalign",
              children: "verticalAlign"
            }), "为ImageSpanAlignment.BASELINE。"]
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
            children: "返回当前Span的属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textbackgroundstyle11对象说明",
      children: "TextBackgroundStyle11+对象说明"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本背景色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置文本样式",
      children: "示例1（设置文本样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了设置不同样式的文本效果以及span配置点击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SpanExample {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n      Text('Basic Usage').fontSize(9).fontColor(0xCCCCCC)\n      Text() {\n        Span('In Line')\n        Span(' Component')\n        Span(' !')\n      }\n\n      Text() {\n        Span('This is the Span component').fontSize(12).textCase(TextCase.Normal)\n          .decoration({ type: TextDecorationType.None, color: Color.Red })\n          .fontFamily('HarmonyOS Sans')\n      }.margin({ top: 12 })\n\n      // 文本横线添加\n      Text('Text Decoration').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('I am Underline-WAVY-span')\n          .decoration({ type: TextDecorationType.Underline, color: Color.Red, style: TextDecorationStyle.WAVY })\n          .fontSize(12)\n      }\n\n      Text() {\n        Span('I am LineThrough-DOTTED-span')\n          .decoration({ type: TextDecorationType.LineThrough, color: Color.Red, style: TextDecorationStyle.DOTTED })\n          .fontSize(12)\n      }\n\n      Text() {\n        Span('I am Overline-DASHED-span')\n          .decoration({ type: TextDecorationType.Overline, color: Color.Red, style: TextDecorationStyle.DASHED })\n          .fontSize(12)\n      }\n\n      // 文本字符间距\n      Text('LetterSpacing').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('span letter spacing')\n          .letterSpacing(0)\n          .fontSize(12)\n      }\n\n      Text() {\n        Span('span letter spacing')\n          .letterSpacing(-2)\n          .fontSize(12)\n      }\n\n      Text() {\n        Span('span letter spacing')\n          .letterSpacing(3)\n          .fontSize(12)\n      }\n\n      // 文本大小写展示设置\n      Text('Text Case').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('I am Lower-span').fontSize(12)\n          .textCase(TextCase.LowerCase)\n          .decoration({ type: TextDecorationType.None })\n      }\n\n      Text() {\n        Span('I am Upper-span').fontSize(12)\n          .textCase(TextCase.UpperCase)\n          .decoration({ type: TextDecorationType.None })\n      }\n\n      // 文本字体样式设置\n      Text('FontStyle').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('I am FontStyle-Normal').fontSize(12)\n          .fontStyle(FontStyle.Normal)\n      }\n\n      Text() {\n        Span('I am FontStyle-Italic').fontSize(12)\n          .fontStyle(FontStyle.Italic)\n      }\n\n      // 文本字体粗细设置\n      Text('FontWeight').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('I am FontWeight-Lighter').fontSize(12)\n          .fontWeight(FontWeight.Lighter)\n      }\n\n      Text() {\n        Span('I am FontWeight-Bold').fontSize(12)\n          .fontWeight(FontWeight.Bold)\n      }\n\n      // 文本行高设置\n      Text('LineHeight').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('I am lineHeight default\\n').fontSize(12)\n          .fontWeight(FontWeight.Lighter)\n        Span('I am lineHeight 30').fontSize(12)\n          .lineHeight(30)\n      }\n      .backgroundColor(Color.Gray)\n\n      // 文本样式设置\n      Text('Font').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('span font 12 Bolder Italic')\n          .font({\n            size: 12,\n            weight: FontWeight.Bolder,\n            style: FontStyle.Italic,\n            family: \"HarmonyOS Sans\"\n          })\n      }\n\n      // span点击事件设置\n      Text('span click event').fontSize(9).fontColor(0xCCCCCC).margin({ top: 12 })\n      Text() {\n        Span('Span default ').fontSize(12)\n        Span('Span click')\n          .onClick((event) => {\n            console.info(\"span onClick\")\n          })\n      }\n    }.width('100%').padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(217801)/* ["default"] */.A) + "",
        width: "392",
        height: "740"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置文本阴影",
      children: "示例2（设置文本阴影）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textshadow11",
        children: "textShadow"
      }), "属性展示了文本设置阴影的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SpanExample {\n  @State textShadows: ShadowOptions | Array<ShadowOptions> = [{\n    radius: 10,\n    color: Color.Red,\n    offsetX: 10,\n    offsetY: 0\n  }, {\n    radius: 10,\n    color: Color.Orange,\n    offsetX: 20,\n    offsetY: 0\n  },\n    {\n      radius: 10,\n      color: Color.Yellow,\n      offsetX: 30,\n      offsetY: 0\n    }, {\n      radius: 10,\n      color: Color.Green,\n      offsetX: 40,\n      offsetY: 0\n    },\n    {\n      radius: 10,\n      color: Color.Blue,\n      offsetX: 100,\n      offsetY: 0\n    }]\n\n  build() {\n    Column({ space: 8 }) {\n      Text() {\n        Span('123456789').fontSize(50).textShadow(this.textShadows).fontColor(Color.Pink)\n      }\n\n      Text() {\n        Span('123456789') // span can inherit text shadow & font size from outer text\n      }.fontSize(50).textShadow(this.textShadows).fontColor(Color.Pink)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313660)/* ["default"] */.A) + "",
        width: "296",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置背景样式",
      children: "示例3（设置背景样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textbackgroundstyle11",
        children: "textBackgroundStyle"
      }), "属性展示了文本设置背景样式的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Component\n@Entry\nstruct SpanExample {\n  build() {\n    Column() {\n      Text() {\n        Span('   Hello World !   ')\n          .fontSize('20fp')\n          .textBackgroundStyle({ color: \"#7F007DFF\", radius: \"5vp\" })\n          .fontColor(Color.White)\n      }\n    }.width('100%').margin({ bottom: '5vp' }).alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672502)/* ["default"] */.A) + "",
        width: "196",
        height: "52"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置文本基线偏移量",
      children: "示例4（设置文本基线偏移量）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#baselineoffset12",
        children: "baselineOffset"
      }), "属性展示了文本设置不同基线偏移量的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthUnit, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SpanExample {\n  build() {\n    Row() {\n      Column() {\n        Text() {\n          Span('SpanOne')\n            .fontSize(10)\n            .baselineOffset(new LengthMetrics(20, LengthUnit.VP))\n          Span('SpanTwo')\n            .fontSize(10)\n            .baselineOffset(new LengthMetrics(0, LengthUnit.VP))\n          // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n          ImageSpan($r(\"app.media.sky\"))\n            .width('80px')\n            .baselineOffset(new LengthMetrics(-20, LengthUnit.VP))\n        }\n        .backgroundColor('#7F007DFF')\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(539848)/* ["default"] */.A) + "",
        width: "277",
        height: "145"
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
672502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
217801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439855-a5424c5d2a7e85fb7aa717cc5af0c2ce.png");

},
572254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
968754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
313660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959810-0b0422ee74e323f8785bbd33ebfcd020.png");

},
649113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
129743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
539848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800162-fb9d57354c8232e2b69d46b6bc0ef781.png");

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