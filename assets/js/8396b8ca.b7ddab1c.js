"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["58572"], {
270756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_drm_kit_drm_avcodec_integration_drm_avcodec_integration_md_839_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-drm-kit-drm-avcodec-integration-drm-avcodec-integration-md-839.json
var site_docs_drm_kit_drm_avcodec_integration_drm_avcodec_integration_md_839_namespaceObject = JSON.parse('{"id":"drm-kit/drm-avcodec-integration/drm-avcodec-integration","title":"基于AVCodec播放DRM节目(C/C++)","description":"功能介绍","source":"@site/docs/drm-kit/drm-avcodec-integration/drm-avcodec-integration.md","sourceDirName":"drm-kit/drm-avcodec-integration","slug":"/drm-kit/drm-avcodec-integration/","permalink":"/harmonyos-docs-site/drm-kit/drm-avcodec-integration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"基于AVCodec播放DRM节目(C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-avcodec-integration","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于AVPlayer播放DRM节目(ArkTS)","permalink":"/harmonyos-docs-site/drm-kit/drm-avplayer-arkts-integration/"},"next":{"title":"Image Kit简介","permalink":"/harmonyos-docs-site/image-kit/image-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/drm-kit/drm-avcodec-integration/drm-avcodec-integration.md


const frontMatter = {
	title: '基于AVCodec播放DRM节目(C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-avcodec-integration',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '基于AVCodec播放DRM节目(C/C++)';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
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
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "基于avcodec播放drm节目cc",
        children: "基于AVCodec播放DRM节目(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用DRM Kit的Native API，完成DRM节目播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的解密能力如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音频解密类型"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "视频解密类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC(H.264)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC(H.264)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC(H.265)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在创建DRM之前，需获取到DRM信息(参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "媒体数据解析"
      }), "开发步骤第4步)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
        children: "Drm"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成DRM的全流程，包括：获取设备支持的DRM解决方案的名称和唯一标识的列表、创建MediaKeySystem、创建MediaKeySession、生成媒体密钥请求、处理媒体密钥响应、获取是否需要安全视频解码以及销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应按一定顺序调用方法，执行对应操作，否则系统可能会抛出异常或生成其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_drm.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986879)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由调用者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
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
          children: "获取设备支持的DRM解决方案名称和唯一标识的列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t count = 3; // count是当前设备实际支持的DRM插件的个数，用户根据实际情况设置。\nDRM_MediaKeySystemDescription descriptions[3];\nmemset(descriptions, 0, sizeof(descriptions));\nDrm_ErrCode ret = OH_MediaKeySystem_GetMediaKeySystems(descriptions, &count);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySystem_GetMediaKeySystems failed.\");\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取到设备支持的DRM解决方案的名称和唯一标识的列表后，与DRM信息做匹配，创建对应的DRM解决方案。DRM信息可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "媒体数据解析"
          }), "开发步骤第4步获取，"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或者直接解析媒体协议或媒体数据得到DRM解决方案唯一标识及pssh数据以生成DRM信息。"
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
          children: "创建MediaKeySession实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaKeySession *mediaKeySession = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_SW_CRYPTO; // 依据设备支持的内容保护级别设置。\nret = OH_MediaKeySystem_CreateMediaKeySession(mediaKeySystem, &contentProtectionLevel, &mediaKeySession);\nif (ret != DRM_ERR_OK || mediaKeySession == nullptr) {\n    printf(\"OH_MediaKeySystem_CreateMediaKeySession failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询是否需要安全解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool requireSecureDecoder;\nret = OH_MediaKeySession_RequireSecureDecoderModule(mediaKeySession, \"video/avc\", &requireSecureDecoder);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_RequireSecureDecoderModule failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成媒体密钥请求与处理媒体密钥响应。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE 24576 // 24576: (2 * 12 * 1024)\nDRM_MediaKeyRequest mediaKeyRequest;\nDRM_MediaKeyRequestInfo info;\n// initData对应码流中的pssh数据，请按实际数据填入。\nunsigned char initData[512] = {0x00};\nmemset(&info, 0, sizeof(DRM_MediaKeyRequestInfo));\ninfo.initDataLen = sizeof(initData);\ninfo.type = MEDIA_KEY_TYPE_ONLINE; // MEDIA_KEY_TYPE_ONLINE: 在线媒体密钥请求类型; MEDIA_KEY_TYPE_OFFLINE: 离线媒体密钥请求类型。\nif (sizeof(\"video/mp4\") <= sizeof(info.mimeType)) {\nmemcpy(info.mimeType, \"video/mp4\", sizeof(\"video/mp4\"));\n}\nif (info.initDataLen <= sizeof(info.initData)) {\nmemcpy(info.initData, initData, info.initDataLen);\n}\nif (sizeof(\"optionalDataName\") <= sizeof(info.optionName[0])) {\nmemcpy(info.optionName[0], \"optionalDataName\", sizeof(\"optionalDataName\"));\n}\n\nif (sizeof(\"optionalDataValue\") <= sizeof(info.optionData[0])) {\nmemcpy(info.optionData[0], \"optionalDataValue\", sizeof(\"optionalDataValue\"));\n}\ninfo.optionsCount = 1;\nret = OH_MediaKeySession_GenerateMediaKeyRequest(mediaKeySession, &info, &mediaKeyRequest);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_GenerateMediaKeyRequest failed.\");\n}\n/*\n 应用通过网络请求DRM服务，获取媒体密钥响应mediaKeyResponse，将响应传到OH_MediaKeySession_ProcessMediaKeyResponse，\n 若是离线媒体密钥响应处理，则返回离线媒体密钥标识mediaKeyId，请根据实际的数据和长度传入。\n */\nunsigned char mediaKeyId[128] = {0x00};\nint32_t mediaKeyIdLen = 128;\n// 媒体密钥响应长度最大为MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE，请按实际数据输入。\nunsigned char mediaKeyResponse[MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE] = {0x00};\nint32_t mediaKeyResponseLen = MAX_DRM_MEDIA_KEY_RESPONSE_BUF_SIZE;\nret = OH_MediaKeySession_ProcessMediaKeyResponse(mediaKeySession, mediaKeyResponse,\n    mediaKeyResponseLen, mediaKeyId, &mediaKeyIdLen);\nif (ret != DRM_ERR_OK) {\n    printf(\"OH_MediaKeySession_ProcessMediaKeyResponse failed.\");\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据需要设置音频解密配置(详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/audio-decoding#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "音频解码开发指南开发步骤"
          }), "第4步)、设置视频解密配置(详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码开发指南开发步骤Surface模式"
          }), "第4步或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
            children: "Buffer模式"
          }), "第4步)，实现DRM内容解密。"]
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
986879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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