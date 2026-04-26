"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860449"], {
494809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_type_h_capi_native_huks_type_h_md_7f4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-universal-keystore-api-universal-keystore-c-universal-keystore-headerfile-capi-native-huks-type-h-capi-native-huks-type-h-md-7f4.json
var site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_type_h_capi_native_huks_type_h_md_7f4_namespaceObject = JSON.parse('{"id":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h","title":"native_huks_type.h","description":"概述","source":"@site/docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h.md","sourceDirName":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h","slug":"/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"native_huks_type.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-native-huks-type-h"},"sidebar":"ref","previous":{"title":"native_huks_param.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h"},"next":{"title":"OH_Huks_ExternalCryptoParam","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h.md


const frontMatter = {
	title: 'native_huks_type.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-native-huks-type-h'
};
const contentTitle = 'native_huks_type.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Huks_KeyPurpose",
  "id": "oh_huks_keypurpose",
  "level": 3
}, {
  "value": "OH_Huks_KeyDigest",
  "id": "oh_huks_keydigest",
  "level": 3
}, {
  "value": "OH_Huks_KeyPadding",
  "id": "oh_huks_keypadding",
  "level": 3
}, {
  "value": "OH_Huks_CipherMode",
  "id": "oh_huks_ciphermode",
  "level": 3
}, {
  "value": "OH_Huks_KeySize",
  "id": "oh_huks_keysize",
  "level": 3
}, {
  "value": "OH_Huks_KeyAlg",
  "id": "oh_huks_keyalg",
  "level": 3
}, {
  "value": "OH_Huks_AlgSuite",
  "id": "oh_huks_algsuite",
  "level": 3
}, {
  "value": "OH_Huks_KeyGenerateType",
  "id": "oh_huks_keygeneratetype",
  "level": 3
}, {
  "value": "OH_Huks_KeyFlag",
  "id": "oh_huks_keyflag",
  "level": 3
}, {
  "value": "OH_Huks_KeyStorageType",
  "id": "oh_huks_keystoragetype",
  "level": 3
}, {
  "value": "OH_Huks_ImportKeyType",
  "id": "oh_huks_importkeytype",
  "level": 3
}, {
  "value": "OH_Huks_RsaPssSaltLenType",
  "id": "oh_huks_rsapsssaltlentype",
  "level": 3
}, {
  "value": "OH_Huks_ErrCode",
  "id": "oh_huks_errcode",
  "level": 3
}, {
  "value": "OH_Huks_TagType",
  "id": "oh_huks_tagtype",
  "level": 3
}, {
  "value": "OH_Huks_UserAuthType",
  "id": "oh_huks_userauthtype",
  "level": 3
}, {
  "value": "OH_Huks_AuthAccessType",
  "id": "oh_huks_authaccesstype",
  "level": 3
}, {
  "value": "OH_Huks_AuthStorageLevel",
  "id": "oh_huks_authstoragelevel",
  "level": 3
}, {
  "value": "OH_Huks_ChallengeType",
  "id": "oh_huks_challengetype",
  "level": 3
}, {
  "value": "OH_Huks_UserAuthMode",
  "id": "oh_huks_userauthmode",
  "level": 3
}, {
  "value": "OH_Huks_ChallengePosition",
  "id": "oh_huks_challengeposition",
  "level": 3
}, {
  "value": "OH_Huks_SecureSignType",
  "id": "oh_huks_securesigntype",
  "level": 3
}, {
  "value": "OH_Huks_KeyClassType",
  "id": "oh_huks_keyclasstype",
  "level": 3
}, {
  "value": "OH_Huks_KeyWrapType",
  "id": "oh_huks_keywraptype",
  "level": 3
}, {
  "value": "OH_Huks_Tag",
  "id": "oh_huks_tag",
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
    img: "img",
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
        id: "native_huks_typeh",
        children: "native_huks_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供huks中的枚举变量、结构体定义与宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <huks/native_huks_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhuks_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.Huks.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API 9-19，系统能力为SystemCapability.Security.Huks；从API 20起，系统能力变更为SystemCapability.Security.Huks.Core"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi",
        children: "HuksTypeApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-result/capi-hukstypeapi-oh-huks-result",
              children: "OH_Huks_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示状态返回数据，包括返回码和消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "OH_Huks_Blob"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义存放数据的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-param/capi-hukstypeapi-oh-huks-param",
              children: "OH_Huks_Param"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义参数集中的参数结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "OH_Huks_ParamSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义参数集的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-certchain/capi-hukstypeapi-oh-huks-certchain",
              children: "OH_Huks_CertChain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义证书链的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keyinfo/capi-hukstypeapi-oh-huks-keyinfo",
              children: "OH_Huks_KeyInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义密钥信息的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-pubkeyinfo/capi-hukstypeapi-oh-huks-pubkeyinfo",
              children: "OH_Huks_PubKeyInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义公钥信息的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialrsa/capi-hukstypeapi-oh-huks-keymaterialrsa",
              children: "OH_Huks_KeyMaterialRsa"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Rsa密钥的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialecc/capi-hukstypeapi-oh-huks-keymaterialecc",
              children: "OH_Huks_KeyMaterialEcc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Ecc密钥的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialdsa/capi-hukstypeapi-oh-huks-keymaterialdsa",
              children: "OH_Huks_KeyMaterialDsa"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Dsa密钥的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterialdh/capi-hukstypeapi-oh-huks-keymaterialdh",
              children: "OH_Huks_KeyMaterialDh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Dh密钥的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keymaterial25519/capi-hukstypeapi-oh-huks-keymaterial25519",
              children: "OH_Huks_KeyMaterial25519"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义25519类型密钥的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keyaliasset/capi-hukstypeapi-oh-huks-keyaliasset",
              children: "OH_Huks_KeyAliasSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义密钥别名集的结构体类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_huks_keypurpose",
              children: "OH_Huks_KeyPurpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥用途类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keydigest",
              children: "OH_Huks_KeyDigest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摘要算法类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keypadding",
              children: "OH_Huks_KeyPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填充算法类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_ciphermode",
              children: "OH_Huks_CipherMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keysize",
              children: "OH_Huks_KeySize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算法密钥长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keyalg",
              children: "OH_Huks_KeyAlg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥使用的算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_algsuite",
              children: "OH_Huks_AlgSuite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文导入所需的算法套件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keygeneratetype",
              children: "OH_Huks_KeyGenerateType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成的密钥类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keyflag",
              children: "OH_Huks_KeyFlag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥的产生方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keystoragetype",
              children: "OH_Huks_KeyStorageType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥的存储方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_importkeytype",
              children: "OH_Huks_ImportKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入密钥的类型，默认为导入公钥，导入对称密钥时不需要该字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_rsapsssaltlentype",
              children: "OH_Huks_RsaPssSaltLenType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSS填充模式下盐值长度类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_errcode",
              children: "OH_Huks_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_tagtype",
              children: "OH_Huks_TagType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数集中参数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_userauthtype",
              children: "OH_Huks_UserAuthType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥访问控制中的用户认证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_authaccesstype",
              children: "OH_Huks_AuthAccessType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全访问控制类型，表示密钥失效的原则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_authstoragelevel",
              children: "OH_Huks_AuthStorageLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示生成或导入密钥时，指定该密钥的存储安全等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_challengetype",
              children: "OH_Huks_ChallengeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥使用时生成challenge的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_userauthmode",
              children: "OH_Huks_UserAuthMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥访问控制中的用户认证模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_challengeposition",
              children: "OH_Huks_ChallengePosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "challenge类型为用户自定义类型时，生成的challenge有效长度仅为8字节连续的数据，且仅支持4种位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_securesigntype",
              children: "OH_Huks_SecureSignType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成或导入密钥时，指定该密钥的安全签名类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keyclasstype",
              children: "OH_Huks_KeyClassType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Huks_KeyClassType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_keywraptype",
              children: "OH_Huks_KeyWrapType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成或导入密钥时，指定该密钥的封装类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_tag",
              children: "OH_Huks_Tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数集所用的TAG值枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_AE_TAG_LEN 16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AEAD认证标签的字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_BITS_PER_BYTE 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个字节的比特位数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MAX_KEY_SIZE 2048"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AE_NONCE_LEN 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AEAD一次性随机数的字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MAX_KEY_ALIAS_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥别名最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MAX_PROCESS_NAME_LEN 50"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进程名最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MAX_RANDOM_LEN 1024"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["随机数的最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_SIGNATURE_MIN_SIZE 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["签名结果的最小字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MAX_OUT_BLOB_SIZE (5 * 1024 * 1024)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["导出数据最大字节数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_WRAPPED_FORMAT_MAX_SIZE (1024 * 1024)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待导入加密密钥的最大字节数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_IMPORT_WRAPPED_KEY_TOTAL_BLOBS 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待导入加密密钥传入数据的数据块最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOKEN_CHALLENGE_LEN 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在进行访问控制时挑战值的字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256_SIGN_LEN 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SHA256签名的字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOKEN_SIZE 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在进行访问控制时挑战值的字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_AUTH_TIMEOUT_SECOND 60"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大用户认证超时时间。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECURE_SIGN_VERSION 0x01000001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["安全签名数据的版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keypurpose",
      children: "OH_Huks_KeyPurpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyPurpose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥用途类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_KEY_PURPOSE_ENCRYPT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于对明文进行加密操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_DECRYPT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于对密文进行解密操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_SIGN = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于对数据进行签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_VERIFY = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于验证签名后的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_DERIVE = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于派生密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_WRAP = 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于加密导出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_UNWRAP = 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥加密导入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_MAC = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于生成mac消息验证码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_PURPOSE_AGREE = 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥用于进行密钥协商。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keydigest",
      children: "OH_Huks_KeyDigest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyDigest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "摘要算法类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_DIGEST_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_MD5 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SM3 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SHA1 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SHA224 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SHA256 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SHA384 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384摘要算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DIGEST_SHA512 = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512摘要算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keypadding",
      children: "OH_Huks_KeyPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyPadding\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填充算法类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_PADDING_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_OAEP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用OAEP填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_PSS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用PSS填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_PKCS1_V1_5 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用PKCS1_V1_5填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_PKCS5 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用PKCS5填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_PKCS7 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用PKCS7填充算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_ISO_IEC_9796_2 = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用ISO IEC 9796-2填充算法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_PADDING_ISO_IEC_9797_1 = 7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用ISO IEC 9797-1填充算法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_ciphermode",
      children: "OH_Huks_CipherMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_CipherMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加密模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_MODE_ECB = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECB模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_CBC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用CBC模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_CTR = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用CTR模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_OFB = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用OFB模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_CFB = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用CFB模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_CCM = 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用CCM模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_MODE_GCM = 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用GCM模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keysize",
      children: "OH_Huks_KeySize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeySize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法密钥长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_RSA_KEY_SIZE_512 = 512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为512bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_KEY_SIZE_768 = 768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为768bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_KEY_SIZE_1024 = 1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为1024bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_KEY_SIZE_2048 = 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为2048bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_KEY_SIZE_3072 = 3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为3072bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_KEY_SIZE_4096 = 4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法的密钥长度为4096bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ECC_KEY_SIZE_224 = 224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECC算法的密钥长度为224bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ECC_KEY_SIZE_256 = 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECC算法的密钥长度为256bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ECC_KEY_SIZE_384 = 384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECC算法的密钥长度为384bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ECC_KEY_SIZE_521 = 521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECC算法的密钥长度为521bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AES_KEY_SIZE_128 = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AES算法的密钥长度为128bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AES_KEY_SIZE_192 = 192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AES算法的密钥长度为192bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AES_KEY_SIZE_256 = 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AES算法的密钥长度为256bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AES_KEY_SIZE_512 = 512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AES算法的密钥长度为512bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CURVE25519_KEY_SIZE_256 = 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用CURVE25519算法的密钥长度为256bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DH_KEY_SIZE_2048 = 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DH算法的密钥长度为2048bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DH_KEY_SIZE_3072 = 3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DH算法的密钥长度为3072bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DH_KEY_SIZE_4096 = 4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DH算法的密钥长度为4096bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_SM2_KEY_SIZE_256 = 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SM2算法的密钥长度为256bit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_SM4_KEY_SIZE_128 = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SM4算法支持的密钥长度为128位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_DES_KEY_SIZE_64 = 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用DES算法的密钥长度为64bit。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_3DES_KEY_SIZE_128 = 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用3DES算法的密钥长度为128bit。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_3DES_KEY_SIZE_192 = 192"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用3DES算法的密钥长度为192bit。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keyalg",
      children: "OH_Huks_KeyAlg"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyAlg\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥使用的算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_ALG_RSA = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用RSA算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_ECC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECC算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_DSA = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DSA算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_AES = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用AES算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_HMAC = 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用HMAC算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_HKDF = 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用HKDF算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_PBKDF2 = 52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用PBKDF2算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_ECDH = 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ECDH算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_X25519 = 101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用X25519算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_ED25519 = 102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ED25519算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_DH = 103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DH算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_SM2 = 150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SM2算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_SM3 = 151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SM3算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_SM4 = 152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SM4算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_DES = 160"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用DES算法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_3DES = 161"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用3DES算法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ALG_CMAC = 162"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用CMAC算法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_algsuite",
      children: "OH_Huks_AlgSuite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_AlgSuite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密文导入所需的算法套件类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING对应的密钥材料格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| x25519_plain_pubkey_length  (4 Byte) | x25519_plain_pubkey |  agreekey_aad_length (4 Byte) | agreekey_aad\n|   agreekey_nonce_length     (4 Byte) |   agreekey_nonce    | agreekey_aead_tag_len(4 Byte) | agreekey_aead_tag\n|    kek_enc_data_length      (4 Byte) |    kek_enc_data     |    kek_aad_length    (4 Byte) | kek_aad\n|      kek_nonce_length       (4 Byte) |      kek_nonce      |   kek_aead_tag_len   (4 Byte) | kek_aead_tag\n|   key_material_size_len     (4 Byte) |  key_material_size  |   key_mat_enc_length (4 Byte) | key_mat_enc_data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING对应的密钥材料格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "|  ECC_plain_pubkey_length    (4 Byte) |  ECC_plain_pubkey   |  agreekey_aad_length (4 Byte) | agreekey_aad\n|   agreekey_nonce_length     (4 Byte) |   agreekey_nonce    | agreekey_aead_tag_len(4 Byte) | agreekey_aead_tag\n|    kek_enc_data_length      (4 Byte) |    kek_enc_data     |    kek_aad_length    (4 Byte) | kek_aad\n|      kek_nonce_length       (4 Byte) |      kek_nonce      |   kek_aead_tag_len   (4 Byte) | kek_aead_tag\n|   key_material_size_len     (4 Byte) |  key_material_size  |   key_mat_enc_length (4 Byte) | key_mat_enc_data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_HUKS_UNWRAP_SUITE_SM2_SM4_ECB_NOPADDING对应的密钥材料格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| kek_SM4_enc_length (4 Byte) | EN_SM4_key | importkey_enc_length (4 Byte) | importkey_enc |\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文导入密钥材料格式（Length-Value格式）采用X25519密钥协商同时采用AES-256-GCM加解密。具体材料格式见上方枚举描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文导入密钥材料格式（Length-Value格式）采用ECDH-p256密钥协商同时采用AES-256-GCM加解密。具体材料格式见上方枚举描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_UNWRAP_SUITE_SM2_SM4_ECB_NOPADDING = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文导入密钥材料格式（Length-Value格式）使用临时SM4密钥加密导入密钥，使用已导入HUKS的SM2密钥加密SM4密钥。具体材料格式见上方枚举描述。  **起始版本：**23"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keygeneratetype",
      children: "OH_Huks_KeyGenerateType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyGenerateType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成的密钥类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_KEY_GENERATE_TYPE_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认生成的密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_GENERATE_TYPE_DERIVE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "派生生成的密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_GENERATE_TYPE_AGREE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协商生成的密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keyflag",
      children: "OH_Huks_KeyFlag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyFlag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥的产生方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_KEY_FLAG_IMPORT_KEY = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过导入公钥接口导入的密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_FLAG_GENERATE_KEY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过生成密钥接口生成的密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_FLAG_AGREE_KEY = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过生成密钥协商接口生成的密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_FLAG_DERIVE_KEY = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过生成密钥派生接口生成的密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keystoragetype",
      children: "OH_Huks_KeyStorageType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyStorageType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥的存储方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_STORAGE_TEMP = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过接口返回给业务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_STORAGE_PERSISTENT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥托管在HUKS中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_STORAGE_ONLY_USED_IN_HUKS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在进行密钥派生或协商时，结果密钥托管在HUKS中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在进行密钥派生或协商时，结果密钥可以返回给业务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_importkeytype",
      children: "OH_Huks_ImportKeyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ImportKeyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入密钥的类型，默认为导入公钥，导入对称密钥时不需要该字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_KEY_TYPE_PUBLIC_KEY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入的密钥类型为公钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_TYPE_PRIVATE_KEY = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入的密钥类型为私钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_TYPE_KEY_PAIR = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入的密钥类型为公私钥对。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_rsapsssaltlentype",
      children: "OH_Huks_RsaPssSaltLenType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_RsaPssSaltLenType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PSS填充模式下盐值长度类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "OH_HUKS_RSA_PSS_SALT_LEN_DIGEST = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以摘要长度设置盐值长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_RSA_PSS_SALT_LEN_MAX = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以最大长度设置盐值长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_errcode",
      children: "OH_Huks_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_PERMISSION_FAIL = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法参数（通用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_NOT_SUPPORTED_API = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持该API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持该子功能（特性）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺少密钥算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的密钥算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程通信错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算法库操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_KEY_AUTH_PERMANENTLY_INVALIDATED = 12000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥访问失败 - 密钥已失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_KEY_AUTH_VERIFY_FAILED = 12000008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥访问失败 - 密钥认证失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_KEY_AUTH_TIME_OUT = 12000009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥访问失败 - 密钥访问超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_SESSION_LIMIT = 12000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥操作会话数已达上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该项实体不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用服务失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要锁屏密码，但没有设置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["同名密钥已存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的参数无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_ITEM_EXISTS = 12000019"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该项实体已存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供者或Ukey内部执行失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_PIN_LOCKED = 12000021"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pin码被锁定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_PIN_INCORRECT = 12000022"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pin码错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_PIN_NO_AUTH = 12000023"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pin码未认证通过。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_BUSY = 12000024"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供者或Ukey中的资源正在被使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_ERR_CODE_EXCEED_LIMIT = 12000025"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["资源超过限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_tagtype",
      children: "OH_Huks_TagType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_TagType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数集中参数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_TAG_TYPE_INVALID = 0 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法的Tag类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_TYPE_INT = 1 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该Tag的数据类型为int32_t类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_TYPE_UINT = 2 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该Tag的数据类型为uin32_t类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_TYPE_ULONG = 3 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该Tag的数据类型为uin64_t类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_TYPE_BOOL = 4 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该Tag的数据类型为bool类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_TYPE_BYTES = 5 << 28"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该Tag的数据类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "OH_Huks_Blob"
            }), "类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-param/capi-hukstypeapi-oh-huks-param",
        children: "OH_Huks_Param"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_userauthtype",
      children: "OH_Huks_UserAuthType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_UserAuthType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥访问控制中的用户认证类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_USER_AUTH_TYPE_FINGERPRINT = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证类型为指纹。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_USER_AUTH_TYPE_FACE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证类型为人脸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_USER_AUTH_TYPE_PIN = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证类型为PIN码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_USER_AUTH_TYPE_TUI_PIN = 1 << 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户认证类型为TUI PIN码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_authaccesstype",
      children: "OH_Huks_AuthAccessType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_AuthAccessType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全访问控制类型，表示密钥失效的原则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全访问控制类型为清除密码后密钥无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全访问控制类型为新录入生物特征后密钥无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AUTH_ACCESS_ALWAYS_VALID = 1 << 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["安全访问控制类型为该密钥总是有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_authstoragelevel",
      children: "OH_Huks_AuthStorageLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_AuthStorageLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示生成或导入密钥时，指定该密钥的存储安全等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "OH_HUKS_AUTH_STORAGE_LEVEL_DE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥仅在开机后可访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AUTH_STORAGE_LEVEL_CE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥仅在首次解锁后可访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_AUTH_STORAGE_LEVEL_ECE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示密钥仅在解锁状态时可访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764464)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["业务在使用存储等级为ECE的密钥时，建议通过感知", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_screen_locked",
        children: "锁屏事件"
      }), "来清理使用该密钥创建的会话资源，以保证安全性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_challengetype",
      children: "OH_Huks_ChallengeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ChallengeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥使用时生成challenge的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_CHALLENGE_TYPE_NORMAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "challenge为普通类型，默认32字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CHALLENGE_TYPE_CUSTOM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "challenge为用户自定义类型。支持使用多个密钥仅一次认证，challenge长度8字节有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CHALLENGE_TYPE_NONE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "免challenge类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_challengeposition",
        children: "OH_Huks_ChallengePosition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_userauthmode",
      children: "OH_Huks_UserAuthMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_UserAuthMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥访问控制中的用户认证模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "OH_HUKS_USER_AUTH_MODE_LOCAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地认证模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_USER_AUTH_MODE_COAUTH = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨端协同认证模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_challengeposition",
      children: "OH_Huks_ChallengePosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ChallengePosition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "challenge类型为用户自定义类型时，生成的challenge有效长度仅为8字节连续的数据，且仅支持4种位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_HUKS_CHALLENGE_POS_0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0~7字节为当前密钥的有效challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CHALLENGE_POS_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8~15字节为当前密钥的有效challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CHALLENGE_POS_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16~23字节为当前密钥的有效challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_CHALLENGE_POS_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24~31字节为当前密钥的有效challenge。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_securesigntype",
      children: "OH_Huks_SecureSignType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_SecureSignType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成或导入密钥时，指定该密钥的安全签名类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_SECURE_SIGN_WITH_AUTHINFO = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名类型为携带认证信息。生成或导入密钥时指定该字段，则在使用密钥进行签名时，对待签名的数据添加认证信息后进行签名。注意：携带的认证信息包含身份信息，开发者需在其隐私声明中对此身份信息的使用目的、存留策略和销毁方式进行说明。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keyclasstype",
      children: "OH_Huks_KeyClassType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyClassType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "OH_HUKS_KEY_CLASS_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认类型，指定密钥存储在HUKS中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_CLASS_EXTENSION = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥存储在外部加密提供者中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_keywraptype",
      children: "OH_Huks_KeyWrapType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_KeyWrapType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成或导入密钥时，指定该密钥的封装类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_KEY_WRAP_TYPE_HUK_BASED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件唯一密钥的封装类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_tag",
      children: "OH_Huks_Tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_Tag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数集所用的TAG值枚举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1-200：密钥参数标签值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "301-500：密钥使用访问控制和使用认证相关的标签值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "501-600：密钥认证相关的标签值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "601-1000：其他类型的标签值预留值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1001-9999：扩展标签值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "11000-12000：预留值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "20001-N：其他标签预留值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HUKS_TAG_ALGORITHM = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_PURPOSE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_SIZE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_DIGEST = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_PADDING = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_BLOCK_MODE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ASSOCIATED_DATA = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_NONCE = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IV = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_INFO = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_SALT = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ITERATION = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_GENERATE_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AGREE_ALG = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AGREE_PUBLIC_KEY_IS_KEY_ALIAS = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AGREE_PRIVATE_KEY_ALIAS = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AGREE_PUBLIC_KEY = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_ALIAS = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_DERIVE_KEY_SIZE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IMPORT_KEY_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_UNWRAP_ALGORITHM_SUITE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_RSA_PSS_SALT_LEN_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ALL_USERS = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_USER_ID = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "302"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_NO_AUTH_REQUIRED = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "303"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_USER_AUTH_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "304"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AUTH_TIMEOUT = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "305"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AUTH_TOKEN = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "306"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_AUTH_ACCESS_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "307"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_SECURE_SIGN_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "308"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_CHALLENGE_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "309"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_CHALLENGE_POS = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "310"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_AUTH_PURPOSE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "311"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AUTH_STORAGE_LEVEL = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "316"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_USER_AUTH_MODE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "319"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ATTESTATION_CHALLENGE = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ATTESTATION_APPLICATION_ID = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ATTESTATION_ID_ALIAS = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "511"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "514"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ATTESTATION_ID_VERSION_INFO = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "515"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_OVERRIDE = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "520"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AE_TAG_LEN = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "521"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_CLASS = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "522"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_ACCESS_GROUP = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "523"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IS_KEY_ALIAS = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_STORAGE_FLAG = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IS_ALLOWED_WRAP = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1003"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_WRAP_TYPE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1004"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_AUTH_ID = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1005"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_ROLE = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1006"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_FLAG = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1007"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IS_ASYNCHRONIZED = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1008"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_KEY_DOMAIN = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_IS_DEVICE_PASSWORD_SET = OH_HUKS_TAG_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1012"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_AE_TAG = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10009"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_SYMMETRIC_KEY_DATA = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ASYMMETRIC_PUBLIC_KEY_DATA = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_TAG_ASYMMETRIC_PRIVATE_KEY_DATA = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20003"
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
764464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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