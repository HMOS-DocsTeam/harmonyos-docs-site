"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["893829"], {
407535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_apply_jit_profile_jsvm_apply_jit_profile_md_224_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-apply-jit-profile-jsvm-apply-jit-profile-md-224.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_apply_jit_profile_jsvm_apply_jit_profile_md_224_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/jsvm-apply-jit-profile","title":"JSVM-API 申请JIT权限指导","description":"JIT(Just In Time) 即时编译功能会引入任意代码注入的安全风险，为保护应用安全、维护鸿蒙纯净生态，系统默认关闭JSVM的JIT功能，若开发者期望使用该功能， 需要向应用市场（AppGallery Connect，简称为AGC）提交ohos.permission.kernel.ALLOW\\\\EXECUTABLE\\\\FORT\\\\_MEMORY受限ACL权限的申请， 并在附带材料中说明使用JSVM引擎JIT功能的具体场景。在权限审批通过后， 开发者可从AGC网站上更新profile证书， 并对应用重打包上架。权限申请及适配流程可参考《申请使用受限权限》指导完成。","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/jsvm-apply-jit-profile.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile","slug":"/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JSVM-API 申请JIT权限指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-apply-jit-profile","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行Trace相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/"},"next":{"title":"JSVM-API 坚盾守护模式","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/jsvm-apply-jit-profile.md


const frontMatter = {
	title: 'JSVM-API 申请JIT权限指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-apply-jit-profile',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API 申请JIT权限指导';

const assets = {

};



const toc = [{
  "value": "适配注意事项",
  "id": "适配注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsvm-api-申请jit权限指导",
        children: "JSVM-API 申请JIT权限指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JIT(Just In Time) 即时编译功能会引入任意代码注入的安全风险，为保护应用安全、维护鸿蒙纯净生态，系统默认关闭JSVM的JIT功能，若开发者期望使用该功能， 需要向应用市场（AppGallery Connect，简称为AGC）提交ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY受限ACL权限的申请， 并在附带材料中说明使用JSVM引擎JIT功能的具体场景。在权限审批通过后， 开发者可从AGC网站上更新profile证书， 并对应用重打包上架。权限申请及适配流程可参考《", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请使用受限权限"
      }), "》指导完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配注意事项",
      children: "适配注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果未申请相应的权限证书，但在配置文件中声明此权限，会导致应用安装失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若在编译时报以下错误日志The ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY permission under requestPermissions must be a value that is predefined within the SDK or a custom one that you have included under definePermissions.， 请将HarmonyOS SDK更新到最新版本(>=5.0.2.125版本)。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在坚盾守护模式开启期间，操作系统将在全局范围内禁用JIT（即时编译）功能，此限制适用于所有应用程序，包括已获得ACL权限的特权应用，具体技术实现细节请参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode",
          children: "JSVM 坚盾守护模式"
        }), "。"]
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