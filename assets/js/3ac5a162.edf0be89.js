"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["263158"], {
57109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_preparation_onlineauthentication_preparation_md_3ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-preparation-onlineauthentication-preparation-md-3ac.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_preparation_onlineauthentication_preparation_md_3ac_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-preparation/onlineauthentication-preparation","title":"开发准备","description":"FIDO开发准备","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-preparation/onlineauthentication-preparation.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-preparation","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-preparation/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-preparation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-preparation","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Online Authentication Kit简介","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-introduction/"},"next":{"title":"FIDO免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-fido/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-preparation/onlineauthentication-preparation.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-preparation',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "FIDO开发准备",
  "id": "fido开发准备",
  "level": 2
}, {
  "value": "IFAA开发准备",
  "id": "ifaa开发准备",
  "level": 2
}, {
  "value": "SOTER开发准备",
  "id": "soter开发准备",
  "level": 2
}, {
  "value": "通行密钥开发准备",
  "id": "通行密钥开发准备",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fido开发准备",
      children: "FIDO开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者的业务需要接入符合FIDO UAF标准的协议，并部署符合FIDO UAF标准协议的FIDO服务端。FIDO网址: <", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://fidoalliance.org/&gt;"
      }), " （见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ifaa开发准备",
      children: "IFAA开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者的业务接入IIFAA联盟，并接入IIFAA中心服务器。IIFAA网址：<", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.iifaa.org.cn/technical#paper&gt;"
      }), " （见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "soter开发准备",
      children: "SOTER开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者的业务接入SOTER服务器。SOTER github：<", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://github.com/Tencent/soter&gt;（见[网站链接免责声明](/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer)）。"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通行密钥开发准备",
      children: "通行密钥开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者基于FIDO2的CAPI接口开发时（调用ArkTs接口时不涉及），需要申请如下通行密钥服务权限。在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请受限权限"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "应用能力"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "需要权限"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "通行密钥"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.ACCESS_FIDO2_ONLINEAUTH"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FIDO2协议基于应用的网址域名开通应用的通行密钥，开发者的应用需要关联网址域名，才可使用通行密钥服务。接入需完成四步：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#zh-cn_topic_0000001862787784_section189581229144811",
            children: "在AGC开通App Linking服务"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section6903241628",
            children: "在开发者网站上关联应用"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section1101111611317",
            children: "在AGC创建关联的网址域名"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section13808113610362",
            children: "在module.json5中配置关联的网址域名"
          }), "。"]
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