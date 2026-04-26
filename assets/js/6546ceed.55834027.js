"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["576226"], {
80264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_drm_kit_drm_c_dev_guide_drm_c_dev_guide_md_654_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-drm-kit-drm-c-dev-guide-drm-c-dev-guide-md-654.json
var site_docs_drm_kit_drm_c_dev_guide_drm_c_dev_guide_md_654_namespaceObject = JSON.parse('{"id":"drm-kit/drm-c-dev-guide/drm-c-dev-guide","title":"数字版权保护(C/C++)","description":"功能介绍","source":"@site/docs/drm-kit/drm-c-dev-guide/drm-c-dev-guide.md","sourceDirName":"drm-kit/drm-c-dev-guide","slug":"/drm-kit/drm-c-dev-guide/","permalink":"/harmonyos-docs-site/drm-kit/drm-c-dev-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"数字版权保护(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-c-dev-guide","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字版权保护(ArkTS)","permalink":"/harmonyos-docs-site/drm-kit/drm-arkts-dev-guide/"},"next":{"title":"基于AVPlayer播放DRM节目(ArkTS)","permalink":"/harmonyos-docs-site/drm-kit/drm-avplayer-arkts-integration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/drm-kit/drm-c-dev-guide/drm-c-dev-guide.md


const frontMatter = {
	title: '数字版权保护(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-c-dev-guide',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '数字版权保护(C/C++)';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数字版权保护cc",
        children: "数字版权保护(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用DRM Kit的C/C++接口实现DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密等数字版权保护功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM Kit提供MediaKeySystem实现DRM证书管理、DRM许可证管理功能，并管理MediaKeySession实例；MediaKeySession实现DRM节目授权，并可支持Media Kit或AVCodec Kit实现DRM节目解密以实现DRM节目播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
        children: "Drm"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入DRM Kit接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"multimedia/drm_framework/native_drm_common.h\"\n#include \"multimedia/drm_framework/native_drm_err.h\"\n#include \"multimedia/drm_framework/native_mediakeysession.h\"\n#include \"multimedia/drm_framework/native_mediakeysystem.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(PUBLIC libnative_drm.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备支持的DRM解决方案名称和唯一标识的列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t count = 3; // count是当前设备实际支持的DRM插件的个数，用户根据实际情况设置。\nDRM_MediaKeySystemDescription descriptions[3];\nmemset(descriptions, 0, sizeof(descriptions));\nDrm_ErrCode ret = OH_MediaKeySystem_GetMediaKeySystems(descriptions, &count);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GetMediaKeySystems failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）查询设备是否支持对应DRM解决方案名称、媒体类型、安全保护级别的DRM解决方案。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool isSupported = OH_MediaKeySystem_IsSupported3(\"com.wiseplay.drm\", \"video/mp4\", CONTENT_PROTECTION_LEVEL_SW_CRYPTO);\nif (isSupported != true) {\n    printf(\"The device does not support the content protection level.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建MediaKeySystem实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaKeySystem *mediaKeySystem = nullptr;\nret = OH_MediaKeySystem_Create(\"com.wiseplay.drm\", &mediaKeySystem);\nif (ret != DRM_ERR_OK || mediaKeySystem == nullptr) {\n    printf(\"OH_MediaKeySystem_Create failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置MediaKeySystem事件监听回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static Drm_ErrCode SystemCallBackWithObj(MediaKeySystem *mediaKeySystem, DRM_EventType eventType,\n    uint8_t *info, int32_t infoLen, char *extra)\n{\n    printf(\"SystemCallBackWithObj enter\");\n    if (eventType == EVENT_PROVISION_REQUIRED) {\n        // 设备DRM证书请求和处理。\n    }\n    return DRM_ERR_OK;\n}\n\nret = OH_MediaKeySystem_SetCallback(mediaKeySystem, SystemCallBackWithObj);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_SetCallback failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）获取设备DRM证书状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DRM_CertificateStatus certStatus = CERT_STATUS_INVALID;\n// 检查设备DRM证书状态。\nret = OH_MediaKeySystem_GetCertificateStatus(mediaKeySystem, &certStatus);\nif (ret == DRM_ERR_OK && certStatus != CERT_STATUS_PROVISIONED) {\n    // 设备DRM证书请求和处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）生成设备DRM证书请求与处理设备DRM证书响应。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define MAX_DRM_PROVISION_BUF_SIZE 24576 // 24576: (2 * 12 * 1024)\nunsigned char request[MAX_DRM_PROVISION_BUF_SIZE] = { 0x00 };  // 设备DRM证书request最大长度为MAX_DRM_PROVISION_BUF_SIZE，按实际大小申请。\nint32_t requestLen = MAX_DRM_PROVISION_BUF_SIZE;\n// DRM服务URL的最大长度为2048。\nchar defaultUrl[2048] = { 0x00 };\nint32_t defaultUrlLen = 2048;\nret = OH_MediaKeySystem_GenerateKeySystemRequest(mediaKeySystem, request, &requestLen, defaultUrl,\n    defaultUrlLen);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GenerateKeySystemRequest failed.\");\n}\n/*\n  应用通过网络请求，将设备DRM证书请求信息传到DRM服务获取设备DRM证书请求响应keySystemResponse，\n  再将设备DRM证书请求响应设置到设备上，请根据实际的数据和长度传入。\n */\nunsigned char keySystemResponse[MAX_DRM_PROVISION_BUF_SIZE] = {0x00};\nret = OH_MediaKeySystem_ProcessKeySystemResponse(mediaKeySystem, keySystemResponse, sizeof(keySystemResponse));\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_ProcessKeySystemResponse failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）获取设备支持的最大内容保护级别。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DRM_ContentProtectionLevel maxContentProtectionLevel = CONTENT_PROTECTION_LEVEL_UNKNOWN;\nret = OH_MediaKeySystem_GetMaxContentProtectionLevel(mediaKeySystem, &maxContentProtectionLevel);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GetMaxContentProtectionLevel failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaKeySession *mediaKeySession = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_SW_CRYPTO; // 依据设备支持的内容保护级别设置。\nret = OH_MediaKeySystem_CreateMediaKeySession(mediaKeySystem, &contentProtectionLevel, &mediaKeySession);\nif (ret != DRM_ERR_OK || mediaKeySession == nullptr) {\n    printf(\"OH_MediaKeySystem_CreateMediaKeySession failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置MediaKeySession事件监听回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static Drm_ErrCode SessionEventCallBackWithObj(MediaKeySession *mediaKeySession, DRM_EventType eventType, uint8_t *info, int32_t infoLen, char *extra)\n{\n    if (eventType == EVENT_KEY_REQUIRED) {\n        // 媒体密钥请求与处理。\n    }\n    return DRM_ERR_OK;\n}\n\nstatic Drm_ErrCode SessionKeyChangeCallBackWithObj(MediaKeySession *mediaKeySession, DRM_KeysInfo *keysInfo, bool hasNewGoodKeys)\n{\n    return DRM_ERR_OK;\n}\n\nOH_MediaKeySession_Callback sessionCallback = { SessionEventCallBackWithObj, SessionKeyChangeCallBackWithObj };\nret = OH_MediaKeySession_SetCallback(mediaKeySession, &sessionCallback);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_SetCallback failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）查询是否需要安全解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool requireSecureDecoder;\nret = OH_MediaKeySession_RequireSecureDecoderModule(mediaKeySession, \"video/avc\", &requireSecureDecoder);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_RequireSecureDecoderModule failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成媒体密钥请求与处理媒体密钥响应，以请求许可证完成DRM节目授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE 24576 // 24576: (2 * 12 * 1024)\nDRM_MediaKeyRequest mediaKeyRequest;\nDRM_MediaKeyRequestInfo info;\n// initData对应码流中的pssh数据，请按实际数据填入。\nunsigned char initData[512] = {0x00};\nmemset(&info, 0, sizeof(DRM_MediaKeyRequestInfo));\ninfo.initDataLen = sizeof(initData);\ninfo.type = MEDIA_KEY_TYPE_ONLINE; // MEDIA_KEY_TYPE_ONLINE: 在线媒体密钥请求类型; MEDIA_KEY_TYPE_OFFLINE: 离线媒体密钥请求类型。\nmemcpy(info.mimeType, (char *)\"video/mp4\", sizeof(\"video/mp4\"));\nmemcpy(info.initData, initData, sizeof(initData));\nmemcpy(info.optionName[0], (char *)\"optionalDataName\", sizeof(\"optionalDataName\"));\nmemcpy(info.optionData[0], (char *)\"optionalDataValue\", sizeof(\"optionalDataValue\"));\ninfo.optionsCount = 1;\nret = OH_MediaKeySession_GenerateMediaKeyRequest(mediaKeySession, &info, &mediaKeyRequest);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_GenerateMediaKeyRequest failed.\");\n}\n/*\n  应用通过网络请求DRM服务，获取媒体密钥响应mediaKeyResponse，将响应传到OH_MediaKeySession_ProcessMediaKeyResponse，\n  若是离线媒体密钥响应处理，则返回离线媒体密钥标识mediaKeyId，请根据实际的数据和长度传入。\n */\nunsigned char mediaKeyId[128] = {0x00};\nint32_t mediaKeyIdLen = 128;\n// 媒体密钥响应长度最大为MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE，请按实际数据输入。\nunsigned char mediaKeyResponse[MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE] = {0x00};\nint32_t mediaKeyResponseLen = MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE;\nret = OH_MediaKeySession_ProcessMediaKeyResponse(mediaKeySession, mediaKeyResponse,\n    mediaKeyResponseLen, mediaKeyId, &mediaKeyIdLen);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_ProcessMediaKeyResponse failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）恢复离线媒体密钥。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将指定媒体密钥标识的媒体密钥加载到当前会话。\nret = OH_MediaKeySession_RestoreOfflineMediaKeys(mediaKeySession, mediaKeyId, mediaKeyIdLen);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_RestoreOfflineMediaKeys failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）检查媒体密钥状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DRM_MediaKeyStatus mediaKeyStatus;\nret = OH_MediaKeySession_CheckMediaKeyStatus(mediaKeySession, &mediaKeyStatus);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_CheckMediaKeyStatus failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）获取离线媒体密钥标识列表、获取离线媒体密钥状态与清除离线媒体密钥。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DRM_OfflineMediakeyIdArray offlineMediaKeyIds;\nret = OH_MediaKeySystem_GetOfflineMediaKeyIds(mediaKeySystem, &offlineMediaKeyIds);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GetOfflineMediaKeyIds failed.\");\n}\nDRM_OfflineMediaKeyStatus OfflineMediaKeyStatus = OFFLINE_MEDIA_KEY_STATUS_UNKNOWN;\nret = OH_MediaKeySystem_GetOfflineMediaKeyStatus(mediaKeySystem, offlineMediaKeyIds.ids[0], offlineMediaKeyIds.idsLen[0], &OfflineMediaKeyStatus);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GetOfflineMediaKeyStatus failed.\");\n}\nret = OH_MediaKeySystem_ClearOfflineMediaKeys(mediaKeySystem, offlineMediaKeyIds.ids[0], offlineMediaKeyIds.idsLen[0]);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_ClearOfflineMediaKeys failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_MediaKeySession_Destroy(mediaKeySession);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_Destroy failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁MediaKeySystem实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_MediaKeySystem_Destroy(mediaKeySystem);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_Destroy failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n"]
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