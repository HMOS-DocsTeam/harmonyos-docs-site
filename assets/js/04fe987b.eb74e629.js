"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["464321"], {
341705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_api_h_capi_native_huks_api_h_md_04f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-universal-keystore-api-universal-keystore-c-universal-keystore-headerfile-capi-native-huks-api-h-capi-native-huks-api-h-md-04f.json
var site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_api_h_capi_native_huks_api_h_md_04f_namespaceObject = JSON.parse('{"id":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h","title":"native_huks_api.h","description":"概述","source":"@site/docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h.md","sourceDirName":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h","slug":"/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"native_huks_api.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-native-huks-api-h"},"sidebar":"ref","previous":{"title":"native_huks_external_crypto_type.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h"},"next":{"title":"native_huks_param.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h.md


const frontMatter = {
	title: 'native_huks_api.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-native-huks-api-h'
};
const contentTitle = 'native_huks_api.h';

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
  "value": "OH_Huks_GetSdkVersion()",
  "id": "oh_huks_getsdkversion",
  "level": 3
}, {
  "value": "OH_Huks_GenerateKeyItem()",
  "id": "oh_huks_generatekeyitem",
  "level": 3
}, {
  "value": "OH_Huks_ImportKeyItem()",
  "id": "oh_huks_importkeyitem",
  "level": 3
}, {
  "value": "OH_Huks_ImportWrappedKeyItem()",
  "id": "oh_huks_importwrappedkeyitem",
  "level": 3
}, {
  "value": "OH_Huks_ExportPublicKeyItem()",
  "id": "oh_huks_exportpublickeyitem",
  "level": 3
}, {
  "value": "OH_Huks_DeleteKeyItem()",
  "id": "oh_huks_deletekeyitem",
  "level": 3
}, {
  "value": "OH_Huks_GetKeyItemParamSet()",
  "id": "oh_huks_getkeyitemparamset",
  "level": 3
}, {
  "value": "OH_Huks_IsKeyItemExist()",
  "id": "oh_huks_iskeyitemexist",
  "level": 3
}, {
  "value": "OH_Huks_AttestKeyItem()",
  "id": "oh_huks_attestkeyitem",
  "level": 3
}, {
  "value": "OH_Huks_AnonAttestKeyItem()",
  "id": "oh_huks_anonattestkeyitem",
  "level": 3
}, {
  "value": "OH_Huks_InitSession()",
  "id": "oh_huks_initsession",
  "level": 3
}, {
  "value": "OH_Huks_UpdateSession()",
  "id": "oh_huks_updatesession",
  "level": 3
}, {
  "value": "OH_Huks_FinishSession()",
  "id": "oh_huks_finishsession",
  "level": 3
}, {
  "value": "OH_Huks_AbortSession()",
  "id": "oh_huks_abortsession",
  "level": 3
}, {
  "value": "OH_Huks_ListAliases()",
  "id": "oh_huks_listaliases",
  "level": 3
}, {
  "value": "OH_Huks_WrapKey()",
  "id": "oh_huks_wrapkey",
  "level": 3
}, {
  "value": "OH_Huks_UnwrapKey()",
  "id": "oh_huks_unwrapkey",
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
        id: "native_huks_apih",
        children: "native_huks_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问HUKS的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <huks/native_huks_api.h>"]
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
      children: "在API version 9-19，系统能力为SystemCapability.Security.Huks；从API version 20起，系统能力变更为SystemCapability.Security.Huks.Core"
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
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukskeyapi/capi-hukskeyapi",
        children: "HuksKeyApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_huks_getsdkversion",
              children: "struct OH_Huks_Result OH_Huks_GetSdkVersion(struct OH_Huks_Blob *sdkVersion)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前Huks sdk版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_generatekeyitem",
              children: "struct OH_Huks_Result OH_Huks_GenerateKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSetIn, struct OH_Huks_ParamSet *paramSetOut)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_importkeyitem",
              children: "struct OH_Huks_Result OH_Huks_ImportKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入明文密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_importwrappedkeyitem",
              children: "struct OH_Huks_Result OH_Huks_ImportWrappedKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_Blob *wrappingKeyAlias, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *wrappedKeyData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入密文密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_exportpublickeyitem",
              children: "struct OH_Huks_Result OH_Huks_ExportPublicKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出公钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_deletekeyitem",
              children: "struct OH_Huks_Result OH_Huks_DeleteKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_getkeyitemparamset",
              children: "struct OH_Huks_Result OH_Huks_GetKeyItemParamSet(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSetIn, struct OH_Huks_ParamSet *paramSetOut)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥的属性集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_iskeyitemexist",
              children: "struct OH_Huks_Result OH_Huks_IsKeyItemExist(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断密钥是否存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_attestkeyitem",
              children: "struct OH_Huks_Result OH_Huks_AttestKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_CertChain *certChain)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥证书链。该API仅面向系统应用开放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_anonattestkeyitem",
              children: "struct OH_Huks_Result OH_Huks_AnonAttestKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_CertChain *certChain)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥证书链。  这是一个涉及网络的耗时接口，调用方可以通过异步线程获取证书链。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_initsession",
              children: "struct OH_Huks_Result OH_Huks_InitSession(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *handle, struct OH_Huks_Blob *token)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化密钥会话接口，并获取一个句柄（必选）和挑战值（可选）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_updatesession",
              children: "struct OH_Huks_Result OH_Huks_UpdateSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *outData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段添加密钥操作的数据并进行相应的密钥操作，输出处理数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_finishsession",
              children: "struct OH_Huks_Result OH_Huks_FinishSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *outData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束密钥会话并进行相应的密钥操作，输出处理数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_abortsession",
              children: "struct OH_Huks_Result OH_Huks_AbortSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消密钥会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_listaliases",
              children: "struct OH_Huks_Result OH_Huks_ListAliases(const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_KeyAliasSet **outData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥别名集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_wrapkey",
              children: "struct OH_Huks_Result OH_Huks_WrapKey(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *wrappedKey)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出由特定密钥加密的封装密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_unwrapkey",
              children: "struct OH_Huks_Result OH_Huks_UnwrapKey(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *wrappedKey)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入由特定密钥加密的封装密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_getsdkversion",
      children: "OH_Huks_GetSdkVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GetSdkVersion(struct OH_Huks_Blob *sdkVersion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前Huks sdk版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *sdkVersion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存放获取到的版本信息（字符串格式）。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：sdkVersion或者sdkVersion->data是null，或者sdkVersion->size太小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_generatekeyitem",
      children: "OH_Huks_GenerateKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GenerateKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSetIn, struct OH_Huks_ParamSet *paramSetOut)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给要生成的密钥的别名，需要保证业务所在进程内唯一，否则会发生覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSetIn"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成密钥的属性信息的参数集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "struct OH_Huks_ParamSet"
            }), " *paramSetOut"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成密钥为临时类型时，存放着密钥数据；非临时类型可为空。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSetIn、paramSetOut有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004 ：删除或者写文件失败。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：基础密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015 ：连接用户IAM失败。  OH_HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016 ：需要设备密码但没有设置。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017 ：（API 20新增）同名密钥已存在。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_importkeyitem",
      children: "OH_Huks_ImportKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_ImportKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入明文密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待导入密钥的别名，需要保证业务所在进程内唯一，否则会发生覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待导入密钥的属性参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *key"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待导入密钥数据，需符合Huks的格式要求，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h",
              children: "native_huks_type.h"
            }), "。"]
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet、key有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004 ：删除或者写文件失败。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015 ：连接用户IAM失败。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017 ：（API 20新增）同名密钥已存在。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_importwrappedkeyitem",
      children: "OH_Huks_ImportWrappedKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_ImportWrappedKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_Blob *wrappingKeyAlias, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *wrappedKeyData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入密文密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待导入密钥的别名，需要保证业务所在进程内唯一，否则会发生覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *wrappingKeyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥别名，该对应密钥用于密钥协商出密钥解密待导入密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待导入加密密钥的属性参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *wrappedKeyData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要导入的加密的密钥数据，需要符合Huks定义的格式，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_algsuite",
              children: "OH_Huks_AlgSuite"
            }), "。"]
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、wrappingKeyAlias、paramSet、wrappedKeyData有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004 ：删除或者写文件失败。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015 ：连接用户IAM失败。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017 ：（API 20新增）同名密钥已存在。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_exportpublickeyitem",
      children: "OH_Huks_ExportPublicKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_ExportPublicKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出公钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待导出公钥的密钥别名，应与所用密钥生成时使用的别名相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出公钥需要的属性参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放导出的公钥。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet、key有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_deletekeyitem",
      children: "OH_Huks_DeleteKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_DeleteKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除密钥的别名，应与密钥生成时使用的别名相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["删除密钥需要属性参数（默认传空）。若不指定则默认要删除的密钥存储等级为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_authstoragelevel",
              children: "OH_HUKS_AUTH_STORAGE_LEVEL_CE"
            }), "。"]
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_getkeyitemparamset",
      children: "OH_Huks_GetKeyItemParamSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_GetKeyItemParamSet(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSetIn, struct OH_Huks_ParamSet *paramSetOut)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取密钥的属性集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取参数集的密钥别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSetIn"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取参数集需要的属性TAG（默认传空）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "struct OH_Huks_ParamSet"
            }), " *paramSetOut"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的输出参数集。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSetIn、paramSetOut有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_iskeyitemexist",
      children: "OH_Huks_IsKeyItemExist()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_IsKeyItemExist(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断密钥是否存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要查找的密钥的别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询密钥需要的属性TAG（默认传空）。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_attestkeyitem",
      children: "OH_Huks_AttestKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_AttestKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_CertChain *certChain)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取密钥证书链。该API仅面向系统应用开放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ATTEST_KEY，该权限仅系统应用可申请。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783672)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用非匿名证书密钥证明时生成的证书链包含设备标识符，设备标识符的使用、留存、销毁由开发者决定，开发者需在隐私声明中对其使用目的，留存策略和销毁方式进行说明。"
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取证书的密钥的别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥证书需要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-certchain/capi-hukstypeapi-oh-huks-certchain",
              children: "struct OH_Huks_CertChain"
            }), " *certChain"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放输出的密钥证书链。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet、certChain有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_PERMISSION_FAIL = 201 ：权限检查失败，请先申请请求权限。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_anonattestkeyitem",
      children: "OH_Huks_AnonAttestKeyItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_AnonAttestKeyItem(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_CertChain *certChain)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取密钥证书链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是一个涉及网络的耗时接口，调用方可以通过异步线程获取证书链。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取证书的密钥的别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥证书需要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-certchain/capi-hukstypeapi-oh-huks-certchain",
              children: "struct OH_Huks_CertChain"
            }), " *certChain"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放输出的密钥证书链。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数keyAlias、paramSet、certChain有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_PERMISSION_FAIL = 201 ：权限检查失败，请先申请请求权限。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_initsession",
      children: "OH_Huks_InitSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_InitSession(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *handle, struct OH_Huks_Blob *token)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化密钥会话接口，并获取一个句柄（必选）和挑战值（可选）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作的密钥的别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化操作的密钥参数集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥会话的句柄，后续其他操作时传入该句柄，包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
              children: "OH_Huks_UpdateSession"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
              children: "OH_Huks_FinishSession"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_abortsession",
              children: "OH_Huks_AbortSession"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *token"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放安全访问控制时传回的token。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数 keyAlias、paramSet、handle、token有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_SESSION_LIMIT = 12000010 ：已达最大会话限制。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 22新增）指定的aead长度无效或者通过访问群组标签指定的群组名无效。  OH_HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020 ：（API 22新增）提供者或Ukey内部执行失败。  OH_HUKS_ERR_CODE_PIN_LOCKED = 12000021 ：（API 22新增）PIN码被锁定。  OH_HUKS_ERR_CODE_PIN_NO_AUTH = 12000023 ：（API 22新增）PIN码未认证通过。  OH_HUKS_ERR_CODE_BUSY = 12000024 ：（API 22新增）提供者或Ukey中的资源正在被使用。"
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
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
        children: "OH_Huks_UpdateSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
        children: "OH_Huks_FinishSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_abortsession",
        children: "OH_Huks_AbortSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_updatesession",
      children: "OH_Huks_UpdateSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_UpdateSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *outData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分段添加密钥操作的数据并进行相应的密钥操作，输出处理数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥会话句柄，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
              children: "OH_Huks_InitSession"
            }), "接口生成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥操作对应的输入参数集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *inData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要处理的输入数据，如果数据过大，可分片多次调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *outData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "经过对应的密钥操作后输出的数据。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数handle、paramSet、inData、outData有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在，或handle不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013 ：证书不存在。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_KEY_AUTH_VERIFY_FAILED = 12000008 ：认证令牌校验失败。  OH_HUKS_ERR_CODE_KEY_AUTH_PERMANENTLY_INVALIDATED = 12000007 ：认证令牌信息校验失败。  OH_HUKS_ERR_CODE_KEY_AUTH_TIME_OUT = 12000009 ：认证令牌超时。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016 ：需要设备密码但没有设置。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020 ：（API 22新增）提供者或Ukey内部执行失败。  OH_HUKS_ERR_CODE_PIN_LOCKED = 12000021 ：（API 22新增）PIN码被锁定。  OH_HUKS_ERR_CODE_PIN_NO_AUTH = 12000023 ：（API 22新增）PIN码未认证通过。  OH_HUKS_ERR_CODE_BUSY = 12000024 ：（API 22新增）提供者或Ukey中的资源正在被使用。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
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
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
        children: "OH_Huks_InitSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
        children: "OH_Huks_FinishSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_abortsession",
        children: "OH_Huks_AbortSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_finishsession",
      children: "OH_Huks_FinishSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_FinishSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *outData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束密钥会话并进行相应的密钥操作，输出处理数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥会话句柄，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
              children: "OH_Huks_InitSession"
            }), "接口生成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥操作对应的输入参数集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *inData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要处理的输入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *outData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "经过对应的密钥操作后输出的数据。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数handle、paramSet、inData、outData有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在，或handle不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013 ：证书不存在。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000006 ：加密引擎失败。  OH_HUKS_ERR_CODE_KEY_AUTH_VERIFY_FAILED = 12000008 ：认证令牌校验失败。  OH_HUKS_ERR_CODE_KEY_AUTH_PERMANENTLY_INVALIDATED = 12000007 ：认证令牌信息校验失败。  OH_HUKS_ERR_CODE_KEY_AUTH_TIME_OUT = 12000009 ：认证令牌超时。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016 ：需要设备密码但没有设置。  OH_HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001 ：暂不支持该功能。  OH_HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017 ：（API 20新增）同名密钥已存在。  OH_HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020 ：（API 22新增）提供者或Ukey内部执行失败。  OH_HUKS_ERR_CODE_PIN_LOCKED = 12000021 ：（API 22新增）PIN码被锁定。  OH_HUKS_ERR_CODE_PIN_NO_AUTH = 12000023 ：（API 22新增）PIN码未认证通过。  OH_HUKS_ERR_CODE_BUSY = 12000024 ：（API 22新增）提供者或Ukey中的资源正在被使用。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
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
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
        children: "OH_Huks_InitSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
        children: "OH_Huks_UpdateSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_abortsession",
        children: "OH_Huks_AbortSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_abortsession",
      children: "OH_Huks_AbortSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_AbortSession(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消密钥会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            }), " *handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥会话句柄，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
              children: "OH_Huks_InitSession"
            }), "接口生成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消密钥会话需要的输入参数集（默认传空）。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数handle、paramSet、inData、outData有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003 ：密钥参数无效。  OH_HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011 ：密钥文件不存在，或handle不存在。  OH_HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002 ：获取密钥参数失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013 ：证书不存在。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020 ：（API 22新增）提供者或Ukey内部执行失败。  OH_HUKS_ERR_CODE_BUSY = 12000024 ：（API 22新增）提供者或Ukey中的资源正在被使用。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
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
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
        children: "OH_Huks_InitSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
        children: "OH_Huks_UpdateSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
        children: "OH_Huks_FinishSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_listaliases",
      children: "OH_Huks_ListAliases()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_ListAliases(const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_KeyAliasSet **outData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取密钥别名集。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取密钥别名集需要的输入参数集（默认传空）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-keyaliasset/capi-hukstypeapi-oh-huks-keyaliasset",
              children: "struct OH_Huks_KeyAliasSet"
            }), " **outData"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "经过对应的密钥操作后输出的数据。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401 ：参数paramSet、outData有一个无效。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：（API 23新增）通过访问群组标签指定的群组名无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_wrapkey",
      children: "OH_Huks_WrapKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_WrapKey(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *wrappedKey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出由特定密钥加密的封装密钥。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要导出的密钥别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示加密导出密钥的参数集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *wrappedKey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要导出的封装好的密钥。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API = 801 ：接口不支持。  OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004 ：删除或者写文件失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_CRYPTO_FAIL = 12000011 ：密钥文件不存在。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：密钥别名、参数集或者封装密钥不合法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_unwrapkey",
      children: "OH_Huks_UnwrapKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_Huks_Result OH_Huks_UnwrapKey(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *paramSet, struct OH_Huks_Blob *wrappedKey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入由特定密钥加密的封装密钥。"
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
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "const struct OH_Huks_Blob"
            }), " *keyAlias"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要导入的密钥别名。在服务进程中，别名必须唯一。否则，密钥将被覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "const struct OH_Huks_ParamSet"
            }), " *paramSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示加密导入密钥的参数集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "struct OH_Huks_Blob"
            }), " *wrappedKey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要导入的封装好的密钥。"
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
            children: "可能的返回码（errorCode）：  OH_HUKS_SUCCESS = 0 ：操作成功。  OH_HUKS_ERR_CODE_NOT_SUPPORTED_API = 801 ：接口不支持。  OH_HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004 ：删除或者写文件失败。  OH_HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005 ：IPC通信失败。  OH_HUKS_ERR_CODE_INTERNAL_ERROR = 12000012 ：设备环境或输入参数异常。  OH_HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014 ：内存不足。  OH_HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015 ：连接用户IAM失败。  OH_HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018 ：密钥别名、参数集或者封装密钥不合法。"
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
783672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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