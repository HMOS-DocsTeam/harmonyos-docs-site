"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["259348"], {
580775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_inputmethod_immersive_mode_guide_inputmethod_immersive_mode_guide_md_f6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-inputmethod-immersive-mode-guide-inputmethod-immersive-mode-guide-md-f6e.json
var site_docs_ime_kit_inputmethod_immersive_mode_guide_inputmethod_immersive_mode_guide_md_f6e_namespaceObject = JSON.parse('{"id":"ime-kit/inputmethod-immersive-mode-guide/inputmethod-immersive-mode-guide","title":"输入法应用沉浸模式","description":"场景介绍","source":"@site/docs/ime-kit/inputmethod-immersive-mode-guide/inputmethod-immersive-mode-guide.md","sourceDirName":"ime-kit/inputmethod-immersive-mode-guide","slug":"/ime-kit/inputmethod-immersive-mode-guide/","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-immersive-mode-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"输入法应用沉浸模式","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-immersive-mode-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在自绘编辑框中使用输入法开发指导 (C/C++)","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box-ndk/"},"next":{"title":"Ime工具","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-hdc-commands-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/inputmethod-immersive-mode-guide/inputmethod-immersive-mode-guide.md


const frontMatter = {
	title: '输入法应用沉浸模式',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-immersive-mode-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '输入法应用沉浸模式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "框架原理",
  "id": "框架原理",
  "level": 2
}, {
  "value": "接入指导",
  "id": "接入指导",
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
        id: "输入法应用沉浸模式",
        children: "输入法应用沉浸模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了让应用能够提供一致的沉浸式体验，我们提供了前台应用和输入法应用之间的通信机制。通过该机制，输入法应用根据前台应用设置的沉浸模式来决定最终沉浸模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "框架原理",
      children: "框架原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915610)/* ["default"] */.A) + "",
        width: "692",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "前台应用根据应用场景，设置应用期望的沉浸模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入法框架在拉起输入法应用时会将前台应用期望的沉浸模式传递给输入法应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入法应用根据前台应用的沉浸模式决定最终的沉浸模式，并设置最终沉浸模式给输入法框架。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入指导",
      children: "接入指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前台应用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#keyboardappearance15",
            children: "设置编辑框沉浸模式"
          }), "。示例代码如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextArea({placeholder: '沉浸模式'})\n  .keyboardAppearance(KeyboardAppearance.IMMERSIVE)\n\nTextArea({placeholder: '非沉浸模式'})\n  .keyboardAppearance(KeyboardAppearance.NONE_IMMERSIVE)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入法应用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#oneditorattributechanged10",
            children: "订阅编辑框属性变化事件"
          }), "，通过回调参数EditorAttribute中的immersiveMode字段感知前台应用期望的沉浸模式。示例代码如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 感知是否设置沉浸模式，如果是沉浸模式选择沉浸模式类型\ninputMethodEngine.getKeyboardDelegate().on(\"editorAttributeChanged\", (attr : inputMethodEngine.EditorAttribute) => {\n  console.info('recv editorAttributeChanged, immersiveMode: ', attr.immersiveMode);\n  if (attr.immersiveMode == 1) {\n    this.panel?.setImmersiveMode(inputMethodEngine.ImmersiveMode.DARK_IMMERSIVE);\n    console.info('recv editorAttributeChanged, panel:', this.panel?.getImmersiveMode());\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入法应用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#setimmersivemode15",
            children: "设置沉浸模式"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IMMERSIVE表示沉浸模式由输入法应用决定。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "输入法应用不能设置IMMERSIVE模式给输入法框架。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果输入法应用收到前台应用期望的沉浸模式为IMMERSIVE，建议输入法应用根据当前系统所处颜色模式，将最终沉浸模式设置为浅色沉浸模式（LIGHT_IMMERSIVE）或深色沉浸模式（DARK_IMMERSIVE）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置沉浸模式，示例代码如下。setImmersiveMode接口需使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#createpanel10",
            children: "createPanel"
          }), "获取到Panel实例后，通过实例调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 感知是否设置沉浸模式，如果是沉浸模式选择沉浸模式类型\ninputMethodEngine.getKeyboardDelegate().on(\"editorAttributeChanged\", (attr : inputMethodEngine.EditorAttribute) => {\n  console.info('recv editorAttributeChanged, immersiveMode: ', attr.immersiveMode);\n  if (attr.immersiveMode == 1) {\n    this.panel?.setImmersiveMode(inputMethodEngine.ImmersiveMode.DARK_IMMERSIVE);\n    console.info('recv editorAttributeChanged, panel:', this.panel?.getImmersiveMode());\n  }\n})\n"
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
915610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958318-354347cf1535666ca156ad378af39850.png");

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