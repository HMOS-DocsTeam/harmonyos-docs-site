"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616353"], {
993065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_password_shared_apps_web_pages_password_shared_apps_web_pages_md_ee0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-password-shared-apps-web-pages-password-shared-apps-web-pages-md-ee0.json
var site_docs_system_security_passwordvault_password_shared_apps_web_pages_password_shared_apps_web_pages_md_ee0_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/password-shared-apps-web-pages/password-shared-apps-web-pages","title":"应用与网页共用账号密码","description":"简介","source":"@site/docs/system-security/passwordvault/password-shared-apps-web-pages/password-shared-apps-web-pages.md","sourceDirName":"system-security/passwordvault/password-shared-apps-web-pages","slug":"/system-security/passwordvault/password-shared-apps-web-pages/","permalink":"/harmonyos-docs-site/system-security/passwordvault/password-shared-apps-web-pages/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"应用与网页共用账号密码","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/password-shared-apps-web-pages","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网页接入密码保险箱","permalink":"/harmonyos-docs-site/system-security/passwordvault/arkweb-access-password-safe/"},"next":{"title":"应用加密","permalink":"/harmonyos-docs-site/system-security/code-protect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/password-shared-apps-web-pages/password-shared-apps-web-pages.md


const frontMatter = {
	title: '应用与网页共用账号密码',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/password-shared-apps-web-pages',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '应用与网页共用账号密码';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "接入方式",
  "id": "接入方式",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用与网页共用账号密码",
        children: "应用与网页共用账号密码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码保险箱支持在应用和网页中保存和填充账号密码，为了提供更好的密码管理体验，提供了应用和网页共用账号数据的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当接入本能力后，触发填充能力将优先推荐当前应用/网页的保存的账号，如当前应用/网页没有保存的账号时，则会推荐关联网页/应用的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，选择密码时也会将关联网站/应用的密码展示为推荐密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(235710)/* ["default"] */.A) + "",
        width: "594",
        height: "569"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用和网页均存在账号密码登录场景，且已经接入密码保险箱能力的情况下，期望其中一方保存密码之后，能够直接在另一方进行使用时，可以通过本能力进行实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入方式",
      children: "接入方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715175)/* ["default"] */.A) + "",
        width: "720",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用及网页接入App Linking后绑定关联关系，密码保险箱将基于这个关系完成识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成如下配置，即可实现共用密码的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用和网页均已接入密码保险箱自动填充能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation",
            children: "应用接入密码保险箱"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/passwordvault/arkweb-access-password-safe",
            children: "网页接入密码保险箱"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用和网页通过App Linking完成关联关系的绑定。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入需完成三步：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/app-linking-kit-guide/applinking-preparations/applinking-enable-applinking",
            children: "在AGC控制台开通App Linking服务"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/app-linking-kit-guide/app-linking-startupapp#%E5%BB%BA%E7%AB%8B%E5%9F%9F%E5%90%8D%E4%B8%8E%E5%BA%94%E7%94%A8%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB",
            children: "建立域名与应用关联关系"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
            children: "在AGC为应用创建关联的网址域名"
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
715175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
235710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798724-1dc598b7ed707c001cd5eb5be447fd55.png");

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