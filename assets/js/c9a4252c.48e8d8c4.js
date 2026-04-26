"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["952339"], {
544024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_hardware_compatibility_cpu_features_cpu_features_md_c9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-hardware-compatibility-cpu-features-cpu-features-md-c9a.json
var site_docs_hardware_compatibility_cpu_features_cpu_features_md_c9a_namespaceObject = JSON.parse('{"id":"hardware-compatibility/cpu-features/cpu-features","title":"CPU特性","description":"CPU特性是CPU提供的一些硬件扩展。开发者可以通过调用指令，设置特殊寄存器来使用这些CPU特性，例如ARMv7a架构上的VFP-v32d32、NEON、IDIV、AES等CPU特性。很多CPU特性是可选的，不同厂商的CPU通常有不同的特性。","source":"@site/docs/hardware-compatibility/cpu-features/cpu-features.md","sourceDirName":"hardware-compatibility/cpu-features","slug":"/hardware-compatibility/cpu-features/","permalink":"/harmonyos-docs-site/hardware-compatibility/cpu-features/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CPU特性","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cpu-features","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HarmonyOS ABI","permalink":"/harmonyos-docs-site/hardware-compatibility/ohos-abi/"},"next":{"title":"使用Neon指令扩展","permalink":"/harmonyos-docs-site/hardware-compatibility/neon-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/hardware-compatibility/cpu-features/cpu-features.md


const frontMatter = {
	title: 'CPU特性',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cpu-features',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'CPU特性';

const assets = {

};



const toc = [{
  "value": "使用建议",
  "id": "使用建议",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cpu特性",
        children: "CPU特性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU特性是CPU提供的一些硬件扩展。开发者可以通过调用指令，设置特殊寄存器来使用这些CPU特性，例如ARMv7a架构上的VFP-v32d32、NEON、IDIV、AES等CPU特性。很多CPU特性是可选的，不同厂商的CPU通常有不同的特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS原生库开发中，如何使用CPU特性？如何在代码中处理CPU特性相关的代码？本章节将提供一些方法，以便帮助开发者开发出既能保持兼容性，又能利用CPU特性能力的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS系统当前没有提供获取CPU特性的接口，开发者可以导入现有开源社区的库函数，具体可以参考如下的例子；也可直接读取/proc/cpuinfo，或者调用libc getauxval(AT_HWCAP)接口来获取设备的CPU特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在HarmonyOS系统C++工程中引入开源库，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/google/cpu_features",
            children: "cpu_features库"
          }), "，解压到工程的cpp目录下，解压后的文件名改为cpu_features。如下以DevEco Studio C++模板示例应用举例："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "解压后目录结构如下"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "MyApplication\n  |-- entry\n   |-- src\n        |-- main\n             |-- cpp\n                 |--cpu_features\n                 |--CMakeLists.txt\n                 |--hello.cpp\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在CMakeLists.txt添加导入目录"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "add_subdirectory(cpu_features) # 添加子目录到工程\ntarget_link_libraries(entry PUBLIC cpu_features) # 添加需要链接依赖的库文件\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在代码中加入判断CPU特性支持能力语句，如下以支持ARM与AARCH64两种架构举例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ...\n// 包含CPU架构目标检测头文件\n#include \"cpu_features_macros.h\"\n// 在ARM架构上，这个宏在上面头文件中根据目标自动定义\n#if defined (CPU_FEATURES_ARCH_ARM)\n#include \"cpuinfo_arm.h\" // 包含ARM架构的cpuinfo头文件\n#elif defined (CPU_FEATURES_ARCH_AARCH64)\n#include \"cpuinfo_aarch64.h\" // 包含ARM64架构的cpuinfo头文件\n#endif\n// C++代码, 需要添加`using namespace cpu_features;`\n// 根据不同架构，获取相应的CPU特性信息；\n#if defined (CPU_FEATURES_ARCH_ARM)\nstatic const ArmFeatures features = GetArmInfo().features;\n#elif defined (CPU_FEATURES_ARCH_AARCH64)\nstatic const Aarch64Features features = GetAarch64Info().features;\n#endif\nvoid Compute(void) {\n  // 根据features的字段进行支持CPU features的特性判断\n  if (features.aes) {\n    // ...\n  } else {\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(58152)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cpu_features库实际上是通过/proc/cpuinfo，与getauxval接口从内核中读取对应的CPU特性信息，有可能由于应用沙盒的原因导致无法读取对应的信息，注意错误处理。"
        }), "\n"]
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
58152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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