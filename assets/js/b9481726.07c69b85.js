"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["366469"], {
982160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_special_scenarios_passwordvault_special_scenarios_md_b94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-special-scenarios-passwordvault-special-scenarios-md-b94.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_special_scenarios_passwordvault_special_scenarios_md_b94_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/passwordvault-special-scenarios","title":"系统可适配的场景","description":"考虑到实际场景的多样性，除了上述接入示例中的场景外，密码保险箱针对部分场景的非标准场景进行了适配，可支持使用邮箱、手机号作为用户名登录、注册的场景。","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/passwordvault-special-scenarios.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"系统可适配的场景","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-special-scenarios","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义布局下的适配建议","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/"},"next":{"title":"网页接入密码保险箱","permalink":"/harmonyos-docs-site/system-security/passwordvault/arkweb-access-password-safe/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/passwordvault-special-scenarios.md


const frontMatter = {
	title: '系统可适配的场景',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-special-scenarios',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '系统可适配的场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "系统可适配的场景",
        children: "系统可适配的场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "考虑到实际场景的多样性，除了上述接入示例中的场景外，密码保险箱针对部分场景的非标准场景进行了适配，可支持使用邮箱、手机号作为用户名登录、注册的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面上存在一个Password/NEW_PASSWORD类型输入框，且页面上同时存在USER_NAME、Email、PhoneNumber类型输入框中的一种时，会正常触发密码保险箱保存和填充的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当页面上仅有两个TextInput输入框，且其中一个为Password/NEW_PASSWORD类型，另外一个为非密码类型时，也会正常触发密码保险箱逻辑。具体类型请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "输入框类型说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码保险箱当前支持的所有场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["页面上有", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "两个输入框"
            })
          }), "时，根据输入框类型的不同，密码保险箱的表现如下表。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "输入框类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密码保险箱的表现"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "InputType.USER_NAME / InputType.Email / InputType.PhoneNumber输入框 + InputType.Password输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击其中一个输入框，触发账号密码填充提示。  - 页面跳转时，自动弹出账号密码保存提示框。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "非密码类型输入框 + InputType.Password输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击其中一个输入框，触发账号密码填充提示。  - 页面跳转时，自动弹出账号密码保存提示框。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "InputType.USER_NAME / InputType.Email / InputType.PhoneNumber输入框 + InputType.NEW_PASSWORD输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击新密码输入框（InputType.NEW_PASSWORD），触发强密码填充。  - 页面跳转时，如果直接使用生成的强密码，将静默保存到密码保险箱；如果使用自定义密码，即未使用或修改了生成的强密码，将弹出账号密码保存提示框。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "非密码类型输入框 + InputType.NEW_PASSWORD输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击新密码输入框（InputType.NEW_PASSWORD），触发强密码填充。  - 页面跳转时，如果直接使用生成的强密码，将静默保存到密码保险箱；如果使用自定义密码，即未使用或修改了生成的强密码，将弹出账号密码保存提示框。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当页面上有", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "多个输入框"
            })
          }), "时，根据输入框类型的不同，密码保险箱的表现如下表。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "输入框类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密码保险箱的表现"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "含InputType.USER_NAME / InputType.Email / InputType.PhoneNumber其中一种或多种 + 含InputType.Password输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击其中一个输入框，触发账号密码填充提示。  - 页面跳转时，自动弹出账号密码保存提示框。  - 保存账号密码时，优先保存USER_NAME输入框的内容作为账户名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "含InputType.USER_NAME / InputType.Email / InputType.PhoneNumber其中一种或多种 + 含InputType.NEW_PASSWORD输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击新密码输入框（InputType.NEW_PASSWORD），触发强密码填充。  - 页面跳转时，如果直接使用生成的强密码，将静默保存到密码保险箱；如果使用自定义密码，即未使用或修改了生成的强密码，将弹出账号密码保存提示框。  - 保存账号密码时，优先保存USER_NAME输入框的内容作为账户名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "含InputType.USER_NAME / InputType.Email / InputType.PhoneNumber其中一种或多种 + 含InputType.Password输入框 + 含InputType.NEW_PASSWORD输入框"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 点击其中一个输入框，触发账号密码填充提示。  - 点击新密码输入框（InputType.NEW_PASSWORD），触发强密码填充。  - 页面跳转时，如果直接使用生成的强密码，将静默保存到密码保险箱；如果使用自定义密码，即未使用或修改了生成的强密码，将弹出账号密码保存提示框。  - 保存账号密码时，优先保存USER_NAME输入框的内容作为账户名。"
              })]
            })]
          })]
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