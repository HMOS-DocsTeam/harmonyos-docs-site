"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["59630"], {
281563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_text_declaration_h_capi_drawing_text_declaration_h_md_e55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-drawing-text-declaration-h-capi-drawing-text-declaration-h-md-e55.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_text_declaration_h_capi_drawing_text_declaration_h_md_e55_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h","title":"drawing_text_declaration.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"title":"drawing_text_declaration.h","sidebar_position":39,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-declaration-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing-text-declaration-h"},"sidebar":"ref","previous":{"title":"drawing_text_blob.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-blob-h/capi-drawing-text-blob-h"},"next":{"title":"drawing_text_font_descriptor.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-font-descriptor-h/capi-drawing-text-font-descriptor-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h.md


const frontMatter = {
	title: 'drawing_text_declaration.h',
	sidebar_position: 39,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-declaration-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing-text-declaration-h'
};
const contentTitle = 'drawing_text_declaration.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "drawing_text_declarationh",
        children: "drawing_text_declaration.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供2D绘制文本相关的数据结构声明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_drawing/drawing_text_declaration.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_drawing.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
        children: "Drawing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection",
              children: "OH_Drawing_FontCollection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontCollection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于加载字体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typography/capi-drawing-oh-drawing-typography",
              children: "OH_Drawing_Typography"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Typography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理排版的布局和显示等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textstyle/capi-drawing-oh-drawing-textstyle",
              children: "OH_Drawing_TextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理字体颜色、装饰等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typographystyle/capi-drawing-oh-drawing-typographystyle",
              children: "OH_Drawing_TypographyStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TypographyStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理排版风格，如文字方向等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-linetypography/capi-drawing-oh-drawing-linetypography",
              children: "OH_Drawing_LineTypography"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_LineTypography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从一段文字中提取单行数据进行排版。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typographycreate/capi-drawing-oh-drawing-typographycreate",
              children: "OH_Drawing_TypographyCreate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TypographyCreate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typography/capi-drawing-oh-drawing-typography",
              children: "OH_Drawing_Typography"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textbox/capi-drawing-oh-drawing-textbox",
              children: "OH_Drawing_TextBox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextBox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收文本框的矩形大小、方向和数量大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-positionandaffinity/capi-drawing-oh-drawing-positionandaffinity",
              children: "OH_Drawing_PositionAndAffinity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_PositionAndAffinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收字体的位置和亲和性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-range/capi-drawing-oh-drawing-range",
              children: "OH_Drawing_Range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收字体的起始位置和结束位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textshadow/capi-drawing-oh-drawing-textshadow",
              children: "OH_Drawing_TextShadow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextShadow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理文本阴影。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontparser/capi-drawing-oh-drawing-fontparser",
              children: "OH_Drawing_FontParser"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontParser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来解析系统字体文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-texttab/capi-drawing-oh-drawing-texttab",
              children: "OH_Drawing_TextTab"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextTab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理文本制表符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textline/capi-drawing-oh-drawing-textline",
              children: "OH_Drawing_TextLine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理文本行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-run/capi-drawing-oh-drawing-run",
              children: "OH_Drawing_Run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于管理文本渲染单元。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfulldescriptor/capi-drawing-oh-drawing-fontfulldescriptor",
              children: "OH_Drawing_FontFullDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontFullDescriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述字体的详细信息，即字体描述符。"
          })]
        })]
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