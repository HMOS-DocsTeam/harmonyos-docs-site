"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["990522"], {
279712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_memory_view_ide_debug_native_memory_view_md_030_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-memory-view-ide-debug-native-memory-view-md-030.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_memory_view_ide_debug_native_memory_view_md_030_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/ide-debug-native-memory-view","title":"查看内存信息","description":"在 native 调试窗口中，点击“Layout Settings”，勾选 Memory View ，打开内存查看窗口。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/ide-debug-native-memory-view.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"查看内存信息","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-memory-view","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"汇编调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-disassembly/"},"next":{"title":"使用LLDB调试命令","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/ide-debug-native-memory-view.md


const frontMatter = {
	title: '查看内存信息',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-memory-view',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '查看内存信息';

const assets = {

};



const toc = [{
  "value": "查看指定地址内存",
  "id": "查看指定地址内存",
  "level": 2
}, {
  "value": "内存转换",
  "id": "内存转换",
  "level": 2
}, {
  "value": "查看变量内存",
  "id": "查看变量内存",
  "level": 2
}, {
  "value": "内存修改",
  "id": "内存修改",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "查看内存信息",
        children: "查看内存信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 native 调试窗口中，点击“Layout Settings”，勾选 Memory View ，打开内存查看窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定地址内存",
      children: "查看指定地址内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在内存视图中，填写地址，点击“View”按钮，查看对应地址处的内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829717)/* ["default"] */.A) + "",
        width: "1000",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“Settings”按钮，设置进制、偏移量和内存数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(826834)/* ["default"] */.A) + "",
        width: "261",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存转换",
      children: "内存转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过点击某一个内存格子，右侧会自动将内存内容转换成各种类型的值。您也可以按住并拖动，从而选中多个内存格，以显示这部分内存的 ASCII 码转换结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看变量内存",
      children: "查看变量内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Variables”变量列表中的某一个变量处右键，在弹出菜单中选择“Inspect Memory”，自动跳转到内存视图展示变量存储地址处的内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(51674)/* ["default"] */.A) + "",
        width: "392",
        height: "493"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存修改",
      children: "内存修改"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以在内存格上双击，键入您想要修改的内存来修改对应地址处的内存值；您也可以在右侧的数据转换结果框中输入数据，从而修改该数据对应类型的长度的内存值。"
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
51674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833219-1838b6f1e238d315c93de471422e9050.png");

},
829717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753235-a7ba69c20d7ca67e9389d8ae7add7ae4.png");

},
826834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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