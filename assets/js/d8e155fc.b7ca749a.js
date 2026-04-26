"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["34547"], {
611798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_line_ts_drawing_components_line_md_d8e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-graphic-drawing-ts-drawing-components-line-ts-drawing-components-line-md-d8e.json
var site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_line_ts_drawing_components_line_md_d8e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line","title":"Line","description":"直线绘制组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line.md","sourceDirName":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line","slug":"/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Line","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-line","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-drawing-components-line"},"sidebar":"ref","previous":{"title":"Ellipse","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse"},"next":{"title":"Polyline","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line.md


const frontMatter = {
	title: 'Line',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-line',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-drawing-components-line'
};
const contentTitle = 'Line';

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
  "value": "LineOptions18+对象说明",
  "id": "lineoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "startPoint",
  "id": "startpoint",
  "level": 3
}, {
  "value": "endPoint",
  "id": "endpoint",
  "level": 3
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
  "value": "示例2（边框端点绘制）",
  "id": "示例2边框端点绘制",
  "level": 3
}, {
  "value": "示例3（边框间隙绘制）",
  "id": "示例3边框间隙绘制",
  "level": 3
}, {
  "value": "示例4（宽和高使用不同参数类型绘制直线）",
  "id": "示例4宽和高使用不同参数类型绘制直线",
  "level": 3
}, {
  "value": "示例5（使用attributeModifier动态设置Line组件的属性）",
  "id": "示例5使用attributemodifier动态设置line组件的属性",
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
        id: "line",
        children: "Line"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直线绘制组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650503)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件从API version 20开始支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater",
        children: "AttributeUpdater"
      }), "类的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater#%E5%B1%9E%E6%80%A7",
        children: "updateConstructorParams"
      }), "接口更新构造参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Line(options?: LineOptions)"
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
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line#lineoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LineOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line绘制区域。  异常值undefined和null按照无效值处理，本次设置不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lineoptions18对象说明",
      children: "LineOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述Line组件绘制属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(253359)/* ["default"] */.A) + "",
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
            children: "width7+"
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
            children: ["宽度。  值为异常值或缺省时按照自身内容需要的宽度处理。  默认单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "height7+"
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
            children: ["高度。  值为异常值或缺省时按照自身内容需要的高度处理。  默认单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startpoint",
      children: "startPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startPoint(value: Array<any>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置直线起点坐标点（相对坐标），支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法，异常值按照默认值处理。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直线起点坐标点（相对坐标），单位vp。  默认值：[0, 0]  异常值undefined和null按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "endpoint",
      children: "endPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "endPoint(value: Array<any>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置直线终点坐标点（相对坐标），支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法，异常值按照默认值处理。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直线终点坐标点（相对坐标），单位vp。  默认值：[0, 0]  异常值undefined和null按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill",
      children: "fill"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fill(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充区域颜色，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。Line组件无法形成闭合区域，该属性设置无效。"]
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
      }), "动态设置属性方法。Line组件无法形成闭合区域，该属性设置无效。"]
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
      }), "动态设置属性方法。线段相交时可能会出现重叠现象。取值范围≥0，异常值按照默认值处理。"]
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
            children: ["定义Line的虚线模式的数组，数组元素交替表示线段长度和间隙长度。  默认值：[]（空数组）  默认单位：vp  异常值undefined和null按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), "动态设置属性方法。Line组件不支持拐角，该属性设置无效。"]
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
      children: ["设置锐角绘制成斜角的极限值，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。Line组件不支持设置锐角图形，该属性设置无效。"]
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
      }), "动态设置属性方法。该属性若为string类型, 暂不支持百分比，百分比按照1px处理。"]
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
            children: "是否开启抗锯齿效果。  true：开启抗锯齿；false：关闭抗锯齿。  默认值：true  异常值undefined和null按照false处理。"
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
      children: "通过startPoint、endPoint、fillOpacity、stroke、strokeDashArray、strokeDashOffset属性分别绘制直线的起始点、结束点、透明度、直线颜色、边框间隙、绘制起点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineExample {\n  build() {\n    Column({ space: 10 }) {\n      // 线条绘制的起止点坐标均是相对于Line组件本身绘制区域的坐标\n      Line()\n        .width(200)\n        .height(150)\n        .startPoint([0, 0])\n        .endPoint([50, 100])\n        .stroke(Color.Black)\n        .backgroundColor('#F5F5F5')\n      Line()\n        .width(200)\n        .height(150)\n        .startPoint([50, 50])\n        .endPoint([150, 150])\n        .strokeWidth(5)\n        .stroke(Color.Orange)\n        .strokeOpacity(0.5)\n        .backgroundColor('#F5F5F5')\n      // strokeDashOffset用于定义关联虚线strokeDashArray数组渲染时的偏移\n      Line()\n        .width(200)\n        .height(150)\n        .startPoint([0, 0])\n        .endPoint([100, 100])\n        .stroke(Color.Black)\n        .strokeWidth(3)\n        .strokeDashArray([10, 3])\n        .strokeDashOffset(5)\n        .backgroundColor('#F5F5F5')\n      // 当坐标点设置的值超出Line组件的宽高范围时，线条会画出组件绘制区域\n      Line()\n        .width(50)\n        .height(50)\n        .startPoint([0, 0])\n        .endPoint([100, 100])\n        .stroke(Color.Black)\n        .strokeWidth(3)\n        .strokeDashArray([10, 3])\n        .backgroundColor('#F5F5F5')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612985)/* ["default"] */.A) + "",
        width: "313",
        height: "935"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2边框端点绘制",
      children: "示例2（边框端点绘制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过strokeLineCap属性绘制直线的边框端点样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineExample1 {\n  build() {\n    Row({ space: 10 }) {\n      // 当LineCapStyle值为Butt时\n      Line()\n        .width(100)\n        .height(200)\n        .startPoint([50, 50])\n        .endPoint([50, 200])\n        .stroke(Color.Black)\n        .strokeWidth(20)\n        .strokeLineCap(LineCapStyle.Butt)\n        .backgroundColor('#F5F5F5')\n        .margin(10)\n      // 当LineCapStyle值为Round时\n      Line()\n        .width(100)\n        .height(200)\n        .startPoint([50, 50])\n        .endPoint([50, 200])\n        .stroke(Color.Black)\n        .strokeWidth(20)\n        .strokeLineCap(LineCapStyle.Round)\n        .backgroundColor('#F5F5F5')\n      // 当LineCapStyle值为Square时\n      Line()\n        .width(100)\n        .height(200)\n        .startPoint([50, 50])\n        .endPoint([50, 200])\n        .stroke(Color.Black)\n        .strokeWidth(20)\n        .strokeLineCap(LineCapStyle.Square)\n        .backgroundColor('#F5F5F5')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(700035)/* ["default"] */.A) + "",
        width: "473",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3边框间隙绘制",
      children: "示例3（边框间隙绘制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过strokeDashArray属性绘制直线的边框间隙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineExample {\n  build() {\n    Column() {\n      Line()\n        .width(300)\n        .height(30)\n        .startPoint([50, 30])\n        .endPoint([300, 30])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n      // 设置strokeDashArray的数组间隔为 50\n      Line()\n        .width(300)\n        .height(30)\n        .startPoint([50, 20])\n        .endPoint([300, 20])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .strokeDashArray([50])\n      // 设置strokeDashArray的数组间隔为 50, 10\n      Line()\n        .width(300)\n        .height(30)\n        .startPoint([50, 20])\n        .endPoint([300, 20])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .strokeDashArray([50, 10])\n      // 设置strokeDashArray的数组间隔为 50, 10, 20\n      Line()\n        .width(300)\n        .height(30)\n        .startPoint([50, 20])\n        .endPoint([300, 20])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .strokeDashArray([50, 10, 20])\n      // 设置strokeDashArray的数组间隔为 50, 10, 20, 30\n      Line()\n        .width(300)\n        .height(30)\n        .startPoint([50, 20])\n        .endPoint([300, 20])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .strokeDashArray([50, 10, 20, 30])\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64860)/* ["default"] */.A) + "",
        width: "489",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4宽和高使用不同参数类型绘制直线",
      children: "示例4（宽和高使用不同参数类型绘制直线）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width、height属性分别使用不同的长度类型绘制直线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineTypeExample {\n  build() {\n    Column({ space: 10 }) {\n      // 在200 * 200的区域内绘制一个起始点为（0,0），终点为（150,150），边框宽度为10的直线\n      Line({ width: '200', height: '200' })// 使用string类型\n        .startPoint([0, 0])\n        .endPoint([150, 150])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .backgroundColor('#F5F5F5')\n        .margin(10)\n      // 在200 * 200的区域内绘制一个起始点为（0,50），终点为（150,150），边框宽度为10的直线\n      Line({ width: 200, height: 200 })// 使用number类型\n        .startPoint([0, 50])\n        .endPoint([150, 150])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .backgroundColor('#F5F5F5')\n        .margin(10)\n      // 在200 * 200的区域内绘制一个起始点为（0,100），终点为（150,150），边框宽度为10的直线\n      Line({ width: $r('app.string.LineWidth'), height: $r('app.string.LineHeight') })// 使用Resource类型，需用户自定义\n        .startPoint([0, 100])\n        .endPoint([150, 150])\n        .stroke(Color.Black)\n        .strokeWidth(10)\n        .backgroundColor('#F5F5F5')\n        .margin(10)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(292778)/* ["default"] */.A) + "",
        width: "293",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5使用attributemodifier动态设置line组件的属性",
      children: "示例5（使用attributeModifier动态设置Line组件的属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了如何使用attributeModifier动态设置Line组件的startPoint、endPoint、stroke、strokeDashArray、strokeDashOffset、strokeLineCap、strokeOpacity、strokeWidth和antiAlias属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyLineModifier implements AttributeModifier<LineAttribute> {\n  applyNormalAttribute(instance: LineAttribute): void {\n    // 一个起始点为（10, 10），终点为（120, 10）的直线，边框颜色#2787D9，边框间隙[20]，向左偏移15，线条两端样式为半圆，边框透明度0.5，边框宽度10，抗锯齿开启\n    instance.startPoint([10, 10])\n    instance.endPoint([120, 10])\n    instance.stroke(\"#2787D9\")\n    instance.strokeDashArray([20])\n    instance.strokeDashOffset(\"15\")\n    instance.strokeLineCap(LineCapStyle.Round)\n    instance.strokeOpacity(0.5)\n    instance.strokeWidth(10)\n    instance.antiAlias(true)\n  }\n}\n\n@Entry\n@Component\nstruct LineModifierDemo {\n  @State modifier: MyLineModifier = new MyLineModifier()\n\n  build() {\n    Column() {\n      Line()\n        .attributeModifier(this.modifier)\n        .offset({ x: 20, y: 20 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520783)/* ["default"] */.A) + "",
        width: "350",
        height: "200"
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
292778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
64860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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+gVY/wDgOn+FAHwhRX3f/YOkf9Amx/8AAdP8KP7B0j/oE2P/AIDp/hQBn+BP+SeeGv8AsFWv/opa6CmxxpFGscaKiIAqqowAB0AFOoAKKKKACvP/AI2f8ki1z/th/wCj469AqGe3huoWhuIklibG5HXIPOeh9xQB8DUV93/2FpHfSrH/AMB0/wAKP7B0j/oE2P8A4Dp/hQB8IUV93/2DpH/QJsf/AAHT/Cj+wdI/6BNj/wCA6f4UAfCFfT/7OXHw8v8A/sKyf+iYq9Q/sHSP+gTY/wDgOn+FWLa0t7NDHa28UCE7isSBRnpnA+n6UAWKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z");

},
520783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
253359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
612985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480007-76ecc3b6fce73b7efbac8ca9002481dd.png");

},
650503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
700035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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