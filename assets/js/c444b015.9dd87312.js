"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["834235"], {
372036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_headerandstruct_onlineauthentication_capi_struct_x_f_i_d_o_2_public_key_credential_descriptor_array_x_f_i_d_o_2_public_key_credential_c44_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-online-authentication-api-online-authentication-c-onlineauthentication-capi-headerandstruct-onlineauthentication-capi-struct-x-f-i-d-o-2-public-key-credential-descriptor-array-x-f-i-d-o-2-public-key-credential--c44.json
var site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_headerandstruct_onlineauthentication_capi_struct_x_f_i_d_o_2_public_key_credential_descriptor_array_x_f_i_d_o_2_public_key_credential_c44_namespaceObject = JSON.parse('{"id":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array","title":"FIDO2_PublicKeyCredentialDescriptorArray","description":"概述","source":"@site/docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array.md","sourceDirName":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array","slug":"/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"FIDO2_PublicKeyCredentialDescriptorArray","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array","kit":"系统","last_updated":"2026-04-20","slug":"x_f_i_d_o2___public_key_credential_descriptor_array"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array.md


const frontMatter = {
	title: 'FIDO2_PublicKeyCredentialDescriptorArray',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'x_f_i_d_o2___public_key_credential_descriptor_array'
};
const contentTitle = 'FIDO2_PublicKeyCredentialDescriptorArray';

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
  "value": "allowCredentiallNum",
  "id": "allowcredentiallnum",
  "level": 3
}, {
  "value": "allowCredentials",
  "id": "allowcredentials",
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
        id: "fido2_publickeycredentialdescriptorarray",
        children: "FIDO2_PublicKeyCredentialDescriptorArray"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PublicKey凭证描述符数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey",
        children: "FIDO2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#allowcredentiallnum",
              children: "allowCredentiallNum"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许凭证数目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor/x_f_i_d_o2___public_key_credential_descriptor",
              children: "FIDO2_PublicKeyCredentialDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#allowcredentials",
              children: "allowCredentials"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据的附加参数列表。默认值为[]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "allowcredentiallnum",
      children: "allowCredentiallNum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t FIDO2_PublicKeyCredentialDescriptorArray::allowCredentiallNum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许凭证数目。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "allowcredentials",
      children: "allowCredentials"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_PublicKeyCredentialDescriptor* FIDO2_PublicKeyCredentialDescriptorArray::allowCredentials\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证凭据的附加参数列表。默认值为[]。"
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