"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["411548"], {
926042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_transformation_ts_universal_attributes_transformation_md_1bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-visual-effect-property-ts-universal-attributes-transformation-ts-universal-attributes-transformation-md-1bf.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_transformation_ts_universal_attributes_transformation_md_1bf_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation","title":"图形变换","description":"用于对组件进行旋转、平移、缩放、矩阵变换等操作。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"图形变换","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-transformation"},"sidebar":"ref","previous":{"title":"透明度设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-opacity/ts-universal-attributes-opacity"},"next":{"title":"图像效果","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation.md


const frontMatter = {
	title: '图形变换',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-transformation',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-transformation'
};
const contentTitle = '图形变换';

const assets = {

};



const toc = [{
  "value": "rotate",
  "id": "rotate",
  "level": 2
}, {
  "value": "rotate18+",
  "id": "rotate18",
  "level": 2
}, {
  "value": "rotate20+",
  "id": "rotate20",
  "level": 2
}, {
  "value": "translate",
  "id": "translate",
  "level": 2
}, {
  "value": "translate18+",
  "id": "translate18",
  "level": 2
}, {
  "value": "scale",
  "id": "scale",
  "level": 2
}, {
  "value": "scale18+",
  "id": "scale18",
  "level": 2
}, {
  "value": "transform",
  "id": "transform",
  "level": 2
}, {
  "value": "transform18+",
  "id": "transform18",
  "level": 2
}, {
  "value": "transform3D20+",
  "id": "transform3d20",
  "level": 2
}, {
  "value": "Matrix4Transit20+",
  "id": "matrix4transit20",
  "level": 2
}, {
  "value": "RotateOptions对象说明",
  "id": "rotateoptions对象说明",
  "level": 2
}, {
  "value": "RotateAngleOptions20+对象说明",
  "id": "rotateangleoptions20对象说明",
  "level": 2
}, {
  "value": "TranslateOptions对象说明",
  "id": "translateoptions对象说明",
  "level": 2
}, {
  "value": "ScaleOptions对象说明",
  "id": "scaleoptions对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（为组件添加图形变换效果）",
  "id": "示例1为组件添加图形变换效果",
  "level": 3
}, {
  "value": "示例2（设置旋转视距）",
  "id": "示例2设置旋转视距",
  "level": 3
}, {
  "value": "示例3（按中心点旋转）",
  "id": "示例3按中心点旋转",
  "level": 3
}, {
  "value": "示例4（通过transform3D实现图形变换）",
  "id": "示例4通过transform3d实现图形变换",
  "level": 3
}, {
  "value": "示例5（按各轴旋转角的方式实现旋转）",
  "id": "示例5按各轴旋转角的方式实现旋转",
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
    object: "object",
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
        id: "图形变换",
        children: "图形变换"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于对组件进行旋转、平移、缩放、矩阵变换等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551821)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rotate",
      children: "rotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rotate(value: RotateOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件旋转。"
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
              href: "#rotateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RotateOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可使组件在以组件左上角为坐标原点的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
              children: "组件坐标系"
            }), "中进行旋转（坐标系如下图所示）。其中，(x, y, z）指定一个矢量，作为旋转轴。  旋转轴和旋转中心点都基于坐标系设定，组件发生位移时，坐标系不会随之移动。  默认值: 在x、y、z都不指定时，x、y、z的默认值分别为0、0、1。指定了x、y、z任何一个值时，x、y、z中未指定的值默认为0。  {  centerX: '50%',  centerY: '50%',  centerZ: 0,  perspective: 0  }  单位：vp"]
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
      id: "rotate18",
      children: "rotate18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rotate(options: Optional<RotateOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件旋转。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rotate",
        children: "rotate"
      }), "相比，options参数新增了对undefined类型的支持。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rotateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RotateOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可使组件在以组件左上角为坐标原点的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
              children: "组件坐标系"
            }), "中进行旋转（坐标系如下图所示）。其中，(x, y, z）指定一个矢量，作为旋转轴。  旋转轴和旋转中心点都基于坐标系设定，组件发生位移时，坐标系不会随之移动。  默认值: 在x、y、z都不指定时，x、y、z的默认值分别为0、0、1。指定了x、y、z任何一个值时，x、y、z中未指定的值默认为0。  {  centerX: '50%',  centerY: '50%',  centerZ: 0,  perspective: 0  }  单位：vp  。  当options的值为undefined时，恢复为无旋转效果。"]
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
      id: "rotate20",
      children: "rotate20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rotate(options: Optional<RotateOptions | RotateAngleOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件旋转效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rotate18",
        children: "rotate"
      }), "相比，options参数新增了对RotateAngleOptions类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rotateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RotateOptions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rotateangleoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RotateAngleOptions"
            }), ">"]
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
      id: "translate",
      children: "translate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "translate(value: TranslateOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件平移。"
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
              href: "#translateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TranslateOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可使组件在以组件左上角为坐标原点的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
              children: "组件坐标系"
            }), "中进行移动（坐标系如下图所示）。其中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移动，值为负时表示向对应轴的反向移动。移动距离支持数字和字符串（比如'10px'，'10%'）两种类型。  默认值:  {  x: 0,  y: 0,  z: 0  }  单位：vp    ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  z轴方向移动时由于观察点位置不变，z的值接近观察点组件会有放大效果，远离则缩小。"]
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
      id: "translate18",
      children: "translate18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "translate(translate: Optional<TranslateOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件平移。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#translate",
        children: "translate"
      }), "相比，translate参数新增了对undefined类型的支持。"]
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
            children: "translate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#translateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TranslateOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可使组件在以组件左上角为坐标原点的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
              children: "组件坐标系"
            }), "中进行移动（坐标系如下图所示）。其中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移动，值为负时表示向对应轴的反向移动。移动距离支持数字和字符串（比如'10px'，'10%'）两种类型。  默认值:  {  x: 0,  y: 0,  z: 0  }  单位：vp    ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  z轴方向移动时由于观察点位置不变，z的值接近观察点组件会有放大效果，远离则缩小。    当translate的值为undefined时，恢复为无平移效果。"]
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
      id: "scale",
      children: "scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scale(value: ScaleOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件缩放。"
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
              href: "#scaleoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ScaleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。  默认值:  {  x: 1,  y: 1,  z: 1,  centerX:'50%',  centerY:'50%'  }"
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
      id: "scale18",
      children: "scale18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scale(options: Optional<ScaleOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件缩放。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scale",
        children: "scale"
      }), "相比，options参数新增了对undefined类型的支持。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scaleoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ScaleOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。  默认值:  {  x: 1,  y: 1,  z: 1,  centerX:'50%',  centerY:'50%'  }  当options的值为undefined时，恢复为无缩放效果。"
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
      id: "transform",
      children: "transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transform(value: object): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可用于显示二维变换时的矩阵变换。包含三维变换时应使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#transform3d20",
        children: "transform3D"
      }), "接口。"]
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
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件的变换矩阵。object当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-matrix4/js-apis-matrix4#matrix4transit",
              children: "Matrix4Transit"
            }), "矩阵对象类型。"]
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
      id: "transform18",
      children: "transform18+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["transform(transform: Optional", (0,jsx_runtime.jsxs)(_components.object, {
        children: ["): T", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可用于显示二维变换时的矩阵变换。包含三维变换时应使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#transform3d20",
            children: "transform3D"
          }), "接口。与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#transform",
            children: "transform"
          }), "相比，transform18+参数新增了对undefined类型的支持。"]
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
                children: "transform"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
                  children: "Optional"
                }), (0,jsx_runtime.jsx)(_components.object, {})]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["设置当前组件的变换矩阵。object当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/ui/js-apis-matrix4/js-apis-matrix4#matrix4transit",
                  children: "Matrix4Transit"
                }), "矩阵对象类型。  当transform的值为undefined时，恢复为单位矩阵的效果。"]
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
          id: "transform3d20",
          children: "transform3D20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "transform3D(transform: Optional<Matrix4Transit>): T"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置组件的三维变换矩阵。当涉及包含透视效果的三维变换时，transform接口显示效果可能有误，推荐使用transform3D接口。"
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
                children: "transform"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
                  children: "Optional"
                }), "<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#matrix4transit20",
                  children: "Matrix4Transit"
                }), ">"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "三维变换矩阵。  当transform的值为undefined时，恢复为单位矩阵的效果。"
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
          id: "matrix4transit20",
          children: "Matrix4Transit20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type Matrix4Transit = Matrix4Transit"
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
                  href: "/ref/arkui-api/arkui-arkts/ui/js-apis-matrix4/js-apis-matrix4#matrix4transit",
                  children: "Matrix4Transit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单位矩阵对象。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "rotateoptions对象说明",
          children: "RotateOptions对象说明"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件旋转参数。"
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
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["旋转轴向量x坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "卡片能力："
                  })
                }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["旋转轴向量y坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "卡片能力："
                  })
                }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["旋转轴向量z坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "卡片能力："
                  })
                }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "angle"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "centerX"
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
                children: "centerY"
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
                children: "centerZ10+"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["z轴锚点，即3D旋转中心点的z轴分量。  默认值：0  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "卡片能力："
                  })
                }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "perspective10+"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。  旋转轴和旋转中心点都基于", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
                  children: "组件坐标系"
                }), "设定，组件发生位移时，坐标系不会随之移动。  默认值：0  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "卡片能力："
                  })
                }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "rotateangleoptions20对象说明",
          children: "RotateAngleOptions20+对象说明"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定各轴旋转角的旋转参数选项。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
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
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "angleX"
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
                children: "angleY"
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
                children: "angleZ"
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
                children: "centerX"
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
                children: "centerY"
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
                children: "centerZ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "z轴锚点，即3D旋转中心点的z轴分量。  默认值：0  单位：px  取值范围：(-∞, +∞)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "perspective"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。  旋转轴和旋转中心点都基于", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/arkui-glossary#%E7%BB%84%E4%BB%B6%E5%9D%90%E6%A0%87%E7%B3%BB",
                  children: "组件坐标系"
                }), "设定，组件发生位移时，坐标系不会随之移动。  默认值：0  单位：px  取值范围：(-∞, +∞)"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "translateoptions对象说明",
          children: "TranslateOptions对象说明"
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
                children: "x"
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
                children: "y"
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
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "scaleoptions对象说明",
          children: "ScaleOptions对象说明"
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
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "centerX"
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
                children: "centerY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(856872)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当组件同时设置了", (0,jsx_runtime.jsx)(_components.a, {
            href: "#rotate",
            children: "rotate"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "#scale",
            children: "scale"
          }), "属性时，centerX和centerY的取值会发生冲突，此时centerX和centerY的值以最后设定的属性的值为准。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "示例",
          children: "示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "示例1为组件添加图形变换效果",
          children: "示例1（为组件添加图形变换效果）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#rotate",
            children: "rotate"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#translate",
            children: "translate"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#scale",
            children: "scale"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#transform",
            children: "transform"
          }), "为组件添加旋转、平移、缩放、变换矩阵效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { matrix4 } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TransformExample {\n  build() {\n    Column() {\n      Text('rotate').width('90%').fontColor(0xCCCCCC).padding(15).fontSize(14)\n      Row()\n        .rotate({\n          x: 0,\n          y: 0,\n          z: 1,\n          centerX: '50%',\n          centerY: '50%',\n          angle: 300\n        })// 组件以矢量(0,0,1)为旋转轴，绕中心点顺时针旋转300度\n        .width(100).height(100).backgroundColor(0xAFEEEE)\n\n      Text('translate').width('90%').fontColor(0xCCCCCC).padding(10).fontSize(14)\n      Row()\n        .translate({ x: 100, y: 10 })// x轴方向平移100，y轴方向平移10\n        .width(100)\n        .height(100)\n        .backgroundColor(0xAFEEEE)\n        .margin({ bottom: 10 })\n\n      Text('scale').width('90%').fontColor(0xCCCCCC).padding(15).fontSize(14)\n      Row()\n        .scale({ x: 2, y: 0.5 })// 高度缩小一倍，宽度放大一倍，z轴在2D下无效果\n        .width(100).height(100).backgroundColor(0xAFEEEE)\n\n      Text('Matrix4').width('90%').fontColor(0xCCCCCC).padding(15).fontSize(14)\n      Row()\n        .width(100).height(100).backgroundColor(0xAFEEEE)\n        .transform(matrix4.identity().translate({ x: 50, y: 50 }).scale({ x: 1.5, y: 1 }).rotate({\n          x: 0,\n          y: 0,\n          z: 1,\n          angle: 60\n        }))\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(300180)/* ["default"] */.A) + "",
            width: "372",
            height: "753"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "示例2设置旋转视距",
          children: "示例2（设置旋转视距）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#rotateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "perspective"
          }), "为组件添加视距效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State prep: number = 10;\n\n  build() {\n    Row() {\n      Column() {\n        Stack()\n          .width(100)\n          .height(100)\n          .backgroundColor(Color.Red)\n          .rotate({ y: 1, angle: 45, perspective: this.prep })\n        Button('change prep')\n          .margin({ top: 100 })\n          .onClick(() => {\n            this.getUIContext()?.animateTo({\n              duration: 2000,\n              curve: Curve.EaseIn,\n              iterations: 1,\n              playMode: PlayMode.Normal,\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.prep = 500 // 组件视距从10变换到500\n            })\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(849041)/* ["default"] */.A) + "",
            width: "432",
            height: "412"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "示例3按中心点旋转",
          children: "示例3（按中心点旋转）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "#rotate",
            children: "rotate"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "#transform",
            children: "transform"
          }), "为不同的参数实现相同的旋转效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { matrix4 } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct MatrixExample {\n  build() {\n    Column({ space: 100 }) {\n      Text('Hello1')\n        .textAlign(TextAlign.Center)\n        .width(100)\n        .height(60)\n        .backgroundColor(0xAFEEEE)\n        .borderWidth(1)\n\n      Text('Hello2')\n        .textAlign(TextAlign.Center)\n        .width(100)\n        .height(60)\n        .backgroundColor(0xAFEEEE)\n        .borderWidth(1)\n        .rotate({\n          // 绕(100vp,60vp)的锚点旋转90度，rotate或scale的centerX、centerY为组件锚点\n          z: 1,\n          angle: 90,\n          centerX: 100,\n          centerY: 60\n        })\n\n      Text('Hello3')\n        .textAlign(TextAlign.Center)\n        .width(100)\n        .height(60)\n        .backgroundColor(0xAFEEEE)\n        .borderWidth(1)\n        .transform(matrix4.identity()\n          .rotate({\n            // 组件锚点(centerX,centerY)默认为(50%,50%)，即锚点在(50vp,30vp)\n            // transform的rotate指定(centerX,centerY)为(50vp,30vp)，相对于在组件本身锚点基础上再额外偏移(50vp,30vp)\n            // 此次变换相当于绕(100vp,60vp)旋转，和\"Hello2\"实现同样的旋转效果\n            z: 1,\n            angle: 90,\n            centerX: this.getUIContext().vp2px(50),\n            centerY: this.getUIContext().vp2px(30)\n          }))\n\n      Text('Hello4')\n        .textAlign(TextAlign.Center)\n        .width(100)\n        .height(60)\n        .backgroundColor(0xAFEEEE)\n        .borderWidth(1)\n        .scale({\n          // 当设置x或y时，centerX和centerY才能生效\n          // 设置组件锚点为(100vp,60vp)\n          x: 1,\n          y: 1,\n          centerX: 100,\n          centerY: 60\n        })// transform的rotate不指定centerX、centerY，此次旋转的中心相对于组件本身锚点没有额外偏移\n          // 该组件通过scale设置的锚点，绕(100vp,60vp)进行旋转，和\"Hello2\"实现同样的旋转效果\n        .transform(matrix4.identity().rotate({ z: 1, angle: 90 }))\n    }.width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(184166)/* ["default"] */.A) + "",
            width: "290",
            height: "583"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "示例4通过transform3d实现图形变换",
          children: "示例4（通过transform3D实现图形变换）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "#transform3d20",
            children: "transform3D"
          }), "实现图形变换效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { matrix4 } from '@kit.ArkUI';\n\nlet matrix: matrix4.Matrix4Transit = matrix4.init([\n  0.53033, 0, -0.53033, 0.00053033,\n  0, 0.75, 0, 0,\n  0.707107, 0, 0.707107, -0.000707107,\n  0, 0, 0, 1\n])\n\n@Entry\n@Component\nstruct Tests {\n  build() {\n    Column() {\n      Stack() {\n        Stack()\n          .width(200)\n          .height(100)\n          .backgroundColor(Color.Grey)\n        Stack()\n          .width(200)\n          .height(100)\n          .backgroundColor(Color.Blue)\n          .transform3D(matrix)\n      }\n    }.width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(597393)/* ["default"] */.A) + "",
            width: "219",
            height: "110"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "示例5按各轴旋转角的方式实现旋转",
          children: "示例5（按各轴旋转角的方式实现旋转）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，该示例通过设置rotate的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#rotateangleoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "RotateAngleOptions"
          }), "参数实现旋转效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Stack()\n          .width(100)\n          .height(100)\n          .backgroundColor(Color.Blue)\n          .rotate({ angleZ: -45 })\n        Button('rotateAngle')\n          .width(\"40%\")\n          .margin({ top: 100 })\n          .rotate({ angleY: 30, centerX: '90%', perspective: 10 })\n        Image($r(\"app.media.startIcon\"))\n          .width(200)\n          .height(200)\n          .rotate({\n            angleX: 60,\n            angleY: -125,\n            angleZ: 75,\n            centerX: 100,\n            centerZ: 20\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(396050)/* ["default"] */.A) + "",
            width: "354",
            height: "768"
          })
        }), "\n"]
      })]
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
551821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
856872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
300180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799858-0c9e3de9a0c2a67c9a59852c339f940f.png");

},
849041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439553-57dc9a4d7b12a6f66ba230b31a9321f9.gif");

},
396050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799860-dd352acbbab4d3bdab6a63a59ad6b16b.png");

},
184166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959508-f81662f528727f73cb17056560ee607e.png");

},
597393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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