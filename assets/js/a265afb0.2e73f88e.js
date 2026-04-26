"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["318683"], {
545284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_spec_crypto_sym_key_generation_conversion_spec_crypto_sym_key_generation_conversion_spec_md_a26_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-spec-crypto-sym-key-generation-conversion-spec-crypto-sym-key-generation-conversion-spec-md-a26.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_spec_crypto_sym_key_generation_conversion_spec_crypto_sym_key_generation_conversion_spec_md_a26_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec","title":"对称密钥生成和转换规格","description":"当前章节将说明系统目前支持的算法及其对应的规格。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"对称密钥生成和转换规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥生成与转换介绍","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-overview/"},"next":{"title":"非对称密钥生成和转换规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec.md


const frontMatter = {
	title: '对称密钥生成和转换规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '对称密钥生成和转换规格';

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
  "value": "HMAC",
  "id": "hmac",
  "level": 2
}, {
  "value": "ChaCha20",
  "id": "chacha20",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "对称密钥生成和转换规格",
        children: "对称密钥生成和转换规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前章节将说明系统目前支持的算法及其对应的规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过字符串参数承载密钥规格，来生成对应的密钥。对于每种算法支持的字符串参数，将会在具体的每个算法规格中介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aes",
      children: "AES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AES（Advanced Encryption Standard），最常见的对称加密算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分组密码算法，分组长度为128位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥长度为128位、192位或256位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与3DES相比，安全性更高，处理速度更快。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数生成AES密钥，具体的“字符串参数”由“对称密钥算法”和“密钥长度”拼接而成，用于在创建对称密钥生成器时，指定密钥规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称密钥算法"
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
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "des",
      children: "DES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DES（Data Encryption Standard）算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DES是一种分组加密算法，它将明文分成64位的块，然后对每个块进行加密操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数生成DES密钥，具体的“字符串参数”由“对称密钥算法”和“密钥长度”拼接而成，用于在创建对称密钥生成器时，指定密钥规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "密钥长度（bit）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DES64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3des",
      children: "3DES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3DES（Triple Data Encryption Algorithm），也称为3DESede或TripleDES。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用3个64位的密钥对数据库进行三次加密，相当于对每个数据块执行三次DES（Data Encryption Standard）加密算法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与DES相比，3DES的密钥长度更长，安全性更高，但处理速度不如DES。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数生成3DES密钥，具体的“字符串参数”由“对称密钥算法”和“密钥长度”拼接而成，用于在创建对称密钥生成器时，指定密钥规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "密钥长度（bit）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3DES192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sm4",
      children: "SM4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SM4，即SM4分组密码算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分组密码算法，分组长度为128位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥长度为128位。可通过扩展密钥增加密钥长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "加密算法与密钥扩展算法都采用32轮非线性迭代结构，数据解密和数据加密的算法结构相同，只是轮密钥的使用顺序相反，解密轮密钥是加密轮密钥的逆序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数生成SM4密钥，具体的“字符串参数”由“对称密钥算法”和“密钥长度”使用连接符“_”拼接而成，用于在创建对称密钥生成器时，指定密钥规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "密钥长度（bit）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM4_128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hmac",
      children: "HMAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC（Hash-based message authentication code），是一种基于哈希的消息认证码算法，运算时需要输入对称密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC使用的对称密钥可以是任何长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果密钥的长度大于HMAC分组长度，则将密钥进行单向散列的结果作为新的密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果密钥的长度小于HMAC分组长度，则将末尾填充0作为新的密钥，即最终的密钥长度与HMAC分组长度保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥长度推荐采用摘要算法的输出长度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数生成HMAC使用的对称密钥："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当HMAC使用的密钥长度与摘要算法的输出长度一致时，具体的“字符串参数”由“消息认证码算法”和“摘要算法”使用连接符“|”拼接而成，用于在创建对称密钥生成器时，指定密钥规格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当HMAC使用的密钥长度不在上述摘要算法输出长度的范围内，可以通过字符串参数“HMAC”创建对称密钥生成器，并根据HMAC使用的密钥的二进制数据生成密钥。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "消息认证码算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
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
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 32768]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chacha20",
      children: "ChaCha20"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API22开始，算法库支持该算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChaCha20是一种现代化的流密码（stream cipher）对称加密算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本特点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "流密码算法，无需填充算法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥长度为256位。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "密钥长度（bit）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22+"
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