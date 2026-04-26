"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["55086"], {
641509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_hardware_compatibility_neon_guide_neon_guide_md_c9f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-hardware-compatibility-neon-guide-neon-guide-md-c9f.json
var site_docs_hardware_compatibility_neon_guide_neon_guide_md_c9f_namespaceObject = JSON.parse('{"id":"hardware-compatibility/neon-guide/neon-guide","title":"使用Neon指令扩展","description":"ARM Neon是ARM架构的SIMD（Single Instruction Multiple Data）扩展实现，提供一条指令处理多个数据的并行处理能力，广泛用于多媒体编解码、2D/3D图形处理等领域，提高执行性能。","source":"@site/docs/hardware-compatibility/neon-guide/neon-guide.md","sourceDirName":"hardware-compatibility/neon-guide","slug":"/hardware-compatibility/neon-guide/","permalink":"/harmonyos-docs-site/hardware-compatibility/neon-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用Neon指令扩展","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/neon-guide","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CPU特性","permalink":"/harmonyos-docs-site/hardware-compatibility/cpu-features/"},"next":{"title":"工具概述","permalink":"/harmonyos-docs-site/ide-tools-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/hardware-compatibility/neon-guide/neon-guide.md


const frontMatter = {
	title: '使用Neon指令扩展',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/neon-guide',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Neon指令扩展';

const assets = {

};



const toc = [{
  "value": "HarmonyOS架构支持情况",
  "id": "harmonyos架构支持情况",
  "level": 2
}, {
  "value": "如何使用",
  "id": "如何使用",
  "level": 2
}, {
  "value": "举例说明",
  "id": "举例说明",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用neon指令扩展",
        children: "使用Neon指令扩展"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ARM Neon是ARM架构的SIMD（Single Instruction Multiple Data）扩展实现，提供一条指令处理多个数据的并行处理能力，广泛用于多媒体编解码、2D/3D图形处理等领域，提高执行性能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Neon扩展从ARMv7开始被采用，目前在Cortex-A7、Cortex-A12、Cortex-A15处理器中被设置为默认选项，但在其余的ARMv7 Cortex-A系列中是可选项。具体技术细节请参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.arm.com/documentation/dht0002/a/Introducing-NEON/What-is-SIMD-/ARM-SIMD-instructions?lang=en",
        children: "Introducing NEON Development Article"
      }), "》。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ARMv8a架构CPU默认集成Neon扩展，在AArch64与AArch32两种状态下都支持，详细请参考ARM官方文档《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.arm.com/documentation/102474/0100/Fundamentals-of-Armv8-Neon-technology",
        children: "Learn the architecture - Introducing Neon"
      }), "》。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos架构支持情况",
      children: "HarmonyOS架构支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS系统中，arm64-v8a ABI下默认已经开启了对Neon扩展的支持；在armeabi-v7a ABI下，为了能够尽可能的支持ARMv7a架构设备，默认不开启Neon扩展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS SDK的LLVM工具链中，为armeabi-v7a ABI提供了对多种配置的预编译运行时库的支持，供开发者根据不同的配置进行选择。具体目录结构如下，native-root表示NDK所在的native包解压根目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{native-root}/llvm/lib/clang/current/lib/arm-linux-ohos/\n    |-- a7_hard_neon-vfpv4\n    |       |-- clang_rt.crtbegin.o\n    |       |-- clang_rt.crtend.o\n    |       |-- ...\n    |\n    |-- a7_soft\n    |       |-- clang_rt.crtbegin.o\n    |       |-- clang_rt.crtend.o\n    |       |-- ...\n    |\n    |-- a7_softfp_neon-vfpv4\n            |-- clang_rt.crtbegin.o\n            |-- clang_rt.crtend.o\n            |-- ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中hard、soft、softfp是float-abi，未指定默认采用softfp；neon-vfpv4就是-mfpu指定的参数类型，LLVM工具链根据相应编译参数选择依赖不同架构配置的二进制库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用",
      children: "如何使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Neon扩展的主要通过如下几种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用LLVM的Auto-Vectorization特性，由编译器来生成对应指令，默认开启，可以通过-fno-vectorize关闭，具体参考《", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://llvm.org/docs/Vectorizers.html",
          children: "Auto-Vectorization in LLVM"
        }), "》。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Neon intrinsics库，方便开发者直接操作低阶Neon指令。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手工写Neon汇编指令。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细可以参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.arm.com/Architectures/Neon",
        children: "Arm Neon架构"
      }), "》。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "举例说明",
      children: "举例说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面举例说明在一个armeabi-v7a HarmonyOS C++工程中如何使用Neon intrinsics。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Neon intrinsics需要在源码包含arm_neon.h头文件，由于该特性与CPU架构强相关，在包含该头文件时，推荐用cpu features等宏括起来。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"cpu_features_macros.h\"\nvoid call_neon_intrinsics(short *output, const short* input, const short* kernel, int width, int kernelSize)\n{\n   int nn, offset = -kernelSize/2;\n   for (nn = 0; nn < width; nn++)\n   {\n        int mm, sum = 0;\n        int32x4_t sum_vec = vdupq_n_s32(0); // Neon指令函数\n        for(mm = 0; mm < kernelSize/4; mm++)\n        {\n            int16x4_t  kernel_vec = vld1_s16(kernel + mm*4);\n            int16x4_t  input_vec = vld1_s16(input + (nn+offset+mm*4));\n            sum_vec = vmlal_s16(sum_vec, kernel_vec, input_vec);\n        }\n        // ...\n   }\n   // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在函数实现处，根据CPU特性调用对应的实现函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void Compute(void) {\n#if defined (CPU_FEATURES_ARCH_ARM)\n  static const ArmFeatures features = GetArmInfo().features;\n  // 根据features的字段进行支持cpu features的特性判断\n  if (features.neon) {\n    // Run optimized code.\n  } else {\n    // call normal function written in c\n  }\n#endif\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeLists.txt文件中添加对应选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (${OHOS_ARCH} STREQUAL \"armeabi-v7a\")\n    set(CMAKE_CXX_FLAGS \"${CMAKE_CXX_FLAGS} -mfpu=neon -mfloat-abi=softfp\")\nendif ()\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述步骤完成后，开发者即可在工程中使用Neon intrinsics指令。"
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