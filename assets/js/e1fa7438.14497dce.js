"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["479723"], {
319430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_disassembly_ide_debug_native_disassembly_md_e1f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-disassembly-ide-debug-native-disassembly-md-e1f.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_disassembly_ide_debug_native_disassembly_md_e1f_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/ide-debug-native-disassembly","title":"汇编调试","description":"DevEco Studio支持查看汇编和汇编代码调试，此外，当程序中断到没有源码的位置时（如step into到一个没有调试信息的函数中），DevEco Studio会打开汇编视图，让您了解程序当前停住的地址及对应的汇编代码。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/ide-debug-native-disassembly.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"汇编调试","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-disassembly","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"检查变量","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/"},"next":{"title":"查看内存信息","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/ide-debug-native-disassembly.md


const frontMatter = {
	title: '汇编调试',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-disassembly',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '汇编调试';

const assets = {

};



const toc = [{
  "value": "汇编视图",
  "id": "汇编视图",
  "level": 2
}, {
  "value": "汇编断点",
  "id": "汇编断点",
  "level": 2
}, {
  "value": "单步调试",
  "id": "单步调试",
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
        id: "汇编调试",
        children: "汇编调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持查看汇编和汇编代码调试，此外，当程序中断到没有源码的位置时（如step into到一个没有调试信息的函数中），DevEco Studio会打开汇编视图，让您了解程序当前停住的地址及对应的汇编代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇编视图",
      children: "汇编视图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在某一个堆栈处右键，在弹出菜单中选择“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disassemble Frame"
        })
      }), "”，可以查看该栈帧对应的汇编代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610880)/* ["default"] */.A) + "",
        width: "477",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持在汇编视图中展示源码、函数名，可以跳转到对应源代码，汇编视图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535223)/* ["default"] */.A) + "",
        width: "693",
        height: "717"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇编断点",
      children: "汇编断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在汇编视图设置断点，程序运行到对应地址时中断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272585)/* ["default"] */.A) + "",
        width: "942",
        height: "527"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单步调试",
      children: "单步调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "汇编视图下，单步按钮默认以汇编指令级别进行单步调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(712121)/* ["default"] */.A) + "",
        width: "85",
        height: "30"
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
272585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753620-6c9ad70841647eb49608bf0cfc4bf1a4.png");

},
610880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753551-dbeffe021bd9150d7bbd5bee3039ab5f.png");

},
535223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913612-c656233c812a4da044ae575d7c90d0f3.png");

},
712121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAeCAYAAABdalL1AAABvUlEQVRoBe2YO07DQBCGcyzoeJyEBgkKF9RcgFNQhAsgARIFFQWPzg1uQhKggcRybF9g0G800mq1EWvvrJXHFKtNomhm59v/n117UNc16ZBlMFCgskDBU6FGcKpCVajyVo3R/lSpqtQNV+pPUdF8UfVyHdu5fCOMGFY1Yz5NcnqZ5sF5Otn/u6jo6HpEp3fjXsD2AfV5ktP+MKODYRYMtjVUBsqFusDOhBXMuUxVSX5moJwnFGwrqCbQs/sJndyOG1uaYAH0+Oadykqu/3GxkiA5FuwOiJyD5xCw3lBtoEX511NNsF/zsgGKha0D1GVAGezhVUavHXqsF1QXUN5pHFYMds/Y8RCo/xUboiJet2sGzF2BA9EL6vnDtLEHLA+F2guCQk2gEkq1+xyrJxZQ1NQr1I/Zgi4eP51AuYdy0TyHKJU3zQaL01niysPx7blXqHZy/r4MKBYnARV5cHcETAxA5twx5pWAGqMwV0yAjQ0UebcKqgv0Kv/mdVChgCRJWo2uRW9CHoXqKZY2IvGG2ibotv9Xoer7VLn3CTHdpEpVpapSoz79xLRvaGy1v9p/TeyfpinpkGWg9o9g/19s5SHr0jCkzgAAAABJRU5ErkJggg==");

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