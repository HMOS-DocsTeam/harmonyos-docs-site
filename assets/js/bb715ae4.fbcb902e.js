"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["76011"], {
924496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_build_with_ndk_build_with_ndk_prebuilts_build_with_ndk_prebuilts_md_bb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-build-with-ndk-build-with-ndk-prebuilts-build-with-ndk-prebuilts-md-bb7.json
var site_docs_build_with_ndk_build_with_ndk_prebuilts_build_with_ndk_prebuilts_md_bb7_namespaceObject = JSON.parse('{"id":"build-with-ndk/build-with-ndk-prebuilts/build-with-ndk-prebuilts","title":"在NDK工程中使用预构建库","description":"在NDK工程中，可以通过CMake语法规则引入并使用预构建库。在引用预构建库时，模块libs目录中的预构建库，以及在CMakeLists.txt编译脚本中声明的预构建库都会被打包。","source":"@site/docs/build-with-ndk/build-with-ndk-prebuilts/build-with-ndk-prebuilts.md","sourceDirName":"build-with-ndk/build-with-ndk-prebuilts","slug":"/build-with-ndk/build-with-ndk-prebuilts/","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-prebuilts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"在NDK工程中使用预构建库","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-prebuilts","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用命令行CMake构建NDK工程","permalink":"/harmonyos-docs-site/build-with-ndk/build-with-ndk-cmake/"},"next":{"title":"毕昇编译器","permalink":"/harmonyos-docs-site/build-with-ndk/bisheng-compiler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/build-with-ndk/build-with-ndk-prebuilts/build-with-ndk-prebuilts.md


const frontMatter = {
	title: '在NDK工程中使用预构建库',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-prebuilts',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '在NDK工程中使用预构建库';

const assets = {

};



const toc = [{
  "value": "预构建库使用约束",
  "id": "预构建库使用约束",
  "level": 2
}, {
  "value": "直接引入预构建库",
  "id": "直接引入预构建库",
  "level": 2
}, {
  "value": "预构建库的SONAME问题",
  "id": "预构建库的soname问题",
  "level": 3
}, {
  "value": "使用远程依赖HAR中集成的预构建库",
  "id": "使用远程依赖har中集成的预构建库",
  "level": 2
}, {
  "value": "使用本地HAR中集成的预构建库",
  "id": "使用本地har中集成的预构建库",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在ndk工程中使用预构建库",
        children: "在NDK工程中使用预构建库"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在NDK工程中，可以通过CMake语法规则引入并使用预构建库。在引用预构建库时，模块libs目录中的预构建库，以及在CMakeLists.txt编译脚本中声明的预构建库都会被打包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预构建库使用约束",
      children: "预构建库使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.确保引入的SO动态库是通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-overview",
        children: "HarmonyOS NDK 编译工具链"
      }), "编译生成，如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-overview",
        children: "HarmonyOS NDK 编译工具链"
      }), "编译预构建库，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-cmake-adapts-to-harmonyos#section1826019653918",
        children: "CMake构建三方库适配流程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.确保引入的SO动态库的依赖库也导入到工程中且通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-overview",
        children: "HarmonyOS NDK 编译工具链"
      }), "编译生成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "直接引入预构建库",
      children: "直接引入预构建库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过直接将预构建的库文件复制到项目文件中, 来使用预构建库。例如在项目中需要使用预构建库libavcodec_ffmpeg.so，其开发态存放路径如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869749)/* ["default"] */.A) + "",
        width: "350",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块的CMakeLists.txt编译脚本中通过add_library添加所需的预构建库，并声明预构建库路径等信息后，可以在target_link_libraries中声明链接该预构建库，脚本示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add_library(library SHARED hello.cpp)\n\nadd_library(avcodec_ffmpeg SHARED IMPORTED)\nset_target_properties(avcodec_ffmpeg\n    PROPERTIES\n    IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/third_party/FFmpeg/libs/${OHOS_ARCH}/libavcodec_ffmpeg.so)\n\ntarget_link_libraries(library PUBLIC libace_napi.z.so avcodec_ffmpeg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块的CMakeLists.txt编译脚本中添加include_directories："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "include_directories(\n    # ...\n    ${CMAKE_CURRENT_SOURCE_DIR}/third_party/FFmpeg/include\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当在HAR中使用预构建库时，当前编译的库和链接所需预构建库会打包到HAR中的libs目录下，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(32188)/* ["default"] */.A) + "",
        width: "344",
        height: "374"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "预构建库的soname问题",
      children: "预构建库的SONAME问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保引入的预构建动态库（so）正确设置了SONAME。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果预构建so没有SONAME，链接器将会将so的绝对路径插入到依赖这个so的二进制文件的dynamic section中。当这些二进制文件随hap包发布运行时，动态加载器（dynamic loader）可能最终无法找到这个so而导致错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用llvm-readelf工具查看so文件是否设置了SONAME。llvm-readelf工具路径为：${DevEco Studio安装目录}/sdk/default/openharmony/native/llvm/bin或者${command-line-tools安装目录}/sdk/default/openharmony/native/llvm/bin/llvm-readelf。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> ${YOUR_PATH}/command-line-tools/sdk/default/openharmony/native/llvm/bin/llvm-readelf -d libavcodec_ffmpeg.so | grep SONAME\n0x000000000000000e (SONAME)             Library soname: [libavcodec_ffmpeg.so]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若预构建so使用cmake进行构建，则所有的so默认会设置SONAME（只要目标平台支持）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若预构建so使用其他构建工具，可以通过配置ldflags来设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "${...}/clang++ ${...} -Wl,-soname,libavcodec_ffmpeg.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用远程依赖har中集成的预构建库",
      children: "使用远程依赖HAR中集成的预构建库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用远程依赖HAR中集成的预构建库时，CMakeLists.txt文件中引用脚本如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "set(DEPENDENCY_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../../../oh_modules)\nadd_library(library SHARED IMPORTED)\nset_target_properties(library\n    PROPERTIES\n    IMPORTED_LOCATION ${DEPENDENCY_PATH}/library/libs/${OHOS_ARCH}/liblibrary.so)\nadd_library(entry SHARED hello.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so library)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用本地har中集成的预构建库",
      children: "使用本地HAR中集成的预构建库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用本地HAR中集成的预构建库时，CMakeLists.txt文件中引用脚本如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "set(LIBRARY_DIR \"${NATIVERENDER_ROOT_PATH}/../../../../library/build/default/intermediates/libs/default/${OHOS_ARCH}/\")\nadd_library(library SHARED IMPORTED)\nset_target_properties(library\n    PROPERTIES\n    IMPORTED_LOCATION ${LIBRARY_DIR}/liblibrary.so)\nadd_library(entry SHARED hello.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so library)\n"
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
869749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
32188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479361-2230a1edb67ba9ee8d57786f26e74b0b.png");

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