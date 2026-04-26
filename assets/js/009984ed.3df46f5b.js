"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["555355"], {
818728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_font_manager_custom_font_arkts_custom_font_arkts_md_009_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-font-manager-custom-font-arkts-custom-font-arkts-md-009.json
var site_docs_arkgraphics_2_d_text_font_manager_custom_font_arkts_custom_font_arkts_md_009_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/font-manager/custom-font-arkts/custom-font-arkts","title":"自定义字体的注册和使用（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/text/font-manager/custom-font-arkts/custom-font-arkts.md","sourceDirName":"arkgraphics-2d/text/font-manager/custom-font-arkts","slug":"/arkgraphics-2d/text/font-manager/custom-font-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/custom-font-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义字体的注册和使用（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/custom-font-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用主题字体（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/theme-font-arkts/"},"next":{"title":"系统字体的信息获取和使用（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/system-font-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/font-manager/custom-font-arkts/custom-font-arkts.md


const frontMatter = {
	title: '自定义字体的注册和使用（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/custom-font-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义字体的注册和使用（ArkTS）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "实现流程",
  "id": "实现流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "效果展示",
  "id": "效果展示",
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
        id: "自定义字体的注册和使用arkts",
        children: "自定义字体的注册和使用（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义字体是指开发者根据应用需求创建或选择的字体，通常用于实现特定的文字风格或满足独特的设计要求。当应用需要使用特定的文本样式和字符集时，可以注册并使用自定义字体进行文本渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现流程",
      children: "实现流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义字体的注册"
        })
      }), "是指将字体文件（如ttf、otf文件等）从应用资源注册到系统中，使得应用能够使用这些字体进行文本渲染。注册过程是将字体文件通过字体管理接口注册到系统字体库中，以便在应用中进行调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义字体的使用"
        })
      }), "是指在应用中显式指定使用已注册的自定义字体进行文本渲染。开发者可以根据需要选择特定的文本样式（如常规、粗体、斜体等），并将其应用到UI元素、文本控件或其他文本展示区域，以满足设计要求并提供视觉效果的一致性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义字体注册和使用的常用接口如下表所示，详细接口说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text",
        children: "@ohos.graphics.text (文本模块)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadFontSync(name: string, path: string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadFont(name: string, path: string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource): Promise<void>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unloadFontSync(name: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步接口，注销指定别名的字体。此接口从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unloadFont(name: string): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用指定的别名注销对应字体，使用Promise异步回调。此接口从API version 20开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { NodeController, FrameNode, RenderNode, DrawContext } from '@kit.ArkUI'\nimport { UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册自定义字体。有以下两种方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册自定义字体\n// 方式一：/system/fonts/NotoSansMalayalamUI-SemiBold.ttf文件仅为示例路径，应用根据自身实际填写文件路径\nfontCollection.loadFontSync(familyName, 'file:///system/fonts/NotoSansMalayalamUI-SemiBold.ttf')\n// 方式二：确保已经将自定义字体myFontFile.ttf文件放在本应用工程的entry/src/main/resources/rawfile目录\n// fontCollection.loadFontSync(familyName, $rawfile('myFontFile.ttf'))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用自定义字体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用自定义字体\nlet myFontFamily: Array<string> = [familyName] // 如果已经注册自定义字体，填入自定义字体的字体家族名\n// 设置文本样式\nlet myTextStyle: text.TextStyle = {\n  color: {\n    alpha: 255,\n    red: 255,\n    green: 0,\n    blue: 0\n  },\n  fontSize: 30,\n  // 在文本样式中加入可使用的自定义字体\n  fontFamilies: myFontFamily\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建段落样式，并使用字体管理器实例构造段落生成器ParagraphBuilder实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个段落样式对象，以设置排版风格\nlet myParagraphStyle: text.ParagraphStyle = {\n  textStyle: myTextStyle,\n  align: 3,\n  wordBreak: text.WordBreak.NORMAL\n};\n// 创建一个段落生成器\nlet paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成段落。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在段落生成器中设置文本样式\nparagraphBuilder.pushStyle(myTextStyle);\n// 在段落生成器中设置文本内容\nparagraphBuilder.addText(\"Custom font test\");\n// 通过段落生成器生成段落\nlet paragraph = paragraphBuilder.build();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要释放自定义字体，可以使用unloadFontSync接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注销自定义字体\nfontCollection.unloadFontSync(familyName)\n// 注销之后需要刷新使用该fontCollection的节点\nnewNode.invalidate()\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果展示",
      children: "效果展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658063)/* ["default"] */.A) + "",
        width: "300",
        height: "481"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699846)/* ["default"] */.A) + "",
        width: "300",
        height: "478"
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
699846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958672-8a150d7492bfbb7600b2d5b7e93e56d5.png");

},
658063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438717-402b7738b9d340327af59009fad46044.png");

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