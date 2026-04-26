"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["867717"], {
502693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_certificate_api_device_certificate_c_device_certificate_headerfile_capi_cm_native_type_h_capi_cm_native_type_h_md_1a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-certificate-api-device-certificate-c-device-certificate-headerfile-capi-cm-native-type-h-capi-cm-native-type-h-md-1a1.json
var site_docs_ref_system_security_api_device_certificate_api_device_certificate_c_device_certificate_headerfile_capi_cm_native_type_h_capi_cm_native_type_h_md_1a1_namespaceObject = JSON.parse('{"id":"system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h","title":"cm_native_type.h","description":"概述","source":"@site/docs-ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h.md","sourceDirName":"system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h","slug":"/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"cm_native_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cm-native-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-cm-native-type-h"},"sidebar":"ref","previous":{"title":"cm_native_api.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-api-h/capi-cm-native-api-h"},"next":{"title":"OH_CM_Blob","permalink":"/harmonyos-docs-site/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-blob/capi-certmanagertype-oh-cm-blob"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h.md


const frontMatter = {
	title: 'cm_native_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cm-native-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-cm-native-type-h'
};
const contentTitle = 'cm_native_type.h';

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
  "value": "OH_CM_ErrorCode",
  "id": "oh_cm_errorcode",
  "level": 3
}, {
  "value": "OH_CM_CertificatePurpose",
  "id": "oh_cm_certificatepurpose",
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
        id: "cm_native_typeh",
        children: "cm_native_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供CertManager中的枚举变量、结构体定义、宏定义和错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <device_certificate/certmanager/cm_native_type.h>"]
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
        href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-module/capi-certmanagertype/capi-certmanagertype",
        children: "CertManagerType"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-blob/capi-certmanagertype-oh-cm-blob",
              children: "OH_CM_Blob"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_Blob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义存放数据的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credential/capi-certmanagertype-oh-cm-credential",
              children: "OH_CM_Credential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_Credential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义证书凭据详情的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credentialdetaillist/capi-certmanagertype-oh-cm-credentialdetaillist",
              children: "OH_CM_CredentialDetailList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CredentialDetailList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义证书凭据详情列表的结构体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-ukeyinfo/capi-certmanagertype-oh-cm-ukeyinfo",
              children: "OH_CM_UkeyInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_UkeyInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义USB证书凭据信息的结构体类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_cm_errorcode",
              children: "OH_CM_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_cm_certificatepurpose",
              children: "OH_CM_CertificatePurpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CertificatePurpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书凭据用途类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_CM_MAX_LEN_CERTIFICATE_CHAIN 24588"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["证书链最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_MAX_LEN_URI 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["URI最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_MAX_LEN_CERT_ALIAS 129"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["证书别名最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_MAX_LEN_TYPE_NAME 1025"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["证书类型最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cm_errorcode",
      children: "OH_CM_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_CM_ErrorCode\n"
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
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_CM_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_HAS_NO_PERMISSION = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CAPABILITY_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_INNER_FAILURE = 17500001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。可能原因：1.IPC通讯失败。2.内存操作错误；3.文件操作错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_NOT_FOUND = 17500002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_INVALID_CERT_FORMAT = 17500003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库格式无效或密钥库密码不正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_MAX_CERT_COUNT_REACHED = 17500004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书或凭据数量达到上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_NO_AUTHORIZATION = 17500005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用未经用户授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_DEVICE_ENTER_ADVSECMODE = 17500007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备进入坚盾守护模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_STORE_PATH_NOT_SUPPORTED = 17500009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持指定的证书存储路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_ACCESS_UKEY_SERVICE_FAILED = 17500010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB证书凭据访问失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_PARAMETER_VALIDATION_FAILED = 17500011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数校验失败，例如参数格式或参数范围无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_cm_certificatepurpose",
      children: "OH_CM_CertificatePurpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_CM_CertificatePurpose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书凭据用途类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "OH_CM_CERT_PURPOSE_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认用途，用于凭据签名用途。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CERT_PURPOSE_ALL = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有用途，用于查询凭据功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CERT_PURPOSE_SIGN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名用途。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CM_CERT_PURPOSE_ENCRYPT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密用途。"
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