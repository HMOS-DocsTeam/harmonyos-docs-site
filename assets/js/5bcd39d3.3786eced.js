"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["557681"], {
343806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_syntax_js_lite_framework_syntax_js_js_lite_framework_syntax_js_md_5bc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-lite-comp-js-lite-framework-overview-js-lite-syntax-js-lite-framework-syntax-js-js-lite-framework-syntax-js-md-5bc.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_syntax_js_lite_framework_syntax_js_js_lite_framework_syntax_js_md_5bc_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js","title":"JS语法参考","description":"JS文件用来定义HML页面的业务逻辑，支持ECMA规范的JavaScript语言。基于JavaScript语言的动态化能力，可以使应用更加富有表现力，具备更加灵活的设计。下面讲述JS文件的编译和运行的支持情况。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js","slug":"/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JS语法参考","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-syntax-js","kit":"应用框架","last_updated":"2026-04-22","slug":"js-lite-framework-syntax-js"},"sidebar":"ref","previous":{"title":"CSS语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-css/js-lite-framework-syntax-css"},"next":{"title":"通用事件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-universal-comp-inform/js-lite-common-events/js-lite-common-events"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-js/js-lite-framework-syntax-js.md


const frontMatter = {
	title: 'JS语法参考',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-syntax-js',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-lite-framework-syntax-js'
};
const contentTitle = 'JS语法参考';

const assets = {

};



const toc = [{
  "value": "语法",
  "id": "语法",
  "level": 2
}, {
  "value": "对象",
  "id": "对象",
  "level": 2
}, {
  "value": "获取DOM元素",
  "id": "获取dom元素",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "js语法参考",
        children: "JS语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS文件用来定义HML页面的业务逻辑，支持ECMA规范的JavaScript语言。基于JavaScript语言的动态化能力，可以使应用更加富有表现力，具备更加灵活的设计。下面讲述JS文件的编译和运行的支持情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持ES6语法。轻量级智能穿戴支持的ES6语法有限，仅支持以下ES6 语法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "let/const"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arrow functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "default value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "destructuring assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "destructuring binding pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "enhanced object initializer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "for-of"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rest parameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "template strings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用import方法引入功能模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import router from '@ohos.router';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用import方法导入js代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import utils from '../../common/utils.js';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对象",
      children: "对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面对象"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "data"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object/Function"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面的数据模型，类型是对象或者函数，如果类型是函数，返回值必须是对象。属性名不能以$或_开头，不要使用保留字for, if, show, tid。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$refs"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["持有注册过ref 属性的DOM元素或子组件实例的对象。示例见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96dom%E5%85%83%E7%B4%A0",
                  children: "获取DOM元素"
                }), "。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取dom元素",
      children: "获取DOM元素"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过$refs获取DOM元素"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\">\n  <image-animator class=\"image-player\" ref=\"animator\" images=\"{{images}}\" duration=\"1s\" onclick=\"handleClick\"></image-animator>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.js\nexport default {\n  data: {\n    images: [\n      { src: '/common/frame1.png' },\n      { src: '/common/frame2.png' },\n      { src: '/common/frame3.png' },\n    ],\n  },\n  handleClick() {\n    const animator = this.$refs.animator; // 获取ref属性为animator的DOM元素\n    const state = animator.getState();\n    if (state === 'paused') {\n      animator.resume();\n    } else if (state === 'stopped') {\n      animator.start();\n    } else {\n      animator.pause();\n    }\n  },\n};\n"
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