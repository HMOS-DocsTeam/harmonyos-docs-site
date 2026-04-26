"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["814608"], {
265890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_asym_encrypt_decrypt_spec_crypto_asym_encrypt_decrypt_spec_md_f4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-spec-crypto-asym-encrypt-decrypt-spec-crypto-asym-encrypt-decrypt-spec-md-f4d.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_spec_crypto_asym_encrypt_decrypt_spec_crypto_asym_encrypt_decrypt_spec_md_f4d_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec","title":"非对称密钥加解密算法规格","description":"本章说明系统支持的算法及其规格。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"非对称密钥加解密算法规格","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-encrypt-decrypt-spec","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"对称密钥加解密算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec/"},"next":{"title":"分段加解密说明","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec.md


const frontMatter = {
	title: '非对称密钥加解密算法规格',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-encrypt-decrypt-spec',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '非对称密钥加解密算法规格';

const assets = {

};



const toc = [{
  "value": "RSA",
  "id": "rsa",
  "level": 2
}, {
  "value": "填充模式为NoPadding",
  "id": "填充模式为nopadding",
  "level": 3
}, {
  "value": "填充模式为PKCS1",
  "id": "填充模式为pkcs1",
  "level": 3
}, {
  "value": "填充模式为PKCS1_OAEP",
  "id": "填充模式为pkcs1_oaep",
  "level": 3
}, {
  "value": "获取/设置OAEP填充模式的参数",
  "id": "获取设置oaep填充模式的参数",
  "level": 3
}, {
  "value": "SM2",
  "id": "sm2",
  "level": 2
}, {
  "value": "获取SM2摘要算法参数",
  "id": "获取sm2摘要算法参数",
  "level": 3
}, {
  "value": "转换SM2密文格式",
  "id": "转换sm2密文格式",
  "level": 3
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
        id: "非对称密钥加解密算法规格",
        children: "非对称密钥加解密算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章说明系统支持的算法及其规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每种算法支持的加密模式在具体规格中介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rsa",
      children: "RSA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "RSA"
      }), "为非对称加密算法，加密长度需要在固定长度进行，在实际应用中，如果数据量无法达到固定的长度要求，可以通过不同的填充模式进行数据填充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库目前提供了RSA加解密常用的三种模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F%E4%B8%BAnopadding",
            children: "NoPadding"
          }), "：不带填充，输入的数据必须与RSA密钥字节长度一样长；输出数据长度与RSA密钥字节长度一样长。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F%E4%B8%BApkcs1",
            children: "PKCS1"
          }), "：即RFC3447规范中的RSAES-PKCS1-V1_5模式，对应OpenSSL中的RSA_PKCS1_PADDING。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RSA运算时，源数据D转化为Encryption block（EB），加密时，输入数据最大长度 <= RSA密钥字节长度 - 11；输出数据长度与RSA密钥字节长度相同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F%E4%B8%BApkcs1_oaep",
            children: "PKCS1_OAEP"
          }), "：即RFC3447规范中的RSAES-OAEP模式，对应OpenSSL中的RSA_PKCS1_OAEP_PADDING。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此模式需要设置两个摘要（md和mgf1_md），加密时，输入数据长度必须小于RSA密钥字节长度 - 2 *md摘要字节长度 - 2；输出数据长度与RSA密钥字节长度相同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此模式可设置pSource字节流以定义OAEP填充的编码输入，并获取PKCS1_OAEP的相关参数。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "PKCS1_OAEP的相关参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "md"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "摘要算法。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mgf"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "掩码生成算法，目前仅支持MGF1。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mgf1_md"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MGF1算法中使用的摘要算法。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pSource"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字节流，用于编码输入。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以RSA2048|SHA256举例说明输入数据长度与算法之间的关系。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "填充模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输入数据的最大字节长度"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输出数据的最大字节长度"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "NoPadding"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256(RSA密钥字节长度)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "245(RSA密钥字节长度 - 11)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "PKCS1_OAEP"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "190(RSA密钥字节长度 - 2 * md摘要字节长度 - 2)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "256"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(849046)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用同步接口生成RSA2048、RSA3072、RSA4096、RSA8192非对称密钥或明文长度超过2048均会增加耗时。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统对主线程有时间限制，耗时较长会导致失败。建议生成大位数密钥时，使用异步接口或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "使用多线程并发能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充模式为nopadding",
      children: "填充模式为NoPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA加解密。字符串参数由“非对称密钥类型”和“填充模式 NoPadding”使用符号“|”拼接而成，用于在创建非对称加解密实例时指定算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoPadding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA加解密参数输入密钥类型时支持不带长度，加解密运算依据实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充模式为pkcs1",
      children: "填充模式为PKCS1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA加解密，具体的“字符串参数”由“非对称密钥类型”和“填充模式 PKCS1”使用符号“|”拼接而成，用于在创建非对称加解密实例时指定算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA加解密参数输入密钥类型时支持不带长度，加解密运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充模式为pkcs1_oaep",
      children: "填充模式为PKCS1_OAEP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA加解密。字符串参数由“非对称密钥类型”、“填充模式 PKCS1_OAEP”、摘要和掩码摘要组成，使用符号“|”拼接，用于在创建非对称加解密实例时指定算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "举例说明，当需要非对称密钥类型为RSA2048、填充模式为PKCS1_OAEP、摘要算法为SHA256、掩码摘要为MGF1_SHA256的RSA密钥，其字符串参数为\"RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA256\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "掩码摘要"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1_OAEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符合长度要求的摘要算法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_符合长度要求的摘要算法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA加解密参数输入密钥类型时支持不带长度。加解密运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取设置oaep填充模式的参数",
      children: "获取/设置OAEP填充模式的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API版本10开始，支持RSA使用PKCS1_OAEP填充模式时获取和设置相关参数，“√”表示支持获取或设置该参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OAEP参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "获取"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP_MD_NAME_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mgf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP_MGF_NAME_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mgf1_md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP_MGF1_MD_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAEP_MGF1_PSRC_UINT8ARR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sm2",
      children: "SM2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
        children: "SM2"
      }), "为非对称加密算法，加密长度需要在固定长度进行。算法库目前支持以GM/T 0009-2012定义的格式加密或解密数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SM2非对称加密的结果由C1、C2、C3三部分组成。其中C1是根据生成的随机数计算出的椭圆曲线点，C2是密文数据，C3是通过指定的摘要算法计算的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数完成SM2加解密，具体的“字符串参数”由“非对称密钥类型（加解密算法+密钥长度）”、“摘要算法”使用符号“|”拼接而成，用于在创建非对称加解密实例时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。SM2算法和密钥长度之间采用符号“_”进行拼接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "举例说明，当密钥长度为256bit、摘要算法为MD5的SM2密钥，其字符串参数为\"SM2_256|MD5\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2_256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，SM2加解密参数在输入密钥类型时支持不带长度。加解密运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取sm2摘要算法参数",
      children: "获取SM2摘要算法参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API版本11开始，支持SM2获取摘要算法参数，“√”表示支持获取或设置该参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SM2加解密参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "获取"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2_MD_NAME_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "转换sm2密文格式",
      children: "转换SM2密文格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API版本12开始，支持SM2格式转换。当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可指定SM2密文参数，转换为符合国密标准的ASN.1格式密文。同样，可以从国密标准的ASN.1格式密文中提取SM2密文参数，便于重新组合成其他格式的SM2密文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SM2密文参数，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "xCoordinate：x分量，即C1_X。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "yCoordinate：y分量，即C1_Y。xCoordinate和yCoordinate可以转换成C1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cipherTextData：密文，即C2。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hashData：杂凑值，即C3。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数指定SM2密文格式转换的模式，如下表所示，“√”表示支持获取或设置该参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SM2密文格式转换模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "基于参数生成SM2密文"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "从SM2密文中获取参数"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C1C3C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
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
849046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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