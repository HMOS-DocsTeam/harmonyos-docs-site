"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["925282"], {
927230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_font_manager_system_font_arkts_system_font_arkts_md_619_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-font-manager-system-font-arkts-system-font-arkts-md-619.json
var site_docs_arkgraphics_2_d_text_font_manager_system_font_arkts_system_font_arkts_md_619_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/font-manager/system-font-arkts/system-font-arkts","title":"系统字体的信息获取和使用（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/text/font-manager/system-font-arkts/system-font-arkts.md","sourceDirName":"arkgraphics-2d/text/font-manager/system-font-arkts","slug":"/arkgraphics-2d/text/font-manager/system-font-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/system-font-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"系统字体的信息获取和使用（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-font-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义字体的注册和使用（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/custom-font-arkts/"},"next":{"title":"使用主题字体（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/theme-font-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/font-manager/system-font-arkts/system-font-arkts.md


const frontMatter = {
	title: '系统字体的信息获取和使用（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-font-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '系统字体的信息获取和使用（ArkTS）';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "系统字体的信息获取和使用arkts",
        children: "系统字体的信息获取和使用（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统字体是指操作系统预设的字体，用于在没有指定自定义字体时显示文本，确保文本的可读性和一致性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用系统字体"
        })
      }), "的情况通常是在应用未注册自定义字体，或在没有显式指定文本样式时，系统会使用默认的系统字体。另外，系统字体有多种，开发者可以先获取系统字体的配置信息，并根据信息中的字体家族名来进行系统字体的切换和使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前ArkTS侧暂不支持禁用系统字体，Native侧支持禁用系统字体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是系统字体相关的常用接口和结构体，ArkTS侧对外接口由ArkUI提供，详细接口说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-font/js-apis-font",
        children: "@ohos.font"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getUIFontConfig() : UIFontConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统字体配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取系统字体信息",
      children: "获取系统字体信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { font } from '@kit.ArkUI'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取系统字体信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let fontConfig = font.getUIFontConfig();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在获取系统字体信息之后通过日志打印字体信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "console.info('sysFontMfg::font-dir -----------' + String(fontConfig.fontDir.length));\nfor (let i = 0; i < fontConfig.fontDir.length; i++) {\n  console.info(fontConfig.fontDir[i]);\n}\nconsole.info('sysFontMfg::generic-------------' + String(fontConfig.generic.length));\nfor (let i = 0; i < fontConfig.generic.length; i++) {\n  console.info('sysFontMfg::family:' + fontConfig.generic[i].family);\n  for (let j = 0; j < fontConfig.generic[i].alias.length; j++) {\n    console.info(fontConfig.generic[i].alias[j].name + ' ' + fontConfig.generic[i].alias[j].weight);\n  }\n}\nconsole.info('sysFontMfg::fallback------------' + String(fontConfig.fallbackGroups.length));\nfor (let i = 0; i < fontConfig.fallbackGroups.length; i++) {\n  console.info('sysFontMfg::fontSetName:' + fontConfig.fallbackGroups[i].fontSetName);\n  for (let j = 0; j < fontConfig.fallbackGroups[i].fallback.length; j++) {\n    console.info('sysFontMfg::language:' + fontConfig.fallbackGroups[i].fallback[j].language + ' family:' +\n      fontConfig.fallbackGroups[i].fallback[j].family);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下打印的示例为应用设备系统对应的部分系统字体配置信息情况，不同设备系统配置信息可能不同，此处仅示意。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756650)/* ["default"] */.A) + "",
        width: "575",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用或切换系统字体",
      children: "使用或切换系统字体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统字体可以有多种，可以先获取系统字体配置信息，再根据其中的字体家族名（即TextStyle中的fontFamilies）来进行系统字体的切换和使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不指定使用任何字体时，会使用系统默认字体“HarmonyOS Sans”显示文本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { text } from '@kit.ArkGraphics2D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建textStyle1，指定fontFamilies为“HarmonyOS Sans SC”，默认中文字体为“HarmonyOS Sans SC”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let textStyle1: text.TextStyle = {\n  color: { alpha: 255, red: 255, green: 0, blue: 0 },\n  fontSize: 100,\n  fontFamilies: ['HarmonyOS Sans SC']\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建textStyle2，指定fontFamilies为“HarmonyOS Sans TC”（该两种字体易于观察同一文字字型差异）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let textStyle2: text.TextStyle = {\n  color: { alpha: 255, red: 255, green: 0, blue: 0 },\n  fontSize: 100,\n  fontFamilies: ['HarmonyOS Sans TC']\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建段落生成器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个段落样式对象，以设置排版风格\nlet myParagraphStyle: text.ParagraphStyle = {\n  textStyle: textStyle1,\n  align: 3,\n  wordBreak: text.WordBreak.NORMAL\n};\n// 获取全局字体集实例\nlet fontCollection = text.FontCollection.getGlobalInstance(); //获取Arkui全局FC\n// 创建一个段落生成器\nlet ParagraphGraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "先后将textStyle1和textStyle2添加到段落样式中并添加文字。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let str:string = '模块描述\\n';\n// 添加第一种文本样式和对应文本内容\nParagraphGraphBuilder.pushStyle(textStyle1);\nParagraphGraphBuilder.addText(str);\n// 添加第二种文本样式和对应文本内容\nParagraphGraphBuilder.pushStyle(textStyle2);\nParagraphGraphBuilder.addText(str);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成段落，用于后续绘制使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let paragraph = ParagraphGraphBuilder.build();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果展示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386776)/* ["default"] */.A) + "",
        width: "565",
        height: "429"
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
756650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478673-fa774a78d0549b2b03f42f9eb3c9bd86.png");

},
386776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799024-8640a184152558397f806f82900745fe.png");

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