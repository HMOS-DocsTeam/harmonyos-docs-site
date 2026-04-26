"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290015"], {
609881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_universal_comp_inform_js_components_common_gradient_js_components_common_gradient_md_5c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-universal-comp-inform-js-components-common-gradient-js-components-common-gradient-md-5c8.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_universal_comp_inform_js_components_common_gradient_js_components_common_gradient_md_5c8_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient/js-components-common-gradient","title":"渐变样式","description":"从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient/js-components-common-gradient.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient/js-components-common-gradient","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient/js-components-common-gradient","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"渐变样式","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-gradient","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-common-gradient"},"sidebar":"ref","previous":{"title":"动画样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-animation/js-components-common-animation"},"next":{"title":"转场样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-transition/js-components-common-transition"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-gradient/js-components-common-gradient.md


const frontMatter = {
	title: '渐变样式',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-gradient',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-common-gradient'
};
const contentTitle = '渐变样式';

const assets = {

};



const toc = [{
  "value": "线性渐变/重复线性渐变",
  "id": "线性渐变重复线性渐变",
  "level": 2
}, {
  "value": "过渡方向",
  "id": "过渡方向",
  "level": 3
}, {
  "value": "过渡颜色",
  "id": "过渡颜色",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    color: "color",
    deg: "deg",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    length: "length",
    li: "li",
    ol: "ol",
    p: "p",
    percentage: "percentage",
    pre: "pre",
    "side-or-corner": "side-or-corner",
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
  }, _component0 = _components["side-or-corner"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "渐变样式",
        children: "渐变样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482870)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件普遍支持在style或css中设置可以平滑过渡两个或多个指定的颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发框架支持线性渐变（linear-gradient）和重复线性渐变（repeating-linear-gradient）两种渐变效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线性渐变重复线性渐变",
      children: "线性渐变/重复线性渐变"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用渐变样式，需要定义过渡方向和过渡颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "过渡方向",
      children: "过渡方向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过direction或者angle指定过渡方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "direction：指定方向进行渐变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "angle：指定角度进行渐变。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nbackground: linear-gradient(direction/angle, color, color, ...);\nbackground: repeating-linear-gradient(direction/angle, color, color, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "过渡颜色",
      children: "过渡颜色"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持以下四种方式：#ff0000、#ffff0000、rgb(255, 0, 0)、rgba(255, 0, 0, 1)，需要指定至少两种颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["to ", (0,jsx_runtime.jsxs)(_component0, {
              children: [" ", (0,jsx_runtime.jsx)(_component0, {
                children: " = [left"
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bottom]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.deg, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180deg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定过渡方向，以元素几何中心为坐标原点，水平方向为X轴，angle指定了渐变线与Y轴的夹角(顺时针方向)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.color, {
              children: [" [", (0,jsx_runtime.jsx)(_components.length, {})]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.percentage, {
              children: "]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认渐变方向为从上向下渐变。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#gradient {\n  height: 300px;\n  width: 600px;\n  /* 从顶部开始向底部由红色向绿色渐变 */\n  background: linear-gradient(red, #00ff00);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(772730)/* ["default"] */.A) + "",
            width: "290",
            height: "142"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "45度夹角渐变。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 45度夹角，从红色渐变到绿色 */\nbackground: linear-gradient(45deg, rgb(255,0,0),rgb(0, 255, 0));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(109186)/* ["default"] */.A) + "",
            width: "290",
            height: "143"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置方向从左向右渐变。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 从左向右渐变，在距离左边90px和距离左边360px (600*0.6) 之间270px宽度形成渐变 */\nbackground: linear-gradient(to right, rgb(255,0,0) 90px, rgb(0, 255, 0) 60%);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(51483)/* ["default"] */.A) + "",
            width: "291",
            height: "143"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重复渐变。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 从左向右重复渐变，重复渐变区域30px（60-30）透明度0.5 */\nbackground: repeating-linear-gradient(to right, rgba(255, 255, 0, 1) 30px,rgba(0, 0, 255, .5) 60px);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(508248)/* ["default"] */.A) + "",
            width: "290",
            height: "143"
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
109186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440219-f9358e739a2792b46b125f2249a59dce.png");

},
51483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
508248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
772730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
482870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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