"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["291369"], {
426846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_image_effect_ts_universal_attributes_image_effect_md_a2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-visual-effect-property-ts-universal-attributes-image-effect-ts-universal-attributes-image-effect-md-a2f.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_image_effect_ts_universal_attributes_image_effect_md_a2f_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect","title":"图像效果","description":"设置组件的模糊、阴影、球面效果以及设置图片的图像效果。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"图像效果","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-image-effect"},"sidebar":"ref","previous":{"title":"图形变换","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation"},"next":{"title":"形状裁剪","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect.md


const frontMatter = {
	title: '图像效果',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-image-effect'
};
const contentTitle = '图像效果';

const assets = {

};



const toc = [{
  "value": "blur",
  "id": "blur",
  "level": 2
}, {
  "value": "blur18+",
  "id": "blur18",
  "level": 2
}, {
  "value": "blur19+",
  "id": "blur19",
  "level": 2
}, {
  "value": "shadow",
  "id": "shadow",
  "level": 2
}, {
  "value": "shadow18+",
  "id": "shadow18",
  "level": 2
}, {
  "value": "grayscale",
  "id": "grayscale",
  "level": 2
}, {
  "value": "grayscale18+",
  "id": "grayscale18",
  "level": 2
}, {
  "value": "brightness",
  "id": "brightness",
  "level": 2
}, {
  "value": "brightness18+",
  "id": "brightness18",
  "level": 2
}, {
  "value": "saturate",
  "id": "saturate",
  "level": 2
}, {
  "value": "saturate18+",
  "id": "saturate18",
  "level": 2
}, {
  "value": "contrast",
  "id": "contrast",
  "level": 2
}, {
  "value": "contrast18+",
  "id": "contrast18",
  "level": 2
}, {
  "value": "invert",
  "id": "invert",
  "level": 2
}, {
  "value": "invert18+",
  "id": "invert18",
  "level": 2
}, {
  "value": "sepia",
  "id": "sepia",
  "level": 2
}, {
  "value": "sepia18+",
  "id": "sepia18",
  "level": 2
}, {
  "value": "hueRotate",
  "id": "huerotate",
  "level": 2
}, {
  "value": "hueRotate18+",
  "id": "huerotate18",
  "level": 2
}, {
  "value": "colorBlend",
  "id": "colorblend",
  "level": 2
}, {
  "value": "colorBlend18+",
  "id": "colorblend18",
  "level": 2
}, {
  "value": "linearGradientBlur12+",
  "id": "lineargradientblur12",
  "level": 2
}, {
  "value": "linearGradientBlur18+",
  "id": "lineargradientblur18",
  "level": 2
}, {
  "value": "renderGroup10+",
  "id": "rendergroup10",
  "level": 2
}, {
  "value": "renderGroup18+",
  "id": "rendergroup18",
  "level": 2
}, {
  "value": "blendMode11+",
  "id": "blendmode11",
  "level": 2
}, {
  "value": "blendMode18+",
  "id": "blendmode18",
  "level": 2
}, {
  "value": "BlendApplyType11+枚举说明",
  "id": "blendapplytype11枚举说明",
  "level": 2
}, {
  "value": "useShadowBatching11+",
  "id": "useshadowbatching11",
  "level": 2
}, {
  "value": "useShadowBatching18+",
  "id": "useshadowbatching18",
  "level": 2
}, {
  "value": "sphericalEffect12+",
  "id": "sphericaleffect12",
  "level": 2
}, {
  "value": "sphericalEffect18+",
  "id": "sphericaleffect18",
  "level": 2
}, {
  "value": "lightUpEffect12+",
  "id": "lightupeffect12",
  "level": 2
}, {
  "value": "lightUpEffect18+",
  "id": "lightupeffect18",
  "level": 2
}, {
  "value": "pixelStretchEffect12+",
  "id": "pixelstretcheffect12",
  "level": 2
}, {
  "value": "pixelStretchEffect18+",
  "id": "pixelstretcheffect18",
  "level": 2
}, {
  "value": "PixelStretchEffectOptions10+",
  "id": "pixelstretcheffectoptions10",
  "level": 2
}, {
  "value": "systemBarEffect12+",
  "id": "systembareffect12",
  "level": 2
}, {
  "value": "ShadowType10+枚举说明",
  "id": "shadowtype10枚举说明",
  "level": 2
}, {
  "value": "ShadowOptions对象说明",
  "id": "shadowoptions对象说明",
  "level": 2
}, {
  "value": "ShadowStyle10+枚举说明",
  "id": "shadowstyle10枚举说明",
  "level": 2
}, {
  "value": "BlendMode11+枚举说明",
  "id": "blendmode11枚举说明",
  "level": 2
}, {
  "value": "LinearGradientBlurOptions12+",
  "id": "lineargradientbluroptions12",
  "level": 2
}, {
  "value": "FractionStop12+",
  "id": "fractionstop12",
  "level": 2
}, {
  "value": "InvertOptions11+对象说明",
  "id": "invertoptions11对象说明",
  "level": 2
}, {
  "value": "BackgroundImageOptions18+",
  "id": "backgroundimageoptions18",
  "level": 2
}, {
  "value": "freeze12+",
  "id": "freeze12",
  "level": 2
}, {
  "value": "freeze18+",
  "id": "freeze18",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置图片不同属性效果）",
  "id": "示例1设置图片不同属性效果",
  "level": 3
}, {
  "value": "示例2（设置组件线性渐变模糊效果）",
  "id": "示例2设置组件线性渐变模糊效果",
  "level": 3
}, {
  "value": "示例3（设置离屏渲染效果）",
  "id": "示例3设置离屏渲染效果",
  "level": 3
}, {
  "value": "示例4（当前组件内容与下方画布内容混合）",
  "id": "示例4当前组件内容与下方画布内容混合",
  "level": 3
}, {
  "value": "示例5（前景智能取反色）",
  "id": "示例5前景智能取反色",
  "level": 3
}, {
  "value": "示例6（设置同层阴影不重叠效果）",
  "id": "示例6设置同层阴影不重叠效果",
  "level": 3
}, {
  "value": "示例7（设置组件图像球面效果）",
  "id": "示例7设置组件图像球面效果",
  "level": 3
}, {
  "value": "示例8（设置组件图像渐亮效果）",
  "id": "示例8设置组件图像渐亮效果",
  "level": 3
}, {
  "value": "示例9（设置组件图像边缘像素扩展效果）",
  "id": "示例9设置组件图像边缘像素扩展效果",
  "level": 3
}, {
  "value": "示例10（系统导航条智能反色）",
  "id": "示例10系统导航条智能反色",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    number: "number",
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
        id: "图像效果",
        children: "图像效果"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的模糊、阴影、球面效果以及设置图片的图像效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(305024)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blur",
      children: "blur"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blur(value: number, options?: BlurOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加内容模糊效果。"
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#bluroptions11",
              children: "BlurOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。  默认值：grayscale: [0,0]"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blur18",
      children: "blur18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blur(blurRadius: Optional<number>, options?: BlurOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加内容模糊效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blur",
        children: "blur"
      }), "相比，blurRadius参数新增了对undefined类型的支持。"]
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
            children: "blurRadius"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。  当blurRadius的值为undefined时，维持之前取值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#bluroptions11",
              children: "BlurOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。  默认值：grayscale: [0,0]"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blur19",
      children: "blur19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加内容模糊效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blur18",
        children: "blur18+"
      }), "相比，新增了sysOptions参数，即支持系统自适应调节参数。"]
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
            children: "blurRadius"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。  当blurRadius的值为undefined时，维持之前取值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#bluroptions11",
              children: "BlurOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。  默认值：grayscale: [0,0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sysOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#systemadaptiveoptions19",
              children: "SystemAdaptiveOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自适应调节参数。  默认值：{ disableSystemAdaptation: false }"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shadow",
      children: "shadow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shadow(value: ShadowOptions | ShadowStyle): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加阴影效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用，ArkTS卡片上不支持参数为 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ShadowStyle"
      }), "类型。"]
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
              href: "#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ShadowStyle"
            }), "10+"]
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
      id: "shadow18",
      children: "shadow18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shadow(options: Optional<ShadowOptions | ShadowStyle>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加阴影效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#shadow",
        children: "shadow"
      }), "相比，options参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用，ArkTS卡片上不支持参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ShadowStyle"
      }), "类型。"]
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
              href: "#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ShadowStyle"
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
      id: "grayscale",
      children: "grayscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "grayscale(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加灰度效果。值定义为灰度转换的比例，入参1.0则完全转为灰度图像，入参0.0则图像无变化，入参在0.0和1.0之间时，效果呈线性变化。  取值范围：[0.0, 1.0]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0.0的值时，按值为0.0处理，设置大于1.0的值时，按值为1.0处理。"]
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
      id: "grayscale18",
      children: "grayscale18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "grayscale(grayscale: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加灰度效果。上层渲染灰度会覆盖下层子组件渲染。不通过该接口设置时，默认无变化。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#grayscale",
        children: "grayscale"
      }), "相比，grayscale参数新增了对undefined类型的支持。"]
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
            children: "grayscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加灰度效果。值定义为灰度转换的比例，入参1.0则完全转为灰度图像，入参0.0则图像无变化，入参在0.0和1.0之间时，效果呈线性变化。  取值范围：[0.0, 1.0]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0.0的值时，按值为0.0处理，设置大于1.0的值时，按值为1.0处理。  当grayscale的值为undefined时，取默认值0.0。恢复为无灰度效果。"]
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
      id: "brightness",
      children: "brightness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brightness(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加高光效果。不通过该接口设置时，默认无变化。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。  取值范围：[0, +∞)  推荐取值范围：[0, 2]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。"]
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
      id: "brightness18",
      children: "brightness18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brightness(brightness: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加高光效果。不通过该接口设置时，默认无变化。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#brightness",
        children: "brightness"
      }), "相比，brightness参数新增了对undefined类型的支持。"]
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
            children: "brightness"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加高光效果，入参为高光比例，值为1时没有效果，小于1时亮度变暗，小于或等于0为全黑，大于1时亮度增加，数值越大亮度越大，亮度大于或等于2时会变为全白。  取值范围：[0, +∞)  推荐取值范围：[0, 2]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。  当brightness的值为undefined时，恢复为亮度为1的高光效果。"]
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
      id: "saturate",
      children: "saturate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "saturate(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加饱和度效果。不通过该接口设置时，默认无变化。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。  推荐取值范围：[0, 50)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。"]
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
      id: "saturate18",
      children: "saturate18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "saturate(saturate: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加饱和度效果。不通过该接口设置时，默认无变化。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#saturate",
        children: "saturate"
      }), "相比，saturate参数新增了对undefined类型的支持。"]
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
            children: "saturate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加饱和度效果，饱和度为颜色中的含色成分和消色成分(灰)的比例，入参为1时，显示原图像，大于1时含色成分越大，饱和度越大，小于1时消色成分越大，饱和度越小。  推荐取值范围：[0, 50)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。  当saturate的值为undefined时。恢复为饱和度为1的效果。"]
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
      id: "contrast",
      children: "contrast"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contrast(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加对比度效果。不通过该接口设置时，默认无变化。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。  推荐取值范围：[0, 10)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。"]
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
      id: "contrast18",
      children: "contrast18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contrast(contrast: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加对比度效果。不通过该接口设置时，默认无变化。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contrast",
        children: "contrast"
      }), "相比，contrast参数新增了对undefined类型的支持。"]
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
            children: "contrast"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为当前组件添加对比度效果，入参为对比度的值。值为1时，显示原图，大于1时，值越大对比度越高，图像越清晰醒目，小于1时，值越小对比度越低，当对比度为0时，图像变为全灰。  推荐取值范围：[0, 10)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置小于0的值时，按值为0处理。  当contrast的值为undefined时，恢复为对比度为1的效果。"]
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
      id: "invert",
      children: "invert"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invert(value: number | InvertOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反转输入的图像。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#invertoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InvertOptions"
            }), "11+"]
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
      id: "invert18",
      children: "invert18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invert(options: Optional<number | InvertOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["反转输入的图像。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#invert",
        children: "invert"
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
            }), "<number"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#invertoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InvertOptions"
            }), "11+>"]
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
      id: "sepia",
      children: "sepia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sepia(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图像转换为深褐色。"
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
            children: "将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮且色彩更加偏黄/偏红，但不属于标准sepia效果。  取值范围：[0, +∞)，推荐取值范围：(0, 1]。"
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
      id: "sepia18",
      children: "sepia18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sepia(sepia: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将图像转换为深褐色。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sepia",
        children: "sepia"
      }), "相比，sepia参数新增了对undefined类型的支持。"]
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
            children: "sepia"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将图像转换为深褐色，降低色彩度，产生温暖复古的图像风格。入参为褐色滤镜强度，值为1则完全是深褐色的，值小于等于0则图像无变化，值大于1会进一步放大色彩偏移比例，图像整体会变得更亮且色彩更加偏黄/偏红，但不属于标准sepia效果。  当sepia的值为undefined时，恢复为图像无变化的效果。  取值范围：[0, +∞)，推荐取值范围：(0, 1]。"
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
      id: "huerotate",
      children: "hueRotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hueRotate(value: number | string): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "色相旋转效果。不通过该接口设置时，默认无变化。"
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
      id: "huerotate18",
      children: "hueRotate18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hueRotate(rotation: Optional<number | string>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["色相旋转效果。不通过该接口设置时，默认无变化。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#huerotate",
        children: "hueRotate"
      }), "相比，rotation参数新增了对undefined类型的支持。"]
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
            children: "rotation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<number"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string>"
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
      id: "colorblend",
      children: "colorBlend"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "colorBlend(value: Color | string | Resource): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加颜色叠加效果。"
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
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            })
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
      id: "colorblend18",
      children: "colorBlend18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "colorBlend(color: Optional<Color | string | Resource>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加颜色叠加效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorblend",
        children: "colorBlend"
      }), "相比，color参数新增了对undefined类型的支持。"]
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
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            }), ">"]
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
      id: "lineargradientblur12",
      children: "linearGradientBlur12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "linearGradientBlur(value: number, options: LinearGradientBlurOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件添加内容线性渐变模糊效果。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为模糊半径，模糊半径越大越模糊，为0时不模糊。  取值范围：[0, 1000]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#lineargradientbluroptions12",
              children: "LinearGradientBlurOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置线性渐变模糊效果。  线性渐变参数，包含模糊程度和模糊位置数组fractionStops，及渐变模糊方向direction。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lineargradientblur18",
      children: "linearGradientBlur18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加内容线性渐变模糊效果。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineargradientblur12",
        children: "linearGradientBlur12+"
      }), "相比，新增了对undefined类型的支持。"]
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
            children: "blurRadius"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为模糊半径，模糊半径越大越模糊，为0时不模糊。  取值范围：[0, 1000]  当blurRadius的值为undefined时，恢复为渐变模糊为0的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lineargradientbluroptions12",
              children: "LinearGradientBlurOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置线性渐变模糊效果。  线性渐变参数，包含模糊程度和模糊位置数组fractionStops，及渐变模糊方向direction。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rendergroup10",
      children: "renderGroup10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "renderGroup(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件的不透明度不为1时，绘制效果可能有差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不设置该属性时，默认不组成节点组。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "设置当前组件和子组件是否组成节点组。  false表示不组成节点组，不进行离屏渲染直接绘制。  true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件融合绘制。"
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
      id: "rendergroup18",
      children: "renderGroup18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "renderGroup(isGroup: Optional<boolean>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否组成节点组。节点组表示当前组件和子组件组成的子树先在离屏画布中渲染，再与父组件融合绘制。设置为节点组后，系统会缓存绘制结果，提升性能。但如果节点组内的组件频繁更新，缓存失效，可能导致性能下降。此外，设置为节点组后，当前组件的不透明度不为1时，绘制效果可能有差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rendergroup10",
        children: "renderGroup10+"
      }), "相比，isGroup参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不设置该属性时，默认不组成节点组。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "isGroup"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前组件和子组件是否组成节点组。  false表示不组成节点组，不进行离屏渲染直接绘制。  true表示当前组件和子组件组成节点组，进行离屏渲染后再与父组件融合绘制。  当isGroup的值为undefined时，按照不组成节点组处理。"
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
      id: "blendmode11",
      children: "blendMode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blendMode(value: BlendMode, type?: BlendApplyType): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前控件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#blendmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BlendMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混合模式。  默认值：BlendMode.NONE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  混合模式设置为BlendMode.NONE时，blend效果实际为默认的BlendMode.SRC_OVER，且BlendApplyType不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#blendapplytype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BlendApplyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["blendMode实现方式是否离屏。  默认值：BlendApplyType.FAST  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 设置BlendApplyType.FAST时，不离屏。  2. 设置BlendApplyType.OFFSCREEN时，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下方画布已有内容进行混合。使用该实现方式时，将导致", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lineargradientblur12",
              children: "linearGradientBlur12+"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffect11",
              children: "backgroundEffect"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#brightness",
              children: "brightness"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#blur",
              children: "blur"
            }), "等需要截屏的接口无法截取到正确的画面。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blendmode18",
      children: "blendMode18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将当前控件的内容（包含子节点内容）与下方画布（可能为离屏画布）已有内容进行混合。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blendmode11",
        children: "blendMode11+"
      }), "相比，mode参数新增了对undefined类型的支持。"]
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
            children: "mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#blendmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BlendMode"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混合模式。  默认值：BlendMode.NONE  当mode的值为undefined时，恢复为内容不进行混合的效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  混合模式设置为BlendMode.NONE时，blend效果实际为默认的BlendMode.SRC_OVER，且BlendApplyType不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#blendapplytype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BlendApplyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["blendMode实现方式是否离屏。  默认值：BlendApplyType.FAST  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 设置BlendApplyType.FAST时，不离屏。  2. 设置BlendApplyType.OFFSCREEN时，会创建当前组件大小的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再用指定的混合模式与下方画布已有内容进行混合。使用该实现方式时，将导致", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lineargradientblur12",
              children: "linearGradientBlur12+"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffect11",
              children: "backgroundEffect"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#brightness",
              children: "brightness"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#blur",
              children: "blur"
            }), "等需要截屏的接口无法截取到正确的画面。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blendapplytype11枚举说明",
      children: "BlendApplyType11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指示如何将指定的混合模式应用于视图的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "FAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在目标图像上按顺序混合视图的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFFSCREEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "useshadowbatching11",
      children: "useShadowBatching11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "useShadowBatching(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控件内部子节点的阴影进行同层绘制，同层元素阴影重叠。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
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
            children: ["控件内部子节点的阴影是否进行同层绘制。  默认值：false  true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。  false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子节点阴影之上。 当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。  2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。"]
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
      id: "useshadowbatching18",
      children: "useShadowBatching18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "useShadowBatching(use: Optional<boolean>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["控件内部子节点的阴影进行同层绘制，同层元素阴影重叠。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#useshadowbatching11",
        children: "useShadowBatching11+"
      }), "相比，use参数新增了对undefined类型的支持。"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控件内部子节点的阴影是否进行同层绘制。  默认值：false  true：控件内部子节点的阴影进行同层绘制，子节点的阴影不会产生重叠覆盖效果。  false：控件内部子节点的阴影不进行同层绘制，子节点的阴影重叠区域有覆盖效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 默认不开启，如果子节点的阴影半径较大，阴影有重叠区域，后绘制的子节点阴影会覆盖在之前绘制的子节点阴影之上。 当开启时，子节点的阴影将同时绘制，不会产生覆盖效果。  2. 不推荐useShadowBatching嵌套使用，如果嵌套使用，只会对当前的子节点生效，无法递推。  当use的值为undefined时，恢复为不使用元素阴影重叠的效果。"]
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
      id: "sphericaleffect12",
      children: "sphericalEffect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sphericalEffect(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的图像球面化程度。"
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
            children: ["设置组件的图像球面化程度。  取值范围：[0,1]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果value等于0则图像保持原样，如果value等于1则图像为完全球面化效果。在0和1之间，数值越大，则球面化程度越高。  value < 0 或者 value > 1为异常情况，value < 0按0处理，value > 1按1处理。  2. 组件阴影和外描边不支持球面效果。  3. 设置value大于0时，组件冻屏并且把组件内容绘制到透明离屏buffer上，如果要更新组件属性则需要把value设置为0。"]
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
      id: "sphericaleffect18",
      children: "sphericalEffect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sphericalEffect(effect: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件的图像球面化程度。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sphericaleffect12",
        children: "sphericalEffect12+"
      }), "相比，effect参数新增了对undefined类型的支持。"]
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
            children: "effect"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件的图像球面化程度。  取值范围：[0,1]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果value等于0则图像保持原样，如果value等于1则图像为完全球面化效果。在0和1之间，数值越大，则球面化程度越高。  effect < 0 或者 effect > 1为异常情况，effect < 0按0处理，effect > 1按1处理。  2. 组件阴影和外描边不支持球面效果。  3. 设置effect大于0时，组件冻屏并且把组件内容绘制到透明离屏buffer上，如果要更新组件属性则需要把effect设置为0。  当effect的值为undefined时，恢复为图像球面化程度为0的效果。"]
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
      id: "lightupeffect12",
      children: "lightUpEffect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lightUpEffect(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件图像亮起程度。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件图像亮起程度。  取值范围：[0,1]。  如果value等于0则图像为全黑，如果value等于1则图像为全亮效果。0到1之间数值越大，表示图像亮度越高。value < 0 或者 value > 1为异常情况，value < 0按0处理，value > 1按1处理。"
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
      id: "lightupeffect18",
      children: "lightUpEffect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lightUpEffect(degree: Optional<number>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件图像亮起程度。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lightupeffect12",
        children: "lightUpEffect12+"
      }), "相比，degree参数新增了对undefined类型的支持。"]
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
            children: "degree"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件图像亮起程度。  取值范围：[0,1]。  如果value等于0则图像为全黑，如果value等于1则图像为全亮效果。0到1之间数值越大，表示图像亮度越高。degree < 0 或者 degree > 1为异常情况，degree < 0按0处理，degree > 1按1处理。  当degree的值为undefined时，恢复为亮起为1的效果。"
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
      id: "pixelstretcheffect12",
      children: "pixelStretchEffect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixelStretchEffect(options: PixelStretchEffectOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的图像边缘像素扩展距离。"
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
              href: "#pixelstretcheffectoptions10",
              children: "PixelStretchEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件的图像边缘像素扩展距离。  参数options包括上下左右四个方向的边缘像素扩展距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果距离为正值，表示向外扩展，放大原来图像大小。上下左右四个方向分别用边缘像素填充，填充的距离即为设置的边缘扩展的距离。  2. 如果距离为负值，表示内缩，但是最终图像大小不变。  内缩方式：  图像根据options的设置缩小，缩小大小为四个方向边缘扩展距离的绝对值。  图像用边缘像素扩展到原来大小。  3. 对options的输入约束：  上下左右四个方向的扩展统一为非正值或者非负值。即四个边同时向外扩或者内缩，方向一致。  所有方向的输入均为百分比或者具体值，不支持百分比和具体值混用。  所有异常情况下，显示为{0, 0, 0, 0}效果，即跟原图保持一致。"]
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
      id: "pixelstretcheffect18",
      children: "pixelStretchEffect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件的图像边缘像素扩展距离。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pixelstretcheffect12",
        children: "pixelStretchEffect12+"
      }), "相比，options参数新增了对undefined类型的支持。"]
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
              href: "#pixelstretcheffectoptions10",
              children: "PixelStretchEffectOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件的图像边缘像素扩展距离。  参数options包括上下左右四个方向的边缘像素扩展距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果距离为正值，表示向外扩展，放大原来图像大小。上下左右四个方向分别用边缘像素填充，填充的距离即为设置的边缘扩展的距离。  2. 如果距离为负值，表示内缩，但是最终图像大小不变。  内缩方式：  图像根据options的设置缩小，缩小大小为四个方向边缘扩展距离的绝对值。  图像用边缘像素扩展到原来大小。  3. 对options的输入约束：  上下左右四个方向的扩展统一为非正值或者非负值。即四个边同时向外扩或者内缩，方向一致。  所有方向的输入均为百分比或者具体值，不支持百分比和具体值混用。  所有异常情况下，显示为{0, 0, 0, 0}效果，即跟原图保持一致。  当options的值为undefined时，恢复为无像素扩展效果。"]
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
      id: "pixelstretcheffectoptions10",
      children: "PixelStretchEffectOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "像素扩展属性集合，用于描述像素扩展的信息。"
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
            children: "left"
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
            children: "组件图像左边沿像素扩展距离。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
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
            children: "组件图像右边沿像素扩展距离。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
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
            children: "组件图像上边沿像素扩展距离。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
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
            children: "组件图像下边沿像素扩展距离。  默认值：0vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systembareffect12",
      children: "systemBarEffect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "systemBarEffect(): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据背景进行智能反色并且带有模糊效果。"
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
      id: "shadowtype10枚举说明",
      children: "ShadowType10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影类型。"
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
            children: "COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模糊。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shadowoptions对象说明",
      children: "ShadowOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。"
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
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowtype10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ShadowType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阴影类型。  默认值：COLOR  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#coloringstrategy10",
              children: "ColoringStrategy11+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offsetX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offsetY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阴影是否内部填充。true表示阴影在内部填充，false表示阴影在外部填充。  默认值：false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textshadow10",
              children: "textShadow"
            }), "中该字段不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shadowstyle10枚举说明",
      children: "ShadowStyle10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件阴影效果。"
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
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_DEFAULT_XS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超小阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_DEFAULT_SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_DEFAULT_MD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_DEFAULT_LG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_FLOATING_SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮动小阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTER_FLOATING_MD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮动中阴影。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "blendmode11枚举说明",
      children: "BlendMode11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混合模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791804)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blendMode枚举中，s表示源像素，d表示目标像素，sa表示源像素透明度，da表示目标像素透明度，r表示混合后像素，ra表示混合后像素透明度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "将上层图像直接覆盖到下层图像上，不进行任何混合操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLEAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将源像素覆盖的目标像素清除为完全透明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s，只显示源像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d，只显示目标像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRC_OVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s + (1 - sa) * d，将源像素按照透明度进行混合，覆盖在目标像素上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DST_OVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d + (1 - da) * s，将目标像素按照透明度进行混合，覆盖在源像素上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRC_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * da，只显示源像素中与目标像素重叠的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DST_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * sa，只显示目标像素中与源像素重叠的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRC_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * (1 - da)，只显示源像素中与目标像素不重叠的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DST_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * (1 - sa)，只显示目标像素中与源像素不重叠的部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRC_ATOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * da + d * (1 - sa)，在源像素和目标像素重叠的地方绘制源像素，在源像素和目标像素不重叠的地方绘制目标像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DST_ATOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * sa + s * (1 - da)，在源像素和目标像素重叠的地方绘制目标像素，在源像素和目标像素不重叠的地方绘制源像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * (1 - da) + d * (1 - sa)，在源像素和目标像素重叠的地方不显示像素，不重叠的地方显示源像素和目标像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = min(s + d, 1)，将源像素值与目标像素值相加，并将结果作为新的像素值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODULATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * d，将源像素与目标像素进行乘法运算，并将结果作为新的像素值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s + d - s * d，将两个图像的像素值相加，然后减去它们的乘积来实现混合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OVERLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据目标像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DARKEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rc = s + d - max(s * da, d * sa), ra = kSrcOver，当两个颜色重叠时，较暗的颜色会覆盖较亮的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIGHTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rc = s + d - min(s * da, d * sa), ra = kSrcOver，将源图像和目标图像中的像素进行比较，选取两者中较亮的像素作为最终的混合结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_DODGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使目标像素变得更亮来反映源像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_BURN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使目标像素变得更暗来反映源像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HARD_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据源像素的值来决定目标像素变得更亮或者更暗。根据源像素来决定使用MULTIPLY混合模式还是SCREEN混合模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOFT_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据源像素来决定使用LIGHTEN混合模式还是DARKEN混合模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIFFERENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生高对比度的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXCLUSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rc = s + d - 2 * (s * d), ra = kSrcOver，对比源像素和目标像素，亮度更高的像素减去亮度更低的像素，产生柔和的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MULTIPLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * (1 - da) + d * (1 - sa) + s * d，将源图像与目标图像进行乘法混合，得到一张新的图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留源图像的亮度和饱和度，但会使用目标图像的色调来替换源图像的色调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留目标像素的亮度和色调，但会使用源像素的饱和度来替换目标像素的饱和度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留源像素的饱和度和色调，但会使用目标像素的亮度来替换源像素的亮度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LUMINOSITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留目标像素的色调和饱和度，但会用源像素的亮度替换目标像素的亮度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lineargradientbluroptions12",
      children: "LinearGradientBlurOptions12+"
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
            children: "fractionStops"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fractionstop12",
              children: "FractionStop"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组中保存的每一个二元数组（取值0-1，小于0则为0，大于1则为1）表示[模糊程度, 模糊位置]；模糊位置需严格递增，开发者传入的数据不符合规范会记录日志，渐变模糊数组中二元数组个数必须大于等于2，否则渐变模糊不生效。"
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渐变模糊方向。  默认值：  GradientDirection.Bottom"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fractionstop12",
      children: "FractionStop12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type FractionStop = [ number, number ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义模糊段。"
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
            children: "[ number, number ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个number表示分数，值1表示不透明，0表示完全透明。  取值范围：[0, 1]  第二个number表示停止位置，值1表示区域结束位置，0表示区域开始位置。  取值范围：[0, 1]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invertoptions11对象说明",
      children: "InvertOptions11+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前景智能取反色。"
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
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景颜色灰度值大于阈值区间时的取值。  取值范围：[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景颜色灰度值小于阈值区间时的取值。  取值范围：[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰度阈值。  取值范围：[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thresholdRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阈值范围。  取值范围：[0, 1]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  灰度阈值上下偏移thresholdRange构成阈值区间，背景颜色灰度值在区间内取值由high线性渐变到low。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundimageoptions18",
      children: "BackgroundImageOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义背景图选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(583879)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["背景图片的同步加载可能会带来潜在性能问题，详情可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#image-1",
        children: "Image"
      }), "中说明。"]
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
            children: "syncLoad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。  默认值：false  false：异步加载图片。  true：同步加载图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagerepeat",
              children: "ImageRepeat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置背景图片的重复样式。默认值为ImageRepeat.NoRepeat。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "freeze12",
      children: "freeze12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "freeze(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10441)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当前控件的不透明度不为1时绘制效果可能有差异。  默认值：false  true时离屏渲染绘制后重复绘制缓存，false时离屏渲染绘制后不重复绘制缓存。"
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
      id: "freeze18",
      children: "freeze18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "freeze(freeze: Optional<boolean>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#freeze12",
        children: "freeze"
      }), "相比，freeze参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45833)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "freeze"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前控件和子控件是否整体离屏渲染绘制后重复绘制缓存，不再进行内部属性更新。当前控件的不透明度不为1时绘制效果可能有差异。  默认值：false  true时离屏渲染绘制后重复绘制缓存，false时离屏渲染绘制后不重复绘制缓存。  当freeze的值为undefined时，维持之前取值。"
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
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置图片不同属性效果",
      children: "示例1（设置图片不同属性效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的效果，包括阴影，灰度，高光，饱和度，对比度，图像反转，叠色，色相旋转等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ImageEffectsExample {\n  build() {\n    Column({ space: 5 }) {\n      // 添加阴影效果，图片效果不变\n      Text('shadow').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image'))\n        .width('90%')\n        .height(30)\n        .shadow({\n          radius: 10,\n          color: Color.Green,\n          offsetX: 20,\n          offsetY: 20\n        })\n\n      // 添加内部阴影效果\n      Text('shadow').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image'))\n        .width('90%')\n        .height(30)\n        .shadow({\n          radius: 5,\n          color: Color.Green,\n          offsetX: 20,\n          offsetY: 20,\n          fill: true\n        }).opacity(0.5)\n\n      // 灰度效果0~1，越接近1，灰度越明显\n      Text('grayscale').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).grayscale(0.3)\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).grayscale(0.8)\n\n      // 高光效果，1为正常图片，<1变暗，>1亮度增大\n      Text('brightness').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).brightness(1.2)\n\n      // 饱和度，原图为1\n      Text('saturate').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).saturate(2.0)\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).saturate(0.7)\n\n      // 对比度，1为原图，>1值越大越清晰，<1值越小越模糊\n      Text('contrast').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).contrast(2.0)\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).contrast(0.8)\n\n      // 图像反转比例\n      Text('invert').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).invert(0.2)\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).invert(0.8)\n\n      // 叠色添加\n      Text('colorBlend').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).colorBlend(Color.Green)\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).colorBlend(Color.Blue)\n\n      // 深褐色\n      Text('sepia').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).sepia(0.8)\n\n      // 色相旋转\n      Text('hueRotate').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.image')).width('90%').height(30).hueRotate(90)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493468)/* ["default"] */.A) + "",
        width: "452",
        height: "1076"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置组件线性渐变模糊效果",
      children: "示例2（设置组件线性渐变模糊效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineargradientblur12",
        children: "linearGradientBlur"
      }), "设置组件的内容线性渐变模糊效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ImageExample1 {\n  // $r('app.media.testlinearGradientBlurOrigin')需要替换为开发者所需的资源文件。\n  private_resource1: Resource = $r('app.media.testlinearGradientBlurOrigin')\n  @State image_src: Resource = this.private_resource1\n\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n        Row({ space: 5 }) {\n          Image(this.image_src)\n            .blur(0) // 设置图片模糊效果为不模糊\n            .linearGradientBlur(60,\n              { fractionStops: [[0, 0], [0, 0.33], [1, 0.66], [1, 1]], direction: GradientDirection.Bottom })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625015)/* ["default"] */.A) + "",
        width: "237",
        height: "373"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置离屏渲染效果",
      children: "示例3（设置离屏渲染效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rendergroup10",
        children: "renderGroup"
      }), "来设置组件是否先整体离屏渲染绘制后，再与父组件融合绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Component\nstruct Component1 {\n  @Prop renderGroupValue: boolean;\n\n  build() {\n    Row() {\n      Row() {\n        Row()\n          .backgroundColor(Color.Black)\n          .width(100)\n          .height(100)\n          .opacity(1)\n      }\n      .backgroundColor(Color.White)\n      .width(150)\n      .height(150)\n      .justifyContent(FlexAlign.Center)\n      .opacity(0.6)\n      .renderGroup(this.renderGroupValue)\n    }\n    .backgroundColor(Color.Black)\n    .width(200)\n    .height(200)\n    .justifyContent(FlexAlign.Center)\n    .opacity(1)\n  }\n}\n\n@Entry\n@Component\nstruct RenderGroupExample {\n  build() {\n    Column() {\n      Component1({ renderGroupValue: true })\n        .margin(20)\n      Component1({ renderGroupValue: false })\n        .margin(20)\n    }\n    .width(\"100%\")\n    .height(\"100%\")\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(62799)/* ["default"] */.A) + "",
        width: "456",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4当前组件内容与下方画布内容混合",
      children: "示例4（当前组件内容与下方画布内容混合）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blendmode11",
        children: "blendMode"
      }), "将当前组件内容与下方画布内容混合。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Text(\"blendMode\")\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n        .fontColor('#ffff0101')\n      Row() {\n        Circle()\n          .width(200)\n          .height(200)\n          .fill(Color.Green)\n          .position({ x: 50, y: 50 })\n        Circle()\n          .width(200)\n          .height(200)\n          .fill(Color.Blue)\n          .position({ x: 150, y: 50 })\n      }\n      .blendMode(BlendMode.OVERLAY, BlendApplyType.OFFSCREEN)\n      .alignItems(VerticalAlign.Center)\n      .height(300)\n      .width('100%')\n    }\n    .height('100%')\n    .width('100%')\n    // $r(\"app.media.image\")需要替换为开发者所需的图像资源文件。\n    .backgroundImage($r('app.media.image'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641390)/* ["default"] */.A) + "",
        width: "386",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5前景智能取反色",
      children: "示例5（前景智能取反色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#invertoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "InvertOptions"
      }), "来实现前景智能取反色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Stack() {\n      Column()\n      Stack() {\n        // $r(\"app.media.r\")需要替换为开发者所需的图像资源文件。\n        // 该示例中图片为从左到右，颜色由浅到深。\n        Image($r('app.media.r')).width('100%')\n        Column() {\n          Column().width(\"100%\").height(30).invert({\n            low: 0,\n            high: 1,\n            threshold: 0.5,\n            thresholdRange: 0.2\n          })\n          Column().width(\"100%\").height(30).invert({\n            low: 0.2,\n            high: 0.5,\n            threshold: 0.3,\n            thresholdRange: 0.2\n          })\n        }\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(31356)/* ["default"] */.A) + "",
        width: "348",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置同层阴影不重叠效果",
      children: "示例6（设置同层阴影不重叠效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#useshadowbatching11",
        children: "useShadowBatching"
      }), "搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "#shadow",
        children: "shadow"
      }), "实现同层阴影不重叠效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct UseShadowBatchingExample {\n  build() {\n    Column() {\n      Column({ space: 10 }) {\n        Stack() {\n\n        }\n        .width('90%')\n        .height(50)\n        .margin({ top: 5 })\n        .backgroundColor(0xFFE4C4)\n        .shadow({\n          radius: 120,\n          color: Color.Green,\n          offsetX: 0,\n          offsetY: 0\n        })\n        .align(Alignment.TopStart)\n        .shadow({\n          radius: 120,\n          color: Color.Green,\n          offsetX: 0,\n          offsetY: 0\n        })\n\n        Stack() {\n\n        }\n        .width('90%')\n        .height(50)\n        .margin({ top: 5 })\n        .backgroundColor(0xFFE4C4)\n        .align(Alignment.TopStart)\n        .shadow({\n          radius: 120,\n          color: Color.Red,\n          offsetX: 0,\n          offsetY: 0\n        })\n        .width('90%')\n        .backgroundColor(Color.White)\n\n        Column() {\n          Text()\n            .fontWeight(FontWeight.Bold)\n            .fontSize(20)\n            .fontColor(Color.White)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(150)\n        .height(150)\n        .borderRadius(10)\n        .backgroundColor(0xf56c6c)\n        .shadow({\n          radius: 300,\n          color: Color.Yellow,\n          offsetX: 0,\n          offsetY: 0\n        })\n\n        Column() {\n          Text()\n            .fontWeight(FontWeight.Bold)\n            .fontSize(20)\n            .fontColor(Color.White)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(150)\n        .height(150)\n        .backgroundColor(0x67C23A)\n        .borderRadius(10)\n        .translate({ y: -50 })\n        .shadow({\n          radius: 220,\n          color: Color.Blue,\n          offsetX: 0,\n          offsetY: 0\n        })\n      }\n      .useShadowBatching(true)\n    }\n    .width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(799992)/* ["default"] */.A) + "",
        width: "390",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置组件图像球面效果",
      children: "示例7（设置组件图像球面效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sphericaleffect12",
        children: "sphericalEffect"
      }), "设置组件的图像球面效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SphericalEffectExample {\n  build() {\n    Stack() {\n      TextInput({ placeholder: \"请输入变化范围百分比（[0%,100%]）\" })\n        .width('50%')\n        .height(35)\n        .type(InputType.Number)\n        .enterKeyType(EnterKeyType.Done)\n        .caretColor(Color.Red)\n        .placeholderColor(Color.Blue)\n        .placeholderFont({\n          size: 20,\n          style: FontStyle.Italic,\n          weight: FontWeight.Bold\n        })\n        .sphericalEffect(0.5)\n    }.alignContent(Alignment.Center).width(\"100%\").height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979323)/* ["default"] */.A) + "",
        width: "286",
        height: "107"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去掉sphericalEffect的设置，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(489799)/* ["default"] */.A) + "",
        width: "406",
        height: "84"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置组件图像渐亮效果",
      children: "示例8（设置组件图像渐亮效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lightupeffect12",
        children: "lightUpEffect"
      }), "设置组件的图像渐亮效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LightUpExample {\n  build() {\n    Stack() {\n      Text('This is the text content with letterSpacing 0.')\n        .letterSpacing(0)\n        .fontSize(12)\n        .border({ width: 1 })\n        .padding(10)\n        .width('50%')\n        .lightUpEffect(0.6)\n    }.alignContent(Alignment.Center).width(\"100%\").height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(405064)/* ["default"] */.A) + "",
        width: "406",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改lightUpEffect参数值为0.2："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417561)/* ["default"] */.A) + "",
        width: "406",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去掉lightUpEffect的设置，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(692642)/* ["default"] */.A) + "",
        width: "406",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置组件图像边缘像素扩展效果",
      children: "示例9（设置组件图像边缘像素扩展效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pixelstretcheffect12",
        children: "pixelStretchEffect"
      }), "设置组件的图像边缘像素扩展效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PixelStretchExample {\n  build() {\n    Stack() {\n      Text('This is the text content with letterSpacing 0.')\n        .letterSpacing(0)\n        .fontSize(12)\n        .border({ width: 1 })\n        .padding(10)\n        .clip(false)\n        .width('50%')\n        .pixelStretchEffect({\n          top: 10,\n          left: 10,\n          right: 10,\n          bottom: 10\n        })\n    }.alignContent(Alignment.Center).width(\"100%\").height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(643857)/* ["default"] */.A) + "",
        width: "411",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去掉pixelStretchEffect的设置，原图效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(836573)/* ["default"] */.A) + "",
        width: "409",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10系统导航条智能反色",
      children: "示例10（系统导航条智能反色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例主要演示通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#systembareffect12",
        children: "systemBarEffect"
      }), "来实现系统导航条智能反色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Stack() {\n        // $r(\"app.media.testImage\")需要替换为开发者所需的图像资源文件。\n        Image($r('app.media.testImage')).width('100%').height('100%')\n        Column()\n          .width(150)\n          .height(10)\n          .systemBarEffect()\n          .border({ radius: 5 })\n          .margin({ bottom: 80 })\n      }.alignContent(Alignment.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94231)/* ["default"] */.A) + "",
        width: "246",
        height: "275"
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
10441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
791804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
62799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
979323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
489799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
417561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
583879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
836573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
45833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
405064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAB2CAYAAADry7WgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABofSURBVHhe7d0J9G5T/cfxI00qmhMpCWkSxQqLikoqQ4tKclciVDKVytT0Ny1NKo2GDBGJFHI1IE3GqDSYNWnQYJ6a/b12vj/H0+93XTq6z/3dz3uts845++z5POf7OXvvs/cz36230YUQQggDcZ/b9yGEEMIgRFhCCCEMSoQlhBDCoERYQgghDEqEJYQQwqBEWEIIIQxKhCWEEMKgRFhCCCEMSoQlhBDCoERYQgghDEqEJYQQwqBEWEIIIQxKhCWEEMKgRFhCCCEMSoQlhBDCoERYQgghDEqEJYQQwqBEWEIIIQxKhCWEEMKgRFhCCCEMSoQlhBDCoERYQgghDEqEJYQQwqBEWEIIIQxKhCWEEMKgRFhCCCEMSoQlhBDCoERYQgghDEqEJYQQwqBEWEIIIQxKhCWEEMKgRFjGjFtvvfX2oxDC7JBnZvyIsIwJf//737t//OMf3XzzzXe7SwhhdvDMeHY8Q2E8mO82tY/cjwFugwfkt7/9bfejH/3odtd/E7EJ4Q5GTdbyyy/fPe5xj5t4hsKcJ8IyJtRDccghh3Svf/3rb3cNIdwVBx98cLfZZptFWMaICMuYUA/FYYcd1r3uda/rjjjiiO6qq67q7nOf9FaGMMq//vWv7pGPfGQ3Y8aM7rOf/Wy3ySabRFjGiAjLmDAqLF/60pe6a6+9NuMuIYzgWbnvfe/bPexhD+s22GCDCMsYktfhMcVDYjDSm1m2bNnuvHk28k48vkRYxoy8cYVw98gzM35EWEIIIQxKhCWEEMKgRFhCCCEMSoQlhBDCoERY5kFGv6a5O1/X8DvU1zj9eIaMN9z7jN67PnUvcz/nXSIscyn10M7qAZ7K3Vc0/fB1PpX/ovzWVzj9MHcVdpSKq+jHGcaXuuf930wd13XntYV5kwjLXIzv+c3M7z/I/c01D/o///nPbv7557+TIejj3ISz8n9X8C9tcdocc5udsH2kJyykf7/73e8exRP+d/gtuT/ue/326jfV3/d/G2HeI8IyF1IPsAfX8f3vf/+JB5lxtjHUNtfs//jHPza/JR59Q8CNH8flXvSP65rVAKTxgAc8YEK0ir7/PuUuLf4rLulaYeDqq69u59ynYrK4ufXdxS9vGPVf5xVmsut9N3mpein3/vXJwhd9/6Pb7KKelGeUyeKp86mu2eo+j14vyn2y8LX3eyoccxNv3Vfn0iAo11xzzZ1+GxiNO0xPIixzIWXo7BnRz3/+893mm2/eNovx2SxkafvMZz7TLbjggt2uu+7a/eUvf2nhiEG1MhiBSy+9tNtpp526X/3qV+2ckXC90hg1BozFzTff3JbRuOWWW5pfWxnBvn/Htrr25z//ufv5z3/e/Mu7+D/ykY90J5544oShKvhBuYmjjmsvfOVRvv70pz913//+9yfiLn/icm7PXz8ct7ouDfXj+MYbb+x++tOftrKWsawwtn492UavlVtt3Pp+KizKrY5dU09/+MMfWhjnda3i64ep87pG/Avn8q9uLrzwwlY3/bCosPYlELX14xbPgx/84Lbk0D777NM98IEPbGn98pe/bPfWdX6Jyu67795dccUVE+JS9RemPxGWuRQPKQP4t7/9rXv+85/fve1tb+ve8573dE9+8pPbGkrvfOc7u7e+9a3dS1/60gmjpIXxoAc9qFtggQWaEefOEDz0oQ/t1l133bao31//+tfmZuOP4eCPsSjKQLzmNa+ZMFL2NkanjMtoGPExbMcee2zzK25+CJ+8MUCVN/E7Z7SEZZQf8pCHtDDC9uHXJux5553XffrTn25lESeEh+vKL/4y8lXGMn7cys+VV17Z4rIYqHJVOuWv4nUsDuHkreKGuuAufKUBYbnZV13wK2zV/5e//OXuBz/4QfeIRzyiudcyJvLGv/oAN3FzrzikWcdQx5dccklbi07dSFMe6x5VGexLlPix8cO9yuT86U9/erfSSitN/AeKvF5wwQXttyRd7vJX+ZIfebEJX+mG6cn8/3cbtx+HOYwH98c//nF7SF/96le3N+Vy7+Oh9PDCg+phfsxjHtP+k8LbuutaE9wZFA82Y05kzjrrrO6b3/xmC7/wwgs3cfJ2efnll3dPfOITu4UWWqi77rrruu9+97vdt771rZb2ox71qAkDVQaGwWDEGRgGiTES99e+9rXWtbX44os3PyUK8nDGGWd03/72t1u3l/+dOf/887tnPetZ3Xe+851m7CqfN9xwQ/ekJz2plUNYeZWno48+uoVhsOSpuuHKuJ1++ultk75NC2zRRRdt/vkV/pxzzmnGUtnFvd9++7X9Yost1tIhIur/4Q9/eMuLc3GdeeaZ3corr3wnMVFm/vhRp8pGLLjJFz/q9aSTTmr/sbPEEks0Awt5/sIXvtA9+9nPbnF/4xvfaPWoHuTHwopaLNLWanr0ox/dNnVy8cUXdzNnzmxCId8lCHW/brrppu4rX/lK6/70uxDnkUce2Z177rmt7rUurr/++u4JT3hCywvk5+tf/3oTY0KmjtSf+laHyqMOtSy1Up1Lx2/ugAMO6H7zm9+039FPfvKT5l88Z599dru/8q8OxKsM0hJeWeT3niCcunRP119//W655ZabcA9znrRY5kI8PIwaA+Th1Mrw0HNzrsvLsc1DzI3R3HfffZtxZ7h1PzFODCGD4MFnvPl7y1ve0owa48JoMHr9B5ZRAHeGgpH6xCc+0eKTFgOmm6SMKLj3he6xj31sa1nJt7i/973vte4VeWO8PvjBDza/8nDKKad07373u1s6yuoao1zxyrM88a8FAgLJoEpT3FtvvXUz0urjk5/8ZOsiBOP68Y9/vLVO1Jt0GEXCIz51zCAussgiTVT69SBvjOfb3/727qKLLmovAupYfuVLF6W4GXgGfeedd271TAjES1A/9KEPNRFXbnWmDlxTr/y5Pwy1PYMu3wceeGCL//e//31rqRIYfgmO/yZhbHV7uT/iJOKEWDnUk7onfuq+EP/vfve77uSTT27l8tvx4kDgpOOeqT/C7WWCgPgtqXt1Za+u61j+lEleiLm63WuvvZrgqde672F6EmGZS2F8PJweYA9of88o9B/aEpnnPe95bazFeMorX/nKZngYGoaguqKMK2CjjTbqdtlll+7DH/5wC1eIv97aQYyEIURrrLFGt+OOO3Yf+MAHug033LB104lTXqT/jGc8o72hM2zrrLNOt95667UyMDpPe9rTJvJmz0gy9oyiFsQ222zT7bDDDt12223Xbbzxxs0AaimIH/L1nOc8p3vmM5/ZznXTaWHI2/HHH9+9+c1vbgKge3D77bdv4qf//xWveEXrSvzoRz/a7b333t2qq67ayq4+uBPH1VZbrcWn3CUu0mOcCclLXvKS7l3velcz8oznKqus0loFDLM8u6YuHR9zzDET4xy2F7zgBZ1OA12XL3zhC7tTTz21iedaa63VWgNPfepTu1e96lVNGIxh/OxnP2vxveENb2jl0QrVvSW/jL84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");

},
31356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
799992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959512-20a8f468a2ac7b2fc39ac770954d7ef1.png");

},
641390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799862-bb29770a6aedcf9fbca4f69a514e4437.png");

},
625015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959510-6226d83bec23197de2c72d97801adbd1.png");

},
305024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
94231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959516-f4b4cecc8dfc3ef87e9bc6b707864209.png");

},
692642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479515-e9b260c5db43e09866022d672c92e159.png");

},
643857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAB2AZsDASIAAhEBAxEB/8QAHwABAAICAgMBAQAAAAAAAAAAAAoLCAkCBgEFBwME/8QARBAAAAUDAgIFBgwGAgIDAQAAAAECBQYDBAcIEQkSGiFZmNgZMVFXkZcKExQVIjlSeJK40dcWNkFxdrUYYRcjJjJCgf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QALREAAgIBAwMCBQUAAwAAAAAAAAECESEDEjFBUWEicQQTMoGRFCNSocGCsdH/2gAMAwEAAhEDEQA/AJ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACul1u/C6+JDpr1oau9OcGwloidoTgHU/n3CkOdJZjbPF9KXKLYrytLILHnCS3zPqVYWm8kF40sVpcPN01sbM3XDjUua1i1N1sulZ0bFoUg3Fi+tN4ln3/8AWR+YrIwAkAdNW4pfqD0Be6zUT4qg6atxS/UHoC91monxVCIClKlKSlKTUpRklKUkZqUoz2JKSLczMzMiIiLcz6iHgAS/+mrcUv1B6AvdZqJ8VQdNW4pfqD0Be6zUT4qhEAAAS/8Apq3FL9QegL3WaifFUHTVuKX6g9AXus1E+KoRAAAEv/pq3FL9QegL3WaifFUHTVuKX6g9AXus1E+KoRAAAEv/AKatxS/UHoC91monxVB01bil+oPQF7rNRPiqEQAABL/6atxS/UHoC91monxVB01bil+oPQF7rNRPiqEQAABL/wCmrcUv1B6AvdZqJ8VQdNW4pfqD0Be6zUT4qhEAAAS/+mrcUv1B6AvdZqJ8VQdNW4pfqD0Be6zUT4qhEAAAS/8Apq3FL9QegL3WaifFUHTVuKX6g9AXus1E+KoRAAAEv/pq3FL9QegL3WaifFUHTVuKX6g9AXus1E+KoRAAAEv/AKatxS/UHoC91monxVB01bil+oPQF7rNRPiqEQAABL/6atxS/UHoC91monxVB01bil+oPQF7rNRPiqEQAABL/wCmrcUv1B6AvdZqJ8VQdNW4pfqD0Be6zUT4qhEAAAS/+mrcUv1B6AvdZqJ8VQ9xHvho3FFdn9jarjAugdFu5vDY3110cXahk1kUby9oW1VVJVTVPVQmqlFRR01Lp1EEsiNSFkRpOHUpC0bc6VJ5kkpPMk08yT8yi3It0nsexl1Ht1GOyQr+col/kzD/ALW0AF+kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkG4sX1pvEs+/wD6yPzFZGF3yKQbixfWm8Sz7/8ArI/MVkYAZ/8AwXJJK46uhxKiI0qLUvvuXWRp0f5/WkyPzpMlJSZKSZH1GW+xmR2/BIQRbcqerq6yIz//AKZ9Z/3PrFQR8Fx+vX0N/wBtTP5PdQIt+DPYjPYz2Iz2ItzPYt9iIuszP+hEAPHIj7Kfwl+gciPsp/CX6DEDImujAmK51bY3mdnqBt5a5PdzG4/aMGjvWBNmqYvlmwOErvW2BSiD4JkcVn11YxloeH9wpwt7fvm9pZXu9vjt6LM6LtPrGOs8wXKEqlMQjSZLbO8QheLZ49WkoiUhhblZMmYbCRukOoX8flbe0yRmfCs4w4pfo6/NDU/xxwQbS+tjc60riypa2aiVuElFq4unUo2lu4qrajeVeLslptpNNp01atOrp+azXbJ9n5EfZT+Ev0DkR9lP4S/QdMacgRp6mkvgFjVeDkkGbos6yBF3FJW1sqbOZE/qYjZpY5s1rE5VcKTG3Qneyiz28X0aWiypyW2aKju0Ive4VKpFTWpCk7klWyjIlIIyJRkajNdNPLuWx71EFv1GpO+5Z/2q83x+ehTnyI+yn8JfoHIj7Kfwl+g6xDJixz2JRmbxyte149L4+yylhrObK9xxzrMshbaDw01nGOyRvaZGw3tVuuqFS6Z39pa3psuTq2Dq3WLjb3NnQ5SSaw6HUWy4l8qjsVt3uQMMTZbiSPTcx0HiUylxt2iMRppqulxa03KQSJ2u7RqY2ayVXcXZzurdvsLavd16VFVp3VO+1Z/BLVXarvar8nZeRH2U/hL9A5EfZT+Ev0HyphzFD5FlzImFG+7u1TfFsRxrOJdb1m2tQbqDBlm9yI3Q6rYuaq6qN5dV7rF8sJwtqaDW30rW1q1zJN9SNP1QqiDMkkrczJJlsR7GStzTsrblPci3MiPciMjPYlJ3nWutXXWu9dgmnw0/Z9ufweeRH2U/hL9A5EfZT+Ev0Ho3+UxqKN/ztKH9njbT8vaWo3V+cbRobEub87WLAxN63Bwq29oi9en10bWRptl1k1nF4cbFrs0Vr67t6FT3Z1UFtuotjPl3IjMtzIzIjURGReYy6zLr2LzmRG6J9Hw+j9mLVtWrXKtWvc88iPsp/CX6ByI+yn8JfoOHx1Lbc1pL6XLsfUfNvykWx7HuZ+bq6y6y3LrHp2uURt8v5E1Mr+zO7pEHehH5Y2tjnZ31/F366j7FLLZkkVna1qtwyu9xFpRGZJRbXKnbXlVhkTE7ooqb3awuLhzddOfHHPblfldynu+RH2U/hL9A5EfZT+Ev0Hg1oI9jURHsZ7f1Mi85kXnMi85mW+xdfmHH4+j1f+xJcxmlO/VuZeci3236uvq//Jkr/wCpkYWs54w/Dq6f2z7ZCTfCv28c/g58iPsp/CX6ByI+yn8JfoOCq1JBGalkRJ6j33339HLtzGe3XsRb7fS83WOuNU3hr6+SeMMksjjxJYRcNVpNI61vTc4P0Pu35poPzHaypntLmq4x25eWO6tXhroPFtZ1XBrura/tEVbWvSqriak6i02lbSy0sZpdMrPGV3QtXV5fC6v7HZuRH2U/hL9A5EfZT+Ev0Hg6iSIz+kexGoyShaj2LczIkpSalK6j+ikjVv1bbmQ9a8vrJHWhzkEgd21jYWRtvnl6e3e9t21oZ2dstal85Ozq5XlSjZtzY3WVGteX9/eVqNpZ2lKpc3NalRpqWVtYV5bSS7t8JeX0XJLT4aZ7PkR9lP4S/QORH2U/hL9B/HZubc42lpft17bX9jf29G7sb2yrIu7S8tbinSrW9za3NudSjXoXFCtSuKFaktVOtb1E16Sl0TJY/qOtTTvzLSnlTzGaj2Ik77b7nsW25GX9yMvORh38On4fZ9mLXdZVrPK7+3k5ciPsp/CX6ByI+yn8JfoPmMlzNjOFX01tptL2mFt+OoZHMgTeTy87mLweNROVukwZmZ2c5++29hCKSV38Dk9NzskSCo4R6hbNd7ILVss5LG6zp+d7mKFt+aI3ga5ur1M/lOMZrltqtSb6xtq4fAJVAYbIq9Z0NRUKLhTe8lxanaN6kKrXVvWva6DJNoshaa5TV8YeaSb/AKlF+zT6obo59Sxh5WHbVP7pr3TXQ+pciPsp/CX6ByI+yn8JfoPJKJRbl/0fWRkfX6SMiMv7H1l/UeRClYB8NSpop8UzAiUFsX/ALFhnuZqMzPURqoLc1KM1H1ERFufURERbEIlkK/nKJf5Mw/7W0Etb4ar9adgT7gOLPzE6qREphX85RL/JmH/a2gAv0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUg3Fi+tN4ln3/9ZH5isjC75FINxYvrTeJZ9/8A1kfmKyMANgHwXH69fQ3/AG1M/k91Ai358/nFQN8Fx+vX0N/21M/k91Ai35AGDWp6kj/krw5F8qS21J5eJS+Uuok6IdU6kmpXoStRqSZmWylGfWajGDmofEFjOc58TydqnWX4VIMWaScIyXHLhiXMuUsQHH5s04+1EPrdLHChjWWxlsnTg0XzMwXDO05EbpbHGynZ39rRZvkMlkNu57gGLJcIluQsjYvaHNd5McWWsKu5w0rbXC3ptlvPm9xdoktDhc2lNudCvrRocaxobrq6XYVKPJeotqtWiVXsT6/xaK0LStJH1oYLZ0eWWPNtV7c7Vstr+QSV0pNMeYW+pe1aFG6eH54uLZsZ2m1OpfOjhXt7Kzt69zXp06naOpKDrZ6vlxjF9alqLVVLraSVdpXykca3ZTpLUk2/+Dg30zxl9n5b0nZpyE+TB0zemW6g3/B0cccScN+V15IhzymyYzsLyUyHO8jmcal06xc+R+SYAgeVUR5viswzE3S+E2LLTQw2klfnltrIh8lz64f85sJ/p4trxsZZI3szDkXKkUZ3N7zTNNSEdmDaxzt8tqEtxbnfI9k1zjKWJXQ6tS1g0kkTS21abdYrZWik4RtrZXt0y1sn6K3kkeYlZvzJdy5laI/J36M27nYVZC1R+VXskaow/uzNTqm5WbNJXKFy1uZHW8t6dk8X0TkNjYXFxVYHGhadkOmk0mnrIjNZ9R7dayUSjP8Aoe/OZ/SIy32MyMyEnqucFDZSTjKMsKkoxSpKKb3UpW3jNfVjUYU097ktri0+G21TXNUlWKIz1xlSqx4W0a5anuZ5zkWYVuHLozfW3TkWo7U1gjMeTMg3bO5SR+yFp2v4I+uEO1dZ7yQqpbxKVYSmcPebxLox4+qzHIMNiWRni2kmxTiuQmLP2FcJziYVnJti2MtYWkaSTyTW8ulERaYljA9QWPLefSmTuLA7tNFvZ4+zqNwrSp0P5RCqVK5fWp2j1yms72ueeWc0YuwUxtMhyfJ1sNs/v9hEIs22LNI5ZLJnK3hN1cN0Sg0Jh7S/zOcyu9tbRwcKMdibC9PtZsa3J1VZHYNd/dW/PD+b8WZ7jznJ8WSlUhsmCSO0MlLffssiiMthkyYfkq3iHzuCzJoj02gkrb7e+b7y5jcvj7I9pa3NrdCsjb3Owu7jT1ZNw1FpyhTbU92JXVpOKSWbz3bu6RhacUp6e691PPK4xnv/AK+xp0meJcd5hz5rgmsYyTlttZoPw/NHclxFMsJajsuwSjeUvkmtB0h86qSDHc9brTKVe0smpodY1dz+pNWa4pX15d3Nrf0n1wK4xyyBl3LOVb90l+oLPNbTpVn+j/TfN9LD7a5i1HYnbHt7luITleSZXh6B4Od7RkztnxnzQ5O9q6YgdmGfS26gLPiRvYoJXjM4fraUSbF21Koj4uoXOk0ciubb6aeVSDJRERJ2MlK3SSSR1nskiMyH6Ggj5C3P6Bkf9D328xKMyM9iPZXVsfMlJ79R739TJPdsUmtijdNxUUk63Jp3Vu0+qvNkWhSpSq3JycVV201ebwl35p9DXJr9iC3nRMhyyl89SS/xzKtOOSMjuOPVzqOFUsMf5dxy85ZldowxJwoSJbA0wy1mklSyV6l7UZrayou9qqm/srY62mFWo2fQ1xyrjyjS1CMUV0e1tOrNXwJkZ11a59xZiWe5WPJuRWHLS1Z1wvNmx1yhPGKLtWJqOOWCc5KveWg+TF0x+ySK/t5O4sO76tkGJUshN+KqrhdpnDrEHyeWDWTI/HZV4xGniNMTzfHI0Nhxqjd2bpLo7RJmrvNJ8uqN+d7Zt1xYWd/c2vcPiaZq59t1kSkksz3WklGk1ElR7mRGaUmZeY+VPVshBJkNbYqcdyTnJRTSScqyk04qmk+PbPOp6W5UpNYSzbva7VtNP3y764wR3MmT7KMPkWEqKs8Ztm2KbTTtp0seKrkGL2sjid9j1kuyj1TGGWWhik17Ech6eZ1lGneTK+1a2MaY26Z4z0w1rnKsrYsazJoxfJnLNrTI3YdgOt7W3GnGR3TDmPIWao9kzHcPfMjzJNSfYkkWlPTk3uc2h8LfpGbBMWFqyRBMmRy4emFmdVQOowIipV48wUI22q2kfEI3Uo1LM1FtvzmXKXxZU/omnlMj2IzI9zNKlKUk08xjHPNGq3T/AKdXNnYcszqvH3V2jr3MibWiHzydXbFA4tWbrGSZFmNKAxiULgWNI5cONhbyDJE4+YIMyVblKHGQWmyyRfmz1U4Q0nulp7GtNZdTjqOTUUk62uKVUk1h1mbFp7HOSdSjtc1w6UaV3z5eMZxZgNqjkkEt9VuSG3WBmrLGFMHM2nzGMj0xVcdZkzjhBumOQacpzAjPdFjvcLv0VvsuZxabe3wpbRXE93eTiQVWS+sbqB44cKkimVavj5qDyLfpkeuJym+WM0Y+1mQmSK8nRiaG5NzVFW/IkdusRwa+wHc4/wBP7K6N2PdQ9lKs3Vpc053u5bj/ACBbxn/5JFMoXkVx7FI/UaJANleWLraWbm231C/b7+1oXthfWFzTubG+sruimva3drc0FVKF1a3NCpTr29xRWunVprTUpLUhe6v6DoUzUatjJSjSa1JPlNZpTylzmXWv6JEn6RnsXWnY+sI6+15g8RjH6kktrg24x2qtzi96bablLo6K9JTzaVu9yWWsYbx2/pXfC0OagYvKLuM8X/PdbM+d4/kHStf/AMWYLb4VnPKMSgWM5TAuH1pszMm4oY4ZpVb4/mDZI5ze/LJHHMjxeXxlwsq7zTostvUl8vrv39duxlhzWTxNk49cqrTquyvj2P5Q0ZwmVZIfuTLclqaaX+1v3CJw2VzFERmzSw5aibw2uVtfNzi3Y9b7SjZpoReMfNtSpvXp0KdKmVKmXIhJJSgi2PkJBFykk1EZnyqLnLn5t1Goz3I9gRb06ZbJ5iL4xVTbmMi5lrVUV1Ft1GpRnt/0RH/Xctd7XFq01TzVxXymk8cXpJvGW33bJ8q8/S7Vbf7d9+K8rsRh2yTyyxwLqMmGKtV0gdZBDuGnqzdcxwtWa9V2XsntOUrLGjU5xGa5NrZRkd9HtLWf8fS6g/os4da2GPZU/wBs+S62jEYuI7jehUheYuoHBN7FJLNsIw6a6hMkWOf+HHrSmsxjMtzhl7Il9PcxYglml60xxIow0OkovqEDenO5y/MWq+iuI7OGQWS2DvZRe/hF3G2ViZLDdn8npcvISdkkRciS25afKpK0mhO2xKStCVpVsZpUkjSZbAdCny8mxkjYkmlJmlJkXKRbknYj+ikkdfUaPonukzIP1MtykoQTWcJRdqqyl3V3lrFcEWgled1qvV/nOf8A3wjC7RS44On+l+HU8JzNE0hl9EWNlk19Y5Alkuc2mV3cJj6pNG3B9fHxxlEUkbJTcbe0cYmu+anKFOKV2dZqZ3OnXtaGqptztqvwzH2nMDk5T/K0d4f9eloTzBjIqTmmZal8ku6ZlDGrKq2hytHm+kEvytIKnDsyFCJMmQuyorFcr59bb5yWu7fUVpFSUkkiIt9iLYi/oXWZ9Xt2/wCiIttuvfgdIjMzNS9zMj6lbbERkZJTsRbJLlLqLz9fMZ8yt8x1kpSb01JTlu2t5j/Jblm5JtX05WaNS0pNRcZbZRhtbSu+Hzhqmr8+M3HY1p4fnpactdOAHyX5JzO/4e4WujKS0Lv+Kpmd1McpNs0172eUMkVWGlJzTfOuQbKK/OEnZrys6WbnatTC239o42kZZKFlkE4Y4wBqG1naW2eCZDmEtwqWh7Vo9xqX4g1LZda7qS12rUhpYab+1uMz41yW3TyUslB5v3RN00Xc6vmxL0z2Cby3rrYW+jZbo0W9NCuZBGk+v+u5/SWpa9jPdRfGLUSqnKZcxpRv1FsPCrWgs1qOmnmqcpqVykZmpCFU0q6yMuYqa1I5jIz5D5T6iIhX8ROq4zJ2qWZRjBvj+MI46ZrkLRSk3ubTabTSzUnJZ95Suq58GGHDtmsunujzDzzOZC7yyStlCbwa5lEivqrrJZG3YyyZNcax99k7vXSi4e5O6x+JNl5I3+5T8pfnurfu9z/77yoRZrjghCUF9HfzbbqUalGRGoy3UozM9jUe259RdRdRDmOU2pTnJRUVKUpKK4juk3tXhXS8HSKajFPLSVvzWf7KwP4ar9adgT7gOLPzE6qREphX85RL/JmH/a2glrfDVfrTsCfcBxZ+YnVSIlMK/nKJf5Mw/wC1tBk0X6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQbixfWm8Sz7/APrI/MVkYXfIpBuLF9abxLPv/wCsj8xWRgBsA+C4/Xr6G/7amfye6gRb8ioG+C4/Xr6G/wC2pn8nuoEW/IA0C6u5nleD5Z17POLL6sz2aZnw6LXMsks5jKMe3UPwJe2M+pZMk9zPoK3us5x7F7NrpIoZAyRDrA5PjnG1aaT1hco85RijJWX5Y5psZbgSX5NyHqTj2QNM0H1saM3dhmOKda2pTLEVxBZV8lYiac3uLxqflbljy+ksBbrN3ikzsnSrI5i04LlrxPr1nlEJJnt2mHSSlU6a9+ZJK3LY999tjIyPq825kZkZ+cy26+otuB0Un50JMt9+s1Ge+5q369y6lHuXVtuSfsp29EPidrjUJbobWmnV7FBfU44bqk08JtcKzzy+HUry83h2qtrs12/6NQsDvdPUU4gLpK7PMTodbM2jDSC66Xbh71RZVc4fqBrsT/q4aXy0hVtIcnOEXzopshknxXJ1tlxazCq2305PLFnaUZZO5DK3zDzQxlHMExm2Eb6UakWG4zamBZYdtXGH3LVhqRyZlonhMFeqUyZZzpLmsGa8SaRHbHmfL6AkxuUdoY4ZWFns62N4O8y1jnNjUe5HqaKUGZpSkjPzmZmZ+fciI9i2Ij6yIuojMzIi3VvxK3pluZU0p5lc58pmkjXuZ8+23UozMzMy2Mz6wXxG2v25Se2MLlODfogoJ5i1xVY5V4qh8mXKkkrlhX1afe/87dTRkyM+LYxoz0KZazxqG1GY1mc1iuKs1/8ANB/yZf5GY8PZ7mmn+tHLt2k15qMqZfxHieE5Pj2UMhQqi0ucJbMRXDm8WbOamKe3uPbyr0ad6lnGes+JP/IWoO5ZsBWfEPRjmQawNKzjJ8KxjUlhmw0CZtm8gu5HIYTK5kulFIrkRksMf5hzPBZUzQeK0cf3OR4pI8Ju+NLq9xnIITb0Up5E0yJP0erdR7mkuUjMzMzM9vOZnuZ7me5mZj5hkDEcfyLKMKy13vXezcsFZNc8qROi2XFpRsXF+dsOZYwlc2Mho3FhdVrpnRFswyRwoUG26ab1Egb2G8qX9ZvtL5pcy1+d6nK5SabkvQm28YvDdpZV06tFlptZgorMXSTVuMk++VSroaVpBqBsGnFWTv4Ny1JJnpPe9akPxphrP021l5dxbj1njSdN9lOsgV5VrXtk5Gyy74Gs88xp2iEWlbNOkVpVmiVUsD0Jyy4ztSYkfLMX6gJ+946gzbmrMUriej6J67s+Y3yznWK6jc0VqLNjNeH26faamh/1ivLxjrL6MIS3KWRGy0ieb3J6aP40srbDMBv5W+xSeKXKpJZUUIIyQhKU8xq2I1ERGajUZpItiSZqPc+Xbc9t/MQ8HQpqIyNBFzbbmha0K6iItkqRyqSRkkkmlKiI07pPdJmRz9QqX7Tzzck229N6bk/S6b3breNy4VJEWhJNy+ZbtteE2mo4fCuuLpe9aGs85VRHsb5Mr6dNQWYJPjaw4UXE1yHj2d3+WsiyJ8uZlDcjY6tYXN2ifP7oUolblAK1+6x7EWWrp3fZDeQpDW9R6eSWyeKcoeu9Z+Zc76bnuZMumrKWoLIOSclcN/WLlGwYp/kScZ0u3rUDhaT6brLH8+x5B5xeytpicxq/+b5wScb4kYIpjWS31aLsScc1LJgjLe3bqkW1JBcpI2L6RkfMo1ka1cylEs9lks1GZ85K5iPzH1Ft6OXxexmkWkUScrx9bbCTMTtH7tyi8geInJm61eW+4bbi/jspj143P8cfbOjdVLhofWW/snVocEW7g3XdveW9GshHXUXH0ehOO6Mqk5U1W6qTSfP3ddDT02022t7xaukm4t/fHSrNO2m3I+DXTW5guLaVdVWW884ve9KWo6S5HZ5DqazHqLhtvOWScaSbeIOb265Nmk2px/KNixyST03uAocWpwgjc8295cQmJLnNa6k/0rLmbMP6X9aWoSb6m5LHYhC8v6NcCM2ML6YUVUG/ItfDmRtU93lTEMHVc2tS3meRE0Mv47dLLGbVUu5bKUzCzJlaXWlaXyrDLbEmlejjrItHLE2zbmnUDkFogbzjKHSLL11i1vRB4VKnuKSSbNkejuFsVYfitxfTh8gkHvZNI5SyyaUV0w1ism17a2xbpYX+VSkJV1mlJmRpMjP+hpMzL/vq3P29fUEtWPzE4ppLTUHTptbtzp87lSV4ENOWzbOrWpvXXhJJc8Orowk0C3qYZpm026c5jf0G3OeG9IOl2vlDHd2oqMkhdJ8gt9EWhDxYnsq2TVf8ZzZjpJPnUV1Gb8lrUXIpWbw/FNCmlRq5C5jMlGZGozM0mpSeYzM9yQaj5EnuSCPZJERERfsOU5bpSlVbm5V2bdtLjCbpeKvJ0hHbGMedqSvi6QAAGTQAAAAAAAAAAAAAAFYH8NV+tOwJ9wHFn5idVIiUwr+col/kzD/tbQS1vhqv1p2BPuA4s/MTqpESmFfzlEv8mYf9raAC/SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSDcWL603iWff/ANZH5isjC75FINxYvrTeJZ9//WR+YrIwAzB+DhZYxbg7jN6OMpZqyVAcQYyixahf4myLlCYR6AwWOfPmlfN8bZTfZdK3FpYGgneRPDQwthuDhblfvLo3Nlr8be3ttQq2nXlYOFp2lOgPvjad/wBxRSDJUpJ7pUpJ9XWkzI+oyUXWW3mUklF6DIj85EHMr0n7TAF3z5WDhadpToD74unf9xQ8rBwtO0p0B98XTv8AuKKQbc/SftMNz9J+0wBd8+Vg4WnaU6A++Lp3/cUPKwcLTtKdAffF07/uKKQbc/SftMNz9J+0wBd8+Vg4WnaU6A++Lp3/AHFDysHC07SnQH3xdO/7iikG3P0n7TDc/SftMAXfPlYOFp2lOgPvi6d/3FDysHC07SnQH3xdO/7iikG3P0n7TDc/SftMAXfPlYOFp2lOgPvi6d/3FDysHC07SnQH3xdO/wC4opBtz9J+0w3P0n7TAF3z5WDhadpToD74unf9xQ8rBwtO0p0B98XTv+4opBtz9J+0w3P0n7TAF3z5WDhadpToD74unf8AcUPKwcLTtKdAffF07/uKKQbc/SftMNz9J+0wBd8+Vg4WnaU6A++Lp3/cUPKwcLTtKdAffF07/uKKQbc/SftMNz9J+0wBd8+Vg4WnaU6A++Lp3/cUPKwcLTtKdAffF07/ALiikG3P0n7TDc/SftMAXfPlYOFp2lOgPvi6d/3FDysHC07SnQH3xdO/7iikG3P0n7TDc/SftMAXfPlYOFp2lOgPvi6d/wBxQ8rBwtO0p0B98XTv+4opBtz9J+0w3P0n7TAF3z5WDhadpToD74unf9xQ8rBwtO0p0B98XTv+4opBtz9J+0w3P0n7TAEpv4XVqFwFqU4kmE51p0zhiDPsIatEONom6THCuSoZlOKtsqsc76k3i+jV/IYM9PrRZv8AZtD8xul0zXF5TcbdueWq9rWyLZwtKtaMTCv5yiX+TMP+1tB1o1KVtzKNWxbFuZnsReYi3/oXoHZYV/OUS/yZh/2toAL9IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIHVj8DYPVBqn1Lal/KNKg//IjUBmTOf8Ff8Qkyb+EP/LeRZHPv4X/iM9Ucf/iD+H/4g+afnv5hZPnX5J8v+aG35R8iozfgAEAHoMh9qEruTo8XQdBkPtQldydHi6E/4ABAB6DIfahK7k6PF0HQZD7UJXcnR4uhP+AAQAegyH2oSu5OjxdB0GQ+1CV3J0eLoT/gAEAHoMh9qEruTo8XQdBkPtQldydHi6E/4ABAB6DIfahK7k6PF0HQZD7UJXcnR4uhP+AAQAegyH2oSu5OjxdB0GQ+1CV3J0eLoT/gAEAHoMh9qEruTo8XQdBkPtQldydHi6E/4ABAB6DIfahK7k6PF0HQZD7UJXcnR4uhP+AAQAegyH2oSu5OjxdB0GQ+1CV3J0eLoT/gAEAHoMh9qEruTo8XQdBkPtQldydHi6E/4ABAB6DIfahK7k6PF0HQZD7UJXcnR4uhP+AAQAegyH2oSu5OjxdB0GQ+1CV3J0eLoT/gAEAHoMh9qEruTo8XQdBkPtQldydHi6E/4ABAB6DIfahK7k6PF0PZsnwHU2d5aHbynirj5rc7Bx+T/wDCtFH4/wCRXVK5+J+N/wCW9X4r434rk+M+KqcnNzfFr25Tn1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==");

},
493468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439555-a9fe49885f9a283d9d779d021e0c807f.png");

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