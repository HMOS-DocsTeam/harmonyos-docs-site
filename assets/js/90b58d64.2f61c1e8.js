"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290802"], {
459611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_syntax_js_lite_framework_syntax_css_js_lite_framework_syntax_css_md_90b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-lite-comp-js-lite-framework-overview-js-lite-syntax-js-lite-framework-syntax-css-js-lite-framework-syntax-css-md-90b.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_syntax_js_lite_framework_syntax_css_js_lite_framework_syntax_css_md_90b_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css","title":"CSS语法参考","description":"CSS是描述HML页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css","slug":"/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CSS语法参考","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-syntax-css","kit":"应用框架","last_updated":"2026-04-22","slug":"js-lite-framework-syntax-css"},"sidebar":"ref","previous":{"title":"HML语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-hml/js-lite-framework-syntax-hml"},"next":{"title":"JS语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css.md


const frontMatter = {
	title: 'CSS语法参考',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-syntax-css',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-lite-framework-syntax-css'
};
const contentTitle = 'CSS语法参考';

const assets = {

};



const toc = [{
  "value": "样式导入",
  "id": "样式导入",
  "level": 2
}, {
  "value": "声明样式",
  "id": "声明样式",
  "level": 2
}, {
  "value": "选择器",
  "id": "选择器",
  "level": 2
}, {
  "value": "伪类",
  "id": "伪类",
  "level": 2
}, {
  "value": "样式预编译",
  "id": "样式预编译",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "css语法参考",
        children: "CSS语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSS是描述HML页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式导入",
      children: "样式导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了模块化管理和代码复用，CSS样式文件支持 @import 语句，导入 CSS 文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明样式",
      children: "声明样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个页面目录下存在一个与布局hml文件同名的css文件，用来描述该hml页面中组件的样式，决定组件应该如何显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内部样式，支持使用style、class属性来控制组件的样式。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\">\n  <text style=\"color: red\">Hello World</text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件导入，合并外部样式文件。例如，在common目录中定义样式文件style.css，并在index.css文件首行中进行导入："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* style.css */\n.title {\n  font-size: 50px;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n@import '../../common/style.css';\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器",
      children: "选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css选择器用于选择需要添加样式的元素，支持的选择器如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选择器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择class=\"container\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#titleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择id=\"titleId\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ","
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".title, .content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择class=\"title\"和class=\"content\"的组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- 页面布局xxx.hml -->\n<div id=\"containerId\" class=\"container\">\n  <text id=\"titleId\" class=\"title\">标题</text>\n  <div class=\"content\">\n    <text id=\"contentId\">内容</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 页面样式xxx.css */\n/* 对class=\"title\"的组件设置样式 */\n.title {\n  font-size: 30px;\n}\n/* 对id=\"contentId\"的组件设置样式 */\n#contentId {\n  font-size: 20px;\n}\n/* 对所有class=\"title\"以及class=\"content\"的组件都设置padding为5px */\n.title, .content {\n  padding: 5px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "伪类",
      children: "伪类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css伪类是选择器中的关键字，用于指定要选择元素的特殊状态。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "input[type=\"button\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示被用户激活的元素，如：被用户按下的按钮。轻量级智能穿戴上伪类选择器上仅支持background-color 和background-image 的样式设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "input[type=\"checkbox\"、type=\"radio\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示checked属性为true的元素。轻量级智能穿戴上伪类选择器上仅支持background-color 和background-image 的样式设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "伪类示例如下，设置按钮的:active伪类可以控制被用户按下时的样式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <input type=\"button\" class=\"button\" value=\"Button\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n.button:active {\n  background-color: #888888;/*按钮被激活时，背景颜色变为#888888 */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式预编译",
      children: "样式预编译"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预编译提供了利用特有语法生成css的程序，可以提供变量、运算等功能，令开发者更便捷地定义组件样式，目前支持less、sass和scss的预编译。使用样式预编译时，需要将原css文件后缀改为less、sass或scss，如index.css改为index.less、index.sass或index.scss。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前文件使用样式预编译，例如将原index.css改为index.less："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.less */\n/* 定义变量 */\n@colorBackground: #000000;\n.container {\n  background-color: @colorBackground; /* 使用当前less文件中定义的变量 */\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用预编译文件，例如common中存在style.scss文件，将原index.css改为index.scss，并引入style.scss："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* style.scss */\n/* 定义变量 */\n$colorBackground: #000000;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在index.scss中引用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.scss */\n/* 引入外部scss文件 */\n@import '../../common/style.scss';\n.container {\n  background-color: $colorBackground; /* 使用style.scss中定义的变量 */\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(140506)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用的预编译文件建议放在common目录进行管理。"
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
140506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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