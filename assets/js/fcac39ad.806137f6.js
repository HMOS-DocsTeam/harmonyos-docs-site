"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444005"], {
114394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_unified_data_definition_overview_unified_data_definition_overview_md_fca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-unified-data-definition-overview-unified-data-definition-overview-md-fca.json
var site_docs_arkdata_uniform_data_definition_unified_data_definition_overview_unified_data_definition_overview_md_fca_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/unified-data-definition-overview/unified-data-definition-overview","title":"标准化数据定义概述","description":"设备、应用交互的核心在于数据的互通，高效的数据互通基础是共识。为了降低应用/业务数据交互成本，促进数据生态建设，统一数据管理框架（UDMF）提供了标准化数据定义作为统一的HarmonyOS数据语言，用于构建跨应用、跨设备的统一数据标准与交互共识。","source":"@site/docs/arkdata/uniform-data-definition/unified-data-definition-overview/unified-data-definition-overview.md","sourceDirName":"arkdata/uniform-data-definition/unified-data-definition-overview","slug":"/arkdata/uniform-data-definition/unified-data-definition-overview/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/unified-data-definition-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"标准化数据定义概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-definition-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkData简介","permalink":"/harmonyos-docs-site/arkdata/data-mgmt-overview/"},"next":{"title":"标准化数据类型 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/unified-data-definition-overview/unified-data-definition-overview.md


const frontMatter = {
	title: '标准化数据定义概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-definition-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化数据定义概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "标准化数据类型",
  "id": "标准化数据类型",
  "level": 3
}, {
  "value": "标准化数据结构",
  "id": "标准化数据结构",
  "level": 3
}, {
  "value": "多样式数据",
  "id": "多样式数据",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "标准化数据定义概述",
        children: "标准化数据定义概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备、应用交互的核心在于数据的互通，高效的数据互通基础是共识。为了降低应用/业务数据交互成本，促进数据生态建设，统一数据管理框架（UDMF）提供了标准化数据定义作为统一的HarmonyOS数据语言，用于构建跨应用、跨设备的统一数据标准与交互共识。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UDMF标准化数据定义包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
        children: "标准化数据类型"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/uniform-data-definition/uniform-data-structure",
        children: "标准化数据结构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准化数据类型",
      children: "标准化数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要针对同一种数据类型，提供统一定义，即标准数据类型描述符，定义了包括标识数据类型的ID、类型归属关系等相关信息，用于解决HarmonyOS系统中的类型模糊问题。一般用于过滤或者识别某一种数据类型的场景，比如文件预览、文件分享等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准化数据结构",
      children: "标准化数据结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要针对部分标准化数据类型定义了统一的数据内容结构，并明确了对应的描述信息。应用间使用标准化数据结构进行数据交互后，将遵从统一的解析标准，可有效减少适配相关的工作量。一般用于跨应用跨设备间的数据交互，比如拖拽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多样式数据",
      children: "多样式数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备、应用交互过程中，一次交互会存在多条记录，每条记录可能存在不同的表达形式（即样式），因此提出了多样式数据概念。在交互过程中，数据提供方提供记录的不同数据样式，数据使用方获取到数据后，根据业务需要从记录中获取样式数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971325)/* ["default"] */.A) + "",
        width: "536",
        height: "526"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上图中，不同的UnifiedRecord表示不同的记录，不同记录之间承载的内容是不一致的；在同一个UnifiedRecord中，同一内容以不同的样式存储，丰富了数据的表现形式。"
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
971325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957520-b4a3e08bc08285a1dad52297117ea501.png");

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