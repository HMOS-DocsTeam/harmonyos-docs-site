"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["847001"], {
301934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_overview_xml_overview_md_eb8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-xml-generation-parsing-conversion-xml-overview-xml-overview-md-eb8.json
var site_docs_arkts_arkts_utils_xml_generation_parsing_conversion_xml_overview_xml_overview_md_eb8_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/xml-overview","title":"XML概述","description":"XML（可扩展标记语言）是一种用于描述数据的标记语言，提供通用的数据传输和存储方式。XML不预定义标记，因此更加灵活，适用于广泛的应用领域。","source":"@site/docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/xml-overview.md","sourceDirName":"arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview","slug":"/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"XML概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS基础类库概述","permalink":"/harmonyos-docs-site/arkts/arkts-utils/arkts-utils-overview/"},"next":{"title":"XML生成","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview/xml-overview.md


const frontMatter = {
	title: 'XML概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xml-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'XML概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "xml概述",
        children: "XML概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML（可扩展标记语言）是一种用于描述数据的标记语言，提供通用的数据传输和存储方式。XML不预定义标记，因此更加灵活，适用于广泛的应用领域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML文档由元素（element）、属性（attribute）和内容（content）组成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元素指的是标记对，包含文本、属性或其他元素。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "属性提供了有关元素的其他信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内容则是元素包含的数据或子元素。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML使用XML Schema或DTD（文档类型定义）定义文档结构，开发人员可以利用这些机制创建自定义规则，以验证XML文档的格式是否符合预期规范。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XML支持命名空间、实体引用、注释和处理指令，灵活适应各种数据需求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["语言基础类库提供了XML相关的基础能力，包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation",
        children: "XML的生成"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing",
        children: "XML的解析"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/xml-generation-parsing-conversion/xml-conversion",
        children: "XML的转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是一个简单的XML样例及对应说明，更多XML的接口和具体使用，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-xml/js-apis-xml",
        children: "@ohos.xml"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- 声明 -->\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- 处理指令 -->\n<?xml-stylesheet type=\"text/css\" href=\"style.css\"?>\n<!-- 元素、属性及属性值 -->\n<note importance=\"high\">\n    <title>Happy</title>\n    <!-- 实体引用 -->\n    <todo>&amp;</todo>\n    <!-- 命名空间的声明及统一资源标识符 -->\n    <h:table xmlns:h=\"http://www.w3.org/TR/html4/\">\n        <h:tr>\n            <h:td>Apples</h:td>\n            <h:td>Bananas</h:td>\n        </h:tr>\n    </h:table>\n</note>\n"
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