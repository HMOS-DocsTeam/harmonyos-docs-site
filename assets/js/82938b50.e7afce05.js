"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["774533"], {
366335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_avcodec_support_formats_avcodec_support_formats_md_829_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-avcodec-support-formats-avcodec-support-formats-md-829.json
var site_docs_avcodec_kit_avcodec_support_formats_avcodec_support_formats_md_829_namespaceObject = JSON.parse('{"id":"avcodec-kit/avcodec-support-formats/avcodec-support-formats","title":"AVCodec支持的格式","description":"音视频的编解码能力以及文件格式封装和解封装能力的支持情况，在不同平台存在能力和规格的差异。开发者可以通过获取支持的编解码能力来获取实际的支持情况和规格情况。","source":"@site/docs/avcodec-kit/avcodec-support-formats/avcodec-support-formats.md","sourceDirName":"avcodec-kit/avcodec-support-formats","slug":"/avcodec-kit/avcodec-support-formats/","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-support-formats/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AVCodec支持的格式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-support-formats","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AVCodec Kit简介","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-kit-intro/"},"next":{"title":"获取支持的编解码能力","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/obtain-supported-codecs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/avcodec-support-formats/avcodec-support-formats.md


const frontMatter = {
	title: 'AVCodec支持的格式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-support-formats',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'AVCodec支持的格式';

const assets = {

};



const toc = [{
  "value": "媒体编解码",
  "id": "媒体编解码",
  "level": 2
}, {
  "value": "视频解码",
  "id": "视频解码",
  "level": 3
}, {
  "value": "视频编码",
  "id": "视频编码",
  "level": 3
}, {
  "value": "音频解码",
  "id": "音频解码",
  "level": 3
}, {
  "value": "音频编码",
  "id": "音频编码",
  "level": 3
}, {
  "value": "媒体数据封装与解析",
  "id": "媒体数据封装与解析",
  "level": 2
}, {
  "value": "媒体数据解析",
  "id": "媒体数据解析",
  "level": 3
}, {
  "value": "媒体数据封装",
  "id": "媒体数据封装",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "avcodec支持的格式",
        children: "AVCodec支持的格式"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音视频的编解码能力以及文件格式封装和解封装能力的支持情况，在不同平台存在能力和规格的差异。开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "获取支持的编解码能力"
      }), "来获取实际的支持情况和规格情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体编解码",
      children: "媒体编解码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频解码",
      children: "视频解码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的解码能力如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频解码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "视频解码格式的MIME类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSVIDEO122+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_MSVIDEO1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMV322+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_WMV3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MJPEG22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_MJPEG"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H.263"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_H263"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC(H.264)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC(H.265)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV123+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_AV1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP923+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_VP9"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP823+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_VP8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RV3023+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_RV30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RV4023+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_RV40"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC123+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_WVC1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DVVIDEO23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_DVVIDEO"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAWVIDEO23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_RAWVIDEO"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG123+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC(H.266)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_VVC"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MIME类型创建解码器时，如果系统平台支持硬件解码，系统平台会优先创建硬件解码器实例；如果系统平台不支持或者硬件解码器资源不足时，系统平台会创建软件解码器实例；如果系统平台无对应解码能力，会创建解码器实例失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统平台提供的解码能力和设备强相关，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "获取支持的编解码能力"
      }), "获取系统平台支持的软硬件解码能力和能力规格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如可以通过OH_AVCODEC_MIMETYPE_VIDEO_AVC、OH_AVCODEC_MIMETYPE_VIDEO_HEVC、OH_AVCODEC_MIMETYPE_VIDEO_VVC来查询系统平台支持的H.264、H.265、H.266的硬件解码能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-decoding",
        children: "视频解码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频编码",
      children: "视频编码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的编码能力如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频编码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "视频编码格式的MIME类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC(H.265)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC(H.264)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果系统平台无对应编码能力，会创建编码器实例失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于MimeType创建编码器时，可以配置为H.264(OH_AVCODEC_MIMETYPE_VIDEO_AVC)和H.265(OH_AVCODEC_MIMETYPE_VIDEO_HEVC)。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统平台支持情况和每种编码的能力范围，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "获取支持的编解码能力"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频解码",
      children: "音频解码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的解码能力："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频解码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音频解码格式的MIME类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AAC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG(MP3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_MPEG"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_FLAC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vorbis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_VORBIS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMR(amrnb、amrwb)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G711mu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_G711MU"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_APE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G711a20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_G711A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALAC22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_ALAC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC322+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AC3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMA22+(V1、V2、PRO)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAV1"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAPRO"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GSM22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_GSM"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GSM_MS22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_GSM_MS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audio ViVid11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_VIVID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "opus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_OPUS"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果系统平台无对应解码能力，会创建解码器实例失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统平台提供的解码能力和设备强相关，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "获取支持的编解码能力"
      }), "获取系统平台支持的解码能力和能力规格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始支持：TWINVQ、ILBC、TRUEHD、DVAUDIO、DTS、COOK。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audio-decoding",
        children: "音频解码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频编码",
      children: "音频编码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的编码能力："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频编码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音频编码格式的MIME类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AAC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_FLAC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG(MP3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_MPEG"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G711mu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_G711MU"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMR(amrnb、amrwb)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "opus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_AUDIO_OPUS"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果系统平台无对应编码能力，会创建编码器实例失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统平台提供的编码能力和设备强相关，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "获取支持的编解码能力"
      }), "获取系统平台支持的编码能力和能力规格。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audio-encoding",
        children: "音频编码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体数据封装与解析",
      children: "媒体数据封装与解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体数据解析",
      children: "媒体数据解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的解封装格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "媒体格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "封装格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "轨道格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)、VVC(H.266)、MPEG4  音频轨：AAC、MPEG(MP3)、Audio Vivid、ALAC22+  字幕轨：WEBVTT  辅助轨：AUXL（音频RAW信息、视频深度信息等。）  timed metadata轨：有时间属性的描述信息，如帧级的维测信息、传感器信息等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fmp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)  音频轨：AAC、MPEG(MP3)、Audio Vivid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mkv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)、MSVIDEO122+  音频轨：AAC、MPEG(MP3)、OPUS、ADPCM_YAMAHA22+、ADPCM_G72222+、ALAC22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mpeg-ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)、MPEG2、MPEG4  音频轨：AAC、MPEG(MP3)、Audio Vivid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)  音频轨：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mpeg-ps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、MPEG2  音频轨：MPEG(MP2、MP3)、DTS23+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "avi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：H.263、AVC(H.264)、MPEG2、MPEG4、MJPEG22+、MSVIDEO122+  音频轨：AAC、MPEG(MP2、MP3)、PCM、GSM_MS22+、ADPCM_YAMAHA22+、ADPCM_G72222+、DVAUDIO23+、DTS23+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3gp22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：H.263、AVC(H.264)、MPEG4  音频轨：AAC、AMR(amrnb、amrwb)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3g222+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：H.263、AVC(H.264)、MPEG4  音频轨：AAC、AMR(amrnb、amrwb)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m4v22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、HEVC(H.265)、MPEG4  音频轨：AAC、ALAC、AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wmv22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：AVC(H.264)、WMV3  音频轨：WMAV1、WMAV2、WMAPRO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rm23+、rmvb23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨：RV30、RV40  音频轨：AAC、AC3、COOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：AAC、Audio Vivid、ALAC22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：MPEG(MP3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：Vorbis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：Flac"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：PCM、G711mu、G711a、GSM_MS22+、ADPCM_YAMAHA22+、ADPCM_G72222+、ADPCM_G72622+、DVAUDIO23+、DTS23+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：AMR(amrnb、amrwb)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：APE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wma22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：AC3、WMAV1、WMAV2、Vorbis、Flac、AMR(amrnb、amrwb)、AAC、MPEG(MP2、MP3)、GSM_MS、G711mu、G711a、PCM、ADPCM_G722、ADPCM_G726、ADPCM_IMA_WAV、ADPCM_MS、ADPCM_YAMAHA、DVAUDIO23+、DTS23+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sunAU24+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：PCM、ADPCM_G722、ADPCM_G726LE、G711mu、G711a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dts23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨：DTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "外挂字幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "srt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字幕轨：SRT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "外挂字幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "webvtt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字幕轨：WEBVTT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DRM解密能力支持的解封装格式：mp4(H.264，H.265，AAC)、mpeg-ts(H.264，H.265，AAC)。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
        children: "媒体数据解析"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体数据封装",
      children: "媒体数据封装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的封装能力如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "封装格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "视频编解码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音频编解码类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "封面类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC（H.264）、HEVC（H.265）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC、MPEG（MP3）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jpeg、png、bmp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jpeg、png、bmp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG（MP3）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMR(amrnb、amrwb)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G711mu(pcm-mulaw) 、raw(pcm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jpeg、png、bmp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ogg23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vorbis、OPUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(713030)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "封装格式为mp4，音频编解码类型为MPEG（MP3）时采样率需大于等于16000Hz。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "封装格式为mp4/m4a，音频编解码类型为AAC时声道数范围为1~7。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件级数据已定义的key如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CREATION_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件创建时间的元数据，值类型为string（API14开始支持）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COMMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件注释的键，值类型为string（API20开始支持）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ENABLE_MOOV_FRONT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件moov元数据是否前置标志，值类型为int32_t（API20开始支持）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845230)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户自定义的key必须以\"com.openharmony.\"为开头。值类型可以为int32_t、float、string，从API20开始增加支持uint8_t*。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置选项key值说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mp4封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H.264"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H.265"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "jpg"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "png"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "bmp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码档次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流帧率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COLOR_PRIMARIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频色域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRANSFER_CHARACTERISTICS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频传递函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MATRIX_COEFFICIENTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频矩阵系数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_RANGE_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值域标志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_IS_HDR_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨是否为HDR VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mp4封装辅助轨格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H.264"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H.265"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道媒体类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_REFERENCE_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道引用类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_DESCRIPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道标识"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_REFERENCE_TRACK_IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引用轨道编号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码档次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流帧率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COLOR_PRIMARIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频色域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRANSFER_CHARACTERISTICS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频传递函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MATRIX_COEFFICIENTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频矩阵系数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_RANGE_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值域标志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_IS_HDR_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨是否为HDR VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "m4a封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "jpg"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "png"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "bmp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码档次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "amr封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "amr_nb"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "amr_wb"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mp3封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "jpg"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wav封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g711mu"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "raw"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aac封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "aac"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码档次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AAC_IS_ADTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为ADTS格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "flac封装格式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "flac"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ogg封装格式（从API version 23开始支持）："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vorbis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OPUS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
        children: "媒体数据封装"
      }), "。"]
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
713030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
845230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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