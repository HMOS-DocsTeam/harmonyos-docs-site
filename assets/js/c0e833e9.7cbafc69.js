"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["909430"], {
918034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_crypto_architecture_api_crypto_architecture_c_crypto_architecture_headerfile_capi_crypto_asym_cipher_h_capi_crypto_asym_cipher_h_md_c0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-crypto-architecture-api-crypto-architecture-c-crypto-architecture-headerfile-capi-crypto-asym-cipher-h-capi-crypto-asym-cipher-h-md-c0e.json
var site_docs_ref_system_security_api_crypto_architecture_api_crypto_architecture_c_crypto_architecture_headerfile_capi_crypto_asym_cipher_h_capi_crypto_asym_cipher_h_md_c0e_namespaceObject = JSON.parse('{"id":"system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h","title":"crypto_asym_cipher.h","description":"概述","source":"@site/docs-ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h.md","sourceDirName":"system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h","slug":"/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"crypto_asym_cipher.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-crypto-asym-cipher-h"},"sidebar":"ref","previous":{"title":"crypto_architecture_kit.h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-architecture-kit-h/capi-crypto-architecture-kit-h"},"next":{"title":"crypto_asym_key.h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h.md


const frontMatter = {
	title: 'crypto_asym_cipher.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-crypto-asym-cipher-h'
};
const contentTitle = 'crypto_asym_cipher.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "CryptoSm2CiphertextSpec_item",
  "id": "cryptosm2ciphertextspec_item",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_CryptoAsymCipher_Create()",
  "id": "oh_cryptoasymcipher_create",
  "level": 3
}, {
  "value": "OH_CryptoAsymCipher_Init()",
  "id": "oh_cryptoasymcipher_init",
  "level": 3
}, {
  "value": "OH_CryptoAsymCipher_Final()",
  "id": "oh_cryptoasymcipher_final",
  "level": 3
}, {
  "value": "OH_CryptoAsymCipher_Destroy()",
  "id": "oh_cryptoasymcipher_destroy",
  "level": 3
}, {
  "value": "OH_CryptoSm2CiphertextSpec_Create()",
  "id": "oh_cryptosm2ciphertextspec_create",
  "level": 3
}, {
  "value": "OH_CryptoSm2CiphertextSpec_GetItem()",
  "id": "oh_cryptosm2ciphertextspec_getitem",
  "level": 3
}, {
  "value": "OH_CryptoSm2CiphertextSpec_SetItem()",
  "id": "oh_cryptosm2ciphertextspec_setitem",
  "level": 3
}, {
  "value": "OH_CryptoSm2CiphertextSpec_Encode()",
  "id": "oh_cryptosm2ciphertextspec_encode",
  "level": 3
}, {
  "value": "OH_CryptoSm2CiphertextSpec_Destroy()",
  "id": "oh_cryptosm2ciphertextspec_destroy",
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
        id: "crypto_asym_cipherh",
        children: "crypto_asym_cipher.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义非对称密钥加密API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CryptoArchitectureKit/crypto_asym_cipher.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohcrypto.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.CryptoFramework"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-module/capi-cryptoasymcipherapi/capi-cryptoasymcipherapi",
        children: "CryptoAsymCipherApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymcipherapi-oh-cryptoasymcipher/capi-cryptoasymcipherapi-oh-cryptoasymcipher",
              children: "OH_CryptoAsymCipher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CryptoAsymCipher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义非对称加密结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CryptoSm2CiphertextSpec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义SM2密文规格结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cryptosm2ciphertextspec_item",
              children: "CryptoSm2CiphertextSpec_item"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CryptoSm2CiphertextSpec_item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义SM2密文规格项类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptoasymcipher_create",
              children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Create(const char *algoName, OH_CryptoAsymCipher **ctx)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据给定的算法名称创建非对称加密。  注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_destroy",
              children: "OH_CryptoAsymCipher_Destroy"
            }), "销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptoasymcipher_init",
              children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Init(OH_CryptoAsymCipher *ctx, Crypto_CipherMode mode, OH_CryptoKeyPair *key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化非对称加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptoasymcipher_final",
              children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Final(OH_CryptoAsymCipher *ctx, const Crypto_DataBlob *in, Crypto_DataBlob *out)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完成非对称加密。  注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
              children: "OH_Crypto_FreeDataBlob"
            }), "释放out内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptoasymcipher_destroy",
              children: "void OH_CryptoAsymCipher_Destroy(OH_CryptoAsymCipher *ctx)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁非对称加密上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptosm2ciphertextspec_create",
              children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_Create(Crypto_DataBlob *sm2Ciphertext, OH_CryptoSm2CiphertextSpec **spec)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建SM2密文规格。  注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_destroy",
              children: "OH_CryptoSm2CiphertextSpec_Destroy"
            }), "销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptosm2ciphertextspec_getitem",
              children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_GetItem(OH_CryptoSm2CiphertextSpec *spec, CryptoSm2CiphertextSpec_item item, Crypto_DataBlob *out)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取SM2密文规格中的指定项。  注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
              children: "OH_Crypto_FreeDataBlob"
            }), "释放out内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptosm2ciphertextspec_setitem",
              children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_SetItem(OH_CryptoSm2CiphertextSpec *spec, CryptoSm2CiphertextSpec_item item, Crypto_DataBlob *in)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置SM2密文规格中的指定项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptosm2ciphertextspec_encode",
              children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_Encode(OH_CryptoSm2CiphertextSpec *spec, Crypto_DataBlob *out)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将SM2密文规格编码为DER格式密文。  注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
              children: "OH_Crypto_FreeDataBlob"
            }), "释放out内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptosm2ciphertextspec_destroy",
              children: "void OH_CryptoSm2CiphertextSpec_Destroy(OH_CryptoSm2CiphertextSpec *spec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁SM2密文规格。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cryptosm2ciphertextspec_item",
      children: "CryptoSm2CiphertextSpec_item"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CryptoSm2CiphertextSpec_item\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义SM2密文规格项类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SM2_CIPHERTEXT_C1_X = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥x，也称为C1x。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SM2_CIPHERTEXT_C1_Y = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥y，也称为C1y。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SM2_CIPHERTEXT_C2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "哈希值，也称为C2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SM2_CIPHERTEXT_C3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文数据，也称为C3。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptoasymcipher_create",
      children: "OH_CryptoAsymCipher_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Create(const char *algoName, OH_CryptoAsymCipher **ctx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的算法名称创建非对称加密。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_destroy",
        children: "OH_CryptoAsymCipher_Destroy"
      }), "销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *algoName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于生成加密的算法名称。  例如\"RSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymcipherapi-oh-cryptoasymcipher/capi-cryptoasymcipherapi-oh-cryptoasymcipher",
              children: "OH_CryptoAsymCipher"
            }), " **ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向非对称加密上下文的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptoasymcipher_init",
      children: "OH_CryptoAsymCipher_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Init(OH_CryptoAsymCipher *ctx, Crypto_CipherMode mode, OH_CryptoKeyPair *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化非对称加密。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymcipherapi-oh-cryptoasymcipher/capi-cryptoasymcipherapi-oh-cryptoasymcipher",
              children: "OH_CryptoAsymCipher"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非对称加密上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#crypto_ciphermode",
              children: "Crypto_CipherMode"
            }), " mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密模式是加密还是解密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymkeyapi-oh-cryptokeypair/capi-cryptoasymkeyapi-oh-cryptokeypair",
              children: "OH_CryptoKeyPair"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非对称密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final",
        children: "OH_CryptoAsymCipher_Final"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptoasymcipher_final",
      children: "OH_CryptoAsymCipher_Final()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoAsymCipher_Final(OH_CryptoAsymCipher *ctx, const Crypto_DataBlob *in, Crypto_DataBlob *out)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成非对称加密。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
        children: "OH_Crypto_FreeDataBlob"
      }), "释放out内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymcipherapi-oh-cryptoasymcipher/capi-cryptoasymcipherapi-oh-cryptoasymcipher",
              children: "OH_CryptoAsymCipher"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非对称加密上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "const Crypto_DataBlob"
            }), " *in"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要加密或解密的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *out"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最终加密或解密的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init",
        children: "OH_CryptoAsymCipher_Init"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptoasymcipher_destroy",
      children: "OH_CryptoAsymCipher_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_CryptoAsymCipher_Destroy(OH_CryptoAsymCipher *ctx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁非对称加密上下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymcipherapi-oh-cryptoasymcipher/capi-cryptoasymcipherapi-oh-cryptoasymcipher",
              children: "OH_CryptoAsymCipher"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非对称加密上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptosm2ciphertextspec_create",
      children: "OH_CryptoSm2CiphertextSpec_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_Create(Crypto_DataBlob *sm2Ciphertext, OH_CryptoSm2CiphertextSpec **spec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建SM2密文规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_destroy",
        children: "OH_CryptoSm2CiphertextSpec_Destroy"
      }), "销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *sm2Ciphertext"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文DER格式数据，如果为NULL则创建空的SM2密文规格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            }), " **spec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出的SM2密文规格。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptosm2ciphertextspec_getitem",
      children: "OH_CryptoSm2CiphertextSpec_GetItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_GetItem(OH_CryptoSm2CiphertextSpec *spec, CryptoSm2CiphertextSpec_item item, Crypto_DataBlob *out)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SM2密文规格中的指定项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
        children: "OH_Crypto_FreeDataBlob"
      }), "释放out内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            }), " *spec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#cryptosm2ciphertextspec_item",
              children: "CryptoSm2CiphertextSpec_item"
            }), " item"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *out"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptosm2ciphertextspec_setitem",
      children: "OH_CryptoSm2CiphertextSpec_SetItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_SetItem(OH_CryptoSm2CiphertextSpec *spec, CryptoSm2CiphertextSpec_item item, Crypto_DataBlob *in)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置SM2密文规格中的指定项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            }), " *spec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#cryptosm2ciphertextspec_item",
              children: "CryptoSm2CiphertextSpec_item"
            }), " item"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *in"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptosm2ciphertextspec_encode",
      children: "OH_CryptoSm2CiphertextSpec_Encode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoSm2CiphertextSpec_Encode(OH_CryptoSm2CiphertextSpec *spec, Crypto_DataBlob *out)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将SM2密文规格编码为DER格式密文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
        children: "OH_Crypto_FreeDataBlob"
      }), "释放out内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            }), " *spec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *out"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode",
              children: "OH_Crypto_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptosm2ciphertextspec_destroy",
      children: "OH_CryptoSm2CiphertextSpec_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_CryptoSm2CiphertextSpec_Destroy(OH_CryptoSm2CiphertextSpec *spec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁SM2密文规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec/api-cryptoasymcipherapi-oh-cryptosm2ciphertextspec",
              children: "OH_CryptoSm2CiphertextSpec"
            }), " *spec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2密文规格。"
          })]
        })
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