"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["255179"], {
858698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_parallel_stacks_ide_debug_native_parallel_stacks_md_afb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-parallel-stacks-ide-debug-native-parallel-stacks-md-afb.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_parallel_stacks_ide_debug_native_parallel_stacks_md_afb_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/ide-debug-native-parallel-stacks","title":"堆栈可视化","description":"在native调试窗口中，点击*Layout Settings，勾选Parallel Stacks*，打开并行栈视图。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/ide-debug-native-parallel-stacks.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"堆栈可视化","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-parallel-stacks","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"反向调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/"},"next":{"title":"so信息可视化","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/ide-debug-native-parallel-stacks.md


const frontMatter = {
	title: '堆栈可视化',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-parallel-stacks',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '堆栈可视化';

const assets = {

};



const toc = [{
  "value": "调用栈跳转",
  "id": "调用栈跳转",
  "level": 2
}, {
  "value": "线程信息查看",
  "id": "线程信息查看",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "堆栈可视化",
        children: "堆栈可视化"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在native调试窗口中，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Layout Settings"
        })
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470348)/* ["default"] */.A) + "",
        width: "15",
        height: "12"
      }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel Stacks"
        })
      }), "，打开并行栈视图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(399548)/* ["default"] */.A) + "",
        width: "1256",
        height: "504"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在程序停下时，并行栈视图可以同时展示多个线程的调用栈信息，合并重复调用栈，帮助您更好地理解程序的并发执行情况，以及发现潜在的多线程问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964430)/* ["default"] */.A) + "",
        width: "1482",
        height: "712"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用栈跳转",
      children: "调用栈跳转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以在视图上对某一个调用栈双击来跳转到对应堆栈，Frames页签中会随之跳转，此时可以查看该堆栈的变量等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程信息查看",
      children: "线程信息查看"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多个线程合并的位置处悬停鼠标，可以显示这些线程的具体信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(719647)/* ["default"] */.A) + "",
        width: "465",
        height: "104"
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
719647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
470348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAIAAAAyIHCzAAAA2klEQVR4AUzR4Q6DIAwEYCR7bGCb+sDbfi+6D8uM5FKvdwVazO/354rXa6RIgPs5ljRPU7LasWot93sTW2sIq7UirZXYck553xUPTFPGxH3fIHjONwqo7DY1PCTAU4TTT0hHJ+xQSQHpSXCQjrMxGwJ4eAjFJQFp71tDyzLDPM/P50Nc11VkEymPYxm6n+1TSql98HK8QLGQ5kVKV3w9kUN7tTPcKMaNZyQCXYzeerWzSYFt+zIgiDqbWYiy0bccFEW8kuCqeyf+kE2mMRaYD5Zl/aNPzzVrSukHAAD//+JtT0AAAAAGSURBVAMAJonNlSPudUsAAAAASUVORK5CYII=");

},
399548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753109-39c85b5212c6d44b4389d24fe2b26928.png");

},
964430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753168-5672fe34f573a24001af68915958db03.png");

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