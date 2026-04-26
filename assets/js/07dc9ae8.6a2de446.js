"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["553067"], {
799424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_audiocodec_h_capi_native_avcodec_audiocodec_h_md_07d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-headerfile-capi-native-avcodec-audiocodec-h-capi-native-avcodec-audiocodec-h-md-07d.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_headerfile_capi_native_avcodec_audiocodec_h_capi_native_avcodec_audiocodec_h_md_07d_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h","title":"native_avcodec_audiocodec.h","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h","slug":"/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"native_avcodec_audiocodec.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-audiocodec-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avcodec-audiocodec-h"},"sidebar":"ref","previous":{"title":"native_avcapability.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h"},"next":{"title":"native_avcodec_base.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h.md


const frontMatter = {
	title: 'native_avcodec_audiocodec.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-audiocodec-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avcodec-audiocodec-h'
};
const contentTitle = 'native_avcodec_audiocodec.h';

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
  "value": "OH_AudioCodec_CreateByMime()",
  "id": "oh_audiocodec_createbymime",
  "level": 3
}, {
  "value": "OH_AudioCodec_CreateByName()",
  "id": "oh_audiocodec_createbyname",
  "level": 3
}, {
  "value": "OH_AudioCodec_Destroy()",
  "id": "oh_audiocodec_destroy",
  "level": 3
}, {
  "value": "OH_AudioCodec_RegisterCallback()",
  "id": "oh_audiocodec_registercallback",
  "level": 3
}, {
  "value": "OH_AudioCodec_Configure()",
  "id": "oh_audiocodec_configure",
  "level": 3
}, {
  "value": "OH_AudioCodec_Prepare()",
  "id": "oh_audiocodec_prepare",
  "level": 3
}, {
  "value": "OH_AudioCodec_Start()",
  "id": "oh_audiocodec_start",
  "level": 3
}, {
  "value": "OH_AudioCodec_Stop()",
  "id": "oh_audiocodec_stop",
  "level": 3
}, {
  "value": "OH_AudioCodec_Flush()",
  "id": "oh_audiocodec_flush",
  "level": 3
}, {
  "value": "OH_AudioCodec_Reset()",
  "id": "oh_audiocodec_reset",
  "level": 3
}, {
  "value": "OH_AudioCodec_GetOutputDescription()",
  "id": "oh_audiocodec_getoutputdescription",
  "level": 3
}, {
  "value": "OH_AudioCodec_SetParameter()",
  "id": "oh_audiocodec_setparameter",
  "level": 3
}, {
  "value": "OH_AudioCodec_PushInputBuffer()",
  "id": "oh_audiocodec_pushinputbuffer",
  "level": 3
}, {
  "value": "OH_AudioCodec_FreeOutputBuffer()",
  "id": "oh_audiocodec_freeoutputbuffer",
  "level": 3
}, {
  "value": "OH_AudioCodec_IsValid()",
  "id": "oh_audiocodec_isvalid",
  "level": 3
}, {
  "value": "OH_AudioCodec_SetDecryptionConfig()",
  "id": "oh_audiocodec_setdecryptionconfig",
  "level": 3
}, {
  "value": "OH_AudioCodec_QueryInputBuffer()",
  "id": "oh_audiocodec_queryinputbuffer",
  "level": 3
}, {
  "value": "OH_AudioCodec_GetInputBuffer()",
  "id": "oh_audiocodec_getinputbuffer",
  "level": 3
}, {
  "value": "OH_AudioCodec_QueryOutputBuffer()",
  "id": "oh_audiocodec_queryoutputbuffer",
  "level": 3
}, {
  "value": "OH_AudioCodec_GetOutputBuffer()",
  "id": "oh_audiocodec_getoutputbuffer",
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
        id: "native_avcodec_audiocodech",
        children: "native_avcodec_audiocodec.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频编解码Native API的声明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avcodec_audiocodec.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_media_acodec.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-audiocodec/capi-audiocodec",
        children: "AudioCodec"
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
            children: "MediaKeySession字段。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audiocodec_createbymime",
              children: "OH_AVCodec *OH_AudioCodec_CreateByMime(const char *mime, bool isEncoder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据MIME类型创建音频编解码器实例，大多数场景下建议使用此方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_createbyname",
              children: "OH_AVCodec *OH_AudioCodec_CreateByName(const char *name)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过音频编解码器名称创建音频编解码器实例，使用此接口的前提是知道编解码器的确切名称，编解码器的名称可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getname",
              children: "OH_AVCapability_GetName"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_destroy",
              children: "OH_AVErrCode OH_AudioCodec_Destroy(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理编解码器内部资源，销毁编解码器实例。注意不能进行重复销毁，否则将会导致程序崩溃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_registercallback",
              children: "OH_AVErrCode OH_AudioCodec_RegisterCallback(OH_AVCodec *codec, OH_AVCodecCallback callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置异步回调函数，使应用可以响应音频编解码器生成的事件。在调用Prepare之前，必须调用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_configure",
              children: "OH_AVErrCode OH_AudioCodec_Configure(OH_AVCodec *codec, const OH_AVFormat *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置音频描述信息。音频编解码器通常会根据音频描述信息进行配置。在调用Prepare之前，必须调用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_prepare",
              children: "OH_AVErrCode OH_AudioCodec_Prepare(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备编解码器的内部资源，在调用此接口之前必须调用Configure接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_start",
              children: "OH_AVErrCode OH_AudioCodec_Start(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用此接口启动编解码器，在Prepare成功后执行。启动后，编解码器将开始上报OH_AVCodecOnNeedInputBuffer事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_stop",
              children: "OH_AVErrCode OH_AudioCodec_Stop(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止编解码器。停止后，可以通过Start重新进入已启动状态（started），但需要注意的是，如果编解码器之前已输入数据，则需要重新输入编解码器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_flush",
              children: "OH_AVErrCode OH_AudioCodec_Flush(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除编解码器中缓存的输入和输出数据。调用此接口后，以前通过异步回调上报的所有缓冲区索引都将失效，请确保不要访问这些索引对应的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_reset",
              children: "OH_AVErrCode OH_AudioCodec_Reset(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置编解码器。此时会清空已配置的参数和输入输出数据。  如果要继续编解码，需要再次调用Configure接口配置编解码器实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getoutputdescription",
              children: "OH_AVFormat *OH_AudioCodec_GetOutputDescription(OH_AVCodec *codec)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取编解码器输出数据的OH_AVFormat信息。  需要注意的是，返回值所指向的OH_AVFormat实例需要开发者调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
              children: "OH_AVFormat_Destroy"
            }), "接口手动释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_setparameter",
              children: "OH_AVErrCode OH_AudioCodec_SetParameter(OH_AVCodec *codec, const OH_AVFormat *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置编解码器的动态参数。  注意，该接口必须在编解码器启动后才能调用。另外，参数配置错误可能会导致编解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_pushinputbuffer",
              children: "OH_AVErrCode OH_AudioCodec_PushInputBuffer(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知音频编解码器已完成对index所对应缓冲区进行输入数据的填充。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "回调将报告可用的输入缓冲区和对应的索引值。  一旦具有指定索引的缓冲区被提交给音频编解码器，该缓冲区将无法再次访问，直到再次收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "回调，收到相同索引时此缓冲区才可使用。  此外，对于某些编解码器，需要在开始时向编解码器输入编解码特定配置数据(Codec-Specific-Data)，以初始化编解码器的编解码过程。  注意：当返回值为AV_ERR_UNKNOWN时此次调用不生效，输入缓冲区仍为未处理状态，需根据返回的特定错误代码处理后输入相同的index重新调用OH_AudioCodec_PushInputBuffer。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_freeoutputbuffer",
              children: "OH_AVErrCode OH_AudioCodec_FreeOutputBuffer(OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将处理后的输出缓冲区返回给编解码器。使用完输出缓冲区后需及时调用此接口进行释放，否则会阻塞编解码流程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_isvalid",
              children: "OH_AVErrCode OH_AudioCodec_IsValid(OH_AVCodec *codec, bool *isValid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查当前编解码器实例是否有效。  可用于后台故障恢复或应用程序从后台恢复时检测编解码器有效状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_setdecryptionconfig",
              children: "OH_AVErrCode OH_AudioCodec_SetDecryptionConfig(OH_AVCodec *codec, MediaKeySession *mediaKeySession, bool secureAudio)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解密信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_queryinputbuffer",
              children: "OH_AVErrCode OH_AudioCodec_QueryInputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在设置的超时时间内，尝试查询对应音频编解码器可用的输入缓冲区的索引值。  获取到索引值后，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getinputbuffer",
              children: "OH_AudioCodec_GetInputBuffer"
            }), "接口获取索引值对应的缓冲区。  在缓冲区填充数据后，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_pushinputbuffer",
              children: "OH_AudioCodec_PushInputBuffer"
            }), "输入对应索引值，将缓冲区数据送到编解码器。  注意：此接口仅可在音频编解码的同步模式中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getinputbuffer",
              children: "OH_AVBuffer *OH_AudioCodec_GetInputBuffer(struct OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入索引值，获取对应音频编解码器中该索引值对应的输入缓冲区。注意：此接口仅可在音频编解码的同步模式中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_queryoutputbuffer",
              children: "OH_AVErrCode OH_AudioCodec_QueryOutputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在设置的超时时间内，尝试查询对应音频编解码器可用的输出缓冲区的索引值。获取到索引值后，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getoutputbuffer",
              children: "OH_AudioCodec_GetOutputBuffer"
            }), "接口获取的输出缓冲区使用完后，  需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_freeoutputbuffer",
              children: "OH_AudioCodec_FreeOutputBuffer"
            }), "接口进行释放。释放后无法再次使用，长期不释放会阻塞编解码流程。注意：此接口仅可在音频编解码的同步模式中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getoutputbuffer",
              children: "OH_AVBuffer *OH_AudioCodec_GetOutputBuffer(struct OH_AVCodec *codec, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入索引值，获取对应音频编解码器中该索引值对应的输出缓冲区。注意：此接口仅可在音频编解码的同步模式中使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_createbymime",
      children: "OH_AudioCodec_CreateByMime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCodec *OH_AudioCodec_CreateByMime(const char *mime, bool isEncoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据MIME类型创建音频编解码器实例，大多数场景下建议使用此方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MIME类型描述字符串，请参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "AVCODEC_MIMETYPE"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isEncoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示需要创建编码器，false表示需要创建解码器。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodec/capi-codecbase-oh-avcodec",
              children: "OH_AVCodec"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回OH_AVCodec实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_createbyname",
      children: "OH_AudioCodec_CreateByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCodec *OH_AudioCodec_CreateByName(const char *name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过音频编解码器名称创建音频编解码器实例，使用此接口的前提是知道编解码器的确切名称，编解码器的名称可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getname",
        children: "OH_AVCapability_GetName"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "音频编解码器名称。"
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
            children: "返回OH_AVCodec实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_destroy",
      children: "OH_AudioCodec_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Destroy(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理编解码器内部资源，销毁编解码器实例。注意不能进行重复销毁，否则将会导致程序崩溃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_NO_MEMORY：内部资源已经释放。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_registercallback",
      children: "OH_AudioCodec_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_RegisterCallback(OH_AVCodec *codec, OH_AVCodecCallback callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置异步回调函数，使应用可以响应音频编解码器生成的事件。在调用Prepare之前，必须调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "用户特定数据。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_configure",
      children: "OH_AudioCodec_Configure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Configure(OH_AVCodec *codec, const OH_AVFormat *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置音频描述信息。音频编解码器通常会根据音频描述信息进行配置。在调用Prepare之前，必须调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "const OH_AVFormat"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat的指针，给出要编解码的音频轨道的描述。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_prepare",
      children: "OH_AudioCodec_Prepare()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Prepare(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备编解码器的内部资源，在调用此接口之前必须调用Configure接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_start",
      children: "OH_AudioCodec_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Start(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此接口启动编解码器，在Prepare成功后执行。启动后，编解码器将开始上报OH_AVCodecOnNeedInputBuffer事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_stop",
      children: "OH_AudioCodec_Stop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Stop(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止编解码器。停止后，可以通过Start重新进入已启动状态（started），但需要注意的是，如果编解码器之前已输入数据，则需要重新输入编解码器数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_flush",
      children: "OH_AudioCodec_Flush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Flush(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除编解码器中缓存的输入和输出数据。调用此接口后，以前通过异步回调上报的所有缓冲区索引都将失效，请确保不要访问这些索引对应的缓冲区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_reset",
      children: "OH_AudioCodec_Reset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_Reset(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置编解码器。此时会清空已配置的参数和输入输出数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果要继续编解码，需要再次调用Configure接口配置编解码器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_getoutputdescription",
      children: "OH_AudioCodec_GetOutputDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVFormat *OH_AudioCodec_GetOutputDescription(OH_AVCodec *codec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编解码器输出数据的OH_AVFormat信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，返回值所指向的OH_AVFormat实例需要开发者调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_destroy",
        children: "OH_AVFormat_Destroy"
      }), "接口手动释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
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
            children: "OH_AVFormat *"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回OH_AVFormat句柄指针，生命周期将使用下一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getoutputdescription",
              children: "OH_AudioCodec_GetOutputDescription"
            }), "刷新，或使用OH_AVCodec销毁。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_setparameter",
      children: "OH_AudioCodec_SetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_SetParameter(OH_AVCodec *codec, const OH_AVFormat *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置编解码器的动态参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意，该接口必须在编解码器启动后才能调用。另外，参数配置错误可能会导致编解码失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVFormat句柄指针。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_pushinputbuffer",
      children: "OH_AudioCodec_PushInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_PushInputBuffer(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知音频编解码器已完成对index所对应缓冲区进行输入数据的填充。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
        children: "OH_AVCodecOnNeedInputBuffer"
      }), "回调将报告可用的输入缓冲区和对应的索引值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一旦具有指定索引的缓冲区被提交给音频编解码器，该缓冲区将无法再次访问，直到再次收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
        children: "OH_AVCodecOnNeedInputBuffer"
      }), "回调，收到相同索引时此缓冲区才可使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，对于某些编解码器，需要在开始时向编解码器输入编解码特定配置数据(Codec-Specific-Data)，以初始化编解码器的编解码过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：当返回值为AV_ERR_UNKNOWN时此次调用不生效，输入缓冲区仍为未处理状态，需根据返回的特定错误代码处理后输入相同的index重新调用OH_AudioCodec_PushInputBuffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入回调", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "给出的索引值。"]
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
            children: ["AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入的index已使用或无效，需使用其他", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer",
              children: "OH_AVCodecOnNeedInputBuffer"
            }), "回调返回的index。  AV_ERR_INVALID_STATE：编解码器状态错误，调用OH_AudioCodec_PushInputBuffer前需确保按顺序成功调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_configure",
              children: "OH_AudioCodec_Configure"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_prepare",
              children: "OH_AudioCodec_Prepare"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_start",
              children: "OH_AudioCodec_Start"
            }), "。  AV_ERR_UNKNOWN：输入buffer size无效，需确保buffer设置了正确的buffer size和flags。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_freeoutputbuffer",
      children: "OH_AudioCodec_FreeOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_FreeOutputBuffer(OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将处理后的输出缓冲区返回给编解码器。使用完输出缓冲区后需及时调用此接口进行释放，否则会阻塞编解码流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
              children: "OH_AVCodecOnNewOutputBuffer"
            }), "给出的索引值。"]
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
            children: ["AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数为nullptr或无效。缓冲区索引应该由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer",
              children: "OH_AVCodecOnNewOutputBuffer"
            }), "给出。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_OPERATE_NOT_PERMIT：不允许操作，这可能是由于状态不正确或不支持的操作。  AV_ERR_UNKNOWN：发生内部错误，建议检查日志。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_isvalid",
      children: "OH_AudioCodec_IsValid()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_IsValid(OH_AVCodec *codec, bool *isValid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查当前编解码器实例是否有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可用于后台故障恢复或应用程序从后台恢复时检测编解码器有效状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *isValid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。指向布尔类型的指针，true：编解码器实例有效，false：编解码器实例无效。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：输入参数为nullptr或无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_setdecryptionconfig",
      children: "OH_AudioCodec_SetDecryptionConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_SetDecryptionConfig(OH_AVCodec *codec, MediaKeySession *mediaKeySession,bool secureAudio)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解密信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-struct/capi-drm-mediakeysession/capi-drm-mediakeysession",
              children: "MediaKeySession"
            }), " *mediaKeySession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带有解密功能的媒体秘钥会话实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool secureAudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使用安全解码器。使用安全解码器为true,否则为false。  注意：当前音频解密尚不支持使用安全解码器。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：OH_AVCodec实例为nullptr或无效，mediaKeySystemInfo实例为nullptr或无效。  AV_ERR_INVALID_STATE：编解码器服务不可用。  AV_ERR_NO_MEMORY：请求内存失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_queryinputbuffer",
      children: "OH_AudioCodec_QueryInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_QueryInputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设置的超时时间内，尝试查询对应音频编解码器可用的输入缓冲区的索引值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取到索引值后，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiocodec_getinputbuffer",
        children: "OH_AudioCodec_GetInputBuffer"
      }), "接口获取索引值对应的缓冲区。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在缓冲区填充数据后，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiocodec_pushinputbuffer",
        children: "OH_AudioCodec_PushInputBuffer"
      }), "输入对应索引值，将缓冲区数据送到编解码器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：此接口仅可在音频编解码的同步模式中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，获取到的输入缓冲区的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeoutUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时时间，单位：微秒。设置为负值时表示无限等待。"
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
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：执行失败，输入参数错误。  AV_ERR_INVALID_STATE：执行失败，状态非法，没有启动编解码器等。  AV_ERR_OPERATE_NOT_PERMIT：执行失败，不允许非同步模式下调用。  AV_ERR_TRY_AGAIN_LATER：执行失败，超时时间内获取不到可用的缓冲区。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_getinputbuffer",
      children: "OH_AudioCodec_GetInputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVBuffer *OH_AudioCodec_GetInputBuffer(struct OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入索引值，获取对应音频编解码器中该索引值对应的输入缓冲区。注意：此接口仅可在音频编解码的同步模式中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入缓冲区的索引值。该索引值通过接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_queryinputbuffer",
              children: "OH_AudioCodec_QueryInputBuffer"
            }), "获取。"]
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
      id: "oh_audiocodec_queryoutputbuffer",
      children: "OH_AudioCodec_QueryOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AudioCodec_QueryOutputBuffer(struct OH_AVCodec *codec, uint32_t *index, int64_t timeoutUs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在设置的超时时间内，尝试查询对应音频编解码器可用的输出缓冲区的索引值。获取到索引值后，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiocodec_getoutputbuffer",
        children: "OH_AudioCodec_GetOutputBuffer"
      }), "接口获取的输出缓冲区使用完后，"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiocodec_freeoutputbuffer",
        children: "OH_AudioCodec_FreeOutputBuffer"
      }), "接口进行释放。释放后无法再次使用，长期不释放会阻塞编解码流程。注意：此接口仅可在音频编解码的同步模式中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，获取到的输出缓冲区的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timeoutUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时时间，单位：微秒。设置为负值时表示无限等待。"
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
            children: ["AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：执行失败，输入参数错误。  AV_ERR_INVALID_STATE：执行失败，状态非法，没有启动编解码器等。  AV_ERR_OPERATE_NOT_PERMIT：执行失败，不允许非同步模式下调用。  AV_ERR_STREAM_CHANGED：解码输出流格式发生变化, 可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_getoutputdescription",
              children: "OH_AudioCodec_GetOutputDescription"
            }), "接口获取新的流信息。  AV_ERR_TRY_AGAIN_LATER：执行失败，超时时间内获取不到可用的缓冲区。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodec_getoutputbuffer",
      children: "OH_AudioCodec_GetOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVBuffer *OH_AudioCodec_GetOutputBuffer(struct OH_AVCodec *codec, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入索引值，获取对应音频编解码器中该索引值对应的输出缓冲区。注意：此接口仅可在音频编解码的同步模式中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioCodec"]
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
            children: "指向OH_AVCodec实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出缓冲区的索引值。该索引值通过接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodec_queryoutputbuffer",
              children: "OH_AudioCodec_QueryOutputBuffer"
            }), "获取。"]
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