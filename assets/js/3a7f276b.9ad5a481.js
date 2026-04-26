"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["176490"], {
683873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_custom_comp_js_components_custom_basic_usage_js_components_custom_basic_usage_md_3a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-custom-comp-js-components-custom-basic-usage-js-components-custom-basic-usage-md-3a7.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_custom_comp_js_components_custom_basic_usage_js_components_custom_basic_usage_md_3a7_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage","title":"自定义组件的基本用法","description":"自定义组件是用户根据业务需求，将已有的组件组合，封装成的新组件，可以在工程中多次调用，从而提高代码的可读性。自定义组件通过element引入到宿主页面，使用方法如下：","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义组件的基本用法","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-custom-basic-usage","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-custom-basic-usage"},"sidebar":"ref","previous":{"title":"animateTransform","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-animatetransform/js-components-svg-animatetransform"},"next":{"title":"数据传递与处理","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage.md


const frontMatter = {
	title: '自定义组件的基本用法',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-custom-basic-usage',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-custom-basic-usage'
};
const contentTitle = '自定义组件的基本用法';

const assets = {

};



const toc = [{
  "value": "自定义事件",
  "id": "自定义事件",
  "level": 2
}, {
  "value": "自定义组件数据",
  "id": "自定义组件数据",
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
        id: "自定义组件的基本用法",
        children: "自定义组件的基本用法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件是用户根据业务需求，将已有的组件组合，封装成的新组件，可以在工程中多次调用，从而提高代码的可读性。自定义组件通过element引入到宿主页面，使用方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<element name='comp' src='../common/component/comp.hml'></element>\n<div>\n  <comp prop1='xxxx' @child1=\"bindParentVmMethod\"></comp>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结合if-else使用自定义组件的示例，showComp1为true时显示自定义组件comp1，否则显示comp2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<element name='comp1' src='../common/component/comp1/comp1.hml'></element>\n<element name='comp2' src='../common/component/comp2/comp2.hml'></element>\n<div>\n  <comp1 if=\"{{showComp1}}\" prop1='xxxx' @child1=\"bindParentVmMethodOne\"></comp1>\n  <comp2 else prop1='xxxx' @child1=\"bindParentVmMethodTwo\"></comp2>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件的name属性指自定义组件名称(非必填)，组件名称对大小写不敏感，默认使用小写。src属性指自定义组件hml文件路径(必填)，若没有设置name属性，则默认使用hml文件名作为组件名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义事件",
      children: "自定义事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父组件中绑定自定义子组件的事件使用(on|@)event-name=\"bindParentVmMethod\"语法，子组件中通过this.$emit('eventName', { params: '传递参数' })触发事件并向上传递参数，父组件执行bindParentVmMethod方法并接收子组件传递的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961111)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件中使用驼峰命名法命名的事件，在父组件中绑定时需要使用短横线分隔命名形式，例如：@children-event表示绑定子组件的childrenEvent事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1：无参数传递"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件comp定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- comp.hml -->\n<div class=\"item\">  \n   <text class=\"text-style\" onclick=\"childClicked\">点击这里查看隐藏文本</text> \n   <text class=\"text-style\" if=\"{{showObj}}\">hello world</text> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* comp.css */\n.item {\n  width: 700px;\n  flex-direction: column;\n  height: 300px;\n  align-items: center;\n  margin-top: 100px;\n}\n.text-style {\n  font-weight: 500;\n  font-family: Courier;\n  font-size: 40px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  data: {\n    showObj: false,\n  },\n  childClicked () {\n    this.$emit('eventType1');\n    this.showObj = !this.showObj;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入子组件comp的父组件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml --> \n<element name='comp' src='../common/component/comp.hml'></element>  \n<div class=\"container\">  \n  <comp @event-type1=\"textClicked\"></comp>  \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  background-color: #f8f8ff;\n  flex: 1;\n  flex-direction: column;\n  align-content: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  textClicked () {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2：有参数传递"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件comp定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- comp.hml -->\n<div class=\"item\">  \n   <text class=\"text-style\" onclick=\"childClicked\">点击这里查看隐藏文本</text> \n   <text class=\"text-style\" if=\"{{ showObj }}\">hello world</text> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  childClicked () {\n    this.$emit('eventType1', { text: '收到子组件参数' });\n    this.showObj = !this.showObj;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件向上传递参数text，父组件接收时通过e.detail来获取该参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<element name='comp' src='../common/comp/comp.hml'></element>\n<div class=\"container\">  \n   <text>父组件：{{text}}</text> \n   <comp @event-type1=\"textClicked\"></comp>  \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    text: '开始',\n  },\n  textClicked (e) {\n    this.text = e.detail.text;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545882)/* ["default"] */.A) + "",
        width: "407",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件数据",
      children: "自定义组件数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义组件的js文件中可以通过声明data、props、computed等字段完成数据的定义、传递与处理，其中props与computed的具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props",
        children: "数据传递与处理"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 自定义组件数据"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "props"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "computed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算属性，用于在读取或设置参数时，进行预先处理，其结果会被缓存。计算属性名不能以$或_开头，不要使用保留字。"
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
545882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
961111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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