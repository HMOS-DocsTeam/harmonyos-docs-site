"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["39581"], {
645911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_file_manager_service_kit_guide_filemanagerservice_introduction_filemanagerservice_introduction_md_1e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-file-manager-service-kit-guide-filemanagerservice-introduction-filemanagerservice-introduction-md-1e0.json
var site_docs_file_manager_service_kit_guide_filemanagerservice_introduction_filemanagerservice_introduction_md_1e0_namespaceObject = JSON.parse('{"id":"file-manager-service-kit-guide/filemanagerservice-introduction/filemanagerservice-introduction","title":"File Manager Service Kit简介","description":"File Manager Service Kit（文件管理服务）为开发者提供文件管理相关能力，开发者通过File Manager Service Kit完成文件删除到回收站、获取文件图标、解析文件快捷方式等功能，满足用户对文件管理的多样性诉求。","source":"@site/docs/file-manager-service-kit-guide/filemanagerservice-introduction/filemanagerservice-introduction.md","sourceDirName":"file-manager-service-kit-guide/filemanagerservice-introduction","slug":"/file-manager-service-kit-guide/filemanagerservice-introduction/","permalink":"/harmonyos-docs-site/file-manager-service-kit-guide/filemanagerservice-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"File Manager Service Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/filemanagerservice-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"编译失败，该如何解决？","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-faq/enterprisespace-faq-1/"},"next":{"title":"删除文件到回收站","permalink":"/harmonyos-docs-site/file-manager-service-kit-guide/filemanagerservice-deletetotrash/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/file-manager-service-kit-guide/filemanagerservice-introduction/filemanagerservice-introduction.md


const frontMatter = {
	title: 'File Manager Service Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/filemanagerservice-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'File Manager Service Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "file-manager-service-kit简介",
        children: "File Manager Service Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File Manager Service Kit（文件管理服务）为开发者提供文件管理相关能力，开发者通过File Manager Service Kit完成文件删除到回收站、获取文件图标、解析文件快捷方式等功能，满足用户对文件管理的多样性诉求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File Manager Service Kit提供以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除文件到回收站：删除公共目录的文件到回收站。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取文件图标：根据文件类型获取对应的文件图标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析文件快捷方式：根据快捷方式文件解析出对应原文件的URI。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅适用于手机、平板和PC/2in1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)版本开始，支持模拟器运行调试。"
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