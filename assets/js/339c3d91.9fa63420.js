"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["608639"], {
338687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_hardware_compatibility_ohos_abi_ohos_abi_md_339_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-hardware-compatibility-ohos-abi-ohos-abi-md-339.json
var site_docs_hardware_compatibility_ohos_abi_ohos_abi_md_339_namespaceObject = JSON.parse('{"id":"hardware-compatibility/ohos-abi/ohos-abi","title":"HarmonyOS ABI","description":"HarmonyOS系统支持丰富的设备形态，支持多种架构指令集，支持多种操作系统内核；HarmonyOS遵循“OHOS”ABI定义，保持与社区ABI的一致性。","source":"@site/docs/hardware-compatibility/ohos-abi/ohos-abi.md","sourceDirName":"hardware-compatibility/ohos-abi","slug":"/hardware-compatibility/ohos-abi/","permalink":"/harmonyos-docs-site/hardware-compatibility/ohos-abi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"HarmonyOS ABI","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ohos-abi","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"硬件兼容性简介","permalink":"/harmonyos-docs-site/hardware-compatibility/hw-guide/"},"next":{"title":"CPU特性","permalink":"/harmonyos-docs-site/hardware-compatibility/cpu-features/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/hardware-compatibility/ohos-abi/ohos-abi.md


const frontMatter = {
	title: 'HarmonyOS ABI',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ohos-abi',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'HarmonyOS ABI';

const assets = {

};



const toc = [{
  "value": "字节序和字宽",
  "id": "字节序和字宽",
  "level": 2
}, {
  "value": "过程调用规范",
  "id": "过程调用规范",
  "level": 2
}, {
  "value": "C++ ABI",
  "id": "c-abi",
  "level": 2
}, {
  "value": "浮点格式",
  "id": "浮点格式",
  "level": 2
}, {
  "value": "可执行文件格式",
  "id": "可执行文件格式",
  "level": 2
}, {
  "value": "支持架构ABI",
  "id": "支持架构abi",
  "level": 2
}, {
  "value": "armeabi-v7a",
  "id": "armeabi-v7a",
  "level": 3
}, {
  "value": "arm64-v8a",
  "id": "arm64-v8a",
  "level": 3
}, {
  "value": "x86_64",
  "id": "x86_64",
  "level": 3
}, {
  "value": "在编译架构中指定ABI",
  "id": "在编译架构中指定abi",
  "level": 2
}, {
  "value": "DevEco Studio中设置",
  "id": "deveco-studio中设置",
  "level": 3
}, {
  "value": "cmake中设置",
  "id": "cmake中设置",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
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
        id: "harmonyos-abi",
        children: "HarmonyOS ABI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS系统支持丰富的设备形态，支持多种架构指令集，支持多种操作系统内核；HarmonyOS遵循“OHOS”ABI定义，保持与社区ABI的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文定义了\"OHOS\" ABI（Application Binary Interface）的基础标准，包含如下方面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节序和字宽",
      children: "字节序和字宽"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"OHOS\" ABI始终采用little-endian，32位系统采用ILP32，64位系统采用LP64。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "过程调用规范",
      children: "过程调用规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["过程调用规范（Procedure Call Standard）定义了函数调用的参数传递方式，寄存器使用规则，栈操作规则等；不同C++编译器，不同操作系统，不同架构都有可能采用不同的调用规则。详细内容请参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.agner.org/optimize/calling_conventions.pdf",
        children: "不同C++编译器和操作系统的调用规范"
      }), "》。架构相关的函数调用规范，请参考："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ARM相关的调用规范请参考《", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/ARM-software/abi-aa/tree/main/aapcs32",
          children: "ARM32过程调用标准"
        }), "》。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ARM64相关的调用规范请参考《", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/ARM-software/abi-aa/tree/main/aapcs64",
          children: "ARM64过程调用标准"
        }), "》。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c-abi",
      children: "C++ ABI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS系统采用llvm项目中的libc++作为C++运行时库，在系统侧使用libc++.so库来承载，应用侧使用libc++_shared.so来承载，两侧共用一套代码，采用不同的C++命名空间。C++的符号重整规则请参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://itanium-cxx-abi.github.io/cxx-abi/",
        children: "Itanium C++ ABI"
      }), "》。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "浮点格式",
      children: "浮点格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["采用IEEE754作为浮点编码格式，针对long double的格式定义，将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E6%9E%B6%E6%9E%84abi",
        children: "支持架构ABI"
      }), "具体说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可执行文件格式",
      children: "可执行文件格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS系统采用ELF文件格式作为全系统的二进制文件格式，具体格式详情，请参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://refspecs.linuxfoundation.org/elf/gabi4+/contents.html",
        children: "System V Application Binary Interface"
      }), "》。CPU架构相关的格式定义，参考下面对应架构说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["arm相关的elf文件格式定义请参考《", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/ARM-software/abi-aa/tree/main/aaelf32",
          children: "arm架构elf文件格式"
        }), "》。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["arm64相关elf文件格式定义请参考《", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/ARM-software/abi-aa/tree/main/aaelf64",
          children: "arm64架构elf文件格式"
        }), "》。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持架构abi",
      children: "支持架构ABI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍下当前“OHOS” ABI中支持的架构以及差异点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "armeabi-v7a",
      children: "armeabi-v7a"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此ABI是以", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.arm.com/Architectures/ABI",
        children: "《ARM架构应用二进制接口》"
      }), "为基础制定，适用于32位armv7a架构的cpu，支持的核心包括Cortex-A5，Cortex-A7，Cortex-A8，Cortex-A9，Cortex-A12，Cortex-A15，以及Cortex-A17，支持arm32，thumb-2，VFPv3-D16指令。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI使用-mfloat-cpu=softfp作为强制浮点数调用规则，本身不影响实际指令是否使用硬件浮点指令。Neon指令等其他扩展在此ABI中是可选的，为了更好的兼容性，建议应用开发者采用-mfpu=softvfp来编译native库 。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI使用64位long double(IEEE binary64)。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-ide",
        children: "DevEco Studio构建NDK工程"
      }), "时，不支持armeabi-v7a编译环境。如需要在HarmonyOS中使用该编译环境，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-cmake",
        children: "CMake方式构建"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arm64-v8a",
      children: "arm64-v8a"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI是以《ARM架构应用二进制接口》为基础制定，支持AArch64指令集，默认支持neon特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI使用-mfloat-cpu=softfp作为强制浮点数调用规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI使用128位long double(IEEE binary128)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x86_64",
      children: "x86_64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI是以Intel64和IA-32 ABI为基础，支持MMX、SSE、SSE2、SSE3、SSSE3、SSE4.1等指令，与x86相关的规范参考《System V Application Binary Interface》、《AMD64 Architecture Processor Supplement》。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此ABI使用128位long double(IEEE binary128)，x86架构上很多平台采用float80格式，HarmonyOS仍然采用128bit形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在编译架构中指定abi",
      children: "在编译架构中指定ABI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio中设置",
      children: "DevEco Studio中设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS的C++工程中，找到C++代码所在项目build-profile.json5文件buildOption/externalNativeOptions字段，添加abiFilters字段："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"apiType\": \"stageMode\",\n    \"buildOption\": {\n        \"externalNativeOptions\": {\n            \"path\": \"./src/main/cpp/CMakeLists.txt\",\n            \"arguments\": \"\",\n            \"abiFilters\": [\n                \"arm64-v8a\"\n            ]\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意"
        })
      }), "：如果DevEco Studio中不设置abiFilters字段，则默认配置的指定架构为：arm64-v8a。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cmake中设置",
      children: "cmake中设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过SDK CAPI开发native代码的时候，在build/cmake/ohos.toolchain.cmake中定义了HarmonyOS系统一些交叉编译常用的环境变量设置。其中OHOS_ARCH变量定义了当前目标编译的ABI，可以设置下面三个ABI中的一种，arm64-v8a，armeabi-v7a，x86_64。"
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