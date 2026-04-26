"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856876"], {
68339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_drm_api_drm_c_drm_headerfile_capi_native_drm_common_h_capi_native_drm_common_h_md_d59_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-drm-api-drm-c-drm-headerfile-capi-native-drm-common-h-capi-native-drm-common-h-md-d59.json
var site_docs_ref_drm_api_drm_c_drm_headerfile_capi_native_drm_common_h_capi_native_drm_common_h_md_d59_namespaceObject = JSON.parse('{"id":"drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h","title":"native_drm_common.h","description":"概述","source":"@site/docs-ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h.md","sourceDirName":"drm-api/drm-c/drm-headerfile/capi-native-drm-common-h","slug":"/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"native_drm_common.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-drm-common-h"},"sidebar":"ref","previous":{"title":"Drm","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm"},"next":{"title":"native_drm_err.h","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h.md


const frontMatter = {
	title: 'native_drm_common.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-drm-common-h'
};
const contentTitle = 'native_drm_common.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "DRM_EventType",
  "id": "drm_eventtype",
  "level": 3
}, {
  "value": "DRM_ContentProtectionLevel",
  "id": "drm_contentprotectionlevel",
  "level": 3
}, {
  "value": "DRM_MediaKeyType",
  "id": "drm_mediakeytype",
  "level": 3
}, {
  "value": "DRM_MediaKeyRequestType",
  "id": "drm_mediakeyrequesttype",
  "level": 3
}, {
  "value": "DRM_OfflineMediaKeyStatus",
  "id": "drm_offlinemediakeystatus",
  "level": 3
}, {
  "value": "DRM_CertificateStatus",
  "id": "drm_certificatestatus",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "DRM_MediaKeySystemInfoCallback()",
  "id": "drm_mediakeysysteminfocallback",
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
        id: "native_drm_commonh",
        children: "native_drm_common.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义DRM数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/drm_framework/native_drm_common.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_drm.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
        children: "Drm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeyrequestinfo/capi-drm-drm-mediakeyrequestinfo",
              children: "DRM_MediaKeyRequestInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeyRequestInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥请求信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeyrequest/capi-drm-drm-mediakeyrequest",
              children: "DRM_MediaKeyRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeyRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-statistics/capi-drm-drm-statistics",
              children: "DRM_Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_Statistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem的度量信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-offlinemediakeyidarray/capi-drm-drm-offlinemediakeyidarray",
              children: "DRM_OfflineMediakeyIdArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_OfflineMediakeyIdArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥ID数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-keysinfo/capi-drm-drm-keysinfo",
              children: "DRM_KeysInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_KeysInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeystatus/capi-drm-drm-mediakeystatus",
              children: "DRM_MediaKeyStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeyStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-psshinfo/capi-drm-drm-psshinfo",
              children: "DRM_PsshInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_PsshInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM内容保护系统专用头（Protection System Specific Header）信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeysysteminfo/capi-drm-drm-mediakeysysteminfo",
              children: "DRM_MediaKeySystemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeySystemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密媒体内容的DRM信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeysystemdescription/capi-drm-drm-mediakeysystemdescription",
              children: "DRM_MediaKeySystemDescription"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeySystemDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称及其UUID的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysession/capi-drm-mediakeysession",
              children: "MediaKeySession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySession结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#drm_eventtype",
              children: "DRM_EventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_EventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drm_contentprotectionlevel",
              children: "DRM_ContentProtectionLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ContentProtectionLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容保护级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drm_mediakeytype",
              children: "DRM_MediaKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drm_mediakeyrequesttype",
              children: "DRM_MediaKeyRequestType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeyRequestType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥请求类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drm_offlinemediakeystatus",
              children: "DRM_OfflineMediaKeyStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_OfflineMediaKeyStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drm_certificatestatus",
              children: "DRM_CertificateStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_CertificateStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#drm_mediakeysysteminfocallback",
              children: "typedef void (*DRM_MediaKeySystemInfoCallback)(DRM_MediaKeySystemInfo *mediaKeySystemInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_MediaKeySystemInfoCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用为从媒体源获取DRM信息而设置的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MAX_MEDIA_KEY_REQUEST_OPTION_COUNT 16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥请求可选数据的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_REQUEST_OPTION_NAME_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥请求可选数据名称的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_REQUEST_OPTION_DATA_LEN 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥请求可选数据的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_INIT_DATA_LEN 2048"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥请求初始化数据的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MIMETYPE_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体mimetype的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_REQUEST_DATA_LEN 8192"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥请求数据的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_DEFAULT_URL_LEN 2048"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["URL最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_STATISTICS_COUNT 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["度量记录的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_STATISTICS_NAME_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["度量记录名称的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_STATISTICS_BUFFER_LEN 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["度量记录缓冲区的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_OFFLINE_MEDIA_KEY_ID_COUNT 512"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["离线媒体密钥标识的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_OFFLINE_MEDIA_KEY_ID_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["离线媒体密钥标识的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_KEY_INFO_COUNT 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥信息的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_KEY_ID_LEN 16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥标识的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_KEY_STATUS_VALUE_LEN 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥状态值的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_STATUS_COUNT 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥状态的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_STATUS_NAME_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥状态名称的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_STATUS_VALUE_LEN 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体密钥状态值的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_UUID_LEN 16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DRM解决方案的UUID长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_PSSH_DATA_LEN 2048"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PSSH（Protected System Specific Header）信息的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_PSSH_INFO_COUNT 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PSSH（Protected System Specific Header）信息的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_SYSTEM_NAME_LEN 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MediaKeySystem名称的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_MEDIA_KEY_SYSTEM_NUM 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MediaKeySystem的最大数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_eventtype",
      children: "DRM_EventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_EventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "EVENT_DRM_BASE = 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM基础事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_PROVISION_REQUIRED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备证书请求事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_KEY_REQUIRED = 202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥请求事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_KEY_EXPIRED = 203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥过期事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_VENDOR_DEFINED = 204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案自定义事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_EXPIRATION_UPDATE = 206"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥过期更新事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_contentprotectionlevel",
      children: "DRM_ContentProtectionLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_ContentProtectionLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容保护级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CONTENT_PROTECTION_LEVEL_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_PROTECTION_LEVEL_SW_CRYPTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软件安全级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_PROTECTION_LEVEL_HW_CRYPTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件安全级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_PROTECTION_LEVEL_ENHANCED_HW_CRYPTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件增强级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_PROTECTION_LEVEL_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大安全级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_mediakeytype",
      children: "DRM_MediaKeyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_MediaKeyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体密钥类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "MEDIA_KEY_TYPE_OFFLINE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_TYPE_ONLINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在线。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_mediakeyrequesttype",
      children: "DRM_MediaKeyRequestType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_MediaKeyRequestType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体密钥请求类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "MEDIA_KEY_REQUEST_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知请求类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_REQUEST_TYPE_INITIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_REQUEST_TYPE_RENEWAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "续订请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_REQUEST_TYPE_RELEASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_REQUEST_TYPE_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_KEY_REQUEST_TYPE_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新请求。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_offlinemediakeystatus",
      children: "DRM_OfflineMediaKeyStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_OfflineMediaKeyStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线媒体密钥状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
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
            children: "OFFLINE_MEDIA_KEY_STATUS_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFFLINE_MEDIA_KEY_STATUS_USABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFFLINE_MEDIA_KEY_STATUS_INACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_certificatestatus",
      children: "DRM_CertificateStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DRM_CertificateStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备DRM证书状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Drm.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CERT_STATUS_PROVISIONED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备已安装设备DRM证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CERT_STATUS_NOT_PROVISIONED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备未安装设备DRM证书或证书状态异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CERT_STATUS_EXPIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书过期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CERT_STATUS_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CERT_STATUS_UNAVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书不可用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drm_mediakeysysteminfocallback",
      children: "DRM_MediaKeySystemInfoCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*DRM_MediaKeySystemInfoCallback)(DRM_MediaKeySystemInfo *mediaKeySystemInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用为从媒体源获取DRM信息而设置的回调。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeysysteminfo/capi-drm-drm-mediakeysysteminfo",
              children: "DRM_MediaKeySystemInfo"
            }), " *mediaKeySystemInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从媒体源获取的DRM信息。"
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