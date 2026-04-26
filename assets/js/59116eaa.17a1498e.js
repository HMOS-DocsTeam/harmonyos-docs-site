"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816411"], {
962372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_border_image_ts_universal_attributes_border_image_md_591_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-layout-property-ts-universal-attributes-border-image-ts-universal-attributes-border-image-md-591.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_border_image_ts_universal_attributes_border_image_md_591_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image","title":"图片边框设置","description":"设置组件的图片边框样式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"图片边框设置","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border-image","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-border-image"},"sidebar":"ref","previous":{"title":"边框设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border"},"next":{"title":"透明度设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-opacity/ts-universal-attributes-opacity"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image.md


const frontMatter = {
	title: '图片边框设置',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border-image',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-border-image'
};
const contentTitle = '图片边框设置';

const assets = {

};



const toc = [{
  "value": "borderImage",
  "id": "borderimage",
  "level": 2
}, {
  "value": "BorderImageOption对象说明",
  "id": "borderimageoption对象说明",
  "level": 2
}, {
  "value": "RepeatMode",
  "id": "repeatmode",
  "level": 2
}, {
  "value": "LinearGradient",
  "id": "lineargradient",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置渐变色边框）",
  "id": "示例1设置渐变色边框",
  "level": 3
}, {
  "value": "示例2（动态调整属性值）",
  "id": "示例2动态调整属性值",
  "level": 3
}, {
  "value": "示例3（使用LocalizedEdgeWidths类型值）",
  "id": "示例3使用localizededgewidths类型值",
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
        id: "图片边框设置",
        children: "图片边框设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的图片边框样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371757)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borderimage",
      children: "borderImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "borderImage(value: BorderImageOption): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的图片边框。"
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
              href: "#borderimageoption%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BorderImageOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片边框或者渐变色边框设置接口。"
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
      id: "borderimageoption对象说明",
      children: "BorderImageOption对象说明"
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
            children: "source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#lineargradient",
              children: "LinearGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededgewidths12",
              children: "LocalizedEdgeWidths"
            }), "12+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededgewidths12",
              children: "LocalizedEdgeWidths"
            }), "12+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededgewidths12",
              children: "LocalizedEdgeWidths"
            }), "12+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#repeatmode",
              children: "RepeatMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置被切割的图片在边框上的重复方式。  默认值：RepeatMode.Stretch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置边框图片是否中心填充。true表示中心填充，false表示非中心填充。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "repeatmode",
      children: "RepeatMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置被切割的图片在边框上的重复方式。"
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
            children: "Repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被切割的图片会重复铺平在图片边框上，超出部分会被剪裁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stretch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被切割的图片会以拉伸填充的方式铺满图片边框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被切割的图片会以整数次平铺在图片边框上，无法以整数次平铺时会压缩图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被切割的图片会以整数次平铺在图片边框上，无法以整数次平铺时会以空白填充。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lineargradient",
      children: "LinearGradient"
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
            children: "angle"
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
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#gradientdirection",
              children: "GradientDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性渐变的方向，设置angle后不生效。  默认值：GradientDirection.Bottom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colors"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<[", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ", number]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repeating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许渐变的颜色重复渲染。  默认值：false  true：允许渐变的颜色重复渲染。  false：不允许渐变的颜色重复渲染。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置渐变色边框",
      children: "示例1（设置渐变色边框）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#borderimage",
        children: "borderImage"
      }), "接口为组件设置渐变色边框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Text('This is gradient color.').textAlign(TextAlign.Center).height(50).width(200)\n          .borderImage({\n            source: {\n              angle: 90,\n              direction: GradientDirection.Left,\n              colors: [[0xAEE1E1, 0.0], [0xD3E0DC, 0.3], [0xFCD1D1, 1.0]],\n              repeating: false\n            },\n            slice: { top: 10, bottom: 10, left: 10, right: 10 },\n            width: { top: \"10px\", bottom: \"10px\", left: \"10px\", right: \"10px\" },\n            repeat: RepeatMode.Stretch,\n            fill: false\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904811)/* ["default"] */.A) + "",
        width: "720",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2动态调整属性值",
      children: "示例2（动态调整属性值）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-slider/js-components-basic-slider",
        children: "slider"
      }), "接口动态调整", (0,jsx_runtime.jsx)(_components.a, {
        href: "#borderimage",
        children: "borderImage"
      }), "接口中属性值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BorderImage {\n  @State WidthValue: number = 0\n  @State SliceValue: number = 0\n  @State OutSetValue: number = 0\n  @State RepeatValue: RepeatMode[] = [RepeatMode.Repeat, RepeatMode.Stretch, RepeatMode.Round, RepeatMode.Space]\n  @State SelectIndex: number = 0\n  @State SelectText: string = 'Repeat'\n  @State FillValue: boolean = false\n\n  build() {\n    Row() {\n      Column({ space: 20 }) {\n        Row() {\n          Text('This is borderImage.').textAlign(TextAlign.Center).fontSize(50)\n        }\n        .borderImage({\n          source: $r('app.media.icon'),\n          slice: this.SliceValue,\n          width: this.WidthValue,\n          outset: this.OutSetValue,\n          repeat: this.RepeatValue[this.SelectIndex],\n          fill: this.FillValue\n        })\n\n        Column() {\n          Text(`borderImageSlice = ${this.SliceValue}px`)\n          Slider({\n            value: this.SliceValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.SliceValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageWidth = ${this.WidthValue}px`)\n          Slider({\n            value: this.WidthValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.WidthValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageOutSet = ${this.OutSetValue}px`)\n          Slider({\n            value: this.OutSetValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.OutSetValue = value\n            })\n        }\n\n        Row() {\n          Text('borderImageRepeat: ')\n          Select([{ value: 'Repeat' }, { value: 'Stretch' }, { value: 'Round' }, { value: 'Space' }])\n            .value(this.SelectText)\n            .selected(this.SelectIndex)\n            .onSelect((index: number, value?: string) => {\n              this.SelectIndex = index\n              this.SelectText = value as string\n            })\n        }\n\n        Row() {\n          Text(`borderImageFill: ${this.FillValue} `)\n          Toggle({ type: ToggleType.Switch, isOn: this.FillValue })\n            .onChange((isOn: boolean) => {\n              this.FillValue = isOn\n            })\n        }\n\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295727)/* ["default"] */.A) + "",
        width: "376",
        height: "696"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用localizededgewidths类型值",
      children: "示例3（使用LocalizedEdgeWidths类型值）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#borderimage",
        children: "borderImage"
      }), "接口中的slice、width和outset属性值使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededgewidths12",
        children: "LocalizedEdgeWidths"
      }), "类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct BorderImage {\n  @State WidthStartValue: number = 0\n  @State WidthEndValue: number = 0\n  @State SliceStartValue: number = 0\n  @State SliceEndValue: number = 0\n  @State OutSetStartValue: number = 0\n  @State OutSetEndValue: number = 0\n  @State RepeatValue: RepeatMode[] = [RepeatMode.Repeat, RepeatMode.Stretch, RepeatMode.Round, RepeatMode.Space]\n  @State SelectIndex: number = 0\n  @State SelectText: string = 'Repeat'\n  @State FillValue: boolean = false\n\n  build() {\n    Row() {\n      Column({ space: 20 }) {\n        Row() {\n          Text('This is borderImage.').textAlign(TextAlign.Center).fontSize(50)\n        }\n        .borderImage({\n          source: $r('app.media.startIcon'),\n          slice: {\n            top: LengthMetrics.px(10),\n            bottom: LengthMetrics.px(10),\n            start: LengthMetrics.px(this.SliceStartValue),\n            end: LengthMetrics.px(this.SliceEndValue) },\n          width: {\n            top: LengthMetrics.px(10),\n            bottom: LengthMetrics.px(10),\n            start: LengthMetrics.px(this.WidthStartValue),\n            end: LengthMetrics.px(this.WidthEndValue)\n          },\n          outset: {\n            top: LengthMetrics.px(10),\n            bottom: LengthMetrics.px(10),\n            start: LengthMetrics.px(this.OutSetStartValue),\n            end: LengthMetrics.px(this.OutSetEndValue)\n          },\n          repeat: this.RepeatValue[this.SelectIndex],\n          fill: this.FillValue\n        })\n\n        Column() {\n          Text(`borderImageSliceStart = ${this.SliceStartValue}px`)\n          Slider({\n            value: this.SliceStartValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.SliceStartValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageEndSliceStart = ${this.SliceEndValue}px`)\n          Slider({\n            value: this.SliceEndValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.SliceEndValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageWidthStart = ${this.WidthStartValue}px`)\n          Slider({\n            value: this.WidthStartValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.WidthStartValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageWidthEnd = ${this.WidthEndValue}px`)\n          Slider({\n            value: this.WidthEndValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.WidthEndValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageOutSetStart = ${this.OutSetStartValue}px`)\n          Slider({\n            value: this.OutSetStartValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.OutSetStartValue = value\n            })\n        }\n\n        Column() {\n          Text(`borderImageOutSetEnd = ${this.OutSetEndValue}px`)\n          Slider({\n            value: this.OutSetEndValue,\n            min: 0,\n            max: 100,\n            style: SliderStyle.OutSet\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.OutSetEndValue = value\n            })\n        }\n\n        Row() {\n          Text('borderImageRepeat: ')\n          Select([{ value: 'Repeat' }, { value: 'Stretch' }, { value: 'Round' }, { value: 'Space' }])\n            .value(this.SelectText)\n            .selected(this.SelectIndex)\n            .onSelect((index: number, value?: string) => {\n              this.SelectIndex = index\n              this.SelectText = value as string\n            })\n        }\n\n        Row() {\n          Text(`borderImageFill: ${this.FillValue} `)\n          Toggle({ type: ToggleType.Switch, isOn: this.FillValue })\n            .onChange((isOn: boolean) => {\n              this.FillValue = isOn\n            })\n        }\n\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示语言示例图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139356)/* ["default"] */.A) + "",
        width: "286",
        height: "627"
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
371757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
904811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479505-1dbdb9c6bb58ab715941109b5a335879.png");

},
139356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439551-7cf1c27fe5a8d5441b28ddfd14d0d6ec.png");

},
295727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799856-6e1d738c0a791172105c8c2962f2bd6b.gif");

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