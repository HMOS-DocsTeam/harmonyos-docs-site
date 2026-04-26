"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["753619"], {
579651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cpp_cpp_md_e63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cpp-cpp-md-e63.json
var site_docs_ref_cpp_cpp_md_e63_namespaceObject = JSON.parse('{"id":"cpp/cpp","title":"c++标准库","description":"HarmonyOS使用llvm开源项目的C++标准库libc++作为C++运行时库。","source":"@site/docs-ref/cpp/cpp.md","sourceDirName":"cpp","slug":"/cpp/cpp","permalink":"/harmonyos-docs-site/ref/cpp/cpp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"c++标准库","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cpp","kit":"标准库","last_updated":"2026-04-22","slug":"cpp"},"sidebar":"ref","previous":{"title":"libc标准库","permalink":"/harmonyos-docs-site/ref/musl/musl"},"next":{"title":"Node-API","permalink":"/harmonyos-docs-site/ref/napi/napi"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cpp/cpp.md


const frontMatter = {
	title: 'c++标准库',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cpp',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'cpp'
};
const contentTitle = 'c++标准库';

const assets = {

};



const toc = [{
  "value": "libc++版本",
  "id": "libc版本",
  "level": 2
}, {
  "value": "C++语言支持能力",
  "id": "c语言支持能力",
  "level": 2
}, {
  "value": "如何在CMake中选择C++",
  "id": "如何在cmake中选择c",
  "level": 2
}, {
  "value": "C++运行时兼容性",
  "id": "c运行时兼容性",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "c标准库",
        children: "c++标准库"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS使用llvm开源项目的C++标准库", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://libcxx.llvm.org/",
        children: "libc++"
      }), "作为C++运行时库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "libc版本",
      children: "libc++版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 4.0开始到HarmonyOS 6.0，libc++升级到clang/llvm 15.0.4版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 3.2开始，libc++升级到clang/llvm 12.0.1版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 3.0开始，libc++使用clang/llvm 10.0.1版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c语言支持能力",
      children: "C++语言支持能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C++11、C++14标准已完全支持，C++17和C++20标准的部分特性已支持。开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-9",
        children: "如何修改代码工程所支持的C++语言版本"
      }), "来设置自己开发所需C++标准版本。如果将C++版本设置为C++17或者C++20，但使用了不支持的特性，会导致编译失败。具体语言特性支持标准可以参考<", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://libcxx.llvm.org/&gt;网站对应的Release"
      }), " Notes。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何在cmake中选择c",
      children: "如何在CMake中选择C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在NDK的{ndk_root}/build/cmake/ohos.toolchain.cmake文件中，定义了OHOS_STL变量，可以通过设置\"c++_shared\"或者\"c++_static\"来控制应用工程中原生库链接C++运行库的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c++_shared，原生库动态链接libc++_shared.so"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c++_static，原生库静态链接libc++_static.a"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c运行时兼容性",
      children: "C++运行时兼容性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS系统中，系统库与应用原生库都在使用C++标准库，两部分升级节奏不一样，依赖C++运行时版本也可能不一样。系统库依赖的C++标准库随镜像版本升级，而应用原生库依赖的C++标准库随编译使用的SDK版本升级，两部分依赖的C++基础库会跨多个大版本，产生ABI兼容性问题。为了解决此问题，HarmonyOS上把两部分依赖的C++标准库进行了区分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* 系统库：使用libc++.so， 随系统镜像发布。\n* 应用Native库：使用libc++_shared.so，随应用发布。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两个库使用的C++命名空间不一样，libc++_shared.so使用__n1作为C++符号的命名空间，libc++.so使用__h作为C++符号的命名空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：两边使用的C++标准库不能进行混用，Native API接口当前只能是C接口，可以通过这个接口隔离两边的C++运行环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C++运行时库工具链进行大版本升级的时候，不保证一定二进制兼容；一个应用包如果有多个动态库，这些动态库", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "必须用同一个大版本的clang工具链进行编译"
          })
        }), "，依赖相同版本的libc++_shared库，否则有可能产生不可预知的错误。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在一个应用工程里面，如果只有一个共享库，建议使用静态链接c++_static，这样能够让链接器精简使用的C++运行时代码，降低包大小。如果有多个库，或者依赖带动态库的har包，或者ohpm上带库的二进制中间件，建议采用动态链接C++库；采用静态链接会导致程序中定义多个函数或对象的副本，会破坏C++的单一定义规则（One Definition Rule），出现不可预知问题。"
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