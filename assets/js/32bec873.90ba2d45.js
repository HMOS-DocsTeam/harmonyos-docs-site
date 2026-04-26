"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["897741"], {
556021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_circle_ts_drawing_components_circle_md_32b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-graphic-drawing-ts-drawing-components-circle-ts-drawing-components-circle-md-32b.json
var site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_circle_ts_drawing_components_circle_md_32b_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle","title":"Circle","description":"用于绘制圆形的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle.md","sourceDirName":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle","slug":"/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Circle","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-circle","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-drawing-components-circle"},"sidebar":"ref","previous":{"title":"Path2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d"},"next":{"title":"Ellipse","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle.md


const frontMatter = {
	title: 'Circle',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-circle',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-drawing-components-circle'
};
const contentTitle = 'Circle';

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
  "value": "CircleOptions对象说明",
  "id": "circleoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "fill",
  "id": "fill",
  "level": 3
}, {
  "value": "fillOpacity",
  "id": "fillopacity",
  "level": 3
}, {
  "value": "stroke",
  "id": "stroke",
  "level": 3
}, {
  "value": "strokeDashArray",
  "id": "strokedasharray",
  "level": 3
}, {
  "value": "strokeDashOffset",
  "id": "strokedashoffset",
  "level": 3
}, {
  "value": "strokeLineCap",
  "id": "strokelinecap",
  "level": 3
}, {
  "value": "strokeLineJoin",
  "id": "strokelinejoin",
  "level": 3
}, {
  "value": "strokeMiterLimit",
  "id": "strokemiterlimit",
  "level": 3
}, {
  "value": "strokeOpacity",
  "id": "strokeopacity",
  "level": 3
}, {
  "value": "strokeWidth",
  "id": "strokewidth",
  "level": 3
}, {
  "value": "antiAlias",
  "id": "antialias",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（组件属性绘制）",
  "id": "示例1组件属性绘制",
  "level": 3
}, {
  "value": "示例2（宽和高使用不同参数类型绘制圆）",
  "id": "示例2宽和高使用不同参数类型绘制圆",
  "level": 3
}, {
  "value": "示例3（使用attributeModifier动态设置Circle组件的属性）",
  "id": "示例3使用attributemodifier动态设置circle组件的属性",
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
        id: "circle",
        children: "Circle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于绘制圆形的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(175039)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Circle(value?: CircleOptions)"
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
              href: "#circleoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CircleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置圆形尺寸  异常值undefined和null按照无效值处理，本次设置不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "circleoptions对象说明",
      children: "CircleOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述Circle组件绘制属性。"
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
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined、null、NaN和Infinity按照默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined、null、NaN和Infinity按照默认值处理。"
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
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill",
      children: "fill"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fill(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充区域的颜色，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法，异常值按照默认值处理。与通用属性foregroundColor同时设置时，后设置的属性生效。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["填充区域颜色。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            }), ".Black  异常值undefined、null、NaN和Infinity按照默认值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillopacity",
      children: "fillOpacity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillOpacity(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充区域透明度，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
      id: "stroke",
      children: "stroke"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stroke(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框颜色，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法，不设置时，默认边框透明度为0，即没有边框。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["边框颜色。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            }), ".Transparent  异常值undefined和null按照默认值处理，NaN和Infinity按照", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            }), ".Black处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokedasharray",
      children: "strokeDashArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeDashArray(value: Array<any>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框间隙，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。取值范围≥0，异常值按照默认值处理。"]
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
            children: "Array<any>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义Circle轮廓的虚线模式的数组，数组元素交替表示线段长度和间隙长度。  默认值：[]（空数组）  默认单位：vp  异常值undefined和null按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  空数组：实线  偶数多元素数组：数组元素按顺序循环，如[a, b, c, d]表示线段长度a->间隙长度b->线段长度c->间隙长度d->线段长度a->...  奇数多元素数组：重复一次该数组元素，按偶数多元素数组的规则顺序循环，如[a, b, c]等效于[a, b, c, a, b, c]，表示线段长度a->间隙长度b->线段长度c->间隙长度a->线段长度b->间隙长度c->线段长度a->..."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokedashoffset",
      children: "strokeDashOffset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeDashOffset(value: number | string)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框绘制起点的偏移量，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokelinecap",
      children: "strokeLineCap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeLineCap(value: LineCapStyle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框端点绘制样式，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#linecapstyle",
              children: "LineCapStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框端点绘制样式。  默认值：LineCapStyle.Butt  异常值undefined、null、NaN和Infinity按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokelinejoin",
      children: "strokeLineJoin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeLineJoin(value: LineJoinStyle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框拐角绘制样式，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。Circle组件无法形成拐角，该属性设置无效。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#linejoinstyle",
              children: "LineJoinStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框拐角绘制样式。  默认值：LineJoinStyle.Miter  异常值undefined、null、NaN和Infinity按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokemiterlimit",
      children: "strokeMiterLimit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeMiterLimit(value: number | string)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置斜接长度与边框宽度比值的极限值，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。Circle组件无法设置尖角图形，该属性设置无效。"]
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
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokeopacity",
      children: "strokeOpacity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeOpacity(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框透明度，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。该属性的取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若给定值大于1.0，则取值为1.0。"]
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
      id: "strokewidth",
      children: "strokeWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeWidth(value: Length)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边框宽度，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。该属性若为string类型，暂不支持百分比，百分比按照1px处理。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框宽度，取值范围≥0。  默认值：1  默认单位：vp  异常值undefined、null和NaN按照默认值处理，Infinity按0处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antialias",
      children: "antiAlias"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "antiAlias(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否开启抗锯齿效果，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
            children: "是否开启抗锯齿效果。  -true：开启抗锯齿。  -false：关闭抗锯齿。  默认值：true  异常值undefined和null按照false处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1组件属性绘制",
      children: "示例1（组件属性绘制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过fillOpacity、stroke、strokeDashArray属性可分别设置圆的透明度、边框颜色和边框间隙样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CircleExample {\n  build() {\n    Column({ space: 10 }) {\n      // 绘制一个直径为150的圆\n      Circle({ width: 150, height: 150 })\n      // 绘制一个直径为150、线条为红色虚线的圆环（宽高设置不一致时以短边为直径）\n      Circle()\n        .width(150)\n        .height(200)\n        .fillOpacity(0)\n        .strokeWidth(3)\n        .stroke(Color.Red)\n        .strokeDashArray([1, 2])\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289927)/* ["default"] */.A) + "",
        width: "274",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2宽和高使用不同参数类型绘制圆",
      children: "示例2（宽和高使用不同参数类型绘制圆）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width、height属性分别使用不同的长度类型绘制圆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CircleTypeExample {\n  build() {\n    Column({ space: 10 }) {\n      // 绘制一个直径为50的圆\n      Circle({ width: '50', height: '50' }) // 使用string类型\n      // 绘制一个直径为100的圆\n      Circle({ width: 100, height: 100 }) // 使用number类型\n      // 绘制一个直径为150的圆\n      Circle({ width: $r('app.string.CircleWidth'), height: $r('app.string.CircleHeight') }) // 使用Resource类型，需用户自定义\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639714)/* ["default"] */.A) + "",
        width: "297",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用attributemodifier动态设置circle组件的属性",
      children: "示例3（使用attributeModifier动态设置Circle组件的属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了如何使用attributeModifier动态设置Circle组件的fill、fillOpacity、stroke、strokeDashArray、strokeDashOffset、strokeLineCap、strokeOpacity、strokeWidth和antiAlias属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyCircleModifier implements AttributeModifier<CircleAttribute> {\n  applyNormalAttribute(instance: CircleAttribute): void {\n    // 填充颜色#707070，填充透明度0.5，边框颜色#2787D9，边框间隙[20]，向左偏移15，线条两端样式为半圆，边框透明度0.5，边框宽度10，抗锯齿开启\n    instance.fill(\"#707070\")\n    instance.fillOpacity(0.5)\n    instance.stroke(\"#2787D9\")\n    instance.strokeDashArray([20])\n    instance.strokeDashOffset(\"15\")\n    instance.strokeLineCap(LineCapStyle.Round)\n    instance.strokeOpacity(0.5)\n    instance.strokeWidth(10)\n    instance.antiAlias(true)\n  }\n}\n\n@Entry\n@Component\nstruct CircleModifierDemo {\n  @State modifier: MyCircleModifier = new MyCircleModifier()\n\n  build() {\n    Column() {\n      Circle({ width: 150, height: 150 })\n        .attributeModifier(this.modifier)\n        .offset({ x: 20, y: 20 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894301)/* ["default"] */.A) + "",
        width: "210",
        height: "210"
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
289927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440049-e430dd3ae873cfcf201c3c886645caac.png");

},
175039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
894301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480005-bc85a9aefd84c7b90ce8b467b5ebe768.png");

},
639714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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