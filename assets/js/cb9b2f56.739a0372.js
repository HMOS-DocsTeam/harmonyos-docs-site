"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["741577"], {
634382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_path_ts_drawing_components_path_md_cb9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-graphic-drawing-ts-drawing-components-path-ts-drawing-components-path-md-cb9.json
var site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_path_ts_drawing_components_path_md_cb9_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path","title":"Path","description":"路径绘制组件，根据绘制路径生成封闭的自定义形状。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path.md","sourceDirName":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path","slug":"/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Path","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-path","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-drawing-components-path"},"sidebar":"ref","previous":{"title":"Polygon","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon"},"next":{"title":"Rect","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path.md


const frontMatter = {
	title: 'Path',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-path',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-drawing-components-path'
};
const contentTitle = 'Path';

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
  "value": "PathOptions18+对象说明",
  "id": "pathoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "commands",
  "id": "commands",
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
  "value": "SVG路径描述规范",
  "id": "svg路径描述规范",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（组件属性绘制）",
  "id": "示例1组件属性绘制",
  "level": 3
}, {
  "value": "示例2（使用不同参数类型绘制路径）",
  "id": "示例2使用不同参数类型绘制路径",
  "level": 3
}, {
  "value": "示例3（使用attributeModifier动态设置Path组件的属性）",
  "id": "示例3使用attributemodifier动态设置path组件的属性",
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
        id: "path",
        children: "Path"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径绘制组件，根据绘制路径生成封闭的自定义形状。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(682051)/* ["default"] */.A) + "",
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
      children: "Path(options?: PathOptions)"
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
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#pathoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PathOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path绘制区域。  异常值undefined和null按照无效值处理，本次设置不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pathoptions18对象说明",
      children: "PathOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述Path组件绘制属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(906414)/* ["default"] */.A) + "",
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
            children: ["路径所在矩形的宽度。  值为异常值或缺省时按照自身内容需要的宽度处理。  默认单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["路径所在矩形的高度。  值为异常值或缺省时按照自身内容需要的高度处理。  默认单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#commands",
              children: "commands7+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["路径绘制的命令字符串。  值为异常值或缺省时按照自身内容需要的宽高处理。默认值：空字符串  异常值按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      id: "commands",
      children: "commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["commands(value: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
        children: "ResourceStr"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#svg%E8%B7%AF%E5%BE%84%E6%8F%8F%E8%BF%B0%E8%A7%84%E8%8C%83",
        children: "SVG路径描述规范"
      }), "的命令字符串，单位为px。像素单位转换方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
        children: "像素单位转换"
      }), "。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线条绘制的路径。  默认值：空字符串  默认单位：px  异常值undefined和null按照默认值处理。"
          })]
        })
      })]
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
      }), "动态设置属性方法，不设置时，默认边框颜色为不透明的黑色。"]
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
      children: ["设置线条间隙，支持", (0,jsx_runtime.jsx)(_components.a, {
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
            children: ["定义Path轮廓的虚线模式的数组，数组元素交替表示线段长度和间隙长度。  默认值：[]（空数组）  默认单位：vp  异常值undefined和null按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: ["设置线条绘制起点的偏移量，设置正值向左边偏移，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。异常值按照默认值处理。"]
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
      children: ["设置线条端点绘制样式，支持", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "线条端点绘制样式。  默认值：LineCapStyle.Butt  异常值undefined、null、NaN和Infinity按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokelinejoin",
      children: "strokeLineJoin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeLineJoin(value: LineJoinStyle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置线条拐角绘制样式，支持", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#linejoinstyle",
              children: "LineJoinStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线条拐角绘制样式。  默认值：LineJoinStyle.Miter  异常值undefined、null、NaN和Infinity按照默认值处理。"
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
      }), "动态设置属性方法。斜接长度表示外边框外边交点到内边交点的距离，边框宽度即strokeWidth属性的值。该属性取值需在strokeLineJoin属性取值LineJoinStyle.Miter时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该属性的合法值范围应当大于等于1.0，当取值范围在[0,1)时按1.0处理，其余异常值按默认值处理。"
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
      children: ["设置线条透明度，支持", (0,jsx_runtime.jsx)(_components.a, {
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
      children: ["设置线条宽度，支持", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "线条宽度，取值范围≥0。  默认值：1  默认单位：vp  异常值undefined、null和NaN按照默认值处理，Infinity按0处理。"
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
      id: "svg路径描述规范",
      children: "SVG路径描述规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVG路径描述规范支持的命令如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "moveto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：起始点的x轴坐标。  y：起始点的y轴坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定的(x, y)坐标处开始一个新的子路径。例如，M 0 0表示将(0, 0)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lineto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：直线终点的x轴坐标。  y：直线终点的y轴坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前点到给定的(x, y)坐标画一条线，该坐标成为新的当前点。例如，L 50 50表示绘制当前点到(50, 50)点的直线，并将(50, 50)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "horizontal lineto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：水平直线终点的x轴坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前点绘制一条水平线到给定的x坐标，等效于将y坐标指定为当前点y坐标的L命令。例如，当前点为(100, 100)，H 50 表示绘制当前点到(50, 100)点的直线，并将(50, 100)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vertical lineto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y：垂直直线终点的y轴坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前点绘制一条垂直线到给定的y坐标，等效于将x坐标指定为当前点x坐标的L命令。例如，当前点为(100, 100)，V 50 表示绘制当前点到(100, 50)点的直线，并将(100, 50)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "curveto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x1：第一个控制点参数的x坐标值。  y1：第一个控制点参数的y坐标值。  x2：第二个控制点参数的x坐标值。  y2：第二个控制点参数的y坐标值。  x：终点参数的x坐标值。  y：终点参数的y坐标值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用(x1, y1)作为曲线起点的控制点，(x2, y2)作为曲线终点的控制点，从当前点到(x, y)绘制三次贝塞尔曲线。例如，C100 100 250 100 250 200 表示绘制当前点到(250, 200)点的三次贝塞尔曲线，并将(250, 200)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smooth curveto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x2：第二个控制点参数的x坐标值。  y2：第二个控制点参数的y坐标值。  x：终点参数的x坐标值。  y：终点参数的y坐标值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x2, y2)作为曲线终点的控制点，绘制从当前点到(x, y)绘制三次贝塞尔曲线。若前一个命令是C或S，则起点控制点是上一个命令的终点控制点相对于起点的映射。例如，C100 100 250 100 250 200 S400 300 400 200第二段贝塞尔曲线的起点控制点为(250, 300)。如果没有前一个命令或者前一个命令不是 C或S，则第一个控制点与当前点重合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "quadratic Bezier curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x1：第一个控制点参数的x坐标值。  y1：第一个控制点参数的y坐标值。  x：终点参数的x坐标值。  y：终点参数的y坐标值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用(x1, y1)作为控制点，从当前点到(x, y)绘制二次贝塞尔曲线。例如，Q400 50 600 300 表示绘制当前点到(600, 300)点的二次贝塞尔曲线，并将(600, 300)点作为新子路径的起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smooth quadratic Bezier curveto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：终点参数的x坐标值。  y：终点参数的y坐标值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制从当前点到(x, y)绘制二次贝塞尔曲线。若前一个命令是Q或T，则控制点是上一个命令的终点控制点相对于起点的映射。 例如，Q400 50 600 300 T1000 300第二段贝塞尔曲线的控制点为(800, 350)。 如果没有前一个命令或者前一个命令不是Q或T，则第一个控制点与当前点重合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elliptical Arc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rx：椭圆的x轴半径。  ry：椭圆的y轴半径。  x-axis-rotation：椭圆相对于坐标系的旋转角度。  large-arc-flag：标记绘制大弧(1)还是小弧(0)。  sweep-flag：标记向顺时针(1)还是逆时针(0)方向绘制。  x：终点参数的x坐标值。  y：终点参数的y坐标值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前点到(x, y)绘制一条椭圆弧。椭圆的大小和方向由两个半径(rx, ry)和x-axis-rotation定义，指示整个椭圆相对于当前坐标系如何旋转（以度为单位）。 large-arc-flag 和 sweep-flag确定弧的绘制方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closepath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过将当前路径连接回当前子路径的初始点来关闭当前子路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：commands('M0 20 L50 50 L50 100 Z')定义了一个三角形，起始于位置(0, 20)，接着绘制点(0, 20)到点(50, 50)的直线，再绘制从点(50, 50)到点(50, 100)的直线，最后绘制从点(50, 100)到(0, 20)的直线关闭路径，形成封闭三角形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1组件属性绘制",
      children: "示例1（组件属性绘制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过commands、fillOpacity、stroke属性分别绘制路径、透明度、边框颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PathExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('Straight line')\n        .fontSize(11)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      // 绘制一条长600px，宽3vp的直线\n      Path()\n        .width('600px')\n        .height('10px')\n        .commands('M0 0 L600 0')\n        .stroke(Color.Black)\n        .strokeWidth(3)\n\n      Text('Straight line graph')\n        .fontSize(11)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      // 绘制直线图形\n      Flex({ justifyContent: FlexAlign.SpaceBetween }) {\n        Path()\n          .width('210px')\n          .height('310px')\n          .commands('M100 0 L200 240 L0 240 Z')\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('210px')\n          .height('310px')\n          .commands('M0 0 H200 V200 H0 Z')\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('210px')\n          .height('310px')\n          .commands('M100 0 L0 100 L50 200 L150 200 L200 100 Z')\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n      }.width('95%')\n\n      Text('Curve graphics').fontSize(11).fontColor(0xCCCCCC).width('90%')\n      // 绘制弧线图形\n      Flex({ justifyContent: FlexAlign.SpaceBetween }) {\n        Path()\n          .width('250px')\n          .height('310px')\n          .commands(\"M0 300 S100 0 240 300 Z\")\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('210px')\n          .height('310px')\n          .commands('M0 150 C0 100 140 0 200 150 L100 300 Z')\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('210px')\n          .height('310px')\n          .commands('M0 100 A30 20 20 0 0 200 100 Z')\n          .fillOpacity(0)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n      }.width('95%')\n    }.width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(174338)/* ["default"] */.A) + "",
        width: "300",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2使用不同参数类型绘制路径",
      children: "示例2（使用不同参数类型绘制路径）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width、height、commands属性分别使用不同的长度类型绘制图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PathTypeExample {\n  build() {\n    Column({ space: 10 }) {\n      // 宽、高、命令字符串使用string类型，绘制一条直线。\n      Path({ width: '600px', height: '10px' })\n        .commands('M0 0 L600 0')\n        .fillOpacity(0)\n        .stroke(Color.Black)\n        .strokeWidth(3)\n      // 宽、高使用number类型，绘制一个矩形图形。\n      Path({ width: 200, height: 100 })\n        .commands('M200 0 H400 V200 H200 Z')\n        .fillOpacity(0)\n        .stroke(Color.Black)\n        .strokeWidth(3)\n      // 宽、高、命令字符串使用Resource类型（需用户自定义），绘制一个弧线图形。\n      Path({ width: $r('app.string.PathWidth'), height: $r('app.string.PathHeight') }) // 本示例中PathWidth和PathHeight均定义为\"200\"。\n        .commands($r('app.string.PathCommands')) // 本示例中PathCommands定义为\"M150 300 Q300 0 450 300 Z\"。\n        .fillOpacity(0)\n        .stroke(Color.Black)\n        .strokeWidth(3)\n    }.width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189203)/* ["default"] */.A) + "",
        width: "205",
        height: "239"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用attributemodifier动态设置path组件的属性",
      children: "示例3（使用attributeModifier动态设置Path组件的属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了如何使用attributeModifier动态设置Path组件的commands、fill、fillOpacity、stroke、strokeDashArray、strokeDashOffset、strokeLineCap、strokeLineJoin、strokeMiterLimit、strokeOpacity、strokeWidth和antiAlias属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyPathModifier implements AttributeModifier<PathAttribute> {\n  applyNormalAttribute(instance: PathAttribute): void {\n    // 使用字符串commands绘制一个三角形，填充颜色#707070，填充透明度0.5，边框颜色#2787D9，边框间隙[20]，向左偏移15，线条两端样式为半圆，拐角样式使用尖角连接路径段，斜接长度与边框宽度比值的极限值为5，边框透明度0.5，边框宽度10，抗锯齿开启\n    instance.commands('M100 0 L200 240 L0 240 Z')\n    instance.fill(\"#707070\")\n    instance.fillOpacity(0.5)\n    instance.stroke(\"#2787D9\")\n    instance.strokeDashArray([20])\n    instance.strokeDashOffset(\"15\")\n    instance.strokeLineCap(LineCapStyle.Round)\n    instance.strokeLineJoin(LineJoinStyle.Miter)\n    instance.strokeMiterLimit(5)\n    instance.strokeOpacity(0.5)\n    instance.strokeWidth(10)\n    instance.antiAlias(true)\n  }\n}\n\n@Entry\n@Component\nstruct PathModifierDemo {\n  @State modifier: MyPathModifier = new MyPathModifier()\n\n  build() {\n    Column() {\n      Path()\n        .attributeModifier(this.modifier)\n        .offset({ x: 20, y: 20 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440591)/* ["default"] */.A) + "",
        width: "242",
        height: "280"
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
189203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
682051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
440591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800364-968532937098cb0f9dd1edfa0c5ff3c8.png");

},
906414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
174338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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5aeN9IhL3mmArewp1ubQ8uv1X7w/Gu+prqHQqwBBGCD0NAFfTdRtdW0231CylEttcRiSNx3UirVedeEmPg7xhe+DJiRp91uvtHY9ApOZIR/unkD0Jr0WgAooooAK898bWdx4Z1qDx3pcTOIFEOr28Y5nts/fx3ZOv09hXoVMljSWJo5EV0YEMrDIIPagCKxvLfUbGC8tZVlt50EkcinIZSMg1Yrzjw3I/gTxa3hG6dv7H1Bmn0aVjxG3V7fPt1X6+pr0ccigArifH2u3sQtfDOhuP7b1cmONx/y7RfxzH0wM49/pXSa9rdl4e0W61S/k8u3t4y7HufQD3JwB9a5jwDot7JJdeLddj26xqwBWJufstuPuRD04wT7/AEoA6Tw7oNn4a0O10mxXEFugXcernqWPuTkmtWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooADwK898KD/AISjx/rnimT5rSyP9lace2F5lcfVuAfQGuu8RtqQ8P340eLzdRaBlt1LBRvIwDk8cdfwrz/wu/j3wt4bsdGt/A1tIltHtMh1aMGRiSWY8dySaAPVKK4P/hI/iJ/0Idr/AODiP/Cj/hI/iJ/0Idr/AODiP/CgDvKK4P8A4SP4if8AQh2v/g4j/wAKP+Ej+In/AEIdr/4OI/8ACgDvKK4P/hI/iJ/0Idr/AODiP/Cj/hI/iJ/0Idr/AODiP/CgDvKK4P8A4SP4if8AQh2v/g4j/wAKP+Ej+In/AEIdr/4OI/8ACgDvKK4P/hI/iJ/0Idr/AODiP/Cj/hI/iJ/0Idr/AODiP/CgC38RdDudS0BNR0wf8TjSJBe2TDqWXlk+jLkY78Vu+HNbtvEXh6x1a1P7q6iDhe6nup9wcj8K5b/hI/iJ/wBCHa/+DiP/AAqD4bab4j0a+1m31XRk0/Tbqc3dpEl0kwhZvvoMc7SeRxxzQB6JRRRQAUUUUAc/4x8MReKtAlsjIYLpGE1pcr96CZeVYH69fYmqvgbxPL4g0mSDUYxBrOnSfZtQg/uyD+If7LDkH6+ldVXnfjnwlrcurx654SuEtdRuo/sF9k4V4W4En+8nUHrj6YoAilJ+Injj7P8Ae8NaBNmQj7t3eDovuqd/evSQMCsrw7oNn4a0K00mxTbBbpgE9XbqWPuTk1q0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k=");

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