"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["925031"], {
716211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_avmetadata_extractor_base_h_capi_avmetadata_extractor_base_h_md_dcf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-avmetadata-extractor-base-h-capi-avmetadata-extractor-base-h-md-dcf.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_avmetadata_extractor_base_h_capi_avmetadata_extractor_base_h_md_dcf_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h","title":"avmetadata_extractor_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h","slug":"/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"avmetadata_extractor_base.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avmetadata-extractor-base-h"},"sidebar":"ref","previous":{"title":"avmetadata_extractor.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h"},"next":{"title":"avplayer.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h.md


const frontMatter = {
	title: 'avmetadata_extractor_base.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avmetadata-extractor-base-h'
};
const contentTitle = 'avmetadata_extractor_base.h';

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
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AVMetadataExtractor_FetchState",
  "id": "oh_avmetadataextractor_fetchstate",
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
        id: "avmetadata_extractor_baseh",
        children: "avmetadata_extractor_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义AVMetadataExtractor常量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/avmetadata_extractor_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libavmetadata_extractor.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avmetadataextractor/capi-avmetadataextractor",
        children: "AVMetadataExtractor"
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
              href: "/ref/media-api/media-c/media-struct/metadataextractor-oh-avmetadataextractor-frameinfo/metadataextractor-oh-avmetadataextractor-frameinfo",
              children: "OH_AVMetadataExtractor_FrameInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadataExtractor_FrameInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义从视频中提取出的帧的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadataExtractor_OutputParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义由AVMetadataExtractor提取的帧的输出参数。"
          })]
        })]
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
              href: "#oh_avmetadataextractor_fetchstate",
              children: "OH_AVMetadataExtractor_FetchState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadataExtractor_FetchState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举帧提取操作的结果状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "static const char * OH_AVMETADATA_EXTRACTOR_ALBUM = \"album\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取专辑标题的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_ALBUM_ARTIST = \"albumArtist\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取专辑艺术家的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_ARTIST = \"artist\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源艺术家的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_AUTHOR = \"author\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源作者的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_DATE_TIME = \"dateTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源创建时间的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_DATE_TIME_FORMAT = \"dateTimeFormat\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源创建时间的关键字，对应值类型为const char*，按YYYY-MM-DD HH:mm:ss格式输出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_COMPOSER = \"composer\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源作曲家的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_DURATION = \"duration\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源时长的关键字，对应值类型为int64_t，单位为毫秒（ms）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_GENRE = \"genre\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源类型或体裁的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_HAS_AUDIO = \"hasAudio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否包含音频的关键字，对应值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_HAS_VIDEO = \"hasVideo\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否包含视频的关键字，对应值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_MIME_TYPE = \"mimeType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源mime类型的关键字，对应值类型为const char*，例如：“video/mp4”、“audio/mp4”和“audio/amr wb”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_TRACK_COUNT = \"trackCount\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源轨道数量的关键字，对应值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_SAMPLE_RATE = \"sampleRate\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频采样率的关键字，对应值类型为int32_t，单位为赫兹（Hz）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_TITLE = \"title\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源标题的关键字，对应值类型为const char*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_VIDEO_HEIGHT = \"videoHeight\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频高度的关键字，对应值类型为int32_t，单位为像素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_VIDEO_WIDTH = \"videoWidth\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频宽度的关键字，对应值类型为int32_t，单位为像素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_VIDEO_ORIENTATION = \"videoOrientation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频旋转方向的关键字，对应值类型为int32_t，单位为度（°）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_VIDEO_IS_HDR_VIVID = \"hdrType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取是否是HDR Vivid视频的关键字，对应值类型为int32_t。  详情请参阅media_types.h中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-media-types-h/capi-media-types-h#oh_core_hdrtype",
              children: "OH_Core_HdrType"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_LOCATION_LATITUDE = \"latitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取地理位置中的纬度值的关键字，对应值类型为float。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OH_AVMETADATA_EXTRACTOR_LOCATION_LONGITUDE = \"longitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取地理位置中的经度值的关键字，对应值类型为float。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVMetadataExtractor"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_fetchstate",
      children: "OH_AVMetadataExtractor_FetchState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVMetadataExtractor_FetchState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举帧提取操作的结果状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "OH_AVMETADATA_EXTRACTOR_FETCH_FAILED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提取操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMETADATA_EXTRACTOR_FETCH_SUCCEEDED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提取操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMETADATA_EXTRACTOR_FETCH_CANCELED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提取操作被用户取消。"
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