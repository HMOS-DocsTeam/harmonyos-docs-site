"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["363070"], {
438711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_zero_memory_copy_cannkit_zero_memory_copy_md_a61_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-zero-memory-copy-cannkit-zero-memory-copy-md-a61.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_zero_memory_copy_cannkit_zero_memory_copy_md_a61_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy/cannkit-zero-memory-copy","title":"内存零拷贝","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy/cannkit-zero-memory-copy.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"内存零拷贝","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-zero-memory-copy","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"维测调优","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-debugging-and-optimization/"},"next":{"title":"深度融合","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-in-depth-convergence/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-zero-memory-copy/cannkit-zero-memory-copy.md


const frontMatter = {
	title: '内存零拷贝',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-zero-memory-copy',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '内存零拷贝';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "内存零拷贝",
        children: "内存零拷贝"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于GPU的纹理数据或模型的输入数据等已经存在于ION内存中的场景，就可以使用“内存零拷贝方式”，即将存放数据的ION内存封装为输入输出张量，直接进行推理，不需要进行输入张量和输出张量的数据拷贝，以便节省内存以及推理时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于零拷贝使用场景，在模型加载完成后，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_createwithfd",
        children: "OH_NNTensor_CreateWithFd"
      }), "，将ION内存封装为输入张量“input_tensor”，输出张量\"output_tensor\"，执行推理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738915)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若size为模型输出大小，对于输出张量，建议开发者申请ION内存的大小为", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858914)/* ["default"] */.A) + "",
        width: "264",
        height: "16"
      }), "。"]
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
858914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
738915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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