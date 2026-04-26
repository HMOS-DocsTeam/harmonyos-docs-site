"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["310202"], {
781253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_overview_crypto_sign_sig_verify_overview_md_eb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-overview-crypto-sign-sig-verify-overview-md-eb7.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_overview_crypto_sign_sig_verify_overview_md_eb7_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/crypto-sign-sig-verify-overview","title":"签名验签介绍及算法规格","description":"当需要判断接收的数据是否被篡改、数据是否为指定对象发送的数据时，可以使用签名验签操作。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/crypto-sign-sig-verify-overview.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"签名验签介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sign-sig-verify-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM2密文格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/"},"next":{"title":"使用RSA密钥对（PKCS1模式）签名验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/crypto-sign-sig-verify-overview.md


const frontMatter = {
	title: '签名验签介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sign-sig-verify-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '签名验签介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "RSA",
  "id": "rsa",
  "level": 2
}, {
  "value": "填充模式为PKCS1",
  "id": "填充模式为pkcs1",
  "level": 3
}, {
  "value": "填充模式为PSS",
  "id": "填充模式为pss",
  "level": 3
}, {
  "value": "获取/设置PSS填充模式的参数",
  "id": "获取设置pss填充模式的参数",
  "level": 3
}, {
  "value": "签名模式为OnlySign",
  "id": "签名模式为onlysign",
  "level": 3
}, {
  "value": "验签模式为Recover",
  "id": "验签模式为recover",
  "level": 3
}, {
  "value": "ECDSA",
  "id": "ecdsa",
  "level": 2
}, {
  "value": "DSA",
  "id": "dsa",
  "level": 2
}, {
  "value": "SM2",
  "id": "sm2",
  "level": 2
}, {
  "value": "Ed25519",
  "id": "ed25519",
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
        id: "签名验签介绍及算法规格",
        children: "签名验签介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要判断接收的数据是否被篡改、数据是否为指定对象发送的数据时，可以使用签名验签操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来将说明系统目前支持的算法及其对应的规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554721)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前使用C/C++的方式从API version 12开始支持验签，从API version 20开始支持签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rsa",
      children: "RSA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库框架目前提供了两种RSA签名验签的填充模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F%E4%B8%BApkcs1",
            children: "PKCS1"
          }), "：即RFC3447规范中的RSAES-PKCS1-V1_5模式，对应OpenSSL中的RSA_PKCS1_PADDING。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该模式时需要设置摘要（md），摘要算法输出的长度需要小于RSA密钥长度。例如RSA2048的密钥字节长度为256。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A1%AB%E5%85%85%E6%A8%A1%E5%BC%8F%E4%B8%BApss",
            children: "PSS"
          }), "： 即RFC3447规范中的RSASSA-PSS模式，对应OpenSSL中的RSA_PKCS1_PSS_PADDING。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该模式时需要设置两个摘要（md和mgf1_md），且md和mgf1_md长度之和需要小于RSA的密钥长度。例如RSA2048的密钥字节长度为256。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此模式还可额外设置盐长度saltLen，并用于获取PSS的相关参数。（单位：字节）"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "PSS的相关参数"
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
                children: "saltLen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "盐长度。（单位：字节）"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "trailer_field"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于编码操作的整数，只支持为1。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599360)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用同步接口生成RSA2048、RSA3072、RSA4096、RSA8192非对称密钥或者明文长度超过2048会导致耗时增加。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于系统对主线程有时间限制，耗时较长会导致失败，建议开发者在生成位数较大的密钥时，使用对应的异步接口或是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "使用多线程并发能力"
      }), "进行开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充模式为pkcs1",
      children: "填充模式为PKCS1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA签名验签，具体的“字符串参数”由“非对称密钥类型”、“填充模式 PKCS1”和“摘要”使用符号“|”拼接而成，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为RSA512、填充模式为PKCS1、摘要算法为MD5的密钥时，其字符串参数为\"RSA512|PKCS1|MD5\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289287)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSA签名验签时，摘要算法输出的长度，需要小于RSA的密钥长度。如RSA密钥为512位时，不支持SHA512。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符合长度要求的摘要算法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA签名验签参数输入密钥类型时支持不带长度，签名验签运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充模式为pss",
      children: "填充模式为PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA签名验签，具体的“字符串参数”由“非对称密钥类型”、“填充模式 PSS”、“摘要”和“掩码摘要”使用符号“|”拼接而成，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为RSA2048、填充模式为PSS、摘要算法为SHA256、掩码摘要为MGF1_SHA256的密钥时，其字符串参数为\"RSA2048|PSS|SHA256|MGF1_SHA256\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(931998)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSA签名验签时，对于PSS模式，md和mgf1_md长度之和需要小于RSA的密钥长度。如RSA密钥为512位时，无法支持md和mgf1_md同时为SHA256。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[MGF1_MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGF1_SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
            children: "PSS"
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
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA签名验签参数输入密钥类型时支持不带长度，签名验签运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取设置pss填充模式的参数",
      children: "获取/设置PSS填充模式的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持RSA使用PSS填充模式时，获取、设置相关参数，“√”表示支持对获取或设置该参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PSS参数"
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
            children: "PSS_MD_NAME_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mgf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS_MGF_NAME_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mgf1_md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS_MGF1_MD_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saltLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS_SALT_LEN_NUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trailer_field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS_TRAILER_FIELD_NUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "签名模式为onlysign",
      children: "签名模式为OnlySign"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库框架目前提供了RSA签名不做摘要仅签名功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA签名，具体的“字符串参数”由“非对称密钥类型”、“填充模式”、“摘要”和“签名模式”使用符号“|”拼接而成，用于在创建非对称签名实例时，指定非对称签名算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为RSA2048、填充模式为PKCS1、摘要算法为SHA256、签名模式为OnlySign的密钥时，其字符串参数为\"RSA2048|PKCS1|SHA256|OnlySign\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(660257)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSA仅签名时，对待签名数据有长度要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PKCS1填充模式，NoHash不设置摘要算法，数据需要小于RSA密钥字节长度-11（PKCS1填充长度）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PKCS1填充模式，设置任意摘要算法，待签名的数据必须是对应的摘要数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoPadding不设置填充模式，NoHash不设置摘要算法，待签名的数据长度需要等于RSA密钥字节长度，且其数值小于RSA模数。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "签名模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符合长度要求的摘要算法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OnlySign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA签名参数输入密钥类型时支持不带长度，签名运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验签模式为recover",
      children: "验签模式为Recover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库框架目前提供了RSA签名恢复原始数据功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成RSA签名恢复，具体的“字符串参数”由“非对称密钥类型”、“填充模式”、“摘要”和“验签模式”使用符号“|”拼接而成，用于在创建非对称验签实例时，指定非对称验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为RSA2048、填充模式为PKCS1、摘要算法为SHA256、验签模式为Recover的密钥时，其字符串参数为\"RSA2048|PKCS1|SHA256|Recover\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "填充模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "签名模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[RSA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA3072"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符合长度要求的摘要算法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，RSA签名恢复参数输入密钥类型时支持不带长度，签名恢复运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ecdsa",
      children: "ECDSA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECDSA（Elliptic Curve Digital Signature Algorithm，椭圆曲线数字签名算法）是基于椭圆曲线密码（ECC）的数字签名算法（DSA）。相比DLP（Discrete Logarithm Problem，普通的离散对数问题）和IFP（Integer Factorization Problem，大数分解问题），椭圆曲线密码的单位比特强度要高于其他公钥体制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库框架提供了多种椭圆曲线及摘要算法组合的ECDSA签名验签能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成ECDSA签名验签，具体的“字符串参数”由“非对称密钥类型”和“摘要”使用符号“|”拼接而成，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为ECC224、摘要算法为SHA256的密钥时，其字符串参数为\"ECC224|SHA256\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP160r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP160t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP192r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP192t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP224r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP224t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP256r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP256t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP320r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP320t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP384r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP384t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP512r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP512t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_Secp256k1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，ECDSA签名验签参数输入密钥类型时支持不指定长度和曲线，签名验签运算取决于实际输入的密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dsa",
      children: "DSA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DSA（Digital Signature Algorithm，数字签名算法）的安全性基于整数有限域离散对数问题的困难性，具有较好的兼容性和适用性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成DSA签名验签，具体的“字符串参数”由“非对称密钥类型”和“摘要”使用符号“|”拼接而成，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表所示，各取值范围（即[]中的内容）中，只能选取一项完成字符串拼接。举例说明，当需要非对称密钥类型为DSA1024、摘要算法为SHA256的密钥时，其字符串参数为\"DSA1024|SHA256\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[NoHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，DSA签名验签参数输入密钥类型时支持不带长度，签名验签运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(588212)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用DSA算法并设置摘要算法为NoHash时，则不支持分段签名或分段验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sm2",
      children: "SM2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SM2数字签名算法，是基于椭圆曲线的签名验签算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成SM2签名验签，具体的“字符串参数”由“非对称密钥类型”和“摘要”使用符号“|”拼接而成，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前SM2签名只支持SM3摘要。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2_256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2_256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，SM2签名验签参数输入密钥类型时支持不带长度，签名验签运算取决于实际输入的密钥长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ed25519",
      children: "Ed25519"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ed25519是基于椭圆曲线的签名验签算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串参数完成Ed25519签名验签，用于在创建非对称签名验签实例时，指定非对称签名验签算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
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
660257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
588212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
289287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
554721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
599360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
931998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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