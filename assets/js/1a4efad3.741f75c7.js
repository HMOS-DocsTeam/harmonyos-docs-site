"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780169"], {
198069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tbufpool_cannkit_tbufpool_overview_cannkit_tbufpool_o_1a4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-memory-management-and-synchronization-cannkit-tbufpool-cannkit-tbufpool-overview-cannkit-tbufpool-o-1a4.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tbufpool_cannkit_tbufpool_overview_cannkit_tbufpool_o_1a4_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview/cannkit-tbufpool-overview","title":"简介","description":"TPipe可以管理全局内存资源，而TBufPool可以手动管理或复用Unified Buffer/L1 Buffer物理内存，主要用于多个stage计算中Unified Buffer/L1 Buffer物理内存不足的场景。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview/cannkit-tbufpool-overview.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tbufpool-overview","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GetTPipePtr","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-gettpipeptr/"},"next":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-constructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-overview/cannkit-tbufpool-overview.md


const frontMatter = {
	title: '简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tbufpool-overview',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '简介';

const assets = {

};



const toc = [{
  "value": "功能图示",
  "id": "功能图示",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "简介",
        children: "简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TPipe可以管理全局内存资源，而TBufPool可以手动管理或复用Unified Buffer/L1 Buffer物理内存，主要用于多个stage计算中Unified Buffer/L1 Buffer物理内存不足的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能图示",
      children: "功能图示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了资源池划分的过程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过TPipe::InitBuffer接口可以申请Buffer内存并使用队列进行管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过TPipe::InitBufPool可以划分出资源池BufPool1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过TPipe::InitBufPool可以指定BufPool1与BufPool3地址和长度复用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过TBufPool::InitBuffer及TBufPool::InitBufPool接口继续将BufPool1及BufPool3划分成Buffer或TBufPool资源池。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " BufPool资源池划分"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(936429)/* ["default"] */.A) + "",
        width: "525",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图示的嵌套关系，最外层TBufPool(BufPool1与BufPool3)需要通过TPipe::InitBufPool申请并初始化，内层TBufPool(BufPool2)可以通过TBufPool::InitBufPool申请并初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TBufPool必须通过TPipe::InitBufPool或TBufPool::InitBufPool接口进行划分和初始化。资源池只能整体划分成部分，无法部分拼接为整体。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同TBufPool资源池切换进行计算时，需要调用TBufPool::Reset()接口清空已完成计算的TBufPool，清空后的TBufPool资源池及分配的Buffer和数据默认无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同资源池间分配的Buffer无法混用避免数据踩踏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alloc/Free、EnQue/DeQue在切分TBufPool资源池时必须成对匹配使用，自动确保同步。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "切换资源池的时候，若手写同步，AscendC不保证地址读写复用同步。因此不推荐手写同步。"
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
936429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799632-11162c86ed68e8c40a141b926677cb01.png");

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