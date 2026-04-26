"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["967527"], {
795871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_locate_memory_leak_jsvm_locate_memory_leak_md_f9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-locate-memory-leak-jsvm-locate-memory-leak-md-f9e.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_locate_memory_leak_jsvm_locate_memory_leak_md_f9e_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/jsvm-locate-memory-leak","title":"JSVM-API 内存泄漏问题定位指导","description":"JSVM的内存占用包括Native内存占用(C/C++侧的内存占用)和底层的JS引擎的堆内存占用，JS引擎会维护一个堆来管理其生成的JS对象，其生命周期由JS引擎维护，除此之外的内存我们归为Native内存。用户在使用JSVM时，可能碰到这两种内存异常增长的情况。","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/jsvm-locate-memory-leak.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak","slug":"/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"JSVM-API 内存泄漏问题定位指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-locate-memory-leak","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API 坚盾守护模式","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/"},"next":{"title":"使用JSVM-API接口创建多个引擎执行JS代码并销毁","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/jsvm-locate-memory-leak.md


const frontMatter = {
	title: 'JSVM-API 内存泄漏问题定位指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-locate-memory-leak',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API 内存泄漏问题定位指导';

const assets = {

};



const toc = [{
  "value": "定性分析",
  "id": "定性分析",
  "level": 2
}, {
  "value": "Native内存泄漏定位",
  "id": "native内存泄漏定位",
  "level": 2
}, {
  "value": "典型场景",
  "id": "典型场景",
  "level": 3
}, {
  "value": "定位步骤",
  "id": "定位步骤",
  "level": 3
}, {
  "value": "JS引擎堆内存泄漏定位",
  "id": "js引擎堆内存泄漏定位",
  "level": 2
}, {
  "value": "典型场景",
  "id": "典型场景-1",
  "level": 3
}, {
  "value": "定位步骤",
  "id": "定位步骤-1",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsvm-api-内存泄漏问题定位指导",
        children: "JSVM-API 内存泄漏问题定位指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM的内存占用包括Native内存占用(C/C++侧的内存占用)和底层的JS引擎的堆内存占用，JS引擎会维护一个堆来管理其生成的JS对象，其生命周期由JS引擎维护，除此之外的内存我们归为Native内存。用户在使用JSVM时，可能碰到这两种内存异常增长的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文先介绍如何定性分析，然后分两个部分介绍如何定位Native内存泄漏和JS引擎堆内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定性分析",
      children: "定性分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过hdc连接设备，执行如下命令行的方式对目标应用的内存进行采样，比较一段时间内的内存变化情况，从而定性分析是Native内存泄漏还是JS内存。下图中Pss Total列，native heap对应Native内存占用，AnonPage other对应js堆内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper --mem $(pidof dest_app)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726436)/* ["default"] */.A) + "",
        width: "2321",
        height: "991"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "native内存泄漏定位",
      children: "Native内存泄漏定位"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_JSVM_CreateReference 和 OH_JSVM_DeleteReference 接口没有成对调用，导致Reference没有被释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value obj = nullptr;\nOH_JSVM_CreateObject(env, &obj);\n// 创建引用\nJSVM_Ref reference;\nOH_JSVM_CreateReference(env, obj, 1, &reference);\n\n// 使用引用\nJSVM_Value result;\nOH_JSVM_GetReferenceValue(env, reference, &result);\n\n// 未释放引用\n// OH_JSVM_DeleteReference(env, reference);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定位步骤",
      children: "定位步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了分析Native内存泄漏，可以借助DevEco Studio的内存分析模块，具体参考文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-allocations/ide-insight-session-allocations-memory",
        children: "内存分析及优化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Profiler的Allocation模块记录一段时间内的Native内存信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(738249)/* ["default"] */.A) + "",
            width: "2253",
            height: "1106"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "比较这段时间内\"Created & Existing\"的内存变化情况，如果存在占比较大且Count较大的未释放内存，则怀疑存在内存泄漏，展开进一步查看调用栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(368511)/* ["default"] */.A) + "",
            width: "3292",
            height: "867"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "js引擎堆内存泄漏定位",
      children: "JS引擎堆内存泄漏定位"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型场景-1",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局变量滥用，导致DOM元素未释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const elements = [];\nfunction createElements() {\n  for (let i = 0; i < 1000; i++) {\n    const el = document.createElement('div');\n    document.body.appendChild(el);\n    elements.push(el); // 即使从 DOM 移除，数组仍保留引用\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定位步骤-1",
      children: "定位步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM目前提供了OH_JSVM_OpenInspector开启inspector，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot#%E4%BD%BF%E7%94%A8-oh_jsvm_openinspector",
        children: "使用OH_JSVM_OpenInspector"
      }), ",在此基础上可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot#%E4%BD%BF%E7%94%A8-chrome-inspect-%E9%A1%B5%E9%9D%A2%E8%BF%9B%E8%A1%8C%E8%B0%83%E8%AF%95",
        children: "使用 Chrome inspect 页面进行调试"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过使用DevTools工具，对目标场景内的堆内存进行快照（快照前先点击上方的垃圾回收按钮进行垃圾回收），利用快照对比功能，找到未释放的JS对象和其所在源码中的位置，进一步指导定位堆内存未释放的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(815263)/* ["default"] */.A) + "",
        width: "2118",
        height: "923"
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
368511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959378-f544b832735f48bde2d79713bc35640d.png");

},
815263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479379-4cfeacbe73643b840968b1736ef7e9d4.png");

},
738249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439423-4fdd3c598f73d8926df6fb6db89afac8.png");

},
726436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799728-d00c957b05ddf55cfcf3b7b3bc0fb6ca.png");

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