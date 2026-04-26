"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687606"], {
152960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_certificate_api_device_certificate_c_device_certificate_headerfile_capi_cm_native_api_h_capi_cm_native_api_h_md_ca5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-certificate-api-device-certificate-c-device-certificate-headerfile-capi-cm-native-api-h-capi-cm-native-api-h-md-ca5.json
var site_docs_ref_system_security_api_device_certificate_api_device_certificate_c_device_certificate_headerfile_capi_cm_native_api_h_capi_cm_native_api_h_md_ca5_namespaceObject = JSON.parse('{"id":"system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h","title":"cm_native_api.h","description":"概述","source":"@site/docs-ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h.md","sourceDirName":"system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h","slug":"/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"cm_native_api.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cm-native-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-cm-native-api-h"},"sidebar":"ref","previous":{"title":"CertManagerType","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-module/capi-certmanagertype/capi-certmanagertype"},"next":{"title":"cm_native_type.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h.md


const frontMatter = {
	title: 'cm_native_api.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cm-native-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-cm-native-api-h'
};
const contentTitle = 'cm_native_api.h';

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
  "value": "OH_CertManager_GetUkeyCertificate()",
  "id": "oh_certmanager_getukeycertificate",
  "level": 3
}, {
  "value": "OH_CertManager_GetPrivateCertificate()",
  "id": "oh_certmanager_getprivatecertificate",
  "level": 3
}, {
  "value": "OH_CertManager_GetPublicCertificate()",
  "id": "oh_certmanager_getpubliccertificate",
  "level": 3
}, {
  "value": "OH_CertManager_FreeUkeyCertificate()",
  "id": "oh_certmanager_freeukeycertificate",
  "level": 3
}, {
  "value": "OH_CertManager_FreeCredential()",
  "id": "oh_certmanager_freecredential",
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
        id: "cm_native_apih",
        children: "cm_native_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于获取特定类型证书详情的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <device_certificate/certmanager/cm_native_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohcert_manager.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.CertificateManager"]
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
        href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-module/capi-certmanager/capi-certmanager",
        children: "CertManager"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_certmanager_getukeycertificate",
              children: "int32_t OH_CertManager_GetUkeyCertificate(const OH_CM_Blob *keyUri, const OH_CM_UkeyInfo *ukeyInfo, OH_CM_CredentialDetailList *certificateList)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取USB证书凭据的详情信息列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_certmanager_getprivatecertificate",
              children: "int32_t OH_CertManager_GetPrivateCertificate(const OH_CM_Blob *keyUri, OH_CM_Credential *certificate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取特定应用私有证书凭据详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_certmanager_getpubliccertificate",
              children: "int32_t OH_CertManager_GetPublicCertificate(const OH_CM_Blob *keyUri, OH_CM_Credential *certificate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取特定用户公共证书凭据详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_certmanager_freeukeycertificate",
              children: "void OH_CertManager_FreeUkeyCertificate(OH_CM_CredentialDetailList *certificateList)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁证书详情信息列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_certmanager_freecredential",
              children: "void OH_CertManager_FreeCredential(OH_CM_Credential *certificate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁证书详情。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_certmanager_getukeycertificate",
      children: "OH_CertManager_GetUkeyCertificate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_CertManager_GetUkeyCertificate(const OH_CM_Blob *keyUri, const OH_CM_UkeyInfo *ukeyInfo, OH_CM_CredentialDetailList *certificateList)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取USB证书凭据的详情信息列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_CERT_MANAGER"]
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-blob/capi-certmanagertype-oh-cm-blob",
              children: "const OH_CM_Blob"
            }), " *keyUri"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放USB证书凭据的唯一标识符（字符串格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-ukeyinfo/capi-certmanagertype-oh-cm-ukeyinfo",
              children: "const OH_CM_UkeyInfo"
            }), " *ukeyInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB证书凭据属性信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credentialdetaillist/capi-certmanagertype-oh-cm-credentialdetaillist",
              children: "OH_CM_CredentialDetailList"
            }), " *certificateList"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的USB证书凭据详情列表。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h#oh_cm_errorcode",
              children: "OH_CM_ErrorCode"
            }), "：  OH_CM_SUCCESS = 0 ：操作成功。  OH_CM_HAS_NO_PERMISSION = 201 ：权限校验失败。  OH_CM_CAPABILITY_NOT_SUPPORTED = 801 ：设备不支持。  OH_CM_PARAMETER_VALIDATION_FAILED = 17500011 ：入参校验失败。可能原因：  1.参数格式错误。  2.参数范围无效。  OH_CM_INNER_FAILURE = 17500001 ：内部错误。可能原因：  1.IPC通讯失败。  2.内存操作错误。  3.文件操作错误。  OH_CM_NOT_FOUND = 17500002 ：证书不存在。  OH_CM_ACCESS_UKEY_SERVICE_FAILED = 17500010 ：USB证书凭据访问失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_certmanager_getprivatecertificate",
      children: "OH_CertManager_GetPrivateCertificate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_CertManager_GetPrivateCertificate(const OH_CM_Blob *keyUri, OH_CM_Credential *certificate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取特定应用私有证书凭据详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_CERT_MANAGER"]
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-blob/capi-certmanagertype-oh-cm-blob",
              children: "const OH_CM_Blob"
            }), " *keyUri"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放应用私有证书凭据的唯一标识符（字符串格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credential/capi-certmanagertype-oh-cm-credential",
              children: "OH_CM_Credential"
            }), " *certificate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的应用私有凭据的详情。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h#oh_cm_errorcode",
              children: "OH_CM_ErrorCode"
            }), "：  OH_CM_SUCCESS = 0 ：操作成功。  OH_CM_HAS_NO_PERMISSION = 201 ：权限校验失败。  OH_CM_PARAMETER_VALIDATION_FAILED = 17500011 ：入参校验失败。可能原因：  1.参数格式错误。  2.参数范围无效。  OH_CM_INNER_FAILURE = 17500001 ：内部错误。可能原因：  1.IPC通讯失败。  2.内存操作错误。  3.文件操作错误。  OH_CM_NOT_FOUND = 17500002 ：证书不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_certmanager_getpubliccertificate",
      children: "OH_CertManager_GetPublicCertificate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_CertManager_GetPublicCertificate(const OH_CM_Blob *keyUri, OH_CM_Credential *certificate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取特定用户公共证书凭据详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_CERT_MANAGER"]
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-blob/capi-certmanagertype-oh-cm-blob",
              children: "const OH_CM_Blob"
            }), " *keyUri"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放用户公共证书凭据的唯一标识符（字符串格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credential/capi-certmanagertype-oh-cm-credential",
              children: "OH_CM_Credential"
            }), " *certificate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的用户公共证书凭据的详情。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h#oh_cm_errorcode",
              children: "OH_CM_ErrorCode"
            }), "：  OH_CM_SUCCESS = 0 ：操作成功。  OH_CM_HAS_NO_PERMISSION = 201 ：权限校验失败。  OH_CM_PARAMETER_VALIDATION_FAILED = 17500011 ：入参校验失败。可能原因：  1.参数格式错误。  2.参数范围无效。  OH_CM_INNER_FAILURE = 17500001 ：内部错误。可能原因：  1.IPC通讯失败。  2.内存操作错误。  3.文件操作错误。  OH_CM_NOT_FOUND = 17500002 ：证书不存在。  OH_CM_NO_AUTHORIZATION = 17500005 ：应用未经用户授权。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_certmanager_freeukeycertificate",
      children: "OH_CertManager_FreeUkeyCertificate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_CertManager_FreeUkeyCertificate(OH_CM_CredentialDetailList *certificateList)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁证书详情信息列表。"
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credentialdetaillist/capi-certmanagertype-oh-cm-credentialdetaillist",
              children: "OH_CM_CredentialDetailList"
            }), " *certificateList"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待销毁的证书凭据详细列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_certmanager_freecredential",
      children: "OH_CertManager_FreeCredential()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_CertManager_FreeCredential(OH_CM_Credential *certificate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁证书详情。"
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credential/capi-certmanagertype-oh-cm-credential",
              children: "OH_CM_Credential"
            }), " *certificate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待销毁的证书凭据详情。"
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