"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["286217"], {
718857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_compilation_and_deployment_cannkit_operator_package_deployment_c8f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-project-based-operator-development-cannkit-compilation-and-deployment-cannkit-operator-package-deployment--c8f.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_compilation_and_deployment_cannkit_operator_package_deployment_c8f_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/cannkit-operator-package-deployment","title":"算子包安装","description":"执行算子工程的编译时，编译结果会自动部署到算子包安装目录下。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/cannkit-operator-package-deployment.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"算子包安装","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-package-deployment","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子工程编译","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/"},"next":{"title":"算子调试概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/cannkit-operator-package-deployment.md


const frontMatter = {
	title: '算子包安装',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-package-deployment',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子包安装';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "算子包安装",
        children: "算子包安装"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行算子工程的编译时，编译结果会自动部署到算子包安装目录下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义算子包安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "算子编译完成后，会自动将算子交付件安装到DDK指定目录，开发者无需关注。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(718198)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义算子包默认安装路径为${DDK_INSTALL_PATH}/tools/platform。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装后的目录结构如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "platform                            // 平台插件目录\n├── kirin9020                       // Kirin AI处理器类型\n│   ├── config\n│   │   └── npu_custom_opinfo.json  // 算子信息库\n│   ├── lib64\n│   │   └── libcustom_op.so         // host侧二进制文件\n│   ├── ops\n│   │   └── impl\n│   │       ├── custom              // kernel交付件\n│   │       │   ├── add_custom.cpp\n│   │       │   ├── add_custom.py\n│   │       │   └── op_proto.h\n│   │       └── impl\n│   └── simulator\n└── README.md\n"
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
718198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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