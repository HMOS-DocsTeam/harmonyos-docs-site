"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483234"], {
954611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_struct_x_rcp_security_configuration_x_rcp_security_configuration_md_f29_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-struct-x-rcp-security-configuration-x-rcp-security-configuration-md-f29.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_struct_x_rcp_security_configuration_x_rcp_security_configuration_md_f29_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration","title":"Rcp_SecurityConfiguration","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"title":"Rcp_SecurityConfiguration","sidebar_position":37,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration","kit":"系统","last_updated":"2026-04-22","slug":"x_rcp___security_configuration"},"sidebar":"ref","previous":{"title":"Rcp_ResponseCookies","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies"},"next":{"title":"Rcp_ServerAuthentication","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration.md


const frontMatter = {
	title: 'Rcp_SecurityConfiguration',
	sidebar_position: 37,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'x_rcp___security_configuration'
};
const contentTitle = 'Rcp_SecurityConfiguration';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "certificate",
  "id": "certificate",
  "level": 3
}, {
  "value": "certificateAuthority",
  "id": "certificateauthority",
  "level": 3
}, {
  "value": "remoteValidationType",
  "id": "remotevalidationtype",
  "level": 3
}, {
  "value": "serverAuthentication",
  "id": "serverauthentication",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "rcp_securityconfiguration",
        children: "Rcp_SecurityConfiguration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的安全配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview",
        children: "RemoteCommunication"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h",
        children: "rcp.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#remotevalidationtype",
              children: "remoteValidationType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远端认证方法类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority",
              children: "Rcp_CertificateAuthority"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#certificateauthority",
              children: "certificateAuthority"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate",
              children: "Rcp_ClientCertificate"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#certificate",
              children: "certificate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication",
              children: "Rcp_ServerAuthentication"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#serverauthentication",
              children: "serverAuthentication"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证设置。默认情况下不进行身份验证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "certificate",
      children: "certificate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_ClientCertificate Rcp_SecurityConfiguration::certificate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "certificateauthority",
      children: "certificateAuthority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_CertificateAuthority Rcp_SecurityConfiguration::certificateAuthority\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotevalidationtype",
      children: "remoteValidationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_RemoteValidationType Rcp_SecurityConfiguration::remoteValidationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远端认证方法类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverauthentication",
      children: "serverAuthentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_ServerAuthentication Rcp_SecurityConfiguration::serverAuthentication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器身份验证设置。默认情况下不进行身份验证。"
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