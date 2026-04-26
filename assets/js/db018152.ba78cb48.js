"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["803145"], {
186323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_input_method_subtype_guide_input_method_subtype_guide_md_db0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-input-method-subtype-guide-input-method-subtype-guide-md-db0.json
var site_docs_ime_kit_input_method_subtype_guide_input_method_subtype_guide_md_db0_namespaceObject = JSON.parse('{"id":"ime-kit/input-method-subtype-guide/input-method-subtype-guide","title":"输入法子类型开发指南","description":"输入法子类型允许输入法展现不同的输入模式或语言，用户可以根据需要在不同模式和语言中切换。如输入法的中文键盘、英文键盘等，都属于输入法的子类型。","source":"@site/docs/ime-kit/input-method-subtype-guide/input-method-subtype-guide.md","sourceDirName":"ime-kit/input-method-subtype-guide","slug":"/ime-kit/input-method-subtype-guide/","permalink":"/harmonyos-docs-site/ime-kit/input-method-subtype-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"输入法子类型开发指南","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/input-method-subtype-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"切换输入法应用","permalink":"/harmonyos-docs-site/ime-kit/switch-inputmethod-guide/"},"next":{"title":"输入法安全模式介绍","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-security/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/input-method-subtype-guide/input-method-subtype-guide.md


const frontMatter = {
	title: '输入法子类型开发指南',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/input-method-subtype-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '输入法子类型开发指南';

const assets = {

};



const toc = [{
  "value": "输入法子类型的配置与实现",
  "id": "输入法子类型的配置与实现",
  "level": 2
}, {
  "value": "输入法子类型相关信息的获取",
  "id": "输入法子类型相关信息的获取",
  "level": 2
}, {
  "value": "输入法子类型的切换",
  "id": "输入法子类型的切换",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "输入法子类型开发指南",
        children: "输入法子类型开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法子类型允许输入法展现不同的输入模式或语言，用户可以根据需要在不同模式和语言中切换。如输入法的中文键盘、英文键盘等，都属于输入法的子类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "输入法子类型的配置与实现",
      children: "输入法子类型的配置与实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入法应用开发者只需要注册实现一个InputMethodExtensionAbility，所有的输入法子类型共用该InputMethodExtensionAbility，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中添加metadata，name为ohos.extension.input_method，用于配置所有子类型的资源信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"srcEntry\": \"./ets/InputMethodExtensionAbility/InputMethodService.ets\",\n    \"name\": \"InputMethodService\",\n    \"label\": \"$string:MainAbility_label\",\n    \"description\": \"$string:extension_ability_descriptor\",\n    \"type\": \"inputMethod\",\n    \"exported\": true,\n    \"metadata\": [\n      {\n        \"name\": \"ohos.extension.input_method\",\n        \"resource\": \"$profile:input_method_config\"\n      }\n    ]\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["子类型配置文件input_method_config.json需要放在应用资源目录的profile文件夹中，格式如下，字段释义参照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-subtype/js-apis-inputmethod-subtype#inputmethodsubtype",
            children: "InputMethodSubtype"
          }), "；开发者需要严格按照配置文件格式及字段进行子类型信息配置，locale字段的配置参照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/localization-kit/i18n/i18n-locale-culture#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
            children: "i18n-locale-culture"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"subtypes\": [\n    {\n      \"icon\": \"$media:icon\",\n      \"id\": \"InputMethodExtAbility\",\n      \"label\": \"$string:english\",\n      \"locale\": \"en-US\",\n      \"mode\": \"lower\"\n    },\n    {\n      \"icon\": \"$media:icon\",\n      \"id\": \"InputMethodExtAbility1\",\n      \"label\": \"$string:chinese\",\n      \"locale\": \"zh-CN\",\n      \"mode\": \"lower\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入法应用中监听子类型事件，根据不同的子类型，可以加载不同的软键盘界面，或者通过状态变量控制软键盘显示效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置监听子类型事件，改变输入法应用界面\ninputMethodAbility.on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {\n  if (inputMethodSubtype.id === 'InputMethodExtAbility') {\n    AppStorage.setOrCreate('subtypeChange', 0);\n  }\n  if (inputMethodSubtype.id === 'InputMethodExtAbility1') {\n    AppStorage.setOrCreate('subtypeChange', 1);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "输入法子类型相关信息的获取",
      children: "输入法子类型相关信息的获取"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodgetcurrentinputmethodsubtype9",
          children: "getCurrentInputMethodSubtype"
        }), "获取当前输入法应用的当前子类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#listcurrentinputmethodsubtype9",
          children: "listCurrentInputMethodSubtype"
        }), "获取当前输入法应用的所有子类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#listinputmethodsubtype9",
          children: "listInputMethodSubtype"
        }), "获取指定输入法应用的所有子类型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "输入法子类型的切换",
      children: "输入法子类型的切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodswitchcurrentinputmethodsubtype9",
          children: "switchCurrentInputMethodSubtype"
        }), "切换当前输入法应用的子类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodswitchcurrentinputmethodandsubtype9",
          children: "switchCurrentInputMethodAndSubtype"
        }), "切换至指定输入法应用的指定子类型。"]
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