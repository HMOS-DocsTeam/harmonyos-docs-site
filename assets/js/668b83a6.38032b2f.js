"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["22212"], {
382183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_switch_inputmethod_guide_switch_inputmethod_guide_md_668_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-switch-inputmethod-guide-switch-inputmethod-guide-md-668.json
var site_docs_ime_kit_switch_inputmethod_guide_switch_inputmethod_guide_md_668_namespaceObject = JSON.parse('{"id":"ime-kit/switch-inputmethod-guide/switch-inputmethod-guide","title":"切换输入法应用","description":"输入法框架服务提供了切换输入法应用的API，支持切换输入法、切换输入法和子类型、切换当前输入法的子类型。","source":"@site/docs/ime-kit/switch-inputmethod-guide/switch-inputmethod-guide.md","sourceDirName":"ime-kit/switch-inputmethod-guide","slug":"/ime-kit/switch-inputmethod-guide/","permalink":"/harmonyos-docs-site/ime-kit/switch-inputmethod-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"切换输入法应用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/switch-inputmethod-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在自绘编辑框中使用输入法","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box/"},"next":{"title":"输入法子类型开发指南","permalink":"/harmonyos-docs-site/ime-kit/input-method-subtype-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/switch-inputmethod-guide/switch-inputmethod-guide.md


const frontMatter = {
	title: '切换输入法应用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/switch-inputmethod-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '切换输入法应用';

const assets = {

};



const toc = [{
  "value": "切换当前输入法子类型",
  "id": "切换当前输入法子类型",
  "level": 2
}, {
  "value": "切换输入法应用",
  "id": "切换输入法应用-1",
  "level": 2
}, {
  "value": "切换输入法应用和子类型",
  "id": "切换输入法应用和子类型",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "切换输入法应用",
        children: "切换输入法应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法框架服务提供了切换输入法应用的API，支持切换输入法、切换输入法和子类型、切换当前输入法的子类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388030)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以下接口的使用仅允许在当前输入法应用中调用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本示例假设已经在输入法应用中执行，如何实现一个输入法应用，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ime-kit/inputmethod-application-guide",
          children: "实现一个输入法应用"
        }), "开发指导。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换当前输入法子类型",
      children: "切换当前输入法子类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodswitchcurrentinputmethodsubtype9",
            children: "switchCurrentInputMethodSubtype"
          }), "接口，传入当前输入法的子类型", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-subtype/js-apis-inputmethod-subtype#inputmethodsubtype",
            children: "InputMethodSubtype"
          }), "作为参数即可切换当前输入法子类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async switchCurrentInputMethodSubtype(item: InputMethodSubtype) {\n  try {\n    await inputMethod.switchCurrentInputMethodSubtype(item);\n    this.currentInputMethodSubtype = inputMethod.getCurrentInputMethodSubtype().id;\n  } catch (err) {\n    console.error(`SwitchCurrentInputMethodSubtype error: ${err.code} ${err.message}`);\n    let error: BusinessError = err as BusinessError;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入法应用中注册子类型变化事件，根据不同子类型加载不同的输入界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置监听子类型事件，改变输入法应用界面\ninputMethodAbility.on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {\n  if (inputMethodSubtype.id === 'InputMethodExtAbility') {\n    AppStorage.setOrCreate('subtypeChange', 0);\n  }\n  if (inputMethodSubtype.id === 'InputMethodExtAbility1') {\n    AppStorage.setOrCreate('subtypeChange', 1);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换输入法应用-1",
      children: "切换输入法应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodswitchinputmethod9",
        children: "switchInputMethod"
      }), "接口，传入目标输入法的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodproperty8",
        children: "InputMethodProperty"
      }), "信息，即可切换输入法到目标输入法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async switchInputMethod(item: string) {\n  try {\n    this.inputMethods = await inputMethod.getSetting().getInputMethods(true); // 获取已使能的输入法列表\n    let currentInputMethod = inputMethod.getCurrentInputMethod(); // 获取当前输入法\n    for (let i = 0; i < this.inputMethods.length; i++) {\n      if (item != currentInputMethod.name) { // 判断不是当前输入法时，切换到该输入法，实际开发中可以切换到固定输入法\n        await inputMethod.switchInputMethod(this.inputMethods[i]);\n      }\n    }\n  } catch (err) {\n    let error = err as BusinessError;\n    Log.showError(TAG, `switchInputMethod catch error: ${error.code} ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换输入法应用和子类型",
      children: "切换输入法应用和子类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodswitchcurrentinputmethodandsubtype9",
        children: "switchCurrentInputMethodAndSubtype"
      }), "接口，传入目标输入法的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodproperty8",
        children: "InputMethodProperty"
      }), "，目标输入法的子类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-subtype/js-apis-inputmethod-subtype#inputmethodsubtype",
        children: "InputMethodSubtype"
      }), "信息，即可切换输入法到目标输入法的指定子类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inputMethod } from '@kit.IMEKit';\n\nexport class KeyboardController {\n  async switchInputMethodAndSubtype() {\n    try {\n      let inputMethods: Array<inputMethod.InputMethodProperty> =\n        await inputMethod.getSetting().getInputMethods(true); // 获取已使能的输入法列表\n      let currentInputMethod: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod(); // 获取当前输入法\n      for (let i = 0; i < inputMethods.length; i++) {\n        if (inputMethods[i].name != currentInputMethod.name) { // 判断不是当前输入法时，切换到该输入法，实际开发中可以切换到固定输入法\n          let subTypes = await inputMethod.getSetting().listInputMethodSubtype(inputMethods[i]); // 获取目标输入法的子类型\n          if (subTypes.length > 0) {\n            await inputMethod.switchCurrentInputMethodAndSubtype(inputMethods[i], subTypes[0]); // 本示例默认切换到获取的第一个子类型\n          }\n          return;\n        }\n      }\n    } catch (err) {\n      let error: BusinessError = err as BusinessError;\n      console.error(`Failed to switchCurrentInputMethodAndSubtype, code: ${err.code}, message: ${err.message}`);\n    }\n  }\n}\n"
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
388030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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