"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["110980"], {
700446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_font_manager_system_font_c_system_font_c_md_7af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-font-manager-system-font-c-system-font-c-md-7af.json
var site_docs_arkgraphics_2_d_text_font_manager_system_font_c_system_font_c_md_7af_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/font-manager/system-font-c/system-font-c","title":"系统字体的信息获取和使用（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/text/font-manager/system-font-c/system-font-c.md","sourceDirName":"arkgraphics-2d/text/font-manager/system-font-c","slug":"/arkgraphics-2d/text/font-manager/system-font-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/system-font-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"系统字体的信息获取和使用（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-font-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义字体的注册和使用（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/custom-font-c/"},"next":{"title":"文本测量（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/text-measure/text-measure-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/font-manager/system-font-c/system-font-c.md


const frontMatter = {
	title: '系统字体的信息获取和使用（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-font-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '系统字体的信息获取和使用（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "获取系统字体信息",
  "id": "获取系统字体信息",
  "level": 2
}, {
  "value": "使用或切换系统字体",
  "id": "使用或切换系统字体",
  "level": 2
}, {
  "value": "禁用系统字体",
  "id": "禁用系统字体",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "系统字体的信息获取和使用cc",
        children: "系统字体的信息获取和使用（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统字体是指操作系统预设的字体，用于在没有指定自定义字体时显示文本，确保文本的可读性和一致性。默认的系统字体为“HarmonyOS Sans”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用系统字体"
        })
      }), "的情况通常是在应用未注册自定义字体，或在没有显式指定文本样式时，系统会使用默认的系统字体。另外，系统字体有多种，开发者可以先获取系统字体的配置信息，并根据信息中的字体家族名来进行系统字体的切换和使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "禁用系统字体"
        })
      }), "的情况通常发生在开发者希望确保应用中仅使用自定义字体，而不受操作系统默认字体影响的场景。当自定义字体不存在时，不禁用系统字体，系统则会自动回退到默认字体。通过禁用系统字体，开发者可以在任何场景避免字体回退为系统默认字体，确保文本渲染符合设计预期，从而统一应用的视觉风格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是系统字体相关的常用接口和结构体，详细接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
        children: "Drawing"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Drawing_FontConfigInfo* OH_Drawing_GetSystemFontConfigInfo(OH_Drawing_FontConfigInfoErrorCode*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统字体配置信息，返回系统字体配置信息结构体OH_Drawing_FontConfigInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_DestroySystemFontConfigInfo(OH_Drawing_FontConfigInfo*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放系统字体配置信息占用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建可共享的字体集对象OH_Drawing_FontCollection。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextStyle* OH_Drawing_CreateTextStyle(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向OH_Drawing_TextStyle对象的指针，用于设置文本样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_SetTextStyleFontFamilies (OH_Drawing_TextStyle *, int, const char *fontFamilies[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定文本样式的字体家族类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁用系统字体。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "结构体名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontConfigInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统字体配置信息结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontGenericInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统所支持的通用字体集信息结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontFallbackGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "备用字体集信息结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取系统字体信息",
      children: "获取系统字体信息"
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
            children: "#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_text_typography.h>\n#include <native_drawing/drawing_register_font.h>\n#include <hilog/log.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取系统字体的配置信息，可以通过返回的状态码确定获取信息是否成功，状态码的包含的具体情况和对应含义可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_fontconfiginfoerrorcode",
            children: "OH_Drawing_FontConfigInfoErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_FontConfigInfoErrorCode fontConfigInfoErrorCode;  // 用于接收错误代码\nOH_Drawing_FontConfigInfo* fontConfigInfo = OH_Drawing_GetSystemFontConfigInfo(&fontConfigInfoErrorCode);\nif(fontConfigInfoErrorCode != SUCCESS_FONT_CONFIG_INFO) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, \"PrintSysFontMetrics\", \"获取系统信息失败，错误代码为： %{public}d\", fontConfigInfoErrorCode);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统字体的配置信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontconfiginfo/capi-drawing-oh-drawing-fontconfiginfo",
            children: "OH_Drawing_FontConfigInfo"
          }), "包含以下几类信息："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统字体文件路径数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通用字体集列表数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "备用字体集列表数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统字体文件路径列表。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通用字体集列表，具体信息可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontgenericinfo/capi-drawing-oh-drawing-fontgenericinfo",
              children: "OH_Drawing_FontGenericInfo"
            }), "结构体。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["备用字体集列表，具体信息可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfallbackgroup/capi-drawing-oh-drawing-fontfallbackgroup",
              children: "OH_Drawing_FontFallbackGroup"
            }), "结构体。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例展示系统字体的一些具体配置信息的获取："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取系统字体配置信息示例\nif (fontConfigInfo != nullptr) {\n    // 获取字体文件路径数量，打印日志\n    size_t fontDirCount = fontConfigInfo->fontDirSize;\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"PrintSysFontMetrics\", \"字体文件路径数量为: %{public}zu\\n\", fontDirCount);\n    // 遍历字体文件路径列表，打印日志\n    for (size_t i = 0; i < fontDirCount; ++i) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"PrintSysFontMetrics\", \"字体文件路径为: %{public}s\\n\",\n                     fontConfigInfo->fontDirSet[i]);\n    }\n    // 获取通用字体集数量，打印日志\n    size_t genericCount = fontConfigInfo->fontGenericInfoSize;\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"PrintSysFontMetrics\", \"通用字体集数量为: %{public}zu\\n\", genericCount);\n    // 遍历获取每个通用字体集中的字体家族名（例如 HarmonyOS Sans），打印日志\n    for (size_t i = 0; i < genericCount; ++i) {\n        OH_Drawing_FontGenericInfo &genericInfo = fontConfigInfo->fontGenericInfoSet[i];\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"PrintSysFontMetrics\",\n                     \"获取第%{public}zu个通用字体集中的字体家族名为: %{public}s\", i, genericInfo.familyName);\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下打印的示例为应用设备系统对应的部分系统字体配置信息情况，不同设备系统配置信息可能不同，此处仅示意。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(848646)/* ["default"] */.A) + "",
            width: "1041",
            height: "176"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如若后续不再需要系统字体的系统配置信息时，则释放其占用的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_DestroySystemFontConfigInfo(fontConfigInfo);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用或切换系统字体",
      children: "使用或切换系统字体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统字体可以有多种，可以先获取系统字体配置信息，再根据其中的字体家族名来进行系统字体的切换和使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不指定使用任何字体时，会使用系统默认字体“HarmonyOS Sans”显示文本。"
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
            children: "#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_text_typography.h>\n#include <native_drawing/drawing_register_font.h>\n#include <hilog/log.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建字体管理器，建议优先使用OH_Drawing_CreateSharedFontCollection创建可共享的字体集对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(533531)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_Drawing_CreateFontCollection和OH_Drawing_CreateSharedFontCollection均可创建字体管理器OH_Drawing_FontCollection对象，但前者创建的字体集指针对象只能被一个段落生成器OH_Drawing_TypographyCreate对象使用，无法被多个段落生成器OH_Drawing_TypographyCreate对象共享使用。如需在多个段落生成器OH_Drawing_TypographyCreate对象间共享使用，请使用后者创建可共享的字体集对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_FontCollection *fontCollection = OH_Drawing_CreateSharedFontCollection();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个文本样式对象，即OH_Drawing_TextStyle对象，用于设置文本样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_TextStyle *textStyle = OH_Drawing_CreateTextStyle();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E5%AD%97%E4%BD%93%E4%BF%A1%E6%81%AF",
            children: "获取系统字体信息"
          }), "，获取系统字体的字体家族名，并在文本样式中设置为该系统字体。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 情况一：设置系统字体为\"HarmonyOS Sans Condensed\"\nconst char *myFontFamilies[] = {\"HarmonyOS Sans Condensed\"};\nOH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);\n\n// 情况二：不手动设置，此时使用的是系统默认字体\"HarmonyOS Sans\"\n// const char* myFontFamilies[] = {\"HarmonyOS Sans Condensed\"};\n// OH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成最终段落文本，以便实现最终的文本绘制和显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置其他文本样式\nOH_Drawing_SetTextStyleColor(textStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 设置字体大小为70.0\nOH_Drawing_SetTextStyleFontSize(textStyle, 70.0);\n// 创建一个段落样式对象，以设置排版风格\nOH_Drawing_TypographyStyle *typographyStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_SetTypographyTextAlign(typographyStyle, TEXT_ALIGN_LEFT); // 设置段落样式为左对齐\n// 创建一个段落生成器\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typographyStyle, fontCollection);\n// 在段落生成器中设置文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, textStyle);\n// 在段落生成器中设置文本内容\nconst char *text = \"Hello World. 你好世界。\\n以上文字使用了系统字体\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 通过段落生成器生成段落\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布(0,height_/2.0)上\nOH_Drawing_TypographyPaint(typography, cCanvas_, 0, height_ / 2.0);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁用系统字体",
      children: "禁用系统字体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当自定义字体不存在时，不禁用系统字体，系统则会自动回退到默认字体。通过禁用系统字体，开发者可以在任何场景避免字体回退为系统默认字体，确保文本渲染符合设计预期，从而统一应用的视觉风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在一些应用场景中，开发者可能希望只使用自定义字体来确保字体一致性或提供更具个性化的用户体验。此时，开发者可以通过禁用系统字体，确保应用只使用注册的自定义字体，而不依赖于系统字体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146722)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁用系统字体后，请确保注册使用自定义字体，否则文本将无法正常显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确保已成功注册自定义字体，用于保证禁用系统字体后文本的正常显示，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/text/font-manager/custom-font-c",
            children: "自定义字体的注册和使用"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            children: "#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_text_typography.h>\n#include <native_drawing/drawing_register_font.h>\n#include <hilog/log.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建字体管理器，建议优先使用OH_Drawing_CreateSharedFontCollection创建可共享的字体集对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_FontCollection *fontCollection = OH_Drawing_CreateSharedFontCollection();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁用系统字体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_DisableFontCollectionSystemFont(fontCollection);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建文本样式对象，使用注册成功的自定义字体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(425002)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若不设置字体，文本会默认使用系统字体，而系统字体禁用后若不设置使用自定义字体，文本将无法正常显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_TextStyle *textStyle = OH_Drawing_CreateTextStyle();\n// 禁用系统字体后的几种情况如下：\n// 情况一：如果此时设置使用了自定义字体，文本会正常显示\n// 该路径是待注册的自定义字体文件在应用设备下的路径，确保该自定义字体文件已正确放置在该路径下\n// 后续使用自定义字体时，需使用到该字体家族名\nconst char* fontFamily = \"HarmonyOS_Sans\";\nconst char* fontPath = \"/system/fonts/HarmonyOS_Sans.ttf\";\n// 返回0为成功，1为文件不存在，2为打开文件失败，3为读取文件失败，4为寻找文件失败，5为获取大小失败，9文件损坏\nint errorCode = OH_Drawing_RegisterFont(fontCollection, fontFamily, fontPath);\nDRAWING_LOGI(\"errorCode = %{public}d\", errorCode);\nconst char *myFontFamilies[] = {\"HarmonyOS_Sans\"}; // 确保已成功注册自定义字体，填入自定义字体的字体家族名\nOH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);\n\n// 情况二：如果此时使用了系统字体，文本将无法显示\n// const char *myFontFamilies[] = {\"HarmonyOS_Sans\"};\n// OH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);\n\n// 情况三：如果此时不设置使用字体，文本会默认使用系统默认字体，而此时系统字体已被禁用，因此文本将无法显示\n// const char *myFontFamilies[] = {\"HarmonyOS_Sans\"};\n// OH_Drawing_SetTextStyleFontFamilies(textStyle, 1, myFontFamilies);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成最终的段落文本，以便实现最终的文本绘制和显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置其他文本样式\nOH_Drawing_SetTextStyleColor(textStyle, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x00, 0x00));\n// 设置字体大小为30.0\nOH_Drawing_SetTextStyleFontSize(textStyle, 30.0);\n// 创建一个段落样式对象，以设置排版风格\nOH_Drawing_TypographyStyle *typographyStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_SetTypographyTextAlign(typographyStyle, TEXT_ALIGN_LEFT); // 设置段落样式为左对齐\n// 创建一个段落生成器\nOH_Drawing_TypographyCreate *handler = OH_Drawing_CreateTypographyHandler(typographyStyle, fontCollection);\n// 在段落生成器中设置文本样式\nOH_Drawing_TypographyHandlerPushTextStyle(handler, textStyle);\n// 在段落生成器中设置文本内容\nconst char *text = \"Hello World.\\n以上文字使用了自定义字体\";\nOH_Drawing_TypographyHandlerAddText(handler, text);\n// 通过段落生成器生成段落\nOH_Drawing_Typography *typography = OH_Drawing_CreateTypography(handler);\n    \n// 设置页面最大宽度\ndouble maxWidth = width_;\nOH_Drawing_TypographyLayout(typography, maxWidth);\n// 将文本绘制到画布(width_/5.0,height_/2.0)上\nOH_Drawing_TypographyPaint(typography, cCanvas_, width_ / 5.0, height_ / 2.0);\n"
          })
        }), "\n"]
      }), "\n"]
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
425002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
848646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478675-58cea80232dd7e6f6fdb7a50c38360d0.png");

},
146722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
533531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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