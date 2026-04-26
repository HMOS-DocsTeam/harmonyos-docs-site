"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["71261"], {
332714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_draw_text_display_complex_text_c_complex_text_c_md_d0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-draw-text-display-complex-text-c-complex-text-c-md-d0e.json
var site_docs_arkgraphics_2_d_text_draw_text_display_complex_text_c_complex_text_c_md_d0e_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/draw-text-display/complex-text-c/complex-text-c","title":"复杂文本绘制与显示（C/C++）","description":"在进行文本绘制时，可以通过选择合适的字体、大小和颜色完成简单文本的绘制与显示；此外，还支持通过设置其他丰富的样式、语言、段落等进行复杂文本的绘制。","source":"@site/docs/arkgraphics-2d/text/draw-text-display/complex-text-c/complex-text-c.md","sourceDirName":"arkgraphics-2d/text/draw-text-display/complex-text-c","slug":"/arkgraphics-2d/text/draw-text-display/complex-text-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/complex-text-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"复杂文本绘制与显示（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-text-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"简单文本绘制与显示（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/simple-text-c/"},"next":{"title":"自定义文本绘制与显示（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/text-custom-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/draw-text-display/complex-text-c/complex-text-c.md


const frontMatter = {
	title: '复杂文本绘制与显示（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-text-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '复杂文本绘制与显示（C/C++）';

const assets = {

};



const toc = [{
  "value": "多语言文本绘制与显示",
  "id": "多语言文本绘制与显示",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "效果展示",
  "id": "效果展示",
  "level": 3
}, {
  "value": "多行文本绘制与显示",
  "id": "多行文本绘制与显示",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "多样式文本绘制与显示",
  "id": "多样式文本绘制与显示",
  "level": 2
}, {
  "value": "装饰线",
  "id": "装饰线",
  "level": 3
}, {
  "value": "字体特征",
  "id": "字体特征",
  "level": 3
}, {
  "value": "可变字体",
  "id": "可变字体",
  "level": 3
}, {
  "value": "文本阴影",
  "id": "文本阴影",
  "level": 3
}, {
  "value": "占位符",
  "id": "占位符",
  "level": 3
}, {
  "value": "自动间距",
  "id": "自动间距",
  "level": 3
}, {
  "value": "渐变色",
  "id": "渐变色",
  "level": 3
}, {
  "value": "垂直对齐",
  "id": "垂直对齐",
  "level": 3
}, {
  "value": "上下标",
  "id": "上下标",
  "level": 3
}, {
  "value": "高对比度",
  "id": "高对比度",
  "level": 3
}, {
  "value": "行高调整",
  "id": "行高调整",
  "level": 3
}, {
  "value": "行间距调整",
  "id": "行间距调整",
  "level": 3
}, {
  "value": "样式的拷贝、绘制与显示",
  "id": "样式的拷贝绘制与显示",
  "level": 2
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "复杂文本绘制与显示cc",
        children: "复杂文本绘制与显示（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行文本绘制时，可以通过选择合适的字体、大小和颜色完成简单文本的绘制与显示；此外，还支持通过设置其他丰富的样式、语言、段落等进行复杂文本的绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复杂文本绘制主要包含以下几个场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多语言文本绘制与显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多行文本绘制与显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多样式文本绘制与显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "样式的拷贝、绘制与显示"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多语言文本绘制与显示",
      children: "多语言文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多语言支持是全球化应用的基础。多语言文本绘制需要支持不同语言的字符集及其独特的显示需求，例如右到左语言（如阿拉伯语）或竖排文本（如中文）。开发者需要理解不同语言的渲染特性，确保文本的正确显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在多语言文本使用的场景下，主要通过指定TextStyle文本样式中的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "locale"
        })
      }), "字段来实现，可直接通过locale字段的值优先匹配对应字体，跳过遍历列表匹配字体的过程，从而降低匹配时间和内存使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyTextLocale(OH_Drawing_TypographyStyle* style, const char* locale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定排版样式的语言环境。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画布Canvas对象具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
        children: "画布的获取与绘制结果的显示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个 TypographyStyle，创建 TypographyCreate 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置 locale 为中文\nOH_Drawing_SetTypographyTextLocale(typoStyle, \"zh-Hans\");\n\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyle, FONT_WEIGHT_400);\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 将之前创建的 TextStyle 加入 handler 中\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\n// 设置文本内容，并将文本添加到 handler 中\nconst char *text = \"你好，中文\\n\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\n// 通过 handler 创建一个 Typography\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果展示",
      children: "效果展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930158)/* ["default"] */.A) + "",
        width: "273",
        height: "182"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多行文本绘制与显示",
      children: "多行文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多行文本相对于单行文本比较复杂，一般针对多行文本，需要进行文本排版、断词策略设置、文本对齐方式、最大行数限制等，主要通过设置段落样式实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyTextAlign(OH_Drawing_TypographyStyle* style, int align)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyTextWordBreakType(OH_Drawing_TypographyStyle* style, int wordBreakType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置单词的断词方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyTextMaxLines(OH_Drawing_TypographyStyle* style, int lineNumber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最大行数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下以断行策略为 BREAK_ALL 的场景为例，其余策略同理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TWENTY(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyle, FONT_WEIGHT_400);\n\n// 设置文本内容\nconst char *text =\n    \"Nunc quis augue viverra, venenatis arcu eu, gravida odio. Integer posuere nisi quis ex pretium, a dapibus \"\n    \"nisl gravida. Mauris lacinia accumsan enim, non tempus ligula. Mauris iaculis dui eu nisi tristique, in porta \"\n    \"urna varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris \"\n    \"congue nibh mi, vel ultrices ex volutpat et. Aliquam consectetur odio in libero tristique, a mattis ex \"\n    \"mollis. Praesent et nisl iaculis, facilisis metus nec, faucibus lacus. Duis nec dolor at nibh eleifend \"\n    \"tempus. Nunc et enim interdum, commodo eros ac, pretium sapien. Pellentesque laoreet orci a nunc pharetra \"\n    \"pharetra.\";\n\n// 创建一个断词策略为 BREAK_ALL 的 TypographyStyle\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置断词策略为 WORD_BREAK_TYPE_BREAK_ALL\nOH_Drawing_SetTypographyTextWordBreakType(typoStyle, OH_Drawing_WordBreakType::WORD_BREAK_TYPE_BREAK_ALL);\n// 设置最大行数为 10，行数大于 10 的部分不显示\nOH_Drawing_SetTypographyTextMaxLines(typoStyle, 10);\n\n// 使用之前创建的 FontCollection 和 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n// 将之前创建的 TextStyle 加入 handler\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "BREAK_ALL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BREAK_WORD"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "BREAK_HYPHEN（locale：未设置）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BREAK_HYPHEN（locale：en-gb）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BREAK_HYPHEN（locale：en-us）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多样式文本绘制与显示",
      children: "多样式文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除基本文字、排版属性之外，针对应用中不同文本的设计，开发者可能需要设置使用不同的绘制样式或能力，以凸显对应文本的独特表现或风格，此时可以结合使用多种绘制样式进行文本的渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的多样式绘制及各绘制样式侧重效果如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "装饰线样式绘制："
          })
        }), " 主要通过不同的线条样式对文本进行装饰，可以使文本更加突出，富有表现力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "字体特性绘制："
          })
        }), " 主要通过字体的变化，包括粗细、斜体等特性来改变文本的外观，增强文本的可读性和美观性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可变字体绘制："
          })
        }), " 对应提供文本在不同的显示环境和设备上灵活调整的能力，可满足更为精细的视觉效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文本阴影绘制："
          })
        }), " 主要通过在文本周围添加阴影效果，以提升文本的层次感和立体感，从而使文本更具吸引力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "占位符绘制："
          })
        }), " 可以在不确定文本内容时保持文本布局的稳定性，使得文本显示更为流畅和自然。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自动间距绘制："
          })
        }), " 可以在一些字符混排切换的地方自动添加额外间距，提升阅读体验。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "渐变色绘制："
          })
        }), " 可以为文字提供颜色渐变效果，增强文字表现力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "垂直对齐："
          })
        }), " 调整文本在垂直方向排版位置，提升排版质量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "上下标："
          })
        }), " 可以将任意字符处理成上标或下标，更精准表达文本含义。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "高对比度文字绘制："
          })
        }), " 主要通过将深色文字变黑、浅色文字变白，增强文本的对比效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "行高调整："
          })
        }), " 调整行高可改变文本行的垂直间距，使行间距更松散或更紧凑，显著改善文本垂直截断问题，提高可读性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "行间距调整："
          })
        }), " 通过调整行间距的方式可以实现行高调整一样的效果，优化阅读体验。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰线",
      children: "装饰线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰线"
        })
      }), "是指在文本上方、下方或中间添加的装饰性线条，当前支持上划线、下划线、删除线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过添加文本装饰线，提升文本的视觉效果和可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用装饰线需要初始化装饰线样式对象，并添加到文本样式中，从而在文本绘制时生效。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextStyleDecoration(OH_Drawing_TextStyle* style, int decoration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定文本样式中的装饰线类型，只能设置一个装饰线类型，添加多个需要使用OH_Drawing_AddTextStyleDecoration。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextStyleDecorationStyle(OH_Drawing_TextStyle* style, int decorationStyle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定文本样式中的装饰线样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextStyleDecorationColor(OH_Drawing_TextStyle* style, uint32_t color)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定文本样式中的装饰线颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个TypographyStyle创建Typography时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置文本内容\nconst char *text = \"Hello World Drawing\\n\";\n\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyleWithDeco = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyleWithDeco, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleWithDeco, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleWithDeco, FONT_WEIGHT_400);\n// 设置装饰线为 LINE_THROUGH\nOH_Drawing_SetTextStyleDecoration(txtStyleWithDeco, TEXT_DECORATION_LINE_THROUGH);\n// 设置装饰线样式为 WAVY\nOH_Drawing_SetTextStyleDecorationStyle(txtStyleWithDeco, TEXT_DECORATION_STYLE_WAVY);\n// 设置装饰线颜色\nOH_Drawing_SetTextStyleDecorationColor(txtStyleWithDeco, OH_Drawing_ColorSetArgb(0xFF, 0x6F, 0xFF, 0xFF));\n\n// 创建一个不带装饰线的 TextStyle 用于对比\nOH_Drawing_TextStyle *txtStyleNoDeco = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_SetTextStyleColor(txtStyleNoDeco, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleNoDeco, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleNoDeco, FONT_WEIGHT_400);\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 加入带有装饰线的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleWithDeco);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\n// 后续加入的不带装饰线的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleNoDeco);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyleWithDeco);\nOH_Drawing_DestroyTextStyle(txtStyleNoDeco);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554537)/* ["default"] */.A) + "",
        width: "291",
        height: "183"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字体特征",
      children: "字体特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字体特征"
        })
      }), "绘制专注于在文本渲染过程中对字体特性（如粗体、斜体、字体变种等）的处理，允许字体在不同的排版场景下表现出不同的效果，可用于增强文本的表现力，使其更符合设计和阅读需求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FontFeature"
        })
      }), "包含有liga、frac、case等，需要对应的ttf文件支持才能正常使能。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_TextStyleAddFontFeature(OH_Drawing_TextStyle* style, const char* tag, int value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本样式中指定字体特征是否启用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个 TypographyStyle，创建 TypographyCreate 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置文本内容\nconst char *text = \"1/2 1/3 1/4\\n\";\n\n// 设置文字颜色、大小、字重，不设置TextStyle无法绘制出文本\nOH_Drawing_TextStyle *txtStyleWithFeature = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyleWithFeature, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleWithFeature, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleWithFeature, FONT_WEIGHT_900);\n// 设置启用frac font feature，此功能将斜线分隔的数字替换为普通（对角线）分数。\nOH_Drawing_TextStyleAddFontFeature(txtStyleWithFeature, \"frac\", 1);\n\n// 创建一个不带字体特征的 TextStyle 用于对比\nOH_Drawing_TextStyle *txtStyleNoFeature = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重。不设置 TextStyle 无法绘制出文本\nOH_Drawing_SetTextStyleColor(txtStyleNoFeature, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleNoFeature, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleNoFeature, FONT_WEIGHT_900);\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 加入带有字体特征的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleWithFeature);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 销毁之前创建的 TextStyle\nOH_Drawing_TypographyHandlerPopTextStyle(handler);\n\n// 后续加入的不带字体特征的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleNoFeature);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 销毁之前创建的 TextStyle\nOH_Drawing_TypographyHandlerPopTextStyle(handler);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyleWithFeature);\nOH_Drawing_DestroyTextStyle(txtStyleNoFeature);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436761)/* ["default"] */.A) + "",
        width: "470",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可变字体",
      children: "可变字体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可变字体"
        })
      }), "是一种在一个字体文件中包含多个字形变体的字体格式，允许在一个字体文件内灵活地调整字体的各种属性（如字重、字宽、斜体等）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与传统字体文件（每种变体需要一个独立的文件）不同，可变字体在一个字体文件中包含多个变体轴，可通过使用可变字体实现文本渲染绘制时的平滑过渡。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_TextStyleAddFontVariation(OH_Drawing_TextStyle* style, const char* axis, const float value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加可变字体属性。对应的字体文件（.ttf文件）需要支持可变调节，此接口才能生效。当对应的字体不支持可变调节时，此接口调用不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个 TypographyStyle 创建 Typography 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置文字内容\nconst char *text = \"Hello World Drawing\\n\";\n\nOH_Drawing_TextStyle *txtStyleWithVar = OH_Drawing_CreateTextStyle();\n// 设置可变字体的字重为800，在字体文件支持的情况下，还可以设置\"slnt\", \"wdth\"\nOH_Drawing_TextStyleAddFontVariation(txtStyleWithVar, \"wght\", 800);\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_SetTextStyleColor(txtStyleWithVar, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleWithVar, DIV_TEN(width_));\n// 此处设置字重不生效，将被可变字体的字重覆盖\nOH_Drawing_SetTextStyleFontWeight(txtStyleWithVar, FONT_WEIGHT_400);\n\n// 创建一个不带可变字体的 TextStyle 用于对比\nOH_Drawing_TextStyle *txtStyleNoVar = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_SetTextStyleColor(txtStyleNoVar, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleNoVar, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleNoVar, FONT_WEIGHT_400);\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 加入带有可变字体的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleWithVar);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 弹出之前创建的 TextStyle\nOH_Drawing_TypographyHandlerPopTextStyle(handler);\n\n// 后续加入的不带可变字体的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleNoVar);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 弹出之前创建的 TextStyle\nOH_Drawing_TypographyHandlerPopTextStyle(handler);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyleWithVar);\nOH_Drawing_DestroyTextStyle(txtStyleNoVar);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23795)/* ["default"] */.A) + "",
        width: "498",
        height: "259"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本阴影",
      children: "文本阴影"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文本阴影"
        })
      }), "为文本提供了深度感，使得文本在背景上更具立体感。通常用于提升文本的视觉吸引力或增强可读性，尤其是在色彩对比度较低的场景下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，TextShadow有三个属性，分别为阴影颜色color、阴影基于当前文本的偏移位置point、阴影半径blurRadius。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用阴影效果需要在文本样式中设置对应的阴影效果数组，从而在文本绘制时生效。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Point* OH_Drawing_PointCreate(float x, float y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个坐标点对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextShadow* OH_Drawing_CreateTextShadow(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向字体阴影对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextShadow(OH_Drawing_TextShadow* shadow, uint32_t color, OH_Drawing_Point* offset, double blurRadius)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体阴影对象的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_TextStyleAddShadow(OH_Drawing_TextStyle* style, const OH_Drawing_TextShadow* shadow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体阴影容器中添加字体阴影元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_DestroyTextShadow(OH_Drawing_TextShadow* shadow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放被字体阴影对象占据的内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个 TypographyStyle 创建 Typography 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n// 设置文本内容\nconst char *text = \"Hello World Drawing\\n\";\n\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyleWithShadow = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyleWithShadow, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleWithShadow, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleWithShadow, FONT_WEIGHT_400);\n// 设置阴影偏移量\nOH_Drawing_Point *offset = OH_Drawing_PointCreate(1, 1);\nOH_Drawing_TextShadow *shadow = OH_Drawing_CreateTextShadow();\ndouble radius = 10.0;\n// 为 TextShadow 设置样式\nOH_Drawing_SetTextShadow(shadow, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00), offset, radius);\n// 将 TextShadow 加入 TextStyle\nOH_Drawing_TextStyleAddShadow(txtStyleWithShadow, shadow);\n\n// 创建一个不带阴影的 TextStyle 用于对比\nOH_Drawing_TextStyle *txtStyleNoShadow = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_SetTextStyleColor(txtStyleNoShadow, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyleNoShadow, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyleNoShadow, FONT_WEIGHT_400);\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 加入带有阴影的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleWithShadow);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\n// 后续加入的不带阴影的文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyleNoShadow);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyleWithShadow);\nOH_Drawing_PointDestroy(offset);\nOH_Drawing_DestroyTextShadow(shadow);\nOH_Drawing_DestroyTextStyle(txtStyleNoShadow);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163563)/* ["default"] */.A) + "",
        width: "496",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "占位符",
      children: "占位符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "占位符绘制用于处理文本中占位符符号的渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "占位符也是用来实现图文混排的关键，是指在实际图像或内容注册之前，用来预先提供或替代某个位置的视觉元素。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_TypographyHandlerAddPlaceholder(OH_Drawing_TypographyCreate* handler, OH_Drawing_PlaceholderSpan* span)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置占位符。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置页面最大宽度\ndouble maxWidth = width_;\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\nOH_Drawing_SetTextStyleFontWeight(txtStyle, FONT_WEIGHT_400);\n\n// 设置文本内容\nconst char *text = \"Hello World Drawing\\n\";\n\n// 创建一个 TypographyStyle 创建 Typography 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文本对齐方式为居中\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handlerWithPlaceholder = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n// 创建一个 placeholder，并且初始化其成员变量\nOH_Drawing_PlaceholderSpan placeholder;\nplaceholder.width = DIV_TEN(width_);\nplaceholder.height = DIV_FIVE(width_);\nplaceholder.alignment = ALIGNMENT_ABOVE_BASELINE; // 基线对齐策略\nplaceholder.baseline = TEXT_BASELINE_ALPHABETIC;  // 使用的文本基线类型\nplaceholder.baselineOffset = 0.0; // 相比基线的偏移量。只有对齐策略是 OFFSET_AT_BASELINE 时生效\n\n// 将 placeholder 放在开头\nOH_Drawing_TypographyHandlerAddPlaceholder(handlerWithPlaceholder, &placeholder);\n\n// 将之前创建的 TextStyle 加入 handler\nOH_Drawing_TypographyHandlerPushTextStyle(handlerWithPlaceholder, txtStyle);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handlerWithPlaceholder, text);\n\nOH_Drawing_Typography *typographyWithPlaceholder = OH_Drawing_CreateTypography(handlerWithPlaceholder);\nOH_Drawing_TypographyLayout(typographyWithPlaceholder, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typographyWithPlaceholder, cCanvas_, 0, DIV_TEN(width_));\n\n// 创建 OH_Drawing_TypographyCreate\nOH_Drawing_TypographyCreate *handlerNoPlaceholder = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n// 将之前创建的 TextStyle 加入 handler\nOH_Drawing_TypographyHandlerPushTextStyle(handlerNoPlaceholder, txtStyle);\n// 将文本添加到 handler 中\nOH_Drawing_TypographyHandlerAddText(handlerNoPlaceholder, text);\n\nOH_Drawing_Typography *typographyNoPlaceholder = OH_Drawing_CreateTypography(handlerNoPlaceholder);\n\nOH_Drawing_TypographyLayout(typographyNoPlaceholder, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typographyNoPlaceholder, cCanvas_, 0, DIV_TWO(width_));\n\n// 释放内存\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handlerWithPlaceholder);\nOH_Drawing_DestroyTypographyHandler(handlerNoPlaceholder);\nOH_Drawing_DestroyTypography(typographyWithPlaceholder);\nOH_Drawing_DestroyTypography(typographyNoPlaceholder);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284615)/* ["default"] */.A) + "",
        width: "730",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动间距",
      children: "自动间距"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使能自动间距，则会在文本排版时自动调整CJK（中文字符、日文字符、韩文字符）与西文（拉丁字母、西里尔字母、希腊字母）、CJK与数字、CJK与版权符号、版权符号与数字、版权符号与西文之间的间距。例如，在中英文混排场景中，使能自动间距即可在中英文切换的地方自动添加额外间距，提升阅读体验。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyTextAutoSpace(OH_Drawing_TypographyStyle *style, bool enableAutoSpace)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本排版时是否使能自动间距。默认不使能自动间距，一旦使能则会自动调整CJK（中文字符、日文字符、韩文字符）与西文（拉丁字母、西里尔字母、希腊字母）、CJK与数字、CJK与版权符号、版权符号与数字、版权符号与西文之间的间距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个TypographyStyle创建Typography时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置使能自动间距，默认为false\nOH_Drawing_SetTypographyTextAutoSpace(typoStyle, true);\n// 设置文字内容\nconst char *text = \"test测试©test©测。\";\n\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重，不设置TextStyle会使用TypographyStyle中的默认TextStyle\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n\n// 创建FontCollection，FontCollection用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用FontCollection和之前创建的TypographyStyle创建TypographyCreate。TypographyCreate用于创建Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 将文本样式添加到handler中\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\n// 将文本添加到handler中\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 创建段落\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 设置使能自动间距，用于对比\nOH_Drawing_SetTypographyTextAutoSpace(typoStyle, false);\n\n// 使用FontCollection和之前创建的TypographyStyle创建TypographyCreate。TypographyCreate用于创建Typography\nOH_Drawing_TypographyCreate *handlerWithoutAutoSpace = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 将文本样式添加到handlerWithoutAutoSpace中\nOH_Drawing_TypographyHandlerPushTextStyle(handlerWithoutAutoSpace, txtStyle);\n// 将文本添加到handlerWithoutAutoSpace中\nOH_Drawing_TypographyHandlerAddText(handlerWithoutAutoSpace, text);\n// 创建段落\nOH_Drawing_Typography *typographyWithoutAutoSpace = OH_Drawing_CreateTypography(handlerWithoutAutoSpace);\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typographyWithoutAutoSpace, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typographyWithoutAutoSpace, cCanvas_, 0, DIV_FOUR(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypographyHandler(handlerWithoutAutoSpace);\nOH_Drawing_DestroyTypography(typography);\nOH_Drawing_DestroyTypography(typographyWithoutAutoSpace);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "段落样式设置（自动间距）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不使能自动间距"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使能自动间距"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渐变色",
      children: "渐变色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "渐变色"
        })
      }), "是一种在文字设计中广泛应用的视觉效果，通过在文字的不同部分应用不同的颜色，从而创造出从一种颜色平滑过渡到另一种颜色的效果。可以通过着色器实现文字渐变的效果，着色器的更多介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c#%E7%9D%80%E8%89%B2%E5%99%A8%E6%95%88%E6%9E%9C",
        children: "着色器效果"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextStyleForegroundBrush(OH_Drawing_TextStyle* style, OH_Drawing_Brush* foregroundBrush)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加前景画刷，渐变着色器属性依附于前景画刷中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字大小\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n// 创建着色器对象，并设置颜色、变化起始点与结束点\nOH_Drawing_Point *startPt = OH_Drawing_PointCreate(0, 0);\n// 结束点位于(900, 900)\nOH_Drawing_Point *endPt = OH_Drawing_PointCreate(900, 900);\nuint32_t colors[] = {0xFFFFFF00, 0xFFFF0000, 0xFF0000FF};\nfloat pos[] = {0.0f, 0.5f, 1.0f};\n// pos数组长度为3\nOH_Drawing_ShaderEffect *colorShaderEffect =\n    OH_Drawing_ShaderEffectCreateLinearGradient(startPt, endPt, colors, pos, 3, OH_Drawing_TileMode::CLAMP);\n// 创建画刷对象,并将着色器添加到画刷\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\nOH_Drawing_BrushSetShaderEffect(brush, colorShaderEffect);\n// 将画刷添加到文本样式中\nOH_Drawing_SetTextStyleForegroundBrush(txtStyle, brush);\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Hello World\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typography, maxWidth);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_ShaderEffectDestroy(colorShaderEffect);\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913445)/* ["default"] */.A) + "",
        width: "362",
        height: "65"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "垂直对齐",
      children: "垂直对齐"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "垂直对齐"
        })
      }), "用于调整文本在一行中垂直方向的排版位置。开启行高缩放或行内存在不同字号文本混排时使能垂直对齐，可以让文本实现顶部对齐、居中对齐、底部对齐或基线对齐（默认）。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTypographyVerticalAlignment(OH_Drawing_TypographyStyle* style, OH_Drawing_TextVerticalAlignment align)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本垂直方向排版方式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置垂直对齐方式\nOH_Drawing_SetTypographyVerticalAlignment(typoStyle,\n                                          OH_Drawing_TextVerticalAlignment::TEXT_VERTICAL_ALIGNMENT_CENTER);\n// 设置文字大小\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n// 设置文字颜色\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"VerticalAlignment-center\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typography, maxWidth);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下（黑框仅为展示文本绘制区域，实际不绘制）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(897273)/* ["default"] */.A) + "",
        width: "405",
        height: "69"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上下标",
      children: "上下标"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "上下标"
        })
      }), "能将文本作为上标或下标参与排版。一般用于数学公式、化学式等场景。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextStyleBadgeType(OH_Drawing_TextStyle* style, OH_Drawing_TextBadgeType textBadgeType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能上下标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_TextStyle *badgeTxtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字大小\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TWENTY(width_));\nOH_Drawing_SetTextStyleFontSize(badgeTxtStyle, DIV_TWENTY(width_));\n// 设置文字颜色\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleColor(badgeTxtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 使能文本上标\nOH_Drawing_SetTextStyleBadgeType(badgeTxtStyle, OH_Drawing_TextBadgeType::TEXT_SUPERSCRIPT);\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Mass-energy equivalence: E=mc\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, badgeTxtStyle);\nconst char *badgeText = \"2\";\nOH_Drawing_TypographyHandlerAddText(handler, badgeText);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typography, maxWidth);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTextStyle(badgeTxtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617357)/* ["default"] */.A) + "",
        width: "349",
        height: "46"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高对比度",
      children: "高对比度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高对比度可将深色文字变黑、浅色文字变白。开发者可选择开启或关闭应用的高对比度文字渲染，或遵循系统设置中的高对比度文字配置。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_SetTextHighContrast(OH_Drawing_TextHighContrast action)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文字渲染高对比度模式。模式具体可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-global-h/capi-drawing-text-global-h#oh_drawing_texthighcontrast",
              children: "OH_Drawing_TextHighContrast"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启APP的文字渲染高对比模式，该模式的优先级要高于系统设置中的高对比度文字配置\nOH_Drawing_SetTextHighContrast(TEXT_APP_ENABLE_HIGH_CONTRAST);\n// 创建一个 TypographyStyle，创建 Typography 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n\n// 设置文字颜色、大小，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x6F, 0xFF, 0xFF));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n\n// 将之前创建的 TextStyle 加入 handler 中\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\n// 设置文本内容，并将文本添加到 handler 中\nconst char *text = \"Hello World Drawing\\n\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\n// 将段落按照排版宽度进行排版\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "高对比度设置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不开启高对比度"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启高对比度"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "行高调整",
      children: "行高调整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调整行高可以改变文本行的垂直间距，行间距将变得更松散或更紧凑，可以显著改善文本垂直方向截断问题，使文本更易读。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前行高调整方式包括两种：设置行高上限/下限和使用行高缩放系数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "行高调整（方式一）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持为文本行设置行高上限与下限。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_settextstyleattributedouble",
              children: "OH_Drawing_ErrorCode OH_Drawing_SetTextStyleAttributeDouble(OH_Drawing_TextStyle* style, OH_Drawing_TextStyleAttributeId id, double value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入id为OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_D_LINE_HEIGHT_MAXIMUM，设置行高上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_settextstyleattributedouble",
              children: "OH_Drawing_ErrorCode OH_Drawing_SetTextStyleAttributeDouble(OH_Drawing_TextStyle* style, OH_Drawing_TextStyleAttributeId id, double value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入id为OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_D_LINE_HEIGHT_MINIMUM，设置行高下限。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字大小为50\nOH_Drawing_SetTextStyleFontSize(txtStyle, 50);\n// 设置文字颜色\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleAttributeDouble(txtStyle,\n    OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_D_LINE_HEIGHT_MAXIMUM, 65); // 设置行高上限为65\nOH_Drawing_SetTextStyleAttributeDouble(txtStyle,\n    OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_D_LINE_HEIGHT_MINIMUM, 65); // 设置行高下限为65\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Hello World!\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 排版宽度为1000\nOH_Drawing_TypographyLayout(typography, 1000);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, 0);\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "行高上限值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "行高下限值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "行高调整（方式二）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置行高缩放系数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_settextstylefontheight",
              children: "void OH_Drawing_SetTextStyleFontHeight(OH_Drawing_TextStyle* style, double fontHeight)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能行高缩放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_settextstyleattributeint",
              children: "OH_Drawing_ErrorCode OH_Drawing_SetTextStyleAttributeInt(OH_Drawing_TextStyle* style, OH_Drawing_TextStyleAttributeId id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入id为OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_I_LINE_HEIGHT_STYLE，使能行高缩放样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字大小为50\nOH_Drawing_SetTextStyleFontSize(txtStyle, 50);\n// 设置文字颜色\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 设置行高缩放系数为1.5\nOH_Drawing_SetTextStyleFontHeight(txtStyle, 1.5);\n// 设置行高缩放样式（1代表行高缩放以字形高度作为缩放基数）\nOH_Drawing_SetTextStyleAttributeInt(txtStyle,\n    OH_Drawing_TextStyleAttributeId::TEXT_STYLE_ATTR_I_LINE_HEIGHT_STYLE, 1);\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Hello World!\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 排版宽度为1000\nOH_Drawing_TypographyLayout(typography, 1000);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, 0);\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "行高缩放样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_LINE_HEIGHT_BY_FONT_SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_LINE_HEIGHT_BY_FONT_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "行间距调整",
      children: "行间距调整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持设置行间距可以改善文本行之间的距离，提高阅读体验。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_settypographystyleattributedouble",
              children: "OH_Drawing_ErrorCode OH_Drawing_SetTypographyStyleAttributeDouble(OH_Drawing_TypographyStyle* style, OH_Drawing_TypographyStyleAttributeId id, double value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入id为OH_Drawing_TypographyStyleAttributeId::TYPOGRAPHY_STYLE_ATTR_D_LINE_SPACING，设置行间距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_SetTypographyStyleAttributeDouble(typoStyle,\n    OH_Drawing_TypographyStyleAttributeId::TYPOGRAPHY_STYLE_ATTR_D_LINE_SPACING, 100); // 设置行间距为100\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字大小为50\nOH_Drawing_SetTextStyleFontSize(txtStyle, 50);\n// 设置文字颜色\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 创建排版对象，并绘制\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Hello World!\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 排版宽度为200\nOH_Drawing_TypographyLayout(typography, 200);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, 0);\n\n// 释放对象\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "上升部下降部开关"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_HEIGHT_DISABLE_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_HEIGHT_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式的拷贝绘制与显示",
      children: "样式的拷贝、绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持拷贝文本样式、段落样式、阴影样式，以便快速复制相关样式作用到不同文字上。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TypographyStyle* OH_Drawing_CopyTypographyStyle(OH_Drawing_TypographyStyle* style)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个段落样式的对象副本，用于拷贝一个已有的段落样式对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextStyle* OH_Drawing_CopyTextStyle(OH_Drawing_TextStyle* style)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个文本样式的对象副本，用于拷贝一个已有的文本样式对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextShadow* OH_Drawing_CopyTextShadow(OH_Drawing_TextShadow* shadow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个文本阴影的对象副本，用于拷贝一个已有的文本阴影对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例及示意效果如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个TypographyStyle，其中创建Typography时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 配置段落样式包括：使能自动间距、最大行数、省略号样式、省略号文本、对齐方式\n// 使能自动间距\nOH_Drawing_SetTypographyTextAutoSpace(typoStyle, true);\n// 设置段落最大行数为3行\nOH_Drawing_SetTypographyTextMaxLines(typoStyle, 3);\n// 设置省略号模式为尾部省略号\nOH_Drawing_SetTypographyTextEllipsisModal(typoStyle, ELLIPSIS_MODAL_TAIL);\n// 设置省略号文本\nOH_Drawing_SetTypographyTextEllipsis(typoStyle, \"...\");\n// 设置对齐方式为居中对齐\nOH_Drawing_SetTypographyTextAlign(typoStyle, TEXT_ALIGN_CENTER);\n\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\n// 设置文字颜色、大小、字重，不设置TextStyle会使用TypographyStyle中的默认TextStyle\nOH_Drawing_SetTextStyleColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n// 设置文本的装饰线\n// 添加下划线\nOH_Drawing_SetTextStyleDecoration(txtStyle, TEXT_DECORATION_UNDERLINE);\n// 设置装饰线样式为波浪线样式\nOH_Drawing_SetTextStyleDecorationStyle(txtStyle, TEXT_DECORATION_STYLE_WAVY);\n// 设置下划线粗细\nOH_Drawing_SetTextStyleDecorationThicknessScale(txtStyle, 1);\n// 设置下划线颜色为蓝色\nOH_Drawing_SetTextStyleDecorationColor(txtStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0xFF));\n\n// 设置阴影的颜色、偏移量、模糊半径\n// 创建阴影对象\nOH_Drawing_TextShadow *shadow = OH_Drawing_CreateTextShadow();\n// 设置阴影偏移量为(5, 5)\nOH_Drawing_Point *offset = OH_Drawing_PointCreate(5, 5);\n// 定义阴影模糊半径为4\ndouble blurRadius = 4;\nOH_Drawing_SetTextShadow(shadow, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0x00, 0xFF), offset, blurRadius);\n\n// 拷贝阴影对象\nOH_Drawing_TextShadow *shadowCopy = OH_Drawing_CopyTextShadow(shadow);\n// 将拷贝出的阴影添加到文本样式中\nOH_Drawing_TextStyleAddShadow(txtStyle, shadowCopy);\n\n// 创建FontCollection，FontCollection用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n\n// 使用FontCollection和之前创建的TypographyStyle创建TypographyCreate。TypographyCreate用于创建Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n// 将段落一文本样式添加到handler中\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\n// 将段落一文本添加到handler中\nconst char *text = \"The text style, paragraph style, and text shadow of the copied text will be exactly the same \"\n                   \"as those of the original text.\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 创建段落一，并将段落一按照排版宽度进行排版\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, DIV_TEN(width_));\n\n// 生成第二段文本，其中，文本样式和段落样式均由第一段文本拷贝而来\n// 复制文本样式\nOH_Drawing_TextStyle *textStyleCopy = OH_Drawing_CopyTextStyle(txtStyle);\n// 复制段落样式\nOH_Drawing_TypographyStyle *typographyStyleCopy = OH_Drawing_CopyTypographyStyle(typoStyle);\n\n// 使用复制的样式创建段落二，后续可以观察段落一和段落二是否绘制效果一致\nOH_Drawing_TypographyCreate *handlerCopy = OH_Drawing_CreateTypographyHandler(typographyStyleCopy, fc);\nOH_Drawing_TypographyHandlerPushTextStyle(handlerCopy, textStyleCopy);\nOH_Drawing_TypographyHandlerAddText(handlerCopy, text);\nOH_Drawing_Typography *typographyCopy = OH_Drawing_CreateTypography(handlerCopy);\nOH_Drawing_TypographyLayout(typographyCopy, maxWidth);\nOH_Drawing_TypographyPaint(typographyCopy, cCanvas_, 0, DIV_TWO(width_));\n\n// 释放内存\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyTypography(typography);\n// 拷贝的段落样式也需要释放内存\nOH_Drawing_DestroyTypographyStyle(typographyStyleCopy);\n// 拷贝的文本样式也需要释放内存\nOH_Drawing_DestroyTextStyle(textStyleCopy);\nOH_Drawing_DestroyTypographyHandler(handlerCopy);\nOH_Drawing_DestroyTypography(typographyCopy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212333)/* ["default"] */.A) + "",
        width: "403",
        height: "389"
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
212333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958698-008702f41b9c0365b481cceae081a568.png");

},
930158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC2CAIAAABxmC47AAAQqElEQVR4Ae2bfVBU1f/HPzwFhkCJFQ9hNKBDyJCKTpOlmcGXmLEWA1EzZ6SQwqYYe8BMmnSIMEZHUxKsZigdHbUySxrHstCaFCZEjcAHJrKMRQYRlqeBZXfPjx9nvHPbBfLInu/4Pfu+f+DZcz/3fu55fc5r79NKDAsIgIAIARIJRiwIgACDM5gEICBGAM6I8UI0CMAZzAEQECMAZ8R4IRoE4AzmAAiIEYAzYrwQDQJwBnMABMQIwBkxXogGATiDOQACYgTgjBgvRIMAnMEcAAExAnBGjBeiQQDOYA6AgBgBOCPGC9EgAGcwB0BAjACcEeOFaBCAM5gDICBGAM6I8UI0CMAZzAEQECMAZ8R4IRoE4AzmAAiIEYAzYrwQDQJwBnMABMQIwBkxXogGATiDOQACYgTgjBgvRIMAnMEcAAExAnBGjBeiQQDOYA6AgBgBOCPGC9EgAGcwB0BAjACcEeOFaBCAM5gDICBGAM6I8UI0CMAZzAEQECMAZ8R4IRoE4AzmAAiIEYAzYrwQDQJwBnMABMQIwBkxXogGATiDOQACYgTgjBgvRIMAnMEcAAExAnBGjBeiQQDOYA6AgBgBOCPGC9EgAGcwB0BAjACcEeOFaBCAM5gDICBGAM6I8UI0CMAZzAEQECMAZ8R4IRoE4AzmAAiIEYAzYrwQDQJwBnMABMQIwBkxXogGATiDOQACYgTgjBgvRIMAnMEcAAExAnBGjBeiQQDOYA6AgBgBOCPGC9EgAGcwB0BAjACcEeOFaBCAM5gDICBGAM6I8UI0CMAZzAEQECMAZ8R4IRoE4AzmAAiIEYAzYrwQDQJwBnMABMQIwBkxXogGATiDOQACYgRczhmbzcYY43/FUF2LHs221/bh/H+dclRWq1U7MqfsUNubSg1XcebXX3/dunVrbW2tNi1KSkpWrFhRU1NzneVsb2+fM2fOwoUL+/r6rnOT/2aYzWbbvn37rFmz9u3bd2N5rVarxWIpKytbunTpkSNHbIPLje1K7a1cxZnXX3+diNasWcPLabFY7r33XiKqqKgYrsB2k+bPP/8kosjISH18V1fX0aNHy8vLjw61/PDDD7///rs+Xmr7tddeI6LCwsLRZFm9ejURLV68eDQ7UXtbl3DGbDZPmjSJiKqqqng5jx49OvBx3rx5I1TXMrhoAdXV1USUnJys9TDGampqaMQlOztbHy+1vWbNGiJ6//33R5PFaDT6+PgEBgZ2d3ePZj8Kb+sSzpSXlxPRjBkztAuzhQsXElFcXFxGRkZ6evqz/1yee+65zMzMxsZG/anm2LFjRPT222/rZ0NTU9PLL7+8YsWKF3VLTk5OWloaV2nbtm36+NG3R7jNWLduHREVFxcPl8VisfDN29rafvnll5NDLadOnZo8eTIRbdmypbq62i6kqqrq5MmTnZ2dw6VwhX6XcGbJkiVEVFJSwitaV1fn7e094unh/1fW1tYyxnp6egoKCnJycpKSktzc3OLj41etWpUzuOzevXvIKdLW1jZ79mwiysnJsVqtI8zyITcfudNmsxUUFMTHxycmJv5HtyQmJkZERLi7u0dHRzuuSkhI2LRpk3Ywn3/++b8Of4SAn3/+eeSDVHut+s40NDT4+PiMGzeuubmZ1/Lpp58monXr1p06daqqqur06dNnzpw5dW3ZvXu3u7t7WFhYW1sbY8xkMmmzx8vLS2sTkcFgcJwcNTU14eHh+nsn5zrDGJs/f77+MPRtuyPUr1qyZIl2tCdOnDAYDMnJyampqREREUQUHR2dlpY2f3BJSUlJTU1NSUl56qmnFixYMH78eCKaOnXqggULkpOTDQbD2bNnnT4o7dhu/ob6zrzyyitEFBsbyy/MTpw4QUQRERG9vb28PFartb+/XytVVlYWEW3dupU/ku7t7d2/f/+ePXtiY2M9PDw2bty4e/fu/Px8IkpPT9e24o3jx48HBQURUX5+vt0qJ37kzm/fvv38+fN1g0ttbW19fX1WVpabm1tubm59fT3vr6uru3DhwpYtW4ho+fLlQx7DgQMHiCgtLW3ItYyx8PBwNze3s2fPagE2m81isWgfXa2huDMXL1708/MjosmTJzPGzGbzAw88QES7du3ilbbZbAkJCcHBwfws9OOPPxJRWFhYR0eH3WucqKioO+64g29VUVEx8BW+du1a/XQxm838O1t7ciXpy5g78/333+uzM8bWrl1LRI53UGVlZUSUkZFhF88/Xr169fbbb/f19W1qanIM+O6774ho2rRp+rHob/McN1G+R3Fnnn32WX59EhMTwxhbv349ET3yyCP6usbExBARnzGfffbZxIkTHR89Xbp0ycPDY86cOXzDoqIivXi8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");

},
436761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438739-d9168437b626c63029e14ca9bc546212.png");

},
163563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478695-5e2ec872fd95a81e22cf93518f4f69fc.png");

},
23795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958694-f08bc278e969b41480a874b6fca5efb2.png");

},
897273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
617357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
554537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799044-ebb17b0354f84336c1c1d2d0ca102d33.png");

},
284615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799046-fd1c51f7cd0a89f70e4a4ee6e3fefe43.png");

},
913445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478697-4b57ce94ba89e9ae54d2e5f27d398a7f.png");

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