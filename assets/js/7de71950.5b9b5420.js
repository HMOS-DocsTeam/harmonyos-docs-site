"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["608420"], {
985058(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_video_sink_base_h_capi_lowpower_video_sink_base_h_md_7de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-lowpower-video-sink-base-h-capi-lowpower-video-sink-base-h-md-7de.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_video_sink_base_h_capi_lowpower_video_sink_base_h_md_7de_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h","title":"lowpower_video_sink_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h","slug":"/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"lowpower_video_sink_base.h","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-video-sink-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-lowpower-video-sink-base-h"},"sidebar":"ref","previous":{"title":"lowpower_video_sink.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h"},"next":{"title":"video_processing.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h.md


const frontMatter = {
	title: 'lowpower_video_sink_base.h',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-video-sink-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-lowpower-video-sink-base-h'
};
const contentTitle = 'lowpower_video_sink_base.h';

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
  "value": "OH_LowPowerVideoSink_OnDataNeeded()",
  "id": "oh_lowpowervideosink_ondataneeded",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnError()",
  "id": "oh_lowpowervideosink_onerror",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnTargetArrived()",
  "id": "oh_lowpowervideosink_ontargetarrived",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnRenderStarted()",
  "id": "oh_lowpowervideosink_onrenderstarted",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnStreamChanged()",
  "id": "oh_lowpowervideosink_onstreamchanged",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnFirstFrameDecoded()",
  "id": "oh_lowpowervideosink_onfirstframedecoded",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_OnEos()",
  "id": "oh_lowpowervideosink_oneos",
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
        id: "lowpower_video_sink_baseh",
        children: "lowpower_video_sink_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义LowPowerVideoSink的结构体和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/lowpower_video_sink_base.h>"]
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
        href: "/ref/media-api/media-c/media-module/capi-lowpowervideosink/capi-lowpowervideosink",
        children: "LowPowerVideoSink"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerVideoSink声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSinkCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包含了LowPowerVideoSink回调函数指针的集合。  应用需注册此实例结构体到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "实例中，并对回调上报的信息进行处理，保证LowPowerVideoSink的正常运行。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_lowpowervideosink_ondataneeded",
              children: "typedef void (*OH_LowPowerVideoSink_OnDataNeeded)(OH_LowPowerVideoSink* sink, OH_AVSamplesBuffer* buffer, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnDataNeeded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink需要数据时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_onerror",
              children: "typedef void (*OH_LowPowerVideoSink_OnError)(OH_LowPowerVideoSink* sink, OH_AVErrCode errCode, const char* errMsg, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerVideoSink发生错误时调用该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_ontargetarrived",
              children: "typedef void (*OH_LowPowerVideoSink_OnTargetArrived)(OH_LowPowerVideoSink* sink, const int64_t targetPts, const bool isTimeout, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnTargetArrived"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink到达目标点时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_onrenderstarted",
              children: "typedef void (*OH_LowPowerVideoSink_OnRenderStarted)(OH_LowPowerVideoSink* sink, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnRenderStarted"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink开始渲染时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_onstreamchanged",
              children: "typedef void (*OH_LowPowerVideoSink_OnStreamChanged)(OH_LowPowerVideoSink* sink, OH_AVFormat* format, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnStreamChanged"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink流切换调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_onfirstframedecoded",
              children: "typedef void (*OH_LowPowerVideoSink_OnFirstFrameDecoded)(OH_LowPowerVideoSink* sink, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnFirstFrameDecoded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink第一帧解码成功时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_oneos",
              children: "typedef void (*OH_LowPowerVideoSink_OnEos)(OH_LowPowerVideoSink* sink, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnEos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LowPowerVideoSink播放完成时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "中。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_ondataneeded",
      children: "OH_LowPowerVideoSink_OnDataNeeded()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnDataNeeded)(OH_LowPowerVideoSink* sink,OH_AVSamplesBuffer* buffer,void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink需要数据时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avsinkbase-oh-avsamplesbuffer/capi-avsinkbase-oh-avsamplesbuffer",
              children: "OH_AVSamplesBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVSamplesBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_onerror",
      children: "OH_LowPowerVideoSink_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnError)(OH_LowPowerVideoSink* sink,OH_AVErrCode errCode,const char* errMsg,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerVideoSink发生错误时调用该方法。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            }), " errCode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务操作过程中发生错误时返回的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* errMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务操作过程中发生错误时返回的错误描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_ontargetarrived",
      children: "OH_LowPowerVideoSink_OnTargetArrived()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnTargetArrived)(OH_LowPowerVideoSink* sink,const int64_t targetPts,const bool isTimeout,void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink到达目标点时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t targetPts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点的pts。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const bool isTimeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示等待目标点是否超时。若为true，表示等待目标点超时；若为false，则表示未超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_onrenderstarted",
      children: "OH_LowPowerVideoSink_OnRenderStarted()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnRenderStarted)(OH_LowPowerVideoSink* sink, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink开始渲染时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_onstreamchanged",
      children: "OH_LowPowerVideoSink_OnStreamChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnStreamChanged)(OH_LowPowerVideoSink* sink, OH_AVFormat* format, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink流切换调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含变化的参数和对应的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_onfirstframedecoded",
      children: "OH_LowPowerVideoSink_OnFirstFrameDecoded()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnFirstFrameDecoded)(OH_LowPowerVideoSink* sink, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink第一帧解码成功时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_oneos",
      children: "OH_LowPowerVideoSink_OnEos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_LowPowerVideoSink_OnEos)(OH_LowPowerVideoSink* sink, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerVideoSink播放完成时调用该方法，包含在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
        children: "OH_LowPowerVideoSinkCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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