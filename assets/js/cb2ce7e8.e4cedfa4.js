"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["779775"], {
381528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_draw_text_display_text_custom_c_text_custom_c_md_cb2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-draw-text-display-text-custom-c-text-custom-c-md-cb2.json
var site_docs_arkgraphics_2_d_text_draw_text_display_text_custom_c_text_custom_c_md_cb2_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/draw-text-display/text-custom-c/text-custom-c","title":"自定义文本绘制与显示（C/C++）","description":"在复杂的文本排版场景中，当系统提供的标准文本组件无法满足特定的视觉或交互需求时，开发者可以利用ArkGraphics 2D提供的底层文本绘制能力，通过直接控制画布（Canvas）和文本样式，实现对文本外观、布局的精细控制。这种能力适用于需要高度定制化文本渲染效果的场景，例如艺术字体、复杂的富文本编排或特殊的动态文字效果。","source":"@site/docs/arkgraphics-2d/text/draw-text-display/text-custom-c/text-custom-c.md","sourceDirName":"arkgraphics-2d/text/draw-text-display/text-custom-c","slug":"/arkgraphics-2d/text/draw-text-display/text-custom-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/text-custom-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"自定义文本绘制与显示（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-custom-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"复杂文本绘制与显示（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/complex-text-c/"},"next":{"title":"文本开发常见问题","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/text-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/draw-text-display/text-custom-c/text-custom-c.md


