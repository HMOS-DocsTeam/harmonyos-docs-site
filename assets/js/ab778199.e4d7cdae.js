"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["305980"], {
21024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_videodecoder_h_capi_native_avcodec_videodecoder_h_md_ab7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-headerfile-capi-native-avcodec-videodecoder-h-capi-native-avcodec-videodecoder-h-md-ab7.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_videodecoder_h_capi_native_avcodec_videodecoder_h_md_ab7_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h","title":"native_avcodec_videodecoder.h","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h","slug":"/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"native_avcodec_videodecoder.h","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avcodec-videodecoder-h"},"sidebar":"ref","previous":{"title":"native_avmemory.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avmemory-h/capi-native-avmemory-h"},"next":{"title":"native_avcodec_videoencoder.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h.md


const frontMatter = {
	title: 'native_avcodec_videodecoder.h',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avcodec-videodecoder-h'
};
const contentTitle = 'native_avcodec_videodecoder.h';

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
  "value": "OH_VideoDecoder_CreateByMime()",
  "id": "oh_videodecoder_createbymime",
  "level": 3
}, {
  "value": "OH_VideoDecoder_CreateByName()",
  "id": "oh_videodecoder_createbyname",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Destroy()",
  "id": "oh_videodecoder_destroy",
  "level": 3
}, {
  "value": "OH_VideoDecoder_SetCallback()",
  "id": "oh_videodecoder_setcallback",
  "level": 3
}, {
  "value": "OH_VideoDecoder_RegisterCallback()",
  "id": "oh_videodecoder_registercallback",
  "level": 3
}, {
  "value": "OH_VideoDecoder_SetSurface()",
  "id": "oh_videodecoder_setsurface",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Configure()",
  "id": "oh_videodecoder_configure",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Prepare()",
  "id": "oh_videodecoder_prepare",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Start()",
  "id": "oh_videodecoder_start",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Stop()",
  "id": "oh_videodecoder_stop",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Flush()",
  "id": "oh_videodecoder_flush",
  "level": 3
}, {
  "value": "OH_VideoDecoder_Reset()",
  "id": "oh_videodecoder_reset",
  "level": 3
}, {
  "value": "OH_VideoDecoder_GetOutputDescription()",
  "id": "oh_videodecoder_getoutputdescription",
  "level": 3
}, {
  "value": "OH_VideoDecoder_SetParameter()",
  "id": "oh_videodecoder_setparameter",
  "level": 3
}, {
  "value": "OH_VideoDecoder_PushInputData()",
  "id": "oh_videodecoder_pushinputdata",
  "level": 3
}, {
  "value": "OH_VideoDecoder_RenderOutputData()",
  "id": "oh_videodecoder_renderoutputdata",
  "level": 3
}, {
  "value": "OH_VideoDecoder_FreeOutputData()",
  "id": "oh_videodecoder_freeoutputdata",
  "level": 3
}, {
  "value": "OH_VideoDecoder_PushInputBuffer()",
  "id": "oh_videodecoder_pushinputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_RenderOutputBuffer()",
  "id": "oh_videodecoder_renderoutputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_RenderOutputBufferAtTime()",
  "id": "oh_videodecoder_renderoutputbufferattime",
  "level": 3
}, {
  "value": "OH_VideoDecoder_FreeOutputBuffer()",
  "id": "oh_videodecoder_freeoutputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_IsValid()",
  "id": "oh_videodecoder_isvalid",
  "level": 3
}, {
  "value": "OH_VideoDecoder_SetDecryptionConfig()",
  "id": "oh_videodecoder_setdecryptionconfig",
  "level": 3
}, {
  "value": "OH_VideoDecoder_QueryInputBuffer()",
  "id": "oh_videodecoder_queryinputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_GetInputBuffer()",
  "id": "oh_videodecoder_getinputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_QueryOutputBuffer()",
  "id": "oh_videodecoder_queryoutputbuffer",
  "level": 3
}, {
  "value": "OH_VideoDecoder_GetOutputBuffer()",
  "id": "oh_videodecoder_getoutputbuffer",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "native_avcodec_videodecoderh",
        children: "native_avcodec_videodecoder.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于视频解码的Native API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avcodec_videodecoder.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_media_vdec.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-videodecoder/capi-videodecoder",
        children: "VideoDecoder"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口在每个版本的支持情况以及在解码过程中可以调用的情况，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417630)/* ["default"] */.A) + "",
        width: "541",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979104)/* ["default"] */.A) + "",
        width: "3264",
        height: "1928"
      })
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
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysession/capi-drm-mediakeysession",
              children: "MediaKeySession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaKeySession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为MediaKeySession定义native层对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_videodecoder_createbymime",
              children: "OH_AVCodec *OH_VideoDecoder_CreateByMime(const char *mime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据MIME类型创建视频解码器实例，大多数情况下建议使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_createbyname",
              children: "OH_AVCodec *OH_VideoDecoder_CreateByName(const char *name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据视频解码器名称创建视频解码器实例。使用此接口的前提是知道解码器的确切名称，解码器的名称可以通过能力查询获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_destroy",
              children: "OH_AVErrCode OH_VideoDecoder_Destroy(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理解码器内部资源，销毁解码器实例。不能重复销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_setcallback",
              children: "OH_AVErrCode OH_VideoDecoder_SetCallback(OH_AVCodec *codec, OH_AVCodecAsyncCallback callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置异步回调函数，让应用可以响应视频解码器生成的事件。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口（从API version 11开始废弃）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_registercallback",
              children: "OH_AVErrCode OH_VideoDecoder_RegisterCallback(OH_AVCodec *codec, OH_AVCodecCallback callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册异步回调函数，让应用可以响应视频解码器生成的事件。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_setsurface",
              children: "OH_AVErrCode OH_VideoDecoder_SetSurface(OH_AVCodec *codec, OHNativeWindow *window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出surface以提供视频解码输出。  在初始化阶段，必须在调用OH_VideoDecoder_Prepare接口之前调用此接口。在Executing状态可以直接调用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_configure",
              children: "OH_AVErrCode OH_VideoDecoder_Configure(OH_AVCodec *codec, OH_AVFormat *format)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置视频解码器，通常需要配置解码视频的描述信息，这些信息可以从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
              children: "OH_AVSource"
            }), "中提取。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_prepare",
              children: "OH_AVErrCode OH_VideoDecoder_Prepare(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备解码器的内部资源，在调用该接口之前，必须调用OH_VideoDecoder_Configure接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_start",
              children: "OH_AVErrCode OH_VideoDecoder_Start(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_prepare",
              children: "OH_VideoDecoder_Prepare"
            }), "接口成功后调用此接口启动解码器。成功启动后，解码器将开始报告注册的回调事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_stop",
              children: "OH_AVErrCode OH_VideoDecoder_Stop(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止解码器，释放输入输出buffer。停止后，可以通过调用OH_VideoDecoder_Start接口重新进入Running状态。  需要注意的是，如果编解码器特定数据以前已输入到解码器，则需要再次输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_flush",
              children: "OH_AVErrCode OH_VideoDecoder_Flush(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除解码器中缓存的输入和输出数据及参数集如H.264格式的PPS/SPS。  调用此接口后，以前通过异步回调上报的所有缓冲区index都将失效，请确保不要访问这些index对应的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_reset",
              children: "OH_AVErrCode OH_VideoDecoder_Reset(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置解码器，解码器回到初始化状态。如果要继续解码，需要再次调用OH_VideoDecoder_Configure接口配置解码器实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getoutputdescription",
              children: "OH_AVFormat *OH_VideoDecoder_GetOutputDescription(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取解码器输出数据的OH_AVFormat信息，请参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "。  需要注意的是，指向的OH_AVFormat实例在生命周期结束时需开发者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_setparameter",
              children: "OH_AVErrCode OH_VideoDecoder_SetParameter(OH_AVCodec *codec, OH_AVFormat *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码器的动态参数。  注意，该接口只能在解码器启动后调用。同时，参数配置错误可能会导致解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_pushinputdata",
              children: "OH_AVErrCode OH_VideoDecoder_PushInputData(OH_AVCodec *codec, uint32_t index, OH_AVCodecBufferAttr attr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将填充数据的输入缓冲区提交给视频解码器。  输入回调将报告可用的输入缓冲区和相应的index值，请参阅{@OH_AVCodecOnNeedInputData}。一旦具有指定index的缓冲区提交到视频解码器，则无法再次访问缓冲区，直到再次收到输入回调，报告具有相同index的缓冲区可用。此外，对于某些解码器，需要在开始时向解码器输入编解码特定数据，以初始化解码器的解码过程，如H.264格式的PPS/SPS数据（从API version 11开始废弃）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_renderoutputdata",
              children: "OH_AVErrCode OH_VideoDecoder_RenderOutputData(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将处理后的输出buffer返回给解码器，并通知解码器完成在输出surface上渲染buffer中包含的解码数据。  如果之前没有配置输出surface，则调用此接口仅将指定index对应的输出缓冲区返回给解码器（从API version 11开始废弃）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_freeoutputdata",
              children: "OH_AVErrCode OH_VideoDecoder_FreeOutputData(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将处理后的输出缓冲区返回到解码器（从API version 11开始废弃）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_pushinputbuffer",
              children: "OH_AVErrCode OH_VideoDecoder_PushInputBuffer(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知视频解码器已对index对应的缓冲区完成输入数据的填充。  输入回调将报告可用的输入缓冲区和相应的index值，请参阅{@OH_AVCodecOnNeedInputBuffer}。一旦具有指定index的缓冲区提交到视频解码器，则无法再次访问缓冲区，直到再次收到输入回调，报告具有相同index的缓冲区可用。此外，对于某些解码器，需要在开始时向解码器输入编解码特定数据，以初始化解码器的解码过程，如H.264格式的PPS/SPS数据。  开发者可以使用该接口把解码需要的参数集如H.264格式的PPS/SPS传递给解码器，该参数集可以单独送入解码器也可以和要解码的数据一起传入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_renderoutputbuffer",
              children: "OH_AVErrCode OH_VideoDecoder_RenderOutputBuffer(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将index对应的输出缓冲返回给解码器，缓冲区中携带解码输出数据，并通知解码器完成在输出surface上渲染，输出缓冲包含解码数据。  如果之前没有配置输出surface，则调用此接口仅将指定index对应的输出缓冲区返回给解码器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_renderoutputbufferattime",
              children: "OH_AVErrCode OH_VideoDecoder_RenderOutputBufferAtTime(OH_AVCodec *codec, uint32_t index, int64_t renderTimestampNs)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将index对应的输出缓冲返回给解码器，缓冲区中携带解码输出数据，并通知解码器在开发者指定的时间内完成在输出surface上渲染，输出缓冲包含解码数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_freeoutputbuffer",
              children: "OH_AVErrCode OH_VideoDecoder_FreeOutputBuffer(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将处理后的输出缓冲区返回到解码器。用户使用完需要及时调用此接口释放输出缓存区，否则会阻塞解码流程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_isvalid",
              children: "OH_AVErrCode OH_VideoDecoder_IsValid(OH_AVCodec *codec, bool *isValid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在解码器实例存在的情况下，检查当前解码器服务是否有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_setdecryptionconfig",
              children: "OH_AVErrCode OH_VideoDecoder_SetDecryptionConfig(OH_AVCodec *codec, MediaKeySession *mediaKeySession, bool secureVideoPath)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解密配置。在调用OH_VideoDecoder_Prepare接口之前，可选择调用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_queryinputbuffer",
              children: "OH_AVErrCode OH_VideoDecoder_QueryInputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询下一个可用输入缓冲区的索引。  调用此接口后需要接着调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getinputbuffer",
              children: "OH_VideoDecoder_GetInputBuffer"
            }), "接口获取缓冲区实例，并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_pushinputbuffer",
              children: "OH_VideoDecoder_PushInputBuffer"
            }), "接口传递给解码器。  需要注意的是，上述操作仅在同步模式下支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getinputbuffer",
              children: "OH_AVBuffer *OH_VideoDecoder_GetInputBuffer(struct OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可用输入缓冲区的实例。  需要注意的是，此接口仅适用于同步模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_queryoutputbuffer",
              children: "OH_AVErrCode OH_VideoDecoder_QueryOutputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询下一个可用输出缓冲区的索引。  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getoutputbuffer",
              children: "OH_VideoDecoder_GetOutputBuffer"
            }), "接口获取的缓冲区实例可以通过执行以下操作来显示或释放解码帧：  1. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_freeoutputbuffer",
              children: "OH_VideoDecoder_FreeOutputBuffer"
            }), "接口将处理后的输出缓冲区返回到解码器。  2. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_renderoutputbuffer",
              children: "OH_VideoDecoder_RenderOutputBuffer"
            }), "在输出surface上渲染。  3. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_renderoutputbufferattime",
              children: "OH_VideoDecoder_RenderOutputBufferAtTime"
            }), "在指定时间内完成输出surface上渲染。  需要注意的是，上述操作仅在同步模式下支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getoutputbuffer",
              children: "OH_AVBuffer *OH_VideoDecoder_GetOutputBuffer(struct OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可用输出缓冲区的实例。需要注意的是，此接口仅适用于同步模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_createbymime",
      children: "OH_VideoDecoder_CreateByMime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCodec *OH_VideoDecoder_CreateByMime(const char *mime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据MIME类型创建视频解码器实例，大多数情况下建议使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MIME类型描述字符串，请参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "AVCODEC_MIME_TYPE"
            }), "。"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指向视频解码实例的指针。  当传入的解码器类型不支持或者内存资源耗尽时，返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_createbyname",
      children: "OH_VideoDecoder_CreateByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCodec *OH_VideoDecoder_CreateByName(const char *name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据视频解码器名称创建视频解码器实例。使用此接口的前提是知道解码器的确切名称，解码器的名称可以通过能力查询获取。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs#%E5%88%9B%E5%BB%BA%E6%8C%87%E5%AE%9A%E5%90%8D%E7%A7%B0%E7%9A%84%E7%BC%96%E8%A7%A3%E7%A0%81%E5%99%A8",
        children: "获取支持的编解码能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频解码器名称。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向视频解码实例的指针。  当输入的解码器名称不支持或者内存资源耗尽时，返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_destroy",
      children: "OH_VideoDecoder_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Destroy(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理解码器内部资源，销毁解码器实例。不能重复销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_setcallback",
      children: "OH_VideoDecoder_SetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_SetCallback(OH_AVCodec *codec, OH_AVCodecAsyncCallback callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置异步回调函数，让应用可以响应视频解码器生成的事件。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
        href: "#oh_videodecoder_registercallback",
        children: "OH_VideoDecoder_RegisterCallback"
      })]
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
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodecasynccallback/capi-codecbase-oh-avcodecasynccallback",
              children: "OH_AVCodecAsyncCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有回调函数的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_registercallback",
      children: "OH_VideoDecoder_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_RegisterCallback(OH_AVCodec *codec, OH_AVCodecCallback callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册异步回调函数，让应用可以响应视频解码器生成的事件。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
            children: "指向视频解码器实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodeccallback/capi-codecbase-oh-avcodeccallback",
              children: "OH_AVCodecCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有回调函数的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者执行回调所依赖的数据。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_setsurface",
      children: "OH_VideoDecoder_SetSurface()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_SetSurface(OH_AVCodec *codec, OHNativeWindow *window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出surface以提供视频解码输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在初始化阶段，必须在调用OH_VideoDecoder_Prepare接口之前调用此接口。在Executing状态可以直接调用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-nativewindow/capi-codecbase-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindow实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_OPERATE_NOT_PERMIT：本接口仅支持在Surface模式下调用, 如果在Buffer模式调用, 则返回此错误码。  AV_ERR_INVALID_VAL：1. 输入的codec指针为非解码器实例，或者为空指针；2. window为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_configure",
      children: "OH_VideoDecoder_Configure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Configure(OH_AVCodec *codec, OH_AVFormat *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置视频解码器，通常需要配置解码视频的描述信息，这些信息可以从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
        children: "OH_AVSource"
      }), "中提取。在调用OH_VideoDecoder_Prepare接口之前，必须调用此接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下参数的配置范围可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
        children: "能力查询"
      }), "获取，OH_MD_KEY_ROTATION配置的参数都支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_MD_KEY_VIDEO_ENABLE_LOW_LATENCY接口时如果当前平台不支持，不报错，走正常解码流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数校验规则："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置正常范围的值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置超出范围的值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "不配置该参数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_MD_KEY_PIXEL_FORMAT 请参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avpixelformat",
              children: "OH_AVPixelFormat"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_UNSUPPORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_MD_KEY_ROTATION"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_INVALID_VAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650786)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议按照该实例需要支持的最大分辨率来配置，否则可能会出现高于该分辨率的码流解码会触发异常。该设置直接影响应用的内存使用情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat的指针，用于给出要解码的视频轨道的描述。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：1. 输入的codec指针为非解码器实例，或者为空指针；2. 输入format参数不支持。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。  AV_ERR_INVALID_STATE：本接口必须在OH_VideoDecoder_Prepare接口前调用，如果在其他状态时调用，则返回此错误码。  AV_ERR_VIDEO_UNSUPPORTED_COLOR_SPACE_CONVERSION：不支持色彩空间转换功能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_prepare",
      children: "OH_VideoDecoder_Prepare()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Prepare(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备解码器的内部资源，在调用该接口之前，必须调用OH_VideoDecoder_Configure接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：1. 内部执行错误；2. 配置了色彩空间转换功能，但解码器处于Buffer模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_start",
      children: "OH_VideoDecoder_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Start(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videodecoder_prepare",
        children: "OH_VideoDecoder_Prepare"
      }), "接口成功后调用此接口启动解码器。成功启动后，解码器将开始报告注册的回调事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：1. 内部执行错误；2. 视频色彩空间转换功能已配置，但是没有调用OH_VideoDecoder_Prepare接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_stop",
      children: "OH_VideoDecoder_Stop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Stop(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止解码器，释放输入输出buffer。停止后，可以通过调用OH_VideoDecoder_Start接口重新进入Running状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，如果编解码器特定数据以前已输入到解码器，则需要再次输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_flush",
      children: "OH_VideoDecoder_Flush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Flush(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除解码器中缓存的输入和输出数据及参数集如H.264格式的PPS/SPS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此接口后，以前通过异步回调上报的所有缓冲区index都将失效，请确保不要访问这些index对应的缓冲区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_reset",
      children: "OH_VideoDecoder_Reset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_Reset(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置解码器，解码器回到初始化状态。如果要继续解码，需要再次调用OH_VideoDecoder_Configure接口配置解码器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_getoutputdescription",
      children: "OH_VideoDecoder_GetOutputDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_VideoDecoder_GetOutputDescription(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取解码器输出数据的OH_AVFormat信息，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
        children: "OH_AVFormat"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，指向的OH_AVFormat实例在生命周期结束时需开发者通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
        children: "OH_AVFormat_Destroy"
      }), "释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向OH_AVFormat实例的指针。  当输入的codec指针非解码器实例，或者为空指针，则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_setparameter",
      children: "OH_VideoDecoder_SetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_SetParameter(OH_AVCodec *codec, OH_AVFormat *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码器的动态参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意，该接口只能在解码器启动后调用。同时，参数配置错误可能会导致解码失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：1. 输入的codec指针为非解码器实例，或者为空指针；2. 输入format参数不支持。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_pushinputdata",
      children: "OH_VideoDecoder_PushInputData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_PushInputData(OH_AVCodec *codec, uint32_t index, OH_AVCodecBufferAttr attr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将填充数据的输入缓冲区提交给视频解码器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入回调将报告可用的输入缓冲区和相应的index值，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputdata",
        children: "OH_AVCodecOnNeedInputData"
      }), "。一旦具有指定index的缓冲区提交到视频解码器，则无法再次访问缓冲区，直到再次收到输入回调，报告具有相同index的缓冲区可用。此外，对于某些解码器，需要在开始时向解码器输入编解码特定数据，以初始化解码器的解码过程，如H.264格式的PPS/SPS数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
        href: "#oh_videodecoder_pushinputbuffer",
        children: "OH_VideoDecoder_PushInputBuffer"
      })]
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
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入Buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputdata",
              children: "OH_AVCodecOnNeedInputData"
            }), "给出。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCodecBufferAttr attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述缓冲区中包含的数据的信息。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_renderoutputdata",
      children: "OH_VideoDecoder_RenderOutputData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_RenderOutputData(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将处理后的输出buffer返回给解码器，并通知解码器完成在输出surface上渲染buffer中包含的解码数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果之前没有配置输出surface，则调用此接口仅将指定index对应的输出缓冲区返回给解码器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
        href: "#oh_videodecoder_renderoutputbuffer",
        children: "OH_VideoDecoder_RenderOutputBuffer"
      })]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出Buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputdata",
              children: "OH_AVCodecOnNewOutputData"
            }), "给出。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_freeoutputdata",
      children: "OH_VideoDecoder_FreeOutputData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_FreeOutputData(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将处理后的输出缓冲区返回到解码器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
        href: "#oh_videodecoder_freeoutputbuffer",
        children: "OH_VideoDecoder_FreeOutputBuffer"
      })]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputdata",
              children: "OH_AVCodecOnNewOutputData"
            }), "给出。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_pushinputbuffer",
      children: "OH_VideoDecoder_PushInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_PushInputBuffer(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知视频解码器已对index对应的缓冲区完成输入数据的填充。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入回调将报告可用的输入缓冲区和相应的index值，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
        children: "OH_AVCodecOnNeedInputBuffer"
      }), "。一旦具有指定index的缓冲区提交到视频解码器，则无法再次访问缓冲区，直到再次收到输入回调，报告具有相同index的缓冲区可用。此外，对于某些解码器，需要在开始时向解码器输入编解码特定数据，以初始化解码器的解码过程，如H.264格式的PPS/SPS数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用该接口把解码需要的参数集如H.264格式的PPS/SPS传递给解码器，该参数集可以单独送入解码器也可以和要解码的数据一起传入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "给出。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。  AV_ERR_DRM_DECRYPT_FAILED：受DRM保护的视频缓冲区解密失败，建议查看日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_renderoutputbuffer",
      children: "OH_VideoDecoder_RenderOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_RenderOutputBuffer(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将index对应的输出缓冲返回给解码器，缓冲区中携带解码输出数据，并通知解码器完成在输出surface上渲染，输出缓冲包含解码数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果之前没有配置输出surface，则调用此接口仅将指定index对应的输出缓冲区返回给解码器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
              children: "OH_AVCodecOnNewOutputBuffer"
            }), "给出。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_renderoutputbufferattime",
      children: "OH_VideoDecoder_RenderOutputBufferAtTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_RenderOutputBufferAtTime(OH_AVCodec *codec, uint32_t index, int64_t renderTimestampNs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将index对应的输出缓冲返回给解码器，缓冲区中携带解码输出数据，并通知解码器在开发者指定的时间内完成在输出surface上渲染，输出缓冲包含解码数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果之前没有配置输出surface，则调用此接口仅将指定index对应的输出缓冲区返回给解码器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用时间戳在特定时间（在VSYNC或者缓冲区时间戳之后）渲染缓冲区。若要在指定的时间戳显示，时间戳需要合理接近系统时间，有几点需要注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "缓冲区是按照顺序处理的，因此可能会阻塞后续缓冲区在surface上的显示，如果想要对用户的一些行为做出反应，例如停止或者快进快退视频，这一点很重要。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果多个缓冲区被发送到surface要在同一个VSYNC上渲染，那么最后一个将会被显示，其他的将被丢弃。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果时间戳与当前的系统时间不是“合理接近”，surface将会忽略时间戳，并在可行的最早时间里显示buffer。在此模式下不会丢弃帧。4. 如果需要由系统根据显示刷新率来丢帧，则必须调用此接口，否则应用需自行实现丢帧逻辑。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
              children: "OH_AVCodecOnNewOutputBuffer"
            }), "给出。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t renderTimestampNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出buffer被发送到surface的时间戳，取值范围大于0，应由std::chrono::steady_clock标准库时钟生成，且单位为纳秒。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_freeoutputbuffer",
      children: "OH_VideoDecoder_FreeOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_FreeOutputBuffer(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将处理后的输出缓冲区返回到解码器。用户使用完需要及时调用此接口释放输出缓存区，否则会阻塞解码流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-decoding",
        children: "视频解码"
      }), " “Surface模式的步骤-12或Buffer模式步骤-10”。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出buffer对应的索引值。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
              children: "OH_AVCodecOnNewOutputBuffer"
            }), "给出。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：1. 输入的codec指针为非解码器实例，或者为空指针；2. index非法或者连续给同一个index，该错误不影响后续解码流程。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：内部执行错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_isvalid",
      children: "OH_VideoDecoder_IsValid()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_IsValid(OH_AVCodec *codec, bool *isValid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在解码器实例存在的情况下，检查当前解码器服务是否有效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *isValid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，指向布尔类型的指针。只有当接口返回AV_ERR_OK时，该值表示解码器服务的有效性（true为有效，false为无效）。建议开发者将isValid初始化为false。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_setdecryptionconfig",
      children: "OH_VideoDecoder_SetDecryptionConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_SetDecryptionConfig(OH_AVCodec *codec, MediaKeySession *mediaKeySession, bool secureVideoPath)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解密配置。在调用OH_VideoDecoder_Prepare接口之前，可选择调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysession/capi-drm-mediakeysession",
              children: "MediaKeySession"
            }), " *mediaKeySession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向带有解密功能的DRM会话实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool secureVideoPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["安全视频通路。指定安全视频通路为true，非安全视频通路为false。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
              children: "Surface模式"
            }), "下，既支持安全视频通路，也支持非安全视频通路。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
              children: "Buffer模式"
            }), "下，仅支持非安全视频通路。"]
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_OPERATE_NOT_PERMIT：1. 内部执行错误；2. 解码服务进程异常；3. 媒体密钥会话服务处于错误状态。  AV_ERR_INVALID_VAL：1. 输入的codec指针为非解码器实例或为空指针；2. mediaKeySession为nullptr或无效。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_queryinputbuffer",
      children: "OH_VideoDecoder_QueryInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_QueryInputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询下一个可用输入缓冲区的索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用此接口后需要接着调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videodecoder_getinputbuffer",
        children: "OH_VideoDecoder_GetInputBuffer"
      }), "接口获取缓冲区实例，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videodecoder_pushinputbuffer",
        children: "OH_VideoDecoder_PushInputBuffer"
      }), "接口传递给解码器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，上述操作仅在同步模式下支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              children: "struct OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入buffer对应的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeoutUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时时长，单位为微秒。负值：无限等待；0：立即退出；正值：等待指定时长后退出。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：禁止异步模式下使用。  AV_ERR_TRY_AGAIN_LATER：查询失败，建议等待短暂间隔后重试。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_getinputbuffer",
      children: "OH_VideoDecoder_GetInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVBuffer *OH_VideoDecoder_GetInputBuffer(struct OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取可用输入缓冲区的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，此接口仅适用于同步模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "struct OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入buffer对应的索引值，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_queryinputbuffer",
              children: "OH_VideoDecoder_QueryInputBuffer"
            }), "接口获取。"]
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
            children: "OH_AVBuffer *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，则返回一个指向OH_AVBuffer实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_queryoutputbuffer",
      children: "OH_VideoDecoder_QueryOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_VideoDecoder_QueryOutputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询下一个可用输出缓冲区的索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videodecoder_getoutputbuffer",
        children: "OH_VideoDecoder_GetOutputBuffer"
      }), "接口获取的缓冲区实例可以通过执行以下操作来显示或释放解码帧："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_videodecoder_freeoutputbuffer",
            children: "OH_VideoDecoder_FreeOutputBuffer"
          }), "接口将处理后的输出缓冲区返回到解码器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_videodecoder_renderoutputbuffer",
            children: "OH_VideoDecoder_RenderOutputBuffer"
          }), "在输出surface上渲染。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_videodecoder_renderoutputbufferattime",
            children: "OH_VideoDecoder_RenderOutputBufferAtTime"
          }), "在指定时间内完成输出surface上渲染。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，上述操作仅在同步模式下支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              children: "struct OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出buffer对应的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeoutUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时时长，单位为微秒。负值：无限等待；0：立即退出；正值：等待指定时长后退出。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AV_ERR_OK：执行成功。  AV_ERR_NO_MEMORY：输入的解码器实例已经销毁。  AV_ERR_INVALID_VAL：输入的codec指针为非解码器实例，或者为空指针。  AV_ERR_UNKNOWN：未知错误。  AV_ERR_INVALID_STATE：当前解码器状态不支持调用本接口。  AV_ERR_OPERATE_NOT_PERMIT：禁止异步模式下使用。  AV_ERR_STREAM_CHANGED：流格式已变更，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_getoutputdescription",
              children: "OH_VideoDecoder_GetOutputDescription"
            }), "接口获取新的流信息。  AV_ERR_TRY_AGAIN_LATER：查询失败，建议等待短暂间隔后重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videodecoder_getoutputbuffer",
      children: "OH_VideoDecoder_GetOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVBuffer *OH_VideoDecoder_GetOutputBuffer(struct OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取可用输出缓冲区的实例。需要注意的是，此接口仅适用于同步模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.VideoDecoder"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "struct OH_AVCodec"
            }), " *codec"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频解码实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出buffer对应的索引值，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videodecoder_queryoutputbuffer",
              children: "OH_VideoDecoder_QueryOutputBuffer"
            }), "接口获取。"]
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，则返回一个指向OH_AVBuffer实例的指针，否则返回NULL。"
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
417630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440899-04040323000ea53e6bc7fcb587e83e7a.png");

},
979104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960854-bacb619cbead8bb6bcc32bffb219b5e6.png");

},
650786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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