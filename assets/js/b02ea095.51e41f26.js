"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["841940"], {
375048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certmanager_certmanager_overview_certmanager_overview_md_b02_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certmanager-certmanager-overview-certmanager-overview-md-b02.json
var site_docs_system_security_device_certificate_kit_certmanager_certmanager_overview_certmanager_overview_md_b02_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certmanager/certmanager-overview/certmanager-overview","title":"证书管理概述","description":"证书管理主要提供系统级的证书管理能力，实现证书全生命周期（安装、存储、使用和销毁）的管理和安全使用。同时提供拉起证书管理对话框的接口，使应用可以通过界面查看、管理证书及凭据。","source":"@site/docs/system-security/device-certificate-kit/certmanager/certmanager-overview/certmanager-overview.md","sourceDirName":"system-security/device-certificate-kit/certmanager/certmanager-overview","slug":"/system-security/device-certificate-kit/certmanager/certmanager-overview/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"证书管理概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书链在线校验证书吊销状态","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/"},"next":{"title":"应用证书凭据开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certmanager/certmanager-overview/certmanager-overview.md


const frontMatter = {
	title: '证书管理概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书管理概述';

const assets = {

};



const toc = [{
  "value": "证书管理基本概念",
  "id": "证书管理基本概念",
  "level": 2
}, {
  "value": "证书生命周期管理概述",
  "id": "证书生命周期管理概述",
  "level": 3
}, {
  "value": "证书管理对话框概述",
  "id": "证书管理对话框概述",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发总览",
  "id": "开发总览",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "证书管理概述",
        children: "证书管理概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书管理主要提供系统级的证书管理能力，实现证书全生命周期（安装、存储、使用和销毁）的管理和安全使用。同时提供拉起证书管理对话框的接口，使应用可以通过界面查看、管理证书及凭据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书管理基本概念",
      children: "证书管理基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书：经证书授权中心（CA）数字签名的、包含公钥拥有者信息以及公钥的文件。常见的证书文件格式为X509证书。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "凭据：指的是证书文件中公钥所对应的私钥信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥库：包含证书和凭据的文件。常见的密钥库文件格式为P12文件（PKCS#12）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名：使用私钥对需要传输的文件摘要进行加密得到的密文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验签：用公钥对签名密文进行解密，得到文本的摘要，然后使用与发送方同样的方法对文本计算摘要值，再与解密得到的摘要做对比，二者一致则说明文本没有被篡改过。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "证书生命周期管理概述",
      children: "证书生命周期管理概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现业务证书凭据和CA证书的安装、存储、使用和销毁管理，保证证书安全使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书安装：使用者可以通过安装接口，传入证书文件或密钥库文件，实现证书的安装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书存储：证书管理模块将安装后的证书存储在证书管理服务私有目录下，证书对应的私钥凭据存储在HUKS模块中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书使用：通过查询对应的证书，使用者可获取到证书文件进行业务相关操作，并可以使用证书管理服务提供接口使用证书和私钥进行签名和验签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书销毁：删除接口允许使用者批量或单张删除存储在证书管理中的证书或凭据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "证书管理对话框概述",
      children: "证书管理对话框概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供拉起证书管理对话框的接口，使应用可以通过界面查看、管理证书及凭据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书查看：使用者可以调用证书管理对话框接口，查看CA证书及凭据的列表、详情。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书安装：使用者可以调用证书管理对话框接口，从存储设备安装用户CA证书及凭据。2in1设备可以直接调用安装证书的对话框接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书删除：使用者可以调用证书管理对话框接口，删除指定的用户CA证书。2in1设备可以直接调用删除证书的对话框接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书详情：对于2in1设备，使用者可以调用查看证书详情的对话框接口，展示证书的详情。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书管理目前仅支持RSA、ECC及SM2算法类型的应用证书凭据安装及使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发总览",
      children: "开发总览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书管理为开发者提供了以下相关功能的开发指导，请开发者参照开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines",
          children: "应用证书凭据开发指导"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines",
          children: "CA证书开发指导"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines",
          children: "证书管理对话框开发指导"
        })
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