const frontMatter = {
	title: '自定义文本绘制与显示（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-custom-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义文本绘制与显示（C/C++）';

const assets = {

};



const toc = [{
  "value": "文本塑形",
  "id": "文本塑形",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "自定义文本绘制与显示cc",
        children: "自定义文本绘制与显示（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在复杂的文本排版场景中，当系统提供的标准文本组件无法满足特定的视觉或交互需求时，开发者可以利用ArkGraphics 2D提供的底层文本绘制能力，通过直接控制画布（Canvas）和文本样式，实现对文本外观、布局的精细控制。这种能力适用于需要高度定制化文本渲染效果的场景，例如艺术字体、复杂的富文本编排或特殊的动态文字效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字体引擎作为图形系统中的核心组件，负责将字符代码转换为可视化的字形，并精确计算每个字形的布局和位置，为自定义文本绘制提供底层支持。通过文本测量接口，开发者可以获取文本的精确尺寸，这是实现精准布局（如居中显示）的基础。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本塑形",
      children: "文本塑形"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本塑形是字体引擎提供的一项关键能力，它允许开发者不经过系统默认的文本排版流程，直接获取文本的底层字形信息（如宽度、方向等测量信息）。这使得开发者能够基于这些原始数据，实现完全自定义的排版逻辑、绘制操作以及断行策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种能力适用于以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义富文本渲染：例如在社交媒体、新闻客户端等应用中，需要实现图文混排、多样式文本混合显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨平台一致性排版需求应用：确保文本在不同平台或设备上呈现一致的视觉效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "精细化排版管理：如实现艺术排版、动态文字布局等系统标准文本组件难以达到的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本塑形中常用接口如下表所示，详细接口说明参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h",
        children: "drawing_text_typography.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-blob-h/capi-drawing-text-blob-h",
        children: "drawing_text_blob.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_LineTypography* OH_Drawing_CreateLineTypography(OH_Drawing_TypographyCreate* handler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个排版行对象OH_Drawing_LineTypography的指针，排版行对象保存着文本内容以及样式的载体，可以用于计算单行排版信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextLine* OH_Drawing_LineTypographyCreateLine(OH_Drawing_LineTypography* lineTypography,size_t startIndex, size_t count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定区间文本内容创建一个指向文本行对象OH_Drawing_TextLine的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Array* OH_Drawing_TextLineGetGlyphRuns(OH_Drawing_TextLine* line)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文本行对象中的文本渲染单元数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Array* OH_Drawing_GetRunGlyphs(OH_Drawing_Run* run, int64_t start, int64_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取渲染单元指定范围内的字形数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Font* OH_Drawing_GetRunFont(OH_Drawing_Run* run)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取渲染单元字体对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Array* OH_Drawing_GetRunGlyphAdvances(OH_Drawing_Run* run, uint32_t start, uint32_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取渲染单元字体宽度数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextBlobBuilder* OH_Drawing_TextBlobBuilderCreate(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个文本构造器对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextBlob* OH_Drawing_TextBlobBuilderMake(OH_Drawing_TextBlobBuilder* textBlobBuilder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从文本构造器中创建文本对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawTextBlob(OH_Drawing_Canvas* canvas, const OH_Drawing_TextBlob* textBlob, float x, float y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一段文字。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持获取文字塑形结果能力。从API version 20开始，支持获取文字排版方向和文字字形宽度。关键代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的src/main/cpp/CMakeLists.txt文件中添加以下lib。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libnative_drawing.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_text_typography.h>\n#include <native_drawing/drawing_text_blob.h>\n#include <native_drawing/drawing_text_line.h>\n#include <native_drawing/drawing_text_run.h>\n#include <native_drawing/drawing_text_lineTypography.h>\n#include <native_drawing/drawing_rect.h>\n#include <native_drawing/drawing_point.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建段落样式，并使用构造段落生成器ParagraphBuilder生成段落实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个 TypographyStyle，创建 TypographyCreate 时需要使用\nOH_Drawing_TypographyStyle *typoStyle = OH_Drawing_CreateTypographyStyle();\n// 设置文字颜色、大小、字重，不设置 TextStyle 会使用 TypographyStyle 中的默认 TextStyle\nOH_Drawing_TextStyle *txtStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleFontSize(txtStyle, DIV_TEN(width_));\n\n// 创建 FontCollection，FontCollection 用于管理字体匹配逻辑\nOH_Drawing_FontCollection *fc = OH_Drawing_CreateSharedFontCollection();\n// 使用 FontCollection 和 之前创建的 TypographyStyle 创建 TypographyCreate。TypographyCreate 用于创建 Typography\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typoStyle, fc);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置文本样式，添加文本内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置文本内容，并将文本添加到 handler 中\nOH_Drawing_TypographyHandlerPushTextStyle(handler, txtStyle);\nconst char *text = \"Hello World\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建行对象。获取行中所有文字的塑形结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_Drawing_LineTypographyCreateLine()方法创建一个单行对象，通过行对象OH_Drawing_TextLineGetGlyphRuns()方法获取相同样式的文字单元。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过 handler 创建一个 Typography\nOH_Drawing_LineTypography *lineTypography = OH_Drawing_CreateLineTypography(handler);\n// 创建一个 TextLine，取(0, 11)的字符\nOH_Drawing_TextLine *textLine = OH_Drawing_LineTypographyCreateLine(lineTypography, 0, 11);\n\n// 获取塑形结果\nOH_Drawing_Array *runs = OH_Drawing_TextLineGetGlyphRuns(textLine);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该步骤是文本塑形流程中的自定义绘制环节。通过调用OH_Drawing_GetRunGlyphs()方法获取文本中每个字符对应的字形序号，再结合OH_Drawing_GetRunFont()方法获取的字体对象，即可唯一确定每个字形的具体图形信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从 API version 20 开始，新增的OH_Drawing_GetRunGlyphAdvances()方法能够返回一个数组，其中包含了每个字形在绘制时建议占用的宽度和高度。依赖这些精确的测量数据，开发者可以自由地计算并定义每个字形的绘制位置，从而实现复杂的文本布局效果，如自定义字符间距、垂直偏移或特殊排版。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "size_t runsLength = OH_Drawing_GetDrawingArraySize(runs);\nfor (int i = 0; i < runsLength; i++) {\n    OH_Drawing_Run *run = OH_Drawing_GetRunByIndex(runs, i);\n    // 获取所有字形数据\n    OH_Drawing_Array *glyphs = OH_Drawing_GetRunGlyphs(run, 0, 0);\n    size_t glyphsLength = OH_Drawing_GetDrawingArraySize(glyphs);\n    // 获取相同绘制单元字体\n    OH_Drawing_Font *font = OH_Drawing_GetRunFont(run);\n    OH_Drawing_Array *advances = OH_Drawing_GetRunGlyphAdvances(run, 0, 0);\n\n    OH_Drawing_TextBlobBuilder *builder = OH_Drawing_TextBlobBuilderCreate();\n    // 创建一个20*20的矩形\n    OH_Drawing_Rect *rect = OH_Drawing_RectCreate(0, 0, 20, 20);\n    const OH_Drawing_RunBuffer *buffer = OH_Drawing_TextBlobBuilderAllocRunPos(builder, font, glyphsLength, rect);\n\n    // 创建字形buffer，通过drawing接口进行字形独立绘制\n    int x = 0;\n    int y = 0;\n    for (int index = 0; index < glyphsLength; index++) {\n        buffer->glyphs[index] = OH_Drawing_GetRunGlyphsByIndex(glyphs, index);\n        // 设置字形位置\n        buffer->pos[index * TWO_INT] = x;\n        buffer->pos[index * TWO_INT + 1] = y;\n\n        OH_Drawing_Point *advance = OH_Drawing_GetRunGlyphAdvanceByIndex(advances, index);\n        float pos = 0;\n        OH_Drawing_PointGetX(advance, &pos);\n        x += pos + 10; // 每个字形间水平间隔10px\n        OH_Drawing_PointGetY(advance, &pos);\n        y += pos + 30; // 每个字形间垂直间隔30px\n    }\n\n    // 自定义绘制一串具有相同属性的一系列连续字形\n    OH_Drawing_TextBlob *textBlob = OH_Drawing_TextBlobBuilderMake(builder);\n    // 将文本绘制到画布(20,100)上\n    OH_Drawing_CanvasDrawTextBlob(cCanvas_, textBlob, 20, 100);\n\n    // 释放内存\n    OH_Drawing_TextBlobDestroy(textBlob);\n    OH_Drawing_FontDestroy(font);\n    OH_Drawing_DestroyRunGlyphAdvances(advances);\n    OH_Drawing_DestroyRunGlyphs(glyphs);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放内存"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放内存\nOH_Drawing_DestroyTypographyStyle(typoStyle);\nOH_Drawing_DestroyTextStyle(txtStyle);\nOH_Drawing_DestroyFontCollection(fc);\nOH_Drawing_DestroyTypographyHandler(handler);\nOH_Drawing_DestroyLineTypography(lineTypography);\nOH_Drawing_DestroyTextLine(textLine);\nOH_Drawing_DestroyRuns(runs);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(820308)/* ["default"] */.A) + "",
        width: "673",
        height: "426"
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
820308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478699-91469821c2ac1bfbfdd5ac607a9ec133.png");

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