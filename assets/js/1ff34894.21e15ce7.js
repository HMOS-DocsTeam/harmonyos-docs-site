"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["136233"], {
123285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_rdb_crypto_param_h_capi_oh_rdb_crypto_param_h_md_1ff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-oh-rdb-crypto-param-h-capi-oh-rdb-crypto-param-h-md-1ff.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_rdb_crypto_param_h_capi_oh_rdb_crypto_param_h_md_1ff_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h","title":"oh_rdb_crypto_param.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"oh_rdb_crypto_param.h","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-crypto-param-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-rdb-crypto-param-h"},"sidebar":"ref","previous":{"title":"oh_predicates.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-predicates-h/capi-oh-predicates-h"},"next":{"title":"oh_rdb_transaction.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h.md


const frontMatter = {
	title: 'oh_rdb_crypto_param.h',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-crypto-param-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-rdb-crypto-param-h'
};
const contentTitle = 'oh_rdb_crypto_param.h';

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
  "value": "Rdb_EncryptionAlgo",
  "id": "rdb_encryptionalgo",
  "level": 3
}, {
  "value": "Rdb_HmacAlgo",
  "id": "rdb_hmacalgo",
  "level": 3
}, {
  "value": "Rdb_KdfAlgo",
  "id": "rdb_kdfalgo",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Rdb_CreateCryptoParam()",
  "id": "oh_rdb_createcryptoparam",
  "level": 3
}, {
  "value": "OH_Rdb_DestroyCryptoParam()",
  "id": "oh_rdb_destroycryptoparam",
  "level": 3
}, {
  "value": "OH_Crypto_SetEncryptionKey()",
  "id": "oh_crypto_setencryptionkey",
  "level": 3
}, {
  "value": "OH_Crypto_SetIteration()",
  "id": "oh_crypto_setiteration",
  "level": 3
}, {
  "value": "OH_Crypto_SetEncryptionAlgo()",
  "id": "oh_crypto_setencryptionalgo",
  "level": 3
}, {
  "value": "OH_Crypto_SetHmacAlgo()",
  "id": "oh_crypto_sethmacalgo",
  "level": 3
}, {
  "value": "OH_Crypto_SetKdfAlgo()",
  "id": "oh_crypto_setkdfalgo",
  "level": 3
}, {
  "value": "OH_Crypto_SetCryptoPageSize()",
  "id": "oh_crypto_setcryptopagesize",
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
        id: "oh_rdb_crypto_paramh",
        children: "oh_rdb_crypto_param.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供与关系型数据库加密参数相关的函数和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/rdb/oh_rdb_crypto_param.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_rdb_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_CryptoParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定打开加密数据库时使用的加密参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#rdb_encryptionalgo",
              children: "Rdb_EncryptionAlgo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rdb_EncryptionAlgo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库加密算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rdb_hmacalgo",
              children: "Rdb_HmacAlgo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rdb_HmacAlgo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开数据库时支持的HMAC算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rdb_kdfalgo",
              children: "Rdb_KdfAlgo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rdb_KdfAlgo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开数据库时支持的KDF算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_rdb_createcryptoparam",
              children: "OH_Rdb_CryptoParam *OH_Rdb_CreateCryptoParam(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdb_destroycryptoparam",
              children: "int OH_Rdb_DestroyCryptoParam(OH_Rdb_CryptoParam *param)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_setencryptionkey",
              children: "int OH_Crypto_SetEncryptionKey(OH_Rdb_CryptoParam *param, const uint8_t *key, int32_t length)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "对象的密钥数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_setiteration",
              children: "int OH_Crypto_SetIteration(OH_Rdb_CryptoParam *param, int64_t iteration)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打开加密数据库时使用的KDF算法迭代次数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_setencryptionalgo",
              children: "int OH_Crypto_SetEncryptionAlgo(OH_Rdb_CryptoParam *param, int32_t algo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打开加密数据库时使用的加密算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_sethmacalgo",
              children: "int OH_Crypto_SetHmacAlgo(OH_Rdb_CryptoParam *param, int32_t algo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打开加密数据库时使用的HMAC算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_setkdfalgo",
              children: "int OH_Crypto_SetKdfAlgo(OH_Rdb_CryptoParam *param, int32_t algo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打开加密数据库时使用的KDF算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_crypto_setcryptopagesize",
              children: "int OH_Crypto_SetCryptoPageSize(OH_Rdb_CryptoParam *param, int64_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打开加密数据库时使用的页大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rdb_encryptionalgo",
      children: "Rdb_EncryptionAlgo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rdb_EncryptionAlgo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库加密算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RDB_AES_256_GCM = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库使用RDB_AES_256_GCM加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_AES_256_CBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库使用RDB_AES_256_CBC加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_PLAIN_TEXT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据库不加密。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rdb_hmacalgo",
      children: "Rdb_HmacAlgo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rdb_HmacAlgo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开数据库时支持的HMAC算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RDB_HMAC_SHA1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_HMAC_SHA1算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_HMAC_SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_HMAC_SHA256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_HMAC_SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_HMAC_SHA512算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rdb_kdfalgo",
      children: "Rdb_KdfAlgo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rdb_KdfAlgo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开数据库时支持的KDF算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RDB_KDF_SHA1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_KDF_SHA1算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_KDF_SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_KDF_SHA256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_KDF_SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_KDF_SHA512算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdb_createcryptoparam",
      children: "OH_Rdb_CreateCryptoParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Rdb_CryptoParam *OH_Rdb_CreateCryptoParam(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
        children: "OH_Rdb_CryptoParam"
      }), "实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功时返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。  否则返回nullptr。使用完成后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h#oh_rdb_destroycryptoparam",
              children: "OH_Rdb_DestroyCryptoParam"
            }), "接口释放内存。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdb_destroycryptoparam",
      children: "OH_Rdb_DestroyCryptoParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Rdb_DestroyCryptoParam(OH_Rdb_CryptoParam *param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
        children: "OH_Rdb_CryptoParam"
      }), "实例对象。"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        })
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_setencryptionkey",
      children: "OH_Crypto_SetEncryptionKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetEncryptionKey(OH_Rdb_CryptoParam *param, const uint8_t *key, int32_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
        children: "OH_Rdb_CryptoParam"
      }), "对象的密钥数据。"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint8_t *key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向数组数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥数组的大小。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_setiteration",
      children: "OH_Crypto_SetIteration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetIteration(OH_Rdb_CryptoParam *param, int64_t iteration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置打开加密数据库时使用的KDF算法迭代次数。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示迭代次数。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_setencryptionalgo",
      children: "OH_Crypto_SetEncryptionAlgo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetEncryptionAlgo(OH_Rdb_CryptoParam *param, int32_t algo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置打开加密数据库时使用的加密算法。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t algo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示加密算法。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_sethmacalgo",
      children: "OH_Crypto_SetHmacAlgo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetHmacAlgo(OH_Rdb_CryptoParam *param, int32_t algo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置打开加密数据库时使用的HMAC算法。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t algo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示HMAC算法。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_setkdfalgo",
      children: "OH_Crypto_SetKdfAlgo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetKdfAlgo(OH_Rdb_CryptoParam *param, int32_t algo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置打开加密数据库时使用的KDF算法。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t algo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示KDF算法。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_crypto_setcryptopagesize",
      children: "OH_Crypto_SetCryptoPageSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Crypto_SetCryptoPageSize(OH_Rdb_CryptoParam *param, int64_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置打开加密数据库时使用的页大小。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), " *param"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-cryptoparam/capi-rdb-oh-rdb-cryptoparam",
              children: "OH_Rdb_CryptoParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示页大小，单位为字节，取值应为2的幂值，最小值为1024，最大值65536。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  如果执行成功，返回RDB_OK。  如果输入参数无效，返回RDB_E_INVALID_ARGS。"
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