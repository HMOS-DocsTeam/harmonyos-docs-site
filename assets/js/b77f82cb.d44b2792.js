"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["152153"], {
216998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autosave_passwordvault_save_acc_password_passwordvault_save_acc_password_md_b77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-apps-passwordvault-autosave-passwordvault-save-acc-password-passwordvault-save-acc-password-md-b77.json
var site_docs_system_security_passwordvault_passwordvault_apps_passwordvault_autosave_passwordvault_save_acc_password_passwordvault_save_acc_password_md_b77_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/passwordvault-save-acc-password","title":"账号密码保存","description":"密码保险箱在应用的登录、注册、修改密码等场景中具备自动保存用户名和密码的能力。","source":"@site/docs/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/passwordvault-save-acc-password.md","sourceDirName":"system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password","slug":"/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"账号密码保存","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-save-acc-password","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"快速适配","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/"},"next":{"title":"账号密码更新","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-update-acc-password/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-apps/passwordvault-autosave/passwordvault-save-acc-password/passwordvault-save-acc-password.md


const frontMatter = {
	title: '账号密码保存',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-save-acc-password',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '账号密码保存';

const assets = {

};



const toc = [{
  "value": "账号密码登录",
  "id": "账号密码登录",
  "level": 2
}, {
  "value": "账号密码注册",
  "id": "账号密码注册",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "账号密码保存",
        children: "账号密码保存"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码保险箱在应用的登录、注册、修改密码等场景中具备自动保存用户名和密码的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存后的用户名和密码可以在下次登录、修改密码时自动填充到界面上的对应输入框，用户可以在密码保险箱内对已保存的用户名和密码进行查看，修改，添加备注，删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用界面触发账号密码自动保存时，若密码保险箱中不存在同应用下的相同账号，系统将弹出账号密码保存提示框，用户点击“保存密码”按钮后，本次使用的账号和密码将被保存至密码保险箱。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345308)/* ["default"] */.A) + "",
        width: "384",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用触发账号登录或注册时，均可触发保存功能，以下分别介绍两种布局的标准适配场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "触发条件及注意事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "已设置锁屏密码"
            })
          }), "，并且开启密码保险箱中“自动填充和保存”开关。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "界面中TextInput输入框组件的enableAutoFill属性的值应为true（默认为true）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["密码保险箱的自动保存功能只适用于用户名和密码保存场景，在界面中必须同时存在用户名和密码的TextInput输入框组件。具体类型请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
            children: "输入框类型说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户名输入框应设置type属性为InputType.USER_NAME。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "密码输入框应设置type属性为InputType.Password或InputType.NEW_PASSWORD。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，InputType.Password表示普通密码输入框，适用于登录界面的密码和修改密码界面的旧密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "InputType.NEW_PASSWORD表示新密码输入框，适用于注册界面和修改密码界面的新密码。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户名和密码输入框中需要输入内容，不能为空也不能超长。用户名长度不能超过128字符，密码长度不能超过256字符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面跳转时触发保存功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在只有type为InputType.USER_NAME和InputType.Password的两个TextInput组件时，如果使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/passwordvault/passwordvault-apps/passwordvault-autofill/passwordvault-autofill-acc-password#%E4%BF%AE%E6%94%B9%E5%AF%86%E7%A0%81",
            children: "账号密码填充-修改密码"
          }), "自动填充了用户名和密码并没有修改，则不会触发保存和更新功能。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "账号密码登录",
      children: "账号密码登录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487018)/* ["default"] */.A) + "",
        width: "384",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LoginExample {\n  pathInfos: NavPathStack = new NavPathStack();\n  @State ReserveAccount: string = '';\n  @State ReservePassword: string = '';\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'home_page') {\n      HomePage()\n    }\n  }\n\n  build() {\n    Navigation(this.pathInfos) {\n      Column({ space: 16 }) {\n        Text(\"账户登录\").commonTitleStyles()\n\n        TextInput({ placeholder: '用户名' })\n          .commonInputStyles()\n          .type(InputType.USER_NAME) // 账号框使用USER_NAME属性\n          .onChange((value: string) => {\n            this.ReserveAccount = value;\n          })\n\n        TextInput({ placeholder: '密码' })\n          .showPasswordIcon(true)\n          .commonInputStyles()\n          .type(InputType.Password) // 密码框使用Password属性\n          .onChange((value: string) => {\n            this.ReservePassword = value;\n          })\n\n        Button('登录')\n          .width('100%')\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            this.pathInfos.pushPathByName('home_page', null)\n          })\n      }\n      .padding(16)\n    }\n    .navDestination(this.PageMap)\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct HomePage {\n  pathInfos: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"Home Page\").commonTitleStyles()\n      }.width('100%').height('100%')\n    }.title(\"Home Page\")\n    .onReady((context: NavDestinationContext) => {\n      this.pathInfos = context.pathStack;\n    })\n  }\n}\n\n@Extend(Text)\nfunction commonTitleStyles() {\n  .fontSize(24)\n  .fontColor('#000000')\n  .fontWeight(FontWeight.Medium)\n  .margin({ top: 24, bottom: 16 })\n}\n\n@Extend(TextInput)\nfunction commonInputStyles() {\n  .placeholderColor(0x182431)\n  .width('100%')\n  .opacity(0.6)\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n  .margin({ top: 16 })\n}\n\n@Extend(Button)\nfunction commonButtonStyles() {\n  .width('100%')\n  .height(40)\n  .borderRadius(20)\n  .margin({ top: 24 })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "账号密码注册",
      children: "账号密码注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(578832)/* ["default"] */.A) + "",
        width: "384",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RegisterExample {\n  pathInfos: NavPathStack = new NavPathStack();\n  @State ReserveAccount: string = '';\n  @State ReservePassword: string = '';\n  @State enableAutoFill: boolean = true;\n\n  onBackPress() {\n    // 当非成功登录、返回等页面跳转时，将enableAutoFill设置为false，密码保险箱将不启用自动填充功能\n    this.enableAutoFill = false;\n    return false;\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'register_result_page') {\n      RegisterResultPage()\n    }\n  }\n\n  build() {\n    Navigation(this.pathInfos) {\n      Column() {\n        Text(\"注册账号\")\n          .commonTitleStyles()\n\n        TextInput({ placeholder: '用户名' })\n          .commonInputStyles()\n          .type(InputType.USER_NAME) // 账号框使用USER_NAME属性\n          .onChange((value: string) => {\n            this.ReserveAccount = value;\n          })\n\n        TextInput({ placeholder: '新密码' })\n          .showPasswordIcon(true)\n          .commonInputStyles()\n          .type(InputType.NEW_PASSWORD) // 密码框使用NEW_PASSWORD属性，可以触发生成强密码。\n          .enableAutoFill(this.enableAutoFill)\n          .passwordRules('begin:[upper],special:[yes],len:[maxlen:32,minlen:12]')\n          .onChange((value: string) => {\n            this.ReservePassword = value;\n          })\n\n        Button('页面跳转')\n          .commonButtonStyles()\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            this.pathInfos.pushPathByName('register_result_page', null)\n          })\n\n        Button('页面跳转（跳转前关闭autofill）')\n          .commonButtonStyles()\n          .enabled((this.ReserveAccount !== '') && (this.ReservePassword !== ''))\n          .onClick(() => {\n            this.enableAutoFill = false;\n            this.pathInfos.pushPathByName('register_result_page', null)\n          })\n      }\n    }\n    .navDestination(this.PageMap)\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct RegisterResultPage {\n  pathInfos: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"Result Page\").commonTitleStyles()\n      }.width('100%').height('100%')\n    }.title(\"Result Page\")\n    .onReady((context: NavDestinationContext) => {\n      this.pathInfos = context.pathStack;\n    })\n  }\n}\n\n@Extend(Text)\nfunction commonTitleStyles() {\n  .fontSize(24)\n  .fontColor('#000000')\n  .fontWeight(FontWeight.Medium)\n  .margin({ top: 24, bottom: 16 })\n}\n\n@Extend(TextInput)\nfunction commonInputStyles() {\n  .placeholderColor(0x182431)\n  .width('100%')\n  .opacity(0.6)\n  .placeholderFont({ size: 16, weight: FontWeight.Regular })\n  .margin({ top: 16 })\n}\n\n@Extend(Button)\nfunction commonButtonStyles() {\n  .width('100%')\n  .height(40)\n  .borderRadius(20)\n  .margin({ top: 24 })\n}\n"
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
487018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798712-8c09252a7949ac314dbfde4abe992b71.png");

},
345308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478361-6efd8b87cc02d792ceff9a64d409cb7a.png");

},
578832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438407-6cd7b2348115cdce4ff6d6c2333147f7.png");

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