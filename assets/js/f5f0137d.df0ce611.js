"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["154380"], {
82797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_contacts_kit_contacts_addcontactviaui_contacts_addcontactviaui_md_f5f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-contacts-kit-contacts-addcontactviaui-contacts-addcontactviaui-md-f5f.json
var site_docs_contacts_kit_contacts_addcontactviaui_contacts_addcontactviaui_md_f5f_namespaceObject = JSON.parse('{"id":"contacts-kit/contacts-addcontactviaui/contacts-addcontactviaui","title":"使用picker管理联系人","description":"接口说明","source":"@site/docs/contacts-kit/contacts-addcontactviaui/contacts-addcontactviaui.md","sourceDirName":"contacts-kit/contacts-addcontactviaui","slug":"/contacts-kit/contacts-addcontactviaui/","permalink":"/harmonyos-docs-site/contacts-kit/contacts-addcontactviaui/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用picker管理联系人","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/contacts-addcontactviaui","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Contacts Kit简介","permalink":"/harmonyos-docs-site/contacts-kit/contacts-intro/"},"next":{"title":"Enterprise Space Kit简介","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/contacts-kit/contacts-addcontactviaui/contacts-addcontactviaui.md


const frontMatter = {
	title: '使用picker管理联系人',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/contacts-addcontactviaui',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用picker管理联系人';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用picker新建联系人",
  "id": "使用picker新建联系人",
  "level": 2
}, {
  "value": "使用picker更新联系人信息",
  "id": "使用picker更新联系人信息",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "使用picker管理联系人",
        children: "使用picker管理联系人"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "addContactViaUI(context: Context, contact: Contact): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用新建联系人接口，打开新建联系人UI界面，新建完成。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saveToExistingContactViaUI(context: Context, contact: Contact): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用picker新建联系人",
      children: "使用picker新建联系人"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用新建联系人接口，打开新建联系人UI界面，用户可在UI界面中填写并新建联系人。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { contact } from '@kit.ContactsKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n    \n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          let contactInfo: contact.Contact = {\n            name: {\n              fullName: 'xxx'\n            },\n            phoneNumbers: [{\n              phoneNumber: '138xxxxxx'\n            }]\n          }\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          let promise = contact.addContactViaUI(context, contactInfo);\n          promise.then((data) => {\n              console.info(`Succeeded in add Contact via UI.data->${JSON.stringify(data)}`);\n            }).catch((err: BusinessError) => {\n              console.error(`Failed to add Contact via UI. Code: ${err.code}, message: ${err.message}`);\n            });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用picker更新联系人信息",
      children: "使用picker更新联系人信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过拉起picker，将选中的联系人信息更新到现有联系人中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { contact } from '@kit.ContactsKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n    \n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          let contactInfo: contact.Contact = {\n            id: 1,\n            name: {\n              fullName: 'xxx'\n            },\n            phoneNumbers: [{\n              phoneNumber: '138xxxxxx'\n            }]\n          }\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          let promise = contact.saveToExistingContactViaUI(context, contactInfo);\n          promise.then((data) => {\n              console.info(`Succeeded in save to existing Contact via UI.data->${JSON.stringify(data)}`);\n            }).catch((err: BusinessError) => {\n              console.error(`Failed to save to existing Contact via UI. Code: ${err.code}, message: ${err.message}`);\n            });\n        })\n    }\n  }\n}\n"
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