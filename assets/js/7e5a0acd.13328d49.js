"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["649666"], {
529776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_mdk_common_h_capi_image_mdk_common_h_md_7e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-mdk-common-h-capi-image-mdk-common-h-md-7e5.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_mdk_common_h_capi_image_mdk_common_h_md_7e5_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h","title":"image_mdk_common.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-mdk-common-h","slug":"/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"image_mdk_common.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-mdk-common-h"},"sidebar":"ref","previous":{"title":"image_mdk.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-mdk-h/capi-image-mdk-h"},"next":{"title":"image_packer_mdk.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-packer-mdk-h/capi-image-packer-mdk-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h.md


const frontMatter = {
	title: 'image_mdk_common.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-mdk-common-h'
};
const contentTitle = 'image_mdk_common.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "IRNdkErrCode",
  "id": "irndkerrcode",
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
        id: "image_mdk_commonh",
        children: "image_mdk_common.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明图像常用的枚举值和结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image_mdk_common.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_ndk.z.so"]
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
      id: "宏定义",
      children: "宏定义"
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
            children: "IMAGE_RESULT_BASE 62980096"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通用图像错误码，含义为操作失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesize/capi-image-ohosimagesize",
              children: "OhosImageSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像大小。是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "的成员变量。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#irndkerrcode",
              children: "IRNdkErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRNdkErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被使用的接口返回值的枚举。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "irndkerrcode",
      children: "IRNdkErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum IRNdkErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被使用的接口返回值的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IMAGE_RESULT_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_BAD_PARAMETER = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_IMAGE_RESULT_BASE = IMAGE_RESULT_BASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ERR_IPC = IMAGE_RESULT_BASE + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ipc 错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST = IMAGE_RESULT_BASE + 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL = IMAGE_RESULT_BASE + 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存数据异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DECODE_ABNORMAL = IMAGE_RESULT_BASE + 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DATA_ABNORMAL = IMAGE_RESULT_BASE + 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像输入数据异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MALLOC_ABNORMAL = IMAGE_RESULT_BASE + 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像内存分配异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DATA_UNSUPPORT = IMAGE_RESULT_BASE + 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像类型不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_INIT_ABNORMAL = IMAGE_RESULT_BASE + 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_GET_DATA_ABNORMAL = IMAGE_RESULT_BASE + 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像获取数据错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_TOO_LARGE = IMAGE_RESULT_BASE + 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据过大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_TRANSFORM = IMAGE_RESULT_BASE + 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像转换错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_COLOR_CONVERT = IMAGE_RESULT_BASE + 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像颜色转换错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_CROP = IMAGE_RESULT_BASE + 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SOURCE_DATA = IMAGE_RESULT_BASE + 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像源数据错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SOURCE_DATA_INCOMPLETE = IMAGE_RESULT_BASE + 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像源数据不完整。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MISMATCHED_FORMAT = IMAGE_RESULT_BASE + 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像格式不匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_UNKNOWN_FORMAT = IMAGE_RESULT_BASE + 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像未知格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SOURCE_UNRESOLVED = IMAGE_RESULT_BASE + 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像源未解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_INVALID_PARAMETER = IMAGE_RESULT_BASE + 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DECODE_FAILED = IMAGE_RESULT_BASE + 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_PLUGIN_REGISTER_FAILED = IMAGE_RESULT_BASE + 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册插件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_PLUGIN_CREATE_FAILED = IMAGE_RESULT_BASE + 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建插件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ENCODE_FAILED = IMAGE_RESULT_BASE + 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像编码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ADD_PIXEL_MAP_FAILED = IMAGE_RESULT_BASE + 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像添加像素位图失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_HW_DECODE_UNSUPPORT = IMAGE_RESULT_BASE + 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像硬解码不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DECODE_HEAD_ABNORMAL = IMAGE_RESULT_BASE + 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像头解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_DECODE_EXIF_UNSUPPORT = IMAGE_RESULT_BASE + 27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像解码EXIF不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_PROPERTY_NOT_EXIST = IMAGE_RESULT_BASE + 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像属性不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_DATA_UNSUPPORT = IMAGE_RESULT_BASE + 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_TOO_LARGE = IMAGE_RESULT_BASE + 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体数据过大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_MALLOC_FAILED = IMAGE_RESULT_BASE + 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体分配内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_END_OF_STREAM = IMAGE_RESULT_BASE + 33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体数据流结束失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_IO_ABNORMAL = IMAGE_RESULT_BASE + 34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体输入输出流异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_MALFORMED = IMAGE_RESULT_BASE + 35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体功能异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_BUFFER_TOO_SMALL = IMAGE_RESULT_BASE + 36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体数据过小错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_OUT_OF_RANGE = IMAGE_RESULT_BASE + 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体超出范围错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_STATUS_ABNORMAL = IMAGE_RESULT_BASE + 38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体状态异常错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_VALUE_INVALID = IMAGE_RESULT_BASE + 39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体值无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_NULL_POINTER = IMAGE_RESULT_BASE + 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_INVALID_OPERATION = IMAGE_RESULT_BASE + 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体操作无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_ERR_PLAYER_NOT_INIT = IMAGE_RESULT_BASE + 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体初始化异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_EARLY_PREPARE = IMAGE_RESULT_BASE + 43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体过早预处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_SEEK_ERR = IMAGE_RESULT_BASE + 44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体查找失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_PERMISSION_DENIED = IMAGE_RESULT_BASE + 45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体权限拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_DEAD_OBJECT = IMAGE_RESULT_BASE + 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体对象注销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_TIMED_OUT = IMAGE_RESULT_BASE + 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_TRACK_NOT_ALL_SUPPORTED = IMAGE_RESULT_BASE + 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体能力不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_ADAPTER_INIT_FAILED = IMAGE_RESULT_BASE + 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体适配器初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_WRITE_PARCEL_FAIL = IMAGE_RESULT_BASE + 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入parcel失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_READ_PARCEL_FAIL = IMAGE_RESULT_BASE + 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取parcel失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_NO_AVAIL_BUFFER = IMAGE_RESULT_BASE + 52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_INVALID_PARAM = IMAGE_RESULT_BASE + 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体接口发现无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_CODEC_ADAPTER_NOT_EXIST = IMAGE_RESULT_BASE + 54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体编解码适配器不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_CREATE_CODEC_ADAPTER_FAILED = IMAGE_RESULT_BASE + 55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体创建编解码适配器失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_CODEC_ADAPTER_NOT_INIT = IMAGE_RESULT_BASE + 56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体编解码适配器未初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_ZCODEC_CREATE_FAILED = IMAGE_RESULT_BASE + 57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体编解码创建失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_ZCODEC_NOT_EXIST = IMAGE_RESULT_BASE + 58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体编解码不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_JNI_CLASS_NOT_EXIST = IMAGE_RESULT_BASE + 59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体JNI层类不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_JNI_METHOD_NOT_EXIST = IMAGE_RESULT_BASE + 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体JNI层方法不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_JNI_NEW_OBJ_FAILED = IMAGE_RESULT_BASE + 61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体JNI层创建对象失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_JNI_COMMON_ERROR = IMAGE_RESULT_BASE + 62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体JNI层异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_DISTRIBUTE_NOT_SUPPORT = IMAGE_RESULT_BASE + 63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体不支持分布式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_SOURCE_NOT_SET = IMAGE_RESULT_BASE + 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体源未设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_ADAPTER_NOT_INIT = IMAGE_RESULT_BASE + 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体rtsp适配器未初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_ADAPTER_NOT_EXIST = IMAGE_RESULT_BASE + 66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体rtsp适配器不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_SURFACE_UNSUPPORT = IMAGE_RESULT_BASE + 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体不支持rtsp surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_CAPTURE_NOT_INIT = IMAGE_RESULT_BASE + 68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体rtsp capture初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_SOURCE_URL_INVALID = IMAGE_RESULT_BASE + 69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体rtsp源路径无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_VIDEO_TRACK_NOT_FOUND = IMAGE_RESULT_BASE + 70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体rtsp未发现视频能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_RTSP_CAMERA_NUM_REACH_MAX = IMAGE_RESULT_BASE + 71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rtsp相机数量达到最大数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_SET_VOLUME = IMAGE_RESULT_BASE + 72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体设置音量失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_NUMBER_OVERFLOW = IMAGE_RESULT_BASE + 73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体操作次数溢出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_DIS_PLAYER_UNSUPPORTED = IMAGE_RESULT_BASE + 74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体分布式播放器不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_DENCODE_ICC_FAILED = IMAGE_RESULT_BASE + 75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像解码ICC失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_ENCODE_ICC_FAILED = IMAGE_RESULT_BASE + 76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像编码ICC失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_READ_PIXELMAP_FAILED = IMAGE_RESULT_BASE + 150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取像素位图失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_WRITE_PIXELMAP_FAILED = IMAGE_RESULT_BASE + 151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入像素位图失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_PIXELMAP_NOT_ALLOW_MODIFY = IMAGE_RESULT_BASE + 152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素位图不允许修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_CONFIG_FAILED = IMAGE_RESULT_BASE + 153"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_JNI_ENV_ABNORMAL = IMAGE_RESULT_BASE + 154"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JNI环境异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SURFACE_GRALLOC_BUFFER_FAILED = IMAGE_RESULT_BASE + 155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "surface申请内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_CREATE_SURFACE_FAILED = IMAGE_RESULT_BASE + 156"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建surface失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SURFACE_GET_PARAMETER_FAILED = IMAGE_RESULT_BASE + 157"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从surface获取参数失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_GET_SURFACE_FAILED = IMAGE_RESULT_BASE + 158"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取surface失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SURFACE_ACQUIRE_BUFFER_FAILED = IMAGE_RESULT_BASE + 159"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SURFACE_REQUEST_BUFFER_FAILED = IMAGE_RESULT_BASE + 160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_REGISTER_LISTENER_FAILED = IMAGE_RESULT_BASE + 161"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册监听失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_REGISTER_BUFFER_FAILED = IMAGE_RESULT_BASE + 162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_FREAD_FAILED = IMAGE_RESULT_BASE + 163"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取文件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_PEEK_FAILED = IMAGE_RESULT_BASE + 164"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测文件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_SEEK_FAILED = IMAGE_RESULT_BASE + 165"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找文件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_STREAM_SIZE_ERROR = IMAGE_RESULT_BASE + 166"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据流损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_FILE_FD_ERROR = IMAGE_RESULT_BASE + 167"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件描述符损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_FILE_DAMAGED = IMAGE_RESULT_BASE + 168"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_CREATE_DECODER_FAILED = IMAGE_RESULT_BASE + 169"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_CREATE_ENCODER_FAILED = IMAGE_RESULT_BASE + 170"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建编码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_CHECK_FORMAT_ERROR = IMAGE_RESULT_BASE + 171"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查格式失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_THIRDPART_SKIA_ERROR = IMAGE_RESULT_BASE + 172"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skia解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_HW_DECODE_FAILED = IMAGE_RESULT_BASE + 173"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ALLOCATER_TYPE_ERROR = IMAGE_RESULT_BASE + 174"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存类型校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_ALPHA_TYPE_ERROR = IMAGE_RESULT_BASE + 175"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "透明度类型失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_INDEX_INVALID = IMAGE_RESULT_BASE + 176"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RESULT_MEDIA_UNKNOWN = IMAGE_RESULT_BASE + 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体未知错误。"
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