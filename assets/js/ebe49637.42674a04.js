"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["761839"], {
67226(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_icu_4_c_icu_4_c_md_ebe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-icu-4-c-icu-4-c-md-ebe.json
var site_docs_ref_icu_4_c_icu_4_c_md_ebe_namespaceObject = JSON.parse('{"id":"icu4c/icu4c","title":"ICU4C","description":"当今的软件市场是一个全球性的市场，应用程序的开发和维护需要支持多种语言。International Components for Unicode (ICU) 库为多平台多系统提供了强大且功能齐全的多语言文化信息处理能力。","source":"@site/docs-ref/icu4c/icu4c.md","sourceDirName":"icu4c","slug":"/icu4c/icu4c","permalink":"/harmonyos-docs-site/ref/icu4c/icu4c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"ICU4C","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/icu4c","kit":"标准库","last_updated":"2026-04-22","slug":"icu4c"},"sidebar":"ref","previous":{"title":"EGL","permalink":"/harmonyos-docs-site/ref/egl/egl"},"next":{"title":"zlib","permalink":"/harmonyos-docs-site/ref/zlib/zlib"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/icu4c/icu4c.md


const frontMatter = {
	title: 'ICU4C',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/icu4c',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'icu4c'
};
const contentTitle = 'ICU4C';

const assets = {

};



const toc = [{
  "value": "引入ICU4C国际化能力",
  "id": "引入icu4c国际化能力",
  "level": 2
}, {
  "value": "标准库中导出的符号列表",
  "id": "标准库中导出的符号列表",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "icu4c",
        children: "ICU4C"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当今的软件市场是一个全球性的市场，应用程序的开发和维护需要支持多种语言。International Components for Unicode (ICU) 库为多平台多系统提供了强大且功能齐全的多语言文化信息处理能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://unicode-org.github.io/icu/userguide/icu4c/",
        children: "ICU4C"
      }), "是ICU 库的C语言版本，部分接口已开放，支持如下能力："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "区域与文化标识(uloc.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "时间日期格式化(udat.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字及度量衡格式化(unumberformatter.h，unum.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日历及本地历法(ucal.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排序(ucol.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "断词换行(ubrk.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本正规化(unorm2.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音译(utrans.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字符/文本属性(uchar.h，uscript.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编码转换(ucnv.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本双向处理(ubidi.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "域名转换(uidna.h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unicode字符串处理(ustring.h)，从API version 15开始支持"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ICU文本抽象表示(utext.h)，从API version 15开始支持"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ICU版本(uversion.h)，从API version 22开始支持"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Locale ID及Locale各组成部分本地化名称(uldnames.h)，从API version 22开始支持"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unicode码点处理(utf.h，utf8.h，utf16.h)，从API version 22开始支持"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLDR版本(ulocdata.h)，从API version 22开始支持"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入icu4c国际化能力",
      children: "引入ICU4C国际化能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用ICU4C相关功能，请按需要添加对应的头文件。本模块头文件需要添加unicode目录前缀，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <unicode/uloc.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下动态库:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libicu.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准库中导出的符号列表",
      children: "标准库中导出的符号列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/appendixes/icu4c-symbol/icu4c-symbol",
        children: "native api中导出的ICU4C符号列表"
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