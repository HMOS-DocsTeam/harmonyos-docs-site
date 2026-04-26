"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["347116"], {
737791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_text_introduction_arkts_text_introduction_md_dae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-text-introduction-arkts-text-introduction-md-dae.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_text_introduction_arkts_text_introduction_md_dae_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/arkts-text-introduction","title":"文本概述","description":"文本包含用户输入的信息、呈现的文本内容和小图标，这些元素共同构建了用户与系统间的交互界面，提升了操作的便捷性与信息展示的直观性。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/arkts-text-introduction.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"文本概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建瀑布流（WaterFlow）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/"},"next":{"title":"文本显示 (Text/Span)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/arkts-text-introduction.md


const frontMatter = {
	title: '文本概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '文本概述';

const assets = {

};



const toc = [{
  "value": "文本显示",
  "id": "文本显示",
  "level": 2
}, {
  "value": "文本输入",
  "id": "文本输入",
  "level": 2
}, {
  "value": "富文本",
  "id": "富文本",
  "level": 2
}, {
  "value": "图标小符号",
  "id": "图标小符号",
  "level": 2
}, {
  "value": "属性字符串",
  "id": "属性字符串",
  "level": 2
}, {
  "value": "图文混排",
  "id": "图文混排",
  "level": 2
}, {
  "value": "管理软键盘",
  "id": "管理软键盘",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "文本概述",
        children: "文本概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本包含用户输入的信息、呈现的文本内容和小图标，这些元素共同构建了用户与系统间的交互界面，提升了操作的便捷性与信息展示的直观性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据实际应用场景选择合适的文本组件进行页面开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本显示",
      children: "文本显示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主要用于显示静态文本。开发者可以使用Text组件配合Span组件创建文本节点，也可以使用属性字符串（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
        children: "StyledString"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#mutablestyledstring",
        children: "MutableStyledString"
      }), "）节点生成文本信息并接入Text组件。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display",
        children: "文本显示 (Text/Span)"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本输入",
      children: "文本输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要在单行输入框（TextInput）或多行输入框（TextArea）中输入纯文本时，应优先考虑使用此文本组件。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input",
        children: "文本输入 (TextInput/TextArea/Search)"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "富文本",
      children: "富文本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要在编辑框内插入图片或者自定义图标等需求时，应优先考虑使用此文本组件。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor",
        children: "富文本编辑 (RichEditor)"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图标小符号",
      children: "图标小符号"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要显示小图标时，应优先考虑使用此图标组件。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol",
        children: "图标小符号 (SymbolGlyph/SymbolSpan)"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性字符串",
      children: "属性字符串"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要在字符或者段落级别设置文本样式，包括调整字号、添加字体颜色、使文本具备可点击性，以及通过自定义方式绘制文本等场景时，应优先考虑使用属性字符串。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string",
        children: "属性字符串 (StyledString/MutableStyledString)"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图文混排",
      children: "图文混排"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要图片和文字混排的场景，可以使用Span和ImageSpan实现。若需要样式多样的混排效果，可以选择属性字符串实现。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout",
        children: "图文混排"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管理软键盘",
      children: "管理软键盘"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要控制文本输入组件的软键盘行为，包括弹出、收起键盘时，可以使用软键盘管理功能。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard",
        children: "管理软键盘"
      }), "章节。"]
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