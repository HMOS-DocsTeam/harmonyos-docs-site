"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["854031"], {
192097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_encrypt_decrypt_by_segment_crypto_encrypt_decrypt_by_segment_md_585_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-spec-crypto-encrypt-decrypt-by-segment-crypto-encrypt-decrypt-by-segment-md-585.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_encrypt_decrypt_by_segment_crypto_encrypt_decrypt_by_segment_md_585_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/crypto-encrypt-decrypt-by-segment","title":"分段加解密说明","description":"在加解密的过程中，算法库没有对单次或累计的传入数据量设置大小限制，但在传入的数据量较大时（如数据量大于2M），建议开发者将数据分段，完成分段加解密，提高效率。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/crypto-encrypt-decrypt-by-segment.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"分段加解密说明","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-encrypt-decrypt-by-segment","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"非对称密钥加解密算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/"},"next":{"title":"使用AES对称密钥（GCM模式）加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/crypto-encrypt-decrypt-by-segment.md


const frontMatter = {
	title: '分段加解密说明',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-encrypt-decrypt-by-segment',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '分段加解密说明';

const assets = {

};



const toc = [{
  "value": "对称加解密",
  "id": "对称加解密",
  "level": 2
}, {
  "value": "非对称加解密",
  "id": "非对称加解密",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分段加解密说明",
        children: "分段加解密说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在加解密的过程中，算法库没有对单次或累计的传入数据量设置大小限制，但在传入的数据量较大时（如数据量大于2M），建议开发者将数据分段，完成分段加解密，提高效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对称加解密",
      children: "对称加解密"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对称密钥的分段加解密，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
        children: "Cipher.update"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可自定义单次传入的数据量（示例中的updateLength），多次调用update传入数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前单次支持传入的最大长度为INT_MAX（Uint8Array类型的最大长度）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者应当对每次update和doFinal的结果都判断是否为null，并在结果不为null时取出其中的数据进行拼接，形成完整的密文/明文。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment",
        children: "使用AES对称密钥（GCM模式）分段加解密"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment",
        children: "使用SM4对称密钥（GCM模式）分段加解密"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "非对称加解密",
      children: "非对称加解密"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["非对称加解密，不支持update操作，仅需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
        children: "Cipher.init"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
        children: "Cipher.doFinal"
      }), "完成加解密。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["非对称密钥的分段加密是指当明文大于单次加密支持的数据长度时（具体长度请查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec",
        children: "非对称密钥加解密算法规格"
      }), "），需要将待加密数据分为合适长度的数据段，并对每个数据段执行加密操作，即创建Cipher，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
        children: "Cipher.init"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
        children: "Cipher.doFinal"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "严格意义上说，是数据的拆分加解密，此时单次传入的数据量长度与密钥规格的长度相关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RSA：填充模式不同，输入的数据的规则不同。请根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#rsa",
          children: "RSA算法规格"
        }), "确认单次传入的数据量长度。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者应当对每次doFinal的结果都判断是否为null，并在结果不为null时取出其中的数据进行拼接，形成完整的密文/明文。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment",
        children: "使用RSA非对称密钥分段加解密"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分段加解密中，每次更新的数据量，与加密模式是否有关？"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次更新的数据量，由开发者自定义，与加密模式无关。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同的加密模式，仅对加解密参数产生影响，不同的加密模式使用的加解密参数不同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#paramsspec",
            children: "ParamsSpec"
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