"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["152366"], {
803587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_hwasan_ide_hwasan_md_39e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-hwasan-ide-hwasan-md-39e.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_hwasan_ide_hwasan_md_39e_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan/ide-hwasan","title":"使用HWASan检测内存错误","description":"HWASan（Hardware-Assisted Address Sanitizer）是一款类似于ASan的内存错误检测工具。 与ASan相比，HWASan使用的内存减少很多，因而更适合用于整个系统的检测。关于HWASan的检测原理请参考HWASan检测原理。","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan/ide-hwasan.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用HWASan检测内存错误","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hwasan","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用ASan检测内存错误","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan/"},"next":{"title":"使用TSan检测线程错误","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-tsan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan/ide-hwasan.md


const frontMatter = {
	title: '使用HWASan检测内存错误',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hwasan',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用HWASan检测内存错误';

const assets = {

};



const toc = [{
  "value": "约束条件",
  "id": "约束条件",
  "level": 2
}, {
  "value": "开启HWASan",
  "id": "开启hwasan",
  "level": 2
}, {
  "value": "方式一",
  "id": "方式一",
  "level": 3
}, {
  "value": "方式二",
  "id": "方式二",
  "level": 3
}, {
  "value": "使用HWASan",
  "id": "使用hwasan",
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
        id: "使用hwasan检测内存错误",
        children: "使用HWASan检测内存错误"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HWASan（Hardware-Assisted Address Sanitizer）是一款类似于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan",
        children: "ASan"
      }), "的内存错误检测工具。 与ASan相比，HWASan使用的内存减少很多，因而更适合用于整个系统的检测。关于HWASan的检测原理请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-address-sanitizer-principle#section187526511146",
        children: "HWASan检测原理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HWASan检测仅适用于AArch64架构的硬件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ASan、TSan、UBSan、HWASan不能同时开启，只能开启其中一个。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启hwasan",
      children: "开启HWASan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio 6.1.0 Beta1之前的版本，仅支持对C++源码开启HWASan。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，同时支持对C++编译生成的无源码so文件进行二进制插桩，进而开启HWASan功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式一",
      children: "方式一"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run > Edit Configurations > Diagnostics"
            })
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware-Assisted Address Sanitizer"
            })
          }), "开启C++源码检测插桩。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.1.0 Beta1版本开始，可以同时勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BinXO check"
            })
          }), "，开启无源码的so文件的HWASan检测插桩。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(192028)/* ["default"] */.A) + "",
            width: "883",
            height: "443"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果部分无源码so不需要进行HWASan检测插桩，可以在工程级或模块级build-profile.json5文件中，配置excludeSoFromBinXO字段，填写需要忽略的so列表，支持正则匹配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"nativeLib\": {\n    \"excludeSoFromBinXO\": [\"**/liblibrary.so\"]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式二",
      children: "方式二"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改工程目录下的AppScope/app.json5文件，添加HWASan配置开关。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"hwasanEnabled\": true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(664795)/* ["default"] */.A) + "",
            width: "991",
            height: "205"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要开启HWASan的模块级build-profile.json5中，添加构建参数开启HWASan检测插桩。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// DevEco Studio 6.1.0 Beta1以下版本\n\"buildOption\": {\n  \"externalNativeOptions\": {\n    \"arguments\": [\"-DOHOS_ENABLE_HWASAN=ON\"]\n  }\n// DevEco Studio 6.1.0 Beta1及以上版本，同时开启有源码和无源码的C++的HWASan检测插桩\n\"buildOption\": {\n  \"externalNativeOptions\": {\n    \"arguments\": [\"-DOHOS_ENABLE_HWASAN=ON\", \"-DOHOS_ENABLE_BINXO=ON\"]\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果部分无源码so不需要进行HWASan检测插桩，可以在工程级或模块级build-profile.json5文件中，配置excludeSoFromBinXO字段，填写需要忽略的so列表，支持正则匹配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"nativeLib\": {\n    \"excludeSoFromBinXO\": [\"**/liblibrary.so\"]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用hwasan",
      children: "使用HWASan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行或调试当前应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当程序出现内存错误时，弹出HWASan log信息，点击信息中的链接即可跳转至引起内存错误的代码处。日志中各字段的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines#hwasan%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
            children: "HWASan日志规格"
          }), "，异常检测类型请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-hwasan-detection#section207321025115510",
            children: "HWASan异常检测类型"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(997097)/* ["default"] */.A) + "",
            width: "1428",
            height: "730"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果是release应用，本地无工程代码，可以使用AnalyzeStackTrace功能，提供要解析堆栈的so，解析结果为源码地址。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(519091)/* ["default"] */.A) + "",
            width: "1460",
            height: "400"
          })
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
192028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833227-ec9985ba1eaf1c93dc710185299c9b96.png");

},
997097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913298-2e1dd2625133959ea732f2cc6bad67ea.png");

},
664795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753241-6617e3e6eb6c7eecb5d4374d7711a077.png");

},
519091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753308-6deae4e807cae23dfb453308526aa713.png");

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