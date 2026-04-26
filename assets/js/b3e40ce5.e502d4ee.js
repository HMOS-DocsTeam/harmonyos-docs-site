"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["894373"], {
324309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_cross_language_code_editing_ide_cross_language_code_editing_md_b3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-cross-language-code-editing-ide-cross-language-code-editing-md-b3e.json
var site_docs_ide_code_edit_ide_cross_language_code_editing_ide_cross_language_code_editing_md_b3e_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-cross-language-code-editing/ide-cross-language-code-editing","title":"跨语言代码编辑","description":"生成胶水代码函数框架","source":"@site/docs/ide-code-edit/ide-cross-language-code-editing/ide-cross-language-code-editing.md","sourceDirName":"ide-code-edit/ide-cross-language-code-editing","slug":"/ide-code-edit/ide-cross-language-code-editing/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-cross-language-code-editing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"跨语言代码编辑","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-cross-language-code-editing","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"快速插入场景化代码片段","permalink":"/harmonyos-docs-site/ide-code-edit/ide-kit-assistant/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-cross-language-code-editing/ide-cross-language-code-editing.md


const frontMatter = {
	title: '跨语言代码编辑',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-cross-language-code-editing',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '跨语言代码编辑';

const assets = {

};



const toc = [{
  "value": "生成胶水代码函数框架",
  "id": "生成胶水代码函数框架",
  "level": 2
}, {
  "value": "跨语言快速生成函数定义",
  "id": "跨语言快速生成函数定义",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "跨语言代码编辑",
        children: "跨语言代码编辑"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成胶水代码函数框架",
      children: "生成胶水代码函数框架"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio提供跨语言代码编辑功能。当开发者需要使用NAPI封装暴露给ArkTS/JS的接口时，在C++头文件内，通过右键Generate > NAPI，快速生成当前函数或类的胶水代码函数框架。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查当前C++的entry > src > main > cpp路径下，是否已包含napi_init.cpp文件。如不存在该文件，请在头文件（头文件支持类型：.hpp，.hxx，.hh，.h）中，将光标放置在任意函数名/类名处（当前支持bool，int，string，void，float，double，std::array，std::vector等参数类型），单击右键选择Generate > NAPI，生成胶水代码框架文件napi_init.cpp。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(689317)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "723",
            height: "381"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若工程中已存在或创建完成napi_init.cpp文件，请在头文件中需要被调用的函数/类名处，单击右键选择Generate > NAPI，将在napi_init.cpp文件napi_property_descriptor字段中分别注册对应的函数/类的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(914602)/* ["default"] */.A) + "",
            width: "1322",
            height: "381"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在napi_init.cpp文件中TODO位置，补充相应的功能实现代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(105561)/* ["default"] */.A) + "",
            width: "1029",
            height: "380"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨语言快速生成函数定义",
      children: "跨语言快速生成函数定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持在跨语言的d.ts文件中，通过Generate native implementation功能，一键生成C++文件中对应函数定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将光标悬浮在未定义的函数名处，在悬浮窗中点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate native implementation"
        })
      }), "，或点击页面上出现的红色灯泡图标，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate native implementation"
        })
      }), "，生成函数定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249918)/* ["default"] */.A) + "",
        width: "1372",
        height: "595"
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
914602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752951-81faa623ebf290c4fea92f55aa7620a3.png");

},
249918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913006-44306ae3b58ced6822b6c6dd93b3d609.gif");

},
689317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753010-8cbac0eb8ed69ae9342489d276d27ab4.png");

},
105561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913012-40d327889db98c321e19355849b777ef.png");

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