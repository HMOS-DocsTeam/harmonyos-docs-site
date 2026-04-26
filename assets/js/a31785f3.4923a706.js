"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["474172"], {
369689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_receiver_mdk_h_capi_image_receiver_mdk_h_md_a31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-receiver-mdk-h-capi-image-receiver-mdk-h-md-a31.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_receiver_mdk_h_capi_image_receiver_mdk_h_md_a31_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h","title":"image_receiver_mdk.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-receiver-mdk-h","slug":"/image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"image_receiver_mdk.h","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-mdk-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-receiver-mdk-h"},"sidebar":"ref","previous":{"title":"image_pixel_map_napi.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-pixel-map-napi-h/capi-image-pixel-map-napi-h"},"next":{"title":"image_source_mdk.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h.md


const frontMatter = {
	title: 'image_receiver_mdk.h',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-mdk-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-receiver-mdk-h'
};
const contentTitle = 'image_receiver_mdk.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Image_Receiver_On_Callback()",
  "id": "oh_image_receiver_on_callback",
  "level": 3
}, {
  "value": "OH_Image_Receiver_CreateImageReceiver()",
  "id": "oh_image_receiver_createimagereceiver",
  "level": 3
}, {
  "value": "OH_Image_Receiver_InitImageReceiverNative()",
  "id": "oh_image_receiver_initimagereceivernative",
  "level": 3
}, {
  "value": "OH_Image_Receiver_GetReceivingSurfaceId()",
  "id": "oh_image_receiver_getreceivingsurfaceid",
  "level": 3
}, {
  "value": "OH_Image_Receiver_ReadLatestImage()",
  "id": "oh_image_receiver_readlatestimage",
  "level": 3
}, {
  "value": "OH_Image_Receiver_ReadNextImage()",
  "id": "oh_image_receiver_readnextimage",
  "level": 3
}, {
  "value": "OH_Image_Receiver_On()",
  "id": "oh_image_receiver_on",
  "level": 3
}, {
  "value": "OH_Image_Receiver_GetSize()",
  "id": "oh_image_receiver_getsize",
  "level": 3
}, {
  "value": "OH_Image_Receiver_GetCapacity()",
  "id": "oh_image_receiver_getcapacity",
  "level": 3
}, {
  "value": "OH_Image_Receiver_GetFormat()",
  "id": "oh_image_receiver_getformat",
  "level": 3
}, {
  "value": "OH_Image_Receiver_Release()",
  "id": "oh_image_receiver_release",
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
        id: "image_receiver_mdkh",
        children: "image_receiver_mdk.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明从native层获取图片数据的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_receiver_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image_receiver_mdk.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Image.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
        children: "Image"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagereceiverinfo/capi-image-ohosimagereceiverinfo",
              children: "OhosImageReceiverInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义ImageReceiver的相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageReceiverNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于定义ImageReceiverNative数据类型名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#oh_image_receiver_on_callback",
              children: "typedef void (*OH_Image_Receiver_On_Callback)()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Image_Receiver_On_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义native层图片的回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_createimagereceiver",
              children: "int32_t OH_Image_Receiver_CreateImageReceiver(napi_env env, struct OhosImageReceiverInfo info, napi_value* res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建应用层ImageReceiver对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_initimagereceivernative",
              children: "ImageReceiverNative* OH_Image_Receiver_InitImageReceiverNative(napi_env env, napi_value source)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过应用层ImageReceiver对象初始化native层", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_getreceivingsurfaceid",
              children: "int32_t OH_Image_Receiver_GetReceivingSurfaceId(const ImageReceiverNative* native, char* id, size_t len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取receiver的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_readlatestimage",
              children: "int32_t OH_Image_Receiver_ReadLatestImage(const ImageReceiverNative* native, napi_value* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取最新的一张图片。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_readnextimage",
              children: "int32_t OH_Image_Receiver_ReadNextImage(const ImageReceiverNative* native, napi_value* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取下一张图片。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_on",
              children: "int32_t OH_Image_Receiver_On(const ImageReceiverNative* native, OH_Image_Receiver_On_Callback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_on_callback",
              children: "OH_Image_Receiver_On_Callback"
            }), "回调事件。每当接收新图片，该回调事件就会响应。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_getsize",
              children: "int32_t OH_Image_Receiver_GetSize(const ImageReceiverNative* native, struct OhosImageSize* size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取ImageReceiver的大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_getcapacity",
              children: "int32_t OH_Image_Receiver_GetCapacity(const ImageReceiverNative* native, int32_t* capacity)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取ImageReceiver的容量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_getformat",
              children: "int32_t OH_Image_Receiver_GetFormat(const ImageReceiverNative* native, int32_t* format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "获取ImageReceiver的格式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_release",
              children: "int32_t OH_Image_Receiver_Release(ImageReceiverNative* native)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放native层", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "对象。  注意，此方法不能释放应用层ImageReceiver对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_on_callback",
      children: "OH_Image_Receiver_On_Callback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_Image_Receiver_On_Callback)(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义native层图片的回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_createimagereceiver",
      children: "OH_Image_Receiver_CreateImageReceiver()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_CreateImageReceiver(napi_env env, struct OhosImageReceiverInfo info, napi_value* res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建应用层ImageReceiver对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagereceiverinfo/capi-image-ohosimagereceiverinfo",
              children: "OhosImageReceiverInfo"
            }), " info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageReceiver数据设置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用层的ImageReceiver对象的指针。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_INVALID_PARAMETER：从surface获取参数失败。  IMAGE_RESULT_CREATE_SURFACE_FAILED：创建surface失败。  IMAGE_RESULT_SURFACE_GRALLOC_BUFFER_FAILED：surface分配内存失败。  IMAGE_RESULT_GET_SURFACE_FAILED：获取surface失败。  IMAGE_RESULT_MEDIA_RTSP_SURFACE_UNSUPPORT：媒体rtsp surface不支持。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。  IMAGE_RESULT_MEDIA_DATA_UNSUPPORT：媒体类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_initimagereceivernative",
      children: "OH_Image_Receiver_InitImageReceiverNative()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageReceiverNative* OH_Image_Receiver_InitImageReceiverNative(napi_env env, napi_value source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过应用层ImageReceiver对象初始化native层", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的ImageReceiver对象。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功则返回ImageReceiverNative指针；如果操作失败，则返回nullptr。"
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
        href: "#oh_image_receiver_release",
        children: "OH_Image_Receiver_Release"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_getreceivingsurfaceid",
      children: "OH_Image_Receiver_GetReceivingSurfaceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_GetReceivingSurfaceId(const ImageReceiverNative* native, char* id, size_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取receiver的id。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向字符缓冲区的指针，用于获取字符串的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id所对应的字符缓冲区的大小。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_INVALID_PARAMETER：从surface获取参数失败。  IMAGE_RESULT_GET_SURFACE_FAILED：获取surface失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。  IMAGE_RESULT_MEDIA_DATA_UNSUPPORT：媒体类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_readlatestimage",
      children: "OH_Image_Receiver_ReadLatestImage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_ReadLatestImage(const ImageReceiverNative* native, napi_value* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取最新的一张图片。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意，此接口需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_image_receiver_on_callback",
        children: "OH_Image_Receiver_On_Callback"
      }), "回调后调用，才能正常的接收到数据。并且使用此接口返回Image对象创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagenative-/capi-image-imagenative-",
        children: "ImageNative"
      }), "使用完毕后需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-h/capi-image-mdk-h#oh_image_release",
        children: "OH_Image_Release"
      }), "方法释放，释放后才可以继续接收新的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的应用层的Image指针对象。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_INVALID_PARAMETER：从surface获取参数失败。  IMAGE_RESULT_CREATE_SURFACE_FAILED：创建surface失败。  IMAGE_RESULT_SURFACE_GRALLOC_BUFFER_FAILED：surface分配内存失败。  IMAGE_RESULT_GET_SURFACE_FAILED：获取surface失败。  IMAGE_RESULT_MEDIA_RTSP_SURFACE_UNSUPPORT：媒体rtsp surface不支持。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。  IMAGE_RESULT_MEDIA_DATA_UNSUPPORT：媒体类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_readnextimage",
      children: "OH_Image_Receiver_ReadNextImage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_ReadNextImage(const ImageReceiverNative* native, napi_value* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取下一张图片。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意，此接口需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_image_receiver_on_callback",
        children: "OH_Image_Receiver_On_Callback"
      }), "回调后调用，才能正常的接收到数据。并且使用此接口返回Image对象创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagenative-/capi-image-imagenative-",
        children: "ImageNative"
      }), "使用完毕后需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-h/capi-image-mdk-h#oh_image_release",
        children: "OH_Image_Release"
      }), "方法释放，释放后才可以继续接收新的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取到的应用层的Image指针对象。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_INVALID_PARAMETER：从surface获取参数失败。  IMAGE_RESULT_CREATE_SURFACE_FAILED：创建surface失败。  IMAGE_RESULT_SURFACE_GRALLOC_BUFFER_FAILED：surface分配内存失败。  IMAGE_RESULT_GET_SURFACE_FAILED：获取surface失败。  IMAGE_RESULT_MEDIA_RTSP_SURFACE_UNSUPPORT：媒体rtsp surface不支持。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。  IMAGE_RESULT_MEDIA_DATA_UNSUPPORT：媒体类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_on",
      children: "OH_Image_Receiver_On()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_On(const ImageReceiverNative* native, OH_Image_Receiver_On_Callback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_image_receiver_on_callback",
        children: "OH_Image_Receiver_On_Callback"
      }), "回调事件。每当接收新图片，该回调事件就会响应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_on_callback",
              children: "OH_Image_Receiver_On_Callback"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_image_receiver_on_callback",
              children: "OH_Image_Receiver_On_Callback"
            }), "事件的回调函数。"]
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_INVALID_PARAMETER：从surface获取参数失败。  IMAGE_RESULT_GET_SURFACE_FAILED：获取surface失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。  IMAGE_RESULT_MEDIA_DATA_UNSUPPORT：媒体类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_getsize",
      children: "OH_Image_Receiver_GetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_GetSize(const ImageReceiverNative* native, struct OhosImageSize* size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取ImageReceiver的大小。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesize/capi-image-ohosimagesize",
              children: "OhosImageSize"
            }), "* size"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为结果的OhosImageSize指针。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_getcapacity",
      children: "OH_Image_Receiver_GetCapacity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_GetCapacity(const ImageReceiverNative* native, int32_t* capacity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取ImageReceiver的容量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为结果的指向容量的指针。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_getformat",
      children: "OH_Image_Receiver_GetFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_GetFormat(const ImageReceiverNative* native, int32_t* format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "获取ImageReceiver的格式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为结果的指向格式的指针。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_image_receiver_release",
      children: "OH_Image_Receiver_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Image_Receiver_Release(ImageReceiverNative* native)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放native层", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
        children: "ImageReceiverNative"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意，此方法不能释放应用层ImageReceiver对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagereceivernative-/capi-image-imagereceivernative-",
              children: "ImageReceiverNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的ImageReceiverNative指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_UNSUPPORT：图像类型不支持。"]
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