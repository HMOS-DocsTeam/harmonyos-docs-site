"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["937700"], {
664313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_custom_comp_js_components_custom_props_js_components_custom_props_md_231_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-custom-comp-js-components-custom-props-js-components-custom-props-md-231.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_custom_comp_js_components_custom_props_js_components_custom_props_md_231_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props","title":"数据传递与处理","description":"Props","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据传递与处理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-custom-props","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-custom-props"},"sidebar":"ref","previous":{"title":"自定义组件的基本用法","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage"},"next":{"title":"继承样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-style/js-components-custom-style"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props.md


const frontMatter = {
	title: '数据传递与处理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-custom-props',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-custom-props'
};
const contentTitle = '数据传递与处理';

const assets = {

};



const toc = [{
  "value": "Props",
  "id": "props",
  "level": 2
}, {
  "value": "添加默认值",
  "id": "添加默认值",
  "level": 3
}, {
  "value": "数据单向性",
  "id": "数据单向性",
  "level": 3
}, {
  "value": "$watch感知数据改变",
  "id": "watch感知数据改变",
  "level": 3
}, {
  "value": "computed",
  "id": "computed",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据传递与处理",
        children: "数据传递与处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件可以通过props声明属性，父组件通过设置属性向子组件传递参数，props支持类型包括：String，Number，Boolean，Array，Object，Function。camelCase (驼峰命名法) 的 prop 名，在外部父组件传递参数时需要使用 kebab-case (短横线分隔命名) 形式，即当属性compProp在父组件引用时需要转换为comp-prop。给自定义组件添加props，通过父组件向下传递参数的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- comp.hml -->\n<div class=\"item\"> \n   <text class=\"title-style\">{{compProp}}</text> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  props: ['compProp'],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<element name='comp' src='../common/component/comp/comp.hml'></element>\n<div class=\"container\"> \n   <comp comp-prop=\"{{title}}\"></comp> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952867)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义属性命名时禁止以on、@、on:、grab: 等保留关键字为开头。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加默认值",
      children: "添加默认值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件可以通过固定值default设置默认值，当父组件没有设置该属性时，将使用其默认值。此情况下props属性必须为对象形式，不能用数组形式，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- comp.hml -->\n<div class=\"item\"> \n   <text class=\"title-style\">{{title}}</text> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  props: {\n    title: {\n      default: 'title',\n    },\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例中加入了一个text组件显示标题，标题的内容是一个自定义属性，显示用户设置的标题内容，当用户没有设置时显示默认值title。在引用该组件时添加该属性的设置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<element name='comp' src='../common/component/comp/comp.hml'></element>\n<div class=\"container\"> \n   <comp title=\"自定义组件\"></comp> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据单向性",
      children: "数据单向性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父子组件之间数据的传递是单向的，只能从父组件传递给子组件，子组件不能直接修改父组件传递下来的值，可以将props传入的值用data接收后作为默认值，再对data的值进行修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  props: ['defaultCount'],\n  data() {\n    return {\n      count: this.defaultCount,\n    };\n  },\n  onClick() {\n    this.count = this.count + 1;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch感知数据改变",
      children: "$watch感知数据改变"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要观察组件中属性变化，可以通过$watch方法增加属性变化回调。使用方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  props: ['title'],\n  onInit() {\n    this.$watch('title', 'onPropertyChange');\n  },\n  onPropertyChange(newV, oldV) {\n    console.info('title 属性变化 ' + newV + ' ' + oldV);\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "computed",
      children: "computed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件中经常需要在读取或设置某个属性时进行预先处理，提高开发效率，此种情况就需要使用computed计算属性。computed字段中可通过设置属性的getter和setter方法在属性读写的时候进行触发，使用方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// comp.js\nexport default {\n  props: ['title'],\n  data() {\n    return {\n      objTitle: this.title,\n      time: 'Today',\n    };\n  },\n  computed: {\n    message() {\n      return this.time + ' ' + this.objTitle;\n    },\n    notice: {\n      get() {\n        return this.time;\n      },\n      set(newValue) {\n        this.time = newValue;\n      },\n    },\n  },\n  onClick() {\n    console.info('get click event ' + this.message);\n    this.notice = 'Tomorrow';\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里声明的第一个计算属性message默认只有getter函数，message的值会取决于objTitle的值的变化。getter函数只能读取不能改变参数值，例如data中初始化定义的time，当需要赋值给计算属性的时候可以提供一个setter函数，如示例中的notice。"
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
952867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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