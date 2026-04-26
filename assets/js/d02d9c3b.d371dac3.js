"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["791007"], {
79454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avcastcontroller_h_capi_native_avcastcontroller_h_md_d02_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-c-avsession-headerfile-capi-native-avcastcontroller-h-capi-native-avcastcontroller-h-md-d02.json
var site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avcastcontroller_h_capi_native_avcastcontroller_h_md_d02_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h","title":"native_avcastcontroller.h","description":"概述","source":"@site/docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h.md","sourceDirName":"avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h","slug":"/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"native_avcastcontroller.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcastcontroller-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avcastcontroller-h"},"sidebar":"ref","previous":{"title":"native_avsession_errors.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h"},"next":{"title":"native_avplaybackstate.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avplaybackstate-h/capi-native-avplaybackstate-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h.md


const frontMatter = {
	title: 'native_avcastcontroller.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcastcontroller-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avcastcontroller-h'
};
const contentTitle = 'native_avcastcontroller.h';

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
  "value": "OH_AVCastControllerCallback_PlaybackStateChanged()",
  "id": "oh_avcastcontrollercallback_playbackstatechanged",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_MediaItemChange()",
  "id": "oh_avcastcontrollercallback_mediaitemchange",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_PlayNext()",
  "id": "oh_avcastcontrollercallback_playnext",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_PlayPrevious()",
  "id": "oh_avcastcontrollercallback_playprevious",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_SeekDone()",
  "id": "oh_avcastcontrollercallback_seekdone",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_EndOfStream()",
  "id": "oh_avcastcontrollercallback_endofstream",
  "level": 3
}, {
  "value": "OH_AVCastControllerCallback_Error()",
  "id": "oh_avcastcontrollercallback_error",
  "level": 3
}, {
  "value": "OH_AVCastController_Destroy()",
  "id": "oh_avcastcontroller_destroy",
  "level": 3
}, {
  "value": "OH_AVCastController_GetPlaybackState()",
  "id": "oh_avcastcontroller_getplaybackstate",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterPlaybackStateChangedCallback()",
  "id": "oh_avcastcontroller_registerplaybackstatechangedcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterPlaybackStateChangedCallback()",
  "id": "oh_avcastcontroller_unregisterplaybackstatechangedcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterMediaItemChangedCallback()",
  "id": "oh_avcastcontroller_registermediaitemchangedcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterMediaItemChangedCallback()",
  "id": "oh_avcastcontroller_unregistermediaitemchangedcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterPlayNextCallback()",
  "id": "oh_avcastcontroller_registerplaynextcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterPlayNextCallback()",
  "id": "oh_avcastcontroller_unregisterplaynextcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterPlayPreviousCallback()",
  "id": "oh_avcastcontroller_registerplaypreviouscallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterPlayPreviousCallback()",
  "id": "oh_avcastcontroller_unregisterplaypreviouscallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterSeekDoneCallback()",
  "id": "oh_avcastcontroller_registerseekdonecallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterSeekDoneCallback()",
  "id": "oh_avcastcontroller_unregisterseekdonecallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterEndOfStreamCallback()",
  "id": "oh_avcastcontroller_registerendofstreamcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterEndOfStreamCallback()",
  "id": "oh_avcastcontroller_unregisterendofstreamcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_RegisterErrorCallback()",
  "id": "oh_avcastcontroller_registererrorcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_UnregisterErrorCallback()",
  "id": "oh_avcastcontroller_unregistererrorcallback",
  "level": 3
}, {
  "value": "OH_AVCastController_SendCommonCommand()",
  "id": "oh_avcastcontroller_sendcommoncommand",
  "level": 3
}, {
  "value": "OH_AVCastController_SendSeekCommand()",
  "id": "oh_avcastcontroller_sendseekcommand",
  "level": 3
}, {
  "value": "OH_AVCastController_SendFastForwardCommand()",
  "id": "oh_avcastcontroller_sendfastforwardcommand",
  "level": 3
}, {
  "value": "OH_AVCastController_SendRewindCommand()",
  "id": "oh_avcastcontroller_sendrewindcommand",
  "level": 3
}, {
  "value": "OH_AVCastController_SendSetSpeedCommand()",
  "id": "oh_avcastcontroller_sendsetspeedcommand",
  "level": 3
}, {
  "value": "OH_AVCastController_SendVolumeCommand()",
  "id": "oh_avcastcontroller_sendvolumecommand",
  "level": 3
}, {
  "value": "OH_AVCastController_Prepare()",
  "id": "oh_avcastcontroller_prepare",
  "level": 3
}, {
  "value": "OH_AVCastController_Start()",
  "id": "oh_avcastcontroller_start",
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
        id: "native_avcastcontrollerh",
        children: "native_avcastcontroller.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供播控控制器的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/av_session/native_avcastcontroller.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohavsession.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession",
        children: "OHAVSession"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播控控制器对象。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_createavcastcontroller",
              children: "OH_AVSession_CreateAVCastController"
            }), "方法创建指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avcastcontrollercallback_playbackstatechanged",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlaybackStateChanged)(OH_AVCastController* avcastcontroller, OH_AVSession_AVPlaybackState* playbackState, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_PlaybackStateChanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放状态改变的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_mediaitemchange",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_MediaItemChange)(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avQueueItem, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_MediaItemChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体项目变更的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_playnext",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlayNext)(OH_AVCastController* avcastcontroller, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_PlayNext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放下一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_playprevious",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlayPrevious)(OH_AVCastController* avcastcontroller, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_PlayPrevious"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放上一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_seekdone",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_SeekDone)(OH_AVCastController* avcastcontroller, int32_t position, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_SeekDone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索完成的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_endofstream",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_EndOfStream)(OH_AVCastController* avcastcontroller, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_EndOfStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放流结束的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontrollercallback_error",
              children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_Error)(OH_AVCastController* avcastcontroller, void* userData, AVSession_ErrCode error)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastControllerCallback_Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放错误的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_destroy",
              children: "AVSession_ErrCode OH_AVCastController_Destroy(OH_AVCastController* avcastcontroller)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求销毁播控控制器对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_getplaybackstate",
              children: "AVSession_ErrCode OH_AVCastController_GetPlaybackState(OH_AVCastController* avcastcontroller, OH_AVSession_AVPlaybackState** playbackState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取当前播放器的播放状态。不要单独释放playbackState指针。  当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy",
              children: "OH_AVCastController_Destroy"
            }), "被调用时播控控制器将被销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registerplaybackstatechangedcallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterPlaybackStateChangedCallback(OH_AVCastController* avcastcontroller, int32_t filter, OH_AVCastControllerCallback_PlaybackStateChanged callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册播放状态改变的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregisterplaybackstatechangedcallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterPlaybackStateChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlaybackStateChanged callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册播放状态改变的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registermediaitemchangedcallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterMediaItemChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_MediaItemChange callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册当前播放的媒体资源发生改变的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregistermediaitemchangedcallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterMediaItemChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_MediaItemChange callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册当前播放的媒体资源发生改变的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registerplaynextcallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterPlayNextCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayNext callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册由远程端或媒体中心发送的播放下一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregisterplaynextcallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterPlayNextCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayNext callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册由远程端或媒体中心发送的播放下一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registerplaypreviouscallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterPlayPreviousCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayPrevious callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册由远程端或媒体中心发送的播放上一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregisterplaypreviouscallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterPlayPreviousCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayPrevious callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册由远程端或媒体中心发送的播放上一首的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registerseekdonecallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterSeekDoneCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_SeekDone callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册搜索完成的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregisterseekdonecallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterSeekDoneCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_SeekDone callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册搜索完成的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registerendofstreamcallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterEndOfStreamCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_EndOfStream callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册播放流结束的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregisterendofstreamcallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterEndOfStreamCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_EndOfStream callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册播放流结束的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_registererrorcallback",
              children: "AVSession_ErrCode OH_AVCastController_RegisterErrorCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_Error callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求注册监听播放错误事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_unregistererrorcallback",
              children: "AVSession_ErrCode OH_AVCastController_UnregisterErrorCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_Error callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求取消注册监听播放错误事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendcommoncommand",
              children: "AVSession_ErrCode OH_AVCastController_SendCommonCommand(OH_AVCastController* avcastcontroller, AVSession_AVCastControlCommandType* avCastControlcommand)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求发送普通命令到远程端。只支持发送播放、暂停、停止、播放下一首和播放上一首等命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendseekcommand",
              children: "AVSession_ErrCode OH_AVCastController_SendSeekCommand(OH_AVCastController* avcastcontroller, int32_t seekTimeMS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求向远程端发送搜索命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendfastforwardcommand",
              children: "AVSession_ErrCode OH_AVCastController_SendFastForwardCommand(OH_AVCastController* avcastcontroller, int32_t forwardTimeS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求向远程端发送快进命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendrewindcommand",
              children: "AVSession_ErrCode OH_AVCastController_SendRewindCommand(OH_AVCastController* avcastcontroller, int32_t rewindTimeS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求向远程端发送后退命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendsetspeedcommand",
              children: "AVSession_ErrCode OH_AVCastController_SendSetSpeedCommand(OH_AVCastController* avcastcontroller, AVSession_PlaybackSpeed speed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求向远程端发送设置倍速命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_sendvolumecommand",
              children: "AVSession_ErrCode OH_AVCastController_SendVolumeCommand(OH_AVCastController* avcastcontroller, int32_t volume)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求向远程端发送音量控制命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_prepare",
              children: "AVSession_ErrCode OH_AVCastController_Prepare(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avqueueItem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求准备当前播放队列项，该操作是实现输出媒体信息展示的前置步骤。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avcastcontroller_start",
              children: "AVSession_ErrCode OH_AVCastController_Start(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avqueueItem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放当前项目的请求，应该包含媒体资源，否则将播放失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_playbackstatechanged",
      children: "OH_AVCastControllerCallback_PlaybackStateChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlaybackStateChanged)(OH_AVCastController* avcastcontroller, OH_AVSession_AVPlaybackState* playbackState, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放状态改变的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_mediaitemchange",
      children: "OH_AVCastControllerCallback_MediaItemChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_MediaItemChange)(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avQueueItem, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体项目变更的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_playnext",
      children: "OH_AVCastControllerCallback_PlayNext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlayNext)(OH_AVCastController* avcastcontroller, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放下一首的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_playprevious",
      children: "OH_AVCastControllerCallback_PlayPrevious()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_PlayPrevious)(OH_AVCastController* avcastcontroller, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放上一首的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_seekdone",
      children: "OH_AVCastControllerCallback_SeekDone()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_SeekDone)(OH_AVCastController* avcastcontroller, int32_t position, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搜索完成的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_endofstream",
      children: "OH_AVCastControllerCallback_EndOfStream()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_EndOfStream)(OH_AVCastController* avcastcontroller, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放流结束的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontrollercallback_error",
      children: "OH_AVCastControllerCallback_Error()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result(*OH_AVCastControllerCallback_Error)(OH_AVCastController* avcastcontroller, void* userData, AVSession_ErrCode error)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放错误的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_destroy",
      children: "OH_AVCastController_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_Destroy(OH_AVCastController* avcastcontroller)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求销毁播控控制器对象。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：参数avcastcontroller为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_getplaybackstate",
      children: "OH_AVCastController_GetPlaybackState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_GetPlaybackState(OH_AVCastController* avcastcontroller, OH_AVSession_AVPlaybackState** playbackState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取当前播放器的播放状态。不要单独释放playbackState指针。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy",
        children: "OH_AVCastController_Destroy"
      }), "被调用时播控控制器将被销毁。"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession-avplaybackstate/capi-ohavsession-oh-avsession-avplaybackstate",
              children: "OH_AVSession_AVPlaybackState"
            }), "** playbackState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的播放状态。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数playbackState为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registerplaybackstatechangedcallback",
      children: "OH_AVCastController_RegisterPlaybackStateChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterPlaybackStateChangedCallback(OH_AVCastController* avcastcontroller, int32_t filter, OH_AVCastControllerCallback_PlaybackStateChanged callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册播放状态改变的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t filter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过播放状态的过滤器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_playbackfilter",
              children: "AVSession_PlaybackFilter"
            }), "来决定需要包含在回调中的参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playbackstatechanged",
              children: "OH_AVCastControllerCallback_PlaybackStateChanged"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。  3. 参数filter是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregisterplaybackstatechangedcallback",
      children: "OH_AVCastController_UnregisterPlaybackStateChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterPlaybackStateChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlaybackStateChanged callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册播放状态改变的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playbackstatechanged",
              children: "OH_AVCastControllerCallback_PlaybackStateChanged"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registermediaitemchangedcallback",
      children: "OH_AVCastController_RegisterMediaItemChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterMediaItemChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_MediaItemChange callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册当前播放的媒体资源发生改变的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_mediaitemchange",
              children: "OH_AVCastControllerCallback_MediaItemChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregistermediaitemchangedcallback",
      children: "OH_AVCastController_UnregisterMediaItemChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterMediaItemChangedCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_MediaItemChange callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册当前播放的媒体资源发生改变的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_mediaitemchange",
              children: "OH_AVCastControllerCallback_MediaItemChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registerplaynextcallback",
      children: "OH_AVCastController_RegisterPlayNextCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterPlayNextCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayNext callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册由远程端或媒体中心发送的播放下一首的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playnext",
              children: "OH_AVCastControllerCallback_PlayNext"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregisterplaynextcallback",
      children: "OH_AVCastController_UnregisterPlayNextCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterPlayNextCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayNext callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册由远程端或媒体中心发送的播放下一首的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playnext",
              children: "OH_AVCastControllerCallback_PlayNext"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registerplaypreviouscallback",
      children: "OH_AVCastController_RegisterPlayPreviousCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterPlayPreviousCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayPrevious callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册由远程端或媒体中心发送的播放上一首的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playprevious",
              children: "OH_AVCastControllerCallback_PlayPrevious"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregisterplaypreviouscallback",
      children: "OH_AVCastController_UnregisterPlayPreviousCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterPlayPreviousCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_PlayPrevious callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册由远程端或媒体中心发送的播放上一首的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_playprevious",
              children: "OH_AVCastControllerCallback_PlayPrevious"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registerseekdonecallback",
      children: "OH_AVCastController_RegisterSeekDoneCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterSeekDoneCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_SeekDone callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册搜索完成的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_seekdone",
              children: "OH_AVCastControllerCallback_SeekDone"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregisterseekdonecallback",
      children: "OH_AVCastController_UnregisterSeekDoneCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterSeekDoneCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_SeekDone callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册搜索完成的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_seekdone",
              children: "OH_AVCastControllerCallback_SeekDone"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registerendofstreamcallback",
      children: "OH_AVCastController_RegisterEndOfStreamCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterEndOfStreamCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_EndOfStream callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册播放流结束的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_endofstream",
              children: "OH_AVCastControllerCallback_EndOfStream"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregisterendofstreamcallback",
      children: "OH_AVCastController_UnregisterEndOfStreamCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterEndOfStreamCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_EndOfStream callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册播放流结束的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_endofstream",
              children: "OH_AVCastControllerCallback_EndOfStream"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_registererrorcallback",
      children: "OH_AVCastController_RegisterErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_RegisterErrorCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_Error callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求注册监听播放错误事件的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_error",
              children: "OH_AVCastControllerCallback_Error"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户传递的用户数据。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_unregistererrorcallback",
      children: "OH_AVCastController_UnregisterErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_UnregisterErrorCallback(OH_AVCastController* avcastcontroller, OH_AVCastControllerCallback_Error callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消注册监听播放错误事件的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontrollercallback_error",
              children: "OH_AVCastControllerCallback_Error"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消注册的回调函数。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendcommoncommand",
      children: "OH_AVCastController_SendCommonCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendCommonCommand(OH_AVCastController* avcastcontroller, AVSession_AVCastControlCommandType* avCastControlcommand)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求发送普通命令到远程端。只支持发送播放、暂停、停止、播放下一首和播放上一首等命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_avcastcontrolcommandtype",
              children: "AVSession_AVCastControlCommandType"
            }), "* avCastControlcommand"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：参数avcastcontroller为nullptr。  AV_SESSION_ERR_CODE_COMMAND_INVALID：参数avCastControlcommand是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendseekcommand",
      children: "OH_AVCastController_SendSeekCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendSeekCommand(OH_AVCastController* avcastcontroller, int32_t seekTimeMS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求向远程端发送搜索命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t seekTimeMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "寻找时间。单位为毫秒。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数seekTimeMS是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendfastforwardcommand",
      children: "OH_AVCastController_SendFastForwardCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendFastForwardCommand(OH_AVCastController* avcastcontroller, int32_t forwardTimeS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求向远程端发送快进命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t forwardTimeS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进时间。单位为秒。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数forwardTimeS是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendrewindcommand",
      children: "OH_AVCastController_SendRewindCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendRewindCommand(OH_AVCastController* avcastcontroller, int32_t rewindTimeS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求向远程端发送后退命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t rewindTimeS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后退时间。单位为秒。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数rewindTimeS是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendsetspeedcommand",
      children: "OH_AVCastController_SendSetSpeedCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendSetSpeedCommand(OH_AVCastController* avcastcontroller, AVSession_PlaybackSpeed speed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求向远程端发送设置倍速命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_playbackspeed",
              children: "AVSession_PlaybackSpeed"
            }), " speed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倍速控制命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数speed是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_sendvolumecommand",
      children: "OH_AVCastController_SendVolumeCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_SendVolumeCommand(OH_AVCastController* avcastcontroller, int32_t volume)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求向远程端发送音量控制命令。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量控制。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数volume是无效的。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_prepare",
      children: "OH_AVCastController_Prepare()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_Prepare(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avqueueItem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求准备当前播放队列项，该操作是实现输出媒体信息展示的前置步骤。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession-avqueueitem/capi-ohavsession-oh-avsession-avqueueitem",
              children: "OH_AVSession_AVQueueItem"
            }), "* avqueueItem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频队列项。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数avqueueItem为nullptr。  AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST：远程连接未建立。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avcastcontroller_start",
      children: "OH_AVCastController_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVCastController_Start(OH_AVCastController* avcastcontroller, OH_AVSession_AVQueueItem* avqueueItem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放当前项目的请求，应该包含媒体资源，否则将播放失败。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "* avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控控制器的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession-avqueueitem/capi-ohavsession-oh-avsession-avqueueitem",
              children: "OH_AVSession_AVQueueItem"
            }), "* avqueueItem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频队列项。"
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avcastcontroller为nullptr。  2. 参数avqueueItem为nullptr。"
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