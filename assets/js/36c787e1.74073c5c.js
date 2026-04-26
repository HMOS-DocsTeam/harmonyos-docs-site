"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["975548"], {
423105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_c_media_library_headerfile_capi_media_asset_base_capi_h_capi_media_asset_base_capi_h_md_36c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-c-media-library-headerfile-capi-media-asset-base-capi-h-capi-media-asset-base-capi-h-md-36c.json
var site_docs_ref_media_library_api_media_library_c_media_library_headerfile_capi_media_asset_base_capi_h_capi_media_asset_base_capi_h_md_36c_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h","title":"media_asset_base_capi.h","description":"概述","source":"@site/docs-ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h.md","sourceDirName":"media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h","slug":"/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"media_asset_base_capi.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-media-asset-base-capi-h"},"sidebar":"ref","previous":{"title":"media_access_helper_capi.h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-access-helper-capi-h/capi-media-access-helper-capi-h"},"next":{"title":"media_asset_capi.h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-capi-h/capi-media-asset-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h.md


const frontMatter = {
	title: 'media_asset_base_capi.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-media-asset-base-capi-h'
};
const contentTitle = 'media_asset_base_capi.h';

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
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "MediaLibrary_ErrorCode",
  "id": "medialibrary_errorcode",
  "level": 3
}, {
  "value": "MediaLibrary_DeliveryMode",
  "id": "medialibrary_deliverymode",
  "level": 3
}, {
  "value": "MediaLibrary_MediaType",
  "id": "medialibrary_mediatype",
  "level": 3
}, {
  "value": "MediaLibrary_MediaSubType",
  "id": "medialibrary_mediasubtype",
  "level": 3
}, {
  "value": "MediaLibrary_ResourceType",
  "id": "medialibrary_resourcetype",
  "level": 3
}, {
  "value": "MediaLibrary_ImageFileType",
  "id": "medialibrary_imagefiletype",
  "level": 3
}, {
  "value": "MediaLibrary_MediaQuality",
  "id": "medialibrary_mediaquality",
  "level": 3
}, {
  "value": "MediaLibrary_MediaContentType",
  "id": "medialibrary_mediacontenttype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_MediaLibrary_OnDataPrepared()",
  "id": "oh_medialibrary_ondataprepared",
  "level": 3
}, {
  "value": "OH_MediaLibrary_OnImageDataPrepared()",
  "id": "oh_medialibrary_onimagedataprepared",
  "level": 3
}, {
  "value": "OH_MediaLibrary_OnMovingPhotoDataPrepared()",
  "id": "oh_medialibrary_onmovingphotodataprepared",
  "level": 3
}, {
  "value": "OH_MediaLibrary_OnQuickImageDataPrepared()",
  "id": "oh_medialibrary_onquickimagedataprepared",
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
        id: "media_asset_base_capih",
        children: "media_asset_base_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了媒体资产管理器的结构和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libmedia_asset_manager.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/media_library/media_asset_base_capi.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager",
        children: "MediaAssetManager"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_RequestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义请求Id。  当请求媒体库资源时，会返回此类型。  请求Id可用于取消请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetmanager/capi-mediaassetmanager-oh-mediaassetmanager",
              children: "OH_MediaAssetManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaAssetManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义媒体资产管理器。  此结构提供了请求媒体库资源的能力。  如果创建失败，则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaAssetChangeRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义媒体资产更改请求。  此结构体提供了处理媒体资产更改请求的能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-movingphoto/capi-mediaassetmanager-oh-movingphoto",
              children: "OH_MovingPhoto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MovingPhoto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义动态照片。  此结构体提供了获取关于动态照片的信息的能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset",
              children: "OH_MediaAsset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaAsset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义媒体资产。  此结构体提供了封装文件资源属性的能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions",
              children: "MediaLibrary_RequestOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_RequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求策略模式配置项。  此结构体为媒体资源请求策略模式配置项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库错误代码的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_deliverymode",
              children: "MediaLibrary_DeliveryMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_DeliveryMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源分发模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediatype",
              children: "MediaLibrary_MediaType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_MediaType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediasubtype",
              children: "MediaLibrary_MediaSubType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_MediaSubType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体资源子类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_resourcetype",
              children: "MediaLibrary_ResourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_ResourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_imagefiletype",
              children: "MediaLibrary_ImageFileType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_ImageFileType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像文件类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_MediaQuality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体资源质量枚举。此枚举与请求媒体资源时定义的分发模式有关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_MediaContentType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体内容类型的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_medialibrary_ondataprepared",
              children: "typedef void (*OH_MediaLibrary_OnDataPrepared)(int32_t result, MediaLibrary_RequestId requestId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaLibrary_OnDataPrepared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当所请求的媒体资源准备完成时会触发回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_medialibrary_onimagedataprepared",
              children: "typedef void (*OH_MediaLibrary_OnImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type,OH_ImageSourceNative* imageSourceNative)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaLibrary_OnImageDataPrepared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当请求的图像源准备就绪时会触发回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_medialibrary_onmovingphotodataprepared",
              children: "typedef void (*OH_MediaLibrary_OnMovingPhotoDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_MovingPhoto* movingPhoto)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaLibrary_OnMovingPhotoDataPrepared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当请求的动态照片准备就绪时会触发回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const int32_t UUID_STR_MAX_LENGTH = 37"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义UUID最大长度。这个常量定义了UUID字符串的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_errorcode",
      children: "MediaLibrary_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体库错误代码的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "MEDIA_LIBRARY_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库结果正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_PARAMETER_ERROR = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制参数未指定，参数类型不正确或参数验证失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_NO_SUCH_FILE = 23800101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_INVALID_DISPLAY_NAME = 23800102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示名称无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_INVALID_ASSET_URI = 23800103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资产uri无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_INVALID_PHOTO_KEY = 23800104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhotoKey无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED = 23800201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持该操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR = 23800301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部系统错误。建议重试并检查日志。可能的原因：  1. 数据库已损坏。  2. 文件系统异常。  3. IPC请求超时。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_deliverymode",
      children: "MediaLibrary_DeliveryMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_DeliveryMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求资源分发模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快速分发：不考虑资源质量，直接基于现有资源返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高质量分发：返回高质量资源，若没有，则触发生成高质量资源，成功后才返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "均衡分发：若存在高质量资源，则直接返回高质量资源。否则，先返回低质量资源，并触发生成高质量资源，成功后再返回一次高质量资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "MEDIA_LIBRARY_FAST_MODE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快速分发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_HIGH_QUALITY_MODE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高质量分发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_BALANCED_MODE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均衡分发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_mediatype",
      children: "MediaLibrary_MediaType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_MediaType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体类型的枚举。"
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
            children: "MEDIA_LIBRARY_IMAGE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_VIDEO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频资产。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_mediasubtype",
      children: "MediaLibrary_MediaSubType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_MediaSubType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体资源子类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "MEDIA_LIBRARY_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认照片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_MOVING_PHOTO = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_BURST = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连拍照片类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_resourcetype",
      children: "MediaLibrary_ResourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_ResourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源类型的枚举。"
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
            children: "MEDIA_LIBRARY_IMAGE_RESOURCE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_VIDEO_RESOURCE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_imagefiletype",
      children: "MediaLibrary_ImageFileType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_ImageFileType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像文件类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "MEDIA_LIBRARY_IMAGE_JPEG = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_IMAGE_HEIF = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HEIF类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_FILE_VIDEO = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MPEG类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_mediaquality",
      children: "MediaLibrary_MediaQuality"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_MediaQuality\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体资源质量枚举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举与请求媒体资源时定义的分发模式有关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快速分发：不考虑资源质量，直接基于现有资源返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高质量分发：返回高质量资源，若没有，则触发生成高质量资源，成功后才返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "均衡分发：若存在高质量资源，则直接返回高质量资源。否则，先返回低质量资源，并触发生成高质量资源，成功后再返回一次高质量资源。"
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
            children: "MEDIA_LIBRARY_QUALITY_FAST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不考虑资源质量，直接返回的现有资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_QUALITY_FULL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高质量资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medialibrary_mediacontenttype",
      children: "MediaLibrary_MediaContentType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum MediaLibrary_MediaContentType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体内容类型的枚举。"
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
            children: "MEDIA_LIBRARY_COMPRESSED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通图片格式，如JPEG、HEIC、GIF。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_PICTURE_OBJECT = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片解码后的PixelMap、GainMap和图片元数据信息一起封装的对象，方便应用进行编辑和显示。此对象的操作详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_medialibrary_ondataprepared",
      children: "OH_MediaLibrary_OnDataPrepared()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MediaLibrary_OnDataPrepared)(int32_t result, MediaLibrary_RequestId requestId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当所请求的媒体资源准备完成时会触发回调。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源处理的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MediaLibrary_RequestId requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求Id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_medialibrary_onimagedataprepared",
      children: "OH_MediaLibrary_OnImageDataPrepared()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MediaLibrary_OnImageDataPrepared)(MediaLibrary_ErrorCode result,MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type,OH_ImageSourceNative* imageSourceNative)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当请求的图像源准备就绪时会触发回调。"
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
              href: "#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            }), " result"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["处理所请求资源的结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            }), " requestId"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            }), " mediaQuality"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求源的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求源的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), "* imageSourceNative"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当请求的图像源准备就绪时获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_medialibrary_onmovingphotodataprepared",
      children: "OH_MediaLibrary_OnMovingPhotoDataPrepared()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MediaLibrary_OnMovingPhotoDataPrepared)(MediaLibrary_ErrorCode result,MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type,OH_MovingPhoto* movingPhoto)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当请求的动态照片准备就绪时会触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            }), " result"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["处理所请求资源的结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            }), " requestId"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            }), " mediaQuality"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求资源的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求资源的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-movingphoto/capi-mediaassetmanager-oh-movingphoto",
              children: "OH_MovingPhoto"
            }), "* movingPhoto"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当请求的动态图片准备就绪时获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-movingphoto/capi-mediaassetmanager-oh-movingphoto",
              children: "OH_MovingPhoto"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_medialibrary_onquickimagedataprepared",
      children: "OH_MediaLibrary_OnQuickImageDataPrepared()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_MediaLibrary_OnQuickImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative* imageSourceNative, OH_PictureNative* pictureNative)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当请求的图像源准备就绪时调用此函数。如果系统中存在图像缓冲区，则会返回一个图片对象，从而减少编码时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            }), " result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理所请求资源的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestid/capi-mediaassetmanager-medialibrary-requestid",
              children: "MediaLibrary_RequestId"
            }), " requestId"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源的MediaLibrary_RequestId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediaquality",
              children: "MediaLibrary_MediaQuality"
            }), " mediaQuality"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源的MediaLibrary_MediaQuality。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_mediacontenttype",
              children: "MediaLibrary_MediaContentType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求来源的MediaLibrary_MediaContentType。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), "* imageSourceNative"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在准备图像文件时获取OH_ImageSourceNative信息，否则imageSourceNative为null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), "* pictureNative"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在准备图像源时获取OH_PictureNative信息，否则pictureNative为null。"
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