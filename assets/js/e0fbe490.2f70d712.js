"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465377"], {
242833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avsession_h_capi_native_avsession_h_md_e0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-c-avsession-headerfile-capi-native-avsession-h-capi-native-avsession-h-md-e0f.json
var site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avsession_h_capi_native_avsession_h_md_e0f_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h","title":"native_avsession.h","description":"概述","source":"@site/docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h.md","sourceDirName":"avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h","slug":"/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"native_avsession.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avsession-h"},"sidebar":"ref","previous":{"title":"native_avmetadata.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h"},"next":{"title":"native_avsession_errors.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h.md


const frontMatter = {
	title: 'native_avsession.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avsession-h'
};
const contentTitle = 'native_avsession.h';

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
  "value": "OH_AVSessionCallback_OnCommand()",
  "id": "oh_avsessioncallback_oncommand",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OnFastForward()",
  "id": "oh_avsessioncallback_onfastforward",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OnRewind()",
  "id": "oh_avsessioncallback_onrewind",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OnSeek()",
  "id": "oh_avsessioncallback_onseek",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OnSetLoopMode()",
  "id": "oh_avsessioncallback_onsetloopmode",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OnToggleFavorite()",
  "id": "oh_avsessioncallback_ontogglefavorite",
  "level": 3
}, {
  "value": "OH_AVSessionCallback_OutputDeviceChange()",
  "id": "oh_avsessioncallback_outputdevicechange",
  "level": 3
}, {
  "value": "OH_AVSession_Create()",
  "id": "oh_avsession_create",
  "level": 3
}, {
  "value": "OH_AVSession_Destroy()",
  "id": "oh_avsession_destroy",
  "level": 3
}, {
  "value": "OH_AVSession_Activate()",
  "id": "oh_avsession_activate",
  "level": 3
}, {
  "value": "OH_AVSession_Deactivate()",
  "id": "oh_avsession_deactivate",
  "level": 3
}, {
  "value": "OH_AVSession_GetSessionType()",
  "id": "oh_avsession_getsessiontype",
  "level": 3
}, {
  "value": "OH_AVSession_GetSessionId()",
  "id": "oh_avsession_getsessionid",
  "level": 3
}, {
  "value": "OH_AVSession_SetAVMetadata()",
  "id": "oh_avsession_setavmetadata",
  "level": 3
}, {
  "value": "OH_AVSession_SetPlaybackState()",
  "id": "oh_avsession_setplaybackstate",
  "level": 3
}, {
  "value": "OH_AVSession_SetPlaybackPosition()",
  "id": "oh_avsession_setplaybackposition",
  "level": 3
}, {
  "value": "OH_AVSession_SetFavorite()",
  "id": "oh_avsession_setfavorite",
  "level": 3
}, {
  "value": "OH_AVSession_SetLoopMode()",
  "id": "oh_avsession_setloopmode",
  "level": 3
}, {
  "value": "OH_AVSession_SetRemoteCastEnabled()",
  "id": "oh_avsession_setremotecastenabled",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterCommandCallback()",
  "id": "oh_avsession_registercommandcallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterCommandCallback()",
  "id": "oh_avsession_unregistercommandcallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterForwardCallback()",
  "id": "oh_avsession_registerforwardcallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterForwardCallback()",
  "id": "oh_avsession_unregisterforwardcallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterRewindCallback()",
  "id": "oh_avsession_registerrewindcallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterRewindCallback()",
  "id": "oh_avsession_unregisterrewindcallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterSeekCallback()",
  "id": "oh_avsession_registerseekcallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterSeekCallback()",
  "id": "oh_avsession_unregisterseekcallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterSetLoopModeCallback()",
  "id": "oh_avsession_registersetloopmodecallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterSetLoopModeCallback()",
  "id": "oh_avsession_unregistersetloopmodecallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterToggleFavoriteCallback()",
  "id": "oh_avsession_registertogglefavoritecallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterToggleFavoriteCallback()",
  "id": "oh_avsession_unregistertogglefavoritecallback",
  "level": 3
}, {
  "value": "OH_AVSession_RegisterOutputDeviceChangeCallback()",
  "id": "oh_avsession_registeroutputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AVSession_UnregisterOutputDeviceChangeCallback()",
  "id": "oh_avsession_unregisteroutputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AVSession_AcquireSession()",
  "id": "oh_avsession_acquiresession",
  "level": 3
}, {
  "value": "OH_AVSession_CreateAVCastController()",
  "id": "oh_avsession_createavcastcontroller",
  "level": 3
}, {
  "value": "OH_AVSession_StopCasting()",
  "id": "oh_avsession_stopcasting",
  "level": 3
}, {
  "value": "OH_AVSession_AcquireOutputDevice()",
  "id": "oh_avsession_acquireoutputdevice",
  "level": 3
}, {
  "value": "OH_AVSession_ReleaseOutputDevice()",
  "id": "oh_avsession_releaseoutputdevice",
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
        id: "native_avsessionh",
        children: "native_avsession.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体会话定义，可用于设置元数据、播放状态信息等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/av_session/native_avsession.h>"]
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
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSession"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义播控会话对象。播控会话对象可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_create",
              children: "OH_AVSession_Create"
            }), "方法创建。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCastController"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["声明投播控制器对象。投播控制器对象可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_createavcastcontroller",
              children: "OH_AVSession_CreateAVCastController"
            }), "方法创建。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avsessioncallback_oncommand",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnCommand)(OH_AVSession* session, AVSession_ControlCommand command, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnCommand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用的执行播控命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_onfastforward",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnFastForward)(OH_AVSession* session, uint32_t seekTime, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnFastForward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_onrewind",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnRewind)(OH_AVSession* session, uint32_t seekTime, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnRewind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快退的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_onseek",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSeek)(OH_AVSession* session, uint64_t seekTime, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnSeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度调节的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_onsetloopmode",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSetLoopMode)(OH_AVSession* session, AVSession_LoopMode curLoopMode, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnSetLoopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环模式的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_ontogglefavorite",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnToggleFavorite)(OH_AVSession* session, const char* assetId, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OnToggleFavorite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收藏的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsessioncallback_outputdevicechange",
              children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OutputDeviceChange)(OH_AVSession* session, AVSession_ConnectionState state, AVSession_OutputDeviceInfo* outputDeviceInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSessionCallback_OutputDeviceChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备变化的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_create",
              children: "AVSession_ErrCode OH_AVSession_Create(AVSession_Type sessionType, const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_destroy",
              children: "AVSession_ErrCode OH_AVSession_Destroy(OH_AVSession* avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_activate",
              children: "AVSession_ErrCode OH_AVSession_Activate(OH_AVSession* avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_deactivate",
              children: "AVSession_ErrCode OH_AVSession_Deactivate(OH_AVSession* avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消激活媒体会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_getsessiontype",
              children: "AVSession_ErrCode OH_AVSession_GetSessionType(OH_AVSession* avsession, AVSession_Type* sessionType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_getsessionid",
              children: "AVSession_ErrCode OH_AVSession_GetSessionId(OH_AVSession* avsession, const char** sessionId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setavmetadata",
              children: "AVSession_ErrCode OH_AVSession_SetAVMetadata(OH_AVSession* avsession, OH_AVMetadata* avmetadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setplaybackstate",
              children: "AVSession_ErrCode OH_AVSession_SetPlaybackState(OH_AVSession* avsession, AVSession_PlaybackState playbackState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置播放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setplaybackposition",
              children: "AVSession_ErrCode OH_AVSession_SetPlaybackPosition(OH_AVSession* avsession, AVSession_PlaybackPosition* playbackPosition)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置播放位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setfavorite",
              children: "AVSession_ErrCode OH_AVSession_SetFavorite(OH_AVSession* avsession, bool favorite)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置收藏状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setloopmode",
              children: "AVSession_ErrCode OH_AVSession_SetLoopMode(OH_AVSession* avsession, AVSession_LoopMode loopMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_setremotecastenabled",
              children: "AVSession_ErrCode OH_AVSession_SetRemoteCastEnabled(OH_AVSession* avsession, bool enabled)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求使能远程投播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registercommandcallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册通用播控的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregistercommandcallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册通用播控的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registerforwardcallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册快进的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregisterforwardcallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册快进的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registerrewindcallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册快退的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregisterrewindcallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册快退的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registerseekcallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册跳转的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregisterseekcallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册跳转的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registersetloopmodecallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设置循环模式的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregistersetloopmodecallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设置循环模式的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registertogglefavoritecallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置收藏的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregistertogglefavoritecallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消设置收藏的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_registeroutputdevicechangecallback",
              children: "AVSession_ErrCode OH_AVSession_RegisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备变化的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_unregisteroutputdevicechangecallback",
              children: "AVSession_ErrCode OH_AVSession_UnregisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设备变化的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_acquiresession",
              children: "AVSession_ErrCode OH_AVSession_AcquireSession(const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取已经存在的媒体会话对象。当不再使用媒体会话对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_destroy",
              children: "OH_AVSession_Destroy"
            }), "进行释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_createavcastcontroller",
              children: "AVSession_ErrCode OH_AVSession_CreateAVCastController(OH_AVSession* avsession, OH_AVCastController** avcastcontroller)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建投播控制器对象。当投播控制器对象不再使用时，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy",
              children: "OH_AVCastController_Destroy"
            }), "进行释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_stopcasting",
              children: "AVSession_ErrCode OH_AVSession_StopCasting(OH_AVSession* avsession)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止当前投播并断开设备连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_acquireoutputdevice",
              children: "AVSession_ErrCode OH_AVSession_AcquireOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo** outputDeviceInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前输出设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avsession_releaseoutputdevice",
              children: "AVSession_ErrCode OH_AVSession_ReleaseOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo *outputDeviceInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放输出设备对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_oncommand",
      children: "OH_AVSessionCallback_OnCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnCommand)(OH_AVSession* session, AVSession_ControlCommand command, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用的执行播控命令的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_onfastforward",
      children: "OH_AVSessionCallback_OnFastForward()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnFastForward)(OH_AVSession* session, uint32_t seekTime, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快进的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_onrewind",
      children: "OH_AVSessionCallback_OnRewind()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnRewind)(OH_AVSession* session, uint32_t seekTime, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快退的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_onseek",
      children: "OH_AVSessionCallback_OnSeek()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSeek)(OH_AVSession* session, uint64_t seekTime, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度调节的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_onsetloopmode",
      children: "OH_AVSessionCallback_OnSetLoopMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSetLoopMode)(OH_AVSession* session, AVSession_LoopMode curLoopMode, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置循环模式的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_ontogglefavorite",
      children: "OH_AVSessionCallback_OnToggleFavorite()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnToggleFavorite)(OH_AVSession* session, const char* assetId, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收藏的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsessioncallback_outputdevicechange",
      children: "OH_AVSessionCallback_OutputDeviceChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef AVSessionCallback_Result (*OH_AVSessionCallback_OutputDeviceChange)(OH_AVSession* session, AVSession_ConnectionState state, AVSession_OutputDeviceInfo* outputDeviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备变化的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_create",
      children: "OH_AVSession_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_Create(AVSession_Type sessionType, const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建会话对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_type",
              children: "AVSession_Type"
            }), " sessionType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会话类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_type",
              children: "AVSession_Type"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* sessionTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话的ability名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "** avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的媒体会话对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数sessionType无效。  2. 参数sessionTag为nullptr。  3. 参数bundleName为nullptr。  4. 参数abilityName为nullptr。  5. 参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_destroy",
      children: "OH_AVSession_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_Destroy(OH_AVSession* avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁会话对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_activate",
      children: "OH_AVSession_Activate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_Activate(OH_AVSession* avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_deactivate",
      children: "OH_AVSession_Deactivate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_Deactivate(OH_AVSession* avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消激活媒体会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_getsessiontype",
      children: "OH_AVSession_GetSessionType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_GetSessionType(OH_AVSession* avsession, AVSession_Type* sessionType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取会话类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_type",
              children: "AVSession_Type"
            }), "* sessionType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的会话类型。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数sessionType为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_getsessionid",
      children: "OH_AVSession_GetSessionId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_GetSessionId(OH_AVSession* avsession, const char** sessionId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取会话id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char** sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的会话类型id。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数sessionId为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setavmetadata",
      children: "OH_AVSession_SetAVMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetAVMetadata(OH_AVSession* avsession, OH_AVMetadata* avmetadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置媒体元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avmetadatastruct/capi-ohavsession-oh-avmetadatastruct",
              children: "OH_AVMetadata"
            }), "* avmetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体元数据信息。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数avmetadata为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setplaybackstate",
      children: "OH_AVSession_SetPlaybackState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetPlaybackState(OH_AVSession* avsession, AVSession_PlaybackState playbackState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置播放状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_playbackstate",
              children: "AVSession_PlaybackState"
            }), " playbackState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放状态。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数playbackState是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setplaybackposition",
      children: "OH_AVSession_SetPlaybackPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetPlaybackPosition(OH_AVSession* avsession, AVSession_PlaybackPosition* playbackPosition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置播放位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-avsession-playbackposition/capi-ohavsession-avsession-playbackposition",
              children: "AVSession_PlaybackPosition"
            }), "* playbackPosition"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放位置对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数playbackPosition为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setfavorite",
      children: "OH_AVSession_SetFavorite()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetFavorite(OH_AVSession* avsession, bool favorite)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置收藏状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool favorite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收藏状态，true表示收藏，false表示取消收藏。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setloopmode",
      children: "OH_AVSession_SetLoopMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetLoopMode(OH_AVSession* avsession, AVSession_LoopMode loopMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置循环模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_loopmode",
              children: "AVSession_LoopMode"
            }), " loopMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "循环模式。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数loopMode是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_setremotecastenabled",
      children: "OH_AVSession_SetRemoteCastEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_SetRemoteCastEnabled(OH_AVSession* avsession, bool enabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求使能远程投播。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能远程投播。true表示使能，false表示不使能。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registercommandcallback",
      children: "OH_AVSession_RegisterCommandCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册通用播控的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_controlcommand",
              children: "AVSession_ControlCommand"
            }), " command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控的控制命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_oncommand",
              children: "OH_AVSessionCallback_OnCommand"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_CODE_COMMAND_INVALID：控制命令无效。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregistercommandcallback",
      children: "OH_AVSession_UnregisterCommandCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册通用播控的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-base-h/capi-native-avsession-base-h#avsession_controlcommand",
              children: "AVSession_ControlCommand"
            }), " command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控的控制命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_oncommand",
              children: "OH_AVSessionCallback_OnCommand"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_CODE_COMMAND_INVALID：控制命令无效。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registerforwardcallback",
      children: "OH_AVSession_RegisterForwardCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册快进的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onfastforward",
              children: "OH_AVSessionCallback_OnFastForward"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregisterforwardcallback",
      children: "OH_AVSession_UnregisterForwardCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册快进的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onfastforward",
              children: "OH_AVSessionCallback_OnFastForward"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registerrewindcallback",
      children: "OH_AVSession_RegisterRewindCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册快退的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onrewind",
              children: "OH_AVSessionCallback_OnRewind"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快退命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregisterrewindcallback",
      children: "OH_AVSession_UnregisterRewindCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册快退的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onrewind",
              children: "OH_AVSessionCallback_OnRewind"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快退命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registerseekcallback",
      children: "OH_AVSession_RegisterSeekCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册跳转的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onseek",
              children: "OH_AVSessionCallback_OnSeek"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregisterseekcallback",
      children: "OH_AVSession_UnregisterSeekCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册跳转的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onseek",
              children: "OH_AVSessionCallback_OnSeek"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registersetloopmodecallback",
      children: "OH_AVSession_RegisterSetLoopModeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册设置循环模式的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onsetloopmode",
              children: "OH_AVSessionCallback_OnSetLoopMode"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环模式命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregistersetloopmodecallback",
      children: "OH_AVSession_UnregisterSetLoopModeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册设置循环模式的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_onsetloopmode",
              children: "OH_AVSessionCallback_OnSetLoopMode"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环模式命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registertogglefavoritecallback",
      children: "OH_AVSession_RegisterToggleFavoriteCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置收藏的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_ontogglefavorite",
              children: "OH_AVSessionCallback_OnToggleFavorite"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置收藏命令的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregistertogglefavoritecallback",
      children: "OH_AVSession_UnregisterToggleFavoriteCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消设置收藏的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_ontogglefavorite",
              children: "OH_AVSessionCallback_OnToggleFavorite"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置收藏命令的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_registeroutputdevicechangecallback",
      children: "OH_AVSession_RegisterOutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_RegisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册设备变化的回调。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_outputdevicechange",
              children: "OH_AVSessionCallback_OutputDeviceChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置设备变化的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_unregisteroutputdevicechangecallback",
      children: "OH_AVSession_UnregisterOutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_UnregisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册设备变化的回调。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsessioncallback_outputdevicechange",
              children: "OH_AVSessionCallback_OutputDeviceChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置设备变化的回调。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_acquiresession",
      children: "OH_AVSession_AcquireSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_AcquireSession(const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取已经存在的媒体会话对象。当不再使用媒体会话对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_destroy",
        children: "OH_AVSession_Destroy"
      }), "进行释放。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* sessionTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用设置的会话自定义标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Ability组件名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "** avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收OH_AVSession的变量指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数sessionTag无效。  2. 参数bundleName无效。  3. 参数abilityName无效。  4. 参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_createavcastcontroller",
      children: "OH_AVSession_CreateAVCastController()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_CreateAVCastController(OH_AVSession* avsession, OH_AVCastController** avcastcontroller)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建投播控制器对象。当投播控制器对象不再使用时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy",
        children: "OH_AVCastController_Destroy"
      }), "进行释放。"]
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avcastcontroller/capi-ohavsession-oh-avcastcontroller",
              children: "OH_AVCastController"
            }), "** avcastcontroller"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用于接收投播控制器OH_AVCastController的变量的指针。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数avcastcontroller为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_stopcasting",
      children: "OH_AVSession_StopCasting()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_StopCasting(OH_AVSession* avsession)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止当前投播并断开设备连接。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_acquireoutputdevice",
      children: "OH_AVSession_AcquireOutputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_AcquireOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo** outputDeviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前输出设备。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-avsession-outputdeviceinfo/capi-ohavsession-avsession-outputdeviceinfo",
              children: "AVSession_OutputDeviceInfo"
            }), "** outputDeviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向用于接收输出设备信息AVSession_OutputDeviceInfo的变量的指针。不可以单独释放outputDeviceInfo指针。当不再使用outputDeviceInfo时，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h#oh_avsession_releaseoutputdevice",
              children: "OH_AVSession_ReleaseOutputDevice"
            }), "进行释放。"]
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数outputDeviceInfo为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avsession_releaseoutputdevice",
      children: "OH_AVSession_ReleaseOutputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AVSession_ErrCode OH_AVSession_ReleaseOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo *outputDeviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放输出设备对象。"
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
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession/capi-ohavsession-oh-avsession",
              children: "OH_AVSession"
            }), "* avsession"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-avsession-outputdeviceinfo/capi-ohavsession-avsession-outputdeviceinfo",
              children: "AVSession_OutputDeviceInfo"
            }), " *outputDeviceInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应当释放的输出设备。"
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
            children: "AV_SESSION_ERR_SUCCESS：函数执行成功。  AV_SESSION_ERR_INVALID_PARAMETER：  1. 参数avsession为nullptr。  2. 参数outputDeviceInfo为nullptr。"
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