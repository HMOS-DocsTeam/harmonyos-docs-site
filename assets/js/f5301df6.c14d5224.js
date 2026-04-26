"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["399375"], {
790014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_zlib_zlib_md_f53_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-zlib-zlib-md-f53.json
var site_docs_ref_zlib_zlib_md_f53_namespaceObject = JSON.parse('{"id":"zlib/zlib","title":"zlib","description":"简介","source":"@site/docs-ref/zlib/zlib.md","sourceDirName":"zlib","slug":"/zlib/zlib","permalink":"/harmonyos-docs-site/ref/zlib/zlib","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"zlib","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/zlib","kit":"标准库","last_updated":"2026-04-22","slug":"zlib"},"sidebar":"ref","previous":{"title":"ICU4C","permalink":"/harmonyos-docs-site/ref/icu4c/icu4c"},"next":{"title":"Vulkan开发概述","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/zlib/zlib.md


const frontMatter = {
	title: 'zlib',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/zlib',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'zlib'
};
const contentTitle = 'zlib';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "支持的能力",
  "id": "支持的能力",
  "level": 2
}, {
  "value": "引入zlib能力",
  "id": "引入zlib能力",
  "level": 2
}, {
  "value": "接口列表",
  "id": "接口列表",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "zlib",
        children: "zlib"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://zlib.net/",
        children: "Zlib"
      }), "是基于C/C++语言实现的一个通用的数据压缩库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的能力",
      children: "支持的能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zlib库提供了内存中（in-memory）压缩、解压缩数据的能力，使用Deflate算法，可以设置不同的压缩级别，对各种类型的数据均有比较好的压缩效果；提供了对处理器和内存使用控制的能力，如果缓冲区足够大，压缩可以通过一个步骤完成，否则可以通过反复调用压缩接口完成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，Zlib接口使用的压缩数据格式是zlib格式（", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.rfc-editor.org/rfc/rfc1950",
        children: "RFC1950"
      }), "），Zlib库还支持使用以“gz”开头的函数接口读取和写入gzip（", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.rfc-editor.org/rfc/rfc1952",
        children: "RFC1952"
      }), "）格式的文件。zlib格式的设计目的是在内存和通信通道中使用，紧凑且快速。gzip格式是专为单个文件压缩而设计，其头部比zlib大，以维护目录信息，使用了与zlib不同且较慢的检查方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zlib库解码器会检查压缩数据的一致性，因此即使在输入损坏的情况下，库也不应崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入zlib能力",
      children: "引入zlib能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用zlib相关功能，首先请添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <zlib.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libz.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口列表",
      children: "接口列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.zlib.net/manual.html",
        children: "Zlib库支持的接口文档"
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