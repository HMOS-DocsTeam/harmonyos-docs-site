"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["733907"], {
840109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_drm_kit_drm_arkts_dev_guide_drm_arkts_dev_guide_md_a74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-drm-kit-drm-arkts-dev-guide-drm-arkts-dev-guide-md-a74.json
var site_docs_drm_kit_drm_arkts_dev_guide_drm_arkts_dev_guide_md_a74_namespaceObject = JSON.parse('{"id":"drm-kit/drm-arkts-dev-guide/drm-arkts-dev-guide","title":"数字版权保护(ArkTS)","description":"开发者可以调用DRM Kit的ArkTS接口实现DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密等数字版权保护功能。","source":"@site/docs/drm-kit/drm-arkts-dev-guide/drm-arkts-dev-guide.md","sourceDirName":"drm-kit/drm-arkts-dev-guide","slug":"/drm-kit/drm-arkts-dev-guide/","permalink":"/harmonyos-docs-site/drm-kit/drm-arkts-dev-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数字版权保护(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-arkts-dev-guide","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DRM Kit 简介","permalink":"/harmonyos-docs-site/drm-kit/drm-overview/"},"next":{"title":"数字版权保护(C/C++)","permalink":"/harmonyos-docs-site/drm-kit/drm-c-dev-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/drm-kit/drm-arkts-dev-guide/drm-arkts-dev-guide.md


const frontMatter = {
	title: '数字版权保护(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-arkts-dev-guide',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '数字版权保护(ArkTS)';

const assets = {

};



const toc = [{
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数字版权保护arkts",
        children: "数字版权保护(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用DRM Kit的ArkTS接口实现DRM证书管理、DRM许可证管理、DRM节目授权、DRM节目解密等数字版权保护功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM Kit提供MediaKeySystem实现DRM证书管理、DRM许可证管理功能，并管理MediaKeySession实例；MediaKeySession实现DRM节目授权，并可支持Media Kit或Media Kit/AVCodec Kit实现DRM节目解密以实现DRM节目播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm/arkts-apis-drm",
        children: "@ohos.multimedia.drm(数字版权保护)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入DRM Kit接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { drm } from '@kit.DrmKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入BusinessError模块抛出Drm Kit接口的错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-f/arkts-apis-drm-f#drmgetmediakeysystems12",
            children: "getMediaKeySystems"
          }), "，获取设备支持的DRM解决方案名称和唯一标识的列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let description: drm.MediaKeySystemDescription[] = drm.getMediaKeySystems();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果获取结果数组为空，说明该设备中不存在支持的DRM解决方案。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-f/arkts-apis-drm-f#drmismediakeysystemsupported",
            children: "isMediaKeySystemSupported"
          }), "，查询设备是否支持对应DRM解决方案名称、媒体类型、安全保护级别的DRM解决方案。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let isSupported: boolean = drm.isMediaKeySystemSupported(\"com.wiseplay.drm\", \"video/mp4\", drm.ContentProtectionLevel.CONTENT_PROTECTION_LEVEL_SW_CRYPTO);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果查询结果为false，说明该设备不支持对应的DRM解决方案。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-f/arkts-apis-drm-f#drmcreatemediakeysystem",
            children: "createMediaKeySystem"
          }), "，创建MediaKeySystem实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let mediaKeySystem: drm.MediaKeySystem = drm.createMediaKeySystem(\"com.wiseplay.drm\");\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果创建失败则返回undefined，说明该设备不支持该DRM解决方案。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#onkeysystemrequired",
            children: "on('keySystemRequired')"
          }), "，设置MediaKeySystem状态监听事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册keySystemRequired回调函数监听设备DRM证书请求事件。该事件在需要设备DRM证书时触发，此时建议完成设备DRM证书请求与处理流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mediaKeySystem.on('keySystemRequired', (eventInfo: drm.EventInfo) => {\n  console.info('keySystemRequired' + 'extra:' + eventInfo.extraInfo + ' data:' + eventInfo.info);\n    // 设备DRM证书请求与处理。\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#getcertificatestatus",
            children: "getCertificateStatus"
          }), "，获取设备DRM证书状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let certificateStatus: drm.CertificateStatus = mediaKeySystem.getCertificateStatus();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#generatekeysystemrequest",
            children: "generateKeySystemRequest"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#processkeysystemresponse",
            children: "processKeySystemResponse"
          }), "，生成设备DRM证书请求与处理设备DRM证书响应。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果设备DRM证书状态不是drm.CertificateStatus.CERT_STATUS_PROVISIONED，可以生成设备DRM证书请求，处理设备DRM证书响应。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if(certificateStatus != drm.CertificateStatus.CERT_STATUS_PROVISIONED) {\n    mediaKeySystem.generateKeySystemRequest().then(async (drmRequest: drm.ProvisionRequest) => {\n        console.info(\"generateKeySystemRequest success\", drmRequest.data, drmRequest.defaultURL);\n    }).catch((err:BusinessError) =>{\n        console.error(\"generateKeySystemRequest err end\", err.code);\n    });\n} else {\n    console.info(\"The certificate already exists.\");\n}\n// 将设备DRM证书请求返回的drmRequest.data通过网络请求发送给DRM证书服务获取设备DRM证书响应，并处理。\nlet provisionResponseByte = new Uint8Array([0x00, 0x00, 0x00, 0x00]); // 设备DRM证书响应。\nmediaKeySystem.processKeySystemResponse(provisionResponseByte).then(() => {\n    console.info(\"processKeySystemResponse success\");\n}).catch((err:BusinessError) =>{\n    console.error(\"processKeySystemResponse err end\", err.code);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#createmediakeysession",
            children: "createMediaKeySession"
          }), "，创建MediaKeySession实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建该DRM解决方案默认内容保护级别的MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let mediaKeySession: drm.MediaKeySession = mediaKeySystem.createMediaKeySession();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置MediaKeySession状态监听事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听MediaKeySession实例的事件，包括媒体密钥请求事件、媒体密钥过期事件、媒体密钥有效期更新事件、媒体密钥变换事件等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#onkeyrequired",
                children: "on('keyRequired')"
              }), "接口监听媒体密钥请求事件，此时建议完成媒体密钥请求与处理流程。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mediaKeySession.on('keyRequired', (eventInfo: drm.EventInfo) => {\n  console.info('keyRequired' + 'info:' + eventInfo.info + ' extraInfo:' + eventInfo.extraInfo);\n    // 媒体密钥请求与处理。\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#onkeyexpired",
                children: "on('keyExpired')"
              }), "接口监听媒体密钥过期事件。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mediaKeySession.on('keyExpired', (eventInfo: drm.EventInfo) => {\n  console.info('keyExpired' + 'info:' + eventInfo.info + ' extraInfo:' + eventInfo.extraInfo);\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#onexpirationupdate",
                children: "on('expirationUpdate')"
              }), "接口监听媒体密钥有效期更新事件。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mediaKeySession.on('expirationUpdate', (eventInfo: drm.EventInfo) => {\n  console.info('expirationUpdate' + 'info:' + eventInfo.info + ' extraInfo:' + eventInfo.extraInfo);\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#onkeyschange",
                children: "on('keysChange')"
              }), "接口监听媒体密钥变换事件。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mediaKeySession.on('keysChange', (keyInfo : drm.KeysInfo[], newKeyAvailable:boolean) => {\n    for(let i = 0; i < keyInfo.length; i++){\n        console.info('keysChange' + 'info:' + keyInfo[i].keyId + ' extraInfo:' + keyInfo[i].value);\n    }\n});\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#requiresecuredecodermodule",
            children: "requireSecureDecoderModule"
          }), "，查询是否需要安全解码。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let status: boolean = mediaKeySession.requireSecureDecoderModule(\"video/avc\");\n} catch (err) {\n  let error = err as BusinessError;\n  console.error(`requireSecureDecoderModule ERROR: ${error}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#generatemediakeyrequest",
            children: "generateMediaKeyRequest"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#processmediakeyresponse",
            children: "processMediaKeyResponse"
          }), "，生成媒体密钥请求与处理媒体密钥响应。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到DRM节目中的DRM信息时，可以生成媒体密钥请求，处理媒体密钥响应，以请求许可证完成DRM节目授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据DRM解决方案要求，基于DRM信息中的pssh生成initData。\nlet initData = new Uint8Array([0x00, 0x00, 0x00, 0x00]);\n// 根据DRM解决方案要求设置可选数据的值。\nlet optionalData:drm.OptionsData[] = [{\n    name: \"optionalDataName\",\n    value: \"optionalDataValue\"\n}];\n// 在线媒体密钥请求和响应。\nmediaKeySession.generateMediaKeyRequest(\"video/mp4\", initData, drm.MediaKeyType.MEDIA_KEY_TYPE_ONLINE, optionalData).then(async (licenseRequest: drm.MediaKeyRequest) => {\n   console.info(\"generateMediaKeyRequest success\", licenseRequest.mediaKeyRequestType, licenseRequest.data, licenseRequest.defaultURL);\n   // 将媒体密钥请求返回的licenseRequest.data通过网络请求发送给DRM服务获取媒体密钥响应，并处理。\n   let licenseResponse = new Uint8Array([0x00, 0x00, 0x00, 0x00]); // 媒体密钥响应。\n   mediaKeySession.processMediaKeyResponse(licenseResponse).then((mediaKeyId: Uint8Array) => {\n     console.info(\"processMediaKeyResponse success\");\n   }).catch((err:BusinessError) =>{\n     console.error(\"processMediaKeyResponse err end\", err.code);\n  });\n}).catch((err:BusinessError) =>{\n  console.error(\"generateMediaKeyRequest err end\", err.code);\n});\n// 离线媒体密钥请求和响应。\nlet offlineMediaKeyId: Uint8Array;\nmediaKeySession.generateMediaKeyRequest(\"video/mp4\", initData, drm.MediaKeyType.MEDIA_KEY_TYPE_OFFLINE, optionalData).then((licenseRequest: drm.MediaKeyRequest) => {\n   console.info(\"generateMediaKeyRequest success\", licenseRequest.mediaKeyRequestType, licenseRequest.data, licenseRequest.defaultURL);\n   // 将媒体密钥请求返回的licenseRequest.data通过网络请求发送给DRM服务获取媒体密钥响应，并处理。\n   let licenseResponse = new Uint8Array([0x00, 0x00, 0x00, 0x00]); // 媒体密钥响应。\n   mediaKeySession.processMediaKeyResponse(licenseResponse).then((mediaKeyId: Uint8Array) => {\n     offlineMediaKeyId = new Uint8Array(mediaKeyId);\n     console.info(\"processMediaKeyResponse success\");\n   }).catch((err:BusinessError) =>{\n     console.error(\"processMediaKeyResponse err end\", err.code);\n  });\n}).catch((err:BusinessError) =>{\n  console.error(\"generateMediaKeyRequest err end\", err.code);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#restoreofflinemediakeys",
            children: "restoreOfflineMediaKey"
          }), "，恢复离线媒体密钥。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mediaKeySession.restoreOfflineMediaKeys(offlineMediaKeyId).then(() => {\n  console.info(\"restoreOfflineMediaKeys success.\");\n}).catch((err: BusinessError) => {\n  console.error(`restoreOfflineMediaKeys: ERROR: ${err}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysession/arkts-apis-drm-mediakeysession#checkmediakeystatus",
            children: "checkMediaKeyStatus"
          }), "，检查媒体密钥状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let mediaKeyStatus: drm.MediaKeyStatus[]\ntry {\n  mediaKeyStatus = mediaKeySession.checkMediaKeyStatus()\n} catch (err) {\n  let error = err as BusinessError;\n  console.error(`checkMediaKeyStatus: ERROR: ${error}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#getofflinemediakeyids",
            children: "getOfflineMediaKeyIds"
          }), "获取离线媒体密钥标识列表，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#getofflinemediakeystatus",
            children: "getOfflineMediaKeyStatus"
          }), "获取离线媒体密钥状态，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-arkts/js-apis-drm/arkts-apis-drm-mediakeysystem/arkts-apis-drm-mediakeysystem#clearofflinemediakeys",
            children: "clearOfflineMediaKeys"
          }), "删除离线媒体密钥。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体密钥标识用于对离线媒体密钥的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let offlineMediaKeyIds: Uint8Array[] = mediaKeySystem.getOfflineMediaKeyIds();\ntry {\n  let offlineMediaKeyStatus: drm.OfflineMediaKeyStatus = mediaKeySystem.getOfflineMediaKeyStatus(offlineMediaKeyIds[0]);\n} catch (err) {\n  let error = err as BusinessError;\n  console.error(`getOfflineMediaKeyStatus ERROR: ${error}`);\n}\ntry {\n  mediaKeySystem.clearOfflineMediaKeys(offlineMediaKeyIds[0]);\n} catch (err) {\n  let error = err as BusinessError;\n  console.error(`clearOfflineMediaKeys ERROR: ${error}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成加密媒体解密，MediaKeySession实例不再使用时，销毁MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MediaKeySession实例使用完需要进行资源释放。\nmediaKeySession.destroy();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁MediaKeySystem实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成DRM功能使用，MediaKeySystem实例不再使用，销毁MediaKeySystem实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MediaKeySystem实例使用完需要进行资源释放。\nmediaKeySystem.destroy();\n"
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