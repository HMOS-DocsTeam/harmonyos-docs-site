"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["521182"], {
274890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_user_auth_icon_user_auth_icon_md_48f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-user-auth-icon-user-auth-icon-md-48f.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_user_auth_icon_user_auth_icon_md_48f_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/user-auth-icon","title":"使用嵌入式用户身份认证控件","description":"提供应用界面上展示的人脸、指纹认证图标，功能包括：","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/user-auth-icon.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/user-auth-icon","slug":"/system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用嵌入式用户身份认证控件","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-auth-icon","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询用户注册凭据的状态","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/"},"next":{"title":"查询指定认证类型的认证冻结状态","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-auth-lock-state-capabilities/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/user-auth-icon.md


const frontMatter = {
	title: '使用嵌入式用户身份认证控件',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-auth-icon',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用嵌入式用户身份认证控件';

const assets = {

};



const toc = [{
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用嵌入式用户身份认证控件",
        children: "使用嵌入式用户身份认证控件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供应用界面上展示的人脸、指纹认证图标，功能包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供嵌入式人脸、指纹认证控件图标，应用可集成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持自定义图片的颜色和大小，其余样式元素不可变更。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击控件图标后可拉起系统弹窗式人脸、指纹认证控件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持使用认证控件的认证类型包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指纹认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指纹+锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+指纹+锁屏口令认证"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以指纹认证为例，控件使用效果如图所示。应用集成嵌入式用户身份认证控件后，用户点击左图中的指纹图标（即嵌入式用户身份认证控件），系统将自动拉起右图中的系统身份认证控件，完成身份认证。开发者无需通过接口发起身份认证请求，简化了认证流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24316)/* ["default"] */.A) + "",
        width: "1090",
        height: "1093"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参数、使用方式等信息，请参考对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon",
        children: "@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)"
      }), "。"]
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
24316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958418-122a7e4a76ed31d4ac15b9b376d7c000.png");

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