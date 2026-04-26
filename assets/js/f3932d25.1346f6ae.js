"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928812"], {
95965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_sym_encrypt_decrypt_spec_crypto_sym_encrypt_decrypt_spec_md_f39_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-spec-crypto-sym-encrypt-decrypt-spec-crypto-sym-encrypt-decrypt-spec-md-f39.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_sym_encrypt_decrypt_spec_crypto_sym_encrypt_decrypt_spec_md_f39_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec","title":"对称密钥加解密算法规格","description":"当前章节将说明系统目前支持的算法及其对应的规格。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"对称密钥加解密算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-encrypt-decrypt-spec","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加解密介绍","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encryption-decryption-overview/"},"next":{"title":"非对称密钥加解密算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec.md


const frontMatter = {
	title: '对称密钥加解密算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-encrypt-decrypt-spec',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '对称密钥加解密算法规格';

const assets = {

};



const toc = [{
  "value": "AES",
  "id": "aes",
  "level": 2
}, {
  "value": "DES",
  "id": "des",
  "level": 2
}, {
  "value": "3DES",
  "id": "3des",
  "level": 2
}, {
  "value": "SM4",
  "id": "sm4",
  "level": 2
}, {
  "value": "AES-WRAP",
  "id": "aes-wrap",
  "level": 2
}, {
  "value": "填充模式",
  "id": "填充模式",
  "level": 2
}, {
  "value": "ChaCha20",
  "id": "chacha20",
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
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "对称密钥加解密算法规格",
        children: "对称密钥加解密算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前章节将说明系统目前支持的算法及其对应的规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于每种算法采用支持的加密模式，将会在具体的每个算法规格中介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aes",
      children: "AES"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库当前提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#aes",
        children: "AES"
      }), "加解密常用的7种加密模式：ECB、CBC、OFB、CFB、CTR、GCM和CCM。不同的加密模式适用的加解密参数不同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#paramsspec",
        children: "ParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于AES为分组加密算法，分组长度为128位。在实际应用中，最后一组明文可能不足128位（16字节），此时可以通过不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F",
        children: "填充模式"
      }), "进行数据填充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于需要填充至分组大小，所以实际算法库中的PKCS5和PKCS7都是以分组大小作为填充长度的，即AES加密填充至16字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(38087)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECB、CBC加密模式，明文长度不是128位整数倍，必须使用填充方法补足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CCM加密模式，必须指定附加验证数据aad且其长度必须大于等于1字节且小于等于2048字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成AES加解密，具体的“字符串参数”由“对称密钥类型（加解密算法+密钥长度）”、“分组模式”和“填充模式”使用符号“|”拼接而成，用于在创建对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为ECB、密钥长度为128bit、填充模式为PKCS7，其字符串参数为\"AES128|ECB|PKCS7\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为CFB、密钥长度为256bit、填充模式为NoPadding，其字符串参数为\"AES256|CFB|NoPadding\"。"
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分组模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥长度（bit）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "填充模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ECB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CBC"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CTR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GCM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CCM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256]"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API版本10开始，支持对称加解密不带密钥长度的规格。加解密参数输入密钥类型时，支持不带长度，加解密运算取决于实际输入的密钥长度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明，当需要分组模式为CFB、不带密钥长度、填充模式为NoPadding，其字符串参数为\"AES|CFB|NoPadding\"。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "des",
      children: "DES"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#des",
        children: "DES"
      }), "算法的加密过程包含16轮相同的加密函数，每轮都使用不同的子密钥。子密钥是通过对原始密钥进行一系列的置换和移位操作生成的。在每一轮中，明文块被分为左右两部分，然后通过一系列的置换、替换和异或操作进行加密。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库当前提供了DES加解密常用的4种加密模式：ECB、CBC、OFB和CFB。不同的加密模式适用的加解密参数不同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#paramsspec",
        children: "ParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(278774)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECB、CBC加密模式，明文长度不是64位整数倍，必须使用填充方法补足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成DES加解密，具体的“字符串参数”由“对称密钥类型（加解密算法+密钥长度）”、“分组模式”和“填充模式”使用符号“|”拼接而成，用于在创建对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为ECB、密钥长度为64bit、填充模式为PKCS7，其字符串参数为\"DES64|ECB|PKCS7\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为OFB、密钥长度为64bit、填充模式为NoPadding，其字符串参数为\"DES64|OFB|NoPadding\"。"
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分组模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥长度（bit）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "填充模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ECB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "64"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CBC"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "64"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "64"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "64"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API版本10开始，支持对称加解密不带密钥长度的规格。加解密参数输入密钥类型时，支持不带长度，加解密运算取决于实际输入的密钥长度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明，当需要分组模式为CFB、不带密钥长度、填充模式为NoPadding，其字符串参数为\"DES|CFB|NoPadding\"。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3des",
      children: "3DES"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#section3des",
        children: "3DES"
      }), "算法的加解密过程分别是对明文/密文数据进行三次DES加密或解密，得到相应的密文或明文。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库当前提供了3DES加解密常用的4种加密模式：ECB、CBC、OFB和CFB。不同的加密模式适用的加解密参数不同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#paramsspec",
        children: "ParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于DES为分组加密算法，分组长度为64位。在实际应用中，最后一组明文可能不足64位（8字节），此时可以通过不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F",
        children: "填充模式"
      }), "进行数据填充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于需要填充至分组大小，所以实际算法库中的PKCS5和PKCS7都是以分组大小作为填充长度的，即3DES加密填充至8字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(373179)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECB、CBC加密模式，明文长度不是64位整数倍，必须使用填充方法补足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成3DES加解密，具体的“字符串参数”由“对称密钥类型（加解密算法+密钥长度）”、“分组模式”和“填充模式”使用符号“|”拼接而成，用于在创建对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为ECB、密钥长度为192bit、填充模式为PKCS7，其字符串参数为\"3DES192|ECB|PKCS7\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为OFB、密钥长度为192bit、填充模式为NoPadding，其字符串参数为\"3DES192|OFB|NoPadding\"。"
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分组模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥长度（bit）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "填充模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ECB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CBC"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "192"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API版本10开始，支持对称加解密不带密钥长度的规格。加解密参数输入密钥类型时，支持不带长度，加解密运算取决于实际输入的密钥长度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明，当需要分组模式为CFB、不带密钥长度、填充模式为NoPadding，其字符串参数为\"3DES|CFB|NoPadding\"。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sm4",
      children: "SM4"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库当前提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#sm4",
        children: "SM4"
      }), "加解密常用的7种加密模式：ECB、CBC、CTR、OFB、CFB、CFB128和GCM。不同的加密模式适用的加解密参数不同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#paramsspec",
        children: "ParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于SM4为分组加密算法，分组长度为128位。在实际应用中，最后一组明文可能不足128位（16字节），此时可以通过不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F",
        children: "填充模式"
      }), "进行数据填充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于需要填充至分组大小，所以实际算法库中的PKCS5和PKCS7都是以分组大小作为填充长度的，即SM4加密填充至16字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841156)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECB、CBC加密模式，明文长度不是128位整数倍，必须使用填充方法补足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成SM4加解密，具体的“字符串参数”由“对称密钥类型（加解密算法+密钥长度）”、“分组模式”和“填充模式”使用符号“|”拼接而成，用于在创建对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。SM4算法和密钥长度中间采用符号“_”拼接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为ECB、密钥长度为128bit、填充模式为PKCS7，其字符串参数为\"SM4_128|ECB|PKCS7\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为CFB、密钥长度为128bit、填充模式为NoPadding，其字符串参数为\"SM4_128|CFB|NoPadding\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当需要分组模式为GCM、密钥长度为128bit、填充模式为NoPadding，其字符串参数为\"SM4_128|GCM|NoPadding\"。"
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "分组模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥长度（bit）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "填充模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ECB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CBC"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CTR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CFB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CFB128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GCM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "128"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS5"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aes-wrap",
      children: "AES-WRAP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库提供AES-WRAP算法，该算法是一种基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#aes",
        children: "AES"
      }), "的加密算法，用于安全地存储或传输对称密钥。它的主要目的是通过加密保护密钥，防止密钥在存储或传输过程中被泄露或篡改。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES128_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES128_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES256_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES256_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES384_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES384_WRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "填充模式",
      children: "填充模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分组加密算法有固定的分组长度，在实际应用中，最后一组明文的数据量可能无法达到固定的长度要求，此时可以通过不同的填充模式进行数据填充。填充模式有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoPadding：不带填充。输入数据需要与分组长度匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PKCS5：填充字符由一个字节序列组成，而且每个字节填充的值与要填充的字节序列长度相同。PKCS5为8字节填充，即需将数据填充为八字节的倍数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PKCS7：填充方法和PKCS5一致。但PKCS7可以在1-255字节之间任意填充，PKCS5固定为8字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于CFB、OFB、CTR、GCM、CCM这类将分组密码转化为流模式实现的模式，不需要填充，因此无论是否指定填充模式，都会按照NoPadding实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chacha20",
      children: "ChaCha20"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API22开始，算法库支持该算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算法库当前提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#chacha20",
        children: "ChaCha20"
      }), "加解密，默认的ChaCha20加解密时需要传入IV。默认ChaCha20需要的加解密参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#ivparamsspec",
        children: "IvParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常用的加密模式：Poly1305。Poly1305模式适用的加解密参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#poly1305paramsspec22",
        children: "Poly1305ParamsSpec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ChaCha20是流算法，无需填充算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成ChaCha20加解密，具体的“字符串参数”由“对称密钥类型”和“分组模式”使用符号“|”拼接而成，用于在创建对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称算法名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "密钥长度（bit）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poly1305"
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
38087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
373179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
841156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
278774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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