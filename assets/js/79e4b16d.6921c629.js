"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["820282"], {
538957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_build_with_ndk_build_with_ndk_ide_build_with_ndk_ide_md_79e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-build-with-ndk-build-with-ndk-ide-build-with-ndk-ide-md-79e.json
var site_docs_build_with_ndk_build_with_ndk_ide_build_with_ndk_ide_md_79e_namespaceObject = JSON.parse('{"id":"build-with-ndk/build-with-ndk-ide/build-with-ndk-ide","title":"使用DevEco Studio模板构建NDK工程","description":"NDK通过CMake和Ninja编译应用的C/C++代码，编译过程如下图所示。","source":"@site/docs/build-with-ndk/build-with-ndk-ide/build-with-ndk-ide.md","sourceDirName":"build-with-ndk/build-with-ndk-ide","slug":"/build-with-ndk/build-with-ndk-ide/","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-ide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用DevEco Studio模板构建NDK工程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-ide","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NDK工程构建概述","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-overview/"},"next":{"title":"使用命令行CMake构建NDK工程","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-cmake/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/build-with-ndk/build-with-ndk-ide/build-with-ndk-ide.md


const frontMatter = {
	title: '使用DevEco Studio模板构建NDK工程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-ide',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用DevEco Studio模板构建NDK工程';

const assets = {

};



const toc = [{
  "value": "CMakeLists.txt",
  "id": "cmakeliststxt",
  "level": 2
}, {
  "value": "externalNativeOptions",
  "id": "externalnativeoptions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用deveco-studio模板构建ndk工程",
        children: "使用DevEco Studio模板构建NDK工程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK通过CMake和Ninja编译应用的C/C++代码，编译过程如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580159)/* ["default"] */.A) + "",
        width: "1674",
        height: "254"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核心编译过程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据CMake配置脚本以及build-profile.json5中配置的externalNativeOptions构建参数，与缓存中的配置比对后，生成CMake命令并执行CMake。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行Ninja，按照Makefile执行编译和链接，将生成的.so以及运行时依赖的.so同步到输出目录，完成构建过程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco Studio提供的应用模板，可以快速生成CMake构建脚本模板，并在build-profile.json5中指定相关编译构建参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cmakeliststxt",
      children: "CMakeLists.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco Studio模板工程创建的NDK工程中，包含默认生成的CMakeLists.txt脚本，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(MyApplication)\n\n# 定义一个变量，并赋值为当前模块cpp目录\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\n# 添加头文件.h目录，包括cpp，cpp/include，告诉cmake去这里找到代码引入的头文件\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\n# 声明一个产物libentry.so，SHARED表示产物为动态库，hello.cpp为产物的源代码\nadd_library(entry SHARED hello.cpp)\n\n# 声明产物entry链接时需要的三方库libace_napi.z.so\n# 这里直接写三方库的名称是因为它是在ndk中，已在链接寻址路径中，无需额外声明\ntarget_link_libraries(entry PUBLIC libace_napi.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认的CMakeLists.txt脚本中添加了编译所需的源代码、头文件以及三方库，开发者可根据实际工程添加自定义编译参数、函数声明、简单的逻辑控制等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "externalnativeoptions",
      children: "externalNativeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级build-profile.json5中externalNativeOptions参数是NDK工程C/C++文件编译配置的入口，可以通过path指定CMake脚本路径、arguments配置CMake参数、cppFlags配置C++编译器参数、abiFilters配置编译架构等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"apiType\": \"stageMode\",\n\"buildOption\": {\n  \"arkOptions\": {\n   },\n  \"externalNativeOptions\": {\n    \"path\": \"./src/main/cpp/CMakeLists.txt\",\n    \"arguments\": \"\",\n    \"cppFlags\": \"\",\n    \"abiFilters\": [\n       \"arm64-v8a\",\n       \"x86_64\"\n    ],\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "externalNativeOptions具体参数说明如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMake构建脚本地址，即CMakeLists.txt文件地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abiFilters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本机的ABI编译环境，包括：  - arm64-v8a  - x86_64  如不配置该参数，编译时默认编译出arm64-v8a架构相关的so。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMake编译参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cppFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++编译器参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多关于build-profile.json5中参数的说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile",
        children: "build-profile.json5"
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
580159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959356-a65c7df659aede2abf99a3d3bcca2968.png");

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