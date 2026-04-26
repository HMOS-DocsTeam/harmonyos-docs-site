"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["840212"], {
246634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_canvas_js_components_canvas_canvas_md_2e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-canvas-comp-js-components-canvas-canvas-js-components-canvas-canvas-md-2e8.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_canvas_js_components_canvas_canvas_md_2e8_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas","title":"canvas组件","description":"从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"canvas组件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvas","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-canvas-canvas"},"sidebar":"ref","previous":{"title":"video","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-media-comp/js-components-media-video/js-components-media-video"},"next":{"title":"CanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas.md


const frontMatter = {
	title: 'canvas组件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvas',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-canvas-canvas'
};
const contentTitle = 'canvas组件';

const assets = {

};



const toc = [{
  "value": "权限列表",
  "id": "权限列表",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "样式",
  "id": "样式",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "getContext",
  "id": "getcontext",
  "level": 3
}, {
  "value": "toDataURL6+",
  "id": "todataurl6",
  "level": 3
}, {
  "value": "ContextAttrOptions6+",
  "id": "contextattroptions6",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
        id: "canvas组件",
        children: "canvas组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802564)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供画布组件。用于自定义绘制图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限列表",
      children: "权限列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-attributes/js-components-common-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式",
      children: "样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-styles/js-components-common-styles",
        children: "通用样式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-events/js-components-common-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-methods/js-components-common-methods",
        children: "通用方法"
      }), "外，还支持如下方法："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcontext",
      children: "getContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getContext(type: '2d', options?: ContextAttrOptions): CanvasRenderingContext2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取canvas绘图上下文。不支持在onInit和onReady中进行调用。"
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
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为'2d'，返回值为2D绘制对象，该对象可用于在画布组件上绘制矩形、文本、图片等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ContextAttrOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持配置是否开启抗锯齿功能，默认为关闭。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在画布组件上绘制矩形、文本、图片等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "todataurl6",
      children: "toDataURL6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toDataURL(type?: string, quality?: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成一个包含图片展示的URL。"
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
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，用于指定图像格式，默认格式为image/png。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定图片格式为image/jpeg或image/webp的情况下，可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的URL地址。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contextattroptions6",
      children: "ContextAttrOptions6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于配置Canvas渲染上下文属性的选项对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "antialias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启抗锯齿功能。  true表示开启抗锯齿功能；false表示不开启抗锯齿功能。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div style=\"margin: 100; flex-direction: column\">\n  <canvas ref=\"canvas1\" style=\"width: 200px; height: 150px; background-color: rgb(213, 213, 213);\"></canvas>\n  <input type=\"button\" style=\"width: 180px; height: 60px; margin: 13;\" value=\"fillStyle\" onclick=\"handleClick\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  handleClick() {\n    const el = this.$refs.canvas1;\n    var dataURL = el.toDataURL();\n    console.info(dataURL);\n    // \"data:image/png;base64,xxxxxxxx...\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556812)/* ["default"] */.A) + "",
        width: "360",
        height: "357"
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
802564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
556812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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