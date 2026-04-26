"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["393140"], {
136262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_variables_ide_debug_native_variables_md_16c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-variables-ide-debug-native-variables-md-16c.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_variables_ide_debug_native_variables_md_16c_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/ide-debug-native-variables","title":"检查变量","description":"调试时，在“Variables”页面查看变量，支持查看全局/静态变量、寄存器变量和局部变量。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/ide-debug-native-variables.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"检查变量","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-variables","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用断点","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/"},"next":{"title":"汇编调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/ide-debug-native-variables.md


const frontMatter = {
	title: '检查变量',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-variables',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '检查变量';

const assets = {

};



const toc = [{
  "value": "查看全局/静态变量",
  "id": "查看全局静态变量",
  "level": 2
}, {
  "value": "Simplify STL",
  "id": "simplify-stl",
  "level": 2
}, {
  "value": "变量监视",
  "id": "变量监视",
  "level": 2
}, {
  "value": "表达式求值",
  "id": "表达式求值",
  "level": 2
}, {
  "value": "查看十六进制视图",
  "id": "查看十六进制视图",
  "level": 2
}, {
  "value": "查看函数返回值",
  "id": "查看函数返回值",
  "level": 2
}, {
  "value": "其他说明",
  "id": "其他说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "检查变量",
        children: "检查变量"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试时，在“Variables”页面查看变量，支持查看全局/静态变量、寄存器变量和局部变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看全局静态变量",
      children: "查看全局/静态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“Edit Configurations...”打开调试配置，在 native 调试配置界面中勾选“Show static/global variables in the Variables Pane”，调试过程中变量列表会展示全局/静态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "simplify-stl",
      children: "Simplify STL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在菜单栏点击“File > Settings（macOS为DevEco Studio > Preferences/Settings） > Build, Execution, Deployment > Debugger > C++ Debugger”，通过勾选“Display STL variables as visualization in the Variables Pane”在变量列表中展示简化后的 STL 变量值，或去掉勾选以展示其原始结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量监视",
      children: "变量监视"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在\"Watches\"列表中输入表达式，然后点击Add to Watches 图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(277147)/* ["default"] */.A) + "",
        width: "18",
        height: "16"
      }), "，或在某个变量右键菜单中的“Add to Watches”添加监视的表达式，在每次程序停住之后会计算表达式的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714340)/* ["default"] */.A) + "",
        width: "1222",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "表达式求值",
      children: "表达式求值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过点击“Evaluate Expression...”按钮，或Watches 页面中的输入行中，输入表达式进行计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651123)/* ["default"] */.A) + "",
        width: "627",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看十六进制视图",
      children: "查看十六进制视图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Variables”页面点击鼠标右键，弹出框中选择“Show As Hex Values”，此时页面中的整型变量会以十六进制进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(336985)/* ["default"] */.A) + "",
        width: "512",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看函数返回值",
      children: "查看函数返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用“Step Out”从一个函数内步出后，变量列表中的“ReturnValues”会展示所步出函数的返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655445)/* ["default"] */.A) + "",
        width: "565",
        height: "303"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16740)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无法查看长度超过64位的数据结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无法查看引用类型返回值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step Out返回的位置存在断点时，无法查看函数返回值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他说明",
      children: "其他说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于特定类型的变量，还支持查看bitmap预览、查看较长的字符串等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "...View Bitmap：支持在调试时查看bitmap预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "...View：支持展开查看较长的字符串。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(422314)/* ["default"] */.A) + "",
        width: "873",
        height: "457"
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
277147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAjklEQVQ4Ed2SsQ0AIQhFndhCO1dyBztXsHUULt+EixIVk7O6gogfeAGCqbXSyqy1BFvFe930H+n/CMSjaK9cAf7DjjQAx1WQTNgVytyhIxm8BooxUinl+x2llCiE0Aw+Op5p0LejAZJzbuaca1fuvX81xHkdxyAu6uGsqR3NxphpKojbPnm3o50AOOca6AEkVMqf/uMJnQAAAABJRU5ErkJggg==");

},
651123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753770-1afa7faf8b1ac944c4e859f9d7e29267.png");

},
16740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
655445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753707-8830f04daecaf5786d9375e20db8c7f4.png");

},
422314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913764-776a6036a0dfa765c5e12c0955848587.png");

},
336985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753766-da589348b63186d886e7c277709e703b.png");

},
714340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833687-64ea68e9e053eff89035001fdf3cedfa.png");

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