"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["424216"], {
863167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_hvigor_so_ide_hvigor_so_md_31b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-hvigor-so-ide-hvigor-so-md-31b.json
var site_docs_ide_hvigor_configuration_ide_hvigor_so_ide_hvigor_so_md_31b_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-hvigor-so/ide-hvigor-so","title":"预构建库快速链接","description":"在工程中使用依赖模块时，如果希望使用依赖模块中native相关的so库与接口文件（.h/.hpp），Hvigor提供了快速链接功能。","source":"@site/docs/ide-hvigor-configuration/ide-hvigor-so/ide-hvigor-so.md","sourceDirName":"ide-hvigor-configuration/ide-hvigor-so","slug":"/ide-hvigor-configuration/ide-hvigor-so/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-so/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"预构建库快速链接","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-so","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"配置CPP","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-cpp/"},"next":{"title":"多工程构建","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-multi-projects/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-hvigor-so/ide-hvigor-so.md


const frontMatter = {
	title: '预构建库快速链接',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-so',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '预构建库快速链接';

const assets = {

};



const toc = [{
  "value": "头文件",
  "id": "头文件",
  "level": 2
}, {
  "value": "预构建库",
  "id": "预构建库",
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
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "预构建库快速链接",
        children: "预构建库快速链接"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程中使用依赖模块时，如果希望使用依赖模块中native相关的so库与接口文件（.h/.hpp），Hvigor提供了快速链接功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "头文件",
      children: "头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于共享包："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在共享包中include目录下如存在.h等接口文件，Hvigor会自动将此目录添加到CMake接口目录中，无需手动添加。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于本地依赖模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本地依赖模块中如存在.h等接口文件，可通过在build-profile.json5文件buildOption/nativeLib/headerPath中指定接口文件目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"nativeLib\": {\n    \"headerPath\": \"src/main/cpp/include\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预构建库",
      children: "预构建库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在工程中引用了共享包/本地依赖模块中的so库，编译时，Hvigor会生成cmake ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cmake.org/cmake/help/latest/manual/cmake-packages.7.html#config-file-packages",
        children: "Config-file Packages"
      }), "，自动通过cmake ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cmake.org/cmake/help/latest/command/find_package.html#find-package",
        children: "find_package"
      }), "引入这些so。开发者只需根据此依赖模块的模块名、so库名，在CMakeLists.txt脚本中以${moduleName::soName}库名称的形式来声明链接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如工程依赖了curl共享包，共享包中存在libcurl.so，在oh-package.json5中添加依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// oh-package.json5\n\"dependencies\": { \n  \"curl\": \"1.0.0\" \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579654)/* ["default"] */.A) + "",
        width: "309",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程的CMakeLists.txt脚本中声明链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_library(entry SHARED napi_init.cpp)\n# ${moduleName::soName}.\ntarget_link_libraries(entry PUBLIC curl::curl)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706701)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于本地模块，HAR仅暴露本模块构建的so库，HSP暴露本模块构建及所依赖的so库。"
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
579654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
706701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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