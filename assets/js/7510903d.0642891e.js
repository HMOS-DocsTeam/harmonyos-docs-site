"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["110695"], {
77438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_c_media_library_headerfile_capi_media_asset_change_request_capi_h_capi_media_asset_change_request_capi_h_md_751_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-c-media-library-headerfile-capi-media-asset-change-request-capi-h-capi-media-asset-change-request-capi-h-md-751.json
var site_docs_ref_media_library_api_media_library_c_media_library_headerfile_capi_media_asset_change_request_capi_h_capi_media_asset_change_request_capi_h_md_751_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h/capi-media-asset-change-request-capi-h","title":"media_asset_change_request_capi.h","description":"概述","source":"@site/docs-ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h/capi-media-asset-change-request-capi-h.md","sourceDirName":"media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h","slug":"/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h/capi-media-asset-change-request-capi-h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h/capi-media-asset-change-request-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"media_asset_change_request_capi.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-change-request-capi-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-media-asset-change-request-capi-h"},"sidebar":"ref","previous":{"title":"media_asset_capi.h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-capi-h/capi-media-asset-capi-h"},"next":{"title":"media_asset_manager_capi.h","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-manager-capi-h/capi-media-asset-manager-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-change-request-capi-h/capi-media-asset-change-request-capi-h.md


const frontMatter = {
	title: 'media_asset_change_request_capi.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-change-request-capi-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-media-asset-change-request-capi-h'
};
const contentTitle = 'media_asset_change_request_capi.h';

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
  "value": "OH_MediaAssetChangeRequest_Create()",
  "id": "oh_mediaassetchangerequest_create",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_AddResourceWithUri()",
  "id": "oh_mediaassetchangerequest_addresourcewithuri",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_AddResourceWithBuffer()",
  "id": "oh_mediaassetchangerequest_addresourcewithbuffer",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_GetWriteCacheHandler()",
  "id": "oh_mediaassetchangerequest_getwritecachehandler",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_SaveCameraPhoto()",
  "id": "oh_mediaassetchangerequest_savecameraphoto",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_DiscardCameraPhoto()",
  "id": "oh_mediaassetchangerequest_discardcameraphoto",
  "level": 3
}, {
  "value": "OH_MediaAssetChangeRequest_Release()",
  "id": "oh_mediaassetchangerequest_release",
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
        id: "media_asset_change_request_capih",
        children: "media_asset_change_request_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义与媒体资产更改请求相关的API。提供更改资产的能力。"
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
      }), " <multimedia/media_library/media_asset_change_request_capi.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_mediaassetchangerequest_create",
              children: "OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_addresourcewithuri",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, char* fileUri)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过文件uri添加资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_addresourcewithbuffer",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ArrayBuffer数据添加资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_getwritecachehandler",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest, int32_t* fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取临时文件写句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_savecameraphoto",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ImageFileType imageFileType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存相机拍摄的照片资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_discardcameraphoto",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "丢弃相机拍摄的照片资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mediaassetchangerequest_release",
              children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_create",
      children: "OH_MediaAssetChangeRequest_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
        children: "OH_MediaAssetChangeRequest"
      }), "实例。"]
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset",
              children: "OH_MediaAsset"
            }), "* mediaAsset"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset",
              children: "OH_MediaAsset"
            }), "实例。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_addresourcewithuri",
      children: "OH_MediaAssetChangeRequest_AddResourceWithUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, char* fileUri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过文件uri添加资源。"
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype",
              children: "MediaLibrary_ResourceType"
            }), " resourceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要添加的资源的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype",
              children: "MediaLibrary_ResourceType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* fileUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件uri。"
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_NO_SUCH_FILE：文件不存在。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_addresourcewithbuffer",
      children: "OH_MediaAssetChangeRequest_AddResourceWithBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ArrayBuffer数据添加资源。"
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype",
              children: "MediaLibrary_ResourceType"
            }), " resourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的资源的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的数据缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据缓冲区的长度。"
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_getwritecachehandler",
      children: "OH_MediaAssetChangeRequest_GetWriteCacheHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest,int32_t* fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取临时文件写句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.WRITE_IMAGEVIDEO"]
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临时文件写句柄。"
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。  MEDIA_LIBRARY_PERMISSION_DENIED：没有权限。  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_savecameraphoto",
      children: "OH_MediaAssetChangeRequest_SaveCameraPhoto()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ImageFileType imageFileType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存相机拍摄的照片资源。"
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_imagefiletype",
              children: "MediaLibrary_ImageFileType"
            }), " imageFileType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要保存的照片的图像文件类型。"
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_discardcameraphoto",
      children: "OH_MediaAssetChangeRequest_DiscardCameraPhoto()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "丢弃相机拍摄的照片资源。"
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediaassetchangerequest_release",
      children: "OH_MediaAssetChangeRequest_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
        children: "OH_MediaAssetChangeRequest"
      }), "实例。"]
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
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "* changeRequest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest",
              children: "OH_MediaAssetChangeRequest"
            }), "实例。"]
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
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode",
              children: "MediaLibrary_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_LIBRARY_OK：方法调用成功。  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。"
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