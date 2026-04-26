"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["73283"], {
293275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_buffer_common_h_capi_buffer_common_h_md_5eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-buffer-common-h-capi-buffer-common-h-md-5eb.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_buffer_common_h_capi_buffer_common_h_md_5eb_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h","title":"buffer_common.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"buffer_common.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-buffer-common-h"},"sidebar":"ref","previous":{"title":"NativeFence","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativefence/capi-nativefence"},"next":{"title":"native_buffer.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h.md


const frontMatter = {
	title: 'buffer_common.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-buffer-common-h'
};
const contentTitle = 'buffer_common.h';

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
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_NativeBuffer_ColorSpace",
  "id": "oh_nativebuffer_colorspace",
  "level": 3
}, {
  "value": "OH_NativeBuffer_MetadataType",
  "id": "oh_nativebuffer_metadatatype",
  "level": 3
}, {
  "value": "OH_NativeBuffer_MetadataKey",
  "id": "oh_nativebuffer_metadatakey",
  "level": 3
}, {
  "value": "OH_NativeBuffer_Format",
  "id": "oh_nativebuffer_format",
  "level": 3
}, {
  "value": "OH_NativeBuffer_TransformType",
  "id": "oh_nativebuffer_transformtype",
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
        id: "buffer_commonh",
        children: "buffer_common.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供NativeBuffer模块的公共类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_buffer/buffer_common.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_buffer.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer",
        children: "OH_NativeBuffer"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-colorxy/capi-oh-nativebuffer-oh-nativebuffer-colorxy",
              children: "OH_NativeBuffer_ColorXY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_ColorXY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示基色的X和Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-smpte2086/capi-oh-nativebuffer-oh-nativebuffer-smpte2086",
              children: "OH_NativeBuffer_Smpte2086"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Smpte2086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示smpte2086静态元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-cta861/capi-oh-nativebuffer-oh-nativebuffer-cta861",
              children: "OH_NativeBuffer_Cta861"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Cta861"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示CTA-861.3静态元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/api-oh-nativebuffer-oh-nativebuffer-staticmetadata/api-oh-nativebuffer-oh-nativebuffer-staticmetadata",
              children: "OH_NativeBuffer_StaticMetadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_StaticMetadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示HDR静态元数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_ColorSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的颜色空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_metadatatype",
              children: "OH_NativeBuffer_MetadataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_MetadataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的图像标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_MetadataKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示OH_NativeBuffer的描述信息的键值，如HDR元数据，ROI元数据等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_format",
              children: "OH_NativeBuffer_Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer格式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_transformtype",
              children: "OH_NativeBuffer_TransformType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_TransformType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer转换类型的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_colorspace",
      children: "OH_NativeBuffer_ColorSpace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_ColorSpace\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer的颜色空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，此枚举由native_buffer.h移动至此头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 12之前，使用该枚举请引用native_buffer.h头文件；从API version 12开始，引用native_buffer.h或buffer_common.h均可正常使用该枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_COLORSPACE_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无颜色空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT601_EBU_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT601_P，传递函数为BT709，转换矩阵为BT601_P，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT601_SMPTE_C_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT601_N，传递函数为BT709，转换矩阵为BT601_N，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT709_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT709，传递函数为BT709，转换矩阵为BT709，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT2020_HLG_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为HLG，转换矩阵为BT2020，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT2020_PQ_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为PQ，转换矩阵为BT2020，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT601_EBU_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT601_P，传递函数为BT709，转换矩阵为BT601_P，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT601_SMPTE_C_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT601_N，传递函数为BT709，转换矩阵为BT601_N，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT709_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT709，传递函数为BT709，转换矩阵为BT709，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为HLG，转换矩阵为BT2020，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为PQ，转换矩阵为BT2020，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_SRGB_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为SRGB，传递函数为SRGB，转换矩阵为BT601_N，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为SRGB，转换矩阵为P3，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_HLG_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为HLG，转换矩阵为P3，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_PQ_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为PQ，转换矩阵为P3，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_ADOBERGB_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为ADOBERGB，传递函数为ADOBERGB，转换矩阵为ADOBERGB，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_SRGB_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为SRGB，传递函数为SRGB，转换矩阵为BT601_N，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为SRGB，转换矩阵为P3，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_HLG_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为HLG，转换矩阵为P3，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_P3_PQ_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为PQ，转换矩阵为P3，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_ADOBERGB_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为ADOBERGB，传递函数为ADOBERGB，转换矩阵为ADOBERGB，数据范围为RANGE_LIMITED。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_LINEAR_SRGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为SRGB，传递函数为LINEAR。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_LINEAR_BT709"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于 OH_COLORSPACE_LINEAR_SRGB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_LINEAR_P3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为P3_D65，传递函数为LINEAR。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_LINEAR_BT2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为LINEAR。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_SRGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于OH_COLORSPACE_SRGB_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_P3_SRGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于OH_COLORSPACE_P3_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_P3_HLG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于OH_COLORSPACE_P3_HLG_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_P3_PQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于OH_COLORSPACE_P3_PQ_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_BT2020_SRGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域范围为BT2020，传递函数为SRGB，转换矩阵为BT2020，数据范围为RANGE_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_BT2020_HLG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于 OH_COLORSPACE_BT2020_HLG_FULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_COLORSPACE_DISPLAY_BT2020_PQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等同于OH_COLORSPACE_BT2020_PQ_FULL。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_metadatatype",
      children: "OH_NativeBuffer_MetadataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_MetadataType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer的图像标准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_VIDEO_HDR_HLG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频HLG。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_HDR_HDR10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频HDR10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_HDR_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频HDR VIVID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_IMAGE_HDR_VIVID_DUAL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片HDR VIVID DUAL。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_IMAGE_HDR_VIVID_SINGLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片HDR VIVID SINGLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_IMAGE_HDR_ISO_DUAL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片HDR ISO DUAL。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_IMAGE_HDR_ISO_SINGLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片HDR ISO SINGLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_NONE = -1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无元数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_metadatakey",
      children: "OH_NativeBuffer_MetadataKey"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_MetadataKey\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示OH_NativeBuffer的描述信息的键值，如HDR元数据，ROI元数据等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "OH_HDR_METADATA_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["元数据类型，其值见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
              children: "OH_NativeBuffer_MetadataType"
            }), "，size为OH_NativeBuffer_MetadataType大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HDR_STATIC_METADATA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["静态元数据，其值见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/api-oh-nativebuffer-oh-nativebuffer-staticmetadata/api-oh-nativebuffer-oh-nativebuffer-staticmetadata",
              children: "OH_NativeBuffer_StaticMetadata"
            }), "，size为OH_NativeBuffer_StaticMetadata大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HDR_DYNAMIC_METADATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态元数据，其值见视频流中SEI的字节流，size的取值范围为1-3000。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_REGION_OF_INTEREST_METADATA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频编解码感兴趣区域（ROI）元数据，配置格式示例：“Top1,Left1-Bottom1,Right1=QpOffset1;Top2,Left2-Bottom2,Right2=QpOffset2;”。  每个ROI框由位置信息（Top,Left-Bottom,Right），编码质量偏移信息（QpOffset）组成，到分号结束。  ROI框的编码质量偏移信息可以缺省，缺省值为-3，缺省时配置示例：“Top1,Left1-Bottom1,Right1;Top2,Left2-Bottom2,Right2;”。  每组ROI元数据最多支持同时配置6个ROI，且其累计面积不超过全图的1/5。  该枚举值仅支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_setmetadatavalue",
              children: "OH_NativeBuffer_SetMetadataValue()"
            }), "接口调用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_format",
      children: "OH_NativeBuffer_Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_Format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer格式的枚举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，此枚举由native_buffer.h移动至此头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 22之前，使用该枚举请引用native_buffer.h头文件；从API version 22开始，引用native_buffer.h或buffer_common.h均可正常使用该枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NATIVEBUFFER_PIXEL_FMT_CLUT8 = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CLUT8格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_CLUT1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CLUT1格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_CLUT4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CLUT4格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGB_565 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB565格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA_5658"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA5658格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBX_4444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBX4444格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA_4444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA4444格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGB_444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB444格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBX_5551"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBX5551格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA_5551"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA5551格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGB_555"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB555格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBX_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBX8888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA8888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGB_888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGR_565"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGR565格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRX_4444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRX4444格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRA_4444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRA4444格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRX_5551"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRX5551格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRA_5551"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRA5551格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRX_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRX8888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BGRA_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGRA8888格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YUV_422_I"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YUV422 interleaved 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_422_SP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR422 semi-planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCRCB_422_SP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB422 semi-planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR420 semi-planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB420 semi-planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_422_P"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR422 planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCRCB_422_P"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB422 planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_P"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR420 planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCRCB_420_P"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB420 planar 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YUYV_422_PKG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YUYV422 packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_UYVY_422_PKG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UYVY422 packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YVYU_422_PKG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YVYU422 packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_VYUY_422_PKG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VYUY422 packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RGBA_1010102 packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCBCR420 semi-planar 10bit packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_YCRCB_P010"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YCRCB420 semi-planar 10bit packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RAW10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Raw 10bit packed 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BLOB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BLOB格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_RGBA16_FLOAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RGBA16 float格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_Y8 = 40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Y8格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_Y16 = 41"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Y16格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_VENDER_MASK = 0X7FFF0000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["vender mask 格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_PIXEL_FMT_BUTT = 0X7FFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_transformtype",
      children: "OH_NativeBuffer_TransformType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_TransformType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer转换类型的枚举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，此枚举由native_buffer.h移动至此头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 22之前，使用该枚举请引用native_buffer.h头文件；从API version 22开始，引用native_buffer.h或buffer_common.h均可正常使用该枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "NATIVEBUFFER_ROTATE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不旋转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_ROTATE_90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转90度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_ROTATE_180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转180度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_ROTATE_270"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转270度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_H_ROT90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平翻转并旋转90度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_V_ROT90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直翻转并旋转90度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_H_ROT180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平翻转并旋转180度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_V_ROT180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直翻转并旋转180度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_H_ROT270"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平翻转并旋转270度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_FLIP_V_ROT270"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直翻转并旋转270度。"
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