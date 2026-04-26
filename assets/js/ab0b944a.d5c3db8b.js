"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["937803"], {
7740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_rect_ts_drawing_components_rect_md_ab0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-graphic-drawing-ts-drawing-components-rect-ts-drawing-components-rect-md-ab0.json
var site_docs_ref_arkui_api_arkui_declarative_comp_graphic_drawing_ts_drawing_components_rect_ts_drawing_components_rect_md_ab0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect","title":"Rect","description":"矩形绘制组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect.md","sourceDirName":"arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect","slug":"/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Rect","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-rect","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-drawing-components-rect"},"sidebar":"ref","previous":{"title":"Path","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path"},"next":{"title":"Shape","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect.md


const frontMatter = {
	title: 'Rect',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-rect',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-drawing-components-rect'
};
const contentTitle = 'Rect';

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
  "value": "RectOptions18+对象说明",
  "id": "rectoptions18对象说明",
  "level": 2
}, {
  "value": "RoundedRectOptions18+对象说明",
  "id": "roundedrectoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "radiusWidth",
  "id": "radiuswidth",
  "level": 3
}, {
  "value": "radiusHeight",
  "id": "radiusheight",
  "level": 3
}, {
  "value": "radius",
  "id": "radius",
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
  "value": "示例2（绘制渐变色矩形）",
  "id": "示例2绘制渐变色矩形",
  "level": 3
}, {
  "value": "示例3（使用不同参数类型绘制矩形）",
  "id": "示例3使用不同参数类型绘制矩形",
  "level": 3
}, {
  "value": "示例4（使用attributeModifier动态设置Rect组件的属性）",
  "id": "示例4使用attributemodifier动态设置rect组件的属性",
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
        id: "rect",
        children: "Rect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩形绘制组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379995)/* ["default"] */.A) + "",
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
      children: "Rect(options?: RectOptions | RoundedRectOptions)"
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
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect#rectoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect#roundedrectoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RoundedRectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rectoptions18对象说明",
      children: "RectOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述Rect组件绘制属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303734)/* ["default"] */.A) + "",
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
            children: ["宽度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined、null、NaN和Infinity按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["高度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined、null、NaN和Infinity按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "radius7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<any>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roundedrectoptions18对象说明",
      children: "RoundedRectOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述Rect绘制属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556332)/* ["default"] */.A) + "",
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
            children: ["宽度，取值范围≥0。  默认值：0  默认单位：vp  异常值按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["高度，取值范围≥0。  默认值：0  默认单位：vp  异常值按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "radiusWidth7+"
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
            children: ["圆角宽度，取值范围≥0。  默认值：0  默认单位：vp  异常值按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "radiusHeight7+"
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
            children: ["圆角高度，取值范围≥0。  默认值：0  默认单位：vp  异常值按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      id: "radiuswidth",
      children: "radiusWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "radiusWidth(value: Length)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置圆角的宽度，仅设置宽时宽高一致，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。 异常值按照默认值处理。"]
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
            children: "圆角的宽度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radiusheight",
      children: "radiusHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "radiusHeight(value: Length)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置圆角的高度，仅设置高时宽高一致，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。 异常值按照默认值处理。"]
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
            children: "圆角的高度，取值范围≥0。  默认值：0  默认单位：vp  异常值undefined按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radius",
      children: "radius"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "radius(value: Length | Array<any>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置圆角半径大小，取值范围≥0，支持", (0,jsx_runtime.jsx)(_components.a, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<any>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      }), "动态设置属性方法，不设置时，默认边框透明度为0，即无边框。"]
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
      }), "动态设置属性方法。取值范围≥0。异常值将按默认值处理。"]
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
            children: ["定义Rect轮廓的虚线模式的数组，数组元素交替表示线段长度和间隙长度。  默认值：[]（空数组）  默认单位：vp  异常值undefined和null按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: "使用fill、fillOpacity、stroke、radius属性分别绘制矩形的填充颜色、透明度、边框颜色、圆角。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RectExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('normal').fontSize(11).fontColor(0xCCCCCC).width('90%')\n      // 绘制90% * 50的矩形\n      Column({ space: 5 }) {\n        Text('normal').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        // 绘制90% * 50矩形\n        Rect({ width: '90%', height: 50 })\n          .fill(Color.Pink)\n        // 绘制90% * 50的矩形框\n        Rect()\n          .width('90%')\n          .height(50)\n          .fillOpacity(0)\n          .stroke(Color.Red)\n          .strokeWidth(3)\n\n        Text('with rounded corners').fontSize(11).fontColor(0xCCCCCC).width('90%')\n        // 绘制90% * 80的矩形, 圆角宽高分别为40、20\n        Rect({ width: '90%', height: 80 })\n          .radiusHeight(20)\n          .radiusWidth(40)\n          .fill(Color.Pink)\n        // 绘制90% * 80的矩形, 圆角宽高为20\n        Rect({ width: '90%', height: 80 })\n          .radius(20)\n          .fill(Color.Pink)\n          .stroke(Color.Transparent)\n      }.width('100%').margin({ top: 10 })\n\n      // 绘制90% * 50矩形, 左上圆角宽高40,右上圆角宽高20,右下圆角宽高40,左下圆角宽高20\n      Rect({ width: '90%', height: 80 })\n        .radius([[40, 40], [20, 20], [40, 40], [20, 20]])\n        .fill(Color.Pink)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664788)/* ["default"] */.A) + "",
        width: "370",
        height: "606"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2绘制渐变色矩形",
      children: "示例2（绘制渐变色矩形）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color#lineargradient18",
        children: "linearGradient"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clipshape18",
        children: "clipShape"
      }), "分别绘制渐变色的矩形。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，新增linearGradient、clipShape通用属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RectExample {\n  build() {\n    Column({ space: 10 }) {\n      Column()\n        .width(100)\n        .height(100)\n        .linearGradient({\n          direction: GradientDirection.Right,\n          colors: [[0xff0000, 0.0], [0x0000ff, 0.3], [0xffff00, 1.0]]\n        })\n        .clipShape(new Rect({ width: 100, height: 100, radius: 40 }))\n      Rect()\n        .width(100)\n        .height(100)\n        // 设置矩形填充，如果需要显示背景的渐变色，请设置区域透明度.fillOpacity(0.0)\n        .fill(Color.Pink)\n        // 设置倒角为40\n        .radius(40)\n        .stroke(Color.Black)\n        // 设置渐变色，仅100*100的矩形区域生效，渐变色的边界不包含倒角\n        .linearGradient({\n          direction: GradientDirection.Right,\n          colors: [[0xff0000, 0.0], [0x0000ff, 0.3], [0xffff00, 1.0]]\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(519614)/* ["default"] */.A) + "",
        width: "167",
        height: "359"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用不同参数类型绘制矩形",
      children: "示例3（使用不同参数类型绘制矩形）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width、height、radius、radiusWidth、radiusHeight等属性分别使用不同的长度类型绘制图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RectExample {\n  build() {\n    Column({ space: 10 }) {\n      // 绘制90% * 50矩形，圆角半径为5\n      Rect({ width: '90%', height: '50', radius: '5' }) // 使用string类型\n        .fill(Color.Green)\n      // 绘制200 * 50的矩形框，圆角半径为5\n      Rect({ width: 200, height: 50, radius: 5 }) // 使用number类型\n        .fillOpacity(0)\n        .stroke(Color.Red)\n        .strokeWidth(3)\n      // 绘制200 * 50矩形, 圆角宽80, 圆角高20\n      Rect({\n        width: $r('app.string.RectWidth'), // 使用Resource类型，需用户自定义\n        height: $r('app.string.RectHeight'),\n        radius: $r('app.string.RectRadius')\n      })\n        .radiusWidth($r('app.string.RectRadiusWidth'))\n        .radiusHeight($r('app.string.RectRadiusHeight'))\n        .fill(Color.Green)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(984099)/* ["default"] */.A) + "",
        width: "397",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4使用attributemodifier动态设置rect组件的属性",
      children: "示例4（使用attributeModifier动态设置Rect组件的属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了如何使用attributeModifier动态设置Rect组件的fill、fillOpacity、stroke、strokeDashArray、strokeDashOffset、strokeLineCap、strokeLineJoin、strokeMiterLimit、strokeOpacity、strokeWidth和antiAlias属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyRectModifier implements AttributeModifier<RectAttribute> {\n  applyNormalAttribute(instance: RectAttribute): void {\n    // 填充颜色#707070，填充透明度0.5，边框颜色#2787D9，边框间隙[20]，向左偏移15，线条两端样式为半圆，拐角样式使用尖角连接路径段，斜接长度与边框宽度比值的极限值为5，边框透明度0.5，边框宽度10，抗锯齿开启\n    instance.fill(\"#707070\")\n    instance.fillOpacity(0.5)\n    instance.stroke(\"#2787D9\")\n    instance.strokeDashArray([20])\n    instance.strokeDashOffset(\"15\")\n    instance.strokeLineCap(LineCapStyle.Round)\n    instance.strokeLineJoin(LineJoinStyle.Miter)\n    instance.strokeMiterLimit(5)\n    instance.strokeOpacity(0.5)\n    instance.strokeWidth(10)\n    instance.antiAlias(true)\n  }\n}\n\n@Entry\n@Component\nstruct RectModifierDemo {\n  @State modifier: MyRectModifier = new MyRectModifier()\n\n  build() {\n    Column() {\n      Rect()\n        .width(200)\n        .height(200)\n        .attributeModifier(this.modifier)\n        .offset({ x: 20, y: 20 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715519)/* ["default"] */.A) + "",
        width: "213",
        height: "216"
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
303734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
984099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
664788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440059-0de52655db952d2503421cc4c2d214be.png");

},
519614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAFnAKcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooppJoAWjNcR4j+Kfhrw4zRNdG9ul48i0w5B9Cc7R9M59q8x1j48a5csU0uwtbKL+/JmV/z4A/I16eEybGYrWnDTuxSko7n0LRXyrN8SPGF6xMuu3S57QgR4/75Apsfi3xKxy3iDVfp9sk/wAa9CXDOJivemjL2yZ9WUV8vxeKfEJ669qh/wC3yT/Gr0XibXz11zUj/wBvcn+NcdTJ6lPeSKVRM+k6SvnqLxHrhxnWdRP/AG9P/jV6HxDrYIP9r3x9jOx/rXBUw0qe7KTue8UV5DZ+MNchIH28yAdpFDfz5rpbDx7ISFvrRSD1eE4P/fJ/xrjlVjF6l2O4paz7HV7LUl/0a4VmHVDww+oq/VRkpK6dxWFoooqgCiiigAooooASjrR3rI1/xBaeHNIm1C9YhEHyoPvO3ZR7mhK44xcpKMVdsdrmv2Hh7TnvtSuFhiXoM5Zz2CjuT/n1rwDxj8TtY8TPJbWrtYaaf+WUbfPIP9tv6Dj61jeKfE1/4o1Rr2/c7BxDCD8sa9gP6mueck9K97LcHBNSnqz11gVRjeesiq9Qn71TPUJ+9X6Bgl7p4mL3LUNX4e1UIavw9qyxRxxL8NX4aoQ1fhr53FG0S/D2q/D2qhD2q/D2r5zFG0S/DV+KqENX4q+dxRqjRt3ZGVkYqw6EHBFddpPiSQFYr47lxxIeo+o9PeuPh7Vfi7fXNeHLEVKEuaDNVFPc9LV1cBlIKnoQad2rktH1NrRvKckwH/xz3+ldWrBlBByD0Ne5gcdDFQvHdboylHlH0UUV3EhRRRQBE7rGjMzYUDJJPSvnP4heK38T644hY/2dbEpAueGOcF/x/lj1NeqfFLxAdI8NG0gbbc3xMYIPIT+I/qB+NfPsh5yO1EJe/Y+nyPArkeKkvJfqVn61XfirD1Xevq8B0NMb1Kz1CfvVM9Qn71faYL4T5HGblqGr8PaqENX4e1Y4o44l+Gr8NUIavw187ijaJfh7Vfh7VQh7Vfh7V85ijaJfhq/FVCGr8VfO4o1Rfh7Vfi7VQh7Vfi7V85ijaJfhNdJo14dv2dz0HyE/yrm4a0bdmVldeCK8qjjJYTEKrHbr5otx5lY60UVFBKJoVcfxDNSV+hU6kakFOOzVzlas7DqKKK0EfP3xW1M3/jCW3Vsx2aLEvPGSAzfqQPwrgX6GtnxDO114i1GdjkvcyEfTcaxpPvVhhpc1RyP0ynRVDCQprol+RWeq71Yeq719lgOh89jepWeoT96pnqE/er7TBfCfI4vctQ1fh7VQhq/D2rHFHHEvw1fhqhDV+GvncUbRL8Par8PaqEPar8PavnMUbRL8NX4qoQ1fir53FGqL8Par8XaqEPar8XavnMUbRL8NX4e1UIavw9q+cxRrE39Lf90UJ+6eK0Kx9NbE+PUVsV9vw7XdXAxT+y2jmrK0xaKKK90zPk+/Ob24J6mRv5mqElXr7/j8m/66N/OqMlcmB3R+sYr4Ss9V3qw9V3r7bAdD5LG9Ss9Qn71TPUJ+9X2mC+E+Rxe5ahq/D2qhDV+HtWOKOOJfhq/DVCGr8NfO4o2iX4e1X4e1UIe1X4e1fOYo2iX4avxVQhq/FXzuKNUX4e1X4u1UIe1X4u1fOYo2iX4avw9qoQ1fh7V85ijWJq6f/wAfKfj/ACrbrDsP+PlPx/ka3O1fWcKf7nL/ABP8kYV/iCiiivqDE+Tr7/j8m/66N/OqMlXr7/j8m/66N/OqMlcmB3R+sYv4Ss9V3qw9V3r7bAdD5LG9Ss9Qn71TPUJ+9X2mC+E+Rxe5ahq/D2qhDV+HtWOKOOJfhq/DVCGr8NfO4o2iX4e1X4e1UIe1X4e1fOYo2iX4avxVQhq/FXzuKNUX4e1X4u1UIe1X4u1fOYo2iX4avw9qoQ1fh7V85ijWJqWH/Hyn4/yNbnasOw/4+U/H+Rrc7V9Zwp/uk/8AE/yRhX+IKKKK+oMT5PvwRezgjkSMD+dZ71t+Ibc2viDUoGGClzIB9Nxx+mKxXHy5rlwStKx+q15qpTU11Vys9V3qw9V3r7XAdD5XG9Ss9Qn71TPUJ+9X2mC+E+Rxe5ahq/D2qhDV+HtWOKOOJfhq/DVCGr8NfO4o2iX4e1X4e1UIe1X4e1fOYo2iX4avxVQhq/FXzuKNUX4e1X4u1UIe1X4u1fOYo2iX4avw9qoQ1fh7V85ijWJq6f8A8fCfj/KtqsfTVzNn0FbFfX8LRawTb6yb/BGFd+8LRRRX0pifP/xV0o2HjGS4VSIryMSg44yMKR9eM/jXAPzX0F8U/D7ax4ZN3Au64sCZQAOWT+ID8AD+FfPrcVFGHLV9T77K8WsRgorrHR/p+BWeq71Ykqu9fXYDoeZjepWeoT96pnqE/er7TBfCfI4vctQ1fh7VQhq/D2rHFHHEvw1fhqhDV+GvncUbRL8Par8PaqEPar8PavnMUbRL8NX4qoQ1fir53FGqL8Par8XaqEPar8XavnMUbRL8NX4e1UIa0bdWdgijknFfPYiLk+WO7NUbmlx4iZz3OB9BWjUUMQihRB2GKl71+h5bhvq2FhS8tfXqck5c0mxaKKK7ySN0WRCrAFSMEGvnH4g+E38M64xiQnT7kl4GA4T1T8O3sRX0hzWT4i0Gz8R6RNp16hMb42sOqN2Ye4qouzud+XY2WFqX+y90fJ8lQPzXR+KPDN/4W1VrK+jO0gtDMo+WVR3B9fUdv582/WvqMuakk0ezipqceaLumVnqE/eqZ6hP3q+1wXwnymL3LUNX4e1UIavw9qxxRxxL8NX4aoQ1fhr53FG0S/D2q/D2qhD2q/D2r5zFG0S/DV+KqENX4q+dxRqi/D2q/F2qhD2q/F2r5zFG0S/DXSaNZnH2hxx/CCP1rM0fTHu2EkgKwqee272rqwoVQoAAHGK1yrLHOosRVWi2Qqk9LIfiiiivrDAKKKKADFJgelLRQBla7oOn+ItPey1G3WWJuhPDKfVT2PuK+fvGXwx1fw08lzaK2oaaMnzY1+eP/fH9Rx9K+lTSEAjkV1YXGVMPK8duxtTrzp6J6HxU3f29arn71fU/iP4XeGvEm6V7Q2d2eTPaYTJ91+6fyzXmOr/AfXLZ2fS7+0vYx0SUGF/6j9RX3OW5/g5K1SXK/PY5sReeqPMIavw9q2pvhv4wsmIl0K6bHeLbJn/vkmkj8JeJAefD+q/+AUn/AMTXbWxmHmrxmvvRyqLXQqw1fhqeLwt4hHXQdU/8A5P/AImrsXhnXh10TUv/AAFf/CvCxNWm9pL8DVRZFD2q/D2qSLw5rg66NqP/AICv/hV6Dw9rRI/4lF8PrbuP5ivn8TOL2ZqkMhq/FV6z8H67MQfsDRg9TIyr/X+ldJp/gNwQ17dqAOqQjJ/M/wCFeDXpym9DVM523VpGCopZj2UZrr9I8NyHbNfDao5EXc/U9q3rDSLLTlH2aABv755b86vVz08uhzc1TVjc30ERFRAiKFUDAAGAKdRRXpJJaIgKKKKYBRRRQAlFce/xO8KRuyPqZBU4I+zy/wDxNN/4Wn4PHXVT/wCA0v8A8RSi1LZ3OmWDxC3g/uZ2VIfxri/+FreDh11Y/wDgNN/8RSf8La8FjrrB/wDAWb/4itVQqPaLZm6FSO8Ttc0tcQfi74HHXWj/AOAs3/xFRP8AGTwHGMtroH/brN/8RTeGrRV3B29DJprRneUc1xS/FLw5cRCTT01XUQf+fTS7hv1KAfrTf+FlWx6eGvE5/wC4f/8AZVkNQkztqWuJ/wCFlW3/AELHif8A8F//ANlR/wALKtv+hY8T/wDgv/8AsqV0Pkl2O1xS1xP/AAsq2/6FjxP/AOC//wCypP8AhZdoOX8N+JlHr/Zpb+RNO6Dkl2O3oriv+Fq+EYiFvL+5sHP8F5YzRY/Epj9a1Lbxv4dvI/MtdUjnT+9EjMPzAqXJJXYmmt0dDRWOPFGkHpd5/wC2b/4VIPEOmHpdZ/7Zt/hWTr0o7yQWZqZorPGt6eek/wD46f8ACnjVbQ9JCf8AgJ/wrN47DreaHyvsXc0ZqvHeQyttRsk+xqf3FaUq9OqnKnK6XYVmtx1FFFbiPk69/wCPyb/ro386ovV6+/4/Jv8Aro386oyd+a5MDuj9YxfwlZ6bbWV5qd6tnptpLeXLdI4h0HqT0Ue5xW/4Y8JX/i67byCbbTY22z3ZXqe6J6t6noP0PtuiaBpnh6y+yaZbLEnV36vIfVj3/GveeYujG1PfufFYuqqknGH3nm+h/BxpAs/iC/Izz9ltCBj6uev4D8a9A0rwl4f0RV/s/SbWJ16SFN8n/fbc1t0V59XE1azvN3OONKC6BRRRWJoFFFFIYUUUUAI6rIhR1DKeoIyDXN6h4E8O6hIZlsRZXXaewJgcfXbgH8RXS0mKNyHBPc4G40fxJoHzwMNesR/BgRXSr7fwyY/An3q9o2sWWrws9pLlkO2SJhtkjP8AdZTyDXY1z+veFrfV5hf2shsNYjGIr2IZJH91x/GvsefSvPxeAhWj7ujOedC2qLkNX4e1ctousztevpGsQLaatEu7YpzHcJ2kiY9R7dQetdTD2r4XMKE6M3GotSF2ZqWH/H0n4/1rb7ViWH/Hyn4/yNbnavpuFP8AdJ/4n+SOev8AEFFFFfUGJ8nX3/H5P/10b+dT+HfDs/irWRYx7ks4QHvJ1/hXso/2m/QZPaq2olzeSRwxmSaSby4kHV3ZsKB9TXtnhTw7F4a0GGyBV5z+9uZR/wAtJCOT+HQVxYW6jc/Qc7xnKlRju9/Q1LKyttOsYbOzhSG2iTZGidFA7e5PrVijvmiuo+YSsFFFFIoKKKKACiiigAooooAKKKKACjtRRQIyPEGgxa9YqnmNBewN5tpdp9+CT1HqD0K9DVfwxrEupQTWt/EINVsm8q8hB4z1Dr6ow5H1reNcr4qhfSbm38WWcZMliNl+i9ZbZj82fdM7h+PrXlZtgFjKD5fiW3+XzMKsPtI7uw/4+U/H+Rra71haVKk7QTROrxyLuR1PDAjINblcPCqawk0/5n+SOCv8SHUUUV9OZHzt4G0kar47uLyQboNLy49DK+Qv5AMfrivXRnJPrXHfDeyWDw/c3v8AHf3k0pJHO0NsUfT5c/jXY9qwpx5YKJ9Dia7r1pVO7/DoLRRRVmQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2SNJY2jdVZGBUgjIIPUGnUUCMX4dSNZ/bPD0rkyaPcGKMsck27DfCff5SV/4DXolecWmNP8Aitp8vRNVsJYCB3khIdT9drP+Vej1yYLDLDyqJbSlf70r/ieVXVp2FooorvMTz7wzbrbeGNMjUY/0ZGP1Ybj+ta1UdH/5AWn/APXtH/6CKvVB7MfhQUUUUiwooooAKKKKACiiigAooooAKKKKACiiigAooooA5/Xj9n8Q+Ebxfvpqyw59pIpFP9K9KrzTxR/x+eGP+w7a/wDs1el1cdjy8V/EFooopnOcNo3/ACAtP/69o/8A0EVeqjo3/IC0/wD69o//AEEVeqD2Y7IKKKKRYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAc94o/4+/DH/Ydtf/Zq9LrzTxR/x9+GP+w7a/8As1el1cdjzMV8YtFFFM5jhtG/5AWn/wDXtH/6CKvVm6BKJvDmmSAgg2seceu0Z/WtKoPZj8KCiiikWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHPeKP+Pzwx/wBh21/9mr0uvNPEY8zVvCkI5Z9ahfHsqSMf5V6XVx2PLxX8QWiiimc55V8PrsXPhRIi+ZLSea2f22uSP/HStdSeleX/AA41MWnijV9IkbCXZNzCD0Lrw4+pG0/8Br1AHtWMJc0VI96tRdGpKm+jFoooqiQooooAKKKKACiiigAooooAKKKKACiiigAooozjr0oEYTKL74neHrVeRYwXN9KPcqIk/wDQn/KvRxXnPgUf2n4k1jxCTmOaX7FaHr+5hyCR7M5c/hXo1c+GxCrSmo7RdvwVzysQ7zuLRRRXYYnyjPdT6drcepWozc2lwZYxnG7kgqf94ZWvdtK1K21nS7fUbN90NwgdT3HqD6EHtXg19/x+T/8AXRv51u+A/FQ8O6kdNvXxpd4+Udjxbynv/ut09jg+tcWFbcbH3meYRqSrx+f+Z7TRSZz05455/KlrpPngooooGFFFFABRRRQAUUUUAFFFFABRRRQAhrn/ABbqVxaabFp+nt/xNdTf7PaYP+rz9+T6KuTn1rX1DULXStPnv72ZYraFN7uT29h3z6VgeGrS51HUJPE2qRGK5uE2Wds55tbf3H99uC3sQO1cGZY2ODoOb36GNSdlZHW+GtNt9HsbHTrVdsFtGI09SAOv1J5rpqxbD/j5T8f5GtrvXmcLTc8LOUt3J/kjzq3xIWiiivpjI+Tr7/j8n/66N/OqEyK6MjDKngir99/x+Tf9dG/nVGSuTA7o/V8Yk4WZ2ngr4hnRxFo+vSM1kMJb3h5MOeiP6r6N1Hf1HrySJIgkjdXjYZVlIIP418yScgg8g8Gtfw94z1jwo4S0cXVieTaTsdoHqjfwfqK9meAnOPNT+4+JxNH2Mm47H0NRXIaB8SPD2u7YjdfYbs9YLohDn2b7p/P8K67PHXrXnyhKLtJa+ZzxkpbMWiiipLCiiigAooooAKKKinnhtYWmuJo4ol+88jbVH49vzpibS3JOtU9U1ay0WwkvdQnWCBOCTySewAHJPoB1rm7zx5HdM1v4atG1SYHabgny7ZD7yH72PRevtVWx0WW41BNU1y7OoaivERI2wwe0cfY+55rjxOMp0I3evkYTrLZEtvb3vivUItS1e3e206B/MstOk+8WHSWbtu9F6KK7GHtVCGr8PavhMzxdTEzcpsxWurNSw/4+U/H+RrbrEsP+PlPx/ka3O1fRcKf7nP8AxP8AJHPX+IKKKK+oMTyKb4LyTTPJ/bgG5icfZOmT/v1Cfgc5/wCZgH/gH/8AbK9i/KippwjD4VY9SedY2ejn+R4wfgU5/wCZhH/gF/8AbKYfgIx/5mQf+AP/ANsr2rFJ+VdkMbXp/BKxyzxlafxM8Sf9nzzBhvEike9h/wDbKvab8G9d0YBdL8e3dsg6Ri03Rj/gDSYr1+loq46vWVpu/wAkc7k73PP18LeN7SICLxLpV+473emNF+scn9KT+x/iCP8Alr4ZP/f+vQaT8K5bFKvUXU8//sf4g/8APTwz/wCTFH9j/EH/AJ6eGf8AyYr0GilZD+sVO559/Y/xB/56eGf/ACYo/sb4gkY+0eGU99k7f1Feg0UWQfWKnc8/fwb4vvBi48Z29pnqllpi8fRncn9Kp/8ACoLSedZ9S1e51SYchr9TLt+ilto/KvTKKTipKxLqSe7OPi8DCJQiX4CgYAEGAB6feqyvhEp0vT0x/qv/AK9dPRXLPA0J7xFzMwF8NFOl1/5D/wDr1MuhlOk//jv/ANetmiuaeS4Oe8CvaSKFvYGCUP5m7H+zV7oKXFFdOFwdHCRcKKsnqS5N7i0UUV2EhiiiigAoxRRQAUUUUAGKKKKADFGKKKADFGKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=");

},
556332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
379995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
715519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800366-9b86f06d2eed0ac8659d82ee6371ad86.png");

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