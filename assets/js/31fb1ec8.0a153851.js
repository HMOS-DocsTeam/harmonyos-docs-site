"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["756497"], {
415183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_external_crypto_api_h_capi_native_huks_external_crypto_api_h_md_31f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-universal-keystore-api-universal-keystore-c-universal-keystore-headerfile-capi-native-huks-external-crypto-api-h-capi-native-huks-external-crypto-api-h-md-31f.json
var site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_external_crypto_api_h_capi_native_huks_external_crypto_api_h_md_31f_namespaceObject = JSON.parse('{"id":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h","title":"native_huks_external_crypto_api.h","description":"概述","source":"@site/docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h.md","sourceDirName":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h","slug":"/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"native_huks_external_crypto_api.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-native-huks-external-crypto-api-h"},"sidebar":"ref","previous":{"title":"HuksTypeApi","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi"},"next":{"title":"native_huks_external_crypto_type.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h.md


const frontMatter = {
	title: 'native_huks_external_crypto_api.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-native-huks-external-crypto-api-h'
};
const contentTitle = 'native_huks_external_crypto_api.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Huks_RegisterProvider()",
  "id": "oh_huks_registerprovider",
  "level": 3
}, {
  "value": "OH_Huks_UnregisterProvider()",
  "id": "oh_huks_unregisterprovider",
  "level": 3
}, {
  "value": "OH_Huks_OpenResource()",
  "id": "oh_huks_openresource",
  "level": 3
}, {
  "value": "OH_Huks_CloseResource()",
  "id": "oh_huks_closeresource",
  "level": 3
}, {
  "value": "OH_Huks_GetUkeyPinAuthState()",
  "id": "oh_huks_getukeypinauthstate",
  "level": 3
}, {
  "value": "OH_Huks_GetProperty()",
  "id": "oh_huks_getproperty",
  "level": 3
}, {
  "value": "OH_Huks_InitExternalCryptoParamSet()",
  "id": "oh_huks_initexternalcryptoparamset",
  "level": 3
}, {
  "value": "OH_Huks_AddExternalCryptoParams()",
  "id": "oh_huks_addexternalcryptoparams",
  "level": 3
}, {
  "value": "OH_Huks_BuildExternalCryptoParamSet()",
  "id": "oh_huks_buildexternalcryptoparamset",
  "level": 3
}, {
  "value": "OH_Huks_FreeExternalCryptoParamSet()",
  "id": "oh_huks_freeexternalcryptoparamset",
  "level": 3
}, {
  "value": "OH_Huks_GetExternalCryptoParam()",
  "id": "oh_huks_getexternalcryptoparam",
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
        id: "native_huks_external_crypto_apih",
        children: "native_huks_external_crypto_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义面向外部密钥管理扩展的通用密钥库（HUKS）API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <huks/native_huks_external_crypto_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhuks_external_crypto.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.Huks.CryptoExtension"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-huksexternalcryptoapi/capi-huksexternalcryptoapi",
        children: "HuksExternalCryptoApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_huks_registerprovider",
              children: "struct OH_Huks_Result OH_Huks_RegisterProvider(const struct OH_Huks_Blob *providerName, const OH_Huks_ExternalCryptoParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册外部密钥管理能力扩展提供者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_unregisterprovider",
              children: "struct OH_Huks_Result OH_Huks_UnregisterProvider(const struct OH_Huks_Blob *providerName, const OH_Huks_ExternalCryptoParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销外部密钥管理能力扩展提供者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_openresource",
              children: "struct OH_Huks_Result OH_Huks_OpenResource(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据指定的资源ID打开资源。  注意：打开的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_closeresource",
              children: "OH_Huks_CloseResource"
            }), "关闭。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_closeresource",
              children: "struct OH_Huks_Result OH_Huks_CloseResource(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的资源ID关闭资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_getukeypinauthstate",
              children: "struct OH_Huks_Result OH_Huks_GetUkeyPinAuthState(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet, OH_Huks_ExternalPinAuthState *authState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定Ukey资源ID的PIN授权状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_getproperty",
              children: "struct OH_Huks_Result OH_Huks_GetProperty(const struct OH_Huks_Blob *resourceId, const struct OH_Huks_Blob *propertyId, const OH_Huks_ExternalCryptoParamSet *paramSetIn, OH_Huks_ExternalCryptoParamSet **paramSetOut)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外部密钥管理能力扩展提供者获取属性信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_initexternalcryptoparamset",
              children: "struct OH_Huks_Result OH_Huks_InitExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化一个参数集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_addexternalcryptoparams",
              children: "struct OH_Huks_Result OH_Huks_AddExternalCryptoParams(OH_Huks_ExternalCryptoParamSet *paramSet, const OH_Huks_ExternalCryptoParam *params, uint32_t paramCnt)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向参数集合中添加参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_buildexternalcryptoparamset",
              children: "struct OH_Huks_Result OH_Huks_BuildExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建一个参数集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_freeexternalcryptoparamset",
              children: "void OH_Huks_FreeExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个参数集合并释放相关内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_getexternalcryptoparam",
              children: "struct OH_Huks_Result OH_Huks_GetExternalCryptoParam(OH_Huks_ExternalCryptoParamSet *paramSet, const uint32_t tag, OH_Huks_ExternalCryptoParam **param)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从参数集合中获取指定参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_registerprovider",
      children: "OH_Huks_RegisterProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_RegisterProvider(const struct OH_Huks_Blob *providerName, const OH_Huks_ExternalCryptoParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册外部密钥管理能力扩展提供者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.CRYPTO_EXTENSION_REGISTER"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *providerName"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向注册参数的指针。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_PERMISSION_FAIL 201 - 权限校验失败，请先申请所需权限。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的API。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT 12000002 - 未能获取提供者参数。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - providerName或paramSet无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST 12000019 - 提供者已被注册。  OH_HUKS_ERR_CODE_EXTERNAL_ERROR 12000020 - 依赖模块发生错误。  OH_HUKS_ERR_CODE_EXCEED_LIMIT 12000025 - 提供者数量超过限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_unregisterprovider",
      children: "OH_Huks_UnregisterProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_UnregisterProvider(const struct OH_Huks_Blob *providerName, const OH_Huks_ExternalCryptoParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销外部密钥管理能力扩展提供者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.CRYPTO_EXTENSION_REGISTER"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *providerName"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向注册参数的指针。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_PERMISSION_FAIL 201 - 权限校验失败，请先申请所需权限。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的API。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST 12000011 - 未找到指定的提供者。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 - 发生系统内部错误，密钥管理扩展模块没有加载。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - providerName无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_openresource",
      children: "OH_Huks_OpenResource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_OpenResource(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的资源ID打开资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：打开的资源必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_huks_closeresource",
        children: "OH_Huks_CloseResource"
      }), "关闭。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *resourceId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者的资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向句柄操作参数的指针。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的API。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL 12000006 - Ukey驱动报错。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST 12000011 - 未找到缓存的资源句柄，需要先根据资源ID打开资源。  OH_HUKS_ERR_CODE_INTERNAL_ERROR 12000012 - 发生系统内部错误，处理函数未找到。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST 12000017 - 资源已打开。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - resourceId或paramSet无效。  OH_HUKS_ERR_CODE_EXTERNAL_ERROR 12000020 - 提供者执行失败。  OH_HUKS_ERR_CODE_BUSY 12000024 - 提供者或Ukey忙。  OH_HUKS_ERR_CODE_EXCEED_LIMIT 12000025 - 打开资源的数量超过限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_closeresource",
      children: "OH_Huks_CloseResource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_CloseResource(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的资源ID关闭资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *resourceId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者的资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向句柄操作参数的指针。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的 API。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL 12000006 - Ukey驱动报错。  OH_HUKS_ERR_CODE_INTERNAL_ERROR 12000012 - 发生系统内部错误，处理函数未找到。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - resourceId或paramSet无效。  OH_HUKS_ERR_CODE_EXTERNAL_ERROR 12000020 - 提供者执行失败。  OH_HUKS_ERR_CODE_BUSY 12000024 - 提供者或Ukey忙。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_getukeypinauthstate",
      children: "OH_Huks_GetUkeyPinAuthState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GetUkeyPinAuthState(const struct OH_Huks_Blob *resourceId, const OH_Huks_ExternalCryptoParamSet *paramSet, OH_Huks_ExternalPinAuthState *authState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定Ukey资源ID的PIN授权状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *resourceId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者的资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向PIN授权参数的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *authState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回指定索引的授权状态。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的API。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL 12000006 - Ukey驱动报错。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST 12000011 - 指定的资源ID无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR 12000012 - 发生系统内部错误，处理函数未找到。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - resourceId或paramSet无效。  OH_HUKS_ERR_CODE_EXTERNAL_ERROR 12000020 - 提供者执行失败。  OH_HUKS_ERR_CODE_BUSY 12000024 - 提供者或Ukey忙。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_getproperty",
      children: "OH_Huks_GetProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GetProperty(const struct OH_Huks_Blob *resourceId, const struct OH_Huks_Blob *propertyId, const OH_Huks_ExternalCryptoParamSet *paramSetIn, OH_Huks_ExternalCryptoParamSet **paramSetOut)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外部密钥管理能力扩展提供者获取属性信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *resourceId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定提供者的资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *propertyId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定按GMT 0016-2023定义的属性函数名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "const OH_Huks_ExternalCryptoParamSet"
            }), " *paramSetIn"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入操作参数的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " **paramSetOut"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出参数的指针，且必须包含参数OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API 801 - 不支持的API。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL 12000005 - IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL 12000006 - 驱动错误。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST 12000011 - 未找到缓存的指定句柄。  OH_HUKS_ERR_CODE_INTERNAL_ERROR 12000012 - 发生系统内部错误，处理函数未找到。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT 12000018 - resourceId、propertyId、paramSet或回调无效。  OH_HUKS_ERR_CODE_EXTERNAL_ERROR 12000020 - 提供者或Ukey内部执行失败。  OH_HUKS_ERR_CODE_PIN_LOCKED 12000021 - PIN码被锁定。  OH_HUKS_ERR_CODE_PIN_NO_AUTH 12000023 - PIN码未通过认证。  OH_HUKS_ERR_CODE_BUSY 12000024 - 提供者或Ukey中的资源正在被使用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_initexternalcryptoparamset",
      children: "OH_Huks_InitExternalCryptoParamSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_InitExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化一个参数集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " **paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要初始化的参数集合的二级指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT 12000018 - params为NULL或paramSet无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_addexternalcryptoparams",
      children: "OH_Huks_AddExternalCryptoParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_AddExternalCryptoParams(OH_Huks_ExternalCryptoParamSet *paramSet, const OH_Huks_ExternalCryptoParam *params, uint32_t paramCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向参数集合中添加参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向将要添加参数的参数集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam",
              children: "const OH_Huks_ExternalCryptoParam"
            }), " *params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要添加的参数数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t paramCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的参数数量。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT 12000018 - params为NULL或paramSet无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_buildexternalcryptoparamset",
      children: "OH_Huks_BuildExternalCryptoParamSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_BuildExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建一个参数集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " **paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要构建的参数集合的二级指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT 12000018 - paramSet无效。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY 12000014 - 内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_freeexternalcryptoparamset",
      children: "OH_Huks_FreeExternalCryptoParamSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Huks_FreeExternalCryptoParamSet(OH_Huks_ExternalCryptoParamSet **paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个参数集合并释放相关内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " **paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要销毁的参数集合的二级指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_getexternalcryptoparam",
      children: "OH_Huks_GetExternalCryptoParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GetExternalCryptoParam(OH_Huks_ExternalCryptoParamSet *paramSet, const uint32_t tag, OH_Huks_ExternalCryptoParam **param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从参数集合中获取指定参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向目标参数集合的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要获取的参数标签值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam",
              children: "OH_Huks_ExternalCryptoParam"
            }), " **param"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回获取到的参数的二级指针。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "struct OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS 0 - 操作成功。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT 12000018 - paramSet或param无效，或参数在集合中不存在。"
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