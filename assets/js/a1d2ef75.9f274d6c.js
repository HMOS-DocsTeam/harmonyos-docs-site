"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["952323"], {
995136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_overview_huks_encryption_decryption_overview_md_a1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-encryption-decryption-huks-encryption-decryption-overview-huks-encryption-decryption-overview-md-a1d.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_overview_huks_encryption_decryption_overview_md_a1d_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/huks-encryption-decryption-overview","title":"加密/解密介绍及算法规格","description":"在HUKS中已经有密钥，需要对一段数据加密或是解密，均可以使用HUKS完成加密/解密操作。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/huks-encryption-decryption-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"加密/解密介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥使用介绍及通用流程","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-use-overview/"},"next":{"title":"加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/huks-encryption-decryption-overview.md


const frontMatter = {
	title: '加密/解密介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '加密/解密介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "支持的算法",
  "id": "支持的算法",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "加密解密介绍及算法规格",
        children: "加密/解密介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HUKS中已经有密钥，需要对一段数据加密或是解密，均可以使用HUKS完成加密/解密操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法",
      children: "支持的算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为密钥加密/解密支持的规格说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "手机、平板、PC/2in1设备、TV、智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法/分组模式/填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES/CBC/NoPadding  AES/CBC/PKCS7  AES/CTR/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV参数必选；CBC模式下，若填充模式选择为NoPadding，因为该模式下要求明文数据必须按照固定长度的块进行加密，如果输入的数据长度不是16的倍数，就需要业务方自行填充，以满足块长度的要求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES/GCM/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密：NONCE、AAD参数可选。不指定NONCE参数，将会以“密文 + AEAD + NONCE”格式进行拼接返回数据。AEAD长度为16，NONCE默认长度为12。  解密：AAD参数可选，NONCE、AEAD参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES/CCM/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密：NONCE、AAD参数可选。不指定NONCE参数，将会以“密文 + AEAD + NONCE”格式进行拼接返回数据。AEAD长度不指定默认为16，NONCE默认长度为7。  解密：AAD参数可选，NONCE、AEAD参数必选。  可指定AEAD长度，支持的AEAD长度为4、6、8、10、12、14、16。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECB/NoPadding  RSA/ECB/PKCS1_V1_5  RSA/ECB/OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP填充模式支持的摘要算法：SHA256/SHA384/SHA512。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4/ECB/PKCS7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECB模式不推荐使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4/CBC/PKCS7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV 参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4/CTR/NoPadding  SM4/CBC/NoPadding  SM4/CFB/NoPadding  SM4/OFB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV 参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2/-/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摘要算法SM3。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES/CBC/NoPadding  DES/ECB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC模式下 IV 参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES/CBC/NoPadding  3DES/ECB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBC模式下 IV 参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "轻量级智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法/分组模式/填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES/GCM/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密：NONCE、AAD参数可选。不指定NONCE参数，将会以“密文 + AEAD + NONCE”格式进行拼接返回数据。AEAD长度为16，NONCE默认长度为12。  解密：AAD参数可选，NONCE、AEAD参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES/CBC/NoPadding  AES/CTR/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES/ECB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES/CBC/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES/ECB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES/CBC/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IV参数必选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECB/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECB/PKCS1_V1_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/ECB/OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摘要算法SHA256。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        })]
      })]
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