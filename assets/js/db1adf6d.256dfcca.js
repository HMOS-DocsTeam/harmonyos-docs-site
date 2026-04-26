"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["599900"], {
153588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_build_with_ndk_build_with_ndk_overview_build_with_ndk_overview_md_db1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-build-with-ndk-build-with-ndk-overview-build-with-ndk-overview-md-db1.json
var site_docs_build_with_ndk_build_with_ndk_overview_build_with_ndk_overview_md_db1_namespaceObject = JSON.parse('{"id":"build-with-ndk/build-with-ndk-overview/build-with-ndk-overview","title":"NDK工程构建概述","description":"HarmonyOS NDK默认使用CMake作为构建系统，随包提供了符合HarmonyOS工具链的基础配置文件hmos.toolchain.cmake，用于预定义CMake变量来简化开发者配置。","source":"@site/docs/build-with-ndk/build-with-ndk-overview/build-with-ndk-overview.md","sourceDirName":"build-with-ndk/build-with-ndk-overview","slug":"/build-with-ndk/build-with-ndk-overview/","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NDK工程构建概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-overview","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建NDK工程","permalink":"/harmonyos-docs-site/create-with-ndk/"},"next":{"title":"使用DevEco Studio模板构建NDK工程","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-ide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/build-with-ndk/build-with-ndk-overview/build-with-ndk-overview.md


const frontMatter = {
	title: 'NDK工程构建概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-overview',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'NDK工程构建概述';

const assets = {

};



const toc = [{
  "value": "hmos.toolchain.cmake简介",
  "id": "hmostoolchaincmake简介",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ndk工程构建概述",
        children: "NDK工程构建概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS NDK默认使用CMake作为构建系统，随包提供了符合HarmonyOS工具链的基础配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hmostoolchaincmake%E7%AE%80%E4%BB%8B",
        children: "hmos.toolchain.cmake"
      }), "，用于预定义CMake变量来简化开发者配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用的NDK工程构建方式有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从源码构建"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源码构建也有不同方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可以使用DevEco Studio提供的C++应用模板，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/build-with-ndk/build-with-ndk-ide",
              children: "用DevEco Studio来编译构建"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["也可以", (0,jsx_runtime.jsx)(_components.a, {
              href: "/build-with-ndk/build-with-ndk-cmake",
              children: "使用命令行CMake来编译构建"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/build-with-ndk/build-with-ndk-prebuilts",
            children: "使用预构建库构建"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将通过具体示例介绍如何在Native工程中使用NDK，以及如何编写CMake脚本来构建NDK工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hmostoolchaincmake简介",
      children: "hmos.toolchain.cmake简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hmos.toolchain.cmake是HarmonyOS NDK提供给CMake的toolchain脚本，里面预定义了编译HarmonyOS应用需要设置的编译参数，如交叉编译设备的目标、C++运行时库的链接方式等；这些参数在调用CMake命令时，可以从命令行传入，来改变默认编译链接行为。此文件中的常用参数见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_STL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c++_shared/c++_static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "libc++的链接方式。默认为c++_shared。  c++_shared表示采用动态链接libc++_shared.so；c++_static表示采用静态链接libc++_static.a。  由于C++运行时中存在一些全局变量，因此同一应用中的全部Native库需要采用相同的链接方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_ARCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "armeabi-v7a/arm64-v8a/x86_64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前Native交叉编译的目标架构，当前支持的架构为armeabi-v7a/arm64-v8a/x86_64。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述参数最终会控制Clang的交叉编译命令，产生合适的命令参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--target={arch}-linux-ohos参数，通知编译器生成相应架构下符合HarmonyOS ABI的二进制文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--sysroot={ndk_root}/sysroot参数，告知编译器HarmonyOS系统头文件的所在位置。"
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