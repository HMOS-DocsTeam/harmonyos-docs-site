"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["108950"], {
9419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_videoprocessing_guidelines_video_csc_video_csc_md_d7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-videoprocessing-guidelines-video-csc-video-csc-md-d7d.json
var site_docs_media_kit_media_kit_dev_c_videoprocessing_guidelines_video_csc_video_csc_md_d7d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc/video-csc","title":"视频色彩空间转换","description":"开发者可以调用本模块提供的C API接口，实现HDR2SDR、HDR2HDR、SDR2SDR、SDR2HDR的色彩空间转换。","source":"@site/docs/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc/video-csc.md","sourceDirName":"media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc","slug":"/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"视频色彩空间转换","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-csc","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频动态元数据生成","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-video-dynamic-metadata/"},"next":{"title":"Media Library Kit 简介","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc/video-csc.md


const frontMatter = {
	title: '视频色彩空间转换',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-csc',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频色彩空间转换';

const assets = {

};



const toc = [{
  "value": "规格说明",
  "id": "规格说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "视频色彩空间转换",
        children: "视频色彩空间转换"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以调用本模块提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing",
        children: "C API接口"
      }), "，实现HDR2SDR、HDR2HDR、SDR2SDR、SDR2HDR的色彩空间转换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力常用于视频编辑、视频分享和视频直播中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "视频编辑"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(419514)/* ["default"] */.A) + "",
            width: "1094",
            height: "52"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "视频分享"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(296173)/* ["default"] */.A) + "",
            width: "335",
            height: "39"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "视频直播"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持以下场景使用："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用HDR Vivid视频直播连麦，且对端不支持HDR Vivid视频录制场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(129188)/* ["default"] */.A) + "",
            width: "971",
            height: "199"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格说明",
      children: "规格说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频色彩空间转换算法为SDR2SDR时，支持的格式类型组合如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合一："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT601_EBU_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合二："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT601_SMPTE_C_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频色彩空间转换算法为SDR2SDR时，支持的分辨率规格："
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
                children: "8192*8192"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频色彩空间转换算法为HDR2SDR时，支持的格式类型组合如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合一："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合二："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合三（从API version 20开始支持该格式类型）："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_FULL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合四（从API version 20开始支持该格式类型）："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_FULL"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_P3_FULL"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合五（从API version 23开始支持该格式类型）："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HDR10"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合六（从API version 23开始支持该格式类型）："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HLG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频色彩空间转换算法为HDR2SDR时，支持的分辨率规格："
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
                children: "8192*8192"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频色彩空间转换算法为HDR2HDR时，支持的格式类型组合如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合一："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合二："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HDR10"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HLG"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合三："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HLG"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合四："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_PQ_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_VIVID"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频色彩空间转换算法为HDR2HDR时，支持的分辨率规格："
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
                children: "8192*8192"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频色彩空间转换算法为SDR2HDR时，支持的格式类型组合如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "格式类型组合一（从API version 22开始支持该格式类型）："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输入"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "输出"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
                  children: "ColorSpace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT709_LIMIT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_COLORSPACE_BT2020_HLG_LIMIT"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatatype",
                  children: "MetadataType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_VIDEO_HDR_HLG"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
                  children: "pixelFormat"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_420_SP,  NATIVEBUFFER_PIXEL_FMT_RGBA_8888"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NATIVEBUFFER_PIXEL_FMT_YCBCR_P010,  NATIVEBUFFER_PIXEL_FMT_YCRCB_P010,  NATIVEBUFFER_PIXEL_FMT_RGBA_1010102"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频色彩空间转换算法为SDR2HDR时，支持的分辨率规格："
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
                children: "300*300"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3000*3000"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保障转换效率，建议并行转换不超过5个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许在视频处理回调函数中，直接调用视频处理相关接口或其他耗时操作，请在应用自己的线程中调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/MediaKit/VideoProcessing",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libvideo_processing.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/video_processing_engine/video_processing.h>\n#include <multimedia/video_processing_engine/video_processing_types.h>\n#include <native_window/external_window.h>\n#include <native_buffer/native_buffer.h>\n#include <ace/xcomponent/native_interface_xcomponent.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）初始化环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般在进程内第一次使用时调用，可提前完成部分耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_VideoProcessing_InitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）查询能力支持。建议在使用对应能力前调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//输入输出格式\nVideoProcessing_ColorSpaceInfo inputFormat;\nVideoProcessing_ColorSpaceInfo outputFormat;\ninputFormat.metadataType = OH_VIDEO_HDR_HDR10;\ninputFormat.colorSpace = OH_COLORSPACE_BT2020_PQ_LIMIT;\ninputFormat.pixelFormat = NATIVEBUFFER_PIXEL_FMT_YCBCR_P010;\noutputFormat.metadataType = OH_VIDEO_HDR_HLG;\noutputFormat.colorSpace = OH_COLORSPACE_BT2020_HLG_LIMIT;\noutputFormat.pixelFormat = NATIVEBUFFER_PIXEL_FMT_YCBCR_P010;\n\n//能力查询\nbool isSupport = OH_VideoProcessing_IsColorSpaceConversionSupported(&inputFormat, &outputFormat);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建色彩空间转换模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过视频处理引擎模块类型来创建色彩空间转换模块。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoProcessor：色彩空间转换模块实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "VIDEO_PROCESSING_TYPE_COLOR_SPACE_CONVERSION：色彩空间转换类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预期返回值：VIDEO_PROCESSING_SUCCESS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过指定视频处理引擎类型创建色彩空间转换模块实例\nOH_VideoProcessing* videoProcessor = nullptr;\nVideoProcessing_ErrorCode ret = OH_VideoProcessing_Create(&videoProcessor, VIDEO_PROCESSING_TYPE_COLOR_SPACE_CONVERSION);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置异步回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 回调函数声明（其中userData会传递注册回调时传入的用户数据，如：this指针）\nvoid OnError(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData);\nvoid OnState(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData);\nvoid OnNewOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData);\n\n// 创建回调实例\nVideoProcessing_Callback* callback = nullptr;\nret = OH_VideoProcessingCallback_Create(&callback);\n// 绑定回调函数\nOH_VideoProcessingCallback_BindOnError(callback, OnError);\nOH_VideoProcessingCallback_BindOnState(callback, OnState);\nOH_VideoProcessingCallback_BindOnNewOutputBuffer(callback, OnNewOutputBuffer);\n// 注册回调函数\nret = OH_VideoProcessing_RegisterCallback(videoProcessor, callback, this);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//获取输入surface\nOHNativeWindow *inWindow = nullptr;\nret = OH_VideoProcessing_GetSurface(videoProcessor, &inWindow);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(831144)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过XComponent等其他方式获取OHNativeWindow实例，具体参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/native-surface/native-window-guidelines",
            children: "NativeWindows开发指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["视频处理引擎的SetSurface的windowOut从xcomponent的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/native-surface/native-window-guidelines",
            children: "OnSurfaceCreatedCB"
          }), "回调函数获取，需要对windowOut设置元数据类型、数据格式和颜色空间等参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置元数据类型、数据格式、颜色空间\nuint8_t metadataType = OH_VIDEO_HDR_HLG;\nOH_NativeWindow_SetMetadataValue(windowOut, OH_HDR_METADATA_TYPE, sizeof(uint8_t),\n(uint8_t *)&metadataType);\nOH_NativeBuffer_Format format = NATIVEBUFFER_PIXEL_FMT_YCBCR_P010;\nOH_NativeWindow_NativeWindowHandleOpt(windowOut, SET_FORMAT, format);\nOH_NativeBuffer_ColorSpace colorSpace = OH_COLORSPACE_BT2020_HLG_LIMIT;\nOH_NativeWindow_SetColorSpace(windowOut, colorSpace);\n// 设置输出surface\nVideoProcessing_ErrorCode ret = OH_VideoProcessing_SetSurface(videoProcessor, windowOut);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_start",
            children: "OH_VideoProcessing_Start()"
          }), "启动色彩空间转换处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开始色彩空间转换处理\nret = OH_VideoProcessing_Start(videoProcessor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_stop",
            children: "OH_VideoProcessing_Stop()"
          }), "停止色彩空间转换处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//停止色彩空间转换处理\nret = OH_VideoProcessing_Stop(videoProcessor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_VideoProcessingCallback_Destroy(callback);\ncallback = nullptr;\nOH_VideoProcessing_Destroy(videoProcessor);\nvideoProcessor = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_VideoProcessing_DeinitializeEnvironment();\n"
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
129188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958604-fd1f34b587b0e705b0b79ffc1652804d.png");

},
831144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
419514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798954-a5f815218ae9403d6369fc62e68fcbdf.png");

},
296173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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