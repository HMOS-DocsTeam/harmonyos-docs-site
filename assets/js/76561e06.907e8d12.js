"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["742718"], {
592582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_ubsan_ide_ubsan_md_765_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-ubsan-ide-ubsan-md-765.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_ubsan_ide_ubsan_md_765_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/ide-ubsan","title":"使用UBSan检测未定义行为","description":"代码中出现未定义行为，最初可能不会产生任何问题，但是随着代码的复杂度提高，未定义行为可能造成程序崩溃或发生错误，检测出根源会变得更加困难。UBSan（Undefined Behavior Sanitizer）可以检测代码中出现的未定义行为，帮助用户清除未定义行为引起的运行时错误。","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/ide-ubsan.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用UBSan检测未定义行为","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ubsan","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用TSan检测线程错误","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-tsan/"},"next":{"title":"方舟运行时检测","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/ide-ubsan.md


const frontMatter = {
	title: '使用UBSan检测未定义行为',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ubsan',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用UBSan检测未定义行为';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "开启UBSan",
  "id": "开启ubsan",
  "level": 2
}, {
  "value": "方式一",
  "id": "方式一",
  "level": 3
}, {
  "value": "方式二",
  "id": "方式二",
  "level": 3
}, {
  "value": "使用UBSan",
  "id": "使用ubsan",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用ubsan检测未定义行为",
        children: "使用UBSan检测未定义行为"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码中出现未定义行为，最初可能不会产生任何问题，但是随着代码的复杂度提高，未定义行为可能造成程序崩溃或发生错误，检测出根源会变得更加困难。UBSan（Undefined Behavior Sanitizer）可以检测代码中出现的未定义行为，帮助用户清除未定义行为引起的运行时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的未定义行为有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "除数为零。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用未对齐的指针，或未对齐的引用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点数转换导致的溢出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "访问空指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能从DevEco Studio 5.1.0 Release版本开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASan、TSan、UBSan、HWASan不能同时开启，只能开启其中一个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启ubsan",
      children: "开启UBSan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过以下两种方式开启UBSan。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式一",
      children: "方式一"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击********Run > Edit Configurations >**** Diagnostics****，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Undefined Behavior Sanitizer"
        })
      }), "开启检测。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134493)/* ["default"] */.A) + "",
        width: "696",
        height: "196"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式二",
      children: "方式二"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要开启UBSan的模块中，通过添加构建参数开启UBSan检测插桩，在对应模块的模块级build-profile.json5中添加命令参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"arguments\": \"-DOHOS_ENABLE_UBSAN=ON\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886301)/* ["default"] */.A) + "",
        width: "371",
        height: "195"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用ubsan",
      children: "使用UBSan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行或调试当前应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当检测出未定义行为时，弹出UBSan log信息，点击信息中的链接即可跳转到未定义行为的代码处。日志中的异常检测类型请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ubsan-detection#section124211321406",
            children: "UBSan异常检测类型"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(375023)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["无论", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
            children: "编译模式"
          }), "是debug或release，均有链接可直接跳转至源码。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(151059)/* ["default"] */.A) + "",
        width: "1375",
        height: "687"
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
151059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833031-d08bc7b8cc60755fd9104f0a1a38ebad.png");

},
375023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
134493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753114-7678f309a9b2c339eb1000edf49c92c3.png");

},
886301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753110-47c3d248a4b0f5fb557889bdffc92c22.png");

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