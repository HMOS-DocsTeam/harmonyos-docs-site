"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["900006"], {
798594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_preparations_remote_communication_preparations_md_421_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-preparations-remote-communication-preparations-md-421.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_preparations_remote_communication_preparations_md_421_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-preparations/remote-communication-preparations","title":"开发准备","description":"申请权限","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-preparations/remote-communication-preparations.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-preparations","slug":"/system-network/remote-communication-kit-guide/remote-communication-preparations/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-preparations","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Remote Communication Kit简介","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-introduction/"},"next":{"title":"发送网络请求（ArkTS）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-preparations/remote-communication-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-preparations',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "申请权限步骤",
  "id": "申请权限步骤",
  "level": 3
}, {
  "value": "C API开发准备",
  "id": "c-api开发准备",
  "level": 2
}, {
  "value": "HTTP明文设置",
  "id": "http明文设置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用Remote Communication Kit能力前，需要检查是否已经获取对应权限。如未获得授权，需要声明对应权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除取消网络请求、关闭会话外，其余请求都需要权限。Remote Communication Kit所需权限有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.INTERNET：用于应用访问互联网。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_NETWORK_INFO：用于获取设备网络信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["必须手动配置上述权限后才能使用，详细配置参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90%E6%AD%A5%E9%AA%A4",
        children: "申请权限步骤"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请权限步骤",
      children: "申请权限步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在entry/src/main路径下的module.json5中配置所需申请的权限。示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.INTERNET\"\n      },\n      {\n        \"name\": \"ohos.permission.GET_NETWORK_INFO\" // 如果使用PathPreference的'cellular'模式，则需要额外申请此权限\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c-api开发准备",
      children: "C API开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述权限配置外，C API使用时还需要在CMakeLists.txt中设置动态库路径及头文件路径，并进行链接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如编译target为entry，则添加如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_include_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/include)\ntarget_link_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/lib/aarch64-linux-ohos)\ntarget_link_libraries(entry PUBLIC librcp_c.so) # 链接librcp_c.so及其他依赖的so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http明文设置",
      children: "HTTP明文设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)开始，新增支持HTTP明文拦截配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP是明文传输协议，为保障数据安全，通常需禁用HTTP，仅允许HTTPS。可通过src/main/resources/base/profile/network_config.json配置HTTP明文传输策略。相关配置可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/network-kit/network-kit-data-transmission/http-request#%E6%98%8E%E6%96%87http%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E",
        children: "明文http访问权限配置说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例配置全局允许明文传输，但禁止对 \"example.com\" 域名使用明文通信。在此设置下，Remote Communication Kit仅能通过HTTPS访问该域名；若尝试发起HTTP请求，将触发错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900201-%E7%A6%81%E6%AD%A2%E6%98%8E%E6%96%87%E4%BC%A0%E8%BE%93",
        children: "1007900201"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    \"base-config\": {\n      \"cleartextTrafficPermitted\": true\n    },\n    \"domain-config\": [\n      {\n        \"domains\": [\n          {\n            \"name\": \"example.com\"\n          }\n        ],\n        \"cleartextTrafficPermitted\": false\n      }\n    ],\n    \"component-config\": {\n      \"Remote Communication Kit\": true\n    }\n  }\n}\n"
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