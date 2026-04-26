"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["140210"], {
64184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_programming_apis_cannkit_programmingapi_basic_apis_cannkit_programmingapi_basic_apis_md_831_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-basic-concepts-cannkit-programming-apis-cannkit-programmingapi-basic-apis-cannkit-programmingapi-basic-apis-md-831.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_programming_apis_cannkit_programmingapi_basic_apis_cannkit_programmingapi_basic_apis_md_831_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis/cannkit-programmingapi-basic-apis","title":"基础API","description":"数据搬运","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis/cannkit-programmingapi-basic-apis.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"基础API","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-programmingapi-basic-apis","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接口概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-api-overview/"},"next":{"title":"高阶API","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-high-level-apis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-programmingapi-basic-apis/cannkit-programmingapi-basic-apis.md


const frontMatter = {
	title: '基础API',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-programmingapi-basic-apis',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '基础API';

const assets = {

};



const toc = [{
  "value": "数据搬运",
  "id": "数据搬运",
  "level": 2
}, {
  "value": "内存管理与同步控制",
  "id": "内存管理与同步控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基础api",
        children: "基础API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据搬运",
      children: "数据搬运"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数据搬运接口，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement",
        children: "普通数据搬运"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-channel-associated-format-conversion",
        children: "随路格式转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "普通数据搬运接口，适用于连续和不连续数据搬运。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "随路格式转换接口，适用于在搬运时进行格式转换。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存管理与同步控制",
      children: "内存管理与同步控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AscendC编程范式，把算子核内的处理程序，分成多个流水任务，通过队列(Queue)完成", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "任务间通信和同步"
        })
      }), "，并通过统一的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "资源管理"
        })
      }), "模块(Pipe)来统一管理内存、事件等资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AscendC提供一组内存管理与同步控制API，开发者使用这一组API即可完成任务间同步和内存管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核心的API包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AllocTensor：从Queue中分配Tensor，Tensor所占大小为InitBuffer时设置的每块内存长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FreeTensor：释放Queue中的指定Tensor，供Queue后续使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EnQue：将Tensor push到队列Queue。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeQue：将Tensor从队列Queue中取出，用于后续处理。"
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