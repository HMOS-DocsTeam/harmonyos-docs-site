"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["862301"], {
267629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_request_user_authorization_second_request_user_authorization_second_md_1c7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-request-user-authorization-second-request-user-authorization-second-md-1c7.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_request_user_authorization_second_request_user_authorization_second_md_1c7_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/request-user-authorization-second","title":"再次向用户申请授权","description":"当应用通过requestPermissionsFromUser()拉起弹框请求用户授权时，如果用户拒绝授权，应用将无法再次通过requestPermissionsFromUser()拉起弹框。用户需要在系统设置中手动授权。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/request-user-authorization-second.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"再次向用户申请授权","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization-second","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"向用户申请授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/"},"next":{"title":"向用户申请单次授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/request-user-authorization-second.md


const frontMatter = {
	title: '再次向用户申请授权',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization-second',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '再次向用户申请授权';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "再次向用户申请授权",
        children: "再次向用户申请授权"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
        children: "requestPermissionsFromUser()"
      }), "拉起弹框", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "请求用户授权"
      }), "时，如果用户拒绝授权，应用将无法再次通过requestPermissionsFromUser()拉起弹框。用户需要在系统设置中手动授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“设置”应用中的路径如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路径一：设置 > 隐私与安全 > 权限类型（如位置信息） > 具体应用"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路径二：设置 > 应用和元服务 > 某个应用"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用也可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissiononsetting12",
        children: "requestPermissionOnSetting()"
      }), "，直接拉起权限设置弹框，引导用户授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457846)/* ["default"] */.A) + "",
        width: "313",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码展示了如何再次拉起弹框申请ohos.permission.APPROXIMATELY_LOCATION权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityAccessCtrl, Context, common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// ···\n          let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n          let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          atManager.requestPermissionOnSetting(context, ['ohos.permission.APPROXIMATELY_LOCATION']).then((data: Array<abilityAccessCtrl.GrantStatus>) => {\n            console.info(`requestPermissionOnSetting success, result: ${data}`);\n          }).catch((err: BusinessError) => {\n            console.error(`requestPermissionOnSetting fail, code: ${err.code}, message: ${err.message}`);\n          });\n"
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
457846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798706-b86b5ff070dc3920fea6fd6f6faebd5e.png");

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