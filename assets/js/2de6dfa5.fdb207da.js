"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["10149"], {
374313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_base_h_capi_native_avcodec_base_h_md_2de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-headerfile-capi-native-avcodec-base-h-capi-native-avcodec-base-h-md-2de.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_base_h_capi_native_avcodec_base_h_md_2de_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h","title":"native_avcodec_base.h","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h","slug":"/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"native_avcodec_base.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avcodec-base-h"},"sidebar":"ref","previous":{"title":"native_avcodec_audiocodec.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h"},"next":{"title":"media_types.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-media-types-h/capi-media-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h.md


const frontMatter = {
	title: 'native_avcodec_base.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avcodec-base-h'
};
const contentTitle = 'native_avcodec_base.h';

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
  "value": "OH_MediaType",
  "id": "oh_mediatype",
  "level": 3
}, {
  "value": "OH_AACProfile",
  "id": "oh_aacprofile",
  "level": 3
}, {
  "value": "OH_AVCProfile",
  "id": "oh_avcprofile",
  "level": 3
}, {
  "value": "OH_HEVCProfile",
  "id": "oh_hevcprofile",
  "level": 3
}, {
  "value": "OH_VVCProfile",
  "id": "oh_vvcprofile",
  "level": 3
}, {
  "value": "OH_MPEG2Profile",
  "id": "oh_mpeg2profile",
  "level": 3
}, {
  "value": "OH_MPEG4Profile",
  "id": "oh_mpeg4profile",
  "level": 3
}, {
  "value": "OH_H263Profile",
  "id": "oh_h263profile",
  "level": 3
}, {
  "value": "OH_VC1Profile",
  "id": "oh_vc1profile",
  "level": 3
}, {
  "value": "OH_AV1Profile",
  "id": "oh_av1profile",
  "level": 3
}, {
  "value": "OH_VP9Profile",
  "id": "oh_vp9profile",
  "level": 3
}, {
  "value": "OH_WVC1Profile",
  "id": "oh_wvc1profile",
  "level": 3
}, {
  "value": "OH_WMV3Profile",
  "id": "oh_wmv3profile",
  "level": 3
}, {
  "value": "OH_AVOutputFormat",
  "id": "oh_avoutputformat",
  "level": 3
}, {
  "value": "OH_AVSeekMode",
  "id": "oh_avseekmode",
  "level": 3
}, {
  "value": "OH_ScalingMode",
  "id": "oh_scalingmode",
  "level": 3
}, {
  "value": "OH_BitsPerSample",
  "id": "oh_bitspersample",
  "level": 3
}, {
  "value": "OH_ColorPrimary",
  "id": "oh_colorprimary",
  "level": 3
}, {
  "value": "OH_TransferCharacteristic",
  "id": "oh_transfercharacteristic",
  "level": 3
}, {
  "value": "OH_MatrixCoefficient",
  "id": "oh_matrixcoefficient",
  "level": 3
}, {
  "value": "OH_AVCLevel",
  "id": "oh_avclevel",
  "level": 3
}, {
  "value": "OH_HEVCLevel",
  "id": "oh_hevclevel",
  "level": 3
}, {
  "value": "OH_VVCLevel",
  "id": "oh_vvclevel",
  "level": 3
}, {
  "value": "OH_MPEG2Level",
  "id": "oh_mpeg2level",
  "level": 3
}, {
  "value": "OH_MPEG4Level",
  "id": "oh_mpeg4level",
  "level": 3
}, {
  "value": "OH_H263Level",
  "id": "oh_h263level",
  "level": 3
}, {
  "value": "OH_VC1Level",
  "id": "oh_vc1level",
  "level": 3
}, {
  "value": "OH_AV1Level",
  "id": "oh_av1level",
  "level": 3
}, {
  "value": "OH_VP9Level",
  "id": "oh_vp9level",
  "level": 3
}, {
  "value": "OH_WVC1Level",
  "id": "oh_wvc1level",
  "level": 3
}, {
  "value": "OH_WMV3Level",
  "id": "oh_wmv3level",
  "level": 3
}, {
  "value": "OH_TemporalGopReferenceMode",
  "id": "oh_temporalgopreferencemode",
  "level": 3
}, {
  "value": "OH_BitrateMode",
  "id": "oh_bitratemode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVCodecOnError()",
  "id": "oh_avcodeconerror",
  "level": 3
}, {
  "value": "OH_AVCodecOnStreamChanged()",
  "id": "oh_avcodeconstreamchanged",
  "level": 3
}, {
  "value": "OH_AVCodecOnNeedInputData()",
  "id": "oh_avcodeconneedinputdata",
  "level": 3
}, {
  "value": "OH_AVCodecOnNewOutputData()",
  "id": "oh_avcodeconnewoutputdata",
  "level": 3
}, {
  "value": "OH_AVCodecOnNeedInputBuffer()",
  "id": "oh_avcodeconneedinputbuffer",
  "level": 3
}, {
  "value": "OH_AVCodecOnNewOutputBuffer()",
  "id": "oh_avcodeconnewoutputbuffer",
  "level": 3
}, {
  "value": "OH_AVDataSourceReadAt()",
  "id": "oh_avdatasourcereadat",
  "level": 3
}, {
  "value": "OH_AVDataSourceReadAtExt()",
  "id": "oh_avdatasourcereadatext",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
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
        id: "native_avcodec_baseh",
        children: "native_avcodec_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于音视频封装、解封装、编解码基础功能的Native API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avcodec_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_media_codecbase.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase",
        children: "CodecBase"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
        children: "AVCodec"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodecasynccallback/capi-codecbase-oh-avcodecasynccallback",
              children: "OH_AVCodecAsyncCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecAsyncCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVCodec实例中，并处理回调上报的信息，以保证OH_AVCodec的正常运行。(API11废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodeccallback/capi-codecbase-oh-avcodeccallback",
              children: "OH_AVCodecCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVCodec实例中，并处理回调上报的信息，以保证OH_AVCodec的正常运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avdatasource/capi-codecbase-oh-avdatasource",
              children: "OH_AVDataSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVDataSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avdatasourceext/capi-codecbase-oh-avdatasourceext",
              children: "OH_AVDataSourceExt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVDataSourceExt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据源，回调支持通过userData传递用户自定义数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-nativewindow/capi-codecbase-nativewindow",
              children: "NativeWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为图形接口定义native层对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为音视频编解码接口定义native层对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_mediatype",
              children: "OH_MediaType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_aacprofile",
              children: "OH_AACProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AACProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcprofile",
              children: "OH_AVCProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hevcprofile",
              children: "OH_HEVCProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HEVCProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vvcprofile",
              children: "OH_VVCProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VVCProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mpeg2profile",
              children: "OH_MPEG2Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MPEG2Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mpeg4profile",
              children: "OH_MPEG4Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MPEG4Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_h263profile",
              children: "OH_H263Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_H263Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.263档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vc1profile",
              children: "OH_VC1Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VC1Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VC-1档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_av1profile",
              children: "OH_AV1Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AV1Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV1档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vp9profile",
              children: "OH_VP9Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VP9Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP9档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_wvc1profile",
              children: "OH_WVC1Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WVC1Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_wmv3profile",
              children: "OH_WMV3Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WMV3Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avoutputformat",
              children: "OH_AVOutputFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVOutputFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装器支持的输出文件格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avseekmode",
              children: "OH_AVSeekMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSeekMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scalingmode",
              children: "OH_ScalingMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ScalingMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放模式，只在Surface模式下使用。(API14废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_bitspersample",
              children: "OH_BitsPerSample"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_BitsPerSample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个编码样本的音频位数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_colorprimary",
              children: "OH_ColorPrimary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ColorPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色域。编解码都支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_transfercharacteristic",
              children: "OH_TransferCharacteristic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TransferCharacteristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转移特性。编解码都支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_matrixcoefficient",
              children: "OH_MatrixCoefficient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MatrixCoefficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩阵系数。编解码都支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avclevel",
              children: "OH_AVCLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hevclevel",
              children: "OH_HEVCLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HEVCLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vvclevel",
              children: "OH_VVCLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VVCLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mpeg2level",
              children: "OH_MPEG2Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MPEG2Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_mpeg4level",
              children: "OH_MPEG4Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MPEG4Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_h263level",
              children: "OH_H263Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_H263Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.263级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vc1level",
              children: "OH_VC1Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VC1Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VC-1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_av1level",
              children: "OH_AV1Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AV1Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vp9level",
              children: "OH_VP9Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VP9Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP9级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_wvc1level",
              children: "OH_WVC1Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WVC1Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_wmv3level",
              children: "OH_WMV3Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WMV3Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_temporalgopreferencemode",
              children: "OH_TemporalGopReferenceMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TemporalGopReferenceMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时域图片组参考模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_bitratemode",
              children: "OH_BitrateMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_BitrateMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码器的比特率模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#oh_avcodeconerror",
              children: "typedef void (*OH_AVCodecOnError)(OH_AVCodec *codec, int32_t errorCode, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVCodec实例运行出错时，会调用来上报具体的错误信息的函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconstreamchanged",
              children: "typedef void (*OH_AVCodecOnStreamChanged)(OH_AVCodec *codec, OH_AVFormat *format, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnStreamChanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当视频解码输入码流分辨率或者视频编码输出码流的分辨率发生变化时，调用此函数指针报告新的流描述信息。  从API version 15开始，支持音频解码时，码流采样率、声道数或者音频采样格式发生变化时，将调用此函数指针报告新的流描述信息，支持检测此变化的解码格式有：Audio Vivid，AAC，FLAC，MP3，VORBIS。  需要注意的是，OH_AVFormat指针的生命周期只有在函数指针被调用时才有效，调用结束后禁止继续访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconneedinputdata",
              children: "typedef void (*OH_AVCodecOnNeedInputData)(OH_AVCodec *codec, uint32_t index, OH_AVMemory *data, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnNeedInputData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVCodec在运行过程中需要新的输入数据时，将调用此函数指针，并携带可用的缓冲区来填充新的输入数据。(API11废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconnewoutputdata",
              children: "typedef void (*OH_AVCodecOnNewOutputData)(OH_AVCodec *codec, uint32_t index, OH_AVMemory *data, OH_AVCodecBufferAttr *attr, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnNewOutputData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVCodec运行过程中生成新的输出数据时，将调用此函数指针，并携带包含新输出数据的缓冲区。需要注意的是，OH_AVCodecBufferAttr指针的生命周期仅在调用函数指针时有效，这将禁止调用结束后继续访问。(API11废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconneedinputbuffer",
              children: "typedef void (*OH_AVCodecOnNeedInputBuffer)(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnNeedInputBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVCodec在运行过程中需要新的输入数据时，将调用此函数指针，并携带可用的缓冲区来填充新的输入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconnewoutputbuffer",
              children: "typedef void (*OH_AVCodecOnNewOutputBuffer)(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecOnNewOutputBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVCodec运行过程中生成新的输出数据时，将调用此函数指针，并携带包含新输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avdatasourcereadat",
              children: "typedef int32_t (*OH_AVDataSourceReadAt)(OH_AVBuffer *data, int32_t length, int64_t pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVDataSourceReadAt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数指针定义，用于提供获取用户自定义媒体数据的能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avdatasourcereadatext",
              children: "typedef int32_t (*OH_AVDataSourceReadAtExt)(OH_AVBuffer *data, int32_t length, int64_t pos, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVDataSourceReadAtExt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数指针定义，用于提供获取用户自定义媒体数据的能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_AVC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AVC(H.264)视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_AAC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AAC音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_FLAC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FLAC音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_VORBIS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VORBIS音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_MPEG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MP3音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_HEVC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HEVC(H.265)视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MPEG4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MPEG4视频编码的MIME类型，仅用于封装MPEG4视频码流使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代接口："
              })
            }), " OH_AVCODEC_MIMETYPE_VIDEO_MPEG4_PART2  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MPEG4_PART2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频MPEG4 Part2编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 17  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MPEG2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频MPEG2编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 17  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_H263"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["H.263视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 17  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_VC1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VC-1视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_AV1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AV1视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_VP9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VP9视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_VP8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VP8视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_RV30"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RV30视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_RV40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RV40视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_WVC1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WVC1视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_DVVIDEO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DVVIDEO（Digital Video）视频编解码器的MIME类型。支持DV NTSC、DV PAL与DVCPRO HD。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_RAWVIDEO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RAWVIDEO视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MPEG1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MPEG1视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MSVIDEO1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MSVIDEO1（Microsoft Video 1）视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_WMV3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WMV3视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_MJPEG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MJPEG（Motion JPEG）视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_IMAGE_JPG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JPG图片编码的MIME类型，仅用于封装JPG封面时使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_IMAGE_PNG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PNG图片编码的MIME类型，仅用于封装PNG封面时使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_IMAGE_BMP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BMP图片编码的MIME类型，仅用于封装BMP封面时使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_VIVID"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Audio Vivid音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AMR_NB音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AMR_WB音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_OPUS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OPUS音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_G711MU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["G711MU音频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_ALAC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ALAC（Apple Lossless Audio Codec）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_AC3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AC3（Dolby Audio Coding 3）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_EAC3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["EAC3（Enhanced AC-3）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_WMAV1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WMA（Windows Media Audio）V1音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_WMAV2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WMA（Windows Media Audio）V2音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_WMAPRO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WMA（Windows Media Audio）Pro音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_BLOCK_ALIGN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["划分音频数据块大小的键，单位为字节，值类型为int32_t。该键仅用于WMA（V1、V2、PRO）解码器。  允许的MIME类型包括OH_AVCODEC_MIMETYPE_AUDIO_WMAV1，OH_AVCODEC_MIMETYPE_AUDIO_WMAV2和OH_AVCODEC_MIMETYPE_AUDIO_WMAPRO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_GSM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GSM（Global System for Mobile Communications）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_GSM_MS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GSM MS（Microsoft variant）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_TWINVQ"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TWINVQ（Transform-domain Weighted Interleave Vector Quantization）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_ILBC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ILBC（Internet Low Bitrate Codec） 音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_TRUEHD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TRUEHD（True High Definition）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_VIDEO_VVC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VVC(H.266)视频编解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_APE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["APE音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_SUBTITLE_SRT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SRT字幕解封装器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_SUBTITLE_WEBVTT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WEBVTT字幕解封装器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_RAW"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RAW音频码流的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_G711A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["G711A音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_COOK"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["COOK（RealAudio Cook）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_DTS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DTS（Digital Theater Systems）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_AVCODEC_MIMETYPE_AUDIO_DVAUDIO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DVAUDIO（Digital Video Audio）音频解码器的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_ED_KEY_TIME_STAMP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示surfacebuffer时间戳的键，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 14  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_ED_KEY_EOS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示surfacebuffer流结束符的键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 14  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRACK_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轨道媒体类型的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_mediatype",
              children: "OH_MediaType"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_CODEC_MIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编解码器MIME类型的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件持续时间的键，单位为微秒，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["比特率的键，值类型为int64_t。可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getencoderbitraterange",
              children: "OH_AVCapability_GetEncoderBitrateRange"
            }), "接口来获取取值范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_MAX_INPUT_SIZE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置解码输入码流大小最大值的键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频宽度的键，值类型为int32_t。  在视频编解码流程中调用Configure接口时，使用此接口来设置视频帧的显示宽度。可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getvideowidthrange",
              children: "OH_AVCapability_GetVideoWidthRange"
            }), "来获取取值范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频高度键，值类型为int32_t。  在视频编解码流程中调用Configure接口时，使用此接口来设置视频帧的显示高度。可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getvideoheightrange",
              children: "OH_AVCapability_GetVideoHeightRange"
            }), "来获取取值范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_PIXEL_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频像素格式的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avpixelformat",
              children: "OH_AVPixelFormat"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频原始格式的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_bitspersample",
              children: "OH_BitsPerSample"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频帧率的键，值类型为double。该值必须大于 0。可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getvideoframeraterange",
              children: "OH_AVCapability_GetVideoFrameRateRange"
            }), "来获取取值范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频编码码率模式，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_bitratemode",
              children: "OH_BitrateMode"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编码档次，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcprofile",
              children: "OH_AVCProfile"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_hevcprofile",
              children: "OH_HEVCProfile"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_aacprofile",
              children: "OH_AACProfile"
            }), "。可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getsupportedprofiles",
              children: "OH_AVCapability_GetSupportedProfiles"
            }), "来获取支持的档次。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频通道计数键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频采样率键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_I_FRAME_INTERVAL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键帧间隔的键，值类型为int32_t，单位为ms。该键是可选的且只用于视频编码。  负值表示只有第一帧是关键帧，0表示所有帧都是关键帧，正值表示每(frameRate * 设置值)/1000帧一个关键帧。默认值为1000。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ROTATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["surface旋转角度的键，旋转方向为顺时针。值类型为int32_t，值为{0, 90, 180, 270}，默认值为0。  该键只在视频解码Surface模式下使用。  设置视频解码surface模式旋转时，推荐使用OH_MD_KEY_VIDEO_TRANSFORM_TYPE键。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_TRANSFORM_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频翻转角度的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "OH_NativeBuffer_TransformType"
            }), "。  此键用于设置视频解码surface模式的翻转角度。若未指定，默认值为0 (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "NATIVEBUFFER_ROTATE_NONE"
            }), ")。  此键与OH_MD_KEY_ROTATION互斥。若两者同时设置，以OH_MD_KEY_VIDEO_TRANSFORM_TYPE为准，推荐使用OH_MD_KEY_VIDEO_TRANSFORM_TYPE键。  注意：OH_NativeBuffer_TransformType中指定的角度表示逆时针旋转，这与OH_MD_KEY_ROTATION定义的旋转方向相反。  对应关系如下:  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "NATIVEBUFFER_ROTATE_NONE"
            }), "等同于OH_MD_KEY_ROTATION = 0。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "NATIVEBUFFER_ROTATE_90"
            }), "等同于OH_MD_KEY_ROTATION = 270。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "NATIVEBUFFER_ROTATE_180"
            }), "等同于OH_MD_KEY_ROTATION = 180。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "NATIVEBUFFER_ROTATE_270"
            }), "等同于OH_MD_KEY_ROTATION = 90。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_RANGE_FLAG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频YUV值域标志的键，值类型为int32_t，1表示full range，0表示limited range，默认值为0。配置非0值将按照配置1处理，表示full range。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_COLOR_PRIMARIES"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频色域的键，值类型为int32_t，默认值为COLOR_PRIMARY_UNSPECIFIED。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_colorprimary",
              children: "OH_ColorPrimary"
            }), "，遵循H.273标准Table2。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRANSFER_CHARACTERISTICS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频传递函数的键，值类型为int32_t，默认值为TRANSFER_CHARACTERISTIC_UNSPECIFIED。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_transfercharacteristic",
              children: "OH_TransferCharacteristic"
            }), "，遵循H.273标准Table3。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_MATRIX_COEFFICIENTS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频矩阵系数的键，值类型为int32_t，默认值为MATRIX_COEFFICIENT_UNSPECIFIED。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_matrixcoefficient",
              children: "OH_MatrixCoefficient"
            }), "，遵循H.273标准Table4。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_REQUEST_I_FRAME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求立即编码I帧的键。值类型为int32_t。在调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_setparameter",
              children: "OH_VideoEncoder_SetParameter"
            }), "阶段使用，或随帧立即生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_QUALITY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所需编码质量的键。值类型为int32_t，默认值为50。在H.264、H.265编码场景值范围可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getencoderqualityrange",
              children: "OH_AVCapability_GetEncoderQualityRange"
            }), "来获取取值范围，此键仅适用于配置在恒定质量模式下的编码器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编解码器特定数据的键，视频中表示传递SPS/PPS，音频中表示传递extraData，值类型为uint8_t*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TITLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件标题的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ARTIST"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件艺术家的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ALBUM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["专辑的媒体文件的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ALBUM_ARTIST"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["专辑艺术家的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_DATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件日期的键，值类型为char *，例如2024年。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_COMMENT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件注释的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ENABLE_MOOV_FRONT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件moov元数据是否前置标志，值类型为int32_t, 1表示前置， 0表示不前置, 默认为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_GENRE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件流派的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_COPYRIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件版权的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_LANGUAGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件语言的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件描述的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_LYRICS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件歌词的键，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRACK_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件轨道数量的键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所需编码通道布局的键。值类型为int64_t，此键仅适用于编码器。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout",
              children: "OH_AudioChannelLayout"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_BITS_PER_CODED_SAMPLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个编码样本位数的键，值类型为int32_t。  API version 20前，FLAC编码必须设置此参数，设置为1即可；未设置此参数配置FLAC编码器时，调用OH_AudioCodec_Configure会返回错误码AV_ERR_INVALID_VAL。该值无实际作用，不会影响编码结果。  从API version 20开始，无需设置此参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AAC_IS_ADTS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["aac格式的键，aac格式分为ADTS格式和LATM格式。值类型为int32_t，0表示LATM格式，1表示ADTS格式。aac解码器支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_SBR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["aac sbr模式的键，值类型为int32_t，aac编码器支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_COMPLIANCE_LEVEL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["flac兼容性等级的键，值类型为int32_t，仅在音频编码使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_IDENTIFICATION_HEADER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["vorbis标识头的键，值类型为uint8_t*，仅vorbis解码器支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_SETUP_HEADER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["vorbis设置头的键，值类型为uint8_t*，仅vorbis解码器支持。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_SCALING_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频缩放模式，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scalingmode",
              children: "OH_ScalingMode"
            }), "。  建议直接调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowsetscalingmodev2",
              children: "OH_NativeWindow_NativeWindowSetScalingModeV2"
            }), "接口进行设置。该键是可选的且只用于视频解码Surface模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 14  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代接口："
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowsetscalingmodev2",
              children: "OH_NativeWindow_NativeWindowSetScalingModeV2"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_MAX_INPUT_BUFFER_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大输入缓冲区个数的键，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_MAX_OUTPUT_BUFFER_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大输出缓冲区个数的键，值类型int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUDIO_COMPRESSION_LEVEL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编解码压缩水平的键，只在音频编码使用，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_IS_HDR_VIVID"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件中的视频轨是否为HDR Vivid的键，支持封装和解封装，值类型为int32_t。  1表示是HDR Vivid视频轨，0表示不是HDR Vivid视频轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUDIO_OBJECT_NUMBER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频对象数目的键. 值类型为int32_t，只有Audio Vivid解码使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_AUDIO_VIVID_METADATA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Audio Vivid元数据的键，值类型为uint8_t*，只有Audio Vivid解码使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_FEATURE_PROPERTY_KEY_VIDEO_ENCODER_MAX_LTR_FRAME_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在视频编码中获取长期参考帧的最大个数的键，值类型为int32_t。  可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getfeatureproperties",
              children: "OH_AVCapability_GetFeatureProperties"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), "中的VIDEO_ENCODER_LONG_TERM_REFERENCE来查询这个最大值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_ENABLE_TEMPORAL_SCALABILITY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能分层编码的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。  使用前可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), "中的VIDEO_ENCODER_TEMPORAL_SCALABILITY来查询当前视频编码器是否支持分层编码。  详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability#%E6%8E%A5%E5%8F%A3%E4%BB%8B%E7%BB%8D",
              children: "时域可分层视频编码"
            }), "。  该键是可选的且只用于视频编码，在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_SIZE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述图片组基本层图片的间隔大小的键，值类型为int32_t，只在使能分层编码时生效。  该键是可选的且只用于视频编码，在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_REFERENCE_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述图片组内参考模式的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_temporalgopreferencemode",
              children: "OH_TemporalGopReferenceMode"
            }), "，只在使能分层编码时生效。  该键是可选的且只用于视频编码，在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述长期参考帧个数的键，值类型为int32_t，必须在支持的值范围内使用。  使用前可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getfeatureproperties",
              children: "OH_AVCapability_GetFeatureProperties"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), "中的VIDEO_ENCODER_LONG_TERM_REFERENCE来查询支持的LTR数目。  该键是可选的且只用于视频编码，在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_MARK_LTR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标记当前帧为长期参考帧的键，值类型为int32_t，1表示被标记，0表示未被标记，默认值为0。配置非0值将按照配置1处理，表示被标记。  只在长期参考帧个数被配置后生效。  该键是可选的且只用于视频编码输入轮转中，配置后立即生效。  详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability#%E6%8E%A5%E5%8F%A3%E4%BB%8B%E7%BB%8D",
              children: "时域可分层视频编码"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_USE_LTR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述当前帧参考的长期参考帧帧的POC号的键，值类型为int32_t。  该键是可选的且只用于视频编码输入轮转中，配置后立即生效。  详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability#%E6%8E%A5%E5%8F%A3%E4%BB%8B%E7%BB%8D",
              children: "时域可分层视频编码"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_PER_FRAME_IS_LTR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前OH_AVBuffer中输出的码流对应的帧是否为长期参考帧的键，值类型为int32_t，1表示是LTR，0表示不是LTR，默认值为0。配置非0值将按照配置1处理，表示是LTR。  该键是可选的且只用于视频编码输出轮转中。  表示帧的属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_PER_FRAME_POC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述帧的POC的键，值类型为int32_t。  该键是可选的且只用于视频编码输出轮转中。  表示帧的属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_CROP_TOP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述裁剪矩形顶部坐标(y)值的键，值类型为int32_t。  包含裁剪框顶部的行，行索引从0开始。  该键只用于视频解码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_CROP_BOTTOM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述裁剪矩形底部坐标(y)值的键，值类型为int32_t。  包含裁剪框底部的行，行索引从0开始。  该键只用于视频解码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_CROP_LEFT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述裁剪矩形左坐标(x)值的键，值类型为int32_t。  包含裁剪框最左边的列，列索引从0开始。  该键只用于视频解码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_CROP_RIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述裁剪矩形右坐标(x)值的键，值类型为int32_t。  包含裁剪框最右边的列，列索引从0开始。  该键只用于视频解码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_STRIDE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧宽跨距的键，值类型为int32_t。  宽跨距是像素的索引与正下方像素的索引之间的差。  对于YUV420格式，宽跨距对应于Y平面，U和V平面的跨距可以根据颜色格式计算，但通常未定义，并且取决于设备和版本。  使用指导请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-3”。  width、height、wStride、hStride图像排布与使用示例请参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-8”或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频解码Buffer模式"
            }), "“步骤-11”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_SLICE_HEIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧高跨距的键，值类型为int32_t。  高跨距是指从Y平面顶部到U平面顶部必须偏移的行数。本质上，U平面的偏移量是sliceHeight * stride。  U/V平面的高度可以根据颜色格式计算，尽管它通常是未定义的，并且取决于设备和版本。  使用指导请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-3”。  width、height、wStride、hStride图像排布与使用示例请参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-8”或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频解码Buffer模式"
            }), "“步骤-11”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_PIC_WIDTH"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧真实宽度的键，值类型为int32_t。  视频解码时调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_getoutputdescription",
              children: "OH_VideoDecoder_GetOutputDescription"
            }), "接口，可以从其返回的OH_AVFormat中解析出宽度值。  当解码输出码流或编码输入图像分辨率变化时，也可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconstreamchanged",
              children: "OH_AVCodecOnStreamChanged"
            }), "返回的OH_AVFormat实例中解析出宽度值。  从OH_AVFormat实例中解析出来的是对齐后的宽、高与调用Configure接口设置的OH_MD_KEY_WIDTH、OH_MD_KEY_HEIGHT不一样。  width、height、wStride、hStride图像排布与使用示例请参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-8”或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频解码Buffer模式"
            }), "“步骤-11”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_PIC_HEIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧真实高度的键，值类型为int32_t。  视频解码时调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_getoutputdescription",
              children: "OH_VideoDecoder_GetOutputDescription"
            }), "接口，可以从其返回的OH_AVFormat中解析出高度值。  当解码输出码流或编码输入图像分辨率变化时，也可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconstreamchanged",
              children: "OH_AVCodecOnStreamChanged"
            }), "返回的OH_AVFormat实例中解析出高度值。  从OH_AVFormat实例中解析出来的是对齐后的宽、高与调用Configure接口设置的OH_MD_KEY_WIDTH、OH_MD_KEY_HEIGHT不一样。  width、height、wStride、hStride图像排布与使用示例请参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频编码Buffer模式"
            }), "的“步骤-8”或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "视频解码Buffer模式"
            }), "“步骤-11”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENABLE_LOW_LATENCY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能低时延视频解码的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。  该键是可选的，在Configure阶段使用。  如果使能，则视频解码器持有的输入和输出数据不会超过解码器标准所要求的数量。  可以通过能力查询接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "来查询特定解码器是否支持低时延。若解码器支持，使能此接口时，视频解码器将按照解码序输出帧。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_QP_MAX"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频编码器允许的最大量化参数的键，值类型为int32_t。  在Configure/SetParameter阶段使用，或随帧立即生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_QP_MIN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频编码器允许的最小量化参数的键，值类型为int32_t。  在Configure/SetParameter阶段使用，或随帧立即生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_QP_AVERAGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧平均量化参数的键，值类型为int32_t。  表示当前帧编码块的平均qp值，随", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), "输出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_MSE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频帧平方误差的键，值类型为double。  表示当前帧编码块的MSE统计值，随", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), "输出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_DECODING_TIMESTAMP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AVBuffer中携带的音视频或字幕的sample对应的解码时间戳的键，以微秒为单位，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_BUFFER_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AVBuffer中携带的音视频或字幕的sample对应的持续时间的键，以微秒为单位，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_SAR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["样本长宽比的键，值类型为double。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_START_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件中第一帧起始位置开始时间的键，以微秒为单位，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRACK_START_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轨道开始时间的键，以微秒为单位，值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_DECODER_OUTPUT_COLOR_SPACE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置视频解码器输出色彩空间的键，值类型为int32_t。  支持的值为OH_COLORSPACE_BT709_LIMIT，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), "。  在视频解码调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_configure",
              children: "OH_VideoDecoder_Configure"
            }), "接口时使用此接口。  在启动OH_VideoDecoder_Start接口前，必须要先调用OH_VideoDecoder_Prepare接口。  如果支持色彩空间转换功能并配置了此键，则视频解码器会自动将HDR Vivid视频转码为指定的色彩空间。  如果不支持色彩空间转换功能，则接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_configure",
              children: "OH_VideoDecoder_Configure"
            }), "返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            }), "中的AV_ERR_VIDEO_UNSUPPORTED_COLOR_SPACE_CONVERSION。如果输入视频不是HDR Vivid视频，则会通过回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcodeconerror",
              children: "OH_AVCodecOnError"
            }), "报告错误", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            }), "中的AV_ERR_VIDEO_UNSUPPORTED_COLOR_SPACE_CONVERSION。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_DECODER_OUTPUT_ENABLE_VRR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码器是否打开视频可变帧率功能的键，值类型为int32_t。  1代表使能视频可变帧率功能，0代表不使能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_CREATION_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件创建时间的元数据，值类型为char *。使用ISO 8601标准的时间格式且为UTC时间，时间格式参考：\"2024-12-28T00:00:00:000000Z\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_FRAME_AFTER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果在上一帧提交给编码器之后没有新的帧可用，则会以毫秒为单位重复提交最后一帧，值类型为int32_t。  该键只用于视频编码Surface模式，在Configure阶段使用。  配置的值：  - 小于等于0：Configure阶段会被拦截，返回ERROR AV_ERR_INVALID_VAL。  - 大于0：如果在上一帧提交给编码器之后没有新的帧可用，则会以毫秒为单位重复提交最后一帧。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_MAX_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述编码器在没有新的帧可用的情况下，可以对之前的帧进行重复编码的最大次数，值类型为int32_t。  该键仅在OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_FRAME_AFTER可用时生效，在Configure阶段使用。  配置的值：  - 等于0：Configure阶段会被拦截，返回ERROR AV_ERR_INVALID_VAL。  - 小于0：在没有新的帧提交给编码器的这段时间内，编码器会一直重复编上一帧，直到达到系统上限。  - 大于0：在没有新的帧提交给编码器的这段时间内，最多可以重复编码的帧数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_ENABLE_B_FRAME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能B帧编码的键，值类型为int32_t（0或1）：1表示使能，0表示不使能。该键是可选项，仅用于视频编码器，默认值为0。  如果使能，视频编码器将使用B帧，解码顺序与显示顺序会不同。  对于不支持的平台，配置该键不会生效。  可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME查询平台能力。  该键仅在configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_MAX_B_FRAMES"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频编码器支持的最大连续B帧数的键，值类型为int32_t。注意：该键目前仅用于查询编码器能力。  使用规范如下：  1. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME查询特性支持情况。  2. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getfeatureproperties",
              children: "OH_AVCapability_GetFeatureProperties"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME获取OH_AVFormat指针。  3. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_getintvalue",
              children: "OH_AVFormat_GetIntValue"
            }), "接口和本键获取最大B帧数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_ROI_PARAMS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于视频编码中，使能ROI编码并下发ROI参数，随帧设置且实时生效。  参数需满足\"Top1,Left1-Bottom1,Right1=Offset1;Top2,Left2-Bottom2,Right2=Offset2;\"的格式，多个ROI参数之间使用\";\"连接。  Top、Left、Bottom、Right指定一个ROI区域的上、左、下、右边界，Offset指定deltaQP，“=Offset”可以省略，省略时使用默认值（-3）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_SQR_FACTOR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定SQR码控模式的质量参数，取值范围为[0, 51]（同编码量化参数QP），值越小，编码输出码率越大，质量越好。  在Configure/SetParameter阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_MAX_BITRATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定SQR码控模式的最大码率，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getencoderbitraterange",
              children: "OH_AVCapability_GetEncoderBitrateRange"
            }), "方法获取取值范围（同OH_MD_KEY_BITRATE），单位bps，值类型为int64_t。  在Configure/SetParameter阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_ENCODER_ENABLE_PTS_BASED_RATECONTROL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能基于显示时间戳(PTS)的码控模式的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。  该键值是可选的且只用于视频编码。  如果使能，则必须在每个视频帧中携带PTS信息，并发送到编码器。Surface模式下，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
              children: "OH_NativeWindow_NativeWindowHandleOpt"
            }), "接口设置PTS，时间单位为纳秒(ns)；Buffer模式下，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_setbufferattr",
              children: "OH_AVBuffer_SetBufferAttr"
            }), "接口设置PTS，时间单位为微秒(us)。  在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_REFERENCE_TRACK_IDS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件轨道间参考、被参考关系，值类型为int32_t*。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRACK_REFERENCE_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件辅助轨类型，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_TRACK_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件辅助轨描述信息，值类型为char *。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_ENABLE_SYNC_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能音视频编解码同步模式的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。该键是可选。  如果使能，需要注意：  1. 编解码器不可设置回调函数。  2. 必须使用缓冲区查询接口替代回调。  3. 只能在Configure阶段使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_DECODER_BLANK_FRAME_ON_SHUTDOWN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于指定视频解码器关闭时是否输出空白帧的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。该键是可选的且仅用于视频解码Surface模式。  使能后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_stop",
              children: "OH_VideoDecoder_Stop"
            }), "接口或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_destroy",
              children: "OH_VideoDecoder_Destroy"
            }), "接口时，视频解码器将输出空白帧（通常为黑色）。该机制可避免因解码器突然终止导致的显示残留。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_VIDEO_NATIVE_BUFFER_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于查询视频编解码中native buffer像素格式的键，值类型为int32_t。  具体取值请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
              children: "OH_NativeBuffer_Format"
            }), "中定义的像素格式。该键主要用于以下两种场景：  1. 视频解码：调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_getoutputdescription",
              children: "OH_VideoDecoder_GetOutputDescription"
            }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconstreamchanged",
              children: "OH_AVCodecOnStreamChanged"
            }), "，从返回的OH_AVFormat对象中获取当前输出格式。  2. 视频编码：调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_getinputdescription",
              children: "OH_VideoEncoder_GetInputDescription"
            }), "接口，从返回的OH_AVFormat对象中获取当前输入格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MD_KEY_BUFFER_SKIP_SAMPLES_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AVBuffer中携带的键，用于跳过音频解码输出的数据。以采样点为单位，值类型为uint8_t*，当使用mp3、vorbis、opus解码器解码时，可设置该键。  仅音频的起始、末尾帧携带该键，该键是可选的。使用方法一：解封装时获取该信息并设置到解码输入的OH_AVBuffer。  1. 从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodeccallback/capi-codecbase-oh-avcodeccallback",
              children: "OH_AVCodecCallback"
            }), "的回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "里获取解码用的OH_AVBuffer。  2. 调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avdemuxer-h/capi-native-avdemuxer-h#oh_avdemuxer_readsamplebuffer",
              children: "OH_AVDemuxer_ReadSampleBuffer"
            }), "接口读取音频数据，该接口会自行设置OH_MD_KEY_BUFFER_SKIP_SAMPLES_INFO。  3. 调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h#oh_audiocodec_pushinputbuffer",
              children: "OH_AudioCodec_PushInputBuffer"
            }), "输入OH_AVBuffer进行解码。  使用方法二：构造该键需要的数据并设置到解码输入的OH_AVBuffer。  开发者需要先创建一个10字节uint8_t[]类型的数组，具体结构如下：  1. 数组0", (0,jsx_runtime.jsx)(_components.del, {
              children: "3，这4个字节表示从当前帧第一个采样点开始往后跳过的采样点数，以小端序存储uint32_t值。  2. 数组4"
            }), "7，这4个字节表示从当前帧最后一个采样点开始往前跳过的采样点数（不大于1帧采样点数），以小端序存储uint32_t值。  3. 数组8~9，这2个字节填0即可。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.CodecBase"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mediatype",
      children: "OH_MediaType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MediaType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MEDIA_TYPE_AUD = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频轨。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_TYPE_VID = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频轨。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_TYPE_SUBTITLE = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字幕轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_TYPE_TIMED_METADATA = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["timed metadata轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIA_TYPE_AUXILIARY = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_aacprofile",
      children: "OH_AACProfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AACProfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AAC档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "AAC_PROFILE_LC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC编码档次为Low Complexity级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC_PROFILE_HE = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AAC编码档次为High Efficiency级别。包含音频对象类型：AAC LC和SBR。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC_PROFILE_HE_V2 = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AAC编码档次为High Efficiency v2级别。包含音频对象类型：AAC LC、SBR和PS。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcprofile",
      children: "OH_AVCProfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVCProfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVC档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "AVC_PROFILE_BASELINE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC编码档次为基本档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_PROFILE_HIGH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC编码档次为高档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_PROFILE_MAIN = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC编码档次为主档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hevcprofile",
      children: "OH_HEVCProfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_HEVCProfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HEVC档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HEVC_PROFILE_MAIN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC编码档次为主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_PROFILE_MAIN_10 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC编码档次为10bit主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_PROFILE_MAIN_STILL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC编码档次为静止图像主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_PROFILE_MAIN_10_HDR10 = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HEVC编码档次为HDR10主档次。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 14"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_PROFILE_MAIN_10_HDR10_PLUS = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HEVC编码档次为HDR10+主档次。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 14"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vvcprofile",
      children: "OH_VVCProfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VVCProfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VVC档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VVC_PROFILE_MAIN_10 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为10bit主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12_INTRA = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit帧内主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MULTI_MAIN_10 = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为多层编码10bit主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_10_444 = 33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为10bit全采样主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12_444 = 34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit全采样主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_16_444 = 36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为16bit全采样主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12_444_INTRA = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit全采样帧内主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_16_444_INTRA = 44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为16bit全采样帧内主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MULTI_MAIN_10_444 = 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为多层编码10bit全采样主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_10_STILL = 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为10bit静止图像主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12_STILL = 66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit静止图像主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_10_444_STILL = 97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为10bit全采样静止图像主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_12_444_STILL = 98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为12bit全采样静止图像主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_PROFILE_MAIN_16_444_STILL = 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC编码档次为16bit全采样静止图像主档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mpeg2profile",
      children: "OH_MPEG2Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MPEG2Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPEG2档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MPEG2_PROFILE_SIMPLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_PROFILE_MAIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_PROFILE_SNR_SCALABLE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信噪比可分级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_PROFILE_SPATIALLY_SCALABLE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间可分级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_PROFILE_HIGH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_PROFILE_422 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4:2:2档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mpeg4profile",
      children: "OH_MPEG4Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MPEG4Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPEG4档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MPEG4_PROFILE_SIMPLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_SIMPLE_SCALABLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单可分级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_CORE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核心档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_MAIN = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_N_BIT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N位档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_HYBRID = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_BASIC_ANIMATED_TEXTURE = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基本动画纹理档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_SCALABLE_TEXTURE = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可分级纹理档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_SIMPLE_FA = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单FA档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_ADVANCED_REAL_TIME_SIMPLE = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级实时简单档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_CORE_SCALABLE = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核心可分级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_ADVANCED_CODING_EFFICIENCY = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级编码效率档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_ADVANCED_CORE = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级核心档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_ADVANCED_SCALABLE_TEXTURE = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级可分级纹理档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_PROFILE_ADVANCED_SIMPLE = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级简单档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_h263profile",
      children: "OH_H263Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_H263Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H.263档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
            children: "H263_PROFILE_BASELINE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基线档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_PROFILE_VERSION_1_BACKWARD_COMPATIBILITY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本1向后兼容档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vc1profile",
      children: "OH_VC1Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VC1Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VC-1档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "VC1_PROFILE_SIMPLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_PROFILE_MAIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_PROFILE_ADVANCED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_av1profile",
      children: "OH_AV1Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AV1Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AV1档次。"
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
            children: "AV1_PROFILE_MAIN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_PROFILE_HIGH = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_PROFILE_PROFESSIONAL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "专业档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vp9profile",
      children: "OH_VP9Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VP9Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VP9档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "VP9_PROFILE_0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_PROFILE_1 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_PROFILE_2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_PROFILE_3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_wvc1profile",
      children: "OH_WVC1Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_WVC1Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WVC1档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1_PROFILE_ADVANCED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级档次。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_wmv3profile",
      children: "OH_WMV3Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_WMV3Profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WMV3档次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "WMV3_PROFILE_SIMPLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3_PROFILE_MAIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主档次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avoutputformat",
      children: "OH_AVOutputFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVOutputFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装器支持的输出文件格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "AV_OUTPUT_FORMAT_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出文件格式默认值，默认为MP4格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_MPEG_4 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出文件格式为MP4格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_M4A = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出文件格式为M4A格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_AMR = 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为AMR格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_MP3 = 9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为MP3格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_WAV = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为WAV格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_AAC = 11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为AAC格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_FLAC = 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为FLAC格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_OUTPUT_FORMAT_OGG = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出文件格式为OGG格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avseekmode",
      children: "OH_AVSeekMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVSeekMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跳转模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "SEEK_MODE_NEXT_SYNC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定时间位置的下一I帧。若时间点后没有I帧，该模式可能跳转失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEEK_MODE_PREVIOUS_SYNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定时间位置的上一I帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEEK_MODE_CLOSEST_SYNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定时间位置的最近I帧。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scalingmode",
      children: "OH_ScalingMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_ScalingMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "缩放模式，只在Surface模式下使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#ohscalingmodev2",
        children: "OHScalingModeV2"
      })]
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
            children: "SCALING_MODE_SCALE_TO_WINDOW = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据窗口尺寸自适应调整图像大小。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代接口："
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#ohscalingmodev2",
              children: "OHScalingModeV2"
            }), ".OH_SCALING_MODE_SCALE_TO_WINDOW_V2"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCALING_MODE_SCALE_CROP = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据窗口尺寸裁剪图像大小。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代接口："
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#ohscalingmodev2",
              children: "OHScalingModeV2"
            }), ".OH_SCALING_MODE_SCALE_CROP_V2"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_bitspersample",
      children: "OH_BitsPerSample"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_BitsPerSample\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个编码样本的音频位数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SAMPLE_U8 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位无符号整数采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S16LE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位有符号整数采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S24LE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24位有符号整数采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S32LE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位有符号整数采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_F32LE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位浮点采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_U8P = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位无符号整数平面采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S16P = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位有符号整数平面采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S24P = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24位有符号整数平面采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_S32P = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位有符号整数平面采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_F32P = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位浮点平面采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_WIDTH = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效采样格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_colorprimary",
      children: "OH_ColorPrimary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_ColorPrimary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "色域。编解码都支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "COLOR_PRIMARY_BT709 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT709色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_UNSPECIFIED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_BT470_M = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT470_M色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_BT601_625 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT601_625色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_BT601_525 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT601_525色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_SMPTE_ST240 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST240色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_GENERIC_FILM = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GENERIC_FILM色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_BT2020 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_SMPTE_ST428 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST428色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_P3DCI = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3DCI色域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_PRIMARY_P3D65 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P3D65色域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_transfercharacteristic",
      children: "OH_TransferCharacteristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_TransferCharacteristic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转移特性。编解码都支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TRANSFER_CHARACTERISTIC_BT709 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT709传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_UNSPECIFIED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_GAMMA_2_2 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAMMA_2_2传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_GAMMA_2_8 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAMMA_2_8传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_BT601 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT601传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_SMPTE_ST240 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST240传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_LINEAR = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LINEAR传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_LOG = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOG传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_LOG_SQRT = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOG_SQRT传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_IEC_61966_2_4 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC_61966_2_4传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_BT1361 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT1361传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_IEC_61966_2_1 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IEC_61966_2_1传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_BT2020_10BIT = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020_10BIT传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_BT2020_12BIT = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020_12BIT传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_PQ = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PQ传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_SMPTE_ST428 = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST428传递函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER_CHARACTERISTIC_HLG = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HLG传递函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_matrixcoefficient",
      children: "OH_MatrixCoefficient"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MatrixCoefficient\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩阵系数。编解码都支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MATRIX_COEFFICIENT_IDENTITY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_BT709 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT709转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_UNSPECIFIED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_FCC = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCC转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_BT601_625 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT601_625转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_BT601_525 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT601_525转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_SMPTE_ST240 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST240转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_YCGCO = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YCGCO转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_BT2020_NCL = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020_NCL转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_BT2020_CL = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020_CL转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_SMPTE_ST2085 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMPTE_ST2085转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_CHROMATICITY_NCL = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHROMATICITY_NCL转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_CHROMATICITY_CL = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHROMATICITY_CL转换矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATRIX_COEFFICIENT_ICTCP = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICTCP转换矩阵。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avclevel",
      children: "OH_AVCLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVCLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVC级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVC_LEVEL_1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_1b = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_11 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_12 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_13 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_2 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_21 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_22 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_3 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_31 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_32 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_4 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_41 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_42 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_5 = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_51 = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_52 = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_6 = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_61 = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVC_LEVEL_62 = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hevclevel",
      children: "OH_HEVCLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_HEVCLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HEVC级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HEVC_LEVEL_1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_2 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_21 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_31 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_4 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_41 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_5 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_51 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_52 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_6 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_61 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC_LEVEL_62 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vvclevel",
      children: "OH_VVCLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VVCLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VVC级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VVC_LEVEL_1 = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_2 = 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_21 = 35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_3 = 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_31 = 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_4 = 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_41 = 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_5 = 80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_51 = 83"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_52 = 86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_6 = 96"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_61 = 99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_62 = 102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_63 = 105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VVC_LEVEL_155 = 255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别15.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mpeg2level",
      children: "OH_MPEG2Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MPEG2Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPEG2级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
            children: "MPEG2_LEVEL_LOW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_LEVEL_MAIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_LEVEL_HIGH_1440 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高1440级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG2_LEVEL_HIGH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_mpeg4level",
      children: "OH_MPEG4Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_MPEG4Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MPEG4级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MPEG4_LEVEL_0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_0B = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别0B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_1 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_2 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_3 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_3B = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别3B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_4 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_4A = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别4A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_5 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4_LEVEL_6 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别6。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_h263level",
      children: "OH_H263Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_H263Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H.263级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
            children: "H263_LEVEL_10 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_20 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别20。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_30 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别30。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_40 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别40。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_45 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别45。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_50 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_60 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别60。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H263_LEVEL_70 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别70。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vc1level",
      children: "OH_VC1Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VC1Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VC-1级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "VC1_LEVEL_L0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别L0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_L1 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别L1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_L2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别L2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_L3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别L3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_L4 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "级别L4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_LOW = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_MEDIUM = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VC1_LEVEL_HIGH = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_av1level",
      children: "OH_AV1Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AV1Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AV1级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AV1_LEVEL_20 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_21 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_22 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_23 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_30 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_31 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_32 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_33 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_40 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_41 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_42 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_43 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_50 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_51 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_52 = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_53 = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_60 = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_61 = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_62 = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_63 = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_70 = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_71 = 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_72 = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV1_LEVEL_73 = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.3级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vp9level",
      children: "OH_VP9Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VP9Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VP9级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VP9_LEVEL_1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_11 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_21 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_3 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_31 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_4 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_41 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_5 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_51 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_52 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_6 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_61 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP9_LEVEL_62 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.2级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_wvc1level",
      children: "OH_WVC1Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_WVC1Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WVC1级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "WVC1_LEVEL_L0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L0级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1_LEVEL_L1 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1_LEVEL_L2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1_LEVEL_L3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1_LEVEL_L4 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_wmv3level",
      children: "OH_WMV3Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_WMV3Level\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WMV3级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "WMV3_LEVEL_LOW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3_LEVEL_MEDIUM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3_LEVEL_HIGH = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_temporalgopreferencemode",
      children: "OH_TemporalGopReferenceMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_TemporalGopReferenceMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域图片组参考模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
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
            children: "ADJACENT_REFERENCE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参考最近的短期参考帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JUMP_REFERENCE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参考最近的长期参考帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNIFORMLY_SCALED_REFERENCE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均匀分层参考结构，在丢弃最高层级视频帧后，视频帧均匀分布。其中时域图片组个数必须为2的幂。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_bitratemode",
      children: "OH_BitrateMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_BitrateMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编码器的比特率模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
            children: "BITRATE_MODE_CBR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "恒定比特率模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BITRATE_MODE_VBR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可变比特率模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BITRATE_MODE_CQ = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "恒定质量模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BITRATE_MODE_SQR = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["质量稳定模式，仅支持H265（HEVC）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconerror",
      children: "OH_AVCodecOnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnError)(OH_AVCodec *codec, int32_t errorCode, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVCodec实例运行出错时，会调用来上报具体的错误信息的函数指针。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误码"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频编解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_DRM_DECRYPT_FAILED：DRM解密失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频编解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERROR_NO_MEMORY：系统资源不足。  AV_ERROR_UNKNOWN：未知错误，请通过具体日志分析。  AV_ERR_SERVICE_DIED：服务状态已消亡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_VIDEO_UNSUPPORTED_COLOR_SPACE_CONVERSION：当前输入不支持色彩空间转换功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERROR_INPUT_DATA_ERROR：  1. 运行过程中surfacebuffer宽、高超出OH_VideoEncoder_Configure接口配置的宽、高。  2. 配置信息与输入数据比特不一致，如：编码输入数据为8bit而配置为10bit，或编码输入数据为10bit而配置为8bit。  3. 配置了不支持的pixelformat。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特定错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconstreamchanged",
      children: "OH_AVCodecOnStreamChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnStreamChanged)(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当视频解码输入码流分辨率或者视频编码输出码流的分辨率发生变化时，调用此函数指针报告新的流描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，支持音频解码时，码流采样率、声道数或者音频采样格式发生变化时，将调用此函数指针报告新的流描述信息，支持检测此变化的解码格式有：Audio Vivid，AAC，FLAC，MP3，VORBIS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，OH_AVFormat指针的生命周期只有在函数指针被调用时才有效，调用结束后禁止继续访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新输出流描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconneedinputdata",
      children: "OH_AVCodecOnNeedInputData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnNeedInputData)(OH_AVCodec *codec, uint32_t index, OH_AVMemory *data, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVCodec在运行过程中需要新的输入数据时，将调用此函数指针，并携带可用的缓冲区来填充新的输入数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
        children: "OH_AVCodecOnNeedInputBuffer"
      })]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与新可用的输入缓冲区相对应的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avmemory/capi-core-oh-avmemory",
              children: "OH_AVMemory"
            }), " *data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的可用输入缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconnewoutputdata",
      children: "OH_AVCodecOnNewOutputData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnNewOutputData)(OH_AVCodec *codec, uint32_t index, OH_AVMemory *data, OH_AVCodecBufferAttr *attr, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVCodec运行过程中生成新的输出数据时，将调用此函数指针，并携带包含新输出数据的缓冲区。需要注意的是，OH_AVCodecBufferAttr指针的生命周期仅在调用函数指针时有效，这将禁止调用结束后继续访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
        children: "OH_AVCodecOnNewOutputBuffer"
      })]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与新输出缓冲区对应的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avmemory/capi-core-oh-avmemory",
              children: "OH_AVMemory"
            }), " *data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含新输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avcodecbufferattr/capi-core-oh-avcodecbufferattr",
              children: "OH_AVCodecBufferAttr"
            }), " *attr"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新输出缓冲区的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconneedinputbuffer",
      children: "OH_AVCodecOnNeedInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnNeedInputBuffer)(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVCodec在运行过程中需要新的输入数据时，将调用此函数指针，并携带可用的缓冲区来填充新的输入数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与新可用的输入缓冲区相对应的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的可用输入缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcodeconnewoutputbuffer",
      children: "OH_AVCodecOnNewOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVCodecOnNewOutputBuffer)(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVCodec运行过程中生成新的输出数据时，将调用此函数指针，并携带包含新输出数据的缓冲区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodec实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与新输出缓冲区对应的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含新输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avdatasourcereadat",
      children: "OH_AVDataSourceReadAt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_AVDataSourceReadAt)(OH_AVBuffer *data, int32_t length, int64_t pos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针定义，用于提供获取用户自定义媒体数据的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要填充的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要读取的数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从偏移量位置读取。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取到缓冲区的数据的实际长度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avdatasourcereadatext",
      children: "OH_AVDataSourceReadAtExt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_AVDataSourceReadAtExt)(OH_AVBuffer *data, int32_t length, int64_t pos, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针定义，用于提供获取用户自定义媒体数据的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要填充的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要读取的数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从偏移量位置读取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取到缓冲区的数据的实际长度。"
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