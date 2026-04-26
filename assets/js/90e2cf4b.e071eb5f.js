"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["412561"], {
278563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_crypto_architecture_api_crypto_architecture_c_crypto_architecture_headerfile_capi_crypto_mac_h_capi_crypto_mac_h_md_90e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-crypto-architecture-api-crypto-architecture-c-crypto-architecture-headerfile-capi-crypto-mac-h-capi-crypto-mac-h-md-90e.json
var site_docs_ref_system_security_api_crypto_architecture_api_crypto_architecture_c_crypto_architecture_headerfile_capi_crypto_mac_h_capi_crypto_mac_h_md_90e_namespaceObject = JSON.parse('{"id":"system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h","title":"crypto_mac.h","description":"概述","source":"@site/docs-ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h.md","sourceDirName":"system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h","slug":"/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"crypto_mac.h","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-mac-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-crypto-mac-h"},"sidebar":"ref","previous":{"title":"crypto_key_agreement.h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-key-agreement-h/capi-crypto-key-agreement-h"},"next":{"title":"crypto_rand.h","permalink":"/harmonyos-docs-site/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-rand-h/capi-crypto-rand-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h.md


const frontMatter = {
	title: 'crypto_mac.h',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-mac-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-crypto-mac-h'
};
const contentTitle = 'crypto_mac.h';

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
  "value": "CryptoMac_ParamType",
  "id": "cryptomac_paramtype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_CryptoMac_Create()",
  "id": "oh_cryptomac_create",
  "level": 3
}, {
  "value": "OH_CryptoMac_SetParam()",
  "id": "oh_cryptomac_setparam",
  "level": 3
}, {
  "value": "OH_CryptoMac_Init()",
  "id": "oh_cryptomac_init",
  "level": 3
}, {
  "value": "OH_CryptoMac_Update()",
  "id": "oh_cryptomac_update",
  "level": 3
}, {
  "value": "OH_CryptoMac_Final()",
  "id": "oh_cryptomac_final",
  "level": 3
}, {
  "value": "OH_CryptoMac_GetLength()",
  "id": "oh_cryptomac_getlength",
  "level": 3
}, {
  "value": "OH_CryptoMac_Destroy()",
  "id": "oh_cryptomac_destroy",
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
        id: "crypto_mach",
        children: "crypto_mac.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义MAC接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CryptoArchitectureKit/crypto_mac.h>"]
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
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-module/capi-cryptomacapi/capi-cryptomacapi",
        children: "CryptoMacApi"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CryptoMac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义MAC结构。"
          })]
        })
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
              href: "#cryptomac_paramtype",
              children: "CryptoMac_ParamType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CryptoMac_ParamType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义MAC算法参数类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_cryptomac_create",
              children: "OH_Crypto_ErrCode OH_CryptoMac_Create(const char *algoName, OH_CryptoMac **ctx)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据给定的算法名称创建MAC实例。  注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_destroy",
              children: "OH_CryptoMac_Destroy"
            }), "销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_setparam",
              children: "OH_Crypto_ErrCode OH_CryptoMac_SetParam(OH_CryptoMac *ctx, CryptoMac_ParamType type, const Crypto_DataBlob *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置MAC参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_init",
              children: "OH_Crypto_ErrCode OH_CryptoMac_Init(OH_CryptoMac *ctx, const OH_CryptoSymKey *key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用对称密钥初始化MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_update",
              children: "OH_Crypto_ErrCode OH_CryptoMac_Update(OH_CryptoMac *ctx, const Crypto_DataBlob *in)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_final",
              children: "OH_Crypto_ErrCode OH_CryptoMac_Final(OH_CryptoMac *ctx, Crypto_DataBlob *out)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完成MAC操作。  注意：使用完成后必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
              children: "OH_Crypto_FreeDataBlob"
            }), "释放out内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_getlength",
              children: "OH_Crypto_ErrCode OH_CryptoMac_GetLength(OH_CryptoMac *ctx, uint32_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取MAC长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cryptomac_destroy",
              children: "void OH_CryptoMac_Destroy(OH_CryptoMac *ctx)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁MAC实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cryptomac_paramtype",
      children: "CryptoMac_ParamType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CryptoMac_ParamType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义MAC算法参数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CRYPTO_MAC_DIGEST_NAME_STR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC消息认证码使用的摘要函数的算法名称，例如SHA256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRYPTO_MAC_CIPHER_NAME_STR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMAC消息认证码使用的对称加密算法名称，例如AES256。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_create",
      children: "OH_CryptoMac_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_Create(const char *algoName, OH_CryptoMac **ctx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的算法名称创建MAC实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：创建的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_destroy",
        children: "OH_CryptoMac_Destroy"
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
            children: "用于生成MAC实例的算法名称。  例如\"HMAC\"、\"CMAC\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " **ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_setparam",
      children: "OH_CryptoMac_SetParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_SetParam(OH_CryptoMac *ctx, CryptoMac_ParamType type, const Crypto_DataBlob *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置MAC参数。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#cryptomac_paramtype",
              children: "CryptoMac_ParamType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC参数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "const Crypto_DataBlob"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC参数。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_init",
      children: "OH_CryptoMac_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_Init(OH_CryptoMac *ctx, const OH_CryptoSymKey *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用对称密钥初始化MAC实例。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptosymkeyapi-oh-cryptosymkey/capi-cryptosymkeyapi-oh-cryptosymkey",
              children: "const OH_CryptoSymKey"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对称密钥。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
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
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update",
        children: "OH_CryptoMac_Update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_final",
        children: "OH_CryptoMac_Final"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_update",
      children: "OH_CryptoMac_Update()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_Update(OH_CryptoMac *ctx, const Crypto_DataBlob *in)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新MAC实例。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "const Crypto_DataBlob"
            }), " *in"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要更新的数据。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
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
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_init",
        children: "OH_CryptoMac_Init"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_final",
        children: "OH_CryptoMac_Final"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_final",
      children: "OH_CryptoMac_Final()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_Final(OH_CryptoMac *ctx, Crypto_DataBlob *out)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成MAC操作。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
              children: "Crypto_DataBlob"
            }), " *out"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC值。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
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
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_init",
        children: "OH_CryptoMac_Init"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update",
        children: "OH_CryptoMac_Update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_getlength",
      children: "OH_CryptoMac_GetLength()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Crypto_ErrCode OH_CryptoMac_GetLength(OH_CryptoMac *ctx, uint32_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取MAC长度。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC长度。"
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
            children: "CRYPTO_SUCCESS：操作成功。  CRYPTO_NOT_SUPPORTED：操作不支持。  CRYPTO_MEMORY_ERROR：内存错误。  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。  CRYPTO_OPERATION_ERROR：调用三方算法库API出错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cryptomac_destroy",
      children: "OH_CryptoMac_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_CryptoMac_Destroy(OH_CryptoMac *ctx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁MAC实例。"
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
              href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac",
              children: "OH_CryptoMac"
            }), " *ctx"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAC实例。"
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