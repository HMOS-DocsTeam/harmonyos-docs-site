"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["884474"], {
416650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_overview_devicesecurity_trustedauth_overview_md_b88_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-overview-devicesecurity-trustedauth-overview-md-b88.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_overview_devicesecurity_trustedauth_overview_md_b88_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/devicesecurity-trustedauth-overview","title":"数字盾服务概述","description":"数字盾服务通过可信用户交互（TUI, Trusted User Interface）为金融应用的大额转账交易提供端到端安全防护，其主要利用了TUI以下核心功能：","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/devicesecurity-trustedauth-overview.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"数字盾服务概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"验证签名","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/"},"next":{"title":"设置数字盾密码","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/devicesecurity-trustedauth-overview.md


const frontMatter = {
	title: '数字盾服务概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '数字盾服务概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
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
        id: "数字盾服务概述",
        children: "数字盾服务概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字盾服务通过可信用户交互（TUI, Trusted User Interface）为金融应用的大额转账交易提供端到端安全防护，其主要利用了TUI以下核心功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据隔离性：所有密码信息的输入、传输及验证均在TEE安全沙箱内完成，完全隔离于普通执行环境（REE），防止REE侧恶意程序窃取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "界面防篡改：TUI展示的关键信息（如密码输入界面或身份验证提示）采用TEE图形渲染通道，确保攻击者无法通过REE层覆盖或修改界面内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入可信度：用户输入的密码直接由TEE进程捕获并加密存储，避免明文暴露于REE内存或外设接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字盾服务主要包括的关键功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字盾密码管理：主要包括数字盾密码的创建、修改以及关闭，其中数字盾密码输入过程中均使用TEE隔离的数字键盘控件，实现用户数字盾密码的防窃取输入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "交易信息密码认证：在转账交易场景中，通过数字盾密码对交易信息进行强认证，认证结果依托密钥管理服务提供的加密签名功能验证，确保交易完整性与不可抵赖性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生物特征绑定与认证：支持人脸或指纹等生物特征的绑定与认证，增强交易安全性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字盾签名密钥备份与恢复：备份数字盾签名密钥，确保应用卸载重装后，密码认证功能仍正常运行，保障密钥持久化存储。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字盾服务针对于密码数据管理及存储说明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存储：数字盾密码持久化存储在设备可信执行环境（TEE）侧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据清除触发条件：当用户关闭数字盾服务时，所有关联密码数据与密钥将会从设备中清除，确保隐私安全。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者注意事项：应用集成时需明确向用户说明密码数据的生命周期，确保用户明确密码数据的管理方式，并在应用侧向用户提供对应隐私声明。"
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