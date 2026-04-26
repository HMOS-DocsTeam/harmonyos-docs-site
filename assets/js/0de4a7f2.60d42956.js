"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["543077"], {
98054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_editing_c_image_processing_image_csc_image_csc_md_0de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-editing-c-image-processing-image-csc-image-csc-md-0de.json
var site_docs_image_kit_image_native_image_editing_c_image_processing_image_csc_image_csc_md_0de_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-editing-c/image-processing/image-csc/image-csc","title":"图片色彩空间转换","description":"调用者可以调用本模块提供的C API接口，实现HDR2SDR、SDR2HDR、SDR2SDR的图片色彩空间转换。","source":"@site/docs/image-kit/image-native/image-editing-c/image-processing/image-csc/image-csc.md","sourceDirName":"image-kit/image-native/image-editing-c/image-processing/image-csc","slug":"/image-kit/image-native/image-editing-c/image-processing/image-csc/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/image-csc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"图片色彩空间转换","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-csc","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片动态元数据生成","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/image-dynamic-metadata-generation/"},"next":{"title":"单层HDR图片转换双层","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/hdr-single-to-dual/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-editing-c/image-processing/image-csc/image-csc.md


const frontMatter = {
	title: '图片色彩空间转换',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-csc',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片色彩空间转换';

const assets = {

};



const toc = [{
  "value": "规格说明",
  "id": "规格说明",
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
  "value": "ArkTS侧调用的开发步骤",
  "id": "arkts侧调用的开发步骤",
  "level": 3
}, {
  "value": "Native侧调用的开发步骤",
  "id": "native侧调用的开发步骤",
  "level": 3
}, {
  "value": "完整示例代码",
  "id": "完整示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图片色彩空间转换",
        children: "图片色彩空间转换"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用者可以调用本模块提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-imageprocessing/capi-imageprocessing",
        children: "C API接口"
      }), "，实现HDR2SDR、SDR2HDR、SDR2SDR的图片色彩空间转换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力常用于图片编辑中，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(975701)/* ["default"] */.A) + "",
        width: "933",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格说明",
      children: "规格说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持的数据输入格式："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片色彩空间转换算法为HDR2SDR："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                  children: "ColorSpaceName"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                  children: "PIXEL_FORMAT"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                      children: "ColorSpaceName"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                }), "  ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                      children: "PIXEL_FORMAT"
                    })]
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_YCBCR_P010 / PIXEL_FORMAT_YCRCB_P010 / PIXEL_FORMAT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_BASE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT/SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG_LIMIT / BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ_LIMIT / BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010  YCRCB_P010  RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT/DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PIXEL_FORMAT_RGBA_8888 / PIXEL_FORMAT_BGRA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片色彩空间转换算法为SDR2HDR："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                  children: "ColorSpaceName"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                  children: "PIXEL_FORMAT"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                      children: "ColorSpaceName"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                }), "  ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                      children: "PIXEL_FORMAT"
                    })]
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_ALTERNATE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ADOBE_RGB_1998"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ADOBE_RGB_1998"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BT2020_PQ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "YCBCR_P010 / RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片色彩空间转换算法为SDR2SDR："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                  children: "ColorSpaceName"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["输入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                  children: "PIXEL_FORMAT"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
                      children: "ColorSpaceName"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                }), "  ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype",
                  children: "HdrMetadataType"
                })]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
                      children: "PIXEL_FORMAT"
                    })]
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ADOBE_RGB_1998"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SRGB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ADOBE_RGB_1998"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888,  BGRA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISPLAY_P3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HDR_METADATA_TYPE_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "分辨率规格："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "最小分辨率（单位：像素）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最大分辨率（单位：像素）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32*32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8880*8880"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "内存规格："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理的PixelMap对象需为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-decoding-c/image-allocator-type-c#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
        children: "DMA内存"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/tree/master/UsingImageProcessingToProcessImages",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add_library(entry SHARED napi_init.cpp ImageProcessing/ImageProcessing.cpp)\ntarget_link_libraries(entry PUBLIC ${BASE_LIBRARY})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts侧调用的开发步骤",
      children: "ArkTS侧调用的开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建8 bit的PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let srcPixelMap = nativePix.createPixelMap(this.inputHeight, this.inputWidth);\nlet outPutPixelMap = nativePix.createPixelMap(this.inputHeight, this.inputWidth);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置色彩空间和元数据信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let colorSpaceDISPLAY_P3 : colorSpaceManager.ColorSpaceManager = colorSpaceManager.create(colorSpaceManager.ColorSpace.DISPLAY_P3);\nlet colorSpaceSrgb : colorSpaceManager.ColorSpaceManager = colorSpaceManager.create(colorSpaceManager.ColorSpace.SRGB);\ninputpixelMap.setColorSpace(colorSpaceDISPLAY_P3);\ninputpixelMap.setMetadata(image.HdrMetadataKey.HDR_METADATA_TYPE, image.HdrMetadataType.NONE);\noutputpixelMap.setColorSpace(colorSpaceSrgb);\noutputpixelMap.setMetadata(image.HdrMetadataKey.HDR_METADATA_TYPE, image.HdrMetadataType.NONE);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧调用的开发步骤",
      children: "Native侧调用的开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/image_framework/image_mdk_common.h>\n#include <multimedia/image_framework/image_pixel_map_mdk.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <multimedia/video_processing_engine/image_processing.h>\n#include <multimedia/video_processing_engine/image_processing_types.h>\n#include <native_color_space_manager/native_color_space_manager.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）初始化环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般在进程内第一次使用时调用，可提前完成部分耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ImageProcessing_ErrorCode ret =  OH_ImageProcessing_InitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）查询能力支持。建议在使用对应能力前调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//输入格式\nImageProcessing_ColorSpaceInfo SRC_INFO;\nImageProcessing_ColorSpaceInfo DST_GAIN_INFO;\nImageProcessing_ColorSpaceInfo DST_INFO;\nSRC_INFO.colorSpace = DISPLAY_P3;\nSRC_INFO.metadataType = HDR_METADATA_TYPE_NONE;\nSRC_INFO.pixelFormat = PIXEL_FORMAT_RGBA_8888;\nDST_INFO.colorSpace = SRGB;\nDST_INFO.metadataType = HDR_METADATA_TYPE_NONE;\nDST_INFO.pixelFormat = PIXEL_FORMAT_RGBA_8888;\n//能力查询\nbool flag = OH_ImageProcessing_IsColorSpaceConversionSupported(&SRC_INFO, &DST_INFO);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建8 bit的PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value ImageProcessing::CreatePixelMap(napi_env env, napi_callback_info info)\n{\n    napi_value udfVar = nullptr;\n    napi_value pixelMap = nullptr;\n    napi_value thisVar = nullptr;\n    napi_value argValue[2] = {0};\n    size_t argCount = 2;\n    size_t count = 2;\n    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok || argCount < count ||\n        argValue[0] == nullptr || argValue[1] == nullptr) {\n        return nullptr;\n    }\n    int32_t width = 0;\n    int32_t height = 0;\n    napi_get_value_int32(env, argValue[1], &width);\n    napi_get_value_int32(env, argValue[0], &height);\n    struct OhosPixelMapCreateOps createOps;\n    createOps.width = width;\n    createOps.height = height;\n    int32_t rgba8888 = 3;\n    createOps.pixelFormat = rgba8888;\n    createOps.alphaType = 0;\n    \n    size_t bufferSize = createOps.width * createOps.height * 4;\n    void *buff = malloc(bufferSize);\n    int32_t res = OH_PixelMap_CreatePixelMapWithStride(env, createOps, (uint8_t *)buff, bufferSize, createOps.width * 4,\n        &pixelMap);\n    free(buff);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"createPixelMap\",\n        \"OH_PixelMap_CreatePixelMapWithStride %{public}d\", res);\n    if (res != IMAGE_RESULT_SUCCESS || pixelMap == nullptr) {\n        return udfVar;\n    }\n    return pixelMap;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ArkTS中的PixelMap转换为C++的PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_PixelmapNative* srcImg = nullptr;\nOH_PixelmapNative_ConvertPixelmapNativeFromNapi(env, argValue[0], &srcImg);\nOH_PixelmapNative* dstImg= nullptr;\nOH_PixelmapNative_ConvertPixelmapNativeFromNapi(env, argValue[1], &dstImg);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建图片色彩空间转换模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过图片处理引擎模块类型来创建图片色彩空间转换模块。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "instance：图片处理模块实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IMAGE_PROCESSING_TYPE_COLOR_SPACE_CONVERSION：图片色彩空间转换。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预期返回值：IMAGE_PROCESSING_SUCCESS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ImageProcessing* instance = nullptr;\nret = OH_ImageProcessing_Create(&instance, IMAGE_PROCESSING_TYPE_COLOR_SPACE_CONVERSION);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行算法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ImageProcessing_ConvertColorSpace(instance, srcImg, dstImg);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放实例资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ImageProcessing_Destroy(instance);\ninstance = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放初始化环境资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ImageProcessing_DeinitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例代码",
      children: "完整示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/ets/view/ImageColorSpaceConversionComponent.ets",
          children: "ImageColorSpaceConversion.ets示例代码"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++相关示例代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/CMakeLists.txt",
          children: "CMakeLists.txt示例代码"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/ImageProcessing/ImageProcessing.h",
          children: "ImageProcessing.h示例代码"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/ImageProcessing/ImageProcessing.cpp",
          children: "ImageProcessing.cpp示例代码"
        })
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
975701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478591-0c8e058153a5ad5272b89789d2569fdb.png");

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