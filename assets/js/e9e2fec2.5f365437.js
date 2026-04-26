"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["355281"], {
99810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_device_certificate_kit_intro_device_certificate_kit_intro_md_e9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-device-certificate-kit-intro-device-certificate-kit-intro-md-e9e.json
var site_docs_system_security_device_certificate_kit_device_certificate_kit_intro_device_certificate_kit_intro_md_e9e_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/device-certificate-kit-intro/device-certificate-kit-intro","title":"Device Certificate Kit简介","description":"Device Certificate Kit（设备证书服务）面向应用开发者，提供了证书算法库和证书管理的能力。","source":"@site/docs/system-security/device-certificate-kit/device-certificate-kit-intro/device-certificate-kit-intro.md","sourceDirName":"system-security/device-certificate-kit/device-certificate-kit-intro","slug":"/system-security/device-certificate-kit/device-certificate-kit-intro/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/device-certificate-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Device Certificate Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device-certificate-kit-intro","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"适配加密分享","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/"},"next":{"title":"证书算法库框架概述","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/device-certificate-kit-intro/device-certificate-kit-intro.md


const frontMatter = {
	title: 'Device Certificate Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device-certificate-kit-intro',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Device Certificate Kit简介';

const assets = {

};



const toc = [{
  "value": "证书算法库",
  "id": "证书算法库",
  "level": 2
}, {
  "value": "框架原理",
  "id": "框架原理",
  "level": 3
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 3
}, {
  "value": "证书管理",
  "id": "证书管理",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系-1",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "device-certificate-kit简介",
        children: "Device Certificate Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Device Certificate Kit（设备证书服务）面向应用开发者，提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AF%81%E4%B9%A6%E7%AE%97%E6%B3%95%E5%BA%93",
        children: "证书算法库"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AF%81%E4%B9%A6%E7%AE%A1%E7%90%86",
        children: "证书管理"
      }), "的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书算法库",
      children: "证书算法库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书算法库提供接口用于解析和验证数字证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书算法库向应用提供证书、证书扩展域段、证书吊销列表的解析及校验能力，以及证书链的校验能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过调用证书算法库框架接口，开发者可以忽略底层不同三方算法库的差异，实现快速开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常见使用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用对接收的服务端证书或用户输入的证书进行解析，获取证书基本字段或扩展字段用于显示或校验，并使用CA证书链和CRL校验证书的合法性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架原理",
      children: "框架原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供证书算法库框架，开发者只需要调用API接口层即可实现证书的操作，证书算法库框架能够屏蔽不同三方算法库的差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421835)/* ["default"] */.A) + "",
        width: "560",
        height: "706"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["证书算法库的功能使用时，涉及公钥的生成和获取，这部分依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-architecture-kit-intro",
        children: "Crypto Architecture Kit"
      }), "加解密算法框架服务的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书管理",
      children: "证书管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书管理主要提供系统级的证书管理能力，通过证书管理模块可以确保证书在传输和存储过程中的安全性，防止未经授权的访问和使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前提供的能力包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用证书凭据的安装、获取、使用及删除的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户CA证书的安装、获取及删除的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用可以调用证书管理提供的接口拉起证书管理应用界面对CA证书、凭据进行管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过证书管理能力，可以实现证书全生命周期（安装、存储、使用和销毁）的管理和安全使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常见使用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用证书凭据的使用场景包括：业务安装应用证书凭据，在网络链接双向认证的场景下，使用应用证书凭据对业务数据进行签名，并获取应用证书凭据，将签名结果和应用证书凭据发送对端，最后删除应用证书凭据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户CA证书的使用场景包括：业务安装用户CA证书，在网络链接过程中获取用户CA证书以校验对端身份，在证书过期或被吊销的情况下可以删除用户CA证书。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书管理对话框使用场景：业务调用证书管理提供的对话框接口，直接拉起证书管理应用界面，可以实现证书的查看、安装、删除以及凭据的安装、查看、删除操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "与相关kit的关系-1",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["证书管理的功能使用时，涉及凭据的安装和使用，这部分依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "Universal Keystore Kit"
      }), "密钥管理服务的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device Certificate Kit不具备生成或签发证书及证书吊销列表的能力。生成或签发证书及证书吊销列表的能力由证书颁发机构（CA）来完成，不由单个应用签发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
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
421835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478377-36a10095912da17f330dd21268cf1d6e.png");

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