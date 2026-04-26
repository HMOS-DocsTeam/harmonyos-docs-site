"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483031"], {
168029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autosave_passwordvault_update_acc_password_passwordvault_update_acc_password_md_399_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-autosave-passwordvault-update-acc-password-passwordvault-update-acc-password-md-399.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autosave_passwordvault_update_acc_password_passwordvault_update_acc_password_md_399_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/passwordvault-update-acc-password","title":"账号密码更新","description":"应用界面触发账号密码自动保存时，若密码保险箱中已存在同应用下与本次使用账号相同的账号，则弹出密码更新提示框，用户点击更新按钮，即可更新密码保险箱内对应账号的密码。","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/passwordvault-update-acc-password.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"账号密码更新","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-update-acc-password","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"账号密码保存","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/"},"next":{"title":"账号密码填充","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-acc-password/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/passwordvault-update-acc-password.md


const frontMatter = {
	title: '账号密码更新',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-update-acc-password',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '账号密码更新';

const assets = {

};



const toc = [{
  "value": "修改账号密码",
  "id": "修改账号密码",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "账号密码更新",
        children: "账号密码更新"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用界面触发账号密码自动保存时，若密码保险箱中已存在同应用下与本次使用账号相同的账号，则弹出密码更新提示框，用户点击更新按钮，即可更新密码保险箱内对应账号的密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101614)/* ["default"] */.A) + "",
        width: "384",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用触发修改密码或使用已经保存过的账号手动登录时，均会触发密码更新功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["登录的布局介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password#%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95",
        children: "账号密码登录"
      }), "，以下仅介绍修改账号密码的标准适配场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["触发条件及注意事项同", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password",
            children: "账号密码保存"
          }), "功能。"]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改账号密码",
      children: "修改账号密码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457952)/* ["default"] */.A) + "",
        width: "384",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RegisterExample {\n  pathInfos: NavPathStack = new NavPathStack();\n  @State ReserveAccount: string = '';\n  @State ReservePassword: string = '';\n  @State enableAutoFill: boolean = true;\n\n  onBackPress() {\n    // 当非成功登录、返回等页面跳转时，将enableAutoFill设置为false，密码保险箱将不启用自动填充功能\n    this.enableAutoFill = false;\n    return false;\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'register_result_page') {\n      RegisterResultPage()\n    }\n  }\n\n  build() {\n    Navigation(this.pathInfos) {\n      Column() {\n        Text(\"修改密码\")\n          .commonTitleStyles()\n\n        TextInput({ placeholder: '用户名' })\n          .commonInputStyles()\n          .type(InputType.USER_NAME) // 账号框使用USER_NAME属性\n          .onChange((value: string) => {\n            this.ReserveAccount = value;\n          })\n\n        TextInput({ placeholder: '密码' })\n          .showPasswordIcon(true)\n          .commonInputStyles()\n          .type(InputType.Password)\n          .onChange((value: string) => {\n            this.ReservePassword = value;\n          })\n\n        TextInput({ placeholder: '新密码' })\n          .showPasswordIcon(true)\n          .commonInputStyles()\n          .type(InputType.NEW_PASSWORD) // 密码框使用NEW_PASSWORD属性，可以触发生成强密码。\n          .enableAutoFill(this.enableAutoFill)\n          .passwordRules('begin:[upper],special:[yes],len:[maxlen:32,minlen:12]')\n          .onChange((value: string) => {\n            this.ReservePassword = value;\n          })\n\n        Button('页面跳转')\n          .commonButtonStyles()\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            this.pathInfos.pushPathByName('register_result_page', null)\n          })\n\n        Button('页面跳转（跳转前关闭autofill）')\n          .commonButtonStyles()\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            this.enableAutoFill = false;\n            this.pathInfos.pushPathByName('register_result_page', null)\n          })\n      }\n    }\n    .navDestination(this.PageMap)\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct RegisterResultPage {\n  pathInfos: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"Result Page\").commonTitleStyles()\n      }.width('100%').height('100%')\n    }.title(\"Result Page\")\n    .onReady((context: NavDestinationContext) => {\n      this.pathInfos = context.pathStack;\n    })\n  }\n}\n\n@Extend(Text)\nfunction commonTitleStyles() {\n  .fontSize(24)\n  .fontColor('#000000')\n  .fontWeight(FontWeight.Medium)\n  .margin({ top: 24, bottom: 16 })\n}\n\n@Extend(TextInput)\nfunction commonInputStyles() {\n  .placeholderColor(0x182431)\n  .width('100%')\n  .opacity(0.6)\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n  .margin({ top: 16 })\n}\n\n@Extend(Button)\nfunction commonButtonStyles() {\n  .width('100%')\n  .height(40)\n  .borderRadius(20)\n  .margin({ top: 24 })\n}\n"
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
101614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958362-6554d5ad0ecd867744ede4f8710518db.png");

},
457952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478363-bd65a13bf858f82d47ec6e18792ed830.png");

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