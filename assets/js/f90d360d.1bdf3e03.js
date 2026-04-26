"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["325780"], {
426231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_drm_api_drm_c_drm_headerfile_capi_native_mediakeysystem_h_capi_native_mediakeysystem_h_md_f90_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-drm-api-drm-c-drm-headerfile-capi-native-mediakeysystem-h-capi-native-mediakeysystem-h-md-f90.json
var site_docs_ref_drm_api_drm_c_drm_headerfile_capi_native_mediakeysystem_h_capi_native_mediakeysystem_h_md_f90_namespaceObject = JSON.parse('{"id":"drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h/capi-native-mediakeysystem-h","title":"native_mediakeysystem.h","description":"概述","source":"@site/docs-ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h/capi-native-mediakeysystem-h.md","sourceDirName":"drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h","slug":"/drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h/capi-native-mediakeysystem-h","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h/capi-native-mediakeysystem-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"native_mediakeysystem.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysystem-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-mediakeysystem-h"},"sidebar":"ref","previous":{"title":"native_mediakeysession.h","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysession-h/capi-native-mediakeysession-h"},"next":{"title":"DRM_MediaKeyRequestInfo","permalink":"/harmonyos-docs-site/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeyrequestinfo/capi-drm-drm-mediakeyrequestinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysystem-h/capi-native-mediakeysystem-h.md


const frontMatter = {
	title: 'native_mediakeysystem.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysystem-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-mediakeysystem-h'
};
const contentTitle = 'native_mediakeysystem.h';

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
  "value": "MediaKeySystem_Callback()",
  "id": "mediakeysystem_callback",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_Callback()",
  "id": "oh_mediakeysystem_callback",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_SetCallback()",
  "id": "oh_mediakeysystem_setcallback",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetMediaKeySystems()",
  "id": "oh_mediakeysystem_getmediakeysystems",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_IsSupported()",
  "id": "oh_mediakeysystem_issupported",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_IsSupported2()",
  "id": "oh_mediakeysystem_issupported2",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_IsSupported3()",
  "id": "oh_mediakeysystem_issupported3",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_Create()",
  "id": "oh_mediakeysystem_create",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_SetConfigurationString()",
  "id": "oh_mediakeysystem_setconfigurationstring",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetConfigurationString()",
  "id": "oh_mediakeysystem_getconfigurationstring",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_SetConfigurationByteArray()",
  "id": "oh_mediakeysystem_setconfigurationbytearray",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetConfigurationByteArray()",
  "id": "oh_mediakeysystem_getconfigurationbytearray",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetStatistics()",
  "id": "oh_mediakeysystem_getstatistics",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetMaxContentProtectionLevel()",
  "id": "oh_mediakeysystem_getmaxcontentprotectionlevel",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_SetMediaKeySystemCallback()",
  "id": "oh_mediakeysystem_setmediakeysystemcallback",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_CreateMediaKeySession()",
  "id": "oh_mediakeysystem_createmediakeysession",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GenerateKeySystemRequest()",
  "id": "oh_mediakeysystem_generatekeysystemrequest",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_ProcessKeySystemResponse()",
  "id": "oh_mediakeysystem_processkeysystemresponse",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetOfflineMediaKeyIds()",
  "id": "oh_mediakeysystem_getofflinemediakeyids",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetOfflineMediaKeyStatus()",
  "id": "oh_mediakeysystem_getofflinemediakeystatus",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_ClearOfflineMediaKeys()",
  "id": "oh_mediakeysystem_clearofflinemediakeys",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_GetCertificateStatus()",
  "id": "oh_mediakeysystem_getcertificatestatus",
  "level": 3
}, {
  "value": "OH_MediaKeySystem_Destroy()",
  "id": "oh_mediakeysystem_destroy",
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
        id: "native_mediakeysystemh",
        children: "native_mediakeysystem.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Drm MediaKeySystem API。提供以下功能："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持特定的drm、创建媒体密钥会话、获取和设置配置、获取统计信息、获取内容保护级别、生成提供请求、处理提供响应、事件监听、获取内容防护级别、管理离线媒体密钥等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/drm_framework/native_mediakeysystem.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#mediakeysystem_callback",
              children: "typedef Drm_ErrCode (*MediaKeySystem_Callback)(DRM_EventType eventType, uint8_t *info, int32_t infoLen, char *extra)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem事件触发时将调用的回调，不返回MediaKeySystem实例，适用于单个MediaKeySystem场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_callback",
              children: "typedef Drm_ErrCode (*OH_MediaKeySystem_Callback)(MediaKeySystem *mediaKeySystem, DRM_EventType eventType, uint8_t *info, int32_t infoLen, char *extra)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaKeySystem_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem事件触发时将调用的回调，返回MediaKeySystem实例，适用于多个MediaKeySystem场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_setcallback",
              children: "Drm_ErrCode OH_MediaKeySystem_SetCallback(MediaKeySystem *mediaKeySystem, OH_MediaKeySystem_Callback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置MediaKeySystem事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getmediakeysystems",
              children: "Drm_ErrCode OH_MediaKeySystem_GetMediaKeySystems(DRM_MediaKeySystemDescription *descs, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备支持的DRM解决方案的名称和唯一标识的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_issupported",
              children: "bool OH_MediaKeySystem_IsSupported(const char *name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备是否支持对应的DRM解决方案。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_issupported2",
              children: "bool OH_MediaKeySystem_IsSupported2(const char *name, const char *mimeType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备是否支持对应的DRM解决方案名称及媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_issupported3",
              children: "bool OH_MediaKeySystem_IsSupported3(const char *name, const char *mimeType, DRM_ContentProtectionLevel contentProtectionLevel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备是否支持对应的DRM解决方案、媒体类型、内容保护级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_create",
              children: "Drm_ErrCode OH_MediaKeySystem_Create(const char *name, MediaKeySystem **mediaKeySystem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_setconfigurationstring",
              children: "Drm_ErrCode OH_MediaKeySystem_SetConfigurationString(MediaKeySystem *mediaKeySystem, const char *configName, const char *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字符串类型的配置属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getconfigurationstring",
              children: "Drm_ErrCode OH_MediaKeySystem_GetConfigurationString(MediaKeySystem *mediaKeySystem, const char *configName, char *value, int32_t valueLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取字符串类型配置属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_setconfigurationbytearray",
              children: "Drm_ErrCode OH_MediaKeySystem_SetConfigurationByteArray(MediaKeySystem *mediaKeySystem, const char *configName, uint8_t *value, int32_t valueLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字符数组类型的配置属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getconfigurationbytearray",
              children: "Drm_ErrCode OH_MediaKeySystem_GetConfigurationByteArray(MediaKeySystem *mediaKeySystem, const char *configName, uint8_t *value, int32_t *valueLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取字符数组类型配置属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getstatistics",
              children: "Drm_ErrCode OH_MediaKeySystem_GetStatistics(MediaKeySystem *mediaKeySystem, DRM_Statistics *statistics)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取度量记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getmaxcontentprotectionlevel",
              children: "Drm_ErrCode OH_MediaKeySystem_GetMaxContentProtectionLevel(MediaKeySystem *mediaKeySystem, DRM_ContentProtectionLevel *contentProtectionLevel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备支持的最大内容保护级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_setmediakeysystemcallback",
              children: "Drm_ErrCode OH_MediaKeySystem_SetMediaKeySystemCallback(MediaKeySystem *mediaKeySystem, MediaKeySystem_Callback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置MediaKeySystem事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_createmediakeysession",
              children: "Drm_ErrCode OH_MediaKeySystem_CreateMediaKeySession(MediaKeySystem *mediaKeySystem, DRM_ContentProtectionLevel *level, MediaKeySession **mediaKeySession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建MediaKeySession会话实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_generatekeysystemrequest",
              children: "Drm_ErrCode OH_MediaKeySystem_GenerateKeySystemRequest(MediaKeySystem *mediaKeySystem, uint8_t *request, int32_t *requestLen, char *defaultUrl, int32_t defaultUrlLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成设备DRM证书请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_processkeysystemresponse",
              children: "Drm_ErrCode OH_MediaKeySystem_ProcessKeySystemResponse(MediaKeySystem *mediaKeySystem, uint8_t *response, int32_t responseLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理设备DRM证书请求响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getofflinemediakeyids",
              children: "Drm_ErrCode OH_MediaKeySystem_GetOfflineMediaKeyIds(MediaKeySystem *mediaKeySystem, DRM_OfflineMediakeyIdArray *offlineMediaKeyIds)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取离线媒体密钥标识列表，媒体密钥标识用于对离线媒体密钥的管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getofflinemediakeystatus",
              children: "Drm_ErrCode OH_MediaKeySystem_GetOfflineMediaKeyStatus(MediaKeySystem *mediaKeySystem, uint8_t *offlineMediaKeyId, int32_t offlineMediaKeyIdLen, DRM_OfflineMediaKeyStatus *status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取离线媒体密钥状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_clearofflinemediakeys",
              children: "Drm_ErrCode OH_MediaKeySystem_ClearOfflineMediaKeys(MediaKeySystem *mediaKeySystem, uint8_t *offlineMediaKeyId, int32_t offlineMediaKeyIdLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按id清除离线媒体密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_getcertificatestatus",
              children: "Drm_ErrCode OH_MediaKeySystem_GetCertificateStatus(MediaKeySystem *mediaKeySystem, DRM_CertificateStatus *certStatus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备DRM证书状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_destroy",
              children: "Drm_ErrCode OH_MediaKeySystem_Destroy(MediaKeySystem *mediaKeySystem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁MediaKeySystem实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mediakeysystem_callback",
      children: "MediaKeySystem_Callback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef  Drm_ErrCode (*MediaKeySystem_Callback)(DRM_EventType eventType, uint8_t *info,int32_t infoLen, char *extra)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MediaKeySystem事件触发时将调用的回调，不返回MediaKeySystem实例，适用于单个MediaKeySystem场景。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_eventtype",
              children: "DRM_EventType"
            }), " eventType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t infoLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增量信息。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_callback",
      children: "OH_MediaKeySystem_Callback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef Drm_ErrCode (*OH_MediaKeySystem_Callback)(MediaKeySystem *mediaKeySystem, DRM_EventType eventType,uint8_t *info, int32_t infoLen, char *extra)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MediaKeySystem事件触发时将调用的回调，返回MediaKeySystem实例，适用于多个MediaKeySystem场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_eventtype",
              children: "DRM_EventType"
            }), " eventType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t infoLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增量信息。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_setcallback",
      children: "OH_MediaKeySystem_SetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_SetCallback(MediaKeySystem *mediaKeySystem, OH_MediaKeySystem_Callback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置MediaKeySystem事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediakeysystem_callback",
              children: "OH_MediaKeySystem_Callback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getmediakeysystems",
      children: "OH_MediaKeySystem_GetMediaKeySystems()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetMediaKeySystems(DRM_MediaKeySystemDescription *descs, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备支持的DRM解决方案的名称和唯一标识的列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeysystemdescription/capi-drm-drm-mediakeysystemdescription",
              children: "DRM_MediaKeySystemDescription"
            }), " *descs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称和唯一标识的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称和唯一标识的列表长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：可能原因：  1.输入参数descs为空指针或输入参数count为空指针。  2.输入参数descs长度不足。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_issupported",
      children: "OH_MediaKeySystem_IsSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_MediaKeySystem_IsSupported(const char *name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询设备是否支持对应的DRM解决方案。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持指定DRM解决方案。true表示支持，false表示不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_issupported2",
      children: "OH_MediaKeySystem_IsSupported2()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_MediaKeySystem_IsSupported2(const char *name, const char *mimeType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询设备是否支持对应的DRM解决方案名称及媒体类型。"
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
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型，支持的媒体类型取决于DRM解决方案，如：video/avc、video/hev。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持指定DRM解决方案及媒体类型。true表示支持，false表示不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_issupported3",
      children: "OH_MediaKeySystem_IsSupported3()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_MediaKeySystem_IsSupported3(const char *name, const char *mimeType,DRM_ContentProtectionLevel contentProtectionLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询设备是否支持对应的DRM解决方案、媒体类型、内容保护级别。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型，支持的媒体类型取决于DRM解决方案，如：video/avc、video/hev。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_contentprotectionlevel",
              children: "DRM_ContentProtectionLevel"
            }), " contentProtectionLevel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容保护级别。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持指定DRM解决方案，媒体类型以及内容保护级别。true表示支持，false表示不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_create",
      children: "OH_MediaKeySystem_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_Create(const char *name, MediaKeySystem **mediaKeySystem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建MediaKeySystem实例。"
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
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM解决方案名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " **mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：可能原因：  1.输入参数name为空指针或长度为0。  2.输入参数mediaKeySystem为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。  DRM_ERR_SERVICE_DIED：服务死亡。  DRM_ERR_MAX_SYSTEM_NUM_REACHED：已创建的MediaKeySystem数量达到最大限制(64个)。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_setconfigurationstring",
      children: "OH_MediaKeySystem_SetConfigurationString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_SetConfigurationString(MediaKeySystem *mediaKeySystem,const char *configName, const char *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字符串类型的配置属性。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *configName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型配置属性名，不能为空，具体支持的属性名由设备上DRM解决方案决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型配置属性值，不能为空，具体支持的属性值由设备上DRM解决方案决定。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，输入参数configName为空指针，或输入参数value为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getconfigurationstring",
      children: "OH_MediaKeySystem_GetConfigurationString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetConfigurationString(MediaKeySystem *mediaKeySystem,const char *configName, char *value, int32_t valueLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取字符串类型配置属性值。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *configName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型配置名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型配置值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t valueLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型配置值长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，输入参数configName为空指针，或输入参数value为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_setconfigurationbytearray",
      children: "OH_MediaKeySystem_SetConfigurationByteArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_SetConfigurationByteArray(MediaKeySystem *mediaKeySystem,const char *configName, uint8_t *value, int32_t valueLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字符数组类型的配置属性值。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *configName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性名，不能为空，具体支持的属性名由设备上DRM解决方案决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性值，不能为空，具体支持的属性值由设备上DRM解决方案决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t valueLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性值长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，输入参数configName为空指针，或输入参数value为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getconfigurationbytearray",
      children: "OH_MediaKeySystem_GetConfigurationByteArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetConfigurationByteArray(MediaKeySystem *mediaKeySystem,const char *configName, uint8_t *value, int32_t *valueLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取字符数组类型配置属性值。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *configName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性名称，不能为空，具体支持的属性名由设备上DRM解决方案决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *valueLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符数组类型配置属性长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，输入参数configName为空指针，输入参数value为空指针，或valueLen为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getstatistics",
      children: "OH_MediaKeySystem_GetStatistics()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetStatistics(MediaKeySystem *mediaKeySystem, DRM_Statistics *statistics)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取度量记录。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-statistics/capi-drm-drm-statistics",
              children: "DRM_Statistics"
            }), " *statistics"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "度量记录。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数statistics为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getmaxcontentprotectionlevel",
      children: "OH_MediaKeySystem_GetMaxContentProtectionLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetMaxContentProtectionLevel(MediaKeySystem *mediaKeySystem,DRM_ContentProtectionLevel *contentProtectionLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备支持的最大内容保护级别。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_contentprotectionlevel",
              children: "DRM_ContentProtectionLevel"
            }), " *contentProtectionLevel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容保护级别。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数contentProtectionLevel为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_setmediakeysystemcallback",
      children: "OH_MediaKeySystem_SetMediaKeySystemCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_SetMediaKeySystemCallback(MediaKeySystem *mediaKeySystem,MediaKeySystem_Callback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置MediaKeySystem事件回调。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#mediakeysystem_callback",
              children: "MediaKeySystem_Callback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_createmediakeysession",
      children: "OH_MediaKeySystem_CreateMediaKeySession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_CreateMediaKeySession(MediaKeySystem *mediaKeySystem,DRM_ContentProtectionLevel *level, MediaKeySession **mediaKeySession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建MediaKeySession会话实例。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_contentprotectionlevel",
              children: "DRM_ContentProtectionLevel"
            }), " *level"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容保护级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysession/capi-drm-mediakeysession",
              children: "MediaKeySession"
            }), " **mediaKeySession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySession实例。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数level超出合理范围，或mediaKeySession为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。  DRM_ERR_SERVICE_DIED：服务死亡。  DRM_ERR_MAX_SESSION_NUM_REACHED：当前MediaKeySystem已创建的MediaKeySession数量达到最大限制(64个)。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_generatekeysystemrequest",
      children: "OH_MediaKeySystem_GenerateKeySystemRequest()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GenerateKeySystemRequest(MediaKeySystem *mediaKeySystem, uint8_t *request,int32_t *requestLen, char *defaultUrl, int32_t defaultUrlLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成设备DRM证书请求。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *requestLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书请求的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *defaultUrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书服务的URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t defaultUrlLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书服务的URL长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或其它指针类型输入参数为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_processkeysystemresponse",
      children: "OH_MediaKeySystem_ProcessKeySystemResponse()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_ProcessKeySystemResponse(MediaKeySystem *mediaKeySystem,uint8_t *response, int32_t responseLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理设备DRM证书请求响应。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书请求响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t responseLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书请求响应长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数response为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getofflinemediakeyids",
      children: "OH_MediaKeySystem_GetOfflineMediaKeyIds()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetOfflineMediaKeyIds(MediaKeySystem *mediaKeySystem,DRM_OfflineMediakeyIdArray *offlineMediaKeyIds)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取离线媒体密钥标识列表，媒体密钥标识用于对离线媒体密钥的管理。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-offlinemediakeyidarray/capi-drm-drm-offlinemediakeyidarray",
              children: "DRM_OfflineMediakeyIdArray"
            }), " *offlineMediaKeyIds"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥的媒体密钥标识列表。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_NO_MEMORY：内存不足，内存分配失败。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数offlineMediaKeyIds为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getofflinemediakeystatus",
      children: "OH_MediaKeySystem_GetOfflineMediaKeyStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetOfflineMediaKeyStatus(MediaKeySystem *mediaKeySystem,uint8_t *offlineMediaKeyId, int32_t offlineMediaKeyIdLen, DRM_OfflineMediaKeyStatus *status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取离线媒体密钥状态。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *offlineMediaKeyId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t offlineMediaKeyIdLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥标识长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_offlinemediakeystatus",
              children: "DRM_OfflineMediaKeyStatus"
            }), " *status"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体密钥状态。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或其它指针类型输入参数为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_clearofflinemediakeys",
      children: "OH_MediaKeySystem_ClearOfflineMediaKeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_ClearOfflineMediaKeys(MediaKeySystem *mediaKeySystem,uint8_t *offlineMediaKeyId, int32_t offlineMediaKeyIdLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按id清除离线媒体密钥。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *offlineMediaKeyId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t offlineMediaKeyIdLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线媒体密钥标识长度。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数offlineMediaKeyId为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_getcertificatestatus",
      children: "OH_MediaKeySystem_GetCertificateStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_GetCertificateStatus(MediaKeySystem *mediaKeySystem,DRM_CertificateStatus *certStatus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备DRM证书状态。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_certificatestatus",
              children: "DRM_CertificateStatus"
            }), " *certStatus"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备DRM证书状态值。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效，或输入参数certStatus为空指针。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediakeysystem_destroy",
      children: "OH_MediaKeySystem_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drm_ErrCode OH_MediaKeySystem_Destroy(MediaKeySystem *mediaKeySystem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁MediaKeySystem实例。"
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysystem/capi-drm-mediakeysystem",
              children: "MediaKeySystem"
            }), " *mediaKeySystem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySystem实例。"
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
              href: "/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-err-h/capi-native-drm-err-h#drm_errcode",
              children: "Drm_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM_ERR_OK：执行成功。  DRM_ERR_INVALID_VAL：输入参数mediaKeySystem为空指针或无效。  DRM_ERR_UNKNOWN：发生内部错误，请查看日志详细信息。"
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