"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["626677"], {
846351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_adaptation_in_custom_layout_passwordvault_adaptation_in_custom_layout_md_46b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-adaptation-in-custom-layout-passwordvault-adaptation-in-custom-layout-md-46b.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_adaptation_in_custom_layout_passwordvault_adaptation_in_custom_layout_md_46b_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/passwordvault-adaptation-in-custom-layout","title":"自定义布局下的适配建议","description":"登录","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/passwordvault-adaptation-in-custom-layout.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义布局下的适配建议","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-adaptation-in-custom-layout","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"为应用添加自动生成高强度密码的建议","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-custom-strong-password-rules/"},"next":{"title":"系统可适配的场景","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-adaptation-in-custom-layout/passwordvault-adaptation-in-custom-layout.md


const frontMatter = {
	title: '自定义布局下的适配建议',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-adaptation-in-custom-layout',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义布局下的适配建议';

const assets = {

};



const toc = [{
  "value": "登录",
  "id": "登录",
  "level": 2
}, {
  "value": "注册",
  "id": "注册",
  "level": 2
}, {
  "value": "修改密码",
  "id": "修改密码",
  "level": 2
}, {
  "value": "登录、注册失败",
  "id": "登录注册失败",
  "level": 2
}, {
  "value": "将导致功能受限的布局",
  "id": "将导致功能受限的布局",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
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
        id: "自定义布局下的适配建议",
        children: "自定义布局下的适配建议"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "登录",
      children: "登录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在设置“登录”页面时，需要“用户名/账号名”、“密码”在同一个界面，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password#%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95",
        children: "账号密码保存-登录"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-acc-password#%E7%99%BB%E5%BD%95",
        children: "账号密码填充-登录"
      }), "中的介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册",
      children: "注册"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在设置“注册”页面时，需要“用户名/账号名”、“新密码”在同一个界面，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password#%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E6%B3%A8%E5%86%8C",
        children: "账号密码保存-注册"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-strong-password#%E6%B3%A8%E5%86%8C",
        children: "强密码填充-注册"
      }), "中的介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改密码",
      children: "修改密码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在设置“修改密码”页面时，需要“用户名/账号名”、“旧密码”、“新密码”在同一个界面，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password#%E4%BF%AE%E6%94%B9%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81",
        children: "账号密码更新-修改账号密码"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-acc-password#%E4%BF%AE%E6%94%B9%E5%AF%86%E7%A0%81",
        children: "账号密码填充-修改密码"
      }), "中的介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "登录注册失败",
      children: "登录、注册失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用成功登录或注册后，应将账号密码保存至密码保险箱。若登录或注册未成功，通过页面路由（router）跳转返回时，建议应用将enableAutofill属性设置为false，以避免保存错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LoginExample {\n  pathInfos: NavPathStack = new NavPathStack();\n  @State ReserveAccount: string = '';\n  @State ReservePassword: string = '';\n  // 保存填充功能初始值：true\n  @State enableAutoFill: boolean = true;\n\n  onBackPress() {\n    // 当非成功登录、返回等页面跳转时，将enableAutoFill设置为false，密码保险箱将不启用自动填充功能\n    this.enableAutoFill = false;\n    return false;\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'home_page') {\n      HomePage()\n    }\n  }\n\n  build() {\n    Navigation(this.pathInfos) {\n      Column({ space: 16 }) {\n        Text(\"账户登录\")\n          .commonTitleStyles()\n\n        TextInput({ placeholder: '账号' })\n          .commonInputStyles()\n          .type(InputType.USER_NAME)// 账号框使用USER_NAME属性\n          .enableAutoFill(this.enableAutoFill)// 保存填充功能属性\n          .onChange((value: string) => {\n            this.ReserveAccount = value;\n          })\n\n        TextInput({ placeholder: '密码' })\n          .commonInputStyles()\n          .showPasswordIcon(true)\n          .type(InputType.Password)// 密码框使用Password属性\n          .enableAutoFill(this.enableAutoFill)// 保存填充功能属性\n          .onChange((value: string) => {\n            this.ReservePassword = value;\n          })\n\n        Button('登录', { type: ButtonType.Capsule, stateEffect: false })\n          .borderRadius(20)\n          .width('100%')\n          .height(40)\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            // 成功登录时页面跳转将enableAutoFill设置为true，密码保险箱使能\n            this.enableAutoFill = true;\n            this.pathInfos.pushPathByName('home_page', null)\n          })\n      }\n      .padding(16)\n    }\n    .navDestination(this.PageMap)\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct HomePage {\n  pathInfos: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"Home Page\").commonTitleStyles()\n      }.width('100%').height('100%')\n    }.title(\"Home Page\")\n    .onReady((context: NavDestinationContext) => {\n      this.pathInfos = context.pathStack;\n    })\n  }\n}\n\n@Extend(Text)\nfunction commonTitleStyles() {\n  .fontSize(24)\n  .fontColor('#000000')\n  .fontWeight(FontWeight.Medium)\n  .margin({ top: 18 })\n}\n\n@Extend(TextInput)\nfunction commonInputStyles() {\n  .placeholderColor(0x182431)\n  .width('100%')\n  .opacity(0.6)\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "将导致功能受限的布局",
      children: "将导致功能受限的布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述典型场景外，以下界面布局对密码保险箱功能的使用存在限制："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实现场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "布局情况"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "账号密码填充"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "强密码填充"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动保存"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "登录"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户名、密码不在同一界面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "登录"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证码登录"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "注册"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户名、密码不在同一界面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "界面只有用户名、新密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "界面只有旧密码、新密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "界面只有新密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        })]
      })]
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