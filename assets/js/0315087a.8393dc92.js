"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["346607"], {
897879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_multi_thread_check_ide_multi_thread_check_md_031_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-multi-thread-check-ide-multi-thread-check-md-031.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_multi_thread_check_ide_multi_thread_check_md_031_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/ide-multi-thread-check","title":"方舟运行时检测","description":"方舟多线程检测","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/ide-multi-thread-check.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"方舟运行时检测","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-multi-thread-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用UBSan检测未定义行为","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan/"},"next":{"title":"Instrument Test","permalink":"/harmonyos-docs-site/ide-app-test/ide-test/ide-code-test/ide-instrument-test/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check/ide-multi-thread-check.md


const frontMatter = {
	title: '方舟运行时检测',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-multi-thread-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '方舟运行时检测';

const assets = {

};



const toc = [{
  "value": "方舟多线程检测",
  "id": "方舟多线程检测",
  "level": 2
}, {
  "value": "开启方舟多线程检测",
  "id": "开启方舟多线程检测",
  "level": 3
}, {
  "value": "使用方舟多线程检测",
  "id": "使用方舟多线程检测",
  "level": 3
}, {
  "value": "方舟native模块加载异常信息增强",
  "id": "方舟native模块加载异常信息增强",
  "level": 2
}, {
  "value": "开启方舟native模块加载异常信息增强",
  "id": "开启方舟native模块加载异常信息增强",
  "level": 3
}, {
  "value": "使用方舟native模块加载异常信息增强",
  "id": "使用方舟native模块加载异常信息增强",
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
        id: "方舟运行时检测",
        children: "方舟运行时检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方舟多线程检测",
      children: "方舟多线程检测"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在JS运行时环境中，多线程的安全问题是一个重要的考虑因素。由于JavaScript主线程是单线程的，在主线程中创建的JS对象（尤其是DOM相关对象）只能在主线程上进行操作。如果违反了这一规则，就会导致多线程安全问题。针对该场景，DevEco Studio集成多线程检测能力，并通过FaultLog展示错误的堆栈详情及导致错误的代码行。关于多线程检测的原理请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section18515155816101",
        children: "原理介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启多线程检测会有较大性能损耗，请开发者按需开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启方舟多线程检测",
      children: "开启方舟多线程检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过以下方式开启方舟多线程检测。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run > Edit Configurations >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagnostics"
            })
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi Thread Check"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(945889)/* ["default"] */.A) + "",
            width: "698",
            height: "306"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过命令行开启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa start -a {abilityName} -b {bundleName} -R\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式三"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#setmultithreadingdetectionenabled23",
            children: "setMultithreadingDetectionEnabled接口"
          }), "开启。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方舟多线程检测",
      children: "使用方舟多线程检测"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行或调试当前应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当程序出现多线程安全问题时，会弹出Crash log信息，点击信息中的链接即可跳转至引起多线程安全问题的代码处。关于多线程安全问题的分析方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash",
            children: "使用Node-API接口产生的异常日志/崩溃分析"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(293495)/* ["default"] */.A) + "",
            width: "1439",
            height: "412"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方舟native模块加载异常信息增强",
      children: "方舟native模块加载异常信息增强"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行ArkTS项目开发中可能存在需要加载native模块的场景，开启方舟native模块加载异常信息增强功能后，可以丰富ArkTS项目中因加载native模块导致的报错信息，以便更准确地进行native问题定位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启方舟native模块加载异常信息增强",
      children: "开启方舟native模块加载异常信息增强"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过以下两种方式开启方舟native模块加载异常信息增强。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run > Edit Configurations >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagnostics"
            })
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enhanced Error Info"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(523974)/* ["default"] */.A) + "",
            width: "697",
            height: "305"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过命令行开启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa start {abilityName} {bundleName} -E\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方舟native模块加载异常信息增强",
      children: "使用方舟native模块加载异常信息增强"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行或调试当前应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当程序出现因native模块加载导致的报错信息时，会显示更详细准确的错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(114119)/* ["default"] */.A) + "",
        width: "1125",
        height: "353"
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
114119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753810-325402f67a361dee90e3fdf23f79ba80.png");

},
293495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753751-c01e8edddacd7f9e6d79798722cef943.png");

},
945889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753747-30ff01fc41499084b148c52310e4548d.png");

},
523974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753806-f214cc5f4e55c00705d218459533ec30.png");

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