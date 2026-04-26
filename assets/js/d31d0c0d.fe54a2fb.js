"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["233617"], {
750786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_audio_sink_base_h_capi_lowpower_audio_sink_base_h_md_d31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-lowpower-audio-sink-base-h-capi-lowpower-audio-sink-base-h-md-d31.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_audio_sink_base_h_capi_lowpower_audio_sink_base_h_md_d31_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h","title":"lowpower_audio_sink_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h","slug":"/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"lowpower_audio_sink_base.h","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-audio-sink-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-lowpower-audio-sink-base-h"},"sidebar":"ref","previous":{"title":"lowpower_audio_sink.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h"},"next":{"title":"lowpower_avsink_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-avsink-base-h/capi-lowpower-avsink-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h.md


const frontMatter = {
	title: 'lowpower_audio_sink_base.h',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-audio-sink-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-lowpower-audio-sink-base-h'
};
const contentTitle = 'lowpower_audio_sink_base.h';

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
  "value": "OH_LowPowerAudioSink_OnError()",
  "id": "oh_lowpoweraudiosink_onerror",
  "level": 3
}, {
  "value": "OH_LowPowerAudioSink_OnPositionUpdated()",
  "id": "oh_lowpoweraudiosink_onpositionupdated",
  "level": 3
}, {
  "value": "OH_LowPowerAudioSink_OnDataNeeded()",
  "id": "oh_lowpoweraudiosink_ondataneeded",
  "level": 3
}, {
  "value": "OH_LowPowerAudioSink_OnInterrupted()",
  "id": "oh_lowpoweraudiosink_oninterrupted",
  "level": 3
}, {
  "value": "OH_LowPowerAudioSink_OnDeviceChanged()",
  "id": "oh_lowpoweraudiosink_ondevicechanged",
  "level": 3
}, {
  "value": "OH_LowPowerAudioSink_OnEos()",
  "id": "oh_lowpoweraudiosink_oneos",
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
        id: "lowpower_audio_sink_baseh",
        children: "lowpower_audio_sink_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义LowPowerAudioSink的结构体和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/lowpower_audio_sink_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " liblowpower_avsink.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.LowPowerAVSink"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-lowpoweraudiosink/capi-lowpoweraudiosink",
        children: "LowPowerAudioSink"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink的声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback",
              children: "OH_LowPowerAudioSinkCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSinkCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包含了LowPowerAudioSink回调函数指针的集合。  应用需注册此实例结构体到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "实例中，并对回调上报的信息进行处理，保证LowPowerAudioSink的正常运行。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#oh_lowpoweraudiosink_onerror",
              children: "typedef void (*OH_LowPowerAudioSink_OnError)(OH_LowPowerAudioSink* sink, OH_AVErrCode errCode, const char* errorMsg, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink发生错误时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpoweraudiosink_onpositionupdated",
              children: "typedef void (*OH_LowPowerAudioSink_OnPositionUpdated)(OH_LowPowerAudioSink* sink, int64_t currentPosition, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnPositionUpdated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink进度更新时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpoweraudiosink_ondataneeded",
              children: "typedef void (*OH_LowPowerAudioSink_OnDataNeeded)(OH_LowPowerAudioSink* sink, OH_AVSamplesBuffer* samples, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnDataNeeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink需要数据时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpoweraudiosink_oninterrupted",
              children: "typedef void (*OH_LowPowerAudioSink_OnInterrupted)(OH_LowPowerAudioSink* sink, OH_AudioInterrupt_ForceType type, OH_AudioInterrupt_Hint hint, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnInterrupted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink焦点打断时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpoweraudiosink_ondevicechanged",
              children: "typedef void (*OH_LowPowerAudioSink_OnDeviceChanged)(OH_LowPowerAudioSink* sink, OH_AudioStream_DeviceChangeReason reason, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnDeviceChanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerAudioSink设备切换时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpoweraudiosink_oneos",
              children: "typedef void (*OH_LowPowerAudioSink_OnEos)(OH_LowPowerAudioSink* sink, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerAudioSink_OnEos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerAudioSink播放完成时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback",
              children: "OH_LowPowerAudioSinkCallback"
            }), "中。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_onerror",
      children: "OH_LowPowerAudioSink_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnError)(OH_LowPowerAudioSink* sink,OH_AVErrCode errCode,const char* errorMsg,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerAudioSink发生错误时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            }), " errCode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生错误时上报的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* errorMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_onpositionupdated",
      children: "OH_LowPowerAudioSink_OnPositionUpdated()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnPositionUpdated)(OH_LowPowerAudioSink* sink,int64_t currentPosition,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerAudioSink进度更新时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t currentPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回服务当前播放的进度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_ondataneeded",
      children: "OH_LowPowerAudioSink_OnDataNeeded()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnDataNeeded)(OH_LowPowerAudioSink* sink,OH_AVSamplesBuffer* samples,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerAudioSink需要数据时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avsinkbase-oh-avsamplesbuffer/capi-avsinkbase-oh-avsamplesbuffer",
              children: "OH_AVSamplesBuffer"
            }), "* samples"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将写入的AVSamplesBuffer实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_oninterrupted",
      children: "OH_LowPowerAudioSink_OnInterrupted()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnInterrupted)(OH_LowPowerAudioSink* sink,OH_AudioInterrupt_ForceType type,OH_AudioInterrupt_Hint hint,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerAudioSink焦点打断时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_forcetype",
              children: "OH_AudioInterrupt_ForceType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频打断类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint",
              children: "OH_AudioInterrupt_Hint"
            }), " hint"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频打断提示类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_ondevicechanged",
      children: "OH_LowPowerAudioSink_OnDeviceChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnDeviceChanged)(OH_LowPowerAudioSink* sink,OH_AudioStream_DeviceChangeReason reason,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerAudioSink设备切换时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), " reason"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出设备发生变化的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpoweraudiosink_oneos",
      children: "OH_LowPowerAudioSink_OnEos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerAudioSink_OnEos)(OH_LowPowerAudioSink* sink, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerAudioSink播放完成时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback",
        children: "OH_LowPowerAudioSinkCallback"
      }), "中。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
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