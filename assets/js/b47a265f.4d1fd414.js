"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["988909"], {
654379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_overview_huks_signing_signature_verification_overview_md_b47_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-signing-signature-verification-huks-signing-signature-verification-overview-huks-signing-signature-verification-overview-md-b47.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_overview_huks_signing_signature_verification_overview_md_b47_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/huks-signing-signature-verification-overview","title":"签名/验签介绍及算法规格","description":"为实现数据完整性保护和防抵赖，可使用生成/导入的密钥，对数据进行签名验签操作。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/huks-signing-signature-verification-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"签名/验签介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/"},"next":{"title":"签名/验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/huks-signing-signature-verification-overview.md


const frontMatter = {
	title: '签名/验签介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '签名/验签介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "支持的算法",
  "id": "支持的算法",
  "level": 2
}, {
  "value": "携带认证信息的签名类型",
  "id": "携带认证信息的签名类型",
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
        id: "签名验签介绍及算法规格",
        children: "签名/验签介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为实现数据完整性保护和防抵赖，可使用生成/导入的密钥，对数据进行签名验签操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法",
      children: "支持的算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为密钥签名/验签支持的规格说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "手机、平板、PC/2in1设备、TV、智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法/摘要算法/填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA256/PKCS1_V1_5  RSA/SHA384/PKCS1_V1_5  RSA/SHA512/PKCS1_V1_5  RSA/SHA256/PSS  RSA/SHA384/PSS  RSA/SHA512/PSS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对于PSS模式，salt长度支持设置为摘要长度和最大长度（最大长度=密钥长度-摘要长度-2），对应枚举值详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksrsapsssaltlentype10",
              children: "HuksRsaPssSaltLenType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/NoDigest/PKCS1_V1_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoDigest需要指定TAG HuksKeyDigest.HUKS_DIGEST_NONE。由业务对明文做哈希，再将哈希后的数据传入，哈希后的数据长度必须满足RSA签名验签支持的摘要算法规格。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/NoDigest/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoDigest需要指定TAG HuksKeyDigest.HUKS_DIGEST_NONE。明文长度必须等于密钥长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC/SHA256  ECC/SHA384  ECC/SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名是ASN1格式。  ECC算法支持的椭圆曲线函数包括：P-256、P-384、P-521。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ED25519/NoDigest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoDigest需要指定TAG HuksKeyDigest.HUKS_DIGEST_NONE。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2/SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名是ASN1格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2/NoDigest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名是ASN1格式。  NoDigest需要指定TAG HuksKeyDigest.HUKS_DIGEST_NONE。由业务对明文做SM3哈希，再将哈希后的数据传入，哈希后的数据长度必须满足SM2签名验签支持的摘要算法规格。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "轻量级智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法/摘要算法/填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA256/PKCS1_V1_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA256/PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA1/ISO_IEC_9796_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据最小长度=密钥长度-21字节"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/NoDigest/NoPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoDigest需要指定TAG HuksKeyDigest.HUKS_DIGEST_NONE。明文长度必须等于密钥长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "智能穿戴设备规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法/摘要算法/填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA/SHA1/ISO_IEC_9796_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持密钥长度1024~2048（含1024和2048，且必须是8的整数倍），数据最小长度=密钥长度-21字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "携带认证信息的签名类型",
      children: "携带认证信息的签名类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用场景：当使用含有数字盾密码认证的密钥进行签名时，可以选择携带认证信息的签名类型，会在原始数据之前附加41字节认证信息后，再进行签名操作。认证信息会附加在签名前一起返回。验签时需将同样认证信息附加在原始数据前，再执行验签操作。从前到后依次为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证信息格式：4字节的版本号、4字节的用户认证类型、32字节的匿名化AuthId和1字节的是否校验数据哈希。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意事项：AuthId包含匿名化处理过的身份信息，使用该接口时，开发者需在其隐私政策中对此匿名化数据的使用目的、存留策略和销毁方式进行说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用方法：在签名的参数集中加上参数HUKS_TAG_KEY_SECURE_SIGN_TYPE，此参数的值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukssecuresigntype9",
        children: "HuksSecureSignType"
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