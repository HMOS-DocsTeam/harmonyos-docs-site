"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["808428"], {
824099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_esmodule_compile_ide_hvigor_esmodule_compile_md_ff8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-esmodule-compile-ide-hvigor-esmodule-compile-md-ff8.json
var site_docs_ide_build_optimized_ide_hvigor_esmodule_compile_ide_hvigor_esmodule_compile_md_ff8_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-esmodule-compile/ide-hvigor-esmodule-compile","title":"模块化编译","description":"应用模块化编译是指基于ES Module的Bundleless编译模式，使用原生ES Module规则构建源码。API 10及以上版本的Stage工程默认开启模块化编译，可有效缩短增量编译时间、减小编译后的包体积。","source":"@site/docs/ide-build-optimized/ide-hvigor-esmodule-compile/ide-hvigor-esmodule-compile.md","sourceDirName":"ide-build-optimized/ide-hvigor-esmodule-compile","slug":"/ide-build-optimized/ide-hvigor-esmodule-compile/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-esmodule-compile/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"模块化编译","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-esmodule-compile","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"性能优化实验特性","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-experimental-properties/"},"next":{"title":"开发Hvigor任务","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-esmodule-compile/ide-hvigor-esmodule-compile.md


const frontMatter = {
	title: '模块化编译',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-esmodule-compile',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '模块化编译';

const assets = {

};



const toc = [{
  "value": "使用规格约束",
  "id": "使用规格约束",
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
        id: "模块化编译",
        children: "模块化编译"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用模块化编译是指基于ES Module的Bundleless编译模式，使用原生ES Module规则构建源码。API 10及以上版本的Stage工程默认开启模块化编译，可有效缩短增量编译时间、减小编译后的包体积。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(120929)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA 模板创建的工程依然使用基于bundle打包的构建方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块化编译解决了Bundle编译打包模式引入的如下问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个模块多次引用导致的重复打包及运行时加载，运行状态无法共享，单例模式运行异常；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改单个模块文件，需要完整重新编译打包，耗时过长；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局变量污染问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块化编译模式有以下价值："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改单个模块代码无需整包编译构建，增量编译构建时间极大减少；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于ESModule规则，模块缓存利用率高，模块内变量变化能够及时反映到模块本身，动态实时绑定；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解决了单例问题；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "减少了包的ROM size；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解决了变量污染等问题，各模块基于接口进行开发，提升开发效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用规格约束",
      children: "使用规格约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持工程内hap引用同工程下其他hap代码，但不推荐使用此引用方式，建议使用har包方式组织公共代码并引用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持工程内hap通过配置文件（oh-package.json5）使用ohpm包管理的方式引用同工程下其他hap代码，不推荐使用此引用方式，建议使用har包方式组织公共代码并引用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持引用工程外的代码以及工程内任意创建目录下的代码，否则工程编译报错；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推荐使用hap通过har（static library）的方式引用公共代码；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推荐使用hap通过hsp（shared library）的方式引用共享库，共享状态。"
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
120929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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