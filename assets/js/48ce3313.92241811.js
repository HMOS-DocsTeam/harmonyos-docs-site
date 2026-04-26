"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["46114"], {
523552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_avmetadata_extractor_h_capi_avmetadata_extractor_h_md_48c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-avmetadata-extractor-h-capi-avmetadata-extractor-h-md-48c.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_avmetadata_extractor_h_capi_avmetadata_extractor_h_md_48c_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h","title":"avmetadata_extractor.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-avmetadata-extractor-h","slug":"/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"avmetadata_extractor.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avmetadata-extractor-h"},"sidebar":"ref","previous":{"title":"avimage_generator_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avimage-generator-base-h/capi-avimage-generator-base-h"},"next":{"title":"avmetadata_extractor_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h.md


const frontMatter = {
	title: 'avmetadata_extractor.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avmetadata-extractor-h'
};
const contentTitle = 'avmetadata_extractor.h';

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
  "value": "OH_AVMetadataExtractor_OutputParam_Create()",
  "id": "oh_avmetadataextractor_outputparam_create",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_OutputParam_Destroy()",
  "id": "oh_avmetadataextractor_outputparam_destroy",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_OutputParam_SetSize()",
  "id": "oh_avmetadataextractor_outputparam_setsize",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_FetchFrameByTime()",
  "id": "oh_avmetadataextractor_fetchframebytime",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_OnFrameFetched()",
  "id": "oh_avmetadataextractor_onframefetched",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_FetchFramesByTimes()",
  "id": "oh_avmetadataextractor_fetchframesbytimes",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_CancelAllFetchFrames()",
  "id": "oh_avmetadataextractor_cancelallfetchframes",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_GetTrackDescription()",
  "id": "oh_avmetadataextractor_gettrackdescription",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_GetCustomInfo()",
  "id": "oh_avmetadataextractor_getcustominfo",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_SetMediaSource()",
  "id": "oh_avmetadataextractor_setmediasource",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_Create()",
  "id": "oh_avmetadataextractor_create",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_SetFDSource()",
  "id": "oh_avmetadataextractor_setfdsource",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_FetchMetadata()",
  "id": "oh_avmetadataextractor_fetchmetadata",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_FetchAlbumCover()",
  "id": "oh_avmetadataextractor_fetchalbumcover",
  "level": 3
}, {
  "value": "OH_AVMetadataExtractor_Release()",
  "id": "oh_avmetadataextractor_release",
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
        id: "avmetadata_extractorh",
        children: "avmetadata_extractor.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义AVMetadataExtractor接口。使用其Native API从媒体资源中获取元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/avmetadata_extractor.h>"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVMetadataExtractor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义OH_AVMetadataExtractor类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avmetadataextractor_outputparam_create",
              children: "OH_AVMetadataExtractor_OutputParam* OH_AVMetadataExtractor_OutputParam_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_AVMetadataExtractor_OutputParam实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_outputparam_destroy",
              children: "void OH_AVMetadataExtractor_OutputParam_Destroy(OH_AVMetadataExtractor_OutputParam* outputParam)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_AVMetadataExtractor_OutputParam实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_outputparam_setsize",
              children: "bool OH_AVMetadataExtractor_OutputParam_SetSize(OH_AVMetadataExtractor_OutputParam* outputParam, int32_t width, int32_t height)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AVMetadataExtractor_OutputParam实例的期望输出尺寸。若width或height小于0，则使用原始宽度或高度。若width或height等于0，则保持宽高比按比例缩放。若width和height均大于0，则使用输入的width和height参数缩放图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_fetchframebytime",
              children: "OH_AVErrCode OH_AVMetadataExtractor_FetchFrameByTime(OH_AVMetadataExtractor extractor, int64_t timeUs, OH_AVMedia_SeekMode seekMode, const OH_AVMetadataExtractor_OutputParam outputParam, OH_PixelmapNative** pixelMap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从视频源中提取指定时间点的图像。该函数必须在设置资源之后使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_onframefetched",
              children: "typedef void (*OH_AVMetadataExtractor_OnFrameFetched)(OH_AVMetadataExtractor extractor, const OH_AVMetadataExtractor_FrameInfo frameInfo, OH_AVErrCode code, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义用于获取AVMetadataExtractor捕获帧的回调函数。注意：frameInfo会在回调后自动释放，但用户需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_destroy",
              children: "OH_PixelmapNative_Destroy"
            }), "手动释放frameInfo.image，避免内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_fetchframesbytimes",
              children: "OH_AVErrCode OH_AVMetadataExtractor_FetchFramesByTimes(OH_AVMetadataExtractor extractor, int64_t timeUs[], uint16_t timesUsSize, OH_AVMedia_SeekMode seekMode, const OH_AVMetadataExtractor_OutputParam outputParam, OH_AVMetadataExtractor_OnFrameFetched onFrameInfoCallback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从视频源中异步提取多个指定时间点的图像。该函数必须在设置资源之后使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_cancelallfetchframes",
              children: "void OH_AVMetadataExtractor_CancelAllFetchFrames(OH_AVMetadataExtractor *extractor)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消所有由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_fetchframesbytimes",
              children: "OH_AVMetadataExtractor_FetchFramesByTimes"
            }), "发起的批量获取图像操作。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_onframefetched",
              children: "OH_AVMetadataExtractor_OnFrameFetched"
            }), "回调中，挂起的获取操作被取消，并标记结果为已取消。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_gettrackdescription",
              children: "OH_AVFormat *OH_AVMetadataExtractor_GetTrackDescription(OH_AVMetadataExtractor *extractor, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从媒体源中获取指定索引的轨道描述信息。该函数必须在设置资源之后使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_getcustominfo",
              children: "OH_AVFormat *OH_AVMetadataExtractor_GetCustomInfo(OH_AVMetadataExtractor *extractor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从媒体源中获取自定义元数据信息。该函数必须在设置资源之后使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_setmediasource",
              children: "OH_AVErrCode OH_AVMetadataExtractor_SetMediaSource(OH_AVMetadataExtractor *extractor, OH_AVMediaSource *source)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为提取器设置媒体源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_create",
              children: "OH_AVMetadataExtractor* OH_AVMetadataExtractor_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_AVMetadataExtractor实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_setfdsource",
              children: "OH_AVErrCode OH_AVMetadataExtractor_SetFDSource(OH_AVMetadataExtractor* extractor, int32_t fd, int64_t offset, int64_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过媒体文件描述符设置数据源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_fetchmetadata",
              children: "OH_AVErrCode OH_AVMetadataExtractor_FetchMetadata(OH_AVMetadataExtractor* extractor, OH_AVFormat* avMetadata)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从媒体资源中获取元数据。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_setfdsource",
              children: "OH_AVMetadataExtractor_SetFDSource"
            }), "之后调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_fetchalbumcover",
              children: "OH_AVErrCode OH_AVMetadataExtractor_FetchAlbumCover(OH_AVMetadataExtractor* extractor, OH_PixelmapNative** pixelMap)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频专辑封面。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_setfdsource",
              children: "OH_AVMetadataExtractor_SetFDSource"
            }), "之后调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avmetadataextractor_release",
              children: "OH_AVErrCode OH_AVMetadataExtractor_Release(OH_AVMetadataExtractor* extractor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放用于OH_AVMetadataExtractor的资源并销毁OH_AVMetadataExtractor实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_outputparam_create",
      children: "OH_AVMetadataExtractor_OutputParam_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVMetadataExtractor_OutputParam* OH_AVMetadataExtractor_OutputParam_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_AVMetadataExtractor_OutputParam实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向OH_AVMetadataExtractor_OutputParam实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_outputparam_destroy",
      children: "OH_AVMetadataExtractor_OutputParam_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_AVMetadataExtractor_OutputParam_Destroy(OH_AVMetadataExtractor_OutputParam* outputParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_AVMetadataExtractor_OutputParam实例。"
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
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            }), "* outputParam"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor_OutputParam实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_outputparam_setsize",
      children: "OH_AVMetadataExtractor_OutputParam_SetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_AVMetadataExtractor_OutputParam_SetSize(OH_AVMetadataExtractor_OutputParam* outputParam, int32_t width, int32_t height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AVMetadataExtractor_OutputParam实例的期望输出尺寸。若width或height小于0，则使用原始宽度或高度。若width或height等于0，则保持宽高比按比例缩放。若width和height均大于0，则使用输入的width和height参数缩放图像。"
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
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            }), "* outputParam"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor_OutputParam实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出图像的期望宽度，如有必要可进行缩放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出图像的期望高度，如有必要可进行缩放。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回true，失败返回false。  可能失败的原因：outputParam为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_fetchframebytime",
      children: "OH_AVMetadataExtractor_FetchFrameByTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_FetchFrameByTime(OH_AVMetadataExtractor *extractor, int64_t timeUs, OH_AVMedia_SeekMode seekMode, const OH_AVMetadataExtractor_OutputParam* outputParam, OH_PixelmapNative** pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从视频源中提取指定时间点的图像。该函数必须在设置资源之后使用。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要从视频资源中提取图像的时间位置（单位：微秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmedia-base-h/capi-avmedia-base-h#oh_avmedia_seekmode",
              children: "OH_AVMedia_SeekMode"
            }), " seekMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义指定时间与关键帧之间关系的跳转模式。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmedia-base-h/capi-avmedia-base-h#oh_avmedia_seekmode",
              children: "OH_AVMedia_SeekMode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "const OH_AVMetadataExtractor_OutputParam"
            }), "* outputParam"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的输出参数，例如图像的高度或者宽度。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            }), "。若为空指针，使用视频的原始尺寸。注意：用户需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_destroy",
              children: "OH_PixelmapNative_Destroy"
            }), "在使用pixelMap后将其释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "** pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于接收从视频源提取的图像，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "。"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数执行结果。  AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数无效。  AV_ERR_OPERATE_NOT_PERMIT：操作不允许。  AV_ERR_UNSUPPORTED_FORMAT：格式不支持。  AV_ERR_SERVICE_DIED：服务已终止。  AV_ERR_IO_CLEARTEXT_NOT_PERMITTED：不允许HTTP明文流量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_onframefetched",
      children: "OH_AVMetadataExtractor_OnFrameFetched()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVMetadataExtractor_OnFrameFetched)(OH_AVMetadataExtractor *extractor, const OH_AVMetadataExtractor_FrameInfo* frameInfo, OH_AVErrCode code, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义用于获取AVMetadataExtractor捕获帧的回调函数。注意：frameInfo会在回调后自动释放，但用户需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_destroy",
        children: "OH_PixelmapNative_Destroy"
      }), "手动释放frameInfo.image，避免内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_fetchframesbytimes",
      children: "OH_AVMetadataExtractor_FetchFramesByTimes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_FetchFramesByTimes(OH_AVMetadataExtractor *extractor, int64_t timeUs[], uint16_t timesUsSize, OH_AVMedia_SeekMode seekMode, const OH_AVMetadataExtractor_OutputParam* outputParam, OH_AVMetadataExtractor_OnFrameFetched onFrameInfoCallback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从视频源中异步提取多个指定时间点的图像。该函数必须在设置资源之后使用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeUs[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从视频源提取图像时的时间点数组（单位：微秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t timesUsSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入时间点数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmedia-base-h/capi-avmedia-base-h#oh_avmedia_seekmode",
              children: "OH_AVMedia_SeekMode"
            }), " seekMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义每个给定时间与关键帧之间关系的跳转选项，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmedia-base-h/capi-avmedia-base-h#oh_avmedia_seekmode",
              children: "OH_AVMedia_SeekMode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "const OH_AVMetadataExtractor_OutputParam"
            }), "* outputParam"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的输出参数，例如图像的高度或者宽度。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/tadataextractor-oh-avmetadataextractor-outputparam/tadataextractor-oh-avmetadataextractor-outputparam",
              children: "OH_AVMetadataExtractor_OutputParam"
            }), "。若该参数为空指针，则获取的帧使用视频原始尺寸。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_onframefetched",
              children: "OH_AVMetadataExtractor_OnFrameFetched"
            }), " onFrameInfoCallback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧提取完成或提取失败后调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给回调函数的用户自定义数据指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数执行结果。  AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数无效。  AV_ERR_SERVICE_DIED：服务已终止。  AV_ERR_IO_CLEARTEXT_NOT_PERMITTED：不允许HTTP明文流量。  AV_ERR_OPERATE_NOT_PERMIT：操作不允许。由onFrameInfoCallback返回。  AV_ERR_UNSUPPORTED_FORMAT：格式不支持。由onFrameInfoCallback返回。  AV_ERR_TIMEOUT：执行超时。由onFrameInfoCallback返回。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_cancelallfetchframes",
      children: "OH_AVMetadataExtractor_CancelAllFetchFrames()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_AVMetadataExtractor_CancelAllFetchFrames(OH_AVMetadataExtractor *extractor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消所有由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_fetchframesbytimes",
        children: "OH_AVMetadataExtractor_FetchFramesByTimes"
      }), "发起的批量获取图像操作。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_onframefetched",
        children: "OH_AVMetadataExtractor_OnFrameFetched"
      }), "回调中，挂起的获取操作被取消，并标记结果为已取消。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_gettrackdescription",
      children: "OH_AVMetadataExtractor_GetTrackDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AVMetadataExtractor_GetTrackDescription(OH_AVMetadataExtractor *extractor, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从媒体源中获取指定索引的轨道描述信息。该函数必须在设置资源之后使用。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的轨道描述的索引。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功时返回包含轨道描述信息的OH_AVFormat实例指针，失败时返回空指针。  可能失败的原因：  1. extractor为空指针。  2. 未设置媒体源。  3. 格式不支持。  注意：用户需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "在使用OH_AVFormat后将其释放。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_getcustominfo",
      children: "OH_AVMetadataExtractor_GetCustomInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AVMetadataExtractor_GetCustomInfo(OH_AVMetadataExtractor *extractor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从媒体源中获取自定义元数据信息。该函数必须在设置资源之后使用。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功时返回包含自定义元数据的OH_AVFormat实例指针，失败时返回空指针。  可能失败的原因：  1. extractor为空指针。  2. 未设置媒体源。  3. 未找到自定义信息。  注意：用户需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "在使用OH_AVFormat后将其释放。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_setmediasource",
      children: "OH_AVMetadataExtractor_SetMediaSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_SetMediaSource(OH_AVMetadataExtractor *extractor, OH_AVMediaSource *source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为提取器设置媒体源。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), " *extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avmedia-source-oh-avmediasource/capi-avmedia-source-oh-avmediasource",
              children: "OH_AVMediaSource"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的媒体源。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数执行结果。  AV_ERR_OK：表示执行成功。  AV_ERR_INVALID_VAL：输入的extractor为空指针或输入的source无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_create",
      children: "OH_AVMetadataExtractor_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVMetadataExtractor* OH_AVMetadataExtractor_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_AVMetadataExtractor实例。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建成功时返回指向OH_AVMetadataExtractor实例的指针，否则返回空指针。  可能的失败原因：HstEngineFactory::CreateAVMetadataHelperEngine执行失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_setfdsource",
      children: "OH_AVMetadataExtractor_SetFDSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_SetFDSource(OH_AVMetadataExtractor* extractor, int32_t fd, int64_t offset, int64_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过媒体文件描述符设置数据源。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), "* extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体源的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体源在文件描述符中的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体源的大小。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL： 输入的extractor为空指针或参数无效。  AV_ERR_OPERATE_NOT_PERMIT：操作被禁止。  AV_ERR_NO_MEMORY：内部内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_fetchmetadata",
      children: "OH_AVMetadataExtractor_FetchMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_FetchMetadata(OH_AVMetadataExtractor* extractor, OH_AVFormat* avMetadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从媒体资源中获取元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_setfdsource",
        children: "OH_AVMetadataExtractor_SetFDSource"
      }), "之后调用。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), "* extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* avMetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat实例的指针，其内容包含获取的元数据信息。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL： 输入的extractor为空指针或参数无效。  AV_ERR_OPERATE_NOT_PERMIT：操作被禁止。  AV_ERR_UNSUPPORTED_FORMAT：格式不支持。  AV_ERR_NO_MEMORY：内部内存分配失败。  AV_ERR_IO_CLEARTEXT_NOT_PERMITTED：（API version 23新增）不允许HTTP明文流量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_fetchalbumcover",
      children: "OH_AVMetadataExtractor_FetchAlbumCover()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_FetchAlbumCover(OH_AVMetadataExtractor* extractor, OH_PixelmapNative** pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音频专辑封面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_setfdsource",
        children: "OH_AVMetadataExtractor_SetFDSource"
      }), "之后调用。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), "* extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "** pixelMap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从音频源获取的专辑封面。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL： 输入的extractor为空指针或参数无效。  AV_ERR_OPERATE_NOT_PERMIT：操作被禁止。  AV_ERR_UNSUPPORTED_FORMAT：格式不支持。  AV_ERR_NO_MEMORY：内部内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avmetadataextractor_release",
      children: "OH_AVMetadataExtractor_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVMetadataExtractor_Release(OH_AVMetadataExtractor* extractor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放用于OH_AVMetadataExtractor的资源并销毁OH_AVMetadataExtractor实例。"
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
              href: "/ref/media-api/media-c/media-struct/capi-avmetadataextractor-oh-avmetadataextractor/capi-avmetadataextractor-oh-avmetadataextractor",
              children: "OH_AVMetadataExtractor"
            }), "* extractor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVMetadataExtractor实例指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL： 输入的extractor为空指针或参数无效。"
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