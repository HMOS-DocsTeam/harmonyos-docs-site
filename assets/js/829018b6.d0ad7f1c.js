"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["321626"], {
779085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_quick_adaptation_passwordvault_quick_adaptation_md_829_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-quick-adaptation-passwordvault-quick-adaptation-md-829.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_quick_adaptation_passwordvault_quick_adaptation_md_829_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/passwordvault-quick-adaptation","title":"快速适配","description":"密码自动填充服务依托ArkUI TextInput 组件为开发者提供的一系列登录场景相关控件，密码保险箱帮助开发者快速集成自动填充等功能，仅需在界面上使用ArkUI标准控件，开发者即可通过密码保险箱的便捷登录，让用户快速上手应用功能。","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/passwordvault-quick-adaptation.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"快速适配","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-quick-adaptation","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密码自动填充服务概述","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-overview/"},"next":{"title":"账号密码保存","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/passwordvault-quick-adaptation.md


const frontMatter = {
	title: '快速适配',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-quick-adaptation',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '快速适配';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "快速适配指导",
  "id": "快速适配指导",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "快速适配",
        children: "快速适配"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["密码自动填充服务依托ArkUI ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput 组件"
      }), "为开发者提供的一系列登录场景相关控件，密码保险箱帮助开发者快速集成自动填充等功能，仅需在界面上使用ArkUI标准控件，开发者即可通过密码保险箱的便捷登录，让用户快速上手应用功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要使用ArkUI组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "作为输入框，并指定输入框类型（InputType），才能使用系统密码自动填充服务。不同输入框类型与使用场景的对应关系如下表所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 输入框类型说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "InputType名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户名输入模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于登录、注册等场景的用户名输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密码输入模式。支持输入数字、字母、下划线、空格、特殊字符。  密码显示小眼睛图标并且默认会将文字变成圆点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于登录、注册等场景的密码输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NUMBER_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字密码输入模式。仅支持输入数字。  密码显示小眼睛图标并且默认会将文字变成圆点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于登录、注册等场景的密码输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEW_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新密码输入模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于注册、修改密码等场景的新密码输入。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156939)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档中类型描述为Password的类型，均可用NUMBER_PASSWORD类型替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速适配指导",
      children: "快速适配指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用具备账号密码登录的场景时，只需要将充当用户名的TextInput输入框的type属性设置为InputType.USER_NAME，将密码TextInput输入框的type属性设置为InputType.Password，即可使用密码保险箱的填充和保存功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用的账号密码注册页除设置用户名输入框外，将新密码TextInput输入框的type属性设置为InputType.NEW_PASSWORD，即可使用强密码填充功能。如果应用对密码强度有特殊要求，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules",
        children: "为应用添加自动生成高强度密码的建议"
      }), "适配即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput({ placeholder: '用户名' })\n  .opacity(0.6)\n  .type(InputType.USER_NAME)\n  .placeholderColor(0x182431)\n  .width('100%')\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n  .margin({ top: 32, bottom: 8 })\n"
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
156939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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