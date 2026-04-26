"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["366030"], {
388396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_introduction_napi_introduction_md_4ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-introduction-napi-introduction-md-4ab.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_introduction_napi_introduction_md_4ab_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-introduction/napi-introduction","title":"Node-API简介","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-introduction/napi-introduction.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-introduction","slug":"/coding/using-napi-interaction-with-cpp/napi-introduction/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Node-API简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-introduction","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"fdsan使用指导","permalink":"/harmonyos-docs-site/coding/c-cpp/fdsan/"},"next":{"title":"Node-API接口返回状态码介绍","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi_status_introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-introduction/napi-introduction.md


const frontMatter = {
	title: 'Node-API简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-introduction',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node-API简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "Node-API的组成架构",
  "id": "node-api的组成架构",
  "level": 2
}, {
  "value": "Node-API的关键交互流程",
  "id": "node-api的关键交互流程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "node-api简介",
        children: "Node-API简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS Node-API是基于Node.js 18.x LTS的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nodejs.org/docs/latest-v12.x/api/n-api.html",
        children: "Node-API"
      }), "规范扩展开发的机制，为开发者提供了ArkTS/JS与C/C++模块之间的交互能力。它提供了一组稳定的、跨平台的API，可以在不同的操作系统上使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文中如无特别说明，后续均使用Node-API指代HarmonyOS Node-API能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(836453)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS Node-API与Node.js 18.x LTS的Node-API规范的接口异同点，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi",
        children: "Node-API参考文档"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般情况下HarmonyOS应用开发使用ArkTS/JS语言，但部分场景由于性能、效率等要求，比如游戏、物理模拟等，需要依赖使用现有的C/C++库。Node-API规范封装了I/O、CPU密集型、OS底层等能力并对外暴露C接口，使用C/C++模块的注册机制，向ArkTS/JS对象上挂载属性和方法的方式来实现ArkTS/JS和C/C++的交互。主要场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统可以将框架层丰富的模块功能通过Node-API的模块注册机制对外暴露ArkTS/JS的接口，将C/C++的能力开放给应用的ArkTS/JS层。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用开发者也可以选择将一些对性能、底层系统调用有要求的核心功能用C/C++封装实现，再通过ArkTS/JS接口使用，提高应用本身的执行效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api的组成架构",
      children: "Node-API的组成架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Node-API的组成架构"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(280917)/* ["default"] */.A) + "",
        width: "1080",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native Module：开发者使用Node-API开发的模块，用于在ArkTS侧导入使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node-API：实现ArkTS与C/C++交互的逻辑。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ModuleManager：Native模块管理，包括加载、查找等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ScopeManager：管理napi_value的生命周期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReferenceManager：管理napi_ref的生命周期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NativeEngine：ArkTS引擎抽象层，统一ArkTS引擎在Node-API层的接口行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkCompiler ArkTS Runtime：ArkTS运行时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api的关键交互流程",
      children: "Node-API的关键交互流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Node-API的关键交互流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572831)/* ["default"] */.A) + "",
        width: "1657",
        height: "832"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS和C++之间的交互流程，主要分为以下两步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "初始化阶段"
          })
        }), "：当ArkTS侧在import一个Native模块时，ArkTS引擎会调用ModuleManager加载模块对应的so及其依赖。首次加载时会触发模块的注册，将模块定义的方法属性挂载到exports对象上并返回该对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "调用阶段"
          })
        }), "：当ArkTS侧通过上述import返回的对象调用方法时，ArkTS引擎会找到并调用对应的C/C++方法。"]
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
836453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
572831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799720-25b83c1fbac65e7b5634a28c59c2dcd6.png");

},
280917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479369-f397c12865b43671c5116ffa4e3b8c90.png");

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